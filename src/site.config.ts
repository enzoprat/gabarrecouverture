/**
 * Configuration centrale du site.
 *
 * Les valeurs marquées TODO {{...}} sont des placeholders techniques :
 * elles doivent être remplacées avant la mise en ligne.
 * Voir A-COMPLETER.md pour la liste complète.
 */

/** TODO {{domaine}} : remplacer par le domaine définitif (sans slash final). */
export const SITE_URL = "https://gabarre-couverture.fr";

export const BUSINESS = {
  name: "Gabarre",
  legalName: "Gabarre Couverture",
  fullName: "Gabarre Couverture",
  tagline: "Couverture, zinguerie, charpente",
  city: "Montauban",
  department: "Tarn-et-Garonne",
  departmentCode: "82",
  region: "Occitanie",
  country: "FR",

  phoneDisplay: "06 66 63 73 35",
  phoneHref: "tel:+33666637335",
  phoneE164: "+33666637335",

  /** TODO {{email}} : affiché uniquement en mentions légales, jamais en CTA. */
  email: "{{email}}",
  /** TODO {{adresse}} */
  street: "{{adresse}}",
  /** TODO {{code postal}} */
  postalCode: "{{code postal}}",
  /** TODO {{siret}} */
  siret: "{{siret}}",
  /** TODO {{année}} */
  foundingYear: "{{année}}",
  /** TODO {{ex. lun-sam 8h-19h}} */
  openingHoursLabel: "{{horaires}}",
  /** TODO {{assureur + n° de contrat}} */
  insurance: "{{assureur + n° de contrat}}",
} as const;

/** Libellé d'action unique sur tout le site. */
export const CTA_LABEL = `Appeler ${BUSINESS.phoneDisplay}`;
/**
 * L'aria-label contient le libellé visible en préfixe exact
 * (critère WCAG 2.5.3 « Label in Name »), puis précise l'entreprise.
 */
export const CTA_ARIA = `Appeler ${BUSINESS.phoneDisplay}, Gabarre Couverture`;
export const CTA_REASSURANCE = `Devis gratuit, réponse directe, déplacement sur ${BUSINESS.city} et alentours.`;

/**
 * Coordonnées géographiques.
 * TODO : remplacer par les coordonnées exactes du siège une fois l'adresse connue.
 * Valeur actuelle : centre-ville de Montauban.
 */
export const GEO = {
  latitude: 44.0175,
  longitude: 1.3549,
} as const;

export type NavItem = { label: string; href: string };

export const SERVICES: {
  slug: string;
  href: string;
  navLabel: string;
  cardTitle: string;
  cardText: string;
  shortName: string;
}[] = [
  {
    slug: "couverture",
    href: "/services/couverture",
    navLabel: "Couverture",
    cardTitle: "Couverture et rénovation de toiture",
    cardText:
      "Réfection complète, remaniage, remplacement de tuiles cassées, pose d'écran sous-toiture.",
    shortName: "Couverture",
  },
  {
    slug: "zinguerie",
    href: "/services/zinguerie",
    navLabel: "Zinguerie",
    cardTitle: "Zinguerie, gouttières et chéneaux",
    cardText:
      "Gouttières zinc, aluminium ou PVC, chéneaux, noues, solins et descentes d'eau pluviale.",
    shortName: "Zinguerie",
  },
  {
    slug: "charpente",
    href: "/services/charpente",
    navLabel: "Charpente",
    cardTitle: "Charpente, réparation et traitement",
    cardText:
      "Remplacement de chevrons et pannes, renfort de ferme, traitement contre les insectes à larves xylophages.",
    shortName: "Charpente",
  },
  {
    slug: "nettoyage-toiture",
    href: "/services/nettoyage-toiture",
    navLabel: "Nettoyage de toiture",
    cardTitle: "Démoussage, nettoyage et hydrofuge",
    cardText:
      "Démoussage manuel, traitement anti-mousse, rinçage basse pression et hydrofuge de protection.",
    shortName: "Nettoyage de toiture",
  },
  {
    slug: "reparation-fuite-toiture",
    href: "/services/reparation-fuite-toiture",
    navLabel: "Réparation de fuite",
    cardTitle: "Réparation de fuite de toiture",
    cardText:
      "Recherche du point d'entrée, reprise de solin, de faîtage ou de tuiles, mise hors d'eau rapide.",
    shortName: "Réparation de fuite",
  },
];

export const NAV: NavItem[] = [
  { label: "Prestations", href: "/services/couverture" },
  { label: "Zone d'intervention", href: "/zone-intervention" },
  { label: "Réalisations", href: "/realisations" },
  { label: "L'entreprise", href: "/entreprise" },
];

/** Communes couvertes. Le slug prépare les futures pages ville. */
export const COMMUNES: { name: string; slug: string }[] = [
  { name: "Montauban", slug: "montauban" },
  { name: "Bressols", slug: "bressols" },
  { name: "Montbeton", slug: "montbeton" },
  { name: "Albefeuille-Lagarde", slug: "albefeuille-lagarde" },
  { name: "Lamothe-Capdeville", slug: "lamothe-capdeville" },
  { name: "Villemade", slug: "villemade" },
  { name: "Lacourt-Saint-Pierre", slug: "lacourt-saint-pierre" },
  { name: "Corbarieu", slug: "corbarieu" },
  { name: "Campsas", slug: "campsas" },
  { name: "Labastide-Saint-Pierre", slug: "labastide-saint-pierre" },
  { name: "Nègrepelisse", slug: "negrepelisse" },
  { name: "Bioule", slug: "bioule" },
  { name: "Villebrumier", slug: "villebrumier" },
  { name: "Monclar-de-Quercy", slug: "monclar-de-quercy" },
  { name: "Verlhac-Tescou", slug: "verlhac-tescou" },
  { name: "Molières", slug: "molieres" },
  { name: "Réalville", slug: "realville" },
  { name: "Albias", slug: "albias" },
  { name: "Piquecos", slug: "piquecos" },
  { name: "Saint-Étienne-de-Tulmont", slug: "saint-etienne-de-tulmont" },
  { name: "Meauzac", slug: "meauzac" },
  { name: "Caussade", slug: "caussade" },
  { name: "Septfonds", slug: "septfonds" },
  { name: "Castelsarrasin", slug: "castelsarrasin" },
  { name: "Moissac", slug: "moissac" },
  { name: "Grisolles", slug: "grisolles" },
  { name: "Dieupentale", slug: "dieupentale" },
  { name: "Villemur-sur-Tarn", slug: "villemur-sur-tarn" },
];

/** Regroupement géographique des communes, utilisé sur /zone-intervention. */
export const SECTEURS: {
  name: string;
  text: string;
  slugs: string[];
}[] = [
  {
    name: "Montauban et première couronne",
    text: "Le cœur de l'activité. Déplacement rapide, y compris pour une intervention ponctuelle sur quelques tuiles ou une gouttière bouchée.",
    slugs: [
      "montauban",
      "bressols",
      "montbeton",
      "albefeuille-lagarde",
      "lamothe-capdeville",
      "villemade",
      "lacourt-saint-pierre",
      "corbarieu",
    ],
  },
  {
    name: "Vallée de l'Aveyron et Quercy",
    text: "Beaucoup de bâti ancien en tuile canal, avec des charpentes traditionnelles et des couvertures à faible pente qui demandent une attention particulière.",
    slugs: [
      "negrepelisse",
      "bioule",
      "villebrumier",
      "monclar-de-quercy",
      "verlhac-tescou",
      "saint-etienne-de-tulmont",
      "albias",
      "piquecos",
      "realville",
      "molieres",
    ],
  },
  {
    name: "Secteur de Caussade",
    text: "Zone plus exposée au vent sur les plateaux, où les tuiles de rive et les faîtages sont les premiers éléments à contrôler après un coup de vent.",
    slugs: ["caussade", "septfonds", "meauzac"],
  },
  {
    name: "Vallée de la Garonne",
    text: "Castelsarrasin et Moissac, sur des chantiers de couverture et de zinguerie programmés plutôt que sur de l'intervention d'urgence.",
    slugs: ["castelsarrasin", "moissac"],
  },
  {
    name: "Axe sud vers Toulouse",
    text: "Le long de la vallée du Tarn et de la nationale, sur des pavillons plus récents en tuile mécanique et sur du démoussage.",
    slugs: [
      "campsas",
      "labastide-saint-pierre",
      "grisolles",
      "dieupentale",
      "villemur-sur-tarn",
    ],
  },
];
