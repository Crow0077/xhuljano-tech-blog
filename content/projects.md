---
title: "Work"
date: 2026-05-12
draft: false
ShowToc: false
---

# Systems I directed agents to build

**Attribution:** I set goals, constraints and acceptance criteria; Hermes Agent and other agents did much of the research, code, configuration and tool operation. I reviewed results, pushed back on weak output and decided what to keep. These are not claims that I hand-coded everything.

## The homelab as an agent workbench

Three machines, different jobs: Node A is the daily-driver control machine running Hermes; Node B is the RTX 4080 Super GPU workstation for local inference and creative workloads when available; Pavilion hosts always-on services and receives backups. Work can use hosted models or a local-model lane depending on capability and resources. An agent is useful here because it can inspect a real system, make bounded changes and show the result—not because every automation is autonomous.

[Explore the interactive homelab model](../) · [How I work](../about/)

The model is an architectural illustration, **not live infrastructure telemetry**. It exposes no private systems or runtime metrics.


## Anatomy: interactive system figures

The [token press](../token-press/) is an agent-authored figure explaining a five-token rate limiter. Click to send a request, exhaust the bucket, then watch it refill. The visible counters and needle share the same simulation. Browser interaction and line-end checks passed; full collision certification was not completed.

The [three-node homelab model](../lab-machine/) uses the same Anatomy geometry kit. Selecting a node moves the carriage and changes the explanation. It deliberately does **not** animate pretend live jobs.

## Agent-directed creative work

The lab has also been used for Blender rendering and local AI image/video experiments. My role is creative direction, reference selection and judging results; agents handle substantial scripting and execution. Prototype quality varies, so I show finished artifacts rather than treating every experiment as a shipped product.

---

**What I do myself:** choose the problem, set boundaries, check whether the output actually works, reject misleading claims and decide what goes public. That is different from claiming sole authorship of the implementation.
