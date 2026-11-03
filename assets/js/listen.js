/* Read-aloud ("Listen") for posts with `listen: true`.
   Uses only the browser's built-in Web Speech API (speechSynthesis). No external services. */
(function () {
  "use strict";
  var box = document.getElementById("listen");
  if (!box) return;
  var synth = window.speechSynthesis;
  if (!synth || typeof window.SpeechSynthesisUtterance !== "function") return; // stays hidden

  var toggle = box.querySelector("[data-listen-toggle]");
  var stopBtn = box.querySelector("[data-listen-stop]");
  var label = toggle.querySelector(".listen-label");

  // Deep male English voices, in order of preference (names vary by OS/browser).
  var PREFERRED = [
    "Google UK English Male",
    "Microsoft Guy", "Microsoft Davis", "Microsoft Ryan", "Microsoft Andrew",
    "Microsoft Christopher", "Microsoft Eric", "Microsoft Brian", "Microsoft Thomas",
    "Microsoft George", "Microsoft Mark", "Microsoft David",
    "Daniel", "Alex", "Fred", "Aaron", "Arthur", "Rishi", "Oliver", "Gordon", "Reed", "Rocko", "Ralph"
  ];
  var PITCH = 0.7, RATE = 0.95, MAX_CHUNK = 220;

  var voice = null, chunks = null, idx = 0, state = "idle", gen = 0;

  function isEn(v) { return /^en([-_]|$)/i.test(v.lang || ""); }

  function pickVoice(list) {
    var en = list.filter(isEn);
    if (!en.length) return null;
    for (var i = 0; i < PREFERRED.length; i++) {
      var p = PREFERRED[i].toLowerCase();
      for (var j = 0; j < en.length; j++) {
        var n = en[j].name.toLowerCase();
        if (n === p || n.indexOf(p + " ") === 0 || n.indexOf(p + " (") === 0 || (p.indexOf("microsoft") === 0 && n.indexOf(p) === 0)) return en[j];
      }
    }
    for (var k = 0; k < en.length; k++) if (/\bmale\b/i.test(en[k].name)) return en[k];
    var gb = en.filter(function (v) { return /^en[-_]gb/i.test(v.lang); });
    return (gb[0] || en[0]);
  }

  function initVoices() {
    var list = synth.getVoices() || [];
    if (!list.length) return false;
    var v = pickVoice(list);
    if (!v) { box.hidden = true; return true; } // no English voice: keep hidden
    voice = v;
    box.hidden = false;
    return true;
  }

  if (!initVoices()) {
    var onVc = function () { if (initVoices() && synth.removeEventListener) synth.removeEventListener("voiceschanged", onVc); };
    if (synth.addEventListener) synth.addEventListener("voiceschanged", onVc);
    else synth.onvoiceschanged = onVc;
    // Some browsers fire voiceschanged late (or never); poll briefly, then give up (button stays hidden).
    var tries = 0, t = setInterval(function () { if (initVoices() || ++tries > 20) clearInterval(t); }, 250);
  }

  // ---- text: post title, then article body only ----
  function collectText() {
    var parts = [];
    var title = document.querySelector("article .post-title");
    if (title) parts.push(title.textContent.trim());
    var body = document.querySelector("article .post-body");
    if (body) {
      var sel = "p,li,h1,h2,h3,h4,h5,h6,blockquote,dt,dd,th,td";
      var els = body.querySelectorAll(sel);
      var skipping = false;
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (/^H[1-6]$/.test(el.tagName)) skipping = /^\s*sources\s*$/i.test(el.textContent); // skip the link list
        if (skipping) continue;
        if (el.parentElement && el.parentElement.closest(sel) && body.contains(el.parentElement.closest(sel))) continue; // avoid duplicates
        if (el.closest("figure, pre, code, script, style, nav")) continue;
        var txt = (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
        if (txt) parts.push(txt);
      }
    }
    return parts;
  }

  function split(parts) {
    var out = [];
    parts.forEach(function (p) {
      var sentences = p.match(/[^.!?…]+(?:[.!?…]+["'”’)\]]*|$)\s*/g) || [p];
      var cur = "";
      sentences.forEach(function (s) {
        s = s.trim(); if (!s) return;
        while (s.length > MAX_CHUNK) { // very long sentence: break at a comma/space
          var cut = s.lastIndexOf(", ", MAX_CHUNK); if (cut < 60) cut = s.lastIndexOf(" ", MAX_CHUNK); if (cut < 60) cut = MAX_CHUNK;
          if (cur) { out.push(cur); cur = ""; }
          out.push(s.slice(0, cut + 1).trim()); s = s.slice(cut + 1).trim();
        }
        if (cur && (cur.length + s.length + 1) > MAX_CHUNK) { out.push(cur); cur = s; }
        else cur = cur ? cur + " " + s : s;
      });
      if (cur) out.push(cur);
    });
    return out;
  }

  // ---- playback (pause = cancel and remember position: reliable on Chrome, Android and iOS) ----
  function speakFrom(i) {
    var my = ++gen;
    if (i >= chunks.length) { finish(); return; }
    idx = i;
    var u = new SpeechSynthesisUtterance(chunks[i]);
    if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = "en-GB";
    u.pitch = PITCH; u.rate = RATE; u.volume = 1;
    u.onend = function () { if (my === gen && state === "playing") speakFrom(idx + 1); };
    u.onerror = function (e) {
      if (my !== gen || state !== "playing") return;
      if (e && (e.error === "interrupted" || e.error === "canceled")) return;
      speakFrom(idx + 1);
    };
    synth.speak(u);
  }

  function render() {
    toggle.setAttribute("data-state", state);
    label.textContent = state === "playing" ? "Pause" : state === "paused" ? "Resume" : "Listen";
    toggle.setAttribute("aria-label", state === "playing" ? "Pause reading" : state === "paused" ? "Resume reading" : "Listen to this article");
    stopBtn.hidden = state === "idle";
  }

  function finish() { gen++; state = "idle"; idx = 0; synth.cancel(); render(); }

  toggle.addEventListener("click", function () {
    if (state === "playing") { state = "paused"; gen++; synth.cancel(); render(); return; }
    if (!chunks) chunks = split(collectText());
    if (!chunks.length) return;
    if (!voice) initVoices();
    synth.cancel();
    state = "playing"; render();
    speakFrom(idx); // 0 on a fresh start; on resume repeats the current sentence
  });
  stopBtn.addEventListener("click", finish);

  synth.cancel(); // clear anything left over from a previous page
  window.addEventListener("pagehide", function () { gen++; synth.cancel(); });
  window.addEventListener("beforeunload", function () { gen++; synth.cancel(); });
})();
