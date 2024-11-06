import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://abeens.github.io',
  base: '/Portfolio',
  integrations: [tailwind()]
});