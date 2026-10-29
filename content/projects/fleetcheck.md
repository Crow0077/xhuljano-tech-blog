---
title: "Fleetcheck"
description: "A local audit CLI for scheduled jobs, outputs, skills, and agent-fleet drift."
date: 2026-10-29
weight: 2
projectType: "Python CLI / fleet audit"
diagram: "images/projects/fleetcheck.svg"
diagramAlt: "Fleetcheck reads agent state, applies audit rules, and produces findings and drift history."
ShowToc: false
ShowPostNavLinks: false
---

![Fleetcheck architecture: state files to audit rules to findings and history](../../images/projects/fleetcheck.svg)

## The problem

A scheduled job can exist without producing a useful result. Stale output, repeated failures, a missing script, and abandoned job directories need a different view than a list of configured jobs.

Fleetcheck reads local agent state and produces ranked findings. Its source includes audits for jobs and skills, token-based cost estimates, snapshots, and drift/regression comparisons.

[Source repository](https://github.com/Crow0077/fleetcheck) · [README and supported commands](https://github.com/Crow0077/fleetcheck/blob/a4d43f5ecfb86e77ddc82694f4be20b1a7285aec/README.md) · [Audit CLI source](https://github.com/Crow0077/fleetcheck/blob/a4d43f5ecfb86e77ddc82694f4be20b1a7285aec/fleetcheck/cli.py)

## Direction and implementation

My focus is whether configured agent work is still useful and inspectable, rather than how much configuration exists. Agents implement the local state inspection, audit rules, CLI, and history comparison. The public source is the deliverable here, not a commercial monitoring service.

## Inspectable artifacts

- [Synthetic fleet test](https://github.com/Crow0077/fleetcheck/blob/a4d43f5ecfb86e77ddc82694f4be20b1a7285aec/tests/test_fleetcheck.py): constructs jobs with known defects, including repeated failure, missing scripts, stale output, and an orphan directory.
- [Drift test](https://github.com/Crow0077/fleetcheck/blob/a4d43f5ecfb86e77ddc82694f4be20b1a7285aec/tests/test_drift.py): exercises snapshot and regression behavior.
- [Cost implementation](https://github.com/Crow0077/fleetcheck/blob/a4d43f5ecfb86e77ddc82694f4be20b1a7285aec/fleetcheck/cost.py): makes the estimate logic inspectable.

These links describe test code, not a claim that every real installation has been validated. No private fleet report or operational telemetry is published here.

## Boundaries

Rules detect specific signals in supported state formats; a score is not proof that a job's output is correct. A stale file can warrant investigation without proving the whole workflow failed. Cost estimates derive from token logs and price assumptions, not provider invoices.

The README documents Hermes, OpenClaw, and nanobot support. Optional system inspection uses local commands such as `ss` and `systemctl`; file-based findings and live machine checks have different scopes. Installation is from source. Hosted dashboards, a paid tier, and billing are not presented as available products.

## How it fits with Claimcheck

Fleetcheck inspects the surrounding setup. [Claimcheck](../claimcheck/) inspects completion claims inside a transcript. Neither replaces a readback of the actual result.

[Back to work](../)
