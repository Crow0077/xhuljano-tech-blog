---
title: "The Bug That Took 218 Tools and Made Them All Useless"
date: 2026-05-21
draft: false
tags: ["mcp", "blender", "debugging", "python", "linux", "systemd", "homelab"]
categories: ["Engineering"]
summary: "Blender registered all 218 MCP tools successfully. Every single one timed out. Here's the root cause, the dead giveaway, and the threaded fix."
ShowToc: true
---

I had Blender running as an MCP server on my homelab. Two hundred and eighteen tools — everything from mesh extrusion to physics simulation to AI texture generation. Heremes connected fine. The server started. The port was open. But every tool call hung until it timed out.

Here's how I found the bug, what caused it, and what I built to fix it.

## The Symptom

The MCP bridge connects to Blender over TCP on port 9876. The handshake succeeds. Tool discovery returns 218 tools. Everything looks healthy.

But `hermes mcp test blender` — which actually calls a tool — times out at 30 seconds. Every time. Port 9876 shows `LISTENING`. Netcat connects. You send a JSON-RPC request. Silence. Eight seconds. Ten. Nothing comes back.

```bash
$ ss -tlnp | grep 9876
LISTEN  0  128  127.0.0.1:9876  0.0.0.0:*  pid=18472

$ echo '{"jsonrpc":"2.0","method":"get_version","id":1}' | nc 127.0.0.1 9876
[no response — hangs forever]
```

The TCP stack works. The application layer doesn't.

## The Dead Giveaway

The bridge test succeeds, but the tool call fails. That's the clue.

Tool discovery happens in the bridge itself — it reads the addon's tool definitions from a file. Tool calls go through the bridge, across TCP, into Blender's Python process, and wait for a response. The bridge was fine. Blender was the black hole.

I checked the startup script:

```python
# Original startup — looks innocent
while True:
    time.sleep(10)
```

Ten seconds of sleep in an infinite loop. It keeps the Blender background process alive. It also keeps the event loop from doing anything else.

## Why `time.sleep()` Killed Everything

Blender's addon system uses `bpy.app.timers` — callbacks that fire during Blender's main event loop. The MCP addon registers a timer that checks the socket for incoming data and dispatches requests to tool handlers. It looks like this:

```python
def socket_poll():
    data = sock.recv(4096)
    if data:
        handle_request(data)
    return 1.0  # run again in 1 second

bpy.app.timers.register(socket_poll)
```

Here's the problem: Blender's event loop and your Python script share the same thread. When your script hits `time.sleep(10)`, the Python interpreter yields the GIL — but Blender's C event loop doesn't get control back until the Python frame finishes executing.

`socket_poll` is registered. It's waiting. But it never gets called because `time.sleep()` is occupying the only thread that could call it.

The port listens because the kernel handles TCP accept in the background. But once a connection arrives, the data sits in a kernel buffer. Nobody reads it. The timer never fires. The handler never runs.

## The Fix: Threaded Standalone Server

I wrote a replacement server that doesn't use `bpy.app.timers` at all. Instead, it handles socket I/O in background threads and processes Blender commands inline in the main loop:

```python
import socket
import threading
import json
import queue
import time

request_queue = queue.Queue()
response_queue = queue.Queue()

def server_thread():
    """Accept connections in background thread."""
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind(("127.0.0.1", 9876))
    sock.listen(5)
    while True:
        client, addr = sock.accept()
        threading.Thread(target=client_reader, args=(client,), daemon=True).start()

def client_reader(client):
    """Read JSON-RPC in background thread, enqueue for main loop."""
    buf = b""
    while True:
        data = client.recv(4096)
        if not data:
            break
        buf += data
        # Parse complete JSON-RPC messages
        while b"\n" in buf:
            line, buf = buf.split(b"\n", 1)
            msg = json.loads(line)
            request_queue.put((client, msg["id"], msg["method"], msg.get("params", {})))

def process_requests():
    """Called from main loop — processes queued requests sequentially."""
    try:
        client, msg_id, method, params = request_queue.get_nowait()
        result = handlers.handle(method, params)
        client.sendall(json.dumps({
            "jsonrpc": "2.0", "id": msg_id, "result": result
        }).encode() + b"\n")
    except queue.Empty:
        pass

# ---- Main entry point ----
threading.Thread(target=server_thread, daemon=True).start()

while True:
    process_requests()
    time.sleep(0.001)  # yield CPU without blocking the process
```

Three threads now:
1. **Accept thread** — listens for new connections
2. **Reader threads** — one per client, reads JSON-RPC and enqueues
3. **Main thread** — dequeues requests, calls Blender's Python API, sends responses

The critical insight: `bpy` functions (mesh operations, rendering, scene manipulation) MUST run on the main thread. Socket I/O must NOT block the main thread. The queue bridges the two worlds.

The `time.sleep(0.001)` keeps the process alive without starving CPU. A millisecond is enough for the kernel to schedule other threads while keeping the loop tight enough for responsive tool calls.

## Deployment

A systemd user service on the GPU machine (Node B):

```ini
# ~/.config/systemd/user/blender-mcp.service
[Unit]
Description=Blender 5.1 MCP Server
After=network.target

[Service]
Type=simple
ExecStart=/home/xhuljanocaushllari/apps/blender-5.1.0-linux-x64/blender \
  --background \
  --python /home/xhuljanocaushllari/.local/share/blender_mcp_server.py
Restart=on-failure
RestartSec=10

[Install]
WantedBy=default.target
```

Enable and start:

```bash
systemctl --user daemon-reload
systemctl --user enable --now blender-mcp
```

The MCP bridge on Node A connects to Node B via SSH stdio transport — no open ports, no firewall rules, just a standard SSH connection tunneling the MCP protocol.

## The Lesson

This bug took two days to find and 45 minutes to fix. The investigation was longer than the solution.

The dead giveaway was the asymmetry: tool discovery worked but tool calls didn't. If both had failed, I'd have looked at the network. If both had worked, I wouldn't have known there was a problem. But "one works, one doesn't" pointed straight at the application layer.

More broadly: **background processes are not immune to event loop blocking.** In GUI applications, the event loop is front and center — you know it matters. In headless Python scripts, it's invisible until it silently breaks everything.

The threaded architecture I landed on — socket I/O in threads, application logic in the main loop, a queue between them — is the same pattern that production servers use. It's worth knowing regardless of what you're building.

## The Stack

| Component | Location | Role |
|-----------|----------|------|
| Standalone server | `~/.local/share/blender_mcp_server.py` | Threaded TCP server |
| systemd unit | `~/.config/systemd/user/blender-mcp.service` | Auto-start on boot |
| Original addon | `~/.config/blender/5.1/scripts/addons/blender_mcp_addon/` | 218 MCP tools (intact) |
| MCP bridge | `~/.local/bin/mcp-blender` | stdio ↔ TCP bridge |
| Hermes config | `~/.hermes/config.yaml` | SSH transport to Node B |

After the fix, all 218 tools respond in under 100ms. The Earth and Moon hero animation on this site was built using this pipeline.
