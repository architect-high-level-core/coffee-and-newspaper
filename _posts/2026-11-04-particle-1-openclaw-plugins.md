---
layout: post
title: "Particle-1 in OpenClaw: What the Token-Efficient Particle API Is, What It Really Saves, and Where the Plugin Ecosystem Stands"
date: 2026-11-04 07:46:00 +0100
slug: particle-1-openclaw-plugins
excerpt: "OpenClaw now supports Particle-1, a DeepSeek-based model from the new San Francisco inference company Particle that is trained to finish tasks with about 45% fewer output tokens. We explain who is behind Particle, how its API works, what the Chinese base model means for trust and EU users, where it pays off (with example calculations), what the first independent tests and users report, how to set it up as an OpenClaw provider plugin, and how mature and safe the wider OpenClaw plugin ecosystem on ClawHub is in November 2026."
tags: [AI, AI agents, OpenClaw, Particle, Particle-1, DeepSeek, token efficiency, LLM inference, API, reinforcement learning, LoRA, plugins, ClawHub, supply-chain security, open-weight models]
image: /assets/img/2026-11-04-particle-1-openclaw-plugins.jpg
image_alt: "A red lobster, the OpenClaw mascot, sits on a server rack in a dim data centre while small glowing particles drift from its claws"
image_credit: "Illustration: AI-generated"
audio: /assets/audio/particle-1-openclaw-plugins.mp3
audio_voice: Guy
audio_duration: "1:01:08"
---

On 3 November 2026, the OpenClaw project announced on X that a new model called **Particle-1** is "available in OpenClaw". The post says that the company behind it, **@particle_api**, "reports ~45% fewer output tokens than DeepSeek V4.1 Flash with comparable benchmark accuracy" and offers "zero data retention for standard inference". To try it, users should update to OpenClaw v2026.10.10 ([OpenClaw on X](https://x.com/openclaw/status/2117637498902077498)).

The name is easy to mishear: the product is **Particle** (company and API, website particle.ai, X handle @particle_api), and the model is **Particle-1**. This post explains what Particle is, how its API and model work, what the "45% fewer tokens" claim means in practice and where its limits are. In the second part we look at the OpenClaw plugin ecosystem: how Particle gets into OpenClaw as a plugin, which kinds of plugins are well established, and what the latest status is, including the security lessons of the past weeks.

**How we checked:** we read the original X posts by OpenClaw, Particle and Particle founder Suhail Doshi, Particle's launch blog post, About page, legal pages and API documentation, early news coverage (RuntimeWire, Crypto Briefing, Hokai, Frontrun, PitchBook), two independent hands-on tests (Plotly and Cocode), the OpenClaw documentation and the v2026.10.10 changelog on GitHub, the ClawHub plugin directory, the model listings on Opper and OpenRouter, and security reports from Socket, SafeDep and OSV. Benchmark numbers in sections 4 and 5 come from Particle itself; we did not run our own tests. Reactions on X are opinions of individual users, not verified facts. We also tried to search Reddit, but its pages were not reachable from our tools (see section 14). Prices and counts are as read on 3 November 2026.

**Key terms:**

- **Token:** a small piece of text (often part of a word) that a language model reads or writes. API providers bill per million tokens.
- **Output tokens / reasoning tokens:** everything the model generates. "Reasoning" models first write hidden thinking text; it is billed as output too.
- **Inference API:** a web service that runs a model for you. You send a request, you get an answer and a bill.
- **Open-weight model:** a model whose trained parameters are public, so anyone can host it. DeepSeek's models are an example.
- **LoRA adapter:** a small add-on set of parameters that changes the behaviour of a big model without retraining all of it.
- **Plugin (OpenClaw):** an installable code package that adds a capability to OpenClaw, such as a chat channel, a model provider, memory or a tool.

## 1. OpenClaw in brief

OpenClaw is a free, open-source agent system that runs as a "Gateway" on your own computer or server. People talk to it through chat apps such as WhatsApp, Telegram, Discord, Slack or Signal, and it can act for them: run commands, write code, browse, remember things and automate tasks. Its X profile describes it as "building personal AI that lives on your machine, by your rules" and says the project is run by a 501(c)(3) nonprofit foundation ([OpenClaw on X](https://x.com/openclaw)). OpenClaw does not ship its own large language model. It connects to models from many providers, and that is exactly where Particle comes in.

Releases are frequent and large. Version 2026.10.10, published on GitHub on 3 November 2026 at 04:22 CET, lists 3,028 pull requests from 454 contributors. Its headline features are a Chat Details panel, an experimental, opt-in "Advisor" that suggests course corrections during a task, and split speech mode for browser Talk ([GitHub release](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10); [release notes](https://docs.openclaw.ai/releases/2026.10.10)).

## 2. What Particle is

Particle is a new company. Suhail Doshi, known as a co-founder of the analytics company Mixpanel, announced it on X on 28 October 2026: "Excited to announce our new company Particle. This is our first step in a series of models focused on developers. With particle-1, we focused on token efficiency and managed to keep parity in performance while using ~45% fewer tokens" ([Suhail on X](https://x.com/Suhail/status/2115497949421883648)). In the same thread he writes that the model "is based on DeepSeek V4.1 Flash 1017" and that the mission is "to make intelligence as accessible and abundant as electricity" ([thread part 2](https://x.com/Suhail/status/2115497953544864048), [part 4](https://x.com/Suhail/status/2115497957546189064)).

Particle's website calls the company "a new AI inference layer for open weight models. Fast, low-cost, and reliable" ([particle.ai](https://particle.ai)). So Particle is two things at once:

1. **An inference provider**, the "Particle API", that hosts open-weight models (currently DeepSeek V4.1 Flash and GLM 5.3 Flash) behind one interface.
2. **A model lab** that post-trains those models. Particle-1 is its first own model.

Who runs the company, who pays for it and where the servers are is covered in the next section.

## 3. Where Particle comes from: company, team, money, servers and the Chinese base model

Because Particle is only a week old in public, it is worth being precise about who is behind it. Here is what the company's own pages, its founder's posts and early news coverage say, and how solid each point is.

### Company and headquarters: a US startup in San Francisco

Particle is a **US company**. Its terms of service, privacy policy and zero-data-retention policy all name the legal entity as **"Unmetered Machines, Inc. dba Particle AI"** ("dba" means "doing business as") ([terms](https://particle.ai/legal/terms); [privacy policy](https://particle.ai/legal/privacy); [zero data retention](https://particle.ai/legal/zero-data-retention)). The terms are governed by **Delaware law**, and disputes go to arbitration or courts in **San Francisco, California**. The About page, dated 26 October 2026, carries the line "Particle.ai San Francisco, CA" and says the team works "In-person San Francisco California >>> U.S.A." ([About](https://particle.ai/about)). Delaware law usually suggests a Delaware corporation, but the documents do not state the state of incorporation directly, so we treat that as likely, not confirmed.

Note that there are other things called Particle: an unrelated AI news-reader app with the same name, and a 100-million-parameter hobby model called "Particle 1.0" posted on Reddit in August 2026 ([r/huggingface](https://www.reddit.com/r/huggingface/comments/1vqotoe/i_trained_a_mini_chatgpt_from_scratch_particle_10/)). Neither has anything to do with Particle-1. The company profile on Hokai also warns that funding figures for "Particle" usually belong to the news app ([Hokai](https://hokai.io/hub/companies/particle-ai)).

### Founder and team

The About page names one person: **Suhail Doshi, "Founder, Particle"**. Doshi co-founded and ran the product-analytics company Mixpanel and later founded Playground, an AI creative-tools company, as the trade site RuntimeWire noted at launch ([RuntimeWire](https://runtimewire.com/article/suhail-doshi-particle-particle-1); [Crypto Briefing](https://cryptobriefing.com/particle-1-model-45-percent-token-efficiency/)). On 27 October he wrote: "New quest. New company. New model. It's time to ship this week" (quoted by [Frontrun](https://www.frontrun.vc/blog/particle-ai-inference-launch/)). The launch blog post is signed only "Particle team".

No other team members are named on Particle's site. The team is clearly small and still forming: the About page lists open roles for a post-training research engineer (for models of "500B+" parameters), an inference performance engineer, a synthetic-data research engineer, an applied research engineer for open-source multi-agent systems, and an account executive, all in person in San Francisco. A "note from the founder" says frankly that "raw hours actually make a big difference" at this stage. In his launch thread, Doshi thanks several outside advisers, including Box CEO Aaron Levie, Superhuman founder Rahul Vohra and AI researchers Nathan Lambert and others, for feedback ([X](https://x.com/Suhail/status/2115503194935873654)). Advisers are not employees, so we do not count them as the team.

### Funding: backers named, amounts not public

The About page says Particle is "Backed by Y Combinator, Caffeinated Capital, 8VC" and lists twelve individual backers, among them Patrick Collison (Stripe), Aaron Levie (Box), Rahul Vohra (Superhuman), Immad Akhund (Mercury), Varun Mohan (Windsurf), Parker Conrad (Rippling), Stephen Balaban (Lambda), Apoorva Mehta (Instacart), David Luan (Adept), Adam D'Angelo (Quora) and Matan Grinberg (Factory) ([About](https://particle.ai/about)). The PitchBook preview lists a completed **seed round** with 15 investors but shows no amount, date or valuation ([PitchBook](https://pitchbook.com/profiles/company/1534424-68)). We found **no public figure** for how much Particle has raised.

### Where inference runs: not necessarily in the US

This point matters most for European users and is easy to miss. Particle's documentation offers two endpoints ([regional endpoints](https://docs.particle.ai/regional-endpoints.md)):

- `https://api.particle.ai/v1`, the default: "Any otherwise eligible GPU, regardless of country."
- `https://us.api.particle.ai/v1`: "Only GPUs explicitly recorded as being in the United States."

So with the **default endpoint, your prompts may be processed on GPUs in any country**. Particle does not say which countries or which cloud or GPU providers it uses. Its privacy policy says only that it uses service providers for "hosting and content delivery, infrastructure" and that personal information "may be processed and stored in the United States". The OpenClaw provider plugin documents the default global base URL, `https://api.particle.ai/v1` ([OpenClaw docs](https://docs.openclaw.ai/providers/particle)). We did not find an option in the plugin docs to switch to the US-only endpoint and have not tested whether one exists.

The partner gateway Opper lists its Particle route as running in the US ([Opper](https://opper.ai/particle/particle-1)). Particle also appears as a backend for other services: the API gateway company Merge says Particle has been "serving a big share of our GLM 5.3 Flash and DeepSeek V4 Flash traffic" ([Merge on X](https://x.com/merge_api/status/2115531822222233821)).

### The base model comes from China's DeepSeek

Particle-1 is built on **DeepSeek V4.1 Flash**, an open-weight model from DeepSeek, an AI company based in Hangzhou, China. Particle and Doshi say this openly ([X](https://x.com/Suhail/status/2115497953544864048)). The second model Particle serves, GLM 5.3 Flash, comes from Z.ai, also a Chinese developer ([Hokai](https://hokai.io/hub/companies/particle-ai)).

What does that mean in practice? It helps to separate two things:

1. **Where your data goes.** Using Particle-1 through Particle's API does **not** send your prompts to DeepSeek. DeepSeek published the base model's weights; Particle downloaded them, trained its adapter and runs the model on its own (rented) GPUs. Your data is handled under Particle's US terms, not DeepSeek's. This is a key difference from using DeepSeek's own app or API, which Italy's data protection authority ordered blocked for Italian users in January 2025 after DeepSeek said EU data protection law did not apply to it ([Garante](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10097450); [Reuters](https://www.reuters.com/technology/artificial-intelligence/italys-privacy-watchdog-blocks-chinese-ai-app-deepseek-2025-01-30/)). That decision concerned DeepSeek's service, not the model weights.
2. **How the model behaves.** The model's knowledge, gaps and possible biases come mostly from DeepSeek's training, since Particle changed only about 1.25% of the parameters through a LoRA adapter. Earlier DeepSeek models were found to avoid or reframe topics that are politically sensitive in China, and a 2025 study of DeepSeek-R1 found this behaviour persisted even when the model was run locally, outside DeepSeek's own service ([R1dacted, arXiv](https://arxiv.org/abs/2505.12625); [WIRED](https://www.wired.com/story/deepseek-censorship/)). We did not test whether Particle-1 shows this, and Particle does not comment on it. For coding and data-engineering tasks it is unlikely to matter much; for content about politics, history or human rights it could.

Some organisations have internal rules against models of Chinese origin, regardless of where they are hosted. If yours does, Particle-1 falls under such a rule, even though it is sold by a US company.

### What this means for EU and Austrian users

- **Terms of use:** Particle's terms say: "You may use the Services only in the United States and other locations Particle expressly supports." The privacy policy says the services "are initially intended for the United States" and warns: "Do not use the Services from an unsupported location." We found **no list of supported locations** and no statement that the EU is supported. EU customers should ask Particle before using the service in production.
- **GDPR:** we found no public data processing agreement (DPA) and no EU data residency. The privacy policy says a DPA may govern processing for business customers "where applicable", so one might be available on request; that is not confirmed. Opper's listing of the Particle route says "No DPA" and transfer mechanism "unknown".
- **What is reassuring:** the zero-data-retention policy is written into a legal document, says Particle "does not intentionally store raw prompts" and does not train on customer content unless the customer "separately and affirmatively" opts in. Usage metadata, IP addresses and billing data are kept.
- **Practical rule:** for experiments, open-source code and public data, Particle-1 looks low-risk. For personal data of EU customers or employees, wait for a DPA, a clear statement on supported regions, and use the US-only endpoint at minimum.

### Verified or not: a summary

| Claim | Status |
| --- | --- |
| US company, legal name Unmetered Machines, Inc., based in San Francisco | Verified (Particle's legal pages and About page) |
| Delaware corporation | Likely (Delaware law governs the terms), not stated directly |
| Founder Suhail Doshi, co-founder of Mixpanel and founder of Playground | Verified for the Particle role (About page); background from news coverage |
| Other team members | Not named publicly |
| Backers: Y Combinator, Caffeinated Capital, 8VC and 12 angels | Verified (About page); PitchBook lists a seed round |
| Funding amount and valuation | Not public |
| Inference location | Default endpoint: GPUs in any country; US-only endpoint available. Countries and providers not disclosed |
| Base model from China's DeepSeek | Verified (Particle and Doshi) |
| Prompts are not stored | Particle's policy says so; not independently audited |
| EU use allowed | Unclear: terms restrict use to the US and "expressly supported" locations |

## 4. How Particle-1 was built, in plain words

Most AI cost cutting happens on the hardware side: faster chips, cheaper servers, better caching. Particle takes a different angle. It trains the model itself to **do the same work with less text**.

According to the launch blog post, Particle-1 is DeepSeek V4.1 Flash with additional training through **reinforcement learning (RL)**. In RL, the model tries a task many times and is rewarded for good results. Particle's reward function "incentivizes the model to solve tasks successfully while using fewer tokens for reasoning and tool calls" ([Particle blog](https://particle.ai/blog/introducing-particle-1)). In other words: a correct answer is good, a correct *short* path to it is better.

The technical details Particle discloses:

- **Training tasks:** an internal set of coding and data-engineering tasks in the "Harbor" format, created by Particle's own synthetic-data system "Datamaker". Each task comes with an automatic check of whether the result is correct. The model works through the "Terminus 2" agent.
- **Stages:** training ran in successive stages ("Cascade RL"): first coding, then mostly data engineering.
- **What was changed:** a rank-64 **LoRA adapter** across the expert layers. Its trainable parameters equal about 1.25% of the model's parameter count. The base model stays the same; the adapter shifts its habits.
- **Algorithm and stack:** Group Sequence Policy Optimization (GSPO), on RadixArk's open-source RL framework Miles, with the SGLang inference engine and Megatron for training. Particle says a token-level loss "oscillated and eventually diverged", which is why it scored whole sequences.

The weights of Particle-1 are not published, according to the model page on the gateway Opper ([Opper](https://opper.ai/particle/particle-1)). Particle-1 is therefore a *proprietary fine-tune of an open-weight model*, available only through Particle's API and partners.

### Where the savings come from

Particle compared runs of the base model and Particle-1 on the same tasks where both succeeded. It names four patterns ([Particle blog](https://particle.ai/blog/introducing-particle-1)):

1. **Less deliberation for the same actions:** the model thinks less before choosing the same next step.
2. **Stopping when done:** after verifying a solution, it spends less time re-checking and writing a long final confirmation.
3. **Fewer trial-and-repair loops:** a more direct implementation needs fewer rebuilds and patch fixes.
4. **More focused exploration:** less time spent on alternatives and edge cases.

On three of the four coding benchmarks, reasoning tokens account for roughly 90% of the savings. One example from the post: in a calendar task, both models made the same four model calls and six commands; about 94% of the savings came *after* the correct file was already written, in the completion and confirmation phase. A reply on X summed up this effect: "we're always open to a model that skips the acceptance speech" ([@kalapowered](https://x.com/kalapowered/status/2117693421783863500)).

## 5. The numbers, and how to read them

Particle tested on four agentic benchmarks: Terminal-Bench 2.1 (terminal work such as compiling and configuring), ReactBench (building and fixing React apps), ADE Bench (analytics and data engineering with dbt) and DeepSWE 1.1 (longer software-engineering tasks). The aggregate figures shown in the blog post are:

| | Particle-1 | DeepSeek V4.1 Flash | GLM 5.3 Flash |
| --- | --- | --- | --- |
| Cost per task (USD) | 0.2211 | 0.3368 | 0.6523 |
| Mean output tokens per task | 59,580 | 83,246 | 98,155 |
| Task pass rate | 72.57% | 71.15% | 66.82% |

Source: [Particle blog](https://particle.ai/blog/introducing-particle-1). Each model ran 16 rollouts per task; costs assume a fixed 95% cache-hit rate.

Per benchmark, Particle reports 28.4% to 52.2% fewer output tokens and 34.4% to 51.6% lower average cost per task than the base model. The pass rates are "within the confidence intervals of the base model", which means: **not worse, but also not proven better**. On general tests outside the training domains, scores stay close to the base model, sometimes slightly lower (GPQA Diamond 90.40% vs 90.91%; Tau Airlines 86.00% vs 88.00%), sometimes slightly higher (MMLU 86.08% vs 85.98%).

There is also an early look beyond coding. On a single contract-review task from the Harvey LAB legal benchmark, Particle-1 used 24.6% fewer output tokens and all eight of its reports passed, compared with 62.5% for the base model. Particle also turned up the strength of its adapter: at 8× it cut output by 78.7%, but only three of eight reports passed the strict check. Particle's own conclusion: "aggressive scaling compresses useful qualifications along with redundant analysis." This is a useful reminder that "shorter" and "better" are not the same thing, and the legal result rests on one task only.

**What to keep in mind:**

- All numbers in this section come from Particle. Two early independent tests (section 14) partly confirm the token and speed savings on coding, but found no token saving on a data-analysis exam.
- The comparison is with the model Particle-1 was built from. Against other models, results may differ.
- Savings are measured in *output* tokens. In agent work, input tokens (the growing conversation and tool results) are often the larger share; caching helps there, but Particle-1 is not designed to shrink input.
- The first release "focuses on software engineering"; other domains are planned ([Particle blog](https://particle.ai/blog/introducing-particle-1)).

## 6. The Particle API: how it works

The Particle API is **OpenAI-compatible**. Any tool or SDK that can talk to OpenAI can be pointed at `https://api.particle.ai/v1` with a Particle API key. There is also a US-only GPU endpoint at `https://us.api.particle.ai/v1` ([Particle docs](https://docs.particle.ai)). Keys are created on platform.particle.ai; the portal stores your Google identity, which suggests sign-in runs through Google ([data retention page](https://docs.particle.ai/data-retention.md)).

The main parts, according to the documentation:

- **Endpoints:** Chat Completions (`/v1/chat/completions`) with tools, streaming and reasoning controls; a legacy Completions endpoint; a model list; and an OpenAI-style Files API.
- **Responses WebSocket with "mid-turn steering":** an agent can receive a user's correction *while* it is still generating ("Actually, make this a checklist"). Particle keeps the output already sent and starts a linked follow-up response ([steering docs](https://docs.particle.ai/steering.md)). This is a genuinely unusual feature among inference APIs.
- **Models:** `particle-1`, `deepseek-ai/deepseek-v41-flash-1017` and `glm-5.3-flash`, all with a context window of 1,048,576 tokens.
- **Defaults built for agents:** reasoning is on by default at "high" effort and can be turned off with `"reasoning_effort": "none"`. If you set no limit, output is capped at 32,000 tokens so a run "cannot run forever". During long thinking pauses the stream sends empty keep-alive chunks after 15 seconds so proxies do not cut the connection. A `prompt_cache_key` keeps a conversation on the same server for cheaper cached input.
- **Structured output:** `json_object` mode is validated; JSON-Schema output is "best-effort" and not guaranteed ([structured outputs](https://docs.particle.ai/structured-outputs.md)).

### Prices

Particle's billing page lists these default prices per million tokens for regular "peak" service ([usage & billing](https://docs.particle.ai/usage-billing.md)):

| Model | Input | Cached input | Output |
| --- | --- | --- | --- |
| particle-1 | $0.25 | $0.03 | $1.00 |
| deepseek-v41-flash-1017 | $0.25 | $0.03 | $1.00 |
| glm-5.3-flash | $0.12 | $0.03 | $0.40 |

Off-peak (20:30 to 04:00 New York time, which is 02:30 to 10:00 in Central Europe) all token prices drop by 50%. The optional "Flex" tier gives another 50% off in exchange for lower priority and possible waits of up to 15 minutes. Hosted web search costs $2.50 per 1,000 searches. Billing is prepaid; an empty balance returns an error before anything runs.

The key point: **Particle charges the same per-token price for Particle-1 as for its base model**. The saving comes only from fewer tokens per task, not from a lower rate. Note a small inconsistency: the footnotes of the launch blog post use $0.30 / $0.006 / $1.20 for both models, while the current docs, the OpenClaw docs and Opper list $0.25 / $0.03 / $1.00. Particle notes that account-specific prices can apply. Through the aggregator OpenRouter, Particle-1 was listed on 3 November at $0.05 input and $0.50 output per million tokens ([OpenRouter models API](https://openrouter.ai/api/v1/models)); we could not verify whether this is a launch promotion.

### Privacy: what "zero data retention" means here

Particle says prompts and completions are "processed in memory and never persisted". It does store API key verifiers, per-request usage records (token counts, model, cost, but no content), uploaded files until you delete them, and short-lived prefix caches ([data retention](https://docs.particle.ai/data-retention.md)). That is a strong statement, also written into Particle's legal [zero-data-retention policy](https://particle.ai/legal/zero-data-retention), but it is a self-declaration; we found no independent audit. Where the GPUs are located is covered in section 3. For European users, Opper's listing of the Particle route is worth reading: region US, "No DPA" (no GDPR data processing agreement) and transfer mechanism "unknown" ([Opper](https://opper.ai/particle/particle-1)). Particle itself has described Opper as a partner that "focuses on EU inference" ([Particle on X](https://x.com/particle_api/status/2117283327170535747)), but the listed route itself runs in the US.

## 7. Advantages and limits compared with alternatives

**Advantages**

- **Lower cost per finished task** at the same token price as the base model, if Particle's figures hold for your workload.
- **Faster completion.** Fewer tokens means less time generating. Suhail Doshi says completing tasks end-to-end "is noticeably faster too" ([X](https://x.com/Suhail/status/2115497953544864048)); Particle has not published latency figures.
- **Less to read.** One reply pointed out that shorter agent output "is also less text for a human to review", which could "save more in attention than in API bills" ([@akhilveeraraju](https://x.com/akhilveeraraju/status/2117656201945333789)).
- **Agent-friendly API details:** mid-turn steering, keep-alives, sensible defaults, cheap off-peak and Flex tiers.
- **Huge context window** (about one million tokens) and image input.

**Limits**

- **Young company, young model.** Particle's X account had around 400 followers and three posts when we checked; the model launched one week ago.
- **Vendor lock-in for the fine-tune.** The weights are not public, so you cannot self-host Particle-1 the way you can host DeepSeek.
- **Mostly self-reported benchmarks**, mostly coding. The first independent tests are small (one run per task) and mixed outside coding (section 14).
- **Origin and jurisdiction questions:** a US company whose terms limit use to the US and "expressly supported" locations, with a base model from China's DeepSeek (section 3).
- **Not the cheapest option per token.** GLM 5.3 Flash costs less per token on Particle; elsewhere, DeepSeek's base model may be cheaper. Whether Particle-1 is cheaper per task depends on the provider and price you compare against.
- **No guaranteed JSON schemas**, and the zero-retention promise is not independently audited.

Compared with large closed frontier models from OpenAI, Anthropic or Google, Particle-1 is a budget model for high-volume agent work, not a rival for the hardest tasks. Compared with simply using DeepSeek V4.1 Flash, its pitch is "same quality, shorter path".

## 8. Use cases and benefits in detail

Who gains from Particle-1, and how much? The model's promise is not that it is smarter, but that it reaches a similar result with less text. That brings three kinds of benefit:

- **Cost:** output tokens are the expensive part of a reasoning model's bill ($1.00 per million on Particle, four times the uncached input price), so fewer output tokens means a lower bill per task.
- **Time:** text is generated token by token, so less text usually means a faster finish. Independent hands-on tests in section 14 measured two to four times shorter sessions on small coding tasks.
- **Context budget:** in agent loops, tool calls and visible answers are typically fed back into the conversation, so shorter outputs make the context grow more slowly, and the agent can work longer before it hits limits or needs to summarise. This is a general mechanism; Particle has not published measurements of it.

### Illustrative example calculations

The following numbers are **illustrative only**. They use Particle's published default prices (peak: $0.25 per million uncached input tokens, $0.03 cached, $1.00 output; off-peak and Flex 50% off each), assumed token counts that we chose for the example, and Particle's own savings claims. Real bills depend on your tasks, caching and the price you actually get. Particle notes that account-specific prices may apply, and prices on gateways such as OpenRouter differ.

**Example A: a coding agent team.** Particle's own benchmark average is $0.3368 per task for DeepSeek V4.1 Flash and $0.2211 for Particle-1 (calculated by Particle with the $0.30 / $1.20 prices from its launch post). For 1,000 agent tasks a month, that is about **$337 versus $221, a saving of about $116 a month**, or roughly a third. For a team running 20,000 tasks a month, the gap grows to about $2,300. In absolute terms these are modest sums; the bigger benefit for developers waiting on an agent may be the shorter run time.

**Example B: a personal OpenClaw assistant.** Assume 50 requests a day, each with 20,000 input tokens (80% of them cached from earlier turns) and 2,000 output tokens:

- Input: 4,000 uncached tokens × $0.25/M = $0.0010; 16,000 cached × $0.03/M = $0.00048
- Output: 2,000 × $1.00/M = $0.0020
- Per request about $0.0035, per month (30 days) about **$5.20**

If Particle-1 cut output by 45% (1,100 instead of 2,000 tokens), the same month would cost about **$3.90**. For one person, the saving is about $1.30 a month: nice, but not a reason to switch on its own. For a small agency that runs dozens of assistants for clients, as some OpenClaw installers do, it adds up.

**Example C: a high-volume batch job.** Say you process 100,000 documents, each with 3,000 input tokens and 800 output tokens:

- Peak price: 300 million input tokens × $0.25/M = $75, plus 80 million output tokens × $1.00/M = $80, total **$155**
- Run it off-peak (20:30 to 04:00 New York time): **$77.50**
- Off-peak plus Flex tier: about **$38.75**

Here the pricing options matter more than the model's token efficiency: scheduling the job at night and accepting Flex waits cuts the bill by 75%. If Particle-1 also saved 30% of output tokens, the peak bill would drop from $155 to $131. Whether it saves tokens on summarisation or extraction at all is **unproven**: its training targeted coding, and the one independent test outside coding (Plotly's data-analysis exam, see section 14) found it used slightly *more* output tokens than its base model.

### Application areas

**1. Coding agents.** This is the core use case and the only one Particle trained and tested systematically: terminal work, debugging, building and fixing web apps, longer software-engineering tasks. Beneficiaries are developers using agent tools such as OpenClaw, Pi, Capy or Claude-Code-style harnesses with an open model, and companies that run many agent sessions. The gain is cost and, as early user tests suggest, noticeably shorter waiting time. Suhail Doshi says the team "mostly focused on multi-turn, long contexts since there is more to gain there" ([X](https://x.com/Suhail/status/2117649067895558376)).

**2. Data engineering.** ADE Bench, one of Particle's four benchmarks, covers analytics and data-engineering tasks in real dbt projects and databases, and the second training stage focused on this area. Typical jobs: fixing a dbt model, adding casts or keys, cleaning a staging layer. Particle's own examples show cases where the model reused existing code instead of building something new. Particle also notes one case where the shorter solution used different semantics, so results need review.

**3. Long agent loops and always-on agents.** When an agent makes 50 to 100 model calls for one job, a model that stops checking once it is done saves tokens at every step. Particle's example of a merge-conflict task shrank from 118 to 86 calls. For OpenClaw users who leave agents running scheduled automations, fewer and shorter calls also mean fewer chances for the agent to wander off.

**4. High-volume batch jobs.** Nightly code reviews, test generation across many repositories, bulk refactoring or migration scripts: here the off-peak window and Flex tier (see Example C) bring larger savings than the model itself. The one-million-token context window allows large inputs per request.

**5. Customer support and document workflows.** These are plausible but **untested** uses. Particle-1 supports tool calling, image input and validated JSON mode, which are the building blocks for ticket triage, reply drafting, form extraction or contract checks. The single legal task in Particle's blog post (a contract-review audit) is an encouraging hint, not evidence. Two warnings apply: support and document data usually contain personal data (see the EU points in section 3), and strict JSON-Schema output is only "best-effort", so extraction pipelines need their own validation.

**6. OpenClaw personal-assistant use.** For everyday chat tasks such as summarising mail, planning, small scripts and web research, Particle-1 can be a cheap "daily driver". One early user wrote that he switched his "generalist" agent to it and is "super impressed with the model as a token-efficient daily-driver" ([X](https://x.com/sh______rn/status/2117642201526145328)). A common pattern with agent systems is to use a cheap model for routine work and a frontier model for hard tasks.

### Who benefits most

- **Developers and small teams** who pay per token for coding agents and want faster turnaround.
- **Platform builders** (gateways, coding tools, agent hosts) that resell model access and gain margin from shorter outputs, which explains the quick listings on OpenRouter, Cloudflare AI Gateway, Opper, Capy and others.
- **Heavy OpenClaw users and agencies** running many agents.
- **Users who read agent transcripts**: shorter output is less to review, as one reply on X pointed out ([X](https://x.com/akhilveeraraju/status/2117656201945333789)).

### When Particle-1 is NOT a good fit

- **Personal data under GDPR**, as long as there is no DPA, no clear EU support in the terms and no EU data residency.
- **Organisations that exclude models of Chinese origin**, or content where China-related political bias would matter.
- **Tasks where thoroughness beats brevity:** legal, medical or financial analysis, security reviews, careful data-quality audits. Particle's own adapter experiment showed that too much compression drops useful caveats, and Plotly's test found a false alarm in a data-quality audit (section 14).
- **Strict structured-output pipelines** that need guaranteed JSON-Schema compliance.
- **The hardest reasoning or coding problems**, where a frontier model's higher success rate is worth more than a cheaper failed attempt.
- **When the base model is cheaper where you buy it.** Particle charges the same per token for Particle-1 and DeepSeek V4.1 Flash, but other providers price DeepSeek differently and offer their own discount hours. An independent tester found DeepSeek's billed price lower in two of three runs because of such discounts (section 14).
- **Self-hosting:** the weights are closed, so you cannot run Particle-1 on your own hardware.
- **Mission-critical production** with a vendor that is one week old in public, has no published uptime track record and no disclosed funding.

## 9. Using Particle-1 in OpenClaw

In OpenClaw, Particle comes as a **provider plugin**, not as part of the core. The OpenClaw documentation describes the setup ([OpenClaw docs: Particle](https://docs.openclaw.ai/providers/particle)):

```bash
# 1. Create an API key at platform.particle.ai (needs the "inference" scope and credit)
# 2. Install the provider plugin
openclaw plugins install @openclaw/particle-provider
# 3. Onboard with the key
openclaw onboard --auth-choice particle-api-key
# 4. Check and select the model
openclaw models list --provider particle
openclaw models set particle/particle-ai/particle-1
```

The key is read from the environment variable `PARTICLE_API_KEY`, which must be available to the Gateway process, not only to your shell. The short alias `particle-1` also works. OpenClaw's thinking levels map onto Particle's reasoning settings: `off` sends `reasoning_effort: "none"`, `minimal` and `low` select low effort, `medium` to `xhigh` select high effort, and `max` selects max effort.

The integration has clear limits. It uses Chat Completions with streaming only. According to the docs it "does not integrate Particle's separate Responses WebSocket API, mid-turn steering, file uploads or hosted web search". So Particle's most unusual API feature, steering, is not available through OpenClaw yet.

One detail we could not resolve: the OpenClaw post says to update to v2026.10.10, but the word "Particle" does not appear in that version's changelog ([changelog](https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.10.10.md)). The provider plugin is a separate package, and the docs page says prices and limits were checked on 29 October 2026. Most likely the plugin simply requires the newest host version, but this is our inference, not a documented statement.

## 10. The OpenClaw plugin ecosystem: what exists and what is well suited for what

Plugins are how OpenClaw grows. The documentation lists what they can add: "channels, model providers, agent harnesses, tools, skills, speech, realtime transcription, voice, media understanding, generation, web fetch, web search, and other runtime capabilities" ([OpenClaw docs: Plugins](https://docs.openclaw.ai/tools/plugin)). There are two formats: native OpenClaw plugins and "compatible bundles" that reuse plugin layouts from Codex, Claude or Cursor.

**ClawHub** (clawhub.ai) is the default install source and the main directory. When we checked, its plugin page showed **2.6K plugins**. The most downloaded entries at the top of the list were almost all official `@openclaw` packages ([ClawHub plugins](https://clawhub.ai/plugins)):

| Category | Examples on ClawHub (downloads shown on 3 Nov 2026) |
| --- | --- |
| Chat channels | WhatsApp (206k), Matrix (56.1k), Discord (20.4k), Feishu/Lark (17.1k, community-maintained), QQ Bot |
| Model providers and runtimes | Codex harness (65.1k), DeepSeek provider (36.2k), llama.cpp provider for local models, ACPX runtime, now Particle |
| Web search | DuckDuckGo (26.4k), Brave (21.9k), Tavily (13.2k), Parallel, Firecrawl, SearXNG |
| Memory and context | Memory LanceDB (20.2k), OpenViking context engine (third-party) |
| Operations | Diagnostics for Prometheus and OpenTelemetry, tokenjuice (shortens command output), Diffs viewer |
| Safety | Gen Sage by Gen Digital, "Safety for Agents" (20.2k) |
| Workflows and voice | Lobster typed pipelines with approvals, Voice Call via Twilio, Telnyx and Plivo |

**What is well suited for what.** As a rule of thumb, the official `@openclaw` channel, provider and search plugins are the most mature: they are maintained in the main project, follow its release cycle and have the most users. One community post suggested an order for new setups: "Memory first", then a messaging gateway ([@aiclawbots](https://x.com/aiclawbots/status/2115881354780938698)). That matches how most people use OpenClaw: a channel to talk to it, a model provider, web search, and memory. Everything beyond that is specialist territory.

Recent third-party plugins and skills announced on X show where the community is going:

- **Desktop and GUI control:** a plugin that lets an agent hand off GUI tasks to Simular's "Sai" desktop agent ([@sai_borg](https://x.com/sai_borg/status/2115804478465355876)).
- **Human approval:** OKed, which pauses risky actions until you say yes or no in Telegram or on the web and issues "a signed receipt" for each decision ([@OKed_AI](https://x.com/OKed_AI/status/2116784831212204343)).
- **Memory:** Walrus Memory with encrypted, decentralised storage ([@WalrusProtocol](https://x.com/WalrusProtocol/status/2115026469462462568)).
- **Enterprise sandboxing:** OpenClaw creator Peter Steinberger described NemoClaw as "an OpenClaw plugin for fine-grained security sandboxing, so enterprises can apply their egress rules" ([@steipete](https://x.com/steipete/status/2102041970638192992)).

Most of these are small projects with few users. Their maturity is unknown, and some posts are plain marketing.

## 11. Security and trust: the lesson of September

Plugins run as code inside your agent, with access to whatever the agent can reach. The OpenClaw docs say it bluntly: "Treat plugin installs like running code" ([docs](https://docs.openclaw.ai/tools/plugin)).

How serious that is became clear on **23 September 2026**. An attacker took publishing tokens from MemTensor's GitHub Actions release pipeline and published malicious versions 0.1.21, 0.1.23 and 0.1.25 of the npm package `@memtensor/memos-cloud-openclaw-plugin`, a memory plugin for OpenClaw, plus a malicious MemoryOS release on PyPI. The packages contained a Go implant called "sckit" that searched the home directory for credentials (npm, PyPI, GitHub, cloud and SSH keys) and could spread to other packages. According to Socket, the npm plugin started the implant when the OpenClaw Gateway started "and again on every memory recall with the user's prompt text" ([Socket](https://socket.dev/blog/memtensor-compromise); [SafeDep](https://safedep.io/blog/memtensor-sckit-worm-npm-pypi); [OSV MAL-2026-16476](https://osv.dev/vulnerability/MAL-2026-16476)). Version 0.1.20 is named as the last known-good release. Note that this was an npm package, not a ClawHub listing.

OpenClaw and ClawHub have several protective layers, according to their documentation:

- **Review before release.** ClawHub runs automated security checks on each exact release and keeps it out of search and install surfaces until they pass. Releases with malicious findings are not published ([ClawHub publishing](https://docs.openclaw.ai/clawhub/publishing)).
- **Namespace protection.** Only the real `@openclaw` owner can publish `@openclaw/...` packages, so a look-alike cannot claim the official scope.
- **Trusted sources and allowlists.** ClawHub and the official catalog are treated as trusted. Arbitrary npm, git or local sources need `--force` in non-interactive installs. A `plugins.allow` list restricts what can load, and `plugins.deny` always wins.
- **Operator install policy.** `security.installPolicy` can run your own check before any plugin install or update and allow, warn or block it.
- **Trust-gated capabilities.** Third-party npm plugins cannot use some sensitive runtime functions reserved for trusted or official plugins.

**Practical advice** that follows from the docs and the incident: prefer official `@openclaw` plugins and ClawHub listings, pin versions in production, keep an allowlist, check a plugin's public repository and maintainer, and do not keep long-lived secrets in the home directory of the machine that runs your agent. One user tip from X: before blaming the updater, "disable third-party plugins, run openclaw doctor, then update" ([@JayQinQT](https://x.com/JayQinQT/status/2115451661338784059)).

## 12. Latest status: what changed for plugins in v2026.10.10

The new release contains many plugin-related changes, mostly for developers ([changelog](https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.10.10.md)):

- **Migration deadline:** plugin authors have until **31 December 2026** to move deprecated synchronous SDK calls to new asynchronous versions. The calls are not removed yet.
- **Compatibility repair:** the release restores 29 private SDK exports "used by existing community plugins while their authors migrate".
- **Verified discovery:** companion clients can now find and preview official ClawHub packages "with verification of the exact package they receive".
- **Version coupling:** installing newer bundled plugins separately on older OpenClaw versions is unsupported.
- **New plugin powers:** authorised plugins can steer running tasks with hidden, attributed guidance, and plugin tools that send the final reply now wait for the other tools in the same group, so errors are not hidden.

For ordinary users, the message is simple: keep OpenClaw and your plugins updated together, and expect some community plugins to show deprecation warnings until the end of the year.

## 13. Community reaction on X

The OpenClaw announcement had about 42,600 views, 267 likes and 25 replies when we read it on 3 November ([X](https://x.com/openclaw/status/2117637498902077498)). Suhail Doshi quoted it: "Now in OpenClaw - it was collaborating with them on this! We have a lot more updates to the model coming..." ([X](https://x.com/Suhail/status/2117638932959785136)). His original launch post had collected more than 2,200 likes and 420,000 views ([X](https://x.com/Suhail/status/2115497949421883648)).

The replies were mostly positive and practical:

- **Cost focus:** "45% fewer output tokens matters more than most benchmark points" ([@lostinazeroy](https://x.com/lostinazeroy/status/2117649769913012556)).
- **Privacy:** one user called zero data retention "the part that actually unlocks trust for me" ([@Dr_ztc](https://x.com/Dr_ztc/status/2117654673280889029)).
- **Open questions:** whether the savings hold for tool-calling tasks where most output is structured JSON ([@proxy_vector](https://x.com/proxy_vector/status/2117647267536736739)), and whether the model is slower per token ([@MiclauMarius](https://x.com/MiclauMarius/status/2117655193881890893)). We found no official answer to either. Particle's blog only says that on DeepSWE, tool-call text made up about 30% of the savings.
- **Price scepticism:** one user asked "pricing is 5x isn't it?" ([@_why_so_cereal_](https://x.com/_why_so_cereal_/status/2117650762457096692)), another claimed that on OpenRouter he would "end up paying like 10% more for the same job" ([@101xtechnology](https://x.com/101xtechnology/status/2117673568557572448)). Both claims are unverified and do not match Particle's own price list, where both models cost the same per token. They do show that the comparison depends heavily on which provider and which DeepSeek price you use as the baseline.

Outside OpenClaw, the AI gateway Opper put Particle-1 live on its platform ([@opperai](https://x.com/opperai/status/2117261843559223699)), and a developer from the coding tool Codespeed wrote they were "looking forward to bringing Particle" into it ([X](https://x.com/larachelak/status/2115523683360153997)).

## 14. What early users say

Particle-1 has been public for less than a week, so real feedback is thin. We searched X and tried Reddit. On Reddit, the search pages for "particle-1" and the r/LocalLLaMA and r/openclaw searches were not reachable from our tools (blocked or timed out), and a web search of reddit.com found **no relevant threads**, only the unrelated hobby model "Particle 1.0" mentioned above. We therefore cannot say what Reddit users think. On X we found two published hands-on tests, a handful of short personal reports and many opinions. We separate them below.

### Hands-on tests with published numbers

**Cocode / Babak Bandpey: three coding tasks.** The developer Babak Bandpey ran Particle-1 and DeepSeek V4.1 Flash (version 1017) side by side through the Pi agent CLI on OpenRouter at maximum thinking, one run per model and task, and published the numbers ([Cocode](https://tanks.cocode.dk/pi/)):

| Task | Model | Time | Output tokens | Cost at list price | Checks passed |
| --- | --- | --- | --- | --- | --- |
| Tank Duel (3D game) | Particle-1 | 5 min 8 s | 53,345 | $0.20 | 14/14 |
| | DeepSeek V4.1 Flash | 20 min 19 s | 132,816 | $0.48 | 14/14 |
| Tower Bridge (zoomable drawing) | Particle-1 | 3 min 14 s | 57,880 | $0.16 | 20/20 |
| | DeepSeek V4.1 Flash | 11 min 39 s | 121,240 | $0.20 ($0.14 billed) | 20/20 |
| Taj Mahal (drawn from a photo) | Particle-1 | 10 min 0 s | 79,019 | $0.30 | 25/26 |
| | DeepSeek V4.1 Flash | 22 min 25 s | 129,470 | $0.35 ($0.17 billed) | 26/26 |

Particle-1 was 2.2 to 4 times faster and used far fewer output tokens in all three tasks, which supports Particle's core claim. But the picture is mixed on quality and price: on the Tower Bridge, the author found DeepSeek's drawing "clearly closer to the real bridge"; on the Taj Mahal, he judged Particle-1's composition "the more complete" but it failed one check. And because DeepSeek's own discount hours applied, **DeepSeek was cheaper at the price actually billed** in two of the three runs. The author himself warns that "a single run can be luck". On X he summed it up: "The results vary depending on how you prompt it" ([X](https://x.com/BBandpey/status/2115791510545551555)).

**Plotly: data-analysis exam.** The data-visualisation company Plotly ran Particle-1 through its private 43-question data-analytics benchmark on 31 October ([Plotly](https://plotly.com/blog/particle-1-plotly-data-analytics-bench/)). Particle-1 scored **40 of 43**, up from 36 for DeepSeek V4.1 Flash and equal to OpenAI's GPT-6.1 Terra, which cost about four times as much in Plotly's run. It aced the statistics traps (5/5, base model 3/5) and found more hidden patterns. But the token story was the opposite of Particle's pitch: "Fewer tokens? Not on our exam." Particle-1 wrote about 6,900 output tokens per question against 6,200 for the base model and made about 10 model calls against 7. It was still faster (median 16 seconds versus 21). Plotly adds that at current prices its DeepSeek run would have cost about $0.24, less than Particle-1's $0.35. It also notes that one run is a single sample and scores can move by up to three points between runs.

**What the two tests together suggest:** on coding tasks, the token and speed savings look real. Outside coding, Particle-1 may be *better* rather than *shorter*. In both tests, the cost advantage depends heavily on the price and discount times of the provider you compare against.

### Short personal reports on X

- **"Daily driver":** one user switched his "generalist" agent on the WeMachines platform to Particle-1 and wrote: "got to say i'm super impressed with the model as a token-efficient daily-driver ... it's making itself very useful" ([@sh______rn](https://x.com/sh______rn/status/2117642201526145328)). No numbers given.
- **Infrastructure experience:** a self-described "friend and early happy user" of Particle wrote that his team runs coding agents on it daily with "200 calls in parallel, first token in under half a second" ([@skndrdotcom](https://x.com/skndrdotcom/status/2115519065577996578)). This refers to Particle's API in general, and the author is open about his personal ties to the team.
- **Integrations:** a developer built an extension so he can use Particle-1, DeepSeek V4.1 Flash and GLM 5.3 Flash from the Pi agent ([@HeyGarrison](https://x.com/HeyGarrison/status/2116636747568394508)); another posted a one-shot game built with Particle-1, with cost shown in a screenshot ([@mims3590](https://x.com/mims3590/status/2115629735724404891)).

### Opinions, questions and partner posts (no hands-on results)

- **Sceptics:** "I don't buy 'same work' from a token range alone," wrote one user, who wants to see accuracy hold "with retries, not just a single clean pass" ([@ElIsaac2468](https://x.com/ElIsaac2468/status/2115583868371898369)). Another called the claim "nuts if true" ([@nicktriez](https://x.com/nicktriez/status/2117651452600504588)). Others asked whether the saving comes from shorter outputs or fewer turns ([@Pyraio](https://x.com/Pyraio/status/2116410456671912298)), or simply: "Anyone tested Particle-1 yet?" ([@NINJA____1](https://x.com/NINJA____1/status/2117646764186718641)).
- **Supporters of the idea:** "Tokens to task completion should be a core pillar for every AI lab" ([@0xWhiteMage](https://x.com/0xWhiteMage/status/2115786692330508734)).
- **Platforms and partners:** OpenRouter ([X](https://x.com/OpenRouter/status/2115564621717512295)), Cloudflare AI Gateway ([X](https://x.com/CloudflareDev/status/2116246377080774754)), Capy ([X](https://x.com/capydotai/status/2115907468119453716)), RouterPlus ([X](https://x.com/alokbishoyi97/status/2115709212462666132)), Opper and the coding agent Alan ([X](https://x.com/prasad_pilla/status/2116079731292684472)) all announced Particle-1 within days. These are business announcements, not independent reviews.

**Bottom line on feedback:** after six days, there are two serious independent tests and a few anecdotes. They broadly confirm faster, shorter coding runs, show the savings do not automatically carry over to other work, and highlight that "cheaper" depends on where and when you buy. There is not yet enough feedback to judge reliability over weeks of real use.

## What we could not verify

- Particle's own benchmark and cost numbers have not been replicated at scale. The two independent tests we found use one run per task.
- The zero-data-retention claim is self-reported and written into Particle's policy; we found no audit.
- The launch blog's footnote prices ($0.30 / $1.20) differ from current docs ($0.25 / $1.00); OpenRouter showed $0.05 / $0.50 on 3 November, possibly a promotion. Independent testers used different OpenRouter prices on different days.
- Particle has not published latency figures; speed numbers come from the independent tests only.
- Funding amount, valuation, team members beyond the founder, the state of incorporation (likely Delaware), GPU countries and cloud providers are not public.
- Whether EU customers are a "supported location" under Particle's terms, and whether a DPA is available on request.
- Whether Particle-1 inherits topic restrictions known from earlier DeepSeek models; we did not test this.
- Whether the OpenClaw plugin can be pointed at Particle's US-only endpoint; not documented, not tested.
- Reddit feedback: Reddit's pages were not reachable from our tools, and a web search found no relevant threads.
- Why v2026.10.10 specifically is required is not stated in the changelog.
- We could not open the ClawHub page of the Particle plugin itself (the request timed out); its download count and scan status are unknown to us.

## Conclusion

Particle-1 is not a new giant model. It is a carefully tuned version of DeepSeek V4.1 Flash that has learned to stop talking once the job is done. For an agent system like OpenClaw, where a single task can mean dozens of model calls, that is a sensible idea: the same price per token, fewer tokens, and, if Particle's numbers hold, roughly a third lower cost per coding task at similar accuracy. The Particle API around it is built with agents in mind, and its mid-turn steering is worth watching, even though OpenClaw does not use it yet.

The caveats are those of any one-week-old product: mostly self-reported benchmarks, a young US startup with undisclosed funding, terms that restrict use to the US and "supported" locations, no public GDPR agreement, a default endpoint that may use GPUs in any country, a Chinese base model and closed weights. The first independent tests confirm much faster and shorter coding runs, but also show that the savings are not universal and that "cheaper" depends on where and when you buy. The sensible approach is to try Particle-1 on your own typical tasks, outside personal data for now, and compare the real bill.

The plugin ecosystem around OpenClaw is large (2.6K plugins on ClawHub) and the core official plugins are mature. But the MemTensor incident showed that a memory plugin can become a credential stealer overnight. Install few plugins, prefer official ones, pin versions and use the allowlist and install-policy features that OpenClaw now provides.

## Sources

- [OpenClaw on X: Particle-1 is available in OpenClaw (3 Nov 2026)](https://x.com/openclaw/status/2117637498902077498)
- [OpenClaw on X: v2026.10.10 announcement](https://x.com/openclaw/status/2117605921102995968)
- [Particle on X: "Our token efficient model particle-1 is now in OpenClaw"](https://x.com/particle_api/status/2117659164445163544)
- [Particle on X: partnership with Opper](https://x.com/particle_api/status/2117283327170535747)
- [Suhail Doshi on X: Particle launch thread (28 Oct 2026)](https://x.com/Suhail/status/2115497949421883648)
- [Suhail Doshi on X: thread part 2 (base model)](https://x.com/Suhail/status/2115497953544864048)
- [Suhail Doshi on X: thread part 4 (mission)](https://x.com/Suhail/status/2115497957546189064)
- [Suhail Doshi on X: quote of the OpenClaw post](https://x.com/Suhail/status/2117638932959785136)
- [Suhail Doshi on X: focus on multi-turn, long contexts](https://x.com/Suhail/status/2117649067895558376)
- [Particle blog: Introducing Particle-1 (28 Oct 2026)](https://particle.ai/blog/introducing-particle-1)
- [Particle website](https://particle.ai)
- [Particle: About page (founder, backers, open roles)](https://particle.ai/about)
- [Particle: Terms of service](https://particle.ai/legal/terms)
- [Particle: Privacy policy](https://particle.ai/legal/privacy)
- [Particle: Zero data retention policy](https://particle.ai/legal/zero-data-retention)
- [Particle docs: Regional endpoints](https://docs.particle.ai/regional-endpoints.md)
- [Suhail Doshi on X: thanks to advisers](https://x.com/Suhail/status/2115503194935873654)
- [RuntimeWire: Suhail Doshi launches Particle to cut coding agents' token use](https://runtimewire.com/article/suhail-doshi-particle-particle-1)
- [Crypto Briefing: Mixpanel founder Suhail launches Particle](https://cryptobriefing.com/particle-1-model-45-percent-token-efficiency/)
- [Hokai: Particle AI company profile](https://hokai.io/hub/companies/particle-ai)
- [Frontrun: Particle, an inference layer for open weight models](https://www.frontrun.vc/blog/particle-ai-inference-launch/)
- [PitchBook: Particle AI profile preview](https://pitchbook.com/profiles/company/1534424-68)
- [Merge on X: Particle as backend partner](https://x.com/merge_api/status/2115531822222233821)
- [R1dacted: Investigating local censorship in DeepSeek's R1 (arXiv, 2025)](https://arxiv.org/abs/2505.12625)
- [WIRED: How DeepSeek censorship actually works](https://www.wired.com/story/deepseek-censorship/)
- [Garante Privacy: DeepSeek block, press release (30 Jan 2025)](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10097450)
- [Reuters: Italy's regulator blocks Chinese AI app DeepSeek (30 Jan 2025)](https://www.reuters.com/technology/artificial-intelligence/italys-privacy-watchdog-blocks-chinese-ai-app-deepseek-2025-01-30/)
- [Plotly: Particle-1 benchmark results for data analysis (31 Oct 2026)](https://plotly.com/blog/particle-1-plotly-data-analytics-bench/)
- [Cocode / Babak Bandpey: pi benchmark, Particle-1 vs DeepSeek V4.1 Flash](https://tanks.cocode.dk/pi/)
- [Reddit r/huggingface: unrelated hobby model "Particle 1.0"](https://www.reddit.com/r/huggingface/comments/1vqotoe/i_trained_a_mini_chatgpt_from_scratch_particle_10/)
- [Platform announcements on X: OpenRouter](https://x.com/OpenRouter/status/2115564621717512295), [Cloudflare AI Gateway](https://x.com/CloudflareDev/status/2116246377080774754), [Capy](https://x.com/capydotai/status/2115907468119453716), [RouterPlus](https://x.com/alokbishoyi97/status/2115709212462666132), [Alan](https://x.com/prasad_pilla/status/2116079731292684472)
- [Early-user posts on X: @BBandpey](https://x.com/BBandpey/status/2115791510545551555), [@sh______rn](https://x.com/sh______rn/status/2117642201526145328), [@skndrdotcom](https://x.com/skndrdotcom/status/2115519065577996578), [@HeyGarrison](https://x.com/HeyGarrison/status/2116636747568394508), [@mims3590](https://x.com/mims3590/status/2115629735724404891), [@ElIsaac2468](https://x.com/ElIsaac2468/status/2115583868371898369), [@nicktriez](https://x.com/nicktriez/status/2117651452600504588), [@Pyraio](https://x.com/Pyraio/status/2116410456671912298), [@NINJA____1](https://x.com/NINJA____1/status/2117646764186718641), [@0xWhiteMage](https://x.com/0xWhiteMage/status/2115786692330508734)
- [Particle docs: Inference API overview](https://docs.particle.ai)
- [Particle docs: Usage & billing](https://docs.particle.ai/usage-billing.md)
- [Particle docs: Data retention](https://docs.particle.ai/data-retention.md)
- [Particle docs: Mid-turn steering](https://docs.particle.ai/steering.md)
- [Particle docs: Structured outputs](https://docs.particle.ai/structured-outputs.md)
- [Particle docs: Service tiers](https://docs.particle.ai/service-tiers.md)
- [Opper: Particle-1 pricing and data handling](https://opper.ai/particle/particle-1)
- [Opper on X: Particle-1 live on Opper](https://x.com/opperai/status/2117261843559223699)
- [OpenRouter models API (price listing, read 3 Nov 2026)](https://openrouter.ai/api/v1/models)
- [OpenClaw docs: Particle provider](https://docs.openclaw.ai/providers/particle)
- [OpenClaw docs: Plugins](https://docs.openclaw.ai/tools/plugin)
- [OpenClaw docs: Community plugins](https://docs.openclaw.ai/plugins/community)
- [OpenClaw docs: ClawHub publishing](https://docs.openclaw.ai/clawhub/publishing)
- [OpenClaw v2026.10.10 release on GitHub](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10)
- [OpenClaw v2026.10.10 release notes](https://docs.openclaw.ai/releases/2026.10.10)
- [OpenClaw v2026.10.10 changelog (Markdown)](https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.10.10.md)
- [ClawHub: plugin directory](https://clawhub.ai/plugins)
- [Socket: MemTensor npm and PyPI packages compromised](https://socket.dev/blog/memtensor-compromise)
- [SafeDep: MemTensor npm and PyPI packages hit by a Go worm](https://safedep.io/blog/memtensor-sckit-worm-npm-pypi)
- [OSV: MAL-2026-16476](https://osv.dev/vulnerability/MAL-2026-16476)
- [The Hacker News: Compromised MemTensor packages deliver sckit credential stealer](https://thehackernews.com/2026/09/compromised-memtensor-packages-deliver.html)
- [Peter Steinberger on X: NemoClaw](https://x.com/steipete/status/2102041970638192992)
- [X posts by @sai_borg](https://x.com/sai_borg/status/2115804478465355876), [@OKed_AI](https://x.com/OKed_AI/status/2116784831212204343), [@WalrusProtocol](https://x.com/WalrusProtocol/status/2115026469462462568), [@aiclawbots](https://x.com/aiclawbots/status/2115881354780938698), [@JayQinQT](https://x.com/JayQinQT/status/2115451661338784059)
- [X replies by @kalapowered](https://x.com/kalapowered/status/2117693421783863500), [@akhilveeraraju](https://x.com/akhilveeraraju/status/2117656201945333789), [@lostinazeroy](https://x.com/lostinazeroy/status/2117649769913012556), [@Dr_ztc](https://x.com/Dr_ztc/status/2117654673280889029), [@proxy_vector](https://x.com/proxy_vector/status/2117647267536736739), [@MiclauMarius](https://x.com/MiclauMarius/status/2117655193881890893), [@_why_so_cereal_](https://x.com/_why_so_cereal_/status/2117650762457096692), [@101xtechnology](https://x.com/101xtechnology/status/2117673568557572448), [@larachelak](https://x.com/larachelak/status/2115523683360153997)
- [Wikimedia Commons: Datacenter Server Racks (image)](https://commons.wikimedia.org/wiki/File:Datacenter_Server_Racks_(22370909788).jpg)
