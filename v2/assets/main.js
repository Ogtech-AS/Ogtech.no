(() => {
  // Installation choices (Container / Lekter / Maskinrom / Dekk)
  const installCopy = document.querySelector('.install-copy');
  const choices = document.querySelectorAll('[data-install]');
  choices.forEach(button => button.addEventListener('click', () => {
    choices.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    installCopy.textContent = button.dataset.text;
  }));
})();
