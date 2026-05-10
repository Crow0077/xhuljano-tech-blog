---
title: "What Are MCP Servers? A Hands-On Guide From Someone Who Built 5 of Them"
date: 2026-05-10
draft: false
tags: ["mcp", "ai-agents", "python", "tool-calling", "hermes"]
categories: ["AI"]
summary: "MCP (Model Context Protocol) lets AI agents use real tools. Here's what it is, how it works, and how I built 5 MCP servers that manage my entire homelab."
ShowToc: true
---

MCP is everywhere in the AI world right now. But most explanations are abstract. Let me explain it by showing you the 5 MCP servers I actually built and what they do.

## What is MCP?

**Model Context Protocol (MCP)** is a standard way for AI agents to connect to external tools. Think of it as USB for AI — a universal plug that lets any agent use any tool.

Before MCP, every AI tool integration was custom. Now, you write one MCP server, and any MCP-compatible agent (Hermes, Claude, Cursor, ChatGPT) can use it.

## How It Works

The architecture is simple:

```
AI Agent  ←→  MCP Client  ←→  MCP Server  ←→  External Service
(hermes)      (built-in)       (your code)     (GitHub, APIs, etc.)
```

1. The agent starts and discovers MCP servers from config
2. Each server advertises its tools (name, description, parameters)
3. The agent can call any tool with JSON arguments
4. The server executes the request and returns JSON results

Communication is JSON-RPC over stdin/stdout (stdio transport) or HTTP.

## My 5 MCP Servers

### 1. Firecrawl — Web Scraping

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

Wraps my self-hosted Firecrawl instance. The agent can scrape any URL to clean markdown — perfect for research and wiki ingestion.

### 2. Homelab Dashboard — Infrastructure Monitoring

Four tools: health status, container list, system resources, network info. Runs shell commands and HTTP checks. No external dependencies.

### 3. Uptime Kuma — Service Monitoring

Connects via Socket.IO to Uptime Kuma. Lists monitors, gets heartbeat history. The agent can ask "are all services healthy?" and get a real answer.

### 4. GitHub — Repository Management

Uses the official `@modelcontextprotocol/server-github` package. 18+ tools covering issues, PRs, code, branches, search. Full GitHub API access from the agent.

### 5. n8n — Workflow Automation

Wraps the n8n REST API. List workflows, check executions, get workflow details. The agent can trigger and monitor automations.

## The Config

In `~/.hermes/config.yaml`:

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

Each server is just a subprocess. The agent spawns it, discovers tools, and keeps the connection alive.

## Why This Matters

MCP turns AI agents from "smart chatbots" into "infrastructure operators." My agent can:

- Check if a service is down and restart it
- Scrape a research paper and summarize it
- Create a GitHub issue from a bug report
- Trigger an n8n workflow and report results

All through natural language. No manual tool switching.

## Build Your Own

The simplest MCP server is ~50 lines of Python:

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

That's a working MCP server. Add HTTP calls, database queries, or shell commands to make it do real things.

## What's Next

- MCP Apps: interactive UI widgets in ChatGPT and Claude
- Remote MCP servers via HTTP transport
- Agent-to-agent communication through MCP

---

*MCP is the protocol that will make AI agents actually useful. If you're building anything with AI, learn it now.*
