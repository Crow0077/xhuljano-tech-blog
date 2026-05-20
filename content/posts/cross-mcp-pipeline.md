---
title: "I Built a Cross-MCP Pipeline Pattern — One Server Feeds Another"
date: 2026-05-19
draft: false
tags: ["mcp", "security", "automation", "github", "pipeline"]
categories: ["Projects"]
summary: "The cross-MCP pipeline pattern: one MCP server scans, a bridge script parses results, and GitHub gets structured issues automatically. This pattern works for Sentinel→Issues, Screener→Trades, Firecrawl→Wiki, and more."
ShowToc: true
---

Anthropic just paid ~$300M for Stainless. This firm builds MCP servers from API specs. The bet is simple. Agents are only as useful as the systems they can reach.

I'm building the other side: MCP servers that talk to MCP servers.

## The Pattern

```
MCP Server A           Bridge Script           MCP Server B
─────────────    →     ────────────     →     ─────────────
Sentinel scans          Parse findings          GitHub creates issues
Screener finds signal   Format trade params     Trade bot executes
Firecrawl scrapes       Extract entities        Wiki ingests pages
```

This is not a deployed product — it's a pattern I've validated on my homelab. The Sentinel→GitHub pipeline runs as a demo: Sentinel audits MCP servers, a Python bridge groups findings by file, and structured issues get created with CVE references.

## Why This Matters

Most MCP demos show one server answering one question. That is the "hello world" of agent infra.

Cross-MCP pipelines are the next step. One server feeds another. No human needed. No API gateway. No control tool. Just two MCP servers talk through a small Python bridge.

This pattern works anywhere. The Sentinel pipeline is running on my homelab today. Same bridge script structure works for Screener→Trade bot, Firecrawl→Wiki, and Compliance→Immune pipelines.

**Pattern code (demo):**
```python
# Call MCP tool, parse output, create issue
audit = call_mcp_tool(8113, "sentinel_full_audit")
findings = parse_findings(audit)
grouped = group_by_file(findings)
for file, issues in grouped.items():
    create_github_issue(file, issues)
```

This pattern generalizes to any MCP→MCP workflow.

## What's Next

- **Compliance → Immune pipeline:** Nightly CIS scans feed immune health checks.
- **Screener → Trade Bot pipeline:** Signal finds trigger trades.
- **Firecrawl → Wiki pipeline:** Pulled pages feed the search index.
- **Full auto loop:** Scan → detect → file issue → fix → redeploy → re-scan.

Same pattern. Different servers. All MCP.

---

*Built on a $150 Dell OptiPlex running Fedora Server. 12 MCP servers. 80+ tools. Zero cloud deps.*
