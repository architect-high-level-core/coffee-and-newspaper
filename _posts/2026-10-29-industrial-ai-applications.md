---
layout: post
title: "From the Back Office to the Shop Floor: How AI Is Really Used in Heavy Industry, Chip Fabs, Car Plants, Aircraft Production and Logistics"
date: 2026-10-29 00:04:00 +0100
slug: industrial-ai-applications
tags: [AI, industrial AI, physical AI, manufacturing, heavy industry, steel, cement, mining, chemicals, semiconductors, automotive, aerospace, MRO, logistics, warehouses, predictive maintenance, computer vision, digital twins, humanoid robots]
image: /assets/img/2026-10-29-industrial-ai-applications.jpg
image_alt: "Orange industrial robot arms spot-welding a bare silver car body on an automated assembly line inside a bright factory hall"
image_credit: "Photo: BMW Werk Leipzig, “BMW Leipzig MEDIA 050719 Download Karosseriebau max”, CC BY-SA 2.0 DE, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:BMW_Leipzig_MEDIA_050719_Download_Karosseriebau_max.jpg (resized)"
image_license: "CC BY-SA 2.0 DE"
image_license_url: "https://creativecommons.org/licenses/by-sa/2.0/de/deed.en"
image_description: "Photo from the body shop of the BMW plant in Leipzig, Germany, taken in July 2005. In the foreground stands the bare, unpainted metal shell of a car body on a conveyor fixture. Around it, a dozen orange six-axis industrial robots lean in with welding guns and grippers; more robots line the hall in the background behind safety fences. The image stands for the factory floor in general, where AI is now being added on top of classic automation. It does not show any of the specific AI systems described in this article."
---

For the past few years, most talk about artificial intelligence in companies has been about the office: chatbots that answer customer emails, assistants that write code, tools that summarise contracts or fill in forms. That wave is still rolling. But a second wave is now clearly visible, and it happens somewhere else: on the factory floor, in the furnace control room, in the chip cleanroom, in the engine overhaul shop and in the warehouse. Here AI does not write text. It looks at camera images, listens to machines, predicts when a pump will fail, adjusts a valve, plans which wafer lot goes into which tool next, or tells a robot where to drive.

This article looks only at that **direct operational use** — AI running in daily production and operations — not at research labs, product design or self-driving-car development. We cover five sectors: heavy industry (steel, mining, cement, chemicals), the semiconductor industry, car manufacturing, aircraft manufacturing and maintenance, and logistics. For each we describe real deployments with company names, explain in plain words what the AI does, give results where they were published, and say what is still hard.

**How we checked:** we relied mainly on trade and specialist journals: *EE Times*, *Semiconductor Engineering*, *SemiWiki*, *IndustryWeek*, *WardsAuto*, *Automotive News* (only via its own teasers and a summary in *Ford Authority*, because the articles are paywalled), *Automotive Manufacturing Solutions*, *ASSEMBLY*, *Aviation Week*, *Aerospace Global News*, *IEEE Spectrum*, *Control Global*, *Steel Times International*, *Mining Technology* and its sister magazine *Mine*, *International Railway Journal*, *Modern Materials Handling*, *Supply Chain Dive* and *Chemical & Engineering News*. Where only a company or a technology supplier reports a figure, we say so ("company figure" or "vendor claim"). Company press releases were used for basic facts and dates. We did not visit any plant and could not check any figure independently. Several trade articles were behind paywalls; where we only saw the teaser, we say so.

**Key terms:**

- **Computer vision:** AI that analyses images or video, for example to spot a missing part or a scratch.
- **Predictive maintenance:** using sensor data (vibration, temperature, current, sound) to predict that a machine will fail before it actually does, so it can be repaired at a planned time.
- **Prescriptive maintenance:** one step further: the system also suggests *what* to do — which part, which technician, which time window.
- **Process control / closed loop:** "open loop" means the AI only recommends and a person acts; "closed loop" means the AI changes the setting itself, within limits.
- **Digital twin:** a live virtual copy of a machine, line or whole factory, fed with real data, used to test changes before making them for real.
- **Yield:** in chip making, the share of chips on a wafer that work. A few percentage points of yield are worth a lot of money.
- **Automatic defect classification (ADC):** software that sorts microscope or camera images of defects into types without a human looking at each one.
- **Borescope:** a thin camera probe pushed into an aircraft engine to look at turbine blades without taking the engine apart.
- **MRO:** maintenance, repair and overhaul — the aviation term for servicing aircraft and engines.
- **AI agent:** an AI system that does not just answer but carries out multi-step tasks, often using other software tools.
- **Humanoid robot:** a robot with a roughly human shape (two arms, often two legs), designed to work in spaces built for people.
- **Physical AI:** an industry term for AI that controls or guides machines in the real world, as opposed to AI that only produces text or images.

## 1. Why the shop floor is the next step

AI in IT and administration is relatively easy to deploy: the data is already digital, mistakes are usually cheap to fix, and nobody gets hurt if a chatbot writes a clumsy sentence. Operations are different. A furnace, a wafer fab or a jet engine produces huge amounts of sensor data, but that data is messy, spread over old systems, and full of gaps. Mistakes can cost millions or endanger people. That is why industrial AI has moved more slowly — and why the examples below are interesting: they show what has actually worked at scale, and what it took.

Three things have changed recently. First, sensors, cameras and computing at the "edge" (close to the machine) have become cheap. Second, companies have spent years building data platforms that link machine data with production and quality data. Third, newer AI methods — better vision models, models that learn from simulation, and language-model "agents" that can read maintenance logs — have made new use cases practical. A recurring theme in the trade press is that the hard part is rarely the AI model itself; it is getting reliable data, fitting the tool into daily routines, and earning the trust of operators.

## 2. Heavy industry: steel, mining, cement and chemicals

Heavy industry runs large, hot, energy-hungry processes around the clock. Small improvements in temperature control or uptime translate directly into lower fuel bills and lower CO₂ emissions. The typical AI jobs here are process optimisation (keeping a furnace or kiln at the ideal point), predictive maintenance, and — in mining — autonomous vehicles and trains.

### ENEOS Materials and Yokogawa: AI that has run a chemical column on its own for over four years

The most detailed public example of AI directly controlling a chemical plant comes from Japan. At ENEOS Materials' Yokkaichi plant, a distillation column purifies butadiene, a raw material for synthetic rubber. Operators had to adjust two valves roughly every 15 minutes to keep the liquid level in the tower stable while recovering as much waste heat as possible — a task that classic control loops had not solved well.

Together with automation supplier Yokogawa, the company trained a **reinforcement-learning** AI (a method in which software learns by trial and error) — not on the real plant, but on a simulator built from real plant data. Engineers then checked its behaviour. Next came about six months in which the AI only made recommendations and operators typed accepted values into the control system by hand. Only then was the AI allowed to act directly.

The results, as presented by ENEOS Materials at Yokogawa's YNOW2026 user conference and reported by *Control Global* (September 3, 2026): in a first test from January 17 to February 21, 2022, the AI controlled the column for 35 days (840 hours) without a manual takeover and without off-spec product. Over the following year it coped with seasonal temperature swings of about 40 °C and daily changes in feedstock, while cutting steam use and related CO₂ emissions by about 40% compared with manual control. It has now run in routine production for more than four years.

What makes this example useful is the safety design. The AI works inside rule-based limits; all existing alarms and interlocks stay active; operators can switch it off at any time. In the words of ENEOS's Yoshiro Sakura: "the AI model was never the only safety barrier." His three lessons: use AI only where conventional control still falls short, move step by step from simulation to human review to autonomy, and "never depend on AI alone."

Original article: [Control Global: How ENEOS put reinforcement learning in control of a chemical plant](https://www.controlglobal.com/show-coverage/ynow-a-yokogawa-users-conference/article/55402763/yokogawa-how-eneos-put-reinforcement-learning-in-control-of-a-chemical-plant)

### KG Steel: AI runs an annealing furnace most of the time

In steel finishing lines, coated steel sheet passes through an **annealing furnace** heated with natural gas. KG Steel in South Korea, working with industrial AI company Inergy, introduced AI "predictive control" on the furnace of its No. 3 galvanising line at the Dangjin plant in 2023. The AI predicts how conditions in the furnace will develop and adjusts the heating in advance, instead of reacting after the fact.

According to *The Herald Business* (October 14, 2026), the AI currently runs the furnace about 60% of the time. Over the past year, gas consumption fell by about 400,000 normal cubic metres, saving about 400 million won (about $298,000). Comparing AI operation with operator control, gas use per tonne was about 9.9% lower for hot-dip galvanised steel, 2.9% lower for galvannealed steel and 4.9% lower for aluminium-zinc-coated steel. The company now wants to raise the AI share above 80% and expects annual savings of about 700 million won. An upgrade cut the AI's calculation time from up to 28 seconds to about 2 seconds — a reminder that in process control, speed matters as much as accuracy. These are company figures reported by a newspaper; they were not independently audited.

Original article: [The Herald Business: KG Steel pushes to expand AI usage rate at annealing furnace to over 80%](https://biz.heraldcorp.com/article/10901996)

### Baosteel: a "large model" for a 40-year-old blast furnace

Blast furnaces are hard to control because nobody can see inside them. Baosteel (part of China Baowu) has applied an AI "large model" to its No. 1 blast furnace in Shanghai, a furnace of more than 4,000 cubic metres commissioned in 1985. The goal is to keep the hot metal at about 1,510 °C, plus or minus 10 degrees. According to a China Daily report republished by Shanghai's government information office (June 29, 2026), the model forecasts furnace temperature two hours ahead with more than 90% accuracy, up from just over 70% at the start of 2024, and has improved work efficiency by 20%. Baosteel describes it as the "world's first AI-powered smart blast furnace model", launched on April 3. These are the company's own claims; we found no independent evaluation. The article notes that blast furnace ironmaking makes up around 70% of steel production costs, which explains the interest.

Original article: [Touch Shanghai / China Daily: Blast furnace a testimony to Baosteel's smart AI use](https://touch.shio.gov.cn/jsp/jrsh_detail_en.jsp?id=20260629183724949)

### Steelmakers move AI onto the plant floor at scale — still mostly announcements

*Steel Times International* reported on June 22, 2026 that ArcelorMittal started a strategic collaboration with Amazon Web Services to bring cloud and AI "to the point of production" — predictive maintenance on furnaces and AI-driven energy optimisation across sites in 14 countries. ArcelorMittal's CIO called the plant floor "the next frontier of digital transformation for steel." No results have been published yet; for now this is an announcement.

Older reports in the same journal show how such systems work in practice. At NLMK's hot strip mill in La Louvière (Belgium), a machine-learning system from Samotics monitors motors by analysing their electrical current in the switch room — because, as an NLMK manager put it, "most of our machines operate in extremely high ambient temperatures, where most sensors will just burn up" (2021). At Austrian steelmaker Marienhütte, software from Smart Steel Technologies predicts steel temperature from the electric arc furnace to the caster, so that less "safety heat" is needed; the supplier claimed permanent energy and CO₂ savings but gave no figure (2021).

Original articles: [Steel Times International: ArcelorMittal collaborates with AWS](https://www.steeltimesint.com/news/arcelormittal-collaborates-with-aws-in-automation-deal) · [Steel Times International: NLMK expands AI for critical assets monitoring](https://www.steeltimesint.com/news/nlmk-expands-ai-for-critical-assets-monitoring) · [Steel Times International: Marienhütte implements AI solution](https://www.steeltimesint.com/news/marienhutte-implements-ai-solution-in-steel-production)

### Cement: Holcim and Heidelberg Materials

Cement kilns burn huge amounts of fuel, and the chemistry of the clinker they produce varies with the raw materials. **Holcim** describes three AI tools in its "Plants of Tomorrow" programme (company article, 2026). **M-Predict** links smart sensor data to predict failures of critical machines; Holcim says it is installed on more than 1,700 critical machines and has helped prevent more than 100 breakdowns. **Q-Predict** helps optimise cement recipes to lower the clinker share (clinker is the most CO₂-intensive ingredient); more than 7,000 formulations have been tested. **P-Predict** predicts cement properties in real time so that the clinker factor and fuel mix can be adjusted; Holcim wants it on 40 kilns by 2028. The group targets CHF 200 million in recurring annual profit (EBIT) benefits from AI by 2028. A generative-AI tool, M-Guide, is meant to suggest what technicians should do after an alert. All of these are company figures. Holcim's head of Smart Operations advises plant teams to "treat an M-Predict alert as a live handover from a virtual colleague" — while stressing that "our people still make the final call."

At **Heidelberg Materials'** Mokra plant in Czechia, software from Cambridge spin-out Carbon Re was layered on top of an existing ABB advanced process control system for the kiln. In the first month of continuous operation, the partners reported a 4.1% lower fuel cost index, 2% lower fuel-related CO₂ per tonne of clinker and 33% less variation in a key clinker quality value. A one-month-on, one-month-off test found 2.2% lower specific heat consumption (reported by Cambridge Enterprise, October 2024; vendor-side figures, slightly older than our 2025–2026 focus).

Original articles: [Holcim: Smart Operations – Turning AI into operational value](https://www.holcim.com/stories/ai-smart-operations) · [Cambridge Enterprise: Heidelberg Materials adopts Carbon Re's AI and ABB Ability](https://www.enterprise.cam.ac.uk/news/heidelberg-materials-adopts-carbon-res-ai-and-abb-ability-for-improved-kiln-operations/)

### Mining: Rio Tinto's driverless railway, AI fault finding and "eyes on the train"

Rio Tinto runs one of the world's largest automated systems: AutoHaul, a fully driverless heavy-haul railway in Western Australia's Pilbara region. According to the *International Railway Journal* (2026), up to 53 trains of 240 wagons run without drivers at the same time over a 2,000 km network, supervised from a control centre in Perth 1,500 km away. The railway moved 326.2 million tonnes of iron ore in 2025.

AutoHaul itself is classic automation rather than modern AI, but AI is now being added on top. A tool called **Recon AI** analyses fleet data and finds the source of faults in near real time; Rio Tinto's rail asset manager says it saves engineers "several days a week of just mashing up data". Data-driven maintenance raised the share of trains that can leave the yard without an engineer checking any wagon from about 40% to 60%. Mainline stopping incidents fell by two-thirds over five years. In trials, a vision system called Horus from 4AI Systems uses thermal and colour cameras plus radar to detect obstacles about 1.6–1.8 km ahead. On a typical journey it sees about 130,000 objects, of which about 2,000 are treated as potential hazards. The difficult question is not detection but deciding when a train with a 1.5–2 km stopping distance should actually brake: "we don't want to be stopping for things like tumbleweed," says 4AI's chief technology officer. No date for full deployment has been given.

At the smaller end, *Mining Technology* reported on April 28, 2026 that Mariana Minerals restarted mining at its Copper One site in Utah with autonomy built in from day one: driverless haul trucks from Pronto using camera-based machine learning and satellite positioning, Sandvik's AutoMine for drilling, and Boston Dynamics' Spot robots patrolling the site and refinery, all feeding a central "MineOS" for optimisation.

The broader picture in the trade press is sober. *Mine* magazine (August 2026) notes that much mining automation "remains fragmented": a haul truck may optimise its own route without knowing that a drone has detected a change in pit geometry, and a maintenance system may predict a failure without telling the dispatch software. Data integration and interoperability are named as the main barriers.

Original articles: [International Railway Journal: AutoHaul drives efficiencies at Rio Tinto](https://www.railjournal.com/in_depth/autohaul-drives-efficiencies-at-rio-tinto/) · [Mining Technology: Mariana Minerals resumes Copper One operations](https://www.mining-technology.com/news/mariana-minerals-resumes-copper-one-operations/) · [Mine, August 2026: Autonomous mining](https://mine.nridigital.com/mine_aug26/autonomous_mining) · [Mining Technology: Autonomous mining's next challenge](https://www.mining-technology.com/features/autonomous-minings-next-challenge-making-the-whole-fleet-think/)

### What is still hard in heavy industry

- **Trust and safety:** most plants still run AI in "advisory" mode. Closed-loop control like at ENEOS needed years of staged testing.
- **Harsh environments:** heat, dust and vibration destroy sensors; some solutions avoid them altogether (for example by reading motor current from the switch room).
- **Fragmented data:** old control systems, separate maintenance and production software, and missing context make it hard to scale from one furnace to fifty.
- **From alert to action:** a sponsored *Mining Technology* article (August 2026) puts it well — a warning that a bearing may fail in ten days "has limited value if it does not influence the maintenance schedule, reserve the right component and account for the effect of downtime on production." The same article cites a GlobalData forecast that mining spending on AI will rise from $2.7 billion in 2024 to $13.1 billion in 2029 (sponsored content; a forecast, not a measurement).

Original article: [Mining Technology (sponsored): From predictive maintenance to autonomous operations](https://www.mining-technology.com/sponsored/from-predictive-maintenance-to-autonomous-operations-the-roadmap-to-scaling-ai-in-mining/)

## 3. The semiconductor industry: AI inside the chip fab

Chip factories ("fabs") are probably the most data-rich factories in the world. A memory wafer at Micron goes through about 1,500 process steps over several months, and every step produces images, measurements and machine signals. Fabs have used statistical tools for decades; what is new is the scale, speed and depth of AI use. The main jobs are defect inspection and classification, predicting yield problems early, scheduling which lot goes to which tool, and predictive maintenance.

### Intel Foundry: millions of defect images a week, and catching "walking wounded" chips

In a detailed interview with *EE Times* (April 7, 2026), Rao Desineni, who leads a roughly 300-person data analytics and AI group at Intel Foundry, said: "We use AI everywhere" — in defect inspection, scheduling and dispatching, root-cause analysis of yield problems and anomaly detection.

Two examples stand out. First, **automatic defect classification** has been in production at Intel for nearly two decades; each week the company automatically classifies millions of defect images from inspection tools. "We used to call this image analysis; these days, it's called AI," Desineni said. Second, **predictive die screening**: models use upstream process data and wafer-test results to flag chips that pass electrical tests but are likely to fail later — what Desineni calls "walking wounded" parts. This matters more and more with advanced packaging, where several chips are combined in one package: "When one of the, let's say, 10 dies in the package fails, the remaining nine are also thrown away."

The interview is also frank about the difficulties. Fab data is extremely imbalanced — "maybe less than 0.1% of the data is bad" — so there are few failure examples to learn from. Measurements are sparse: "We may only measure one of the 25 or two or three of the 25 wafers" in a lot. For new process nodes, Intel uses synthetic data (generated by a type of AI called a conditional GAN) to start training before real data exists. And AI is used as decision support, not as an autonomous controller: "I always put a human in the loop."

Original article: [EE Times: From Defect Images to Die Prediction – How Intel Is Scaling AI in Advanced Manufacturing](https://www.eetimes.com/from-defect-images-to-die-prediction-how-intel-is-scaling-ai-in-advanced-manufacturing/)

### GlobalFoundries: smarter dispatching, an inspection system called "Atlas", and an AI helper for technicians

*IndustryWeek* (February 13, 2026) described three AI tools at contract chipmaker GlobalFoundries, explained by chief manufacturing officer Pradip Singh:

1. **Real-time dispatching:** software from minds.AI sits on top of the fab's decades-old dispatching system. It predicts when each lot will finish and starts moving the next lots earlier, closing the "white space" in which expensive tools stand idle. A pilot on 100 tools at the Malta (New York) fab gave a 1.5% productivity gain; the system was rolled out at scale in Singapore in early 2025. A key advantage, Singh says, is that it keeps learning as recipes and products change, without separate retraining.
2. **"Atlas" inspection:** trained on millions of historical wafer scan maps, it classifies quality problems, identifies where on the line they started, and recommends fixes. Unlike human reviewers, who ignored scans with five or fewer defects, it learns from every scan with at least one defect. The third version, running in Singapore, has cut scrap by 20%. Singh notes it takes about six months for staff to get comfortable replacing manual review.
3. **AI troubleshooting assistant:** with Lavorro, GF trained a model on five years of equipment error logs. A technician enters the machine model and error code, and the system suggests the most likely root cause and fix — passing on the knowledge of veterans with 20 years' experience to newcomers. It is about to be piloted; GF expects "at least two points of productive time" but says the full benefit will take a couple of years.

Original article: [IndustryWeek: How GlobalFoundries Tames AI For Real Gains](https://www.industryweek.com/technology-and-iiot/digital-tools/article/55357200/a-trio-of-practical-ai-based-systems-for-productivity-inspection-and-maintenance)

### Micron: AI that sees, hears and feels the fab

Memory maker Micron published a detailed case study (December 9, 2025) of what it calls "sensory AI". **Vision:** AI checks the 30 to 40 photos taken of each wafer for holes at the edge, scratches or bubbles, with some alerts seconds after an image is taken; an AI defect classification system sorts millions of defects per year. **Hearing:** microphones near robot actuators and pumps learn the normal sound over several weeks; a new frequency triggers an alert, often with a likely cause. **Feeling:** thermal cameras watch transformers and other equipment for overheating. Micron says 590,000 sensors produce 100 million wafer images per week.

Micron reports a 4% improvement in tool availability, a 50% reduction in product scrap, a 50% shorter time to market for new products and about 1 million work hours saved per year. These are **company figures** based on internal data gathered from 2016 through 2025 — so they describe a decade of improvement, not a single project.

Original article: [Micron: Smart manufacturing at Micron – AI at enterprise scale](https://www.micron.com/about/blog/applications/ai/smart-manufacturing-at-micron-ai-at-enterprise-scale)

### TSMC and Samsung: AI vision, GPU scheduling and full-fab digital twins

On May 31, 2026, NVIDIA announced that TSMC, the world's largest contract chipmaker, uses its tools across fab operations; *SemiWiki* covered it on June 3. TSMC uses NVIDIA's vision AI tools for automated classification of nanometre-scale defects on wafers and photomasks, "while reducing repeated labeling and retraining." It uses GPU-accelerated computing for **fab scheduling**, which NVIDIA says has "led to notable improvements in fab productivity", and machine learning to distil "hundreds of thousands of process parameters" for advanced process control. The two companies are also working on "FabTwin", a digital twin of a fab. No exact operational figures were given; the one hard number (20–50% better cost-effectiveness or cycle time in computational lithography) concerns mask preparation rather than shop-floor operations. All of this comes from the supplier.

Samsung presented its approach at NVIDIA's GTC 2026 conference: AI agents that analyse manufacturing data in real time to detect equipment alarms, defects and yield deviations and recommend actions, plus a full-scale **digital twin of its Pyeongtaek fab** connected to the factory's manufacturing execution system (company blog). Separately, a paper at the SPIE Metrology, Inspection and Process Control conference (April 2026), evaluated on Samsung's 2 nm and 1.4 nm processes, reported that an AI image enhancer plus classifier on an optical inspection tool gave up to 20% better defect capture, or alternatively an 89% smaller budget for slow electron-microscope review. This is a peer-reviewed conference result; the abstract does not say whether the method is in full production.

Original articles: [NVIDIA Newsroom: NVIDIA and TSMC Bring AI Into Fabs](https://nvidianews.nvidia.com/news/nvidia-and-tsmc-bring-ai-into-fabs-to-advance-semiconductor-design-and-manufacturing) · [SemiWiki: TSMC Expands Use of NVIDIA AI Technologies](https://semiwiki.com/semiconductor-manufacturers/tsmc/369873-tsmc-expands-use-of-nvidia-ai-technologies-across-chip-production-operations/) · [Samsung Semiconductor: Agentic AI at NVIDIA GTC 2026](https://semiconductor.samsung.com/news-events/tech-blog/samsung-showcases-agentic-ai-driven-semiconductor-engineering-innovation-at-nvidia-gtc-2026/) · [SPIE: AI-based enhanced detection algorithm for 2nm and 1.4nm nodes](https://doi.org/10.1117/12.3090867)

### What is still hard in chip fabs

*Semiconductor Engineering* (October 8, 2026) describes the current trend as "shift left": instead of waiting for inspection or test at the end, fabs feed raw equipment sensor data into AI models *inside* each process module, so a tool can flag or even abort a bad wafer almost immediately. The cost is a data flood — "in some cases, hundreds of petabytes a year" — that forces hard choices about what to store and how to keep data traceable between steps. The magazine's video series on AI in fabs (2025) also notes that **virtual metrology** (estimating a measurement from sensor data instead of measuring) helps with smarter sampling but "will never completely replace" physical metrology tools.

Other recurring problems: very few failure examples to train on, models that decay when recipes or tools change, and engineers who care more about usability than about the model. Suppliers advertise impressive targets — Siemens, for example, presented "up to 30% downtime reduction" and 20–40 minutes of early warning for etch tools in a 2026 webinar — but these are **vendor targets**, not measured results from a named fab.

Original articles: [Semiconductor Engineering: Shift Left Complicates Fab Data Management](https://semiengineering.com/shift-left-complicates-fab-data-management/) · [Semiconductor Engineering: Virtual Metrology In Semiconductor Manufacturing](https://semiengineering.com/virtual-metrology-in-semiconductor-manufacturing/) · [Siemens blog: AI-driven predictive maintenance in fabs (vendor)](https://blogs.sw.siemens.com/electronics-semiconductors/2026/08/13/ai-driven-predictive-maintenance-solving-semiconductor-fab-uptime-challenges/)

## 4. Car manufacturing: AI eyes and ears on the line, and the first humanoids

Car plants were already among the most automated factories, with hundreds of welding robots per body shop. What AI adds is mainly **checking**: cameras, microphones and sensor analytics that catch defects before a car leaves the plant — because every defect that reaches a customer becomes an expensive warranty claim. Humanoid robots are the most visible new topic, but they are still at an early stage.

### Ford: 150 million AI inspections with iPhones — and AI that listens to engines

According to *WardsAuto* (June 10, 2026), Ford has installed IBM's Maximo Visual Inspection at 17 North American plants. Internally the system is called **MAIVS** (Mobile AI Vision System). At an inspection station, an iPhone (or an ordinary network camera) identifies the vehicle by its VIN, then photographs a specific area — a door panel, an electrical connector, a wiring route — as the car moves along the line. A model trained on both good and bad images runs directly on the phone and returns pass/fail in real time. If, for example, a connector is not fully seated, the problem is logged in Ford's quality system and fixed on the spot; if necessary the line is stopped. Ford says MAIVS has performed 150 million individual inspections and flagged 400,000 quality issues that a person might have missed. For the 2026 Expedition launch at Kentucky Truck Plant, Ford used six times as many AI inspection tools as for the previous model year, and it installed 40 new systems in Michigan plants in 2026 alone.

In September 2026, *Automotive News* reported that Ford also uses AI to **listen** to engines, transmissions and axles. As summarised by *Ford Authority*, the system compares the sound of randomly selected units on a test stand with a library of sound signatures from units known to be built correctly. Anomalies are flagged, the unit is torn down, and the cause is fixed. The AI has found defects such as improperly torqued main bearing caps and incorrectly machined transmission parts — problems that could pass leak, compression and power tests but harm long-term reliability. According to an *Automotive News* teaser, Ford's warranty bill has topped $5 billion a year; we could not read the full paywalled article.

Original articles: [WardsAuto: How Ford flags assembly line defects with IBM's AI-powered inspection tools](https://www.wardsauto.com/news/how-ford-flags-assembly-line-defects-with-ibms-ai-powered-inspection-tools/822404/) · [Automotive News (paywall): Ford uses AI sound detection to catch defects](https://www.autonews.com/ford/an-ford-uses-ai-to-test-for-defects-0910/) · [Ford Authority: Ford relying on AI to catch engine and transmission issues early](https://fordauthority.com/2026/09/ford-relying-on-ai-to-catch-engine-and-transmission-issues-early/)

### GM: from 5,600 suspect vehicles to nine

General Motors described several shop-floor AI tools in May 2026 (company newsroom). **Device Level Analytics** collects vibration, electrical current and other signals from plant equipment to schedule preventive maintenance. At the Fort Wayne plant, after a routine check found a missed weld, plant data narrowed the suspect vehicles from 5,600 to fewer than 10 within hours instead of days, and the nine affected vehicles never left the building. At Factory ZERO, GM is piloting **WeldBrAIn**, which expands weld quality checks from manual inspection of four parts per shift to checking every weld on every body in real time. Paint shops in Spring Hill and Flint use vision cameras to detect paint defects and feed the data back to process engineers. These are company descriptions; GM did not publish cost or quality savings.

Original article: [GM: How smarter AI tools help build better vehicles](https://news.gm.com/home.detail.html/Pages/topic/us/en/2026/may/0505-smarterAItoolsbuildvehicles.html)

### Audi: weld spatter, 1.5 million spot welds and a factory controlled from the cloud

Audi's production update of January 27, 2026 and a report in *Automotive Manufacturing Solutions* describe several systems:

- **Weld Splatter Detection (WSD):** at Neckarsulm, cameras and AI detect weld spatter on the underbody of car bodies and mark it with light; after an upgrade, a robot arm now grinds it off — a physically hard job that people used to do. The system is to go into series production at six plants in Ingolstadt, as the Volkswagen Group's first AI-supported spatter detection.
- **Spot-weld analysis:** previously, staff checked spot welds with ultrasound on a random sample. AI now analyses about 1.5 million spot welds per shift at Neckarsulm (around 5,000 per vehicle), so staff can focus on the suspicious ones. The approach has been rolled out to other VW Group plants.
- **ProcessGuardAIn:** monitors paint-shop processes with machine and sensor data and flags anomalies early; two pilots (pre-treatment dosing and cathodic dip coating) were planned to enter series production in the second quarter of 2026. We could not confirm whether this happened on time.
- **Edge Cloud 4 Production:** Audi moved factory control software from local industrial PCs into its own on-site cloud. More than 1,000 industrial PCs have been eliminated. In the A5/A6 body shop, virtual controllers now coordinate about 100 robots "with millisecond precision." This is not AI by itself, but it is the infrastructure that lets Audi roll out AI applications to many lines quickly.

Original articles: [Audi: Audi scales up deployment of artificial intelligence in production](https://www.audi.com/en/press-releases/audi-scales-up-deployment-of-artificial-intelligence-in-production-17002) · [Automotive Manufacturing Solutions: How Audi is building thinking factories](https://www.automotivemanufacturingsolutions.com/smart-factory/audi-makes-a-quantum-leap-in-ai-for-quality/2636335)

### Toyota: "AI kaizen"

At the 2026 Automotive News Congress, Toyota Motor North America's engineering executive Susann Kazunas spoke of a quality "breakthrough" from using AI to automate complex factory tasks, in the spirit of *kaizen* (continuous improvement). According to the *Automotive News* teaser and a post by its reporter, examples include weld inspection and parts sorting. We could not access the full article, so we cannot give details or figures.

Original article: [Automotive News (paywall): Toyota, others advance AI in plants](https://www.autonews.com/manufacturing/an-toyota-touts-ai-breakthrough-for-quality-1001/)

### Humanoid robots at BMW and Hyundai: real work, but still pilots

The most-reported example is **Figure AI at BMW's Spartanburg plant** (South Carolina). In the body shop, a Figure 02 humanoid picked sheet-metal parts from racks and placed them on a welding fixture, after which conventional robots welded them. The targets were demanding: an 84-second total cycle with 37 seconds for loading, placement within 5 mm in about two seconds, more than 99% placement accuracy per shift, and zero human interventions. Figure reported (November 19, 2025) that over 11 months the robots ran 10-hour shifts Monday to Friday, loaded more than 90,000 parts, logged more than 1,250 hours and contributed to the production of more than 30,000 BMW X3s. *heise online* noted that Figure did not say exactly how far the KPIs were met, and that the robot's forearm electronics suffered from heat and had to be redesigned. BMW's own investor presentation (2026) puts the project at "readiness level 3" — a pilot on the shop floor — with an industrial rollout as the next, not yet reached, level. In June 2026 BMW announced a new use case for Figure 03: sorting unsorted parts from large containers into sequencing trolleys in logistics.

**Hyundai Motor Group** said in January 2026 that it plans to deploy Boston Dynamics' production Atlas humanoids at its Georgia "Metaplant" from 2028, first for parts sequencing and moving to component assembly by 2030 (Reuters). A dedicated training centre at the site is already teaching Atlas real manufacturing tasks.

Original articles: [Figure: F.02 contributed to the production of 30,000 cars at BMW (vendor)](https://www.figure.ai/news/production-at-bmw) · [heise online: Figure 02 hilft beim Bau von über 30.000 BMW X3](https://www.heise.de/news/Humanoider-Roboter-Figure-02-hilft-beim-Bau-von-ueber-30-000-BMW-X3-11085641.html) · [BMW Group: Figure 03 project in Spartanburg](https://www.press.bmwgroup.com/global/article/detail/T0458778EN/bmw-group-advances-the-use-of-physical-ai-in-production-with-figure-03-project-in-spartanburg?language=en) · [BMW Group: US Capital Market Event – Manufacturing (PDF)](https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/ir/downloads/en/2026/US_Capital_Market_Event_BMW_Manufacturing.pdf) · [Reuters: Hyundai plans to deploy humanoid robots at US factory from 2028](https://www.reuters.com/business/autos-transportation/hyundai-motor-group-plans-deploy-humanoid-robots-us-factory-2028-2026-01-05/)

### What is still hard in car plants

- **Vision inspection works; scaling it is the job.** Ford's numbers show that the hard part is rolling out thousands of station-specific models and keeping them trained for every new model year.
- **Warranty savings are hard to prove.** Most companies publish counts (inspections, flagged issues) rather than money saved.
- **Humanoids are slow to pay off.** The published BMW/Figure data shows a real production contribution, but also hardware reliability problems and no full KPI report. Carmakers talk about pilots and readiness levels, not fleets.

## 5. Aircraft manufacturing and maintenance

Aerospace builds in small numbers under very strict quality rules, so automation has always been harder here than in car plants, and much of the work is still manual. AI is therefore mostly used to **help inspectors and technicians** — reading ultrasound scans, analysing borescope videos, checking part numbers — rather than to replace them. In maintenance (MRO), predictive analytics on aircraft data has become mainstream, but with careful human checks.

### Engine inspection: GE Aerospace, Pratt & Whitney and Rolls-Royce

Turbine blades sit in gas hotter than 1,600 °C and must be inspected regularly with a borescope. Traditionally, a trained specialist watches the video and judges every blade — slow, tiring and somewhat subjective.

- **GE Aerospace** began rolling out an AI-enabled **Blade Inspection Tool** for the CFM LEAP engine (used on Airbus A320neo and Boeing 737 MAX aircraft) to more than a dozen MRO shops and customers in February 2025. Technicians capture images; AI guides them on which images to review. On the GEnx widebody engine, where the tool has been used for about three years, GE says it has cut blade inspection times in half while improving accuracy compared with standard borescope inspection (company figure).
- **Pratt & Whitney** acquired the Dutch company Aiir Innovations, whose software analyses borescope video and flags possible damage based on a database of confirmed findings, *Aviation Week* reported on July 15, 2026. The Christchurch Engine Center (a joint venture with Air New Zealand) already uses it regularly for V2500 engines; Pratt is piloting it on PW1100G and F135 engines. One advantage cited: images can be sent to remote borescope experts for validation — important when experienced staff are scarce.
- **Rolls-Royce** describes its "Intelligent Borescope Method" (2025), developed with Waygate Technologies and Rhinestahl: standardised high-resolution imaging with overlays, AI apps that help assess findings, and cloud upload for fast reports. The aim is fewer repeat inspections and fewer unnecessary engine removals. Rolls-Royce gives no figures.

Singapore engine shop SAESL (a Rolls-Royce and SIA Engineering joint venture) signed a five-year programme for 2026–2031 with the government-backed research centre ARTC on AI-enabled and autonomous inspection, assembly and disassembly, to be deployed in "sprints" on the shop floor (*Aviation Week*, September 23, 2026).

Original articles: [GE Aerospace: AI-driven inspection tool for narrowbody engines (company)](https://www.geaerospace.com/news/press-releases/ge-aerospace-deploys-ai-driven-inspection-tool-maximize-narrowbody-engine-time-wing) · [Aviation Week: Pratt & Whitney buys engine inspection software specialist](https://aviationweek.com/mro/emerging-technologies/pratt-whitney-buys-engine-inspection-software-specialist) · [Rolls-Royce: Intelligent borescope method (company)](https://www.rolls-royce.com/media/our-stories/discover/2025/intelligent-borescope-method.aspx) · [Aviation Week: SAESL collaborates with ARTC](https://aviationweek.com/mro/emerging-technologies/saesl-collaborates-artc-ai-autonomous-engine-mro-technologies)

### Spirit AeroSystems: AI reads ultrasonic scans of composite fuselages

Composite aircraft structures are checked with ultrasound, which produces huge datasets that inspectors must review by eye. Spirit AeroSystems, a major fuselage supplier, worked with Argonne National Laboratory, Northern Illinois University and TRI Austin to train a neural network on thousands of Spirit's annotated ultrasonic scans. The AI highlights the areas most likely to contain defects, so inspectors can focus there. According to Argonne (republished by *AIwire/HPCwire*, January 9, 2026), early use cut inspection time by 7% and saved about 3% of facility energy per aircraft by shortening overall flow time. The tool is being deployed across all ultrasonic inspections of the forward fuselage section of an active commercial aircraft programme. The modest 7% figure is itself instructive: in aerospace the gains are real but incremental, because every finding still needs human sign-off.

Original article: [AIwire/HPCwire: Argonne AI Tools Power Safer, Faster Aerospace Inspections](https://www.hpcwire.com/aiwire/2026/01/09/argonne-ai-tools-power-safer-faster-aerospace-inspections/)

### Boeing: AI reads part labels, saving 17 hours per 737

Every part installed on an aircraft must be recorded for traceability. At Boeing's Renton and Everett plants, more than 70% of 737 parts were previously entered by hand. Boeing engineers built a handheld tool that photographs part labels, reads the text with optical character recognition (OCR) AI, checks it against the master list and fills in the aircraft's readiness log automatically. According to *Aerospace Global News* (April 25, 2026), the tool supports more than 1,400 737 parts and saves over 17 hours of inspection time per aircraft; the model was trained on more than 2,250 part images with 38,000 manually labelled text boxes. The 787 line in South Carolina is next. Boeing stresses that its engineers spent weeks on the factory floor with inspectors so as not to disrupt long-standing processes.

Original article: [Aerospace Global News: How Boeing is using AI for rapid parts validation](https://aerospaceglobalnews.com/news/how-boeing-is-using-ai-for-rapid-parts-validation/)

### Airbus: robots in the cabin and AI-assisted inspection pilots

*ASSEMBLY* magazine (September 1, 2026) reported on Airbus's **CabinMarker**, a 4-kilogram robot that drives autonomously through unfinished cabins and marks where passenger seats must be bolted. Programmed directly from the aircraft's CAD files, it cuts a 150-minute manual task to 30 minutes and improves accuracy and ergonomics. (This is autonomous robotics; the report does not say how much of it is AI.)

At Airbus Canada's A220 plant in Mirabel, Quebec, DeepSight launched a pilot in 2026 in which technicians wear augmented-reality glasses that capture images of parts and compare them with Airbus reference images; the AI gives "compliance indicators" but never overrides the technician's final approval (*Plant*, May 26, 2026). Airbus's US innovation unit Acubed has also developed **AVIA**, a camera-based system that recognises manual assembly steps (such as "pick up bracket" or "turn screwdriver") to record progress and check quality automatically; it was planned for tests on the Alabama final assembly line during 2025. Acubed projects savings of "tens of millions of euros" a year across Airbus lines if it works — a projection, not a result.

Original articles: [ASSEMBLY: Airbus deploys robot to automate aircraft seat installation](https://www.assemblymag.com/articles/100354-airbus-deploys-robot-to-automate-aircraft-seat-installation) · [Plant: Airbus tests AR-assisted inspection system at Mirabel](https://www.plant.ca/technology/airbus-tests-ar-assisted-inspection-system-at-mirabel-facility/) · [Acubed: Introducing AVIA](https://acubed.airbus.com/blog/adam/introducing-avia/)

### Airline maintenance: predictive alerts, false alarms and trust

Airlines and MRO providers have used predictive maintenance on aircraft data for years; the debate in 2026 is about **how much to trust it**. *Aviation Week* (October 19, 2026) reports that false alerts can cause unnecessary inspections, part removals and ground time, while missed faults cause disruptions. Delta TechOps back-tests algorithms on historical data and has former line technicians judge whether recommendations are actionable — "the analytic itself does not make maintenance decisions," says Alice Belcher, its director of predictive technology engineering. Lufthansa Technik's Aviatar team tunes each model either to minimise false alarms or to catch as many faults as possible, depending on how costly a failure would be and how easy it is to check on the aircraft. AFI KLM E&M's Prognos team notes that predictions do not have to be perfect if the first follow-up is a quick, cheap inspection — and each inspection feeds back into the model (*Aviation Week*, August 27, 2026). Aer Lingus has begun rolling out AISmartPlan, an AI platform from Redback Software that pulls together flight schedules and aircraft data to automate maintenance planning (*Aviation Week*, June 3, 2026; we only saw the free summary).

Original articles: [Aviation Week: False alerts test trust in predictive maintenance systems](https://aviationweek.com/mro/emerging-technologies/false-alerts-test-trust-predictive-maintenance-systems) · [Aviation Week: How the aviation aftermarket is improving predictive maintenance](https://aviationweek.com/mro/emerging-technologies/how-aviation-aftermarket-improving-predictive-maintenance) · [Aviation Week (paywall): Aer Lingus accelerates AI-powered maintenance planning](https://aviationweek.com/mro/emerging-technologies/aer-lingus-accelerates-ai-powered-maintenance-planning)

### What is still hard in aerospace

- **Certification and accountability:** every inspection result must be signed off by a qualified person. AI can sort, highlight and suggest; it cannot take responsibility. Airbus runs a German-funded research project, TrustME, just to build a framework for certifiable AI in production.
- **Small volumes:** an aircraft line builds dozens of aircraft a month, not thousands of cars a day, so there is less training data.
- **Measured gains are modest but real:** 7% faster ultrasonic review, 17 hours per aircraft for part logging, half the time for blade review — valuable, but not a revolution.

Original article: [Airbus: TrustME research project](https://www.research.airbus.com/en/trustme)

## 6. Logistics: warehouses, roads and ports

Logistics was early to use optimisation software — route planning has existed for decades. What is new is AI that coordinates **fleets of robots**, gives robots the ability to see and grip unfamiliar items, and helps dispatchers react faster to disruption.

### Amazon: an AI "traffic controller" for a million robots — and a robot that was switched off

Amazon says it passed one million robots across more than 300 facilities in July 2025. At the same time it introduced **DeepFleet**, a "foundation model" trained on movement data from hundreds of thousands of its warehouse robots. Like a smart traffic system, it predicts congestion and helps route robots around it. Amazon says it improves the robot fleet's travel efficiency by 10%. Amazon's own research blog is more careful — "We still have a lot to figure out" — and says the models are first used to predict congestion, with assigning robots to tasks as a longer-term goal. The 10% is a company figure.

Amazon's robotics push is not a straight line. *Business Insider* reported on February 17, 2026 that **Blue Jay**, a multi-arm picking system Amazon had presented in October 2025 as a "core technology" for same-day delivery, was quietly shut down in January after only a few months. Sources cited high cost, manufacturing complexity and implementation problems; Amazon said the core technology would be reused elsewhere. The report points to a general problem: useful training data for robots is much scarcer than text data for chatbots.

Original articles: [Amazon: 1 million robots and DeepFleet (company)](https://www.aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model) · [Amazon Science: First foundation model for multirobot coordination](https://www.amazon.science/blog/amazon-builds-first-foundation-model-for-multirobot-coordination) · [Business Insider: Amazon pulls the plug on Blue Jay](https://www.businessinsider.com/amazon-pulls-plug-blue-jay-warehouse-robot-2026-2)

### DHL and Boston Dynamics: robots that unload containers

Unloading boxes from hot or cold trailers is heavy, unpopular work. Boston Dynamics' **Stretch** robot uses vision to recognise boxes of different sizes in a messy stack and a suction gripper to move them onto a conveyor. DHL Supply Chain started using Stretch commercially in North America in 2023, later in the UK and Europe. In May 2025 DHL signed a memorandum to deploy more than 1,000 additional units and said Stretch had reached unloading rates of up to 700 cases per hour (company figure). DHL Group uses more than 7,500 robots in total and plans to extend Stretch to case picking, the most labour-intensive task in its contract logistics business.

Original article: [DHL Group: MOU with Boston Dynamics for additional 1,000-robot deployment (company)](https://group.dhl.com/en/media-relations/press-releases/2025/dhl-group-signs-mou-with-boston-dynamics-and-accelerates-cross-business-automation-strategy.html)

### GXO and Agility Robotics: the humanoid that has to sit down when you approach

Contract logistics firm GXO was the first company to put a humanoid robot into live commercial operation, under a robots-as-a-service contract signed in 2024. At its Flowery Branch (Georgia) site, Agility's **Digit** picks up totes and places them on conveyors. On October 26, 2026, GXO and Agility said Digit had moved more than 100,000 totes there and announced expansion to sites in North Carolina and Tennessee from early 2027; Digit has logged more than 65,000 hours of real-world operation across customers (company figures).

The most candid account comes from Agility co-founder Jonathan Hurst in *IEEE Spectrum* (October 19, 2026). In commercial deployments, Digit 4 had to work behind physical barriers, separated from people, to satisfy insurance and safety requirements. Keeping the first deployments running "arguably eliminated any profit we made." The new Digit 5 weighs over 120 kg, is built to lift 23-kg bins onto 1.75-metre shelves for 20 hours a day, and runs 90 minutes on a 9-minute charge. To work near people, it is programmed to stop, put down its load, sit on the floor and cut power to its motors before a person gets close enough to touch it. "In some ways, Digit 5 feels more like a forklift than the graceful humanoid I set out to build," Hurst writes.

Original articles: [IEEE Spectrum: The Robot I Didn't Expect to Build](https://spectrum.ieee.org/agility-robotics-digit-5-redesign) · [Agility Robotics / GXO: partnership expansion (company)](https://www.agilityrobotics.com/content/gxo-and-agility-robotics-expand-partnership-to-accelerate-deployment-of-humanoids-in-u-s-operations)

### Inside the warehouse: picking, slotting and "lights-out" shifts

*Modern Materials Handling* (July 1, 2026) gives an overview of where AI is actually used in warehouses. According to Keith Moore of AutoScheduler.AI, the four most common uses today are pick-route optimisation, vision systems in yard management, slotting (deciding where each product is stored) and sequencing flows inside the building. Examples he gives without naming customers: a 22% reduction in pick times at a large retailer's distribution centre and 15% less floor travel at a third-party logistics provider thanks to AI slotting (vendor-reported, anonymised). Robot maker Nomagic says its customer, Swiss online retailer Brack.Alltron, now runs autonomous picking shifts overnight and on Sundays using a "vision-language-action" AI (vendor claim). The same article names the main barriers: change management, staff who ignore AI outputs because they do not trust them, poor data ("If a person with infinite time couldn't figure it out with your data, AI won't be able to") and an "accountability gap" when nobody can explain why the AI made a decision.

Original article: [Modern Materials Handling: The state of AI in warehousing](https://www.mmh.com/article/best_practices_the_state_of_ai_in_warehousing)

### On the road: CEVA's AI dispatching and UPS's long-running route optimiser

CEVA Logistics uses an AI-powered route dispatching tool at more than 40 US locations. According to the road transport organisation IRU (October 22, 2026), results include a 40% gain in planning productivity, fewer routes, higher cargo volumes and better on-time delivery; CEVA plans to expand the tool to France and the UK. CEVA's Pierre-Alain Saclier sums up the aim: "to reduce the time between a problem emerging and a decision being taken."

UPS's ORION system shows how long such tools have been around. It cut about eight miles per driver per day when introduced in the 2010s; a "dynamic" version that re-optimises routes during the day saved another two to four miles per driver, UPS said at its 2021 investor day (*Supply Chain Dive*, June 11, 2021). This is older than our 2025–2026 focus, but it shows that route optimisation is a mature, proven use of algorithms in logistics.

Original articles: [IRU: AI and digitalisation buy time in trucking](https://www.iru.org/news-resources/newsroom/ai-and-digitalisation-buy-time-trucking) · [Supply Chain Dive: UPS adds dynamic routing to ORION](https://www.supplychaindive.com/news/ups-orion-route-planning-analytics-data-logistics/601673/)

### Ports: smarter stacking and cranes that stop for people

At Pusan Newport in South Korea (majority-owned by DP World), the terminal operating system uses AI to plan container stacking so that fewer boxes have to be moved twice, and to spread work more evenly across equipment. AI-powered CCTV around cranes stops a crane and sounds an alarm if it detects movement underneath. Lidar sensors help quay-crane drivers line up with the ship's container slots, which DP World says improves productivity by at least 10% (company blog, undated; the lidar aid is sensor-based driver assistance rather than AI in the narrow sense).

Original article: [DP World: How technology is shaping port operations (company)](https://www.dpworld.com/en/insights/how-technology-is-shaping-port-operations)

### What is still hard in logistics

- **Robot economics:** Blue Jay's shutdown and Agility's account of unprofitable early deployments show that a robot that works is not automatically a robot that pays.
- **Safety rules for mobile robots near people** slow down humanoids and force very conservative designs.
- **Orchestration:** the next step everyone talks about is software that coordinates robots, people, conveyors and trucks together — but most published results still come from single systems.

## 7. Cross-sector patterns: the same building blocks everywhere

Looking across the five sectors, the same building blocks appear again and again:

1. **Computer vision for quality control.** The most mature and widespread use: Ford's phones on the line, Audi's weld checks, Intel's and Micron's defect classification, Spirit's ultrasound review, GE's and Pratt & Whitney's borescope tools. It works best where images are standardised and a person still decides borderline cases.
2. **Predictive — and increasingly prescriptive — maintenance.** Holcim's M-Predict, Micron's acoustic and thermal monitoring, Rio Tinto's Recon AI, GM's Device Level Analytics, airline health monitoring. The trend is to go beyond "this may fail" to "here is what to do, when, and with which part."
3. **Process optimisation and closed-loop control.** Furnaces and kilns (KG Steel, Baosteel, Heidelberg Materials) and distillation columns (ENEOS). Savings are typically a few percent of energy — large in absolute money — and occasionally much more where a process was poorly controlled before (ENEOS: about 40% less steam).
4. **Scheduling and dispatching.** GlobalFoundries' and TSMC's fab dispatching, Amazon's DeepFleet, CEVA's route dispatching. Gains per step are small (1.5%, 10%) but apply to very expensive assets.
5. **Digital twins.** Samsung's Pyeongtaek fab twin, TSMC's FabTwin, and the simulator ENEOS used to train its AI safely. Twins are mainly a way to test before touching the real plant.
6. **Robots with AI perception, including humanoids.** Stretch unloading trailers, Digit moving totes, Figure loading sheet metal, autonomous haul trucks and trains. Classic industrial robots remain the workhorses; humanoids are at pilot stage, with tens of thousands of parts or totes moved so far.
7. **Industrial AI agents.** A newer layer on top: language-model-based assistants that read maintenance logs and manuals, suggest the next step to a technician or draft work orders. Examples are GlobalFoundries' troubleshooting assistant, Holcim's M-Guide and Samsung's agentic quality management. *C&EN* reported in January 2026 that chemical companies expect to adopt such agents more widely this year, while experts stress they cannot yet replace skilled people. Published results for these agents are still scarce.

The lessons from the trade press are strikingly consistent: start where conventional methods fail; move step by step from advice to automation; keep people in the loop for safety-critical decisions; invest in data quality first; and measure results in operational terms — energy per tonne, scrap, downtime, hours saved.

Original article: [C&EN: Chemical industry to bet on agentic AI](https://cen.acs.org/physical-chemistry/computational-chemistry/Chemical-industry-bet-agentic-AI/104/web/2026/01)

## 8. Overview table

| Sector | Example | What the AI does | Published result | Source |
|---|---|---|---|---|
| Chemicals | ENEOS Materials / Yokogawa (Japan) | Reinforcement-learning AI controls a distillation column | ~40% less steam/CO₂ vs. manual; 4+ years in routine use | Control Global, Sep 2026 |
| Steel | KG Steel, Dangjin (Korea) | Predictive control of an annealing furnace | 2.9–9.9% less gas per tonne; ~400M won saved in a year (company) | Herald Business, Oct 2026 |
| Steel | Baosteel No. 1 blast furnace (China) | Forecasts furnace temperature 2 h ahead | >90% forecast accuracy, up from ~70% (company) | China Daily via Touch Shanghai, Jun 2026 |
| Cement | Holcim | Predictive maintenance on 1,700+ machines; real-time cement quality prediction | 100+ breakdowns prevented (company) | Holcim, 2026 |
| Mining | Rio Tinto, Pilbara (Australia) | AI fault finding on a driverless railway; obstacle detection on trial | 60% of trains leave without wagon checks (from 40%) | Int'l Railway Journal, 2026 |
| Semiconductors | Intel Foundry | Automatic defect classification; predictive die screening | Millions of defect images classified per week | EE Times, Apr 2026 |
| Semiconductors | GlobalFoundries | AI dispatching; "Atlas" defect analysis; repair assistant | +1.5% productivity (pilot); −20% scrap | IndustryWeek, Feb 2026 |
| Semiconductors | Micron | Vision, acoustic and thermal AI across fabs | +4% tool availability; −50% scrap, 2016–2025 (company) | Micron, Dec 2025 |
| Automotive | Ford, 17 N. American plants | Phone-based vision inspection; AI that listens to engines | 150M inspections, 400,000 issues flagged | WardsAuto, Jun 2026; Automotive News, Sep 2026 |
| Automotive | Audi, Neckarsulm | AI weld-spatter detection and spot-weld analysis | ~1.5M spot welds analysed per shift | Audi / Automotive Manufacturing Solutions, 2026 |
| Automotive | BMW / Figure AI, Spartanburg | Humanoid loads sheet metal into a welding fixture | 90,000+ parts, 30,000+ cars, 11-month pilot (vendor) | Figure / heise, Nov 2025 |
| Aerospace | Spirit AeroSystems | AI flags likely defects in ultrasonic fuselage scans | −7% inspection time; ~3% energy per aircraft | AIwire/HPCwire, Jan 2026 |
| Aerospace | Boeing, Renton & Everett | OCR AI reads and logs part labels | 17+ hours saved per 737 | Aerospace Global News, Apr 2026 |
| Aerospace MRO | GE Aerospace; Pratt & Whitney | AI-assisted borescope blade inspection | Inspection time halved on GEnx (company) | GE, Feb 2025; Aviation Week, Jul 2026 |
| Logistics | Amazon | DeepFleet model coordinates warehouse robots | +10% robot travel efficiency (company) | Amazon, Jul 2025 |
| Logistics | GXO / Agility Robotics | Humanoid moves totes in a live warehouse | 100,000+ totes (vendor) | Agility, Oct 2026; IEEE Spectrum, Oct 2026 |
| Logistics | CEVA Logistics | AI route dispatching at 40+ US sites | +40% planning productivity | IRU, Oct 2026 |

## Key takeaways

- **The shift is real:** AI now runs daily in furnaces, kilns, chemical columns, chip fabs, car body shops, engine shops and warehouses — not just in offices.
- **Quality inspection leads:** computer vision for defects is the most mature and widespread use in every sector, from wafers to welds to turbine blades.
- **Typical gains are a few percent on very large bases:** roughly 3–10% less gas per tonne in steel, 1.5% more fab productivity, 7% faster inspection, 10% better robot travel. Big jumps (ENEOS's 40% less steam, Micron's 50% less scrap) are exceptions or span many years.
- **People stay in the loop:** almost every operator — Intel, Delta, Holcim, Airbus, ENEOS — stresses that AI advises or acts within limits, and that people make the final call on safety-critical decisions.
- **Humanoid robots are working, but at pilot scale:** tens of thousands of parts or totes moved, with safety rules, reliability and cost as the main obstacles; Amazon's Blue Jay shows that projects also get cancelled.
- **Data and trust are the bottlenecks, not algorithms:** fragmented systems, scarce failure data, false alarms and change management come up again and again in the trade press.
- **Treat headline numbers with care:** many figures come from the companies or their suppliers. Independent audits of industrial AI results are still rare.

## Sources

- [Control Global: How ENEOS put reinforcement learning in control of a chemical plant (Sep 3, 2026)](https://www.controlglobal.com/show-coverage/ynow-a-yokogawa-users-conference/article/55402763/yokogawa-how-eneos-put-reinforcement-learning-in-control-of-a-chemical-plant)
- [The Herald Business: KG Steel pushes to expand AI usage rate at annealing furnace (Oct 14, 2026)](https://biz.heraldcorp.com/article/10901996)
- [Touch Shanghai / China Daily: Blast furnace a testimony to Baosteel's smart AI use (Jun 29, 2026)](https://touch.shio.gov.cn/jsp/jrsh_detail_en.jsp?id=20260629183724949)
- [Steel Times International: ArcelorMittal collaborates with AWS in automation deal (Jun 22, 2026)](https://www.steeltimesint.com/news/arcelormittal-collaborates-with-aws-in-automation-deal)
- [Steel Times International: NLMK expands AI for critical assets monitoring (Oct 5, 2021)](https://www.steeltimesint.com/news/nlmk-expands-ai-for-critical-assets-monitoring)
- [Steel Times International: Marienhütte implements AI solution in steel production (Nov 23, 2021)](https://www.steeltimesint.com/news/marienhutte-implements-ai-solution-in-steel-production)
- [Holcim: Smart Operations – Turning AI into operational value (2026)](https://www.holcim.com/stories/ai-smart-operations)
- [Cambridge Enterprise: Heidelberg Materials adopts Carbon Re's AI and ABB Ability (Oct 8, 2024)](https://www.enterprise.cam.ac.uk/news/heidelberg-materials-adopts-carbon-res-ai-and-abb-ability-for-improved-kiln-operations/)
- [International Railway Journal: AutoHaul drives efficiencies at Rio Tinto (2026)](https://www.railjournal.com/in_depth/autohaul-drives-efficiencies-at-rio-tinto/)
- [Mining Technology: Mariana Minerals resumes Copper One operations in Utah (Apr 28, 2026)](https://www.mining-technology.com/news/mariana-minerals-resumes-copper-one-operations/)
- [Mine, Issue 161: Autonomous mining (Aug 2026)](https://mine.nridigital.com/mine_aug26/autonomous_mining)
- [Mining Technology: Autonomous mining's next challenge (Aug 18, 2026)](https://www.mining-technology.com/features/autonomous-minings-next-challenge-making-the-whole-fleet-think/)
- [Mining Technology (sponsored): From predictive maintenance to autonomous operations (Aug 5, 2026)](https://www.mining-technology.com/sponsored/from-predictive-maintenance-to-autonomous-operations-the-roadmap-to-scaling-ai-in-mining/)
- [EE Times: From Defect Images to Die Prediction – How Intel Is Scaling AI (Apr 7, 2026)](https://www.eetimes.com/from-defect-images-to-die-prediction-how-intel-is-scaling-ai-in-advanced-manufacturing/)
- [IndustryWeek: How GlobalFoundries Tames AI For Real Gains (Feb 13, 2026)](https://www.industryweek.com/technology-and-iiot/digital-tools/article/55357200/a-trio-of-practical-ai-based-systems-for-productivity-inspection-and-maintenance)
- [Micron: Smart manufacturing at Micron – AI at enterprise scale (Dec 9, 2025)](https://www.micron.com/about/blog/applications/ai/smart-manufacturing-at-micron-ai-at-enterprise-scale)
- [NVIDIA Newsroom: NVIDIA and TSMC Bring AI Into Fabs (May 31, 2026)](https://nvidianews.nvidia.com/news/nvidia-and-tsmc-bring-ai-into-fabs-to-advance-semiconductor-design-and-manufacturing)
- [SemiWiki: TSMC Expands Use of NVIDIA AI Technologies Across Chip Production Operations (Jun 3, 2026)](https://semiwiki.com/semiconductor-manufacturers/tsmc/369873-tsmc-expands-use-of-nvidia-ai-technologies-across-chip-production-operations/)
- [Samsung Semiconductor: Agentic AI-driven semiconductor engineering at NVIDIA GTC 2026](https://semiconductor.samsung.com/news-events/tech-blog/samsung-showcases-agentic-ai-driven-semiconductor-engineering-innovation-at-nvidia-gtc-2026/)
- [SPIE: AI-based enhanced detection algorithm for optical inspection on 2nm and 1.4nm nodes (Apr 8, 2026)](https://doi.org/10.1117/12.3090867)
- [Semiconductor Engineering: Shift Left Complicates Fab Data Management (Oct 8, 2026)](https://semiengineering.com/shift-left-complicates-fab-data-management/)
- [Semiconductor Engineering: Virtual Metrology In Semiconductor Manufacturing (Sep 19, 2025)](https://semiengineering.com/virtual-metrology-in-semiconductor-manufacturing/)
- [Siemens blog: AI-driven predictive maintenance in semiconductor fabs (Aug 13, 2026; vendor)](https://blogs.sw.siemens.com/electronics-semiconductors/2026/08/13/ai-driven-predictive-maintenance-solving-semiconductor-fab-uptime-challenges/)
- [WardsAuto: How Ford flags assembly line defects with IBM's AI-powered inspection tools (Jun 10, 2026)](https://www.wardsauto.com/news/how-ford-flags-assembly-line-defects-with-ibms-ai-powered-inspection-tools/822404/)
- [Automotive News: Ford uses AI sound detection to catch defects (Sep 10, 2026; paywall)](https://www.autonews.com/ford/an-ford-uses-ai-to-test-for-defects-0910/)
- [Ford Authority: Ford relying on AI to catch engine and transmission issues early (Sep 11, 2026)](https://fordauthority.com/2026/09/ford-relying-on-ai-to-catch-engine-and-transmission-issues-early/)
- [GM: How smarter AI tools help build better vehicles (May 5, 2026)](https://news.gm.com/home.detail.html/Pages/topic/us/en/2026/may/0505-smarterAItoolsbuildvehicles.html)
- [Audi: Audi scales up deployment of artificial intelligence in production (Jan 27, 2026)](https://www.audi.com/en/press-releases/audi-scales-up-deployment-of-artificial-intelligence-in-production-17002)
- [Automotive Manufacturing Solutions: How Audi is building thinking factories](https://www.automotivemanufacturingsolutions.com/smart-factory/audi-makes-a-quantum-leap-in-ai-for-quality/2636335)
- [Automotive News: Toyota, others advance AI in plants (2026; paywall)](https://www.autonews.com/manufacturing/an-toyota-touts-ai-breakthrough-for-quality-1001/)
- [Figure AI: F.02 contributed to the production of 30,000 cars at BMW (Nov 19, 2025)](https://www.figure.ai/news/production-at-bmw)
- [heise online: Humanoider Roboter Figure 02 hilft beim Bau von über 30.000 BMW X3 (Nov 20, 2025)](https://www.heise.de/news/Humanoider-Roboter-Figure-02-hilft-beim-Bau-von-ueber-30-000-BMW-X3-11085641.html)
- [BMW Group: Figure 03 project in Spartanburg (Jun 25, 2026)](https://www.press.bmwgroup.com/global/article/detail/T0458778EN/bmw-group-advances-the-use-of-physical-ai-in-production-with-figure-03-project-in-spartanburg?language=en)
- [BMW Group: US Capital Market Event – Manufacturing (2026, PDF)](https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/ir/downloads/en/2026/US_Capital_Market_Event_BMW_Manufacturing.pdf)
- [Reuters: Hyundai Motor Group plans to deploy humanoid robots at US factory from 2028 (Jan 5, 2026)](https://www.reuters.com/business/autos-transportation/hyundai-motor-group-plans-deploy-humanoid-robots-us-factory-2028-2026-01-05/)
- [GE Aerospace: AI-driven inspection tool for narrowbody engines (Feb 13, 2025)](https://www.geaerospace.com/news/press-releases/ge-aerospace-deploys-ai-driven-inspection-tool-maximize-narrowbody-engine-time-wing)
- [Aviation Week: Pratt & Whitney buys engine inspection software specialist (Jul 15, 2026)](https://aviationweek.com/mro/emerging-technologies/pratt-whitney-buys-engine-inspection-software-specialist)
- [Rolls-Royce: Intelligent borescope method (2025)](https://www.rolls-royce.com/media/our-stories/discover/2025/intelligent-borescope-method.aspx)
- [Aviation Week: SAESL collaborates with ARTC on AI, autonomous engine MRO technologies (Sep 23, 2026)](https://aviationweek.com/mro/emerging-technologies/saesl-collaborates-artc-ai-autonomous-engine-mro-technologies)
- [AIwire/HPCwire: Argonne AI tools power safer, faster aerospace inspections (Jan 9, 2026)](https://www.hpcwire.com/aiwire/2026/01/09/argonne-ai-tools-power-safer-faster-aerospace-inspections/)
- [Aerospace Global News: How Boeing is using AI for rapid parts validation (Apr 25, 2026)](https://aerospaceglobalnews.com/news/how-boeing-is-using-ai-for-rapid-parts-validation/)
- [ASSEMBLY: Airbus deploys robot to automate aircraft seat installation (Sep 1, 2026)](https://www.assemblymag.com/articles/100354-airbus-deploys-robot-to-automate-aircraft-seat-installation)
- [Plant: Airbus tests AR-assisted inspection system at Mirabel facility (May 26, 2026)](https://www.plant.ca/technology/airbus-tests-ar-assisted-inspection-system-at-mirabel-facility/)
- [Acubed (Airbus): Introducing AVIA](https://acubed.airbus.com/blog/adam/introducing-avia/)
- [Airbus: TrustME research project](https://www.research.airbus.com/en/trustme)
- [Aviation Week: False alerts test trust in predictive maintenance systems (Oct 19, 2026)](https://aviationweek.com/mro/emerging-technologies/false-alerts-test-trust-predictive-maintenance-systems)
- [Aviation Week: How the aviation aftermarket is improving predictive maintenance (Aug 27, 2026)](https://aviationweek.com/mro/emerging-technologies/how-aviation-aftermarket-improving-predictive-maintenance)
- [Aviation Week: Aer Lingus accelerates AI-powered maintenance planning (Jun 3, 2026; paywall)](https://aviationweek.com/mro/emerging-technologies/aer-lingus-accelerates-ai-powered-maintenance-planning)
- [Amazon: Amazon deploys over 1 million robots and launches new AI foundation model (Jul 2025)](https://www.aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model)
- [Amazon Science: Amazon builds first foundation model for multirobot coordination](https://www.amazon.science/blog/amazon-builds-first-foundation-model-for-multirobot-coordination)
- [Business Insider: Amazon pulls the plug on Blue Jay warehouse robot (Feb 17, 2026)](https://www.businessinsider.com/amazon-pulls-plug-blue-jay-warehouse-robot-2026-2)
- [DHL Group: MOU with Boston Dynamics for additional 1,000-robot deployment (May 13, 2025)](https://group.dhl.com/en/media-relations/press-releases/2025/dhl-group-signs-mou-with-boston-dynamics-and-accelerates-cross-business-automation-strategy.html)
- [IEEE Spectrum: The Robot I Didn't Expect to Build (Oct 19, 2026)](https://spectrum.ieee.org/agility-robotics-digit-5-redesign)
- [Agility Robotics: GXO and Agility Robotics expand partnership (Oct 26, 2026)](https://www.agilityrobotics.com/content/gxo-and-agility-robotics-expand-partnership-to-accelerate-deployment-of-humanoids-in-u-s-operations)
- [Modern Materials Handling: Best Practices – The state of AI in warehousing (Jul 1, 2026)](https://www.mmh.com/article/best_practices_the_state_of_ai_in_warehousing)
- [IRU: AI and digitalisation buy time in trucking (Oct 22, 2026)](https://www.iru.org/news-resources/newsroom/ai-and-digitalisation-buy-time-trucking)
- [Supply Chain Dive: UPS adds dynamic routing to ORION (Jun 11, 2021)](https://www.supplychaindive.com/news/ups-orion-route-planning-analytics-data-logistics/601673/)
- [DP World: How technology is shaping port operations](https://www.dpworld.com/en/insights/how-technology-is-shaping-port-operations)
- [C&EN: Chemical industry to bet on agentic AI (Jan 6, 2026)](https://cen.acs.org/physical-chemistry/computational-chemistry/Chemical-industry-bet-agentic-AI/104/web/2026/01)
- [Wikimedia Commons: BMW Leipzig body shop with KUKA robots (image)](https://commons.wikimedia.org/wiki/File:BMW_Leipzig_MEDIA_050719_Download_Karosseriebau_max.jpg)
