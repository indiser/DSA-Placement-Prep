/* ============================================================
   app.js — Main Application Bootstrap
   Coordinates all modules and site-wide behaviors
   ============================================================ */

import Theme    from './theme.js';
import Counters from './counters.js';
import Search   from './search.js';
import Roadmap  from './roadmap.js';

// ── Navbar Scroll Behavior ────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const scrollThreshold = 60;
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > scrollThreshold);

        // Active link highlight
        const sections = document.querySelectorAll('section[id]');
        const scrollY  = window.scrollY + 120;

        sections.forEach(section => {
          const top    = section.offsetTop;
          const height = section.offsetHeight;
          const id     = section.getAttribute('id');
          const link   = document.querySelector(`.navbar__nav-link[href="#${id}"]`);
          if (!link) return;
          link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        });

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Mobile Menu ───────────────────────────────────────────────
function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  function close() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) close();
  });
}

// ── Scroll Reveal (IntersectionObserver) ─────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

// ── Progress Rings ────────────────────────────────────────────
function initProgressRings() {
  const rings = document.querySelectorAll('[data-ring-pct]');
  if (!rings.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const wrap = entry.target;
      const pct  = parseFloat(wrap.dataset.ringPct) || 0;
      const fill = wrap.querySelector('.progress-ring__fill');
      if (!fill) return;

      const circumference = 263.89;
      const offset        = circumference * (1 - pct / 100);
      fill.style.strokeDashoffset = offset;

      observer.unobserve(wrap);
    });
  }, { threshold: 0.3 });

  rings.forEach(r => observer.observe(r));
}

// ── Progress Bars ─────────────────────────────────────────────
function initProgressBars() {
  const bars = document.querySelectorAll('[data-bar-pct]');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const wrap  = entry.target;
      const pct   = parseFloat(wrap.dataset.barPct) || 0;
      const fill  = wrap.querySelector('.progress-bar__fill');
      if (!fill) return;
      fill.style.width = pct + '%';
      observer.unobserve(wrap);
    });
  }, { threshold: 0.3 });

  bars.forEach(b => observer.observe(b));
}

// ── File Tree Expand / Collapse ───────────────────────────────
function initFileTree() {
  document.querySelectorAll('.tree-item.dir').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const children = item.nextElementSibling;
      if (!children?.classList.contains('tree-children')) return;
      const isOpen = children.classList.toggle('open');
      const icon   = item.querySelector('.dir-icon');
      if (icon) icon.textContent = isOpen ? '📂' : '📁';
    });
  });
}

// ── Smooth Scroll for Anchor Links ───────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id  = a.getAttribute('href').slice(1);
      const el  = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Hero Typing Effect (optional flavor) ─────────────────────
function initHeroCounter() {
  // Quick animated percentage in hero
  const heroNum = document.getElementById('hero-pct');
  if (!heroNum) return;
  let n = 0;
  const target = 64;
  const interval = setInterval(() => {
    n = Math.min(n + 2, target);
    heroNum.textContent = n + '%';
    if (n >= target) clearInterval(interval);
  }, 20);
}

// ── Back to Top ───────────────────────────────────────────────
function initBackToTop() {
  document.querySelectorAll('[data-back-top]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// ── Bootstrap ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initReveal();
  initProgressRings();
  initProgressBars();
  initFileTree();
  initHeroCounter();
  initBackToTop();
  Counters.init();
  Roadmap.init();
  Search.init();

  // Re-run reveal after roadmap renders (dynamic content)
  setTimeout(initReveal, 100);

  console.log('%c DSA Placement Prep Portfolio ', 'background:#111;color:#FFF4D6;font-weight:900;font-size:14px;padding:4px 8px;border-radius:2px');
  console.log('%c github.com/indiser/DSA-Placement-Prep ', 'color:#E3261C;font-weight:700');
});
