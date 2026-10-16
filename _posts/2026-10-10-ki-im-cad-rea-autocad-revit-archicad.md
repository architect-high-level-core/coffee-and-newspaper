---
layout: post
title: "KI im CAD: Was REA kann, was KI-Werkzeuge für Grundrisse leisten und wie Reddit die KI in Revit, AutoCAD und ArchiCAD bewertet"
date: 2026-10-10
tags: [KI, CAD, KI-Agenten, MCP, Revit, AutoCAD, ArchiCAD, Reddit]
image: /assets/img/2026-10-10-bauplan.jpg
image_alt: "Historischer Bauplan mit der Ansicht einer Gebäudefassade"
image_credit: "Bild: Alice Trythall Washburn, „Blueprint of elevation“, gemeinfrei (Public Domain), via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Blueprint_of_elevation_by_Alice_Trythall_Washburn.jpg"
image_license: "Public Domain"
image_license_url: "https://commons.wikimedia.org/wiki/File:Blueprint_of_elevation_by_Alice_Trythall_Washburn.jpg"
---

KI kann im CAD inzwischen Skripte schreiben, Pläne beschriften und Programme fernsteuern, ganze Grundrisse aber noch nicht zuverlässig entwerfen. Dieser Überblick fasst zusammen, was das Analysewerkzeug REA kann, welche KI-Werkzeuge für Grundrisse es gibt und wie Reddit-Nutzer die KI-Funktionen von Revit, AutoCAD und ArchiCAD bewerten.

**Begriffe vorab:** **CAD** (Computer-Aided Design) heißt computerunterstütztes Zeichnen und Konstruieren. **MCP** (Model Context Protocol) ist ein Stecker-Standard, über den eine KI externe Werkzeuge und Programme nutzen kann. Ein **KI-Agent** ist ein Programm, das selbstständig mehrere Schritte erledigt.

**Hinweis:** Die Reddit-Aussagen sind Meinungen von Nutzern. Sie stützen sich teilweise auf öffentliche Such-Snippets, nicht auf den vollständigen Thread-Text.

## 1. Was REA ist und was nicht

REA steht für „Reverse Engineer Anything“. Es ist ein Werkzeug-Paket für Coding-Agenten: Es gibt der KI Werkzeuge, um Programme zu untersuchen, ohne deren Quellcode zu haben. Dazu gehören fertige Programmdateien (**Binaries**, also die lauffähigen Dateien, die der Computer ausführt), JavaScript- und Electron-Apps, .NET-Programme, Websites und das Verhalten laufender Programme.

Die Anbindung läuft über MCP oder über die **CLI** (Command Line Interface, also Texteingabe im Terminal). Die Analyse läuft lokal, und Ergebnisse kommen mit Belegen und Grenzen. Für tiefe Analysen nativer Programme sind optional Hopper, Ghidra oder IDA nötig. REA ist kein CAD- oder Grundriss-Programm und zeichnet keine Pläne.

**Originaltexte:**

- https://rea.tools/
- https://github.com/morluto/rea

## 2. Anwendungsbeispiele für REA

Aus Dokumentation und Community:

- **Windows-Rechner:** Warum ergibt 200 + 10 % = 220? REA liefert den zuständigen Code und Belege; der Agent erklärt die Regel und kann einen kleinen Nachbau mit %-Taste erstellen.
- **Browser-Dino-Spiel:** Die Geschwindigkeitsregel aus dem laufenden Skript lesen und ein Mini-Spiel mit Geschwindigkeitsregler nachbauen.
- **Website klonen:** Eine Seite inspizieren und nachbauen lassen.
- **Weitere Beispiele:** die Stereo-Berechnung aus DX-Ball rekonstruieren, die Zwischenablage-Brücke in Notion (Electron) nachverfolgen, eine Geschoss-Berechnung aus einem alten DOS-Spiel wiederherstellen.

Kurz: REA macht die Frage „Wie funktioniert diese Funktion?“ lokal und mit Belegen beantwortbar.

**Originaltexte:**

- https://rea.tools/
- https://github.com/morluto/rea

## 3. Reddit: Kann KI CAD-Zeichnungen erzeugen?

Im Thread „CAD generator using AI?“ in r/civilengineering ging es darum, Beschreibungen wie „10×10-Raum mit Tür an der Nordwand“ von einer KI in **LISP** (eine Skriptsprache für AutoCAD) übersetzen zu lassen.

- **Vorschlag aus der Community:** CadQuery (eine Python-Bibliothek für parametrische Volumenkörper) plus Claude oder ChatGPT, das das Skript schreibt; daraus eine **STEP-Datei** (ein 3D-Austauschformat) erzeugen und z. B. in Fusion 360 importieren. Vorteil: echte parametrische Körper statt reiner Dreiecksnetze.
- **AutoCAD-API plus LISP** gilt als sinnvoller Weg für 2D-Grundrisse und Layouts.
- **Einspruch:** Ein vollautomatisches 3D-CAD-Produkt bleibt sehr schwer; Kombinationen mit Sprachmodellen brauchen oft Wochen und Nacharbeit. Der Weg von 3D zu 2D ist leichter als reine Generierung. Ein Kommentator berichtet, seine Software entwerfe in einer Minute, was früher eine Woche brauchte.

**Originaltext:** <https://www.reddit.com/r/civilengineering/comments/1o5iue4/cad_generator_using_ai/>

## 4. KI-Werkzeuge für Grundrisse und 3D-Modelle

- **BIMy.ai** wandelt Grundriss-Bilder oder PDFs in etwa einer Minute in **BIM/IFC** um (BIM = Building Information Modeling, digitale Gebäudemodelle mit Bauinformationen; IFC = offenes Austauschformat dafür) und kann Richtung Revit gehen.
- **Spell (by Spline)**, im Forward-Future-Verzeichnis unter „Architects tools“: macht aus einem Bild eine erkundbare 3D-Szene (u. a. mit **Gaussian Splatting**, einer Technik zur 3D-Darstellung aus Bildern). Gut für frühe Visualisierung, aber kein produktionsreifes CAD-Modell.
- **BuildFloorPlan**, unter Real-Estate-Tools: KI-Grundrisse aus Text, Skizzen, Bildern oder PDFs, als 2D, 2.5D oder im 3D-Stil. Laut Anbieter für frühe Entwürfe und Layout-Vergleiche, kein Ersatz für genehmigungsfähige Bauzeichnungen.
- **Gen3D:** macht aus Bildern oder Text 3D-Modelle im Browser und editierbare CAD-Geometrie, typischerweise in 1–2 Minuten.

**Originaltexte:**

- https://bimy.ai/
- https://forwardfuture.com/tools/details/spell
- https://forwardfuture.com/tools/profession/architects-tools
- https://buildfloorplan.com/
- https://forwardfuture.com/tools/industry/real-estate-tools
- https://forwardfuture.com/tools/details/gen3d

## 5. Revit: KI-Assistent in einer frühen Phase

Den neuen „Autodesk Assistant“ in Revit 2027 beschreiben Reddit-Nutzer als frühe Vorschau. Er kann Ansichten und Pläne anlegen, sie auf Blätter setzen und Massenänderungen vornehmen, etwa alle Fliesenböden in Laminat ändern. Ein Nutzer berichtet aber, die KI habe behauptet, Wände kopiert zu haben, obwohl im Modell nichts passiert war. Weitere Kritik: Sie läuft nicht lokal, kann nichts umbenennen und wirkt „anämisch“.

Für Automatisierung empfehlen Nutzer die **Revit API** (offizielle Programmierschnittstelle), meist über **Dynamo**, ein visuelles Skript-Werkzeug. Das Dateiformat RVT gilt als **proprietär** (es gehört dem Hersteller und ist nicht öffentlich beschrieben).

**Originaltexte:**

- https://www.reddit.com/r/RevitForum/comments/1sfnbag/revit_2027s_new_ai_feature/
- https://www.reddit.com/r/RevitForum/comments/1sfynma/what_prompts_have_you_successfully_used_in_revit/
- https://www.reddit.com/r/Revit/comments/1fgmtp5/ai_bim/

## 6. AutoCAD: KI schreibt Skripte, MCP-Server steuern das Programm

**AutoLISP** ist die eingebaute Skriptsprache von AutoCAD. Laut Reddit schreibt „fast jede KI“ solche Skripte, allerdings selten beim ersten Versuch fehlerfrei; Fehlermeldungen müsse man wörtlich an die KI zurückgeben. Mehrere MCP-Server erlauben KI-Assistenten wie Claude oder ChatGPT, ein offenes AutoCAD direkt zu bedienen (z. B. autocad-mcp auf GitHub, CADbridge). Für KI-erzeugte Zeichnungen raten Nutzer zu **DXF**, einer offeneren Textvariante des DWG-Formats.

Das Echo auf KI-Ergebnisse ist gemischt bis ablehnend: Ein Nutzer nennt KI-erzeugte Blöcke „schlecht“, ein anderer ist selbst schneller, ein dritter verweist auf fehlendes räumliches Verständnis der Modelle.

**Originaltexte:**

- https://www.reddit.com/r/Autodesk_AutoCAD/comments/1w0vpbz/wie_kent_er_een_goede_ai_generator_die_kan_helpen/
- https://www.reddit.com/r/Autodesk_AutoCAD/comments/1vsjc8h/let_your_ai_claude_codex_chatgpt_cursor_etc_use/
- https://www.reddit.com/r/Autodesk_AutoCAD/comments/1vtsqs9/aiautocad/
- https://www.reddit.com/r/LocalLLM/comments/1umfw53/generating_autocad_dwgdxf_files_with_a_local_llm/

## 7. ArchiCAD: KI-Begleiter im Abo, Automatisierung über Tapir

Seit Version 29 hat ArchiCAD einen eingebauten KI-Begleiter, allerdings nur im Abo, dazu den „AI Visualizer“ für Bilder und Renderings. Für Automatisierung empfehlen Nutzer **Tapir**, ein **Open-Source**-Zusatzprogramm (kostenlos, mit offenem Code), das die Schnittstelle über Python und JSON zugänglich macht und einen MCP-Server mitbringt. Kritik: Die offizielle Schnittstelle sei eingeschränkt, und einen offiziellen KI-Anschluss gebe es nicht.

Ein Nutzer, der an einem KI-Zeichenassistenten arbeitet, nennt seine bisherigen Ergebnisse „nicht gut“. Ein anderer bekam mit ChatGPT Notizen und Bemaßungen in einen Wandschnitt, beschreibt das aber als langsam und teuer.

**Originaltexte:**

- https://www.reddit.com/r/ArchiCAD/comments/1re7dmz/i_built_an_ai_coding_agent_for_revit_would/
- https://www.reddit.com/r/ArchiCAD/comments/1u3yr2q/anyone_using_claude_code_to_automate_archicadbim/
- https://www.reddit.com/r/ArchiCAD/comments/1v9vz4q/archihub_repository_for_archicad_tools/
- https://www.reddit.com/r/ArchiCAD/comments/180qqh3/ai_results/

## 8. KI-Grundrisse: laut Reddit noch nicht produktionsreif

Ganze Grundrisse per KI zu erzeugen, klappt laut Reddit heute nicht zuverlässig. Ein Grundriss-Generator wurde in r/floorplan scharf kritisiert, unter anderem weil die Toilette in der Dusche stand. Gut funktioniert dagegen Routinearbeit: Planblätter anlegen, bemaßen, beschriften, Listen erstellen. Ein Architekt schrieb sinngemäß: „Den Grundriss zu zeichnen ist nicht das, was ich loswerden will.“

**Originaltexte:**

- https://www.reddit.com/r/floorplan/comments/1uinvuk/built_a_ai_floor_plan_generator_over_the_weekends/
- https://www.reddit.com/r/Architects/comments/1m3erff/architects_of_reddit_what_would_you_actually_want/

## Bonus: Tab, ein KI-Assistent für Messenger

Tab ist ein KI-Assistent in iMessage und WhatsApp, der per Textnachricht Flüge bucht, Anrufe erledigt und Zahlungen ausführt. Das Unternehmen kam mit einer Bewertung von rund 300 Mio. US-Dollar aus dem Stealth-Modus; Investoren sind u. a. SV Angel und Valar Ventures. Der Assistent hat eigene Telefonnummer, Computer und **Wallet** (digitale Geldbörse); Ausgaben erfolgen nur mit Freigabe der Nutzer. Grundlage ist eine Zusammenfassung aus X-News (Stand ca. 7.10.2026).

**Originaltext:** <https://x.com/i/trending/2107896357079965855>

## Quellen

- [rea.tools – REA-Website, Beispiele Rechner/Dino/Website](https://rea.tools/)
- [GitHub morluto/rea – README, Setup, Showcases, MCP/CLI](https://github.com/morluto/rea)
- [Reddit r/civilengineering – CAD generator using AI?](https://www.reddit.com/r/civilengineering/comments/1o5iue4/cad_generator_using_ai/)
- [bimy.ai – Grundriss zu BIM/IFC](https://bimy.ai/)
- [Forward Future – Architects tools (Spell gelistet)](https://forwardfuture.com/tools/profession/architects-tools)
- [Forward Future – Spell (Bild zu 3D-Welt)](https://forwardfuture.com/tools/details/spell)
- [Forward Future – Real Estate tools (BuildFloorPlan)](https://forwardfuture.com/tools/industry/real-estate-tools)
- [buildfloorplan.com – Text/Skizze/Bild zu Grundriss](https://buildfloorplan.com/)
- [Forward Future – Gen3D (Bild/Text zu 3D und CAD-Geometrie)](https://forwardfuture.com/tools/details/gen3d)
- [Reddit r/RevitForum – Revit 2027 KI-Funktion](https://www.reddit.com/r/RevitForum/comments/1sfnbag/revit_2027s_new_ai_feature/)
- [Reddit r/RevitForum – Assistant-Prompts](https://www.reddit.com/r/RevitForum/comments/1sfynma/what_prompts_have_you_successfully_used_in_revit/)
- [Reddit r/Revit – AI BIM](https://www.reddit.com/r/Revit/comments/1fgmtp5/ai_bim/)
- [Reddit r/Autodesk_AutoCAD – KI für AutoLISP](https://www.reddit.com/r/Autodesk_AutoCAD/comments/1w0vpbz/wie_kent_er_een_goede_ai_generator_die_kan_helpen/)
- [Reddit r/Autodesk_AutoCAD – KI steuert AutoCAD (MCP-Server)](https://www.reddit.com/r/Autodesk_AutoCAD/comments/1vsjc8h/let_your_ai_claude_codex_chatgpt_cursor_etc_use/)
- [Reddit r/Autodesk_AutoCAD – KI-Blöcke, DXF](https://www.reddit.com/r/Autodesk_AutoCAD/comments/1vtsqs9/aiautocad/)
- [Reddit r/LocalLLM – DWG/DXF per KI](https://www.reddit.com/r/LocalLLM/comments/1umfw53/generating_autocad_dwgdxf_files_with_a_local_llm/)
- [Reddit r/ArchiCAD – KI-Agent, API-Grenzen, Tapir](https://www.reddit.com/r/ArchiCAD/comments/1re7dmz/i_built_an_ai_coding_agent_for_revit_would/)
- [Reddit r/ArchiCAD – Claude Code, Tapir, MCP](https://www.reddit.com/r/ArchiCAD/comments/1u3yr2q/anyone_using_claude_code_to_automate_archicadbim/)
- [Reddit r/ArchiCAD – archiHub (Python, GDL mit KI)](https://www.reddit.com/r/ArchiCAD/comments/1v9vz4q/archihub_repository_for_archicad_tools/)
- [Reddit r/ArchiCAD – AI Visualizer](https://www.reddit.com/r/ArchiCAD/comments/180qqh3/ai_results/)
- [Reddit r/floorplan – KI-Grundrisse, Kritik](https://www.reddit.com/r/floorplan/comments/1uinvuk/built_a_ai_floor_plan_generator_over_the_weekends/)
- [Reddit r/Architects – KI-Wünsche (Routinearbeit)](https://www.reddit.com/r/Architects/comments/1m3erff/architects_of_reddit_what_would_you_actually_want/)
- [X News – Tab (Messaging-KI)](https://x.com/i/trending/2107896357079965855)
