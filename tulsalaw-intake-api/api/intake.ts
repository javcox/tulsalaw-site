import { evaluateIntake, type IntakeSubmission } from '../lib/intake.ts';

const allowedOrigins = new Set([
	'https://tulsalaw.llc',
	'http://localhost:4321',
	'http://127.0.0.1:4321',
	'http://localhost:4173',
	'http://127.0.0.1:4173',
]);

function applyCors(req: { headers?: Record<string, string | string[] | undefined> }, res: {
	setHeader: (name: string, value: string) => void;
}) {
	const originHeader = req.headers?.origin;
	const origin = Array.isArray(originHeader) ? originHeader[0] : originHeader;
	const allowOrigin = origin && allowedOrigins.has(origin) ? origin : 'https://tulsalaw.llc';

	res.setHeader('Access-Control-Allow-Origin', allowOrigin);
	res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Vary', 'Origin');
}

function parseBody(body: unknown): IntakeSubmission {
	if (!body) return {};
	if (typeof body === 'string') return JSON.parse(body) as IntakeSubmission;
	if (typeof Buffer !== 'undefined' && Buffer.isBuffer(body)) {
		return JSON.parse(body.toString('utf8')) as IntakeSubmission;
	}
	if (typeof body === 'object') return body as IntakeSubmission;
	return {};
}

function buildEmailHtml(summaryHtml: string) {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Tulsa Law Intake</title>
	</head>
	<body style="margin:0;padding:24px;background:#f4f7fb;color:#14263a;font-family:Segoe UI,Arial,sans-serif;">
		<div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid rgba(20,38,58,0.1);border-radius:18px;padding:28px;">
			<p style="margin:0 0 8px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#5a6b7c;">Tulsa Law Intake</p>
			<h1 style="margin:0 0 18px;font-size:28px;line-height:1.15;">New consultation request</h1>
			<div style="color:#314355;font-size:15px;line-height:1.6;">${summaryHtml}</div>
		</div>
	</body>
</html>`;
}

export default async function handler(
	req: {
		method?: string;
		headers?: Record<string, string | string[] | undefined>;
		body?: unknown;
	},
	res: {
		status: (code: number) => {
			setHeader: (name: string, value: string) => void;
			json: (body: unknown) => void;
			end: (body?: string) => void;
		};
		setHeader: (name: string, value: string) => void;
		json: (body: unknown) => void;
		end: (body?: string) => void;
	},
) {
	applyCors(req, res);

	if (req.method === 'OPTIONS') {
		return res.status(204).end();
	}

	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed.' });
	}

	try {
		const payload = parseBody(req.body);
		const evaluation = evaluateIntake(payload);
		const shouldSkipEmail =
			evaluation.flags.includes('Possible sales / marketing spam') ||
			evaluation.flags.includes('Submitted too quickly');

		if (!shouldSkipEmail) {
			const resendApiKey = process.env.RESEND_API_KEY;
			if (!resendApiKey) {
				return res.status(503).json({
					error: 'The intake was scored, but the email service is not configured yet.',
				});
			}

			const replyTo =
				typeof payload.email === 'string' && payload.email.includes('@') ? payload.email : undefined;
			const resendResponse = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${resendApiKey}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					from: process.env.INTAKE_FROM_EMAIL ?? 'Tulsa Law Intake <onboarding@resend.dev>',
					to: [process.env.INTAKE_TO_EMAIL ?? 'cinocca@tulsalaw.llc'],
					reply_to: replyTo ? [replyTo] : undefined,
					subject: evaluation.subject,
					text: evaluation.executiveSummary,
					html: buildEmailHtml(evaluation.htmlSummary),
				}),
			});

			if (!resendResponse.ok) {
				const errorText = await resendResponse.text();
				return res.status(502).json({
					error: `The intake was scored, but email delivery failed: ${errorText}`,
				});
			}
		}

		return res.status(200).json({
			ok: true,
			route: evaluation.route,
			score: evaluation.score,
			message: evaluation.replyMessage,
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unexpected intake submission failure.';
		return res.status(500).json({ error: message });
	}
}
