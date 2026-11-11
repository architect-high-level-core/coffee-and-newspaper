---
layout: post
title: "Claude Fable 5.2: What’s New, What Testers Found, and What It Costs (November 2026)"
date: 2026-11-11 22:30:00 +0100
slug: claude-fable-5-2-review-berman
excerpt: "Anthropic released Claude Fable 5.2 and Mythos 5.2 on 9 November 2026, aimed at the hardest technical and long-horizon work. This guide separates official specs and prices from company claims, Matthew Berman’s field tests, other voices on X and Reddit, independent benchmarks, and the recurring criticism: it is capable, and it is expensive. Anthropic still recommends Claude Opus 5.5 for everyday use."
description: "Status check, 11 November 2026: Claude Fable 5.2 and Mythos 5.2 specs, pricing and availability; Anthropic’s labelled claims; Matthew Berman’s tests and posts; views from Artificial Analysis, Simon Willison, Ethan Mollick and Reddit; Zapier, Plotly and cost criticism; short notes on Anthropic’s IPO roadshow and Gemini 4 Carbon."
tags: [AI, Anthropic, Claude, Claude Fable 5.2, Claude Mythos 5.2, Claude Opus 5.5, Matthew Berman, Artificial Analysis, Simon Willison, Ethan Mollick, benchmarks, pricing, Gemini 4 Carbon, IPO]
image: /assets/img/2026-11-11-cern-data-centre.jpg
image_alt: "The exterior of the CERN Data Centre, a long technical building with ventilation and plant equipment under a partly cloudy sky"
image_credit: "Photo: Mramoeba (Wikimedia Commons user), “CERN Data Centre” (2024, uploaded 1 March 2025), CC0 1.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:CERN_Data_Centre.jpg (scaled down to 1920 px width, otherwise unchanged)"
image_license: "CC0 1.0"
image_license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
image_description: "Photograph of the exterior of the CERN Data Centre in 2024. It stands for the kind of computing infrastructure that large AI models run on. It does not show Anthropic, Claude, or any facility operated by Anthropic."
---

Anthropic released **Claude Fable 5.2** and **Claude Mythos 5.2** on **9 November 2026**. The names are easy to mix up with Claude Opus or Sonnet. They are a different, higher tier: models Anthropic says are for the hardest technical work, not for everyday chat. This article is a status check as of **11 November 2026**. We separate **official specifications**, **company claims**, **independent tests and reviews**, and **opinions**. Where we could not confirm something, we say so in its own section near the end.

A companion article published the same evening, [*Qwen3.8-Max and Today’s Qwen4-Max Preview: Price, Open Weights and an Unfinished Story (November 2026)*](/2026/11/11/qwen-3-8-max-qwen4-preview/), looks at Alibaba’s Qwen models, including an open-weight flagship from August and a preview that opened today.

## The short version

- **Fable 5.2 is real, and it is not a misheard “Opus 5.2”.** It is Anthropic’s public model for demanding reasoning and long-horizon agent work. Mythos 5.2 is the same underlying model with fewer cyber and biology safeguards, available only through Anthropic’s verification programmes.
- **The list price is lower than Fable 5.1, but a completed task can still be very expensive.** Official API prices are $8 per million input tokens and $40 per million output tokens, down from $10 and $50. Testers and benchmark groups still report high costs once the model thinks and uses tools for a long time.
- **Anthropic itself says most people should start with Claude Opus 5.5.** Fable and Mythos are for the jobs that still fail at a high effort setting on Opus.
- **Matthew Berman, after early access, called it the best model he has ever used** — and also documented five-figure estimated API costs on some of his demos.
- **Independent leaderboards are strong but not uniform.** Artificial Analysis places Fable 5.2 first on its Intelligence Index v5 at the highest effort setting, while also saying it is weaker, or only level with other Claude models, on some agent and terminal-coding tests. Zapier’s AutomationBench has Gemini 4 Carbon slightly ahead.
- **Two related events landed on 10 November:** Anthropic opened the roadshow for a proposed IPO, and Google made Gemini 4 Carbon generally available.

## What Fable 5.2 and Mythos 5.2 actually are

A **token** is a chunk of text the model reads or writes, often a short word or part of a word. Prices are quoted per million tokens. A **context window** is how much the model can keep in view at once. Fable 5.2 and Mythos 5.2 have a **1 million token** context window and can write up to **128,000** output tokens. Anthropic says “adaptive thinking” is always on, and that the default **effort** setting is `high`. The official knowledge cutoff is **June 2026**.

The API model IDs are `claude-fable-5-2` and `claude-mythos-5-2`. Anthropic says the two share the same underlying model. **Fable** has stronger cybersecurity and biology safeguards and is the public version, including for Pro, Max, Ultra, Team and Enterprise users. **Mythos** is for organisations in Anthropic’s Life Sciences and Cyber Verification Programmes, for work that Fable’s filters would otherwise block.

**Pricing, as published by Anthropic:** $8 per million input tokens and $40 per million output tokens, down from $10 and $50 on Fable 5.1 and Mythos 5.1. Cache reads are $0.20 per million tokens. Optional **fast mode** is $16 / $80, and is described as speeding up token generation by up to 2.5 times. Anthropic also says outputs are up to 30% faster than version 5.1 even before fast mode. Cache-write and batch prices are on the official pricing pages.

Fable 5.2 is listed on the Claude API, Amazon Bedrock, Google Cloud and Microsoft Foundry. For everyday work, Anthropic’s own advice is to **start with Claude Opus 5.5**, then move up to Fable or Mythos if needed, or down to Sonnet 5.5 or Haiku 5.5. Fable can also act as an **advisor** that a smaller model consults, or as an **orchestrator** that hands simpler work to smaller models.

**Effort settings** such as low, medium, high, xhigh, max and, in some products, Ultra or Ultra Code, change how much thinking and tool use is allowed. They are not separate models. A **benchmark** is a fixed set of tasks used to compare models; a high score is useful, but it is not the same as success on your own work.

## Anthropic’s claims, labelled as claims

The launch post, dated 9 November 2026, includes results that should be read as **Anthropic’s claims**, not as facts we have independently checked.

The company says that during prerelease testing the models helped its engineers complete otherwise-infeasible software migrations, designed three working electronic devices from scratch, solved two open problems in the physics of black holes, made substantial progress on robotics evaluations, and formalized the proof of Fermat’s Last Theorem in the Lean proof language in 30 hours, using about 1,000 agents. It says an earlier research version needed 11 days with more human guidance, and that Opus 5.5, in the same 1,000-agent setup, reached only about 27% in 30 hours. These are extraordinary statements from the vendor. We have not audited the proofs, the physics problems or the hardware.

Anthropic also says it ran extensive safety testing, that high-stakes misalignment risks remain low, and that it held the model back from some capabilities that could most directly accelerate AI development (often discussed as recursive self-improvement, or RSI). It says Fable 5.2’s cyber and biology safeguards are as robust as those of 5.1, with fewer unnecessary blocks. Cybersecurity scores in the launch materials are often reported for **Mythos**, not for public Fable, which is designed to refuse many of those tasks. Anthropic also publishes its own capability table against Fable 5.1, Opus 5.5, GPT-6 Astra and Gemini 4 Carbon; those figures are vendor-reported. Independent numbers follow below.

## Matthew Berman’s tests and posts

Matthew Berman (@MatthewBerman), who writes at Forward Future, had early access and posted a dense set of reviews on the evening of 9 November 2026 (times below are Europe/Vienna, UTC+1).

In a long post at 20:14 that evening, he wrote that he had “burned over 100 billion tokens early testing Fable 5.2” and that it is “BY FAR the best model I’ve ever used.” He said it was the most autonomous model to date: given a task with little direction, it “makes assumptions that 99 times out of 100 are exactly what I would have done.” He described it as unusually good at finding bugs in his codebases, as the most capable model he has used for 3D work in Unreal Engine and Blender, and as “SUPER fast” even without fast mode, because it takes direct paths rather than getting lost. He said Ultra Code finished large codebase reviews in 10 to 20 minutes, but that he would probably not use that mode because it would burn his subscription quota too quickly. Completeness, he wrote, kept surprising him: an Excel clone with claimed feature parity, a Gears of War clone, a replica of Tokyo in Unreal, often with few follow-up prompts. He also said he would still likely prefer Opus 5.5 day to day, “because I can run Opus nearly 24/7 and rarely run out of quota,” and would switch to Fable 5.2 for planning and the hardest jobs. ([X post](https://x.com/MatthewBerman/status/2119871207206158459))

A thread at 20:04, under the line “Software is Solved,” walked through demos: a Gears of War e-Day-style Unreal clone over about three days; a Fall Guys-style game with multiplayer that he said took one try; motion graphics; a WebGL physics demo; a 3D village; a video editor; an Excel clone; and a Photoshop clone. ([Thread](https://x.com/MatthewBerman/status/2119868627885441389)) At 20:52 he called it “the best model on the planet,” again citing 100+ billion tokens, with a video breakdown of about 23 minutes. ([X post](https://x.com/MatthewBerman/status/2119880754956206543)) Later came a poll, “Opus 5.5 or Fable 5.2?”, and early on 10 November: “oh no i’m addicted to fable 5.2...” ([poll](https://x.com/MatthewBerman/status/2119917554764558802), [follow-up](https://x.com/MatthewBerman/status/2120006368375803947))

The written field tests, on Forward Future the same day, repeat the verdict — “the best AI model I’ve ever used, by far” — and record the bill. A Gears of War-inspired Unreal shooter, started from a three-line prompt with Ultra Code on, ran for a few days, used about 8.5 billion tokens and carried an estimated API cost of about $15,000. An Excel-style browser clone took about 50 hours, about 8 billion cached-input tokens plus 15 million output tokens, and an estimated $11,700. He did not claim to have verified every Excel feature. His producer, Alex McCraw, built a Photoshop alternative called Safelight, already used for channel thumbnails, and a Premiere-style editor; Berman also describes a local DaVinci-style editor called Kestrel. A motion-graphics explainer, by contrast, cost about $25. His “software is solved” line, in that article, means technical skill is no longer the barrier if you can describe the work and you have the tokens — not that every application is perfect. Those dollar figures are his estimates, not invoices we have seen, and the “100+ billion tokens” figure is an aggregate for early testing, not one demo. ([Forward Future](https://forwardfuture.com/newsletter/originals/i-put-fable-5-2-to-work-5-real-world-field-tests-and-what-i-learned))

## Other voices on X and Reddit

Berman was not the only person who spent time with the model. The following are views we could actually find, with links. We searched, and did not find, a review of Fable 5.2 from Andrej Karpathy, or a full launch review from Nathan Lambert; Lambert’s nearby posts were about other Anthropic questions, not a hands-on 5.2 write-up.

**Artificial Analysis** (@ArtificialAnlys) posted its own results on 9 November at 20:45 Vienna time. It placed Fable 5.2 at **#1 on the Intelligence Index v5**, with a score of **65** at max effort: 5 points ahead of Gemini 4 Carbon (high, 60), 6 ahead of Opus 5.5 (max, 59) and about 15 points above Fable 5.1. It said Fable led 5 of 9 evaluations, including 80% on HLE-Diamond and 73% on Terminal-Bench-Science, but was only level with, or behind, other models on some agent and terminal-coding tests (1,785 Elo on AA-Briefcase, just behind Sonnet 5.5; 60% on Terminal-Bench 4.0, behind Kimi K3.1 Pro, Carbon and Sonnet 5.5). Average cost per task at max was **$26.50**, about 2.6 times Opus 5.5 ($10.00). At high and xhigh it still scored 62, which the group said led every other model at any effort, with fewer output tokens than Opus 5.5 at max. ([Index post](https://x.com/ArtificialAnlys/status/2119878995386982508), [effort settings](https://x.com/ArtificialAnlys/status/2119878998083907609), [breakdown](https://x.com/ArtificialAnlys/status/2119879000713724390))

The next night it also put Fable 5.2 (Max) first on **AA-3D**, a test of interactive 3D scenes, at 1,271 Elo, 67 points ahead of Sonnet 5.5 and Opus 5.5, with a confidence interval that did not overlap any other model. ([AA-3D](https://x.com/ArtificialAnlys/status/2119953570430881946)) In a later knowledge-work example, Fable 5.2 (max) took 224 turns and about three hours, at about $68, for a slide deck scored at 87%, while Gemini 4 Carbon (high) finished in 76 turns, about an hour and about $8, at 72%. ([comparison](https://x.com/ArtificialAnlys/status/2120220578585973019))

**Simon Willison** (@simonw) pointed to Anthropic’s new prompting guide and a tip: to make Fable 5.2 “less likely to be cautious in how it improves existing code,” tell it, “This codebase is yours.” ([X post](https://x.com/simonw/status/2120029347948220500), [Anthropic guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2#say-who-owns-the-code)) On 10 November he prompted Fable 5.2 Medium to build a Three.js animation in which Yonkers stands up as a mech and stomps around New York using OpenStreetMap data; a typo (“átomos”) was, he said, correctly read as “stomps.” He later posted a Gemini 4 Carbon run of the same prompt, without declaring a winner in the posts we read. ([Fable write-up](https://simonwillison.net/2026/Nov/10/yonkers-rises/), [Carbon post](https://x.com/simonw/status/2120258951594037732), [Fable comparison](https://x.com/simonw/status/2120259268364718331))

**Ethan Mollick** (@emollick) asked Fable 5.2 and Gemini Carbon to “Solve the Fermi Paradox,” marshal data, test hypotheses and pressure-test them. His summary: “They did not solve it, but did do interesting stuff.” ([X post](https://x.com/emollick/status/2120359214157603139)) **swyx** (@swyx) reacted to the Fermat formalization being used as a launch demo, calling the company “wildin” — a reaction to a vendor claim, not a check of the proof. ([X post](https://x.com/swyx/status/2119935240202539147))

A practitioner posting as @0xRhinoX compared the same iceberg prompt at different effort levels and reported $24.31 in 1 hour 5 minutes at High, through $87.99 at Max, up to $642.42 in 10 hours 21 minutes at Ultra, asking whether Ultra was 26 times better. Those are that user’s bills, not a lab study. ([X post](https://x.com/0xRhinoX/status/2119915121698840587))

**Reddit.** In the first days after the 9 November launch, ModelSentiment, reading r/ClaudeAI and related threads, found **no clear lean**: an index of 49 from 1,617 opinions in 314 threads over seven days. Intelligence and coding were mostly praised; **cost** was the most criticised topic; writing, tone and refusals were also mostly criticised; speed and follow-through were split. That is a first-impression snapshot, not a controlled poll. ([ModelSentiment](https://modelsentiment.com/m/claude-fable-5.2)) Weeks earlier, on **20 September 2026**, users in r/ClaudeAI and r/ClaudeCode reported that something labelled “Fable-5.2” was already appearing in Claude Code. The original poster, u/zasff, described better architecture choices and stronger progress on a hard scene, and expected to find quirks later. Replies included scepticism about the name in the interface. We cannot verify what model those sessions actually called. ([r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/comments/1wl63ft/impressions_on_fable52/), [r/ClaudeCode](https://www.reddit.com/r/ClaudeCode/comments/1wl5l2j/impressions_on_fable52/)) We did not find a single large r/singularity launch thread that we could treat as a community verdict.

## Benchmarks and early reviews

*The Decoder*, on 9 November, wrote up the Artificial Analysis results summarised above. At the time, it still described Gemini 4 Carbon as unreleased; Google’s general-availability post is dated 10 November. Use the dates when comparing those write-ups. ([The Decoder](https://the-decoder.com/claude-fable-5-2-and-mythos-5-2-cement-anthropics-ai-lead-just-before-its-ipo/))

**Zapier AutomationBench**, which tests business workflows in simulated company software, reports that Fable 5.2 completed 51.4% of tasks at max effort (338 of 657), more than double Fable 5.1’s 22.4%, the highest Claude score in that comparison. Only Gemini 4 Carbon scored higher, at 53.9%. Zapier estimates about $4.64 per task at max versus $2.29 at xhigh. One caveat: the report is labelled “Run Oct 8, 2026,” before the public 9 November launch. That almost certainly reflects early access — Anthropic’s own table also lists 51.4% — but the date should be read with care. Artificial Analysis cites a related AutomationBench-AA figure with different percentages (76% against Carbon at 78%); those are not the same number as Zapier’s 51.4%, and should not be mixed. ([Zapier](https://zapier.com/benchmarks/claude-fable5_2-report))

**Plotly** ran a 43-question data-analytics exam. Fable 5.2 scored 43/43, four points better than Fable 5.1 and the third perfect score on that board, after GPT-6.1 Sol and GPT-6 Astra. The run cost $35.74, against $2.61 for GPT-6.1 Sol for the same score, and was slower (a median of 40 seconds per question, against 27 for 5.1 and Opus 5.5). Plotly notes that this is a single run, and that repeat runs of other models have moved by up to three points. ([Plotly](https://plotly.com/blog/claude-fable-5-2-plotly-data-analytics-bench/)) A shorter comparison on *The AI Shortcuts* found Fable 5.2 often the most accurate on drawing and map tasks, but slower than Opus 5.5, and better than 5.1, including fewer spurious refusals in that author’s six tests. ([The AI Shortcuts](https://theaishortcuts.substack.com/p/i-tested-the-new-fable-52-against))

**Two short asides, because they landed in the same 48 hours.** On **10 November 2026**, Anthropic said it had launched the roadshow for a proposed IPO of Class A common stock: 825 million shares (801,351,354 offered by the company and 23,648,646 by existing stockholders), an expected range of $70.00 to $78.00 a share, and an application to list on Nasdaq as “ANT.” The official post does not state a valuation or a first-trade date, and we do not add unofficial figures. A registration statement had been filed with the US SEC but had not, in that announcement, become effective. ([Anthropic](https://www.anthropic.com/news/roadshow-launch)) The same day, Google said **Gemini 4 Carbon** was generally available — the model slightly ahead of Fable 5.2 on Zapier’s AutomationBench and second on Artificial Analysis’s headline index. ([Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/))

## The catch: cost, tone, and why Anthropic still points you to Opus 5.5

The most consistent criticism is not “this model is weak.” It is “this model is costly, and it is not the right default.”

Anthropic’s own documentation tells developers to start with Opus 5.5 and to move to Fable when higher-effort runs on Opus still fall short. Berman, after calling Fable 5.2 the best model he has used, said the same thing in practice: Opus for daily work and quota, Fable for planning and the hardest jobs. Artificial Analysis’s $26.50 average at max effort, Plotly’s $35.74 exam, Berman’s estimated $11,700 and $15,000 projects, and the $642 Ultra bill in the iceberg comparison all point in the same direction. Lower effort settings can still lead the index at a more moderate cost, according to Artificial Analysis, which is why “max” or “Ultra” should not be treated as the only honest way to run the model.

Other criticisms are softer but worth recording. ModelSentiment’s first-week Reddit read found writing, tone and refusals more often criticised than praised, and speed opinions split. Artificial Analysis itself says Fable 5.2 is not ahead on every agentic test. Vendor claims about Fermat, black-hole physics and devices remain unverified here. “Software is solved” is Berman’s slogan, not a result we can tick off.

If you need a working rule from this reporting, it is a boring one: use Fable 5.2 when the task is large, underspecified or technically hard, watch the token meter, and keep Opus 5.5 as the everyday model unless your own tests say otherwise.

## FAQ

**Is “Claude Fable 5.2” the same as Claude Opus or Sonnet 5.2?** No. Fable and Mythos are a separate, higher tier. Anthropic’s everyday recommendation is still Claude Opus 5.5, with Sonnet 5.5 and Haiku 5.5 below it.

**What is the difference between Fable and Mythos?** Anthropic says they are the same underlying model. Fable has stronger cyber and biology safeguards and is widely available. Mythos is limited to verified organisations.

**How much does it cost?** The published API list price is $8 per million input tokens and $40 per million output tokens, or $16 and $80 in optional fast mode. A finished task can cost much more once thinking and tool calls are counted.

**Should I trust the Fermat’s Last Theorem story?** Treat it as an Anthropic claim. The company says about 1,000 agents formalized the proof in Lean in 30 hours. We have not independently verified that work.

**Is Fable 5.2 the best model on every test?** No. It leads several major independent scores, including Artificial Analysis’s Intelligence Index v5 and AA-3D at the settings those posts used, but it trails or ties other models on some agent tests, and Gemini 4 Carbon leads Zapier’s AutomationBench in the comparison we have.

## What we could not verify

- Anthropic’s claims about Fermat’s Last Theorem, black-hole physics, electronic devices, an operating system written from scratch, and related internal demonstrations.
- A reported parameter count of about 7.5 trillion for Fable, which appeared in a Forward Future discussion of earlier models. It is not in the official Fable 5.2 pages we read, and we do not treat it as a fact.
- What model users were actually calling in mid-September 2026, when “Fable-5.2” appeared in some Claude Code reports.
- Berman’s token totals and dollar estimates, beyond what he published.
- Individual user bills such as the $642 Ultra run, beyond that user’s post.
- A valuation or first-trade date for Anthropic’s proposed IPO; the official roadshow post does not state them.
- Reviews of Fable 5.2 by Andrej Karpathy, or a full launch review by Nathan Lambert; we did not find them.
- Whether every feature in Berman’s software clones matches the commercial originals.

## Image credit and sources

Photo: Mramoeba (Wikimedia Commons user), “CERN Data Centre”, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CERN_Data_Centre.jpg). The picture shows the exterior of the CERN Data Centre in 2024. It is not an Anthropic facility. The file was scaled down to 1,920 pixels wide and is otherwise unchanged.

**Official Anthropic pages**
- [Introducing Claude Fable 5.2 and Claude Mythos 5.2 (9 Nov 2026)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- [Claude Fable product page](https://www.anthropic.com/claude/fable)
- [Claude Fable 5.2 model overview](https://platform.claude.com/docs/en/models/fable-5-2/overview)
- [What’s new in Claude Fable 5.2](https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2)
- [Prompting Claude Fable 5.2](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2)
- [Anthropic launches roadshow for proposed IPO (10 Nov 2026)](https://www.anthropic.com/news/roadshow-launch)

**Matthew Berman and Forward Future**
- [Long review post, 9 Nov 2026](https://x.com/MatthewBerman/status/2119871207206158459)
- [Demo thread](https://x.com/MatthewBerman/status/2119868627885441389)
- [“Best model on the planet” video post](https://x.com/MatthewBerman/status/2119880754956206543)
- [Opus 5.5 or Fable 5.2? poll](https://x.com/MatthewBerman/status/2119917554764558802)
- [Follow-up, 10 Nov 2026](https://x.com/MatthewBerman/status/2120006368375803947)
- [I Put Fable 5.2 to Work: 5 Real-World Field Tests (Forward Future, 9 Nov 2026)](https://forwardfuture.com/newsletter/originals/i-put-fable-5-2-to-work-5-real-world-field-tests-and-what-i-learned)

**Other specialists and community discussion**
- [Artificial Analysis, Intelligence Index v5](https://x.com/ArtificialAnlys/status/2119878995386982508)
- [Artificial Analysis, AA-3D](https://x.com/ArtificialAnlys/status/2119953570430881946)
- [Artificial Analysis, task-cost comparison with Gemini 4 Carbon](https://x.com/ArtificialAnlys/status/2120220578585973019)
- [Simon Willison on the prompting guide](https://x.com/simonw/status/2120029347948220500)
- [Simon Willison, Yonkers Rises (Fable 5.2 Medium)](https://simonwillison.net/2026/Nov/10/yonkers-rises/)
- [Willison, Gemini 4 Carbon comparison](https://x.com/simonw/status/2120258951594037732) and [Fable 5.2 comparison reply](https://x.com/simonw/status/2120259268364718331)
- [Ethan Mollick, Fermi Paradox test](https://x.com/emollick/status/2120359214157603139)
- [swyx on the Fermat launch demo](https://x.com/swyx/status/2119935240202539147)
- [0xRhinoX, effort-level cost comparison](https://x.com/0xRhinoX/status/2119915121698840587)
- [ModelSentiment, Claude Fable 5.2](https://modelsentiment.com/m/claude-fable-5.2)
- [r/ClaudeAI, mid-September impressions](https://www.reddit.com/r/ClaudeAI/comments/1wl63ft/impressions_on_fable52/)
- [r/ClaudeCode, mid-September impressions](https://www.reddit.com/r/ClaudeCode/comments/1wl5l2j/impressions_on_fable52/)

**Other reviews, benchmarks and related news**
- [The Decoder, 9 Nov 2026](https://the-decoder.com/claude-fable-5-2-and-mythos-5-2-cement-anthropics-ai-lead-just-before-its-ipo/)
- [Zapier AutomationBench report](https://zapier.com/benchmarks/claude-fable5_2-report)
- [Plotly data-analytics exam](https://plotly.com/blog/claude-fable-5-2-plotly-data-analytics-bench/)
- [The AI Shortcuts, Fable 5.2 comparison](https://theaishortcuts.substack.com/p/i-tested-the-new-fable-52-against)
- [Google: Gemini 4 Carbon is now available (10 Nov 2026)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/)

**Image**
- [Wikimedia Commons: CERN Data Centre.jpg](https://commons.wikimedia.org/wiki/File:CERN_Data_Centre.jpg)
