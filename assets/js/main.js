document.addEventListener('DOMContentLoaded', function () {

  // Sticky header background on scroll
  var header = document.querySelector('.header');
  function toggleHeader() {
    if (window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  toggleHeader();
  window.addEventListener('scroll', toggleHeader);

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav__links');
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });
  }

  // Generic tab groups (floorplan configs, location categories)
  document.querySelectorAll('[data-tab-group]').forEach(function (group) {
    var groupName = group.getAttribute('data-tab-group');
    var tabs = group.querySelectorAll('[data-tab]');
    var panels = document.querySelectorAll('[data-panel-group="' + groupName + '"] [data-panel]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-tab');
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        panels.forEach(function (panel) {
          panel.classList.toggle('active', panel.getAttribute('data-panel') === target);
        });
      });
    });
  });

  // Gallery lightbox
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  document.querySelectorAll('[data-lightbox]').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      lightboxImg.src = thumb.getAttribute('data-lightbox');
      lightbox.classList.add('active');
    });
  });
  var lightboxClose = document.querySelector('.lightbox-close');
  if (lightboxClose) {
    lightboxClose.addEventListener('click', function () {
      lightbox.classList.remove('active');
    });
  }
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }

  // Enquiry / tour form submission via AJAX
  document.querySelectorAll('.enquiry-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msgBox = form.querySelector('.form-msg');
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch('send-enquiry.php', {
        method: 'POST',
        body: new FormData(form)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          msgBox.textContent = data.message;
          msgBox.className = 'form-msg ' + (data.ok ? 'success' : 'error');
          if (data.ok) form.reset();
        })
        .catch(function () {
          msgBox.textContent = 'Something went wrong. Please try again or call us directly.';
          msgBox.className = 'form-msg error';
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
    });
  });

});
  