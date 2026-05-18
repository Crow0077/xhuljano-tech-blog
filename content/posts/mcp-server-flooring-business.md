---
title: "How I Built an MCP Server for a Flooring Business and Deployed It to Cloudflare"
date: 2026-05-10
draft: false
tags: ["mcp", "cloudflare", "business", "chatgpt", "api"]
categories: ["Projects"]
summary: "I built an MCP server that lets customers get instant flooring estimates and book appointments through ChatGPT. Deployed on Cloudflare Workers for free."
ShowToc: true
---

Most MCP guides make a "hello world" tool. I made one for a real floor shop. The owner hears the same things daily. He needs fast answers. He wants to book jobs too.

## The Problem

KR Flooring hears the same things each day:
- How much will my new floor cost?
- What's the difference between LVP and hardwood?
- Can I book a free estimate?

An MCP server lets ChatGPT answer with live data. It pulls real prices. It shows open slots. It gives booking links.

## The Architecture

The flow is simple. A customer asks ChatGPT. ChatGPT talks to the MCP server. The server lives on Cloudflare Workers.

```
Customer → ChatGPT → MCP Server → Response
                        ↓
              Cloudflare Workers (free tier)
```

The server has 4 tools. They are estimate, pricing, FAQ, and booking. It has 3 widgets. They are cost calc, booking form, and price list. It runs on Cloudflare Workers. That is free, fast, and needs zero upkeep.

## The Tools

### estimate

Tell it the room size. Tell it the floor type. It gives a full quote. Parts and labor are in it.

### pricing

Show fees for LVP, hardwood, tile, and carpet.

### faq

Covers install time, warranty, and care tips.

### book

Sends a link to book a free in-home visit.

## Deployment

Cloudflare Workers is free. No card needed. No trial. You get 100k hits a day.

```bash
# Get Wrangler CLI
npm install -g wrangler

# Deploy
wrangler deploy
```

The MCP endpoint: `https://kr-flooring-mcp.xcaushlari.workers.dev/mcp`

ChatGPT hits this URL alone. A user asks a question. The server replies with real prices. It replies with facts.

## What I Learned

1. **MCP isn't just for coders.** Any shop that gets repeat questions can use it.

2. **Cloudflare Workers is a hidden gem.** It's free, fast, and global. Great for APIs.

3. **The MCP scene is booming.** ChatGPT, Claude, and Cursor all use it. Making servers now feels like making apps when the App Store first came out.

## What's Next

- Add Stripe for on-site payments.
- Build MCP servers for other local shops.
- Make a template so anyone can deploy one fast.

---

*MCP servers are the next app store. If you can write Python code, you can build one.*
