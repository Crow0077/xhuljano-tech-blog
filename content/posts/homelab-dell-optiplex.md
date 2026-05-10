---
title: "I Turned a Dell OptiPlex Into a 24/7 AI-Powered Homelab"
date: 2026-05-10
draft: false
tags: ["homelab", "self-hosted", "fedora", "podman", "ai-agents"]
categories: ["Homelab"]
summary: "How I built a production-grade homelab on a used Dell OptiPlex 7090 SFF — running AI agents, monitoring, automation, and DNS filtering 24/7 for under $200."
ShowToc: true
---

Most homelab posts start with a rack of enterprise gear. Mine starts with a used Dell OptiPlex 7090 SFF I got for cheap. Here's how it became the brain of my entire infrastructure.

## The Setup

**Node A — Dell OptiPlex 7090 SFF**
- Intel i5-10500 (6 cores / 12 threads)
- 32GB DDR4
- 465GB NVMe SSD
- Fedora Server 43

This little box runs everything. 24/7. Quiet. Low power.

## What's Running

### Hermes Agent
An AI agent that manages the entire homelab. It has custom MCP (Model Context Protocol) servers that give it direct access to:

- **Uptime Kuma** — monitor health of all services
- **Homelab dashboard** — CPU, RAM, disk, network status
- **Firecrawl** — web scraping for research
- **GitHub** — full repo management from the terminal

The agent can check service health, restart containers, scrape web pages, manage GitHub repos, and even schedule its own cron jobs — all through natural language.

### Podman Containers

Everything runs in Podman (rootless where possible):

| Service | Port | Purpose |
|---------|------|---------|
| Uptime Kuma | 3001 | Service monitoring with alerts |
| n8n | 5678 | Workflow automation |
| Firecrawl | 3002 | Web scraping API |
| AdGuard Home | 53/80 | DNS filtering — security-only blocking |

### Tailscale Mesh VPN

Both nodes connect via Tailscale. No port forwarding on the router. No exposed services. Everything accessible through the tailnet from anywhere.

## DNS Filtering Without the Pain

AdGuard Home runs as a passive monitor with security-only blocking — trackers, malware, phishing. Not aggressive ad blocking. The philosophy: protect without breaking.

**Pitfall I hit:** On Fedora, `systemd-resolved` holds port 53. You have to stop AND mask it, including the monitor and varlink sockets:

```bash
sudo systemctl stop systemd-resolved systemd-resolved-monitor.socket systemd-resolved-varlink.socket
sudo systemctl mask systemd-resolved
```

Then replace `/etc/resolv.conf` symlink with a static file pointing to `127.0.0.1`.

## The AI Agent Layer

This is what makes the homelab different. Hermes Agent isn't just a chatbot — it has persistent memory, custom tools, and can execute real infrastructure operations.

Each MCP server is a Python script that exposes tools via the Model Context Protocol. The agent discovers them at startup and can call them like any other function.

```
mcp_homelab_homelab_status   → health check all services
mcp_homelab_homelab_system   → CPU, RAM, disk usage
mcp_uptimekuma_list_monitors → all monitors with status
mcp_firecrawl_firecrawl_scrape → scrape any URL to markdown
```

Total: 35 custom tools across 4 MCP servers.

## Cost

- Dell OptiPlex: ~$150 used
- Electricity: ~$5-10/month
- Tailscale: Free (up to 100 devices)
- All software: Open source

Under $200 total for a production-grade homelab that runs AI agents.

## What's Next

- Deploying Gemma 4 26B MoE on Node B (RTX 4080 Super)
- Kubernetes cluster across both nodes
- More MCP servers for deeper automation

---

*This is the first in a series documenting my homelab. Follow along as I break things and learn.*
