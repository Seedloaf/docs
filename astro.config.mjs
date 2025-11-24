import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://seedloaf.com',
  base: '/documentation',
  integrations: [
    mdx(), 
    react(), 
    sitemap({
      filter: (page) => !page.includes('/documentation/documentation/'),
    })
  ],
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()],
  },
});
