// ─────────────────────────────────────────
//  REVEAL.JS — Scroll-triggered reveal animations
//  Uses IntersectionObserver — no libraries needed
// ─────────────────────────────────────────

const revealElements = document.querySelectorAll('.reveal, .reveal-left');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after reveal so it doesn't re-trigger
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealElements.forEach((el) => observer.observe(el));