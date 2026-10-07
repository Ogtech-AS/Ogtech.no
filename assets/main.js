(() => {
  const triggers = document.querySelectorAll('[data-panel]');
  const panels = document.querySelectorAll('.panel');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = null;

  const show = key => {
    active = key;
    panels.forEach(p => { p.hidden = p.id !== 'panel-' + key; });
    triggers.forEach(b => b.setAttribute('aria-expanded', String(b.dataset.panel === key)));
    if (key) document.getElementById('panel-' + key).scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
  };

  triggers.forEach(button => {
    button.setAttribute('aria-controls', 'panel-' + button.dataset.panel);
    button.addEventListener('click', () => show(active === button.dataset.panel ? null : button.dataset.panel));
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && active) show(null); });

  const installCopy = document.querySelector('.install-copy');
  const choices = document.querySelectorAll('[data-install]');
  choices.forEach(button => button.addEventListener('click', () => {
    choices.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    installCopy.textContent = button.dataset.text;
  }));
})();
