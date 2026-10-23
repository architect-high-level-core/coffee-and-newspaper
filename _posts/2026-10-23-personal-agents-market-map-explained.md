---
layout: post
title: "The Personal Agents Market Map Explained: 46 AI Agents, and a Close Look at the Independents and Vertical Specialists"
date: 2026-10-23 11:01:00 +0200
tags: [AI, AI agents, personal agents, OpenClaw, iMessage, startups, market map, Instinct, Poke, Perplexity, Manus, Genspark, Lindy, family AI, travel AI]
image: /assets/img/2026-10-23-personal-agents-market-map-explained.jpg
image_alt: "A young woman with long blond hair sits at a wooden café table and types on her smartphone with both hands, an iced coffee with a black straw and a pair of sunglasses in front of her"
image_credit: 'Photo: <a href="https://unsplash.com/@rawpixel" rel="nofollow noopener" target="_blank">rawpixel.com</a>, “<a href="https://commons.wikimedia.org/wiki/File:Texting_over_iced_coffee_(Unsplash).jpg" rel="nofollow noopener" target="_blank">Texting over iced coffee (Unsplash)</a>”, CC0 1.0 (public domain dedication), via Wikimedia Commons'
image_license: "CC0 1.0"
image_license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
image_description: "Photo of a young woman in a light, floral summer top sitting at a dark wooden table in a café. Her face is mostly hidden by her long blond hair as she looks down at a smartphone she holds in both hands and types a message. On the table are a plastic cup of iced coffee with milk and a black straw, and a pair of dark sunglasses. The scene illustrates the idea behind many new personal AI agents: instead of opening an app, you simply text your assistant like a friend."
---

Personal AI agents are the hottest consumer AI category of autumn 2026. Every week brings a new assistant that you can text, call or let run in the background. To keep track, McBain (@heyneighbor), who works in developer relations at OpenClaw, publishes a weekly thread called **OpenClaw Personal Agents Weekly**. Its October 15, 2026 edition included a one-page **"Personal Agents Market Map"** with 46 products ([original post on X](https://x.com/heyneighbor/status/2110809223408058639)). The post was viewed more than 120,000 times and saved by more than 800 people.

This article explains the map as a whole and what "personal agent" means. It then looks in detail at two of its four sections: the **Independent Agent-Only Companies** and the **Industry/Vertical-Specific** agents. For every product we did a light check of public sources. Where we could not verify something, we say so and report only what the map shows.

**A note on the source:** the map is published under OpenClaw's "Personal Agents Weekly" banner by someone who works at OpenClaw. It is a useful snapshot, not a neutral industry report. The selection is curated by one person, and the author asks readers every week what is missing. The map itself says "Sources in thread"; most thread entries are short summaries without links, so we looked up primary sources ourselves.

**Key terms:**

- **AI agent:** software built on a language model that does not just answer, but carries out tasks: it uses tools, websites and apps, often over several steps.
- **Personal agent:** an agent that works for one individual, knows their context (email, calendar, preferences) and is always available. The map's own definition: "Persistent, always-on AI agents for individuals."
- **Text-first:** you use the agent through a messaging channel you already have (iMessage, WhatsApp, SMS, Telegram) instead of a separate app.
- **Own computer:** the agent has its own (usually cloud-based) computer with a browser, so it can click through websites like a person.
- **Ambient:** the agent observes context in the background (for example meetings or screen content) and suggests actions without being asked.
- **Self-host:** you run the software on your own machine or server rather than using a company's service.
- **Vertical:** focused on one industry or life area (family, travel, creators) rather than everything.

## 1. The whole map at a glance

The map sorts 46 products into four boxes.

### Model-Lab Offerings

Agents from the companies that build the large AI models themselves.

- **The anchors:** ChatGPT dots (OpenAI), Grok Bot (credited to "SpaceXSI" on the map) and Muse (Meta). In the thread, the author writes that these three "are still the only players with their own agents" and asks: "When will Google and Anthropic enter the fray?"
- **Also from the labs:** Gemini Spark (Google), Autopilot, formerly Scout (Microsoft), and Claude Cowork (Anthropic). These are agent-like products from the labs that the author does not (yet) count as full personal agents.

### Open Source / Self-Host / Bring-Your-Own-Model

Software you run yourself, connected to an AI model of your choice.

- **Full personal agents:** OpenClaw (OpenClaw Foundation), Hermes Agent (Nous Research), Vellum (Vellum AI), Comma (AFK AI).
- **Local-first desktop (bring your own key):** Pivra Desk (Pivra), where you supply your own API key.
- **Lightweight and hardened runtimes:** ZeroClaw, NanoClaw, nanobot (HKU Data Intelligence Lab), IronClaw (NEAR AI), Moltis and PicoClaw. These are smaller or security-focused engines for running agents.

### Independent Agent-Only Companies

Start-ups and companies whose main product is a personal agent, not a model. Covered in detail in section 3.

### Industry/Vertical-Specific

Agents built for one area of life: family and household, travel, creators and work life. Covered in detail in section 4.

## 2. What counts as a "personal agent"?

The map's subtitle is the best short definition: **persistent, always-on AI agents for individuals.** Three ideas are packed into that:

1. **Persistent:** the agent remembers you across conversations: your preferences, your family, your projects.
2. **Always-on:** it keeps working when you are not looking, for example monitoring a flight or following up on an email.
3. **For individuals:** it acts on behalf of one person, not a company's customer-service queue.

The author's replies in the thread show how he draws the line. When a reader asked why Claude Code was missing, he replied that "Claude Code is still a 'coding' agent, until their positioning changes they stay off the list!" When others suggested products, he asked "Is it a personal agent?" or "Is that a personal ai?" A product that is still on a waitlist is only added "once it's off waitlist" ([thread replies on X](https://x.com/heyneighbor/status/2110809223408058639)).

**Why this matters:** personal agents need deep access to email, calendars, payment methods and sometimes your screen. That is what makes them useful, and also what makes them risky. In August 2026, early testers of Instinct raised concerns about its broad terms of service, about stored emails and about one case of an email sent without asking first ([TechCrunch](https://techcrunch.com/2026/08/24/instincts-powerful-ai-assistant-is-raising-privacy-and-security-concerns/)). Several products on the map now advertise privacy, approval steps or SOC 2 security audits as selling points for exactly this reason.

## 3. Independent Agent-Only Companies

### What the category means and why it exists

These are companies that **do not build their own frontier model**. They rent models from the big labs (or open models) and compete on everything around them: the interface, memory, integrations with apps, the ability to act in the real world, trust and personality. The category exists because:

- **Models have become a commodity layer.** Strong models are available via API, so a small team can build a capable agent quickly.
- **OpenClaw showed the demand.** TechCrunch notes that interest in personal AI "has been growing since the arrival of OpenClaw" ([TechCrunch](https://techcrunch.com/2026/08/24/instincts-powerful-ai-assistant-is-raising-privacy-and-security-concerns/)). Many users want that power without setting up their own server.
- **Investors are paying a lot.** Instinct was reported at a $10 billion valuation by October; Tab emerged from stealth at $300 million; Persona and Hello Haven raised early rounds of $10 million and $15 million (details below).
- **The model labs are moving in.** With ChatGPT dots, Grok Bot and Muse, the independents now compete against the companies whose models they rely on. Differentiation through channel, niche or trust is therefore essential, and acquisitions happen: Poke was bought by Cognition in July 2026.

The map splits the independents into three subgroups.

### 3a. Text-first (iMessage / WhatsApp / SMS)

**Idea:** no new app. You add the agent as a contact and text it like a person. It replies in the same thread and can join group chats. TechCrunch summed up the trend in an October 10, 2026 overview of "AI agents that can live in your text messages" ([TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)).

- **Instinct** (Spear Street Technology, per the map and Instinct's terms). An invite-only assistant you reach by text, WhatsApp or phone. It connects to email, calendar, messaging apps and more, and can book appointments, handle shopping or find flights. Its team is led by former Sierra research scientist Noah Shinn. In August 2026, testers praised it but criticised its broad terms of service and security model ([TechCrunch, Aug 24](https://techcrunch.com/2026/08/24/instincts-powerful-ai-assistant-is-raising-privacy-and-security-concerns/)). TechCrunch later reported a $1 billion round at a $10 billion valuation in September and noted that Instinct now gives assistants their own email address and is starting to place calls. It remains in private beta ([TechCrunch, Oct 10](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/); [instinct.com](https://instinct.com/)).
- **Poke** (Cognition, per the map). A general-purpose assistant reached by text message, launched in March 2026. In June 2026, Apple approved it as the first AI agent on the Apple Messages for Business platform. In July 2026, its maker, The Interaction Company of California, was acquired by the AI coding company Cognition ([TechCrunch](https://techcrunch.com/2026/07/24/why-cognition-bought-poke-ai-personality-is-becoming-a-competitive-advantage/); [Cognition](https://cognition.com/blog/interaction)). Poke's X profile now reads "Now part of @Cognition".
- **Tab.** An assistant you text via iMessage or WhatsApp for everyday tasks, from ordering groceries to finding gifts. Its website says purchases need your approval of item, total and payee. It emerged from stealth in early October 2026 at a $300 million valuation and is in private beta with a waitlist ([TechCrunch](https://techcrunch.com/2026/10/07/another-personal-ai-assistant-has-launched-meet-tab-which-emerged-from-stealth-with-a-300m-valuation/); [tab.bot](https://tab.bot/)).
- **Persona.** A new company from Cal AI co-founder Zach Yadegari, offering a free iMessage beta. TechCrunch reported a $10 million raise led by Vine Ventures on October 8, 2026. A $179 wearable wristband is planned for December and was not yet shipping as of the thread ([TechCrunch](https://techcrunch.com/2026/10/08/cal-ais-19-year-old-founder-just-raised-10m-for-his-new-ai-startup/); [yourpersona.com](https://yourpersona.com/)).
- **folk.** An assistant you message through iMessage, WhatsApp and Telegram. It remembers personal context, manages reminders and email, tracks flights and can make restaurant reservations. A distinguishing feature is that it runs on its own private cloud computer. Beta since May 2026; free, with a Pro plan for unlimited background tasks ([TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/); [folk.com](https://www.folk.com/)).
- **Hello Haven.** Its assistant "Haven" is marketed as a personal "digital twin" that learns your preferences and routines and can act across phone, text, email, voice, web and its app. The company announced its launch in September 2026 with $15 million in funding ([PR Newswire](https://www.prnewswire.com/news-releases/hello-haven-launches-with-a-personal-ai-digital-twin-and-15-million-funding-302881418.html); [hellohaven.ai](https://my.hellohaven.ai/)). Its website describes it as free during beta.
- **Rene** (Rene Labs). Calls itself "the best contact in your phone". A text-based assistant on iMessage, Telegram and WhatsApp with a browser, code execution, shopping and slide and image creation. According to the thread, since October 12 it also works in group chats, where it can build trip itineraries, call restaurants or create budget sheets for everyone ([rene.co](https://rene.co/); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)).
- **Martin.** A general-purpose assistant reachable by SMS, phone, WhatsApp, email, Slack and an iOS app. It manages calendars, email, reminders and notes, can send messages or make calls for you, and delivers daily summaries. TechCrunch lists prices from $21 per month ([trymartin.com](https://www.trymartin.com/); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)).
- **Tomo.** An iMessage assistant whose main difference is that it can be added to group conversations. It helps with goals, accountability, scheduling, reminders, web search, calendars and email. TechCrunch lists the basic plan at $19.99 per month ([TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/); [App Store](https://apps.apple.com/us/app/tomo-your-personal-ai/id6757726935)).
- **Pally.** An assistant "over text" from the Y Combinator S25 batch, working over iMessage, RCS and Telegram. It connects information across WhatsApp, Gmail, calendars and Google Drive. According to the thread, on October 12 Pally became completely free, including features that used to be in its top plan: its own phone number and email, calls and web purchases on your behalf ([pally.com](https://www.pally.com); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)).
- **Iris** (map: "Iris (on Hermes Agent)"). A hosted iMessage assistant powered by Nous Research's open-source Hermes Agent, with persistent memory and proactive follow-ups. Its website lists a free tier and a Plus plan at $19 per month ([iris-agent.co](https://iris-agent.co/personal-assistant); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)). Iris is an example of a business built on top of an open-source agent from the map's self-host section.

### 3b. Agents with their own computer

**Idea:** instead of only calling app interfaces (APIs), these agents get a full computer, usually a virtual machine in the cloud, with a browser and files. They can then work on any website, run code and keep going for hours. Some also get their own email address, phone number or payment card, so they do not need your personal accounts for every task.

- **Perplexity Computer** (Perplexity). Announced in February 2026, it takes a goal in plain language, plans the work, hands parts to specialised sub-agents and runs them in isolated cloud environments, producing reports, documents, apps or recurring monitoring tasks ([Perplexity](https://www.perplexity.ai/hub/blog/introducing-perplexity-computer); [Ars Technica](https://arstechnica.com/ai/2026/02/perplexity-announces-computer-an-ai-agent-that-assigns-work-to-other-ai-agents/)). According to the thread, Perplexity open-sourced "SPACE", the sandbox that runs every Computer task, on October 15 under the Apache 2.0 licence.
- **Cue** (Manus). A standalone personal-agent app launched with Manus 2.0 at the end of September 2026. In Cue, each agent gets its own email address, phone number, wallet and computer; agents can pay within a budget you set, take calls and work together in group chats. It is in early access with an invite code ([The Next Web](https://thenextweb.com/news/manus-2-0-cue-ai-agents-email-phone-wallet); [Manus](https://manus.im/blog/introducing-manus-2-0)). The thread adds that Manus announced a partnership with OPPO on October 13 for an "Agent Mode" on OPPO phones.
- **Genspark Claw** (Genspark). Launched in March 2026 as Genspark's first "AI employee". It runs on a dedicated, always-on Genspark cloud computer or locally via a desktop app ([Genspark help center](https://www.genspark.ai/helpcenter/genspark-claw); [SiliconANGLE](https://siliconangle.com/2026/03/12/genspark-launches-claw-ai-assistant-secure-alternative-open-agent-platforms-openclaw/)). Per the thread, since October 14 you can message it from iMessage, WhatsApp, Slack or LINE.
- **Lindy.** Describes itself as "the AI employee that connects to all your tools". Its "Watch and Learn" feature lets you show it a task once, then turns it into a scheduled routine; a phone feature lets Lindy make and answer calls, for example as a receptionist ([Lindy: Watch and Learn](https://www.lindy.ai/product/watch-and-learn); [Lindy: Phone](https://www.lindy.ai/product/phone)). Lindy is more work-oriented than most products in this group.
- **Fo** (Wajo). Wajo's first consumer agent. Fo has its own identity: email address, phone number and payment card, so it can call businesses, send emails, make bookings and buy things without your credentials. If it gets stuck, Wajo says a human assistant can finish the task. Fo launched publicly in late September 2026 with a free tier ([Wajo](https://wajo.ai/blog/unveiling-wajo/); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)).
- **szn.** An assistant that works through one message thread: you send texts, voice notes, photos or forwarded emails, and it makes calls, sends emails and follows up. It has its own name, phone number and email address ([theszn.ai](https://theszn.ai/); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)). Usage figures quoted by TechCrunch come from szn's own website and were not checked independently.

### 3c. Desktop, device and ambient

**Idea:** these agents live on your computer or phone (or plan their own hardware) and work proactively: they notice what is happening and suggest the next step, often with a strong focus on privacy.

- **Eney** (MacPaw, the maker of CleanMyMac and Setapp). A proactive assistant for Mac and, since October 15, iPhone. It spots upcoming calls and other tasks, prepares next steps and asks before acting. It requires Apple Silicon and macOS 15 or later; requests are processed in the cloud by default ([MacPaw](https://macpaw.com/news/eney-announcement); [macpaw.com/eney](https://macpaw.com/eney)).
- **Hark Pro** (Hark). Launched October 6, 2026 by Brett Adcock's company Hark as a free app for iOS, Android and web, with paid tiers for more usage ($20 and $100 per month). Hark describes it as "the operating system for your life": it remembers you, uses its own cloud computer called "Handoff", stores logins in an encrypted vault and offers one-tap "Action Buttons". Hark says it is designing its own hardware ([Hark](https://hark.com/articles/introducing-hark-pro); [TechCrunch](https://techcrunch.com/2026/10/06/hark-releases-an-ai-personal-assistant-with-a-focus-on-privacy/)).
- **Underdog.** A privacy-focused assistant whose model runs entirely on the user's device, launched as an invite-only beta in early October 2026. TechCrunch lists Mac and Windows support, and the thread reports Windows availability on October 15; Linux, iPhone and Android versions are planned. The company says it will be free initially and never show ads. It released its own compact model, Saluki 27B, as open weights ([TechCrunch](https://techcrunch.com/2026/10/06/silicon-valleys-ai-wunderkind-launches-underdog-the-most-private-instinct-muse-competitor-yet/); [Hugging Face](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)).
- **Skye** (Signull Labs). An "agentic home screen" for iPhone: widgets that show a ranked feed of what matters, drawn from calendar, email and other sources, with briefings and confirm-first actions. Signull Labs raised about $3.6 million in seed funding ([TechCrunch](https://techcrunch.com/2026/04/27/investors-back-skye-signull-labs-ai-home-screen-app-for-iphone-ahead-of-launch/); [skyeapp.ai](https://skyeapp.ai/)).
- **Ambi** (Mistlabs). An "ambient intelligence" app that captures context across iPhone, Apple Watch and Mac, then drafts work and suggests next steps. On October 12, 2026, Mistlabs took it out of beta on Apple devices and announced $26 million in funding; a standalone wearable is still to come ([SiliconANGLE](https://siliconangle.com/2026/10/12/mistlabs-takes-its-ambi-ai-system-out-of-beta-on-apple-devices-with-26m-in-funding/); [TechCrunch](https://techcrunch.com/2026/10/12/former-plaud-exec-raises-26m-for-ai-app-that-listens-to-you-in-the-background/)). Because it listens in the background, its privacy policy is worth reading before use.

## 4. Industry/Vertical-Specific agents

### What the category means and why it exists

Vertical agents do **one area of life really well** instead of trying to do everything. They exist for good reasons:

- **Specific data sources:** a family agent needs school emails, sports schedules and WhatsApp parent groups; a travel agent needs airline systems and loyalty programmes. General agents rarely handle these details well.
- **Trust and safety:** a narrow scope makes it easier to explain what the agent may and may not do, and to get security audits.
- **Human backup:** some verticals (travel especially) combine AI with human staff for situations where a mistake is expensive.
- **Clear buyers:** parents, frequent travellers and creators are well-defined groups who are used to paying for help.

The map lists seven products in four subgroups. The author also signals growth here: replying to one founder, he wrote that their product "would sit in the Vertical agents section" and would be added the following week.

### 4a. Family and household

The largest vertical group. All four products tackle the same problem: family information is scattered across school messages, calendars, emails and group chats.

- **Fambot.** An AI "chief of staff" for families. It connects to Gmail, Google Calendar, Outlook and WhatsApp, turns school updates, sports schedules and meal planning into a plan, and every night sends a summary of the next day by SMS, which parents can reply to. It launched in beta in early September 2026 with a $3.5 million pre-seed round and is free during beta ([TechCrunch](https://techcrunch.com/2026/09/01/fambot-introduces-an-ai-chief-of-staff-for-families/); [Fambot](https://fambot.com/press-releases/fambot-launches-ai-chief-of-staff-for-families)).
- **Ohai.** A household assistant that turns texts, forwarded emails, photos and voice requests into shared calendars, reminders, chores and meal plans, and can scan school flyers for dates. It has a free tier; paid plans start at $9.99 per month ([ohai.ai](https://www.ohai.ai/); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)).
- **Ollie.** A family assistant that keeps calendars, emails, reminders and household tasks in sync and reports by text. Its main selling point is security: Ollie says it is SOC 2 compliant (an independent audit of security controls) and does not sell user data or use it to train AI models. Launched June 2026; free tier, paid plans from $25 per month for 150 messages ([ollie.ai](https://ollie.ai/); [TechCrunch](https://techcrunch.com/2026/09/03/ollie-is-betting-privacy-can-win-the-ai-assistant-race/)).
- **Orbits.** "Your home, handled." Works through an app and text messages, combining calendars, lists and conversations. It can search the web, make purchases, book restaurants, change appointments, request quotes from household service providers and remind family members about chores. Backed by a16z's Speedrun fund, N49P and Garage Capital ([tryorbits.com](https://tryorbits.com); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)).

### 4b. Travel

- **Miso.** A personal AI travel agent that works through iMessage. You can book, change and manage flights and hotels by text, and a dedicated human travel team helps with disruptions, rebooking and refunds. Miso takes your preferences and loyalty points into account ([miso.com](https://miso.com/); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)). Miso is a good example of a hybrid "AI plus humans" model.

### 4c. Creators

- **Stanley.** An "AI head of content" from Stan, the creator-commerce platform. It works via iMessage, Telegram and the web, learns your voice, turns voice notes into scripts and captions, keeps a content calendar and can schedule posts. It can use your Instagram account as context ([Stan blog](https://stan.store/blog/stanley/); [getstanley.ai](https://www.getstanley.ai/welcome); [TechCrunch overview](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)).

### 4d. Work life

- **Town.** Gives each user a "Townie", an assistant that learns how you work and handles recurring professional tasks across email, calendar, documents, Slack and other tools. Town raised a $55 million Series A led by Andreessen Horowitz and Forerunner in June 2026 ([Town](https://www.town.com/press/series-a); [Fortune](https://fortune.com/2026/06/03/towns-ai-assistants-andreessen-horowitz-forerunner-55-million/)). According to the thread, Town said on October 8 that its plans now deliver "about twice the work, for the same price", and on October 9 it was named to Forbes' "Agentic 20", with team features on the way.

## 5. What the map tells us

- **Messaging is the new app store.** Half of the 22 independents (11 products) are text-first, and several others can also be reached by text. Instead of competing for a spot on your home screen, they compete for a spot in your contacts.
- **Agents are getting their own identities.** Own email addresses, phone numbers and payment cards (for example Instinct, Cue, Fo, szn and Pally) and own cloud computers (Perplexity Computer, Genspark Claw, folk, Hark) let agents act in the world without borrowing your accounts. This is convenient, but it also means you are delegating legal and financial actions. Check what an agent may do without asking.
- **Privacy is becoming a product feature.** On-device models (Underdog), security audits (Ollie), encrypted vaults and "we never sell your data" pledges (Hark) respond directly to the trust problems seen in early 2026 products.
- **Consolidation has started.** Poke's sale to Cognition shows that bigger AI companies buy agent teams for their product and personality. With the model labs launching their own agents, more independents may be acquired or squeezed.
- **Verticals are the likely growth area.** Family logistics, travel and content creation are concrete, recurring problems that people already pay to solve.

The map is a snapshot of October 15, 2026, and this market changes weekly. Prices, availability and even company ownership may already differ when you read this.

## Sources

- [@heyneighbor on X: OpenClaw Personal Agents Weekly with the Personal Agents Market Map (Oct 15, 2026) and thread](https://x.com/heyneighbor/status/2110809223408058639)
- [TechCrunch: Here are the top AI agents that can live in your text messages (Oct 10, 2026)](https://techcrunch.com/2026/10/10/all-the-ai-agents-that-can-live-in-your-text-messages/)
- [TechCrunch: Instinct's powerful AI assistant is raising privacy and security concerns](https://techcrunch.com/2026/08/24/instincts-powerful-ai-assistant-is-raising-privacy-and-security-concerns/)
- [Instinct](https://instinct.com/)
- [TechCrunch: Why Cognition bought Poke](https://techcrunch.com/2026/07/24/why-cognition-bought-poke-ai-personality-is-becoming-a-competitive-advantage/)
- [Cognition: Welcoming The Interaction Company](https://cognition.com/blog/interaction)
- [TechCrunch: Meet Tab, which emerged from stealth with a $300M valuation](https://techcrunch.com/2026/10/07/another-personal-ai-assistant-has-launched-meet-tab-which-emerged-from-stealth-with-a-300m-valuation/)
- [Tab](https://tab.bot/)
- [TechCrunch: Cal AI's founder raises $10M for Persona](https://techcrunch.com/2026/10/08/cal-ais-19-year-old-founder-just-raised-10m-for-his-new-ai-startup/)
- [Persona](https://yourpersona.com/)
- [folk](https://www.folk.com/)
- [PR Newswire: Hello Haven launches with $15 million funding](https://www.prnewswire.com/news-releases/hello-haven-launches-with-a-personal-ai-digital-twin-and-15-million-funding-302881418.html)
- [Hello Haven](https://my.hellohaven.ai/)
- [Rene](https://rene.co/)
- [Martin](https://www.trymartin.com/)
- [Tomo on the App Store](https://apps.apple.com/us/app/tomo-your-personal-ai/id6757726935)
- [Pally](https://www.pally.com)
- [Iris](https://iris-agent.co/personal-assistant)
- [Perplexity: Introducing Perplexity Computer](https://www.perplexity.ai/hub/blog/introducing-perplexity-computer)
- [Ars Technica: Perplexity announces Computer](https://arstechnica.com/ai/2026/02/perplexity-announces-computer-an-ai-agent-that-assigns-work-to-other-ai-agents/)
- [The Next Web: Manus 2.0 and Cue](https://thenextweb.com/news/manus-2-0-cue-ai-agents-email-phone-wallet)
- [Manus: Introducing Manus 2.0](https://manus.im/blog/introducing-manus-2-0)
- [Genspark help center: Genspark Claw](https://www.genspark.ai/helpcenter/genspark-claw)
- [SiliconANGLE: Genspark launches Claw](https://siliconangle.com/2026/03/12/genspark-launches-claw-ai-assistant-secure-alternative-open-agent-platforms-openclaw/)
- [Lindy: Watch and Learn](https://www.lindy.ai/product/watch-and-learn)
- [Lindy: Phone calls](https://www.lindy.ai/product/phone)
- [Wajo: Unveiling Wajo](https://wajo.ai/blog/unveiling-wajo/)
- [szn](https://theszn.ai/)
- [MacPaw: Eney announcement](https://macpaw.com/news/eney-announcement)
- [MacPaw: Eney](https://macpaw.com/eney)
- [Hark: Introducing Hark Pro](https://hark.com/articles/introducing-hark-pro)
- [TechCrunch: Hark releases an AI personal assistant with a focus on privacy](https://techcrunch.com/2026/10/06/hark-releases-an-ai-personal-assistant-with-a-focus-on-privacy/)
- [TechCrunch: Underdog launch](https://techcrunch.com/2026/10/06/silicon-valleys-ai-wunderkind-launches-underdog-the-most-private-instinct-muse-competitor-yet/)
- [Hugging Face: Underdog Saluki 27B](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)
- [TechCrunch: Investors back Skye's AI home screen app](https://techcrunch.com/2026/04/27/investors-back-skye-signull-labs-ai-home-screen-app-for-iphone-ahead-of-launch/)
- [Skye](https://skyeapp.ai/)
- [SiliconANGLE: Mistlabs takes Ambi out of beta with $26M](https://siliconangle.com/2026/10/12/mistlabs-takes-its-ambi-ai-system-out-of-beta-on-apple-devices-with-26m-in-funding/)
- [TechCrunch: Former Plaud exec raises $26M for Ambi](https://techcrunch.com/2026/10/12/former-plaud-exec-raises-26m-for-ai-app-that-listens-to-you-in-the-background/)
- [TechCrunch: Fambot introduces an AI chief of staff for families](https://techcrunch.com/2026/09/01/fambot-introduces-an-ai-chief-of-staff-for-families/)
- [Fambot press release](https://fambot.com/press-releases/fambot-launches-ai-chief-of-staff-for-families)
- [Ohai](https://www.ohai.ai/)
- [Ollie](https://ollie.ai/)
- [TechCrunch: Ollie is betting privacy can win the AI assistant race](https://techcrunch.com/2026/09/03/ollie-is-betting-privacy-can-win-the-ai-assistant-race/)
- [Orbits](https://tryorbits.com)
- [Miso](https://miso.com/)
- [Stan: Meet Stanley](https://stan.store/blog/stanley/)
- [Stanley](https://www.getstanley.ai/welcome)
- [Town: Series A](https://www.town.com/press/series-a)
- [Fortune: a16z and Forerunner bet $55 million on Town](https://fortune.com/2026/06/03/towns-ai-assistants-andreessen-horowitz-forerunner-55-million/)
- [Wikimedia Commons: Texting over iced coffee (Unsplash) (image)](https://commons.wikimedia.org/wiki/File:Texting_over_iced_coffee_(Unsplash).jpg)
