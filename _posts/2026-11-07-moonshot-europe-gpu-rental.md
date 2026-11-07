---
layout: post
title: "Moonshot AI’s Hunt for 8,000 Blackwell GPUs in Europe: Renting Around Export Controls"
date: 2026-11-07 07:00:00 +0100
slug: moonshot-europe-gpu-rental
excerpt: "CNBC reports that Moonshot AI, the Beijing lab behind Kimi, has explored renting European data-center capacity with clusters of more than 8,000 Nvidia Blackwell GPUs. We unpack the remote-access loophole, Europe’s pre-sold neocloud market, Nvidia’s reported 51% non-Chinese customer rule, energy politics, and what can — and cannot — be verified."
tags: [AI, Moonshot AI, Kimi, Nvidia, Blackwell, Europe, GPU cloud, neocloud, export controls, data centers, China, Forward Future, CNBC]
description: "CNBC reports that Moonshot AI has explored renting European data-center capacity with clusters of more than 8,000 Nvidia Blackwell GPUs amid U.S. export controls."
image: /assets/img/2026-11-07-moonshot-europe-gpu-rental.jpg
image_alt: "Exterior view of the Equinix AM3 and AM4 data-center buildings in Amsterdam"
image_credit: "Photo: Choinowski, “Datacenter Equinix AM3 & AM4 Amsterdam” (2020), CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Datacenter_Equinix_AM3_%26_AM4_Amsterdam.jpg (resized)"
image_license: "CC BY-SA 4.0"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "Photograph of the Equinix AM3 (low-rise) and AM4 (high-rise) data-center campus in Amsterdam, designed by Benthem Crouwel and completed in 2017. Shared on Wikimedia Commons under CC BY-SA 4.0. It stands for European data-center infrastructure in general and does not show Moonshot AI, Nvidia, Kimi or any deal named in this article."
---

On 5 November 2026, [CNBC](https://www.cnbc.com/2026/11/05/moonshot-ai-nvidia-chips-europe-china.html) reported that **Moonshot AI**, the Beijing lab behind the **Kimi** family of models, has sought access to advanced **Nvidia** chips hosted in European data centers. According to four people familiar with the matter, deals have been discussed this year for Moonshot to rent capacity from “neoclouds” — specialised GPU cloud operators — that host Nvidia GPUs in Europe. Three of those sources said the interest was in **Blackwell** systems. One source said talks covered clusters of **8,000 or more** Blackwell GPUs. Two sources framed the interest as mainly **inference** (serving finished models to users); one also knew of interest in **training** capacity.

None of the sources said a lease had been signed. Moonshot, Nvidia, the White House, the U.S. Department of Commerce and Chinese officials did not comment to CNBC. The story is therefore about **talks and intent**, not a completed European deal. That distinction matters, and we keep it throughout this post.

The same day, Matthew Berman’s [Forward Future](https://briefing.forwardfuture.ai/p/anthropic-s-ai-speedup-metr-s-hidden-findings-openai-s-health-forecast) briefing summarised the CNBC report under the heading “The Hunt for 8,000 Blackwell Chips.” Below we go deeper: what the remote-access loophole actually is, what Europe’s GPU-cloud market looks like in late 2026, how Chinese labs have previously rented capacity abroad, where energy and politics constrain European halls, and which claims remain unverified.

**Image credit:** Photo by Choinowski, “Datacenter Equinix AM3 & AM4 Amsterdam” (2020), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Datacenter_Equinix_AM3_%26_AM4_Amsterdam.jpg). The campus is a European interconnection and colocation site; it is **not** named as a Moonshot counterparty.

## 1. Who Moonshot is, and why compute hurts

Moonshot AI was founded in 2023 and is based in Beijing. It builds the **Kimi** assistant and large models that compete, on price and capability, with U.S. frontier systems. CNBC notes that Chinese models gained global adoption through 2026 as capability improved and costs stayed lower than many U.S. offerings.

Around the release of **Kimi K3**, Moonshot said demand had stretched its capacity and temporarily paused new subscriptions to prioritise compute for existing members. A LinkedIn post quoted by CNBC said the company was “adding capacity as fast as we can.” Secondary coverage (for example [TechTimes](https://www.techtimes.com/articles/330165/20261106/moonshot-ai-sought-nvidia-blackwell-rentals-europe-reported-51-rule-not-us-law-hits-lessors.htm), summarising the CNBC thread) also notes that Kimi K3 is described as a very large mixture-of-experts system; keeping many experts resident in memory makes **inference** itself GPU-hungry. We did not independently re-check Moonshot’s model cards for this post; treat parameter and expert counts from secondary write-ups as **reported**, not as our own audit.

The White House has already pointed at Moonshot once. In July 2026, according to CNBC, U.S. officials said the lab had accessed Nvidia Blackwell chips via a facility in **Thailand**. One of CNBC’s European sources said the European conversations took place **after** that accusation. Moonshot did not comment then either.

## 2. The loophole: own vs rent

U.S. export controls restrict shipping Nvidia’s most advanced AI chips **into China**. They do not, under current law as described by CNBC and by lawyers cited in follow-on coverage, give regulators broad authority to block a Chinese company from **logging into** those chips when the hardware sits in a third country and is owned by a non-Chinese operator.

In practice, a Chinese lab that wants Blackwell time typically:

1. finds a non-Chinese neocloud or data-center operator that can legally buy the chips,
2. rents cluster capacity for a fee, often with a large **upfront** payment as a share of the contract’s lifetime value,
3. reaches the GPUs over the internet for training and/or inference.

CNBC’s sources said Chinese offtakers can be asked to pay **30% to 50% more upfront** than a non-Chinese customer. The premium is framed as insurance: lenders and operators hedge against a future ban on remote access. That figure rests on **one** unnamed source; it should be treated as illustrative, not as a market average.

Congress has tried to close the gap. The **Remote Access Security Act (RASA)** would extend export-control authority to cloud-style remote access. According to follow-on analysis that cites the congressional record ([Silicon Noon](https://siliconnoon.com/moonshot-is-shopping-for-8000-nvidia-blackwell-gpus-in-europe/)), the bill passed the House by a large bipartisan margin in January 2026 and was referred to the Senate Banking Committee, where it had not become law as of early November. We did not re-open the congressional tracker for this article; if you need the live status, check Congress.gov.

## 3. Nvidia’s reported “51% non-Chinese” rule

Separately from RASA, the [Financial Times](https://www.ft.com/) reported (as summarised by CNBC, TechTimes and Silicon Noon on 3–6 November 2026) that Nvidia told cloud and data-center partners that **at least 51% of services under new contracts** must go to non-Chinese customers. Coverage says the instruction was conveyed **verbally** through sales teams, applied to **new** contracts, and left existing leases alone. Nvidia neither confirmed nor denied the report in the accounts we read; its public statement emphasised that “America cannot win the AI race unless America’s AI infrastructure wins worldwide,” without naming the 51% figure.

What this means for Moonshot: even if U.S. law still allows remote rental, the **hardware owner’s relationship with Nvidia** may decide whether a European neocloud will take a Chinese offtaker. The rule’s auditability is unclear in the published accounts — no clear metric for “51%,” no public enforcement mechanism. Treat it as a commercial pressure channel, not as a statute.

## 4. Europe’s GPU cloud in late 2026: mostly pre-sold

The harder question is not whether Moonshot wants 8,000 Blackwell GPUs. It is whether Europe has them **available**.

Public reporting on European deployments in 2026 consistently describes capacity that is **contracted years ahead**, often to U.S. hyperscalers and labs:

- **Nscale** (European AI hyperscaler / neocloud) is deploying large **GB300** / Blackwell Ultra fleets for **Microsoft** at **Start Campus in Sines, Portugal**, and has further UK plans for Azure (figures of roughly 12,600 GB300s in Sines and ~23,000 GB300s in Loughton, Essex, appear in Data Center Dynamics coverage as summarised by Silicon Noon). Nscale has also signed a **15 MW** deal with **Verne** in Iceland for about **4,600** Blackwell Ultra GPUs through 2026 ([Datacenter Forum](https://www.datacenter-forum.com/verne/verne-and-nscale-sign-15mw-deal); [Verne](https://www.verne.co/blog/why-2026-will-bring-challenge-and-opportunity-for-european-data-centers)).
- **IREN** has announced European AI campus plans, including a licensed **300 MW** project in **Badajoz, Spain**, aimed at later-decade operations (X news digests and company statements in early November; treat exact timelines as company guidance).
- Pan-European **colocation** names that matter for high-density GPU halls include **Equinix**, **Digital Realty / Interxion**, **Vantage**, **STACK**, Nordic operators such as **Verne**, **atNorth**, **Green Mountain** and **Lefdal**, plus UK AI-oriented sites such as **Kao Data**. A 2026 colo comparison ([ColoGPU](https://cologpu.com/blog/gpu-colocation-providers-compared)) emphasises rack density (often 40–70 kW+), liquid cooling readiness and interconnection — not spare Blackwell inventory for anonymous renters.

Sector theses published in 2026 (for example [HYBSIS on neoclouds](https://hybsis.com/intelligence/neocloud/thesis/)) describe the industry as constrained less by “GPUs on a shelf” than by **energised megawatts** and cost of capital. Named neoclouds with large contracted backlogs include CoreWeave, Nebius, Crusoe, Nscale and IREN — mostly tied to Microsoft, Meta, OpenAI, Anthropic and similar buyers. Spot capacity for a Chinese lab looking for 8,000 Blackwells is not what those contracts were built for.

**Important:** CNBC did **not** name which European operators Moonshot talked to. Any link between Moonshot and a specific campus (Sines, Loughton, Iceland, Amsterdam, Frankfurt, etc.) would be speculation. We do not make that leap.

## 5. Other Chinese labs renting abroad (reported precedents)

Remote rental is not unique to Moonshot. Secondary reporting that builds on CNBC and earlier investigations cites, among others:

- **Tencent** renting Blackwell capacity from **Datasection** in the Osaka area (Japan), with Tencent describing cloud use as “transparent and legal” in the accounts TechTimes summarises.
- **ByteDance** planning use of a large **B200** cluster in **Malaysia** run by **Aolani**, with Nvidia described as saying such arrangements can be permissible if they comply with export rules (Wall Street Journal reporting, as summarised in secondary outlets).

We did not re-read the original WSJ and Datasection primary pieces for this post; those examples are **reported by others** and should be checked against the primary articles before you treat them as settled fact. What they illustrate is the pattern: the chips stay outside China; the Chinese customer buys **access**.

Physical smuggling is a different category. Coverage of indictments tied to large Nvidia-server shipments into China (for example cases involving people linked to Super Micro, as alleged in March reporting) is about illegal movement of hardware, not about cloud rental. Allegations are not convictions; we mention the contrast only to keep the legal categories clear.

## 6. Energy, cooling and EU politics

Even without a Chinese tenant, Europe’s AI halls sit inside a political fight over **power, water, land and noise**.

- Blackwell-class racks push well past traditional air cooling. Verne notes GB300-class systems peaking around **120 kW per rack**, which is why liquid cooling is becoming the default for new AI factories.
- Grid interconnects and permitting now decide who can build. Nordic sites sell renewable power and free cooling; Iberian and UK campuses sell scale and proximity to undersea cables and hyperscaler customers.
- Local pushback against data centers has already shown up in U.S. midterm politics in 2026; European municipalities face the same trade-off between jobs/taxes and electricity prices.

A neocloud that publicly sold frontier Blackwell capacity to a Beijing lab would hand ammunition to EU policymakers who want tighter controls on dual-use compute. That political risk is one reason a 30–50% upfront premium, if real, is priced the way it is. Europe also offers Moonshot things Thailand may not: lower latency for European users of Kimi, and a jurisdiction that has not yet been the subject of a White House naming — until the next leak.

Beijing constrains Chinese buyers too. Nvidia has said that even where Washington licensed some **H200** sales, Chinese policy has sought to limit access in order to favour domestic chipmakers. Export control is therefore a **two-sided** squeeze: Washington blocks the best chips; Beijing sometimes blocks or rations what Washington would still allow.

## 7. Inference vs training: what regulators can see

Silicon Noon’s analysis of the CNBC story makes a useful operational point. **Training** runs leave a signature: large clusters hot for long periods in a distinctive pattern. That is how remote training in Thailand became a political talking point. **Inference** looks more like ordinary API traffic from a European endpoint. If Moonshot’s European interest is mainly inference, as two CNBC sources said, it is choosing the workload that is hardest for outsiders to attribute.

Again: this is analysis of incentives, not evidence that any European inference cluster is already serving Kimi.

## 8. What is verified, what is not

**Better supported (multi-source or primary reporting):**

- CNBC’s 5 Nov 2026 report that Moonshot discussed renting European Blackwell capacity; cluster size “8,000+” from one source; inference emphasis from two sources.
- White House July 2026 accusation of Moonshot accessing Blackwell via Thailand (as reported by CNBC).
- Existence of a remote-access legal gap under current U.S. rules, and a House-passed RASA bill awaiting Senate action (status as of early Nov 2026 per secondary sources).
- FT-reported Nvidia guidance that new cloud contracts should send at least 51% of services to non-Chinese customers (unconfirmed by Nvidia in the quotes we saw).
- Large, named European Blackwell / GB300 deployments under construction for Microsoft and others (Nscale–Sines, Nscale–Verne Iceland, etc.).

**Unverified or single-source:**

- That any European lease was **signed**.
- The identities of the European neoclouds in the talks.
- The precise 30–50% upfront premium (one source).
- Exact live GPU counts available for rent tomorrow morning in any named EU metro.
- Secondary claims about Kimi K3’s internal architecture numbers, unless checked against Moonshot’s own model card.

## 9. What to watch next

1. A **named** European operator confirming a Chinese offtake — that is when the politics change.
2. Senate movement on **RASA**, or an EU-side rule that treats remote access like an export.
3. How strictly Nvidia’s **51%** guidance is enforced in practice.
4. Moonshot’s own disclosures if it pursues a public listing (secondary reports have mentioned Hong Kong IPO preparations; we did not verify filings for this post).
5. Whether Kimi subscription capacity constraints ease — a soft signal that compute arrived from somewhere.

## Bottom line

Moonshot’s reported European shopping trip is less a story about a signed contract than about a **business model**: when you cannot import the chips, you rent the hall that already has them. Europe is an attractive jurisdiction on paper and a difficult shelf in practice, because its best Blackwell capacity is largely pre-sold to Western hyperscalers, its grids are political, and Nvidia is already nudging landlords to limit Chinese share. The loophole remains open until law or contract closes it. Until a counterparty is named, “Moonshot rents 8,000 Blackwells in Europe” is a headline about **intent**, not about completed infrastructure.

### Sources

- [CNBC – Moonshot sought Nvidia chip access in Europe (5 Nov 2026)](https://www.cnbc.com/2026/11/05/moonshot-ai-nvidia-chips-europe-china.html)
- [Forward Future briefing (6 Nov 2026)](https://briefing.forwardfuture.ai/p/anthropic-s-ai-speedup-metr-s-hidden-findings-openai-s-health-forecast)
- [Silicon Noon – Moonshot shopping for 8,000 Blackwells](https://siliconnoon.com/moonshot-is-shopping-for-8000-nvidia-blackwell-gpus-in-europe/)
- [TechTimes – Moonshot rentals and Nvidia 51% rule summary](https://www.techtimes.com/articles/330165/20261106/moonshot-ai-sought-nvidia-blackwell-rentals-europe-reported-51-rule-not-us-law-hits-lessors.htm)
- [Verne / Nscale 15 MW Iceland deal](https://www.datacenter-forum.com/verne/verne-and-nscale-sign-15mw-deal)
- [Verne – European data centers in 2026](https://www.verne.co/blog/why-2026-will-bring-challenge-and-opportunity-for-european-data-centers)
- [ColoGPU – European GPU colocation comparison 2026](https://cologpu.com/blog/gpu-colocation-providers-compared)
- [HYBSIS – 2026Q3 NeoCloud thesis](https://hybsis.com/intelligence/neocloud/thesis/)
- [NVIDIA Blog – Cloud partners in Europe](https://blogs.nvidia.com/blog/cloud-partners-europe-sovereign-safety-open-agents/)
