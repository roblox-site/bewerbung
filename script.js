// script.js

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Alle Elemente mit fade-in bzw. fade-in-up beobachten
  document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
    observer.observe(el);
  });
});
