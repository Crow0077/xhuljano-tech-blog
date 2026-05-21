---
title: "What Are MCP Servers? A Hands-On Guide From Someone Running 12 of Them"
date: 2026-05-10
draft: false
tags: ["mcp", "ai-agents", "python", "tool-calling", "hermes"]
categories: ["AI"]
summary: "MCP (Model Context Protocol) lets AI agents use real tools. Here's what it is, how it works, and how I run 12 MCP servers that manage my entire homelab."
ShowToc: true
---

MCP is all over AI now. Most guides are too vague. I run 12 MCP servers. Here is what they do.

## What is MCP?

**Model Context Protocol (MCP)** is a spec. It lets AI use tools. Think of it as USB for AI. Any agent can plug in.

Before MCP, you wrote custom code. Now you write one node. Any agent can plug in.

## How It Works

The setup is easy:

```
AI Agent  ←→  MCP Client  ←→  MCP Server  ←→  Other App
(hermes)      (core)           (your code)     (GitHub, APIs, etc.)
```

1. The agent boots. It finds nodes from a config file.
2. Each server lists its tools. It gives a name. It adds a note. It sets rules.
3. The agent calls a tool with JSON.
4. The server runs the task. It sends back JSON.

Talk is JSON RPC. It uses pipes or HTTP.

## My MCP Servers

### Firecrawl — Web Scraping

Wraps the Firecrawl API. The agent can scrape any page and get clean markdown. Great for research and wiki feed.

### Homelab Dashboard — Infra Status

Four tools: health checks, app list, system stats (CPU/RAM/disk), and net info. The agent asks "are all apps up?" and gets a real answer.

### Uptime Kuma — Uptime Checks

Links to Uptime Kuma's API. Lists all checks and their state. The agent can check uptime history for any app.

### Deploy — Container Ops

Start, stop, restart, and update Podman. The agent runs the whole fleet.

### Logs — Log Gather

Search all app logs. Find errors, warnings, or patterns. Make health reports from log data.

### Backup — Auto Backups

Create, list, verify, and restore backups of any app. Keeps configs, wiki, and MCP nodes safe.

### GSD — Safe Audit Runner

4-stage safe rules helper. Formulate → Plan → Execute → Verify. Runs CIS tests, CVE checks, and MCP flaw scans.

### Sentinel — MCP Safe Scan

First MCP-native flaw finder. Audits MCP nodes against 8 known flaw types with CVE links.

### Immune — Auto-Fix Infra

Health checks with quorum sense. Auto-fixes down apps.

### YouTube — Text Pull

Search YouTube and get text. Powers the wiki feed.

### Google Calendar — Time Plan

Create, search, and manage plan events from the shell.

### Arxiv — Paper Search

Search school papers by term, name, or type.

Total: 12 MCP nodes, 80+ tools.

## The Config

Here is a bit from `~/.hermes/config.yaml`:

```yaml
mcp_servers:
  firecrawl:
    command: "python3"
    args: ["/home/Crow/mcp-servers/firecrawl_mcp.py"]
    timeout: 60

  github:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_PERSONAL_ACCESS_TOKEN: "${GITHUB_TOKEN}"
```

Each node is a child proc. The agent spawns it. It finds the tools. It keeps the link open.

## Why It Helps

MCP turns agents from bots into ops tools. Now my agent can:

- Spot a dead app. Fix it.
- Pull a paper. Sum it up.
- Open a GitHub issue. Do it from a bug.
- Run a scan. Make an audit report.

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
- Remote MCP nodes that talk over HTTP.
- Agents talk to other agents via MCP.

---

*MCP is the std that makes AI agents truly handy. If you build with AI, learn it now.*
