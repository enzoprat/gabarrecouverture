/**
 * Génère des visuels placeholder neutres pour que la mise en page soit juste
 * avant la livraison des photos réelles de chantier.
 *
 * Usage : node scripts/generate-placeholders.mjs
 * Les fichiers produits sont listés dans A-COMPLETER.md et doivent tous être
 * remplacés par des photos du client.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const INK = "#171B20";
const INK_LIGHT = "#3A434D";
const TUILE = "#B3400B";

function tilePattern(w, h, base, accent, label) {
  const cols = 14;
  const step = w / cols;
  const rows = Math.ceil(h / (step * 0.55)) + 1;
  let tiles = "";
  for (let r = 0; r < rows; r++) {
    const y = r * step * 0.55;
    const offset = r % 2 === 0 ? 0 : step / 2;
    for (let c = -1; c < cols + 1; c++) {
      const x = c * step + offset;
      tiles += `<path d="M${x} ${y + step * 0.55} v-${step * 0.42} a${step * 0.5} ${step * 0.5} 0 0 1 ${step} 0 v${step * 0.42} z" fill="${accent}" fill-opacity="${0.05 + ((r * 3 + c) % 5) * 0.018}" stroke="${accent}" stroke-opacity="0.10" stroke-width="1"/>`;
    }
  }

  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="${w}" height="${h}" fill="${base}"/>
      ${tiles}
      <rect width="${w}" height="${h}" fill="${base}" fill-opacity="0.35"/>
      <text x="${w / 2}" y="${h / 2}" text-anchor="middle" dominant-baseline="middle"
        font-family="Helvetica, Arial, sans-serif" font-size="${Math.round(w / 34)}"
        font-weight="600" letter-spacing="${w / 400}" fill="#FFFFFF" fill-opacity="0.55">${label}</text>
    </svg>`,
  );
}

const jobs = [
  ["src/assets/hero-toiture-montauban.webp", 1760, 1320, INK, TUILE, "PHOTO A FOURNIR"],
  ["src/assets/service-couverture.webp", 1400, 933, INK, TUILE, "PHOTO A FOURNIR"],
  ["src/assets/service-zinguerie.webp", 1400, 933, INK, TUILE, "PHOTO A FOURNIR"],
  ["src/assets/service-charpente.webp", 1400, 933, INK, TUILE, "PHOTO A FOURNIR"],
  ["src/assets/service-nettoyage-toiture.webp", 1400, 933, INK, TUILE, "PHOTO A FOURNIR"],
  ["src/assets/service-reparation-fuite.webp", 1400, 933, INK, TUILE, "PHOTO A FOURNIR"],
  ["src/assets/entreprise-atelier.webp", 1400, 1050, INK, TUILE, "PHOTO A FOURNIR"],
  ["src/assets/zone-intervention.webp", 1200, 900, INK_LIGHT, TUILE, "CARTE A FOURNIR"],
  ["src/assets/chantier-1-avant.webp", 1200, 900, INK, TUILE, "AVANT / PHOTO A FOURNIR"],
  ["src/assets/chantier-1-apres.webp", 1200, 900, INK, TUILE, "APRES / PHOTO A FOURNIR"],
  ["src/assets/chantier-2-avant.webp", 1200, 900, INK, TUILE, "AVANT / PHOTO A FOURNIR"],
  ["src/assets/chantier-2-apres.webp", 1200, 900, INK, TUILE, "APRES / PHOTO A FOURNIR"],
  ["src/assets/chantier-3-avant.webp", 1200, 900, INK, TUILE, "AVANT / PHOTO A FOURNIR"],
  ["src/assets/chantier-3-apres.webp", 1200, 900, INK, TUILE, "APRES / PHOTO A FOURNIR"],
];

for (const [file, w, h, base, accent, label] of jobs) {
  const out = resolve(root, file);
  await mkdir(dirname(out), { recursive: true });
  await sharp(tilePattern(w, h, base, accent, label))
    .webp({ quality: 72 })
    .toFile(out);
  console.log("ok", file);
}

/* Image Open Graph 1200x630 */
const og = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#0B0E11"/>
    <rect x="0" y="0" width="1200" height="6" fill="${TUILE}"/>
    <g transform="translate(80,150)">
      <path d="M0 60 L46 22 L92 60" fill="none" stroke="${TUILE}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 52 V104 H76 V52" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <text x="80" y="345" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="800" letter-spacing="-1.5" fill="#FFFFFF">Gabarre Couverture</text>
    <text x="80" y="415" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="500" fill="#9AA3AD">Couvreur zingueur charpentier a Montauban</text>
    <text x="80" y="510" font-family="Helvetica, Arial, sans-serif" font-size="46" font-weight="700" fill="${TUILE}">06 66 63 73 35</text>
  </svg>`,
);
await sharp(og).png().toFile(resolve(root, "public/og-default.png"));
console.log("ok public/og-default.png");

await sharp(
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
      <rect width="180" height="180" rx="34" fill="#0B0E11"/>
      <g transform="translate(38,50)">
        <path d="M0 40 L52 4 L104 40" fill="none" stroke="${TUILE}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 34 V84 H88 V34" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>`,
  ),
)
  .png()
  .toFile(resolve(root, "public/apple-touch-icon.png"));
console.log("ok public/apple-touch-icon.png");
