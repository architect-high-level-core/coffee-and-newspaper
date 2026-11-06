---
layout: post
title: "AI Capex at Scale, Voter Pushback and Cryptographic Proofs: Five Tech Stories From Early November 2026"
date: 2026-11-06 07:40:00 +0100
slug: ai-capex-voter-backlash-flashprove
excerpt: "Anthropic discloses hundreds of billions in locked-in AI infrastructure deals, U.S. midterm voters push back against local data centers, Anthropic open-sources FlashProve to verify which model answered, SpaceX races to build a huge AI cloud, and OpenAI ships a Git backend built for agent-driven code surges. Plus a small surprise from Uber."
tags: [AI, Anthropic, OpenAI, SpaceX, data centers, FlashProve, midterms 2026, AI infrastructure, coding agents, Forward Future, X]
description: "Anthropic discloses hundreds of billions in locked-in AI infrastructure deals, U.S. midterm voters push back against local data centers, Anthropic…"
image: /assets/img/2026-11-06-ai-capex-voter-backlash-flashprove.jpg
image_alt: "Open compute rack filled with stacked Cray XE6 AMD Opteron modules"
image_credit: "Image: Dcoetzee, “Front of open Hopper Cray XE6 rack”, CC0 1.0 (public domain dedication), via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Front_of_open_Hopper_Cray_XE6_rack.jpg (resized)"
image_license: "CC0 1.0"
image_license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
image_description: "Photograph of an open Hopper Cray XE6 compute rack with rows of hot-swappable AMD Opteron modules. Shared on Wikimedia Commons under CC0. It stands for high-performance computing and data-center hardware in general and does not show Anthropic, SpaceX, OpenAI or any product named in this article."
---

Early November 2026 is dominated by a simple tension: companies are locking in enormous spending on AI compute, while voters and communities push back on the power plants and data centers that spending requires. At the same time, labs are shipping quieter but important tools — cryptographic proofs that an answer really came from a named model, and Git systems built for armies of coding agents.

This roundup covers five current stories plus one short surprise. It is written for a general technical audience.

**Note on sources:** Several items below come from **X news summaries** (AI-generated digests of posts on X). X marks those digests as possibly inaccurate. Where we rely on them and have not checked the underlying filings or press pages ourselves, we say so clearly. Forward Future items are taken from the November 5, 2026 daily briefing page.

**Four short terms:**
- **Capex** — capital expenditure: money spent on lasting assets such as data centers, chips and power equipment.
- **zkSNARK / cryptographic proof** — a short mathematical proof that a computation was done correctly, without revealing secret details such as model weights.
- **Coding agent** — an AI system that reads a codebase, edits files, runs tests and iterates, rather than answering once in chat.
- **Inference** — the step where a trained model answers a question or generates code; the everyday use of AI, as opposed to training.

## 1. Anthropic discloses roughly $895 billion in AI infrastructure commitments

According to an X news summary from November 5–6, Anthropic’s amended S-1 filing (as of late September 2026) lists about **$895.4 billion** in purchase commitments and leases, mostly for AI compute. Named partners in the summary include Broadcom (about $161 billion), Google ($121 billion plus up to $150 billion more), SpaceX (up to $121 billion) and Amazon ($110 billion). The same summary says Anthropic reported about $17 billion in Q3 revenue and an annual run rate near $68 billion, with a possible Nasdaq listing under the ticker **ANT** and informal valuation talk in the $1.5–2 trillion range.

We have **not** read the SEC filing ourselves for this article. Treat the dollar figures as claims from an X summary until checked against the original S-1.

Why it matters: even if some of the numbers shift, the direction is clear — frontier labs are signing multi-year, hard-to-cancel deals for chips, cloud and power far beyond ordinary software company spending.

**Original article:** [X News – Anthropic Reveals $895 Billion AI Infrastructure Commitments Ahead of IPO](https://x.com/i/trending/2118441520319680789)

## 2. Midterm voters push back on AI data centers

Exit-poll and local-ballot reporting summarised on X says many U.S. voters treated AI and data centers as a neighbourhood issue, not only a national tech story. One summary cites exit polls in which a majority said AI would hurt society more than help it, and a large majority opposed new data centers in their own area. Dozens of local ballot measures reportedly passed restrictions or bans. OpenAI’s response, according to the same summary stream, includes a “Community Compact” promising to cover electricity costs, drop NDAs and share data on water and noise.

Forward Future’s November 5 briefing adds a calmer national frame: NBC exit polls put AI and data centers last among the issues voters called important, behind corruption, costs, immigration and Iran — so local anger and national ranking can both be true.

Again: election and poll figures here are from summaries, not from our own check of official canvasses.

Why it matters: compute build-outs now have a political cost. Companies that only talk about gigawatts may find projects delayed by local votes.

**Original articles:**
- [X News – Voters Reject AI Data Centers in 2026 Midterms](https://x.com/i/trending/2117839373303751046)
- [Forward Future – China’s AI Labs, OpenAI’s Security Failures, & SpaceX’s AI Cloud (Nov 5, 2026)](https://forwardfuture.com/newsletter/daily/2026-11-05/china-s-ai-labs-openai-s-security-failures-spacex-s-ai-cloud)

## 3. FlashProve: cryptographic ID for AI model answers

Anthropic released **FlashProve**, an open-source research prototype that lets a user verify that an answer came from a specific model without exposing private weights. Forward Future describes it as a way to detect if a provider quietly swapped in a cheaper model or misrepresented a benchmark. Anthropic says the research is **not yet planned for product deployment**.

X summaries add technical colour (hash-based zkSNARK-style proofs, prototype speeds on large open models, proof sizes in the tens of megabytes per thousand tokens). Those numbers are from X digests; the Forward Future description is enough for the core claim: **proofs over promises** for outsourced inference.

Why it matters: as more work is delegated to remote APIs and agent platforms, “which model actually answered?” becomes a trust and compliance question, not only a curiosity.

**Original articles:**
- [Forward Future – Nov 5, 2026 daily (FlashProve section)](https://forwardfuture.com/newsletter/daily/2026-11-05/china-s-ai-labs-openai-s-security-failures-spacex-s-ai-cloud)
- [X News – Anthropic’s FlashProve Enables Cryptographic AI Model Verification](https://x.com/i/trending/2118054559696187454)

## 4. SpaceX’s push toward a giant AI cloud

SemiAnalysis, cited by Forward Future, says SpaceX has about **3.6 gigawatts** of data-center capacity under construction and could reach roughly **13 gigawatts** in 2027. The plan reportedly reuses rocket campuses, adds new sites and leans on Tesla-made power equipment to shorten build time. Forward Future notes that, if the plan holds, SpaceX would add about as much capacity in 18 months as Google built over nearly three decades.

This is an industry estimate relayed by a newsletter, not a SpaceX press release we verified line by line.

Why it matters: the AI race is increasingly a power-and-construction race. Rocket companies with land, power engineering and vertical integration are no longer odd entrants.

**Original article:** [Forward Future – Nov 5, 2026 (The World’s Biggest AI Cloud)](https://forwardfuture.com/newsletter/daily/2026-11-05/china-s-ai-labs-openai-s-security-failures-spacex-s-ai-cloud)

## 5. OpenAI’s Pando: a Git backend for agent-driven code floods

According to an X news summary, OpenAI built **Pando**, a Git storage/backend system for a monorepo flooded by Codex coding agents and human engineers. Claims in the summary: median push latency cut by nearly 80%, about a petabyte of Git data served daily, packfiles in blob storage, high cache hit rates on fetches, and a core designed by one engineer while Codex agents implemented much of it in Rust in roughly ten weeks. OpenAI reportedly contributed fixes upstream to Git and may open more of Pando later.

We have not audited OpenAI’s engineering blog for this piece; label the performance numbers as **per the X summary**.

Why it matters: when agents commit constantly, classic developer tools become the bottleneck. Infrastructure that was fine for humans can break under agent throughput — a preview of what many teams will face as coding agents scale.

**Original article:** [X News – OpenAI Unveils Pando Git Backend for AI-Driven Code Surges](https://x.com/i/trending/2117416317305131207)

## Bonus context worth watching

- **METR report (X summary):** AI tools are said to have roughly doubled the pace of some Anthropic R&D work relative to historical rates, with gains driven more by tools than by extra compute alone. ([X News](https://x.com/i/trending/2118427442922901851))
- **China’s always-on AI labs (Forward Future):** national efforts to link datasets, models, compute and robotic laboratories for continuous experiments in drugs, materials and solar cells, including facilities aiming at hundreds of prototypes per day. ([Forward Future Nov 5](https://forwardfuture.com/newsletter/daily/2026-11-05/china-s-ai-labs-openai-s-security-failures-spacex-s-ai-cloud))
- **Microsoft Maia 300:** Forward Future says Microsoft plans to deploy its in-house Maia 300 accelerator in 2027 as a primary inference chip for its own products.

## Surprise: Uber’s AI agents booked… four rides

During Halloween week, Uber says AI agents booked **four** rides and placed about **500** Uber Eats orders, while the company handled roughly **320 million** trips and orders overall. CEO Dara Khosrowshahi noted that booking in the app already takes about 50 seconds, so agents have little time to save. Uber still sees assistants as a future demand channel.

It is a useful antidote to hype: agent commerce can be real and still tiny.

**Original article:** [Forward Future – Nov 5, 2026 (Agents Booked Four Uber Rides)](https://forwardfuture.com/newsletter/daily/2026-11-05/china-s-ai-labs-openai-s-security-failures-spacex-s-ai-cloud)

## What to take away

1. **Capex is political.** Multi-hundred-billion commitments and multi-gigawatt campuses collide with local ballot boxes.
2. **Trust tooling is catching up.** FlashProve is early research, but the problem it names — proving which model answered — will grow with agent platforms.
3. **Agent scale breaks old tools.** Pando is one company’s answer to Git under agent load; most organisations are not ready for that volume.
4. **Adoption is uneven.** SpaceX may build enormous capacity while Uber’s agents still book four rides. Both facts can be true in the same week.

We did not invent figures. Where a claim rests only on an X news digest, it is labelled as such. Prefer the Forward Future and original company pages when you need to act on a number.
