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
    function paint() {
      var d = dur(), t = pending !== null ? pending : audio.currentTime, p = d ? Math.min(1, t / d) : 0;
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
