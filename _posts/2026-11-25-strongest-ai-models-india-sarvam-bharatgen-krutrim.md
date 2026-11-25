---
layout: post
title: "Which Are the Strongest AI Models from India in 2026? Sarvam, BharatGen Param2 and Krutrim Compared"
date: 2026-11-25 20:55:00 +0100
slug: strongest-ai-models-india-sarvam-bharatgen-krutrim
excerpt: "India now has public, large open-weights language models trained at home. Independent tests put Sarvam 105B at the front of that group on general reasoning scores, though it still trails global peers. BharatGen’s Param2 covers 22 Indian languages but is an early, non-commercial checkpoint. Krutrim-2 remains a documented 12-billion-parameter Indic model. Here is what the numbers actually show."
description: "Strongest AI models from India, November 2026: Sarvam 105B scores 18 on the Artificial Analysis Intelligence Index, ahead of Sarvam 30B at 12, but behind gpt-oss-120B and Mistral Small 4. BharatGen Param2-17B is a 17-billion-parameter mixture-of-experts model for 22 Indian languages under a non-commercial licence. Krutrim-2 is a 12B Indic model. Facts, independent scores and limits."
tags: [AI, India, Indian language models, Sarvam, Sarvam 105B, Sarvam 30B, BharatGen, Param2, Krutrim, IndiaAI Mission, open weights, Artificial Analysis, Hindi, Indic languages]
image: /assets/img/2026-11-26-india-ai-models-bengaluru.jpg
image_alt: "The Bengaluru skyline seen from a high-rise, with residential towers and city haze under a pale sky"
image_credit: "Image: Kushagra140, “Bengaluru Skyline from Tata Promont” (11 August 2021), CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Bengaluru_Skyline_from_Tata_Promont.jpg (resized). A view of Bengaluru, a centre of India’s software and AI industry; it does not show Sarvam, BharatGen or Krutrim offices."
image_license: "CC BY-SA 4.0"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "A 2021 photograph of the Bengaluru skyline, used as a location illustration for India’s AI-model industry. It does not depict any of the models or laboratories named in the article."
faq:
  - question: "Which is the strongest AI model from India in 2026?"
    answer: "On independent general-reasoning scores, Sarvam 105B is the strongest widely tested Indian open-weights model. Artificial Analysis gives it a score of 18 on its Intelligence Index in reasoning mode, ahead of Sarvam 30B at 12. Both still trail leading global open models in the same size classes."
  - question: "What are Sarvam 105B and Sarvam 30B?"
    answer: "They are mixture-of-experts language models announced by Sarvam at the India AI Impact Summit 2026, trained in India with compute from the IndiaAI Mission and released under the Apache 2.0 licence. Sarvam 105B has about 106 billion total parameters with roughly 10 billion active per token and a 128,000-token context window."
  - question: "How good is BharatGen Param2?"
    answer: "Param2-17B is a government-backed open model from the BharatGen consortium, with 17 billion total parameters and 2.4 billion active per token, trained for English, Hindi and 21 other Indian languages. The model card describes it as an early post-training checkpoint that needs further fine-tuning, and the licence is non-commercial."
  - question: "Is Krutrim still one of India’s leading models?"
    answer: "Krutrim-2, a 12-billion-parameter model from Ola Krutrim, remains publicly documented on Hugging Face and reports strong results on Indic tasks. Some 2026 secondary reports said the consumer Kruti assistant had disappeared and that a planned Krutrim 3 model had been halted. We could not confirm those later product changes from a primary company statement."
  - question: "Do Indian models beat GPT or Gemini?"
    answer: "Not on general intelligence or coding benchmarks published by Artificial Analysis for Sarvam 105B and 30B. Their relative strengths are Indian languages, scripts, voice and, in one 2026 preprint, romanised code-mixed instructions. For hard reasoning and agentic coding, global models still lead in the independent scores we reviewed."
---

India now has public language models that were trained in India, released with open weights, and scored by an independent benchmark laboratory. That is a genuine change from a few years ago, when “Indian AI” often meant a wrapper around a foreign model. It does not mean that the strongest Indian models have caught the global frontier.

This article asks a direct question: **which are the strongest AI models from India in 2026?** We look at **Sarvam 105B and 30B**, **BharatGen’s Param2**, and **Krutrim-2**, and we keep vendor claims, independent scores and unverified product rumours apart.

## The short version

- **On independent general scores, Sarvam 105B leads the Indian group.** [Artificial Analysis](https://artificialanalysis.ai/articles/sarvam-105b-Sarvam-30b-everything-you-need-to-know) gives it **18** on its Intelligence Index in reasoning mode, against **12** for Sarvam 30B. Both were announced at the **India AI Impact Summit 2026** and released under **Apache 2.0**.
- **They are not frontier models.** The same laboratory places Sarvam 105B behind open peers such as Mistral Small 4 (27) and gpt-oss-120B (33), and flags high hallucination rates on its AA-Omniscience test.
- **BharatGen Param2** is the broadest public project for India’s scheduled languages — **22 Indian languages** plus English, according to its model card — but it is an early checkpoint with a **non-commercial** licence.
- **Krutrim-2** is a documented 12-billion-parameter Indic model. Later reports that the Kruti app and a planned Krutrim 3 were withdrawn are secondary; we flag them as unverified by a primary source.
- **“Strongest” depends on the job.** For general reasoning and coding, global models still lead. For Indian languages, scripts, voice and code-mixing, the Indian models are the ones built for the problem.

## Which Indian AI model scores highest on independent benchmarks?

**Sarvam 105B**, on the public numbers we could check. In an article dated **2 April 2026**, Artificial Analysis, an independent model-evaluation firm, reported that **Sarvam 105B** scored **18** and **Sarvam 30B** scored **12** on its Intelligence Index in reasoning mode. Both models were announced at the India AI Impact Summit 2026, open-sourced under Apache 2.0, and described as mixture-of-experts systems **trained entirely in India** with compute provided under the **IndiaAI Mission**. Unlike Sarvam’s earlier **Sarvam M** (23.6 billion parameters, score 8), which was based on Mistral Small, these two are presented as pre-trained from scratch.

The same write-up gives the following technical facts:

- **Sarvam 105B:** about **106 billion** total parameters, roughly **10 billion** active per token, **128,000-token** context window.
- **Sarvam 30B:** about **32 billion** total parameters, roughly **2.4 billion** active per token, **65,000-token** context window.
- Both have reasoning and non-reasoning modes, and at the time of the review were text-in, text-out only.
- Weights were available on Hugging Face and AIKosh; first-party API access was described as free at the time of publication. Prices can change, so check the current page before building on that.

Among open models of a similar size, 18 is a mid-table result, not a lead. Artificial Analysis places Sarvam 105B behind GLM-4.5-Air (23), INTELLECT-3 (22), Mistral Small 4 (27) and gpt-oss-120B (33), and notes that those peers also activate more parameters per token. Sarvam 30B similarly trails several 30-billion-class systems, including Qwen3 models.

The relative strength in that review is **some agentic work**: Sarvam 105B’s agentic index of **25** was ahead of INTELLECT-3 (20) and GLM-4.5-Air (21), and its GDPval index of **773** edged GLM-4.5-Air (665). The weak spots were equally clear. On TerminalBench Hard, a test of agentic coding and terminal use, Sarvam 105B scored **1.5%** and Sarvam 30B **2.3%**, against 20.5% for GLM-4.5-Air. On AA-Omniscience the scores were **-60** and **-72**, which Artificial Analysis attributes to high hallucination rates and to the models answering questions they should have refused.

Alongside the text models, Sarvam announced **Saaras v3** (speech to text) and **Bulbul v3** (text to speech) with a focus on Indic languages. Those are important for India’s multilingual, often voice-first market, but they are not the same thing as a higher Intelligence Index score.

**Our assessment:** if “strongest Indian model” means the highest independently published general score, **Sarvam 105B** is the current answer. If it means “ready to replace a frontier model for hard reasoning or coding,” the same numbers say no.

![The main building of the Indian Institute of Technology Bombay, a long multi-storey academic block with trees in the foreground](/assets/img/2026-11-26-india-ai-models-iit-bombay.jpg)
*Photo: Harmanps91, “IIT Bombay” (27 April 2012), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:IIT_Bombay.jpg) (resized). IIT Bombay has led the BharatGen consortium; the 2012 photograph does not show Param2 or any 2026 event.*

## What is BharatGen’s Param2, and how strong is it?

**BharatGen** is a government-backed consortium, led in its early phase by **IIT Bombay**, to build Indian-language foundation models. Its public flagship in 2026 is **Param2**. The Hugging Face model card for `bharatgenai/Param2-17B-A2.4B-Thinking`, as summarised in later 2026 explainers that quote the card, describes:

- a mixture-of-experts model with **17 billion** total parameters and **2.4 billion** active per token, using 64 experts;
- training on about **22.5 trillion** tokens;
- support for **English, Hindi and 21 other Indian languages**, including several that few global models cover well, such as Assamese, Bodo, Dogri, Konkani, Kashmiri, Maithili, Manipuri, Sanskrit, Santali and Sindhi;
- a **32,768-token** context window, with a 128,000-token variant described as coming soon;
- a **non-commercial** BharatGen licence;
- and an explicit warning that the release is an **early post-training checkpoint** that needs further fine-tuning and safety alignment before production use.

Two cautions follow from that card. First, “strongest” is the wrong word if the authors themselves say the checkpoint is not production-ready. Second, a non-commercial licence means a company cannot simply drop Param2 into a paid product. There is also, according to the same secondary guides, no public BharatGen consumer chat app.

A funding figure is often attached to the project: **₹1,058.52 crore**, described as the largest allocation among IndiaAI foundation-model projects, from a MeitY reply in the Lok Sabha reported by MediaNama in April 2026 and later cited in explainers. We did not retrieve the parliamentary reply itself, so we treat the amount as **reported**, not as a figure we have audited.

Compared with Sarvam, Param2’s distinctive claim is **language coverage and public-research intent**, not a leading Artificial Analysis score. We did not find a matching Intelligence Index number for Param2 in the sources reviewed for this article.

## Where does Krutrim-2 stand?

**Krutrim-2** is a **12-billion-parameter** dense model released by the **Ola Krutrim** team. The [Hugging Face model card](https://huggingface.co/krutrim-ai-labs/Krutrim-2-instruct) says it is built on the **Mistral-NeMo 12B** architecture, trained on web, code, maths, Indic-language and Indian-context data, then instruction-tuned and aligned with direct preference optimisation. It supports context up to **128,000 tokens**.

The card makes strong **vendor claims**: competitive English benchmark results, “best-in-class performance on Indic benchmarks,” and top-three results on five of seven BharatBench tasks against much larger models. Those figures are the company’s. We did not find a current Artificial Analysis Intelligence Index score for Krutrim-2 comparable to the Sarvam numbers above, so we cannot place it on the same independent ladder.

Later 2026 secondary reporting, summarised in industry explainers, said that the consumer assistant **Kruti** had disappeared from the web and app stores by April 2026, and that a planned **Krutrim 3** model had been halted as the company pivoted toward AI cloud services. We did not locate a primary Ola or Krutrim statement confirming those product changes, so they belong in the “unverified” column until a company source is produced.

**Our assessment:** Krutrim-2 remains one of the main documented Indian models, especially for Indic generation. It is no longer, on the public independent scores we have, the country’s strongest general model, and its product status in 2026 is less clear than Sarvam’s.

![The main building of the Indian Institute of Technology Delhi, a modern academic façade with a green lawn in front](/assets/img/2026-11-26-india-ai-models-iit-delhi.jpg)
*Photo: Azanti, “Indian Institute of Technology Delhi” (4 July 2019), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Indian_Institute_of_Technology_Delhi.jpg) (resized). India’s IIT system is central to several public-model efforts, including BharatGen; the photograph is a general illustration, not a picture of a training cluster.*

## When do Indian models do better than the global ones?

On **general reasoning and coding**, the independent table is not close. On **Indian-language use**, especially messy, real-world language, the picture is more interesting.

A June 2026 preprint, **Indi-RomCoM**, tested models on romanised, code-mixed instructions in Tamil, Bengali, Hindi and Gujarati. As reported in a later research summary that quotes the paper’s tables, zero-shot average accuracy, from a baseline to 75% code-mixing, was 68.7% falling to 61.2% for Claude Opus 4.6, **64.2% to 56.1% for Sarvam-30B**, 61.4% to 54.1% for Gemini 3.5 Flash, and lower still for older or tiny models. With three examples in the prompt, Sarvam-30B rose to 71.0% falling to 63.1%. The paper also measured how often a model abandoned the user’s mixed register and answered in English; Sarvam-30B did this less often than Claude or Gemini in the reported averages.

Three cautions, which that summary itself makes, should be kept in view: the paper is a preprint, not a peer-reviewed result we have re-run; the closed models in the table are a generation behind the systems now on sale; and the OpenAI comparison point in that study was GPT-3.5-Turbo, not a current flagship. Even so, the pattern is plausible and useful: a mid-sized Indian model can be close to, and sometimes more natural than, a larger foreign model on Indian code-mixed text, without winning a global reasoning league.

Sarvam has also published its own language comparisons, including a 22-language test in which a larger model judges the answers. Those are **vendor-reported** and, in at least one write-up, do not clearly name the opponents, so they are not treated here as independent rankings. A separate vendor table from Gnani, cited in the same research summary, put some Gemma 4 variants ahead of Sarvam on the MILU Indian-knowledge benchmark. Different tests measure different things: knowledge in native script is not the same as following romanised, mixed-language instructions.

## FAQ

**Which is the strongest AI model from India right now?**
On independent general-reasoning scores, Sarvam 105B. On coverage of India’s scheduled languages, BharatGen Param2 is the broadest public project, but it is an early non-commercial checkpoint, not a leader on the same scoreboard.

**Can I use these models commercially?**
Sarvam 105B and 30B are under Apache 2.0, a permissive open-source licence. Param2 uses a BharatGen non-commercial licence. Always read the current licence file; this is not legal advice.

**Are they trained in India?**
Artificial Analysis says the two Sarvam models were trained entirely in India with IndiaAI Mission compute. BharatGen is a government-backed Indian consortium. Krutrim-2 is developed by the Ola Krutrim team and, according to its card, built on the Mistral-NeMo 12B architecture.

**Do they replace GPT, Gemini or Claude?**
Not for hard general reasoning or coding, on the independent scores reviewed here. They are more competitive for Indian languages, speech and code-mixed text.

**Is there a single Indian consumer chatbot that uses all of these?**
Not that we could verify. Sarvam offered a first-party API at the time of the April 2026 review. BharatGen, on the accounts we saw, has no public consumer chat app.

## What we could not verify

- A later 2026 Artificial Analysis re-score of Sarvam 105B or 30B; the figures above are from the 2 April 2026 article.
- An independent Intelligence Index score for BharatGen Param2 or Krutrim-2.
- The ₹1,058.52 crore BharatGen allocation, which we saw only in secondary citations of a parliamentary reply.
- Primary confirmation that the Kruti app was withdrawn or that Krutrim 3 was halted.
- The Indi-RomCoM tables themselves; we rely on a research summary that quotes them, and the paper is a preprint.
- Live availability, pricing and rate limits as of 26 November 2026, which can change without a new model release.

## Sources

- Artificial Analysis: [Sarvam 105B and Sarvam 30B: India enters the open-weights race](https://artificialanalysis.ai/articles/sarvam-105b-Sarvam-30b-everything-you-need-to-know) (2 April 2026)
- Hugging Face: [krutrim-ai-labs/Krutrim-2-instruct](https://huggingface.co/krutrim-ai-labs/Krutrim-2-instruct)
- Velona: [India’s Own AI Models in 2026: Which You Can Actually Use Today](https://velona.in/blog/indian-ai-models-2026-which-you-can-use) (secondary summary of model cards and later product reporting)
- IT Labs India: [Indian Language AI: Models, Speech, OCR and Costs](https://www.it-labs.in/research/indian-languages/) (secondary summary including Indi-RomCoM tables)
