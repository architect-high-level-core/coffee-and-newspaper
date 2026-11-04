(function () {
  var params = new URLSearchParams(location.search);
  var q = (params.get('hl') || '').trim();
  if (!q) return;
  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  var loc = lang === 'tr' ? 'tr-TR' : 'en';
  function norm(s) {
    return (s || '').toLocaleLowerCase(loc).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\u0131/g, 'i').replace(/\u00df/g, 'ss');
  }
  var words = norm(q).split(/\s+/).filter(Boolean);
  if (!words.length) return;
  var WC = /[\p{L}\p{N}]/u;
  function isW(c) { return !!c && WC.test(c); }
  function ranges(s) {
    var out = '', map = [];
    for (var i = 0; i < s.length; i++) { var n = norm(s[i]); for (var k = 0; k < n.length; k++) { out += n[k]; map.push(i); } }
    var r = [];
    words.forEach(function (w) { var i = 0; while ((i = out.indexOf(w, i)) > -1) { if (!isW(out[i - 1]) && !isW(out[i + w.length])) { r.push([map[i], map[i + w.length - 1] + 1]); i += w.length; } else i++; } });
    r.sort(function (a, b) { return a[0] - b[0]; });
    var m = []; r.forEach(function (x) { var l = m[m.length - 1]; if (l && x[0] <= l[1]) l[1] = Math.max(l[1], x[1]); else m.push(x); });
    return m;
  }
  var SKIP = /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|INPUT|SELECT|BUTTON|AUDIO|VIDEO|SVG|MARK)$/;
  function highlight(root) {
    if (!root) return [];
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        for (var e = n.parentNode; e && e !== root.parentNode; e = e.parentNode) {
          if (e.nodeType === 1 && (SKIP.test(e.nodeName.toUpperCase()) || e.matches('.ap,.listen,nav,header,.search,.hl-bar'))) return NodeFilter.FILTER_REJECT;
        }
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    var nodes = [], n, marks = [];
    while ((n = tw.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var s = node.nodeValue, r = ranges(s);
      if (!r.length) return;
      var frag = document.createDocumentFragment(), pos = 0;
      r.forEach(function (x) {
        if (x[0] > pos) frag.appendChild(document.createTextNode(s.slice(pos, x[0])));
        var m = document.createElement('mark'); m.className = 'hl'; m.textContent = s.slice(x[0], x[1]);
        frag.appendChild(m); marks.push(m); pos = x[1];
      });
      if (pos < s.length) frag.appendChild(document.createTextNode(s.slice(pos)));
      node.parentNode.replaceChild(frag, node);
    });
    return marks;
  }
  function run() {
    var titleMarks = highlight(document.querySelector('.post-title'));
    var bodyMarks = highlight(document.querySelector('.post-body'));
    var all = titleMarks.concat(bodyMarks);
    if (!all.length) return;
    var cur = -1, reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var bar = document.createElement('div');
    bar.className = 'hl-bar'; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Search highlights');
    bar.innerHTML = '<span class="hl-count" aria-live="polite"></span>' +
      '<button type="button" class="hl-prev" aria-label="Previous match">&#8593;</button>' +
      '<button type="button" class="hl-next" aria-label="Next match">&#8595;</button>' +
      '<button type="button" class="hl-close" aria-label="Remove highlights">&#215;</button>';
    var label = bar.querySelector('.hl-count');
    function setLabel() {
      var t = all.length + (all.length === 1 ? ' match' : ' matches') + ' for \u201c' + q + '\u201d';
      label.textContent = (cur > -1 ? (cur + 1) + '/' : '') + t;
    }
    function go(i) {
      if (cur > -1) all[cur].classList.remove('hl-cur');
      cur = (i + all.length) % all.length;
      var m = all[cur]; m.classList.add('hl-cur');
      var y = m.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 3;
      window.scrollTo({ top: Math.max(0, y), behavior: reduce ? 'auto' : 'smooth' });
      setLabel();
    }
    function clear() {
      all.forEach(function (m) { var p = m.parentNode; if (!p) return; p.replaceChild(document.createTextNode(m.textContent), m); p.normalize(); });
      bar.remove();
      params.delete('hl');
      var s = params.toString();
      try { history.replaceState(history.state, '', location.pathname + (s ? '?' + s : '') + location.hash); } catch (e) {}
    }
    bar.querySelector('.hl-prev').addEventListener('click', function () { go(cur - 1); });
    bar.querySelector('.hl-next').addEventListener('click', function () { go(cur + 1); });
    bar.querySelector('.hl-close').addEventListener('click', clear);
    document.body.appendChild(bar);
    setLabel();
    // first match in the body (title is visible anyway)
    var first = bodyMarks.length ? titleMarks.length : 0;
    if (bodyMarks.length) setTimeout(function () { go(first); }, 60);
    else { cur = 0; all[0].classList.add('hl-cur'); setLabel(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
