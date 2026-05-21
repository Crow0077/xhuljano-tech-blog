---
title: "I Built a Cross-MCP Pipeline Pattern — One Server Feeds Another"
date: 2026-05-19
draft: false
tags: ["mcp", "security", "automation", "github", "pipeline"]
categories: ["Projects"]
summary: "The cross-MCP pipeline pattern: one MCP server scans, a bridge script parses results, and GitHub gets structured issues automatically. This pattern works for Sentinel→Issues, Screener→Trades, Firecrawl→Wiki, and more."
ShowToc: true
---

Anthropic just paid ~$300M for Stainless. This firm builds MCP servers from API specs. The bet is simple. Agents are only as useful as the tools they can use.

I'm making the other side: MCP servers that talk to MCP servers.

## The Pattern

```
MCP Server A           Bridge Script           MCP Server B
─────────────    →     ────────────     →     ─────────────
Sentinel scans          Parse findings          GitHub creates issues
Screener finds signal   Format trade params     Trade bot executes
Firecrawl scrapes       Extract entities        Wiki ingests pages
```

This is not a live app. It's a way I tested on my home lab. The Sentinel→GitHub flow runs as a demo. Sentinel audits MCP servers. A Python bridge groups findings by file. Clean issues get made with CVE links.

## Why This Matters

Most MCP demos show one tool for one job. That is the "hello world" of agent infra.

Cross-MCP flows are the next step. One server feeds another. No human needed. No API proxy. No control tool. Just two MCP servers talk via a small Python bridge.

This setup works for all. The Sentinel flow runs on my home lab today. The same bridge script form works for Screener→Trade bot, Firecrawl→Wiki, and Compliance→Immune flows.

**Pattern code (demo):**
```python
# Call MCP tool, parse output, create issue
audit = call_mcp_tool(8113, "sentinel_full_audit")
findings = parse_findings(audit)
grouped = group_by_file(findings)
for file, issues in grouped.items():
    create_github_issue(file, issues)
```

This way scales to any MCP→MCP task.

## What's Next

- **Compliance → Immune flow:** Each night CIS scans feed immune health checks.
- **Screener → Trade Bot flow:** Signal finds start trades.
- **Firecrawl → Wiki flow:** Pulled pages feed the search index.
- **Full auto loop:** Scan → spot → file issue → fix → ship again → re-scan.

Same way. Other tools. All MCP.

---

*Built on a $150 Dell OptiPlex with Fedora Server. 18 MCP nodes. 100+ tools. Zero cloud deps.*
