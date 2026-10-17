(function () {
  var box = document.querySelector('.search');
  if (!box) return;
  var input = box.querySelector('input');
  var panel = box.querySelector('.sr');
  var lang = box.getAttribute('data-lang') || 'en';
  var empty = box.getAttribute('data-empty') || 'No posts found';
  var index = null, loading = null;

  function norm(s) {
    return (s || '').toLocaleLowerCase(lang === 'tr' ? 'tr-TR' : 'en')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\u0131/g, 'i').replace(/\u00df/g, 'ss');
  }
  function load() {
    if (index) return Promise.resolve(index);
    if (!loading) loading = fetch(box.getAttribute('data-index'))
      .then(function (r) { return r.json(); })
      .then(function (d) { d.forEach(function (p) { p._t = norm(p.title); p._b = norm(p.content); }); index = d; return d; });
    return loading;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function render(q) {
    var words = norm(q).trim().split(/\s+/).filter(Boolean);
    if (!words.length) { panel.hidden = true; panel.innerHTML = ''; return; }
    var hits = index.filter(function (p) {
      return words.every(function (w) { return p._t.indexOf(w) > -1 || p._b.indexOf(w) > -1; });
    }).sort(function (a, b) {
      var at = words.every(function (w) { return a._t.indexOf(w) > -1; }) ? 0 : 1;
      var bt = words.every(function (w) { return b._t.indexOf(w) > -1; }) ? 0 : 1;
      return at - bt;
    });
    panel.innerHTML = hits.length ? hits.slice(0, 20).map(function (p) {
      return '<a class="sr-item" href="' + esc(p.url) + '">' +
        (p.image ? '<img src="' + esc(p.image) + '" alt="" loading="lazy">' : '<span class="sr-ph"></span>') +
        '<span class="sr-txt"><span class="sr-t">' + esc(p.title) + '</span><span class="sr-d">' + esc(p.date) + '</span></span></a>';
    }).join('') : '<p class="sr-none">' + esc(empty) + '</p>';
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
