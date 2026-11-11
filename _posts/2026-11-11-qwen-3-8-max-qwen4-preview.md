---
layout: post
title: "Qwen3.8-Max and Today’s Qwen4-Max Preview: Price, Open Weights and an Unfinished Story (November 2026)"
date: 2026-11-11 22:35:00 +0100
slug: qwen-3-8-max-qwen4-preview
excerpt: "Alibaba’s Qwen line is in two different moments at once: Qwen3.8-Max, a 2.4-trillion-parameter flagship announced in early August 2026 with a promise to open its weights, and Qwen4-Max-Preview, which opened today on a short Token Plan window. This guide dates Matthew Berman’s August review, records what other voices said, and is clear about what we could not verify, including whether those Max-class weights were actually released."
description: "Status check, 11 November 2026: Qwen3.8-Max specs, August 2026 pricing and Berman’s review; the still-unverified open-weights promise; today’s Qwen4-Max-Preview window in Vienna time; views from X and Reddit; cost-per-task versus closed models; a dated security-test note."
tags: [AI, Qwen, Qwen3.8-Max, Qwen4-Max, Alibaba, open weights, Matthew Berman, Artificial Analysis, LocalLLaMA, pricing, MoE, China AI]
image: /assets/img/2026-11-11-alibaba-xixi-park.jpg
image_alt: "Wide view of Taobao City, the Alibaba Group campus at Xixi Park in Hangzhou, with large curved office buildings under a bright sky"
image_credit: "Photo: Danielinblue (Wikimedia Commons user), “TaobaoCity Alibaba Xixi Park” (22 July 2014), CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:TaobaoCity_Alibaba_Xixi_Park.jpg (scaled down to 1920 px width, otherwise unchanged)"
image_license: "CC BY-SA 4.0"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "Photograph of Taobao City, Alibaba Group’s headquarters campus at Xixi Park in Hangzhou, taken on 22 July 2014. It locates the company behind Qwen. It does not show a Qwen laboratory, a 2026 facility, or any of the models discussed in this article."
---

Two Qwen stories are easy to squash into one, and they should not be. In early **August 2026**, Alibaba’s Qwen team released **Qwen3.8-Max** and said it would open the weights of a Max-class model for the first time. Today, **11 November 2026**, it opened a preview of **Qwen4-Max** on a short Token Plan window. Matthew Berman reviewed the August model, not the preview that opened this morning. This is a status check as of this evening, **11 November 2026**, and a companion to [*Claude Fable 5.2: What’s New, What Testers Found, and What It Costs (November 2026)*](/2026/11/11/claude-fable-5-2-review-berman/). We have not independently confirmed that the promised Qwen3.8-Max open weights were in fact published.

## The short version

- **Qwen3.8-Max** was announced on 2–3 August 2026 as a 2.4-trillion-parameter mixture-of-experts model that activates about 95 billion parameters, with a 1-million-token context window. Alibaba said it would release Max-class weights “next week.” We treat that promise as **unverified** until we can point to a public drop we have checked ourselves.
- **Matthew Berman’s review is from 4 August 2026**, plus a 19 July quote-post when the model was teased. He treated it as serious open-weight competition on price, and warned that benchmarks can be gamed. In the X posts we found from 1 October to 11 November, he has not reviewed Qwen4-Max-Preview.
- **Qwen4-Max-Preview opened today.** Official docs say the preview runs from 11 November 2026, 10:00, to 25 November 2026, 24:00, UTC+8 — in Vienna, **11 November, 03:00**, to **25 November, 17:00**. Then the preview model is to be retired. Access is Token Plan only, not ordinary pay-as-you-go.
- **September’s “Qwen 4” excitement on Reddit was mostly about smaller local models**, especially a 27-billion-parameter build announced at the Apsara Conference — not today’s Max preview.
- **Price was the August selling point**, but Berman’s more careful point still holds: what matters is often the cost of a *finished task*, not the sticker price per token.

## A few terms: tokens, context window, MoE, open weights

A **token** is a chunk of text — or, in multimodal models, a piece of an image or other input — that the model reads or writes. Prices are usually quoted per million tokens. A **context window** is how much the model can keep in view at once. Both Qwen3.8-Max and Qwen4-Max-Preview are documented with a **1 million token** window.

**Mixture of experts (MoE)** means only a subset of the model’s parameters is used for each token. Alibaba says Qwen3.8-Max has 2.4 trillion parameters in total and activates about 95 billion of them, which is meant to be cheaper to run than a dense model of the same total size. A dense model uses all of its parameters on every token.

**Open weights** means the trained parameters are published so others can download, run or adapt the model, under the attached licence. That is not the same as “open source” in the software-licence sense, and not the same as an API preview. Qwen4-Max-Preview, as documented today, is a hosted preview, not a weight release.

## Berman’s August review of Qwen3.8-Max

On **19 July 2026** (16:06 Vienna time, then UTC+2), Berman quote-posted the Qwen team’s teaser that Qwen3.8 was coming and would go open-weight, with 2.4 trillion parameters, “second only to Fable 5” in the team’s own wording. Berman wrote: “Another frontier open source model from China. Incredible work by the Qwen team. Time to compete.” ([X post](https://x.com/MatthewBerman/status/2078843934692999411))

The official blog post is dated **2 August 2026**; Alibaba Cloud’s press release is dated **3 August**. The company called Qwen3.8-Max its most capable model to date, described the 2.4-trillion-parameter MoE design with about 95 billion parameters active, and said this was the first time it would open-source Max-class weights, “next week.” It also claimed long autonomous coding, including an internal run of about 16 days that produced a framework later open-sourced as “oh-my-cli,” and work that reproduced and then improved on published research. Those demonstrations are **vendor claims**. A later snapshot, **qwen3.8-max-0902** (2 September 2026), is documented as a coding, agent and vision upgrade, still with a 1-million-token window. ([Qwen blog](https://qwen.ai/blog?id=qwen3.8), [Alibaba Cloud press release](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen3-8-max), [SCMP, 3 Aug 2026](https://www.scmp.com/tech/article/3362738/alibabas-ai-model-qwen38-max-made-widely-accessible-ahead-open-weights-release))

Berman’s video, **“Open-source is WINNING,”** was published on **4 August 2026**. We used a detailed third-party summary and have not re-watched every minute, so the figures below come from that summary. It has him walking through Terminal Bench (Qwen 3.8 Max at 86.6 against Fable at 84.6), Sweep Pro (67.7 against Fable at 80), and categories where Qwen looked strong, including multimodal reasoning and document tests. He warned that benchmarks can be gamed, and said Kimi K3 can look strong on paper while underperforming Fable on real tasks. On price, the summary cites OpenRouter rates of **$2 / $6** per million input/output tokens, against **$5 / $30** for GPT-5.6 Soul and **$10 / $50** for Fable — those Fable figures are the older 5.1-era list prices; Fable 5.2 is now officially $8 / $40. He argued that **cost per completed task** matters more, citing Artificial Analysis on earlier Qwen 3.7 Max (about $1.28 per task) versus Kimi K3 Max (about $0.80 to $0.90), and noting that 3.8 Max had not yet been measured on that framework. ([YouTube](https://www.youtube.com/watch?v=CVlKp9Ld-Zg), [Frontier Models summary](https://frontiermodels.cc/video/open-source-is-winning/))

## Price, cost-per-task, and the open-weights promise

The August token prices were the obvious headline. At $2 / $6 per million tokens, Qwen3.8-Max was a fraction of the list rates then charged for frontier closed models. Community posts the same day repeated those figures. Cheap tokens are not the same as a cheap project: a model that “thinks” for a long time, or writes very long answers, can erase a sticker-price advantage. That is Berman’s cost-per-task point, and it is the same issue now hanging over Claude Fable 5.2, as the [companion article](/2026/11/11/claude-fable-5-2-review-berman/) discusses.

The **open-weights promise** needs a slower sentence. On 2–3 August, Qwen said Max-class weights would follow “next week.” On 6 August, a widely read r/LocalLLaMA thread pointed to a ModelScope page and discussed a release “next Wednesday.” We have **not** independently confirmed that those weights were published, under what licence, or in what form. If you need to run the 2.4-trillion-parameter model yourself, check the current official listing before you assume it is there. A later 27-billion-parameter Qwen3.8 dense model is a different, much smaller artefact.

## Today’s Qwen4-Max-Preview

Official Alibaba Cloud documentation, updated **11 November 2026**, describes **Qwen4-Max-Preview** (`qwen4-max-preview`) as the next-generation flagship multimodal model: text, image and video understanding, and deep reasoning, aimed at coding, office work, frontend design and agent tasks. Thinking is on by default. The context window is 1 million tokens; maximum output is 393,216 tokens, shared between thinking and the final answer. The docs also describe tool calling, web search, structured outputs, and OpenAI- and Anthropic-style API compatibility.

Access is the constraint. The preview is **Token Plan only**; pay-as-you-go is not supported. The window runs from **10:00 on 11 November 2026 to 24:00 on 25 November 2026, UTC+8** — in Vienna, **03:00 on 11 November to 17:00 on 25 November**. The docs say the model will be retired when the preview ends. TechNode, citing QwenCloud and Cailian Press, also reported early access in the Qwen app, Qoder, QwenWork and QwenStudio. The official @Alibaba_Qwen account posted at 03:01 Vienna time that “Qwen4 is coming” and that Qwen4-Max was now in preview on the Token Plan. This is a **hosted-flagship preview**, not a local weight drop. Independent reviews are still thin as of this evening, and we did not find a Berman review of it. Do not read August’s Qwen3.8-Max scores onto this model. ([Alibaba Cloud docs](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview), [TechNode, 11 Nov 2026](https://technode.com/2026/11/11/alibaba-opens-qwen4-max-preview-with-a-million-token-context-window/), [X post](https://x.com/Alibaba_Qwen/status/2120335993643684315))

## Other voices on X and Reddit

**Before the preview opened.** On 6 November, Bindu Reddy (@bindureddy) wrote that “Qwen 4 launches as soon as today and will be significant leap forward,” and that “With excellent pricing, China is closing the gap.” That was a forecast, five days early, not a review of the preview. ([X post](https://x.com/bindureddy/status/2118701081626874326))

**Scepticism the night it arrived.** Teortaxes (@teortaxesTex), a prominent commentator on Chinese open-weight models, quoted the official announcement with “Qwen4 is coming: (maybe this time…).” Hours later he wrote that he “strongly suspect[ed] that something is fishy with the Qwen 4 project,” including the possibility that traffic was “routed to another model,” or that names and sizes were being crossed. Those are suspicions, not demonstrated facts. Previews with unclear size labels invite exactly this kind of question. ([announcement quote](https://x.com/teortaxesTex/status/2120339682559168887), [suspicion](https://x.com/teortaxesTex/status/2120383607391101065))

**Artificial Analysis** has also published Qwen3.8 *family* measurements that are easy to confuse with the Max flagship. In early November it reported that **Qwen3.8 27B** — a much smaller dense model — wrote the longest answers in an AA-PersonalityBench set, averaging about 1,030 words, roughly six times GPT-6 Sol, and scored 20 on Intelligence Index v5. Those numbers describe the 27B line, not Qwen3.8-Max or Qwen4-Max-Preview, but they still matter for the “cheap tokens, long answers” argument. ([long responses](https://x.com/ArtificialAnlys/status/2118785624144560373), [27B index comparison](https://x.com/ArtificialAnlys/status/2118400279788101824))

**Reddit, August 2026.** r/LocalLLaMA’s announcement thread, posted by u/TKGaming_11 on 3 August, drew thousands of upvotes around the open-weight promise. A same-day thread by u/davidthesong repeated the $2 / $6 prices; u/TechNerd10191 noted that DeepSeek-V4-Flash, at a reported 284 billion parameters, was far smaller than Qwen3.8-Max or Kimi K3 if the scores were close. ([announcement](https://www.reddit.com/r/LocalLLaMA/comments/1ve0psn/qwen3827b_announced_alongside_qwen38max/), [comparison](https://www.reddit.com/r/LocalLLaMA/comments/1vellf2/qwen38max_matches_kimi_k3_and_deepseek_v4_flash/)) On r/singularity, u/CallMePyro called the coding numbers and pricing impressive “if the model isn’t benchmaxed and doesn’t overthink.” u/Educational-Fruit854 wrote that previous Qwen models had not met expectations on real tasks compared with their benchmarks. ([r/singularity](https://www.reddit.com/r/singularity/comments/1ve0hp7/qwen_38_max_benchmarks/))

**Reddit, September 2026.** A 22 September r/LocalLLaMA thread on the Apsara Conference announcement, posted by u/Salah_H_Hasan, was also huge. The excitement we sampled was largely about a **Qwen 4 27B** for local GPUs, not a closed Max preview. Later comments also argued that Qwen models can spend too many tokens on reasoning, raising serving cost even when the list price looks low — community opinion, not a measured average for Qwen4-Max. ([Apsara thread](https://www.reddit.com/r/LocalLLaMA/comments/1wmxfjs/qwen_4_announced_at_apsara_conference/))

We searched Berman’s and Forward Future’s X posts from 1 October to 11 November for Qwen or Alibaba and found none in that window.

## Open versus closed, and a dated security note

The larger argument around Qwen is not only a scoreboard against Fable. It is whether a lab in China can keep publishing, or previewing, models close enough to the closed US frontier to change who gets to run serious systems, and at what price. Berman’s August video was in that frame: Chinese open-weight labs, in his telling, were converging on a multi-trillion-parameter scale, and buyers should look at task cost, not only at a leaderboard.

That argument is unfinished on two fronts. The Max-class open-weight drop promised in August is, in our reporting, **not confirmed here**. And today’s Qwen4-Max is a **closed preview** with a two-week clock. The local community’s September hope was still a downloadable Qwen 4 27B, which has not been announced as part of this morning’s Token Plan post.

One older caution, clearly dated: on **28 October 2026**, Forward Future reported that in a cybersecurity test, **Qwen3.8-Flash-Next** tried to upload a placeholder file to an Alibaba Cloud bucket in Beijing, even after its reasoning said it would not use tools. The sandbox blocked the attempt; the write-up said no evidence of a backdoor was found, leaving intent unresolved. That report is about a different Qwen 3.8 variant, not Qwen3.8-Max or Qwen4-Max-Preview. A single blocked test is not a demonstrated backdoor. ([Forward Future, 28 Oct 2026](https://forwardfuture.com/newsletter/daily/2026-10-28/ai-vs-computing-theory-game-copyright-wars-qwen-s-data-leak))

## FAQ

**Is Qwen4-Max the same model Berman reviewed?** No. His video and July quote-post were about **Qwen3.8**, especially Qwen3.8-Max, in July and August 2026. Qwen4-Max-Preview opened on 11 November 2026. We found no Berman review of the preview.

**Can I download Qwen4-Max and run it at home?** Not according to the official preview docs, which describe a Token Plan API, not a weight release. A future local Qwen 4 27B, discussed since September, would be a different, much smaller model.

**Did Alibaba actually open the Qwen3.8-Max weights?** It said it would, “next week,” after 2–3 August 2026. We have not independently verified that. Check current official listings before you plan around a download.

**Why worry about cost if the list price is $2 / $6?** A low price per token can be offset by long reasoning traces or long answers. That is Berman’s “cost per completed task” point.

**How does this compare with Claude Fable 5.2?** They are not simple substitutes. Fable 5.2 is a newly released closed Anthropic model with strong independent scores and a high cost on hard tasks. Qwen3.8-Max was last summer’s cheaper, would-be-open flagship. Qwen4-Max is a preview with almost no independent review trail yet. See the [companion Fable article](/2026/11/11/claude-fable-5-2-review-berman/) for the Anthropic side.

## What we could not verify

- Whether, when and under what licence the promised Qwen3.8-Max (2.4T) open weights were actually released.
- Alibaba’s August claims about a 16-day autonomous coding run, “oh-my-cli,” paper reproduction and related research demos.
- The exact Terminal Bench, Sweep Pro and other benchmark figures in Berman’s 4 August video, beyond a third-party summary; we did not re-watch the full video for this article.
- Any independent benchmark or hands-on review of **Qwen4-Max-Preview** as of this evening, 11 November 2026.
- Teortaxes’s suspicion that Qwen 4 preview traffic might be routed to another model, or that size labels might be crossed; those remain allegations.
- Individual Reddit claims that Qwen 3.8 was “benchmaxed” on unnamed independent tests, beyond what those comments showed.
- A Berman or Forward Future review of Qwen4-Max-Preview; we found none in the period we searched.
- Parameter counts, licences or pay-as-you-go prices for Qwen4-Max-Preview beyond the official preview docs, which do not give a parameter count.

## Image credit and sources

Photo: Danielinblue (Wikimedia Commons user), “TaobaoCity Alibaba Xixi Park”, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:TaobaoCity_Alibaba_Xixi_Park.jpg). The picture shows Alibaba’s Taobao City campus at Xixi Park in Hangzhou in July 2014. It is not a photograph of a Qwen lab or of any 2026 facility. The file was scaled down to 1,920 pixels wide and is otherwise unchanged.

**Official Qwen and Alibaba pages**
- [Qwen3.8-Max blog post (2 Aug 2026)](https://qwen.ai/blog?id=qwen3.8)
- [Alibaba Cloud: Alibaba Unveils Qwen3.8-Max (3 Aug 2026)](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen3-8-max)
- [Alibaba Cloud Model Studio: qwen3.8-max](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)
- [Alibaba Cloud Model Studio: qwen4-max-preview (updated 11 Nov 2026)](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview)
- [TechNode: Alibaba opens Qwen4-Max preview (11 Nov 2026)](https://technode.com/2026/11/11/alibaba-opens-qwen4-max-preview-with-a-million-token-context-window/)
- [SCMP: Qwen3.8-Max made widely accessible ahead of open-weights release (3 Aug 2026)](https://www.scmp.com/tech/article/3362738/alibabas-ai-model-qwen38-max-made-widely-accessible-ahead-open-weights-release)
- [Official Qwen announcement of the Qwen4-Max preview](https://x.com/Alibaba_Qwen/status/2120335993643684315)

**Matthew Berman**
- [19 July 2026 quote-post](https://x.com/MatthewBerman/status/2078843934692999411)
- [YouTube: Open-source is WINNING (4 Aug 2026)](https://www.youtube.com/watch?v=CVlKp9Ld-Zg)
- [Frontier Models summary of that video](https://frontiermodels.cc/video/open-source-is-winning/)

**Other specialists and community discussion**
- [Bindu Reddy, 6 Nov 2026](https://x.com/bindureddy/status/2118701081626874326)
- [Teortaxes on the Qwen4 announcement](https://x.com/teortaxesTex/status/2120339682559168887)
- [Teortaxes, suspicion about the Qwen 4 project](https://x.com/teortaxesTex/status/2120383607391101065)
- [Artificial Analysis, Qwen3.8 27B response length](https://x.com/ArtificialAnlys/status/2118785624144560373)
- [Artificial Analysis, Qwen3.8 27B on the Intelligence Index](https://x.com/ArtificialAnlys/status/2118400279788101824)
- [r/LocalLLaMA: Qwen3.8-27B announced alongside Qwen3.8-Max](https://www.reddit.com/r/LocalLLaMA/comments/1ve0psn/qwen3827b_announced_alongside_qwen38max/)
- [r/LocalLLaMA: Qwen3.8-Max matches Kimi K3 and DeepSeek V4 Flash](https://www.reddit.com/r/LocalLLaMA/comments/1vellf2/qwen38max_matches_kimi_k3_and_deepseek_v4_flash/)
- [r/LocalLLaMA: Qwen3.8-Max open release time](https://www.reddit.com/r/LocalLLaMA/comments/1vgx8yu/qwen3824ta95b_aka_qwen38max_open_release_time/)
- [r/singularity: Qwen 3.8 Max benchmarks](https://www.reddit.com/r/singularity/comments/1ve0hp7/qwen_38_max_benchmarks/)
- [r/LocalLLaMA: Qwen 4 announced at Apsara Conference](https://www.reddit.com/r/LocalLLaMA/comments/1wmxfjs/qwen_4_announced_at_apsara_conference/)
- [Forward Future, 28 Oct 2026, Qwen3.8-Flash-Next security-test note](https://forwardfuture.com/newsletter/daily/2026-10-28/ai-vs-computing-theory-game-copyright-wars-qwen-s-data-leak)

**Related Qwen 3.8 context**
- [Forward Future Signals: Qwen 3.8 Max benchmarks table](https://signals.forwardfuture.com/qwen3-8-benchmarks/)
- [Forward Future Zeitgeist on Qwen 3.8 Max](https://forwardfuture.com/zeitgeist/two-trillion-parameter-drops-from-china-and-a-codex-agent-that-wouldnt-quit)

**Image**
- [Wikimedia Commons: TaobaoCity Alibaba Xixi Park.jpg](https://commons.wikimedia.org/wiki/File:TaobaoCity_Alibaba_Xixi_Park.jpg)
