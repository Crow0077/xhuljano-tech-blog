---
title: "I Turned a Dell OptiPlex Into a 24/7 AI-Powered Homelab"
date: 2026-05-10
draft: false
tags: ["homelab", "self-hosted", "fedora", "kubernetes", "rke2", "ai-agents"]
categories: ["Homelab"]
summary: "How I built a production-grade homelab on a used Dell OptiPlex 7090 SFF — running AI agents, RKE2 Kubernetes, MCP servers on K8s, and self-healing infrastructure 24/7 for under $200."
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

### RKE2 Kubernetes Cluster

A single-node RKE2 K8s cluster runs the homelab. All stateless services are K8s deployments:

- **6 MCP servers on K8s** (mcp namespace): arxiv, backup, firecrawl, homelab, sentinel, youtube — each with 256Mi RAM limit and hostNetwork for stable ports
- **Vaultwarden** (vaultwarden namespace): Self-hosted secrets management with Tailscale serve and Let's Encrypt cert
- **MetalLB** and **Traefik Ingress** for service routing

### Hermes Agent

An AI agent runs the lab. It uses MCP nodes. They give it access to:

- Homelab board — CPU, RAM, disk, K8s pod status via `kubectl`
- Firecrawl — web pulls for study
- GitHub — full repo rule from the shell
- Logs — search logs across all containers
- Immune — self-healing health checks with quorum

The agent checks app health. It brings them back up. It pulls web pages. It runs GitHub repos. It even sets its own cron jobs. All via plain words.

### Systemd Services

Two MCP servers remain on systemd for host-level access:

- **Immune** (8102) — Self-healing infrastructure with quorum detection
- **Logs** (8104) — Centralized container log search and health reports

### MCP Servers (K8s + Systemd)

| Server | Transport | Location | Role |
|--------|-----------|----------|------|
| arxiv | HTTP :8118 | K8s | Paper search |
| backup | HTTP :8105 | K8s | Backup all services |
| firecrawl | HTTP :8108 | K8s | Web scraping |
| homelab | HTTP :8106 | K8s | System/K8s health |
| sentinel | HTTP :8113 | K8s | CVE scanning |
| youtube | HTTP :8119 | K8s | Transcripts |
| immune | HTTP :8102 | systemd | Auto-heal |
| logs | HTTP :8104 | systemd | Log search |

### Tailscale Mesh VPN

Both nodes link via Tailscale. No ports open on the router. No open apps. Reach all apps via mesh from afar.

## The AI Agent Layer

This is what sets the lab apart. Hermes Agent is not just a bot. It has saved data. It uses custom tools. It can run real system tasks.

Each MCP node is a Python script exposing tools via HTTP. The agent discovers them at boot from `~/.hermes/config.yaml`.

```
mcp_homelab_homelab_status  -> health check all apps
mcp_homelab_homelab_system  -> CPU, RAM, disk use
mcp_homelab_homelab_services -> K8s pod status
mcp_backup_backup_list       -> all backups
mcp_sentinel_sentinel_full_audit -> full security scan
```

Total: 8 MCP servers, 60+ custom tools.

## Cost

- Dell OptiPlex: ~$150 used
- Power: ~$5-10/month
- Tailscale: Free (up to 100 hosts)
- All code: Open source

Under $200 total for a solid lab that runs AI agents on real Kubernetes.

## What's Next

- Adding Gemma 4 26B MoE on Node B (RTX 4080 Super)
- Expanding K8s workloads
- More MCP nodes for more auto tasks

---

Follow along. I break things and learn.
