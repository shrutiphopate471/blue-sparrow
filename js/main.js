/* ==========================================================================
   THE NEST — main.js
   Handles: loader, sticky navbar, mobile drawer, scroll-reveal,
   animated counters, back-to-top, custom cursor, active nav link
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loader ---------- */
  const loader = document.querySelector('.loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader && loader.classList.add('hide'), 400);
  });
  // Fallback in case 'load' already fired
  setTimeout(() => loader && loader.classList.add('hide'), 1800);

  /* ---------- Sticky Navbar + Back-to-Top Visibility (rAF-throttled) ---------- */
  const navbar = document.querySelector('.navbar');
  const topBtnEl = document.querySelector('.fb-top');
  let scrollTicking = false;
  const onScroll = () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 60);
    if (topBtnEl) topBtnEl.classList.toggle('show', y > 500);
    scrollTicking = false;
  };
  document.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(onScroll);
      scrollTicking = true;
    }
  }, { passive: true });
  onScroll();

  /* ---------- Mobile Drawer ---------- */
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const toggleDrawer = () => {
    hamburger.classList.toggle('open');
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
  };
  if (hamburger && drawer && overlay) {
    hamburger.addEventListener('click', toggleDrawer);
    overlay.addEventListener('click', toggleDrawer);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', toggleDrawer));
  }

  /* ---------- Active Nav Link ---------- */
  const currentPage = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a, .mobile-drawer a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Back to Top ---------- */
  if (topBtnEl) {
    topBtnEl.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Scroll Reveal (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Animated Counters ---------- */
  const counters = document.querySelectorAll('.counter-item .count');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window && counters.length) {
    const cIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cIo.observe(c));
  }

  /* ---------- Custom Cursor (Desktop only) ---------- */
  if (window.matchMedia('(min-width: 993px)').matches && window.matchMedia('(pointer: fine)').matches) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    // Ring uses a CSS transition to create the lag effect, so we only need
    // to update position on actual pointer movement — no perpetual rAF loop.
    document.addEventListener('mousemove', (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    }, { passive: true });

    document.querySelectorAll('a, button, .masonry-item, .filter-btn').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('grow'));
      el.addEventListener('mouseleave', () => ring.classList.remove('grow'));
    });
  }

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Smooth in-page anchor scroll offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const targetSelector = anchor.getAttribute('href');
    if (!targetSelector || targetSelector === '#') return; // skip placeholder links (e.g. social icons)
    anchor.addEventListener('click', function (e) {
      let targetEl;
      try {
        targetEl = document.querySelector(targetSelector);
      } catch (err) {
        return;
      }
      if (targetEl) {
        e.preventDefault();
        const y = targetEl.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

});
