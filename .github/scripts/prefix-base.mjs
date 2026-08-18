/**
 * Préfixe les URL absolues du build par un sous-chemin.
 *
 * Utilisé uniquement par le workflow d'aperçu GitHub Pages, qui sert le site
 * sous /gabarrecouverture/ alors que les liens du code sont absolus depuis la
 * racine. Ne touche jamais aux sources, seulement au dossier dist.
 *
 * Usage : node prefix-base.mjs <dossier> <base>
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";

const [dir, rawBase] = process.argv.slice(2);
if (!dir || !rawBase) {
  console.error("Usage : node prefix-base.mjs <dossier> <base>");
  process.exit(1);
}
const base = "/" + rawBase.replace(/^\/+|\/+$/g, "");

async function* walk(current) {
  for (const entry of await readdir(current, { withFileTypes: true })) {
    const full = join(current, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

/** Une URL déjà préfixée, protocole-relative ou externe ne doit pas bouger. */
const skip = (url) => url.startsWith("//") || url.startsWith(base + "/");

function rewriteHtml(html) {
  return html
    .replace(
      /\b(href|src)="(\/[^"]*)"/g,
      (m, attr, url) => (skip(url) ? m : `${attr}="${base}${url}"`),
    )
    .replace(/\bsrcset="([^"]*)"/g, (m, value) => {
      const next = value
        .split(",")
        .map((part) => {
          const trimmed = part.trim();
          if (!trimmed.startsWith("/") || skip(trimmed)) return trimmed;
          return base + trimmed;
        })
        .join(", ");
      return `srcset="${next}"`;
    });
}

const rewriteCss = (css) =>
  css.replace(/url\((\/[^)"']*)\)/g, (m, url) =>
    skip(url) ? m : `url(${base}${url})`,
  );

let touched = 0;
for await (const file of walk(dir)) {
  const ext = extname(file);
  if (ext !== ".html" && ext !== ".css") continue;
  const source = await readFile(file, "utf8");
  const output = ext === ".html" ? rewriteHtml(source) : rewriteCss(source);
  if (output !== source) {
    await writeFile(file, output);
    touched += 1;
  }
}
console.log(`Préfixe ${base} appliqué à ${touched} fichier(s).`);
