---
title: "How I Built an MCP Server for a Flooring Business and Deployed It to Cloudflare"
date: 2026-05-10
draft: false
tags: ["mcp", "cloudflare", "business", "chatgpt", "api"]
categories: ["Projects"]
summary: "I built an MCP server that lets customers get instant flooring estimates and book appointments through ChatGPT. Deployed on Cloudflare Workers for free."
ShowToc: true
---

Most MCP guides make a "hello world" tool. I made one for a real floor shop. The owner hears the same things daily. He wants quick info. He wants to book jobs too.

## The Problem

KR Flooring hears the same things each day:
- How much will my new floor cost?
- What's the gap between LVP and hardwood?
- Can I book a free quote?

An MCP server lets ChatGPT answer with live data. It pulls real prices. It shows open slots. It shares links to book.

## The Architecture

The flow is simple. A user asks ChatGPT. ChatGPT talks to the MCP server. The server lives on Cloudflare Workers.

```
Customer → ChatGPT → MCP Server → Response
                        ↓
              Cloudflare Workers (free tier)
```

The server has 4 tools. They are estimate, pricing, FAQ, and booking. It has 3 items. They are cost calc, book form, and price list. It runs on Cloudflare Workers. That is free, fast, and needs no care.

## The Tools

### estimate

Tell it the room size. Tell it the floor type. It gives a full quote. Parts and labor are in it.

### pricing

Show fees for LVP, hardwood, tile, and carpet.

### faq

Covers setup time, warranty, and care tips.

### book

Sends a link to book a free home visit.

## Deployment

Cloudflare Workers is free. No card needed. No trial. You get 100k hits a day.

```bash
# Get Wrangler CLI
npm install -g wrangler

# Deploy
wrangler deploy
```

The MCP URL: `https://kr-flooring-mcp.xcaushlari.workers.dev/mcp`

ChatGPT hits this URL alone. A user asks. The server says real prices. It gives facts.

## What I Learned

1. **MCP isn't just for coders.** Any shop that gets repeat asks can use it.

2. **Cloudflare Workers is a hidden gem.** It's free, fast, and global. Great for APIs.

3. **The MCP scene is hot.** ChatGPT, Claude, and Cursor all use it. Making things now feels like making apps when the App Store first came out.

## What's Next

- Add Stripe to pay on site.
- Build MCP tools for other local shops.
- Make a form so anyone can deploy one fast.

---

*MCP tools are the next app store. If you can write Python code, you can build one.*