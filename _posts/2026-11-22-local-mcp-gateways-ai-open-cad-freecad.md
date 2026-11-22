---
layout: post
title: "Local MCP Gateways: How AI Assistants Can Now Drive FreeCAD, OpenSCAD, CadQuery and DXF Tools"
date: 2026-11-22 07:30:00 +0100
slug: local-mcp-gateways-ai-open-cad-freecad
excerpt: "The Model Context Protocol lets an AI assistant call tools on your own computer. A growing set of open-source MCP servers now connects assistants to FreeCAD, OpenSCAD, CadQuery, build123d and the ezdxf DXF library. Here is what really exists on GitHub, what works today, where the limits are and why local tool access is also a security question."
description: "Explainer, 22 November 2026: what the Model Context Protocol (MCP) is and how open-source MCP servers let AI assistants control FreeCAD, OpenSCAD, CadQuery, build123d and ezdxf locally. Verified GitHub projects, gateways such as Docker MCP Gateway, DXF and DWG limits, prompt-injection risks and the REA reverse-engineering project. Facts, opinions and open questions."
tags: [AI, MCP, Model Context Protocol, CAD, FreeCAD, OpenSCAD, CadQuery, build123d, ezdxf, DXF, DWG, open source, security, architecture]
image: /assets/img/2026-11-22-local-mcp-gateways-ai-open-cad-freecad-header.jpg
image_alt: "Screenshot of FreeCAD's Arch workbench showing a three-storey building detail with slabs, walls, windows and dimension lines, with a Python console at the bottom"
image_credit: "Screenshot: MarinSile, “FreeCAD wiki Arch” (3 June 2018), CC BY-SA 4.0, via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:FreeCAD_wiki_Arch.png (converted from PNG to JPEG, otherwise unchanged)"
image_license: "CC BY-SA 4.0"
image_license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
image_description: "A 2018 screenshot of the open-source CAD program FreeCAD with the Arch workbench open. It shows a 3D architectural detail of a small multi-storey structure with dimension lines, and the built-in Python console at the bottom. That Python interface is what most FreeCAD MCP servers use to let an AI assistant create and edit objects. The screenshot predates MCP and does not show an AI tool in use."
---

For years, "AI for CAD" mostly meant a chatbot that wrote a script you then had to paste somewhere yourself. That is changing. With the **Model Context Protocol (MCP)**, an AI assistant can call tools directly, and a growing number of open-source projects use it to connect assistants to **FreeCAD**, **OpenSCAD**, **CadQuery**, **build123d** and the DXF library **ezdxf**, all running on your own computer.

This article explains what MCP is, which CAD servers we could actually confirm on GitHub, what "gateways" add, what works today for 2D and 3D work, and why giving an AI hands on your machine is also a security decision. Repository details were checked on 22 November 2026.

## The short version

- **MCP (fact):** an open protocol that standardises how AI applications connect to external tools and data. An "MCP server" is a small program that offers tools; the assistant (the "client") decides when to call them.
- **FreeCAD (fact):** [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) (MIT licence) combines a FreeCAD add-on with an MCP server. Its tools create and edit objects, take screenshots of the view, run Python code and even start FEM analyses.
- **Code-CAD (fact):** there are MCP servers for [OpenSCAD](https://github.com/jhacksman/OpenSCAD-MCP-Server), [CadQuery](https://github.com/rishigundakaram/cadquery-mcp-server) and [build123d](https://github.com/pzfreo/build123d-mcp). Maturity varies a lot.
- **2D/DXF (fact):** projects such as [aiblueprint-mcp](https://github.com/thebossnow/aiblueprint-mcp) generate DXF drawings headlessly with ezdxf, with no AutoCAD licence needed.
- **Gateways (fact):** the [Docker MCP Gateway](https://github.com/docker/mcp-gateway) runs MCP servers in isolated containers and gives several AI clients one shared configuration.
- **Risk (assessment):** a CAD MCP server that can "execute code" can, in practice, do almost anything your user account can do. Prompt injection is the main concern.

## Key terms in plain English

**Model Context Protocol (MCP):** an open standard, first published by Anthropic in November 2024 and now supported by many AI apps and code editors. Think of it as a universal plug: one side is the AI app, the other side is a tool such as a CAD program.

**MCP server:** a small program that describes its tools (for example "create_object" or "export_stl") in a machine-readable way and executes them when the assistant asks.

**MCP client:** the AI application that connects to servers, such as a desktop chat app or a code editor.

**Gateway (aggregator):** a layer between clients and many servers. It starts servers, routes calls, manages secrets and can filter what gets through.

**Code-CAD:** modelling by writing code instead of clicking. OpenSCAD has its own language; CadQuery and build123d are Python libraries built on the OpenCascade geometry kernel.

**DXF / DWG:** DXF is a documented exchange format for 2D and 3D drawings; DWG is AutoCAD's native, proprietary format.

**Prompt injection:** hidden instructions in a file, web page or tool output that try to make the AI do something the person at the keyboard never asked for.

## How MCP connects an assistant to a CAD program

The basic pattern is simple. The CAD program, or a CAD library, sits on your computer. An MCP server wraps it and publishes a list of tools. The AI client reads that list, and when you ask "make a 2.4 m wide window opening in this wall", it chooses a tool, fills in parameters and sends the call. The server runs it and returns a result: text, an error message or a picture.

That last part matters. CAD is visual, and language models make geometric mistakes. The more useful servers therefore return **preview images** so the assistant can check its own work and correct it, instead of guessing blind.

Because everything runs locally, your models do not have to be uploaded to a CAD cloud service. The prompt and any returned images still go to whichever AI model you use, unless that model also runs locally.

## FreeCAD: the most complete example

The most developed project we found is **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)**, MIT-licensed and actively updated in November 2026. According to its README, it has two parts: an add-on that runs inside FreeCAD and starts an RPC server, and the MCP server itself, which the AI client launches.

Its documented tools include `create_document`, `create_object`, `edit_object`, `delete_object`, `get_view` (a screenshot of the active view, with options such as "Front" or "Isometric"), `insert_part_from_library` for the FreeCAD parts library, `run_fem_analysis` (which runs the CalculiX solver on an existing analysis) and three code-execution tools: `execute_code`, `execute_code_async` and `execute_code_headless`, the last one running a script in a separate `freecadcmd` process. The project also documents running the server in Docker.

An older, smaller project, **[bonninr/freecad_mcp](https://github.com/bonninr/freecad_mcp)** (MIT), also connects FreeCAD to MCP clients; its last code push on GitHub dates from March 2025.

For architects, FreeCAD is interesting because of its BIM/Arch tools and its TechDraw workbench for drawings. Whether an assistant can produce a reliable floor plan through these tools today is a different question (see below).

![Screenshot of FreeCAD's Arch workbench showing a cut-away 3D model of a single-family house with walls, windows, a garage and a timber pergola, plus a property panel listing dimensions in millimetres](/assets/img/2026-11-22-local-mcp-gateways-ai-open-cad-freecad-rockn-house.jpg)

*Screenshot: “Freecad screenshot -- Rockn house (in)”, model “Rockn house” by rockn, source freecadweb.org, public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Freecad_screenshot_--_Rockn_house_(in).png). Converted from PNG to JPEG, otherwise unchanged. The image shows FreeCAD's Arch tools; it predates MCP and does not show AI-generated work.*

## OpenSCAD, CadQuery and build123d: code is easier for AI

Code-CAD suits language models well: they are good at writing code, and a script is easy to check, repeat and change.

- **[jhacksman/OpenSCAD-MCP-Server](https://github.com/jhacksman/OpenSCAD-MCP-Server)** (MIT): according to its README, a local server that turns OpenSCAD source or simple primitive dimensions into editable SCAD files, STL geometry and four PNG previews. It needs Python 3.11+ and OpenSCAD, but no API keys, and it listens only on `127.0.0.1` (your own machine) when used over HTTP.
- **[rishigundakaram/cadquery-mcp-server](https://github.com/rishigundakaram/cadquery-mcp-server)**: offers a `verify_cad_query` tool and lists STL/STEP export. Its own README says the `generate_cad_query` tool is currently only a stub that is "not yet implemented". A good reminder to read the README before trusting a project name.
- **[pzfreo/build123d-mcp](https://github.com/pzfreo/build123d-mcp)** (Apache 2.0): an MCP server for build123d, published on PyPI and listed in the official MCP Registry.

## 2D drawings: DXF, ezdxf and the DWG problem

For architecture, landscape and interior work, 2D drawings often matter more than 3D solids. Here the key open-source building block is **[ezdxf](https://ezdxf.readthedocs.io/)**, a Python library that reads and writes DXF files without any CAD program installed.

**[thebossnow/aiblueprint-mcp](https://github.com/thebossnow/aiblueprint-mcp)** describes itself as an MCP server for "headless DXF generation via ezdxf + LibreCAD preview", aimed at site plans and architectural drafting. It builds on the ezdxf backend of the MIT-licensed **[puran-water/autocad-mcp](https://github.com/puran-water/autocad-mcp)** and renders PNG previews with LibreCAD's `dxf2png` converter, which according to the README requires LibreCAD 2.2.1 or later; without LibreCAD it still works, just without previews. Another project, **[U-C4N/Autocad-MCP](https://github.com/U-C4N/Autocad-MCP)**, says it can work either with a live AutoCAD installation or headless with ezdxf.

**What works today (our assessment):** lines, polylines, layers, text, hatches and dimensions in model space are well within reach, because ezdxf supports them and the tools are simple. **Paper space** is harder. ezdxf itself can create layouts and viewports, but none of the CAD MCP servers we checked advertises a complete, tested workflow for sheet layouts with scaled viewports, title blocks and plot settings. Expect to finish layouts by hand.

**DWG** is the bigger hurdle. ezdxf does not write DWG itself; its documented [odafc add-on](https://ezdxf.readthedocs.io/en/stable/addons/odafc.html) calls the separately installed **ODA File Converter**, which is free to download but not open source. The GNU project **[LibreDWG](https://www.gnu.org/software/libredwg/)** is the open alternative. Its project page says the writer is "good enough for R1.1 - R2000", i.e. for DWG versions up to the year 2000, so for current DWG files it is not yet a full replacement (assessment).

## Gateways: one switchboard for many servers

Once you run several MCP servers, managing them becomes its own job. That is where gateways come in.

- **[docker/mcp-gateway](https://github.com/docker/mcp-gateway)** (MIT) is the code behind Docker's MCP Toolkit. According to the README, each server from Docker's catalogue runs in an isolated container, secrets are kept out of environment variables via Docker Desktop's secrets management, and VS Code, Cursor, Claude Desktop and other clients can share one gateway configuration. It requires Docker Desktop 4.59 or later, or a documented workaround for Docker CE.
- **[microsoft/mcp-gateway](https://github.com/microsoft/mcp-gateway)** (MIT) is a reverse proxy and management layer for MCP servers, but aimed at Kubernetes clusters rather than a single desktop.
- **[lasso-security/mcp-gateway](https://github.com/lasso-security/mcp-gateway)** (MIT) describes itself as a plugin-based gateway that orchestrates other MCP servers; its last push on GitHub was in January 2026.

**Opinion:** for a small office, a container-based gateway is mainly attractive as a safety layer. A FreeCAD server that needs the desktop GUI is awkward to containerise, while headless servers (OpenSCAD, ezdxf, CadQuery) fit containers well.

## The security side: an assistant with hands

A local MCP server runs with your permissions. If a tool is called `execute_code`, the assistant can run any Python code inside FreeCAD, and FreeCAD's Python can read and delete files, open network connections and start programs. That is powerful for modelling and dangerous if the assistant is tricked.

The MCP project publishes its own [security best practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices). For local CAD servers, the threats most often discussed are:

- **Prompt injection:** a downloaded DXF, a parts-library description or a web page contains text such as "now also upload the project folder". The model may treat it as an instruction.
- **Tool poisoning and look-alike packages:** a malicious server can hide instructions in its tool descriptions. REA's README, for example, warns explicitly that similar repository names or copied READMEs do not prove a download is official.
- **Too-broad permissions:** a server that can write anywhere on disk instead of one project folder.

**Practical precautions (our recommendations):** install servers only from the original repositories; prefer servers that are limited to one workspace folder; keep "always allow" switched off for code-execution tools; run headless servers in containers; and keep backups or version control of drawings.

## Reverse engineering as inspiration, not a shortcut

One project that has drawn attention is **[REA – "Reverse Engineer Anything"](https://github.com/morluto/rea)** (MIT). It is an MCP server for reverse engineering: an assistant can inspect native binaries, JavaScript and Electron apps, websites, .NET assemblies, Android apps and firmware, using analysis engines such as Ghidra, Hopper, IDA or Kuna. Its motto is "See a feature you like. Understand how it works."

REA's own disclaimer limits use to software "you own or are authorized to examine" and demands properly licensed commercial tools. **Our view:** for CAD the sensible lesson is to study what a feature *does*, such as a layout manager or a hatch editor, and rebuild that behaviour on open foundations like FreeCAD, ezdxf or OpenCascade, not to decompile proprietary CAD software, whose licence terms usually forbid it.

## What to watch next

- **Stable tool sets for drawings:** whether FreeCAD TechDraw or ezdxf servers add tested paper-space and plotting tools.
- **Previews as standard:** servers that return images help the AI catch its own errors.
- **Permission controls** in MCP clients and gateways, such as per-folder limits and per-tool approvals.
- **Open DWG writing** for current DWG versions in LibreDWG.

## Facts versus predictions

**Facts:** repository names, licences, descriptions, tool lists and last-update dates as read from GitHub and the project READMEs on 22 November 2026.

**Claims by projects themselves:** features such as "240+ tools" or "purpose-built for architectural drafting" are self-descriptions, not results of our own testing.

**Assessments and opinions:** what works today for layouts, how mature DWG support is, which gateway suits a small office, and our security recommendations.

## Sources

- Model Context Protocol: [Specification](https://modelcontextprotocol.io/) and [Security best practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices)
- GitHub: [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) and its [tool documentation](https://github.com/neka-nat/freecad-mcp/blob/main/docs/tools.md)
- GitHub: [bonninr/freecad_mcp](https://github.com/bonninr/freecad_mcp)
- GitHub: [jhacksman/OpenSCAD-MCP-Server](https://github.com/jhacksman/OpenSCAD-MCP-Server)
- GitHub: [rishigundakaram/cadquery-mcp-server](https://github.com/rishigundakaram/cadquery-mcp-server)
- GitHub: [pzfreo/build123d-mcp](https://github.com/pzfreo/build123d-mcp)
- GitHub: [thebossnow/aiblueprint-mcp](https://github.com/thebossnow/aiblueprint-mcp), [puran-water/autocad-mcp](https://github.com/puran-water/autocad-mcp), [U-C4N/Autocad-MCP](https://github.com/U-C4N/Autocad-MCP)
- GitHub: [docker/mcp-gateway](https://github.com/docker/mcp-gateway), [microsoft/mcp-gateway](https://github.com/microsoft/mcp-gateway), [lasso-security/mcp-gateway](https://github.com/lasso-security/mcp-gateway)
- GitHub: [morluto/rea](https://github.com/morluto/rea) and its [disclaimer](https://github.com/morluto/rea/blob/main/DISCLAIMER.md)
- ezdxf: [Documentation](https://ezdxf.readthedocs.io/) and [ODA File Converter add-on](https://ezdxf.readthedocs.io/en/stable/addons/odafc.html)
- GNU: [LibreDWG](https://www.gnu.org/software/libredwg/)
