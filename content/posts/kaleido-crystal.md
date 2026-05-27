---
title: "Kaleido-Crystal — Generative Art from Blender Cycles"
date: 2026-05-27
draft: false
ShowToc: false
tags: ["generative-art", "blender", "creative-coding", "portfolio", "3d", "cycles"]
---

Procedural geometric art generated in Blender 5.1 with Cycles rendering on an RTX 4080 Super. Each piece starts with a UV sphere, then applies iterative extrusion and inset operations on randomly-selected faces, a helical twist modifier, bevel for clean edges, and premium PBR materials. Every seed produces a unique, unrepeatable form.

**Materials used:** Gold, Copper, Chrome, Glass, Carbon Fiber, Worn Metal
**Resolution:** 1080×1080, Cycles with OpenImageDenoise

---

### Gold (Seed 101)
![Gold Kaleido](/xhuljano-tech-blog/images/generative/kaleido_101.png)
*3 extruded iterations on 20-segment sphere, slight 3° twist. Gold PBR: 0.85/0.55/0.05 base, metallic 1.0, roughness 0.15.*

### Glass (Seed 202)
![Glass Kaleido](/xhuljano-tech-blog/images/generative/kaleido_202.png)
*24-segment sphere, 2 extruded iterations, 20° twist. Full transmission, IOR 1.45. The internal refractions create depth.*

### Copper (Seed 303)
![Copper Kaleido](/xhuljano-tech-blog/images/generative/kaleido_303.png)
*16-segment sphere subdivided twice then 3 extruded iterations, 8° twist. Warm copper tones: 0.72/0.35/0.15 base.*

### Worn Metal (Seed 404)
![Worn Metal Kaleido](/xhuljano-tech-blog/images/generative/kaleido_404.png)
*20-segment sphere, 2 extruded iterations, 22° aggressive twist. Worn metal: 0.4/0.38/0.35 base, roughness 0.5 for that aged look.*

### Carbon Fiber (Seed 40995)
![Carbon Fiber Kaleido](/xhuljano-tech-blog/images/generative/kaleido_40995.png)
*The first render — 128 samples (vs 24-32 for the others). 16-segment sphere, 2 extrusions, 18° twist. Dark metallic with industrial feel.*

---

### How It Works

The `KaleidoCrystal` generator is a Python script that runs inside Blender:

1. **UV Sphere** — base mesh with randomized segment count
2. **Subdivision** — optional 1-2 iterations to add geometric density
3. **Iterative Extrude** — randomly selects 30-50% of faces, extrudes along normals with random distance 0.2-0.8 units, then insets for faceted appearance. Repeated 2-5 times.
4. **Helical Twist** — vertex displacement across Z-axis with randomized angle 0-30°
5. **Bevel Modifier** — 0.025 width, angle-limited to 30° for crisp edges
6. **Material** — assigned from a PBR library (Gold, Copper, Chrome, Glass, Carbon Fiber, Worn Metal)
7. **Lighting** — 3-point area lighting + purple rim light from below
8. **Cycles Render** — 24-128 samples, OpenImageDenoise, 1080×1080

The entire generation is seeded — same seed always produces the same geometry.

### Tech Stack

- **Hardware:** NVIDIA RTX 4080 Super (16GB VRAM)
- **Software:** Blender 5.1, Cycles, Blender MCP
- **Render Time:** ~1-3 minutes per piece depending on geometry complexity and samples
