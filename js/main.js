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
      "page-title":
        "Alex — Création de sites web professionnels qui génèrent des clients",
      "nav-home": "Accueil",
      "nav-about": "À propos",
      "nav-offer": "Approche",
      "nav-projects": "Démos",
      "nav-contact": "Contact",
      "hero-greeting": "Bonjour, je suis",
      "hero-tagline":
        "Création de sites web professionnels qui génèrent des clients.",
      "hero-price": "Modernes, rapides et optimisés",
      "hero-cta-primary": "Demande de devis gratuite",
      "hero-cta-secondary": "Voir des exemples",
      "offer-title": "Votre présence en ligne mérite mieux qu’un simple site",
      "offer-subtitle":
        "Je crée des sites web modernes, rapides et optimisés pour aider les entrepreneurs, travailleurs autonomes et petites entreprises à attirer plus de clients.",
      "offer-card-1-title": "Création de site web complet",
      "offer-card-1-desc":
        "Un site professionnel, adapté à votre image et à vos objectifs.",
      "offer-card-2-title": "Optimisation de performance",
      "offer-card-2-desc":
        "Des pages rapides qui gardent vos visiteurs engagés.",
      "offer-card-3-title": "Design responsive",
      "offer-card-3-desc":
        "Un site parfaitement adapté mobile, tablette et ordinateur.",
      "offer-card-4-title": "Optimisation conversion",
      "offer-card-4-desc":
        "Structure pensée pour transformer vos visiteurs en clients.",
      "process-title": "Pourquoi travailler avec moi ?",
      "process-subtitle":
        "Une approche simple et efficace, une communication claire et des solutions adaptées à votre budget.",
      "process-step-1-title": "Audit rapide",
      "process-step-1-desc":
        "Approche simple et efficace pour aller droit au but.",
      "process-step-2-title": "Communication claire",
      "process-step-2-desc":
        "Un échange rapide et transparent pour rester alignés.",
      "process-step-3-title": "Solutions adaptées",
      "process-step-3-desc":
        "Un projet pensé pour votre budget et votre réalité.",
      "process-step-4-title": "Résultats concrets",
      "process-step-4-desc":
        "Chaque décision vise à améliorer la crédibilité et les conversions.",
      "about-title": "Pour qui ?",
      "about-subtitle":
        "Pensé pour les activités qui veulent attirer plus de clients sans gros budget.",
      "about-p1":
        "Petites entreprises locales, travailleurs autonomes et commerçants qui ont besoin d’un site clair et efficace.",
      "about-p2":
        "Artistes, photographes et freelances qui veulent une vitrine moderne pour présenter leur travail.",
      "about-p3":
        "Des solutions simples, intelligentes et orientées présence en ligne.",
      "skill-visibility": "Petites entreprises",
      "skill-html": "Travailleurs autonomes",
      "skill-js": "Artistes / photographes",
      "skill-seo": "Commerçants",
      "skill-mobile": "Freelances",
      "stat-experience": "orienté utilisateur",
      "stat-projects": "chargement optimisé",
      "stat-clients": "mobile, tablette, ordinateur",
      "stat-opensource": "message direct",
      "stat-number-1": "100%",
      "stat-number-2": "Rapide",
      "stat-number-3": "Responsive",
      "stat-number-4": "Clair",
      "projects-title": "Exemples de projets",
      "projects-subtitle":
        "Des idées concrètes adaptées à différents profils et besoins.",
      "projects-note":
        "Chaque projet peut être adapté à votre secteur d'activité et à vos objectifs.",
      "project-1-title": "Artiste — Portfolio pour artistes",
      "project-1-desc":
        "Portfolio moderne pour photographe, tatoueur, artiste : galerie photos, présentation, formulaire de contact rapide. Optimisé pour le référencement local et la prise de rendez-vous.",
      "project-2-title": "Boutique locale, café, restaurant",
      "project-2-desc":
        "Mise en valeur des produits, informations pratiques et appel à l'action clair pour faciliter la visite ou l’achat.",
      "project-3-title":
        "travailleur autonome, esthéticienne, coach, consultant...",
      "project-3-desc":
        "Page simple, rapide et professionnelle pour présenter vos services et obtenir plus de demandes.",
      "project-4-title": "Service — Information clair et prises de contacts",
      "project-4-desc":
        "Présentation élégante, prise de rendez-vous facile, integration de Google Maps, mise en avant des services. Idéal pour une clientèle recherchant un service de qualité.",
      "tag-premium": "Professionnel",
      "project-5-title": "Batissons ensemble votre présence en lignes",
      "project-5-desc":
        "Un site professionnel, une meilleure image de marque, plus de crédibilité et une base solide pour attirer des clients. Créons ensemble une page qui travaille pour vous.",
      "tag-visibility": "Visibilité",
      "tag-trust": "Crédibilité",
      "tag-conversion": "Clients",
      "tag-reassurance": "Confiance",
      "tag-local": "Local",
      "tag-mobile": "Contact rapide",
      "tag-credibility": "Crédibilité",
      "tag-results": "Résultats",
      "project-link-live": "→ Voir un exemple en ligne",
      "project-link-demo": "→ Demander un devis",
      "contact-title": "Prêt à passer au niveau supérieur ?",
      "contact-subtitle":
        "Discutons de votre projet et voyons comment je peux vous aider.",
      "contact-email-label": "E-mail",
      "contact-location-label": "Localisation",
      "contact-location-value": "Disponible à distance",
      "contact-phone-label": "Téléphone",
      "form-name-label": "Nom complet",
      "form-email-label": "Adresse e-mail",
      "form-subject-label": "Sujet",
      "form-message-label": "Message",
      "form-submit": "Envoyer le message",
      "placeholder-name": "Votre nom",
      "placeholder-email": "vous@exemple.com",
      "placeholder-subject":
        "Votre activité (coach, thérapeute, consultant...)",
      "placeholder-message": "Parlez-moi de votre projet ou question\u2026",
      "footer-rights": "Tous droits réservés.",
      "footer-home": "Accueil",
      "footer-about": "À propos",
      "footer-offer": "Approche",
      "footer-projects": "Exemples",
      "footer-contact": "Contact",
      "aria-open-menu": "Ouvrir le menu",
      "aria-back-to-top": "Retour en haut",
      "error-name":
        "Veuillez entrer votre nom complet (au moins 2 caractères).",
      "error-email": "Veuillez entrer une adresse e-mail valide.",
      "error-message": "Veuillez entrer un message (au moins 10 caractères).",
      "sending-message": "Envoi en cours...",
      "success-message": "✓ Merci\u00a0! Votre message a été envoyé.",
      "send-error-message":
        "Impossible d'envoyer le message pour le moment. Réessayez plus tard.",
      "lang-toggle-text": "EN",
      "lang-toggle-label": "Switch to English",
    },
    en: {
      "page-title": "Alex — Professional websites that generate clients",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-offer": "Approach",
      "nav-projects": "Demos",
      "nav-contact": "Contact",
      "hero-greeting": "Hello, I'm",
      "hero-tagline": "Professional websites that generate clients.",
      "hero-price": "Modern, fast, and optimized",
      "hero-cta-primary": "Free quote request",
      "hero-cta-secondary": "See examples",
      "offer-title":
        "Your online presence deserves better than a simple website",
      "offer-subtitle":
        "I create modern, fast, and optimized websites to help entrepreneurs, independent workers, and small businesses attract more clients.",
      "offer-card-1-title": "Full website creation",
      "offer-card-1-desc":
        "A professional site tailored to your image and goals.",
      "offer-card-2-title": "Performance optimization",
      "offer-card-2-desc": "Fast pages that keep your visitors engaged.",
      "offer-card-3-title": "Responsive design",
      "offer-card-3-desc":
        "A site perfectly adapted to mobile, tablet, and desktop.",
      "offer-card-4-title": "Conversion optimization",
      "offer-card-4-desc":
        "Structure designed to turn your visitors into clients.",
      "process-title": "Why work with me?",
      "process-subtitle":
        "A simple and effective approach, clear communication, and solutions adapted to your budget.",
      "process-step-1-title": "Quick audit",
      "process-step-1-desc":
        "Simple and effective approach to get straight to the point.",
      "process-step-2-title": "Clear communication",
      "process-step-2-desc": "Fast, transparent exchanges so we stay aligned.",
      "process-step-3-title": "Budget-friendly solutions",
      "process-step-3-desc": "A project built around your reality and budget.",
      "process-step-4-title": "Concrete results",
      "process-step-4-desc":
        "Every decision aims to improve credibility and conversions.",
      "about-title": "Who is it for?",
      "about-subtitle":
        "Built for businesses that want more clients without a big budget.",
      "about-p1":
        "Local small businesses, independent workers, and shop owners who need a clear and effective website.",
      "about-p2":
        "Artists, photographers, and freelancers who want a modern showcase for their work.",
      "about-p3": "Simple, intelligent solutions focused on online presence.",
      "skill-visibility": "Small businesses",
      "skill-html": "Independent workers",
      "skill-js": "Artists / photographers",
      "skill-seo": "Shop owners",
      "skill-mobile": "Freelancers",
      "stat-experience": "user-focused",
      "stat-projects": "optimized loading",
      "stat-clients": "mobile, tablet, desktop",
      "stat-opensource": "direct message",
      "stat-number-1": "100%",
      "stat-number-2": "Fast",
      "stat-number-3": "Responsive",
      "stat-number-4": "Clear",
      "projects-title": "Project examples",
      "projects-subtitle":
        "Concrete ideas adapted to different profiles and needs.",
      "projects-note":
        "Each project can be adapted to your industry and goals.",
      "project-1-title": "Restaurant website",
      "project-1-desc":
        "Menu presentation, online booking, and practical information to attract more clients.",
      "project-2-title": "Local shop",
      "project-2-desc":
        "Product showcase, practical information, and a clear call to action to make visits or purchases easier.",
      "project-3-title": "Freelancer / independent worker",
      "project-3-desc":
        "A simple, fast, and professional page to present your services and get more inquiries.",
      "project-4-title": "Photographer portfolio",
      "project-4-desc":
        "Modern gallery, clear presentation, and quick contact to turn visitors into inquiries.",
      "tag-premium": "Fast",
      "project-5-title": "A website that works for you",
      "project-5-desc":
        "A professional website, a better brand image, more credibility, and a solid foundation to attract clients.",
      "tag-visibility": "Visibility",
      "tag-trust": "Credibility",
      "tag-conversion": "Clients",
      "tag-reassurance": "Trust",
      "tag-local": "Gallery",
      "tag-mobile": "Contact",
      "tag-credibility": "Credibility",
      "tag-results": "Results",
      "project-link-live": "→ View an example online",
      "project-link-demo": "→ Request a quote",
      "contact-title": "Ready to level up?",
      "contact-subtitle":
        "Let's talk about your project and see how I can help.",
      "contact-email-label": "Email",
      "contact-location-label": "Location",
      "contact-location-value": "Available worldwide (Remote)",
      "contact-phone-label": "Phone",
      "form-name-label": "Full Name",
      "form-email-label": "Email Address",
      "form-subject-label": "Subject",
      "form-message-label": "Message",
      "form-submit": "Send Message",
      "placeholder-name": "Your name",
      "placeholder-email": "you@example.com",
      "placeholder-subject": "Your business (coach, therapist, consultant...)",
      "placeholder-message": "Tell me about your project or question\u2026",
      "footer-rights": "All rights reserved.",
      "footer-home": "Home",
      "footer-about": "About",
      "footer-offer": "Approach",
      "footer-projects": "Examples",
      "footer-contact": "Contact",
      "aria-open-menu": "Open menu",
      "aria-back-to-top": "Back to top",
      "error-name": "Please enter your full name (at least 2 characters).",
      "error-email": "Please enter a valid email address.",
      "error-message": "Please enter a message (at least 10 characters).",
      "sending-message": "Sending...",
      "success-message": "✓ Thank you! Your message has been sent.",
      "send-error-message":
        "Unable to send your message right now. Please try again later.",
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
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      clearFormMessage();

      if (validateForm()) {
        setSubmitting(true, submitButton);

        try {
          await sendContactForm();
          showSuccess();
          form.reset();
        } catch (error) {
          showSendError(error && error.message ? error.message : "");
        } finally {
          setSubmitting(false, submitButton);
        }
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

  async function sendContactForm() {
    const payload = {
      website: document.getElementById("website")?.value.trim() || "",
      name: document.getElementById("name")?.value.trim() || "",
      email: document.getElementById("email")?.value.trim() || "",
      subject: document.getElementById("subject")?.value.trim() || "",
      message: document.getElementById("message")?.value.trim() || "",
    };

    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    const endpoint = isLocalhost
      ? "/api/contact"
      : "/.netlify/functions/contact";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    let data = null;

    if (responseText) {
      try {
        data = JSON.parse(responseText);
      } catch (_error) {
        data = null;
      }
    }

    if (!response.ok) {
      const statusInfo = response.status
        ? " (HTTP " + response.status + ")"
        : "";
      const bodyInfo = data && data.error ? data.error : responseText.trim();
      throw new Error(
        (bodyInfo || "Failed to send contact form.") + statusInfo,
      );
    }

    return data;
  }

  function setSubmitting(isSubmitting, button) {
    if (!button) return;
    const t = translations[currentLang];
    button.disabled = isSubmitting;
    button.textContent = isSubmitting ? t["sending-message"] : t["form-submit"];
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
    successEl.classList.remove("is-error");
    successEl.textContent = t["success-message"];
    setTimeout(function () {
      successEl.textContent = "";
    }, 6000);
  }

  function showSendError(serverMessage) {
    const t = translations[currentLang];
    const successEl = document.getElementById("form-success");
    if (!successEl) return;
    successEl.classList.add("is-error");
    successEl.textContent = serverMessage || t["send-error-message"];
  }

  function clearFormMessage() {
    const successEl = document.getElementById("form-success");
    if (!successEl) return;
    successEl.classList.remove("is-error");
    successEl.textContent = "";
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
