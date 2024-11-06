import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/Portfolio',
  site: 'https://abeens.github.io',
  integrations: [tailwind()]
});