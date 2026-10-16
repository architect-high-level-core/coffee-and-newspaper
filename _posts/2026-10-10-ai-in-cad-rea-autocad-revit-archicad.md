---
layout: post
title: "AI in CAD: What REA Can Do, What AI Floor-Plan Tools Deliver and How Reddit Rates the AI in Revit, AutoCAD and ArchiCAD"
date: 2026-10-10
tags: [AI, CAD, AI agents, MCP, Revit, AutoCAD, ArchiCAD, Reddit]
image: /assets/img/2026-10-10-bauplan.jpg
image_alt: "Historical blueprint showing the elevation of a building facade"
image_credit: "Image: Alice Trythall Washburn, “Blueprint of elevation”, public domain, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Blueprint_of_elevation_by_Alice_Trythall_Washburn.jpg"
image_license: "Public Domain"
image_license_url: "https://commons.wikimedia.org/wiki/File:Blueprint_of_elevation_by_Alice_Trythall_Washburn.jpg"
---

In CAD, AI can now write scripts, annotate drawings and remote-control programs, but it cannot yet reliably design complete floor plans. This overview sums up what the analysis tool REA can do, which AI tools exist for floor plans, and how Reddit users rate the AI features of Revit, AutoCAD and ArchiCAD.

**Terms first:** **CAD** (computer-aided design) means computer-assisted drawing and design. **MCP** (Model Context Protocol) is a plug standard that lets an AI use external tools and programs. An **AI agent** is a program that completes several steps on its own.

**Note:** The Reddit statements are users' opinions. Some are based on public search snippets, not on the full thread text.

## 1. What REA is and what it isn't

REA stands for "Reverse Engineer Anything". It is a toolkit for coding agents: it gives the AI tools to examine programs without having their source code. That includes finished program files (**binaries**, the executable files a computer runs), JavaScript and Electron apps, .NET programs, websites and the behavior of running programs.

It connects via MCP or via the **CLI** (command line interface, i.e. typing commands in a terminal). The analysis runs locally, and results come with evidence and limitations. For in-depth analysis of native programs, Hopper, Ghidra or IDA are optionally required. REA is not a CAD or floor-plan program and does not draw plans.

**Original articles:**

- https://rea.tools/
- https://github.com/morluto/rea

## 2. Example uses of REA

From the documentation and the community:

- **Windows Calculator:** Why does 200 + 10% = 220? REA provides the relevant code and evidence; the agent explains the rule and can build a small replica with a % key.
- **Browser dino game:** Read the speed rule from the running script and rebuild a mini game with a speed slider.
- **Cloning a website:** Inspect a page and have it rebuilt.
- **More examples:** reconstructing the stereo panning calculation from DX-Ball, tracing the clipboard bridge in Notion (Electron), recovering a bullet calculation from an old DOS game.

In short: REA makes the question "How does this feature work?" answerable locally and with evidence.

**Original articles:**

- https://rea.tools/
- https://github.com/morluto/rea

## 3. Reddit: can AI generate CAD drawings?

The thread "CAD generator using AI?" in r/civilengineering discussed having an AI translate descriptions such as "10×10 room with a door on the north wall" into **LISP** (a scripting language for AutoCAD).

- **Community suggestion:** CadQuery (a Python library for parametric solids) plus Claude or ChatGPT writing the script; generate a **STEP file** (a 3D exchange format) from it and import it into, for example, Fusion 360. Advantage: real parametric solids instead of plain triangle meshes.
- **AutoCAD API plus LISP** is considered a sensible route for 2D floor plans and layouts.
- **Objection:** A fully automated 3D CAD product remains very hard; combinations with language models often take weeks and rework. Going from 3D to 2D is easier than pure generation. One commenter reports that his software designs in one minute what used to take a week.

**Original article:** <https://www.reddit.com/r/civilengineering/comments/1o5iue4/cad_generator_using_ai/>

## 4. AI tools for floor plans and 3D models

- **BIMy.ai** converts floor-plan images or PDFs into **BIM/IFC** in about one minute (BIM = Building Information Modeling, digital building models with construction information; IFC = an open exchange format for them) and can export toward Revit.
- **Spell (by Spline)**, listed in the Forward Future directory under "Architects tools": turns an image into an explorable 3D scene (using, among other things, **Gaussian splatting**, a technique for 3D rendering from images). Good for early visualization, but not a production-ready CAD model.
- **BuildFloorPlan**, under real estate tools: AI floor plans from text, sketches, images or PDFs, as 2D, 2.5D or in 3D style. According to the provider, for early drafts and layout comparisons, not a substitute for permit-ready construction drawings.
- **Gen3D:** turns images or text into 3D models in the browser and editable CAD geometry, typically in 1–2 minutes.

**Original articles:**

- https://bimy.ai/
- https://forwardfuture.com/tools/details/spell
- https://forwardfuture.com/tools/profession/architects-tools
- https://buildfloorplan.com/
- https://forwardfuture.com/tools/industry/real-estate-tools
- https://forwardfuture.com/tools/details/gen3d

## 5. Revit: an AI assistant at an early stage

Reddit users describe the new "Autodesk Assistant" in Revit 2027 as an early preview. It can create views and plans, place them on sheets and make bulk changes, such as changing all tile floors to laminate. One user reports, however, that the AI claimed to have copied walls even though nothing had happened in the model. Further criticism: it doesn't run locally, can't rename anything and feels "anemic".

For automation, users recommend the **Revit API** (the official programming interface), usually via **Dynamo**, a visual scripting tool. The RVT file format is considered **proprietary** (it belongs to the vendor and is not publicly documented).

**Original articles:**

- https://www.reddit.com/r/RevitForum/comments/1sfnbag/revit_2027s_new_ai_feature/
- https://www.reddit.com/r/RevitForum/comments/1sfynma/what_prompts_have_you_successfully_used_in_revit/
- https://www.reddit.com/r/Revit/comments/1fgmtp5/ai_bim/

## 6. AutoCAD: AI writes scripts, MCP servers control the program

**AutoLISP** is AutoCAD's built-in scripting language. According to Reddit, "almost any AI" can write such scripts, though rarely error-free on the first try; you have to feed error messages back to the AI word for word. Several MCP servers let AI assistants such as Claude or ChatGPT operate an open AutoCAD directly (e.g. autocad-mcp on GitHub, CADbridge). For AI-generated drawings, users recommend **DXF**, a more open text variant of the DWG format.

The response to AI results is mixed to negative: one user calls AI-generated blocks "bad", another is faster doing it himself, and a third points to the models' lack of spatial understanding.

**Original articles:**

- https://www.reddit.com/r/Autodesk_AutoCAD/comments/1w0vpbz/wie_kent_er_een_goede_ai_generator_die_kan_helpen/
- https://www.reddit.com/r/Autodesk_AutoCAD/comments/1vsjc8h/let_your_ai_claude_codex_chatgpt_cursor_etc_use/
- https://www.reddit.com/r/Autodesk_AutoCAD/comments/1vtsqs9/aiautocad/
- https://www.reddit.com/r/LocalLLM/comments/1umfw53/generating_autocad_dwgdxf_files_with_a_local_llm/

## 7. ArchiCAD: AI companion by subscription, automation via Tapir

Since version 29, ArchiCAD has had a built-in AI companion, but only with a subscription, plus the "AI Visualizer" for images and renderings. For automation, users recommend **Tapir**, an **open-source** add-on (free, with open code) that makes the interface accessible via Python and JSON and includes an MCP server. Criticism: the official interface is limited, and there is no official AI connection.

One user working on an AI drawing assistant calls his results so far "not good". Another got notes and dimensions into a wall section with ChatGPT but describes it as slow and expensive.

**Original articles:**

- https://www.reddit.com/r/ArchiCAD/comments/1re7dmz/i_built_an_ai_coding_agent_for_revit_would/
- https://www.reddit.com/r/ArchiCAD/comments/1u3yr2q/anyone_using_claude_code_to_automate_archicadbim/
- https://www.reddit.com/r/ArchiCAD/comments/1v9vz4q/archihub_repository_for_archicad_tools/
- https://www.reddit.com/r/ArchiCAD/comments/180qqh3/ai_results/

## 8. AI floor plans: not production-ready yet, according to Reddit

According to Reddit, generating complete floor plans with AI does not work reliably today. One floor-plan generator was sharply criticized in r/floorplan, among other things because the toilet was placed in the shower. Routine work, on the other hand, works well: creating sheets, dimensioning, labeling, generating schedules. One architect wrote, in essence: "Drawing the floor plan is not the part I want to get rid of."

**Original articles:**

- https://www.reddit.com/r/floorplan/comments/1uinvuk/built_a_ai_floor_plan_generator_over_the_weekends/
- https://www.reddit.com/r/Architects/comments/1m3erff/architects_of_reddit_what_would_you_actually_want/

## Bonus: Tab, an AI assistant for messaging apps

Tab is an AI assistant in iMessage and WhatsApp that books flights, makes calls and handles payments via text message. The company emerged from stealth mode at a valuation of around $300 million; investors include SV Angel and Valar Ventures. The assistant has its own phone number, computer and **wallet** (digital purse); spending happens only with users' approval. This is based on a summary from X News (as of around October 7, 2026).

**Original article:** <https://x.com/i/trending/2107896357079965855>

## Sources

- [rea.tools – REA website, calculator/dino/website examples](https://rea.tools/)
- [GitHub morluto/rea – README, setup, showcases, MCP/CLI](https://github.com/morluto/rea)
- [Reddit r/civilengineering – CAD generator using AI?](https://www.reddit.com/r/civilengineering/comments/1o5iue4/cad_generator_using_ai/)
- [bimy.ai – Floor plan to BIM/IFC](https://bimy.ai/)
- [Forward Future – Architects tools (Spell listed)](https://forwardfuture.com/tools/profession/architects-tools)
- [Forward Future – Spell (image to 3D world)](https://forwardfuture.com/tools/details/spell)
- [Forward Future – Real estate tools (BuildFloorPlan)](https://forwardfuture.com/tools/industry/real-estate-tools)
- [buildfloorplan.com – Text/sketch/image to floor plan](https://buildfloorplan.com/)
- [Forward Future – Gen3D (image/text to 3D and CAD geometry)](https://forwardfuture.com/tools/details/gen3d)
- [Reddit r/RevitForum – Revit 2027 AI feature](https://www.reddit.com/r/RevitForum/comments/1sfnbag/revit_2027s_new_ai_feature/)
- [Reddit r/RevitForum – Assistant prompts](https://www.reddit.com/r/RevitForum/comments/1sfynma/what_prompts_have_you_successfully_used_in_revit/)
- [Reddit r/Revit – AI BIM](https://www.reddit.com/r/Revit/comments/1fgmtp5/ai_bim/)
- [Reddit r/Autodesk_AutoCAD – AI for AutoLISP](https://www.reddit.com/r/Autodesk_AutoCAD/comments/1w0vpbz/wie_kent_er_een_goede_ai_generator_die_kan_helpen/)
- [Reddit r/Autodesk_AutoCAD – AI controls AutoCAD (MCP servers)](https://www.reddit.com/r/Autodesk_AutoCAD/comments/1vsjc8h/let_your_ai_claude_codex_chatgpt_cursor_etc_use/)
- [Reddit r/Autodesk_AutoCAD – AI blocks, DXF](https://www.reddit.com/r/Autodesk_AutoCAD/comments/1vtsqs9/aiautocad/)
- [Reddit r/LocalLLM – DWG/DXF via AI](https://www.reddit.com/r/LocalLLM/comments/1umfw53/generating_autocad_dwgdxf_files_with_a_local_llm/)
- [Reddit r/ArchiCAD – AI agent, API limits, Tapir](https://www.reddit.com/r/ArchiCAD/comments/1re7dmz/i_built_an_ai_coding_agent_for_revit_would/)
- [Reddit r/ArchiCAD – Claude Code, Tapir, MCP](https://www.reddit.com/r/ArchiCAD/comments/1u3yr2q/anyone_using_claude_code_to_automate_archicadbim/)
- [Reddit r/ArchiCAD – archiHub (Python, GDL with AI)](https://www.reddit.com/r/ArchiCAD/comments/1v9vz4q/archihub_repository_for_archicad_tools/)
- [Reddit r/ArchiCAD – AI Visualizer](https://www.reddit.com/r/ArchiCAD/comments/180qqh3/ai_results/)
- [Reddit r/floorplan – AI floor plans, criticism](https://www.reddit.com/r/floorplan/comments/1uinvuk/built_a_ai_floor_plan_generator_over_the_weekends/)
- [Reddit r/Architects – What architects want from AI (routine work)](https://www.reddit.com/r/Architects/comments/1m3erff/architects_of_reddit_what_would_you_actually_want/)
- [X News – Tab (messaging AI)](https://x.com/i/trending/2107896357079965855)
