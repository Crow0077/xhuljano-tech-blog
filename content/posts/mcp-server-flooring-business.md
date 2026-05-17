---
title: "How I Built an MCP Server for a Flooring Business and Deployed It to Cloudflare"
date: 2026-05-10
draft: false
tags: ["mcp", "cloudflare", "business", "chatgpt", "api"]
categories: ["Projects"]
summary: "I built an MCP server that lets customers get instant flooring estimates and book appointments through ChatGPT. Deployed on Cloudflare Workers for free."
ShowToc: true
---

Most MCP guides make a "hello world" tool. I made one for a real floor shop. The owner gets the same questions daily. He needed fast answers. He wanted to book jobs too.

## The Problem

KR Flooring hears the same questions every day:
- How much will my new floor cost?
- What's the difference between LVP and hardwood?
- Can I book a free estimate?

An MCP server lets ChatGPT answer with live data. It pulls real prices. It shows open slots. It shares booking links.

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

Tell it the room size and floor type. It gives a full quote. Parts and labor included.

### pricing

Show fees for LVP, hardwood, tile, and carpet.

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

3. **The MCP scene is booming.** ChatGPT, Claude, and Cursor all use it. Building servers now feels like making apps when the App Store first dropped.

## What's Next

- Add Stripe for on-site payments
- Build MCP servers for other local shops
- Make a template so anyone can deploy one in minutes

---

*MCP servers are the next app store. If you can write a Python script, you can build one.*