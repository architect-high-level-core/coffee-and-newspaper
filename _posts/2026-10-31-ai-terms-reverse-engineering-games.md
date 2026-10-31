---
layout: post
title: "Did Anthropic Ban Reverse Engineering of Games? What Claude's Rules Really Say, How Other AI Providers Compare, and the Legal Ways to Reverse Engineer"
date: 2026-10-31 07:32:00 +0100
slug: ai-terms-reverse-engineering-games
excerpt: "Viral X posts say Anthropic has blocked Claude from reverse engineering and recreating video games. We checked the posts, the new Claude Code instruction (now confirmed by Anthropic's Claude Code team), the claim that it is built into the API, Anthropic's Usage Policy and Terms, and the rules at OpenAI, Google, xAI, Microsoft/GitHub, Meta, Mistral and DeepSeek. Plus what game EULAs say, and the legal routes to reverse engineering: EU interoperability decompilation, US fair use and DMCA exemptions, clean-room design, open-weight models, official modding and bug bounties."
tags: [AI, Anthropic, Claude, Claude Code, reverse engineering, decompilation, video games, modding, game preservation, terms of service, usage policy, OpenAI, Google Gemini, xAI, Grok, Microsoft Copilot, GitHub Copilot, Llama, Mistral, DeepSeek, open-weight models, EULA, anti-cheat, DMCA, fair use, EU Software Directive, interoperability, clean-room design, bug bounty, REA]
image: /assets/img/2026-10-31-ai-terms-reverse-engineering-games.jpg
image_alt: "An early-1990s Gravis PC GamePad taken completely apart on a white cloth: the two halves of the cream-coloured plastic shell, the brown circuit board with its cable and 15-pin connector, grey rubber button membranes, and a purple direction pad with red, blue, yellow and green buttons"
image_credit: "Photo: FreeMediaKid!, “Gravis PC GamePad, disassembled” (2025), CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Gravis_PC_GamePad,_disassembled.jpg (resized)"
image_license: "CC BY-SA 4.0 (Creative Commons Attribution-ShareAlike 4.0 International)"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "Top-down photo of a Gravis PC GamePad, an early-1990s game controller for DOS computers, fully disassembled and laid out on a white paper towel. On the left are the upper and lower halves of the cream-coloured plastic housing with the purple 'GRAVIS PC GamePad' logo, two grey rubber button membranes and the coloured buttons and direction pad. On the right is the brown printed circuit board connected to a long grey cable that ends in a 15-pin game-port connector. A bottle of isopropyl alcohol and a cleaning cloth sit at the edge of the picture. The photo stands for taking a piece of gaming technology apart to understand how it works. It does not show any software, AI tool or game discussed in this article."
---

"Anthropic just hard-blocked game recreations in Claude." Posts like this spread across X in the last days of October 2026. Some went further and claimed that Claude can no longer reverse engineer anything at all. At the same time, publishers are filing takedown notices against a wave of AI-made game decompilations and browser ports.

So what is actually true, how do other AI companies handle this, and how can you reverse engineer a game, for modding, preservation, research or interoperability, without legal or account trouble? This post looks at the posts, the instruction itself, Anthropic's legal documents, seven other AI providers, typical game licence agreements (EULAs), and EU and US law.

**How we checked:** we read the X posts through X's public search and quote them word for word. We read Anthropic's current Usage Policy, Consumer Terms and Commercial Terms, an archived copy of the previous Usage Policy, the terms of seven other AI providers on their own websites, and the EULAs of Riot Games, Valve and Minecraft. Legal texts come from official or court sources. Where a detail comes only from social media or a third-party tracker, we say so. We did not test any model.

> **Not legal advice.** This article explains public documents and general legal principles in plain words. It is not legal advice. Laws differ between countries, and whether a specific project is allowed depends on the facts. If you plan to publish a decompilation, a port or a commercial product, talk to a lawyer who knows software and copyright law in your country.

## 1. What the X posts say

### The game-recreation rule

The post that started the biggest wave came from the account [@chasmmmmmmmmmmm on October 30, 2026](https://x.com/chasmmmmmmmmmmm/status/2116062991686721968). By the evening of that day, X showed more than 1.3 million views and about 7,100 likes. It reads:

> "ANTHROPIC IS CRACKING DOWN ON VIDEO GAME REWRITES 🚨 Claude Code picked up a new rule around Oct 27, sent from Anthropic's servers under a flag called "tengu_heron_brook". There's no setting to turn it off. The full rule: "Do build original games, games in a genre, and games from the user's own designs and assets. Don't build a recreation of a specific existing game, even if it is renamed or called original." Is this the end of game rewrites, modding and everything in between?"

The gaming news account [@Pirat_Nation](https://x.com/Pirat_Nation/status/2116168747761197428) added: "The move could affect people using AI to recreate games like Terraria, Minecraft, Halo or GTA as browser games or unofficial ports."

The security account [@0x0SojalSec](https://x.com/0x0SojalSec/status/2116107862309310777) framed it as a reverse-engineering block: "If you've been using Claude to recreate or reverse-engineer games for learning or modding, this is your end."

Not everyone read it that way. One user [replied](https://x.com/BenPielstick/status/2116186519929270419): "I don't think this was intended to block modders." Another [asked](https://x.com/Rahmeljackson/status/2116224579068739993): "Does that include emulator development or other reverse-engineering efforts?"

### The earlier "reverse engineering" complaints

A week earlier, a separate claim had already gone viral. On October 23, [@0x0SojalSec posted](https://x.com/0x0SojalSec/status/2113751276320399694) (about 957,000 views): "Claude can no longer "Reverse Engineer Anything." Anthropic just quietly killed REA. But Interesting timing. After a few viral cases of people using Claude to reverse-engineer Samsung TV firmware and identify data-collection services, Anthropic appears to have restricted those reverse-engineering abilities."

The developer [@yacineMTB wrote on October 24](https://x.com/yacineMTB/status/2114028685028417678): "basically every single thing i do (ML research & reverse engineering video games) is against the moral code of anthropic".

### The background: a wave of AI decompilations

On October 9, 2026, Kotaku [reported](https://kotaku.com/we-might-be-cooked-as-these-vibe-coded-web-browser-ports-of-halo-the-simpsons-hit-and-run-and-gta-vice-city-seem-to-work-perfectly-2000743300) that "hundreds of vibe-coded, AI-decompiled emulators and games have appeared out of thin air" in a couple of weeks, "because Claude's latest update, Claude Opus 5.5, is extremely good at decompiling". The [PortedGames takedown tracker](https://portedgames.com/takedowns/) lists many DMCA notices since then, for example against Celeste and Minecraft browser ports on GitHub and Call of Duty browser remakes. We did not check every entry.

## 2. What is actually confirmed

Three different things need to be kept apart: an instruction inside a tool, a safety filter, and the legal terms.

### The Claude Code instruction is real, confirmed, and not in the terms

The wording quoted on X matches a change documented by the independent tracker [core-directive.com for Claude Code version 2.1.314](https://changelogs.core-directive.com/prompts/2.1.314), released on [October 30, 2026](https://github.com/anthropics/claude-code/releases/tag/v2.1.314). The tracker shows the identical line added to the system prompt, under a new section called `original_games_guidance`.

Three points stand out:

- **It is about building copies, not about reverse engineering as such.** The text does not mention decompiling, modding, emulators or interoperability. How the model treats a mod or a decompilation project is not clear from the wording.
- **Anthropic has confirmed it.** On the afternoon of October 30, Addy Osmani, whose X profile reads "Claude Code @anthropicai", [replied to the viral post](https://x.com/addyosmani/status/2116213240363729013): "We added two sentences to Claude Code's prompt on Opus 5.5 to steer it away from recreating someone else's specific game because using Claude to infringe IP is against our usage policy. Original games, genre games, and games built from your own designs and assets are meant to keep working. We'll continue to iterate to ensure we're striking the right balance. In the meantime, if Claude turns down something that's yours, send it my way." This is a reply on X from a member of the Claude Code team, not a formal company announcement. Anthropic's [public changelog](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md) still does not mention the rule.
- **It is delivered remotely.** The viral posts say the text arrived under a flag called `tengu_heron_brook`. A [GitHub issue from May 2026](https://github.com/anthropics/claude-code/issues/62061) describes that flag as a slot added in Claude Code v2.1.150 that takes a text string from Anthropic's servers (a "bootstrap" response at startup and the GrowthBook feature-flag service) and inserts it "verbatim into the system prompt". So the flag can carry different text at different times. The [core-directive tracker](https://changelogs.core-directive.com/reference/flag/tengu-heron-brook) had linked the flag to a sub-agent instruction, which fits this picture; it does not prove the game text came through the same flag. **We could not verify** the exact delivery path or the start date ("around Oct 27" according to users).

### Is the rule "built into the API"?

Some posts suggest the restriction sits in the API or the model itself, not just in Claude Code. Here is what we found.

**What the posts say.** We did not find an X post that shows the rule being enforced on direct calls to Anthropic's Messages API. The claims we found say the rule is *pushed from Anthropic's servers* into Claude Code. Grok's automated replies on X, for example, say the flag value is pulled "via bootstrap API or GrowthBook" and [written into the model's system prompt](https://x.com/grok/status/2116099175272047062), that local edits are [overwritten on every launch](https://x.com/grok/status/2116146467643502622), and call it "a real Anthropic server-side system-prompt injector in Claude Code" ([reply](https://x.com/grok/status/2116218043651051944)). Those replies are AI-generated summaries, not independent tests. The "API" here is Claude Code's startup configuration endpoint, not the Messages API that developers call.

**What is confirmed.** The game text lives in Claude Code's system prompt, and it can be changed from Anthropic's side without an app update. Anthropic's own statement describes it as "two sentences to Claude Code's prompt on Opus 5.5". In the May issue thread, a reply from an account we could not confirm as Anthropic's said the company runs "experiments on changes to our system prompt". The [fourweekmba.com report](https://fourweekmba.com/ai-claude-code-users-report-a-new-rule-against-recreating-games/) and [Crypto Briefing](https://cryptobriefing.com/anthropic-claude-code-blocks-video-game-clones/) also describe a Claude Code rule, not an API rule.

**What points against an API-level block.** Anthropic's [API migration guide for version 2026-10-21](https://platform.claude.com/docs/en/api/migration-2026-10-21) and its [2026 Usage Policy update post](https://www.anthropic.com/news/2026-usage-policy-update) mention no game rule. An X user replying to the Anthropic statement [argued](https://x.com/MorganGermani/status/2116220906980659303) that it "only applies to people using the sub because we're forced into using the official harness. Anyone who can afford the API prices can just go around this." That is an opinion, not a test.

**What remains open.** We could not verify whether the raw API, Claude.ai or the Opus 5.5 model itself refuse game recreations. We did not run API tests. Even without the Claude Code sentence, models can still refuse some requests because of their training, and the Usage Policy's ban on IP infringement applies on every Anthropic product, including the API.

**Real effects on legitimate work.** A [GitHub issue opened on October 30](https://github.com/anthropics/claude-code/issues/106167) by Conflict Simulations LLC says sessions now refuse commissioned digital versions of board wargames for clients who own the games, built in original code. The author adds that the work "ran fine under the new rule until I asked about the rule". The issue asks for a narrower rule, a verification path "comparable to the existing program for vetted security researchers", and changelog entries for such changes.

A note of caution: the May issue thread also names settings that stop Claude Code from fetching server-side prompt experiments. We do not repeat them here. Using such settings on purpose to get around the game rule could conflict with the Usage Policy's ban on intentionally bypassing "capabilities, restrictions, or guardrails established within our products".

### The reverse-engineering refusals: reported, not explained

For the earlier complaints, PBX Science published an overview titled ["What Is Confirmed and What Is Not"](https://pbxscience.com/are-claudes-reverse-engineering-powers-being-restricted-what-is-confirmed-and-what-is-not/) (updated October 26). It describes user reports from October 21 onwards of Claude "triggering a safety guardrail mid-response" during reverse-engineering requests. It also says: "Anthropic has not said it changed anything, has not linked any restriction to game copyright, and has not commented on the reports." It suggests cybersecurity safeguards, which can also catch legitimate analysis, as the more likely cause. That is the article's analysis, not a confirmed fact.

The claim that Anthropic "killed REA" also does not hold up as stated. [REA ("Reverse Engineer Anything")](https://github.com/morluto/rea) is an open-source, MIT-licensed tool on GitHub that connects AI coding agents to analysis tools such as Ghidra, IDA or Hopper. Its README says "Analysis runs locally". On October 30 the repository was online and still listed Claude Code among supported agents. Whether Claude now refuses some REA tasks more often, only tests could show. We ran none.

## 3. What Anthropic's legal documents say

### Usage Policy: no "game" rule, but a new security-research carve-out

Anthropic's [Usage Policy](https://www.anthropic.com/legal/aup) (also called the Acceptable Use Policy or AUP) applies to everyone using Claude, Claude Code and the API. It does **not** contain the words "game", "decompile" or "reverse engineer" for third-party software. The parts most relevant to game reverse engineering are general:

- Under "Do Not Violate Applicable Laws": do not "Infringe, misappropriate, or violate the intellectual property rights of a third party".
- Under fraudulent and abusive practices: do not "Engage in actions or behaviors that circumvent the guardrails or terms of other platforms or services". This could cover cheats or anti-cheat bypasses, which break a game's own terms.
- Under computer security: do not "Bypass security controls such as authentication systems, endpoint protection, or monitoring tools without authorization".

**The wording has just changed.** The version now on the site takes effect on **November 12, 2026**; the previous one dated from September 15, 2025. Comparing it with an [archived copy of the 2025 version](https://web.archive.org/web/20260601000000/https://www.anthropic.com/legal/aup), the IP and "terms of other platforms" lines already existed. Two additions are relevant.

First, an explicit safe harbour for security work: "This section does not prohibit security research, testing, or tool development conducted on systems you own or operate, with the authorization of the system owner, or within the scope of an authorized bug bounty program or vulnerability disclosure policy, provided the activity complies with applicable law."

Second, a note on automatic filters: "Our products also include real-time safeguards that may block or limit certain outputs, but encountering a block does not by itself indicate a violation of the Usage Policy." It also mentions a "Cyber Verification Program" for adjusted safeguards.

In the written policy, the trend goes towards *more* room for legitimate security research, not a ban on reverse engineering.

### Consumer and Commercial Terms: about Anthropic's own services

Both sets of terms do contain reverse-engineering clauses, but they protect Anthropic's own software, not games.

The [Consumer Terms](https://www.anthropic.com/legal/consumer-terms) (effective October 8, 2025) forbid "To decompile, reverse engineer, disassemble, or otherwise reduce our Services to human-readable form, except when these restrictions are prohibited by applicable law." The [Commercial Terms](https://www.anthropic.com/legal/commercial-terms) (effective June 17, 2025) say customers may not "reverse engineer or duplicate the Services".

**Bottom line for Anthropic:** we found no clause in Anthropic's terms or Usage Policy that bans reverse engineering of games. What exists is (a) a general ban on IP infringement and on breaking other platforms' terms, (b) safety filters that users say interrupt some reverse-engineering requests, and (c) a Claude Code instruction against recreating specific existing games, which the Claude Code team has confirmed.

## 4. How other AI providers handle it

Almost every provider has the same two kinds of rules: a ban on reverse engineering *their own* models and services, and general bans on IP infringement, hacking and circumventing safeguards. None of the documents we read names game reverse engineering specifically.

### OpenAI (ChatGPT, Codex, API)

OpenAI's [Terms of Use](https://openai.com/policies/row-terms-of-use/) (effective January 1, 2026) forbid attempts "to reverse engineer, decompile or discover the source code or underlying components of our Services, including our models, algorithms, or systems (except to the extent this restriction is prohibited by applicable law)". The [Usage Policies](https://openai.com/policies/usage-policies/) (new version effective November 20, 2026, announced October 21) forbid use for "destruction, compromise, or breach of another's system or property, including malicious or abusive cyber activity or attempts to infringe on intellectual property rights of others". They also forbid "circumventing our safeguards". The new version adds that users must not "extract protected reasoning through unauthorized access, reverse engineering, or circumvention of safeguards". Again, this is about OpenAI's own models.

### Google (Gemini)

The [Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms) say: "You also may not attempt to reverse engineer, extract or replicate any component of the Services, including the underlying data or models (e.g., parameter weights)." Google's [Generative AI Prohibited Use Policy](https://policies.google.com/terms/generative-ai/use-policy) bans content that "Violates the rights of others, including privacy and intellectual property rights" and asks users not to "compromise the security of others' or Google's services".

### xAI (Grok)

xAI's [Acceptable Use Policy](https://x.ai/legal/acceptable-use-policy) (effective August 14, 2026) forbids attempts to "reverse engineer, decompile, disassemble or otherwise seek to obtain the source code of our Service, including our systems, models, or algorithms (except to the extent this restriction is prohibited by applicable law)". It also bans "Violating copyright, trademark, or other intellectual property law" and "Engaging in espionage, hacking, defrauding, defaming, scamming, or spamming". It adds: "Don't circumvent safeguards unless you are part of an official Red Team or otherwise have our official written consent."

### Microsoft (Copilot) and GitHub Copilot

The [Microsoft Services Agreement](https://www.microsoft.com/en-us/servicesagreement) (effective September 30, 2026) has a "Reverse Engineering" clause for AI services: "You may not use the AI services to discover any underlying components of the models, algorithms, and systems." The [Copilot Terms of Use](https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/termsofuse) (effective August 18, 2026) add: "Don't use Copilot to infringe on other people's legal rights, including their intellectual property and publicity rights." On the gaming side, Microsoft's [Game Content Usage Rules](https://www.xbox.com/en-US/developers/rules) state: "You can't reverse engineer our games to access the assets or otherwise do things that the games don't normally permit in order to create your Items."

GitHub Copilot falls under GitHub's own terms ([Additional Product Terms](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features)). GitHub's [malware and exploits policy](https://docs.github.com/en/site-policy/acceptable-use-policies/github-active-malware-or-exploits) is notably open: "GitHub allows dual-use content and supports the posting of content that is used for research into vulnerabilities, malware, or exploits."

### Meta (Llama licence)

Meta's open-weight models come with a licence, not a cloud service. The [Llama 4 Community License](https://www.llama.com/llama4/license/) grants a licence "to use, reproduce, distribute, copy, create derivative works of, and make modifications to the Llama Materials". The [Llama 4 Acceptable Use Policy](https://www.llama.com/llama4/use-policy/) still applies: it forbids content that "infringes, misappropriates, or otherwise violates any third-party rights" and actions "to intentionally circumvent or remove usage restrictions or other safety measures". It says nothing specific about reverse engineering third-party software.

### Mistral

Mistral's [Usage Policy](https://legal.mistral.ai/terms/usage-policy) (effective June 11, 2026) bans content that "infringes, misappropriates, or otherwise violates any third party's rights, including intellectual property rights". Under "Security Violations" it says users "shall not use the Mistral AI Products to compromise, or attempt to compromise, the security of Mistral AI, the Mistral AI Products, or any other third party. This includes creating malware and exploiting vulnerabilities." Many Mistral open models, such as [Mistral Small 3.1](https://huggingface.co/mistralai/Mistral-Small-3.1-24B-Instruct-2503), use Apache 2.0.

### DeepSeek

The [DeepSeek Terms of Use](https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html) for its app and platform list "reverse engineering, reverse assembly, reverse compilation" among activities "to steal network data", but this refers to "the source code, models, algorithms, and system source code or underlying components of the software", that is, DeepSeek's own services. The terms also ban "activities that infringe on intellectual property rights". DeepSeek's open models are published separately, for example [DeepSeek-R1](https://huggingface.co/deepseek-ai/DeepSeek-R1) and [DeepSeek-V3-0324](https://huggingface.co/deepseek-ai/DeepSeek-V3-0324), which Hugging Face lists under the MIT licence.

### Open-weight models in general

When you download a model and run it on your own computer, no provider's usage policy is enforced through servers or system prompts. What applies is the model licence: permissive licences such as [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) or [MIT](https://opensource.org/license/mit) set no usage rules, while community licences such as Llama's include an acceptable-use policy. Examples are Qwen models such as [Qwen3-32B](https://huggingface.co/Qwen/Qwen3-32B) (Apache 2.0) and the DeepSeek and Mistral models above. But the law still applies: a local model does not make infringement or DMCA circumvention legal. And open models are often weaker at long, complex decompilation tasks. Some X users argued the rule will push people toward local models; [@marcthecreatorr](https://x.com/marcthecreatorr/status/2116189591388524574) wrote: "Open-source has to win."

### Overview

| Provider | Bans RE of its own service/model | Game-specific rule found |
|---|---|---|
| Anthropic | Yes (Consumer and Commercial Terms) | Claude Code instruction (reported; not in terms) |
| OpenAI | Yes (Terms of Use) | No |
| Google Gemini | Yes (Gemini API Terms) | No |
| xAI Grok | Yes (AUP) | No |
| Microsoft Copilot | Yes (Services Agreement) | Xbox fan-content rules |
| GitHub Copilot | Via GitHub terms | No; dual-use research allowed |
| Meta Llama | Licence allows modification | No |
| Mistral | Security of Mistral and others | No |
| DeepSeek | Yes (own services) | No |

## 5. What game EULAs say

The real restrictions usually come from the games themselves. Most commercial games are licensed, not sold, and their EULAs ban reverse engineering.

- **Riot Games** ([Terms of Service](https://www.riotgames.com/en/terms-of-service)): "you may not sell, copy, exchange, loan, reverse engineer, decompile, derive source code from, translate, [...] any of the Riot Services". It bans "unauthorized third party programs, including mods, hacks, cheats, scripts, bots" and warns: "we may require you to install anti-cheat software to play our games."
- **Valve / Steam** ([Steam Subscriber Agreement](https://store.steampowered.com/subscriber_agreement/)): users may not "reverse engineer, derive source code from, modify, disassemble, decompile" Steam content "without the prior consent, in writing, of Valve", but only "Except as otherwise permitted [...] or under applicable law notwithstanding these restrictions". Users also may not "disable, circumvent, or otherwise interfere with" anti-cheat software.
- **Minecraft** ([EULA](https://www.minecraft.net/en-us/eula)) explicitly permits Java Edition owners to "modify it by adding modifications, tools, or plugins". But "you may not distribute any Modded Versions of our game", and a mod must not contain "a substantial part of our copyrightable code or content".

Anti-cheat is the hardest line. In [MDY Industries v. Blizzard](https://en.wikipedia.org/wiki/MDY_Industries,_LLC_v._Blizzard_Entertainment,_Inc.) (9th Cir. 2010), the maker of a World of Warcraft bot was held liable under the DMCA for evading Blizzard's Warden anti-cheat system. And US contracts can beat fair-use arguments: in [Bowers v. Baystate](https://en.wikipedia.org/wiki/Bowers_v._Baystate_Technologies,_Inc.) (Fed. Cir. 2003), reverse engineering in breach of a shrink-wrap licence was treated as a breach of contract.

## 6. The legal frameworks: when reverse engineering is allowed

### European Union: the Software Directive

The key EU text is the [Software Directive 2009/24/EC](https://eur-lex.europa.eu/eli/dir/2009/24/oj/eng) (quoted from the [copy on legislation.gov.uk](https://www.legislation.gov.uk/eudr/2009/24/article/6), as EUR-Lex blocked our fetch).

- **Article 5(3) – observe, study, test:** a lawful user may "observe, study or test the functioning of the program in order to determine the ideas and principles which underlie any element of the program" while loading or running it ([Art. 5](https://www.legislation.gov.uk/eudr/2009/24/article/5)).
- **Article 6 – decompilation for interoperability:** no permission is needed when reproducing and translating the code "are indispensable to obtain the information necessary to achieve the interoperability of an independently created computer program with other programs". The conditions: you must have a right to use the copy, the information must not be "readily available" already, and you may only touch "the parts of the original program which are necessary". The information may not be used "for the development, production or marketing of a computer program substantially similar in its expression".
- **Article 8 – contracts cannot override this:** "Any contractual provisions contrary to Article 6 or to the exceptions provided for in Article 5(2) and (3) shall be null and void" ([Art. 8](https://www.legislation.gov.uk/eudr/2009/24/article/8)).

So in the EU, a EULA cannot stop you from studying how a game works while running it, or from decompiling the parts needed to make your own independent program work with it. Article 6 does **not** let you rebuild and publish the game. The EU Court of Justice added in [SAS Institute v World Programming](https://en.wikipedia.org/wiki/SAS_Institute_Inc_v_World_Programming_Ltd) (C-406/10, 2012) that copyright does not protect software functionality, programming languages or file formats as such. Graphics, music, story and characters are protected separately.

### United States: fair use and the DMCA

US law has no single interoperability article. Instead, courts have used fair use (17 U.S.C. § 107), and two video-game cases are the classics:

- **[Sega v. Accolade](https://law.justia.com/cases/federal/appellate-courts/F2/977/1510/305345/) (9th Cir. 1992):** Accolade disassembled Sega Genesis games to learn how to make compatible cartridges. The court held that "disassembly of copyrighted object code is, as a matter of law, a fair use of the copyrighted work if such disassembly provides the only means of access to those elements of the code that are not protected by copyright and the copier has a legitimate reason for seeking such access."
- **[Sony v. Connectix](https://law.justia.com/cases/federal/appellate-courts/F3/203/596/474793/) (9th Cir. 2000):** Connectix reverse engineered the PlayStation BIOS to build an emulator, the Virtual Game Station. The court held that "the intermediate copies made and used by Connectix during the course of its reverse engineering of the Sony BIOS were protected fair use, necessary to permit Connectix to make its non-infringing Virtual Game Station" ([U.S. Copyright Office summary](https://www.copyright.gov/fair-use/summaries/sony-connectix-9thcir2000.pdf)).

Both protect copying to learn and build something new and compatible, not distributing the original game.

The **DMCA** ([17 U.S.C. § 1201](https://www.law.cornell.edu/uscode/text/17/1201)) separately bans circumventing copy protection. But § 1201(f) allows a person "who has lawfully obtained the right to use a copy of a computer program" to circumvent a protection measure "for the sole purpose of identifying and analyzing those elements of the program that are necessary to achieve interoperability of an independently created computer program with other programs".

Every three years, the Librarian of Congress also grants exemptions, listed in [37 CFR § 201.40](https://www.law.cornell.edu/cfr/text/37/201.40) (current rules from October 28, 2024). Two matter for games:

- **Good-faith security research** on lawfully acquired software, "solely for purposes of good-faith testing, investigation, and/or correction of a security flaw or vulnerability".
- **Abandoned online games:** for lawfully acquired games whose publisher "has ceased to provide access to an external computer server necessary to facilitate an authentication process to enable gameplay", circumvention is allowed to "restore access to the game for personal, local gameplay", and for preservation by eligible libraries, archives and museums.

### Clean-room design

[Clean-room design](https://en.wikipedia.org/wiki/Clean-room_design) is the classic method for building a compatible re-implementation. One team studies the original and writes a specification of *what* it does. A second team, which never sees the original code, writes new code from that specification. The new code is independently created and does not copy protected expression. It protects against copyright claims, not patents. With AI, if the same model reads the decompiled code and writes the "new" code, the separation between the teams is gone. Mojang's takedown notice against a self-described "clean-room C++ remake" of classic Minecraft, which according to the [PortedGames tracker](https://portedgames.com/takedowns/) claims the project contains over 2,000 core Minecraft files, shows that the label alone protects nobody.

## 7. Practical options: reverse engineering without problems

Based on the documents above, these are the lower-risk routes. None is a guarantee.

1. **Your own software or open-source games.** If you own the code or it is openly licensed, analysing it raises no EULA or copyright problem. It is also the safest way to learn the tools.
2. **Documented interoperability (EU).** For a save-game editor, controller driver, file converter or mod loader, write down why the information is needed, that it is not available elsewhere, and which parts you analysed, as Article 6 requires. Do not publish the decompiled game code.
3. **The US statutory routes.** Interoperability under § 1201(f), good-faith security research and abandoned-server games are covered. Redistributing game code or assets is not.
4. **Official modding programmes.** Explicit permission, such as the Minecraft Java Edition mod rules or a publisher's official modding tools, is the clearest licence you can get. Check the rules on distribution and money.
5. **Bug bounties.** For security flaws, use the publisher's programme. Riot, for example, points researchers to its [bug bounty on HackerOne](https://www.riotgames.com/en/security). Anthropic's new Usage Policy explicitly allows work "within the scope of an authorized bug bounty program or vulnerability disclosure policy".
6. **Keep away from anti-cheat and online play.** Bypassing anti-cheat breaks almost every EULA and can violate anti-circumvention law. Analyse offline, single-player, lawfully owned copies.
7. **Pick the AI tool with the rules in mind.** Cloud models apply provider policies and filters; local open-weight models apply only their licence and the law. Tools such as [REA](https://github.com/morluto/rea) run the analysis locally and support several agents, but the legal questions stay the same.
8. **Separate analysis from rebuilding.** Understanding and writing about how a game works is far less risky than publishing a playable rebuild. The recent takedowns mostly hit playable ports and decompiled code.

## What we could not verify

- The exact delivery path and start date of the game sentence. X posts name the `tengu_heron_brook` flag and say "around Oct 27"; the tracker links the text to version 2.1.314 from October 30.
- Whether the rule, or a similar block, also applies on the raw Claude API, on Claude.ai or inside the Opus 5.5 model. We found no post with a direct API test, and we ran none.
- Whether Anthropic changed its reverse-engineering safeguards in October, and why. Anthropic has made no public statement that we could find.
- How the instruction treats mods, emulators or decompilation in practice (we ran no tests), and every entry on the PortedGames list.

## Key takeaways

- The viral rule is real: Anthropic's Claude Code team confirmed "two sentences" in Claude Code's prompt on Opus 5.5. It is delivered from Anthropic's servers, but we found no evidence that the raw Claude API enforces it. It targets *recreating specific existing games*, not reverse engineering in general, and it is not in Anthropic's terms.
- Anthropic's legal documents contain no game-specific ban; the Usage Policy effective November 12, 2026 even adds an explicit allowance for authorised security research and bug bounties.
- All major AI providers forbid reverse engineering *their own* services and ban IP infringement and safeguard circumvention. None we checked names game reverse engineering.
- The strongest limits come from game EULAs and anti-cheat rules. EU law (Software Directive Arts. 5(3), 6, 8) and US law (Sega, Connectix, § 1201(f), DMCA exemptions) protect studying and interoperability, not republishing games.

*Again: this article is general information, not legal advice.*

## Sources

- [X: @chasmmmmmmmmmmm on the Claude Code game rule (Oct 30, 2026)](https://x.com/chasmmmmmmmmmmm/status/2116062991686721968)
- [X: @Pirat_Nation on the rule (Oct 30, 2026)](https://x.com/Pirat_Nation/status/2116168747761197428)
- [X: @0x0SojalSec on game recreations (Oct 30, 2026)](https://x.com/0x0SojalSec/status/2116107862309310777)
- [X: @0x0SojalSec, "Claude can no longer Reverse Engineer Anything" (Oct 23, 2026)](https://x.com/0x0SojalSec/status/2113751276320399694)
- [X: @yacineMTB (Oct 24, 2026)](https://x.com/yacineMTB/status/2114028685028417678)
- [X: @BenPielstick reply (Oct 30, 2026)](https://x.com/BenPielstick/status/2116186519929270419)
- [X: @Rahmeljackson (Oct 30, 2026)](https://x.com/Rahmeljackson/status/2116224579068739993)
- [X: @marcthecreatorr (Oct 30, 2026)](https://x.com/marcthecreatorr/status/2116189591388524574)
- [X: Addy Osmani (Claude Code, Anthropic) confirms the prompt change (Oct 30, 2026)](https://x.com/addyosmani/status/2116213240363729013)
- [X: @MorganGermani reply on API users (Oct 30, 2026)](https://x.com/MorganGermani/status/2116220906980659303)
- [X: Grok reply on bootstrap API / GrowthBook delivery (Oct 30, 2026)](https://x.com/grok/status/2116099175272047062)
- [X: Grok reply on the flag being restored on launch (Oct 30, 2026)](https://x.com/grok/status/2116146467643502622)
- [X: Grok reply calling the flag a server-side system-prompt injector (Oct 30, 2026)](https://x.com/grok/status/2116218043651051944)
- [GitHub issue #62061: server-side system prompt injection via tengu_heron_brook (May 2026)](https://github.com/anthropics/claude-code/issues/62061)
- [GitHub issue #106167: Server-delivered "games" instruction blocks professional development work (Oct 30, 2026)](https://github.com/anthropics/claude-code/issues/106167)
- [FourWeekMBA: Claude Code users report a new rule against recreating games](https://fourweekmba.com/ai-claude-code-users-report-a-new-rule-against-recreating-games/)
- [Crypto Briefing: Anthropic quietly blocks Claude Code from recreating existing video games](https://cryptobriefing.com/anthropic-claude-code-blocks-video-game-clones/)
- [Anthropic: 2026 Usage Policy update (Oct 8, 2026)](https://www.anthropic.com/news/2026-usage-policy-update)
- [Claude Docs: Migrating to API version 2026-10-21](https://platform.claude.com/docs/en/api/migration-2026-10-21)
- [core-directive.com: Prompt changes in Claude Code v2.1.314](https://changelogs.core-directive.com/prompts/2.1.314)
- [core-directive.com: tengu_heron_brook flag](https://changelogs.core-directive.com/reference/flag/tengu-heron-brook)
- [GitHub: Claude Code release v2.1.314](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)
- [GitHub: Claude Code changelog](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
- [PBX Science: Are Claude's reverse engineering powers being restricted? (Oct 26, 2026)](https://pbxscience.com/are-claudes-reverse-engineering-powers-being-restricted-what-is-confirmed-and-what-is-not/)
- [Kotaku: Vibe-coded browser ports of games work perfectly, unfortunately (Oct 9, 2026)](https://kotaku.com/we-might-be-cooked-as-these-vibe-coded-web-browser-ports-of-halo-the-simpsons-hit-and-run-and-gta-vice-city-seem-to-work-perfectly-2000743300)
- [PortedGames: Game port takedowns tracker](https://portedgames.com/takedowns/)
- [GitHub: morluto/rea – REA: Reverse Engineer Anything](https://github.com/morluto/rea)
- [Anthropic: Usage Policy (effective Nov 12, 2026)](https://www.anthropic.com/legal/aup)
- [Wayback Machine: Anthropic Usage Policy, version effective Sep 15, 2025](https://web.archive.org/web/20260601000000/https://www.anthropic.com/legal/aup)
- [Anthropic: Consumer Terms of Service](https://www.anthropic.com/legal/consumer-terms)
- [Anthropic: Commercial Terms of Service](https://www.anthropic.com/legal/commercial-terms)
- [OpenAI: Terms of Use](https://openai.com/policies/row-terms-of-use/)
- [OpenAI: Usage Policies](https://openai.com/policies/usage-policies/)
- [Google: Gemini API Additional Terms of Service](https://ai.google.dev/gemini-api/terms)
- [Google: Generative AI Prohibited Use Policy](https://policies.google.com/terms/generative-ai/use-policy)
- [xAI: Acceptable Use Policy](https://x.ai/legal/acceptable-use-policy)
- [Microsoft: Services Agreement](https://www.microsoft.com/en-us/servicesagreement)
- [Microsoft: Copilot Terms of Use](https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/termsofuse)
- [Xbox: Game Content Usage Rules](https://www.xbox.com/en-US/developers/rules)
- [GitHub: Terms for Additional Products and Features](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features)
- [GitHub: Active Malware or Exploits policy](https://docs.github.com/en/site-policy/acceptable-use-policies/github-active-malware-or-exploits)
- [Meta: Llama 4 Community License](https://www.llama.com/llama4/license/)
- [Meta: Llama 4 Acceptable Use Policy](https://www.llama.com/llama4/use-policy/)
- [Mistral AI: Usage Policy](https://legal.mistral.ai/terms/usage-policy)
- [Hugging Face: Mistral Small 3.1 (Apache 2.0)](https://huggingface.co/mistralai/Mistral-Small-3.1-24B-Instruct-2503)
- [DeepSeek: Terms of Use](https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html)
- [Hugging Face: DeepSeek-R1 (MIT)](https://huggingface.co/deepseek-ai/DeepSeek-R1)
- [Hugging Face: DeepSeek-V3-0324 (MIT)](https://huggingface.co/deepseek-ai/DeepSeek-V3-0324)
- [Hugging Face: Qwen3-32B (Apache 2.0)](https://huggingface.co/Qwen/Qwen3-32B)
- [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
- [MIT License](https://opensource.org/license/mit)
- [Riot Games: Terms of Service](https://www.riotgames.com/en/terms-of-service)
- [Riot Games: Security and bug bounty](https://www.riotgames.com/en/security)
- [Valve: Steam Subscriber Agreement](https://store.steampowered.com/subscriber_agreement/)
- [Minecraft: End User License Agreement](https://www.minecraft.net/en-us/eula)
- [Wikipedia: MDY Industries v. Blizzard Entertainment](https://en.wikipedia.org/wiki/MDY_Industries,_LLC_v._Blizzard_Entertainment,_Inc.)
- [Wikipedia: Bowers v. Baystate Technologies](https://en.wikipedia.org/wiki/Bowers_v._Baystate_Technologies,_Inc.)
- [EUR-Lex: Directive 2009/24/EC on the legal protection of computer programs](https://eur-lex.europa.eu/eli/dir/2009/24/oj/eng)
- [legislation.gov.uk: Directive 2009/24/EC, Article 5](https://www.legislation.gov.uk/eudr/2009/24/article/5)
- [legislation.gov.uk: Directive 2009/24/EC, Article 6](https://www.legislation.gov.uk/eudr/2009/24/article/6)
- [legislation.gov.uk: Directive 2009/24/EC, Article 8](https://www.legislation.gov.uk/eudr/2009/24/article/8)
- [Wikipedia: SAS Institute v World Programming (C-406/10)](https://en.wikipedia.org/wiki/SAS_Institute_Inc_v_World_Programming_Ltd)
- [Justia: Sega Enterprises v. Accolade, 977 F.2d 1510 (9th Cir. 1992)](https://law.justia.com/cases/federal/appellate-courts/F2/977/1510/305345/)
- [Justia: Sony Computer Entertainment v. Connectix, 203 F.3d 596 (9th Cir. 2000)](https://law.justia.com/cases/federal/appellate-courts/F3/203/596/474793/)
- [U.S. Copyright Office: Sony v. Connectix fair use summary](https://www.copyright.gov/fair-use/summaries/sony-connectix-9thcir2000.pdf)
- [Cornell LII: 17 U.S.C. § 1201](https://www.law.cornell.edu/uscode/text/17/1201)
- [Cornell LII: 37 CFR § 201.40 (DMCA exemptions)](https://www.law.cornell.edu/cfr/text/37/201.40)
- [Wikipedia: Clean-room design](https://en.wikipedia.org/wiki/Clean-room_design)
- [Wikimedia Commons: Gravis PC GamePad, disassembled (image)](https://commons.wikimedia.org/wiki/File:Gravis_PC_GamePad,_disassembled.jpg)
