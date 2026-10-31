---
layout: post
title: "Amazon and AI in Late October 2026: Record AWS Growth, a $220 Billion Bill, and Why the Stock Still Fell"
date: 2026-10-31 07:30:00 +0100
slug: amazon-ai-plans-and-problems
excerpt: "AWS grew 39% in the third quarter of 2026, its fastest pace in nearly five years, and Amazon posted its highest operating margin ever. The stock still fell. This update explains Amazon's AI strategy (Bedrock, Trainium, Anthropic, OpenAI, Alexa+, agents, robotics), the latest numbers and costs, and what the actual problems are."
tags: [AI, Amazon, AWS, cloud computing, Amazon Bedrock, Trainium, Graviton, Project Rainier, Anthropic, OpenAI, Alexa+, Amazon Nova, AI agents, AgentCore, Kiro, Amazon Quick, robotics, data centers, capex, earnings, stock market]
image: /assets/img/2026-10-31-amazon-ai-plans-and-problems.jpg
image_alt: "Aerial view of several large, flat, light-coloured AWS data center buildings with rows of rooftop cooling units, next to an electrical substation, with one more building under construction in the foreground and dry brown fields around the site"
image_credit: "Photo: Tedder, “Amazon AWS us-west-2 morrow east AZ 01” (2023), CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Amazon_AWS_us-west-2_morrow_east_AZ_01.jpg (resized)"
image_license: "CC BY-SA 4.0"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "Aerial photograph, taken in August 2023, of part of Amazon Web Services' us-west-2 (Oregon) availability zone in Morrow County, Oregon. According to the Commons description, it shows three data centers with a fourth under construction. The finished buildings are long, windowless blocks with light roofs covered in rows of cooling equipment; white generator or equipment containers line their sides, and a large electrical substation sits at the top of the image. In the foreground, a building's steel frame is still open. The image stands for the physical side of Amazon's AI strategy: concrete, power and cooling, which is where most of the company's record capital spending goes."
---

Amazon's third-quarter report on October 29, 2026 was, on paper, one of its best. Amazon Web Services (AWS), its cloud division, grew 39% year over year, the fastest pace in nearly five years. The whole company earned its highest operating margin ever. Andy Jassy, Amazon's CEO, predicted that AWS would grow by more than 40% in both 2027 and 2028.

And yet the share price fell. The reason is not a collapse at AWS. It is a mix of three things: results that were slightly below Wall Street forecasts, AWS growth that was good but below what many big investors had hoped for, and a huge AI spending bill that has turned Amazon's free cash flow deeply negative.

This post explains, in plain words, what Amazon is planning in AI, what the latest numbers say, what AI is costing, and which problems are real.

**How we checked:** the financial figures come from Amazon's own earnings press release of October 29, 2026 and from the earnings call (via Amazon's own summary and a published transcript). Market reactions and analyst views come from CNBC, AP and Yahoo Finance. Partnership details come from Anthropic, OpenAI, Amazon and Reuters. Some details on AWS outages come from third-party status trackers that copy AWS's own status messages; we say so where that is the case. We looked at X news summaries but did not use them for any number. Stock prices are US dollar closing prices. US market times are Eastern Time (ET); Vienna (CET) is 5 hours ahead this week.

**Key terms:**

- **AWS (Amazon Web Services):** Amazon's cloud business. It rents out computing power, storage, databases and AI services to companies.
- **Capex (capital expenditure):** money spent on long-lived assets such as data centers, servers, chips and power equipment.
- **Free cash flow:** cash from operations minus capex. If it is negative, the company is spending more on investment than its business brings in.
- **Backlog:** contracted future revenue that customers have committed to but that has not yet been booked.
- **Training / inference:** teaching an AI model / running the finished model.
- **AI accelerator:** a chip built for AI math, such as Nvidia's GPUs or Amazon's own Trainium.
- **Agent:** AI software that does not only answer, but takes steps on its own, such as calling tools, editing files or placing orders.

## The short version

- **Results (Q3 2026, July to September):** revenue $201.9 billion (+12%), operating income $28.1 billion, operating margin 13.9% (a record), earnings per share $1.89. ([Amazon IR, Oct 29, 2026](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Third-Quarter-Results/))
- **AWS:** revenue $46.0 billion (+39.3%), operating income $17.8 billion, $184 billion annual run rate, backlog $578 billion. (Amazon IR; [Amazon Q3 call summary](https://www.aboutamazon.com/news/company-news/aws-growth-ai-demand-q3-2026-earnings))
- **Costs:** about $220 billion in cash capex planned for 2026, "meaningfully more" in 2027; free cash flow over the last twelve months was an outflow of $42.4 billion. (Amazon IR; [call transcript](https://stockanalysis.com/stocks/amzn/transcripts/720308-q3-2026/))
- **Stock:** down about 6–7% after hours on October 29, then closed at $237.35 on October 30, down about 2.6% for the day and about 6.8% from the October 28 close. ([CNBC, Oct 29](https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html); [Yahoo Finance price history](https://finance.yahoo.com/quote/AMZN/history/); percentages are our own calculation)
- **"Problem at AWS":** we found no new AWS crisis behind the share drop. AWS beat the published analyst consensus. The disappointment was against higher hopes on the buy side (around 42–43% growth), plus worries about spending. Separately, AWS does have real, long-running damage in the Middle East, where drone strikes hit data centers in March 2026.

## Part 1: Amazon's AI strategy

Amazon describes its AI strategy in three layers: chips and infrastructure at the bottom, tools and models for building AI apps in the middle, and finished AI applications at the top.

### 1. Chips: Trainium, Graviton and the "silicon" business

Amazon designs its own chips. **Trainium** is its AI accelerator, a cheaper alternative to Nvidia GPUs for training and running models. **Graviton** is its own general-purpose server processor (CPU). (Inferentia, an older Amazon chip line for inference, still exists, but Amazon's recent statements focus on Trainium for both training and inference.)

On the October 29 call, Jassy said:

- Amazon's chips business "continues to grow triple-digit percentages year-over-year", and revenue commitments for Graviton and Trainium "have each increased more than 20x year-over-year".
- Customers using Amazon's custom chips "saved more than $2 billion in Q3 alone".
- Short-term capacity on older Trainium generations now sells "at a premium" compared with the first half of the year.
- Amazon intends to sell or offer **Trainium outside AWS, late in 2027**, because customers keep asking for it.

(Sources: [call transcript](https://stockanalysis.com/stocks/amzn/transcripts/720308-q3-2026/); [Amazon: Jassy on custom chips](https://www.aboutamazon.com/news/company-news/amazon-custom-chips-demand-q3-2026-earnings).)

That last point is a strategic shift. Google already makes its TPU chips available outside its own data centers, and CNBC notes that this has helped Google's cloud numbers. Amazon now plans to follow ([CNBC, Oct 29, 2026](https://www.cnbc.com/2026/10/29/aws-q3-earnings-report-2026.html)).

To lower the barrier, AWS released **TorchNeuron**, which lets developers run existing PyTorch code on Trainium "without rewriting a thing", according to Amazon (Amazon IR, Oct 29, 2026).

Amazon still buys Nvidia chips too; CNBC reports AWS announced plans in the quarter to expand its Nvidia GPU portfolio.

### 2. Project Rainier and the big model partners: Anthropic and OpenAI

**Project Rainier** is the giant Trainium cluster AWS built for Anthropic, the maker of the Claude models. Amazon describes it as a multi-data-center compute cluster ([Amazon: Project Rainier](https://www.aboutamazon.com/news/aws/aws-project-rainier-ai-trainium-chips-compute-cluster)). In April 2026, Anthropic said it was using "over one million Trainium2 chips to train and serve Claude".

**Anthropic deal (April 20, 2026).** According to [Anthropic's announcement](https://www.anthropic.com/news/anthropic-amazon-compute) and [Reuters](https://www.reuters.com/technology/anthropic-spend-over-100-billion-amazons-cloud-technology-2026-04-20/):

- Anthropic commits **more than $100 billion over ten years** to AWS technology.
- It secures **up to 5 gigawatts** of new capacity, with nearly 1 gigawatt of Trainium2 and Trainium3 capacity coming online by the end of 2026. The deal covers Trainium2 through Trainium4.
- Amazon invests **$5 billion** immediately and **up to $20 billion more** later, on top of $8 billion invested before.
- The full "Claude Platform" is coming to AWS accounts directly.

The Anthropic stake also shows up in Amazon's profit numbers. Net income in Q3 2026 ($20.7 billion) was actually lower than a year earlier ($21.2 billion). Amazon says this is "driven primarily by pre-tax gains of $9.5 billion in third quarter 2025" from its Anthropic investments (Amazon IR). In other words, last year's profit got a one-off boost that did not repeat.

**OpenAI deal (February 27, 2026).** Amazon has also moved much closer to OpenAI, once seen as Microsoft's partner. According to [OpenAI](https://openai.com/index/amazon-partnership/) and [Reuters](https://www.reuters.com/business/retail-consumer/openais-110-billion-funding-round-draws-investment-amazon-nvidia-softbank-2026-02-27/), Amazon committed to invest **$50 billion** in OpenAI ($15 billion first, $35 billion later, tied to conditions), and OpenAI expanded its existing $38 billion AWS agreement by **$100 billion** over eight years, including about **2 gigawatts of Trainium capacity**. (We did not read Amazon's full SEC filing on this deal.)

In the Q3 quarter, OpenAI's newest models (the GPT-6 family) were added to Bedrock, and AWS launched a public preview of **Bedrock Managed Agents**, "a managed service powered by OpenAI" (Amazon IR).

Amazon now hosts and finances both leading independent AI labs: whichever wins, AWS sells the compute.

### 3. Bedrock, Nova and the model layer

**Amazon Bedrock** is AWS's service for using AI models through one interface. Amazon calls it its "inference service". The Q3 figures Amazon reported (Amazon IR, Oct 29, 2026):

- Fortune 500 companies spent "nearly 7x more" on Bedrock year over year.
- Total Bedrock token volume (the amount of text processed) grew "nearly 17x".
- New models added include OpenAI's GPT-6 models, Anthropic's newest Claude models, Moonshot AI's Kimi K3, SpaceXAI's Grok 4.7 and Z.ai's GLM 5.3.

On the call, Jassy said inference "already accounts for well over half of AWS's AI revenue" ([transcript](https://stockanalysis.com/stocks/amzn/transcripts/720308-q3-2026/)). Inference is repeat business: every answer an AI app gives costs compute.

**Amazon Nova** is Amazon's own family of AI models. The current line-up, according to AWS's product pages, is the Nova 2 generation (for example Nova 2 Lite for low-cost reasoning and a Sonic speech model for voice agents), plus **Nova Forge**, which lets companies build custom models starting from Nova checkpoints and their own data ([AWS Nova models](https://aws.amazon.com/nova/models/); [Nova Forge](https://aws.amazon.com/nova/forge/)). Amazon did not give Nova usage figures in its Q3 release.

### 4. Agents: AgentCore, Strands, Kiro and Quick (and what happened to "Q")

Amazon is betting that companies will run many AI agents, and that they will run them on AWS.

- **Bedrock AgentCore** is the managed platform for running agents in production. Amazon says "tens of thousands of customers" use it, and that they deployed twice as many agents in Q3 as in the previous three quarters combined (Amazon IR).
- **Strands** is Amazon's open-source agent toolkit. In Q3 it added a ready-made "harness" (Amazon claims 32% lower cost per agent task; not independently tested) and previewed **Strands Box**, a sandbox to stop agents doing unintended harm (Amazon IR).
- **Kiro** is Amazon's AI coding tool. In Q3 Amazon open-sourced **Kiro Crew**, which coordinates several coding agents in parallel (Amazon IR).
- **Amazon Quick** is an AI assistant for office work. In Q3 it was extended into Outlook, Word, PowerPoint and Excel (Amazon IR).

**What about Amazon Q?** Amazon Q, the assistant brand launched in 2023, is being phased out on the developer side: AWS has announced end of support for Amazon Q Developer and points users to Kiro ([AWS DevOps blog](https://aws.amazon.com/blogs/devops/amazon-q-developer-end-of-support-announcement/); [Kiro migration guide](https://kiro.dev/docs/upgrade-guides/migrating-from-q-developer/)). Reported dates (new sign-ups stopped May 2026, support ends April 30, 2027) are unverified by us. For business users, the current brand is Quick.

### 5. Alexa+ and AI shopping

**Alexa+** is the generative-AI version of Amazon's voice assistant. Since February 2026 it has been available to all US customers: free for Prime members, with a limited free text version or $19.99 per month for others ([Amazon](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us); [GeekWire, Feb 2026](https://www.geekwire.com/2026/amazon-rolls-out-alexa-to-all-u-s-customers-making-its-ai-assistant-free-for-prime-members/)). In Q3, Amazon expanded Alexa+ to Australia, India and Japan, and made it free for US customers with compatible Fire TV devices (Amazon IR).

Amazon has not published a separate Alexa+ user count in this release. What it did publish is a number for **Alexa for Shopping**, its "agentic shopping assistant": used by "400 million+ customers in the last 12 months", with interactions up 570% year over year (Amazon IR).

In advertising, Amazon launched **Amazon Ads Agent**, which plans and runs ad campaigns for advertisers (Amazon IR).

### 6. Retail, logistics and robots

AI at Amazon is not only software. Amazon runs **more than 1 million robots** in its warehouses, according to an in-depth Ars Technica report from October 12, 2026 ([Ars Technica](https://arstechnica.com/ai/2026/10/inside-amazons-robotic-arms-race-and-what-it-means-for-the-future-of-human-work/)). Key points from that report:

- Most robots are still wheeled machines that carry shelves to workers. A set of AI models called **DeepFleet** coordinates their traffic.
- Robotic arms are growing fast but are still in the "single-digit thousands", according to Amazon Robotics vice president Scott Dresser. **Vulcan**, an arm with a sense of touch, works in Spokane (USA) and Hamburg (Germany) and should scale up in 2027.

Not every project works. In February 2026, TechCrunch reported that Amazon halted its **Blue Jay** multi-arm robot project after less than six months ([TechCrunch, Feb 18, 2026](https://techcrunch.com/2026/02/18/amazon-halts-blue-jay-robotics-project-after-less-than-six-months/)), and Reuters reported job cuts in the robotics unit in March 2026 ([Reuters, Mar 4, 2026](https://www.reuters.com/business/world-at-work/amazon-cuts-more-jobs-this-time-robotics-unit-2026-03-04/)).

### 7. Data centers and power

All of this runs on physical buildings. On the call, Jassy said Amazon is "installing an AI accelerator about every 14 seconds, and almost as fast as we install capacity, customers are gobbling it up" ([transcript](https://stockanalysis.com/stocks/amzn/transcripts/720308-q3-2026/)).

Data centers are also a local political issue because of power, water and land use. In Q3, Amazon announced **Built Together**, a $1 billion program for communities near its US data centers, covering things like community college training, energy and water upgrades and local projects (Amazon IR).

## Part 2: The numbers, in detail

All figures below are for the third quarter of 2026 (July 1 to September 30) and come from [Amazon's press release of October 29, 2026](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Third-Quarter-Results/) unless noted.

### Company-wide

| Metric | Q3 2026 | Q3 2025 | Change |
|---|---|---|---|
| Net sales | $201.9 bn | $180.2 bn | +12% |
| Operating income | $28.1 bn | $17.4 bn | +61% |
| Operating margin | 13.9% | 9.7% | record high |
| Net income | $20.7 bn | $21.2 bn | down (2025 included $9.5 bn Anthropic gains) |
| Diluted EPS | $1.89 | $1.95 | down |

Prime Day moved into Q2 in most large countries in 2026 (it was in Q3 in 2025); without that shift, Amazon says Q3 growth would have been about 4 percentage points higher.

### By segment

| Segment | Sales | Growth | Operating income |
|---|---|---|---|
| North America | $112.9 bn | +6% | $8.7 bn |
| International | $43.1 bn | +5% (+8% without currency effects) | $1.6 bn |
| AWS | $46.0 bn | +39% | $17.8 bn |

AWS now makes up almost 23% of Amazon's revenue, a record, but about 63% of its operating income ($17.8 bn of $28.1 bn, our calculation). AWS's operating margin was 38.7%, up from 34.6% a year earlier but slightly down from 39.4% in Q2 2026 (Amazon IR supplemental tables).

AWS growth has now accelerated for six quarters in a row. Amazon's table shows growth (excluding currency effects) of 17% in Q2 2025, 20% in Q3 2025, 24% in Q4 2025, 28% in Q1 2026, 37% in Q2 2026 and 39% in Q3 2026.

**Advertising** brought in $19.6 billion, up 11% (12% without currency effects). That was below the $20.82 billion StreetAccount consensus quoted by [CNBC](https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html). Amazon blamed "timing anomalies primarily related to Prime Day" and expects ad growth "in the high teens" in Q4.

### Versus expectations

According to [CNBC](https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html) (LSEG and StreetAccount consensus):

- EPS: $1.89 vs. $1.96 expected (miss)
- Revenue: $201.94 bn vs. $202.31 bn expected (small miss)
- AWS: $45.98 bn vs. $45.29 bn expected (beat)
- AWS operating income: $17.77 bn vs. $16.97 bn expected (beat)
- Advertising: $19.64 bn vs. $20.82 bn expected (miss)

For Q4 2026, Amazon guided revenue of $240–247 billion (up 12–16%) and operating income of $28.5–33.5 billion (Amazon IR). Yahoo Finance's live blog put the revenue expectation at $244.5 billion, so the midpoint of the range was slightly below ([Yahoo Finance](https://finance.yahoo.com/markets/stocks/live/amazon-earnings-live-q3-earnings-miss-sends-stock-lower-203345870.html)).

### The cost side: what AI is costing Amazon

This is the heart of the story.

- **Capex in Q3:** Amazon's cash flow statement shows $77.3 billion in purchases of property and equipment in the quarter, compared with $35.1 billion a year earlier. Net of sales and incentives, it was about $75.9 billion, the figure Deutsche Bank quoted ([CNBC, Oct 30](https://www.cnbc.com/2026/10/30/amazon-earnings-analysts-stock.html)).
- **2026 total:** Amazon still expects about **$220 billion** in cash capex for 2026, "the majority for AWS" (Amazon IR; call transcript).
- **2027:** Jassy said Amazon expects "to spend meaningfully more in 2027". He gave no number.
- **Free cash flow:** over the twelve months to September 30, 2026, free cash flow was an **outflow of $42.4 billion**, compared with an inflow of $14.8 billion a year earlier. Amazon says the main driver was a $94.8 billion increase in capex, which "primarily reflects investments in artificial intelligence". It was the second quarter in a row with negative twelve-month free cash flow (the figure was –$7.6 billion after Q2).
- **Depreciation:** $20.9 billion in the quarter, up from $16.8 billion a year earlier, as the new equipment starts to wear out on the books.
- **Debt:** Amazon raised $48.1 billion in long-term debt in Q3 alone. Long-term debt on the balance sheet rose from $65.6 billion at the end of 2025 to $173.1 billion on September 30, 2026. Cash and cash equivalents fell from $86.8 billion to $55.8 billion over the same period. (All from Amazon IR tables.)

Put simply: Amazon generates a lot of cash (operating cash flow $168.3 billion over twelve months, +29%), but spends even more on AI infrastructure and partly borrows to do it.

Amazon's argument is that this spending is backed by contracts. AWS's backlog is **$578 billion**, "growing triple digits year-over-year and well-diversified", according to Jassy. He also said Amazon has "a clear line of sight to attractive financial returns" ([transcript](https://stockanalysis.com/stocks/amzn/transcripts/720308-q3-2026/)). Amazon gave no breakdown; much of it is likely linked to the Anthropic and OpenAI deals (our inference).

## Part 3: What actually happened to the stock

### The move, step by step

All prices are US dollar closing prices from [Yahoo Finance's AMZN history](https://finance.yahoo.com/quote/AMZN/history/); the percentages are our own calculations.

- **Tuesday, October 20:** $262.63.
- **Wednesday, October 28:** $254.60. Microsoft and Alphabet reported that evening.
- **Thursday, October 29 (regular session, before Amazon's results):** $243.79, down about 4.2%. This drop happened *before* Amazon reported. CNBC notes that Alphabet "suffered its worst day on record, plunging more than 12%" that Thursday, so the whole tech sector was under pressure ([CNBC, Oct 30](https://www.cnbc.com/2026/10/30/amazon-intel-earnings-big-tech-ai-spending-concerns.html)).
- **Thursday evening, after results (released after the 4 p.m. ET close):** shares fell "more than 6%" in extended trading ([CNBC](https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html)); AP reported a drop of 7% after hours ([AP](https://apnews.com/article/amazon-q3-earnings-amazon-web-services-2de72b65d63006a7ce85eab441e2d6b7)).
- **Friday, October 30:** nearly 7% lower in premarket trading, per CNBC. The stock recovered during the day and closed at **$237.35**, down about **2.6%** on the day. (A CNBC article updated during the session said Amazon was "slipping 1.4%"; that was an intraday reading.) The Nasdaq Composite fell 2.9% that day, and Intel fell 29% on its own weak outlook.

Over the two sessions from the October 28 close, Amazon lost about **6.8%**. From the October 20 close, it was down about **9.6%**. Barclays wrote that the stock's year-to-date performance and sentiment "remain in the doghouse" ([CNBC, Oct 30](https://www.cnbc.com/2026/10/30/amazon-earnings-analysts-stock.html)). We did not check the exact year-to-date change.

### Why investors sold

Based on the reporting above, the reasons were:

1. **A small miss on profit and revenue.** EPS of $1.89 vs. $1.96, revenue just under consensus, and weak advertising.
2. **AWS "only" at 39%.** AWS beat the published consensus (about 38%). But several analysts say big investors expected more. Deutsche Bank cited "AWS growth coming in shy of the Buyside expectation (39% vs. 43%)". UBS said investor expectations were "likely" 42–43%. BMO said buy-side investors were expecting "the 40%+ range" ([CNBC, Oct 30](https://www.cnbc.com/2026/10/30/amazon-earnings-analysts-stock.html)). After Google Cloud more than doubled and Microsoft's Azure also accelerated the day before, a 39% figure looked less special.
3. **The spending bill and negative free cash flow.** CNBC described the reaction as reflecting "ballooning negative free cash flow" and "swelling AI investments". AP wrote that investors "worried about Amazon's burning through cash as it invests heavily in artificial intelligence."
4. **A sector-wide mood.** The same week saw Alphabet's record one-day fall and Intel's worst day since the 1970s ([CNBC, Oct 30](https://www.cnbc.com/2026/10/30/amazon-intel-earnings-big-tech-ai-spending-concerns.html)).

### What analysts said

Most big banks kept positive ratings, though several trimmed price targets. Morgan Stanley (Overweight, target cut to $335 from $350) called it "mostly an expectations miss". Goldman Sachs (Buy, cut to $370 from $375) said investors want a framework for "the need for sustained capex beyond 2027" and how to fund it ([CNBC, Oct 30](https://www.cnbc.com/2026/10/30/amazon-earnings-analysts-stock.html)).

## Part 4: Is there really a problem with AWS?

The claim that "Amazon has a problem with AWS, and that is why the stock fell" is **only partly right**.

**Not confirmed:** we found no AWS outage, collapse in demand or slowdown behind this week's share drop. On the contrary, AWS accelerated, beat the published forecasts and raised its multi-year outlook. The "problem" was relative: growth below the hopes of some large investors, at a time when Google Cloud and Azure are growing faster from smaller bases. CNBC reports that Azure is now 72% the size of AWS, up from 58% two years ago ([CNBC, Oct 29](https://www.cnbc.com/2026/10/29/aws-q3-earnings-report-2026.html)).

**Confirmed, but not the trigger this week:** AWS does have real operational problems in 2026.

- **Middle East data centers hit by drone strikes.** On March 1, 2026, objects struck an AWS facility in the UAE region (ME-CENTRAL-1), "creating sparks and fire". AWS later said two facilities in the UAE were directly struck by drones and a strike near a facility in Bahrain (ME-SOUTH-1) caused damage, including structural damage, power loss and water damage from fire suppression ([Data Center Knowledge](https://www.datacenterknowledge.com/outages/aws-middle-east-outage-after-data-center-hit-by-unidentified-objects)). The context is the US–Iran conflict that began on February 28, 2026, according to W.Media.
- **Some data was lost for good.** In a September 2026 status update, AWS said it had been unable to restore resources and data stored only in one UAE availability zone (mec1-az2), and that it was replacing the affected infrastructure ([W.Media, Sep 17, 2026](https://w.media/aws-cant-recover-resources-and-data-stored-in-uae-region-hit-during-us-iran-conflict/)). A regional business outlet reports that AWS will give a further update on Bahrain in early 2027 ([Enterprise AM](https://enterpriseam.com/ai/issues/gulf-champions-and-western-firms-are-staying-the-course-on-ai-infrastructure/)). As of October 30, 2026, a third-party status tracker still listed both Middle East regions as having an outage ([Global Cloud Status](https://globalcloudstatus.com/)). We did not check this directly on the AWS Health Dashboard.
- **Smaller incidents.** Third-party trackers that copy AWS status messages list, among others, packet loss in the Spain region (EU-SOUTH-2) on October 4 caused by a network configuration change ([postmortem.io](https://postmortem.io/incidents/aws--2026-10-04--eu-south-2-az1-packet-loss-network-config-change/)), and API Gateway errors in the Oregon region (US-WEST-2) on October 29 Pacific time ([AWSDown](https://awsdown.com/incidents)). We found no report linking them to the share price.
- **Capacity shortages.** AWS cannot add capacity fast enough. Jassy said customers use new capacity almost as fast as it is installed, and BMO speaks of "ongoing supply constraints". For customers this can mean waiting for AI chips; for Amazon it means revenue it cannot yet book.

## Part 5: Other open problems and risks

- **Cash and debt.** The biggest issue for investors. Negative free cash flow, much higher debt and "meaningfully more" spending in 2027 mean Amazon is betting that AI demand stays strong for years.
- **Dependence on two AI labs.** Anthropic and OpenAI are both partners, customers and investments. If either one's growth slows or changes direction, AWS's backlog and Amazon's investment values could be affected. This is our assessment based on the size of the deals.
- **Competition.** Google Cloud and Microsoft Azure are growing faster, and Google already sells its own AI chips outside its cloud. Amazon will only start doing that with Trainium in late 2027.
- **Jobs.** Amazon cut about 14,000 corporate jobs in October 2025 and about 16,000 more in January 2026 ([Reuters, Jan 28, 2026](https://www.reuters.com/legal/litigation/amazon-cuts-16000-jobs-globally-broader-restructuring-2026-01-28/); [Amazon](https://www.aboutamazon.com/news/company-news/amazon-layoffs-corporate-jan-2026)). Amazon has said the cuts are mainly about reducing layers and bureaucracy, while Jassy has also said AI will reduce corporate headcount over time ([AP](https://apnews.com/article/ai-job-impacts-layoffs-amazon-pinterest-dow-7736d042172743301dd7e494813a885d)). In warehouses, the October 2025 New York Times report cited by Ars Technica said internal documents suggested robots could let Amazon avoid hiring more than 600,000 US workers by 2033; Amazon said the documents reflected the views of one group only. At the same time, Amazon plans to hire more than 300,000 people for the 2026 holiday season (Amazon IR).
- **Physical and political risk.** The Middle East strikes showed that data centers can be hit in a war. Data center expansion also meets local resistance over power and water, which is one reason for the $1 billion Built Together program.

## Part 6: Outlook and what to watch

Jassy said on October 29 that AWS can grow "north of 40% in each of 2027 and in 2028" and become "a trillion-dollar revenue business in the next five to 10 years" ([transcript](https://stockanalysis.com/stocks/amzn/transcripts/720308-q3-2026/)). These are company forecasts, not facts. Things to watch: AWS's re:Invent conference (usually early December in Las Vegas) for news on Trainium, Nova and agents; the Q4 results (expected around early February 2027), with the first concrete 2027 capex figure; AWS's promised updates on the UAE and Bahrain regions; and details on selling Trainium outside AWS.

## Conclusion

Amazon's AI strategy is working by the measures Amazon itself chose: AWS growth has accelerated for six quarters, the backlog is $578 billion, Bedrock usage is multiplying, and Amazon now hosts both Anthropic and OpenAI. The price is enormous: about $220 billion in capex this year, more next year, negative free cash flow and rising debt. This week's share drop was not caused by a broken AWS. It came from a small earnings miss, AWS growth that fell short of very high hopes, and growing nervousness about the AI spending bill across the whole tech sector.

## Sources

- [Amazon IR: Amazon.com Announces Third Quarter Results (Oct 29, 2026)](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Third-Quarter-Results/)
- [Amazon: Q3 Earnings – Andy Jassy on AWS' 39% year-over-year growth (Oct 2026)](https://www.aboutamazon.com/news/company-news/aws-growth-ai-demand-q3-2026-earnings)
- [Amazon: Q3 Earnings – Andy Jassy on the growing demand for Amazon's custom chips (Oct 2026)](https://www.aboutamazon.com/news/company-news/amazon-custom-chips-demand-q3-2026-earnings)
- [Stock Analysis: Amazon Q3 2026 earnings call transcript (Oct 29, 2026)](https://stockanalysis.com/stocks/amzn/transcripts/720308-q3-2026/)
- [CNBC: Amazon (AMZN) Q3 earnings report 2026 (Oct 29, 2026)](https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html)
- [CNBC: Amazon AWS posts 39% revenue growth as cloud rivals also accelerate (Oct 29, 2026)](https://www.cnbc.com/2026/10/29/aws-q3-earnings-report-2026.html)
- [CNBC: Amazon stock falls after Q3 earnings miss – analyst reactions (Oct 30, 2026)](https://www.cnbc.com/2026/10/30/amazon-earnings-analysts-stock.html)
- [CNBC: Amazon, Intel shares fall after earnings amid AI spending concerns (Oct 30, 2026)](https://www.cnbc.com/2026/10/30/amazon-intel-earnings-big-tech-ai-spending-concerns.html)
- [AP: Amazon misses Wall Street targets, offers cautious Q4 outlook as shares slide (Oct 29, 2026)](https://apnews.com/article/amazon-q3-earnings-amazon-web-services-2de72b65d63006a7ce85eab441e2d6b7)
- [Yahoo Finance: Amazon earnings live blog (Oct 29–30, 2026)](https://finance.yahoo.com/markets/stocks/live/amazon-earnings-live-q3-earnings-miss-sends-stock-lower-203345870.html)
- [Yahoo Finance: AMZN historical prices (accessed Oct 30, 2026)](https://finance.yahoo.com/quote/AMZN/history/)
- [Anthropic: Anthropic and Amazon expand collaboration for up to 5 gigawatts of new compute (Apr 20, 2026)](https://www.anthropic.com/news/anthropic-amazon-compute)
- [Reuters: Amazon to invest up to $25 billion in Anthropic as part of $100 billion cloud deal (Apr 20, 2026)](https://www.reuters.com/technology/anthropic-spend-over-100-billion-amazons-cloud-technology-2026-04-20/)
- [OpenAI: OpenAI and Amazon announce strategic partnership (Feb 2026)](https://openai.com/index/amazon-partnership/)
- [Reuters: OpenAI's $110 billion funding round draws investment from Amazon, Nvidia, SoftBank (Feb 27, 2026)](https://www.reuters.com/business/retail-consumer/openais-110-billion-funding-round-draws-investment-amazon-nvidia-softbank-2026-02-27/)
- [Amazon: Project Rainier](https://www.aboutamazon.com/news/aws/aws-project-rainier-ai-trainium-chips-compute-cluster)
- [AWS: Amazon Nova models](https://aws.amazon.com/nova/models/)
- [AWS: Amazon Nova Forge](https://aws.amazon.com/nova/forge/)
- [AWS DevOps blog: Amazon Q Developer end-of-support announcement](https://aws.amazon.com/blogs/devops/amazon-q-developer-end-of-support-announcement/)
- [Kiro: Migrating from Q Developer](https://kiro.dev/docs/upgrade-guides/migrating-from-q-developer/)
- [Amazon: Alexa+ available free for Prime members in the US](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us)
- [GeekWire: Amazon rolls out Alexa+ to all U.S. customers (Feb 2026)](https://www.geekwire.com/2026/amazon-rolls-out-alexa-to-all-u-s-customers-making-its-ai-assistant-free-for-prime-members/)
- [Ars Technica: Amazon has over 1 million robot workers. What's next for human employees? (Oct 12, 2026)](https://arstechnica.com/ai/2026/10/inside-amazons-robotic-arms-race-and-what-it-means-for-the-future-of-human-work/)
- [TechCrunch: Amazon halts Blue Jay robotics project after less than 6 months (Feb 18, 2026)](https://techcrunch.com/2026/02/18/amazon-halts-blue-jay-robotics-project-after-less-than-six-months/)
- [Reuters: Amazon cuts more jobs; this time in robotics unit (Mar 4, 2026)](https://www.reuters.com/business/world-at-work/amazon-cuts-more-jobs-this-time-robotics-unit-2026-03-04/)
- [Reuters: Amazon axes 16,000 jobs as it pushes AI and efficiency (Jan 28, 2026)](https://www.reuters.com/legal/litigation/amazon-cuts-16000-jobs-globally-broader-restructuring-2026-01-28/)
- [Amazon: A message on recent layoffs (Jan 2026)](https://www.aboutamazon.com/news/company-news/amazon-layoffs-corporate-jan-2026)
- [AP: Some companies tie AI to layoffs, but the reality is more complicated](https://apnews.com/article/ai-job-impacts-layoffs-amazon-pinterest-dow-7736d042172743301dd7e494813a885d)
- [Data Center Knowledge: AWS Middle East data centers damaged in drone strikes (Mar 2026)](https://www.datacenterknowledge.com/outages/aws-middle-east-outage-after-data-center-hit-by-unidentified-objects)
- [W.Media: AWS can't recover resources and data stored in UAE region (Sep 17, 2026)](https://w.media/aws-cant-recover-resources-and-data-stored-in-uae-region-hit-during-us-iran-conflict/)
- [Enterprise AM: Gulf champions and Western firms are staying the course on AI infrastructure](https://enterpriseam.com/ai/issues/gulf-champions-and-western-firms-are-staying-the-course-on-ai-infrastructure/)
- [Global Cloud Status: live cloud status (accessed Oct 30, 2026)](https://globalcloudstatus.com/)
- [postmortem.io: AWS EU-SOUTH-2 packet loss (Oct 4, 2026)](https://postmortem.io/incidents/aws--2026-10-04--eu-south-2-az1-packet-loss-network-config-change/)
- [AWSDown: AWS incident history (accessed Oct 30, 2026)](https://awsdown.com/incidents)
- [Wikimedia Commons: Amazon AWS us-west-2 morrow east AZ 01 (image)](https://commons.wikimedia.org/wiki/File:Amazon_AWS_us-west-2_morrow_east_AZ_01.jpg)
