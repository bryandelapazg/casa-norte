
/* ==========================================
   CASA NORTE — BEMA STUDIOS
   Main JavaScript
   Navigation / Languages / Scroll / UI
========================================== */

"use strict";

document.documentElement.classList.add("js-ready");

document.addEventListener("DOMContentLoaded", () => {

  /* ========================================
     01 — ELEMENTS
  ======================================== */

  const header = document.querySelector("#site-header");
  const menuToggle = document.querySelector("#menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");
  const languageToggle = document.querySelector("#language-toggle");

  const revealElements = document.querySelectorAll(".reveal");

  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");
  /* ========================================
     02 — TRANSLATIONS
  ======================================== */

  const translations = {

    en: {
      navAbout: "About",
      navResidences: "Residences",
      navServices: "Services",
      navContact: "Contact",

      heroEyebrow: "PRIVATE REAL ESTATE / INTERNATIONAL",
      heroTitle: "Beyond property.<br><em>Toward possibility.</em>",
      heroDescription:
        "An exceptional collection of residences, curated for a life beyond the ordinary.",
      heroButton: "Explore residences",
      scrollLabel: "SCROLL TO EXPLORE",

      aboutLabel: "OUR PHILOSOPHY",
      aboutTitle: "Spaces with<br><em>intention.</em>",
      aboutDescription:
        "We believe exceptional living begins with extraordinary spaces. Our approach brings architecture, lifestyle and thoughtful guidance together.",
      aboutLink: "Discover our approach",

      residencesLabel: "THE COLLECTION",
      residencesTitle: "Selected<br><em>residences.</em>",
      residencesDescription:
        "A considered selection of remarkable homes across extraordinary destinations.",

      property1Beds: "5 Bedrooms",
      property1Baths: "6 Bathrooms",
      property2Beds: "3 Bedrooms",
      property2Baths: "3 Bathrooms",
      property3Beds: "6 Bedrooms",
      property3Baths: "7 Bathrooms",

      viewProperty: "Explore property",
      propertyDisclaimer:
        "Concept properties and illustrative prices. Not actual real estate listings.",

      servicesLabel: "OUR EXPERTISE",
      servicesTitle:
        "Expertise, thoughtfully<br><em>delivered.</em>",

      serviceBuy: "Buying",
      serviceBuyDescription:
        "Find a residence that reflects your ambitions and lifestyle.",

      serviceSell: "Selling",
      serviceSellDescription:
        "Thoughtful positioning for exceptional properties.",

      serviceValue: "Valuation",
      serviceValueDescription:
        "A considered perspective on property value.",

      serviceInvest: "Investment",
      serviceInvestDescription:
        "Discover opportunities with long-term potential.",

      processLabel: "THE PROCESS",
      processTitle: "A clear path<br><em>forward.</em>",

      step1Title: "Discover",
      step1Description:
        "Understanding your vision, priorities and aspirations.",

      step2Title: "Curate",
      step2Description:
        "Identifying residences aligned with your lifestyle.",

      step3Title: "Advise",
      step3Description:
        "Providing clarity throughout each decision.",

      step4Title: "Move",
      step4Description:
        "Supporting the transition into your next chapter.",

      editorialTitle:
        "Architecture is where<br><em>life takes shape.</em>",

      storiesLabel: "CLIENT STORIES",
      storiesTitle: "The value<br><em>of trust.</em>",

      testimonial1:
        "“A thoughtful approach that made finding the right home feel personal and effortless.”",

      testimonial2:
        "“Every detail reflected a genuine understanding of how we wanted to live.”",

      testimonialDisclaimer:
        "Fictional testimonials created for portfolio demonstration.",

      contactLabel: "START A CONVERSATION",
      contactTitle:
        "Your next chapter<br><em>starts here.</em>",
      contactDescription:
        "Every extraordinary journey begins with a conversation.",

      formName: "Your name",
      formEmail: "Email address",
      formInterest: "I'm interested in",
      formSelect: "Select an option",
      formOther: "Other inquiry",
      formMessage: "Your message",
      formSubmit: "Send inquiry",
      formDemo:
        "Demonstration form. Submissions are not enabled.",

      backToTop: "Back to top",
      footerConcept:
        "A conceptual real estate experience by BEMA Studios.",
      footerDisclaimer:
        "Casa Norte is a fictional brand created for design portfolio purposes. Properties, prices and testimonials are illustrative."
    },

    es: {
      navAbout: "Nosotros",
      navResidences: "Residencias",
      navServices: "Servicios",
      navContact: "Contacto",

      heroEyebrow: "BIENES RAÍCES PRIVADOS / INTERNACIONAL",
      heroTitle: "Más allá de una propiedad.<br><em>Hacia nuevas posibilidades.</em>",
      heroDescription:
        "Una colección excepcional de residencias, seleccionadas para una vida fuera de lo ordinario.",
      heroButton: "Explorar residencias",
      scrollLabel: "DESLIZA PARA EXPLORAR",

      aboutLabel: "NUESTRA FILOSOFÍA",
      aboutTitle: "Espacios con<br><em>intención.</em>",
      aboutDescription:
        "Creemos que una vida extraordinaria comienza con espacios excepcionales. Nuestro enfoque une arquitectura, estilo de vida y asesoramiento personalizado.",
      aboutLink: "Conoce nuestro enfoque",

      residencesLabel: "LA COLECCIÓN",
      residencesTitle: "Residencias<br><em>seleccionadas.</em>",
      residencesDescription:
        "Una selección cuidadosamente diseñada de hogares extraordinarios en destinos excepcionales.",

      property1Beds: "5 Habitaciones",
      property1Baths: "6 Baños",
      property2Beds: "3 Habitaciones",
      property2Baths: "3 Baños",
      property3Beds: "6 Habitaciones",
      property3Baths: "7 Baños",

      viewProperty: "Explorar propiedad",
      propertyDisclaimer:
        "Propiedades conceptuales y precios ilustrativos. No son anuncios inmobiliarios reales.",

      servicesLabel: "NUESTRA EXPERIENCIA",
      servicesTitle:
        "Experiencia, cuidadosamente<br><em>entregada.</em>",

      serviceBuy: "Comprar",
      serviceBuyDescription:
        "Encuentra una residencia que refleje tus aspiraciones y estilo de vida.",

      serviceSell: "Vender",
      serviceSellDescription:
        "Un posicionamiento estratégico para propiedades excepcionales.",

      serviceValue: "Valoración",
      serviceValueDescription:
        "Una perspectiva informada sobre el valor de tu propiedad.",

      serviceInvest: "Invertir",
      serviceInvestDescription:
        "Descubre oportunidades con potencial a largo plazo.",

      processLabel: "NUESTRO PROCESO",
      processTitle: "Un camino claro<br><em>hacia adelante.</em>",

      step1Title: "Descubrir",
      step1Description:
        "Comprendemos tu visión, prioridades y aspiraciones.",

      step2Title: "Seleccionar",
      step2Description:
        "Identificamos residencias alineadas con tu estilo de vida.",

      step3Title: "Asesorar",
      step3Description:
        "Aportamos claridad en cada decisión.",

      step4Title: "Avanzar",
      step4Description:
        "Te acompañamos en la transición hacia tu próxima etapa.",

      editorialTitle:
        "La arquitectura es donde<br><em>la vida toma forma.</em>",

      storiesLabel: "HISTORIAS DE CLIENTES",
      storiesTitle: "El valor<br><em>de la confianza.</em>",

      testimonial1:
        "“Un enfoque cuidadoso que hizo que encontrar el hogar ideal fuera una experiencia personal y sencilla.”",

      testimonial2:
        "“Cada detalle reflejaba una comprensión auténtica de cómo queríamos vivir.”",

      testimonialDisclaimer:
        "Testimonios ficticios creados para demostrar el diseño del portafolio.",

      contactLabel: "INICIEMOS UNA CONVERSACIÓN",
      contactTitle:
        "Tu próximo capítulo<br><em>comienza aquí.</em>",
      contactDescription:
        "Todo viaje extraordinario comienza con una conversación.",

      formName: "Tu nombre",
      formEmail: "Correo electrónico",
      formInterest: "Me interesa",
      formSelect: "Selecciona una opción",
      formOther: "Otra consulta",
      formMessage: "Tu mensaje",
      formSubmit: "Enviar consulta",
      formDemo:
        "Formulario de demostración. Los envíos no están habilitados.",

      backToTop: "Volver arriba",
      footerConcept:
        "Una experiencia inmobiliaria conceptual de BEMA Studios.",
      footerDisclaimer:
        "Casa Norte es una marca ficticia creada para un portafolio de diseño. Las propiedades, los precios y los testimonios son ilustrativos."
    }
  };

  /* ========================================
     03 — LANGUAGE SYSTEM
  ======================================== */

  const htmlTranslationKeys = new Set([
    "heroTitle",
    "aboutTitle",
    "residencesTitle",
    "servicesTitle",
    "processTitle",
    "editorialTitle",
    "storiesTitle",
    "contactTitle"
  ]);

  function getSavedLanguage() {
    try {
      return localStorage.getItem("casaNorteLanguage");
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem("casaNorteLanguage", language);
    } catch (error) {
      // Storage may be unavailable in private browsing.
    }
  }

  let currentLanguage =
    getSavedLanguage() === "es" ? "es" : "en";

  function setLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {

      const key = element.dataset.i18n;
      const translation = translations[language][key];

      if (translation === undefined) return;

      if (htmlTranslationKeys.has(key)) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }

    });

    if (languageToggle) {
      languageToggle.textContent =
        language === "en" ? "EN / ES" : "ES / EN";

      languageToggle.setAttribute(
        "aria-label",
        language === "en"
          ? "Switch language to Spanish"
          : "Cambiar idioma a inglés"
      );
    }

    document.title =
      language === "en"
        ? "Casa Norte — Private Real Estate"
        : "Casa Norte — Bienes Raíces de Lujo";

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.content =
        language === "en"
          ? "Casa Norte is a conceptual international real estate brand showcasing extraordinary residences and architectural living."
          : "Casa Norte es una marca inmobiliaria internacional conceptual dedicada a residencias extraordinarias y arquitectura de lujo.";
    }

    const menuIsOpen =
      menuToggle?.getAttribute("aria-expanded") === "true";

    if (menuToggle) {
      menuToggle.setAttribute(
        "aria-label",
        menuIsOpen
          ? (language === "en"
              ? "Close navigation menu"
              : "Cerrar menú de navegación")
          : (language === "en"
              ? "Open navigation menu"
              : "Abrir menú de navegación")
      );
    }

    saveLanguage(language);

    document.dispatchEvent(
      new CustomEvent("casaNorteLanguageChange", {
        detail: { language }
      })
    );

  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      setLanguage(
        currentLanguage === "en" ? "es" : "en"
      );
    });
  }

  setLanguage(currentLanguage);

  /* ========================================
     04 — MOBILE MENU
  ======================================== */

  function closeMobileMenu() {

    if (!mobileNav || !menuToggle) return;

    mobileNav.hidden = true;

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      currentLanguage === "en"
        ? "Open navigation menu"
        : "Abrir menú de navegación"
    );

    document.body.classList.remove("menu-open");
  }

  function openMobileMenu() {

    if (!mobileNav || !menuToggle) return;

    mobileNav.hidden = false;

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    menuToggle.setAttribute(
      "aria-label",
      currentLanguage === "en"
        ? "Close navigation menu"
        : "Cerrar menú de navegación"
    );

    document.body.classList.add("menu-open");
  }

  if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }

    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", event => {

      if (event.key === "Escape" && !mobileNav.hidden) {
        closeMobileMenu();
        menuToggle.focus();
      }

    });

    document.addEventListener("click", event => {

      if (mobileNav.hidden) return;

      if (
        !mobileNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMobileMenu();
      }

    });

    const desktopQuery = window.matchMedia(
      "(min-width: 1050px)"
    );

    function handleDesktopChange(event) {
      if (event.matches) {
        closeMobileMenu();
      }
    }

    desktopQuery.addEventListener(
      "change",
      handleDesktopChange
    );

  }

  /* ========================================
     05 — DYNAMIC HEADER
  ======================================== */

  function updateHeader() {

    if (!header) return;

    const scrolled = window.scrollY > 50;

    header.classList.toggle(
      "is-scrolled",
      scrolled
    );

  }

  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  /* ========================================
     06 — SCROLL REVEAL
  ======================================== */

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    !prefersReducedMotion &&
    "IntersectionObserver" in window
  ) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("is-visible");
    });

  }

 /* ==========================================
   07 — CONTACT DEMO
   CASA NORTE / BEMA Studios
========================================== */

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate without submitting any information.
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const isSpanish =
      document.documentElement.lang
        .toLowerCase()
        .startsWith("es");

    if (formStatus) {
      formStatus.textContent = isSpanish
        ? "Demostración completada. Este es un proyecto conceptual de BEMA Studios. No se envió ni almacenó ninguna información."
        : "Demonstration completed. This is a conceptual project by BEMA Studios. No information was sent or stored.";

      formStatus.hidden = false;
      formStatus.setAttribute("role", "status");
      formStatus.setAttribute("aria-live", "polite");
    }

    contactForm.reset();
  });
}

  /* ========================================
     08 — ACTIVE NAVIGATION
  ======================================== */

  const navLinks = document.querySelectorAll(
    '.desktop-nav a[href^="#"]'
  );

  const sections = document.querySelectorAll(
    "main section[id]"
  );

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          const sectionId = entry.target.id;

          navLinks.forEach(link => {

            const isActive =
              link.getAttribute("href") === `#${sectionId}`;

            link.classList.toggle(
              "is-active",
              isActive
            );

            if (isActive) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }

          });

        });

      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

  }

  /* ========================================
     09 — INITIALIZATION COMPLETE
  ======================================== */

  console.info(
    "Casa Norte — Digital Experience by BEMA Studios"
  );

});

/* ==========================================
   CASA NORTE — CONCEPT CONTACT FORM
   BEMA Studios
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(
    "#contact-form, #contactForm"
  );

  if (!form) return;

  // Avoid enabling native form submission.
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const lang = document.documentElement.lang
      .toLowerCase()
      .startsWith("es") ? "es" : "en";

    // Use the existing HTML validation rules.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Never transmit or store the entered information.
    form.reset();

    const status = document.getElementById(
      "contact-demo-status"
    );

    if (!status) return;

    status.textContent = lang === "es"
      ? "Demostración completada. Este es un proyecto conceptual de BEMA Studios. Tu mensaje no fue enviado ni almacenado."
      : "Demo completed. This is a conceptual project by BEMA Studios. Your message was not sent or stored.";

    status.hidden = false;
    status.classList.add("is-visible");

    status.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ? "auto" : "smooth",
      block: "nearest"
    });
  });
});
