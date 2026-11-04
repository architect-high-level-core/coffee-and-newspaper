---
layout: post
title: "Japan's Chipmakers in the AI Boom: Rapidus, Tokyo Electron, Kioxia, Renesas, Sony, Advantest and TSMC Kumamoto Explained"
date: 2026-11-04 21:30:00 +0100
slug: japan-chipmakers-ai
excerpt: "Japan is betting billions on getting back into leading-edge chips for AI. We explain who the key Japanese semiconductor companies are, what role each plays in the AI supply chain, how the government funds Rapidus' 2nm plan, and what the latest news from October 2026 says."
tags: [AI, semiconductors, Japan, Rapidus, Tokyo Electron, Kioxia, Renesas, Sony, Advantest, TSMC, JASM, Kumamoto, 2nm, chip subsidies, METI]
image: /assets/img/2026-11-04-japan-chipmakers-ai.jpg
image_alt: "A researcher in a clean-room suit holds up a round silicon wafer"
image_credit: "Photo: U.S. Department of Energy, “Silicon wafer researcher”, public domain, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Silicon_wafer_researcher.jpg (resized)"
image_license: "Public domain (work of the U.S. federal government)"
image_license_url: "https://commons.wikimedia.org/wiki/File:Silicon_wafer_researcher.jpg"
image_description: "Photo published by the U.S. Department of Energy showing a researcher holding a silicon wafer. It stands for semiconductor manufacturing in general. It does not show any Japanese company, factory or product named in this article."
---

Every AI model runs on chips, and every chip passes through a supply chain in which Japan plays a much bigger role than most people think. Japan no longer makes the most advanced logic chips, but its companies build many of the machines, materials, memory and test systems that the AI industry depends on. Now the government wants more: with the start-up Rapidus, Japan aims to make 2-nanometre chips for AI data centres from late fiscal year 2027.

This overview explains the main players, the money behind them and the latest news.

**Note on sources:** Figures on Rapidus funding come from reports by EE Times Japan, Nikkei and DigiTimes on documents the Ministry of Economy, Trade and Industry (METI) presented on October 19, 2026. Background facts on the companies come from their public profiles. Where we could not verify something, we say so.

## Why Japan matters for AI chips

In the 1980s Japanese companies led the world memory-chip market. Over the following decades, they lost ground to South Korea, Taiwan and the United States. What remained was strength in the "picks and shovels": production equipment, silicon wafers, photoresists and other chemicals, test systems, and specialised chips such as image sensors and microcontrollers.

The AI boom has changed the picture in two ways. First, demand for the most advanced chips, above all GPUs and the high-bandwidth memory (HBM) that sits next to them, has exploded. Second, governments now see chips as a question of national security and economic sovereignty. Japan, like the US and the EU, has decided to subsidise domestic production on a large scale.

## Rapidus: Japan's 2nm moonshot

**What it is:** Rapidus was founded in August 2022 with backing from the Japanese government and a group of large Japanese companies. Its goal is to manufacture logic chips at the 2-nanometre generation, a level that today only the world's leading foundries are working on. It cooperates with IBM, which developed a 2nm technology, and is building its factory "IIM-1" in Chitose, Hokkaido.

**Progress so far:** According to METI material summarised by EE Times Japan, Rapidus started its 2nm pilot line in April 2025, confirmed working gate-all-around (GAA) transistors in July 2025 and released an early process design kit (PDK) for customers in December 2025. In April 2026 it opened an analysis centre and its chiplet and packaging site "Rapidus Chiplet Solutions" in Chitose. In October 2026 it announced an ecosystem called "Rapidus CORE", with a first group of 17 design partners including Synopsys, Cadence, Dai Nippon Printing and TOPPAN.

**The AI angle:** Rapidus wants to win its first orders from fabless companies that design custom chips for AI data centres, and later expand to edge devices such as cars and robots. It also partners with Cadence on agentic-AI-assisted chip design (announced July 2026) and with Siemens on design tools. According to the METI documents, Rapidus is in talks with more than 60 potential customers. Named customers had not been confirmed in the sources we read.

### The latest money: ¥400 billion more planned

On October 19, 2026, METI presented a plan to a Ministry of Finance advisory council to invest a further **¥400 billion** in Rapidus equity between fiscal years 2027 and 2029: ¥150 billion in FY2027, ¥150 billion in FY2028 and ¥100 billion in FY2029. The investment would flow through the state-run Information-technology Promotion Agency (IPA). The government already invested ¥100 billion and ¥150 billion in fiscal 2025 and 2026, so the total would reach ¥650 billion if every tranche is approved.

Important: **this is a request, not a final decision.** Each year's tranche needs budget approval. The finance ministry's material, as reported, said there are "many uncertain factors" before the state earns returns on its shares, and council members called for annual checks of profitability.

Why equity? Rapidus plans to borrow about **¥2 trillion** from private banks to expand production, with around ¥400 billion targeted in fiscal 2027. Banks expect a solid equity ratio; METI's documents compare it with industry averages of around 61% for semiconductor makers. Separately, research subsidies through the research agency NEDO add up to about ¥2.35 trillion approved for fiscal 2022 to 2026, according to EE Times Japan, with roughly ¥300 billion more requested for 2027.

**Plan:** mass production of 2nm chips in the second half of fiscal 2027, advanced packaging in fiscal 2028, positive operating cash flow around fiscal 2029, and a stock market listing around fiscal 2031.

**Critics' view:** Analysts and Japanese media have long asked whether a newcomer can compete with TSMC, Samsung and Intel at the leading edge, win enough customers and earn back the public money. These risks are not settled; the next two years will show.

## TSMC Kumamoto (JASM): the foreign anchor

While Rapidus aims at the very leading edge, Japan's biggest chip-factory project to date is run by Taiwan's TSMC. Its majority-owned subsidiary **Japan Advanced Semiconductor Manufacturing (JASM)** has minority shareholders including Sony, Denso and Toyota. The first factory in Kikuyo, Kumamoto Prefecture, opened in February 2024 and makes chips on more mature processes (in the range of 12 to 28 nanometres) used in cars, cameras and industrial electronics. A second factory has been planned; the Japanese government has supported both with large subsidies.

These are not the chips that train frontier AI models. But AI does not run only in data centres: cars, robots, cameras and factory machines need many such "mature" chips to run AI functions at the edge. The Kumamoto cluster has also attracted suppliers and raised questions locally about water use, traffic and housing. We did not check the latest timeline for the second fab for this article.

## Tokyo Electron: machines for every fab

**Tokyo Electron (TEL)** is one of the world's largest makers of semiconductor production equipment, alongside Applied Materials, ASML, Lam Research and KLA. TEL is especially strong in coater/developer systems used in lithography (the step in which circuit patterns are transferred to the wafer), as well as in etching, deposition and cleaning tools.

For AI, this matters because every new GPU and every new HBM memory stack requires more production steps and more machines. When TSMC, SK hynix or Samsung expand capacity for AI chips, Japanese equipment makers benefit. At the same time, US export controls on China affect them, because China has been a large market for chip tools.

## Advantest: testing the AI chips

**Advantest** makes automatic test equipment: machines that check whether a chip works before it is shipped. Modern AI processors are huge, complex and expensive, and often combine several pieces of silicon in one package. Each one must be tested thoroughly, which is why Advantest has become one of the best-known winners of the AI boom on the Tokyo stock market. It is widely reported to be a key test supplier for Nvidia's AI GPUs; we did not verify current market-share figures for this article.

## Kioxia: memory for AI data

**Kioxia**, the former memory business of Toshiba, makes NAND flash memory, the storage inside SSDs. It runs factories in Yokkaichi and Kitakami together with its US partner Sandisk (formerly part of Western Digital). Kioxia went public on the Tokyo Stock Exchange in December 2024.

AI needs not only fast HBM next to the processor, but also huge amounts of storage for training data, checkpoints and inference. The current memory crunch, which on X is blamed on AI data centres buying up memory and driving consumer RAM and SSD prices up, shows how important memory makers are. Note: Kioxia makes NAND, not HBM; the HBM market is led by SK hynix, Samsung and Micron.

## Renesas: AI at the edge

**Renesas Electronics** is one of the world's largest makers of microcontrollers, the small chips that control cars, appliances and industrial machines. Renesas has expanded through acquisitions (including Intersil, IDT and Dialog Semiconductor) and in 2024 bought the electronics design software company Altium. Its AI story is about "edge AI": running small AI models directly on devices instead of in the cloud, for example for driver assistance or predictive maintenance in factories.

## Sony: sensors that feed AI

**Sony Semiconductor Solutions** is the world's leading maker of image sensors used in smartphones, cars and industrial cameras. Cameras are the eyes of many AI systems, from driver assistance to robots. Sony has also experimented with sensors that include built-in AI processing, so that a camera can recognise objects before sending any data. Sony is a minority shareholder in TSMC's Kumamoto venture.

## Materials and wafers: the quiet strength

Less visible but crucial: Japanese companies such as Shin-Etsu Chemical and SUMCO are among the world's biggest suppliers of silicon wafers, and Japanese firms such as JSR, Tokyo Ohka Kogyo and others are major suppliers of photoresists and other high-purity chemicals. Japan's 2019 export restrictions on certain chemicals to South Korea showed how much leverage these materials give. In 2024 a government-backed fund took JSR private.

## The government's big picture

Japan's government has spent heavily on chips since 2021, with subsidies for TSMC Kumamoto, Kioxia and Micron's Hiroshima factory, and the support for Rapidus described above. In late 2024, then-Prime Minister Shigeru Ishiba's government announced a plan to mobilise more than ¥10 trillion in public support for AI and semiconductors by fiscal 2030. How much of this has been spent so far, and how the current government adjusts the plan, we did not verify for this article.

The goal is threefold: secure supply for Japanese industry (especially cars), regain a place at the leading edge, and attract AI investment, including data centres, to Japan.

## Competition and context

Japan is not alone. South Korea reported record exports in October 2026, driven by AI memory chips, according to a news summary on X. The US is subsidising factories under the CHIPS Act, and in October 2026 announced a new GlobalFoundries project in New York linked to trade deals with Japan, Korea and Taiwan, again according to X news summaries. TSMC remains far ahead in leading-edge logic. Rapidus therefore needs not only technology but also customers willing to take a risk on a new foundry.

## What to watch next

- **Budget decisions:** whether the FY2027 equity tranche of ¥150 billion for Rapidus is approved at the end of 2026.
- **Bank loans:** whether Rapidus actually secures the planned private loans.
- **First customers:** public announcements of AI chip designers that commit to Rapidus.
- **TSMC Kumamoto's second fab:** timing and which process it will use.
- **Memory prices:** how long the AI-driven memory crunch lasts, which affects Kioxia.
- **Export controls:** new US or Japanese rules on chip tools for China, which affect Tokyo Electron and others.

## What we could not verify

- Current market shares of Advantest and Tokyo Electron in AI-related segments.
- The current construction and production schedule of TSMC's second Kumamoto fab.
- Named Rapidus customers; METI only says more than 60 are in talks.
- How much of the ¥10 trillion AI and chip package has been disbursed.

## Conclusion

Japan's role in AI chips is two-sided. On one side are established world leaders in equipment, testing, materials, sensors and memory that already profit from AI demand. On the other is Rapidus, a state-backed bet on returning to the leading edge, with a planned ¥400 billion in extra public equity and a target of 2nm mass production in late fiscal 2027. Whether that bet pays off depends on customers, financing and execution, and the next budget round is the first test.


## Sources

- [EE Times Japan: METI reveals ¥400 billion additional investment plan for Rapidus (Oct 20, 2026, Japanese)](https://eetimes.itmedia.co.jp/ee/articles/2610/20/news052.html) and [page 2](https://eetimes.itmedia.co.jp/ee/articles/2610/20/news052_2.html)
- [Nikkei: State investment of ¥400 billion in Rapidus for FY2027–29 (Oct 19, 2026, Japanese)](https://www.nikkei.com/article/DGXZQOUA16AEA0W6A011C2000000/)
- [DigiTimes: Japan plans JPY400 billion boost for Rapidus 2nm push (Oct 21, 2026)](https://www.digitimes.com/news/a20261020PD240/rapidus-2nm-2027-government-investment.html)
- [Rapidus (official website)](https://www.rapidus.inc/en/)
- [TSMC: JASM / Japan fab information](https://www.tsmc.com/english/aboutTSMC/TSMC_Fabs)
- [Tokyo Electron (official website)](https://www.tel.com/)
- [Advantest (official website)](https://www.advantest.com/en/)
- [Kioxia (official website)](https://www.kioxia.com/en-jp/top.html)
- [Renesas Electronics (official website)](https://www.renesas.com/en)
- [Sony Semiconductor Solutions (official website)](https://www.sony-semicon.com/en/)
- [X news summary: South Korea's exports hit record on AI chip surge](https://x.com/i/trending/2116708944189993406)
- [X news summary: AI boom drives up RAM and GPU prices](https://x.com/i/trending/2117194073400287688)
- [Wikimedia Commons: Silicon wafer researcher (image)](https://commons.wikimedia.org/wiki/File:Silicon_wafer_researcher.jpg)
