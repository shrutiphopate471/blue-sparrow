/* ==========================================================================
   THE NEST — form.js
   Handles: enquiry form validation, success popup, min visit-date restriction
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('enquiryForm');
  if (!form) return;

  const successPopup = document.querySelector('.form-success');

  // Restrict visit date to today or later
  const dateField = form.querySelector('#visitDate');
  if (dateField) {
    const today = new Date().toISOString().split('T')[0];
    dateField.setAttribute('min', today);
  }

  const validators = {
    fullName: (v) => v.trim().length >= 3 ? '' : 'Please enter your full name (min 3 characters).',
    phone: (v) => /^[6-9]\d{9}$/.test(v.trim()) ? '' : 'Enter a valid 10-digit mobile number.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email address.',
    apartmentType: (v) => v ? '' : 'Please select an apartment type.',
    visitDate: (v) => v ? '' : 'Please choose a preferred visit date.',
    message: () => '' // optional field
  };

  const showError = (field, msg) => {
    const wrap = field.closest('.field');
    wrap.classList.toggle('error', !!msg);
    const errEl = wrap.querySelector('.err-msg');
    if (errEl) errEl.textContent = msg;
  };

  const validateField = (field) => {
    const validator = validators[field.name];
    if (!validator) return true;
    const msg = validator(field.value);
    showError(field, msg);
    return !msg;
  };

  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.field').classList.contains('error')) validateField(field);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('input, select, textarea').forEach(field => {
      if (!validateField(field)) valid = false;
    });

    if (!valid) {
      const firstError = form.querySelector('.field.error');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Build a pre-filled WhatsApp message from the form details
    const fullName = form.querySelector('#fullName').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const email = form.querySelector('#email').value.trim();
    const apartmentType = form.querySelector('#apartmentType').value;
    const visitDate = form.querySelector('#visitDate').value;
    const message = form.querySelector('#message').value.trim();

    let waMessage =
      `New Enquiry - The Nest\n` +
      `Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Apartment Type: ${apartmentType}\n` +
      `Preferred Visit Date: ${visitDate}`;
    if (message) waMessage += `\nMessage: ${message}`;

    window.open(`https://wa.me/917972096750?text=${encodeURIComponent(waMessage)}`, '_blank', 'noopener');

    // Log the enquiry server-side too (fire-and-forget; WhatsApp remains the primary flow)
    fetch('send-enquiry.php', { method: 'POST', body: new FormData(form) }).catch(() => {});

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();
      if (successPopup) successPopup.classList.add('open');
    }, 900);
  });

  const closeSuccess = document.querySelector('.success-close');
  if (closeSuccess && successPopup) {
    closeSuccess.addEventListener('click', () => successPopup.classList.remove('open'));
    successPopup.addEventListener('click', (e) => {
      if (e.target === successPopup) successPopup.classList.remove('open');
    });
  }

});
