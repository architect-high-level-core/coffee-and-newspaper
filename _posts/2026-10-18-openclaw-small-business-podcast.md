---
layout: post
title: "OpenClaw in the Small Business: A Detailed Summary of The ClawCast Episode 13, Plus Reddit Reactions"
date: 2026-10-18 23:32:00 +0200
tags: [AI, AI agents, OpenClaw, small business, automation, podcast, skills, plugins]
image: /assets/img/2026-10-18-openclaw-small-business-podcast.jpg
image_alt: "Illustration of a friendly robotic claw working as an office secretary at a desk with a headset, phone, laptop, calendar and file folders"
image_description: "Warm, friendly illustration of a robotic claw in the OpenClaw style working as an office secretary in a small, modern office. The claw sits at a tidy desk wearing a headset, with a desk phone, an open laptop, a wall or desk calendar and a stack of colourful file folders around it. Soft, warm light from a window, plants and shelves in the background. Illustrative style, no text, no real people, no logos."
image_credit: "Illustration: AI-generated"
---

How does a roofing company, a pool builder or a pest-control business actually use an AI agent? Episode 13 of The ClawCast, the official podcast of the open-source agent project OpenClaw, spends an hour on exactly that question. The guest is a consultant from Florida who sets up OpenClaw for local businesses. This post summarises the episode in detail, segment by segment, and then looks at how Reddit users discuss OpenClaw for small businesses.

**Watch the episode:** [How to Use OpenClaw in Your Small Business | The ClawCast Episode 13 (YouTube)](https://www.youtube.com/watch?v=dXQKrHXVmww)

**Original article:** <https://www.youtube.com/watch?v=dXQKrHXVmww>

**Key terms:**

- **OpenClaw:** a free, open-source AI agent that runs on your own computer and that you control through chat apps such as Telegram. People call their personal agent a "claw".
- **Skill:** a set of written instructions that tells the agent how to carry out a specific task, step by step.
- **Plugin:** an extension that can bundle skills, its own tools and MCP servers (a standard way for AI agents to call outside tools).
- **CRM:** customer relationship management software, where a business tracks leads, customers and deals.
- **Context window:** the amount of text a language model can consider at once.
- **Browser control:** the agent operates a website in a browser the way a person would.

**Note on method:** This summary is based only on the episode's description and its English auto-generated YouTube captions (with timestamps). Auto-captions can misspell names and products, so spellings that look like caption errors are flagged below. Timestamps are approximate. The Reddit section is based on public search results because Reddit blocked direct access.

## The episode at a glance

- **Title:** How to Use OpenClaw in Your Small Business | The ClawCast Episode 13
- **Channel:** OpenClaw (The OpenClaw Foundation)
- **Recorded and published:** October 14, 2026 (recorded live; about 60 minutes)
- **Hosts:** Hannes Rudolph (OpenClaw community manager) and Patrick Erichsen (OpenClaw developer)
- **Guests:** PJ Standley, a consultant who started with his family's pest-control business; Graham McBain, introduced on the show as a community manager; Joe Pishgar, who joins later to present the new community forum
- **Chapters (from the description):** 00:00 Intro · 00:30 Welcome and the new ClawCast intro · 03:26 Meet PJ Standley and Graham McBain · 05:34 Putting OpenClaw to work in small businesses · 11:08 Helping owners learn to use an agent · 21:05 Hardware and setups for clients · 23:31 Skills, plugins, and repeatable work · 45:59 The OpenClaw community forum · 54:05 Finding the right skill · 57:59 The model catalog

**Original articles:**

- <https://www.youtube.com/watch?v=dXQKrHXVmww>
- <https://openclaw.ai/podcast/episode-13>
- <https://openclaw.ai/podcast>

## 00:00–03:30 – Opening: an intro video made by a claw

Hannes and Patrick open the first episode with the show's new intro video. Hannes says he made it with his own claw over Telegram. He sent it a sample intro he liked and told it to take the artwork style from OpenClaw's public GitHub repository. Patrick says he has explored creative uses less. His latest experiment, a 3D (three.js) scene of the San Francisco Bay's former geography, "did like a terrible job".

**Original article:** <https://www.youtube.com/watch?v=dXQKrHXVmww>

## 03:30–05:30 – Meet PJ: from pest control to OpenClaw consultant

Graham explains that he asked on X for people building with OpenClaw to share their stories, and PJ answered. According to Graham, PJ started a pest-control company with his brother, discovered OpenClaw, and "got totally down the rabbit hole". His brother now runs the pest-control business, and PJ works full-time setting up OpenClaw for small businesses in Florida.

**Original article:** <https://www.youtube.com/watch?v=dXQKrHXVmww>

## 05:30–11:00 – Putting OpenClaw to work in small businesses

**Who the customers are:** PJ says his work today is largely what he did in February, when he found OpenClaw: applying the tool as intelligently as he can. His customers include contractors and a few enterprise businesses with more obscure data-parsing work. Most are "mom and pop shops": roofing companies, pool construction companies, wrap companies and pest-control companies.

**How a project starts:**

- First, find out which systems the business already uses: which CRM, which websites. PJ notes that many businesses run several CRMs because they are unsure which one fits or because one is clunky.
- Connect the agent to those systems.
- After about a week to a week and a half of "poking and prodding", ask the agent which recurring tasks it has noticed that could be "formalized into skills" for this customer.

**Example tasks he mentions:** proposals, bid calculations, 3D rendering, and checking email and briefing the owner on the calendar.

**"Fire me" in three to six months:** The hosts note that PJ tells clients they should fire him after three to six months, because the tool is easy enough once you understand it. His example is an insurance salesman who hired him for two months. PJ helped him build his agent and then simple tools: a personal website and a CRM, so that he could keep his customer information if he switched brokerages. PJ says the man now has systems he likes and no longer builds new ones.

**Why no SaaS:** PJ says that in early 2026 he saw almost nobody in the United States talking about OpenClaw while in other countries "it was a wildfire". He expected others to wrap it in a box and sell it as SaaS (software as a service), and he did not want that. He wanted to sell it like a hammer and show people how to use it, without lock-in: "I wanted them to be stuck with OpenClaw and the technology."

**Original article:** <https://www.youtube.com/watch?v=dXQKrHXVmww>

## 11:00–21:00 – Helping owners learn to use an agent

**Skepticism:** Patrick asks whether owners find it easy to think in agent terms. PJ answers: "I don't think that the transition is easy and certainly not down here", meaning Florida, where he sees "a lot of skepticism". He says his biggest value is convincing owners that there are good, safe use cases.

**Observe, don't just ask:** PJ explains that most people cannot describe every step of their own work. He can ask "what do you do" for two hours, but usually he has to sit and watch: when people get frustrated, what they reach for.

**Customer concerns:** Most concerns come from media stories about catastrophes and "agent swarms". PJ says he has run OpenClaw on six different computers with about 17 of his own agents for seven months. Among his examples: letting the agent read email, and funnelling leads from eight different sources into one place.

**How he finds customers:**

- He grew up in the town where he works and had run a business there before, so he knows people and walks into their businesses.
- In March and April he gave seminars on OpenClaw AI for small businesses at a local economic-partnership organisation. The captions render it as "Chamber of Economic Partnership".
- He has a small space at a local workspace.
- One of his first customers found him through ChatGPT. At the time, his agent answered OpenClaw setup questions on Moltbook and Reddit and signed its answers with his consultancy's name. A woman then asked ChatGPT for an affordable AI consultant and was pointed to him.
- He has donated computers with an OpenClaw agent set up on them to small businesses he considers good for the community.
- His advice to others is not to rely only on online outreach: "You've got to get out there in front of people." Most of his customers came through past or current customers.

**Pricing:** PJ charges subscriptions, which are basically an hourly rate, and has an hourly rate on top. In his words: "I have a subscription that is $1,000 a month and it includes six hours of in-person time", plus near-constant remote support ("not 24/7 remote because I am human, but pretty close"). There are lower tiers, and there are no contracts, so people are not afraid to try. He tells others to find the right price for their own area.

**"It's like wearing a mech suit":** One of the hosts says he explains OpenClaw to people as being less like ChatGPT and more like Microsoft Excel: you have to learn and maintain the tool, and it helps you do things. "It's like wearing a mech suit. It's not like having a robot vacuum cleaner."

**The business owner is the moat:** PJ says OpenClaw "tore down" many competitive moats and that the truest one left is the person themselves. He tells customers: "I can't do this without you", because they know what works and fails in their business.

**Original article:** <https://www.youtube.com/watch?v=dXQKrHXVmww>

## 21:00–23:30 – Hardware, setups and models for clients

Asked whether customers use local models, Claude, an OpenAI subscription or an API through OpenRouter, PJ says most use a GPT subscription, because the Codex harness is "very helpful and compatible with openclaw". Several customers use Claude. He has used almost every model himself and names Grok 4.6 and 4.7 positively. He also runs a model locally (the captions render it as "Quinn 3.8", probably a Qwen model). He can give customers an API key to it when they run out of subscription capacity, with a smaller context window and more limited use cases.

A viewer comments that "Argon 4" will be API-only. Hannes replies that the team is talking with Google and has been working on it for four months. PJ adds that he pays for subscriptions and API usage on all major models to see what works best. In his view, the top models now all run well inside OpenClaw and differ more in personality and speed than in results.

**Original article:** <https://www.youtube.com/watch?v=dXQKrHXVmww>

## 23:30–46:00 – Skills, plugins and repeatable work

**Small first steps:** Patrick says that people who know only media stories fear OpenClaw will "unleash this agent swarm". Once something simple like a daily brief is running, he says, it feels "really empowering" instead.

**Agents with real access:**

- PJ says some customers' agents have a production API key for DocuSign.
- One customer has an agent that only does the business's accounting. It has a card with a spending limit for purchases and access to the bank account for accounting.
- One of the hosts says his agent filed records of employment with the Canadian government the day before, for two former employees, generated from QuickBooks Online.
- PJ sees the DocuSign API key as the company "welcoming openclaw". He believes many software companies quietly prepared their sites and infrastructure for agents from around March and April. As long as you do things the right way, he says, "you don't need to be afraid".

**Bundled tools:** Patrick says OpenClaw stood out early on because it came with many useful tools for connecting existing software. One example is a bundled command-line tool for Google, which lets the agent read your email.

**Skills vs. plugins:**

- **PJ's rule:** "if there's a plugin, use it". A plugin means the vendor has already done the work. If there is none, make a skill, which he says "is not terribly difficult either".
- **Patrick: skills as procedural memory.** A skill is a set of instructions for doing a task in an exact order, for example pulling data from a CRM every week and updating a Google Doc with a summary of prospects. Once a capable model has defined the procedure, a much cheaper model can often follow it.
- **Patrick: plugins are more powerful.** A plugin can contain skills, MCP servers and its own tools. OpenClaw's memory system is itself a plugin, so anyone can replace it. A team member has built an alternative called "lossless". Patrick calls agent memory an unsolved problem, "in these very early innings".

**One-click vs. power:**

- At the team's first in-person meetup, they agreed that OpenClaw's user experience must become easier, but that a one-click product would limit what the tool can do.
- Muse comes up as a one-click product. One speaker says it has no plugin ecosystem; another notes it has a home-network connector for devices such as thermostats.
- In the conversation, Muse is described as inspired by OpenClaw. An "autopilot" product, mentioned alongside Microsoft, is described as built on OpenClaw, with a close partnership.

**Analogies:**

- One of the hosts recalls Y Combinator's Garry Tan calling OpenClaw a Ferrari, finicky but powerful, and another popular agent harness a Honda.
- Graham prefers a Mack truck or Peterbilt: drivers configure engine, transmission and brakes for the loads they carry.
- Later, Joe suggests the giant German excavator Bagger 288.

**Not everyone has to configure it:** Graham says his wife has no interest in setting up his claw, "Marty", but texts it to cancel a forgotten subscription.

**Donna's story:** PJ tells the story of Donna, who joined a client business about three weeks into his work there. She walked into an office with "three monitors attached to a Mac Mini" and agents doing work. She was skeptical at first, but now works "hand in hand" with the agent Delilah every day and, in her spare time, builds websites with her Italian recipes for her grandchildren.

**Betty and the Disney reservation:** PJ set up an agent called Betty for his wife, who is "not very techy".

- Betty planned the family's Disney trip, including a sold-out breakfast at Cinderella's Castle.
- PJ says it was "just browser control". The agent runs headless (without a screen) on a separate Mac, which also hosts his personal agent that tracks his Whoop data and cross-references the family and work calendars. He logged it into the Disney account.
- It then checked regularly for cancellations. About two days before the trip, it messaged his wife on Telegram that an 8:05 slot had opened.
- Joe later says he used OpenClaw to get a breakfast reservation at Topolino's, another hard-to-book Disney restaurant (spelling per context; the captions read "Topalinos").

**A disputed story:** A host mentions an early story from Australia in which agents booked a full gym class by finding an API. Another speaker calls it "100% staged" and says it was not OpenClaw.

**From scripts to everyone:** Patrick says that before AI, building such booking or scraping bots required programming. He has used his claw to book campsites on recreation.gov. He expects that, as more people have agents, reservation systems will "probably have to move to lottery systems".

**Original article:** <https://www.youtube.com/watch?v=dXQKrHXVmww>

## 46:00–54:00 – The new OpenClaw community forum

Joe Pishgar presents a soft-launched forum at community.openclaw.ai, built on Discourse.

- **Starter threads:** "what did you name your main claw and why", and where people run their claw (local machine, VPS, Mac Mini or "some Frankenstein monstrosity").
- **Why a forum alongside Discord:** "not everything should be disappearing in a scroll". Discord stays for quick, live conversation. The forum is meant to be durable, searchable and organised, to work as a showcase for skills and plugins, and to support AI integrations.
- **Moderation:** Joe says technical support on X can be hard because of bandwagon effects and bots that do not act in good faith. The forum gives more control over keeping conversations on topic.
- **How PJ learned:** mostly on X in February and March ("you need to know what you're looking for"), from a few YouTubers and their comment sections, and through self-teaching. He looks forward to having the community in one place.
- **Agent names:** PJ's two main agents are Japheth, after Noah's son, because "we were in a flood of information", and Ark.

**Original articles:**

- <https://www.youtube.com/watch?v=dXQKrHXVmww>
- <https://community.openclaw.ai>

## 54:00–58:00 – Finding the right skill: skill search

Hannes says he now has more skills than fit sensibly into his claw's context: ones he made or found, plus ones his claw creates. Patrick explains the problem and the new feature.

- OpenClaw ships with many skills by default (he estimates "50, maybe 70, maybe 80") so that it works out of the box.
- The harness shows the model all skill descriptions in one block of text. OpenClaw allocates only 2% of the context window to those descriptions and cuts off the rest. Depending on the model, that happens at around 100 to 200 skills, which Patrick calls "a made-up constraint".
- The new skill search, shipped "in 10.2, I think", lets the model search for further skills, for example when it is doing a repeatable workflow that none of the visible skills cover. It is a quick tool call that adds little delay, which in effect allows unlimited skills. A similar search already existed for tools.
- Patrick says internal benchmarks show a noticeable improvement. Hannes adds that it avoids the agent claiming it cannot do something it has a skill for.

**Original article:** <https://www.youtube.com/watch?v=dXQKrHXVmww>

## 58:00–60:00 – The model catalog

Until now, a new model became available in OpenClaw only after an update to the provider's plugin.

- **The new catalog:** an endpoint that each claw fetches "every six hours, I believe", so new models show up without an OpenClaw update. Hannes notes this is in version 10.5, due out later that day, while 10.2 to 10.4 are patch releases.
- **Recommended models first:** the catalog shows three to five recommended models per provider at the top, instead of a flat list in random string order. Patrick's example: GPT-6 Astra would appear first when it drops, instead of an older model.
- **Patrick's summary:** these are not "big sexy new" features, but they make the experience "a lot more seamless".

**Original article:** <https://www.youtube.com/watch?v=dXQKrHXVmww>

## Reddit reactions

**Scope:** No Reddit thread about Episode 13 itself turned up in searches. Earlier episodes were posted to r/openclaw by Hannes Rudolph (for example Episodes 1 to 3), but no such post for Episode 13 was found. The threads below are about OpenClaw for small businesses in general. Reddit could not be opened directly, so the points come from public search results.

**Positive experiences:**

- **A laundromat in north Idaho (r/openclaw, March 2026):**
  - The owner's agent "Linus" pulls timesheets and production reports every other Saturday and calculates the tip split. That takes him "about 5 minutes now instead of 30".
  - The agent prepares monthly invoices for about seven commercial accounts. The owner checks them and sends them himself: "I just check the work, I don't do the work."
  - It built a daily dashboard that cross-checks the POS system against the machine portal.
  - **Concerns from replies:** one commenter keeps hitting API limits on $25 and $30 subscription plans. Another warns that agents "fudge arithmetic" once there are more than three or four variables. He advises keeping calculations in a spreadsheet or database and having the agent log what it pulled on each run.
- **Three favourite use cases (r/openclaw, April 2026):** the top answer, from a small-business owner, lists email customer service for routine questions, inbox triage ("saves me 30+ minutes a day") and Telegram check-ins from the road. Another user put non-technical small-business relatives in a group chat with his claw, which helped them set up websites and databases.
- **"Openclaw for Small Businesses?" (r/AiForSmallBusiness, March 2026):** one owner says his trained agent now handles email, websites and backend platforms, and flags serious problems. It was "more expensive than I expected" because of token use. Still, he says it did work that local agencies quoted at $30k with lock-in, for about $300.

**Mixed and skeptical views:**

- **In the same r/AiForSmallBusiness thread:**
  - One commenter calls OpenClaw "a framework, not a product" that needs weeks of integration work, and says it is "not ready for small business yet" for people uncomfortable with some coding.
  - Another, who sets it up for small businesses, says it is not plug-and-play. Some clients want a turnkey solution.
- **A service business with 8 employees (r/smallbusiness):**
  - After six weeks with a managed OpenClaw service, the owner values the 7 a.m. reports. Invoice reminders, though, go out even when a client has already called to say they will pay.
  - He asks whether $49 a month is worth it, because "the busywork is gone but i replaced it with a different kind of busywork which is managing the agent".
- **"Anyone here actually using OpenClaw … in a real small business?" (r/AiForSmallBusiness, May 2026):**
  - One reply separates stable "closed world" tasks (internal documents, CRM updates, drafts) from "open world" tasks such as long web-browsing chains, which need more babysitting.
  - Another reports that self-hosting was flaky after updates and that time savings took a few weeks to appear. He compares OpenClaw with n8n or Zapier: better when inputs vary.
- **Costs (r/openclaw):**
  - One user spent $5 in tokens in about an hour.
  - Another burned around €10 in 15 minutes.
  - Replies blame the full conversation history being re-sent and the default heartbeat polling. They suggest starting new sessions, choosing cheaper models and tuning or disabling the heartbeat.

**Original articles:**

- <https://www.reddit.com/r/openclaw/comments/1uex90s/the_openclaw_podcast_the_clawcast_episode_1/>
- <https://www.reddit.com/r/openclaw/comments/1s3rq0v/any_other_small_business_owners/>
- <https://www.reddit.com/r/openclaw/comments/1sg8o28/if_you_had_to_pick_3_openclaw_use_cases_you_swear/>
- <https://www.reddit.com/r/AiForSmallBusiness/comments/1s0qi9q/openclaw_for_small_businesses/>
- <https://www.reddit.com/r/smallbusiness/comments/1seekak/anyone_else_using_runlobster_openclaw_trying_to/>
- <https://www.reddit.com/r/AiForSmallBusiness/comments/1t5h0jx/anyone_here_actually_using_openclaw_or_similar_ai/>
- <https://www.reddit.com/r/openclaw/comments/1sbgj89/am_i_doing_it_wrong_or_is_using_openclaw_just/>
- <https://www.reddit.com/r/openclaw/comments/1s1t8d0/how_are_you_actually_running_openclaw_without/>

## Common threads

Across the episode and the Reddit threads, the same patterns recur:

- **Start narrow:** begin with recurring, well-defined tasks such as briefings, lead collection, reports and invoices.
- **Turn routines into skills:** formalise what works so the agent can repeat it.
- **Keep people involved:** owners stay in the loop for judgment calls and for checking results.
- **Plan for the work around the agent:** setup, maintenance and token costs are real, and so is the effort of managing the agent itself.

**Original articles:**

- <https://www.youtube.com/watch?v=dXQKrHXVmww>
- <https://www.reddit.com/r/AiForSmallBusiness/comments/1s0qi9q/openclaw_for_small_businesses/>

## Sources

- [YouTube: How to Use OpenClaw in Your Small Business | The ClawCast Episode 13](https://www.youtube.com/watch?v=dXQKrHXVmww)
- [OpenClaw: The ClawCast, Episode 13 page](https://openclaw.ai/podcast/episode-13)
- [OpenClaw: The ClawCast podcast overview](https://openclaw.ai/podcast)
- [OpenClaw community forum](https://community.openclaw.ai)
- [Reddit r/openclaw: The ClawCast – Episode 1](https://www.reddit.com/r/openclaw/comments/1uex90s/the_openclaw_podcast_the_clawcast_episode_1/)
- [Reddit r/openclaw: Any other small business owners?](https://www.reddit.com/r/openclaw/comments/1s3rq0v/any_other_small_business_owners/)
- [Reddit r/openclaw: If you had to pick 3 OpenClaw use cases you swear by](https://www.reddit.com/r/openclaw/comments/1sg8o28/if_you_had_to_pick_3_openclaw_use_cases_you_swear/)
- [Reddit r/AiForSmallBusiness: Openclaw for Small Businesses?](https://www.reddit.com/r/AiForSmallBusiness/comments/1s0qi9q/openclaw_for_small_businesses/)
- [Reddit r/smallbusiness: Anyone else using runLobster OpenClaw?](https://www.reddit.com/r/smallbusiness/comments/1seekak/anyone_else_using_runlobster_openclaw_trying_to/)
- [Reddit r/AiForSmallBusiness: Anyone here actually using OpenClaw in a real small business?](https://www.reddit.com/r/AiForSmallBusiness/comments/1t5h0jx/anyone_here_actually_using_openclaw_or_similar_ai/)
- [Reddit r/openclaw: Am I doing it wrong, or is using OpenClaw just super expensive?](https://www.reddit.com/r/openclaw/comments/1sbgj89/am_i_doing_it_wrong_or_is_using_openclaw_just/)
- [Reddit r/openclaw: How are you actually running OpenClaw without burning money?](https://www.reddit.com/r/openclaw/comments/1s1t8d0/how_are_you_actually_running_openclaw_without/)
