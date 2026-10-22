---
layout: post
title: "When the Studio Closes, the Fans Keep Building: AI, Modding and the Future of BioWare's Classic Games"
date: 2026-10-22 07:05:00 +0200
tags: [AI, video games, BioWare, Mass Effect, Dragon Age, modding, game preservation, copyright, voice cloning]
image: /assets/img/2026-10-22-ai-fan-rebuilds-old-games-bioware.jpg
image_alt: "A cosplayer, apparently dressed as the Dragon Age character Morrigan, in a dark leather outfit and brown shawl, stands on a stage at the 2015 BioWare Cosplay Parade while three judges on a sofa applaud; BioWare game posters hang behind them"
image_credit: "Photo: Michael B. (Michael Brunk / nwlens.com) from Seattle, USA, “BioWare Cosplay Parade 2015 (20952765926)”, CC BY 2.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:BioWare_Cosplay_Parade_2015_(20952765926).jpg"
image_license: "CC BY 2.0"
image_license_url: "https://creativecommons.org/licenses/by/2.0/"
image_description: "Photo from the 2015 BioWare Cosplay Parade at PAX Prime in Seattle. A cosplayer in a dark leather skirt, boots, arm guards and a brown shawl, apparently styled after Morrigan from Dragon Age, poses on a stage lit in blue and purple. Behind her, three judges sit on a black sofa and clap. Tall banners with BioWare game art stand in the background, and a table on the left displays fan-made props and books. The photographer's copyright notice is printed in the bottom-right corner."
---

On October 21, 2026, Electronic Arts closed BioWare, the studio behind *Baldur's Gate*, *Star Wars: Knights of the Old Republic*, *Mass Effect* and *Dragon Age*. For many players, the question now is not only "what happens to the studio?" but also "who will look after these games?" Increasingly, the answer is the fans. They use AI tools to sharpen old textures, rebuild game engines from scratch, and even give characters new lines in AI-cloned voices.

This post separates what is confirmed about BioWare's closure from what is not. It then looks at how AI is changing fan restoration, and at the legal and ethical limits that apply.

**Key terms:**

- **Mod:** a fan-made modification of a game, from a single texture fix to whole new storylines.
- **AI upscaling (ESRGAN, Real-ESRGAN):** neural networks that enlarge low-resolution images and guess missing detail. ESRGAN is a widely used open-source model of this type.
- **Voice cloning:** AI that learns a person's voice from recordings and then generates new speech that sounds like them.
- **Engine reimplementation / source port:** a new, independently written program that can run an old game's original data files, often on modern systems. A source port adapts officially released source code. A reimplementation rewrites the engine without it.
- **Clean-room development:** writing new code based on observed behaviour or documentation, without copying the original code.
- **IP (intellectual property):** the legal rights to a game's characters, story, art, music and code.

## 1. BioWare's status: what is confirmed and what isn't

### Confirmed

- **BioWare is closing.** A post on BioWare's own blog dated October 21, 2026 states: "BioWare is closing and early development on the next Mass Effect project is ending" ([BioWare Blog](https://blog.bioware.com/2026/10/21/bioware-update/)).
- **The next Mass Effect is cancelled.** In an internal memo quoted by Variety, EA executives Cam Weber and David Tinson wrote that "we've had a small team at BioWare working on early-development for Mass Effect" and that EA had "made the decision not to move forward". This means "closing the studio and our Edmonton workspace". The memo also calls BioWare "a legendary studio that helped define the role-playing genre" ([Variety](https://variety.com/2026/digital/news/ea-layoffs-bioware-shutting-down-respawn-dice-star-wars-battlefront-3-1236918715/)).
- **It is part of wider EA layoffs.** Variety reports that the cuts affect about 3% of EA's workforce, which it puts at around 400 of 14,500 employees. Respawn and DICE projects are also affected ([Variety](https://variety.com/2026/digital/news/ea-layoffs-bioware-shutting-down-respawn-dice-star-wars-battlefront-3-1236918715/)). IGN and Game Developer, citing Bloomberg, report that about 50 of those jobs were at BioWare ([IGN](https://nordic.ign.com/mass-effect-next-chapter/114614/bioware-shutting-down-next-mass-effect-canceled); [Game Developer](https://www.gamedeveloper.com/business/ea-closes-mass-effect-dragon-age-creator-bioware-after-30-years-of-game-development)).
- **Background.** Game Developer recalls that BioWare was founded in 1995 by Ray Muzyka, Greg Zeschuk and Augustine Yip and acquired by EA in 2007. Its most recent game was *Dragon Age: The Veilguard* (2024). *Star Wars: The Old Republic* is now operated by Broadsword rather than BioWare ([Game Developer](https://www.gamedeveloper.com/business/ea-closes-mass-effect-dragon-age-creator-bioware-after-30-years-of-game-development)). The closure has also been reported by [The Verge](https://www.theverge.com/games/1015647/ea-is-shutting-down-bioware) and [Polygon](https://www.polygon.com/ea-bioware-closure-mass-efffect-5-canceled/).

### Not confirmed (as of October 22, 2026)

- **What happens to the IP.** The sources above do not say whether EA will keep, license or sell *Mass Effect* or *Dragon Age*, or whether another EA studio could make future games.
- **Whether the existing games stay on sale** and keep their online features. No source I found addresses storefront availability.
- **Any policy change on mods.** I found no published EA statement on fan mods for BioWare games after the closure.
- **The Amazon *Mass Effect* TV series.** IGN writes that it is unclear what the closure means for the planned live-action series ([IGN](https://nordic.ign.com/mass-effect-next-chapter/114614/bioware-shutting-down-next-mass-effect-canceled)).

Everything below should be read with this in mind. The fan scene described here exists today, but its long-term legal footing depends on decisions EA has not announced.

## 2. AI made the official remaster, and fans set the benchmark

AI upscaling entered BioWare's own history before the closure. For *Mass Effect Legendary Edition* (2021), BioWare ran the trilogy's original textures through AI upscaling and then had artists review and fix the results ([GamesBeat](https://gamesbeat.com/bioware-used-ai-upscaling-to-remaster-mass-effects-original-textures/); [PlayStation Blog](https://blog.playstation.com/2021/04/13/mass-effect-legendary-edition-a-detailed-look-at-visual-enhancements-to-the-celebrated-trilogy/)). PC Gamer reported that the team used existing fan mods as a benchmark for its improvements ([PC Gamer](https://www.pcgamer.com/mass-effect-legendary-edition-used-mods-as-a-benchmark-for-its-improvements/)).

This is a useful reminder: fan modders were using AI on BioWare games before the studio did. The official remaster partly followed a path the community had already shown was possible.

## 3. AI texture upscaling: the most common fan use

Neural upscalers are well suited to old games, whose textures were made for much smaller screens. Two long-running BioWare examples on Nexus Mods:

- ***Knights of the Old Republic*: "Ultimate Character Overhaul -REDUX-"**, which upscales character textures with ESRGAN-based tools ([Nexus Mods](https://www.nexusmods.com/kotor/mods/1282)).
- ***Dragon Age: Origins*: "AP Neural Enhanced Textures v4"**, which applies several neural upscalers to the game's textures ([Nexus Mods](https://www.nexusmods.com/dragonage/mods/5402)).

The method has limits. An upscaler cannot recover detail that was never there. It invents plausible detail, which can blur text, change faces or create artefacts. Careful modders therefore combine several models and fix problems by hand, which is the same "AI plus human review" workflow BioWare described for its remaster.

**NVIDIA RTX Remix** pushes the idea further. It is an open-source modding platform that lets fans capture assets from many classic DirectX 8 and 9 games, replace them with higher-quality versions and add ray-traced lighting. Its AI tools can upscale textures and generate physically based material maps. NVIDIA released version 1.0 in March 2025 together with a *Half-Life 2 RTX* demo ([NVIDIA RTX Remix](https://www.nvidia.com/en-us/geforce/rtx-remix/); [NVIDIA GeForce News](https://www.nvidia.com/en-us/geforce/news/rtx-remix-half-life-2-rtx-demo-launching-march-18/); [RTX Remix release notes](https://docs.omniverse.nvidia.com/kit/docs/rtx_remix/latest/docs/changelog/remix-releasenotes.html)). Whether a particular BioWare game works with Remix depends on its graphics engine and must be checked per title.

## 4. AI voices: new story content, and the hardest ethical questions

Textures are uncontroversial compared with voices. A story mod that adds new scenes runs into a basic problem: the original actors are usually not available to record new lines. AI voice cloning offers a shortcut, and it is already being used in BioWare mods.

Polygon reported on October 13, 2026 that *Mass Effect Legendary Edition* is "still getting new content thanks to fans". Nexus Mods hosts more than 2,500 mods for the collection, and new projects are still appearing. Two of the highlighted 2026 mods, **Tali Story Expansion** (July 2026) and **Kasumi Returns** (April 2026), add new dialogue and "use AI-generated voice cloning, which their creators explicitly disclose" ([Polygon](https://www.polygon.com/mass-effect-legendary-edition-mods-new-content/)).

The same technology has a darker history. In 2023, AI-cloned voices of real game actors appeared in mods, including pornographic *Skyrim* mods. Actors objected publicly ("I do not give consent"), and some mods were removed ([GamesRadar+](https://www.gamesradar.com/voice-actors-call-out-ai-as-imitations-spread-in-erotic-skyrim-mods-i-do-not-give-consent/); [Kotaku](https://kotaku.com/skyrim-nexusmods-deepfake-porn-ai-voice-eleven-labs-1850607687); [Axios](https://www.axios.com/2023/07/24/ai-voice-actors-victoria-atkin-assassins-creed)).

The ethical issues are fairly clear:

- **Consent.** A voice is part of a person's identity and livelihood. Voice actors' contracts with studios do not cover fans creating new performances.
- **Context.** A cloned voice can be made to say things the actor would never agree to, including sexual or hateful content.
- **Labour.** Professional performers fought for consent and pay rules on AI replicas during the 2024–2025 SAG-AFTRA video game strike. Fan voice cloning sits completely outside that system ([SAG-AFTRA](https://www.sagaftra.org/sag-aftra-members-approve-2025-video-game-agreement)).

## 5. Platform rules: how Nexus Mods handles AI

Nexus Mods, the largest mod host for BioWare games, does not ban AI content, but it requires transparency:

- Mods using generative AI must be tagged with dedicated tags ([Nexus Mods forums: update on generative AI categorisation](https://forums.nexusmods.com/topic/13542525-an-update-on-generative-ai-categorisation-tagging/); [Nexus Mods news](https://www.nexusmods.com/news/14850)).
- The site's file-submission guidelines state that "failure to correctly tag mods, including undisclosed generative AI usage, may be subject to moderation action" ([Nexus Mods help: File submission guidelines](https://help.nexusmods.com/article/28-file-submission-guidelines)).
- Nexus Mods' AI policy, announced in 2023, says that mods using AI-generated voices can be removed if the actor or rights holder complains ([Nexus Mods news](https://www.nexusmods.com/news/14850); [Kotaku](https://kotaku.com/skyrim-nexusmods-deepfake-porn-ai-voice-eleven-labs-1850607687)).

In practice, the platform pushes AI from a hidden trick to a declared ingredient. The disclosed voice cloning in the 2026 *Mass Effect* mods follows that model.

## 6. Rebuilding the engine: reimplementations and source ports

The deepest form of fan restoration replaces the original game program entirely. Two open-source projects target BioWare games:

- **xoreos** is a free reimplementation of BioWare's Aurora engine and its successors. It aims to run *Neverwinter Nights*, *Knights of the Old Republic* 1 and 2, *Jade Empire*, *The Witcher* and *Dragon Age* with the original game data. The project says most games are still far from fully playable ([xoreos: About](https://xoreos.org/about/); [GitHub: xoreos](https://github.com/xoreos/xoreos)).
- **reone** is a GPLv3 C++ engine reimplementation for *KOTOR* and *KOTOR II: The Sith Lords*, described by its developers as in development ([GitHub: reone](https://github.com/seedhartha/reone/)).

Both projects require players to own the original game. They contain no BioWare art, sound or story, only new code that reads the original files. This is the key legal distinction for fan rebuilds.

AI's role here is still modest. Coding assistants can help explain file formats or draft boilerplate code. But the hard work of reverse engineering and testing remains human, and projects that care about clean-room status need to be careful about where AI-generated code comes from.

## 7. What EA has done with other old games

EA has shown it can open old games to fans. In February 2025, it released the source code for *Command & Conquer* (Tiberian Dawn), *Red Alert*, *Renegade* and *Generals/Zero Hour* under the GPL license and added Steam Workshop support ([EA: Steam Workshop support](https://www.ea.com/games/command-and-conquer/news/steam-workshop-support); [The Verge](https://www.theverge.com/news/621397/command-conquer-open-source-ea-red-alert-renegade-generals)). EA's *Command & Conquer* modding FAQ requires that mods be free and non-commercial ([EA: Modding FAQ](https://www.ea.com/games/command-and-conquer/news/modding-faq)).

This shows one possible path, not a prediction. There is no announcement that EA will do anything similar for BioWare's engines or games.

## 8. The legal limits

Fan rebuilding sits in a grey zone that depends on country, publisher tolerance and the type of mod. Some general points (this is not legal advice):

- **The games remain copyrighted.** The studio's closure does not put its games in the public domain. The rights stay with EA, or with whoever owns them (for *KOTOR*, Lucasfilm also owns the *Star Wars* IP). Distributing original game files, full remakes using original assets, or paid "remasters" can lead to takedowns.
- **Mods that require the original game are usually tolerated.** Texture packs, patches and engine reimplementations that need a legally owned copy are the most common and least risky category. EA's own *Command & Conquer* rules allow free, non-commercial mods ([EA: Modding FAQ](https://www.ea.com/games/command-and-conquer/news/modding-faq)).
- **AI output has weak copyright protection of its own.** The US Copyright Office's January 2025 report concludes that prompts alone do not give sufficient human control, so purely AI-generated material is not protected. Human selection, arrangement or modification of AI output can be ([US Copyright Office, Part 2 report, PDF](https://copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf)). For modders, this means an AI-upscaled texture is still based on EA's original texture and does not become the modder's own work.
- **Voices raise separate rights.** Beyond copyright, many jurisdictions protect a person's voice and likeness. This is why platforms remove cloned-voice mods on complaint ([Nexus Mods help](https://help.nexusmods.com/article/28-file-submission-guidelines)).

## 9. The community has preserved BioWare content before

Fans have experience with BioWare shutdowns. When BioWare closed its old BioWare Social Network (BSN) forums and project pages in 2016, volunteers organised to save the mods hosted there. A Reddit thread from that time tracked the effort to save 4,168 mods ([r/dragonage](https://www.reddit.com/r/dragonage/comments/4xedbd/no_spoilers_saving_4168_mods_on_bsn_before/); [r/masseffect](https://www.reddit.com/r/masseffect/comments/4xe6r0/saving_4168_mods_on_bsn_before_shutdown/)). A fan-run successor forum still keeps a guide to where those legacy projects ended up ([BSN fan forum](https://bsn.boards.net/thread/614/legacy-projects-where-find-favourite)).

That history matters now. Mod archives, documentation and tools are spread across Nexus Mods, GitHub and fan sites. The community already knows how to mirror and catalogue them if official resources disappear.

## 10. Why AI matters here

BioWare's closure is confirmed. The future of its games, rights and mod tools is not. In this gap, AI has become one of the fans' most important tools. Neural upscalers make 15- or 20-year-old games look acceptable on modern screens. Platforms like RTX Remix bring remaster-level tools to hobbyists. Voice cloning lets fan writers add whole new voiced storylines to *Mass Effect*. But AI does not change who owns the games, and it brings new problems. Cloned voices use real people's identities without their consent. AI-generated assets have little copyright protection of their own. Every fan project still depends on publishers tolerating it. The most sustainable fan work so far is the kind that is disclosed, free, requires the original game and respects the performers who brought these worlds to life.

## Sources

- [BioWare Blog: BioWare Update (Oct 21, 2026)](https://blog.bioware.com/2026/10/21/bioware-update/)
- [Variety: EA layoffs, BioWare shutting down](https://variety.com/2026/digital/news/ea-layoffs-bioware-shutting-down-respawn-dice-star-wars-battlefront-3-1236918715/)
- [IGN: BioWare shutting down, next Mass Effect cancelled](https://nordic.ign.com/mass-effect-next-chapter/114614/bioware-shutting-down-next-mass-effect-canceled)
- [Game Developer: EA closes BioWare after 30 years](https://www.gamedeveloper.com/business/ea-closes-mass-effect-dragon-age-creator-bioware-after-30-years-of-game-development)
- [The Verge: EA is shutting down BioWare](https://www.theverge.com/games/1015647/ea-is-shutting-down-bioware)
- [Polygon: BioWare officially shutting down](https://www.polygon.com/ea-bioware-closure-mass-efffect-5-canceled/)
- [Polygon: Mass Effect Legendary Edition is still getting new content thanks to fans](https://www.polygon.com/mass-effect-legendary-edition-mods-new-content/)
- [GamesBeat: BioWare used AI upscaling to remaster Mass Effect's textures](https://gamesbeat.com/bioware-used-ai-upscaling-to-remaster-mass-effects-original-textures/)
- [PC Gamer: Legendary Edition used mods as a benchmark](https://www.pcgamer.com/mass-effect-legendary-edition-used-mods-as-a-benchmark-for-its-improvements/)
- [PlayStation Blog: Mass Effect Legendary Edition visual enhancements](https://blog.playstation.com/2021/04/13/mass-effect-legendary-edition-a-detailed-look-at-visual-enhancements-to-the-celebrated-trilogy/)
- [Nexus Mods: KOTOR Ultimate Character Overhaul -REDUX-](https://www.nexusmods.com/kotor/mods/1282)
- [Nexus Mods: Dragon Age Origins AP Neural Enhanced Textures](https://www.nexusmods.com/dragonage/mods/5402)
- [NVIDIA RTX Remix](https://www.nvidia.com/en-us/geforce/rtx-remix/)
- [NVIDIA: RTX Remix and Half-Life 2 RTX demo](https://www.nvidia.com/en-us/geforce/news/rtx-remix-half-life-2-rtx-demo-launching-march-18/)
- [NVIDIA RTX Remix release notes](https://docs.omniverse.nvidia.com/kit/docs/rtx_remix/latest/docs/changelog/remix-releasenotes.html)
- [GamesRadar+: Voice actors call out AI imitations in Skyrim mods](https://www.gamesradar.com/voice-actors-call-out-ai-as-imitations-spread-in-erotic-skyrim-mods-i-do-not-give-consent/)
- [Kotaku: Skyrim mods and AI voice deepfakes](https://kotaku.com/skyrim-nexusmods-deepfake-porn-ai-voice-eleven-labs-1850607687)
- [Axios: AI and voice actors](https://www.axios.com/2023/07/24/ai-voice-actors-victoria-atkin-assassins-creed)
- [SAG-AFTRA: Members approve 2025 Video Game Agreement](https://www.sagaftra.org/sag-aftra-members-approve-2025-video-game-agreement)
- [Nexus Mods news: AI content policy](https://www.nexusmods.com/news/14850)
- [Nexus Mods forums: Update on generative AI categorisation and tagging](https://forums.nexusmods.com/topic/13542525-an-update-on-generative-ai-categorisation-tagging/)
- [Nexus Mods help: File submission guidelines](https://help.nexusmods.com/article/28-file-submission-guidelines)
- [xoreos: About](https://xoreos.org/about/)
- [GitHub: xoreos](https://github.com/xoreos/xoreos)
- [GitHub: reone](https://github.com/seedhartha/reone/)
- [EA: Command & Conquer Steam Workshop support](https://www.ea.com/games/command-and-conquer/news/steam-workshop-support)
- [EA: Command & Conquer modding FAQ](https://www.ea.com/games/command-and-conquer/news/modding-faq)
- [The Verge: EA open-sources Command & Conquer](https://www.theverge.com/news/621397/command-conquer-open-source-ea-red-alert-renegade-generals)
- [US Copyright Office: Copyright and AI, Part 2 – Copyrightability (PDF)](https://copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf)
- [Reddit r/dragonage: Saving 4,168 mods on BSN before shutdown](https://www.reddit.com/r/dragonage/comments/4xedbd/no_spoilers_saving_4168_mods_on_bsn_before/)
- [Reddit r/masseffect: Saving 4168 mods on BSN before shutdown](https://www.reddit.com/r/masseffect/comments/4xe6r0/saving_4168_mods_on_bsn_before_shutdown/)
- [BSN fan forum: Legacy projects – where to find your favourite](https://bsn.boards.net/thread/614/legacy-projects-where-find-favourite)
- [Wikimedia Commons: BioWare Cosplay Parade 2015 (image)](https://commons.wikimedia.org/wiki/File:BioWare_Cosplay_Parade_2015_(20952765926).jpg)
