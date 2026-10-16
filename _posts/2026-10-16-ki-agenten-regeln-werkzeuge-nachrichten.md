---
layout: post
title: "KI-Agenten zwischen Regeln und Werkzeugen: Amazons Agent Terms, Open-Source-Baukästen und neue KI-Nachrichten"
date: 2026-10-16
tags: [KI, KI-Agenten, MCP, Open Source, KI-Sicherheit, Forward Future]
image: /assets/img/2026-10-16-glasfaser.jpg
image_alt: "Leuchtende Glasfaserkabel in einer Museumsausstellung"
image_credit: "Foto: Syced, „Fujikura optic fiber at Science Museum“, CC0 (gemeinfrei), via Wikimedia Commons – https://commons.wikimedia.org/wiki/File:Fujikura_optic_fiber_at_Science_Museum.jpg"
image_license: "CC0 1.0"
image_license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
---

Große Plattformen ziehen Grenzen für KI-Agenten, während Open-Source-Werkzeuge das Bauen eigener Agenten immer leichter machen. Dieser Überblick fasst neue Regeln, verbreitete Agenten-Werkzeuge und aktuelle KI-Nachrichten aus Forward Future zusammen.

**Begriffe vorab:** Ein **KI-Agent** ist ein Programm mit KI, das selbstständig mehrere Schritte erledigt. Ein **Browser-Agent** steuert einen Webbrowser fern wie ein Mensch. **MCP** (Model Context Protocol) ist ein Standard-Stecker, über den eine KI externe Werkzeuge benutzen kann. **Scraping** heißt, dass ein Programm Webseiten automatisch ausliest. **Self-Hosting** bedeutet, Software selbst zu betreiben statt ein Abo zu nutzen.

## 1. Amazon: neue Regeln für KI-Agenten

Amazons Nutzungsbedingungen (Stand 14.08.2026) schließen ausdrücklich „data mining, robots, or similar data gathering and extraction tools“ aus. Neu sind die „Agent Terms“: KI-Agenten müssen sich im **User-Agent** (dem Browser-Kennzeichen) mit „Agent/Name“ ausweisen. Sie dürfen kein menschliches Verhalten vortäuschen, keine **CAPTCHAs** (Prüfaufgaben gegen Bots) umgehen und keine Sperren aushebeln. Viele Scraper und „Stealth“-Browser tun genau das. Amazons Software-Bedingungen verbieten außerdem Reverse Engineering von Amazon-Software.

Zur Einordnung: Im US-Fall Meta gegen Bright Data (Januar 2024) verstieß das Auslesen öffentlicher Daten ohne Login nicht gegen Metas Nutzungsbedingungen; Meta zog die Klage später zurück. Das ist ein Einzelfall nach US-Recht.

**Originaltexte:**

- https://www.amazon.com/gp/help/customer/display.html?nodeId=508088
- https://arstechnica.com/tech-policy/2024/01/facebook-suffers-big-loss-in-lawsuit-against-data-scraping-company/
- https://www.prnewswire.com/news-releases/meta-files-notice-to-drop-web-scraping-case-against-bright-data-302071400.html

## 2. Welche Agenten-Werkzeuge verbreitet sind

Bausteine mit großer Community (GitHub-Sterne, Stand 15.10.2026; **GitHub-Sterne** sind eine Art „Gefällt mir“ für Software-Projekte):

- **n8n** (≈207.000): visueller Baukasten für automatische Abläufe („wenn X, dann Y“), selbst hostbar. n8n bezeichnet sich als „Fair-Code“, nicht als klassisches Open Source.
- **browser-use** (≈118.000) und **Playwright-MCP** von Microsoft (≈38.000): Damit kann eine KI einen Browser steuern.
- **crawl4ai** (≈86.000) und **Scrapy** (≈65.000): verwandeln Webseiten in Daten, die eine KI lesen kann.
- **CrewAI** (≈60.000): Mehrere KI-„Mitarbeiter“ teilen sich eine Aufgabe, etwa ein Rechercheur und ein Analyst.
- **MCP-Server:** Der Datendienst Keepa bietet inzwischen einen eigenen MCP-Server für KI-Assistenten an.

Mit **Ollama** lassen sich KI-Modelle lokal ohne laufende Kosten betreiben; Cloud-Modelle kosten Gebühren pro Nutzung.

**Originaltexte:**

- https://github.com/n8n-io/n8n
- https://github.com/browser-use/browser-use
- https://github.com/microsoft/playwright-mcp
- https://github.com/unclecode/crawl4ai
- https://github.com/crewAIInc/crewAI
- https://keepa.com/api-docs/

## 3. Agenten unter Beobachtung: FTC und „Stealth“-Browser

Forward Future beschreibt den Trend, dass KI-Agenten zu „KI-Mitarbeitern“ werden, die man steuert. Gleichzeitig untersucht die US-Wettbewerbsbehörde **FTC** laut einem Bericht vom 01.10.2026 die Sicherheit von Agenten, die selbstständig surfen und handeln. Im Tool-Verzeichnis von Forward Future steht auch „Owl Browser“, ein selbst gehosteter „Stealth“-Browser für Agenten; sein Einsatz bei Amazon kollidiert mit den Agent Terms.

**Originaltexte:**

- https://forwardfuture.com/newsletter/daily/2026-10-01/ai-s-physical-singularity-openai-s-devday-strategy-ftc-scrutiny
- https://forwardfuture.com/tools/tag/browser-automation-tools

## 4. REA: Reverse Engineering mit KI-Agenten

REA („Reverse Engineer Anything“) hat laut GitHub über 264.000 Sterne, wurde am 15.10.2026 zuletzt aktualisiert und steht unter **MIT-Lizenz** (einer freizügigen Open-Source-Lizenz). Es verbindet KI-Agenten über MCP mit Analysewerkzeugen für Programmdateien, JavaScript- und Electron-Apps, .NET und Webseiten. Die Analyse läuft lokal; zu jedem Ergebnis legt REA Belege und Grenzen offen.

REA hilft, Funktionen zu verstehen, etwa wie eine Browser-Erweiterung grundsätzlich arbeitet. Daten, die auf fremden Servern liegen, lassen sich damit nicht „herausanalysieren“. Lizenzbedingungen kommerzieller Anbieter verbieten Reverse Engineering üblicherweise; bei Amazon-Software ist das Verbot belegt.

**Originaltext:** <https://github.com/morluto/rea>

## 5. Amazon sperrt fremde Shopping-Agenten

Amazon hat KI-Einkaufsagenten anderer Anbieter von seiner Seite ausgesperrt. Nick Wentz sieht darin in einem Gastbeitrag (13.10.2026) Amazons Schwachstelle: Ein künftiger Konkurrent brauche vielleicht keine Lager, sondern nur die Beziehung zwischen Kunde und Händler.

**Originaltext:** <https://forwardfuture.com/newsletter/originals/amazon-isn-t-afraid-of-ai-shopping-it-s-afraid-of-losing-the-customer>

## 6. JPMorgan sperrt fremde KI-Agenten aus Kundenkonten

Fremde Agenten dürfen sich laut Forward Future (15.10.2026) nicht mit Kunden-Zugangsdaten einloggen oder im Konto handeln. Kunden können aber über zugelassene Schnittstellen begrenzt Daten zum Lesen freigeben.

**Originaltext:** <https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking>

## 7. 420 Forscher wollen „hackerfähige“ KI vom Internet trennen

In einem offenen Brief fordern 420 Forscher, solche Modelle standardmäßig offline zu halten, bis bessere Schutzmaßnahmen existieren. Außerdem verlangen sie eine internationale Aufsichtsstelle.

**Originaltext:** <https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking>

## 8. KI beim Chip-Design: schnell, aber fehleranfällig

In einem neuen Test von NVIDIA und ChipAgents löste der beste KI-Agent nur 16,6 % der Aufgaben. Laut ChipAgents hat KI die typische Chip-Entwicklung trotzdem schon von mindestens zwei Jahren auf etwa ein Jahr verkürzt.

**Originaltext:** <https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking>

## 9. KI lernt, Leben zu entwerfen

Modelle wie Evo 2 lesen DNA wie Text und können lange Erbgut-Abschnitte analysieren (Bericht des Economist, via Forward Future). Kurzfristig geht es um bessere Medikamente, Proteine und Nutzpflanzen.

**Originaltext:** <https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking>

## 10. Anthropic bremst „Destillation“

Bei der **Destillation** fragt ein anderes Unternehmen ein starkes Modell millionenfach ab und trainiert mit den Antworten ein eigenes. Anthropic sagt, neue Schutzmaßnahmen hätten das um 90 bis 99 % reduziert. Der Preis: Manche echten Anfragen werden mit blockiert.

**Originaltext:** <https://forwardfuture.com/newsletter/daily/2026-10-14/anthropic-blocks-ai-theft-ai-adoption-gap-gemini-4-argon>

## 11. Selbst bauen oder kaufen?

Am Beispiel von Duolingo und Morgan Stanley argumentiert David Weinstein in einem Gastbeitrag (08.10.2026): Das KI-Modell selbst ist austauschbare Massenware. Der Vorteil liegt in dem System, das man darum herum baut.

**Originaltext:** <https://forwardfuture.com/newsletter/originals/the-build-vs-buy-trap-why-your-ai-strategy-should-look-more-like-r-d>

## 12. Neues Werkzeug: Alex's DaVinci Editing Skills

Anleitungen für KI-Agenten, mit denen sie im Videoschnittprogramm DaVinci Resolve Dialoge bereinigen, einen ersten Schnitt erstellen und Ton-Übergänge glätten.

**Originaltext:** <https://forwardfuture.com/alexs-davinci-editing-skills>

## Bonus: Apple und Meta bringen ein offenes Großmodell auf den Mac

Die langjährigen Rivalen haben gemeinsam Metas neues offenes KI-Modell „Muse Spark Open“ (816 Milliarden **Parameter**, also lernbare „Stellschrauben“) lokal auf zwei bis vier verbundenen Mac Studios mit M5-Ultra-Chips zum Laufen gebracht. Das Modell ist kostenlos herunterladbar und darf kommerziell genutzt werden (Axios, 15.10.2026).

**Originaltext:** <https://www.axios.com/technology/2026/10/15>

## Quellen

- [Amazon Conditions of Use – Verbot von Data-Mining, Agent Terms](https://www.amazon.com/gp/help/customer/display.html?nodeId=508088)
- [Ars Technica – Meta vs. Bright Data](https://arstechnica.com/tech-policy/2024/01/facebook-suffers-big-loss-in-lawsuit-against-data-scraping-company/)
- [PR Newswire – Meta zieht Klage zurück (Pressemitteilung von Bright Data)](https://www.prnewswire.com/news-releases/meta-files-notice-to-drop-web-scraping-case-against-bright-data-302071400.html)
- [n8n – Automatisierung, Fair-Code](https://github.com/n8n-io/n8n)
- [browser-use – Browser-Agenten](https://github.com/browser-use/browser-use)
- [Playwright-MCP – Browser-Steuerung über MCP](https://github.com/microsoft/playwright-mcp)
- [crawl4ai – Crawler für KI](https://github.com/unclecode/crawl4ai)
- [CrewAI – Teams aus mehreren Agenten](https://github.com/crewAIInc/crewAI)
- [Keepa API Docs – Token-Modell, MCP-Server](https://keepa.com/api-docs/)
- [Forward Future 01.10.2026 – FTC prüft KI-Agenten](https://forwardfuture.com/newsletter/daily/2026-10-01/ai-s-physical-singularity-openai-s-devday-strategy-ftc-scrutiny)
- [Forward Future Tools – Browser-Automatisierung, Owl Browser](https://forwardfuture.com/tools/tag/browser-automation-tools)
- [GitHub morluto/rea – REA: Funktionen, MCP, Sterne](https://github.com/morluto/rea)
- [Forward Future 13.10.2026 – Amazon sperrt Shopping-Agenten](https://forwardfuture.com/newsletter/originals/amazon-isn-t-afraid-of-ai-shopping-it-s-afraid-of-losing-the-customer)
- [Forward Future Daily 15.10.2026 – JPMorgan, offener Brief, Chip-Design, DNA-KI](https://forwardfuture.com/newsletter/daily/2026-10-15/ai-designing-life-smarter-chips-ai-agents-in-banking)
- [Forward Future Daily 14.10.2026 – Anthropic gegen Destillation](https://forwardfuture.com/newsletter/daily/2026-10-14/anthropic-blocks-ai-theft-ai-adoption-gap-gemini-4-argon)
- [Forward Future 08.10.2026 – Selbst bauen oder kaufen](https://forwardfuture.com/newsletter/originals/the-build-vs-buy-trap-why-your-ai-strategy-should-look-more-like-r-d)
- [Forward Future Tools – DaVinci Editing Skills](https://forwardfuture.com/alexs-davinci-editing-skills)
- [Axios 15.10.2026 – Apple und Meta, Muse Spark Open](https://www.axios.com/technology/2026/10/15)
