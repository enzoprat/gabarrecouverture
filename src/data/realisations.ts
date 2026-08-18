import type { ImageMetadata } from "astro";

import c1Avant from "../assets/chantier-1-avant.webp";
import c1Apres from "../assets/chantier-1-apres.webp";
import c2Avant from "../assets/chantier-2-avant.webp";
import c2Apres from "../assets/chantier-2-apres.webp";
import c3Avant from "../assets/chantier-3-avant.webp";
import c3Apres from "../assets/chantier-3-apres.webp";

/**
 * Chantiers avant/après.
 *
 * ATTENTION : aucune donnée n'est inventée ici. Les champs {{...}} attendent
 * les informations réelles du client (commune, matériau, description, photos).
 * Voir A-COMPLETER.md.
 */
export interface Realisation {
  id: string;
  prestation: string;
  commune: string;
  materiau: string;
  duree: string;
  description: string;
  avant: ImageMetadata;
  apres: ImageMetadata;
  altAvant: string;
  altApres: string;
}

export const REALISATIONS: Realisation[] = [
  {
    id: "chantier-1",
    prestation: "{{type de prestation, ex. réfection complète de toiture}}",
    commune: "{{commune}}",
    materiau: "{{matériau, ex. tuile canal terre cuite}}",
    duree: "{{durée du chantier}}",
    description:
      "{{description du chantier en 2 lignes : état de départ, travaux réalisés, résultat}}",
    avant: c1Avant,
    apres: c1Apres,
    altAvant:
      "Toiture avant travaux, chantier 1, photo à remplacer par le visuel réel",
    altApres:
      "Toiture après travaux, chantier 1, photo à remplacer par le visuel réel",
  },
  {
    id: "chantier-2",
    prestation: "{{type de prestation, ex. remplacement de gouttières zinc}}",
    commune: "{{commune}}",
    materiau: "{{matériau, ex. zinc naturel}}",
    duree: "{{durée du chantier}}",
    description:
      "{{description du chantier en 2 lignes : état de départ, travaux réalisés, résultat}}",
    avant: c2Avant,
    apres: c2Apres,
    altAvant:
      "Gouttière avant intervention, chantier 2, photo à remplacer par le visuel réel",
    altApres:
      "Gouttière après intervention, chantier 2, photo à remplacer par le visuel réel",
  },
  {
    id: "chantier-3",
    prestation: "{{type de prestation, ex. démoussage et hydrofuge}}",
    commune: "{{commune}}",
    materiau: "{{matériau, ex. tuile mécanique}}",
    duree: "{{durée du chantier}}",
    description:
      "{{description du chantier en 2 lignes : état de départ, travaux réalisés, résultat}}",
    avant: c3Avant,
    apres: c3Apres,
    altAvant:
      "Toiture couverte de mousse avant nettoyage, chantier 3, photo à remplacer par le visuel réel",
    altApres:
      "Toiture nettoyée après démoussage, chantier 3, photo à remplacer par le visuel réel",
  },
];
