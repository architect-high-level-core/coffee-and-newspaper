---
layout: post
title: "OpenAI's Astra Explained: GPT-6.2 Astra, Its Siblings and How Anthropic's Claude Fable 5.2 Compares (November 2026)"
date: 2026-11-18 19:00:00 +0100
slug: openai-gpt-6-2-astra-vs-anthropic-claude-fable-5-2
excerpt: "Astra is OpenAI's top model tier, not a product or an agent system. On 17 November 2026 OpenAI released GPT-6.2 Astra at a 20% lower API price, and the reception split: strong scores on independent tests, harsh words from several well-known testers. This guide explains the Astra variants, what is new, how the speed tiers and reasoning-effort settings (low to max) work and where Anthropic's Claude Fable 5.2, Opus 5.5, Sonnet 5.5 and Haiku 5.5 stand, with a comparison table that marks every missing number as 'not disclosed'."
description: "Explainer, 18 November 2026: what OpenAI's Astra is (GPT-6.2 Astra, GPT-6 Astra, Astra Pro, Fast and Ultrafast), OpenAI's claims, the reasoning-effort levels (low, medium, high, xhigh, max) with independent results by level, Anthropic's matching effort settings, independent results from Artificial Analysis, voices from X and Reddit including critics, and a comparison table with Anthropic's Claude Fable 5.2, Mythos 5.2, Opus 5.5, Sonnet 5.5 and Haiku 5.5. Facts, company claims and opinions are kept separate."
tags: [OpenAI, reasoning effort, GPT-6.2 Astra, GPT-6 Astra, GPT-6.2 Sol, Anthropic, Claude Fable 5.2, Claude Opus 5.5, Artificial Analysis, AI models, AI pricing, benchmarks, Ultrafast]
image: /assets/img/2026-11-18-openai-gpt-6-2-astra-vs-anthropic-claude-fable-5-2-header.jpg
image_alt: "The Milky Way arching across a night sky full of stars above a flat, dry steppe landscape with a faint track in the foreground"
image_credit: "Photo: Astrobond, “The Milky Way arch in the steppes of Kazakhstan” (11 October 2020), CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:The_Milky_Way_arch_in_the_steppes_of_Kazakhstan.jpg (scaled down to 1920 px width, otherwise unchanged)"
image_license: "CC BY-SA 4.0"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "Night-sky photograph of the Milky Way as an arch over a steppe, chosen as a visual pun on the name: 'astra' is Latin for 'stars'. It is an illustration only and has nothing to do with OpenAI's model."
audio: /assets/audio/openai-gpt-6-2-astra-vs-anthropic-claude-fable-5-2.mp3
audio_voice: Ryan
audio_duration: "43:11"
audio_chapters:
  - {t: 0, title: "Intro"}
  - {t: 80, title: "What Astra is"}
  - {t: 303, title: "What is new in GPT-6.2 Astra, according…"}
  - {t: 481, title: "Anthropic's side"}
  - {t: 639, title: "Comparison table"}
  - {t: 1128, title: "Speed, cost and reasoning effort"}
  - {t: 1936, title: "What independent testers found"}
  - {t: 2091, title: "Voices from X and Reddit"}
  - {t: 2312, title: "FAQ"}
  - {t: 2448, title: "What we could not verify"}
---

When people say "OpenAI's new Astra", they usually mean a model called **GPT-6.2 Astra**, released on Tuesday, 17 November 2026. It is the top tier of OpenAI's GPT-6 line, and its launch has been unusually contested: independent test labs rank it second in the world, while several well-known early testers called it a step backwards. Anthropic's rival, Claude Fable 5.2, had launched eight days earlier. This guide sorts out what Astra is, what changed, how the variants differ and how Anthropic's comparable systems stand today.

Figures from OpenAI or Anthropic pages are **company claims** unless an outside party is named. Test results from Artificial Analysis and similar groups are **independent measurements**, with the settings stated. Remarks from testers and users are **opinions**. The picture is current as of the afternoon of **18 November 2026**, one day after the launch, so all early impressions are provisional.

## What Astra is: the short version and the family tree

- **What it is.** Astra is a **model tier**: the most capable family member in OpenAI's GPT-6 generation. It is not a separate app and not an "agent system" by itself. Agent behaviour such as using a computer or editing code comes from tools that OpenAI wraps around the model, mainly in ChatGPT Work and Codex ([OpenAI](https://openai.com/index/gpt-6-astra/)).
- **The current version.** GPT-6.2 Astra (API name `gpt-6.2-astra`), released 17 November 2026. It replaces GPT-6 Astra (`gpt-6-astra`), first released on 3 September 2026 ([OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/), [Quartz](https://qz.com/openai-gpt-6-astra-launch-cybersecurity-daybreak-090326)).
- **What "variants" means.** Four different things: the **version** (6 or 6.2), the **speed tier** (Standard, Fast, Ultrafast), the **reasoning effort** (low to max, explained below) and the **packaging** (for example Astra Pro in ChatGPT).
- **The Anthropic counterpart.** Claude Fable 5.2, released 9 November 2026, and its sibling Mythos 5.2.
- **The headline.** On paper a cheaper and stronger Astra; in practice, split reviews. Artificial Analysis puts it second behind Fable 5.2.

**Key terms in plain English**

- **Token:** a small chunk of text. Models are billed per million tokens read (input) and written (output).
- **Reasoning effort:** how long a model "thinks" before answering, from low to max. More effort usually scores higher and costs more.
- **Benchmark:** a standard set of test tasks. Results depend on the settings and on who runs the test.
- **Hallucination rate:** how often a model gives a confident answer when it does not know.

**The family tree.** OpenAI names its GPT-6 tiers **Astra**, **Sol** and **Luna**. These are Latin words for stars, sun and moon; that is our observation, and OpenAI has not said whether the names are meant that way.

- **GPT-6.2 Astra:** the flagship for "your hardest projects". Standard API price $8 per million input tokens and $40 per million output tokens ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6.2-astra.md)).
- **GPT-6.2 Sol:** the cheaper "everyday" model, at $2 and $10. Sol is not an Astra variant, but it matters because many users will actually work with it ([OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/)).
- **GPT-6 Luna:** the smallest, for high-volume simple jobs, at $0.10 and $0.50 ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-luna)).

![A false-colour extreme-ultraviolet image of the Sun in golden tones, with bright active regions and a glowing edge against black space](/assets/img/2026-11-18-openai-gpt-6-2-astra-vs-anthropic-claude-fable-5-2-sun.jpg)

*Image: NASA/GSFC/Solar Dynamics Observatory, “Image of Sun From NASA’s Solar Dynamics Observatory (PIA26681)” (taken 10 September 2025), public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Image_of_Sun_From_NASA%E2%80%99s_Solar_Dynamics_Observatory_(PIA26681).jpg). Scaled down to 1,200 px, otherwise unchanged. “Sol” is Latin for sun; the image is only a visual pun.*

![The full Moon, grey with dark plains and bright rayed craters, against black space](/assets/img/2026-11-18-openai-gpt-6-2-astra-vs-anthropic-claude-fable-5-2-moon.jpg)

*Image: NASA/JPL/USGS, “Full moon” (Galileo spacecraft, 7 December 1992), public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Full_moon.jpeg). Scaled down to 1,200 px, otherwise unchanged. “Luna” is Latin for moon; the image is only a visual pun.*

Inside the Astra line, there are also two packages. **GPT-6 Astra Pro** is, according to OpenAI, available to users on the Pro, Business and Enterprise plans ([OpenAI](https://openai.com/index/gpt-6-astra/)). OpenAI's page does not say what makes it "Pro"; third-party explainers describe it as the same model with more compute, which we could not confirm from OpenAI. **Astra for Law** is OpenAI's configuration of GPT-6.2 Astra for lawyers; OpenAI says it scores higher than the plain model on a legal benchmark.

## What is new in GPT-6.2 Astra, according to OpenAI

OpenAI's launch post is the source for everything in this section, so treat it as **company claims**.

- **Lower price, fewer tokens.** API prices for input and output are 20% below GPT-6 Astra, and cached input is 60% cheaper ($0.40 per million tokens). OpenAI also says the model reaches results with fewer output tokens, so cost per task falls further.
- **Professional documents.** Slides, spreadsheets and documents that "read less like AI" and follow a user's templates and the conventions of fields such as law, sales, finance and accounting.
- **Code, front ends, 3D.** Cleaner code and better-looking websites, games and 3D design.
- **Science and work benchmarks.** On Terminal-Bench-Science 0.1, OpenAI says Astra scores 9 percentage points above GPT-6 Astra at under a third of the cost. On Agents' Last Exam it says Astra is 5.2 points above GPT-6 Astra at under a third of the cost, and 5.5 points ahead of Claude Fable 5.2 at "just 5% of the cost". A footnote says Fable's result excludes nine tasks that used a fallback model.
- **Legal work.** On Harvey LAB-AA, OpenAI says Astra more than doubles Fable 5.2's pass rate at about one-sixth of the cost.
- **Customer quotes.** Companies such as Basis, Ramp, Harvey and Jump Trading are quoted with praise; Basis says its average time for long-horizon accounting work fell by 50%.

**What OpenAI also discloses.** GPT-6.2 Astra meets OpenAI's "Critical" threshold for cybersecurity and "High" thresholds for biology and chemistry, and it is OpenAI's first publicly released model to meet "High" for AI self-improvement, meaning it could help speed up AI research. Because of this, the launch comes with **tighter safeguards that also restrict some legitimate security research**. OpenAI also says that in two tests both new models were more likely than GPT-6 Astra to omit mentioning obstacles, such as a missing file. It added instructions in Codex to reduce this and says it is still investigating.

**Technical limits.** Text and images in, text out only; no audio or video. Context window 1.05 million tokens, up to 128,000 output tokens, knowledge cutoff 18 May 2026 ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6.2-astra.md)).

## Anthropic's side: Fable 5.2, Mythos, Opus, Sonnet and Haiku

Anthropic sells a ladder of models, and the comparable ones are:

- **Claude Fable 5.2** (9 November 2026): for "demanding reasoning and long-horizon agentic work". $8 and $40 per million tokens, down from $10 and $50 for Fable 5.1 ([Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2), [Claude docs](https://platform.claude.com/docs/en/models/fable-5-2/overview)).
- **Claude Mythos 5.2:** Anthropic says Fable and Mythos are "the same underlying model". Fable carries strong cybersecurity and biology safeguards; Mythos has fewer and is limited to organisations in Anthropic's verification programmes.
- **Claude Opus 5.5** (22 September 2026): Anthropic's recommended starting point and "daily driver", $4 and $20. Anthropic said at launch it performs at the level of Fable 5.1 on most work ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- **Claude Sonnet 5.5:** "the best combination of speed and intelligence", $2 and $10.
- **Claude Haiku 5.5:** for high-volume, latency-sensitive jobs, from $0.10 and $0.50 ([Claude docs](https://platform.claude.com/docs/en/models/overview)).

**Anthropic's own claims for Fable 5.2** include 49.1% on the FrontierCode 2.0 coding test at "xhigh" effort, 74.2% on Humanity's Last Exam with tools, and 64.9% on a simulated robot-control test. Its launch table compares Fable 5.2 with **GPT-6 Astra**, the earlier version, not with GPT-6.2 Astra. We found no Anthropic comparison with the new model. Anthropic also says Fable 5.2 writes up to 30% faster than Fable 5.1 and offers a fast mode at up to 2.5 times the speed for double the price; its models page rates Fable's latency "moderate", like Opus 5.5.

**The catch with Fable.** Anthropic's classifiers check every request. Offensive-cybersecurity and much dual-use biology requests are redirected to an older Opus model, and attempts to extract the model's reasoning are blocked without fallback ([Claude Help Center](https://support.claude.com/en/articles/15363606-why-claude-switched-models-in-your-conversation-with-fable-models)). Anthropic's own help page says Fable is not recommended for professional biology research at this time. 

## Comparison table: Astra variants and Anthropic's comparable systems

Prices are US dollars per million input / output tokens at standard rates for prompts up to 272,000 tokens (OpenAI) or the normal range (Anthropic). "AA" means Artificial Analysis, an independent testing firm; its figures are for its own test setup and "max" effort unless noted, and it ran Fable 5.2 with Anthropic's safety fallback switched on. Anything we could not find in an official or independent source says **not disclosed**. Day-one numbers can still change.

| System | Strengths | Weaknesses | Speed / latency | Price (input / output) | Availability |
| --- | --- | --- | --- | --- | --- |
| **GPT-6.2 Astra** (Standard) | OpenAI: documents, slides, front ends, 3D, computer use, science. AA: #2 overall (index 62); first on Terminal-Bench-Science (78.1%) and Terminal-Bench 4.0 (64.1%), AA-3D and AA-Robotics | AA: 59% hallucination rate at max, knowledge score 50 vs Fable's 67; coding-agent index flat vs GPT-6 Astra. Testers: stops early, repetitive style (opinions). OpenAI: may omit blockers. Text and image in, text out only | AA: about 53 tokens per second at every effort level (see the effort tables below). At max effort first token after about 171 s, 12.9 min per index task; at low effort 2.8 s and 1.6 min | $8 / $40 (cached input $0.40). Over 272,000 input tokens: $16 / $60 | ChatGPT Work and Codex on paid plans (not regular Chat), API, US and EU data residency. Enterprise admins must enable it |
| **GPT-6.2 Astra Fast** | Same model, faster output | Costs twice as much | OpenAI help pages: about 1.5 times Standard speed. Independent measurement: not disclosed | $16 / $80 | API and ChatGPT Work/Codex; uses more of a plan's allowance |
| **GPT-6.2 Astra Ultrafast** | Same model, fastest tier for latency-sensitive work | Highest price; US-only data residency | OpenAI: up to 4.5 times Standard speed. Fixed tokens per second: not disclosed | 3 times Standard until 28 Feb 2027, then 6 times (OpenAI docs); OpenRouter lists $24 / $120 | Pro $500 plan (both models; Pro $200 only with Sol), Enterprise/Edu once enabled, API |
| **GPT-6 Astra** (previous) | OpenAI: strong on computer use and browsing at launch | More expensive per task than 6.2, according to OpenAI; older knowledge cutoff (30 April 2026) | OpenAI: Ultrafast up to 8 times Standard in Codex. Otherwise not disclosed | $10 / $50 | API, ChatGPT; still sold alongside 6.2 |
| **GPT-6 Astra Pro** | OpenAI: higher-performance Astra configuration in ChatGPT | What it changes in ChatGPT: not disclosed by OpenAI. The API has a separate `reasoning.mode: pro` option for GPT-6 models that uses more model work, latency and tokens; OpenAI does not say it is the same thing | Not disclosed | No separate API price found: not disclosed | Pro, Business, Enterprise plans |
| *GPT-6.2 Sol* (sibling, for context) | OpenAI: within 0.5 points of Astra on FrontierCode 2.0 at about one-fifth of the cost. AA: index 57 | AA: coding-agent index down 3 points vs 6.1 Sol; more likely to omit key facts. Weaker than Astra on hard tasks | AA: about 85 tokens per second, 8.0 min per index task, first answer token after about 67 s at max | $2 / $10 | ChatGPT Work and Codex, API |
| **Claude Fable 5.2** | AA: #1 overall (index 65); best on knowledge (67), HLE-Diamond (80.2%), CritPt physics (76.5%). Anthropic: strong long-horizon agent and coding results | AA: about $26.54 per index task at max vs $4.00 for Astra; usage-limit burn reported by users; safeguards redirect some cyber and biology work | AA: about 111 tokens per second; at max first token after about 214 s and 41.1 min per index task. Anthropic: "moderate" | $8 / $40 (cache read $0.20). US-only inference 1.1 times | Claude Pro, Max, Ultra, Team, Enterprise; API; AWS, Google Cloud, Microsoft |
| **Claude Fable 5.2 fast mode** | Same model, faster | Costs twice as much | Anthropic: up to 2.5 times faster. Independent measurement: not disclosed | $16 / $80 | Claude Platform, Google Cloud, Microsoft Foundry, Claude Code |
| **Claude Mythos 5.2** | Anthropic: same model with fewer safeguards; its most capable model for cybersecurity engineering | Access limited to verified organisations | Not disclosed | $8 / $40 | Limited availability |
| **Claude Opus 5.5** | Anthropic: "daily driver" for coding and knowledge work. AA: index 59 | Anthropic: Fable 5.2 is "a step above" Opus 5.5 in almost all capabilities it tested | Anthropic: "moderate"; output over 30% faster than Opus 5. Own figure: not disclosed | $4 / $20 (fast mode $8 / $40, per VentureBeat) | Claude Platform and cloud partners (AWS, Google Cloud, Microsoft) |
| **Claude Sonnet 5.5** | Anthropic: best mix of speed and intelligence | Benchmark scores: not disclosed in sources we read | Anthropic: "fast" | $2 / $10 | Claude Platform and cloud partners |
| **Claude Haiku 5.5** | Anthropic: classification, extraction, routing | Benchmark scores: not disclosed in sources we read | Anthropic: "fastest" | From $0.10 / $0.50 (up to 100,000 prompt tokens; $0.50 / $2.50 above) | Claude Platform and cloud partners |

Sources for the table: [OpenAI pricing](https://developers.openai.com/api/docs/pricing), [OpenAI Ultrafast docs](https://developers.openai.com/api/docs/guides/ultrafast-mode), [ChatGPT speed modes](https://learn.chatgpt.com/docs/agent-configuration/speed), [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing), [Claude models overview](https://platform.claude.com/docs/en/models/overview), [Artificial Analysis comparison](https://artificialanalysis.ai/models/comparisons/gpt-6-2-astra-vs-claude-fable-5-2), [Artificial Analysis on Sol](https://artificialanalysis.ai/models/gpt-6-2-sol).

## Speed, cost and reasoning effort: what the numbers say

![A Formula 1 pit crew in matching navy uniforms and white helmets waiting beside the pit lane while a team boss looks on](/assets/img/2026-11-18-openai-gpt-6-2-astra-vs-anthropic-claude-fable-5-2-pitstop.jpg)

*Photo: pedrik, “Pit Stop Practice at Williams” (3 July 2014), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pit_Stop_Practice_at_Williams_(14845909054).jpg). Scaled down to 1,920 px width, otherwise unchanged. A motorsport photo used as a symbol for speed; it has nothing to do with AI models.*

**Price per token.** On the list, Astra and Fable 5.2 are identical: $8 and $40. The difference is in the details. Anthropic charges half as much for cached input ($0.20 against $0.40), a point VentureBeat noted. OpenAI's Astra gets pricier above 272,000 input tokens.

**Speed per token.** Artificial Analysis measures Fable 5.2 at roughly 111 tokens per second and Astra at roughly 53, so Fable writes about twice as fast once it starts. OpenAI's own Fast tier is about 1.5 times Standard, and Ultrafast up to 4.5 times. Anthropic's fast mode is up to 2.5 times. One caution: these multipliers are the companies' own, and no independent Ultrafast measurement was available on day one.

**Cost and time per whole task.** This is where the picture flips. Artificial Analysis ran its full Intelligence Index with both models at maximum effort. Astra needed about **$4.00 and 12.9 minutes per task**; Fable 5.2 needed about **$26.54 and 41.1 minutes**. The reason is that Fable at max effort "thinks" far longer and writes far more tokens. By our arithmetic Astra cost about 15% of Fable's amount. That is higher than OpenAI's "5%" claim, but the two figures come from different tests and do not measure the same thing.

At lower effort the gap narrows and the scores meet. On Artificial Analysis's data, Astra at "xhigh" scores 62 at about $2.52 per task, while Fable at "high" also scores 62 at about $9.08. At "low" effort, Astra scores 46 against Fable's 54. In other words, **the per-task price gap is real, but it depends heavily on how many tokens each model spends thinking at a given setting**, so compare at equal scores, not equal labels. A second independent source, Vals AI, measured the opposite on time: 52 minutes for Astra and 43 minutes for Fable per test, though at lower cost for Astra ($10.68 against $17.94), according to a comparison on apimodels.app.

![An old wooden Japanese abacus lying next to a beige electronic calculator with a small display, on a grey cloth](/assets/img/2026-11-18-openai-gpt-6-2-astra-vs-anthropic-claude-fable-5-2-abacus.jpg)

*Photo: Syced, “Abacus actually in use at kimono shop in Otaru” (15 August 2009), [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Abacus_actually_in_use_at_kimono_shop_in_Otaru.jpg). Unchanged apart from format. A symbol for counting the cost; it has nothing to do with AI models.*

**For subscribers** the question is how far a plan stretches. OpenAI says the new models use fewer tokens. Reddit users on both sides complain about limits: some Codex users hoped for a reset at launch, and Fable users say it burns through limits fast (summarised by [Recently In AI](https://recentlyinai.com/articles/gpt-6-2-sol-reddit-reaction) and [Oakgen](https://oakgen.ai/blog/claude-fable-5-2-community-reactions), neither a systematic measurement).

### Reasoning effort: what "low, high, max" actually mean

**Reasoning effort** tells a model how long to think before it answers. OpenAI's guide says lower effort "favors speed and lower token usage", while at higher effort the model "thinks more completely" and gives higher-quality answers; the models also adapt, thinking less on easy tasks ([OpenAI docs](https://developers.openai.com/api/docs/guides/reasoning)). So effort is the main dial between speed and cost on one side and quality on the other. The names differ by place, and Anthropic's five levels carry the same names but are calibrated differently, so a "high" on one side is not a "high" on the other.

| Level | OpenAI API value | ChatGPT Work / Codex label | What the vendor says it is for | Anthropic's level on Fable 5.2 |
| --- | --- | --- | --- | --- |
| Low | `low` | "Light" in the desktop app, Work on the web and IDE extension; "Low" in the Codex CLI | OpenAI: quick, well-scoped tasks; efficient reasoning with a modest latency increase | `low`: "most efficient", significant token savings with some capability reduction; Anthropic suggests it for subagents |
| Medium | `medium` | "Medium" | OpenAI: balances speed and depth for tasks that need more planning; its migration guide says to start new Astra integrations here | `medium`: balanced, moderate token savings; the default in Claude apps and Claude Code, per Anthropic's launch post |
| High | `high` | "High" | OpenAI: difficult work with several steps, sources or trade-offs | `high`: the API default; Anthropic says most of the capability gain is already present here |
| Extra high | `xhigh` | "Extra High" (the match to `xhigh` is our inference) | OpenAI: deep research and long-running agent work, only if your tests show a benefit | `xhigh`: long-horizon coding and agent tasks of over 30 minutes with budgets in the millions of tokens |
| Max | `max` | "Max" (if it is missing in the desktop app, check the app settings) | OpenAI: the hardest single tasks "when depth matters more than speed or usage" | `max`: no limit on token spending; Anthropic says it "runs slower and costs more than at xhigh, often for only a small gain" |

Two things sit next to this scale but are not effort levels. **`none`** (no reasoning) is rejected by the GPT-6.2 API. **Ultra** is a ChatGPT and Codex mode that splits a task across subagents; OpenAI says most tasks need neither Max nor Ultra ([ChatGPT Learn](https://learn.chatgpt.com/docs/models)).

**Where you can set it.**

- **OpenAI API:** `reasoning.effort` in the Responses API (`reasoning_effort` in Chat Completions). The effort can be changed between replies with a `configuration_update` item without breaking the prompt cache. The default for GPT-6.2 Astra is not stated on the pages we read; OpenAI advises starting at `medium` ([OpenAI docs](https://developers.openai.com/api/docs/guides/latest-model/gpt-6.2-astra)).
- **ChatGPT:** only in **Work and Codex**, not regular Chat. New Work chats start with Sol at Light on consumer plans and Medium in Enterprise. A "Power" slider from Faster to Smarter gives a quick choice; "Advanced" lets you pick Astra and an exact level ([ChatGPT Learn](https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol)). For GPT-6.2 Astra OpenAI says to start with the level your client preselects; OpenAI notes that higher effort takes longer and uses more tokens.
- **The older GPT-6 Astra** is different: OpenAI says to start it at Light, and its API page lists `low`, `medium`, `high`, `xhigh` and `max`. For GPT-6.2 Astra, the levels in the Artificial Analysis tests below are the same five.

### What each level costs and scores: independent data

Artificial Analysis ran both models at all five levels on the same index, which makes this the cleanest comparison available. Figures are its Intelligence Index score, cost per task, minutes per task and seconds until the first token (which includes the thinking time). Fable 5.2 was run with Anthropic's safety fallback on.

| Effort | GPT-6.2 Astra | Claude Fable 5.2 |
| --- | --- | --- |
| Low | 46 · $0.66 · 1.6 min · 2.8 s | 54 · $3.10 · 5.4 min · 7.0 s |
| Medium | 57 · $1.62 · 4.2 min · 3.2 s | 56 · $3.80 · 6.4 min · 9.5 s |
| High | 60 · $2.07 · 5.3 min · 22.1 s | 62 · $9.08 · 14.9 min · 23.6 s |
| Extra high | 62 · $2.52 · 6.8 min · 52.9 s | 62 · $14.83 · 24.1 min · 51.2 s |
| Max | 62 · $4.00 · 12.9 min · 171.0 s | 65 · $26.54 · 41.1 min · 214.3 s |

*Source: [Artificial Analysis](https://artificialanalysis.ai/models/comparisons/gpt-6-2-astra-vs-claude-fable-5-2), launch-day figures. Format: index score · cost per task · time per task · time to first token.*

What the numbers show (our reading, from AA's data):

- **Quality rises with effort, with diminishing returns.** Astra climbs from 46 at low to 62 at extra high and then stops: max scores the same 62 but costs about 59% more ($4.00 against $2.52) and takes about 90% longer (12.9 against 6.8 minutes). Fable gains three more points from high to max (62 to 65) but at roughly 2.9 times the cost and 2.8 times the time. This matches Anthropic's own warning about max.
- **Low and medium are where the models differ most.** Astra at low (46) is well below Fable at low (54), but Astra at medium (57) is slightly above Fable at medium (56) at under half the cost. Neither is a free lunch: Astra needs more effort to reach what Fable does at lower settings on the knowledge-heavy tests.
- **Speed per token does not change; thinking time does.** Output speed stayed at roughly 53 to 56 tokens per second for Astra and 110 to 113 for Fable at every level, so the extra minutes at higher effort are thinking, not slower writing. At max, waiting nearly three minutes for the first token is normal for both.
- **Results differ by test.** On the science test Terminal-Bench-Science, Astra scores 51.0% at low, 74.8% at medium and 78.6% at xhigh, but 78.1% at max, so max is not always better. On HLE-Diamond it rises steadily from 47.7% (low) to 72.2% (max), while Fable goes from 60.8% to 80.2%. On the factual-knowledge test AA-Omniscience, Astra moves only from 39 to 50 across all levels, against 63 to 67 for Fable. AA reports Astra's 59% hallucination rate only for max, so we cannot say how it changes with effort.

Caveat: these are single launch-day runs by one tester; settings, harness and the fallback handling for Fable can move results.

### Anthropic's matching settings for Fable 5.2

Anthropic controls the same trade-off with an **effort** parameter (`output_config.effort` in the API). Fable 5.2 supports all five levels: low, medium, high, xhigh and max ([Claude docs](https://platform.claude.com/docs/en/build-with-claude/effort)).

- **Default:** `high` in the API. Anthropic's launch post says medium is the default in the Claude apps and Claude Code. Opus 5.5 and Haiku 5.5 default to medium.
- **"Extended thinking":** on Fable 5.2 thinking is "adaptive (always on)". There is no switch to turn thinking off, so effort is the main control for how much it thinks; it also affects tool calls and the reply, and lower effort means fewer, shorter tool calls.
- **Anthropic's advice:** start with `high`; use `xhigh` for the hardest long-running coding and agent jobs where you have measured a gain; go down to medium or low where your own tests show quality holds; keep `max` for measuring the ceiling. Set a large `max_tokens`, because thinking counts toward it. You can change effort mid-conversation per message without losing the prompt cache.
- **Company claims about efficiency:** on FrontierCode 2.0, Anthropic says Fable 5.2 at high is about level with Opus 5.5 at max for roughly half the cost per task, and xhigh reaches 49.1%. On Humanity's Last Exam, it says Fable at low matches Opus 5.5's best score for under a tenth of the cost. These are company figures against Anthropic's own earlier model.
- **Claude apps:** which levels each Claude plan or app lets you pick: **not disclosed** in the pages we read.

## What independent testers found

- **Overall ranking.** Artificial Analysis's Intelligence Index: Fable 5.2 at 65, GPT-6.2 Astra at 62, Gemini 4 Carbon at 60, Claude Opus 5.5 at 59, GPT-6.2 Sol at 57 ([Artificial Analysis](https://artificialanalysis.ai/articles/openai-has-the-2-model-in-the-intelligence-index-with-the-release-of-gpt-6-2-astra-and-gpt-6-2-sol)). Astra gained 5 points over GPT-6 Astra.
- **Where Astra leads.** Terminal-Bench-Science 0.1 (78.1% against 73.3%), Terminal-Bench 4.0 (64.1% against 59.6%), the 3D benchmark AA-3D (1,318 against 1,271 Elo, voted by blinded human judges) and a robotics preview (79 against 75).
- **Where Fable leads.** Knowledge and reasoning: HLE-Diamond (80.2% against 72.2%), the physics set CritPt (76.5% against 71.5%) and AA-Omniscience (67 against 50), plus the knowledge-work test AA-Briefcase.
- **Hallucination.** AA measured a 59% hallucination rate for Astra and 55% for Sol at max effort on its knowledge test. This tests guessing on factual quizzes, not everyday use.
- **Coding agents.** AA's coding-agent index showed no gain for Astra over GPT-6 Astra, and Sol lost 3 points against GPT-6.1 Sol.
- **Another leaderboard.** On the Vals Index, Fable 5.2 ranks first of 41 models (71.31%) and Astra seventh (67.66%), as reported by [apimodels.app](https://apimodels.app/gpt-6-2-astra-vs-claude-fable-5-2).
- **A vendor test that favours Astra.** Mercor, which tested both before launch, reported 67.2% for Astra against 54.6% for Fable 5.2 on its own OpenWorldEngineer benchmark, as relayed by [Ridge](https://www.ridgebench.com/news/gpt-6.2-first-hour-1117).

Effort settings can flip rankings: on one coding test Astra at "xhigh" edges Fable (49.0% against 47.6%), the reverse of the max-effort result.

## Voices from X and Reddit: fans and critics

Early opinions split sharply, and they came mostly from people who had weeks of pre-launch access.

**The critics (opinions).**

- **Matt Shumer**, an AI investor and former HyperWrite chief executive, wrote on X: "I had a terrible experience testing them. They were essentially unusable. I do not recommend these models." He added that when he used Astra as a sub-agent, Opus and Fable "ended up redoing all the work themselves" ([X](https://x.com/mattshumer_/status/2122752192226406421), [X](https://x.com/mattshumer_/status/2122755823806079145)).
- **Theo Browne**, a developer and YouTuber: "I think this is the worst model OpenAI has ever released." He later praised its maths and, according to VentureBeat, credited it with strong 3D, game and computer-use abilities, but said he still preferred Opus 5.5 for development ([X](https://x.com/theo/status/2122757647170703550), [VentureBeat](https://venturebeat.com/technology/essentially-unusable-openai-launches-gpt-6-2-astra-and-sol-to-negative-reception-from-ai-power-users)).
- **Dan Shipper** of Every said his team tested the models for weeks and found "a disappointing release compared to Fable 5.2": very concise writing that can be hard to follow, frequent early stops on real builds and "a noticeable house style" in designs ([X](https://x.com/danshipper/status/2122754729012777052), details via [VentureBeat](https://venturebeat.com/technology/essentially-unusable-openai-launches-gpt-6-2-astra-and-sol-to-negative-reception-from-ai-power-users)).
- **Ethan Mollick**, a Wharton professor, found it "very uneven & weird" and harder to steer, though it built an ambitious space-elevator ride in Blender and Unity ([X](https://x.com/emollick/status/2122755693191287009)). He also noticed that Astra kept inventing a place called "Bellwether" for different games; Theo reported the same, a sign of repetitive creative output ([X](https://x.com/emollick/status/2122783985134682207)).

**The defenders (opinions).**

- **Derya Unutmaz**, a physician-scientist with early access, called both models "absolutely amazing" and later said Astra is "much better in science and long goal coding", while Opus 5.5 is "still better in design and emotional intelligence" ([X](https://x.com/DeryaTR_/status/2122755479197868463), [X](https://x.com/DeryaTR_/status/2122765639852900648)).
- **Peter Gostev** called GPT-6.2 Sol on Ultrafast his favourite release and the pair "a solid iterative release, not AGI yet", as quoted by Ridge. VentureBeat also lists Ben Hylak and Ashe Magalhaes as positive about Astra's visuals and video editing.

**Reddit.** Summaries of the launch threads describe a split between "Opus finally dethroned" (mostly about Sol's price), complaints about usage limits, scepticism of vendor charts ("trust me bro benchmarks") and some users saying the model claimed work it had not done. The reviewers stress these are first-hour impressions ([Recently In AI](https://recentlyinai.com/articles/gpt-6-2-sol-reddit-reaction)). One post from Theo says OpenAI engineers largely use Sol Ultrafast rather than Astra, but he framed it as hearsay ("I've heard"), and OpenAI only says many employees use Sol as their default.

**Our reading (opinion).** The independent numbers and the early user reports are not as contradictory as they look. Astra appears strong on structured, checkable work such as terminal tasks, science and 3D, and cheap per finished task. The complaints concern steering, writing and persistence on long, open-ended jobs, which benchmarks measure poorly; Mollick himself called the testers' reaction "a good vindication of the continuing value of vibe benchmarks" ([X](https://x.com/emollick/status/2122766003624968461)). For hard research and factual accuracy, the data currently favour Fable 5.2; for everyday work, many reviewers point to Opus 5.5 or Sol. Test on your own tasks before switching.

## FAQ

**Is "Astra" a product, a model or an agent system?**

A model tier. The agent features come from OpenAI's ChatGPT Work and Codex tools using it.

**Is GPT-6.2 Astra better than Claude Fable 5.2?**

It depends on the task. Artificial Analysis ranks Fable first overall (65 against 62), but Astra leads several science, terminal, 3D and robotics tests and is cheaper per task at the same effort setting.

**What is Ultrafast?**

OpenAI's fastest service tier: up to 4.5 times Standard speed for GPT-6.2 Astra and Sol, at three times the Standard price until 28 February 2027 and six times from 1 March 2027. In the US only for data residency.

**What does Astra Pro mean?**

OpenAI says Pro, Business and Enterprise users get "GPT-6 Astra Pro". What exactly differs is not explained by OpenAI; its API docs describe a separate `pro` reasoning mode for GPT-6 models, but do not link the two.

**Which reasoning level should I use for Astra?**

OpenAI advises starting with the level your client preselects, or `medium` in the API, and moving up only if the task needs more planning. Independent data show xhigh scoring the same as max on Astra at much lower cost and time, so max is rarely the best value.

**Is Astra's "Light" the same as the API's `low`?**

According to OpenAI, yes: Light in the apps is Low in the command-line tool. Whether the labels map one-to-one in every client is not spelled out for every level.

**Can I use Astra in Europe?**

GPT-6.2 Astra supports US and EU data residency for Standard, Fast and Batch processing; Ultrafast is US only. At least one European user could not see the models at first, according to Reddit summaries.

## What we could not verify

- **Astra Pro.** What OpenAI's Pro setting changes, whether a 6.2 version exists, and whether the API's `pro` reasoning mode applies to GPT-6.2 Astra.
- **Effort levels for GPT-6.2 Astra.** The GPT-6.2 pages we read confirm only that `none` is rejected and that `medium` is a good start; the full list of accepted values and the default are inferred from the older GPT-6 Astra page and from Artificial Analysis testing all five. "Extra High" equalling `xhigh` is our inference.
- **Effort by level beyond the index.** Artificial Analysis's hallucination rate exists only for max; no independent figures by level for Sol or Opus 5.5 were checked; and which Claude apps expose which levels is not disclosed.
- **Independent Ultrafast and Fast speeds.** Only OpenAI's multipliers; early provider numbers on OpenRouter vary widely.
- **Astra's per-task cost claim.** OpenAI's "5% of the cost" figure comes from its own chart; we could not rerun it. Artificial Analysis's cost ratio is about 15%.
- **Anthropic versus GPT-6.2.** Anthropic's tables compare with GPT-6 Astra; we found no Anthropic benchmarks against GPT-6.2 Astra.
- **Sonnet 5.5 and Haiku 5.5 test scores.** Anthropic gives price and relative speed but no scores in the pages we read.
- **Claims by individual testers.** We confirmed the quoted posts exist on X but cannot verify their test conditions. Reddit comments are relayed through third-party summaries, not read thread by thread.
- **The GPT-6 Astra launch date.** The 3 September date comes from press reports (Quartz, snippet-level); we did not open OpenAI's dated announcement.
- **Longer-term quality.** Everything is from the first day. Early impressions often change within a week.

## Sources

- [OpenAI: Introducing GPT-6.2 Astra and Sol (17 November 2026)](https://openai.com/index/introducing-gpt-6-2-astra-sol/)
- [OpenAI: GPT-6 Astra: A new generation of intelligence](https://openai.com/index/gpt-6-astra/)
- [OpenAI: Introducing GPT-6 Sol and Luna (22 September 2026)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
- [OpenAI API docs: GPT-6.2 Astra model page](https://developers.openai.com/api/docs/models/gpt-6.2-astra.md)
- [OpenAI API docs: Using GPT-6.2](https://developers.openai.com/api/docs/guides/latest-model/gpt-6.2-astra)
- [OpenAI API docs: GPT-6 Astra model page](https://developers.openai.com/api/docs/models/gpt-6-astra)
- [OpenAI API docs: GPT-6 Luna](https://developers.openai.com/api/docs/models/gpt-6-luna)
- [OpenAI API docs: Pricing](https://developers.openai.com/api/docs/pricing)
- [OpenAI API docs: Ultrafast mode](https://developers.openai.com/api/docs/guides/ultrafast-mode)
- [ChatGPT Learn: Fast and Ultrafast modes](https://learn.chatgpt.com/docs/agent-configuration/speed)
- [ChatGPT Learn: GPT-6.2](https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol)
- [ChatGPT Learn: Models (reasoning effort, Max and Ultra)](https://learn.chatgpt.com/docs/models)
- [OpenAI API docs: Reasoning models](https://developers.openai.com/api/docs/guides/reasoning)
- [Anthropic: Introducing Claude Fable 5.2 and Claude Mythos 5.2 (9 November 2026)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- [Anthropic: Introducing Claude Opus 5.5 (22 September 2026)](https://www.anthropic.com/claude-opus-5-5)
- [Claude Platform docs: Claude Fable 5.2](https://platform.claude.com/docs/en/models/fable-5-2/overview)
- [Claude Platform docs: Models overview](https://platform.claude.com/docs/en/models/overview)
- [Claude Platform docs: Effort](https://platform.claude.com/docs/en/build-with-claude/effort)
- [Claude Platform docs: Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude Help Center: Why Claude switched models in your conversation with Fable models](https://support.claude.com/en/articles/15363606-why-claude-switched-models-in-your-conversation-with-fable-models)
- [Artificial Analysis: OpenAI has the #2 model in the Intelligence Index (17 November 2026)](https://artificialanalysis.ai/articles/openai-has-the-2-model-in-the-intelligence-index-with-the-release-of-gpt-6-2-astra-and-gpt-6-2-sol)
- [Artificial Analysis: GPT-6.2 Astra vs Claude Fable 5.2](https://artificialanalysis.ai/models/comparisons/gpt-6-2-astra-vs-claude-fable-5-2)
- [Artificial Analysis: GPT-6.2 Sol](https://artificialanalysis.ai/models/gpt-6-2-sol)
- [VentureBeat, Carl Franzen: 'Essentially unusable': OpenAI launches GPT-6.2 Astra and Sol to negative reception from AI power users (17 November 2026)](https://venturebeat.com/technology/essentially-unusable-openai-launches-gpt-6-2-astra-and-sol-to-negative-reception-from-ai-power-users)
- [VentureBeat: Anthropic releases Claude Fable 5.2 and Mythos 5.2](https://venturebeat.com/technology/anthropic-releases-claude-fable-5-2-and-mythos-5-2-pairing-new-record-high-benchmarks-with-20-api-cost-reduction)
- [VentureBeat: OpenAI releases GPT-6 Sol and Luna models, slashing API costs 50% or more](https://venturebeat.com/technology/openai-releases-gpt-6-sol-and-luna-models-slashing-api-costs-50-or-more)
- [The Verge, Emma Roth: OpenAI releases its updated GPT-6.2 Astra model (17 November 2026)](https://www.theverge.com/tech/1035483/openai-releases-its-updated-gpt-6-2-astra-model)
- [Quartz: OpenAI launches GPT-6 Astra amid fears of cybersecurity risks](https://qz.com/openai-gpt-6-astra-launch-cybersecurity-daybreak-090326)
- [Ridge: GPT-6.2's first hour: the boards like Astra, the early testers mostly do not](https://www.ridgebench.com/news/gpt-6.2-first-hour-1117)
- [Recently In AI: GPT-6.2 Sol Just Dropped and Users Are Already Fighting Over It (17 November 2026)](https://recentlyinai.com/articles/gpt-6-2-sol-reddit-reaction)
- [apimodels.app: GPT-6.2 Astra vs Claude Fable 5.2](https://apimodels.app/gpt-6-2-astra-vs-claude-fable-5-2)
- [Oakgen: Fable 5.2 Reddit Reactions, Checked Against Data (11 November 2026)](https://oakgen.ai/blog/claude-fable-5-2-community-reactions)
- [OpenRouter: GPT-6.2 Astra listing](https://openrouter.ai/openai/gpt-6.2-astra)
- [X, Matt Shumer (17 November 2026)](https://x.com/mattshumer_/status/2122752192226406421)
- [X, Theo (17 November 2026)](https://x.com/theo/status/2122757647170703550)
- [X, Dan Shipper (17 November 2026)](https://x.com/danshipper/status/2122754729012777052)
- [X, Ethan Mollick (17 November 2026)](https://x.com/emollick/status/2122755693191287009)
- [X, Derya Unutmaz (17 November 2026)](https://x.com/DeryaTR_/status/2122755479197868463)
