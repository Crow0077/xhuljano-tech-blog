---
title: "I Turned a Dell OptiPlex Into a 24/7 AI-Powered Homelab"
date: 2026-05-10
draft: false
tags: ["homelab", "self-hosted", "fedora", "podman", "ai-agents"]
categories: ["Homelab"]
summary: "How I built a production-grade homelab on a used Dell OptiPlex 7090 SFF — running AI agents, monitoring, automation, and DNS filtering 24/7 for under $200."
ShowToc: true
---

Most home lab tales start with big racks. Mine starts with a used Dell PC. I got it cheap. Here is how it became the core. It runs all my gear.

## The Setup

**Node A — Dell OptiPlex 7090 SFF**
- Intel i5-10500 (6 cores / 12 threads)
- 32GB DDR4
- 465GB NVMe SSD
- Fedora Server 43

This box is the core. It runs it all. It is on 24/7. It is quiet. It uses little power.

## What's Running

### Hermes Agent

An AI agent runs the lab. It uses MCP nodes. They give it access to:

- Uptime Kuma — checks all apps
- Homelab board — CPU, RAM, disk, net status
- Firecrawl — web pulls for study
- GitHub — full repo rule from the shell

The agent checks app health. It brings them back up. It pulls web pages. It runs GitHub repos. It even sets its own cron jobs. All via plain words.

### Podman Containers

It all runs in Podman (no root where we can):

- Uptime Kuma (3001) — app checks with alerts
- Firecrawl (3002) — web pull API
- Grafana (3003) — stats charts
- Prometheus (9091) — stats pulls
- Dozzle (8080) — box log viewer

### Tailscale Mesh VPN

Both nodes link via Tailscale. No ports open on the router. No open apps. Reach all apps via mesh from afar.

## The AI Agent Layer

This is what sets the lab apart. Hermes Agent is not just a bot. It has saved data. It uses custom tools. It can run real system tasks.

Each MCP node is a Python script. It shares tools via MCP. The agent finds them at boot. It calls them like any tool.

```
mcp_homelab_homelab_status   → health check all apps
mcp_homelab_homelab_system   → CPU, RAM, disk use
mcp_uptimekuma_list_monitors → all checks with status
mcp_firecrawl_firecrawl_scrape → pull any URL to text
```

Total: 80+ custom tools across 12 MCP nodes.

## Cost

- Dell OptiPlex: ~$150 used
- Power: ~$5-10/month
- Tailscale: Free (up to 100 hosts)
- All code: Open source

Under $200 total for a solid lab that runs AI agents.

## What's Next

- Adding Gemma 4 26B MoE on Node B (RTX 4080 Super)
- K8s group on both nodes
- More MCP nodes for more auto tasks

---

Follow along. I break things and learn.
