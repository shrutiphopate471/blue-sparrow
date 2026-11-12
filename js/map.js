/* ==========================================================================
   THE NEST — map.js
   Lightweight helper for the embedded Google Map (lazy iframe loading)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const mapFrames = document.querySelectorAll('.map-wrap iframe, .footer-map iframe');
  if (!mapFrames.length) return;

  // Lazy-load map iframes only when they scroll into view (performance)
  if ('IntersectionObserver' in window) {
    const mapIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const frame = entry.target;
          if (frame.dataset.src) {
            frame.src = frame.dataset.src;
            frame.removeAttribute('data-src');
          }
          mapIo.unobserve(frame);
        }
      });
    }, { threshold: 0.1 });
    mapFrames.forEach(f => mapIo.observe(f));
  }

});
