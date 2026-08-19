import type { ImageMetadata } from "astro";

import chantier1 from "../assets/chantier-1.webp";
import chantier2 from "../assets/chantier-2.webp";
import chantier3 from "../assets/chantier-3.webp";

/**
 * Chantiers présentés sur /realisations.
 *
 * ATTENTION : aucune donnée n'est inventée ici. Les champs {{...}} attendent
 * les informations réelles du client (commune, matériau, description).
 * Voir A-COMPLETER.md.
 */
export interface Realisation {
  id: string;
  prestation: string;
  commune: string;
  materiau: string;
  duree: string;
  description: string;
  image: ImageMetadata;
  alt: string;
}

export const REALISATIONS: Realisation[] = [
  {
    id: "chantier-1",
    prestation: "{{type de prestation, ex. remaniage de toiture}}",
    commune: "{{commune}}",
    materiau: "{{matériau, ex. tuile canal terre cuite}}",
    duree: "{{durée du chantier}}",
    description:
      "{{description du chantier en 2 lignes : état de départ, travaux réalisés, résultat}}",
    image: chantier1,
    alt: "Faîtage ouvert sur une toiture en tuile canal, tuiles de couvert déposées le long de la ligne de faîte",
  },
  {
    id: "chantier-2",
    prestation: "{{type de prestation, ex. reprise de charpente}}",
    commune: "{{commune}}",
    materiau: "{{matériau, ex. chevrons sapin traité}}",
    duree: "{{durée du chantier}}",
    description:
      "{{description du chantier en 2 lignes : état de départ, travaux réalisés, résultat}}",
    image: chantier2,
    alt: "Chevrons neufs posés sur une charpente reprise, avant mise en place du support de couverture",
  },
  {
    id: "chantier-3",
    prestation: "{{type de prestation, ex. pose d'une couverture neuve}}",
    commune: "{{commune}}",
    materiau: "{{matériau, ex. tuile mécanique à emboîtement}}",
    duree: "{{durée du chantier}}",
    description:
      "{{description du chantier en 2 lignes : état de départ, travaux réalisés, résultat}}",
    image: chantier3,
    alt: "Tuiles réparties par piles sur un liteaunage neuf et un écran sous-toiture, avant pose",
  },
];
