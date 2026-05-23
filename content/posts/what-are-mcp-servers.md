---
title: "What Are MCP Servers? A Hands-On Guide From Someone Running 8 of Them"
date: 2026-05-10
draft: false
tags: ["mcp", "ai-agents", "python", "tool-calling", "hermes"]
categories: ["AI"]
summary: "MCP (Model Context Protocol) lets AI agents use real tools. Here's what it is, how it works, and how I run 8 MCP servers across K8s and systemd that manage my entire homelab."
ShowToc: true
---

MCP is all over AI now. Most guides are too vague. I run 8 MCP servers. Here is what they do.

## What is MCP?

**Model Context Protocol (MCP)** is a spec. It lets AI use tools. Think of it as USB for AI. Any agent can plug in.

Before MCP, you wrote custom code. Now you write one node. Any agent can plug in.

## How It Works

The setup is easy:

```
AI Agent  <->  MCP Client  <->  MCP Server  <->  Other App
(hermes)      (core)           (your code)     (GitHub, APIs, etc.)
```

1. The agent boots. It finds nodes from a config file.
2. Each server lists its tools. It gives a name. It adds a note. It sets rules.
3. The agent calls a tool with JSON.
4. The server runs the task. It sends back JSON.

Talk is JSON RPC over HTTP (Streamable HTTP transport). Previously used STDIO pipes, but HTTP lets servers run as standalone web services.

## Deployment Architecture

My homelab evolved: what started as 12 systemd-spawned processes is now 8 servers across two layers:

```
6 MCP servers -> RKE2 K8s (mcp namespace)
  arxiv, backup, firecrawl, homelab, sentinel, youtube
  -> 256Mi RAM limit, hostNetwork, survive node reboots

2 MCP servers -> systemd
  immune, logs
  -> direct host access, log scraping, auto-heal
```

## My MCP Servers

### Firecrawl — Web Scraping (K8s :8108)

Wraps the Firecrawl API. The agent can scrape any page and get clean markdown. Great for research and wiki feed.

### Homelab Dashboard — Infra & K8s Status (K6 :8106)

Four tools: health checks, app list, system stats (CPU/RAM/disk), and K8s pod status via kubectl. The agent asks "are all apps up?" and gets a real answer.

### Logs — Log Aggregation (systemd :8104)

Search all container and system logs. Find errors, warnings, or patterns. Make health reports from log data.

### Backup — Auto Backups (K8s :8105)

Create, list, verify, and restore backups of any service. Keeps configs, wiki, and MCP nodes safe. Backs up to rclone.

### Sentinel — MCP Security Audit (K8s :8113)

First MCP-native flaw finder. Audits MCP nodes against 8 known flaw types with CVE links.

### Immune — Auto-Fix Infra (systemd :8102)

Health checks with quorum sense across multiple channels. Auto-fixes down services.

### YouTube — Transcripts (K8s :8119)

Search YouTube and get transcripts. Powers the wiki ingest pipeline.

### Arxiv — Paper Search (K8s :8118)

Search academic papers by term, author, or category.

Total: 8 MCP servers, 60+ tools, all via HTTP.

## The Config

Here is a bit from `~/.hermes/config.yaml`:

```yaml
mcp_servers:
  homelab:
    command: "python3"
    args: ["/home/Crow/mcp-servers/homelab_http.py"]
    timeout: 60

  github:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_PERSONAL_ACCESS_TOKEN: "${GITHUB_TOKEN}"
```

Each K8s-deployed server is also registered in the config, but as an HTTP endpoint rather than a spawned subprocess. The Hermes agent discovers them at boot.

## Why It Helps

MCP turns agents from bots into ops tools. Now my agent can:

- Spot a dead pod. Restart it via kubectl.
- Pull a paper. Sum it up.
- Open a GitHub issue. Do it from a bug.
- Run a security scan. Make an audit report.

All this works via plain words. You do not switch tools by hand.

## Build Your Own

A basic node needs ~50 lines:

```bash
pip install mcp httpx
```

```python
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent

server = Server("my-server")

@server.list_tools()
async def list_tools():
    return [Tool(name="hello", description="Say hello",
                 inputSchema={"type": "object", "properties": {}})]

@server.call_tool()
async def call_tool(name, arguments):
    if name == "hello":
        return [TextContent(type="text", text="Hello from MCP!")]

async def main():
    async with stdio_server() as (read, write):
        await server.run(read, write, server.create_initialization_options())

import asyncio
asyncio.run(main())
```

That is a live node. Add HTTP calls. Add DB reads. Add shell code. Make it do real work.

## What's Next

- MCP Apps. Small UI apps in GPT and Claude.
- Remote MCP nodes talking over HTTP (already done).
- Agents talk to other agents via MCP.

---

*MCP is the std that makes AI agents truly handy. If you build with AI, learn it now.*
