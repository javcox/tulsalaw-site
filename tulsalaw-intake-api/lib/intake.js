export const intakeServices = [
	{ value: 'personal-injury', label: 'Personal Injury' },
	{ value: 'estate-planning', label: 'Estate Planning' },
	{ value: 'wills-and-trusts', label: 'Wills and Trusts' },
	{ value: 'power-of-attorney', label: 'Power of Attorney' },
	{ value: 'guardianship', label: 'Guardianship' },
	{ value: 'uncontested-divorce', label: 'Uncontested Divorce' },
	{ value: 'family-law', label: 'Family Law' },
	{ value: 'llc-formation', label: 'LLC Formation' },
	{ value: 'business-law', label: 'Business Law' },
	{ value: 'contract-drafting-review', label: 'Contract Drafting / Review' },
	{ value: 'legal-guidance', label: 'Legal Guidance' },
];

export const intakeServiceLabelMap = Object.fromEntries(
	intakeServices.map((service) => [service.value, service.label]),
);

const SPAM_PATTERNS = [
	/\bseo\b/i,
	/\bguest post\b/i,
	/\bbacklink\b/i,
	/\bppc\b/i,
	/\blead gen\b/i,
	/\bmarketing agency\b/i,
	/\bweb design\b/i,
	/\bsponsored post\b/i,
	/\bcasino\b/i,
	/\bcrypto\b/i,
	/\btelegram\b/i,
];

const planningServices = new Set([
	'estate-planning',
	'wills-and-trusts',
	'power-of-attorney',
]);

const businessServices = new Set(['llc-formation', 'business-law', 'contract-drafting-review']);

function asString(value) {
	if (Array.isArray(value)) return value.filter(Boolean).join(', ');
	if (typeof value === 'string') return value.trim();
	if (typeof value === 'number') return String(value);
	if (typeof value === 'boolean') return value ? 'Yes' : 'No';
	return '';
}

function yesNo(value) {
	return asString(value).toLowerCase();
}

function escapeHtml(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

function pushIfValue(lines, label, value) {
	const text = asString(value);
	if (text) lines.push(`- ${label}: ${text}`);
}

function buildHtmlSection(title, rows) {
	const items = rows
		.map(([label, value]) => [label, asString(value)])
		.filter(([, value]) => value)
		.map(
			([label, value]) =>
				`<li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</li>`,
		)
		.join('');

	if (!items) return '';
	return `<h2>${escapeHtml(title)}</h2><ul>${items}</ul>`;
}

function getGeneralServiceRows(service, payload) {
	if (planningServices.has(service)) {
		return [
			['New plan or update', payload.planStage],
			['Planning for', payload.planForWhom],
			['Documents needed', payload.planNeeds],
			['Signer available now', payload.planSignerAvailable],
			['Family dispute risk', payload.planFamilyDisputes],
			['Business or property complexity', payload.planAssetComplexity],
			['Planning depth', payload.planDepth],
		];
	}

	if (service === 'guardianship') {
		return [
			['Emergency', payload.guardianshipEmergency],
			['For', payload.guardianshipFor],
			['Family agreement', payload.guardianshipAgreement],
			['Existing court case', payload.guardianshipExistingCase],
			['Contested', payload.guardianshipContested],
		];
	}

	if (service === 'uncontested-divorce') {
		return [
			['Both spouses agree', payload.divorceBothAgree],
			['Property division agreed', payload.divorcePropertyAgree],
			['Minor children', payload.divorceMinorChildren],
			['Custody or support disputed', payload.divorceCustodyDisputed],
			['Safety concern', payload.divorceSafetyConcern],
			['Already filed', payload.divorceAlreadyFiled],
			['Other spouse represented', payload.divorceOtherLawyer],
		];
	}

	if (service === 'family-law') {
		return [
			['Matter type', payload.familyMatterType],
			['Contested', payload.familyContested],
			['Already filed', payload.familyAlreadyFiled],
			['Safety concern', payload.familySafetyConcern],
		];
	}

	if (service === 'contract-drafting-review') {
		return [
			['Contract stage', payload.contractStage],
			['Contract type', payload.contractType],
			['Deadline', payload.contractDeadline],
			['Other side represented', payload.contractOtherSideRepresented],
		];
	}

	if (businessServices.has(service)) {
		return [
			['Business stage', payload.businessStage],
			['Number of owners', payload.businessOwners],
			['What is needed', payload.businessNeed],
			['Prevent problems or clean up', payload.businessIntent],
			['Existing dispute or lawsuit', payload.businessDispute],
		];
	}

	if (service === 'legal-guidance') {
		return [
			['Guidance needed', payload.guidanceNeed],
			['Already filed or active', payload.guidanceAlreadyFiled],
		];
	}

	return [];
}

function getTimingScore(bucket, flags) {
	switch (bucket) {
		case 'within-30-days':
			return 3;
		case '1-6-months':
			return 2;
		case '6-12-months':
			return 1;
		case '1-2-years':
			flags.push('Older than 1 year');
			return 0;
		case 'more-than-2-years':
			flags.push('Older than 2 years');
			return -2;
		case 'exact-date-known':
			return 2;
		default:
			return 0;
	}
}

function getPiLiabilityScore(payload, flags) {
	switch (asString(payload.piLiabilityAssessment)) {
		case 'clear-other-party':
			return 5;
		case 'likely-other-party':
			return 3;
		case 'shared-or-unclear':
			flags.push('Unclear liability');
			return 1;
		case 'self-fault':
			flags.push('Self fault');
			return 0;
		default:
			flags.push('Unclear liability');
			return 0;
	}
}

function getPiDamagesScore(payload, flags) {
	switch (asString(payload.piTreatmentStatus)) {
		case 'er-ongoing-major':
			return 5;
		case 'ongoing-treatment':
			return 4;
		case 'initial-treatment-only':
			return 2;
		case 'minor-or-vague':
			flags.push('Minimal damages');
			return 1;
		case 'no-treatment':
			flags.push('No treatment');
			return 0;
		default:
			flags.push('No treatment');
			return 0;
	}
}

function getPiEconomicScore(payload, flags) {
	const bills = asString(payload.piMedicalBillsRange);
	const missedWork = asString(payload.piMissedWork);
	const propertyDamage = asString(payload.piPropertyDamage);

	if (bills === '10k-plus' || missedWork === 'major' || propertyDamage === 'major') return 3;
	if (bills === '1k-10k' || missedWork === 'moderate' || propertyDamage === 'moderate') return 2;

	if (bills === 'under-1k' || missedWork === 'minor' || propertyDamage === 'minor') {
		flags.push('Minimal damages');
		return 1;
	}

	flags.push('Minimal damages');
	return 0;
}

function getPiInsuranceScore(payload) {
	switch (asString(payload.piInsuranceStatus)) {
		case 'confirmed-insurance':
		case 'commercial-insurance':
			return 2;
		case 'likely-insurance':
			return 1;
		case 'no-insurance-known':
			return -1;
		default:
			return 0;
	}
}

function evaluatePersonalInjury(payload) {
	const flags = [];
	let score = 0;

	score += getPiLiabilityScore(payload, flags);
	score += getPiDamagesScore(payload, flags);
	score += getPiEconomicScore(payload, flags);
	score += getTimingScore(asString(payload.piTimingBucket), flags);
	score += getPiInsuranceScore(payload);

	if (yesNo(payload.piWorkingAtTime) === 'yes') flags.push('Possible workers comp crossover');
	if (yesNo(payload.piRecoveryLog) === 'yes') score += 1;

	if (yesNo(payload.piDelayedTreatment) === 'yes') {
		flags.push('Delayed treatment');
		score -= 2;
	}
	if (yesNo(payload.piGapsInCare) === 'yes') {
		flags.push('Gaps in care');
		score -= 2;
	}
	if (yesNo(payload.piInconsistentAnswers) === 'yes') {
		flags.push('Inconsistent answers');
		score -= 2;
	}

	const subtype = asString(payload.piAutoSubtype);
	const treatment = asString(payload.piTreatmentStatus);
	const assessment = asString(payload.piLiabilityAssessment);

	if (subtype === 'rear-end' && treatment !== 'no-treatment') score = Math.max(score, 13);
	if (subtype === 'commercial-vehicle' || subtype === 'trucking') score = Math.max(score, 13);
	if (assessment === 'clear-other-party' && treatment === 'er-ongoing-major') {
		score = Math.max(score, 14);
	}

	let route = 'yellow';
	if (flags.includes('Self fault') || flags.includes('No treatment') || score <= 6) route = 'red';
	else if (score >= 13) route = 'green';

	return { score, flags, route };
}

function evaluateGeneral(payload) {
	const flags = [];
	const service = asString(payload.service);
	let score = 0;

	if (!intakeServiceLabelMap[service]) {
		flags.push('Unknown service lane');
		return { score: 0, flags, route: 'black' };
	}

	score += 5;

	if (yesNo(payload.inOklahoma) !== 'yes') {
		flags.push('Outside Oklahoma');
		return { score: 0, flags, route: 'black' };
	}

	if (yesNo(payload.hasLawyerAlready) === 'yes') {
		flags.push('Another lawyer already hired');
		score -= 3;
	}

	if (yesNo(payload.consultationOkay) === 'yes') score += 5;
	else if (yesNo(payload.consultationOkay) === 'not-sure') {
		score += 2;
		flags.push('Payment readiness unclear');
	} else {
		flags.push('Not prepared to pay for consultation');
	}

	if (yesNo(payload.deadlineSoon) === 'yes') {
		score += 1;
		flags.push('Deadline within 14 days');
	} else {
		score += 2;
	}

	const representation = asString(payload.representationType);
	if (representation === 'general-information') {
		flags.push('General information only');
		score -= 3;
	} else if (representation === 'document-review' || representation === 'document-prep') {
		score += 3;
	} else if (representation === 'ongoing-representation') {
		score += 1;
	}

	if (asString(payload.bestSummary).length > 700) {
		flags.push('Long narrative');
		score -= 1;
	}

	if (asString(payload.county)) score += 1;
	if (yesNo(payload.decisionMaker) === 'yes') score += 2;

	if (planningServices.has(service)) {
		if (yesNo(payload.planSignerAvailable) === 'yes') score += 2;
		else {
			flags.push('Signer unavailable or capacity issue');
			score -= 2;
		}

		if (yesNo(payload.planFamilyDisputes) === 'yes') {
			flags.push('Family dispute risk');
			score -= 1;
		}

		if (asString(payload.planDepth) === 'customized') score += 1;
	}

	if (service === 'guardianship') {
		if (yesNo(payload.guardianshipEmergency) === 'yes') {
			flags.push('Possible emergency guardianship');
			score -= 1;
		}
		if (yesNo(payload.guardianshipContested) === 'yes') {
			flags.push('Guardianship contested');
			score -= 2;
		}
		if (yesNo(payload.guardianshipAgreement) === 'yes') score += 2;
	}

	if (service === 'uncontested-divorce') {
		if (yesNo(payload.divorceBothAgree) === 'yes' && yesNo(payload.divorcePropertyAgree) === 'yes') {
			score += 3;
		} else {
			flags.push('May not be uncontested');
			score -= 3;
		}

		if (yesNo(payload.divorceCustodyDisputed) === 'yes' || yesNo(payload.divorceSafetyConcern) === 'yes') {
			flags.push('Contested family issues');
			score -= 3;
		}

		if (yesNo(payload.divorceOtherLawyer) === 'yes') {
			flags.push('Other spouse represented');
			score -= 2;
		}
	}

	if (service === 'family-law') {
		if (yesNo(payload.familySafetyConcern) === 'yes') {
			flags.push('Safety concern');
			score -= 2;
		}
		if (yesNo(payload.familyContested) === 'yes') {
			flags.push('Contested family matter');
			score -= 2;
		}
		if (yesNo(payload.familyAlreadyFiled) === 'yes') {
			flags.push('Existing family case');
			score -= 1;
		}
	}

	if (service === 'legal-guidance') {
		if (yesNo(payload.guidanceAlreadyFiled) === 'yes') score += 1;
		if (asString(payload.guidanceNeed) === 'just-question') {
			flags.push('Quick-question seeker');
			score -= 4;
		}
	}

	if (businessServices.has(service)) {
		if (yesNo(payload.businessDispute) === 'yes') {
			flags.push('Existing business dispute or lawsuit');
			score -= 3;
		}
		if (asString(payload.businessIntent) === 'prevent') score += 3;
		if (asString(payload.businessIntent) === 'cleanup') score += 1;
	}

	if (service === 'contract-drafting-review') {
		if (asString(payload.contractStage) === 'dispute') {
			flags.push('Active contract dispute');
			score -= 3;
		}
		if (asString(payload.contractDeadline) === 'within-7-days') {
			flags.push('Contract deadline within 7 days');
			score -= 1;
		}
	}

	let route = 'yellow';
	if (flags.includes('Outside Oklahoma')) route = 'black';
	else if (score >= 14) route = 'green';
	else if (score >= 8) route = 'yellow';
	else route = 'red';

	return { score, flags, route };
}

function detectSpam(payload) {
	const combined = [
		payload.outcomeWanted,
		payload.bestSummary,
		payload.additionalInfo,
		payload.opposingPartyDescription,
		payload.piIncidentDescription,
	]
		.map(asString)
		.join(' ');

	return SPAM_PATTERNS.some((pattern) => pattern.test(combined));
}

function buildTextSummary(payload, evaluation, serviceLabel) {
	const lines = [];
	lines.push('SERVICE');
	lines.push(`- Service: ${serviceLabel}`);
	lines.push(`- Route: ${evaluation.route.toUpperCase()}`);
	lines.push(`- Score: ${evaluation.score}`);
	lines.push('');
	lines.push('TOP SUMMARY');
	pushIfValue(lines, 'Full name', payload.fullName);
	pushIfValue(lines, 'Phone', payload.phone);
	pushIfValue(lines, 'Email', payload.email);
	pushIfValue(lines, 'For', payload.matterFor);
	pushIfValue(lines, 'Decision-maker', yesNo(payload.decisionMaker) === 'yes' ? 'Yes' : 'No');
	pushIfValue(lines, 'County', payload.county);
	pushIfValue(lines, 'State', payload.state);

	if (serviceLabel === 'Personal Injury') {
		pushIfValue(lines, 'Opposing party', payload.opposingPartyName || payload.opposingPartyDescription);
		pushIfValue(lines, 'Accident type', payload.piAutoSubtype || payload.piNonAutoSubtype);
		pushIfValue(lines, 'Approximate timing', payload.piTimingBucket);
		pushIfValue(lines, 'Exact date', payload.piExactDate);
		pushIfValue(lines, 'Timing explanation', payload.piTimingExplanation);
		pushIfValue(lines, 'City', payload.piCity);
		lines.push('');
		lines.push('LIABILITY');
		pushIfValue(lines, 'Incident snapshot', payload.piIncidentDescription);
		pushIfValue(
			lines,
			'Who is responsible and why',
			`${asString(payload.piResponsibleParty)} | ${asString(payload.piResponsibilityWhy)}`,
		);
		pushIfValue(lines, 'Insurance', payload.piInsuranceStatus);
		lines.push('');
		lines.push('DAMAGES');
		pushIfValue(lines, 'Injury', payload.piInjuryDescription);
		pushIfValue(lines, 'Treatment', payload.piTreatmentStatus);
		pushIfValue(lines, 'Medical bills', payload.piMedicalBillsRange);
		pushIfValue(lines, 'Missed work', payload.piMissedWork);
		pushIfValue(lines, 'Property damage', payload.piPropertyDamage);
		pushIfValue(lines, 'Recovery log', payload.piRecoveryLog);
		pushIfValue(lines, 'Working at the time', payload.piWorkingAtTime);
		pushIfValue(lines, 'Work explanation', payload.piWorkingExplanation);
	} else {
		lines.push('');
		lines.push('MATTER');
		pushIfValue(lines, 'Outcome wanted', payload.outcomeWanted);
		pushIfValue(lines, 'Representation sought', payload.representationType);
		pushIfValue(lines, 'Deadline in next 14 days', payload.deadlineSoon);
		pushIfValue(lines, 'Another lawyer already hired', payload.hasLawyerAlready);
		getGeneralServiceRows(asString(payload.service), payload).forEach(([label, value]) =>
			pushIfValue(lines, label, value),
		);
	}

	lines.push('');
	lines.push('SPECIAL NOTES');
	pushIfValue(lines, 'Best times to reply', payload.bestTimes);
	pushIfValue(lines, 'Main parties', payload.mainParties);
	pushIfValue(lines, 'Summary', payload.bestSummary);
	pushIfValue(lines, 'Additional info', payload.additionalInfo);
	lines.push('');
	lines.push('FLAGS');
	if (evaluation.flags.length) evaluation.flags.forEach((flag) => lines.push(`- ${flag}`));
	else lines.push('- None triggered');
	return lines.join('\n');
}

function buildHtmlSummary(payload, evaluation, serviceLabel) {
	const sections = [];
	sections.push(
		`<p><strong>Service:</strong> ${escapeHtml(serviceLabel)}<br><strong>Route:</strong> ${escapeHtml(evaluation.route.toUpperCase())}<br><strong>Score:</strong> ${escapeHtml(String(evaluation.score))}</p>`,
	);
	sections.push(
		buildHtmlSection('Top Summary', [
			['Full name', payload.fullName],
			['Phone', payload.phone],
			['Email', payload.email],
			['For', payload.matterFor],
			['Decision-maker', yesNo(payload.decisionMaker) === 'yes' ? 'Yes' : 'No'],
			['County', payload.county],
			['State', payload.state],
		]),
	);

	if (serviceLabel === 'Personal Injury') {
		sections.push(
			buildHtmlSection('Personal Injury Snapshot', [
				['Opposing party', payload.opposingPartyName || payload.opposingPartyDescription],
				['Accident type', payload.piAutoSubtype || payload.piNonAutoSubtype],
				['Approximate timing', payload.piTimingBucket],
				['Exact date', payload.piExactDate],
				['Timing explanation', payload.piTimingExplanation],
				['City', payload.piCity],
			]),
		);
		sections.push(
			buildHtmlSection('Liability', [
				['Incident snapshot', payload.piIncidentDescription],
				['Responsible party', payload.piResponsibleParty],
				['Why responsible', payload.piResponsibilityWhy],
				['Insurance', payload.piInsuranceStatus],
			]),
		);
		sections.push(
			buildHtmlSection('Damages', [
				['Injury', payload.piInjuryDescription],
				['Treatment', payload.piTreatmentStatus],
				['Medical bills', payload.piMedicalBillsRange],
				['Missed work', payload.piMissedWork],
				['Property damage', payload.piPropertyDamage],
				['Recovery log', payload.piRecoveryLog],
				['Working at the time', payload.piWorkingAtTime],
				['Work explanation', payload.piWorkingExplanation],
			]),
		);
	} else {
		sections.push(
			buildHtmlSection('Matter', [
				['Outcome wanted', payload.outcomeWanted],
				['Representation sought', payload.representationType],
				['Deadline in next 14 days', payload.deadlineSoon],
				['Another lawyer already hired', payload.hasLawyerAlready],
				...getGeneralServiceRows(asString(payload.service), payload),
			]),
		);
	}

	sections.push(
		buildHtmlSection('Special Notes', [
			['Best times to reply', payload.bestTimes],
			['Main parties', payload.mainParties],
			['Summary', payload.bestSummary],
			['Additional info', payload.additionalInfo],
		]),
	);
	sections.push(
		buildHtmlSection(
			'Flags',
			evaluation.flags.length
				? evaluation.flags.map((flag) => [flag, 'Triggered'])
				: [['Flags', 'None triggered']],
		),
	);

	return sections.filter(Boolean).join('');
}

export function evaluateIntake(payload = {}) {
	const service = asString(payload.service);
	const serviceLabel = intakeServiceLabelMap[service] ?? 'Unknown service';
	const startedAt = Number(payload.startedAtMs) || 0;

	if (startedAt && Date.now() - startedAt < 3500) {
		const flags = ['Submitted too quickly'];
		return {
			route: 'black',
			score: 0,
			flags,
			serviceLabel,
			subject: `[BLACK] ${serviceLabel} | ${asString(payload.fullName) || 'Unknown lead'}`,
			replyMessage: 'Your request was received.',
			executiveSummary: buildTextSummary(payload, { route: 'black', score: 0, flags }, serviceLabel),
			htmlSummary: buildHtmlSummary(payload, { route: 'black', score: 0, flags }, serviceLabel),
		};
	}

	if (detectSpam(payload) || asString(payload.website)) {
		const flags = ['Possible sales / marketing spam'];
		return {
			route: 'black',
			score: 0,
			flags,
			serviceLabel,
			subject: `[BLACK] ${serviceLabel} | ${asString(payload.fullName) || 'Unknown lead'}`,
			replyMessage: 'Your request was received.',
			executiveSummary: buildTextSummary(payload, { route: 'black', score: 0, flags }, serviceLabel),
			htmlSummary: buildHtmlSummary(payload, { route: 'black', score: 0, flags }, serviceLabel),
		};
	}

	let result = service === 'personal-injury' ? evaluatePersonalInjury(payload) : evaluateGeneral(payload);
	if (yesNo(payload.inOklahoma) !== 'yes') {
		result = { score: 0, flags: [...result.flags, 'Outside Oklahoma'], route: 'black' };
	}

	const replyMessage =
		result.route === 'green'
			? 'Thank you. If the matter appears to fit, the next step is usually an email with scheduling instructions and the $100 30-minute consultation payment link.'
			: result.route === 'yellow'
				? 'Thank you. Your request needs review first, and if the matter appears to fit, the next step is usually an email with scheduling instructions and the $100 30-minute consultation payment link.'
				: result.route === 'red'
					? 'Thank you. Your request was received and will be reviewed, but some matters may be declined if they are outside current fit, timing, or scope.'
					: 'Your request was received.';

	return {
		route: result.route,
		score: result.score,
		flags: result.flags,
		serviceLabel,
		subject: `[${result.route.toUpperCase()}] ${serviceLabel} | ${asString(payload.fullName) || 'Unknown lead'}`,
		replyMessage,
		executiveSummary: buildTextSummary(payload, result, serviceLabel),
		htmlSummary: buildHtmlSummary(payload, result, serviceLabel),
	};
}
