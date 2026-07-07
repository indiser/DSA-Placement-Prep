/* ============================================================
   counters.js — Animated Number Counters
   Uses IntersectionObserver to trigger on scroll
   ============================================================ */

const Counters = (() => {

  /**
   * Ease-out cubic
   */
  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  /**
   * Animate a single counter element
   * @param {HTMLElement} el
   * @param {number} target
   * @param {number} duration ms
   * @param {string} suffix  e.g. '%', '+'
   * @param {string} prefix  e.g. '~'
   */
  function animateCounter(el, target, duration = 1400, suffix = '', prefix = '') {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';

    let start = null;
    const startVal = 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed  = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const value    = Math.round(easeOut(progress) * (target - startVal) + startVal);

      el.textContent = prefix + value.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  /**
   * Parse data attributes from [data-counter] elements:
   *   data-target="119"
   *   data-suffix="%"   (optional)
   *   data-prefix="~"   (optional)
   *   data-duration="1600" (optional)
   */
  function init() {
    const counterEls = document.querySelectorAll('[data-counter]');
    if (!counterEls.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el       = entry.target;
        const target   = parseInt(el.dataset.target, 10) || 0;
        const suffix   = el.dataset.suffix   || '';
        const prefix   = el.dataset.prefix   || '';
        const duration = parseInt(el.dataset.duration, 10) || 1400;

        animateCounter(el, target, duration, suffix, prefix);
        observer.unobserve(el);
      });
    }, { threshold: 0.3 });

    counterEls.forEach(el => observer.observe(el));
  }

  return { init, animateCounter };
})();

export default Counters;
