---
title: "I Turned a Dell OptiPlex Into a 24/7 AI-Powered Homelab"
date: 2026-05-10
draft: false
tags: ["homelab", "self-hosted", "fedora", "podman", "ai-agents"]
categories: ["Homelab"]
summary: "How I built a production-grade homelab on a used Dell OptiPlex 7090 SFF — running AI agents, monitoring, automation, and DNS filtering 24/7 for under $200."
ShowToc: true
---

Most homelab posts start with a rack of big gear. Mine starts with a used Dell PC I bought cheap. Here is how it became the brain of my whole setup.

## The Setup

**Node A — Dell OptiPlex 7090 SFF**
- Intel i5-10500 (6 cores / 12 threads)
- 32GB DDR4
- 465GB NVMe SSD
- Fedora Server 43

This small box runs it all. 24/7. Quiet. Low power use.

## What's Running

### Hermes Agent
An AI agent runs the whole lab. It has custom MCP servers. They give it direct access to:

- **Uptime Kuma** — checks the health of all services
- **Homelab dashboard** — CPU, RAM, disk, net status
- **Firecrawl** — web scrapes for research
- **GitHub** — full repo control from the terminal

The agent checks health and restarts containers. It scrapes web pages and manages GitHub repos. It even sets up its own cron jobs. All through plain language.

### Podman Containers

Everything runs in Podman (rootless where possible):

| Service | Port | Purpose |
|---------|------|---------|
| Uptime Kuma | 3001 | Service checks with alerts |
| n8n | 5678 | Workflow auto tasks |
| Firecrawl | 3002 | Web scrape API |
| AdGuard Home | 53/80 | DNS filter — blocks threats only |

### Tailscale Mesh VPN

Both nodes connect via Tailscale. No port forwarding on the router. No open services. You can reach everything through the tailnet from anywhere.

## DNS Filtering Without the Pain

AdGuard Home runs as a watchful guard. It blocks only threats — trackers, malware, and phishing. Not harsh ad blocking. The rule is simple: protect without breaking.

**Pitfall I hit:** On Fedora, `systemd-resolved` holds port 53. You must stop AND mask it. That includes the monitor and varlink sockets:

```bash
sudo systemctl stop systemd-resolved systemd-resolved-monitor.socket systemd-resolved-varlink.socket
sudo systemctl mask systemd-resolved
```

Then swap the `/etc/resolv.conf` symlink for a static file. Point it to `127.0.0.1`.

## The AI Agent Layer

This is what sets the lab apart. Hermes Agent is not just a chatbot. It has saved memory, custom tools, and can run real system tasks.

Each MCP server is a Python script. It shows its tools via the Model Context Protocol. The agent finds them at startup. It calls them like any other tool.

```
mcp_homelab_homelab_status   → health check all services
mcp_homelab_homelab_system   → CPU, RAM, disk use
mcp_uptimekuma_list_monitors → all monitors with status
mcp_firecrawl_firecrawl_scrape → scrape any URL to markdown
```

Total: 35 custom tools across 4 MCP servers.

## Cost

- Dell OptiPlex: ~$150 used
- Power: ~$5-10/month
- Tailscale: Free (up to 100 devices)
- All software: Open source

Under $200 total for a solid lab that runs AI agents.

## What's Next

- Adding Gemma 4 26B MoE on Node B (RTX 4080 Super)
- Kubernetes cluster across both nodes
- More MCP servers for deeper auto tasks

---

*This is the first post in my lab series. Follow along as I break things and learn.*
