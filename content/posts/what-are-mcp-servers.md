---
title: "What Are MCP Servers? A Hands-On Guide From Someone Who Built 5 of Them"
date: 2026-05-10
draft: false
tags: ["mcp", "ai-agents", "python", "tool-calling", "hermes"]
categories: ["AI"]
summary: "MCP (Model Context Protocol) lets AI agents use real tools. Here's what it is, how it works, and how I built 5 MCP servers that manage my entire homelab."
ShowToc: true
---

MCP is all over AI now. Most guides are too vague. I built 5 MCP servers. Here is what they do.

## What is MCP?

**Model Context Protocol (MCP)** is a norm. It lets AI agents use tools. Think of it as USB for AI. Any agent can use any tool.

Before MCP, each link was custom. Now you write one server. Any agent can plug in.

## How It Works

The setup is simple:

```
AI Agent  ←→  MCP Client  ←→  MCP Server  ←→  Outside Service
(hermes)      (built-in)       (your code)     (GitHub, APIs, etc.)
```

1. The agent starts. It finds servers from a config file.
2. Each server lists its tools. It gives a name. It adds a note. It sets rules.
3. The agent calls a tool with JSON.
4. The server runs the task. It sends back JSON.

Talk runs over JSON-RPC. It uses stdin/stdout or HTTP.

## My 5 MCP Servers

### 1. Firecrawl — Web Scrapes

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

This wraps my own Firecrawl. The agent can scrape any URL. It turns the page into clean markdown. It is great for study.

### 2. Homelab Board — Infra Checks

This server has four tools. It checks health. It lists boxes. It reads stats. It shows net info. It runs shell cmds. No extra tools are needed.

### 3. Uptime Kuma — Service Checks

This links to Uptime Kuma. It lists checks. It reads pings. The agent can ask "are all apps up?" It gets a real answer.

### 4. GitHub — Repo Tools

This uses the main `@modelcontextprotocol/server-github` pkg. It has 18+ tools. It covers issues, PRs, code, and search. The agent gets full GitHub access.

### 5. n8n — Flow Tools

This wraps the n8n REST API. It lists flows. It checks runs. It pulls details. The agent can start and watch flows.

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

Each server is a child proc. The agent spawns it. It finds the tools. It keeps the link open.

## Why This Matters

MCP turns agents from chatbots into ops tools. My agent can now:

- Spot a dead app. It can fix it.
- Scrape a paper. It can sum it up.
- Open a GitHub issue. It can do this from a bug.
- Start an n8n flow. It can report back.

All of this works via plain words. You do not switch tools by hand.

## Build Your Own

A basic server takes ~50 lines of py:

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

That is a live server. Add HTTP calls. Add DB reads. Add shell cmds. Make it do real work.

## What's Next

- MCP Apps: small UI apps inside GPT and Claude.
- Remote MCP servers that talk over HTTP.
- Agents talking to other agents via MCP.

---

*MCP is the std that will make AI agents truly handy. If you build with AI, learn it now.*
