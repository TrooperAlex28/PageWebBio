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
        "ACDevWeb — Création de sites web modernes, rapides et optimisés pour entrepreneurs, travailleurs autonomes et petites entreprises",
      "nav-home": "Accueil",
      "nav-about": "Pour qui ?",
      "nav-offer": "Approche",
      "nav-pricing": "Tarifs",
      "nav-faq": "FAQ",
      "nav-projects": "Démos",
      "nav-contact": "Contact",
      "skip-link": "Aller au contenu principal",
      "nav-logo-alt": "Logo d'ACDevWeb",
      "hero-name": "Alex Carrière",
      "hero-avatar-alt": "Alex Carrière",
      "footer-name": "Alex Carrière",
      "website-label": "Website",
      "hero-role": "Développeur web",
      "hero-greeting": "Bonjour, je suis",
      "hero-tagline":
        "Je vous propose un site web qui transforme vos visiteurs en clients — sans la complexité.",
      "hero-subtitle":
        "Une présence en ligne professionnelle et percutante, conçue sur mesure pour les travailleurs autonomes et entrepreneurs locaux.",
      "hero-price":
        "Augmentez votre visibilité en ligne — page simple à partir de 250 $",
      "hero-estimate": "Estimation gratuite et sans engagement",
      "hero-cta-primary": "Discuter de mon projet",
      "hero-cta-secondary": "Voir les exemples de projets",
      "hero-cta-pricing": "Voir le détail des tarifs",
      "offer-title": "Un site utile, pas juste une présence en ligne",
      "offer-subtitle":
        "Je conçois des sites simples et efficaces qui inspirent confiance, clarifient votre message et facilitent la prise de contact.",
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
      "pricing-title": "Des tarifs simples et transparents",
      "pricing-subtitle":
        "Un forfait de base solide et des options selon vos besoins réels.",
      "pricing-base-kicker": "Idéal pour démarrer",
      "pricing-base-title": "Forfait Site Vitrine",
      "pricing-base-price": "250 $",
      "pricing-base-feature-1": "✓ Conception & développement (Page unique)",
      "pricing-base-feature-2": "✓ Design responsive (Adapté mobile/tablette)",
      "pricing-base-feature-3": "✓ Optimisation de base (Vitesse & SEO local)",
      "pricing-base-feature-4": "✓ Mise en ligne sur votre hébergeur",
      "pricing-base-feature-5": "✓ Formation de base pour gérer votre site",
      "pricing-base-feature-6":
        "✓ Deux (2) rondes de révisions sont incluses. Toute demande supplémentaire ou modification de structure après validation sera facturée au tarif horaire de 50 $/h.",
      "pricing-options-title": "Options à la carte",
      "pricing-options-subtitle":
        "Ajoutez uniquement ce dont votre activité a besoin :",
      "pricing-option-1": "Formulaire de contact personnalisé",
      "pricing-option-1-price": "+60 $",
      "pricing-option-2": "Galerie photos / Portfolio",
      "pricing-option-2-price": "+60 $",
      "pricing-option-3": "Intégration Google Maps interactive",
      "pricing-option-3-price": "+30 $",
      "pricing-option-4": "Effets visuels et animations modernes",
      "pricing-option-4-price": "+90 $",
      "pricing-option-5": "Option Autonomie / Modification des textes facile",
      "pricing-option-5-price": "+50 $",
      "pricing-note": "* Statut de petit fournisseur — Taxes non applicables.",
      "faq-title": "Questions fréquentes",
      "faq-subtitle":
        "Les réponses aux questions les plus courantes avant de démarrer.",
      "faq-q1":
        "Le prix de 250 $ inclut-il l'hébergement et le nom de domaine ?",
      "faq-a1":
        "Non, les frais d'hébergement et de nom de domaine (environ 50$ à 80$/an) sont à votre charge, mais je vous accompagne pas-à-pas pour les configurer à votre nom afin que vous restiez 100% propriétaire de votre site.",
      "faq-q2": "Pourrai-je modifier le texte de mon site moi-même plus tard ?",
      "faq-a2":
        'Le site est fixe à la base, vous pouvez me demander des modifications ponctuelles, ou ajouter l\'option "Autonomie" pour pouvoir modifier le texte vous-même facilement.',
      "process-title": "Pourquoi travailler avec moi ?",
      "process-subtitle": "Une méthode simple: écouter, structurer, livrer.",
      "process-step-1-title": "Zéro jargon technique",
      "process-step-1-desc":
        "On parle de votre entreprise, de vos services et de vos objectifs. Pas de code compliqué, juste de l'efficacité.",
      "process-step-2-title": "Communication claire",
      "process-step-2-desc":
        "Un échange rapide et transparent pour rester alignés.",
      "process-step-3-title": "Rentable dès le départ",
      "process-step-3-desc":
        "Un site pensé pour respecter le budget d'un projet qui se lance, sans frais cachés ni mauvaise surprise.",
      "process-step-4-title": "Conçu pour convertir",
      "process-step-4-desc":
        "Chaque section et chaque bouton sont optimisés pour inciter vos visiteurs à vous appeler ou à vous écrire.",
      "process-step-5-title": "Délais rapides",
      "process-step-5-desc":
        "Un projet livré rapidement pour que vous puissiez en profiter au plus vite.",
      "process-step-6-title": "Support après livraison",
      "process-step-6-desc":
        "Un accompagnement pour assurer que votre site continue à performer et à répondre à vos besoins.",
      "about-title": "Pour qui ?",
      "about-subtitle":
        "Pensé pour les activités qui veulent une présence crédible sans complexité.",
      "about-p1":
        "Vous êtes un expert dans votre domaine, mais votre site actuel ne le montre pas ? Je crée des vitrines modernes pour les professionnels qui veulent être crédibles en ligne immédiatement.",
      "about-p2":
        "Que vous offriez des services à domicile, des consultations ou que vous gériez un commerce local, votre site doit travailler pour vous et vous amener des demandes.",
      "about-p3":
        "Pas de fioritures inutiles : uniquement ce qui fonctionne pour propulser votre visibilité à Montréal.",
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
      "stat-number-3": "Adapté",
      "stat-number-4": "Clair",
      "projects-title": "Exemples de projets",
      "projects-subtitle": "Quelques pistes concrètes selon les besoins.",
      "projects-note":
        "Chaque exemple peut être ajusté à votre secteur et à vos objectifs.",
      "project-1-title": "Site pour restaurant",
      "project-1-desc":
        "Présentation du menu, réservation en ligne et informations pratiques pour attirer plus de clients.",
      "project-2-title": "Boutique locale",
      "project-2-desc":
        "Mise en valeur des produits, informations pratiques et appel à l’action clair pour faciliter la visite ou l’achat.",
      "project-3-title": "Freelance / travailleur autonome",
      "project-3-desc":
        "Page simple, rapide et professionnelle pour présenter vos services et obtenir plus de demandes.",
      "project-4-title": "Portfolio photographe",
      "project-4-desc":
        "Galerie moderne, présentation claire et prise de contact rapide pour transformer les visiteurs en demandes.",
      "tag-premium": "Rapide",
      "tag-visibility": "Visibilité",
      "tag-trust": "Crédibilité",
      "tag-conversion": "Clients",
      "tag-reassurance": "Confiance",
      "tag-local": "Galerie",
      "tag-mobile": "Mobile",
      "tag-credibility": "Crédibilité",
      "tag-results": "Résultats",
      "project-link-live": "→ Tester la démo en direct",
      "project-link-demo": "→ Demander un devis",
      "contact-title": "Prêt à passer à l'action ?",
      "contact-subtitle":
        "Parlons de votre projet et voyons ce qui peut le faire avancer.",
      "contact-email-label": "E-mail",
      "contact-location-label": "Localisation",
      "contact-location-value": "Disponible à distance",
      "contact-facebook-label": "Facebook Messenger",
      "contact-phone-label": "Téléphone",
      "social-facebook-text": "Facebook",
      "social-linkedin-text": "LinkedIn",
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
      "footer-location": "Développeur web freelance à Montréal",
      "footer-home": "Accueil",
      "footer-about": "À propos",
      "footer-offer": "Approche",
      "footer-projects": "Exemples",
      "footer-contact": "Contact",
      "aria-open-menu": "Ouvrir le menu",
      "aria-close-menu": "Fermer le menu",
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
      "page-title":
        "ACDevWeb — Modern, fast, optimized websites for entrepreneurs, freelancers, and small businesses",
      "nav-home": "Home",
      "nav-about": "Who is it for?",
      "nav-offer": "Approach",
      "nav-pricing": "Pricing",
      "nav-faq": "FAQ",
      "nav-projects": "Demos",
      "nav-contact": "Contact",
      "skip-link": "Skip to main content",
      "nav-logo-alt": "ACDevWeb logo",
      "hero-name": "Alex Carrière",
      "hero-avatar-alt": "Alex Carrière",
      "footer-name": "Alex Carrière",
      "website-label": "Website",
      "hero-role": "Web Developer",
      "hero-greeting": "Hello, I'm",
      "hero-tagline":
        "I create websites that turn your visitors into clients - without the complexity.",
      "hero-subtitle":
        "A professional, impactful online presence tailored for independent workers and local entrepreneurs.",
      "hero-price":
        "Boost your online visibility — single-page sites starting at $250",
      "hero-estimate": "Free estimate and no commitment",
      "hero-cta-primary": "Discuss my project",
      "hero-cta-secondary": "See project examples",
      "hero-cta-pricing": "See pricing details",
      "offer-title": "A useful website, not just an online presence",
      "offer-subtitle":
        "I design simple, effective websites that build trust, clarify your message, and make contact easy.",
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
      "pricing-title": "Simple and transparent pricing",
      "pricing-subtitle":
        "A solid base package and add-ons based on your real needs.",
      "pricing-base-kicker": "Ideal to get started",
      "pricing-base-title": "Showcase Website Package",
      "pricing-base-price": "$250",
      "pricing-base-feature-1": "✓ Design & development (single page)",
      "pricing-base-feature-2": "✓ Responsive design (mobile/tablet friendly)",
      "pricing-base-feature-3": "✓ Basic optimization (speed & local SEO)",
      "pricing-base-feature-4": "✓ Deployment on your hosting",
      "pricing-base-feature-5": "✓ Basic training to manage your site",
      "pricing-base-feature-6":
        "✓ Two (2) rounds of revisions are included. Any additional request or structural change after approval will be billed at the hourly rate of $50/hour.",
      "pricing-options-title": "A la carte options",
      "pricing-options-subtitle": "Add only what your business actually needs:",
      "pricing-option-1": "Custom contact form",
      "pricing-option-1-price": "+$60",
      "pricing-option-2": "Photo gallery / portfolio",
      "pricing-option-2-price": "+$60",
      "pricing-option-3": "Interactive Google Maps integration",
      "pricing-option-3-price": "+$30",
      "pricing-option-4": "Modern visual effects and animations",
      "pricing-option-4-price": "+$90",
      "pricing-option-5": "Self-editing option / Easy text editing",
      "pricing-option-5-price": "+$50",
      "pricing-note": "* Small supplier status — taxes not applicable.",
      "faq-title": "Frequently Asked Questions",
      "faq-subtitle":
        "Answers to the most common questions before getting started.",
      "faq-q1": "Does the $250 price include hosting and the domain name?",
      "faq-a1":
        "No, hosting and domain fees (around $50 to $80/year) are your responsibility, but I guide you step by step to set them up in your name so you remain 100% the owner of your site.",
      "faq-q2": "Will I be able to edit my website text myself later on?",
      "faq-a2":
        'The site is fixed by default, but you can request occasional changes, or add the "Autonomy" option so you can easily edit the text yourself later.',
      "process-title": "Why work with me?",
      "process-subtitle": "A simple method: listen, structure, deliver.",
      "process-step-1-title": "No technical jargon",
      "process-step-1-desc":
        "We talk about your business, your services, and your goals. No complicated code, just efficiency.",
      "process-step-2-title": "Clear communication",
      "process-step-2-desc": "Fast, transparent exchanges so we stay aligned.",
      "process-step-3-title": "Profitable from day one",
      "process-step-3-desc": "A project built around your reality and budget.",
      "process-step-4-title": "Built to convert",
      "process-step-4-desc":
        "Every section and every button is optimized to prompt your visitors to call or message you.",
      "process-step-5-title": "Fast delivery",
      "process-step-5-desc":
        "A project delivered quickly so you can start benefiting from it as soon as possible.",
      "process-step-6-title": "Support after delivery",
      "process-step-6-desc":
        "Support to ensure your site continues to perform and meet your needs.",
      "about-title": "Who is it for?",
      "about-subtitle":
        "Built for businesses that want a credible presence without complexity.",
      "about-p1":
        "You know your craft, but your current website does not show it? I create modern showcases for professionals who want to look credible online right away.",
      "about-p2":
        "Whether you offer home services, consultations, or run a local shop, your website should work for you and bring in inquiries.",
      "about-p3":
        "No unnecessary fluff: only what works to boost your visibility in Montreal.",
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
      "stat-number-3": "Adapted",
      "stat-number-4": "Clear",
      "projects-title": "Project examples",
      "projects-subtitle":
        "A few concrete directions based on different needs.",
      "projects-note":
        "Each example can be adapted to your industry and goals.",
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
      "tag-mobile": "Mobile",
      "tag-credibility": "Credibility",
      "tag-results": "Results",
      "project-link-live": "→ Test the live demo",
      "project-link-demo": "→ Request a quote",
      "contact-title": "Ready to take action?",
      "contact-subtitle":
        "Let's talk about your project and see what can move it forward.",
      "contact-email-label": "Email",
      "contact-location-label": "Location",
      "contact-location-value": "Available worldwide (Remote)",
      "contact-facebook-label": "Facebook Messenger",
      "contact-phone-label": "Phone",
      "social-facebook-text": "Facebook",
      "social-linkedin-text": "LinkedIn",
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
      "footer-location": "Freelance web developer based in Montreal",
      "footer-home": "Home",
      "footer-about": "About",
      "footer-offer": "Approach",
      "footer-projects": "Examples",
      "footer-contact": "Contact",
      "aria-open-menu": "Open menu",
      "aria-close-menu": "Close menu",
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

    // Alt text
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (t[key] !== undefined) el.setAttribute("alt", t[key]);
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

    var navToggleEl = document.getElementById("nav-toggle");
    if (navToggleEl) {
      var isExpanded = navToggleEl.getAttribute("aria-expanded") === "true";
      navToggleEl.setAttribute(
        "aria-label",
        t[isExpanded ? "aria-close-menu" : "aria-open-menu"],
      );
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
    function closeNavMenu() {
      navList.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute(
        "aria-label",
        translations[currentLang]["aria-open-menu"],
      );
      document.body.classList.remove("nav-open");
    }

    function toggleNavMenu() {
      const isOpen = navList.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute(
        "aria-label",
        translations[currentLang][
          isOpen ? "aria-close-menu" : "aria-open-menu"
        ],
      );
      document.body.classList.toggle("nav-open", isOpen);
    }

    navToggle.addEventListener("click", toggleNavMenu);

    // Close menu when a link is clicked
    navList.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        closeNavMenu();
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navList.classList.contains("open")) {
        closeNavMenu();
        navToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!navList.classList.contains("open")) return;
      const clickedInsideMenu = navList.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);
      if (!clickedInsideMenu && !clickedToggle) {
        closeNavMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 600 && navList.classList.contains("open")) {
        closeNavMenu();
      }
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
