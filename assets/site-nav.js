(() => {
  const menus = Array.from(document.querySelectorAll('.nav-menu'));
  if (!menus.length) return;

  const closeMenus = except => {
    menus.forEach(menu => {
      if (menu === except) return;
      menu.classList.remove('open');
      menu.querySelector('.nav-menu-trigger')?.setAttribute('aria-expanded', 'false');
    });
  };

  menus.forEach(menu => {
    const trigger = menu.querySelector('.nav-menu-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', event => {
      event.stopPropagation();
      const nextOpen = !menu.classList.contains('open');
      closeMenus(menu);
      menu.classList.toggle('open', nextOpen);
      trigger.setAttribute('aria-expanded', String(nextOpen));
    });
    menu.querySelectorAll('.nav-dropdown a').forEach(link => link.addEventListener('click', () => closeMenus()));
  });

  document.addEventListener('click', () => closeMenus());
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    closeMenus();
    document.querySelector('.nav-menu-trigger:focus')?.blur();
  });
})();
