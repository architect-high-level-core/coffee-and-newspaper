---
layout: post
title: "34 Startups Growing Fastest on X: Ben Lang's List Sorted by Theme, Explained and Analyzed"
date: 2026-11-04 07:44:00 +0100
slug: fastest-growing-startups-on-x
excerpt: "On November 1, 2026, Ben Lang (@benln) shared a list of the 34 startups with the fastest follower growth on X over the past 90 days, based on Harmonic data. We sort the list into seven themes – agent infrastructure, compute and models, world models, AI products, robotics, security and non-AI outliers – explain every company in plain words and look at what the list does and does not tell us."
tags: [AI, startups, X, Twitter, follower growth, Harmonic, AI agents, agent infrastructure, inference, GPU, world models, robotics, physical AI, security, AI detection, voice AI, venture capital, Ben Lang]
image: /assets/img/2026-11-04-fastest-growing-startups-on-x.jpg
image_alt: "Close-up of a wooden desk with three open laptops and a sheet of hand-drawn charts and notes; two people in shirts, visible only from the shoulders down, point at the paper with pencils"
image_credit: "Photo: helloquence, “Helloquence-61189” (2016, Unsplash), CC0 1.0 (public domain dedication), via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Helloquence-61189.jpg (resized)"
image_license: "CC0 1.0"
image_license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
image_description: "Stock photo from Unsplash by the user helloquence, dated 30 January 2016 and shared on Wikimedia Commons under CC0. It shows a close-up of a wooden desk with three open laptops, pencils and a printed sheet covered with hand-drawn diagrams and notes. Two people, seen only as hands and shirt sleeves, point at the sheet. The image stands for early-stage teamwork and planning in general. It does not show any of the companies, founders or products named in this article."
audio: /assets/audio/fastest-growing-startups-on-x.mp3
audio_voice: Andrew
audio_duration: "29:53"
---

Lists of "hot startups" usually rank companies by money raised or by valuation. On November 1, 2026, Ben Lang ([@benln](https://x.com/benln)) took a different angle. He posted a list of the startups whose X accounts gained followers fastest over the previous 90 days ([original post](https://x.com/benln/status/2116939965536059887)). The list is a single image with 34 entries, each with a one-line description and a location. When we read it on November 3, the post had about 74,000 views, 765 likes and 865 bookmarks. The bookmark count is higher than the like count, which suggests many people saved it as a reference list.

Asked in a reply how he built it, Lang answered that it was made "with harmonic.ai data" ([reply](https://x.com/benln/status/2116945705365618702)). Harmonic describes itself as "the complete startup database" and says it tracks signals such as funding rounds, hires and social follower milestones ([Harmonic](https://harmonic.ai/)). The post does not explain the exact method: whether growth is measured in absolute followers or in percent, which companies were eligible, or how ties were handled. That matters for how we read the list, and we come back to it in the analysis.

In this post we sort all 34 companies into seven themes, explain each one in plain words, and then look at the list as a whole.

**How we checked:** the company descriptions in quotation marks come from Lang's image. For about 20 companies we opened the official website on November 3, 2026 and compared its own description with the list (marked "website checked"). Where we did not open an official page, we say so ("not verified"), and we only repeat what the list says. We did not check follower counts, funding, customer numbers or product quality. Nothing here is investment advice.

**Key terms:**

- **AI agent:** software that uses a language model to carry out multi-step tasks on its own, for example browsing a website, sending an email or writing code.
- **Infrastructure ("infra"):** the tools and services that other developers build on, rather than an app that end users open directly.
- **Inference:** running a trained AI model to produce an answer. Training builds the model; inference uses it.
- **Open-weight model:** a model whose trained parameters are published, so others can download, adapt ("fine-tune") and run it.
- **World model:** an AI model that learns how an environment looks and changes over time, so it can predict or simulate what happens next.
- **Physical AI / embodied AI:** AI that controls robots or other machines in the real world.
- **Edge device:** a phone, laptop, car or sensor that runs a model locally instead of in a data center.

## 1. The whole list at a glance

| Theme | Companies | Count |
|---|---|---|
| Infrastructure for AI agents and developers | Kernel, neatlogs, Raindrop, AgentMail, Resend, Namespace, Vals AI | 7 |
| Compute, inference and model platforms | Wafer, Ornn, River AI, Proximal, Reactor, PrismML, Liquid AI | 7 |
| World models and multimodal research labs | Elorian AI, Odyssey, General Intuition | 3 |
| AI products for people and companies | Ghost, ambi, Hone, Wonderful, Venice.ai, Fish Audio | 6 |
| Robotics and physical AI | Skild AI, Dyna Robotics, PrismaX, REK, Powerus | 5 |
| Security and trust | Aikido Security, watchTowr, Pangram Labs | 3 |
| Outside the AI core | Novig, Liquid, Rainmaker | 3 |

The numbers in brackets below (#1 to #34) are the ranks from the original list. The grouping is ours; Lang did not sort the list by theme.

## 2. Infrastructure for AI agents and developers

This is the most clearly defined cluster, and it includes the company at the very top of the list. All of these firms sell to developers who build agents, not to the end users of those agents.

**Kernel (#1, San Francisco)** – "open-source browser infra for AI agents." Agents that need to use websites need a real browser running somewhere in the cloud, with logins, sessions and scaling handled for them. Kernel's website describes exactly this: "browser infrastructure for ai agents and web automations," with managed authentication, reusable sessions and autoscaling browsers (website checked). Ranking first by follower growth fits a year in which "computer-use" and browser agents became a mainstream topic. The "open-source" part we did not verify.

**neatlogs (#6, remote)** – "debugging tool for AI agents." When an agent fails, it is often hard to see where: a bad prompt, a broken tool call, a wrong website step. neatlogs' site promises "the fastest path from failure to fix" and says it finds what is failing, works out why and suggests a fix (website checked). It is a young, narrowly focused tool; we found no independent reviews.

**Raindrop (#11, San Francisco)** – "production monitoring for AI agents." Similar problem, different moment: Raindrop watches agents after they are live. Its website says it traces every run, auto-fixes "silent failures" and lets teams simulate before shipping (website checked). Monitoring and observability are classic infrastructure businesses; seeing two such companies (neatlogs and Raindrop) in a top-34 list shows how many teams now run agents in production and need to know when they go wrong.

**AgentMail (#25, San Francisco / remote)** – "email inbox API for AI agents." Many agents need their own email address, for example to sign up for a service or receive a confirmation code. AgentMail's site says it gives "your agent an inbox of its own" and lets it send, receive and act on email at scale (website checked). This is a good example of a new category: classic internet services rebuilt with agents, not humans, as the customer.

**Resend (#27, remote)** – "transactional emails for developers." Resend is older and broader than the agent wave. It sends emails such as password resets and receipts on behalf of apps. Its website calls itself "email for developers" and covers transactional and marketing email (website checked). Its place on the list may reflect the fact that many AI-built apps need a simple email service, but that is our interpretation, not something the data shows.

**Namespace (#8, remote / San Francisco / New York)** – "ephemeral compute." "Ephemeral" means short-lived machines that start quickly, do one job and disappear. Namespace's current website goes further and calls itself a "developer platform for agent scale," with cloud agents on "Devboxes," fast GitHub Actions runners and remote build execution (website checked). In other words, it has repositioned itself around coding agents that need many disposable computers.

**Vals AI (#15, San Francisco / remote US)** – "benchmarks for economically valuable AI tasks." Vals AI tests AI models on real-world work in fields such as coding, finance and law and publishes comparisons, according to its website (website checked). Independent benchmarks matter because model makers' own scores are hard to compare. How independent and robust Vals' tests are is something readers should judge from its published methods; we did not review them.

**Why this cluster matters:** agents are only as useful as the browsers, inboxes, computers and monitoring they can rely on. This group is the "picks and shovels" layer of the agent economy. Its weakness is that these companies depend heavily on one trend; if agent adoption slows, all of them feel it at once.

## 3. Compute, inference and model platforms

The second cluster is about running and training models: where GPUs come from, how fast models answer, and who builds smaller or more specialized models.

**Wafer (#10, San Francisco)** – "continual inference platform for low-latency ML." Wafer's website calls itself "Continual Inference" and promises "the fastest inference for open models" (website checked). Speed (latency) is a real competitive factor for voice assistants, coding tools and agents that call a model many times in a row. Speed claims of this kind are easy to make and hard to compare without independent tests.

**Ornn (#12, New York)** – "GPU compute marketplace with live spot prices." The idea is to treat GPU time like a commodity with transparent, changing prices, the way electricity or freight is traded. That fits the New York location and finance-style thinking. Not verified: we did not open Ornn's website.

**River AI (#17, Austin / Bay Area)** – "fine-tune and serve open-weight models." River AI, according to the list, helps companies adapt open models to their own data and run them. This market is crowded, with many hosting and fine-tuning providers. Not verified.

**Proximal (#14, San Francisco)** – "data and infra for training frontier AI." Frontier labs need large amounts of high-quality training data and the tooling around it. Proximal positions itself as a supplier for that. Not verified.

**Reactor (#28, San Francisco)** – "real-time generative media on distributed GPUs." Generating video or interactive media in real time is extremely compute-hungry, so spreading the work across many GPUs is the key technical problem. Not verified.

**PrismML (#13, Pasadena / San Francisco)** – "ultra-dense ML models for edge devices." The goal is to pack capable models into small sizes so they run on phones, laptops or embedded hardware. Not verified. Note: PrismML is a different company from PrismaX (#32), which works on robot data.

**Liquid AI (#34, remote / San Francisco / Boston)** – "deployable general AI models." Liquid AI builds its own family of "Liquid Foundation Models" (LFMs) and describes them as "device-native," designed for on-device, edge and cloud use with low latency and privacy (website checked). It is one of the better-known names on the list. Again, do not confuse it with Liquid (#24), a trading platform.

**Why this cluster matters:** it shows two opposite directions at once. Some companies try to make big-model compute cheaper and faster (Ornn, Wafer, Reactor); others try to make models small enough not to need a data center at all (PrismML, Liquid AI). Both are bets on the same pain point: the cost of running AI.

## 4. World models and multimodal research labs

Three companies on the list describe themselves less as product companies and more as research labs that build a new type of model.

**Elorian AI (#7, Palo Alto / remote)** – "multimodal AI that reasons from vision." "Multimodal" means the model handles more than text, here with a focus on images and video as the starting point for reasoning. Not verified.

**Odyssey (#23, Bay Area / London)** – "foundation world models." Odyssey's website calls it "an AI lab pioneering general world models: causal, multimodal systems that learn to understand and simulate the world" (website checked). World models could be used for interactive video, games, film and robot training. They are a research-heavy, long-term bet.

**General Intuition (#31, New York)** – "AI that perceives and acts in dynamic worlds." Its website calls it "the frontier lab for acting in space and time" and says it builds models that "perceive, predict, and act in virtual and physical environments" (website checked).

**Why this cluster matters:** many researchers see world models as a possible next step after large language models, especially for robotics and agents that act in physical or simulated space. It is also the area where the gap between vision and proven product is largest. Follower growth for research labs often comes from impressive demo videos, which say little about commercial results.

## 5. AI products for people and companies

This is the most mixed group: consumer assistants, an enterprise platform, a privacy-focused chat service and a voice tool.

**Ghost (#2, San Francisco)** – "personal AI that manages your digital life." The second-fastest-growing account on the list is a personal assistant. Personal agents that handle email, calendars and errands were one of the most discussed categories of 2026. Not verified. The name is generic, and there are other unrelated products called Ghost (for example the open-source publishing platform), so readers should check the exact company before drawing conclusions.

**ambi (#4, San Francisco / remote)** – "ambient AI for everyday contextual assistance." "Ambient" usually means an assistant that runs in the background, notices context and offers help without being asked each time. That raises obvious privacy questions. Not verified.

**Hone (#3, San Francisco)** – "autonomous AI engines that run outcomes." This description is the vaguest on the whole list. It suggests agents that are paid for results rather than for use, but the one-liner alone does not tell us for whom or in what field. Not verified.

**Wonderful (#5, "global")** – "enterprise AI platform for business workflows." Wonderful's website calls itself "The Enterprise AI OS" and says it helps "critical organizations accelerate AI adoption" (website checked). It is the only company in the top five that sells mainly to large organizations.

**Venice.ai (#33, remote)** – "privacy focused AI." Venice's website describes "private AI for unlimited creative freedom" and lets users generate text, images, characters and video (website checked). Its pitch combines privacy with fewer content restrictions than mainstream chatbots. Readers should judge the privacy claims against Venice's own policy; we did not review it.

**Fish Audio (#16, Bay Area / Tokyo / remote)** – "real-time voice generation." Fish Audio's website offers text-to-speech and voice cloning, claims "2m+ voices in 8 languages" and emotion control (website checked; numbers are the company's own). Voice cloning is useful for creators and accessibility, but it is also a known tool for fraud and impersonation, so safeguards matter.

**Why this cluster matters:** consumer AI is where follower growth is most natural, because end users follow products they use. Three of the top four entries (Ghost, Hone, ambi) are in this broad area. At the same time, most of these descriptions are short and abstract, which makes it hard to judge from the list alone what the products actually do.

## 6. Robotics and physical AI

Five companies work on robots or the data and environments around them. Together with the world-model labs, physical AI is the second-largest strand of the list.

**Skild AI (#22, San Mateo)** – "unified robotic intelligence across robot types." Skild's website says it is "building general purpose robotic intelligence" (website checked). The idea is one "robot brain" that can control many different machines, rather than one model per robot.

**Dyna Robotics (#20, Bay Area)** – "dexterous robots." Its website talks about "commercial-grade robots that complete end-to-end workflows in hospitality, logistics, and factory operations" (website checked). The focus on real, repeated shifts in commercial settings is a more down-to-earth pitch than general-purpose humanoids.

**PrismaX (#32, remote US / San Francisco)** – "robotics demo data for physical AI training." PrismaX's website calls it "the service layer for physical AI" and says it supplies robot training data from teleoperation (people remotely steering robots) and egocentric demonstrations (first-person video), with operators earning money for capturing data (website checked). Data is widely seen as the main bottleneck for robot learning, so this is a logical business.

**REK (#18, San Francisco)** – "humanoid robot fighting." This is the most entertainment-driven entry: humanoid robots fighting each other as a spectacle. Fighting robots produce viral clips, which is a plausible reason for fast follower growth. Not verified.

**Powerus (#9, Berlin / remote)** – "autonomous systems for high-risk environments." The list does not say which environments; possible fields range from industry and disaster response to defense, but we could not confirm which. Not verified. Powerus is also notable as the only company on the list with a German location.

**Why this cluster matters:** robotics companies combine three of the things that drive attention on X: impressive video, big ambitions and large funding rounds in the sector. Follower growth is therefore a weaker signal of commercial traction here than in, for example, developer tools, where followers are more likely to be actual users.

## 7. Security and trust

**Aikido Security (#21, "global")** – "app and cloud security analysis." Aikido's website promises "continuous, autonomous security" so developers can get "back to building" (website checked). Security tools for developer teams are a large, established market. Aikido appears to be one of the more mature companies on the list.

**watchTowr (#29, Singapore / remote)** – "exposure management." Exposure management means continuously finding what parts of an organization are reachable and attackable from the internet. We could not load its website (blocked by a bot check), so this entry is not verified.

**Pangram Labs (#26, New York)** – "detects AI-written or assisted text." Pangram's website advertises an AI detector for ChatGPT, Gemini and Claude text and says its results are "third-party verified" (website checked; we did not check those third-party studies). AI detection is controversial: false positives can hurt students and writers, so any detector's error rate matters more than its marketing.

**Why this cluster matters:** more AI-generated code, text and agents mean a larger attack surface and more questions about authenticity. Security is one of the few areas where demand clearly grows with AI adoption, whoever wins the model race.

## 8. Outside the AI core

Three companies do not describe themselves as AI companies at all.

**Novig (#19, New York / remote)** – "sports betting exchange." An exchange lets bettors trade with each other instead of betting against a bookmaker. Sports betting and prediction markets were a big topic in the United States in 2025 and 2026. Novig's website showed a human-verification page to our tool, so this entry is not verified.

**Liquid (#24, New York)** – "leveraged multi-asset trading platform." Leveraged trading means using borrowed money to increase both possible gains and losses. It is high-risk for retail users. Not verified, and again not related to Liquid AI (#34).

**Rainmaker (#30, US)** – "cloud seeding for water." Rainmaker's website says it uses drone-based cloud seeding to increase rainfall and fight drought (website checked). Cloud seeding is a real technique, but its effectiveness and side effects are debated among scientists, and weather modification is a frequent subject of online controversy. That controversy, rather than only interest in the product, may also explain fast follower growth, though this is our guess.

**Why this cluster matters:** these three entries show that the ranking is not an "AI list" by design. They also show that controversy and money-related topics (betting, trading, weather control) generate attention on X as reliably as technology does.

## 9. Analyzing the list as a whole

### Pattern 1: AI dominates, and agents dominate AI

Apart from the three outliers in section 8 and a few general developer and security tools (Resend, Aikido Security, watchTowr), every company on the list is an AI company or sells mainly to AI builders. Within that, the single strongest theme is agents: browsers, inboxes, debugging, monitoring, compute and personal assistants built for or as agents. If you count Kernel, neatlogs, Raindrop, AgentMail, Namespace, Ghost, Hone and ambi, about a quarter of the list is directly about agents, and the company at #1 is pure agent infrastructure.

### Pattern 2: Picks and shovels outnumber apps

Roughly half the list (the infrastructure, compute, security and data companies) sells tools to other builders. That matches a common view in the startup world that, during a platform shift, the suppliers of tools often see demand first. It also says something about X as a platform: developers and founders are a large and active audience there, so developer tools can grow followers fast.

### Pattern 3: San Francisco, then New York, then almost nobody else

By our count, at least 20 of 34 entries name San Francisco or the Bay Area (including Palo Alto and San Mateo), and 6 name New York. Outside the United States, only Berlin (Powerus), London (Odyssey, shared with the Bay Area), Tokyo (Fish Audio, shared), Singapore (watchTowr) and two "global" companies appear. Many list "remote" as well. The list is therefore very US-centric, and specifically Bay Area-centric. Whether that reflects reality or the data source and the audience of X is impossible to say from the post alone.

### Pattern 4: Physical AI is rising

Eight companies (five robotics firms plus the three world-model labs) are about AI that acts in physical or simulated space. A few years ago such a list would have been dominated by chat and text tools. The shift toward robots, robot data and world models is one of the clearest signals here.

### What the list does not tell us

- **Method:** the post says only "follower growth over the last 90 days." It does not say whether that is absolute or relative growth. A tiny account that grows from 500 to 5,000 followers is +900%; a large account that gains 50,000 followers grows much less in percent. The two methods would produce very different lists.
- **Quality of followers:** follower counts can be inflated by giveaways, paid promotion, viral one-off posts or bots. None of that is visible in the ranking.
- **Business results:** followers are attention, not revenue, users or retention. Several companies here are very young; others, like Aikido Security, Resend or Liquid AI, are established enough that growth may simply reflect launches or funding news.
- **What is missing:** there are no large, well-known AI labs or big tech companies, which makes sense since they already have huge audiences. There is almost nothing on health, climate (except Rainmaker), education, biotech or hardware chips, and nothing from China, India, Africa or Latin America. That may be a limit of the data source and the platform rather than of global startup activity.

### Possible bias

The list comes from one person and one data provider. Lang has a large following in the startup community; a list like this is useful public information, but readers should not assume it is neutral or complete. We did not check whether Lang or Harmonic has a relationship with any of the companies listed. Harmonic is itself a commercial data company, so a widely shared list built on its data also shows what its product can do. None of this makes the list wrong; it just means it is a snapshot, not a ranking of the "best" startups.

### Who the list is useful for

- **Developers building agents:** the infrastructure cluster is a practical shortlist of tools to evaluate.
- **Investors and job seekers:** the list shows which companies are gaining attention now. It is a starting point for research, not a verdict.
- **Marketers and founders:** it shows what kind of stories gain followers on X: demos, controversial topics and tools that developers share with each other.
- **Observers of the AI industry:** it is a compact picture of where public attention moved in late summer and autumn 2026: agents, cheaper compute and physical AI.

## 10. Conclusion

Ben Lang's list of the 34 fastest-growing startups on X is a small but telling snapshot. Sorted by theme, it shows an ecosystem that is busy building the plumbing for AI agents, trying to make models cheaper, faster and smaller, and moving step by step from text into robots and simulated worlds. Security, AI-text detection and a few non-AI outliers in betting, trading and weather complete the picture.

The list's value lies in showing where attention goes, not in proving which companies will succeed. The method is only briefly described, follower counts are a noisy signal, and the geography is narrow. Read with those limits in mind, it is a useful map of what the startup crowd on X was talking about in autumn 2026, and a good list of names to look up yourself.

Credit for the list goes to Ben Lang ([@benln](https://x.com/benln)); the original post is here: [x.com/benln/status/2116939965536059887](https://x.com/benln/status/2116939965536059887).

## Sources

- [Ben Lang (@benln) on X: fastest-growing startups by follower growth, last 90 days (Nov 1, 2026)](https://x.com/benln/status/2116939965536059887)
- [Ben Lang (@benln) on X: reply naming Harmonic as the data source](https://x.com/benln/status/2116945705365618702)
- [Harmonic.ai](https://harmonic.ai/)
- [Kernel](https://www.kernel.sh/)
- [neatlogs](https://neatlogs.com/)
- [Raindrop](https://raindrop.ai/)
- [AgentMail](https://agentmail.to/)
- [Resend](https://resend.com/)
- [Namespace](https://namespace.so/)
- [Vals AI](https://vals.ai/)
- [Wafer](https://wafer.ai/)
- [Liquid AI](https://www.liquid.ai/)
- [Odyssey](https://odyssey.world/)
- [General Intuition](https://generalintuition.com/)
- [Wonderful](https://wonderful.ai/)
- [Venice](https://venice.ai/)
- [Fish Audio](https://fish.audio/)
- [Skild AI](https://www.skild.ai/)
- [Dyna Robotics](https://www.dyna.co/)
- [PrismaX](https://www.prismax.ai/)
- [Aikido Security](https://www.aikido.dev/)
- [Pangram](https://www.pangram.com/)
- [Rainmaker](https://www.rainmaker.com/)
- [Wikimedia Commons: Helloquence-61189 (image)](https://commons.wikimedia.org/wiki/File:Helloquence-61189.jpg)
