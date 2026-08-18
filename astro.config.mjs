// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/site.config.ts";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/mentions-legales") &&
        !page.includes("/politique-confidentialite"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
