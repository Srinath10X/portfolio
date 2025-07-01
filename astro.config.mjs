import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    resolve: { alias: { "@": "/src" } },
  },
  integrations: [
    tailwind(),
    mdx({
      shikiConfig: {
        theme: "github-dark-high-contrast",
      },
    }),
  ],
});
