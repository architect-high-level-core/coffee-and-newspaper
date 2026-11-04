(function () {
  var box = document.querySelector('.search');
  if (!box) return;
  var input = box.querySelector('input');
  var panel = box.querySelector('.sr');
  var lang = box.getAttribute('data-lang') || 'en';
  var empty = box.getAttribute('data-empty') || 'No posts found';
  var index = null, loading = null;
  var loc = lang === 'tr' ? 'tr-TR' : 'en';

  function norm(s) {
    return (s || '').toLocaleLowerCase(loc)
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\u0131/g, 'i').replace(/\u00df/g, 'ss');
  }
  // normalized string + map from each normalized char to its original index
  function normMap(s) {
    s = s || ''; var out = '', map = [];
    for (var i = 0; i < s.length; i++) {
      var n = norm(s[i]);
      for (var k = 0; k < n.length; k++) { out += n[k]; map.push(i); }
    }
    map.push(s.length);
    return { n: out, map: map };
  }
  // whole-word matching: letters/digits (any script) are word chars; apostrophe, hyphen etc. are boundaries
  var WC = /[\p{L}\p{N}]/u;
  function isW(c) { return !!c && WC.test(c); }
  function find(hay, w) {
    var out = [], i = 0;
    while ((i = hay.indexOf(w, i)) > -1) {
      if (!isW(hay[i - 1]) && !isW(hay[i + w.length])) { out.push(i); i += w.length; } else i++;
    }
    return out;
  }
  function has(hay, w) { return find(hay, w).length > 0; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // original-index ranges of all matches of words in s
  function ranges(s, words) {
    var m = normMap(s), r = [];
    words.forEach(function (w) {
      find(m.n, w).forEach(function (i) { r.push([m.map[i], m.map[i + w.length - 1] + 1]); });
    });
    r.sort(function (a, b) { return a[0] - b[0]; });
    var merged = [];
    r.forEach(function (x) { var l = merged[merged.length - 1]; if (l && x[0] <= l[1]) l[1] = Math.max(l[1], x[1]); else merged.push(x.slice()); });
    return merged;
  }
  function mark(s, words) {
    var r = ranges(s, words), out = '', pos = 0;
    r.forEach(function (x) { out += esc(s.slice(pos, x[0])) + '<mark>' + esc(s.slice(x[0], x[1])) + '</mark>'; pos = x[1]; });
    return out + esc(s.slice(pos));
  }
  function count(hay, w) { return find(hay, w).length; }
  function snippet(s, words, len) {
    len = len || 120;
    var r = ranges(s, words); if (!r.length) return esc(s.slice(0, len));
    var start = Math.max(0, r[0][0] - Math.floor(len / 3)), end = Math.min(s.length, start + len);
    if (start > 0) { var sp = s.indexOf(' ', start); if (sp > -1 && sp < r[0][0]) start = sp + 1; }
    if (end < s.length) { var sp2 = s.lastIndexOf(' ', end); if (sp2 > r[0][1]) end = sp2; }
    return (start > 0 ? '… ' : '') + mark(s.slice(start, end), words) + (end < s.length ? ' …' : '');
  }
  function search(data, q) {
    var words = norm(q).trim().split(/\s+/).filter(Boolean);
    var title = [], text = [];
    if (!words.length) return { words: words, title: title, text: text };
    data.forEach(function (p) {
      if (!words.every(function (w) { return has(p._t, w) || has(p._b, w); })) return;
      var n = 0; words.forEach(function (w) { n += count(p._b, w); });
      var hit = { p: p, n: n };
      if (words.every(function (w) { return has(p._t, w); })) title.push(hit); else text.push(hit);
    });
    title.sort(function (a, b) { return (b.p.ts || 0) - (a.p.ts || 0); });
    text.sort(function (a, b) { return b.n - a.n || (b.p.ts || 0) - (a.p.ts || 0); });
    return { words: words, title: title, text: text };
  }
  var api = { norm: norm, find: find, mark: mark, snippet: snippet, search: search, prep: prep };
  function prep(d) { d.forEach(function (p) { p._t = norm(p.title); p._b = norm(p.content); }); return d; }
  if (typeof module !== 'undefined' && module.exports) module.exports = api;

  function load() {
    if (index) return Promise.resolve(index);
    if (!loading) loading = fetch(box.getAttribute('data-index'))
      .then(function (r) { return r.json(); })
      .then(function (d) { index = prep(d); return d; });
    return loading;
  }
  function item(h, words, q, withText) {
    var p = h.p, href = p.url + (p.url.indexOf('?') > -1 ? '&' : '?') + 'hl=' + encodeURIComponent(q.trim());
    return '<a class="sr-item" href="' + esc(href) + '">' +
      (p.image ? '<img src="' + esc(p.image) + '" alt="" loading="lazy">' : '<span class="sr-ph"></span>') +
      '<span class="sr-txt"><span class="sr-t">' + mark(p.title, words) + '</span>' +
      (withText ? '<span class="sr-s">' + snippet(p.content, words) + '</span>' : '') +
      '<span class="sr-d">' + esc(p.date) + (h.n ? ' · ' + h.n + (h.n === 1 ? ' mention' : ' mentions') : '') + '</span></span></a>';
  }
  function render(q) {
    var res = search(index, q);
    if (!res.words.length) { panel.hidden = true; panel.innerHTML = ''; return; }
    var html = '';
    if (res.title.length) html += '<p class="sr-h">In title <span>' + res.title.length + '</span></p>' + res.title.map(function (h) { return item(h, res.words, q, false); }).join('');
    if (res.text.length) html += '<p class="sr-h">In article text <span>' + res.text.length + '</span></p>' + res.text.map(function (h) { return item(h, res.words, q, true); }).join('');
    panel.innerHTML = html || '<p class="sr-none">' + esc(empty) + '</p>';
    panel.scrollTop = 0;
    panel.hidden = false;
  }
  var timer;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    var q = input.value;
    timer = setTimeout(function () { load().then(function () { render(q); }); }, 120);
  });
  input.addEventListener('focus', function () { load(); if (input.value.trim()) load().then(function () { render(input.value); }); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; panel.hidden = true; input.blur(); }
    if (e.key === 'Enter') { e.preventDefault(); var first = panel.querySelector('a'); if (first && !panel.hidden) location.href = first.href; else load().then(function () { render(input.value); }); }
  });
  document.addEventListener('click', function (e) { if (!box.contains(e.target)) panel.hidden = true; });
  var params = new URLSearchParams(location.search);
  if (params.get('q')) { input.value = params.get('q'); load().then(function () { render(input.value); }); }
})();
