---
layout: post
title: "AI in Archaeology: A Sealed Herculaneum Scroll Read End to End, Nazca Geoglyphs Nearly Doubled, Robot Puzzlers, and the Experts' Warnings"
date: 2026-10-29 00:04:30 +0100
slug: ai-in-archaeology
tags: [AI, archaeology, cultural heritage, Vesuvius Challenge, Herculaneum scrolls, Google DeepMind, Aeneas, Ithaca, Dead Sea Scrolls, cuneiform, Linear A, Maya glyphs, oracle bones, Nazca, LiDAR, Amazon, looting, machine learning, digital humanities]
image: /assets/img/2026-10-29-ai-in-archaeology.jpg
image_alt: "A broken clay tablet covered in rows of wedge-shaped cuneiform signs, made of several joined fragments, photographed against a plain light-grey background"
image_credit: "Photo: The Metropolitan Museum of Art, “Cuneiform tablet: commentary on Enuma Anu Enlil, tablet 5” (ca. late 1st millennium B.C.), CC0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Cuneiform_tablet-_commentary_on_Enuma_Anu_Enlil,_tablet_5_MET_DP-442-001.jpg (resized)"
image_license: "CC0 1.0 (Public Domain Dedication)"
image_license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
image_description: "Museum photograph of a fragmentary Babylonian clay tablet in the Metropolitan Museum of Art, New York. The reddish-brown tablet is broken and has been pieced together from several fragments; a crack runs vertically through it and a small separate piece sits at the lower left. Its surface is covered with dense horizontal lines of wedge-shaped cuneiform signs. The text is a commentary on tablet 5 of Enuma Anu Enlil, a Babylonian series of celestial omens, dated to around the late first millennium BC. The image stands for the kind of broken, partly readable written evidence that AI tools now help archaeologists and philologists match, read and date."
---

Archaeology is a science of fragments: burnt scrolls, broken tablets, worn inscriptions, ruins hidden under forest or sand. In the past two years, artificial intelligence (AI) has started to help with all of these. In June 2026, a team read a carbonised Herculaneum scroll from end to end without ever opening it. Google DeepMind's Aeneas helps historians restore and date Latin inscriptions. AI-assisted surveys have almost doubled the number of known figurative Nazca geoglyphs. At the same time, archaeologists are warning loudly about invented "readings", biased data and over-confident chatbots.

This post explains, in plain words, where AI really helps archaeology today, who is doing the work, what has actually been found, and where experts say the limits are.

**How we checked:** we read the original papers and project pages where possible: Nature, PNAS, PLOS One, npj Heritage Science, Internet Archaeology, arXiv and Microsoft Research, plus press releases from Yamagata University, the University of Groningen, LMU Munich, the University of Kentucky, the University of Bonn, NYU, Khalifa University and the Vesuvius Challenge itself. Some items come only from news reports or press releases. We say so where that is the case. We did not test any of the tools ourselves. We did not use X or Reddit for this post.

**Key terms:**

- **Machine learning / neural network:** software that learns patterns from many examples instead of following hand-written rules. A neural network is the most common type.
- **Training data:** the examples a model learns from, such as photos of known pottery types or already-read inscriptions. The model can only be as good as these examples.
- **Generative model:** a model that produces new output, such as missing letters, an image or a sentence. It can also produce convincing mistakes.
- **Hallucination:** a confident but false output from an AI model, for example an invented translation or source.
- **LiDAR:** laser scanning from an aircraft or drone. Some laser pulses pass through gaps in the leaves, so the ground surface under a forest can be mapped.
- **Ground-penetrating radar (GPR):** a device that sends radio pulses into the ground and records echoes from buried walls or pits.
- **Synchrotron / micro-CT:** a very powerful X-ray source (a particle accelerator) used to make extremely detailed 3D scans of small objects, such as rolled scrolls.
- **Epigraphy / papyrology / palaeography:** the study of inscriptions, of papyri, and of historical handwriting.
- **Refitting:** putting broken fragments of an object back together.
- **Human in the loop:** the AI makes suggestions; experts check, correct and decide.

## 1. Reading the unreadable: ancient texts

### The Herculaneum scrolls: a whole scroll read without opening it

When Mount Vesuvius erupted in AD 79, it buried a library in a villa at Herculaneum. The papyrus scrolls survived, but they were carbonised into fragile black lumps. Opening one by hand usually destroys it.

**How the AI works:** the scrolls are scanned with very high-resolution X-rays at a synchrotron, giving a 3D image made of billions of tiny cubes. Software then finds the thin, tightly wound papyrus sheet inside the scan and digitally "unrolls" and flattens it. Because the ink is carbon on carbonised papyrus, it is almost invisible in the X-ray data. Neural networks are therefore trained on loose fragments where the ink can be photographed, and learn which tiny 3D textures in the scan mean "ink". The project stresses that this model is not a text-reading program: it is never shown Greek words, dictionaries or translations, so it cannot "guess" plausible text. Human papyrologists then read and check every result.

**What happened:** on **June 25, 2026**, the Vesuvius Challenge announced that it had virtually unwrapped and read **PHerc. 1667** (known in the community as "Scroll 4") from end to end, the first time this has been done for a rolled Herculaneum papyrus. The surviving core, about 1.4 metres of papyrus, holds about twenty columns of Greek. The text is an ethical treatise that the team places in a Stoic context, partly because the last surviving column names Aristocreon, nephew and pupil of the Stoic philosopher Chrysippus. One recovered line reads: "…we will inquire into something, but we will not grasp it, if in some way we depart from ourselves and from our own nature…"

In the same announcement, the team reported that higher-resolution scans of a second scroll (PHerc. Paris. 4) now show the ink directly in the 3D data, and that this matches the 2023 Grand Prize reading letter for letter. That is an important independent check that the earlier AI-based reading was real. In a third scroll, PHerc. 139, they read the title: Philodemus, *On Gods*, Book 8. A University of Kentucky press release adds that more than 70 columns of text were recovered from PHerc. 172 at Oxford's Bodleian Library, and names a newly identified book, *On Vices*, Book 1. Scans and code are openly available.

The work goes on. On **October 8, 2026**, the Challenge paid a $50,000 "First Letters" prize to Erwin Nieuwlaar for the first readable text in another sealed scroll, PHerc. 343, which most of the project's papyrologists read as "everything that happens/is generated". An "open problems" update of **October 14, 2026** is frank about the limits: the process is still semi-automated, people must correct surface tracing by hand, and in some scrolls the models do not yet find convincing ink. The team says it cannot always tell "no ink" apart from "ink we can't recover yet". A $1 million Grand Prize is aimed at reading scrolls reliably at scale by **June 2027**.

Original articles: [Vesuvius Challenge: We read an entire scroll](https://scrollprize.org/firstscroll) · [arXiv preprint: Complete virtual unwrapping and reading of a rolled Herculaneum papyrus](https://arxiv.org/abs/2606.29085) · [University of Kentucky: The day the Herculaneum scrolls began speaking again](https://uknow.uky.edu/research/day-herculaneum-scrolls-began-speaking-again) · [Vesuvius Challenge: First Letters Prize for PHerc. 343](https://scrollprize.substack.com/p/50k-first-letters-prize-awarded-for) · [Vesuvius Challenge: Open problems (Oct 14, 2026)](https://scrollprize.org/2026_open_problems) · [CNN: Papyrus scroll deciphered with help of AI](https://www.cnn.com/2026/06/26/science/papyrus-scroll-vesuvius-ai-scli-intl)

### Ithaca and Aeneas: AI as a research partner for Greek and Latin inscriptions

Thousands of Greek and Latin inscriptions on stone are damaged. Historians must guess missing letters, work out where a text comes from and date it, usually by comparing it with similar texts ("parallels").

**How the AI works:** Google DeepMind and university partners trained models on large databases of already-studied inscriptions. The model learns typical wording, formulas and spelling, and then suggests missing letters, a likely region and a likely date. Aeneas also looks at a photo of the stone, and it searches for parallel texts, giving historians a ranked list of similar inscriptions to check.

**Results:**

- **Ithaca** (Nature, March 2022) works on ancient Greek inscriptions. Alone it restored damaged text with 62% accuracy. Historians improved from 25% to 72% accuracy when they worked with it. It placed inscriptions in the right region 71% of the time and dated them to within 30 years of the expert ranges.
- **Aeneas** (Nature, **July 23, 2025**) works on Latin. It was trained on the "Latin Epigraphic Dataset" of more than 176,000 inscriptions, built from three existing databases. It is the first such model that can fill gaps when the number of missing letters is unknown. It named the correct Roman province 72% of the time and dated texts on average within about 13 years of the expert ranges. In a study with historians, the parallels it found were useful starting points in 90% of cases. The best results came when historians and the AI worked together. The team applied it to the famous *Res Gestae Divi Augusti*, the emperor Augustus's account of his own deeds.

The authors present both tools as aids for experts, not replacements. DeepMind says Aeneas could be adapted to other ancient languages and to media such as papyri and coins.

Original articles: [Nature: Contextualizing ancient texts with generative neural networks (Aeneas)](https://www.nature.com/articles/s41586-025-09292-5) · [Google DeepMind: Aeneas](https://deepmind.google/blog/aeneas-transforms-how-historians-connect-the-past/) · [Nature News: Meet Aeneas](https://www.nature.com/articles/d41586-025-02335-x) · [Nature: Restoring and attributing ancient texts using deep neural networks (Ithaca)](https://www.nature.com/articles/s41586-022-04448-z)

### Dead Sea Scrolls: AI handwriting analysis plus radiocarbon dates

Very few Dead Sea Scrolls carry a date. Scholars have long dated them by handwriting style, which is partly subjective.

**How the AI works:** a team led by Mladen Popović (University of Groningen) radiocarbon-dated samples from 30 manuscripts, with a new cleaning step to remove modern oils. They then trained a model called **Enoch** on 24 of these dated samples. Enoch measures the shapes of ink strokes and letters and learns how handwriting changed over time. It then estimates dates for undated scrolls.

**Results (PLOS One, June 4, 2025):** Enoch matched the radiocarbon-based dates with an average error of about 28–31 years. For 135 undated scrolls, its estimates were judged realistic in 79% of cases by palaeographers afterwards. Many scrolls turned out to be older than traditionally thought. The university says two biblical fragments may date from around the time of their presumed authors.

Original articles: [PLOS One: Dating ancient manuscripts using radiocarbon and AI-based writing style analysis](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0323185) · [University of Groningen: Dead Sea Scrolls older than previously thought](https://www.rug.nl/about-ug/latest-news/news/archief2025/nieuwsberichten/dead-sea-scrolls-older-than-previously-thought?lang=en)

### Cuneiform tablets: matching fragments works, "machine translation" is far from solved

Hundreds of thousands of clay tablets in cuneiform script lie in museums, many broken and unread.

**What works:** at LMU Munich, Assyriologist Enrique Jiménez and his team run the **Electronic Babylonian Literature** project and its "Fragmentarium". The system compares the text on digitised fragments with known literary texts, so that scattered pieces of the same work can be found. In 2021, LMU reported that this partly automated matching had assigned ten new fragments to the *Epic of Gilgamesh*. The New York Times reported in August 2024 that the platform had helped identify far more joins since 2018; we did not check those totals against a primary source.

**What is hard:** in 2023, a Tel Aviv team published an AI system in PNAS Nexus that translates Akkadian into English. A June 2026 review by the University of Hamburg's Centre for the Study of Manuscript Cultures points out the limits: the model was trained mainly on fairly formulaic Assyrian royal and administrative texts (about 8,000 texts), it works from experts' transcriptions rather than photos, and its quality scores remain far from a real translation. Other tools, such as a 3D sign-recognition project for the Hilprecht collection in Jena and the Hittite "Palaeographicum" tool, help experts sort and join fragments. The author's conclusion: AI is a significant support, but "we are still far from machine decipherment of texts".

Original articles: [LMU Munich: Reconstructing masterpieces of ancient Near Eastern literature using AI](https://www.lmu.de/en/newsroom/news-overview/news/reconstructing-masterpieces-of-ancient-near-eastern-literature-using-artificial-intelligence-99fd2c4c.html) · [New York Times: Piecing together an ancient epic (Aug 12, 2024)](https://www.nytimes.com/2024/08/12/books/booksupdate/ai-ancient-tablets-gilgamesh.html) · [PNAS Nexus: Translating Akkadian to English with neural machine translation](https://academic.oup.com/pnasnexus/article/2/5/pgad096/7147349) · [University of Hamburg (CSMC): Can AI decipher cuneiform tablets?](https://www.csmc.uni-hamburg.de/publications/mesopotamia/2026-06-14.html)

### Linear A: a decipherment claim, not a decipherment

Linear A, the Bronze Age script of Minoan Crete, is still unread. According to Greek Reporter (**July 30, 2026**), Tom Di Mino, an AI engineer outside academia, claimed in June 2026 that he had deciphered part of it. He links a key verb to a Semitic root shared with Hebrew and Akkadian. He reportedly used Python scripts written with the AI coding tool Claude Code to test his idea against digital Linear A corpora, and proposes sound values for 40 signs and a list of 408 words. Greek Reporter says scholars at Rutgers and Cambridge are examining the work.

**Status: unverified.** We found the claim only in secondary reports, not in a peer-reviewed paper. A Semitic link was already proposed in 1957 and was not widely accepted. The whole Linear A record is only about 7,500 characters, which leaves a lot of room for competing readings. Here, AI was used as a programming helper. It did not decipher anything by itself.

Original article: [Greek Reporter: AI engineer claims to have deciphered Linear A](https://greekreporter.com/2026/07/30/ai-engineer-claim-decipher-linear-a/)

### Maya glyphs and Chinese oracle bones: candidate readings for experts

- **Maya:** in **December 2025**, the Mexican-Canadian engineer Benjamín González showed an early prototype called **Sáastun** at the INAH Yucatán Ichkaantijoo Symposium in Mérida. It finds glyphs in an image, identifies each sign (trained on more than 70,000 expert drawings), puts them in reading order and suggests an English translation with the help of a language model. González openly said that it can "make things up", struggles with photos of worn stone, and does not fully understand Maya grammar. It suggests a reading; it does not give a final answer. *Source: Yucatán Magazine report; no peer-reviewed paper found.*
- **Oracle bones:** about 2,500 characters on Shang-dynasty oracle bones (around 3,000 years old) are still undeciphered, according to a Beijing University of Technology team. In npj Heritage Science (**April 10, 2026**), the team treated decipherment as image translation: two generative networks learned from 1,160 pairs of oracle-bone signs and modern Chinese characters, then produced candidate modern forms for 150 undeciphered signs. Experts redrew and checked these candidates. One example is a proposed reading as 窟 ("cave"). Five experts judged human+AI proposals better than AI-only output. These are conjectures for discussion, not accepted decipherments.

Original articles: [Yucatán Magazine: Sáastun AI](https://yucatanmagazine.com/saastun-ai-deciphering-maya-glyphs/) · [npj Heritage Science: Human–computer collaborative approach to the decipherment of oracle bone inscriptions](https://www.nature.com/articles/s40494-026-02509-4)

## 2. Finding sites: from the air, from space and underground

### Nazca: AI points, archaeologists walk

The Nazca Pampa in Peru holds huge geoglyphs, plus many small, faint "relief-type" figures that are very hard to see.

**How the AI works:** IBM Research and the Yamagata University Institute of Nasca (led by Masato Sakai) took a model pretrained on ordinary photos and fine-tuned it on just a few hundred known geoglyphs. It scanned aerial images with 10 cm resolution and produced a probability map: "a geoglyph is likely here". Researchers then checked suggestions on screen and on foot.

**Results:** in PNAS (**September 2024**), the team reported **303 new figurative geoglyphs** found in six months of fieldwork (September 2022 to February 2023), nearly doubling the known number. The AI produced 1,309 promising candidates; on average, researchers had to screen 36 AI suggestions to find one good candidate. The new data also suggest a purpose: small relief figures (mostly people and domesticated animals) lie near footpaths and were probably seen by individuals or small groups, while the giant line figures (mostly wild animals) lie along ritual line networks. On **July 28, 2025**, Yamagata announced **248 more** geoglyphs from AI-assisted surveys in 2023–2024, 160 of them figurative, bringing the total of known figurative geoglyphs to 893. More than 500 AI candidates still have not been checked in the field.

Original articles: [PNAS: AI-accelerated Nazca survey nearly doubles the number of known figurative geoglyphs](https://www.pnas.org/doi/10.1073/pnas.2407652121) · [Yamagata University press release (Sep 24, 2024)](https://www.yamagata-u.ac.jp/en/information/info/20240924/) · [Yamagata University press release, in Japanese (Jul 28, 2025)](https://www.yamagata-u.ac.jp/jp/information/press/20250728/1/)

### The Amazon: laser scans reveal a forest civilisation

In a Science paper of 2023, a team led by Vinicius Peripato used LiDAR data and statistical modelling to predict where earthworks are likely to be found. They estimated that more than 10,000 pre-Columbian earthworks are still hidden across Amazonia.

On **July 29, 2026**, a Nature paper led by Martti Pärssinen (Instituto Iberoamericano de Finlandia, University of Helsinki) went further for one region. Airborne LiDAR along 4,430 km of flight lines over Acre and Amazonas in Brazil found **432 earthworks, only 36 of them known before**. Laser scanning revealed about five times more earthworks than satellite photos in the same cleared areas. Extrapolating, the authors estimate **24,000–30,000 earthworks** in this region alone, and **1.25–3 million people** around AD 100–300 for the geoglyph-building "Aquiry" culture.

**Important nuance:** in this study, people found the earthworks by examining the LiDAR terrain models; the paper says no custom code was developed. It shows how much remote sensing is changing archaeology, but it is not an example of AI detection. The authors also do not publish the exact locations of sites in Indigenous territories.

Original articles: [Nature: Over 20,000 precolonial earthworks in the Southwest Amazonia](https://www.nature.com/articles/s41586-026-10835-7) · [Science: More than 10,000 pre-Columbian earthworks are still hidden throughout Amazonia](https://www.science.org/doi/10.1126/science.ade2541)

### Under the sand: satellite radar, AI and ground radar in the UAE

On **October 23, 2026**, Khalifa University (Abu Dhabi) reported a study on Siniyah Island in Umm Al Quwain, home to a sixth-century Christian monastery. The team, led by Diana Francis, used machine learning on satellite radar images and environmental data to map where buried remains are likely to be. They then checked priority zones with ground-penetrating radar. The study found **seven previously unknown areas** of interest and wall-like, rectangular structures underground, suggesting the island once had more people than known sites indicate. It was published in the International Journal of Applied Earth Observation and Geoinformation. More generally, research groups are training neural networks to spot the typical echo patterns of buried objects in GPR data, but much of that work is still at the testing stage.

Original article: [Khalifa University: Satellite radar, AI and ground surveys reveal hidden archaeological features on Siniyah Island](https://www.ku.ac.ae/satellite-radar-ai-and-ground-surveys-reveal-hidden-archaeological-features-on-siniyah-island)

## 3. Analysing finds: pottery, fragments and DNA

### Pottery: faster paperwork, harder classification

Pottery sherds are the most common find on many sites. AI can help in two ways:

- **Documentation:** **PyPottery** (arXiv, **October 1, 2026**, by Lorenzo Cardarelli) is an open-source set of tools that scans drawing sheets, reads handwriting, turns pencil drawings into inked publication drawings, vectorises them and lays out plates. In a test with 240 pottery drawings from the Terramara di Montale in Italy, users reported a median speed-up of about 40 times. That figure is perceived speed from a usability study, not a measured lab benchmark.
- **Classification:** the EU-funded ArchAIDE app (University of Pisa and partners) already identifies sherd types from a photo by shape or decoration and returns ranked suggestions. But an Internet Archaeology article (**October 1, 2026**) from the Arch-I-Scan project explains why this remains hard: sherds are incomplete, their shapes vary hugely, and labelled training examples are scarce. Standard neural networks can be unstable on such data, so the authors work on synthetic training images and on maths that makes models more reliable and verifiable.

Original articles: [arXiv: PyPottery](https://arxiv.org/abs/2610.02072) · [Internet Archaeology: The power and limitations of data-driven AI](https://doi.org/10.11141/ia.74.2) · [CORDIS: ArchAIDE results](https://cordis.europa.eu/article/id/411445-tool-that-is-an-archaeologist-s-dream)

### Jigsaw puzzles without the picture on the box: fragment matching and 3D reconstruction

- **Pompeii frescoes (RePAIR):** the EU project RePAIR, coordinated by Ca' Foscari University of Venice, ended in late 2025. It combined 3D scanning, AI "jigsaw solvers" and a robot with two arms and soft grippers that place fragments where the AI suggests. It was tested at the Archaeological Park of Pompeii on frescoes shattered by the eruption, by Second World War bombing and by a building collapse in 2010. The University of Bonn (**December 3, 2025**) describes the robot reassembling fragments; according to a news summary we could not fully check, the main tests used replicas of fragments rather than the originals.
- **Stone tools, pottery and bones (NYU):** on **October 14, 2026**, Schmidt Sciences announced $10 million for 19 AI-and-humanities projects. One is "Fragmented Legacy", led by Chen Feng and Jing Zhang at NYU with archaeologists from NYU and the University of Tübingen. It will build a collection of at least 100,000 real and simulated broken objects and train AI to find where fragments belong and to propose complete shapes. NYU says that refitting succeeds for only about 1% of ceramics and 4–26% of bones by hand. Data, models and benchmarks will be released openly.

Original articles: [University of Bonn: Robot unjumbles ancient jigsaw](https://www.uni-bonn.de/en/news/215-2025) · [NYU: Researchers are building AI to piece together broken archaeological finds](https://www.nyu.edu/about/news-publications/news/2026/october/nyu-researchers-are-building-ai-to-piece-together-broken-archaeo.html) · [Schmidt Sciences: HAVI 2026 awards](https://www.schmidtsciences.org/havi-2026-announcement/)

### DNA and isotopes: AI is not the magic ingredient (yet)

Ancient DNA and isotope analysis (chemical traces in bones and teeth that show diet and origin) have transformed archaeology. But most of the big recent results come from laboratory science and statistics, not from AI. A **June 2026** study in *Biology Methods and Protocols* tested whether machine learning could date ancient DNA samples from their chemical damage patterns. According to the abstract, once lab and environmental effects were accounted for, there was no reliable signal. This is a useful negative result. *We read only the abstract and search summaries; the full article did not load.*

Original article: [Biology Methods and Protocols: Assessing the feasibility of machine learning for ancient DNA age prediction](https://academic.oup.com/biomethods/article/11/1/bpag028/8702724)

## 4. Protecting heritage: looting and damage seen from space

Looters dig pits that are visible from space. Wars and disasters destroy sites faster than experts can visit them.

**How the AI works:** the model compares monthly satellite images of known sites and learns what new looting pits look like, then flags sites where the pattern appears.

**Results:** a Microsoft Research paper (**February 2026**, WACV 2026 workshop), written with the heritage scanning company Iconem and others, used Planet satellite mosaics (4.7 m per pixel) of **1,943 archaeological sites in Afghanistan** (898 looted, 1,045 preserved) from 2016 to 2023. A standard image-recognition network, combined with masks marking each site's outline, reached an F1 score of 0.926 (a measure where 1.0 is perfect). The code is public on GitHub. In a related effort, the Geneva-based heritage foundation ALIPH lists a 2026 emergency grant of $250,000 for **HeritageWatch.AI**, a joint initiative with Iconem, Microsoft and Planet Labs. It is meant to provide AI-based rapid damage assessments after crises and disasters, reports on climate threats such as desertification in the Sahel and sea-level rise, and a secure online data platform. Satellite monitoring is also used by the UN: UNESCO and UNITAR (the UN training and research institute, home of the satellite centre UNOSAT) set up a platform to monitor cultural heritage sites in Ukraine. Satellites have limits, though: they see roofs and ground surfaces, not what happens inside buildings.

Original articles: [Microsoft Research: Satellite-based detection of looted archaeological sites](https://www.microsoft.com/en-us/research/publication/satellite-based-detection-of-looted-archaeological-sites-using-machine-learning/) · [GitHub: microsoft/looted_site_detection](https://github.com/microsoft/looted_site_detection) · [ALIPH: HeritageWatch.AI](https://www.aliph-foundation.org/en/projects/heritagewatchai-detecting-and-alerting-on-the-destruction-of-cultural-heritage-using-artificial-intelligence) · [UNESCO: Monitoring cultural heritage in Ukraine](https://www.unesco.org/en/culture-emergencies/heritage-emergency-fund/establishment-unitar-unesco-platform-monitoring-cultural-heritage-ukraine)

## 5. Limits, risks and debates: what experts criticise

The strongest projects above have something in common: AI makes suggestions, and humans test them against physical evidence. Critics warn about what happens when that discipline is missing.

- **Invented readings.** Generative models can produce fluent, plausible text that is wrong. Sáastun's developer admits his prototype can "make things up". The Vesuvius team deliberately trains its ink detector without any Greek text so that it cannot invent words, and every reading goes to papyrologists. Oracle-bone and Linear A "decipherments" remain proposals until experts accept them.
- **Chatbots and the public image of the past.** In a 2026 essay in Internet Archaeology, Eric Kansa, technology director of the open data service Open Context, warns that large language models generate "plausible, but wrong" answers. He notes that AI search summaries of the Sphinx's age present fringe dates as if they were a serious debate, and that archaeology is especially exposed to pseudo-archaeology such as "ancient aliens". He also criticises the US Advisory Council on Historic Preservation for planning, according to its February 2026 meeting papers, to use Google AI tools to speed up heritage reviews, without discussing transparency or accountability.
- **Data access and costs.** The same essay reports that AI web scrapers are overloading open-access archives. A 2025 survey cited there found disrupted service at 70% of academic repositories. Kansa warns that cheap AI services may become expensive later, and recommends small open models that can run locally.
- **Bias and small data.** Models learn from what has already been studied. Pottery classification struggles because labelled examples are scarce. The Akkadian translator learned mostly from royal and administrative texts. Sites that were never surveyed, or cultures with few digitised records, are under-represented.
- **Indigenous rights and site security.** Publishing precise maps can help looters. The Amazon LiDAR study withholds locations in Indigenous territories. Kansa points to the CARE principles for Indigenous data governance, under which communities should control how their knowledge is used, including in AI training.
- **Overselling.** Some headlines say "AI discovered" when the work was mainly done by people. The Amazon earthworks were spotted by people looking at LiDAR scans. The Nazca AI produced candidates, but people had to screen 36 suggestions per good candidate and spent 1,440 hours on foot. Machine learning also could not date ancient DNA from damage patterns alone.

Original articles: [Internet Archaeology: Kansa, Archaeology in the AI Era](https://intarch.ac.uk/journal/issue71/15/full-text.html) · [Internet Archaeology: Debating AI in Archaeology](https://doi.org/10.11141/ia.67.8) · [University of Hamburg (CSMC): Can AI decipher cuneiform tablets?](https://www.csmc.uni-hamburg.de/publications/mesopotamia/2026-06-14.html)

## Timeline: key milestones

| Date | Milestone | Source |
|---|---|---|
| Mar 2022 | DeepMind's Ithaca restores, places and dates Greek inscriptions (Nature) | Nature |
| May 2023 | Neural machine translation for Akkadian (PNAS Nexus) | PNAS Nexus |
| Oct 2023 | Science study: more than 10,000 Amazon earthworks still hidden | Science |
| Feb 2024 | Vesuvius Challenge 2023 Grand Prize: first passages read inside a sealed scroll | Vesuvius Challenge |
| Sep 2024 | AI-assisted survey: 303 new Nazca figurative geoglyphs (PNAS) | PNAS, Yamagata/IBM |
| Jun 4, 2025 | Enoch model re-dates Dead Sea Scrolls (PLOS One) | University of Groningen |
| Jul 23, 2025 | DeepMind's Aeneas for Latin inscriptions (Nature) | Nature, DeepMind |
| Jul 28, 2025 | 248 more Nazca geoglyphs; 893 figurative geoglyphs known | Yamagata University |
| Dec 2025 | RePAIR robot fresco project ends; Sáastun Maya prototype shown | Uni Bonn; Yucatán Magazine |
| Feb 2026 | Satellite AI detects looted sites in Afghanistan (F1 0.926) | Microsoft Research |
| Apr 10, 2026 | GAN-based candidate readings for 150 oracle-bone signs | npj Heritage Science |
| Jun 25, 2026 | PHerc. 1667: first Herculaneum scroll read end to end | Vesuvius Challenge |
| Jun–Jul 2026 | Unverified Linear A decipherment claim | Greek Reporter (secondary) |
| Jul 29, 2026 | LiDAR: estimated 24,000–30,000 earthworks in SW Amazonia | Nature |
| Oct 8, 2026 | First letters read in sealed scroll PHerc. 343 | Vesuvius Challenge |
| Oct 14, 2026 | $10M Schmidt Sciences awards incl. NYU fragment-refitting AI | Schmidt Sciences, NYU |
| Oct 23, 2026 | Satellite AI + GPR find seven new areas on Siniyah Island, UAE | Khalifa University |

## What we could not verify

- The **Linear A** decipherment claim comes only from secondary reports (Greek Reporter). We found no peer-reviewed publication.
- **Sáastun** (Maya glyphs) is described only in a magazine report of a conference talk.
- The total number of cuneiform fragments matched by LMU's Fragmentarium since 2018 comes from a New York Times report that we did not check against a primary source.
- For **RePAIR**, the claim that main tests used replica fragments comes from a search summary of the project's final press release, which we could not open.
- The **ancient DNA dating** study was read only as an abstract or summary.
- Several 2026 conference papers on AI translation of Akkadian and on Maya glyph retrieval appeared in search results, but we did not read them and do not report their numbers.

## Key takeaways

- **The headline result:** in June 2026, a sealed, carbonised Herculaneum scroll was read end to end for the first time, using X-ray scans plus AI ink detection, with every reading checked by papyrologists. More sealed scrolls are now giving up their first letters.
- **AI as an assistant, not an oracle:** Ithaca, Aeneas, Enoch and the oracle-bone study all show the same pattern. Experts plus AI do better than either alone.
- **Finding sites faster:** AI helped nearly double the known Nazca figurative geoglyphs. LiDAR, with or without AI, is redrawing the map of the ancient Amazon.
- **The puzzle problem:** fragment matching for tablets, frescoes, pottery and bones is a fast-growing field, with new open-source projects funded in October 2026.
- **Heritage protection:** satellite AI can flag looted sites with high accuracy, and is being built into emergency monitoring.
- **Healthy scepticism:** treat "AI deciphered X" headlines with care. Ask who checked the result, whether it is peer-reviewed, and whether the AI could have invented it.

## Sources

- [Vesuvius Challenge: We read an entire scroll (Jun 25, 2026)](https://scrollprize.org/firstscroll)
- [arXiv: Complete virtual unwrapping and reading of a rolled Herculaneum papyrus](https://arxiv.org/abs/2606.29085)
- [University of Kentucky: The day the Herculaneum scrolls began speaking again](https://uknow.uky.edu/research/day-herculaneum-scrolls-began-speaking-again)
- [Vesuvius Challenge: $50K First Letters Prize for PHerc. 343 (Oct 8, 2026)](https://scrollprize.substack.com/p/50k-first-letters-prize-awarded-for)
- [Vesuvius Challenge: Open problems (updated Oct 14, 2026)](https://scrollprize.org/2026_open_problems)
- [CNN: Papyrus scroll burnt during Vesuvius eruption deciphered with help of AI](https://www.cnn.com/2026/06/26/science/papyrus-scroll-vesuvius-ai-scli-intl)
- [Nature: Contextualizing ancient texts with generative neural networks (Aeneas)](https://www.nature.com/articles/s41586-025-09292-5)
- [Google DeepMind: Aeneas transforms how historians connect the past](https://deepmind.google/blog/aeneas-transforms-how-historians-connect-the-past/)
- [Nature News: Meet Aeneas](https://www.nature.com/articles/d41586-025-02335-x)
- [Nature: Restoring and attributing ancient texts using deep neural networks (Ithaca)](https://www.nature.com/articles/s41586-022-04448-z)
- [PLOS One: Dating ancient manuscripts using radiocarbon and AI-based writing style analysis](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0323185)
- [University of Groningen: Dead Sea Scrolls older than previously thought](https://www.rug.nl/about-ug/latest-news/news/archief2025/nieuwsberichten/dead-sea-scrolls-older-than-previously-thought?lang=en)
- [LMU Munich: Reconstructing masterpieces of ancient Near Eastern literature using AI](https://www.lmu.de/en/newsroom/news-overview/news/reconstructing-masterpieces-of-ancient-near-eastern-literature-using-artificial-intelligence-99fd2c4c.html)
- [New York Times: Piecing together an ancient epic was slow work. Until A.I. got involved.](https://www.nytimes.com/2024/08/12/books/booksupdate/ai-ancient-tablets-gilgamesh.html)
- [PNAS Nexus: Translating Akkadian to English with neural machine translation](https://academic.oup.com/pnasnexus/article/2/5/pgad096/7147349)
- [University of Hamburg (CSMC): Can artificial intelligence decipher cuneiform tablets?](https://www.csmc.uni-hamburg.de/publications/mesopotamia/2026-06-14.html)
- [Greek Reporter: AI engineer claims to have deciphered Linear A](https://greekreporter.com/2026/07/30/ai-engineer-claim-decipher-linear-a/)
- [Yucatán Magazine: Sáastun AI](https://yucatanmagazine.com/saastun-ai-deciphering-maya-glyphs/)
- [npj Heritage Science: Human–computer collaborative decipherment of oracle bone inscriptions](https://www.nature.com/articles/s40494-026-02509-4)
- [PNAS: AI-accelerated Nazca survey nearly doubles the number of known figurative geoglyphs](https://www.pnas.org/doi/10.1073/pnas.2407652121)
- [Yamagata University: Nazca press release (Sep 24, 2024)](https://www.yamagata-u.ac.jp/en/information/info/20240924/)
- [Yamagata University: 248 new geoglyphs, in Japanese (Jul 28, 2025)](https://www.yamagata-u.ac.jp/jp/information/press/20250728/1/)
- [Nature: Over 20,000 precolonial earthworks in the Southwest Amazonia](https://www.nature.com/articles/s41586-026-10835-7)
- [Science: More than 10,000 pre-Columbian earthworks are still hidden throughout Amazonia](https://www.science.org/doi/10.1126/science.ade2541)
- [Khalifa University: Siniyah Island study (Oct 23, 2026)](https://www.ku.ac.ae/satellite-radar-ai-and-ground-surveys-reveal-hidden-archaeological-features-on-siniyah-island)
- [arXiv: PyPottery](https://arxiv.org/abs/2610.02072)
- [Internet Archaeology: The power and limitations of data-driven AI](https://doi.org/10.11141/ia.74.2)
- [CORDIS: ArchAIDE – Tool that is an archaeologist's dream](https://cordis.europa.eu/article/id/411445-tool-that-is-an-archaeologist-s-dream)
- [University of Bonn: Robot unjumbles ancient jigsaw (Dec 3, 2025)](https://www.uni-bonn.de/en/news/215-2025)
- [NYU: Researchers are building AI to piece together broken archaeological finds](https://www.nyu.edu/about/news-publications/news/2026/october/nyu-researchers-are-building-ai-to-piece-together-broken-archaeo.html)
- [Schmidt Sciences: $10 million for AI and humanities (Oct 14, 2026)](https://www.schmidtsciences.org/havi-2026-announcement/)
- [Biology Methods and Protocols: Machine learning for ancient DNA age prediction](https://academic.oup.com/biomethods/article/11/1/bpag028/8702724)
- [Microsoft Research: Satellite-based detection of looted archaeological sites using machine learning](https://www.microsoft.com/en-us/research/publication/satellite-based-detection-of-looted-archaeological-sites-using-machine-learning/)
- [GitHub: microsoft/looted_site_detection](https://github.com/microsoft/looted_site_detection)
- [ALIPH: HeritageWatch.AI](https://www.aliph-foundation.org/en/projects/heritagewatchai-detecting-and-alerting-on-the-destruction-of-cultural-heritage-using-artificial-intelligence)
- [UNESCO: UNITAR–UNESCO platform for monitoring cultural heritage in Ukraine](https://www.unesco.org/en/culture-emergencies/heritage-emergency-fund/establishment-unitar-unesco-platform-monitoring-cultural-heritage-ukraine)
- [Internet Archaeology: Kansa, Archaeology in the AI Era (2026)](https://intarch.ac.uk/journal/issue71/15/full-text.html)
- [Internet Archaeology: Debating AI in Archaeology (2024)](https://doi.org/10.11141/ia.67.8)
- [Wikimedia Commons: Cuneiform tablet – commentary on Enuma Anu Enlil, tablet 5 (image)](https://commons.wikimedia.org/wiki/File:Cuneiform_tablet-_commentary_on_Enuma_Anu_Enlil,_tablet_5_MET_DP-442-001.jpg)
