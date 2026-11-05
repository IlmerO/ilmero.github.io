import { defineConfig } from 'astro/config';

// When ilmer.me goes live, set SITE_URL=https://ilmer.me in the host's build settings.
export default defineConfig({
  site: process.env.SITE_URL || 'https://ilmero.github.io',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'pt', 'es', 'de'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
