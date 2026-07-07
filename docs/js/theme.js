/* ============================================================
   theme.js — Dark / Light Theme Toggle
   Persists to localStorage, respects system preference
   ============================================================ */

const Theme = (() => {
  const KEY = 'dsa-portfolio-theme';
  const html = document.documentElement;

  const ICONS = {
    light: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    dark:  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
  };

  function get() {
    const stored = localStorage.getItem(KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function set(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    updateBtn(theme);
  }

  function updateBtn(theme) {
    const btns = document.querySelectorAll('[data-theme-toggle]');
    btns.forEach(btn => {
      btn.innerHTML = theme === 'dark' ? ICONS.light : ICONS.dark;
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('title',      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function toggle() {
    const current = html.getAttribute('data-theme') || get();
    set(current === 'dark' ? 'light' : 'dark');
  }

  function init() {
    set(get());
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', toggle);
    });

    // Listen to system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(KEY)) {
        set(e.matches ? 'dark' : 'light');
      }
    });
  }

  return { init, toggle, get, set };
})();

export default Theme;
