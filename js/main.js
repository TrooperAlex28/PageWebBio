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
      "nav-projects": "Projets",
      "nav-contact": "Contact",
      "hero-greeting": "Bonjour, je suis",
      "hero-tagline":
        "Développeur Web Junior | En formation | Passionné par l'efficacité",
      "hero-cta-learn": "En savoir plus",
      "hero-cta-contact": "Me contacter",
      "about-title": "Parcours",
      "about-subtitle": "Qui je suis & d'où je viens",
      "about-p1":
        "Après 8 ans en tant qu'électromécanicien industriel, j'ai découvert ma passion pour le développement logiciels. Cette transition m'a donné une perspective unique : je comprends les défis du terrain et je sais que le bon code peut vraiment améliorer les processus.",

      "about-p2":
        "Je suis actuellement en formation comme développeur logiciels, où j'apprends les fondamentaux du web et j'explore les technologies modernes. Ma rigueur et mon expérience industrielle me permettent d'aborder chaque projet avec sérieux et pragmatisme.",

      "about-p3":
        "À court terme, je cherche à maîtriser le web dev. À long terme, j'envisage de canaliser mes compétences vers l'Industrie 4.0 et l'IT-OT pour optimiser les productions. Pour l'instant, je suis enthousiaste à l'idée de travailler sur des projets web concrets.",
      "stat-experience": "Expérience industrielle",
      "stat-projects": "Projets concrets",
      "stat-clients": "Formation DEV",
      "stat-opensource": "Passion future",
      "stat-number-1": "8 ans",
      "stat-number-2": "2",
      "stat-number-3": "En cours",
      "stat-number-4": "IT-OT",
      "projects-title": "Mes Projets",
      "projects-subtitle": "Travaux concrets et expériences d'apprentissage",
      "project-1-title": "Interpréteur BOA",
      "project-1-desc": "Projet académique collaboratif : construire un interpréteur Python complet en équipe. Gestion du parsing, de l'exécution et de la gestion de la mémoire.",
      "project-2-title": "GarageAutoTech",
      "project-2-desc": "Page web pour un garage local. Présentation des services, portfolio de réalisations, et formulaire de contact. Première expérience avec un vrai client.",
      "project-3-title": "Et plus à venir...",
      "project-3-desc": "Je suis en formation constante. Nouveaux projets en cours : approfondissement React, backend Node.js, et bientôt MySQL. Objectif : construire des applications web complètes.",
      "tag-python": "Python",
      "tag-team": "Équipe",
      "tag-html": "HTML/CSS",
      "tag-js": "JavaScript",
      "tag-client": "Client",
      "tag-learning": "Apprentissage",
      "project-link-github": "→ Github",
      "project-link-all": "→ Voir tous les projets",
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
      "footer-projects": "Projets",
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
      "nav-projects": "Projects",
      "nav-contact": "Contact",
      "hero-greeting": "Hello, I'm",
      "hero-tagline":
        "Junior Web Developer | In Training | Passionate about Efficiency",
      "hero-cta-learn": "Learn More",
      "hero-cta-contact": "Get in Touch",
      "about-title": "Background",
      "about-subtitle": "Who I am & where I come from",
      "about-p1":
        "After 8 years as an industrial electromechanic, I discovered my passion for software development. This transition gave me a unique perspective: I understand real-world challenges and know that good code can truly improve processes.",

      "about-p2":
        "I am currently training as a software developer, learning web fundamentals and exploring modern technologies. My rigor and industrial experience allow me to approach each project with seriousness and pragmatism.",

      "about-p3":
        "In the short term, I aim to master web development. Long term, I plan to channel my skills towards Industry 4.0 and IT-OT to optimize production. For now, I'm enthusiastic about working on real web projects.",
      "stat-experience": "Industrial Experience",
      "stat-projects": "Concrete Projects",
      "stat-clients": "Training DEV",
      "stat-opensource": "Future Passion",
      "stat-number-1": "8 years",
      "stat-number-2": "2",
      "stat-number-3": "In progress",
      "stat-number-4": "IT-OT",
      "projects-title": "My Projects",
      "projects-subtitle": "Concrete work and learning experiences",
      "project-1-title": "BOA Interpreter",
      "project-1-desc": "Collaborative academic project: building a complete Python interpreter as a team. Handling parsing, execution, and memory management.",
      "project-2-title": "GarageAutoTech",
      "project-2-desc": "Website for a local garage. Showcasing services, portfolio of work, and contact form. First experience with a real client.",
      "project-3-title": "And more to come...",
      "project-3-desc": "I'm constantly learning. New projects in progress: deepening React skills, Node.js backend, and soon MySQL. Goal: build complete web applications.",
      "tag-python": "Python",
      "tag-team": "Team",
      "tag-html": "HTML/CSS",
      "tag-js": "JavaScript",
      "tag-client": "Client",
      "tag-learning": "Learning",
      "project-link-github": "→ Github",
      "project-link-all": "→ View all projects",
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
      "footer-projects": "Projects",
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
      ".project-card, .stat-card, .contact-info-card, .about__text",
    )
    .forEach(function (el) {
      el.classList.add("fade-in");
      observer.observe(el);
    });
})();
