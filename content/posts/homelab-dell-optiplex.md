---
title: "I Turned a Dell OptiPlex Into a 24/7 AI-Powered Homelab"
date: 2026-05-10
draft: false
tags: ["homelab", "self-hosted", "fedora", "podman", "ai-agents"]
categories: ["Homelab"]
summary: "How I built a production-grade homelab on a used Dell OptiPlex 7090 SFF — running AI agents, monitoring, automation, and DNS filtering 24/7 for under $200."
ShowToc: true
---

Most homelab tales start with big racks. Mine starts with a used Dell PC. I got it cheap. Here is how it became the brain. It runs my setup.

## The Setup

**Node A — Dell OptiPlex 7090 SFF**
- Intel i5-10500 (6 cores / 12 threads)
- 32GB DDR4
- 465GB NVMe SSD
- Fedora Server 43

This box runs it all. It is on 24/7. It is quiet. It uses little power.

## What's Running

### Hermes Agent

An AI agent runs the lab. It uses MCP nodes. They give it access to:

- **Uptime Kuma** — checks all apps
- **Homelab board** — CPU, RAM, disk, net status
- **Firecrawl** — web pulls for study
- **GitHub** — full repo control from the terminal

The agent checks health. It restarts containers. It gets web pages. It runs GitHub repos. It even sets its own cron jobs. All via plain words.

### Podman Containers

It all runs in Podman (rootless where possible):

- **Uptime Kuma** (3001) — app checks with alerts
- **n8n** (5678) — auto tasks
- **Firecrawl** (3002) — web pull API
- **AdGuard Home** (53/80) — DNS filter, blocks threats only

### Tailscale Mesh VPN

Both nodes link via Tailscale. No ports open on the router. No open apps. Reach all apps via the tailnet from afar.

## DNS Filtering Without the Pain

AdGuard Home runs as a guard. It blocks only threats. It stops trackers, malware, and phishing. It does not block all ads. The rule is simple: guard, do not break.

**Pitfall I hit:** On Fedora, a system tool holds port 53. You must stop AND mask it. This also stops the linked sockets:

```bash
sudo systemctl stop systemd-resolved systemd-resolved-monitor.socket systemd-resolved-varlink.socket
sudo systemctl mask systemd-resolved
```

Then swap the `/etc/resolv.conf` link for a fixed file. Point it to `127.0.0.1`.

## The AI Agent Layer

This is what sets the lab apart. Hermes Agent is not just a bot. It has saved data. It uses custom tools. It can run real system tasks.

Each MCP server is a Python script. It shares tools via MCP. The agent finds them at boot. It calls them like any tool.

```
mcp_homelab_homelab_status   → health check all apps
mcp_homelab_homelab_system   → CPU, RAM, disk use
mcp_uptimekuma_list_monitors → all checks with status
mcp_firecrawl_firecrawl_scrape → pull any URL to text
```

Total: 35 custom tools on 4 MCP nodes.

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
