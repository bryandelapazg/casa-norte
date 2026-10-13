
/* CASA NORTE — Property detail pages | BEMA Studios */
"use strict";

const PROPERTY_DATA = {
  "aurora-residence": {
    name: "Aurora Residence",
    location: { en: "Marbella, Spain", es: "Marbella, España" },
    price: "€4,850,000",
    beds: 5, baths: 6, area: 620,
    heading: {
      en: "A quieter kind of luxury.",
      es: "Una forma más serena de lujo."
    },
    description: {
      en: "A contemporary Mediterranean retreat conceived around light, texture and a seamless relationship between interior and exterior. A conceptual home for a life lived with intention.",
      es: "Un refugio mediterráneo contemporáneo concebido alrededor de la luz, las texturas y la conexión entre interior y exterior. Un hogar conceptual para una vida con intención."
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
        alt: {
          en: "Contemporary luxury residence with refined architectural details",
          es: "Residencia contemporánea de lujo con detalles arquitectónicos refinados"
        }
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        alt: {
          en: "Warm modern living area with natural light",
          es: "Sala moderna y cálida con luz natural"
        }
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
        alt: {
          en: "Contemporary interior with natural materials",
          es: "Interior contemporáneo con materiales naturales"
        }
      }
    ]
  },

  "the-atelier": {
    name: "The Atelier",
    location: {
      en: "New York, USA",
      es: "Nueva York, EE. UU."
    },
    price: "$6,200,000",
    beds: 3, baths: 3, area: 340,
    heading: {
      en: "An urban point of view.",
      es: "Una perspectiva urbana."
    },
    description: {
      en: "A sophisticated city residence shaped by clean lines, considered proportions and a modern sensibility. An imagined retreat above the rhythm of New York.",
      es: "Una residencia urbana sofisticada, definida por líneas limpias, proporciones cuidadas y sensibilidad contemporánea. Un refugio imaginado sobre el ritmo de Nueva York."
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
        alt: {
          en: "Contemporary premium apartment interior",
          es: "Interior de apartamento contemporáneo de lujo"
        }
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        alt: {
          en: "Architectural living and dining space",
          es: "Espacio arquitectónico de sala y comedor"
        }
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
        alt: {
          en: "Minimalist interior with warm finishes",
          es: "Interior minimalista con acabados cálidos"
        }
      }
    ]
  },

  "solstice-villa": {
    name: "Solstice Villa",
    location: {
      en: "Lake Como, Italy",
      es: "Lago de Como, Italia"
    },
    price: "€7,450,000",
    beds: 6, baths: 7, area: 810,
    heading: {
      en: "Room to feel everything.",
      es: "Espacio para sentirlo todo."
    },
    description: {
      en: "An architectural escape inspired by the stillness of the Italian lakes. Expansive spaces, subtle materiality and an atmosphere designed for unhurried living.",
      es: "Un refugio arquitectónico inspirado en la calma de los lagos italianos. Espacios amplios, materiales sutiles y una atmósfera pensada para vivir sin prisa."
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85",
        alt: {
          en: "Contemporary villa interior with architectural details",
          es: "Interior de villa contemporánea con detalles arquitectónicos"
        }
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        alt: {
          en: "Light-filled modern residence",
          es: "Residencia moderna llena de luz"
        }
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        alt: {
          en: "Refined living room with warm tones",
          es: "Sala refinada en tonos cálidos"
        }
      }
    ]
  }
};

/* LANGUAGE */

function getPropertyLanguage() {
  try {
    return localStorage.getItem("casaNorteLanguage") === "es"
      ? "es" : "en";
  } catch {
    return document.documentElement.lang === "es"
      ? "es" : "en";
  }
}

/* HTML HELPERS */

function createTextElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) element.className = className;

  element.textContent = text;
  return element;
}

/* PROPERTY RENDERER */

function renderProperty() {
  const mount = document.getElementById("property-content");
  if (!mount) return;

  const id = new URLSearchParams(
    window.location.search
  ).get("id");

  const property = Object.hasOwn(
    PROPERTY_DATA, id || ""
  ) ? PROPERTY_DATA[id] : null;

  const lang = getPropertyLanguage();
  const t = (en, es) => lang === "es" ? es : en;

  mount.replaceChildren();

  if (!property) {
    document.title = t(
      "Property not found — Casa Norte",
      "Propiedad no encontrada — Casa Norte"
    );

    const error = createTextElement(
      "section", "container property-error", ""
    );

    error.append(
      createTextElement(
        "h1", "display-title",
        t("Residence not found.", "Residencia no encontrada.")
      ),
      createTextElement(
        "p", "body-copy",
        t(
          "The requested conceptual property does not exist.",
          "La propiedad conceptual solicitada no existe."
        )
      )
    );

    const back = createTextElement(
      "a", "property-return",
      t("← Back to residences", "← Volver a residencias")
    );

    back.href = "index.html#residences";
    error.append(back);
    mount.append(error);
    return;
  }

  document.title = `${property.name} — Casa Norte`;

  /* INTRO */

  const intro = createTextElement(
    "section", "property-intro container", ""
  );

  intro.append(
    createTextElement(
      "p", "property-kicker",
      t(
        "01 / SELECTED RESIDENCE · CONCEPT PROJECT",
        "01 / RESIDENCIA SELECCIONADA · PROYECTO CONCEPTUAL"
      )
    )
  );

  intro.append(
    createTextElement(
      "h1", "property-heading", property.name
    )
  );

  const introBottom = createTextElement(
    "div", "property-intro-bottom", ""
  );

  introBottom.append(
    createTextElement(
      "span", "property-location-detail",
      property.location[lang]
    ),
    createTextElement(
      "span", "property-price-detail",
      property.price
    )
  );

  intro.append(introBottom);
  mount.append(intro);

  /* HERO IMAGE */

  const hero = createTextElement(
    "div", "property-hero-photo", ""
  );

  const heroImg = document.createElement("img");
  heroImg.src = property.images[0].src;
  heroImg.alt = property.images[0].alt[lang];
  heroImg.fetchPriority = "high";

  hero.append(heroImg);
  mount.append(hero);

  /* DESCRIPTION */

  const descriptionSection = createTextElement(
    "section", "section container", ""
  );

  const descriptionLayout = createTextElement(
    "div", "property-description-layout", ""
  );

  descriptionLayout.append(
    createTextElement(
      "h2", "", property.heading[lang]
    )
  );

  const copy = createTextElement("div", "", "");

  copy.append(
    createTextElement(
      "p", "", property.description[lang]
    )
  );

  /* PROPERTY FACTS */

  const facts = createTextElement(
    "div", "property-facts", ""
  );

  [
    [property.beds, t("Bedrooms", "Habitaciones")],
    [property.baths, t("Bathrooms", "Baños")],
    [`${property.area} m²`, t("Interior area", "Superficie")],
    [
      t("Concept", "Conceptual"),
      t("Listing status", "Estado")
    ]
  ].forEach(([value, label]) => {
    const fact = createTextElement(
      "div", "property-fact", ""
    );

    fact.append(
      createTextElement("strong", "", String(value)),
      createTextElement("span", "", label)
    );

    facts.append(fact);
  });

  copy.append(facts);
  descriptionLayout.append(copy);
  descriptionSection.append(descriptionLayout);
  mount.append(descriptionSection);

  /* GALLERY */

  const gallerySection = createTextElement(
    "section", "section container", ""
  );

  gallerySection.append(
    createTextElement(
      "p", "property-kicker",
      t(
        "02 / ARCHITECTURAL PERSPECTIVES",
        "02 / PERSPECTIVAS ARQUITECTÓNICAS"
      )
    )
  );

  const gallery = createTextElement(
    "div", "property-gallery", ""
  );

  property.images.forEach((imageData, index) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");

    img.src = imageData.src;
    img.alt = imageData.alt[lang];
    img.loading = "lazy";
    img.decoding = "async";

    const caption = createTextElement(
      "figcaption", "",
      `${String(index + 1).padStart(2, "0")} / ${
        t(
          "Illustrative architectural photography",
          "Fotografía arquitectónica ilustrativa"
        )
      }`
    );

    figure.append(img, caption);
    gallery.append(figure);
  });

  gallerySection.append(gallery);
  mount.append(gallerySection);

  /* BACK TO COLLECTION */

  const nextSection = createTextElement(
    "section", "section section-dark property-next", ""
  );

  const nextInner = createTextElement(
    "div", "container", ""
  );

  nextInner.append(
    createTextElement(
      "p", "property-kicker",
      t("THE COLLECTION", "LA COLECCIÓN")
    )
  );

  nextInner.append(
    createTextElement(
      "h2", "",
      t(
        "Find your perspective.",
        "Encuentra tu perspectiva."
      )
    )
  );

  const back = createTextElement(
    "a", "button button-light",
    t(
      "← Explore all residences",
      "← Explorar todas las residencias"
    )
  );

  back.href = "index.html#residences";

  nextInner.append(back);
  nextSection.append(nextInner);
  mount.append(nextSection);
}

/* INITIALIZATION */

document.addEventListener(
  "DOMContentLoaded", renderProperty
);

document.addEventListener(
  "casaNorteLanguageChange", renderProperty
);
