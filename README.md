# Gabarre Couverture

Site vitrine de Gabarre Couverture, artisan couvreur zingueur charpentier à
Montauban (Tarn-et-Garonne). Site statique, sans formulaire : le seul canal de
conversion est l'appel téléphonique.

## Stack

| Élément     | Choix                                            |
| ----------- | ------------------------------------------------ |
| Framework   | Astro 7, `output: "static"`                      |
| Langage     | TypeScript strict                                |
| Styles      | Tailwind CSS v4 via `@tailwindcss/vite`          |
| Images      | `astro:assets` + `sharp`, format `.webp`         |
| Sitemap     | `@astrojs/sitemap`                               |
| Front       | Aucun framework, aucune librairie d'animation    |
| JavaScript  | Deux scripts inline, moins de 1 ko au total      |
| Hébergement | Vercel                                           |

### Écart assumé par rapport au cahier des charges

Le cahier des charges demandait Astro 5. Les versions 5.x traînent huit failles
XSS de sévérité haute, corrigées seulement à partir de la 7.0.10. Le projet est
donc en Astro 7, dont l'API est identique pour un site statique. `npm audit`
retourne zéro vulnérabilité.

Deuxième écart : la police Inter est auto-hébergée dans `public/fonts` au lieu
d'être chargée depuis Google Fonts. Cela supprime deux requêtes vers un domaine
tiers, fait passer le CLS mobile de 0,11 à 0, et rend exacte l'affirmation de la
page politique de confidentialité selon laquelle aucune ressource tierce n'est
chargée.

## Installation

Node 22.12 ou plus récent, exigé par Astro 7.

```bash
npm install
```

## Commandes

| Commande            | Effet                                        |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Serveur de développement sur `localhost:4321` |
| `npm run build`     | Génère le site statique dans `dist/`          |
| `npm run preview`   | Sert le contenu de `dist/` en local           |

### Images de substitution

Les visuels actuels sont des aplats générés, marqués « PHOTO A FOURNIR ». Ils
servent uniquement à valider la mise en page. Pour les régénérer après une
modification du script :

```bash
node scripts/generate-placeholders.mjs
```

Pour livrer les vraies photos, remplacer les fichiers de même nom dans
`src/assets/` (voir `A-COMPLETER.md`). Aucun code n'est à modifier, les imports
et les `alt` sont déjà en place.

### Logo

Le logo fourni est stocké détouré dans `src/assets/logo-gabarre-couverture.png`
et utilisé dans l'en-tête, le menu mobile et le pied de page. `astro:assets` le
sert en `.webp` en 1x et 2x, soit 4 ko et 14 ko.

Le favicon (`public/favicon.png`) et l'icône iOS (`public/apple-touch-icon.png`)
reprennent la seule illustration du logo, sans le mot-symbole, illisible sous
48 px. Pour les régénérer après un changement de logo, recadrer l'illustration
et exporter en 32 px et 180 px.

## Où modifier quoi

| Besoin                                     | Fichier                            |
| ------------------------------------------ | ---------------------------------- |
| Téléphone, adresse, SIRET, horaires        | `src/site.config.ts`               |
| Domaine du site                            | `SITE_URL` dans `src/site.config.ts` |
| Communes et regroupement par secteur       | `COMMUNES` et `SECTEURS`           |
| Liste et libellés des prestations          | `SERVICES`                         |
| Couleurs, typographie, rythme vertical     | `src/styles/global.css`            |
| Données structurées JSON-LD                | `src/lib/schema.ts`                |
| Contenu des trois chantiers                | `src/data/realisations.ts`         |

`src/site.config.ts` est la source unique de vérité. Le numéro de téléphone n'y
figure qu'une fois et alimente les 112 liens `tel:` du site.

### Garde-fou sur les données structurées

`src/lib/schema.ts` filtre toute valeur contenant `{{`. Tant qu'un placeholder
n'est pas remplacé, le champ correspondant est simplement omis du JSON-LD plutôt
que publié tel quel. Les horaires n'apparaissent dans le balisage qu'une fois
`openingHoursLabel` renseigné.

## Déploiement sur Vercel

1. Pousser le dépôt sur GitHub.
2. Sur Vercel, « Add New Project », importer le dépôt.
3. Vercel détecte Astro. Vérifier :
   - Framework Preset : `Astro`
   - Build Command : `npm run build`
   - Output Directory : `dist`
4. Déployer, puis brancher le domaine définitif dans « Settings, Domains ».
5. Renseigner ce même domaine dans `SITE_URL` (`src/site.config.ts`) et
   redéployer. Cette valeur alimente les `canonical`, les balises Open Graph,
   le `sitemap.xml` et le `robots.txt`.

Aucune variable d'environnement n'est nécessaire.

## Pages générées

Onze pages, dont neuf indexables.

```
/                                    /realisations
/services/couverture                 /entreprise
/services/zinguerie                  /mentions-legales            (noindex)
/services/charpente                  /politique-confidentialite   (noindex)
/services/nettoyage-toiture
/services/reparation-fuite-toiture
/zone-intervention
```

Les deux pages légales sont exclues du `sitemap.xml` par le filtre défini dans
`astro.config.mjs`.

## Pages ville

Les composants sont prêts pour des pages du type `/couvreur-montauban`. Chaque
commune possède déjà un `slug` dans `COMMUNES`, `PageHero`, `RelatedServices` et
`CallCta` sont réutilisables tels quels, et `serviceLd()` accepte un chemin
arbitraire. Ces pages ne sont pas générées à ce stade, pour éviter de publier
onze variantes d'un même texte.

## Règles à ne pas casser

- **Aucun formulaire.** Pas de `<form>`, `<input>`, `<textarea>` ni `<select>`.
  Toute demande passe par le téléphone.
- **Un seul libellé d'action** sur tout le site : « Appeler 06 66 63 73 35 ».
- **Aucun prix affiché.** Pas de tarif, pas de fourchette, pas d'ordre de
  grandeur, pas de `priceRange` dans le JSON-LD. Les pages prestation expliquent
  pourquoi une visite est nécessaire et ce qui change d'un chantier à l'autre.
  Le chiffrage se fait au téléphone puis au devis.
- **Aucune donnée inventée.** Avis, logos partenaires, certifications, chiffres
  d'expérience : tout ce qui n'est pas confirmé reste un placeholder `{{...}}`
  visible, listé dans `A-COMPLETER.md`.
