---
title: "How I Built a 3D Product Gallery for a Flooring Business"
date: 2026-05-10
draft: false
tags: ["nextjs", "vercel", "business", "typescript", "tailwind"]
categories: ["Projects"]
summary: "Built a Next.js 16 site for KR Flooring with a 3D tilt gallery — 30 project photos, interactive mouse-reactive visuals. Deployed on Vercel for free."
ShowToc: true
---

KR Flooring is a tile installation business in Jacksonville, FL. They needed a web presence to showcase their work. I built a Next.js site with a 3D photo gallery that reacts to your mouse.

## The Problem

For a flooring business, photos ARE the product. Clients need to see finished installations to trust the crew. The site needed:
- A gallery that loads fast with 30+ high-res photos
- A memorable interactive element that makes visitors stay
- Free hosting with a custom domain

## The Build

The site is Next.js 16 with TypeScript and Tailwind CSS 4. The gallery uses a CSS 3D tilt effect — cards rotate toward the cursor, creating depth as you browse.

```
KR Flooring (github.com/Crow0077/kr-flooring)
├── Next.js 16 (App Router)
├── TypeScript
├── Tailwind CSS 4
├── 30 project photos
├── 3D tilt gallery (CSS transforms)
└── Deployed on Vercel (free tier)
```

## The 3D Gallery

Each photo card tracks mouse position and tilts in response. The closer you hover, the more dramatic the effect. Cards also scale up slightly and cast dynamic shadows that shift with perspective.

This takes a standard grid of photos and makes it feel alive — visitors naturally spend more time browsing because the interaction is satisfying.

## Deployment

Vercel's free tier handles everything:
- Automatic deploys on every git push
- Global CDN for fast load times
- Custom domain support

```bash
git push  # Vercel auto-deploys
```

## What I Learned

1. **CSS transforms are powerful.** No JavaScript animation library needed. The 3D tilt is pure CSS with mouse event listeners.

2. **Vercel + Next.js is a cheat code.** Zero config, instant deploys, free SSL.

3. **Interactive galleries sell work.** The tilt effect makes the gallery memorable. Clients spend more time looking at photos.

---

*Built with Next.js 16, TypeScript, and Tailwind CSS 4. Deployed on Vercel.*
