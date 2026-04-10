# Tulsa Law Site

Static Astro site for `tulsalaw.llc`.

## Stack

- Astro static build
- GitHub Pages deploy workflow
- Custom domain via `public/CNAME`
- Optional analytics hooks for `GA4`, `Clarity`, and `PostHog`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Analytics env vars

This repo now ships with live defaults for:

- `GA4`: `G-H44ZPBQL5Z`
- `Clarity`: `w92505y0yo`
- GA linked domains: `tulsalaw.llc,cinoccalaw.com`

You only need GitHub Actions variables or local `.env` values if you want to override those defaults or add optional PostHog later:

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_GA_LINKED_DOMAINS`
- `PUBLIC_CLARITY_ID`
- `PUBLIC_POSTHOG_KEY`
- `PUBLIC_POSTHOG_HOST`
- `PUBLIC_INTAKE_API_URL`

Recommended linked domains for GA4 on this project:

- `tulsalaw.llc,cinoccalaw.com`

## GitHub Pages setup

1. In GitHub, open `Settings -> Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to `main`.
4. The workflow at `.github/workflows/deploy.yml` will publish the site.

## Sitemap to submit

Submit this URL in Google Search Console:

- `https://tulsalaw.llc/sitemap.xml`

## Namecheap DNS target

If you want `tulsalaw.llc` as the main domain on GitHub Pages:

1. Delete the current parking records.
2. Add these A records for host `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a CNAME record for `www` pointing to `javcox.github.io`.
4. Leave `public/CNAME` set to `tulsalaw.llc`.
5. In GitHub Pages, set the custom domain to `tulsalaw.llc`.

## Intake paths

The site currently routes conversion to:

- email: `tcinocca@cinoccalaw.com`
- guided intake: `https://tulsalaw.llc/start-intake/`

## Intake endpoint env vars

The guided intake page expects a POST endpoint that can score the submission and send the summary email. The repo now includes:

- frontend page: `src/pages/start-intake.astro`
- shared scoring logic: `src/lib/intake.ts`
- Vercel-style serverless endpoint: `api/intake.ts`

Configure these values in the environment that serves the intake endpoint:

- `PUBLIC_INTAKE_API_URL`
- `RESEND_API_KEY`
- `INTAKE_FROM_EMAIL`
- `INTAKE_TO_EMAIL`

Defaults are documented in `.env.example`. If the site is still served from GitHub Pages, the frontend can stay on GitHub Pages, but the intake endpoint must be deployed somewhere that supports serverless functions and email delivery.

## Current page set

- Homepage
- About Tracy
- Contact
- FAQ
- Start Intake
- Practice Areas index
- Oklahoma legal forms landing page
- Estate planning
- Wills and trusts
- Power of attorney
- Guardianship
- Family law
- Uncontested divorce
- Business law
- LLC formation
- Contract drafting and review
