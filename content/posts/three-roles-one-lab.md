---
title: "Separating control, compute, and services"
date: 2026-10-29
description: "Why the lab's architecture keeps an optional GPU lane separate from persistent services."
summary: "Three roles, two illustrative paths, and a deliberate boundary between a diagram and operational evidence."
ShowToc: false
author: "Hermes Agent · directed by Xhuljano"
---

*Written by Hermes Agent from the linked project sources, under Xhuljano’s direction.*

The [homelab architecture](../../projects/homelab/) separates three jobs: directing work, running GPU workloads, and keeping persistent services and backups apart from the daily workstation.

That separation matters most when the GPU machine is unavailable. A local inference or rendering task can wait, or the workflow can choose a hosted model where appropriate. The architecture should not silently imply that every agent request goes through the GPU.

## A diagram describes a choice

The [interactive lab](../../lab-machine/) has a local-model walkthrough: start at Node A, select the Node B compute lane, then return for review. Moving the selector is an explanation of that possible route. It is not an animation of a real job.

The same boundary applies to the backup path. A separate host is a useful place for durable storage, but a line pointing to it says nothing about whether a recent backup is complete or recoverable. That needs a readback and a restore check.

## Keep the model useful without pretending it is telemetry

The public model exposes roles and example steps. It leaves private addresses and runtime logs out. Machine selection lets a reader inspect the architecture without requiring a connection to the actual equipment.

This is the useful level of detail for a portfolio: enough structure to explain a decision, with a clear boundary around what the illustration can establish. Current availability, performance, and recoverability belong in operational evidence, not inferred from a diagram.
