// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://tulsalaw.llc',
	output: 'static',
	trailingSlash: 'always',
	integrations: [sitemap()],
});
