---
layout: post
title: "How Do You Use OpenClaw Well? Tips for the Control Window, Sessions, Soul Files and Guardrails"
date: 2026-11-27 07:38:08 +0100
slug: openclaw-tips-control-ui-sessions-soul-files
excerpt: "A clarifying guide to using OpenClaw in practice: when to work in the Control UI, when a chat app is enough, how to structure agents and sessions, and how to set real guardrails. The advice is drawn from three OpenClaw videos and checked against the official docs."
description: "How to use OpenClaw well in 2026: practical tips for the Control UI and TUI, one agent with many sessions, soul files, sub-agents, WhatsApp or Discord versus the web window, and security measures such as API keys, permissions and sandboxing. Based on How I AI, the official ClawCast and a Cognire walkthrough, cross-checked with docs.openclaw.ai."
tags: [AI, OpenClaw, AI agents, Control UI, TUI, SOUL.md, sessions, sub-agents, sandbox, security, How I AI, ClawCast, Cognire, tips]
image: /assets/img/2026-11-27-openclaw-tips-header-lobster.jpg
image_alt: "Illustration of a friendly red lobster, the OpenClaw mascot, at a desk using a laptop with several chat sessions open, a smartphone and a small padlock beside it"
image_credit: "Illustration: AI-generated"
faq:
  - question: "What is the OpenClaw Control UI?"
    answer: "The Control UI is OpenClaw’s browser dashboard for chat, configuration, sessions and nodes. After the Gateway is running, the usual local address is http://127.0.0.1:18789/, or you can open it with the command openclaw dashboard. A desktop app exists as a packaged version of the same web interface."
  - question: "Should I use one OpenClaw agent or many?"
    answer: "The official ClawCast episode ‘One Agent, Many Sessions’ argues for one main named agent with many conversation sessions, and for separate agents or separate Gateways only when you need tighter permissions or a privacy boundary. OpenClaw’s docs agree that one Gateway is one trust boundary: people or personas who should not share data belong on separate Gateways."
  - question: "What is a SOUL.md file, and does it stop risky actions?"
    answer: "SOUL.md is a workspace file for persona, tone and written boundaries. OpenClaw loads it at the start of every session. It is prompt-level guidance, not a hard security control. To block a tool or a command, use Gateway tool policy, exec approvals and sandboxing."
  - question: "Is it safe to install OpenClaw on a laptop and expose it to the internet?"
    answer: "Not if the Gateway is left open on the public internet without authentication. OpenClaw can run commands, read and write files and send messages. The official default on a normal host is to bind the Gateway to loopback only. The docs prefer Tailscale Serve, an SSH tunnel or another private path over opening the port to the world."
  - question: "When should I use WhatsApp, Telegram or Discord instead of the web window?"
    answer: "Use a messaging channel when you are away from the desk, when you need to forward a message in place, or when a non-technical person should talk to a tightly scoped agent. Use the Control UI when you need to see many sessions, code, a browser view, files or approvals."
  - question: "What are OpenClaw sub-agents for?"
    answer: "Sub-agents are short-lived helper runs that a named agent can start for parallel work, such as several code changes at once. Official docs say each sub-agent has its own session, is isolated by default and does not get session or message tools unless you change that. You usually talk to the named agent, not to each helper."
audio: /assets/audio/openclaw-tips-control-ui-sessions-soul-files.mp3
audio_voice: Guy
audio_duration: "21:50"
audio_chapters:
  - {t: 0, title: "Intro"}
  - {t: 101, title: "The short version"}
  - {t: 180, title: "What is the OpenClaw window, and when…"}
  - {t: 328, title: "Should you run one agent or many?"}
  - {t: 503, title: "How do sessions, snoozing and…"}
  - {t: 663, title: "What can people actually use OpenClaw…"}
  - {t: 853, title: "How do you keep an agent from doing…"}
  - {t: 1105, title: "FAQ"}
  - {t: 1216, title: "What we could not verify"}
---
OpenClaw is a self-hosted AI agent: not only a chatbot, but a program that can run commands, read files, send messages and do work on a schedule. You run a **Gateway** on your own computer or server, then talk to it from a browser dashboard, a terminal, or apps such as WhatsApp, Telegram, Discord or Slack. The project is MIT-licensed ([GitHub](https://github.com/openclaw/openclaw)) and documented at [docs.openclaw.ai](https://docs.openclaw.ai/).

This is a practical guide to *using* that setup, not a recap of recent releases. For the November feature and security round-up, see [OpenClaw’s latest changes, checked against the code](https://thearchitecthighlevel.com/2026/11/18/openclaw-new-features-x-posts/). The advice comes from three videos whose auto-generated English captions we read in full, then checked against the official docs:

- [He built a personal AI Chief of Staff with OpenClaw](https://www.youtube.com/watch?v=DuYVOYsoJcw), by **Claire Vo** on **How I AI**, with guest **Ankit Maheshwari**, CTO of Innovaccer.
- [One Agent, Many Sessions](https://www.youtube.com/watch?v=qoLB89kY4HU), from the official **OpenClaw** channel: [The ClawCast, episode 15](https://openclaw.ai/podcast/episode-15) (28 October 2026), hosted by **Hannes Rudolph** with contributors **Jacqueline Henriksen (Ritz)** and **Vitor Cepeda Lopes**.
- [I Built an AI Team That Works for Me 24/7 Real-Time Chat, Tasks & Reports](https://www.youtube.com/watch?v=Wc1AuWAnqn0), by **Cognire**, presented by a founder who introduces himself as **SAS**.

What a presenter describes is **their account of their own setup**, not a result we reproduced. Where the docs confirm, qualify or contradict a tip, we say so.

## The short version

- **Use the Control UI** — OpenClaw’s browser window, usually at `http://127.0.0.1:18789/` — when you need to see sessions, code, a browser view, files or approvals. Use WhatsApp, Telegram or Discord when you are away, or when a less technical person should talk to a narrowly scoped agent.
- **Prefer one named agent with many sessions.** Add a second agent, or a second Gateway, when you need a privacy wall or tighter tool permissions. Short-lived **sub-agents** are for parallel work, not extra personalities you chat with all day.
- **Write rules in `SOUL.md`**, but do not treat that file as a lock. Official docs are clear: persona files are guidance. Real limits come from tool policy, exec approvals and sandboxing.
- **Do not expose the Gateway to the public internet.** The documented default on a normal host is loopback only. Prefer Tailscale, an SSH tunnel or another private path. Keep API keys out of the workspace.
- **Watch token costs** if you spin up many agents, and **verify** long-running work. A job that ran for days is not, by itself, proof that it did anything useful.

## What is the OpenClaw window, and when should you use it?

The “OpenClaw window” is usually the **Control UI**, the web dashboard for chat, configuration, sessions and connected devices. The [docs](https://docs.openclaw.ai/) say you can open it with `openclaw dashboard`. On the machine that runs the Gateway, the local default is **http://127.0.0.1:18789/**.

There is also a **TUI**, a terminal interface, at [docs.openclaw.ai/tui](https://docs.openclaw.ai/tui). In the How I AI interview, Maheshwari says this is how he builds almost everything new: he talks to the agent in the TUI as he would to a newly hired assistant, and lets it call other coding tools in the background when it needs to write code. He says he does not run Claude Code or Codex *as the way to operate OpenClaw itself*. That is his method, not a requirement. The official TUI does, however, exist as a first-class way to pick an agent, switch sessions and see tool activity.

The official ClawCast episode spends a chapter on web interface versus messaging channels. Rudolph says he used to live in Telegram and once found the web UI unusable; now he stays in the Control UI at his laptop and uses Discord from his phone when he leaves. Ritz often **starts** a session from Discord — for example after forwarding a message — and comes back to it in the web UI for features a chat thread does not show well, such as code and a browser session. Vitor says the desktop app is essentially the same web UI, packaged for the dock.

The docs match the security side of that habit. The Gateway should not be left open on the public internet. Official guidance prefers **Tailscale Serve** (the Gateway stays on loopback; Tailscale provides the private URL) over an unauthenticated bind to `0.0.0.0`. In the Cognire video, SAS makes the same point in plainer language: he runs OpenClaw on a **Linux virtual machine in the cloud**, does not open inbound access except through a VPN and his own address, and reaches the interface with an SSH local port forward (`ssh -L`), so it appears on his laptop as localhost. That pattern is consistent with the [network-exposure](https://docs.openclaw.ai/gateway/security/network-exposure) guidance.

A useful rule of thumb: **rich work happens in the Control UI; lightweight or family-facing work can live in a chat app; remote access should stay private.**

![Rows of consoles and large wall screens in NASA’s Mission Operations Control Room during the Apollo 9 flight](/assets/img/2026-11-27-openclaw-tips-mission-control.jpg)
*Photo: NASA, “Mission Operations Control Room during Apollo 9” (March 1969), public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mission_Operations_Control_Room_during_Apollo_9.jpg) (resized). A historical control room, used here only as an illustration of a many-console workspace; it is not a screenshot of OpenClaw.*

## Should you run one agent or many?

The three videos do not fully agree, which is useful if you keep the reasons in view.

On ClawCast, Rudolph says **dynamic skill and tool search** has reduced his need for specialist agents. He now runs one main agent with broad access, and would add a separate agent mainly to **restrict** a job — for example an email-triage agent with limited tools, because inbound email is a prompt-injection risk. Ritz’s end-state, as she describes it, is one personal agent plus a work agent on company-managed infrastructure, with extra agents only where privacy demands it; she mentions nonprofit work that involves children as a reason to keep a second, more isolated claw. Vitor already splits **three Gateways**: a personal one whose main agent, “K”, acts as a chief of staff; a **family** Gateway, kept apart for privacy; and a **company** Gateway that the team shares. That split is not just taste. OpenClaw’s [security trust model](https://docs.openclaw.ai/gateway/security/trust-model) states it directly: **one Gateway is one trust boundary**. Session tools can, by default, see across agents on the same Gateway. People or data that should not share a boundary belong on **separate Gateways**, and ideally on separate accounts or hosts.

Maheshwari, in the How I AI conversation, comes from the other direction. He says a single “do everything” agent **confused personas** — for example when the same agent had to call a restaurant, book an appointment and chase a colleague — and would apologise, then repeat the mistake. His fix was a **master `SOUL.md`** plus other soul files and more tightly scoped micro-agents: a food-ordering or health-coach persona, an email-triage persona, a voice-calling specialist. Official docs confirm that each configured agent can have its own workspace and its own `SOUL.md`, `AGENTS.md` and `USER.md` (see [agent workspace](https://docs.openclaw.ai/concepts/agent-workspace) and [multi-agent routing](https://docs.openclaw.ai/concepts/multi-agent)). They do not say you *must* split by persona. They do say a workspace is **not** a hard sandbox unless you turn sandboxing on.

The Cognire video goes further: SAS shows a custom “Jarvis Autopilot” board, which he says he built in a few hours with Claude Code, talking to **14 named agents** with job-style titles. He presents this as a proof of concept, not production — some workflow runs had errors, and at least one button did not work. That dashboard is **his own interface**, not the official Control UI, and a reminder not to copy a 14-agent org chart until you have permissions and a cost cap in place.

A practical synthesis: **start with one named agent and many sessions. Split an agent when a job needs fewer tools or a cleaner persona. Split a Gateway when the data or the people should not share a trust boundary.**

## How do sessions, snoozing and sub-agents work?

“One agent” on ClawCast does not mean one chat. Rudolph’s phrasing is that one agent means **one set of access, skills and tools**, with many conversations side by side. He **archives** a session when he expects no further input, and **snoozes** others while a skill checks Slack or similar every 15 minutes or every hour. Ritz is less aggressive: she still handles a lot of email and Slack herself, and mostly archives sessions that have sat untouched until they auto-archive after a month.

Those actions are documented. The official [Control UI sessions](https://docs.openclaw.ai/web/control-ui/sessions-and-sidebar) page describes both. **Snooze** hides a session from the active sidebar until its wake time, until you message it, or until an agent run on it completes; it does **not** stop a run, block tools or disable automations. **Archive** removes a session from the active list and **disables automations bound to that session**. An agent’s main session cannot be archived. If you follow Rudolph’s “check every 15 minutes” pattern, snooze is the documented fit; archive is for work you consider finished.

**Sub-agents** are a different layer. Ritz distinguishes a **named agent** — she goes to “RoboClaw” for OpenClaw contribution work and to “Blackbird” for personal and other work — from the **sub-agents** those named agents start. She is not, she says, talking to the helpers. On the shared RoboClaw team server she describes a session that drove about **ten** sub-agents, each on a different accessibility issue. Rudolph describes one agent starting **six** sub-agents to open a pull request in each of six repositories, after which he reviewed and then asked for the merges. The [sub-agents docs](https://docs.openclaw.ai/subagents) back the architecture: each helper runs in its own `agent::subagent:` session, is isolated by default, can use a cheaper model, and does not get session or message tools unless you change that. Parallel work is what they are for. They are not a substitute for a second Gateway when the problem is privacy.

Shared sessions matter for teams. Vitor describes the old habit of **“meat-proxying”**: you talk to your agent, copy the result to a colleague, they talk to *their* agent, and the answer travels back the same way. On a multiplayer or team server such as RoboClaw, people can join or at least see sessions, and Vitor says shared memory means an agent can learn from many contributors’ bugs instead of repeating them. We have not used that team server ourselves; we report their description.

![A closed silver laptop on a tidy white desk beside a notebook, a glass and a lamp](/assets/img/2026-11-27-openclaw-tips-laptop-desk.jpg)
*Photo: Norbert Levajsics, “Laptop on a neat desk” (4 April 2017), [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Laptop_on_a_neat_desk_(Unsplash).jpg) (resized). A generic desk setup, not an OpenClaw installation.*

## What can people actually use OpenClaw for?

The How I AI episode is the richest source of everyday use cases, all of them Maheshwari’s own. His first job for the system was to stop being the bottleneck on **hiring approvals**: a **cron job every four hours** lists what is waiting on him and lets him ask follow-up questions, such as checking a candidate’s GitHub history. He then pointed it at **flight approvals** in **Navan**, a travel tool he says does not send email notifications, so the agent watches the queue instead of waiting for a Slack nudge. Official docs confirm that [cron automations](https://docs.openclaw.ai/automation/cron-jobs/managing-jobs) exist; they do not confirm his Navan or hiring workflows.

From there, in his telling, the work spread. A food-ordering flow, trained on his vegetarian preferences, tries to catch him at **09:30** before a **10:00** office cut-off, then places the order if he does not reply. A voice-calling setup, which he says moved from ElevenLabs plus Twilio to Bland, can chase colleagues who have not answered on Slack, or help with restaurant and travel planning, including — he claims — negotiating a table. He also describes a **smart-home** flow that turns on the air conditioning shortly before he arrives, after he asked the agent to work out a proprietary home-automation protocol. We record that as his claim. We are not describing, and are not providing, any method for reverse-engineering a vendor system.

His selection rule is memorable and is also just a personal heuristic: if something is even **“1% annoying”** and he has to do it more than once or twice, he asks whether the agent can take it. Claire Vo, hosting, treats that as the theme of the episode. It is a way to generate ideas, not a safety policy.

The ClawCast examples are quieter. Vitor’s personal agent, he says, triages email and calendar, and once booked a **tyre change** he had forgotten, after finding it in his notes. The family Gateway is connected to a **printer** and handles documents and a daily newspaper print; he argues that messaging channels beat the Control UI for household members who should not be dropped into an expert interface. Rudolph suggests a family agent that is *not* reached through his Control UI — people should **“earn”** access to that window — and mentions a headless pattern: a WhatsApp chat where colleagues drop **receipts**, which are ingested into a session that does not talk back in the chat. Ritz talks about writing an agentic-engineering playbook in a long session, and about a Discord support bot named **Krill** as an example of a claw that should stay narrowly scoped.

In the Cognire video, SAS shows agents talking to one another, a broadcast command, workflow runs, and a Notion integration: he says his lead agent, also named Jarvis, holds weekly meetings and drops minutes and draft posts into Notion. That is a demonstration of *his* dashboard, not a built-in OpenClaw “employee suite.” The documented building blocks for a similar outcome are agents, sessions, cron, channels and whatever Notion or Slack skill you add and then lock down.

## How do you keep an agent from doing something you did not mean?

This part should not be optional. OpenClaw is designed to act. The official [trust model](https://docs.openclaw.ai/gateway/security/trust-model) says the assistant can run shell commands, read and write files, use the network and send messages if those tools are enabled. Many failures, the docs say, are not exotic exploits: someone messages the bot, and the bot does what it was asked.

Maheshwari is frank about both the power and the scare. He likes OpenClaw because it can be given enough access to *finish* a job, rather than stopping to ask at every step. He also describes a moment that, in his words, “freaked him out”: he was in transit, travel approvals from his team were about to expire, the agent could not reach him, and it **auto-approved** them. In that instance he later accepted the reasoning (in budget, essential customer travel), but he uses the story to argue for **explicit guardrails**: some classes of action may auto-complete, others — he mentions a job offer — must not. That is a user-reported incident, not a test we ran, and a good illustration of why “just tell it in the soul file” is not enough.

Official docs draw the line clearly. `SOUL.md` and `AGENTS.md` are the right place to write standing rules, such as “never send an external email without approval.” The [delegate architecture](https://docs.openclaw.ai/concepts/delegate-architecture) guide also says to enforce limits in **Gateway tool policy** — allow and deny lists that still apply if a prompt tries to override the persona — and, for stronger isolation, to turn on **sandboxing** (`sandbox.mode` of `"all"` or at least `"non-main"`; the documented default is `"off"`). [Exec approvals](https://docs.openclaw.ai/tools/exec-approvals/) can require a person to sign off on host commands. Approvals, the same page warns, are guardrails for operator intent, not a complete tenant-isolation or filesystem lock. The workspace docs add another concrete rule: **do not put API keys, passwords or tokens in the workspace**, even in a private git repo; keep them in a password manager, environment variables or `~/.openclaw/`, which should stay out of version control.

![A close-up of a metal combination padlock](/assets/img/2026-11-27-openclaw-tips-padlock.jpg)
*Photo: Ivan Radic, “Close-up of a padlock with number combination” (9 December 2020), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Close-up_of_a_padlock_with_number_combination_(50724043466).jpg) (resized). A symbolic photograph; it does not show OpenClaw or any specific security product.*

SAS puts the installation warning first: there are “a lot of security issues,” and people should not assume that “it will do everything for you and everything is safe.” His mitigation is the isolated VM, no public inbound access, and a tunnel. That is a solid starting posture. It is not a substitute for tool allows and denies, sandboxing, or an allowlist of who may message the bot.

Cost is a softer risk, but a real one. Maheshwari says running his main setup costs him about **$500 to $600 a month** on an Anthropic bill, which is why he is pressure-testing a smaller open model — the official How I AI episode listing names **GLM 5.3 Flash** — for summarisation, email digests and cron checks, while finding it weaker at complex browser operations. SAS warns, in round numbers, against spinning up “hundreds” of agents and waking up to a four- or five-figure bill. Those figures are **their claims**, not invoices we have seen. The practical tip still stands: give long-running or parallel agents a cheaper model where the docs allow it, and put a spending cap on the provider account.

Two last ClawCast tips are about *quality*, not only safety. Vitor says he has had a goal running for many days and, when it stopped, sometimes found “a whole lot of nothing.” Rudolph’s longest unattended run, he says, was **four days**. Both of them, and Ritz, argue that **verification** matters more than runtime: give a specific goal, say what success and failure look like, and ask for evidence — a document, a screenshot, a pull request you actually read. Hannes also notes that you can click an **update** button for a simple install, but people with older or heavily patched setups may need `openclaw triage` in the terminal. We did not re-test that command; confirm it in the current CLI help on your own machine.

## FAQ

**What is the OpenClaw Control UI?**
It is the browser dashboard for chat, configuration, sessions and nodes. The usual local address is `http://127.0.0.1:18789/`. You can also run `openclaw dashboard`.

**Should I use one agent or many?**
Start with one named agent and many sessions, which is the advice in the official ClawCast episode. Add another agent when you need tighter permissions or a cleaner persona. Use a separate Gateway when the people or the data should not share a trust boundary.

**Does a soul file make OpenClaw safe?**
No. `SOUL.md` shapes behaviour and is loaded every session, but it is not a security boundary. Combine it with tool allow and deny lists, exec approvals and sandboxing.

**Can I open OpenClaw on the public internet so I can use it from my phone?**
You can reach it remotely, but the documented approach is a private path such as Tailscale Serve or an SSH tunnel, with the Gateway still bound to loopback and with authentication enabled. Do not put an unauthenticated Gateway on `0.0.0.0`.

**When is Discord, Telegram or WhatsApp the better “window”?**
When you are away from the desk, when you want to forward a message in place, or when a household or support user should not see the full Control UI. Come back to the web window for code, browser steps, files and approvals.

**What is the difference between a session and a sub-agent?**
A session is one conversation thread with a named agent. A sub-agent is a helper run that the named agent starts, usually for a parallel task, and that reports back for review.

## What we could not verify

- **We did not install or operate the setups shown in the videos.** Costs ($500–$600 a month; the larger warning figures in the Cognire video), auto-approval of travel requests, restaurant negotiation, smart-home control, a 14-agent dashboard, a goal that ran for many days, and a four-day unattended run are all presenter claims.
- **Auto-captions are imperfect.** We used official pages to confirm names and the ClawCast date. YouTube’s auto-captions for How I AI sometimes rendered model names inconsistently; we follow the official episode listing in calling the smaller model GLM 5.3 Flash. Some product names in captions were unclear and are omitted.
- **We could not independently confirm the exact YouTube upload date** of the How I AI and Cognire videos from the video files themselves. The official OpenClaw podcast page dates *One Agent, Many Sessions* to **28 October 2026**. Secondary episode listings date the How I AI interview to **23 November 2026**.
- **The Cognire interface is custom.** We cannot verify token accounting, success-rate figures shown on that dashboard, or that every named “officer” agent is a distinct OpenClaw agent as the official docs define one.
- **Security advice here is general documentation, not a personal audit** of your machine, and not legal advice.

## Sources

**Videos**

- [He built a personal AI Chief of Staff with OpenClaw](https://www.youtube.com/watch?v=DuYVOYsoJcw), How I AI (Claire Vo), with Ankit Maheshwari. Also listed as “OpenClaw for executives: Automate every 1% annoyance,” including on [Apple Podcasts](https://podcasts.apple.com/us/podcast/openclaw-for-executives-automate-every-1-annoyance/id1809663079?i=1000803587278) and on [Lenny’s Newsletter](https://www.lennysnewsletter.com/p/openclaw-for-executives-automate). Show site: [howiaipod.com](https://howiaipod.com).
- [One Agent, Many Sessions](https://www.youtube.com/watch?v=qoLB89kY4HU), OpenClaw / The ClawCast, episode 15, 28 October 2026, 1 hour 1 minute. Host: Hannes Rudolph. Guests: Jacqueline Henriksen (Ritz), Vitor Cepeda Lopes. Official page: [openclaw.ai/podcast/episode-15](https://openclaw.ai/podcast/episode-15).
- [I Built an AI Team That Works for Me 24/7 Real-Time Chat, Tasks & Reports](https://www.youtube.com/watch?v=Wc1AuWAnqn0), Cognire (presenter introduced as SAS).

**Official documentation and code**

- [OpenClaw docs](https://docs.openclaw.ai/)
- [Control UI: sessions and sidebar](https://docs.openclaw.ai/web/control-ui/sessions-and-sidebar) (including snooze and archive)
- [TUI](https://docs.openclaw.ai/tui)
- [Agent workspace and SOUL.md, AGENTS.md, USER.md](https://docs.openclaw.ai/concepts/agent-workspace)
- [SOUL.md template](https://docs.openclaw.ai/reference/templates/SOUL.md)
- [Multi-agent routing](https://docs.openclaw.ai/concepts/multi-agent)
- [Sub-agents](https://docs.openclaw.ai/subagents)
- [Sandbox modes, scope and backend](https://docs.openclaw.ai/gateway/sandboxing/modes-scope-and-backend)
- [Security trust model](https://docs.openclaw.ai/gateway/security/trust-model)
- [Network exposure](https://docs.openclaw.ai/gateway/security/network-exposure)
- [Tailscale](https://docs.openclaw.ai/gateway/tailscale/)
- [Exec approvals](https://docs.openclaw.ai/tools/exec-approvals/)
- [Delegate architecture](https://docs.openclaw.ai/concepts/delegate-architecture) (persona rules versus tool policy)
- [Cron / automations](https://docs.openclaw.ai/automation/cron-jobs/managing-jobs)
- [OpenClaw on GitHub](https://github.com/openclaw/openclaw)

**Related article on this site**

- [OpenClaw’s Latest Changes, Checked Against the Code](https://thearchitecthighlevel.com/2026/11/18/openclaw-new-features-x-posts/) (18 November 2026)

**Images**

All photographs are free-licensed files from Wikimedia Commons, credited in the captions above: Alejandro Escamilla (CC0), NASA (public domain), Norbert Levajsics (CC0) and Ivan Radic (CC BY 2.0). The files were resized; they were not otherwise altered.
