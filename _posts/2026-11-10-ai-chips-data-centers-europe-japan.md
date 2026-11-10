---
layout: post
title: "AI Chips and Data Centers in Europe and Japan: What Is Built, What Is Planned and What Is Still on Paper (November 2026)"
date: 2026-11-10 21:00:00 +0100
slug: ai-chips-data-centers-europe-japan
excerpt: "Europe and Japan both want their own AI compute. This guide separates what already runs (JUPITER, Deutsche Telekom’s Munich AI factory, Sakura Internet’s Blackwell cluster) from what is under construction (ESMC Dresden, SoftBank’s Tomakomai) and what is only a plan or call for tenders (EU AI gigafactories, Chips Act 2.0). Intel’s Magdeburg fab is cancelled."
description: "Status check, November 2026: EU Chips Act 2.0, AI gigafactories call, ESMC Dresden, Intel Magdeburg cancellation, JUPITER, Mistral, Stargate Norway, and Japan’s data-center buildout by SoftBank and Sakura Internet."
tags: [AI, data centers, semiconductors, Europe, Japan, EU Chips Act, AI gigafactories, EuroHPC, ESMC, TSMC, Intel Magdeburg, JUPITER, Mistral, SoftBank, Sakura Internet, sovereign AI]
image: /assets/img/2026-11-10-jupiter-exascale-racks.jpg
image_alt: "Racks of the JUPITER supercomputer at Forschungszentrum Jülich in a white machine hall, with a blue panel reading JUPITER, the first exascale system in Europe"
image_credit: "Photo: Forschungszentrum Jülich / Sascha Kreklau, “JUPITER racks with logos of supporters and partners”, CC BY 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:JUPITER_racks_with_logos_of_supporters_and_partners._Copyright-_Forschungszentrum_J%C3%BClich_-_Sascha_Kreklau.jpg (scaled down to 1920 px width, otherwise unchanged)"
image_license: "CC BY 4.0"
image_license_url: "https://creativecommons.org/licenses/by/4.0/"
image_description: "Photograph of the JUPITER Booster racks at Forschungszentrum Jülich, Germany, taken in June 2025. JUPITER is Europe’s first exascale supercomputer. The image stands for European AI compute in general; it does not show any Japanese project or any of the other facilities named in this article."
audio: /assets/audio/ai-chips-data-centers-europe-japan.mp3
audio_voice: Andrew
audio_duration: "23:06"
audio_chapters:
  - {t: 0, title: "Intro"}
  - {t: 83, title: "The short version"}
  - {t: 161, title: "Why chips and data centers belong in…"}
  - {t: 225, title: "Europe’s policy frame"}
  - {t: 361, title: "What Europe actually builds in chips"}
  - {t: 567, title: "AI compute that already exists or is…"}
  - {t: 748, title: "Japan: the data-center buildout"}
  - {t: 1021, title: "Europe and Japan side by side"}
  - {t: 1103, title: "Risks and open questions"}
  - {t: 1262, title: "FAQ"}
---

Every AI model needs two physical things: chips that do the arithmetic, and buildings that supply those chips with power, cooling and network. Europe and Japan are both trying to build more of both at home, for reasons of security, cost and national pride. This article is a status check as of **10 November 2026**. We separate what **already runs**, what is **under construction**, and what is still a **plan, a proposal or a call for tenders**. Where a number comes from a company or an official body, we say so; where we could not confirm something, we say that too.

**Scope:** This post covers Europe’s policy and projects, plus Japan’s *data-center* buildout, with only a short look at Japan’s chip factories. The factories themselves (Rapidus, TSMC in Kumamoto, Micron, Kioxia, and what “2 nm” really means) are covered in the companion article, [*Japan’s 2 nm and Advanced-Node Chip Fabs*](/2026/11/10/japan-2nm-chip-fabs-rapidus/). For the companies behind Japan’s chip supply chain, see our earlier overview from 4 November, [*Japan’s Chipmakers in the AI Boom*](/2026/11/04/japan-chipmakers-ai/).

## The short version

- **Europe has strong policy ambitions but little leading-edge chip production.** The EU’s Chips Act 2.0 was proposed on 3 June 2026 and is still a proposal. Intel’s planned Magdeburg fab was cancelled in July 2025. The big new fab that is actually going up, ESMC in Dresden, will make mature chips for cars and industry, not AI accelerators.
- **European AI compute is real but small next to the US.** JUPITER in Germany is a working exascale machine; Deutsche Telekom runs a Munich AI factory with nearly 10,000 Nvidia Blackwell GPUs. The much larger EU “AI gigafactories” are not yet awarded; bids are due on 3 December 2026 and 4 February 2027.
- **Japan is building data centers fast but says it started late.** SoftBank is building in Tomakomai (Hokkaido) and Sakai (Osaka); Sakura Internet already runs a Blackwell cluster. Power supply is the limit.
- **Both regions depend on Nvidia and TSMC.** No project below changes that in the next two years.

## Why chips and data centers belong in one story

A modern AI data center is a power plant’s customer first and a computer second. The GPUs (graphics processing units, here used as AI accelerators) are made by a handful of chip designers and manufactured almost entirely by TSMC in Taiwan. The memory sitting next to them comes mostly from South Korea and the US. The buildings, grid connections and cooling are local and slow: permits, transformers and construction labor are often the bottleneck, not the chips alone.

That is why both regions run two policy tracks at once: **make more chips at home** (fabs, subsidies) and **host more compute at home** (data centers, “sovereign” clouds). The two tracks are only loosely linked. A data center in Munich or Hokkaido today runs on chips designed in the US and made in Taiwan, even if the building, the operator and the customer’s data stay local.

## Europe’s policy frame: Chips Act 2.0, the Cloud and AI Development Act and the AI factories

**The original Chips Act (2023).** According to the European Commission, it helped mobilise more than €52 billion in public and private investment and created an estimated 46,000 direct and indirect jobs. Its headline goal, a 20% share of global chip production by 2030, looks out of reach: the European Court of Auditors concluded in April 2025 that the target is very unlikely to be met, and noted that the Commission’s own forecast was only about 11.7% by 2030.

**Chips Act 2.0 (proposed 3 June 2026).** The Commission’s proposal adds, among other things, faster permitting (decisions within 12 months at most), state-aid rules for “first-of-a-kind” plants anywhere in the chip value chain, “Grand Challenges” for strategically important chips such as AI chips, and “Demand Accelerators” to connect chip makers with buyers. It is a *proposal*: Parliament and Council still have to negotiate it, and the final text may differ.

**Cloud and AI Development Act (CADA, proposed 2026).** The Commission’s page says the act aims to *at least triple* the EU’s data-center capacity within 5 to 7 years, speed up permitting, and create a four-level “sovereignty” framework for cloud and AI services (from “data stays in the EU” up to full EU control of the software supply chain). Like the Chips Act 2.0, it is still going through the legislative process.

**AI Factories.** These are the smaller, already established part of the plan. EuroHPC reports 19 AI Factories and 13 “antennas” across Europe that give start-ups, SMEs and researchers access to AI-optimised supercomputers and support. They are built around existing or new supercomputers rather than around new giant buildings.

**AI Gigafactories.** This is the big, still unrealised part. In June 2025 the Commission said 76 expressions of interest had come in for sites in 16 member states (60 sites), and that respondents foresaw buying at least three million advanced processors in total. These were non-binding. The formal call for tenders (reference EUROHPC-2026-CEI-AIGF-01) opened on 30 July 2026. As of an update dated 5 November 2026, the deadline for one lot is 3 December 2026 and for the other lot 4 February 2027, and all bids already in the system had to be recreated and resubmitted “for technical reasons”. The EuroHPC FAQ describes facilities with roughly 75,000 to at least 100,000 H100-equivalent accelerators (H100 is a 2022 Nvidia GPU used as a yardstick). Which consortia win, and where, is not decided. Nothing has been awarded yet.

## What Europe actually builds in chips: Dresden yes, Magdeburg no

**ESMC Dresden (under construction).** The European Semiconductor Manufacturing Company is a joint venture of TSMC (reported as 70%) with Bosch, Infineon and NXP (10% each). Ground was broken in August 2024; the topping-out ceremony took place on 14 September 2026, and MDR reported the construction is on schedule. ESMC’s own site says it expects *tool-in* (installation of production machines) in 2027, with the ramp depending on customer demand; local media report production starting in 2027, with equipment installation running to the end of 2027. The process technologies are **28/22 nm planar and 16/12 nm FinFET**, aimed at automotive, industrial and similar uses. ESMC states the fab is designed for 480,000 wafers per year and about 2,000 direct jobs, with total investment above €10 billion; press reports say about €5 billion of that is German state aid (we did not verify the aid figure against an official decision).

This matters for the AI story in a limited way. These chips are not AI accelerators. Regional papers explicitly contrast the Dresden plan with TSMC’s 3 nm lines in Taiwan. But power management, microcontrollers and sensors still go into every data center, car and robot.

**Infineon Smart Power Fab Dresden (opened).** Infineon opened its €5 billion plant on 2 July 2026, several months ahead of schedule, creating about 1,000 jobs. It makes power semiconductors and analog/mixed-signal chips, including chips that supply power to AI data centers, according to Infineon.

**Intel Magdeburg (cancelled).** Intel paused the project in September 2024 and announced on 24 July 2025 that it would not go ahead with planned projects in Germany and Poland. The state of Saxony-Anhalt completed buying back the roughly 400-hectare site in May 2026 (price not published), according to a regional newspaper, and on 10 March 2026 the state government decided to develop the “High-Tech Park” more broadly (digital industry, data and AI technologies, clean tech) instead of only microelectronics. A Dresden memory-chip developer, FMC, is mentioned in the press as a possible first large investor; financing and subsidies are not secured. Handelsblatt put the original Intel investment at about €33 billion; regional reporting cites about 3,000 direct jobs that will not come.

**What is missing.** There is still no announced leading-edge (below 7 nm) logic fab in the EU. For AI accelerators, Europe depends on Nvidia, AMD and TSMC, and on ASML’s lithography machines at the top of the supply chain.

## AI compute that already exists or is being built in Europe

**JUPITER, Jülich (running).** Inaugurated on 5 September 2025, it is Europe’s first exascale supercomputer: about 24,000 Nvidia GH200 Grace Hopper superchips, and on the November 2025 TOP500 list it reached 1 exaFLOP (a billion billion operations per second) in the benchmark used for ranking, placing 4th worldwide, according to EuroHPC. It is a research and AI machine, and the core of the JUPITER AI Factory.

**Deutsche Telekom Industrial AI Cloud, Munich (running).** Officially launched on 4 February 2026 with Nvidia and the data-center partner Polarise, in a converted former bank data center in Tucherpark. Telekom says it has nearly 10,000 Nvidia Blackwell GPUs and up to 0.5 exaFLOPS, was already used at over a third of capacity at launch, and runs on renewable energy. Telekom has not published the numeric precision behind “0.5 exaFLOPS” in that release, so do not compare it directly with JUPITER’s benchmark figure. One named use: SOOFI, a research project to train an open European language model of around 100 billion parameters.

**Mistral Compute, Essonne, France (financed; operating status not confirmed by us).** On 30 March 2026, DCD reported that the French AI lab Mistral raised $830 million in debt financing for 13,800 Nvidia GB300 GPUs and 44 MW of powered capacity at a site in Bruyères-le-Châtel, owned and run by Eclairion, with operations intended by the end of June 2026. The same report notes the project had slipped from an earlier summer-2025 plan. Mistral’s stated goal is 200 MW across Europe by the end of 2027. We did not find an official statement confirming full operation, so treat it as “financed and meant to be running”.

**Stargate Norway, Narvik (under construction).** A planned 230 MW site built by Nscale and Aker. CNBC reported on 15 April 2026 that OpenAI dropped plans to rent capacity directly and that Microsoft is taking the capacity, with more than 30,000 Nvidia Rubin GPUs announced for deployment. CNBC also reported that OpenAI had halted its UK Stargate project, citing energy costs and regulation. The lesson: even well-announced European AI campuses depend on a named customer committing money.

## Japan: the data-center buildout

Japan’s buildout is led mainly by large private companies, backed by METI subsidies and a policy of moving data centers away from the Tokyo and Osaka areas.

**SoftBank Corp., Tomakomai (under construction).** In a February 2026 interview on its own news site, SoftBank said planning and preparation were 60–70% complete and it was targeting an opening within fiscal year 2026, which ends in March 2027. The project is supported by a METI subsidy. SoftBank gives the reasons for Hokkaido: cool climate for cooling, renewable-energy potential, distance from Tokyo and Osaka for disaster risk, and industrial land with room to expand. SoftBank’s sustainability page lists the first stage as a “50 MW-scale” AI data center, defined as the maximum power-receiving capacity of the planned data hall building.

**SoftBank Corp., Sakai (planned).** The former Sharp factory site in Sakai, Osaka, is being converted. SoftBank’s sustainability page now lists operation of a **140 MW** AI data center in **fiscal 2027** (April 2027–March 2028), with a targeted computing capacity of **110 exaFLOPS**, which SoftBank equates to about 100,000 Nvidia H200 GPUs. Secondary reports say the opening was originally aimed at 2026, so the date appears to have slipped; we have not seen SoftBank state the change itself. In SoftBank’s earnings Q&A for fiscal 2025, the company said Tomakomai would be “several times greater” than Sakai in the long run and that, while the plans are “not excessive by global standards,” the rollout of AI infrastructure in Japan is “slightly lagging.” It also described a “Neo Cloud” direction, going beyond the conventional model of leasing empty buildings to hyperscalers. Reports linking OpenAI to the Sakai site are not confirmed by SoftBank in the sources we checked.

**Sakura Internet (running).** On 25 February 2026 the Osaka-based cloud provider announced that a container-type data center on its Ishikari (Hokkaido) campus had started operating with AI infrastructure built around about 1,100 Nvidia Blackwell GPUs. This follows its 2024 completion of 2,000 Nvidia H100 GPUs. It is a mid-sized, real, running cluster, a useful reminder that Japan’s “AI infrastructure” includes many small and medium builds, not only giant campuses.

**Power is the constraint.** A summary by Japan Data Center Watch of the national grid operator OCCTO’s January 2026 demand outlook says specified new and expanded data centers could add about 24.3 TWh per year and 3.28 GW of demand by fiscal 2030. This is an increment from identified projects, not total data-center consumption, and we did not check the original OCCTO document ourselves. METI and the communications ministry’s “watt-bit collaboration” policy tries to plan power and fibre together, steering data centers to regions with spare grid capacity and clean power, which is what Hokkaido offers.

## Japan’s chips in one paragraph (and where to read more)

Japan’s chip story has two sides. The first is its established strength in equipment, materials, memory and sensors. The second is a state-backed effort to make leading-edge logic chips again: **Rapidus**, a start-up aiming at 2 nm chips in Hokkaido, and **TSMC’s Kumamoto subsidiary JASM**, whose second plant was switched to 3 nm in a plan certified by METI on 16 October 2026. Today, 10 November, Bloomberg reported that Rapidus has fallen behind on its 2 nm development, which sharpens the question of whether these bets arrive on time. We give the details, node sizes and timelines in the [companion article](/2026/11/10/japan-2nm-chip-fabs-rapidus/).

## Europe and Japan side by side

| | Europe | Japan |
|---|---|---|
| Policy tools | Chips Act 2.0 and CADA (proposals); AI Factories (established); AI Gigafactories (call for tenders open) | METI subsidies for chips and data centers; watt-bit policy; Rapidus support |
| Leading-edge logic fab | None announced; ESMC Dresden is mature nodes (28/22, 16/12 nm) | Rapidus 2 nm (planned, delayed risk); JASM Fab 2 at 3 nm (planned for 2028) |
| Running AI compute | JUPITER; Telekom Munich; AI Factories | Sakura Internet Blackwell cluster; other private clouds |
| Large AI sites under construction | Narvik (Microsoft/Nscale); Mistral (Essonne); gigafactories not yet awarded | SoftBank Tomakomai (FY2026); Sakai (FY2027) |
| Main limit | Power, permitting, financing, customers | Power supply and grid access; construction labor; time |
| Cancelled or slipped | Intel Magdeburg cancelled; Mistral start slipped | Sakai opening appears to have slipped |

## Risks and open questions

1. **Customers decide.** The Narvik story shows that announced capacity needs a paying tenant. Gigafactories will need anchor customers beyond public research.
2. **Energy.** Both regions face grid delays and energy costs; OpenAI cited energy cost for pausing its UK project.
3. **Policy lag.** Chips Act 2.0 and CADA are proposals; their final form and funding are not settled. According to the EuroHPC FAQ, an additional €4 billion for a second procurement phase is subject to new funds being available.
4. **Dependence.** Even sovereign European or Japanese clouds run on Nvidia hardware, made largely by TSMC.
5. **Over-building.** Industry reports note worries about oversupply if demand softens just as new fabs and data centers, which take years to build, come online. This is a risk assessment, not a forecast we can confirm.

## What to watch next

- **3 December 2026:** EuroHPC bid deadline for one AI-gigafactory lot; **4 February 2027** for the other.
- Council and Parliament positions on **Chips Act 2.0** and **CADA**.
- **ESMC Dresden:** the first tool-in announcement and the first customer wafers in 2027.
- **SoftBank Tomakomai:** whether it opens before March 2027.
- A confirmed operating status for **Mistral’s** Essonne cluster.
- Rapidus and JASM schedule news (see the [companion article](/2026/11/10/japan-2nm-chip-fabs-rapidus/)).

## What we could not verify

- Whether Mistral’s Bruyères-le-Châtel cluster is fully operating.
- The size and the exact lot assignment of the two AI-gigafactory lots: a trade outlet (DCD) reports the lot deadlines the other way round from EuroHPC’s own page; we follow EuroHPC. The sizes quoted come from the EuroHPC FAQ; secondary summaries give different numbers.
- The €5 billion German state-aid figure for ESMC and Magdeburg site details beyond the cited reports.
- SoftBank’s reasons for moving Sakai to fiscal 2027, and any OpenAI role at Sakai.
- OCCTO figures, which we read only through a secondary summary.
- The accuracy of Telekom’s and SoftBank’s computing figures: they are company statements and use different measures.

## FAQ

**Is Europe building its own AI chips?**
Not at the leading edge. The EU has no 3 nm or 2 nm production announced. Chips Act 2.0 proposes “Grand Challenges” for AI chips, but that is a proposal. European strengths are lithography machines (ASML), power chips (Infineon), and design.

**What is an “AI gigafactory”?**
In the EU’s call, a very large AI data center with at least three to four times the number of top AI processors found in Europe’s most powerful AI factories today. They are meant to train and run large AI models, with access time bought by public bodies. None has been awarded yet.

**Is Intel still building a fab in Germany?**
No. Intel confirmed on 24 July 2025 that it would not pursue the Magdeburg project. The state has bought back the land and is looking for other users.

**What does ESMC Dresden make?**
Mature-node chips (28/22 nm and 16/12 nm) for cars and industry, not AI accelerators. Production is expected to start in 2027.

**Is Japan ahead of Europe in AI data centers?**
Not clearly. Japan has a working Blackwell cluster at Sakura and large SoftBank projects under construction, and SoftBank itself says Japan’s rollout is slightly lagging by global standards. Europe has JUPITER and Telekom’s Munich site running.

**Why Hokkaido?**
SoftBank cites cool air, renewable energy potential, distance from the Tokyo and Osaka earthquake and disaster zones, and available industrial land. Sakura’s Ishikari campus is also in Hokkaido.

**Where can I read about Japan’s 2 nm chips?**
In the [companion article on Japan’s 2 nm and advanced-node fabs](/2026/11/10/japan-2nm-chip-fabs-rapidus/), published alongside this one.

## Image credit

Photo: Forschungszentrum Jülich / Sascha Kreklau, “JUPITER racks with logos of supporters and partners”, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:JUPITER_racks_with_logos_of_supporters_and_partners._Copyright-_Forschungszentrum_J%C3%BClich_-_Sascha_Kreklau.jpg). The image shows European AI compute in general and no Japanese project.

## Sources

- [European Commission: Chips Act 2.0 (policy page)](https://digital-strategy.ec.europa.eu/en/policies/chips-act-2) and [Proposal for the Chips Act 2.0 (3 June 2026)](https://digital-strategy.ec.europa.eu/en/library/proposal-chips-act-20)
- [European Commission: Cloud and AI Development Act](https://digital-strategy.ec.europa.eu/en/policies/cloud-and-ai-development-act)
- [European Court of Auditors: Special report 12/2025, The EU’s strategy for microchips](https://www.eca.europa.eu/ECAPublications/SR-2025-12/SR-2025-12_EN.pdf)
- [The Guardian: EU microchip strategy “deeply disconnected from reality”, say auditors (28 Apr 2025)](https://www.theguardian.com/business/2025/apr/28/eu-microchip-strategy-deeply-disconnected-from-reality-say-official-auditors)
- [EuroHPC JU: Call for tenders for AI Gigafactory consortia (updated 5 Nov 2026)](https://www.eurohpc-ju.europa.eu/call-tenders-selection-artificial-intelligence-gigafactory-consortia-and-establishment-ai_en)
- [EuroHPC JU: AI Gigafactories FAQ (PDF, 30 Jul 2026)](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/tender-details/docs/bc712395-692d-41ab-aa25-8e254ae86eb2-CN/FAQ%20AIF%20Gigafactories_v300726_V1.pdf)
- [European Commission: 76 expressions of interest in AI Gigafactories (30 Jun 2025)](https://digital-strategy.ec.europa.eu/en/news/overwhelming-response-76-respondents-express-interest-european-ai-gigafactories-initiative)
- [EuroHPC JU: AI Factories](https://www.eurohpc-ju.europa.eu/ai-factories_en)
- [DCD: EU AI gigafactories scheme asks applicants to resubmit bids](https://www.datacenterdynamics.com/en/news/eu-ai-gigfactories-scheme-asks-applicants-to-resubmit-funding-bids-for-technical-reasons/)
- [ESMC: Who we are](https://esmc.eu/en/who_we_are.html)
- [MDR: Richtfest für Chip-Fabrik von ESMC in Dresden (14 Sep 2026, German)](https://www.mdr.de/nachrichten/sachsen/dresden/dresden-radebeul/news-chipindustrie-richtfest-auto,halbleiterwerk-esmc-100.html)
- [Oiger: Richtfest für Milliardenprojekt von TSMC in Dresden (13 Sep 2026, German)](https://oiger.de/2026/09/13/richtfest-fuer-milliardenprojekt-von-tsmc-in-dresden/198531)
- [Die Sachsen: Topping-out ceremony for new Dresden microchip factory](https://www.diesachsen.de/en/economy/topping-out-ceremony-for-new-dresden-microchip-factory-milestone-3180433)
- [Infineon: Smart Power Fab opens in Dresden (2 Jul 2026)](https://www.infineon.com/press-release/2026/ifxpr202607-117)
- [Intel: Lip-Bu Tan, “Steps in the Right Direction”](https://www.intel.com/content/www/us/en/newsroom/news/corporate/lip-bu-tan-steps-in-the-right-direction.html)
- [MDR: Intel sagt Fabrik in Magdeburg ab (German)](https://www.mdr.de/nachrichten/sachsen-anhalt/magdeburg/magdeburg/faq-intel-chipfabrik-baustopp-100.html)
- [State of Saxony-Anhalt: High-Tech Park Sachsen-Anhalt wird weiterentwickelt (10 Mar 2026, German)](https://presse.sachsen-anhalt.de/staatskanzlei/2026/03/10/high-tech-park-sachsen-anhalt-wird-weiterentwickelt)
- [Ostdeutsche Zeitung: Intel-Aus in Magdeburg, kommt jetzt die FMC-Chipfabrik? (German)](https://ostdeutsche-zeitung.de/magdeburg/wirtschaft/intel-aus-magdeburg-hightech-park-fmc-chipfabrik-136)
- [Handelsblatt: Wie Sachsen-Anhalt ins Chip-Dilemma geriet (German)](https://www.handelsblatt.com/politik/deutschland/landtagswahl-wie-sachsen-anhalt-ins-chip-dilemma-geriet/100248950.html)
- [EuroHPC JU: JUPITER officially propels Europe into the exascale era (17 Nov 2025)](https://www.eurohpc-ju.europa.eu/jupiter-officially-propels-europe-exascale-era-2025-11-17_en)
- [Deutsche Telekom: Germany’s first AI factory for industry goes into operation in Munich (4 Feb 2026)](https://www.telekom.com/en/newsroom/latest-updates/media-information/2026/2/germany-s-first-ai-factory-for-industry)
- [DCD: Mistral AI raises $830m in debt financing for data center in Paris (30 Mar 2026)](https://www.datacenterdynamics.com/en/news/mistral-ai-raises-830m-in-debt-financing-for-data-center-in-paris-france/)
- [CNBC: OpenAI pulls back from Stargate Norway data center deal as Microsoft takes over (15 Apr 2026)](https://www.cnbc.com/2026/04/15/openai-stargate-norway-project-microsoft.html)
- [SoftBank News: Inside the Hokkaido Tomakomai AI Data Center (25 Feb 2026)](https://www.softbank.jp/en/sbnews/entry/20260225_01)
- [SoftBank: Next-generation social infrastructure (sustainability targets, FY2026)](https://www.softbank.jp/en/corp/sustainability/materiality/next-gen-infra/)
- [SoftBank: Main Q&A at earnings briefing for FY2025](https://www.softbank.jp/en/corp/ir/documents/presentations/fy2025/q4_earnings_qa/)
- [Sakura Internet: press release on ~1,100 Nvidia Blackwell GPUs (25 Feb 2026, Japanese)](https://www.sakura.ad.jp/corporate/information/newsreleases/2026/02/25/1968223641/)
- [Japan Data Center Watch: Data centers and electricity](https://japandatacenter.org/en/energy) (summary of OCCTO’s demand outlook)
- [METI: Watt-bit collaboration public-private discussion summary 1.0 (Japanese)](https://www.meti.go.jp/press/2025/06/20250612001/20250612001.html)
- [Bloomberg via The Japan Times: Rapidus said likely to miss mass production deadline (10 Nov 2026)](https://www.japantimes.co.jp/business/2026/11/10/companies/rapidus-behind-schedule/)
- [Wikimedia Commons: JUPITER racks (image)](https://commons.wikimedia.org/wiki/File:JUPITER_racks_with_logos_of_supporters_and_partners._Copyright-_Forschungszentrum_J%C3%BClich_-_Sascha_Kreklau.jpg)
