// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll-reveal animation for all sections (minimal fade + rise)
const revealEls = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Sequentially reveal the role boxes (Web Developer -> Artist -> Editor), each typing out its label
const roleBoxes = document.querySelectorAll('.role-box');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (roleBoxes.length) {
  if (prefersReducedMotion) {
    roleBoxes.forEach(box => {
      box.classList.add('is-visible');
      box.querySelector('.role-text').textContent = box.dataset.text;
    });
  } else {
    const TYPE_SPEED = 55;
    const PAUSE_BETWEEN = 350;
    const START_DELAY = 1500; // let the ID card finish dropping first

    function typeInto(box, onDone) {
      const textEl = box.querySelector('.role-text');
      const fullText = box.dataset.text;
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      cursor.textContent = '|';
      textEl.after(cursor);

      let i = 0;
      (function step() {
        textEl.textContent = fullText.slice(0, i);
        if (i <= fullText.length) {
          i++;
          setTimeout(step, TYPE_SPEED);
        } else {
          cursor.remove();
          onDone();
        }
      })();
    }

    function revealNext(index) {
      if (index >= roleBoxes.length) return;
      const box = roleBoxes[index];
      box.classList.add('is-visible');
      setTimeout(() => {
        typeInto(box, () => setTimeout(() => revealNext(index + 1), PAUSE_BETWEEN));
      }, 250);
    }

    setTimeout(() => revealNext(0), START_DELAY);
  }
}