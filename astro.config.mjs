// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        name: 'Inter',
        cssVariable: '--font-inter',
        provider: fontProviders.google(),
        // Specify weights that are actually used
        weights: [100, 200,300,400,500,600,700,800, 900],
        // Specify styles that are actually used
        styles: ['normal', 'italic'],
        // Download only font files for characters used on the page
        subsets: ['latin'],
        fallbacks: [
          'Adjusted Arial Fallback',
          'system-ui',
          '-apple-system',
          'blinkmacsystemfont',
          'Segoe UI',
          'Noto Sans',
          'helvetica',
          'arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      }
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});