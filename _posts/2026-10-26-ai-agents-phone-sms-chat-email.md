---
layout: post
title: "How AI Agents Call, Text, Chat and Email: Tools Beyond ClawCall and Bland, and What Works with OpenClaw in Europe"
date: 2026-10-26 07:00:00 +0100
tags: [AI, AI agents, OpenClaw, voice agents, Twilio, Telnyx, Vapi, Retell, ElevenLabs, AgentMail]
image: /assets/img/2026-10-26-ai-agents-phone-sms-chat-email.jpg
image_alt: "Illustration of a friendly red lobster on a wooden desk holding a telephone handset, next to a smartphone with chat bubbles and a sealed envelope"
image_credit: "Illustration: AI-generated"
---

What tools let an AI agent talk to the outside world? Make and take phone calls, send texts, write on WhatsApp or Telegram, send and receive email. ClawCall and Bland are ready-made packages, but mostly for the US and Canada. Today we look at the other options, with three questions in mind: does it connect to OpenClaw, does it work with European numbers and languages like German or Turkish, and can you try it for free?

**How we checked:** we read the official pages of OpenClaw, Twilio, Telnyx, Vapi, Retell, ElevenLabs and AgentMail, plus the Forward Future newsletter of October 23. We did not test anything. Prices are the vendors' own figures in US dollars as of October 25, 2026.

## 1. Two building blocks, and what OpenClaw already has

For phone calls, an agent almost always needs two things: a real phone number (from a telephony provider like Twilio, Telnyx or Plivo) and a "voice with a brain": speech recognition, an AI reply and a synthetic voice. Chat apps are simpler: OpenClaw talks to Telegram, WhatsApp, iMessage, Signal, Slack, Discord and more directly, no extra provider needed. Telegram is the easiest first channel, because it only needs a bot token.

OpenClaw also has an official SMS plugin (via Twilio) and an official **Voice Call** plugin for outgoing and incoming calls with live transcripts, working with Twilio, Telnyx or Plivo. One catch: these providers need a public web address (a webhook), so a computer at home needs a tunnel like ngrok or Tailscale Funnel, or a server.

Original articles: [OpenClaw Docs: Channels](https://docs.openclaw.ai/channels) · [OpenClaw Docs: Voice call plugin](https://docs.openclaw.ai/plugins/voice-call)

## 2. Twilio and Telnyx: the phone numbers

**Twilio** is the classic: phone numbers, calls, SMS, WhatsApp, and email through its SendGrid service. It works with OpenClaw directly (Voice Call plugin and SMS channel) and offers an Ireland region. It has Austrian mobile, toll-free and national numbers, but you must prove your identity and a local address first. Prices start at $0.0085 per minute for incoming and $0.014 for outgoing calls, and you can start without a credit card.

**Telnyx** is the alternative in the same OpenClaw plugin. It sells Turkish local numbers from $5 a month and, according to a search snippet, Austrian ones from $2. Its Turkey page warns about strict rules: marketing calls and texts without registered consent are banned.

Original articles: [Twilio Pricing](https://www.twilio.com/en-us/pricing) · [Twilio: Austria regulatory guidelines](https://www.twilio.com/en-us/guidelines/at/regulatory) · [Telnyx: Turkey phone numbers](https://telnyx.com/phone-numbers/turkey)

## 3. Vapi: a voice-agent platform with official OpenClaw skills

Vapi handles speech recognition, voice and telephony, and the agent can use tools during a call, like checking a calendar. In February 2026 Vapi published official skills for OpenClaw: one command (`npx skills add VapiAI/skills`) adds eight skills, such as creating an assistant, starting a call or getting a number. The free Vapi number is US-only and inbound-only; for European numbers you import one from Twilio or Telnyx. Cost: $0.05 per minute plus model, voice and telephony costs, with $5 free credit to start.

Original articles: [Vapi Blog: Give Your OpenClaw Agent a Voice](https://vapi.ai/blog/openclaw) · [Vapi Pricing](https://vapi.ai/pricing)

## 4. Retell and ElevenLabs: phone agents and natural voices

**Retell AI** builds phone agents for things like answering calls and booking appointments, with no contract. It calls many European countries (Germany at $0.10 per minute), though Austria and Turkey are not on its list. Prices run $0.07 to $0.31 per minute, and new accounts get $10 free credit without a payment method. There is no official OpenClaw connection.

**ElevenLabs Agents** offer some of the most natural AI voices, in over 90 languages including German and Turkish. You bring your own number (Twilio or a SIP trunk). OpenClaw support exists only through community skills on ClawHub, which are worth checking carefully, since a skill gets access to your API keys. The free plan includes 15 call minutes a month; Starter is $6 a month.

Original articles: [Retell AI Pricing](https://www.retellai.com/pricing) · [ElevenLabs Agents Pricing](https://elevenlabs.io/pricing/agents)

## 5. AgentMail: an inbox of the agent's own

AgentMail gives an agent its own email addresses: send, receive, reply in threads, draft and attach files. It has an official OpenClaw plugin that adds both a skill (the agent writes email) and an email channel (you reach the agent by email). By default it only answers senders on an allow list. The free plan needs no credit card and includes 3 inboxes and 100 emails a day.

Original article: [AgentMail: OpenClaw integration](https://www.agentmail.to/docs/integrations/openclaw)

**Bottom line:** the easiest and cheapest start is not the phone. Telegram (built into OpenClaw) plus AgentMail for email already make an agent easy to reach. For phone calls, Vapi has official OpenClaw skills; for a natural voice in German or Turkish, ElevenLabs is the strongest candidate. Expect delays on calls to be the biggest problem, and keep away from marketing calls or mass texts.

## Surprise tech news: thousands of AI agents search brain data in 32 minutes

OpenAI, the company PerturbAI and Scripps Research pointed thousands of "GPT-Rosalind" agents at data from millions of mouse brain cells at once. In 32 minutes they linked gene changes to the research literature and found possible connections to Alzheimer's and Parkinson's. These are leads, not lab results, but researchers can now search a huge pile of data before deciding what to test.

Original article: [Forward Future newsletter, October 23, 2026](https://forwardfuture.com/newsletter/daily/2026-10-23/ai-agents-map-brain-disease-hackers-weaponize-ai-meta-s-stock-plan)
