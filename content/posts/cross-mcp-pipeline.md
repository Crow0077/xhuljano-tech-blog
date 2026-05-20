---
title: "I Built a Cross-MCP Pipeline — Sentinel Scans, GitHub Gets the Issues"
date: 2026-05-19
draft: false
tags: ["mcp", "security", "automation", "github", "pipeline"]
categories: ["Projects"]
summary: "Sentinel runs a full security audit across 18 MCP servers, parses 60+ findings, and auto-creates GitHub issues — all without human intervention. This is the first cross-MCP pipeline where one server feeds another."
ShowToc: true
---

Anthropic just paid ~$300M for Stainless. This firm builds MCP servers from API specs. The bet is simple. Agents are only as useful as the systems they can reach.

I took the other path. I linked MCP servers to each other.

## The Pipeline

```
Sentinel (port 8113)          Bridge Script            GitHub Issues
─────────────────      →      ────────────      →      ────────────
Runs full_audit               Parses 60 findings        6 issues created
19 critical, 39 high          Groups by file             CVE references
Scans 18 servers               Deduplicates              Fix recommendations
```

## How It Works

1. **Sentinel** runs a full audit on all 18 MCP servers.
2. The bridge script reads the output. It pulls out risk, signs, files, and CVE refs.
3. Results group by file. Repeat signs drop out.
4. The script makes GitHub issues with clear bodies. Each shows risk, sign count, and a fix tip.
5. A state file tracks open issues. No dupes.

60 raw results became 6 clean issues.

## Why This Matters

Most MCP demos show one server answering one question. That is the "hello world" of agent infra.

Cross-MCP pipelines are the next step. One server feeds another. No human needed. No API gateway. No control tool. Just two MCP servers talk through a small Python bridge.

This pattern is what every AI firm will need. Think dozens of agents running dozens of tools. The scanner audits itself. It files issues against its own code. It tracks fixes. That is production infra.

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

- **Compliance → Immune pipeline:** Nightly CIS scans feed immune health checks.
- **Screener → Trade Bot pipeline:** Signal finds trigger trades.
- **Firecrawl → Wiki pipeline:** Pulled pages feed the search index.
- **Full auto loop:** Scan → detect → file issue → fix → redeploy → re-scan.

Same pattern. Different servers. All MCP.

---

*Built on a $150 Dell OptiPlex running Fedora Server. 18 MCP servers. 100+ tools. Zero cloud deps.*