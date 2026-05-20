---
title: "What Are MCP Servers? A Hands-On Guide From Someone Who Built 18 of Them"
date: 2026-05-10
draft: false
tags: ["mcp", "ai-agents", "python", "tool-calling", "hermes"]
categories: ["AI"]
summary: "MCP (Model Context Protocol) lets AI agents use real tools. Here's what it is, how it works, and how I built 5 MCP servers that manage my entire homelab."
ShowToc: true
---

MCP is all over AI now. Most guides are too vague. I built 5 MCP tools. Here is what they do.

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

## My 5 MCP Nodes

### 1. Firecrawl — Web Pulls

```python
@server.list_tools()
async def list_tools():
    return [
        Tool(name="firecrawl_scrape",
             description="Scrape a single URL, return markdown",
             inputSchema={"type": "object",
                          "properties": {"url": {"type": "string"}}})
    ]
```

This wraps the tool above. My agent can pull any page. It turns it into clean text. Great for study.

### 2. Homelab Board — Infra Checks

This node has four tools. It checks health. It lists checks. It reads stats. It shows net info. It runs shell code. No extras.

### 3. Uptime Kuma — App Checks

This links Uptime Kuma. It lists each check. It reads pings. The agent can ask: are all apps up? It gets a real reply.

### 4. GitHub — Repo Tools

This uses the main GitHub node. It has 18+ tools. It covers bugs, PRs, code, and search. The agent gets full reach.

### 5. Compliance Suite — CIS Security Audits

This runs nightly scans. It checks firewalls, CVEs, open ports, SSH, and kernels. It stores results with a SHA-256 chain. It makes SOC 2 packs for audits. All from one MCP node.

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
      GITHUB_PERSONAL_ACCESS_TOKEN: "ghp_..."
```

Each node is a child proc. The agent spawns it. It finds the tools. It keeps the link open.

## Why It Helps

MCP turns agents from bots into ops tools. My agent can now:

- Spot a dead app. Fix it.
- Pull a paper. Sum it up.
- Open a GitHub issue. Do it from a bug.
- Run a scan. Make an audit report.

All this works via plain words. You do not switch tools by hand.

## Build Your Own

A basic server needs ~50 lines:

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
