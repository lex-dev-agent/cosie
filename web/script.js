// Cosie landing page scripts

(function () {
  'use strict';

  // Email signup handling (placeholder — no backend yet)
  function handleSignup(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector('input[type="email"]');
    const email = input.value.trim();
    if (!email) return;

    // Replace form with thank-you message
    const msg = document.createElement('p');
    msg.textContent = 'Thanks! We\'ll let you know when Cosie is ready.';
    msg.style.cssText = 'font-weight: 600; font-size: 1.05rem; padding: 14px 0;';
    form.replaceWith(msg);
  }

  document.getElementById('hero-form')?.addEventListener('submit', handleSignup);
  document.getElementById('footer-form')?.addEventListener('submit', handleSignup);

  // Smooth scroll for anchor links (polyfill for older Safari)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // nav height
        const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Subtle scroll-reveal for sections
  if ('IntersectionObserver' in window) {
    var sections = document.querySelectorAll('.section, .hero');
    sections.forEach(function (s) {
      s.style.opacity = '0';
      s.style.transform = 'translateY(20px)';
      s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(function (s) { observer.observe(s); });
  }
})();
