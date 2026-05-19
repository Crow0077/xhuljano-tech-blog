---
title: "I Built a Cross-MCP Pipeline — Sentinel Scans, GitHub Gets the Issues"
date: 2026-05-19
draft: false
tags: ["mcp", "security", "automation", "github", "pipeline"]
categories: ["Projects"]
summary: "Sentinel runs a full security audit across 18 MCP servers, parses 60+ findings, and auto-creates GitHub issues — all without human intervention. This is the first cross-MCP pipeline where one server feeds another."
ShowToc: true
---

Anthropic just paid ~$300M for Stainless, a company that auto-generates MCP servers from API specs. The bet: agents are only as useful as the systems they can reach.

I took the opposite approach. Instead of connecting agents TO more things, I connected MCP servers TO EACH OTHER.

## The Pipeline

```
Sentinel (port 8113)          Bridge Script            GitHub Issues
─────────────────      →      ────────────      →      ────────────
Runs full_audit               Parses 60 findings        6 issues created
19 critical, 39 high          Groups by file             CVE references
Scans 18 servers               Deduplicates              Fix recommendations
```

## How It Works

1. **Sentinel** runs `sentinel_full_audit` across all 18 MCP servers
2. The bridge script parses the text output — extracting severity, patterns, files, and CVE references
3. Findings are grouped by affected file and deduplicated by pattern
4. GitHub issues are created with structured bodies: severity, pattern count, fix recommendation
5. A state file tracks which findings already have issues — no duplicates

60 raw findings became 6 clean, actionable issues.

## Why This Matters

Most MCP demos show a single server answering a question. That's the "hello world" of agent infrastructure.

Cross-MCP pipelines are the real thing. One server's output becomes another server's input. No human in the loop. No API gateway. No orchestration platform. Just two MCP servers talking through a thin Python bridge.

This is the pattern every AI company will need when they have dozens of agents running dozens of tools. The scanner that audits itself, files issues against its own code, and tracks fixes — that's production infrastructure.

## The Code

```python
# The core: call MCP tool, parse output, create issue
audit = call_mcp_tool(8113, "sentinel_full_audit")
findings = parse_findings(audit)
grouped = group_by_file(findings)
for file, issues in grouped.items():
    create_github_issue(file, issues)
```

Full source: [sentinel_github_bridge.py](https://github.com/Crow0077/homelab-ai-toolkit/blob/master/sentinel_github_bridge.py)

## What's Next

- **Compliance → Immune pipeline:** Nightly CIS scan feeds immune system health checks
- **Screener → Trade Bot pipeline:** Signal detection triggers one-tap trade execution
- **Firecrawl → Wiki pipeline:** Article scraping feeds semantic search index
- **Full autonomous loop:** Scan → detect → file issue → fix → redeploy → re-scan

The same pattern. Different servers. All MCP.

---

*Built on a $150 Dell OptiPlex running Fedora Server. 18 MCP servers. 100+ tools. Zero cloud dependencies.*
