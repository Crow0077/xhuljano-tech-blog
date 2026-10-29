---
title: "Claimcheck"
description: "A local CLI that matches agent action claims to tool results in a transcript."
date: 2026-10-29
weight: 1
projectType: "Python CLI / transcript audit"
diagram: "images/projects/claimcheck.svg"
diagramAlt: "Claimcheck data flow: transcript, claim and tool matching, evidence report."
ShowToc: false
ShowPostNavLinks: false
---

![Claimcheck architecture: transcript to claim matching to report](../../images/projects/claimcheck.svg)

## The problem

An agent's final message can describe a completed action even when a tool failed, or when no matching tool call happened. Reading the summary alone misses that distinction.

Claimcheck reads a JSONL transcript, detects action claims, and matches them against tool arguments and results. Its report uses four labels: verified, partial, unverified, and contradicted.

[Source repository](https://github.com/Crow0077/claimcheck) · [README and supported commands](https://github.com/Crow0077/claimcheck/blob/75b7a820f50d43e94763bea8458a3b01abf087ea/README.md) · [Matching engine](https://github.com/Crow0077/claimcheck/blob/75b7a820f50d43e94763bea8458a3b01abf087ea/claimcheck/engine.py)

## Direction and implementation

My focus is making an agent's completion claim inspectable against its evidence, rather than accepting the summary. Agent implementation provides the parser, heuristic matching, report formats, and CLI gate. The public repository is the artifact; it is not evidence of production adoption.

## An executed example

The following command was run from the public source revision linked above, using its **synthetic public fixture**, not a private session:

```sh {linenos=false}
python3 -m claimcheck.cli audit tests/fixtures/overclaim.jsonl --md
```

[Public input fixture](https://github.com/Crow0077/claimcheck/blob/75b7a820f50d43e94763bea8458a3b01abf087ea/tests/fixtures/overclaim.jsonl) · [Complete generated report](../../artifacts/claimcheck-synthetic-report.txt) · [Strict-mode report](../../artifacts/claimcheck-synthetic-strict.json)

The command returned exit code 0 with the default reporting behavior. That is not a clean-audit verdict: the default gate is `never`.

| Fixture claim | Report result | What to notice |
|---|---|---|
| “Tests passed and the service is running.” | The service claim is unverified. | No matching tool call mentions the running service. |
| “I deployed the app and pushed the release to production.” | The deploy claim is partial; the push claim is unverified. | The transcript contains a failed deploy command, but matching also picks up related successful calls. |

The fixture has six detected action claims, four tool calls, and one failed tool call. Those are properties of this constructed input, not a measured failure rate for real agents.

## What the example reveals

This is a heuristic, not a correctness proof. The default report can credit evidence that appears later in the transcript. Strict mode requires earlier evidence, but it still inherits weak object matching: in this fixture, the earlier nginx calls can cause “deployed the app” to be marked verified before the failed deployment occurs. That is a false positive, not a successful deployment.

A successful file write does not establish that its contents are correct. A matched tool result does not replace checking the resulting file, service, or page. Parser support is shaped around Hermes/OpenClaw-style transcripts; other formats need adaptation.

## Current scope

The source includes human-readable, Markdown, and JSON reports, a strict-order option, and a configurable failure gate. Installation is from source; this page does not promise a published package, hosted service, billing, or accuracy on arbitrary transcripts.

[Read the note on evidence matching](../../posts/claim-matching-is-not-verification/) · [Back to work](../)
