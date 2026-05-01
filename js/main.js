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
      "page-title": "Alex — Visibilité locale et sites web qui convertissent",
      "nav-home": "Accueil",
      "nav-about": "À propos",
      "nav-offer": "Offre",
      "nav-projects": "Démos",
      "nav-contact": "Contact",
      "hero-greeting": "Bonjour, je suis",
      "hero-tagline":
        "Je crée des pages web qui donnent plus de visibilité, de crédibilité et de contacts aux professionnels indépendants.",
      "hero-price": "Pack visibilité locale dès 250$",
      "hero-cta-primary": "Voir l'approche",
      "hero-cta-secondary": "Demander un audit",
      "offer-title": "Ce que votre présence en ligne doit faire",
      "offer-subtitle":
        "Elle doit vous rendre visible, rassurer vos prospects et déclencher un premier contact.",
      "offer-card-1-title": "Être trouvé",
      "offer-card-1-desc":
        "Une base claire pour le référencement local et une lecture rapide sur mobile.",
      "offer-card-2-title": "Inspirer confiance",
      "offer-card-2-desc":
        "Une proposition de valeur nette, des preuves visibles et un design sérieux.",
      "offer-card-3-title": "Convertir",
      "offer-card-3-desc":
        "Un parcours simple vers la prise de contact, sans friction.",
      "process-title": "Ma méthode en 3 étapes",
      "process-subtitle":
        "Un cadre simple pour avancer vite sans perdre le message.",
      "process-step-1-title": "Audit rapide",
      "process-step-1-desc":
        "On clarifie votre activité, votre cible et le message à faire passer.",
      "process-step-2-title": "Structure et contenu",
      "process-step-2-desc":
        "Je construis une page qui met en avant vos services, vos preuves et votre contact.",
      "process-step-3-title": "Mise en ligne",
      "process-step-3-desc":
        "Vous recevez une page prête à être partagée et utilisée pour générer des demandes.",
      "about-title": "Pourquoi travailler avec moi ?",
      "about-subtitle":
        "Je transforme une présence en ligne en outil de crédibilité.",
      "about-p1":
        "Je viens d'un environnement où la rigueur, la clarté et l'efficacité comptent vraiment. J'applique ce même cadre au web pour construire des pages utiles, lisibles et rassurantes.",
      "about-p2":
        "Mon objectif n'est pas de faire une vitrine jolie seulement. Je veux structurer votre message, guider vos visiteurs et augmenter les demandes entrantes.",
      "about-p3":
        "Si vous êtes indépendant et que vous voulez une présence crédible sans passer par une grosse agence, je peux vous aider à lancer un site clair, rapide et cohérent avec votre activité.",
      "skill-visibility": "Visibilité locale",
      "skill-html": "HTML/CSS",
      "skill-js": "JavaScript",
      "skill-seo": "SEO de base",
      "skill-mobile": "Mobile-first",
      "stat-experience": "Sur le web",
      "stat-projects": "Démos à présenter",
      "stat-clients": "Objectif clair",
      "stat-opensource": "Pensé mobile",
      "stat-number-1": "Visibilité",
      "stat-number-2": "4",
      "stat-number-3": "1",
      "stat-number-4": "100%",
      "projects-title": "Démos à présenter",
      "projects-subtitle":
        "Des exemples pensés pour vendre une solution, pas seulement montrer du code.",
      "projects-note":
        "Chaque démo peut être adaptée à votre secteur d'activité et à vos besoins spécifiques.",
      "project-1-title": "Photographe — Portfolio pour artistes",
      "project-1-desc":
        "Portfolio moderne pour photographe : galerie photos, présentation, formulaire de contact rapide. Optimisé pour le référencement local et la prise de rendez-vous.",
      "project-2-title": "Resto du coin — Menus et contact",
      "project-2-desc":
        "Présentation claire du menu, horaires et photos, accès direct à la réservation ou commande par téléphone. Idéal pour attirer de nouveaux clients locaux.",
      "project-3-title":
        "Esthéticienne — Présence complète & prise de rendez-vous",
      "project-3-desc":
        "Page stylée : présentation, tarifs, galerie photos, prise de rendez-vous en ligne, liens réseaux sociaux. Optimisée pour la confiance et la conversion.",
      "project-4-title":
        "Garage premium — Information clair et prises de contacts",
      "project-4-desc":
        "Présentation élégante, prise de rendez-vous en ligne, integration de Google Maps, mise en avant des services. Idéal pour une clientèle recherchant un service de qualité.",
      "tag-premium": "Premium",
      "project-5-title": "Template projet — Exemple adaptable",
      "project-5-desc":
        "Un modèle de page personnalisable pour tout secteur : structure claire, sections adaptables, design moderne. Parfait pour montrer le potentiel aux clients.",
      "tag-visibility": "Visibilité",
      "tag-trust": "Crédibilité",
      "tag-conversion": "Conversion",
      "project-link-live": "→ Voir la démo en ligne",
      "tag-reassurance": "Confiance",
      "tag-local": "Local",
      "tag-mobile": "Mobile",
      "project-link-demo": "→ Demander ce modèle",
      "contact-title": "Vous voulez la même chose ?",
      "contact-subtitle":
        "Décrivez votre activité et je vous dirai comment la rendre plus crédible en ligne.",
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
      "footer-offer": "Offre",
      "footer-projects": "Démos",
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
      "page-title": "Alex — Local visibility and websites that convert",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-offer": "Offer",
      "nav-projects": "Demos",
      "nav-contact": "Contact",
      "hero-greeting": "Hello, I'm",
      "hero-tagline":
        "I create web pages that give independent professionals more visibility, credibility, and qualified leads.",
      "hero-price": "Local visibility package from $250",
      "hero-cta-primary": "See the approach",
      "hero-cta-secondary": "Request an audit",
      "offer-title": "What your online presence should do",
      "offer-subtitle":
        "It should make you visible, reassure prospects, and trigger a first contact.",
      "offer-card-1-title": "Get found",
      "offer-card-1-desc":
        "A clear base for local SEO and fast reading on mobile.",
      "offer-card-2-title": "Build trust",
      "offer-card-2-desc":
        "A sharp value proposition, visible proof, and a serious design.",
      "offer-card-3-title": "Convert",
      "offer-card-3-desc": "A simple path to contact, without friction.",
      "process-title": "My 3-step process",
      "process-subtitle":
        "A simple framework to move fast without losing the message.",
      "process-step-1-title": "Quick audit",
      "process-step-1-desc":
        "We clarify your business, audience, and the message to communicate.",
      "process-step-2-title": "Structure and content",
      "process-step-2-desc":
        "I build a page that highlights your services, proof, and contact path.",
      "process-step-3-title": "Go live",
      "process-step-3-desc":
        "You get a page ready to share and use to generate inquiries.",
      "about-title": "Why work with me?",
      "about-subtitle": "I turn an online presence into a credibility tool.",
      "about-p1":
        "I come from an environment where rigor, clarity, and efficiency really matter. I apply that same framework to the web to build pages that are useful, readable, and reassuring.",
      "about-p2":
        "My goal is not to create a pretty brochure only. I want to structure your message, guide visitors, and increase inbound requests.",
      "about-p3":
        "If you are an independent professional and want a credible presence without a big agency, I can help you launch a clear, fast, and consistent site.",
      "skill-visibility": "Local visibility",
      "skill-html": "HTML/CSS",
      "skill-js": "JavaScript",
      "skill-seo": "Basic SEO",
      "skill-mobile": "Mobile-first",
      "stat-experience": "On the web",
      "stat-projects": "Demos to present",
      "stat-clients": "Clear goal",
      "stat-opensource": "Mobile-first",
      "stat-number-1": "Visibility",
      "stat-number-2": "4",
      "stat-number-3": "1",
      "stat-number-4": "100%",
      "projects-title": "Demos to present",
      "projects-subtitle":
        "Examples designed to sell a solution, not just show code.",
      "projects-note":
        "Each demo can be adapted to your industry and specific needs.",
      "project-1-title": "Photographer — Portfolio for artists",
      "project-1-desc":
        "Modern portfolio for a photographer: photo gallery, about section, quick contact form. Optimized for local visibility and appointment booking.",
      "project-2-title": "Small restaurant — Menus and contact",
      "project-2-desc":
        "Clear menu presentation, photos, direct access to phone booking or ordering. Perfect to attract new local customers.",
      "project-3-title": "Beautician — Full presence & booking",
      "project-3-desc":
        "Complete page: presentation, prices, photo gallery, social links. Optimized for trust and conversion.",
      "project-4-title": "Premium garage — Clear info and contact points",
      "project-4-desc":
        "Elegant presentation, online booking, photo gallery, Google Maps integration, and premium services highlighted. Perfect for a demanding clientele.",
      "tag-premium": "Premium",
      "project-5-title": "Project template — Adaptable example",
      "project-5-desc":
        "A customizable page template for any sector: clear structure, adaptable sections, modern design. Perfect to show clients the potential.",
      "tag-visibility": "Visibility",
      "tag-trust": "Credibility",
      "tag-conversion": "Conversion",
      "project-link-live": "→ View the demo online",
      "tag-reassurance": "Trust",
      "tag-local": "Local",
      "tag-mobile": "Mobile",
      "project-link-demo": "→ Request this model",
      "contact-title": "Want the same thing?",
      "contact-subtitle":
        "Tell me about your business and I'll show you how to make it more credible online.",
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
      "footer-offer": "Offer",
      "footer-projects": "Demos",
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
