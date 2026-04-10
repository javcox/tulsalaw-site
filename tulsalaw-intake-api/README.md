# Tulsa Law Intake API

This is the standalone intake backend for `tulsalaw.llc`.

Deploy this folder as its own Vercel project using the existing `javcox/tulsalaw-site` repository and set the root directory to:

- `tulsalaw-intake-api`

Required environment variables:

- `RESEND_API_KEY`
- `INTAKE_FROM_EMAIL`
- `INTAKE_TO_EMAIL`

Primary endpoint after deploy:

- `/api/intake`
