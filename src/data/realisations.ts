import type { ImageMetadata } from "astro";

import chantier1 from "../assets/chantier-1.webp";
import chantier2 from "../assets/chantier-2.webp";
import chantier3 from "../assets/chantier-3.webp";

/**
 * Chantiers présentés sur /realisations et sur l'accueil.
 *
 * Le matériau décrit ce que montre la photo, rien de plus. Aucune durée ni
 * aucun descriptif n'est publié : ces informations varient d'un chantier à
 * l'autre et ne peuvent pas être affirmées sans le dossier du client.
 */
export interface Realisation {
  id: string;
  prestation: string;
  commune: string;
  materiau: string;
  image: ImageMetadata;
  alt: string;
}

export const REALISATIONS: Realisation[] = [
  {
    id: "chantier-1",
    prestation: "Remaniage de toiture",
    commune: "Montauban",
    materiau: "Tuile canal terre cuite",
    image: chantier1,
    alt: "Faîtage ouvert sur une toiture en tuile canal, tuiles de couvert déposées le long de la ligne de faîte",
  },
  {
    id: "chantier-2",
    prestation: "Reprise de charpente",
    commune: "Montauban",
    materiau: "Chevrons et liteaux bois résineux",
    image: chantier2,
    alt: "Chevrons neufs posés sur une charpente reprise, avant mise en place du support de couverture",
  },
  {
    id: "chantier-3",
    prestation: "Pose de toiture neuve",
    commune: "Montauban",
    materiau: "Tuile mécanique à emboîtement",
    image: chantier3,
    alt: "Tuiles réparties par piles sur un liteaunage neuf et un écran sous-toiture, avant pose",
  },
];
