---
title: "I Turned a Dell OptiPlex Into a 24/7 AI-Powered Homelab"
date: 2026-05-10
draft: false
tags: ["homelab", "self-hosted", "fedora", "podman", "ai-agents"]
categories: ["Homelab"]
summary: "How I built a production-grade homelab on a used Dell OptiPlex 7090 SFF — running AI agents, monitoring, automation, and DNS filtering 24/7 for under $200."
ShowToc: true
---

Most homelab stories start with big racks. Mine starts with a used Dell PC I bought cheap. Here is how it became the brain of my setup.

## The Setup

**Node A — Dell OptiPlex 7090 SFF**
- Intel i5-10500 (6 cores / 12 threads)
- 32GB DDR4
- 465GB NVMe SSD
- Fedora Server 43

This small box runs it all. 24/7. Quiet. Low power use.

## What's Running

### Hermes Agent
An AI agent runs the lab. It uses custom MCP servers. They give it direct access to:

- **Uptime Kuma** — checks the health of all services
- **Homelab dashboard** — CPU, RAM, disk, net status
- **Firecrawl** — web scrapes for research
- **GitHub** — full repo control from the terminal

The agent checks health. It restarts containers. It scrapes web pages. It manages GitHub repos. It even sets up its own cron jobs. All via plain language.

### Podman Containers

It all runs in Podman (rootless where possible):

| Service | Port | Purpose |
|---------|------|---------|
| Uptime Kuma | 3001 | Service checks with alerts |
| n8n | 5678 | Workflow auto tasks |
| Firecrawl | 3002 | Web scrape API |
| AdGuard Home | 53/80 | DNS filter — blocks threats only |

### Tailscale Mesh VPN

Both nodes connect via Tailscale. No port forwarding on the router. No open services. You can reach all apps via the tailnet from anywhere.

## DNS Filtering Without the Pain

AdGuard Home runs as a keen guard. It blocks only threats — trackers, malware, and phishing. Not harsh ad blocking. The rule is simple: guard, do not break.

**Pitfall I hit:** On Fedora, `systemd-resolved` holds port 53. You must stop AND mask it. That has the monitor and varlink sockets:

```bash
sudo systemctl stop systemd-resolved systemd-resolved-monitor.socket systemd-resolved-varlink.socket
sudo systemctl mask systemd-resolved
```

Then swap the `/etc/resolv.conf` symlink for a fixed file. Point it to `127.0.0.1`.

## The AI Agent Layer

This is what sets the lab apart. Hermes Agent is not just a bot. It has saved data. It uses custom tools. It can run real system tasks.

Each MCP server is a Python script. It shows its tools via the Model Context Protocol. The agent finds them at boot. It calls them like any tool.

```
mcp_homelab_homelab_status   → health check all services
mcp_homelab_homelab_system   → CPU, RAM, disk use
mcp_uptimekuma_list_monitors → all monitors with status
mcp_firecrawl_firecrawl_scrape → scrape any URL to markdown
```

Total: 35 custom tools on 4 MCP nodes.

## Cost

- Dell OptiPlex: ~$150 used
- Power: ~$5-10/month
- Tailscale: Free (up to 100 devices)
- All code: Open source

Under $200 total for a solid lab that runs AI agents.

## What's Next

- Adding Gemma 4 26B MoE on Node B (RTX 4080 Super)
- K8s group on both nodes
- More MCP nodes for more auto tasks

---

*This is the first post in my lab set. Follow along as I break things and learn.*
