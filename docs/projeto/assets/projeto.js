/* Tema claro/escuro compartilhado pelas páginas do projeto.
   Segue o sistema por padrão; a escolha manual fica guardada neste navegador. */
(function () {
  var CHAVE = 'conecta-projeto-tema';
  var raiz = document.documentElement;
  try { var salvo = localStorage.getItem(CHAVE); if (salvo) raiz.setAttribute('data-theme', salvo); } catch (e) {}
  /* ?tema=claro ou ?tema=escuro força o tema (útil para link direto e captura de tela) */
  var q = /[?&]tema=(claro|escuro)/.exec(location.search);
  if (q) raiz.setAttribute('data-theme', q[1] === 'claro' ? 'light' : 'dark');

  function escuroAgora() {
    var t = raiz.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function rotular(btn) {
    var esc = escuroAgora();
    btn.setAttribute('aria-label', esc ? 'Usar tema claro' : 'Usar tema escuro');
    btn.title = btn.getAttribute('aria-label');
    btn.innerHTML = esc
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  }
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btnTema');
    if (btn) {
      rotular(btn);
      btn.addEventListener('click', function () {
        var novo = escuroAgora() ? 'light' : 'dark';
        raiz.setAttribute('data-theme', novo);
        try { localStorage.setItem(CHAVE, novo); } catch (e) {}
        rotular(btn);
        document.dispatchEvent(new CustomEvent('tema-mudou'));
      });
    }
    /* Filtros genéricos: <div class="filtro" data-alvo="#id" data-attr="cat"> com botões data-valor. */
    document.querySelectorAll('.filtro[data-alvo]').forEach(function (f) {
      var alvo = document.querySelector(f.getAttribute('data-alvo'));
      var attr = f.getAttribute('data-attr');
      f.addEventListener('click', function (ev) {
        var b = ev.target.closest('button'); if (!b) return;
        f.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        var v = b.getAttribute('data-valor');
        var vis = 0;
        alvo.querySelectorAll('[data-' + attr + ']').forEach(function (el) {
          var ok = v === '*' || (' ' + el.getAttribute('data-' + attr) + ' ').indexOf(' ' + v + ' ') > -1;
          el.hidden = !ok; if (ok) vis++;
        });
        var cont = document.querySelector(f.getAttribute('data-contador') || '#_');
        if (cont) cont.textContent = vis;
      });
    });
  });
})();
