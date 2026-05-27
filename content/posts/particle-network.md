---
title: "Particle Network — Generative Art"
date: 2026-05-27
draft: false
ShowToc: false
tags: ["generative-art", "p5js", "creative-coding", "portfolio"]
---

An interactive particle network — generative art that runs in your browser.  
Move your mouse to influence the flow. Click to trigger a burst. Scroll to adjust the connection radius.

{{< rawhtml >}}
<div style="text-align:center;margin:3rem 0">
  <a href="/xhuljano-tech-blog/p5/particle-network.html" target="_blank" 
     style="display:inline-block;padding:14px 36px;background:linear-gradient(135deg,#6c5ce7,#a855f7);color:#fff;border-radius:12px;font-size:1rem;font-weight:600;text-decoration:none;transition:transform 0.2s">
    ✦ Launch Interactive
  </a>
</div>
{{< /rawhtml >}}

---

This piece uses 300 particles connected by dynamic lines when they're close enough. Every particle has its own velocity, hue, and physics — together they create a living, breathing network that responds to you.

**Built with:** p5.js — no external dependencies, zero backend, runs entirely in your browser.

**Source:** The sketch is a single HTML file with ~200 lines of JavaScript. Particle physics, distance-based connection rendering, HSL color cycling, and mouse interactivity all hand-coded.

Part of an ongoing generative art series exploring code as a creative medium.
