/* ==========================================================================
   THE NEST — gallery.js
   Handles: category filtering, lightbox popup with prev/next, lazy loading
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.masonry-item');
  if (!items.length) return;

  /* ---------- Filtering ---------- */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.filter;

      items.forEach(item => {
        const match = category === 'all' || item.dataset.category === category;
        if (match) {
          item.classList.remove('hide');
          requestAnimationFrame(() => item.classList.add('show'));
        } else {
          item.classList.remove('show');
          item.classList.add('hide');
        }
      });
    });
  });

  // Initial reveal
  items.forEach(item => item.classList.add('show'));

  /* ---------- Lightbox ---------- */
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  let currentIndex = 0;

  const visibleItems = () => Array.from(items).filter(i => !i.classList.contains('hide'));

  const openLightbox = (index) => {
    const list = visibleItems();
    currentIndex = index;
    const img = list[currentIndex].querySelector('img');
    lightboxImg.src = img.dataset.full || img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  const navigate = (dir) => {
    const list = visibleItems();
    currentIndex = (currentIndex + dir + list.length) % list.length;
    const img = list[currentIndex].querySelector('img');
    lightboxImg.src = img.dataset.full || img.src;
    lightboxImg.alt = img.alt;
  };

  items.forEach((item, idx) => {
    item.addEventListener('click', () => {
      const list = visibleItems();
      const realIdx = list.indexOf(item);
      openLightbox(realIdx);
    });
  });

  if (lightbox) {
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigate(-1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigate(1));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

});
