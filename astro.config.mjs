import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import editableRegions from '@cloudcannon/editable-regions/astro-integration';

// https://astro.build
export default defineConfig({
  site: 'https://lumiereskin.com',
  integrations: [react(), editableRegions()],
  vite: {
    plugins: [tailwindcss()],
  },
});
