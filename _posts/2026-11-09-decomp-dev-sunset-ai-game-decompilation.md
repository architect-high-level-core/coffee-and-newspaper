---
layout: post
title: "Why decomp.dev Is Shutting Its Doors: What AI Changed in Game Decompilation"
date: 2026-11-09 07:30:00 +0100
slug: decomp-dev-sunset-ai-game-decompilation
excerpt: "decomp.dev, a central progress tracker for matching game decompilation projects, has disabled its main index and new project submissions. Its administrator says recent AI models can now speed up decompilation a lot, but that hostile AI forks and rushed ports have broken the community. Here is what happened, what decompilation actually is, and what it means for AI-assisted reverse engineering."
tags: [AI, decompilation, reverse engineering, video games, game preservation, open source, AI coding agents, decomp.dev, community, REA]
description: "decomp.dev, a central progress tracker for matching game decompilation projects, has disabled its main index and new project submissions."
image: /assets/img/2026-11-09-decomp-dev-sunset-ai-game-decompilation.jpg
image_alt: "An early-1990s Gravis PC GamePad taken completely apart on a white cloth, with its plastic shell halves, circuit board, cable and coloured buttons laid out side by side"
image_credit: "Photo: FreeMediaKid!, “Gravis PC GamePad, disassembled” (2025), CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Gravis_PC_GamePad,_disassembled.jpg (resized)"
image_license: "CC BY-SA 4.0 (Creative Commons Attribution-ShareAlike 4.0 International)"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "Top-down photo of a Gravis PC GamePad, an early-1990s game controller for DOS computers, fully disassembled on a white paper towel: the two halves of the cream-coloured housing, grey rubber button membranes, the purple direction pad and coloured buttons, and a brown circuit board attached to a long grey cable with a 15-pin game-port connector. The picture stands for taking gaming technology apart to understand how it works. It does not show decomp.dev, any decompilation project, AI tool or game discussed in this article."
---

One of the best-known hubs of the game decompilation scene is stepping back. **decomp.dev**, a website that tracked the progress of dozens of community projects rebuilding the source code of classic games, has disabled its main index and the option to add new projects. Its administrator, who posts as **@encounter**, names AI as the reason, but not in the way you might expect.

The statement does not say AI is useless for decompilation. It says the opposite: recent models have become good enough to speed up the work significantly. The problem, according to the announcement, is what some people now do with that speed.

This article explains what happened, what "matching decompilation" means, what the administrator actually wrote, and what the episode tells us about AI-assisted reverse engineering in general.

**A note on sources:** The main source is the sunsetting statement published on [decomp.dev](https://decomp.dev/) itself, read on November 9, 2026. Engadget reported on it on November 8, 2026 ([Engadget](https://www.engadget.com/2307604/game-reverse-engineering-community-latest-ai-casualty/)). Statements about model abilities below are the administrator's own assessment, not independent benchmark results.

## Key terms in plain words

- **Decompilation** – turning a program's compiled machine code (what the computer actually runs) back into human-readable source code, for example in C or C++.
- **Matching decompilation** – a strict form of decompilation: the rebuilt source code must compile into exactly the same machine code as the original game. That makes the result verifiable, but very hard to achieve.
- **Port** – a version of a game made to run on a different platform, for example a console game running natively on a PC.
- **Static recompilation** – translating a game's machine code directly into code for another platform, without fully rebuilding readable source code.
- **Fork** – a copy of an open-source project that someone continues separately from the original team.

## What is decomp.dev?

According to its own statement, decomp.dev was started in 2024 to centralize progress tracking for matching decompilation projects and to grow a community around them. Each project had a page with progress figures, and the main index worked like a leaderboard. The administrator writes that the site was "originally designed to gamify decompilation": watching the percentage go up kept volunteers motivated when "every fraction of a percent took real human effort."

## What has changed

The announcement describes three stages:

1. **Earlier experiments with mixed results.** AI has been tried in decompilation for years. The statement says that with model releases in early 2026 it became clear that models had apparently learned the community's specific tools. Results were "decent" inside clean, well-documented codebases, but still needed a lot of human cleanup, and the cost per task was, in the administrator's words, "prohibitively expensive relative to the results." The statement also mentions "cheating": code that compiles to the same machine code but could not reasonably pass as what the original developers wrote.
2. **Much stronger recent models.** The statement says newer models follow complex instructions better, cross-reference symbols and debug information, write more natural code, and are "exceptionally good permuters" — they write small scripts that try many variants of source code until one matches. They also stay focused on long tasks, and do all this faster and cheaper than before.
3. **The conclusion.** "With the right guidance, human input, and code reviews, AI can expedite the decompilation process in a significant way," the administrator writes. "What is also now clear is that the community aspect of decompilation has been broken."

## The three problems named in the statement

The administrator lists specific behaviours, attributed to "bad actors," that abuse the open-source nature of the projects:

- **Hostile AI forks.** People copy an ongoing decompilation project and "finish" it with AI. Some teams avoid AI for legal or ethical reasons; others use AI themselves but do not want low-effort "drive-by contributions." Either way, these forks are described as putting "little to no effort into meaningfully contributing."
- **Racing to release ports.** Porting is much easier than decompiling, the statement says, especially with tools that humans already built. Opportunists have "frequently raced to release a half-baked, barely-functional port" from decompilations they did not help create.
- **Confusing decompilation with ports.** The community has long argued that decompilation is primarily research: understanding how games work. The administrator says content creators and some forums now use "decomp" simply to mean "PC port."

Put together, the statement says, the leaderboard idea has turned into "a hollow numbers game," driven partly by people "who just want to burn tokens to make number go up."

## What happens now

According to the announcement:

- decomp.dev **keeps tracking existing projects** and keeps serving individual project pages and historical data.
- The **main index and adding new projects are disabled.**
- The site's code has never had an open-source license. The administrator reserves all rights to it and says any replica must not use it.

Asked why the site does not simply ban AI-assisted projects, the administrator answers that AI is not the issue by itself, that "slop" is hard to define and moderate, and that as "a sole hobbyist" they lack the energy to judge hundreds of projects consistently.

## Why this matters beyond games

**Facts first:** a single, volunteer-run tracker has scaled back. The decompilation projects themselves are separate open-source repositories and are not deleted by this decision.

**Interpretation (ours, not the administrator's):** the case shows a pattern that other open-source communities may recognise. When AI makes a hard task cheap, the bottleneck moves from *doing the work* to *reviewing, verifying and coordinating it*. Public progress numbers then reward speed, not understanding. Engadget's report also suggests that other decompilation communities could face similar splintering; that is a prediction, not an observed fact.

For anyone using AI for reverse engineering — whether on games, file formats or old software — a few practical lessons follow from the statement:

- **Verification matters more than speed.** Matching decompilation has a built-in test (does it compile to the same bytes?), yet the administrator still describes AI "cheating" that passes the test but is not plausible source code. Human review remains necessary.
- **Respect existing projects.** Contributing to a team on its terms is different from forking its work and racing to publish.
- **Keep research and redistribution apart.** Understanding how software works is one thing; releasing ports of commercial games raises separate legal questions about copyright and game assets.

Open tools that connect AI agents to local analysis software, such as [REA (Reverse Engineer Anything)](https://github.com/morluto/rea), make this kind of work more accessible. The decomp.dev statement is a reminder that the tool does not decide whether the result helps or harms a community — the way people use it does.

## Summary

decomp.dev has closed its public index and stopped accepting new projects. Its administrator says recent AI models can genuinely accelerate matching decompilation when guided and reviewed by humans, but that hostile AI forks, rushed ports and a leaderboard culture of "number go up" have broken the community side of the hobby. Existing project pages and historical data remain online.

## Sources

- [decomp.dev – "Sunsetting decomp.dev" (statement by @encounter)](https://decomp.dev/)
- [Engadget – "The game reverse engineering community is the latest casualty of AI" (Nov 8, 2026)](https://www.engadget.com/2307604/game-reverse-engineering-community-latest-ai-casualty/)
- [GitHub – morluto/rea: REA, Reverse Engineer Anything](https://github.com/morluto/rea)
