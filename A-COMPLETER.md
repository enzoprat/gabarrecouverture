# À compléter avant la mise en ligne

Tout ce qui n'a pas été confirmé par l'entreprise est resté en placeholder
`{{...}}`, visible dans le code et parfois à l'écran. Rien n'a été inventé :
ni avis client, ni certification, ni nombre de chantiers, ni année d'expérience.

Trois blocs : les informations administratives, les photos, les textes à valider.

---

## 1. Informations administratives

Tout se remplit dans **`src/site.config.ts`**. C'est le seul fichier à toucher
pour cette partie.

| Placeholder                 | Champ                 | Où cela apparaît                                            |
| --------------------------- | --------------------- | ----------------------------------------------------------- |
| `{{domaine}}`               | `SITE_URL`            | Canonical, Open Graph, sitemap, robots.txt                   |
| `{{adresse}}`               | `BUSINESS.street`     | Pied de page, page entreprise, mentions légales, JSON-LD     |
| `{{code postal}}`           | `BUSINESS.postalCode` | Idem                                                          |
| `{{siret}}`                 | `BUSINESS.siret`      | Bas de page, page entreprise, mentions légales               |
| `{{année}}`                 | `BUSINESS.foundingYear` | Page entreprise, premier paragraphe                        |
| `{{horaires}}`              | `BUSINESS.openingHoursLabel` | Pied de page, page entreprise, bloc CTA final          |
| `{{assureur + n° contrat}}` | `BUSINESS.insurance`  | Bandeau décennale, page entreprise, mentions légales, JSON-LD |
| `{{email}}`                 | `BUSINESS.email`      | Mentions légales et politique de confidentialité uniquement   |

Points d'attention :

- **`SITE_URL`** contient actuellement `https://gabarre-couverture.fr` et non un
  placeholder, sinon le build du sitemap échoue. À remplacer par le domaine réel
  avant le premier déploiement en production.
- **`GEO`** (latitude et longitude) pointe pour l'instant sur le centre-ville de
  Montauban. À remplacer par les coordonnées exactes du siège une fois l'adresse
  connue, sinon la fiche `RoofingContractor` du JSON-LD est légèrement fausse.
- **`{{horaires}}`** : le format attendu est un libellé lisible, par exemple
  « Lundi au samedi, 8h à 19h ». Les horaires machine du JSON-LD sont définis
  dans `src/lib/schema.ts` (`OPENING_HOURS`) et n'apparaissent dans le balisage
  qu'une fois ce libellé rempli. Vérifier que les deux disent la même chose.
- **`sameAs`** dans `src/lib/schema.ts` est un tableau vide. Y placer l'URL de
  la fiche Google Business Profile et, le cas échéant, la page Facebook. C'est
  l'un des signaux les plus utiles pour le référencement local.

### Informations manquantes dans les mentions légales

`src/pages/mentions-legales.astro` contient trois placeholders qui demandent des
documents de l'entreprise :

1. Forme juridique, capital social le cas échéant, numéro de TVA
   intracommunautaire, numéro au répertoire des métiers et département
   d'immatriculation.
2. Nom et prénom du directeur de la publication.
3. Nom et coordonnées du médiateur de la consommation. Obligatoire pour toute
   entreprise qui travaille avec des particuliers. Si aucune adhésion n'est
   souscrite, il faut en souscrire une avant la mise en ligne.

---

## 2. Photos à fournir

Les quatorze visuels actuels sont des aplats générés, marqués « PHOTO A
FOURNIR ». Ils tiennent la maquette mais ne doivent pas partir en production.

**Comment les remplacer :** déposer les fichiers dans `src/assets/` en gardant
exactement le même nom et l'extension `.webp`. Aucun code n'est à modifier, les
imports, les tailles et les textes alternatifs sont déjà en place.

| Fichier                            | Sujet attendu                                               | Cadrage      |
| ---------------------------------- | ----------------------------------------------------------- | ------------ |
| `hero-toiture-montauban.webp`      | Toiture en cours de réfection, de préférence tuile canal     | 4/3 paysage  |
| `service-couverture.webp`          | Pose de tuiles avec écran sous-toiture apparent              | 4/3 paysage  |
| `service-zinguerie.webp`           | Gouttière ou chéneau zinc en cours de pose ou soudé          | 4/3 paysage  |
| `service-charpente.webp`           | Charpente vue depuis les combles                             | 4/3 paysage  |
| `service-nettoyage-toiture.webp`   | Pan de toit à moitié démoussé, mousse encore visible         | 4/3 paysage  |
| `service-reparation-fuite.webp`    | Solin de cheminée décollé ou noue dégradée                   | 4/3 paysage  |
| `entreprise-atelier.webp`          | Véhicule, matériel ou artisan au travail                     | 4/3 paysage  |
| `zone-intervention.webp`           | Vue large de toitures du secteur, ou véhicule sur la route   | 4/3 paysage  |
| `chantier-1-avant.webp`            | Chantier 1, état de départ                                   | 4/3 paysage  |
| `chantier-1-apres.webp`            | Chantier 1, après travaux, **même angle que la photo avant** | 4/3 paysage  |
| `chantier-2-avant.webp`            | Chantier 2, état de départ                                   | 4/3 paysage  |
| `chantier-2-apres.webp`            | Chantier 2, après travaux, même angle                        | 4/3 paysage  |
| `chantier-3-avant.webp`            | Chantier 3, état de départ                                   | 4/3 paysage  |
| `chantier-3-apres.webp`            | Chantier 3, après travaux, même angle                        | 4/3 paysage  |

Recommandations de prise de vue :

- Photos réelles de chantiers de l'entreprise. Aucune banque d'images : une
  photo de catalogue se repère et décrédibilise le reste de la page.
- Pour les paires avant et après, se placer au même endroit avec le même
  cadrage. C'est ce qui rend la comparaison lisible.
- Format `.webp`, largeur d'origine d'au moins 1600 px. Astro génère
  automatiquement les déclinaisons responsives.
- Éviter les visages de tiers et les plaques d'immatriculation de clients.

**À corriger aussi** : les textes alternatifs des six images de chantier
contiennent la mention « photo à remplacer par le visuel réel »
(`src/data/realisations.ts`). Une fois les vraies photos livrées, décrire ce que
l'on voit, par exemple « Toiture en tuile canal avant réfection, tuiles
déplacées sur le versant nord ».

---

## 3. Textes à faire valider par le client

### 3.1 Présentation de l'artisan, page entreprise

`src/pages/entreprise.astro`, section « Une entreprise à taille d'artisan ». Un
paragraphe entier est en placeholder. Il attend : parcours, formation, nombre
d'années de métier, spécialités éventuelles. Rien n'a été écrit à la place, pour
ne pas publier une biographie inexacte.

### 3.2 Qualifications

Même page, sous les garanties. Le texte affirme aujourd'hui qu'aucune
certification autre que l'assurance décennale n'est revendiquée. Si l'entreprise
détient une qualification RGE, Qualibat ou équivalente, fournir l'organisme et
le numéro pour l'ajouter. Sans numéro vérifiable, la mention ne sera pas ajoutée.

### 3.3 Les trois chantiers de la page réalisations

`src/data/realisations.ts`. Pour chacun des trois chantiers :

- type de prestation, par exemple « réfection complète de toiture » ;
- commune, qui doit faire partie de la zone d'intervention ;
- matériau posé, par exemple « tuile canal terre cuite » ;
- durée réelle du chantier ;
- deux lignes de description : état de départ, travaux réalisés, résultat.

Tant que ces champs ne sont pas remplis, la page `/realisations` affiche un
encadré qui indique explicitement que le contenu attend validation. **Cet
encadré doit être retiré une fois les chantiers renseignés** (section en haut de
`src/pages/realisations.astro`).

### 3.4 Aucun prix affiché

Choix assumé : le site n'affiche **aucun prix, aucune fourchette, aucun ordre de
grandeur**. Chaque page prestation remplace le bloc budget par une section
« Pourquoi une visite est nécessaire » et une liste des facteurs qui changent
d'un chantier à l'autre. Le chiffrage se fait uniquement au téléphone puis au
devis, après visite.

Si l'artisan souhaite un jour publier des tarifs, il faudra recréer le bloc dans
`src/layouts/ServiceLayout.astro` et remettre `priceRange` dans
`src/site.config.ts` et `src/lib/schema.ts`.

### 3.5 Zone d'intervention

`SECTEURS` dans `src/site.config.ts` décrit cinq secteurs et leurs
particularités de bâti. Ces descriptions sont plausibles pour la région mais
méritent d'être confirmées ou corrigées par quelqu'un qui monte réellement sur
ces toits.

---

## 4. Après la mise en ligne

1. Créer ou revendiquer la fiche **Google Business Profile**, avec exactement la
   même adresse et le même numéro que le site, puis renseigner `sameAs` dans
   `src/lib/schema.ts`.
2. Déclarer le site dans la **Google Search Console** et y soumettre
   `sitemap-index.xml`.
3. Contrôler le JSON-LD avec le test des résultats enrichis de Google, une fois
   les placeholders remplacés.
4. Passer un appel de test depuis un mobile pour vérifier que le numéro se
   compose bien depuis la barre fixe basse.
