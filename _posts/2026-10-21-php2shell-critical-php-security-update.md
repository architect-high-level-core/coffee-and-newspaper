---
layout: post
title: "PHP2Shell: Why Today's Emergency PHP Update Matters for Millions of Websites"
date: 2026-10-21 16:45:00 +0200
tags: [PHP, security, PHP2Shell, WordPress, web hosting, AI, vulnerabilities]
image: /assets/img/2026-10-21-php2shell-critical-php-security-update.jpg
image_alt: "A blue plush elephant toy with the word php stitched on its side, the PHP mascot known as the elePHPant, on a white background"
image_credit: "Photo: Atomic Taco from Seattle, WA, USA, “Blue Open Goodies ElePHPant”, CC BY-SA 2.0, via Wikimedia Commons"
image_source_url: "https://commons.wikimedia.org/wiki/File:Blue_Open_Goodies_ElePHPant_(23626304652).jpg"
image_license: "CC BY-SA 2.0"
image_license_url: "https://creativecommons.org/licenses/by-sa/2.0/"
image_description: "The PHP mascot, a blue plush elephant called the elePHPant, standing in profile on a white background, with the lowercase word php embroidered in black on its side and a small Open Goodies tag on its ear."
---

On Wednesday, October 21, 2026, the PHP project released emergency security updates for two critical flaws in PHP itself. Security researchers call the pair "PHP2Shell". PHP is the programming language behind WordPress, Drupal, Joomla, Magento and many other web applications, so the flaws affect a very large part of the web. Some site operators took their websites offline as a precaution until they could update. This post explains what happened, who is affected, what website owners should do, and why artificial intelligence plays a central role in this story.

**Key terms:**

- **PHP:** a programming language that runs on web servers and builds web pages before they are sent to the visitor's browser.
- **Remote code execution (RCE):** a flaw that lets an attacker run their own commands on someone else's server over the internet.
- **Unauthenticated:** the attacker does not need an account or password.
- **CVE:** a public identification number for a security flaw.
- **CVSS:** a severity score from 0 to 10. Both flaws are rated 9.2, which counts as "critical".
- **PHP worker:** a server process that handles web requests one after another. PHP-FPM and Apache's mod_php are two common ways of running these workers.
- **End of life (EOL):** a version that no longer gets updates from the developers.

## What happened

On Tuesday, October 20, the PHP security team gave advance notice of a security release. It was scheduled for Wednesday, October 21, at 14:00 UTC (16:00 Vienna time). The release would fix "two critical vulnerabilities, both rated CVSS v4.0 9.2". The team kept the right to release earlier "should details of either vulnerability become public, or should evidence of active exploitation appear in the wild" ([php.net](https://www.php.net/)).

The timing was unusual because details had already escaped. According to the security company Huntress, information about the two flaws "leaked online before their coordinated disclosure and before patches were released" on October 20. The firm watchTowr said it reproduced one of them ([Huntress](https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities)). The e-commerce security firm Sansec reports that Cloudflare saw early attacks against PHP sites at 07:43 UTC on October 21, before the official release, and deployed firewall rules ([Sansec](https://sansec.io/research/php2shell)). BleepingComputer adds that Cloudflare's CTO Dane Knecht called those protections temporary ([BleepingComputer](https://www.bleepingcomputer.com/news/security/php-ships-emergency-patches-for-critical-php2shell-flaws/)).

PHP then released the fixed versions: **PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35**. Its security advisory says: "All PHP users are strongly encouraged to update immediately" ([php.net](https://www.php.net/)).

## The two flaws in plain words

PHP's own advisory describes the two CVEs like this ([php.net](https://www.php.net/)):

- **CVE-2026-109618, "RCE via OOM corruption":** when PHP runs out of memory ("OOM", out of memory) at the wrong moment, it can stop while internal request data is only half set up. The cleanup that follows can then treat that broken data as valid.
- **CVE-2026-109619, "RCE via stale global state":** some internal data from one web request can survive after its memory has already been freed. A later request handled by the same worker can use those leftovers before PHP resets them.

The GitHub advisory for the second flaw explains that an attacker needs two steps that work together: one request that leaves the leftovers behind, and a later request that uses them. A feature called **session upload progress**, which reports progress during file uploads, is "enabled by default" and can supply one or both steps, even when the website never uses sessions ([GitHub advisory GHSA-6wmf-4rv5-p3rp](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp)). This may be where talk of a "PHP upload" problem comes from.

The researchers' write-ups go further. Wiz says attackers could also read sensitive data from the PHP process's memory, "including passwords, tokens, and API keys", without taking over the server ([Wiz](https://www.wiz.io/blog/php2shell-php-rce)). Sansec calls this "a Heartbleed-style leak" and says the earliest affected code dates back to PHP 5.4.0 from 2012 ([Sansec](https://sansec.io/research/php2shell)). Note that the research write-ups group the individual bugs under the two CVE numbers a little differently from php.net. This post follows php.net's descriptions.

## Who is affected

- **Every PHP server that answers web requests.** The PHP team names PHP-FPM, Apache with mod_php, php-cgi, FrankenPHP and LiteSpeed. It considers the risk "highest for mod_php, with a demonstrated exploit where an unauthenticated request can trigger the attack before any application code runs" ([php.net](https://www.php.net/)).
- **Popular applications, even with clean code.** Wiz demonstrated unauthenticated code execution against the latest container images of WordPress, Drupal and Joomla. It adds that "even a simple 'Hello World' application running on an affected PHP version can be vulnerable" ([Wiz](https://www.wiz.io/blog/php2shell-php-rce)). Sansec lists further confirmed targets from the research firm Calif, including Magento, MediaWiki, Roundcube, phpMyAdmin, Nextcloud, Laravel and Symfony ([Sansec](https://sansec.io/research/php2shell)).
- **Old PHP versions.** PHP 8.1 and older no longer get updates from the PHP project. Because the flaws are so serious, the security team made an exception and published "minimal source-backports for PHP 7.4, PHP 8.0, and PHP 8.1". Linux distributions and long-term-support vendors may offer their own fixed packages ([php.net](https://www.php.net/)).

## What website owners should do

1. **Update PHP itself, not just WordPress.** The fix lives in the PHP runtime on the server. Updating WordPress, a theme or a plugin does not fix this ([Sansec](https://sansec.io/research/php2shell)). Sites on shared hosting depend on their provider. Sansec advises asking the hosting company to apply the PHP update.
2. **Install a fixed version:** 8.5.12, 8.4.27, 8.3.36 or 8.2.35, or a patched package from the Linux distribution ([php.net](https://www.php.net/)).
3. **Restart every PHP worker.** The researchers' joint page advises applying the update "to every affected runtime" and restarting "the relevant services and workers" ([PHP2Shell project page](https://www.php2shell.com/)). If immediate patching is not possible, the Dutch National Cyber Security Centre recommends considering isolating internet-facing PHP applications from public networks ([NCSC-NL on GitHub](https://github.com/NCSC-NL/php2shell)).
4. **Use temporary measures only as a bridge.** The PHP team lists settings that reduce exposure. Examples include `session.upload_progress.enabled=0`, `fatal_error_backtraces=0` on PHP 8.5, and lower upload size limits. It warns that these "do not make an installation safe" ([php.net](https://www.php.net/)). Firewall rules from providers such as Cloudflare are also stopgaps ([Sansec](https://sansec.io/research/php2shell)).
5. **Plan ahead for PHP 8.2.** PHP 8.2 reaches end of life on December 31, 2026 ([php.net](https://www.php.net/)).

## The AI angle

This is not only a story about a bug. According to the people who found it, AI made the attack practical.

- Wiz writes that it discovered the first vulnerability on August 19, 2026, "using Wiz Atlas, Gemini 4 Argon, and GPT-5.6 Sol". It says Gemini 4 Argon "made an invaluable contribution to finding the vulnerability, exploit development, attack detection, and validation of the patch". Wiz reported the issue to the PHP security team on August 24 ([Wiz](https://www.wiz.io/blog/php2shell-php-rce)).
- OpenAI says Calif "identified a critical flaw using GPT‑5.6 Sol" as part of OpenAI's "Patch the Planet" initiative, and that Wiz independently discovered and reported both vulnerabilities. OpenAI is sharing a PHP version checker and plans an accompanying Codex skill. It has committed "$1 billion in subsidized Daybreak access" for organisations with limited security resources ([OpenAI](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/)).
- Sansec's timeline says Calif began on August 1 and reported the first bug on August 11. It adds that "all three credit frontier AI models with making the exploits practical" ([Sansec](https://sansec.io/research/php2shell)).
- Both sides of the coin are spelled out. OpenAI writes that "frontier AI found these vulnerabilities before attackers did", but warns that "the same capabilities can also help attackers rapidly develop offensive tools and exploits" ([OpenAI](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/)). Wiz notes that the underlying flaws "had been present for decades", and that showing they could be exploited took a chain of steps "at the edge of what human researchers could" do ([Wiz](https://www.wiz.io/blog/php2shell-php-rce)).

The coordinated response also involved a long list of companies. Wiz thanks Automattic (the company behind WordPress.com), Akamai, AWS, Cloudflare, Fastly, Google, Imperva, Microsoft and Vercel, among others, "for helping prepare guidance and out-of-the-box mitigations" ([Wiz](https://www.wiz.io/blog/php2shell-php-rce)).

## Why it matters

- **Scale:** Wiz describes PHP as a language "that powers 70% of all websites in the world" ([Wiz](https://www.wiz.io/blog/php2shell-php-rce)). One flaw in the language engine reaches every application built on it.
- **Speed:** a leak, early attacks and public exploit details all came within about a day. Sansec expects "mass exploitation now that the patch and the writeups are public" ([Sansec](https://sansec.io/research/php2shell)).
- **Hidden PHP:** many people run PHP without knowing it, inside hosting panels, webmail, shops, wikis or file-sharing servers. Huntress advises inventorying "every PHP install you own (including the ones hiding inside vendor software)" ([Huntress](https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities)).
- **AI changes security work:** the same kind of AI tools that found the flaws also lower the cost of building attacks. Fast patching becomes more important than ever.

## Sources

- [PHP: Security advisory and release announcements (php.net)](https://www.php.net/)
- [GitHub: PHP advisory GHSA-6wmf-4rv5-p3rp – RCE via stale global state](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp)
- [Wiz: PHP2Shell – AI uncovers critical RCE vulnerabilities](https://www.wiz.io/blog/php2shell-php-rce)
- [OpenAI: Patch the Planet – global response coordination](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/)
- [Sansec: PHP2Shell – Critical PHP RCE](https://sansec.io/research/php2shell)
- [Huntress: Rapid Response – php2shell](https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities)
- [BleepingComputer: PHP ships emergency patches for critical PHP2Shell flaws](https://www.bleepingcomputer.com/news/security/php-ships-emergency-patches-for-critical-php2shell-flaws/)
- [NCSC-NL: php2shell operational information (GitHub)](https://github.com/NCSC-NL/php2shell)
- [The Verge: A critical PHP vulnerability may take websites down today](https://www.theverge.com/tech/1015257/php-vulnerability-patch-website-security-wordpress)
- [PHP2Shell project page](https://www.php2shell.com/)
- [Wikimedia Commons: Blue Open Goodies ElePHPant (image)](https://commons.wikimedia.org/wiki/File:Blue_Open_Goodies_ElePHPant_(23626304652).jpg)
