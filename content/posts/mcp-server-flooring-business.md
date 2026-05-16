---
title: "How I Built an MCP Server for a Flooring Business and Deployed It to Cloudflare"
date: 2026-05-10
draft: false
tags: ["mcp", "cloudflare", "business", "chatgpt", "api"]
categories: ["Projects"]
summary: "I built an MCP server that lets customers get instant flooring estimates and book appointments through ChatGPT. Deployed on Cloudflare Workers for free."
ShowToc: true
---

Most MCP tutorials build a "hello world" tool. I built one for a real flooring business. The owner needed to answer common questions and book jobs fast.

## The Problem

KR Flooring hears the same questions every day:
- How much will my new floor cost?
- What's the difference between LVP and hardwood?
- Can I book a free estimate?

An MCP server lets ChatGPT answer these with live data. It pulls real prices, open slots, and booking links.

## The Architecture

```
Customer → ChatGPT → MCP Server → Response
                        ↓
              Cloudflare Workers (free tier)
```

- **4 tools:** estimate, pricing, FAQ, and booking
- **3 widgets:** cost calc, booking form, price list
- **Hosted on Cloudflare Workers** — free, fast, and zero upkeep

## The Tools

### estimate
Give it room size and floor type. It returns a full quote with parts and labor.

### pricing
Shows current rates for LVP, hardwood, tile, and carpet.

### faq
Covers install time, warranty, and care tips.

### book
Sends a link to book a free in-home visit.

## Deployment

Cloudflare Workers is free. No card needed. No trial. You get 100k requests per day.

```bash
# Install Wrangler CLI
npm install -g wrangler

# Deploy
wrangler deploy
```

The MCP endpoint: `https://kr-flooring-mcp.xcaushlari.workers.dev/mcp`

ChatGPT hits this URL on its own. A customer asks a question. The MCP server replies with real prices and facts.

## What I Learned

1. **MCP isn't just for coders.** Any shop that gets repeat questions can use it.

2. **Cloudflare Workers is a hidden gem.** It's free, fast, and global. Great for APIs.

3. **The MCP scene is booming.** ChatGPT, Claude, and Cursor all support it. Building servers today feels like making apps when the App Store first dropped.

## What's Next

- Add Stripe for on-site payments
- Build MCP servers for other local shops
- Make a template so anyone can deploy one in minutes

---

*MCP servers are the next app store. If you can write a Python script, you can build one.*
