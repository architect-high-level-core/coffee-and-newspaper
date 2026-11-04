(function () {
  var KEY_READ = 'readPosts', KEY_SORT = 'homeSort';
  function get(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function readSet() { try { var o = JSON.parse(get(KEY_READ, '{}')); return o && typeof o === 'object' ? o : {}; } catch (e) { return {}; } }

  // read checkmarks (homepage cards + post page)
  var btns = document.querySelectorAll('[data-read-toggle]');
  function paint(b, on) {
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.title = on ? 'Mark as unread' : 'Mark as read';
    var al = b.getAttribute('aria-label') || '';
    b.setAttribute('aria-label', al.replace(/^Mark as (un)?read/, on ? 'Mark as unread' : 'Mark as read'));
    var c = b.closest('.card'); if (c) c.classList.toggle('is-read', on);
  }
  var rs = readSet();
  Array.prototype.forEach.call(btns, function (b) {
    paint(b, !!rs[b.getAttribute('data-url')]);
    b.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      var s = readSet(), u = b.getAttribute('data-url');
      if (s[u]) delete s[u]; else s[u] = Date.now();
      set(KEY_READ, JSON.stringify(s)); paint(b, !!s[u]);
    });
  });
  window.addEventListener('storage', function (e) {
    if (e.key !== KEY_READ) return; var s = readSet();
    Array.prototype.forEach.call(btns, function (b) { paint(b, !!s[b.getAttribute('data-url')]); });
  });

  // sort bar (homepage)
  var bar = document.querySelector('.sortbar'), grid = document.querySelector('.grid');
  if (!bar || !grid) return;
  var cards = Array.prototype.slice.call(grid.querySelectorAll(':scope > .card'));
  function n(c, a) { return +c.getAttribute(a) || 0; }
  var cmp = {
    newest: function (a, b) { return n(b, 'data-ts') - n(a, 'data-ts') || n(a, 'data-i') - n(b, 'data-i'); },
    oldest: function (a, b) { return n(a, 'data-ts') - n(b, 'data-ts') || n(b, 'data-i') - n(a, 'data-i'); },
    longest: function (a, b) { return n(b, 'data-words') - n(a, 'data-words') || n(a, 'data-i') - n(b, 'data-i'); },
    shortest: function (a, b) { return n(a, 'data-words') - n(b, 'data-words') || n(a, 'data-i') - n(b, 'data-i'); }
  };
  function apply(mode) {
    var list = cards.slice();
    if (mode === 'random') {
      for (var i = list.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = list[i]; list[i] = list[j]; list[j] = t; }
    } else list.sort(cmp[mode] || cmp.newest);
    var f = document.createDocumentFragment();
    list.forEach(function (c) { f.appendChild(c); });
    grid.appendChild(f);
    Array.prototype.forEach.call(bar.querySelectorAll('[data-sort]'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-sort') === mode ? 'true' : 'false'); });
  }
  var mode = get(KEY_SORT, 'newest'); if (mode !== 'random' && !cmp[mode]) mode = 'newest';
  if (mode !== 'newest') apply(mode);
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('[data-sort]'); if (!b) return;
    mode = b.getAttribute('data-sort'); set(KEY_SORT, mode); apply(mode);
  });
})();
