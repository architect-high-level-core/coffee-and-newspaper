---
layout: post
title: "An AI Agent at the Print Bed: How OpenClaw, a Raspberry Pi and OctoPrint Drive a 3D Printer"
date: 2026-10-18 15:42:00 +0200
tags: [AI, AI agents, OpenClaw, 3D printing, Raspberry Pi, OctoPrint, Klipper, image-to-3D]
image: /assets/img/2026-10-18-openclaw-3d-printer-raspberry-pi.jpg
image_alt: "Seven Prusa 3D printers in orange, yellow and black on two white shelves in a hackerspace, with filament boxes on the top shelf"
image_credit: "Photo: Majabojarska, “3D printer farm at Hackerspace Wrocław”, CC BY 4.0, via Wikimedia Commons"
image_source_url: "https://commons.wikimedia.org/wiki/File:3D_printer_farm_at_Hackerspace_Wroc%C5%82aw.jpg"
image_license: "CC BY 4.0"
image_license_url: "https://creativecommons.org/licenses/by/4.0/"
image_description: "A small 3D printer farm at Hackerspace Wrocław: four Prusa MK3S+ and three Prusa Mini printers stand on two white shelves, with labelled storage boxes of filament above them and tools hanging on a pegboard to the right."
---

Can an AI agent run a 3D printer on its own? An Austrian newspaper put it to the test. Over several months, a DER STANDARD editor let the open-source agent OpenClaw run a 3D printer through a Raspberry Pi, with the goal of turning holiday photos into printed souvenirs. This post goes through every part of that setup, explains how the agent controls the chain from chat message to finished print, lists the OpenClaw skills and projects that do the same thing, and compares current printer prices.

**Key terms:**

- **AI agent:** an AI program that takes actions, such as uploading files or starting a machine, instead of only answering questions.
- **OpenClaw:** a free, open-source agent system that people control through chat apps such as WhatsApp or Telegram. It uses a cloud language model and gains abilities through installable "skills".
- **Slicer:** software that cuts a 3D model into thin layers and produces G-code, the movement instructions a printer executes.
- **STL / GLB:** 3D model file formats. STL is the standard for 3D printing; GLB is common in graphics and games.
- **MCP (Model Context Protocol):** a standard interface through which AI agents call external tools.

**Original article:** <https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi>

## The experiment in brief

The article "Mit KI und 3D-Drucker zum ganz persönlichen Urlaubssouvenir" ("A personal holiday souvenir with AI and a 3D printer") by Stefan Mey appeared on October 17, 2026. It describes a setup that ran for several months. At one point the author started a print from a holiday airport.

Sending files by chat and having the agent upload, start, monitor and report the print worked reliably. So did slicing on the Pi for ready-made models from Thingiverse. AI-generated models were the weak point. The agent could not judge orientation, so it printed objects upside down or on their side, and one church model toppled over under too many supports. In the end, a church from central Burgenland came out with crooked angles and a door the AI had "hallucinated away". The author's verdict: "War's das wert? Eher nicht." ("Was it worth it? Not really.") He still plans to leave slicing and printer control to the AI.

The article names no repository, skill or original post. The setup is the author's own. The projects listed further down show how others build the same chain; there is no evidence that the author used any of them.

**Original article:** <https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi>

## The components, one by one

### 1. The 3D printer

The test used an Anycubic Kobra Plus, an FDM printer ("fused deposition modeling") provided by the manufacturer. An FDM printer melts plastic filament in a heated nozzle and lays it down layer by layer on a heated bed. The printer's own electronics run firmware that executes G-code line by line: move the head, heat the nozzle, extrude plastic. The firmware does not decide what to print. It only follows instructions sent over USB, from an SD card or over the network.

In this setup the printer kept its stock firmware and touch display and was driven over USB from the Raspberry Pi.

**Original article:** <https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi>

### 2. The Raspberry Pi

A Raspberry Pi 4B served as the always-on computer next to the printer. It runs both the printer host software (OctoPrint) and the agent (OpenClaw). The article advises installing OpenClaw on a separate device such as a Pi or Mac Mini rather than on a main computer that holds sensitive data.

OpenClaw's official Raspberry Pi guide describes the Pi as the "gateway" only. Language models run in the cloud through an API, so the Pi needs no AI hardware. The guide recommends a Pi 5 with 4 or 8 GB, calls a Pi 4 with 4 GB the "sweet spot", and requires a 64-bit operating system. It names Telegram as the easiest chat channel. Adafruit's installation guide for the same setup carries an explicit security warning.

**Original articles:**

- <https://docs.openclaw.ai/install/raspberry-pi>
- <https://www.raspberrypi.com/news/turn-your-raspberry-pi-into-an-ai-agent-with-openclaw/>
- <https://learn.adafruit.com/openclaw-on-raspberry-pi/installing-openclaw.md>

### 3. Host software: OctoPrint, with Klipper and Moonraker as the alternative

**OctoPrint** is open-source software (AGPL) created and maintained by Gina Häußge. It runs on the Pi and gives the printer a web interface and app access: temperatures, time remaining, a live camera view and plugins such as timelapse recording. For an agent, its REST API is what matters. Every request carries an API key in the `X-Api-Key` header. A single upload request can store a G-code file and start the print right away.

**Klipper** is alternative printer firmware. Its documentation says it "combines the power of a general purpose computer with one or more micro-controllers", which moves the motion calculations off the printer's board. **Moonraker** is a Python web server that exposes APIs for Klipper; agents and web interfaces talk to it, usually on port 7125. In the test, OpenClaw recommended switching to Klipper for speed and quality. It also warned that the printer's built-in touch display would stop working, so the author stayed with OctoPrint.

**Original articles:**

- <https://octoprint.org/>
- <https://docs.octoprint.org/en/master/api/general.html>
- <https://docs.octoprint.org/en/master/api/files.html>
- <https://www.klipper3d.org/>
- <https://moonraker.readthedocs.io/en/latest/>

### 4. Camera and failure detection

The author used an old USB webcam; a Raspberry Pi camera module also works. OctoPrint streams the image. When asked, OpenClaw sends a snapshot of the finished print to the chat, which the author describes as blurry but good enough. Freemium services such as Obico and OctoEverywhere add remote access and AI print-failure detection. OctoEverywhere's core features are free, and its "Supporter" tier costs $4.99 per month for five printers with unlimited AI failure detection. In the test the detection missed a failure: a dice tower came loose from the bed and no alarm followed. Obico's pricing page could not be retrieved for this post.

**Original articles:**

- <https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi>
- <https://octoeverywhere.com/supporter>

### 5. OpenClaw, the language models and the chat interface

OpenClaw is the orchestrator. It receives instructions from a smartphone chat (WhatsApp or Telegram in the article), decides which tools to call, runs commands on the Pi and reports back. The Pi is too weak to run a local model, so OpenClaw uses a cloud model billed per token. The author mostly used Gemini 3.1 Pro Preview and at times GPT-6 Astra, which he heard was better at 3D modelling. The agent's memory stored the printer profile, so later requests did not need to repeat the printer settings.

Skills are added from the ClawHub registry with `openclaw skills install`.

**Original articles:**

- <https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi>
- <https://docs.openclaw.ai/cli/skills>

### 6. The slicer

Once a slicer was installed on the Pi and a printer profile stored, the agent could take an STL file plus instructions such as size and layer height, produce G-code and start the print. The article does not say which slicer was used. Related projects use CuraEngine, PrusaSlicer or OrcaSlicer.

**Original article:** <https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi>

### 7. Creating the 3D model

The author tried three approaches:

- **Code to geometry:** the model wrote Python for OpenSCAD, which was enough for simple shapes such as a bookmark. Blender code for Copenhagen's Little Mermaid gave poor results; GPT-6 Astra did better but still not well, at a low single-digit euro cost in tokens.
- **Image-to-3D service:** OpenClaw suggested specialised services, and the author chose 3D AI Studio (freemium, then pay per use) and gave the agent its API key. 3D AI Studio exports GLB, OBJ, FBX, STL, USDZ and PLY and sells one-time credit packs, for example 2,000 credits for $34.
- **Ready-made models:** files from Thingiverse printed reliably.

**Original articles:**

- <https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi>
- <https://www.3daistudio.com/Pricing>

## How OpenClaw controls the whole chain

Based on the article, the full chain runs as follows:

1. **Chat:** the user sends a holiday photo, or an STL file with instructions, to OpenClaw on WhatsApp or Telegram.
2. **Modelling:** OpenClaw sends the photo to 3D AI Studio through its API and receives a GLB model.
3. **Conversion:** OpenClaw converts the GLB file to STL on the Pi.
4. **Slicing:** using the slicer and the printer profile stored in memory, it generates G-code with the requested size and layer height.
5. **Printing:** it uploads the G-code to OctoPrint through the REST API and starts the job.
6. **Monitoring:** it reports the estimated time and, at the end, sends a webcam snapshot to the chat.

The weak step is between 2 and 4. The agent cannot see how the model sits on the bed, so a person should check orientation and scale. On the airport occasion, the author did that himself in a slicer on his laptop.

**Original article:** <https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi>

## OpenClaw skills and projects that build the same chain

- **OctoClaw (ClawHub):** an OctoPrint skill covering status, error checks, start, pause, resume and cancel, temperatures, file upload, G-code analysis, webcam snapshots and Telegram updates. It has about 1,500 downloads.
- **moonraker (ClawHub):** status, pause, resume, cancel and emergency stop for Klipper printers through the Moonraker API.
- **Kiln (Hadron Labs, AGPL):** an MCP server and CLI that agents use to design, check printability, slice (PrusaSlicer, OrcaSlicer or BambuStudio), print and monitor. It supports OctoPrint, Moonraker/Klipper, Creality, Bambu Lab, Prusa Link and Elegoo, and it can hand jobs to the third-party service Craftcloud. Every print needs a human approval first: a tap on the phone, a dialog prompt, or a four-digit code that the agent cannot see. Kiln's pages give different tool counts (430, 702, 919 or 926).
- **claw3d (MIT):** sketch, image or text to a GLB model through FAL.ai (FLUX and Tripo), slicing with CuraEngine and printing through Moonraker, built for OpenClaw with Telegram.
- **openclaw-3dprint:** chat message, language model, Tripo3D or Meshy mesh, OrcaSlicer or PrusaSlicer, then a Bambu Lab printer, with an approval after each step.
- **Bambu Lab and Klipper configuration skills:** LAN control of Bambu printers, and helpers for Klipper's `printer.cfg` and OrcaSlicer profiles.
- **EVEE (MCP, not OpenClaw-specific):** turns a sentence into parametric CAD with build123d, slices with PrusaSlicer and prints through OctoPrint on a Raspberry Pi attached to a Creality Ender-3 V3 SE, with human approval gates.

**Original articles:**

- <https://clawhub.ai/peterhanily/skills/octoclaw-print>
- <https://clawhub.ai/rogueecho/skills/moonraker>
- <https://www.kiln3d.com/docs>
- <https://www.kiln3d.com/openclaw>
- <https://github.com/makermate/claw3d>
- <https://github.com/phoenixjyb/openclaw-3dprint>
- <https://github.com/openclaw/skills/tree/main/skills/photonixlaser-ux/bambu-lab-skill>
- <https://github.com/santiagomoneta/3d-printing-skills>
- <https://github.com/shivakumar-sridhar/EVEE>

## What the community says

- **Reddit (r/openclaw, January 31, 2026):** one user had OpenClaw design a crib riser in CadQuery, but a Bambu command-line tool crashed on macOS. Another called the idea of limited use for consumers. They saw three real uses: queue management for dozens of commercial printers, hands-off printing and sketch-to-CAD. No Reddit discussion of the DER STANDARD article was found. Reddit was read through public search results only.
- **X:** developer @dkfiander built an OpenClaw skill that slices an STL, connects to OctoPrint over SSH, prints, watches the camera and posts a Discord photo every 5%. He admits "It forgets this a lot". He earlier had OpenClaw rewrite the Marlin firmware of an Ender 3. The Agentic Daily summarised the project on October 11, 2026.
- **Forward Future:** no article on OpenClaw and 3D printing was found. Its OpenClaw use-case guide covers home and infrastructure automation but not printers. A community spotlight from April 2025 shows the same photo-to-print chain done by hand: Leonardo.ai, image-to-3D, Blender, a slicer and a Flashforge printer. The October 1, 2026 newsletter announced a guest essay on GPT-6 Astra and "vibe CAD" for hardware design.

**Original articles:**

- <https://www.reddit.com/r/openclaw/comments/1qs3mdl/has_anyone_connected_a_3d_printer_to_openclaw_yet/>
- <https://x.com/dkfiander/status/2109022121292599464>
- <https://x.com/dkfiander/status/2104221876587262214>
- <https://x.com/dkfiander/status/2104221538442428848>
- <https://x.com/theagenticdaily/status/2109308254941827545>
- <https://www.forwardfuture.ai/p/what-people-are-actually-doing-with-openclaw-25-use-cases>
- <https://www.forwardfuture.ai/p/community-spotlight-3d-printing-the-astro-mascot>
- <https://forwardfuture.com/newsletter/daily/2026-10-01/ai-s-physical-singularity-openai-s-devday-strategy-ftc-scrutiny>

## Printer prices: models that work with a Pi, Klipper, OctoPrint or network control

Shop prices include VAT and exclude shipping. They were checked on October 18, 2026. "Was" is the regular price shown by the shop; many current prices are sale prices.

| Printer | Price | Shop | How an agent connects |
|---|---|---|---|
| Creality Ender-3 V3 SE | €169 (was €239) | Creality EU store | Marlin firmware; USB to a Raspberry Pi running OctoPrint (as in EVEE) |
| Anycubic Kobra 3 | €199 (was €399) | Anycubic EU store | Successor family of the printer in the article; OctoPrint/Klipper compatibility not verified |
| Elegoo Neptune 4 Pro | €219 (was €299) | Elegoo EU store | Klipper pre-installed; control through Moonraker |
| Creality K1C | €349 (was €599) | Creality EU store | Klipper-based CrealityOS; Moonraker only if reachable locally (some firmware needs root access) |
| Sovol SV08 | €469 (was €599) | sovol.eu | Klipper-based; Moonraker; built-in camera, Wi-Fi and Ethernet |
| Original Prusa MK4S | €999 assembled, €719 kit | prusa3d.com (Austria, EUR) | Ethernet and Wi-Fi; PrusaLink and Prusa Connect |

The Kobra Plus used in the article no longer appears as a printer in Anycubic's EU store; only spare parts do. Several skills also support Bambu Lab printers in LAN mode, but no EUR price was checked for them.

**Raspberry Pi and parts (BerryBase, checked October 18, 2026):**

| Part | Price |
|---|---|
| Raspberry Pi 4 Model B, 4 GB | €105.90 |
| Raspberry Pi 5, 4 GB | €118.50 |
| Official USB-C power supply for Pi 4 (5.1 V / 3 A) | €7.90 |
| Official 27 W power supply for Pi 5 | €12.40 |
| SanDisk Extreme microSD, 32 GB | €22.90 |
| Official Pi 4 case / Pi 5 Active Cooler | €4.90 / €5.90 |
| Raspberry Pi Camera Module 3 (12 MP) | €28.90 |
| Total, Pi 4 with camera | about €170 |
| Total, Pi 5 with camera (no case) | about €189 |

OpenClaw's guide still estimates $35–80 for the hardware, which is below current shop prices. A USB webcam, as in the article, is a cheaper alternative to the camera module; no webcam price was checked. Running costs include tokens for the language model (a single-digit euro amount per souvenir according to the article), image-to-3D credits, filament and electricity. The camera price comes from a search result for the shop page.

**Original articles:**

- <https://store.creality.com/eu/products/ender-3-v3-se-3d-printer>
- <https://eu.anycubic.com/products/kobra-3>
- <https://eu.elegoo.com/products/elegoo-neptune-4-pro-fdm-3d-printer>
- <https://store.creality.com/eu/products/k1c-3d-printer>
- <https://sovol.eu/products/sovol-sv08-3d-printer>
- <https://www.prusa3d.com/de/produkt/original-prusa-mk4s-3d-drucker-5/?country=AT&currency=eur>
- <https://www.berrybase.de/raspberry-pi-4-computer-modell-b-4gb-ram>
- <https://www.berrybase.de/raspberry-pi-5-4gb-ram>
- <https://www.berrybase.de/raspberry-pi-camera-module-3-12mp>

## What the setup shows

The experiment splits the agent's work into two kinds of task. Routine control (upload, start, monitor, report) is well covered by today's skills and APIs. Creative work (generating a model and orienting it so it prints well) still needs a person to check it. Newer tools such as Kiln and openclaw-3dprint build that check into the workflow and require a human approval before the printer moves.

**Original articles:**

- <https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi>
- <https://www.kiln3d.com/openclaw>

## Sources

- [DER STANDARD: Mit KI und 3D-Drucker zum ganz persönlichen Urlaubssouvenir](https://www.derstandard.at/story/3000000338132/openclaw-ki-3d-drucker-ai-agent-raspberry-pi)
- [OpenClaw Docs: Raspberry Pi](https://docs.openclaw.ai/install/raspberry-pi)
- [OpenClaw Docs: Skills CLI](https://docs.openclaw.ai/cli/skills)
- [Raspberry Pi: Turn your Raspberry Pi into an AI agent with OpenClaw](https://www.raspberrypi.com/news/turn-your-raspberry-pi-into-an-ai-agent-with-openclaw/)
- [Adafruit: OpenClaw on Raspberry Pi](https://learn.adafruit.com/openclaw-on-raspberry-pi/installing-openclaw.md)
- [OctoPrint](https://octoprint.org/)
- [OctoPrint API: General](https://docs.octoprint.org/en/master/api/general.html)
- [OctoPrint API: Files](https://docs.octoprint.org/en/master/api/files.html)
- [Klipper documentation](https://www.klipper3d.org/)
- [Moonraker documentation](https://moonraker.readthedocs.io/en/latest/)
- [OctoEverywhere: Supporter](https://octoeverywhere.com/supporter)
- [3D AI Studio: Pricing](https://www.3daistudio.com/Pricing)
- [ClawHub: OctoClaw](https://clawhub.ai/peterhanily/skills/octoclaw-print)
- [ClawHub: moonraker](https://clawhub.ai/rogueecho/skills/moonraker)
- [Kiln: Documentation](https://www.kiln3d.com/docs)
- [Kiln: OpenClaw](https://www.kiln3d.com/openclaw)
- [GitHub: makermate/claw3d](https://github.com/makermate/claw3d)
- [GitHub: phoenixjyb/openclaw-3dprint](https://github.com/phoenixjyb/openclaw-3dprint)
- [GitHub: openclaw/skills – bambu-lab-skill](https://github.com/openclaw/skills/tree/main/skills/photonixlaser-ux/bambu-lab-skill)
- [GitHub: santiagomoneta/3d-printing-skills](https://github.com/santiagomoneta/3d-printing-skills)
- [GitHub: shivakumar-sridhar/EVEE](https://github.com/shivakumar-sridhar/EVEE)
- [Reddit: Has anyone connected a 3D printer to openclaw yet?](https://www.reddit.com/r/openclaw/comments/1qs3mdl/has_anyone_connected_a_3d_printer_to_openclaw_yet/)
- [X: @dkfiander – OpenClaw print skill](https://x.com/dkfiander/status/2109022121292599464)
- [X: @dkfiander – Pi and OctoPrint](https://x.com/dkfiander/status/2104221876587262214)
- [X: @dkfiander – Ender 3 firmware](https://x.com/dkfiander/status/2104221538442428848)
- [X: @theagenticdaily – summary](https://x.com/theagenticdaily/status/2109308254941827545)
- [Forward Future: What People Are Actually Doing With OpenClaw](https://www.forwardfuture.ai/p/what-people-are-actually-doing-with-openclaw-25-use-cases)
- [Forward Future: 3D-Printing the Astro Mascot](https://www.forwardfuture.ai/p/community-spotlight-3d-printing-the-astro-mascot)
- [Forward Future: Newsletter, October 1, 2026](https://forwardfuture.com/newsletter/daily/2026-10-01/ai-s-physical-singularity-openai-s-devday-strategy-ftc-scrutiny)
- [Creality: Ender-3 V3 SE](https://store.creality.com/eu/products/ender-3-v3-se-3d-printer)
- [Anycubic: Kobra 3](https://eu.anycubic.com/products/kobra-3)
- [Elegoo: Neptune 4 Pro](https://eu.elegoo.com/products/elegoo-neptune-4-pro-fdm-3d-printer)
- [Creality: K1C](https://store.creality.com/eu/products/k1c-3d-printer)
- [Sovol: SV08](https://sovol.eu/products/sovol-sv08-3d-printer)
- [Prusa: MK4S](https://www.prusa3d.com/de/produkt/original-prusa-mk4s-3d-drucker-5/?country=AT&currency=eur)
- [BerryBase: Raspberry Pi 4, 4 GB](https://www.berrybase.de/raspberry-pi-4-computer-modell-b-4gb-ram)
- [BerryBase: Raspberry Pi 5, 4 GB](https://www.berrybase.de/raspberry-pi-5-4gb-ram)
- [BerryBase: Camera Module 3](https://www.berrybase.de/raspberry-pi-camera-module-3-12mp)
