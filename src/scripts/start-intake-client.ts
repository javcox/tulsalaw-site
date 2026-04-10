import { evaluateIntake, type IntakeSubmission } from '../lib/intake';

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
	}
}

function asFieldString(value: unknown) {
	if (Array.isArray(value)) {
		return value.join(', ');
	}
	if (value === null || value === undefined) {
		return '';
	}
	return String(value);
}

type FormField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type ValidationIssue = {
	field: FormField;
	message: string;
	summaryLabel?: string;
};

export function mountIntakeForm() {
	const form = document.querySelector<HTMLFormElement>('[data-intake-form]');
	if (!form || form.dataset.enhanced === 'true') {
		return;
	}

	form.dataset.enhanced = 'true';

	const formEndpoint = form.dataset.endpoint?.trim() ?? '';
	const fallbackEndpoint = form.dataset.fallbackEndpoint?.trim() ?? '';
	const preselectedService = form.dataset.defaultService?.trim() || 'personal-injury';

	const statusBox = document.querySelector<HTMLElement>('[data-form-status]');
	const successPanel = document.querySelector<HTMLElement>('[data-form-success]');
	const successCopy = document.querySelector<HTMLElement>('[data-success-copy]');
	const submitButton = document.querySelector<HTMLButtonElement>('[data-submit-button]');
	const startedAtField = document.querySelector<HTMLInputElement>('[data-started-at]');
	const serviceSections = Array.from(document.querySelectorAll<HTMLElement>('[data-service-group]'));
	const piAutoGroups = Array.from(document.querySelectorAll<HTMLElement>('[data-pi-subgroup]'));
	const piTimingGroups = Array.from(document.querySelectorAll<HTMLElement>('[data-pi-timing]'));
	const stageCards = Array.from(document.querySelectorAll<HTMLElement>('[data-intake-stage]'));
	const progressSteps = Array.from(document.querySelectorAll<HTMLElement>('[data-progress-step]'));
	const progressFill = document.querySelector<HTMLElement>('[data-progress-fill]');
	const progressCurrent = document.querySelector<HTMLElement>('[data-progress-current]');
	const progressDetail = document.querySelector<HTMLElement>('[data-progress-detail]');

	const progressMeta: Record<number, string> = {
		1: 'Choose the matter type first. No long story required up front.',
		2: 'Reply details and fit questions come next.',
		3: 'Answer only the service-specific details needed for review.',
		4: 'Final summary, conflict names, and send.',
	};

	if (startedAtField) {
		startedAtField.value = String(Date.now());
	}

	const setStatus = (message: string, tone = 'neutral') => {
		if (!statusBox) return;
		statusBox.hidden = !message;
		statusBox.textContent = message;
		statusBox.dataset.tone = tone;
	};

	const findFieldContainer = (field: FormField) =>
		field.closest<HTMLElement>('.question-card, .service-selector-card, .check-row') ??
		field.closest<HTMLElement>('label');

	const getStickyOffset = () => {
		const header = document.querySelector<HTMLElement>('.site-header');
		const progress = document.querySelector<HTMLElement>('[data-intake-progress]');
		const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
		const progressBottom = progress?.getBoundingClientRect().bottom ?? 0;

		return Math.ceil(Math.max(headerBottom, progressBottom) + 24);
	};

	const scrollFieldIntoView = (field: FormField) => {
		const container = findFieldContainer(field) ?? field;
		const targetTop = Math.max(
			0,
			window.scrollY + container.getBoundingClientRect().top - getStickyOffset(),
		);

		window.scrollTo({
			top: targetTop,
			behavior: 'smooth',
		});
	};

	const getFieldLabel = (field: FormField) => {
		const container = findFieldContainer(field);
		const checkRowLabel = container?.classList.contains('check-row')
			? container.querySelector('span:last-child')?.textContent?.trim()
			: '';
		const questionLabel = container?.classList.contains('question-card')
			? container.querySelector(':scope > span')?.textContent?.trim()
			: '';
		const serviceLabel = container?.classList.contains('service-selector-card')
			? 'the service lane'
			: '';
		const disclaimerLabel = field.name === 'disclaimerAccepted'
			? 'the intake disclaimer acknowledgment'
			: '';
		const directLabel =
			container?.firstElementChild instanceof HTMLElement &&
			container.firstElementChild.tagName === 'SPAN'
				? container.firstElementChild.textContent?.trim()
				: '';
		const ariaLabel = field.getAttribute('aria-label')?.trim();
		const placeholder = field.getAttribute('placeholder')?.trim();
		const fallbackName = field.name
			.replace(/([A-Z])/g, ' $1')
			.replace(/[-_]/g, ' ')
			.trim();

		return (
			disclaimerLabel ||
			serviceLabel ||
			checkRowLabel ||
			questionLabel ||
			directLabel ||
			ariaLabel ||
			placeholder ||
			fallbackName ||
			'the highlighted field'
		);
	};

	const clearInvalidMarkers = () => {
		form
			.querySelectorAll<HTMLElement>('.is-invalid')
			.forEach((element) => element.classList.remove('is-invalid'));
		stageCards.forEach((card) => card.classList.remove('has-errors'));
		progressSteps.forEach((step) => step.classList.remove('has-errors'));
		form
			.querySelectorAll<FormField>('input[aria-invalid="true"], select[aria-invalid="true"], textarea[aria-invalid="true"]')
			.forEach((field) => field.removeAttribute('aria-invalid'));
	};

	const summarizeIssues = (issues: ValidationIssue[]) => {
		const labels = Array.from(
			new Set(
				issues
					.map((issue) => issue.summaryLabel?.trim() || getFieldLabel(issue.field))
					.filter(Boolean),
			),
		);

		if (!labels.length) {
			return 'Please complete the highlighted items before submitting.';
		}

		if (labels.length === 1) {
			return `Please complete ${labels[0]} before submitting.`;
		}

		if (labels.length === 2) {
			return `Please complete ${labels[0]} and ${labels[1]} before submitting.`;
		}

		const preview = labels.slice(0, 3).join(', ');
		const remaining = labels.length - 3;
		return remaining > 0
			? `Please complete the highlighted items before submitting. Still missing: ${preview}, and ${remaining} more.`
			: `Please complete the highlighted items before submitting. Still missing: ${preview}.`;
	};

	const showValidationIssues = (issues: ValidationIssue[]) => {
		if (!issues.length) {
			return;
		}

		issues.forEach((issue) => {
			const container = findFieldContainer(issue.field);
			container?.classList.add('is-invalid');
			issue.field.setAttribute('aria-invalid', 'true');

			const stage = issue.field.closest<HTMLElement>('[data-intake-stage]');
			if (stage) {
				stage.classList.add('has-errors');
				const step = progressSteps.find(
					(entry) => Number(entry.dataset.progressStep || '0') === Number(stage.dataset.intakeStage || '0'),
				);
				step?.classList.add('has-errors');
			}
		});

		const firstIssue = issues[0];
		const stage = firstIssue.field.closest<HTMLElement>('[data-intake-stage]');
		if (stage) {
			updateProgress(Number(stage.dataset.intakeStage || '1'));
		}

		setStatus(summarizeIssues(issues), 'error');
		scrollFieldIntoView(firstIssue.field);

		window.setTimeout(() => {
			firstIssue.field.focus({ preventScroll: true });
			firstIssue.field.reportValidity();
			window.setTimeout(() => {
				scrollFieldIntoView(firstIssue.field);
			}, 40);
		}, 140);
	};

	const collectNativeValidationIssues = (): ValidationIssue[] => {
		const fields = Array.from(form.querySelectorAll<FormField>('input, select, textarea')).filter(
			(field) => !field.disabled && !field.closest('[hidden]'),
		);
		const checkedGroups = new Set<string>();
		const issues: ValidationIssue[] = [];

		for (const field of fields) {
			if (field.type === 'radio' && field.name) {
				const key = `${field.type}:${field.name}`;
				if (checkedGroups.has(key)) {
					continue;
				}
				checkedGroups.add(key);
				const group = fields.filter(
					(candidate) =>
						candidate instanceof HTMLInputElement &&
						candidate.type === 'radio' &&
						candidate.name === field.name,
				);
				const groupRequired = group.some((candidate) => candidate.required);
				const groupChecked = group.some((candidate) => candidate.checked);
				if (groupRequired && !groupChecked) {
					issues.push({
						field,
						message: `Please complete ${getFieldLabel(field)}.`,
						summaryLabel: getFieldLabel(field),
					});
				}
				continue;
			}

			if (field.type === 'checkbox' && field.name) {
				const key = `${field.type}:${field.name}`;
				if (checkedGroups.has(key)) {
					continue;
				}
				checkedGroups.add(key);
			}

			if (!field.checkValidity()) {
				issues.push({
					field,
					message: `Please complete ${getFieldLabel(field)}.`,
					summaryLabel: getFieldLabel(field),
				});
			}
		}

		return issues;
	};

	const setSectionState = (section: HTMLElement, enabled: boolean) => {
		section.hidden = !enabled;
		section.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea').forEach((field) => {
			const shouldRequire = field.dataset.required === 'true';
			field.disabled = !enabled;
			field.required = enabled && shouldRequire;
		});
	};

	const getSelectedService = () => {
		const checked = form.querySelector<HTMLInputElement>('input[name="service"]:checked');
		return checked?.value || preselectedService;
	};

	const updatePiGroups = () => {
		const selected = getSelectedService();
		if (selected !== 'personal-injury') {
			piAutoGroups.forEach((group) => setSectionState(group, false));
			piTimingGroups.forEach((group) => setSectionState(group, false));
			return;
		}

		const autoRelated = form.querySelector<HTMLInputElement>('input[name="piAutoRelated"]:checked')?.value;
		piAutoGroups.forEach((group) => {
			const showAuto = group.dataset.piSubgroup === 'auto';
			setSectionState(group, autoRelated === 'yes' ? showAuto : autoRelated === 'no' ? !showAuto : false);
		});

		const timingBucket = form.querySelector<HTMLInputElement>('input[name="piTimingBucket"]:checked')?.value;
		piTimingGroups.forEach((group) => {
			const showDate = group.dataset.piTiming === 'date';
			setSectionState(
				group,
				timingBucket === 'exact-date-known' ? showDate : timingBucket ? !showDate : false,
			);
		});
	};

	const updateServiceSections = () => {
		const selected = getSelectedService();
		serviceSections.forEach((section) => {
			const matches = section.dataset.serviceGroup
				?.split(',')
				.map((value) => value.trim())
				.includes(selected);
			setSectionState(section, Boolean(matches));
		});
		updatePiGroups();
	};

	const updateProgress = (stageNumber: number) => {
		const normalized = Math.min(Math.max(stageNumber, 1), 4);
		const percent = Math.round((normalized / 4) * 100);
		progressSteps.forEach((step) => {
			const value = Number(step.dataset.progressStep || '0');
			step.classList.toggle('is-active', value === normalized);
			step.classList.toggle('is-complete', value < normalized);
		});
		if (progressFill) {
			progressFill.style.width = `${(normalized / 4) * 100}%`;
		}
		if (progressCurrent) {
			progressCurrent.textContent = `Step ${normalized} of 4 - ${percent}% complete`;
		}
		if (progressDetail) {
			progressDetail.textContent = progressMeta[normalized];
		}
	};

	const serializeForm = (formData: FormData): IntakeSubmission => {
		const payload: IntakeSubmission = {};
		for (const [key, value] of formData.entries()) {
			if (payload[key] === undefined) {
				payload[key] = value as string;
			} else if (Array.isArray(payload[key])) {
				(payload[key] as string[]).push(value as string);
			} else {
				payload[key] = [payload[key] as string, value as string];
			}
		}
		return payload;
	};

	const validatePlanningNeeds = (): ValidationIssue[] => {
		const service = getSelectedService();
		if (!['estate-planning', 'wills-and-trusts', 'power-of-attorney'].includes(service)) {
			return [];
		}
		if (!form.querySelector<HTMLInputElement>('input[name="planNeeds"]:checked')) {
			return [{
				message: 'Choose at least one planning need before submitting.',
				field: form.querySelector<HTMLInputElement>('input[name="planNeeds"]'),
				summaryLabel: 'at least one planning need',
			}];
		}
		return [];
	};

	const validateSpecialCases = (): ValidationIssue[] => {
		const issues: ValidationIssue[] = [...validatePlanningNeeds()];

		const service = getSelectedService();
		if (service !== 'personal-injury') {
			return issues;
		}

		const opposingName = form.querySelector<HTMLInputElement>('[name="opposingPartyName"]')?.value?.trim();
		const opposingDescription = form
			.querySelector<HTMLInputElement>('[name="opposingPartyDescription"]')
			?.value?.trim();
		if (!opposingName && !opposingDescription) {
			issues.push({
				message: 'For personal injury matters, provide the opposing party name or a short description.',
				field:
					form.querySelector<HTMLInputElement>('[name="opposingPartyName"]') ??
					form.querySelector<HTMLInputElement>('[name="opposingPartyDescription"]'),
				summaryLabel: 'opposing party information',
			});
		}

		const autoRelated = form.querySelector<HTMLInputElement>('input[name="piAutoRelated"]:checked')?.value;
		if (autoRelated === 'yes' && !form.querySelector<HTMLSelectElement>('[name="piAutoSubtype"]')?.value) {
			issues.push({
				message: 'Choose the auto-related accident type.',
				field: form.querySelector<HTMLSelectElement>('[name="piAutoSubtype"]'),
				summaryLabel: 'the auto-related accident type',
			});
		}
		if (autoRelated === 'no' && !form.querySelector<HTMLSelectElement>('[name="piNonAutoSubtype"]')?.value) {
			issues.push({
				message: 'Choose the non-auto injury type.',
				field: form.querySelector<HTMLSelectElement>('[name="piNonAutoSubtype"]'),
				summaryLabel: 'the non-auto injury type',
			});
		}

		const timingBucket = form.querySelector<HTMLInputElement>('input[name="piTimingBucket"]:checked')?.value;
		if (timingBucket === 'exact-date-known' && !form.querySelector<HTMLInputElement>('[name="piExactDate"]')?.value) {
			issues.push({
				message: 'Enter the exact accident date or choose a different timing option.',
				field: form.querySelector<HTMLInputElement>('[name="piExactDate"]'),
				summaryLabel: 'the exact accident date',
			});
		}
		if (
			timingBucket &&
			timingBucket !== 'exact-date-known' &&
			!form.querySelector<HTMLTextAreaElement>('[name="piTimingExplanation"]')?.value?.trim()
		) {
			issues.push({
				message: 'If the exact date is not known, explain when it happened or when you learned about it.',
				field: form.querySelector<HTMLTextAreaElement>('[name="piTimingExplanation"]'),
				summaryLabel: 'the injury timing explanation',
			});
		}

		return issues.filter((issue): issue is ValidationIssue => Boolean(issue.field));
	};

	const buildFallbackFormData = (payload: IntakeSubmission) => {
		const evaluation = evaluateIntake(payload);
		const outbound = new FormData(form);

		outbound.set('_subject', evaluation.subject);
		outbound.set('_template', 'table');
		outbound.set('_replyto', asFieldString(payload.email));
		outbound.set('_honey', asFieldString(payload.website));
		outbound.set('_blacklist', 'seo,guest post,backlink,ppc,lead gen,marketing agency,web design,sponsored post,casino,crypto,telegram');
		outbound.set('service_label', evaluation.serviceLabel);
		outbound.set('route', evaluation.route.toUpperCase());
		outbound.set('score', String(evaluation.score));
		outbound.set('flags', evaluation.flags.length ? evaluation.flags.join(' | ') : 'None triggered');
		outbound.set('executive_summary', evaluation.executiveSummary);
		outbound.set('full_name', asFieldString(payload.fullName));
		outbound.set('phone', asFieldString(payload.phone));
		outbound.set('email', asFieldString(payload.email));
		outbound.set('county', asFieldString(payload.county));
		outbound.set('state', asFieldString(payload.state));
		outbound.set('outcome_wanted', asFieldString(payload.outcomeWanted));
		outbound.set('representation_type', asFieldString(payload.representationType));
		outbound.set('main_parties', asFieldString(payload.mainParties));
		outbound.set('short_summary', asFieldString(payload.bestSummary));
		outbound.set('additional_info', asFieldString(payload.additionalInfo));

		return { evaluation, outbound };
	};

	const submitToPrimaryEndpoint = async (payload: IntakeSubmission) => {
		if (!formEndpoint) {
			throw new Error('No intake endpoint configured.');
		}

		const response = await fetch(formEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		const data = await response.json().catch(() => ({}));
		if (!response.ok) {
			throw new Error((data as { error?: string })?.error || 'The intake request could not be sent.');
		}

		return data as { route?: string; message?: string };
	};

	const submitToFallbackEndpoint = async (payload: IntakeSubmission) => {
		if (!fallbackEndpoint) {
			throw new Error('The intake email fallback is not configured.');
		}

		const { evaluation, outbound } = buildFallbackFormData(payload);
		const response = await fetch(fallbackEndpoint, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: outbound,
		});

		const data = await response.json().catch(() => ({}));
		if (!response.ok) {
			const fallbackMessage =
				(data as { message?: string; error?: string })?.message ||
				(data as { message?: string; error?: string })?.error ||
				'The intake request could not be sent.';
			throw new Error(fallbackMessage);
		}

		return {
			route: evaluation.route,
			message:
				(data as { message?: string })?.message ||
				evaluation.replyMessage,
		};
	};

	form.addEventListener('change', (event) => {
		const target = event.target;
		if (!(target instanceof HTMLElement)) return;
		if (
			target instanceof HTMLInputElement ||
			target instanceof HTMLSelectElement ||
			target instanceof HTMLTextAreaElement
		) {
			const container = findFieldContainer(target);
			container?.classList.remove('is-invalid');
			target.removeAttribute('aria-invalid');
			const stage = target.closest<HTMLElement>('[data-intake-stage]');
			if (stage && !stage.querySelector('.is-invalid')) {
				stage.classList.remove('has-errors');
				const step = progressSteps.find(
					(entry) => Number(entry.dataset.progressStep || '0') === Number(stage.dataset.intakeStage || '0'),
				);
				step?.classList.remove('has-errors');
			}
		}
		if (
			target.matches('input[name="service"]') ||
			target.matches('input[name="piAutoRelated"]') ||
			target.matches('input[name="piTimingBucket"]')
		) {
			updateServiceSections();
		}
	});

	updateServiceSections();
	updateProgress(1);
	setStatus('');

	form.addEventListener('input', (event) => {
		const target = event.target;
		if (
			target instanceof HTMLInputElement ||
			target instanceof HTMLSelectElement ||
			target instanceof HTMLTextAreaElement
		) {
			const container = findFieldContainer(target);
			container?.classList.remove('is-invalid');
			target.removeAttribute('aria-invalid');
			const stage = target.closest<HTMLElement>('[data-intake-stage]');
			if (stage && !stage.querySelector('.is-invalid')) {
				stage.classList.remove('has-errors');
				const step = progressSteps.find(
					(entry) => Number(entry.dataset.progressStep || '0') === Number(stage.dataset.intakeStage || '0'),
				);
				step?.classList.remove('has-errors');
			}
		}
	});

	if (stageCards.length) {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (visible) {
					updateProgress(Number((visible.target as HTMLElement).dataset.intakeStage || '1'));
				}
			},
			{
				rootMargin: '-20% 0px -45% 0px',
				threshold: [0.2, 0.35, 0.5],
			},
		);

		stageCards.forEach((card) => observer.observe(card));
		form.addEventListener('focusin', (event) => {
			const target = event.target;
			if (!(target instanceof HTMLElement)) return;
			const stage = target.closest<HTMLElement>('[data-intake-stage]');
			if (!stage) return;
			updateProgress(Number(stage.dataset.intakeStage || '1'));
		});
	}

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		setStatus('');
		clearInvalidMarkers();

		const issues = [...collectNativeValidationIssues(), ...validateSpecialCases()];
		if (issues.length) {
			showValidationIssues(issues);
			return;
		}

		if (!formEndpoint && !fallbackEndpoint) {
			setStatus('The intake form is not configured yet. Please try again later.', 'error');
			return;
		}

		if (submitButton) {
			submitButton.setAttribute('disabled', 'disabled');
			submitButton.setAttribute('aria-busy', 'true');
			submitButton.textContent = 'Sending...';
		}

		try {
			const payload = serializeForm(new FormData(form));
			let data: { route?: string; message?: string };

			if (formEndpoint) {
				try {
					data = await submitToPrimaryEndpoint(payload);
				} catch (primaryError) {
					if (!fallbackEndpoint) {
						throw primaryError;
					}
					data = await submitToFallbackEndpoint(payload);
				}
			} else {
				data = await submitToFallbackEndpoint(payload);
			}

			if (window.gtag) {
				window.gtag('event', 'generate_lead', {
					event_category: 'intake',
					event_label: `intake-${data.route || 'submitted'}`,
				});
			}

			form.hidden = true;
			if (successCopy) {
				successCopy.textContent =
					data.message ||
					'Your request has been sent. If the matter appears to fit, the next step is usually an email with scheduling instructions.';
			}
			successPanel?.removeAttribute('hidden');
			updateProgress(4);
		} catch (error) {
			setStatus(
				error instanceof Error ? error.message : 'Something went wrong while sending the intake request.',
				'error',
			);
		} finally {
			if (submitButton) {
				submitButton.removeAttribute('disabled');
				submitButton.removeAttribute('aria-busy');
				submitButton.textContent = 'Send intake request';
			}
		}
	});
}
