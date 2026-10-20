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
| `{{siret}}`                 | `BUSINESS.siret`      | Bas de page, page entreprise, mentions légales               |
| `{{année}}`                 | `BUSINESS.foundingYear` | Page entreprise, premier paragraphe                        |
| `{{assureur + n° contrat}}` | `BUSINESS.insurance`  | Pied de page, page entreprise, mentions légales               |
| `{{email}}`                 | `BUSINESS.email`      | Mentions légales et politique de confidentialité uniquement   |

Points d'attention :

- **`SITE_URL`** contient actuellement `https://gabarre-couverture.fr` et non un
  placeholder, sinon le build du sitemap échoue. À remplacer par le domaine réel
  avant le premier déploiement en production.
- **`GEO`** (latitude et longitude) pointe sur le centre-ville de Montauban.
  Aucune adresse n'étant publiée, ce point sert uniquement à situer la zone
  d'intervention dans le JSON-LD.
- **Horaires** : renseignés, « 8h - 19h, du lundi au samedi ». Le libellé est
  dans `BUSINESS.openingHoursLabel`, les horaires machine du JSON-LD dans
  `src/lib/schema.ts` (`OPENING_HOURS`). Si l'un change, changer l'autre.
- **`sameAs`** dans `src/lib/schema.ts` est un tableau vide. Y placer l'URL de
  la fiche Google Business Profile et, le cas échéant, la page Facebook. C'est
  l'un des signaux les plus utiles pour le référencement local.

### Adresse postale retirée du site

Sur demande du client, la rue et le code postal n'apparaissent plus nulle part :
ni pied de page, ni page entreprise, ni mentions légales, ni JSON-LD. Les
mentions légales n'indiquent plus que « Montauban, Tarn-et-Garonne », et la
demande d'exercice des droits RGPD se fait désormais par téléphone ou par
courriel au lieu du courrier postal.

**Point de vigilance juridique** : l'article 19 de la LCEN impose de publier
l'adresse du siège dans les mentions légales d'un site professionnel, et le
RGPD suppose un moyen de contact pour l'exercice des droits. En l'état, le site
n'est donc pas complètement conforme. À arbitrer avec le client : soit l'adresse
est rétablie dans les seules mentions légales, soit une domiciliation est
indiquée. Les champs `BUSINESS.street` et `BUSINESS.postalCode` ont été
supprimés de `src/site.config.ts`, il faut les recréer pour revenir en arrière.

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

Sept photos réelles ont été livrées et intégrées : le hero, la couverture, la
zinguerie, la réparation de fuite et les trois chantiers. Les quatre visuels
restants sont encore des aplats générés, marqués « PHOTO A FOURNIR ». Ils
tiennent la maquette mais ne doivent pas partir en production.

Réserve sur les photos livrées : rien ne prouve qu'il s'agit de chantiers
de l'entreprise. Si ce sont des images trouvées en ligne, elles doivent être
remplacées avant la mise en ligne, pour le droit d'auteur comme pour la
crédibilité. À confirmer avec l'artisan.

**Comment les remplacer :** déposer les fichiers dans `src/assets/` en gardant
exactement le même nom et l'extension `.webp`. Aucun code n'est à modifier, les
imports, les tailles et les textes alternatifs sont déjà en place.

| Fichier                            | Sujet attendu                                               | Cadrage      |
| ---------------------------------- | ----------------------------------------------------------- | ------------ |
| `hero-toiture-montauban.webp`      | **Livrée.** Remaniage de tuile canal                         | 4/3 paysage  |
| `service-couverture.webp`          | **Livrée.** Pose de tuiles sur liteaunage et écran           | 3/2 paysage  |
| `service-zinguerie.webp`           | **Livrée.** Rives zinc, faîtage et souche                    | 3/2 paysage  |
| `service-charpente.webp`           | Charpente vue depuis les combles                             | 4/3 paysage  |
| `service-nettoyage-toiture.webp`   | Pan de toit à moitié démoussé, mousse encore visible         | 4/3 paysage  |
| `service-reparation-fuite.webp`    | **Livrée.** Souche et fenêtre de toit                        | 3/2 paysage  |
| `entreprise-atelier.webp`          | Véhicule, matériel ou artisan au travail                     | 4/3 paysage  |
| `zone-intervention.webp`           | Vue large de toitures du secteur, ou véhicule sur la route   | 4/3 paysage  |
| `chantier-1.webp`                  | **Livrée.** Faîtage ouvert sur tuile canal                   | 3/2 paysage  |
| `chantier-2.webp`                  | **Livrée.** Chevrons neufs sur charpente reprise             | 3/2 paysage  |
| `chantier-3.webp`                  | **Livrée.** Tuiles en piles sur liteaunage neuf              | 3/2 paysage  |

Recommandations de prise de vue :

- Photos réelles de chantiers de l'entreprise. Aucune banque d'images : une
  photo de catalogue se repère et décrédibilise le reste de la page.
- Format `.webp`, largeur d'origine d'au moins 1600 px. Astro génère
  automatiquement les déclinaisons responsives.
- Éviter les visages de tiers et les plaques d'immatriculation de clients.

**À corriger aussi** : les textes alternatifs des trois chantiers décrivent la
photo actuellement en place (`src/data/realisations.ts`). Si une photo est
remplacée, réécrire l'`alt` correspondant pour décrire ce que l'on voit.

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

`src/data/realisations.ts`. Renseignés par le client : remaniage de toiture,
reprise de charpente et pose de toiture neuve, tous trois à Montauban. Le
matériau indiqué décrit ce que montre la photo, rien de plus.

Ni durée ni descriptif ne sont publiés, sur demande du client : ces informations
varient trop d'un chantier à l'autre pour être affichées sans le dossier réel.
L'encadré « contenu en attente de validation » a donc été retiré de la page.

À vérifier avec le client avant la mise en ligne : que ces trois chantiers sont
bien les siens et qu'ils ont bien eu lieu à Montauban. C'est la seule donnée de
la page qui ne se lit pas sur la photo.

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
