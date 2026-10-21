---
layout: post
title: "AI Beyond the Big Rockets: How Space Companies in Japan and Europe Use Artificial Intelligence"
date: 2026-10-21 07:47:00 +0200
tags: [AI, space, satellites, edge AI, Earth observation, Japan, Europe, ESA, JAXA]
image: /assets/img/2026-10-21-ai-space-tech-japan-europe.jpg
image_alt: "Artist's rendering of the gold-foil-covered ADRAS-J spacecraft with two solar panels in orbit above Earth, with a spent rocket upper stage in the background"
image_credit: "Image: Astroscale, “ADRAS-J Phase I”, CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:ADRAS-J_Phase_I.png"
image_license: "CC BY-SA 4.0"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "Artist's rendering of Astroscale's ADRAS-J inspection spacecraft, a cube wrapped in gold foil with a large camera lens and two solar wings, flying above the blue-white Earth towards a discarded Japanese rocket upper stage against a star field."
---

Artificial intelligence in space is often discussed in terms of a handful of large launch companies. This post looks elsewhere: at private space companies in Japan and Europe. Where do they actually use AI, and what does it give them? The examples below cover AI that runs on board satellites, software that lets a spacecraft plan its own work, camera-based navigation near space debris, machine-learning analysis of satellite images on the ground, and automated engine design. ESA and JAXA appear only as context, as customers or programme owners. Every claim links to a company, agency or press source.

**Key terms:**

- **Edge AI / onboard AI:** an AI model that runs directly on the satellite's own computer instead of in a data centre on the ground.
- **Downlink:** sending data from a satellite to a ground station. Contact windows are short and bandwidth is limited, so every unneeded image costs time and money.
- **SAR (synthetic aperture radar):** a radar imaging technique that works day and night and through clouds.
- **InSAR:** comparing SAR images taken at different times to measure tiny ground movements.
- **RPO (rendezvous and proximity operations):** approaching another object in orbit and manoeuvring close to it.

## 1. AI on board: filtering images before they come down

### Ubotica and ESA's Φ-sat-1 (Ireland)

In 2020, the Irish company Ubotica supplied the AI processor for ESA's Φ-sat-1 cubesat, which launched on September 3, 2020. Ubotica says it was the "first ever hardware-accelerated AI inference of Earth Observation images on an in-orbit satellite". The chip was an Intel Movidius Myriad 2 vision processor. Its task was simple: a neural network sorted images into cloudy and non-cloudy, so that "only relevant images with usable information are downlinked". Ubotica says this improves bandwidth use and reduces downlink costs significantly.

ESA's fact sheet lists the consortium: cosine Measurement Systems (Netherlands) as prime contractor, Ubotica (Ireland) for the processor and libraries, and the University of Pisa (Italy) for the AI network. A later scientific paper describes the mission as "the first official attempt to successfully run an AI deep convolutional NN directly inferencing on a dedicated accelerator on-board a satellite".

**Sources:** [Ubotica press release](https://www.ubotica.com/news/satellite-successfully-applies-ai-to-process-earth-observation-imagery-in-flight-in-historic-first-for-space), [ESA Φ-sat-1 fact sheet (PDF)](https://esamultimedia.esa.int/docs/EarthObservation/PhiSAT_factsheet2_200605.pdf), [ESA Φ-lab: Φ-sats programme](https://philab.esa.int/flagship-programmes/phi-sats-programme/), [IEEE TGRS paper](https://doi.org/10.1109/tgrs.2021.3125567)

### Open Cosmos and Φ-sat-2 (UK/Spain)

The follow-up mission Φ-sat-2 launched on August 16, 2024. Open Cosmos designed the 6U cubesat platform and is prime contractor; the consortium also includes CGI, Simera, Ubotica, CEiiA, GEO-K and KP Labs. According to ESA, the satellite flies at 510 km, images Earth in seven bands, and runs "AI apps that can be easily installed and operated remotely from Earth". At launch it carried four apps:

- **Cloud detection** (KP Labs): only clear images are sent down.
- **Street map generation** (CGI, "Sat2Map"): turns images into street maps, for example to find passable roads after floods or earthquakes.
- **Vessel detection** (CEiiA): uses machine learning to detect and classify ships, for example to monitor illegal fishing.
- **Image compression** (GEO-K): makes files smaller so more data comes down faster.

Two more apps were to be uploaded in orbit: marine anomaly detection, such as oil spills and algae blooms (IRT Saint Exupéry), and wildfire detection (Thales Alenia Space). The key point, in ESA's words: instead of downlinking raw data, "only the most essential information is sent back to Earth".

**Sources:** [ESA: New satellite demonstrates the power of AI for Earth observation](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Phsat-2/New_satellite_demonstrates_the_power_of_AI_for_Earth_observation), [ESA: Introducing Φsat-2](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Phsat-2/Introducing_Phsat-2)

### Klepsydra (Switzerland)

Klepsydra Technologies builds an AI inference engine, the software layer that runs trained models efficiently on satellite processors. On October 31, 2024, it ran in orbit on a Spire Global satellite in the ship-tracking (AIS) domain, together with ESA. Klepsydra reports that its GPU version "doubles data processing rates" and that the engine is only 4 MB in size, small enough to be uploaded to a satellite already in orbit. The project runs under ESA's General Support Technology Programme.

**Source:** [Klepsydra press release](https://klepsydra.com/klepsydra-ai-successfully-demonstrates-in-orbit-performance-on-spire-global-satellite/)

### Space Compass (Japan)

Space Compass is a joint venture of NTT and the satellite operator SKY Perfect JSAT. In April 2025 it reported an orbital AI demonstration with Microsoft. An AI application for ship detection, built with the Azure Orbital Space SDK in Python, was transferred to the computer of an Earth-observation satellite. It ran more than 40 times over three months. Because only the detected ship information was sent down and unnecessary data was deleted, the amount of data transferred to the ground fell "by 98.1% under certain conditions". The company plans to combine this kind of edge computing with a future optical data-relay satellite.

**Source:** [Space Compass press release, April 14, 2025 (PDF)](https://space-compass.com/news/files/Space%20Compass%20EN_SpaceEdgeDemoWithAzureSpace_PressRelease_20250414.pdf)

## 2. Satellites that plan their own work

### AIKO and D-Orbit (Italy)

The Turin-based company AIKO develops orbital_OLIVER, formerly called MiRAGE, as onboard software for "in-space mission autonomy". It uses event detection and pattern recognition on telemetry and payload data. The satellite can then sense its own status, replan its task schedule and carry out the new plan. AIKO lists goal-based planning, conflict resolution across power, pointing, thermal and downlink limits, and "autonomous recovery" after failures, even when the ground station is offline.

In October 2023, AIKO announced the end of an in-orbit demonstration on D-Orbit's ION Satellite Carrier. It used live telemetry and the iX5 SpaceCloud edge computer from the Swedish company Unibap. During the test, the software mainly managed the telecommunications subsystem, "autonomously optimising the configuration of onboard radios", power distribution and bandwidth allocation. AIKO names the target problems as human-centred operations, latency, short communication windows and costly downlinks. ESA supported the work through its InCubed programme.

**Sources:** [AIKO: orbital_OLIVER](https://www.aikospace.com/solutions/oliver), [ESA InCubed: orbital_OLIVER (MiRAGE)](https://incubed.esa.int/portfolio/orbital_oliver/), [AIKO: in-orbit demonstration news](https://aikospace.com/news/analyse-manage-optimise-orbital-oliver-excels-in-the-in-orbit-demonstration-with/), [Press release (PDF)](https://www.aerospace-valley.com/sites/default/files/2023-10/AIKO%20orbital_OLIVER%20IOD%20-%20PRESS%20RELEASE.pdf)

### Axelspace (Japan)

Axelspace has built and operated 18 microsatellites. For its AxelLiner service, it offers customers a "simple automatic satellite operation system" that "monitors the satellite conditions at all times" and "performs collision avoidance operations when needed". The company does not call this system AI on its services page. It is still a useful example of how much routine operation is being automated.

**Source:** [Axelspace: Services](https://www.axelspace.com/services/)

## 3. Seeing and steering near space debris: Astroscale (Japan)

Astroscale's ADRAS-J mission, run under a JAXA contract worth ¥1.94 billion, approached a real piece of debris in 2024: a Japanese rocket upper stage about 11 m long and weighing about 3 tons. The stage sends no position data and moves freely. According to Astroscale's IAC 2024 paper, the spacecraft used several onboard navigation methods in sequence:

- **Angles-Only Navigation** from several hundred kilometres, using a visible-light camera. Astroscale developed "all the image processing functions and orbit estimation software" itself.
- **Model Matching Navigation (MMN)** from a few kilometres down to about 50 m. The spacecraft compares infrared camera images of the target with a stored model to estimate distance, shape and attitude, without needing the ground system.
- **LiDAR-based navigation** closer in. ADRAS-J flew around the target and finally reached about 15 m.

During one fly-around, "an autonomous abort was triggered by the onboard collision avoidance system due to an unexpected attitude anomaly", and the spacecraft moved away safely, as designed. Astroscale describes these methods as image processing and model matching rather than machine learning. It also presented a separate "machine learning roadmap for on-orbit servicing" at IAC 2024, focusing on autonomy for RPO, guidance and navigation, space robotics and ground operations. The follow-up mission ADRAS-J2 is meant to capture and deorbit debris.

**Sources:** [Astroscale: ADRAS-J closes in to 50 m](https://www.astroscale.com/en/news/historic-approach-to-space-debris-astroscales-adras-j-closes-in-by-50-meters), [Astroscale: first fly-around](https://www.astroscale.com/en/news/astroscales-adras-j-conducts-first-fly-around-observation-of-space-debris), [IAC 2024 paper: Ultra-close RPO of ADRAS-J (PDF)](https://assets.ctfassets.net/k5fy2axdrsqr/C35FiWsfxzqFQlNvAcpht/5d3b9d6159022dafd5f681a9e6e14c02/df5bb278-d30c-4564-a6a6-f74f8f50201a.pdf), [Astroscale: IAC 2024 machine learning roadmap](https://www.astroscale.com/en/resources/iac-2024-machine-learning-oos), [Astroscale contract completion notice (PDF)](https://www.daiwair.co.jp/td_download.cgi?c=186A&i=2943665)

## 4. AI on the ground: turning images into answers

### ICEYE (Finland)

ICEYE, which says it operates the world's largest SAR satellite constellation, launched Flood Rapid Impact in July 2025. Its radar data, which works "day or night and through clouds", is "analyzed using machine learning to quantify the extent of the flooding". The first floodwater map arrives about 6–12 hours after the first signs of an event and is updated every 6–12 hours. Users include emergency managers, utilities, insurers and banks. The existing Flood Insights product supplies maximum flood extent and depth within 24 hours of the flood peak.

**Source:** [ICEYE press release, July 14, 2025](https://www.iceye.com/newsroom/press-releases/iceye-unveils-ml-powered-flood-rapid-impact-product)

### Synspective (Japan)

Synspective builds its own StriX SAR satellites and says it uses "data science and AI to solve industries' geospatial problems". Its Land Displacement Monitoring service uses InSAR to detect ground movement "in millimeters" over wide areas, for dams, mines, ports, roads and railways. Synspective says "deep learning algorithms" update information automatically. A second solution, Object Detection and Classification, uses "SAR data and AI/ML" to monitor ships at sea and aircraft at airports.

**Sources:** [Synspective: Solutions](https://www.synspective.com/solutions/), [Synspective: mining use case](https://www.synspective.com/news/ldm9/), [Synspective: InSAR partnership](https://www.synspective.com/news/insar/)

### Axelspace AxelGlobe (Japan)

Axelspace's optical Earth-observation service AxelGlobe offers satellite data "analyzed by advanced processing technology and AI". Applications include agriculture, infrastructure, land management and forest monitoring. According to the company, AxelGlobe serves more than 30 countries through more than 70 partners and supports the Geospatial Information Authority of Japan in maintaining the national base map.

**Source:** [Axelspace: Services](https://www.axelspace.com/services/)

## 5. Design by algorithm: The Exploration Company (Germany/France)

In March 2026, The Exploration Company (TEC), maker of the reusable Nyx cargo capsule, signed a five-year agreement to license LEAP 71's Noyron RP for its next-generation rocket engines. Noyron is described as a "Large Computational Engineering Model". It encodes physics, engineering logic, production constraints and test feedback, and "autonomously generates components from abstract performance specifications to manufacturable hardware". LEAP 71 notes the system has been called "the first AI that builds machines", but also describes it as "deterministic", so it is not a learned language model. TEC says the aim is to "broaden the design space we can explore and support faster iteration across successive test campaigns". Designs still go through TEC's normal analysis and testing.

**Source:** [TEC: partnership with LEAP 71, March 24, 2026](https://www.exploration.space/blog/the-exploration-company-licenses-leap-71s-noyron-rp-for-the-design-of-next-generation-rocket-engines)

## Limits and gaps

- **Autonomy depends on sensors.** ispace's RESILIENCE lunar lander made a hard landing on the Moon on June 6, 2025. The company's analysis traced it to a laser rangefinder hardware anomaly that delayed valid altitude readings. It said the issue was "not related to the landing guidance control software". Smart software cannot make up for a sensor that delivers bad or late data. ispace estimated up to about ¥1.5 billion in extra development costs for its next missions. [ispace technical cause analysis](https://www.ispace-inc.com/2025/06/24/ispace-releases-technical-cause-analysis-for-hakuto-r-mission-2/)
- **Demonstrations, not yet routine.** Many of the onboard examples above are demonstrations: Φ-sat-1 and Φ-sat-2, the Klepsydra test and the Space Compass test. Figures such as "98.1% less data" apply "under certain conditions", in the company's own words.
- **Not verified for this post.** For iQPS, Interstellar Technologies, Sony's STAR SPHERE, Isar Aerospace, Rocket Factory Augsburg, OHB and Planetek, this research did not find a primary source describing a specific AI use. They are therefore not discussed here. This does not mean they use no AI.
- **Community view.** A Reddit thread on r/space is titled "Why Putting AI Data Centers in Space Doesn't Make Much Sense"; only the thread title was checked for this post. The practical uses shown above are much smaller in scale: running inference on board to cut downlink volume and speed up alerts. [Reddit: Why Putting AI Data Centers in Space Doesn't Make Much Sense](https://www.reddit.com/r/space/comments/1pix4md/why_putting_ai_data_centers_in_space_doesnt_make/)

## Why AI matters here

For these companies, AI's advantage comes less from spectacular autonomy than from making scarce resources stretch further. Onboard models decide which pixels are worth sending down, which saves bandwidth and gets information to users faster (Ubotica, Open Cosmos, Klepsydra, Space Compass). Autonomy software lets a satellite keep working and recover when no ground station is in view (AIKO, Axelspace). Camera-based navigation makes it possible to approach uncooperative objects safely (Astroscale). Machine learning on the ground turns radar and optical images into flood maps, subsidence alerts and ship counts that customers can act on (ICEYE, Synspective, Axelspace). Computational design shortens the loop from engine specification to test hardware (The Exploration Company). The limits are just as clear: many results are still demonstrations, and as ispace's landing showed, autonomy is only as good as its sensors.

## Sources

- [Ubotica: Satellite successfully applies AI to process EO imagery in-flight](https://www.ubotica.com/news/satellite-successfully-applies-ai-to-process-earth-observation-imagery-in-flight-in-historic-first-for-space)
- [ESA: FSSCat/Φ-sat-1 fact sheet (PDF)](https://esamultimedia.esa.int/docs/EarthObservation/PhiSAT_factsheet2_200605.pdf)
- [ESA Φ-lab: Φ-sats programme](https://philab.esa.int/flagship-programmes/phi-sats-programme/)
- [IEEE TGRS: The Φ-Sat-1 Mission](https://doi.org/10.1109/tgrs.2021.3125567)
- [ESA: New satellite demonstrates the power of AI for Earth observation](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Phsat-2/New_satellite_demonstrates_the_power_of_AI_for_Earth_observation)
- [ESA: Introducing Φsat-2](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Phsat-2/Introducing_Phsat-2)
- [Klepsydra: In-orbit demonstration on a Spire Global satellite](https://klepsydra.com/klepsydra-ai-successfully-demonstrates-in-orbit-performance-on-spire-global-satellite/)
- [Space Compass: Orbital AI demonstration with Microsoft (PDF)](https://space-compass.com/news/files/Space%20Compass%20EN_SpaceEdgeDemoWithAzureSpace_PressRelease_20250414.pdf)
- [AIKO: orbital_OLIVER](https://www.aikospace.com/solutions/oliver)
- [ESA InCubed: orbital_OLIVER (MiRAGE)](https://incubed.esa.int/portfolio/orbital_oliver/)
- [AIKO: orbital_OLIVER in-orbit demonstration](https://aikospace.com/news/analyse-manage-optimise-orbital-oliver-excels-in-the-in-orbit-demonstration-with/)
- [AIKO/D-Orbit/Unibap press release (PDF)](https://www.aerospace-valley.com/sites/default/files/2023-10/AIKO%20orbital_OLIVER%20IOD%20-%20PRESS%20RELEASE.pdf)
- [Axelspace: Services](https://www.axelspace.com/services/)
- [Astroscale: ADRAS-J closes in by 50 meters](https://www.astroscale.com/en/news/historic-approach-to-space-debris-astroscales-adras-j-closes-in-by-50-meters)
- [Astroscale: ADRAS-J first fly-around observation](https://www.astroscale.com/en/news/astroscales-adras-j-conducts-first-fly-around-observation-of-space-debris)
- [Astroscale: Ultra-close RPO on-orbit demonstration of ADRAS-J, IAC 2024 (PDF)](https://assets.ctfassets.net/k5fy2axdrsqr/C35FiWsfxzqFQlNvAcpht/5d3b9d6159022dafd5f681a9e6e14c02/df5bb278-d30c-4564-a6a6-f74f8f50201a.pdf)
- [Astroscale: IAC 2024 machine learning roadmap for on-orbit servicing](https://www.astroscale.com/en/resources/iac-2024-machine-learning-oos)
- [Astroscale Holdings: CRD2 Phase I contract completion notice (PDF)](https://www.daiwair.co.jp/td_download.cgi?c=186A&i=2943665)
- [ICEYE: Flood Rapid Impact press release](https://www.iceye.com/newsroom/press-releases/iceye-unveils-ml-powered-flood-rapid-impact-product)
- [Synspective: Solutions](https://www.synspective.com/solutions/)
- [Synspective: Mining risk use case](https://www.synspective.com/news/ldm9/)
- [Synspective: InSAR analysis partnership](https://www.synspective.com/news/insar/)
- [The Exploration Company: Licensing LEAP 71's Noyron RP](https://www.exploration.space/blog/the-exploration-company-licenses-leap-71s-noyron-rp-for-the-design-of-next-generation-rocket-engines)
- [ispace: Technical cause analysis for HAKUTO-R Mission 2](https://www.ispace-inc.com/2025/06/24/ispace-releases-technical-cause-analysis-for-hakuto-r-mission-2/)
- [Reddit r/space: Why Putting AI Data Centers in Space Doesn't Make Much Sense](https://www.reddit.com/r/space/comments/1pix4md/why_putting_ai_data_centers_in_space_doesnt_make/)
- [Wikimedia Commons: ADRAS-J Phase I (image)](https://commons.wikimedia.org/wiki/File:ADRAS-J_Phase_I.png)
