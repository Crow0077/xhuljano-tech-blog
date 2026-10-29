---
title: "Three-machine homelab"
description: "A documented architecture separating control, GPU compute, and persistent services."
date: 2026-10-29
weight: 3
projectType: "Architecture / interactive walkthrough"
diagram: "images/projects/homelab.svg"
diagramAlt: "Homelab architecture: Node A for control, Node B for GPU compute, Pavilion for services and backups."
ShowToc: false
ShowPostNavLinks: false
---

![Three roles: control, GPU compute, and persistent services](../../images/projects/homelab.svg)

## Why split the roles

A daily workstation, a GPU workload, and a persistent service have different availability needs. Keeping them separate lets a compute task be optional without making every service depend on that workstation.

| Role | Intended responsibility |
|---|---|
| Node A / control | Daily workstation, Hermes workflow, task direction, and review. |
| Node B / compute | Local inference, rendering, and media experiments when available. |
| Pavilion / services | Separate host for persistent services and backups. |

These are documented capabilities and design roles, not current machine status, an uptime claim, or a guarantee of backup integrity.

## Direction and implementation

My decisions are the separation of roles, boundaries on what goes public, and review of the workflow. Agents implement much of the configuration and the public illustration. The interactive model is deliberately user-stepped so a possible workflow is not mistaken for an observed job.

[Open the interactive lab](../../lab-machine/) · [Walkthrough source](https://github.com/Crow0077/xhuljano-tech-blog/blob/main/site-tools/lab/build.mjs)

## Two example paths

**Local model task:** start at the controller, use the GPU lane when available, then bring the result back for inspection. Hosted models remain an option; this architecture does not imply all work runs locally.

**Backup verification:** initiate a bounded check, use the separate storage host, then inspect readback or restore evidence. The animation explains the route. It does not perform a backup or establish recoverability.

## The public artifact

Select a machine to inspect its role, choose a walkthrough, and step forward or back. Machine selection, keyboard controls, and reduced-motion behavior belong to the illustration; no private addresses, logs, or live telemetry are required.

The Earth-and-Moon Blender render on the [homepage](../../) is another artifact from agent-directed work: agents built the scene and render under my direction and review. It is a creative output, not evidence of infrastructure performance.

## Limits

This page is an architecture note, not a deployment guide. It omits private topology and operational state. Recovery must be established with a real restore check, and any claim about current service availability needs a fresh readback outside this illustration.

[Read the architecture note](../../posts/three-roles-one-lab/) · [Back to work](../)
