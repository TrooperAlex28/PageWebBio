/* ============================================================
   main.js — navigation, scroll effects, form validation
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Dynamic footer year
  ---------------------------------------------------------- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----------------------------------------------------------
     Header shadow on scroll
  ---------------------------------------------------------- */
  const header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNav();
    toggleBackToTop();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ----------------------------------------------------------
     Active nav link (based on scroll position)
  ---------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = Array.from(
    document.querySelectorAll('section[id]')
  );

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(function (section) {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = document.querySelector('.nav__link[href="#' + id + '"]');
      if (!link) return;

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }

  /* ----------------------------------------------------------
     Mobile nav toggle
  ---------------------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navList   = document.getElementById('nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      const isOpen = navList.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navList.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     Back-to-top button
  ---------------------------------------------------------- */
  const backToTop = document.getElementById('back-to-top');

  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  /* ----------------------------------------------------------
     Contact form validation
  ---------------------------------------------------------- */
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateForm()) {
        showSuccess();
        form.reset();
      }
    });

    // Clear errors on input
    ['name', 'email', 'message'].forEach(function (fieldId) {
      const field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener('input', function () {
          clearError(fieldId);
        });
      }
    });
  }

  function validateForm() {
    let valid = true;

    // Name
    const name = document.getElementById('name');
    if (!name || name.value.trim().length < 2) {
      showError('name', 'Please enter your full name (at least 2 characters).');
      valid = false;
    } else {
      clearError('name');
    }

    // Email — requires at least one char before @, a domain label, a dot, and a TLD of 2+ chars
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email.value.trim())) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError('email');
    }

    // Message
    const message = document.getElementById('message');
    if (!message || message.value.trim().length < 10) {
      showError('message', 'Please enter a message (at least 10 characters).');
      valid = false;
    } else {
      clearError('message');
    }

    return valid;
  }

  function showError(fieldId, text) {
    const errorEl = document.getElementById(fieldId + '-error');
    const field   = document.getElementById(fieldId);
    if (errorEl) errorEl.textContent = text;
    if (field)   field.classList.add('invalid');
  }

  function clearError(fieldId) {
    const errorEl = document.getElementById(fieldId + '-error');
    const field   = document.getElementById(fieldId);
    if (errorEl) errorEl.textContent = '';
    if (field)   field.classList.remove('invalid');
  }

  function showSuccess() {
    const successEl = document.getElementById('form-success');
    if (!successEl) return;
    successEl.textContent = '✓ Thank you! Your message has been sent.';
    setTimeout(function () {
      successEl.textContent = '';
    }, 6000);
  }

  /* ----------------------------------------------------------
     Intersection Observer — fade-in on scroll
  ---------------------------------------------------------- */
  const observerOptions = { threshold: 0.12 };
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(
    '.service-card, .stat-card, .contact-info-card, .about__text'
  ).forEach(function (el) {
    el.classList.add('fade-in');
    observer.observe(el);
  });

})();
