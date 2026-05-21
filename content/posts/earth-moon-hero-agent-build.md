---
title: "How I Built a 3D Earth Hero With an AI Agent Doing the Actual Work"
date: 2026-05-21
draft: false
tags: ["blender", "mcp", "ai-agents", "3d-rendering", "portfolio", "cycles", "homelab"]
categories: ["Projects"]
summary: "I directed. Hermes executed. Together we built a cinematic Earth+Moon animation in Blender 5.1 using NASA textures and 218 MCP tools — from a blank scene to a deployed portfolio hero."
ShowToc: true
---

Let me be clear about something upfront: I didn't build this hero animation. An AI agent did. I told it what I wanted, corrected it when it went wrong, and made the final call on what looked good. But the Blender scene? Built by Hermes. The Python scripts? Written by Hermes. The ffmpeg encoding? Hermes. The CSS that makes it fill your screen? Also Hermes.

This is what AI-assisted development looks like in practice.

## The Idea

My portfolio site needed a hero. Not a static gradient. Not a stock photo. Something cinematic that would make someone pause before scrolling. I had a GPU machine sitting in the other room — RTX 4080 Super, 16GB VRAM — and Blender 5.1 wired up with 218 MCP tools that an AI agent could control.

"So make me a 3D Earth and Moon orbiting in space."

That was the prompt. The rest was iteration.

## Attempt 1: Procedural Planets (Rejected)

Hermes built a solar system. Procedural materials. EEVEE renderer. Three planets, a sun, orbits, the works.

It looked like a screensaver from 2003.

The procedural Earth was a blue sphere with some noise displacement. The "stars" were a particle system that rendered as flat dots. The lighting was flat. Everything was flat. My exact feedback: "this looks like a 5-year-old drew it."

The agent had the right structure (spheres, orbits, camera animation) but the materials were fundamentally wrong. Procedural textures can't fake Earth — you need actual satellite imagery.

I sent it looking for free textures. It found [Solar System Scope](https://solarsystemscope.com/textures/) — NASA-derived 8K planetary maps under CC BY 4.0 license. Earth. Moon. Saturn. Stars. All free, all astronomically accurate.

## Attempt 2: NASA Textures, Wrong Renderer

With real textures applied, the scene improved dramatically. But it was still rendering in EEVEE — Blender's real-time engine. No ambient occlusion. No global illumination. The Moon looked pasted on. The Earth had no atmosphere glow.

I told Hermes to switch to Cycles and add denoising. Two hundred fifty-six samples per frame. The render time jumped from seconds to minutes per frame, but the difference was night and day. The Earth's oceans caught light properly. The Moon's craters cast real shadows. The starfield had depth.

## Attempt 3: The Space Wasn't Black

A subtle bug that took two iterations to catch: the background "world" material was emitting light. In Blender, the default world shader has a gray background color and a slight emission strength. In EEVEE this barely matters. In Cycles, it washes out the entire scene.

The fix was unintuitive: set World Background Strength to exactly 0.0. Not 0.1. Not 0.01. Zero. Also switch View Transform from "Filmic" to "Standard" — Filmic crushes blacks to prevent clipping in photography, which is exactly wrong for space. You WANT absolute black.

```python
# The critical two lines Hermes eventually landed on
world.node_tree.nodes["Background"].inputs[1].default_value = 0.0  # Strength
scene.view_settings.view_transform = 'Standard'  # Don't crush blacks
```

After this fix, the Earth hung in true black space. The transition from daylight to the dark side was clean. The Moon's shadow side disappeared into the void.

## The Final Scene

Here's what shipped:

| Element | Spec |
|---------|------|
| Earth | 128-segment UV sphere, radius 1.8, 8K texture |
| Moon | Radius 0.45, 8K texture, orbit radius ~2.0 |
| Camera | 1920×800, animated slow pan |
| Stars | 8K background texture on a large inward-facing sphere |
| Renderer | Cycles, 256 samples, OpenImageDenoise |
| Frames | 72 at 24 fps (3-second seamless loop) |
| Output | 1.5 MB MP4 via ffmpeg NVENC |

The critical positioning trick: the Moon orbits at Z=2.0 in the XZ plane. This keeps it always *in front of* the Earth from the camera's perspective. The orbit is slightly elliptical so the Moon drifts between close and far, creating depth.

```python
# Moon orbit keyframe (simplified)
moon.location.x = orbit_radius * math.cos(angle)
moon.location.z = orbit_radius * math.sin(angle)  # XZ plane, Z > 0 = in front
moon.location.y = earth.location.y  # Same height as Earth
```

## Blender API Gotchas

Blender 5.1 has API quirks that burned multiple iterations:

- **`ShaderNodeMixShader` socket is `'Factor'`**, not `'Fac'` like older Blender versions. Every tutorial online uses `'Fac'`. Every time Hermes copied a tutorial pattern, it broke.
- **`ShaderNodeOutputWorld` input is `'Surface'`**, not `'World'`. Same pattern — old docs, wrong socket name.
- **128+ sphere segments needed** for the 8K texture to look smooth. At 64 segments, the continents had visible polygonal edges. At 128, it's seamless. At 256, diminishing returns but no visible difference.

These aren't bugs in Blender. They're documentation drift. The API is version-specific, and LLMs trained on older Blender docs will confidently write wrong code.

## From Blender to Browser

The render produced 72 PNG frames. ffmpeg encoded them with NVENC on the RTX 4080:

```bash
ffmpeg -start_number 1 -framerate 24 \
  -i frame_%04d.png \
  -c:v h264_nvenc -cq 14 output.mp4
```

NVENC is the hardware encoder on NVIDIA GPUs. `-cq 14` is the quality setting (lower = better, 0-51 scale). At 14, the 72 frames compress to 1.5 MB with no visible artifacts. The deep black space background compresses extremely well, which is a nice side benefit.

The file went into Hugo's `static/` directory as `solar-hero.mp4`.

## Breaking Out of PaperMod's Box

The final challenge wasn't 3D — it was CSS.

PaperMod, the Hugo theme I use, wraps all content in a constrained `<main>` element with max-width and centered margins. The hero video needs to be full viewport width. You can't do that from inside a constrained container.

Hermes overrode the theme's `baseof.html` layout and injected the hero partial *before* the `<main>` element:

```html
<!-- layouts/baseof.html — hero before main, not inside it -->
<body>
  {{ partialCached "header.html" . .Page }}
  {{ if .IsHome }}
    {{ partial "hero.html" . }}      <!-- Full-width, outside main -->
  {{ end }}
  <main class="main">                 <!-- Constrained content below -->
    {{ block "main" . }}{{ end }}
  </main>
</body>
```

The hero partial uses `position: absolute` with `object-fit: cover` on the video, a radial gradient overlay to fade edges into the dark theme, and monospace text centered with subtle glow:

```css
#hero-wrap {
  width: 100%; height: 100vh; max-height: 900px;
  background: #020208; position: relative; overflow: hidden;
}
#hero-video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; opacity: 0.85;
}
#hero-overlay {
  position: absolute; inset: 0;
  background: radial-gradient(
    ellipse at center, rgba(0,0,0,0) 40%, rgba(2,2,8,0.7) 100%
  );
}
```

The overlay is the invisible detail that makes it work. Without it, the video's edges cut off sharply against the dark background. With it, the hero fades seamlessly into the page.

## What This Actually Cost

| Resource | Usage |
|----------|-------|
| My time | 2-3 hours (reviewing renders, giving feedback) |
| Agent tokens | ~800K tokens ($0.15 at OpenCode Go rates) |
| GPU render time | ~45 minutes (72 frames × ~40s each) |
| NASA textures | Free (CC BY 4.0 from solarsystemscope.com) |
| Blender | Free |
| Hosting | Free (GitHub Pages) |

Total cash spent: about 15 cents in API tokens.

## Why This Matters

I didn't learn Blender to build this. I didn't learn ffmpeg encoding or PaperMod's layout system. I directed an AI agent that already knew these things.

The skill isn't in knowing Blender's Python API or CSS layout tricks. The skill is in:
1. Recognizing when the output looks wrong ("that Earth looks like a 5-year-old's drawing")
2. Identifying what's missing ("we need real satellite textures, not procedural noise")
3. Catching subtle rendering bugs ("the space isn't actually black — check the world shader")
4. Knowing when to stop iterating and ship

This is what "agentic engineering" means in practice — taste, direction, and debugging instincts amplified by a tool that executes.

The agent built the scene. I decided what looked good. That division of labor is going to define a lot of creative and technical work in the next few years.
