/* Pre-generated read-aloud audio (assets/audio/*.mp3).
   - [data-ap]       full player under a post title (play/pause, seek bar, time)
   - [data-ap-mini]  small "Listen" button on the homepage tiles (plays in place); while it plays,
                     a compact bar is fixed at the bottom of the screen (title, seek bar with chapter
                     ticks, chapter list). It disappears on pause/stop and returns on play.
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

    /* ----- now-playing bar (homepage): visible only while audio plays ----- */
    var bar = null, bEls = {}, bCh = [], bTicks = [], bTickDur = 0, bCur = -2, bDrag = false, bTipTimer = null, hideTimer = null, bFor = null;
    function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; }
    function svgIcon(cls, d) {
      var ns = "http://www.w3.org/2000/svg", v = document.createElementNS(ns, "svg"), p = document.createElementNS(ns, "path");
      v.setAttribute("viewBox", "0 0 12 12"); v.setAttribute("aria-hidden", "true"); if (cls) v.setAttribute("class", cls);
      p.setAttribute("d", d); p.setAttribute("fill", "currentColor"); v.appendChild(p); return v;
    }
    function bDur() { return isFinite(shared.duration) && shared.duration > 0 ? shared.duration : parse(bFor && bFor.getAttribute("data-dur")); }
    function bSeek(t) {
      if (isFinite(shared.duration) && shared.duration > 0) shared.currentTime = t;
      bPaint();
    }
    function bTip(i, ms) {
      var tip = bEls.tip, tr = bEls.track;
      clearTimeout(bTipTimer); tip.hidden = true;
      for (var q = 0; q < bTicks.length; q++) bTicks[q] && bTicks[q].classList.remove("on");
      if (i < 0) return;
      tip.textContent = fmt(bCh[i].t) + " · " + bCh[i].title; tip.hidden = false; bTicks[i] && bTicks[i].classList.add("on");
      var w = tip.offsetWidth, x = bTicks[i] ? bTicks[i].offsetLeft + 8 : 0;
      tip.style.left = Math.max(0, Math.min(x - w / 2, tr.clientWidth - w)) + "px";
      if (ms) bTipTimer = setTimeout(function () { bTip(-1); }, ms);
    }
    function bJump(i, fromTick) {
      bSeek(bCh[i].t);
      if (shared.paused) { var pr = shared.play(); if (pr && pr.catch) pr.catch(function () {}); }
      if (fromTick) bTip(i, 2200);
    }
    function bBuild() {
      if (bar) return;
      bar = el("div", "hb"); bar.hidden = true; bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "Now playing");
      var panel = el("div", "hb-panel"); panel.hidden = true; bEls.panel = panel; bEls.list = el("ol"); panel.appendChild(bEls.list);
      var main = el("div", "hb-main");
      var pb = el("button", "ap-btn hb-pause"); pb.type = "button"; pb.setAttribute("aria-label", "Pause audio");
      pb.appendChild(svgIcon("i-pause", "M2.5 1.5h2.5v9H2.5zM7 1.5h2.5v9H7z"));
      pb.addEventListener("click", function () { shared.pause(); });
      var info = el("div", "hb-info"); bEls.title = el("div", "hb-title"); bEls.now = el("div", "hb-now"); info.appendChild(bEls.title); info.appendChild(bEls.now);
      var cb = el("button", "hb-chbtn"); cb.type = "button"; cb.setAttribute("aria-expanded", "false"); bEls.chbtn = cb;
      cb.addEventListener("click", function () {
        var open = panel.hidden; panel.hidden = !open; cb.setAttribute("aria-expanded", open ? "true" : "false");
        if (open) { var cur = panel.querySelector('[aria-current="true"]'); if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest" }); }
      });
      main.appendChild(pb); main.appendChild(info); main.appendChild(cb);
      var row = el("div", "hb-row");
      bEls.cur = el("span", "ap-time", "0:00"); bEls.dur = el("span", "ap-time", "0:00");
      var tr = el("span", "ap-track"); bEls.track = tr;
      var sk = el("input", "ap-seek"); sk.type = "range"; sk.min = 0; sk.max = 1000; sk.step = 1; sk.value = 0; sk.setAttribute("aria-label", "Seek"); bEls.seek = sk;
      bEls.ticks = el("span", "ap-ticks"); bEls.tip = el("span", "ap-tip"); bEls.tip.hidden = true;
      tr.appendChild(sk); tr.appendChild(bEls.ticks); tr.appendChild(bEls.tip);
      sk.addEventListener("input", function () { bDrag = true; bSeek((sk.value / 1000) * bDur()); });
      sk.addEventListener("change", function () { bDrag = false; bPaint(); });
      row.appendChild(bEls.cur); row.appendChild(tr); row.appendChild(bEls.dur);
      bar.appendChild(panel); bar.appendChild(main); bar.appendChild(row);
      document.body.appendChild(bar);
    }
    function bLoad(b) {              // fill title + chapters for the pill that is playing
      bFor = b; bBuild();
      bEls.title.textContent = b.getAttribute("data-title") || "";
      bCh = []; bTicks = []; bTickDur = 0; bCur = -2; bEls.ticks.textContent = ""; bEls.list.textContent = "";
      try { var raw = b.getAttribute("data-ch"); if (raw) bCh = JSON.parse(raw) || []; } catch (e) { bCh = []; }
      bCh = bCh.filter(function (c) { return c && isFinite(Number(c.t)); }).map(function (c) { return { t: Number(c.t), title: String(c.title || "") }; });
      bEls.panel.hidden = true; bEls.chbtn.setAttribute("aria-expanded", "false"); bEls.chbtn.hidden = !bCh.length;
      bEls.chbtn.textContent = "Chapters (" + bCh.length + ")"; bEls.track.classList.toggle("hb-plain", !bCh.length);
      bCh.forEach(function (c, i) {
        var li = el("li"), bt = el("button"); bt.type = "button"; bt.setAttribute("data-t", c.t);
        bt.appendChild(el("span", "ap-ct", fmt(c.t))); bt.appendChild(el("span", "ap-cn", c.title));
        bt.addEventListener("click", function () { bJump(i, false); });
        li.appendChild(bt); bEls.list.appendChild(li);
      });
    }
    function bLayoutTicks(d) {
      if (!bCh.length || !d || d === bTickDur) return;
      bTickDur = d; bEls.ticks.textContent = ""; bTicks = [];
      bCh.forEach(function (c, i) {
        if (c.t <= 0 || c.t >= d) { bTicks[i] = null; return; }
        var t = el("button", "ap-tick"); t.type = "button"; t.tabIndex = -1; t.setAttribute("aria-hidden", "true");
        t.style.left = "calc(6px + (100% - 12px) * " + (c.t / d).toFixed(5) + ")";
        t.addEventListener("click", function (e) { e.preventDefault(); bJump(i, true); });
        bEls.ticks.appendChild(t); bTicks[i] = t;
      });
    }
    function bPaint() {
      if (!bar || bar.hidden) return;
      var d = bDur(), t = shared.currentTime || 0, p = d ? Math.min(1, t / d) : 0;
      bLayoutTicks(d);
      if (!bDrag) bEls.seek.value = Math.round(p * 1000);
      bEls.seek.style.setProperty("--p", (p * 100).toFixed(2) + "%");
      bEls.cur.textContent = fmt(t); bEls.dur.textContent = fmt(d);
      bEls.seek.setAttribute("aria-valuetext", fmt(t) + " of " + fmt(d));
      if (bCh.length) {
        var k = -1; for (var q = 0; q < bCh.length; q++) if (bCh[q].t <= t + 0.25) k = q;
        if (k !== bCur) {
          bCur = k; bEls.now.textContent = k >= 0 ? bCh[k].title : "";
          var bs = bEls.list.querySelectorAll("button");
          for (var z = 0; z < bs.length; z++) { if (z === k) bs[z].setAttribute("aria-current", "true"); else bs[z].removeAttribute("aria-current"); }
        }
      } else bEls.now.textContent = "";
    }
    function bShow() {
      clearTimeout(hideTimer);
      if (!active) return;
      if (bFor !== active) bLoad(active);
      bar.hidden = false; document.body.classList.add("hb-on"); bPaint();
    }
    function bHide() {
      if (!bar) return;
      bar.hidden = true; bEls.panel.hidden = true; bEls.chbtn.setAttribute("aria-expanded", "false"); bTip(-1);
      document.body.classList.remove("hb-on");
    }
    shared.addEventListener("play", bShow);
    shared.addEventListener("playing", bShow);
    shared.addEventListener("pause", function () {
      clearTimeout(hideTimer);      // short delay: switching to another article pauses and plays again at once
      hideTimer = setTimeout(function () { if (shared.paused || shared.ended) bHide(); }, 150);
    });
    shared.addEventListener("ended", bHide);
    shared.addEventListener("error", bHide);
    ["timeupdate", "loadedmetadata", "durationchange"].forEach(function (ev) { shared.addEventListener(ev, bPaint); });
  }
})();
