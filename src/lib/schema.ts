import { BUSINESS, COMMUNES, GEO, SITE_URL } from "../site.config";

/** Un placeholder non renseigné ne doit jamais partir dans le JSON-LD. */
export const isFilled = (value: string) => !value.includes("{{");

/**
 * Horaires structurés pour le JSON-LD.
 * TODO : confirmer avec le client, puis renseigner BUSINESS.openingHoursLabel
 * pour que le bloc soit émis (il est volontairement omis tant que la donnée
 * n'est pas validée).
 */
export const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "19:00",
  },
];

const address = {
  "@type": "PostalAddress",
  ...(isFilled(BUSINESS.street) ? { streetAddress: BUSINESS.street } : {}),
  ...(isFilled(BUSINESS.postalCode)
    ? { postalCode: BUSINESS.postalCode }
    : {}),
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  addressCountry: BUSINESS.country,
};

export const businessId = `${SITE_URL}/#roofingcontractor`;

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": businessId,
    name: BUSINESS.legalName,
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    description: `Couvreur zingueur charpentier à ${BUSINESS.city}. Réfection de toiture, zinguerie, charpente, démoussage et réparation de fuite en ${BUSINESS.department}.`,
    image: `${SITE_URL}/og-default.png`,
    logo: `${SITE_URL}/og-default.png`,
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    ...(isFilled(BUSINESS.openingHoursLabel)
      ? { openingHoursSpecification: OPENING_HOURS }
      : {}),
    ...(isFilled(BUSINESS.foundingYear)
      ? { foundingDate: BUSINESS.foundingYear }
      : {}),
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "EUR",
    areaServed: COMMUNES.map((commune) => ({
      "@type": "City",
      name: commune.name,
    })),
    /** TODO : ajouter les profils réels (Google Business Profile, Pages Jaunes, Facebook). */
    sameAs: [],
    knowsLanguage: "fr-FR",
  };
}

export function serviceLd(options: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    serviceType: options.serviceType,
    description: options.description,
    url: `${SITE_URL}${options.path}`,
    provider: {
      "@type": "RoofingContractor",
      "@id": businessId,
      name: BUSINESS.legalName,
      telephone: BUSINESS.phoneE164,
      url: SITE_URL,
    },
    areaServed: COMMUNES.map((commune) => ({
      "@type": "City",
      name: commune.name,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: BUSINESS.phoneE164,
        contactType: "customer service",
        areaServed: "FR",
        availableLanguage: "French",
      },
    },
  };
}
