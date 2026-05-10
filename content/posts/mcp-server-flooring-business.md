---
title: "How I Built an MCP Server for a Flooring Business and Deployed It to Cloudflare"
date: 2026-05-10
draft: false
tags: ["mcp", "cloudflare", "business", "chatgpt", "api"]
categories: ["Projects"]
summary: "I built an MCP server that lets customers get instant flooring estimates and book appointments through ChatGPT. Deployed on Cloudflare Workers for free."
ShowToc: true
---

Most MCP tutorials build a "hello world" tool. I built one for a real business — a flooring company that needs to answer customer questions and book appointments.

## The Problem

KR Flooring gets the same questions over and over:
- How much will it cost to install flooring in my living room?
- What's the difference between LVP and hardwood?
- Can I book a free estimate?

An MCP server lets ChatGPT (or any AI agent) answer these questions with real data — pricing, availability, booking links.

## The Architecture

```
Customer → ChatGPT → MCP Server → Response
                        ↓
              Cloudflare Workers (free tier)
```

- **4 tools:** estimate, pricing lookup, FAQ answers, booking link
- **3 HTML widgets:** estimate calculator, booking form, pricing table
- **Hosted on Cloudflare Workers** — free, globally distributed, zero maintenance

## The Tools

### estimate
Takes room dimensions and flooring type, returns a price estimate with materials and labor breakdown.

### pricing
Returns current pricing for all flooring types (LVP, hardwood, tile, carpet).

### faq
Answers common questions about installation timelines, warranties, maintenance.

### book
Returns the booking link for a free in-home estimate.

## Deployment

Cloudflare Workers is genuinely free — no credit card, no trial period. 100,000 requests/day on the free tier.

```bash
# Install Wrangler CLI
npm install -g wrangler

# Deploy
wrangler deploy
```

The MCP endpoint: `https://kr-flooring-mcp.xcaushlari.workers.dev/mcp`

ChatGPT connects to this URL directly. Customers ask questions in ChatGPT, and the MCP server provides real answers with real pricing.

## What I Learned

1. **MCP isn't just for developers.** Business tools are a huge use case. Any business that answers repetitive questions can benefit.

2. **Cloudflare Workers is underrated.** Free, fast, global. Perfect for API endpoints.

3. **The MCP ecosystem is growing fast.** ChatGPT, Claude, Cursor all support MCP now. Building servers now is like building apps when the App Store launched.

## What's Next

- Add a payment tool (Stripe integration)
- Build similar MCP servers for other local businesses
- Create a template so anyone can deploy a business MCP server in minutes

---

*MCP servers are the next app store. If you can write a Python script, you can build one.*
