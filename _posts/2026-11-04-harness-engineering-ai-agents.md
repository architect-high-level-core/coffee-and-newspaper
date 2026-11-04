---
layout: post
title: "From Prompts to Harnesses: Why 'Harness Engineering' Is the AI Agent Trend of November 2026"
date: 2026-11-04 21:55:00 +0100
slug: harness-engineering-ai-agents
excerpt: "On X, developers say the age of prompt tweaking is ending and 'harness engineering' is taking over: wrapping AI models with tools, memory, loops, permissions and checks so agents can work reliably for hours. Some even claim code review by humans is becoming obsolete. We explain what a harness is, what is claimed, what is evidence and what the risks are."
tags: [AI, AI agents, harness engineering, coding agents, Claude Code, Codex, prompting, code review, software development, Forward Future, X]
description: "On X, developers say the age of prompt tweaking is ending and 'harness engineering' is taking over: wrapping AI models with tools, memory, loops…"
image: /assets/img/2026-11-04-harness-engineering-ai-agents.jpg
image_alt: "Computer screen showing colourful program source code in a code editor"
image_credit: "Image: Wikideas1, “Coder screen shot”, CC0 1.0 (public domain dedication), via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Coder_screen_shot.webp (converted to JPG, resized)"
image_license: "CC0 1.0"
image_license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
image_description: "Screenshot-style image of source code in an editor, shared on Wikimedia Commons under CC0. It stands for software development in general and does not show any agent, harness or product named in this article."
audio: /assets/audio/harness-engineering-ai-agents.mp3
audio_voice: Andrew
audio_duration: "9:26"
---

For two years, "prompt engineering" was the buzzword: finding the right words to get good answers from an AI model. In early November 2026, a different term dominates AI discussions on X: **harness engineering**. The idea: don't polish the prompt, build the system around the model.

This post explains the trend, the claims behind it, and what is still open.

**Note on sources:** This article is based on news summaries on X (generated from posts and marked by X as possibly inaccurate), on Forward Future's recent articles, and on general knowledge of how AI agents work. Claims by individual engineers are opinions or self-reports, not independent measurements.

## What is a harness?

In horse riding, a harness is the gear that connects the horse's power to the cart. In AI, the term describes everything around a language model that turns it into a working agent:

- **Tools:** access to a terminal, a browser, files, APIs or a code interpreter.
- **Context management:** deciding what the model sees at each step: which files, which documentation, which earlier results.
- **Memory:** notes or files that persist across sessions so the agent does not "forget" what it learned.
- **Loops:** the agent plans, acts, checks the result and tries again, instead of answering once.
- **Permissions and sandboxes:** limits on what the agent may do, for example no deleting of files, no internet access, or approval before risky actions.
- **Verification:** automated tests, linters, type checks or a second model that reviews the output.
- **Logging:** a record of every step, so humans can trace what happened.

A simple way to put it: **agent = model + harness.** Two teams using the same model can get very different results depending on their harness.

## Why this is trending now

According to an X news summary from November 2, an Anthropic engineer summed up the shift as: don't prompt the model directly, build a system that prompts itself. The summary refers to Anthropic's model "Opus 5.5" and claims that leading labs are already shifting "90%" of their work this way. That percentage is a claim from X posts; we could not verify it.

The same summary cites a **July 2026 paper** that analysed eleven coding-agent systems, including Anthropic's Claude Code and OpenAI's Codex. It reportedly defines agents as a model plus a harness that manages execution, state and safety, describes seven subsystems and gives 18 design recommendations. We did not locate the paper itself for this article, so we cannot confirm the details.

A second summary (November 3) describes how builders share frameworks such as a "five-layer kit" for Claude Code, made of memory files, skills, guardrails, subagents and plugins, and points to open-source projects such as **Letta** (agents with self-editing memory) and **CrewAI** (teams of agents). Practitioners recommend starting simple and only later scaling up to "swarms" of agents.

Forward Future, Matthew Berman's AI media brand, picked up the same theme in an article titled "Does Prompting Still Matter? The New Rules for Getting What You Want From AI". Its teaser says the old tricks are becoming obsolete as models become more capable, but the skills that separate power users from everyone else are becoming more important. Forward Future also offers a tool called "Relay" that routes a coding task through a frontier planner, a fast executor and an independent reviewer, which is itself a small harness.

## The bold claim: "software development is solved"

The most provocative part of the debate: according to an X summary from November 4, Matthew Berman declared that software development is "solved" because frontier models and agents now handle much of the coding work. Others in the community, including Thariq from Anthropic and the developer Lauren (@poteto), reportedly agreed that traditional line-by-line code review wastes time.

Instead of humans reading every line, the summary says, teams rely on:

- **Empirical testing** (does the software behave correctly?),
- **Formal verification** in some cases (mathematical proof that code meets a specification),
- **Agent-to-agent checks** (one model reviews another's work).

The summary also mentions that harness improvements increased performance on the security benchmark SecRepoBench by more than 10 points. We could not trace which system or study this refers to.

### The counterarguments

The same discussions raise serious concerns:

- **Intent vs. tests:** Tests only check what someone thought to test. Code can pass every test and still do the wrong thing, or contain a security hole nobody tested for.
- **Who understands the system?** If humans no longer read code, fewer people can debug it when something unexpected happens.
- **Cognitive skills:** A popular thread by Google engineer Addy Osmani, mentioned in another X summary, maps a spectrum from light AI use to "cognitive surrender" and recommends habits such as writing down your own guess before asking the AI. Skeptics on X also cite a study in the journal *Societies* that linked heavy AI use with weaker critical thinking through "cognitive offloading."
- **Security:** Agents with access to terminals and files can cause real damage. Forward Future recently published an article on "Scaling Agentic AI Security", about NVIDIA's OpenShell, kernel-level isolation and dedicated silicon to contain "rogue" agents. That a whole security category is forming shows the risk is taken seriously.

Software creator David Heinemeier Hansson is quoted in one summary as saying the shift rewards programmers who combine technical and people skills.

## What a good harness looks like in practice

From the discussions and the general state of agent tooling, a few common patterns emerge. These are practices, not proven rules:

1. **A clear task file.** Many teams keep a file (often called AGENTS.md, CLAUDE.md or similar) that describes the project, conventions and rules the agent must follow.
2. **Small steps with checks.** The agent changes a small piece, runs the tests, and only continues if they pass.
3. **Separation of roles.** One model plans, another executes, a third reviews; or a single model is called with different instructions for each role.
4. **Persistent memory.** Notes about decisions, mistakes and preferences are written to files that the next session reads.
5. **Hard limits.** Sandboxes, restricted credentials, and human approval for irreversible actions such as deploying or deleting data.
6. **Full logs.** Every tool call and result is recorded, so errors can be traced.
7. **Evaluations.** Teams measure success rates on their own tasks instead of trusting general benchmarks.

## What this means for different readers

- **Developers:** The valuable skill is shifting from writing every line to designing workflows, specifying intent precisely, writing good tests and reviewing results critically.
- **Companies:** Productivity gains depend less on which model you buy and more on how well it is integrated, controlled and monitored.
- **Non-programmers:** The same idea applies to office agents: an assistant with access to email, calendar and documents needs clear rules, limits and logs.
- **Learners:** Fundamentals still matter. You cannot judge an agent's output if you do not understand the domain.

## Link to the jobs debate

The harness trend is closely tied to another discussion on X this week: warnings that AI could replace many entry-level jobs. If one well-configured agent can do the work of a small team, as some engineers claim, junior roles are under pressure. We cover that debate in a separate post.

## What we could not verify

- The claim that leading labs shift "90%" of their work to harness-based systems.
- The July 2026 paper on eleven coding-agent systems (title, authors, findings).
- The "more than 10 points" improvement on SecRepoBench.
- Claims that entire development teams were replaced by one agent.

## Conclusion

"Harness engineering" is a new name for an old engineering truth: a powerful component is only useful inside a well-designed system. What is new in 2026 is how capable the component has become, capable enough that some developers no longer read the code it writes. Whether that is progress or a risk depends on the quality of the harness: tests, limits, logs and humans who still understand what the system is supposed to do.


## Sources

X links are news summaries generated from posts on X; X labels them as possibly inaccurate.

- [X: Harness Engineering Transforms AI Agents from Prompts to Systems (Nov 2, 2026)](https://x.com/i/trending/2116680654171631672)
- [X: Builders Shift to Harness Engineering for Reliable AI Agents (Nov 3, 2026)](https://x.com/i/trending/2117603924928758218)
- [X: AI Agents Reshape Software Development by Handling Code Reviews (Nov 4, 2026)](https://x.com/i/trending/2117668001680077309)
- [X: AI Fears Center on Job Loss and Eroding Skills (Nov 4, 2026)](https://x.com/i/trending/2117929719244988570)
- [X: X Users Debate AI Adoption and Its Real Costs (Nov 3, 2026)](https://x.com/i/trending/2117748883568971794)
- [Forward Future (homepage with "Does Prompting Still Matter?", "From Software to Silicon: Scaling Agentic AI Security" and the Relay tool)](https://forwardfuture.ai/)
- [Letta (GitHub)](https://github.com/letta-ai/letta)
- [CrewAI (GitHub)](https://github.com/crewAIInc/crewAI)
- [Wikimedia Commons: Coder screen shot (image)](https://commons.wikimedia.org/wiki/File:Coder_screen_shot.webp)
