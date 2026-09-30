(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const particleHost = document.getElementById('particles');
  if (particleHost && !reduceMotion) {
    for (let i = 0; i < 35; i += 1) {
      const dot = document.createElement('i');
      dot.className = 'particle';
      dot.style.left = `${4 + Math.random() * 92}%`;
      dot.style.top = `${3 + Math.random() * 74}%`;
      dot.style.animationDelay = `${-Math.random() * 8}s`;
      dot.style.animationDuration = `${4 + Math.random() * 6}s`;
      particleHost.appendChild(dot);
    }
  }

  const words = ['uninterrupted.', 'resilient.', 'at scale.', 'trustworthy.'];
  const word = document.getElementById('rotating-word');
  if (word && !reduceMotion) {
    let index = 0;
    window.setInterval(() => {
      word.classList.add('word-out');
      window.setTimeout(() => {
        index = (index + 1) % words.length;
        word.textContent = words[index];
        word.classList.remove('word-out');
      }, 260);
    }, 2900);
  }

  const revealTargets = document.querySelectorAll('.section-kicker, .approach-heading, .principle, .role-card, .project-feature, .project-card, .research-card, .connect-content, .education>div');
  revealTargets.forEach((element) => element.classList.add('reveal'));
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealTargets.forEach((element) => observer.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add('visible'));
  }

  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (element) => {
    const target = Number(element.dataset.count);
    const suffix = element.dataset.suffix || '';
    const decimals = String(target).includes('.') ? 2 : 0;
    const duration = 1150;
    const start = performance.now();
    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - ((1 - progress) ** 3);
      element.textContent = `${(target * eased).toFixed(decimals)}${suffix}`;
      if (progress < 1) window.requestAnimationFrame(frame);
    };
    window.requestAnimationFrame(frame);
  };
  if ('IntersectionObserver' in window && !reduceMotion) {
    const counterObserver = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.55 });
    counters.forEach((counter) => counterObserver.observe(counter));
  }

  const visual = document.querySelector('.hero-visual');
  if (visual && window.matchMedia('(hover: hover)').matches && !reduceMotion) {
    visual.addEventListener('pointermove', (event) => {
      const bounds = visual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      visual.style.setProperty('--pointer-x', `${x * 7}px`);
      visual.style.setProperty('--pointer-y', `${y * 7}px`);
    });
    visual.addEventListener('pointerleave', () => {
      visual.style.setProperty('--pointer-x', '0px');
      visual.style.setProperty('--pointer-y', '0px');
    });
  }
})();
