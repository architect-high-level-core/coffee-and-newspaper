---
layout: post
title: "AI Agents Between Rules and Tools: Amazon's Agent Terms, Open-Source Toolkits and New AI News"
date: 2026-10-16
tags: [AI, AI agents, MCP, open source, AI safety, Forward Future]
image: /assets/img/2026-10-16-glasfaser.jpg
image_alt: "Glowing fiber-optic cables in a museum exhibit"
image_credit: "Photo: Syced, “Fujikura optic fiber at Science Museum”, CC0 (public domain), via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Fujikura_optic_fiber_at_Science_Museum.jpg"
image_license: "CC0 1.0"
image_license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
---

Large platforms are drawing lines for AI agents, while open-source tools make building your own agents easier and easier. This overview sums up new rules, widely used agent tools and current AI news from Forward Future.

**Terms first:** An **AI agent** is an AI program that completes several steps on its own. A **browser agent** remote-controls a web browser the way a human would. **MCP** (Model Context Protocol) is a standard plug that lets an AI use external tools. **Scraping** means a program automatically reads out web pages. **Self-hosting** means running software yourself instead of paying for a subscription.

## 1. Amazon: new rules for AI agents

Amazon's Conditions of Use (as of August 14, 2026) explicitly exclude "data mining, robots, or similar data gathering and extraction tools". New are the "Agent Terms": AI agents must identify themselves in the **user agent** (the browser identifier) with "Agent/Name". They may not imitate human behavior, bypass **CAPTCHAs** (challenges designed to block bots) or circumvent blocks. Many scrapers and "stealth" browsers do exactly that. Amazon's software terms also prohibit reverse engineering of Amazon software.

For context: in the US case Meta v. Bright Data (January 2024), reading out public data without logging in did not violate Meta's terms of use; Meta later dropped the case. This is a single case under US law.

**Original articles:**

- https://www.amazon.com/gp/help/customer/display.html?nodeId=508088
- https://arstechnica.com/tech-policy/2024/01/facebook-suffers-big-loss-in-lawsuit-against-data-scraping-company/
- https://www.prnewswire.com/news-releases/meta-files-notice-to-drop-web-scraping-case-against-bright-data-302071400.html

## 2. Which agent tools are widely used

Building blocks with large communities (GitHub stars, as of October 15, 2026; **GitHub stars** are a kind of "like" for software projects):

- **n8n** (≈207,000): a visual toolkit for automated workflows ("if X, then Y"), self-hostable. n8n describes itself as "fair-code", not classic open source.
- **browser-use** (≈118,000) and Microsoft's **Playwright-MCP** (≈38,000): let an AI control a browser.
- **crawl4ai** (≈86,000) and **Scrapy** (≈65,000): turn web pages into data an AI can read.
- **CrewAI** (≈60,000): several AI "workers" share a task, such as a researcher and an analyst.
- **MCP servers:** The data service Keepa now offers its own MCP server for AI assistants.

With **Ollama**, AI models can be run locally without ongoing costs; cloud models charge per use.

**Original articles:**

- https://github.com/n8n-io/n8n
- https://github.com/browser-use/browser-use
- https://github.com/microsoft/playwright-mcp
- https://github.com/unclecode/crawl4ai
- https://github.com/crewAIInc/crewAI
- https://keepa.com/api-docs/

## 3. Agents under scrutiny: the FTC and "stealth" browsers

Forward Future describes a trend of AI agents becoming "AI workers" that people manage. At the same time, according to a report from October 1, 2026, the US competition authority **FTC** is examining the safety of agents that browse and act on their own. Forward Future's tool directory also lists "Owl Browser", a self-hosted "stealth" browser for agents; using it on Amazon conflicts with the Agent Terms.

**Original articles:**

- https://forwardfuture.com/newsletter/daily/2026-10-01/ai-s-physical-singularity-openai-s-devday-strategy-ftc-scrutiny
- https://forwardfuture.com/tools/tag/browser-automation-tools

## 4. REA: reverse engineering with AI agents

According to GitHub, REA ("Reverse Engineer Anything") has more than 264,000 stars, was last updated on October 15, 2026, and is released under the **MIT license** (a permissive open-source license). It connects AI agents via MCP with analysis tools for program files, JavaScript and Electron apps, .NET and websites. The analysis runs locally; for every result, REA discloses evidence and limitations.

REA helps people understand features, such as how a browser extension basically works. Data stored on other companies' servers cannot be "analyzed out" with it. The license terms of commercial providers typically prohibit reverse engineering; for Amazon software, the prohibition is documented.

**Original article:** <https://github.com/morluto/rea>

## 5. Amazon blocks third-party shopping agents

Amazon has locked other providers' AI shopping agents out of its site. In a guest article (October 13, 2026), Nick Wentz sees this as Amazon's weak spot: a future competitor might not need warehouses, only the relationship between customer and merchant.

**Original article:** <https://forwardfuture.com/newsletter/originals/amazon-isn-t-afraid-of-ai-shopping-it-s-afraid-of-losing-the-customer>

## 6. JPMorgan locks third-party AI agents out of customer accounts

According to Forward Future (October 15, 2026), third-party agents may not log in with customer credentials or act within accounts. Customers can, however, grant limited read access to data through approved interfaces.

**Original article:** <https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking>

## 7. 420 researchers want "hacking-capable" AI cut off from the internet

In an open letter, 420 researchers call for such models to be kept offline by default until better safeguards exist. They also demand an international oversight body.

**Original article:** <https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking>

## 8. AI in chip design: fast but error-prone

In a new test by NVIDIA and ChipAgents, the best AI agent solved only 16.6% of the tasks. According to ChipAgents, AI has nevertheless already shortened typical chip development from at least two years to about one year.

**Original article:** <https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking>

## 9. AI learns to design life

Models such as Evo 2 read DNA like text and can analyze long stretches of genetic material (report by The Economist, via Forward Future). In the near term, this is about better medicines, proteins and crops.

**Original article:** <https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking>

## 10. Anthropic curbs "distillation"

In **distillation**, another company queries a strong model millions of times and trains its own model on the answers. Anthropic says new safeguards have reduced this by 90 to 99%. The price: some genuine requests are blocked too.

**Original article:** <https://forwardfuture.com/newsletter/daily/2026-10-14/anthropic-blocks-ai-theft-ai-adoption-gap-gemini-4-argon>

## 11. Build or buy?

Using Duolingo and Morgan Stanley as examples, David Weinstein argues in a guest article (October 8, 2026) that the AI model itself is an interchangeable commodity. The advantage lies in the system you build around it.

**Original article:** <https://forwardfuture.com/newsletter/originals/the-build-vs-buy-trap-why-your-ai-strategy-should-look-more-like-r-d>

## 12. New tool: Alex's DaVinci Editing Skills

Instructions for AI agents that let them clean up dialogue, create a first cut and smooth audio transitions in the video editing program DaVinci Resolve.

**Original article:** <https://forwardfuture.com/alexs-davinci-editing-skills>

## Bonus: Apple and Meta bring a large open model to the Mac

The longtime rivals have jointly gotten Meta's new open AI model "Muse Spark Open" (816 billion **parameters**, i.e. learnable "adjustment knobs") running locally on two to four connected Mac Studios with M5 Ultra chips. The model is free to download and may be used commercially (Axios, October 15, 2026).

**Original article:** <https://www.axios.com/technology/2026/10/15>

## Sources

- [Amazon Conditions of Use – Ban on data mining, Agent Terms](https://www.amazon.com/gp/help/customer/display.html?nodeId=508088)
- [Ars Technica – Meta vs. Bright Data](https://arstechnica.com/tech-policy/2024/01/facebook-suffers-big-loss-in-lawsuit-against-data-scraping-company/)
- [PR Newswire – Meta drops lawsuit (Bright Data press release)](https://www.prnewswire.com/news-releases/meta-files-notice-to-drop-web-scraping-case-against-bright-data-302071400.html)
- [n8n – Automation, fair-code](https://github.com/n8n-io/n8n)
- [browser-use – Browser agents](https://github.com/browser-use/browser-use)
- [Playwright-MCP – Browser control via MCP](https://github.com/microsoft/playwright-mcp)
- [crawl4ai – Crawler for AI](https://github.com/unclecode/crawl4ai)
- [CrewAI – Teams of multiple agents](https://github.com/crewAIInc/crewAI)
- [Keepa API Docs – Token model, MCP server](https://keepa.com/api-docs/)
- [Forward Future, Oct 1, 2026 – FTC examines AI agents](https://forwardfuture.com/newsletter/daily/2026-10-01/ai-s-physical-singularity-openai-s-devday-strategy-ftc-scrutiny)
- [Forward Future Tools – Browser automation, Owl Browser](https://forwardfuture.com/tools/tag/browser-automation-tools)
- [GitHub morluto/rea – REA: features, MCP, stars](https://github.com/morluto/rea)
- [Forward Future, Oct 13, 2026 – Amazon blocks shopping agents](https://forwardfuture.com/newsletter/originals/amazon-isn-t-afraid-of-ai-shopping-it-s-afraid-of-losing-the-customer)
- [Forward Future Daily, Oct 15, 2026 – JPMorgan, open letter, chip design, DNA AI](https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking)
- [Forward Future Daily, Oct 14, 2026 – Anthropic vs. distillation](https://forwardfuture.com/newsletter/daily/2026-10-14/anthropic-blocks-ai-theft-ai-adoption-gap-gemini-4-argon)
- [Forward Future, Oct 8, 2026 – Build or buy](https://forwardfuture.com/newsletter/originals/the-build-vs-buy-trap-why-your-ai-strategy-should-look-more-like-r-d)
- [Forward Future Tools – DaVinci Editing Skills](https://forwardfuture.com/alexs-davinci-editing-skills)
- [Axios, Oct 15, 2026 – Apple and Meta, Muse Spark Open](https://www.axios.com/technology/2026/10/15)
