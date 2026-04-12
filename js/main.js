/* ============================================================
   main.js — navigation, scroll effects, form validation, i18n
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     Translations (i18n)
  ---------------------------------------------------------- */
  const translations = {
    fr: {
      "page-title": "Alex — Site Personnel",
      "nav-home": "Accueil",
      "nav-about": "À propos",
      "nav-services": "Services",
      "nav-contact": "Contact",
      "hero-greeting": "Bonjour, je suis",
      "hero-tagline": "Développeur · Designer · Créateur de solutions",
      "hero-cta-learn": "En savoir plus",
      "hero-cta-contact": "Me contacter",
      "about-title": "Parcours",
      "about-subtitle": "Qui je suis & d'où je viens",
      "about-p1":
        "Je suis développeur web en formation avec un parcours en électromécanique industrielle. Cette double expertise me permet de comprendre rapidement les besoins concrets des entreprises et de proposer des solutions web adaptées.",

      "about-p2":
        "Je conçois des sites web modernes, rapides et optimisés pour donner une image professionnelle et attirer des clients. Mon objectif est simple : créer des outils utiles, efficaces et faciles à gérer.",

      "about-p3":
        "Je travaille principalement avec des petites entreprises et des professionnels qui souhaitent améliorer leur présence en ligne avec des solutions simples et accessibles.",
      "stat-experience": "Ans d'expérience",
      "stat-projects": "Projets réalisés",
      "stat-clients": "Clients satisfaits",
      "stat-opensource": "Contributions Open-Source",
      "services-title": "Services",
      "services-subtitle": "Ce que je peux faire pour vous",
      "service-webdev-title": "Développement Web",
      "service-webdev-desc":
        "Développement complet de sites et d'applications web modernes et performants, en utilisant les dernières technologies et bonnes pratiques.",
      "service-uiux-title": "Design UI / UX",
      "service-uiux-desc":
        "Un design centré sur l'utilisateur qui transforme des exigences complexes en interfaces épurées et accessibles que vos utilisateurs apprécieront.",
      "service-consulting-title": "Conseil",
      "service-consulting-desc":
        "Des conseils techniques stratégiques pour aider votre équipe à faire les bons choix technologiques, améliorer l'architecture et accélérer la livraison.",
      "service-perf-title": "Optimisation des Performances",
      "service-perf-desc":
        "Audit et optimisation d'applications existantes pour la vitesse, la scalabilité et de meilleurs scores Core Web Vitals.",
      "service-api-title": "API & Back-End",
      "service-api-desc":
        "Conception et mise en œuvre d'APIs RESTful & GraphQL, de microservices et de systèmes back-end orientés base de données.",
      "service-mentorship-title": "Mentorat & Formation",
      "service-mentorship-desc":
        "Coaching individuel ou en équipe, revues de code et ateliers pour aider les développeurs à améliorer leurs compétences et leur confiance.",
      "contact-title": "Me Contacter",
      "contact-subtitle": "Travaillons ensemble — envoyez-moi un message",
      "contact-email-label": "E-mail",
      "contact-location-label": "Localisation",
      "contact-location-value": "Disponible dans le monde entier (Télétravail)",
      "contact-phone-label": "Téléphone",
      "form-name-label": "Nom complet",
      "form-email-label": "Adresse e-mail",
      "form-subject-label": "Sujet",
      "form-message-label": "Message",
      "form-submit": "Envoyer le message",
      "placeholder-name": "Votre nom",
      "placeholder-email": "vous@exemple.com",
      "placeholder-subject": "Comment puis-je vous aider ?",
      "placeholder-message": "Parlez-moi de votre projet ou question\u2026",
      "footer-rights": "Tous droits réservés.",
      "footer-home": "Accueil",
      "footer-about": "À propos",
      "footer-services": "Services",
      "footer-contact": "Contact",
      "aria-open-menu": "Ouvrir le menu",
      "aria-back-to-top": "Retour en haut",
      "error-name":
        "Veuillez entrer votre nom complet (au moins 2 caractères).",
      "error-email": "Veuillez entrer une adresse e-mail valide.",
      "error-message": "Veuillez entrer un message (au moins 10 caractères).",
      "success-message": "✓ Merci\u00a0! Votre message a été envoyé.",
      "lang-toggle-text": "EN",
      "lang-toggle-label": "Switch to English",
    },
    en: {
      "page-title": "Alex — Personal Website",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-services": "Services",
      "nav-contact": "Contact",
      "hero-greeting": "Hello, I'm",
      "hero-tagline": "Developer · Designer · Problem Solver",
      "hero-cta-learn": "Learn More",
      "hero-cta-contact": "Get in Touch",
      "about-title": "Background",
      "about-subtitle": "Who I am & where I come from",
      "about-p1":
        "I am a web developer in training with a background in industrial electromechanics. This combination allows me to quickly understand real-world business needs and deliver practical web solutions.",

      "about-p2":
        "I design modern, fast, and professional websites that help businesses build credibility and attract clients. My goal is simple: create useful, efficient, and easy-to-manage tools.",

      "about-p3":
        "I mainly work with small businesses and professionals who want to improve their online presence with simple and affordable solutions.",
      "stat-experience": "Years of Experience",
      "stat-projects": "Projects Completed",
      "stat-clients": "Happy Clients",
      "stat-opensource": "Open-Source Contributions",
      "services-title": "Services",
      "services-subtitle": "What I can do for you",
      "service-webdev-title": "Web Development",
      "service-webdev-desc":
        "End-to-end development of modern, performant websites and web applications using the latest technologies and best practices.",
      "service-uiux-title": "UI / UX Design",
      "service-uiux-desc":
        "User-centered design that transforms complex requirements into clean, accessible interfaces your users will love.",
      "service-consulting-title": "Consulting",
      "service-consulting-desc":
        "Strategic technical guidance to help your team make the right technology choices, improve architecture, and accelerate delivery.",
      "service-perf-title": "Performance Optimization",
      "service-perf-desc":
        "Auditing and optimizing existing applications for speed, scalability, and better Core Web Vitals scores.",
      "service-api-title": "API & Back-End",
      "service-api-desc":
        "Design and implementation of RESTful & GraphQL APIs, microservices, and database-driven back-end systems.",
      "service-mentorship-title": "Mentorship & Training",
      "service-mentorship-desc":
        "One-on-one or team coaching, code reviews, and workshops to help developers level up their skills and confidence.",
      "contact-title": "Contact Me",
      "contact-subtitle": "Let's work together — drop me a message",
      "contact-email-label": "Email",
      "contact-location-label": "Location",
      "contact-location-value": "Available Worldwide (Remote)",
      "contact-phone-label": "Phone",
      "form-name-label": "Full Name",
      "form-email-label": "Email Address",
      "form-subject-label": "Subject",
      "form-message-label": "Message",
      "form-submit": "Send Message",
      "placeholder-name": "Your name",
      "placeholder-email": "you@example.com",
      "placeholder-subject": "How can I help you?",
      "placeholder-message": "Tell me about your project or question\u2026",
      "footer-rights": "All rights reserved.",
      "footer-home": "Home",
      "footer-about": "About",
      "footer-services": "Services",
      "footer-contact": "Contact",
      "aria-open-menu": "Open menu",
      "aria-back-to-top": "Back to top",
      "error-name": "Please enter your full name (at least 2 characters).",
      "error-email": "Please enter a valid email address.",
      "error-message": "Please enter a message (at least 10 characters).",
      "success-message": "✓ Thank you! Your message has been sent.",
      "lang-toggle-text": "FR",
      "lang-toggle-label": "Passer en français",
    },
  };

  var DEFAULT_LANG = "fr";
  var currentLang = localStorage.getItem("lang") || DEFAULT_LANG;

  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // Placeholder text
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // aria-label attributes
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
    });

    // Page title
    document.title = t["page-title"] || document.title;

    // HTML lang attribute
    document.documentElement.lang = lang;

    // Language toggle button
    var langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      langToggle.textContent = t["lang-toggle-text"];
      langToggle.setAttribute("aria-label", t["lang-toggle-label"]);
    }
  }

  // Language toggle click handler
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", function () {
      currentLang = currentLang === "fr" ? "en" : "fr";
      localStorage.setItem("lang", currentLang);
      applyTranslations(currentLang);
    });
  }

  // Apply language on page load
  applyTranslations(currentLang);

  /* ----------------------------------------------------------
     Dynamic footer year
  ---------------------------------------------------------- */
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----------------------------------------------------------
     Header shadow on scroll
  ---------------------------------------------------------- */
  const header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    updateActiveNav();
    toggleBackToTop();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ----------------------------------------------------------
     Active nav link (based on scroll position)
  ---------------------------------------------------------- */
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = Array.from(document.querySelectorAll("section[id]"));

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector('.nav__link[href="#' + id + '"]');
      if (!link) return;

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (l) {
          l.classList.remove("active");
        });
        link.classList.add("active");
      }
    });
  }

  /* ----------------------------------------------------------
     Mobile nav toggle
  ---------------------------------------------------------- */
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      const isOpen = navList.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked
    navList.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----------------------------------------------------------
     Back-to-top button
  ---------------------------------------------------------- */
  const backToTop = document.getElementById("back-to-top");

  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  /* ----------------------------------------------------------
     Contact form validation
  ---------------------------------------------------------- */
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateForm()) {
        showSuccess();
        form.reset();
      }
    });

    // Clear errors on input
    ["name", "email", "message"].forEach(function (fieldId) {
      const field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener("input", function () {
          clearError(fieldId);
        });
      }
    });
  }

  function validateForm() {
    const t = translations[currentLang];
    let valid = true;

    // Name
    const name = document.getElementById("name");
    if (!name || name.value.trim().length < 2) {
      showError("name", t["error-name"]);
      valid = false;
    } else {
      clearError("name");
    }

    // Email — requires at least one char before @, a domain label, a dot, and a TLD of 2+ chars
    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email.value.trim())) {
      showError("email", t["error-email"]);
      valid = false;
    } else {
      clearError("email");
    }

    // Message
    const message = document.getElementById("message");
    if (!message || message.value.trim().length < 10) {
      showError("message", t["error-message"]);
      valid = false;
    } else {
      clearError("message");
    }

    return valid;
  }

  function showError(fieldId, text) {
    const errorEl = document.getElementById(fieldId + "-error");
    const field = document.getElementById(fieldId);
    if (errorEl) errorEl.textContent = text;
    if (field) field.classList.add("invalid");
  }

  function clearError(fieldId) {
    const errorEl = document.getElementById(fieldId + "-error");
    const field = document.getElementById(fieldId);
    if (errorEl) errorEl.textContent = "";
    if (field) field.classList.remove("invalid");
  }

  function showSuccess() {
    const t = translations[currentLang];
    const successEl = document.getElementById("form-success");
    if (!successEl) return;
    successEl.textContent = t["success-message"];
    setTimeout(function () {
      successEl.textContent = "";
    }, 6000);
  }

  /* ----------------------------------------------------------
     Intersection Observer — fade-in on scroll
  ---------------------------------------------------------- */
  const observerOptions = { threshold: 0.12 };
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      ".service-card, .stat-card, .contact-info-card, .about__text",
    )
    .forEach(function (el) {
      el.classList.add("fade-in");
      observer.observe(el);
    });
})();
