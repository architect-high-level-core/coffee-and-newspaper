/* Pre-generated read-aloud audio (assets/audio/*.mp3).
   - [data-ap]       full player under a post title (play/pause, seek bar, time)
   - [data-ap-mini]  small "Listen" button on the homepage tiles (plays in place)
   Only one audio plays at a time. No external services. */
(function () {
  "use strict";
  var players = [];

  function fmt(s) {
    if (!isFinite(s) || s < 0) s = 0;
    s = Math.floor(s);
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return (h ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (sec < 10 ? "0" : "") + sec;
  }
  function parse(t) {
    if (!t) return 0;
    var p = String(t).split(":").map(Number), s = 0;
    for (var i = 0; i < p.length; i++) s = s * 60 + (p[i] || 0);
    return s;
  }
  function pauseOthers(except) {
    for (var i = 0; i < players.length; i++) if (players[i] !== except && !players[i].paused) players[i].pause();
  }
  function media(title, audio) {
    if (!("mediaSession" in navigator) || !window.MediaMetadata) return;
    try {
      navigator.mediaSession.metadata = new MediaMetadata({ title: title || document.title, artist: "Coffee & Newspaper" });
    } catch (e) {}
  }
  function track(audio) { players.push(audio); audio.addEventListener("play", function () { pauseOthers(audio); }); }

  /* ---------- full player on post pages ---------- */
  var full = document.querySelectorAll("[data-ap]");
  for (var i = 0; i < full.length; i++) (function (box) {
    var audio = box.querySelector("audio"), btn = box.querySelector(".ap-btn"),
        seek = box.querySelector(".ap-seek"), cur = box.querySelector("[data-ap-cur]"),
        durEl = box.querySelector("[data-ap-dur]");
    var known = parse(box.getAttribute("data-dur")), pending = null, dragging = false;
    track(audio);
    function dur() { return isFinite(audio.duration) && audio.duration > 0 ? audio.duration : known; }
    /* ----- chapters (only when the post has audio_chapters) ----- */
    var chap = [], tickEls = [], curCh = -2, tickDur = 0, nowEl = box.querySelector("[data-ap-now]"),
        ticksEl = box.querySelector("[data-ap-ticks]"), tipEl = box.querySelector("[data-ap-tip]"),
        trackEl = box.querySelector("[data-ap-track]"), tipTimer = null;
    var chBtns = box.querySelectorAll(".ap-chapters button[data-t]");
    for (var c = 0; c < chBtns.length; c++) chap.push({
      t: Number(chBtns[c].getAttribute("data-t")) || 0, btn: chBtns[c],
      title: (chBtns[c].querySelector(".ap-cn") || chBtns[c]).textContent
    });
    function seekTo(t) {
      if (isFinite(audio.duration) && audio.duration > 0) { audio.currentTime = t; pending = null; } else pending = t;
      paint();
    }
    function playNow() {
      if (audio.paused || audio.ended) { media(box.getAttribute("data-title"), audio); var pr = audio.play(); if (pr && pr.catch) pr.catch(function () { setState(); }); }
    }
    function chapterAt(t) {
      var k = -1;
      for (var q = 0; q < chap.length; q++) if (chap[q].t <= t + 0.25) k = q;
      return k;
    }
    function hideTip() { if (tipEl) tipEl.hidden = true; for (var q = 0; q < tickEls.length; q++) tickEls[q].classList.remove("on"); }
    function showTip(i, ms) {
      if (!tipEl || !trackEl) return;
      clearTimeout(tipTimer); hideTip();
      tipEl.textContent = fmt(chap[i].t) + " · " + chap[i].title;
      tipEl.hidden = false; tickEls[i] && tickEls[i].classList.add("on");
      var tw = trackEl.clientWidth, w = tipEl.offsetWidth, x = tickEls[i] ? tickEls[i].offsetLeft + 8 : 0;
      tipEl.style.left = Math.max(0, Math.min(x - w / 2, tw - w)) + "px";
      if (ms) tipTimer = setTimeout(hideTip, ms);
    }
    function jump(i, fromTick) {
      seekTo(chap[i].t); playNow();
      if (fromTick) showTip(i, 2200);
    }
    function layoutTicks(d) {
      if (!ticksEl || !d || d === tickDur) return;
      tickDur = d;
      ticksEl.textContent = ""; tickEls = [];
      chap.forEach(function (ch, i) {
        if (ch.t <= 0 || ch.t >= d) { tickEls[i] = null; return; }
        var b = document.createElement("button");
        b.type = "button"; b.className = "ap-tick"; b.tabIndex = -1; b.setAttribute("aria-hidden", "true");
        b.style.left = "calc(6px + (100% - 12px) * " + (ch.t / d).toFixed(5) + ")";
        b.addEventListener("click", function (e) { e.preventDefault(); jump(i, true); });
        b.addEventListener("mouseenter", function () { clearTimeout(tipTimer); showTip(i); });
        b.addEventListener("mouseleave", hideTip);
        ticksEl.appendChild(b); tickEls[i] = b;
      });
    }
    function updateChapter(t) {
      if (!chap.length) return;
      var k = chapterAt(t);
      if (nowEl) { nowEl.hidden = !(t > 0.5 || !audio.paused); }
      if (k === curCh) return;
      curCh = k;
      if (nowEl) nowEl.textContent = k >= 0 ? chap[k].title : "";
      for (var q = 0; q < chap.length; q++) {
        if (q === k) chap[q].btn.setAttribute("aria-current", "true"); else chap[q].btn.removeAttribute("aria-current");
      }
    }
    chap.forEach(function (ch, i) { ch.btn.addEventListener("click", function () { jump(i, false); }); });

    function paint() {
      var d = dur(), t = pending !== null ? pending : audio.currentTime, p = d ? Math.min(1, t / d) : 0;
      if (chap.length) { layoutTicks(d); updateChapter(t); }
      if (!dragging) seek.value = Math.round(p * 1000);
      seek.style.setProperty("--p", (p * 100).toFixed(2) + "%");
      cur.textContent = fmt(t);
      durEl.textContent = fmt(d);
      seek.setAttribute("aria-valuetext", fmt(t) + " of " + fmt(d));
    }
    function setState() {
      var playing = !audio.paused && !audio.ended;
      box.setAttribute("data-state", playing ? "playing" : "paused");
      btn.setAttribute("aria-label", playing ? "Pause audio" : "Play audio");
      btn.setAttribute("aria-pressed", playing ? "true" : "false");
    }
    btn.addEventListener("click", function () {
      if (audio.paused || audio.ended) { media(box.getAttribute("data-title"), audio); var pr = audio.play(); if (pr && pr.catch) pr.catch(function () { setState(); }); }
      else audio.pause();
    });
    seek.addEventListener("input", function () {
      dragging = true;
      var t = (seek.value / 1000) * dur();
      if (isFinite(audio.duration) && audio.duration > 0) { audio.currentTime = t; pending = null; } else pending = t;
      paint();
    });
    seek.addEventListener("change", function () { dragging = false; paint(); });
    audio.addEventListener("loadedmetadata", function () {
      if (pending !== null) { audio.currentTime = pending; pending = null; }
      paint();
    });
    audio.addEventListener("waiting", function () { box.setAttribute("data-loading", ""); });
    audio.addEventListener("playing", function () { box.removeAttribute("data-loading"); });
    audio.addEventListener("timeupdate", paint);
    audio.addEventListener("play", setState);
    audio.addEventListener("pause", setState);
    audio.addEventListener("ended", function () { setState(); });
    audio.addEventListener("error", function () { box.removeAttribute("data-loading"); setState(); });
    paint(); setState();
  })(full[i]);

  /* ---------- small buttons on homepage tiles ---------- */
  var minis = document.querySelectorAll("[data-ap-mini]");
  if (minis.length) {
    var shared = new Audio(); shared.preload = "none"; track(shared);
    var active = null;
    function label(b) {
      var on = b === active && !shared.paused && !shared.ended;
      var d = (b === active && isFinite(shared.duration) && shared.duration > 0) ? shared.duration : parse(b.getAttribute("data-dur"));
      var t = b === active ? shared.currentTime : 0;
      b.setAttribute("data-state", on ? "playing" : (b === active && t > 0 && !shared.ended ? "paused" : "idle"));
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.setAttribute("aria-label", (on ? "Pause" : "Listen to") + " " + (b.getAttribute("data-title") || "article"));
      var txt = b.querySelector(".ap-mini-txt"), tm = b.querySelector(".ap-mini-time");
      txt.textContent = on ? "Pause" : "Listen";
      tm.textContent = (b === active && t > 0 && !shared.ended) ? fmt(t) + " / " + fmt(d) : fmt(d);
      b.style.setProperty("--p", (b === active && d ? Math.min(100, (t / d) * 100) : 0).toFixed(2) + "%");
    }
    function all() { for (var k = 0; k < minis.length; k++) label(minis[k]); }
    for (var j = 0; j < minis.length; j++) minis[j].addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      var b = this;
      if (b === active && !shared.paused && !shared.ended) { shared.pause(); return; }
      if (b !== active) {
        if (active) { shared.pause(); }
        var prev = active; active = b;
        shared.src = b.getAttribute("data-src");
        if (prev) label(prev);
      }
      media(b.getAttribute("data-title"), shared);
      var pr = shared.play(); if (pr && pr.catch) pr.catch(function () { all(); });
      all();
    });
    ["play", "pause", "ended", "timeupdate", "loadedmetadata", "error"].forEach(function (ev) {
      shared.addEventListener(ev, function () { if (active) label(active); });
    });
    all();
  }
})();
