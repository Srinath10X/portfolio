import mdx from "@astrojs/mdx";
import sitemap from "astro-sitemap";
import tailwind from "@astrojs/tailwind";

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://srinath.website",
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    resolve: {
      alias: { "@": "/src" },
    },
  },
  integrations: [
    tailwind(),
    mdx({
      shikiConfig: {
        theme: "github-dark-high-contrast",
      },
    }),
    sitemap(),
  ],
});
