// ─────────────────────────────────────────
//  NAV.JS — Sticky frosted-glass nav on scroll
// ─────────────────────────────────────────

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});