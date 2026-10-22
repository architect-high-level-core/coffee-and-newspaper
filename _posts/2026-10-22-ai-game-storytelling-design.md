---
layout: post
title: "Talking Teammates and Living Worlds: How AI Is Changing Storytelling and Player Experience in Video Games"
date: 2026-10-22 07:00:00 +0200
tags: [AI, video games, game design, NPCs, storytelling, accessibility, voice acting, SAG-AFTRA]
image: /assets/img/2026-10-22-ai-game-storytelling-design.jpg
image_alt: "A white Xbox Adaptive Controller seen from above on a grey surface, with two large round black buttons, a black directional pad and a row of small ports along the top edge"
image_credit: "Photo: InclusiveGameLab, “InclusiveGameLab Xbox-Adaptive-Controller 4 CC-BY-SA 01”, CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:InclusiveGameLab_Xbox-Adaptive-Controller_4_CC-BY-SA_01.jpg"
image_license: "CC BY-SA 4.0"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "Top-down photo of a white Xbox Adaptive Controller, an accessibility controller for players with limited mobility, lying on a grey surface. It has two large round black buttons, a black directional pad on the left, small function buttons, a row of connection ports along the top edge and a small green triangle sticker with cartoon eyes."
---

For decades, a video game character could only say what a writer had written and an actor had recorded. In 2026, that rule is starting to bend. Game characters now listen to spoken commands and answer in their own words. Smaller systems quietly adjust pacing, test levels and adapt menus. Behind the scenes, AI tools write code, generate textures and help with research. At the same time, the backlash has grown. More than half of game industry professionals now say generative AI is harming their industry, and voice actors went on strike for almost a year over how their voices may be copied.

This post looks at where AI is actually changing storytelling and player experience (UX) design as of October 2026, which projects are real products and which are still experiments, and how developers, performers and players are reacting.

**Key terms:**

- **NPC (non-player character):** any character in a game that the player does not control, from a shopkeeper to an enemy soldier.
- **Generative AI:** AI that produces new content, such as text, speech, images or 3D models, instead of only classifying or predicting.
- **Small language model (SLM):** a compact text model that can run on a home PC's graphics card instead of in a data centre.
- **TTS / ASR:** text-to-speech (turning text into a spoken voice) and automatic speech recognition (turning speech into text).
- **Behaviour tree:** a traditional, hand-built decision structure that tells game characters what to do in each situation.
- **Digital replica:** an AI copy of a real performer's voice or likeness that can generate new performances.

## 1. From scripted lines to conversation: AI-driven characters

### NVIDIA ACE: from talking NPCs to "co-playable characters"

NVIDIA's ACE is, in the company's words, "a suite of RTX-accelerated digital human technologies that bring game characters to life with AI". NVIDIA says that since its debut in 2023, ACE has grown "from conversational NPCs to autonomous game characters that use AI to perceive, plan, and take action within their environment" ([NVIDIA GeForce News, June 2026](https://www.nvidia.com/en-us/geforce/news/pubg-ally-ai-teammate-beta-available-now/)).

The first public showcase was the mech game *Mecha BREAK*. There, players could talk in natural language to their mechanic character, ask for advice on objectives, and have the paint job changed. The demo used a 4-billion-parameter NVIDIA model on the player's PC, NVIDIA Audio2Face-3D for facial animation, OpenAI's Whisper for speech recognition, and a cloud voice from ElevenLabs ([NVIDIA](https://www.nvidia.com/en-us/geforce/news/mecha-break-nvidia-ace-nims-rtx-pc-laptop-games-apps/)).

In March 2025, ACE reached a commercial game for the first time with KRAFTON's life simulation *inZOI*. An experimental "Smart Zoi" setting turns the town's residents into AI-driven characters that act according to their personalities. NVIDIA's example is a considerate Smart Zoi who "might decide to assist a lost character with directions, or offer food to a hungry stranger". At the end of each day, Smart Zois adjust their schedules based on what happened to them. Players can read their "inner thoughts" in real time and change their life goals with free-form text. All of this runs on a 0.5-billion-parameter model on the player's graphics card ([NVIDIA, March 2025](https://www.nvidia.com/en-us/geforce/news/nvidia-ace-naraka-bladepoint-inzoi-launch-this-month/)).

In June 2026, KRAFTON and NVIDIA opened a two-week public beta of **PUBG Ally** in *PUBG: BATTLEGROUNDS*. This AI teammate "makes independent decisions such as looting, fighting and navigating to support you, all without requiring continuous prompting" and understands voice and text commands ([NVIDIA, June 17, 2026](https://www.nvidia.com/en-us/geforce/news/pubg-ally-ai-teammate-beta-available-now/)). The technical design shows how such characters are actually built. A speech model transcribes what the player says. A 2-billion-parameter language model reads a text description of the match and decides what to say and do. A custom KRAFTON voice model speaks the answer. A classic behaviour tree carries out the fast moves, such as aiming. Everything runs locally on graphics cards with at least 8 GB of memory. KRAFTON calls the result a "co-playable character (CPC)", a new category "designed to cooperate, adapt, and remember across sessions" ([NVIDIA Technical Blog](https://developer.nvidia.com/blog/how-krafton-built-pubg-ally-a-co-playable-character-powered-by-nvidia-ace/)).

### Ubisoft: from NEO NPC to Teammates

Ubisoft showed its NEO NPC prototype, developed with NVIDIA, in March 2024. In November 2025 it followed up with **Teammates**, described as "its first playable generative AI research project". In this short first-person shooter, the player directs two AI squadmates, Sofia and Pablo, by voice. An AI assistant called Jaspar can highlight enemies, explain lore, change settings and even pause the game ([Ubisoft News](https://news.ubisoft.com/en-us/article/3mWlITIuWuu0MoVuR6o8ps/ubisoft-reveals-teammates-an-ai-experiment-to-change-the-game)). Ubisoft's press release says Jaspar can adjust the interface "on the fly, adapting for color blindness or modifying visual elements", and that these features "show strong potential for improving accessibility and personalization". Teammates remains an R&D experiment in a closed playtest, not a released game ([Ubisoft press release, PDF](https://staticctf.ubisoft.com/8aefmxkxpxwl/2QCAorjku7w7gH1LGORV3t/6e8f347be3ecab7daa4769e5300086bc/Ubisoft_Unveils_%C3%A2__Teammates%C3%A2____Its_First_Playable_Generative_AI_Experience_Through_Closed_Player_Testing.pdf); [Game Developer](https://www.gamedeveloper.com/business/ubisoft-s-first-playable-generative-ai-experience-is-an-r-d-experiment-called-teammates-)).

At NVIDIA's GTC conference in 2026, Ubisoft explained a key design constraint: the whole loop, from the player speaking to the character reacting, had to take less than two seconds. To get there, the team used fast speech recognition, a light cloud language model and streaming voice output. The character starts moving as soon as the model produces its first action ([Computer Weekly, May 2026](https://www.computerweekly.com/news/366642940/In-video-games-of-the-future-your-AI-teammates-will-actually-listen)).

### Inworld: from character engine to infrastructure

Inworld AI was one of the best-known startups for "AI NPCs". In an October 2025 blog post, it describes itself as a company that "began by pushing the frontier of lifelike, interactive characters for games". Today it powers "real-time, voice-forward experiences" and provides "the infrastructure" to scale them. It names partners including Xbox, NVIDIA, Ubisoft, Niantic, Streamlabs, Unity and Epic ([Inworld blog](https://inworld.ai/blog/new-ai-infrastructure-scaling-games-media-characters)). With Streamlabs and NVIDIA, Inworld also built an AI assistant for live streamers ([Business Wire](https://www.businesswire.com/news/home/20250106653761/en/Inworld-AI-Collaborates-with-Logitech-Gs-Streamlabs-and-NVIDIA-to-Power-the-Brains-Behind-Intelligent-Streaming-Assistant)). The shift is typical of the field: the hard part is less "making a character talk" than making voice and reasoning fast, cheap and reliable enough for millions of players.

**What this means for storytelling:** these characters are not replacing writers. The playable examples so far work inside tightly limited roles: a teammate in a shooter, a mechanic, a town resident with a personality and goals. The game's structure still defines what they can do, through behaviour trees and the actions the game exposes to them. What changes is the texture of the experience. The player can phrase things in their own words, and characters can react to situations no writer planned for.

## 2. Stories that write themselves: procedural and emergent narrative

### AI Dungeon: the original "infinite story"

*AI Dungeon* launched in 2019 as a text adventure in which a language model, originally OpenAI's GPT-2, continues whatever story the player types ([Wikipedia](https://en.wikipedia.org/wiki/AI_Dungeon)). It is still running. Its developer Latitude's "Alchemy" update page advertises new model options, narration and stronger memory ([AI Dungeon: Alchemy](https://aidungeon.com/alchemy)). Latitude's separate role-playing product, originally announced as "Heroes", was renamed, as Latitude explained on Reddit ([r/AIDungeon](https://www.reddit.com/r/AIDungeon/comments/1n9le0z/we_cant_launch_heroeswith_that_name/)).

*AI Dungeon* shows both the appeal and the limits of fully generated stories. Players get total freedom. In exchange, they get less of the structure, pacing and payoff that authored stories provide, and the model must remember a long story without contradicting itself. That is why "memory" features are a recurring theme in its updates.

### Emergent stories from simulated characters

A different approach lets stories emerge from characters with goals rather than from a text generator. *inZOI*'s Smart Zois, which plan their days, help strangers and adjust their schedules ([NVIDIA](https://www.nvidia.com/en-us/geforce/news/nvidia-ace-naraka-bladepoint-inzoi-launch-this-month/)), are a current example. Life simulations have always created stories this way. The new part is that the characters' reasoning is now expressed in natural language, and the player can read and edit it.

### Generating gameplay itself: Microsoft's Muse

In February 2025, Microsoft Research introduced **Muse**, which it calls its "first generative AI model designed for gameplay ideation". It is a "World and Human Action Model" trained on gameplay data from Ninja Theory's game *Bleeding Edge*. It can generate game visuals, controller actions, or both ([Microsoft Research blog](https://www.microsoft.com/en-us/research/blog/introducing-muse-our-first-generative-ai-model-designed-for-gameplay-ideation/)). The accompanying paper in *Nature* frames the model as a tool for designers to explore ideas, not as a finished game generator ([Nature](https://www.nature.com/articles/s41586-025-08600-3)). Xbox presented it as a tool for creators and players ([Xbox Wire](https://news.xbox.com/en-us/2025/02/19/muse-ai-xbox-empowering-creators-and-players/)).

## 3. Reading the player: adaptive difficulty and player modelling

Adaptive game design is older than today's generative AI. The classic example is Valve's "AI Director" in *Left 4 Dead* (2008). According to Valve's own presentation, the system estimated each survivor's "emotional intensity" from events such as taking damage. It then shaped the flow of enemies in cycles of build-up, peak, fade and relaxation, so that moments of panic were followed by short breathers ([Valve: The AI Systems of Left 4 Dead, PDF](https://valvearchive.com/Presentations/AIIDE%202009/ai_systems_of_l4d_mike_booth.pdf)). The goal was dramatic pacing, a story-like rhythm, rather than simply making the game easier or harder.

The new generation of AI characters extends this idea from pacing to personality. Ubisoft says its Teammates adapt "to players' strategies, moods and even personal slang" ([Ubisoft press release, PDF](https://staticctf.ubisoft.com/8aefmxkxpxwl/2QCAorjku7w7gH1LGORV3t/6e8f347be3ecab7daa4769e5300086bc/Ubisoft_Unveils_%C3%A2__Teammates%C3%A2____Its_First_Playable_Generative_AI_Experience_Through_Closed_Player_Testing.pdf)). PUBG Ally "dynamically adjusts its playstyle based on your commands and emergent battlefield situations" ([NVIDIA](https://www.nvidia.com/en-us/geforce/news/pubg-ally-ai-teammate-beta-available-now/)). Instead of a hidden difficulty slider, the player gets a companion who responds to how they play.

## 4. AI behind the scenes: playtesting, accessibility and assets

### Automated playtesting

Much of AI's impact on player experience never appears on screen. EA's research division SEED has published work on reinforcement-learning agents, AI players that learn by trial and error. They are deployed alongside scripted test bots to find bugs, exploits and balance problems in large games. SEED's paper on deploying such agents in AAA games concludes that reinforcement learning works best as a complement to, not a replacement for, traditional scripted tests ([arXiv: Technical Challenges of Deploying RL Agents for Game Testing in AAA Games](https://ar5iv.labs.arxiv.org/html/2307.11105); [EA SEED presentation, PDF](https://media.contentapi.ea.com/content/dam/ea/seed/presentations/seed-augmenting-automated-game-testing-with-deep-reinforcement-learning.pdf)). For players, this means fewer broken levels and better-tuned difficulty. AI is one more tester, not the designer.

### Accessibility

Voice-driven AI could become a major accessibility tool. Ubisoft's Jaspar can open menus, change settings and adjust the interface for colour blindness by voice ([Ubisoft press release, PDF](https://staticctf.ubisoft.com/8aefmxkxpxwl/2QCAorjku7w7gH1LGORV3t/6e8f347be3ecab7daa4769e5300086bc/Ubisoft_Unveils_%C3%A2__Teammates%C3%A2____Its_First_Playable_Generative_AI_Experience_Through_Closed_Player_Testing.pdf)). A teammate who understands "cover me" or "go get that medkit" can help players who find fast, precise controller input difficult. Hardware such as the Xbox Adaptive Controller in this post's photo has made games physically easier to play. Natural-language control could make complex game systems easier to understand. These remain promises from experiments, not tested features in widely released games.

### Generative assets and tools

According to the GDC 2026 State of the Game Industry survey of more than 2,300 professionals, 36% use generative AI tools at work. Usage is lower inside game studios (30%) than at publishers, support and marketing firms (58%). The most common uses are research and brainstorming (81%), everyday tasks such as emails and code assistance (47% each), and prototyping (35%) ([GDC](https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/)). Among those who use it, only 19% use it for asset generation and 5% for player-facing features ([Game Developer](https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry)). So far, generative AI touches player-facing storytelling far less than the headlines suggest.

## 5. Voices: the strike and the new rules

The biggest fight over AI in games has been about voices. SAG-AFTRA, the US performers' union, struck against major game companies for 320 days, according to TheWrap, in a dispute driven by AI protections. The strike was settled when members approved the 2025 Interactive Media Agreement on July 9, 2025, by 95.04% to 4.96%. The signatory companies include Activision, Disney Character Voices, Electronic Arts, Insomniac, Take 2 and WB Games. The deal includes "consent and disclosure requirements for A.I. digital replica use and the ability for performers to suspend consent for the generation of new material during a strike" ([SAG-AFTRA](https://www.sagaftra.org/sag-aftra-members-approve-2025-video-game-agreement); [AP News](https://apnews.com/article/sagaftra-video-game-ai-contract-vote-results-048576144e7a0fa9b4827520dd269a3f)).

The union's FAQ shows how the contract touches game design directly:

- An employer must describe how a replica will be used "to a legal standard of reasonable specificity". This includes the genre, the size of the role, whether the content is sexual or violent, and "whether the character will be used to create Real-Time Generated dialogue" ([SAG-AFTRA: 2025 Interactive Media Agreement](https://www.sagaftra.org/contracts-industry-resources/interactive/2025-interactive-media-video-game-agreement)).
- Performers must receive a usage report on how their digital replica was used.
- According to TheWrap, performances used for "real-time generation", such as a chatbot character with a replica voice, earn at least 7.5 times the minimum scale ([TheWrap](https://www.thewrap.com/sag-aftra-ratify-interactive-media-agreement-video-game-strike/)).

In other words, the AI-talking-character future described above now has a price tag and a consent process, at least for union performers.

A real-world example is Embark Studios. Its design director told PCGamesN that *Arc Raiders* "in no way uses generative AI whatsoever" for visuals. He confirmed that the game uses the same text-to-speech model as Embark's earlier game *The Finals*: "we hire and contract voice actors for it – it's part of their contract". The model lets the in-game ping system say "every single item name, every single location name, and compass directions" without recording each new line ([PCGamesN](https://www.pcgamesn.com/arc-raiders/generative-ai-use)). Even so, the game's AI disclosure on Steam triggered public debate ([Polygon](https://www.polygon.com/arc-raiders-ai-voices-the-finals-embark-studios/); [BBC](https://www.bbc.com/news/articles/c773dmy876zo)).

## 6. How studios and players are reacting

- **Developers are more sceptical than ever.** In GDC's 2026 survey, 52% of professionals said generative AI is having a negative impact on the industry, up from 30% in 2025 and 18% in 2024. Only 7% saw a positive impact. The most negative groups are visual and technical artists (64%), game designers and narrative writers (63%), and programmers (59%). Executives and business staff are the most positive (19%) ([GDC](https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/)). The Verge notes that most respondents are based in the United States (54%), and that the organisers admit the makeup is "far from truly representative of the global community" ([The Verge](https://www.theverge.com/entertainment/869386/ai-game-development-gdc-survey)).
- **Disclosure is becoming normal.** According to PC Guide, more than 17,000 games on Steam now come with an AI disclosure ([PC Guide](https://www.pcguide.com/news/more-than-17000-games-on-steam-now-come-with-an-ai-disclosure-30-use-ai-for-two-or-more-reasons/)).
- **Studios frame AI as "augmentation".** GDC's 2026 trends report notes that there "appears to be a line in the sand (within the industry and among players themselves)" on generative AI, and records worries that widespread adoption of these tools "could lead to more layoffs" ([GDC 2026 trends report via InvestGame](https://investgame.net/news/pdf/2026-05-27-gdc26_trends_report_final_wp/)).

## 7. Why AI matters here

AI is changing game storytelling in two different ways. The visible way is characters who listen and answer: teammates who follow spoken plans, residents who live by their own goals, assistants who adjust the interface by voice. As of October 2026, most of these are experiments, betas or optional features, and they work inside narrow roles that human designers define. The invisible way is larger already: AI helps developers research, prototype, code and test, which shapes the experience without any line of AI dialogue. The limits are as much social as technical. Voice actors have won consent and pay rules for digital replicas. More than half of developers now see generative AI as harmful to their industry. Players increasingly check AI disclosures before they buy. The technology can make game worlds feel more responsive. Whether players accept it will depend on whether it adds something human writers and actors could not, rather than replacing them.

## Sources

- [NVIDIA GeForce News: PUBG Ally Duo Mode beta](https://www.nvidia.com/en-us/geforce/news/pubg-ally-ai-teammate-beta-available-now/)
- [NVIDIA Technical Blog: How KRAFTON built PUBG Ally](https://developer.nvidia.com/blog/how-krafton-built-pubg-ally-a-co-playable-character-powered-by-nvidia-ace/)
- [NVIDIA: ACE autonomous game characters in inZOI and NARAKA](https://www.nvidia.com/en-us/geforce/news/nvidia-ace-naraka-bladepoint-inzoi-launch-this-month/)
- [NVIDIA: ACE showcased in Mecha BREAK](https://www.nvidia.com/en-us/geforce/news/mecha-break-nvidia-ace-nims-rtx-pc-laptop-games-apps/)
- [Ubisoft News: Teammates – an AI experiment](https://news.ubisoft.com/en-us/article/3mWlITIuWuu0MoVuR6o8ps/ubisoft-reveals-teammates-an-ai-experiment-to-change-the-game)
- [Ubisoft press release: Teammates (PDF)](https://staticctf.ubisoft.com/8aefmxkxpxwl/2QCAorjku7w7gH1LGORV3t/6e8f347be3ecab7daa4769e5300086bc/Ubisoft_Unveils_%C3%A2__Teammates%C3%A2____Its_First_Playable_Generative_AI_Experience_Through_Closed_Player_Testing.pdf)
- [Game Developer: Ubisoft's first playable generative AI experiment](https://www.gamedeveloper.com/business/ubisoft-s-first-playable-generative-ai-experience-is-an-r-d-experiment-called-teammates-)
- [Computer Weekly: AI teammates that listen](https://www.computerweekly.com/news/366642940/In-video-games-of-the-future-your-AI-teammates-will-actually-listen)
- [Inworld: The new AI infrastructure for scaling games, media, and characters](https://inworld.ai/blog/new-ai-infrastructure-scaling-games-media-characters)
- [Business Wire: Inworld, Streamlabs and NVIDIA streaming assistant](https://www.businesswire.com/news/home/20250106653761/en/Inworld-AI-Collaborates-with-Logitech-Gs-Streamlabs-and-NVIDIA-to-Power-the-Brains-Behind-Intelligent-Streaming-Assistant)
- [Wikipedia: AI Dungeon](https://en.wikipedia.org/wiki/AI_Dungeon)
- [AI Dungeon: Alchemy update](https://aidungeon.com/alchemy)
- [Reddit r/AIDungeon: We can't launch Heroes… with that name](https://www.reddit.com/r/AIDungeon/comments/1n9le0z/we_cant_launch_heroeswith_that_name/)
- [Microsoft Research: Introducing Muse](https://www.microsoft.com/en-us/research/blog/introducing-muse-our-first-generative-ai-model-designed-for-gameplay-ideation/)
- [Nature: World and Human Action Models towards gameplay ideation](https://www.nature.com/articles/s41586-025-08600-3)
- [Xbox Wire: Muse](https://news.xbox.com/en-us/2025/02/19/muse-ai-xbox-empowering-creators-and-players/)
- [Valve: The AI Systems of Left 4 Dead (PDF)](https://valvearchive.com/Presentations/AIIDE%202009/ai_systems_of_l4d_mike_booth.pdf)
- [arXiv: Deploying RL agents for game testing in AAA games](https://ar5iv.labs.arxiv.org/html/2307.11105)
- [EA SEED: Augmenting automated game testing with deep RL (PDF)](https://media.contentapi.ea.com/content/dam/ea/seed/presentations/seed-augmenting-automated-game-testing-with-deep-reinforcement-learning.pdf)
- [GDC: 2026 State of the Game Industry](https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/)
- [Game Developer: One third of game workers use genAI](https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry)
- [The Verge: Half of developers think gen AI is bad for the industry](https://www.theverge.com/entertainment/869386/ai-game-development-gdc-survey)
- [GDC 2026 trends report (InvestGame)](https://investgame.net/news/pdf/2026-05-27-gdc26_trends_report_final_wp/)
- [SAG-AFTRA: Members approve 2025 Video Game Agreement](https://www.sagaftra.org/sag-aftra-members-approve-2025-video-game-agreement)
- [SAG-AFTRA: 2025 Interactive Media Agreement FAQ](https://www.sagaftra.org/contracts-industry-resources/interactive/2025-interactive-media-video-game-agreement)
- [AP News: Video game performers approve contract](https://apnews.com/article/sagaftra-video-game-ai-contract-vote-results-048576144e7a0fa9b4827520dd269a3f)
- [TheWrap: SAG-AFTRA ratifies agreement after 320-day strike](https://www.thewrap.com/sag-aftra-ratify-interactive-media-agreement-video-game-strike/)
- [PCGamesN: Arc Raiders and generative AI](https://www.pcgamesn.com/arc-raiders/generative-ai-use)
- [Polygon: Does Arc Raiders use AI voices?](https://www.polygon.com/arc-raiders-ai-voices-the-finals-embark-studios/)
- [BBC: Arc Raiders in AI debate](https://www.bbc.com/news/articles/c773dmy876zo)
- [PC Guide: More than 17,000 Steam games with AI disclosure](https://www.pcguide.com/news/more-than-17000-games-on-steam-now-come-with-an-ai-disclosure-30-use-ai-for-two-or-more-reasons/)
- [Wikimedia Commons: Xbox Adaptive Controller (image)](https://commons.wikimedia.org/wiki/File:InclusiveGameLab_Xbox-Adaptive-Controller_4_CC-BY-SA_01.jpg)
