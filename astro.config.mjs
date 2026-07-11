import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import editableRegions from '@cloudcannon/editable-regions/astro-integration';

const isGithub = process.env.GITHUB_ACTIONS === "true";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), editableRegions()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://deepjsr.github.io',
  base: isGithub ? "/deepjsr-cosmo-react-cms" : "/",
});
