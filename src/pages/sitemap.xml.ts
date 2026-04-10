import { getAbsoluteUrl, services } from '../data/site';

export const prerender = true;

const staticPaths = [
	'/',
	'/about/',
	'/business-law/',
	'/contact/',
	'/contract-drafting-review/',
	'/estate-planning/',
	'/family-law/',
	'/faq/',
	'/guardianship/',
	'/llc-formation/',
	'/oklahoma-legal-forms/',
	'/power-of-attorney/',
	'/practice-areas/',
	'/start-intake/',
	'/uncontested-divorce/',
	'/wills-and-trusts/',
];

const servicePaths = services.map((service) => `/${service.slug}/`);

const uniquePaths = Array.from(new Set([...staticPaths, ...servicePaths])).sort();

export function GET() {
	const lastmod = new Date().toISOString();
	const urls = uniquePaths
		.map(
			(path) => `  <url>
    <loc>${getAbsoluteUrl(path)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}
