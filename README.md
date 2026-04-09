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

Set any of these in `Settings -> Secrets and variables -> Actions -> Variables` or your local `.env` when ready:

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_GA_LINKED_DOMAINS`
- `PUBLIC_CLARITY_ID`
- `PUBLIC_POSTHOG_KEY`
- `PUBLIC_POSTHOG_HOST`

Recommended linked domains for GA4 on this project:

- `tulsalaw.llc,cinoccalaw.com`

## GitHub Pages setup

1. In GitHub, open `Settings -> Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to `main`.
4. The workflow at `.github/workflows/deploy.yml` will publish the site.

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

- phone: `(918) 488-9117`
- email: `tcinocca@cinoccalaw.com`
- secure form: `https://cinoccalaw.com/contact/`

## Current page set

- Homepage
- About Tracy
- Contact
- FAQ
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
