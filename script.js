// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Cookie-Banner verbergen
  const overlay   = document.getElementById('cookie-overlay');
  const acceptBtn = document.getElementById('accept-cookies');
  acceptBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  // 2) Scroll-Animationen
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
    observer.observe(el);
  });
});
