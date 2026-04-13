export type Service = {
	slug: string;
	name: string;
	navLabel: string;
	category: string;
	metaTitle: string;
	metaDescription: string;
	eyebrow: string;
	heroTitle: string;
	intro: string;
	summary: string;
	searchPhrases: string[];
	idealFor: string[];
	includes: string[];
	process: string[];
	faqs: Array<{ question: string; answer: string }>;
	related: string[];
	localSupport?: {
		heading: string;
		copy: string;
		bullets: string[];
	};
	moneyPageLinks?: string[];
	siblingSupportLinks?: string[];
};

export type Testimonial = {
	author: string;
	quote: string;
};

export type IntakeExpectation = {
	title: string;
	copy: string;
};

export const firm = {
	name: 'Tulsa Law',
	legalName: 'Tracy A. Cinocca, P.C.',
	url: 'https://tulsalaw.llc',
	legacyUrl: 'https://cinoccalaw.com',
	consultationUrl: '/start-intake/',
	intakeRecipientEmail: 'cinocca@tulsalaw.llc',
	email: 'tcinocca@cinoccalaw.com',
	emailHref: 'mailto:tcinocca@cinoccalaw.com?subject=Consultation%20Request%20from%20TulsaLaw.llc',
	streetAddress: '10026-A S. Mingo Rd., Suite 238',
	city: 'Tulsa',
	region: 'Oklahoma',
	postalCode: '74133',
	fullAddress: '10026-A S. Mingo Rd., Suite 238, Tulsa, OK 74133',
	serviceArea: 'Tulsa office serving Tulsa, Bixby, Broken Arrow, and nearby Oklahoma communities',
	tagline:
		'Attorney-led review for personal injury, estate planning, legal guidance, family matters, and business documents from a Tulsa office serving nearby Oklahoma communities.',
	intakeSummary:
		'New client matters are reviewed for fit, conflicts, urgency, and scheduling before representation begins.',
	credentials: [
		'JD, University of Tulsa',
		'MBA, Oklahoma City University',
		'BA, University of Oklahoma',
		'Additional science and math study at Villanova University',
	],
	bioHighlights: [
		'Tracy A. Cinocca combines legal strategy with business fluency, which is especially helpful for contracts, business setup, and practical document work.',
		'Her background includes full-time purchasing work during MBA studies, including contract negotiation and acquisitions in a manufacturing environment.',
		'The practice is based in Tulsa at 10026-A S. Mingo Rd., Suite 238 and regularly serves clients from Tulsa, Bixby, Broken Arrow, and elsewhere in Oklahoma.',
	],
	brandPillars: [
		'Clear explanations and practical next steps',
		'Careful document preparation',
		'Direct attorney guidance on injury, family, business, and planning matters',
	],
};

export const homepageFAQs = [
	{
		question: 'What kinds of legal matters fit this site best?',
		answer:
			'Tulsa Law is built around higher-intent legal matters like personal injury review, legal guidance consultations, estate planning, powers of attorney, uncontested divorce paths, LLC formation, and contract review.',
	},
	{
		question: 'Does Tulsa Law handle clients outside Tulsa?',
		answer:
			'Yes. The office is in Tulsa and regularly helps clients in Bixby, Broken Arrow, and elsewhere in Oklahoma when the matter fits the listed practice areas.',
	},
	{
		question: 'How do consultation requests work?',
		answer:
			'The fastest path is the guided intake form on this site. Most requests are reviewed within 1 business day when they are submitted on a business day. Personal injury matters are screened for fit first. Most planning, family, business, and legal-guidance matters that fit move next to an email with scheduling instructions and the $100 30-minute consultation payment link.',
	},
	{
		question: 'What is the difference between Practice Areas and Simple Services?',
		answer:
			'Practice Areas is the full map, including injury review and broader family and business work. Simple Services is the shorter, document-focused path for matters like estate planning, powers of attorney, uncontested-divorce paperwork, LLC formation, and contract review.',
	},
];

export const homepageLanes = [
	{
		title: 'Personal Injury Review',
		href: '/personal-injury/',
		copy:
			'For Tulsa, Bixby, and nearby Oklahoma injury matters where liability, treatment, insurance, and damages need an honest first review before a claim consumes more time.',
		links: [
			{ label: 'Car Accidents', href: '/tulsa-car-accident-lawyer/' },
			{ label: 'Truck Accidents', href: '/tulsa-truck-accident-lawyer/' },
			{ label: 'Motorcycle Accidents', href: '/tulsa-motorcycle-accident-lawyer/' },
		],
	},
	{
		title: 'Legal Guidance',
		href: '/legal-guidance/',
		copy:
			'For matters that need attorney judgment before anything gets signed, filed, escalated, or pushed into the wrong lane.',
		links: [
			{ label: 'Family Law', href: '/family-law/' },
			{ label: 'Business Law', href: '/business-law/' },
			{ label: 'Contact the firm', href: '/contact/' },
		],
	},
	{
		title: 'Estate Planning',
		href: '/estate-planning/',
		copy:
			'For wills, trusts, powers of attorney, and guardianship-related planning that should be handled correctly before a health event, family change, or avoidable confusion hits.',
		links: [
			{ label: 'Wills and Trusts', href: '/wills-and-trusts/' },
			{ label: 'Power of Attorney', href: '/power-of-attorney/' },
			{ label: 'Guardianship', href: '/guardianship/' },
		],
	},
	{
		title: 'More Practice Areas',
		href: '/practice-areas/',
		copy:
			'For uncontested divorce, LLC formation, contract review, and the rest of the family and business map when the matter does not belong in the three main homepage lanes.',
		links: [
			{ label: 'Uncontested Divorce', href: '/uncontested-divorce/' },
			{ label: 'LLC Formation', href: '/llc-formation/' },
			{ label: 'Contracts', href: '/contract-drafting-review/' },
		],
	},
];

export const services: Service[] = [
	{
		slug: 'estate-planning',
		name: 'Estate Planning',
		navLabel: 'Estate Planning',
		category: 'Planning',
		metaTitle: 'Tulsa Estate Planning Attorney | Wills, Trusts, POA, Guardianship',
		metaDescription:
			'Work with a Tulsa estate planning attorney on wills, trusts, powers of attorney, guardianship preparation, and practical long-range planning for Oklahoma families.',
		eyebrow: 'Estate Planning',
		heroTitle:
			'Tulsa estate planning attorney for wills, trusts, powers of attorney, and family-ready document planning',
		intro:
			'The right estate plan should make life easier for the people you care about, not leave them sorting through uncertainty during a crisis. This page is designed for Tulsa-area families who want attorney-guided planning instead of piecing together forms and hoping they work later.',
		summary:
			'Tulsa Law helps Oklahoma clients prepare practical estate documents, organize decision-making authority, and put a clear plan in place before problems become expensive. If an estate-planning matter appears to fit after intake review, the next step is usually the $100 30-minute consultation so the family structure, documents, and next drafting steps can be reviewed carefully.',
		searchPhrases: [
			'Tulsa estate planning attorney',
			'Oklahoma wills and trusts lawyer',
			'Tulsa power of attorney lawyer',
		],
		idealFor: [
			'Families who want a will, trust, or power of attorney that actually fits how they live',
			'People updating old documents after marriage, divorce, children, or major asset changes',
			'Clients who want one attorney-guided process instead of piecing together online forms',
		],
		includes: [
			'Wills and revocable trust planning',
			'Durable financial powers of attorney',
			'Advance directives and health care planning',
			'Guardianship and family protection planning',
		],
		process: [
			'We identify the decisions, people, and assets that need the most protection first.',
			'The right documents are drafted around your goals instead of forcing you into a generic form.',
			'You leave with a clearer plan, signed documents, and a better sense of what to update over time.',
		],
		faqs: [
			{
				question: 'Do I need a trust or just a will?',
				answer:
					'That depends on your family setup, asset mix, privacy goals, and how much control you want built into the plan. The best answer comes after reviewing the details, not from a one-size-fits-all template.',
			},
			{
				question: 'Can you update an older estate plan?',
				answer:
					'Yes. Many people need revisions after marriage, divorce, business changes, new children, or major property shifts.',
			},
			{
				question: 'Is estate planning only for retirees?',
				answer:
					'No. Powers of attorney, guardianship choices, and clear beneficiary planning matter long before retirement.',
			},
		],
		related: ['wills-and-trusts', 'power-of-attorney', 'guardianship'],
		localSupport: {
			heading: 'Estate planning from a Tulsa office serving Tulsa, Bixby, Broken Arrow, and nearby families',
			copy:
				'This planning path works well for families in Tulsa, Bixby, Broken Arrow, and nearby communities who want attorney-guided documents instead of piecing forms together on their own.',
			bullets: [
				'Useful for families updating wills or trusts after marriage, divorce, children, or a move',
				'Helpful when aging parents, adult children, or decision-makers are spread across nearby communities',
				'Built for practical planning conversations before incapacity or family confusion creates pressure',
			],
		},
		moneyPageLinks: ['wills-and-trusts', 'power-of-attorney', 'guardianship'],
		siblingSupportLinks: ['legal-guidance'],
	},
	{
		slug: 'wills-and-trusts',
		name: 'Wills and Trusts',
		navLabel: 'Wills & Trusts',
		category: 'Planning',
		metaTitle: 'Tulsa Wills and Trusts Attorney | Oklahoma Estate Documents',
		metaDescription:
			'Get help with wills and trusts in Tulsa, including document planning, updates, family provisions, and practical estate guidance for Oklahoma clients.',
		eyebrow: 'Wills and Trusts',
		heroTitle:
			'Tulsa wills and trusts attorney for families who want clear instructions instead of loose ends',
		intro:
			'A strong will or trust is about clarity, control, and reducing avoidable confusion for the people who may have to act later.',
		summary:
			'Tulsa Law drafts and updates wills and trusts for Oklahoma clients who want their wishes stated clearly and their planning handled with care.',
		searchPhrases: [
			'Tulsa wills attorney',
			'Tulsa trusts lawyer',
			'Oklahoma will and trust attorney',
		],
		idealFor: [
			'Clients creating a first will or trust',
			'Families updating outdated estate documents',
			'People who want to name decision-makers, beneficiaries, and practical instructions with more confidence',
		],
		includes: [
			'Simple and more customized will planning',
			'Revocable trust planning when it fits the family and the goals',
			'Document updates after major family or financial changes',
			'Coordination with powers of attorney and related planning documents',
		],
		process: [
			'We review what you want the documents to accomplish and where confusion could arise later.',
			'The planning is drafted to match your actual family and financial picture.',
			'You receive final documents with guidance on what to revisit as life changes.',
		],
		faqs: [
			{
				question: 'When should I update my will?',
				answer:
					'Any major family, health, property, or business change is a good reason to review it. An outdated will can create exactly the problems people are trying to avoid.',
			},
			{
				question: 'Are online templates enough?',
				answer:
					'Templates may look easy, but they often miss the context that matters most. Attorney review helps make sure the plan reflects real goals and Oklahoma-specific concerns.',
			},
			{
				question: 'Can I protect minor children in my planning?',
				answer:
					'Yes. Naming trusted decision-makers and planning around family structure is one of the most important reasons to do this work intentionally.',
			},
		],
		related: ['estate-planning', 'power-of-attorney', 'guardianship'],
	},
	{
		slug: 'power-of-attorney',
		name: 'Power of Attorney',
		navLabel: 'Power of Attorney',
		category: 'Planning',
		metaTitle: 'Tulsa Power of Attorney Lawyer | Financial and Medical POA',
		metaDescription:
			'Create or update durable financial and medical powers of attorney with a Tulsa lawyer serving clients across Oklahoma.',
		eyebrow: 'Power of Attorney',
		heroTitle:
			'Tulsa power of attorney lawyer for durable financial authority, health care planning, and emergency-ready documents',
		intro:
			'Powers of attorney matter most when something unexpected happens. They should be clear, intentional, and ready before anyone needs them in a rush.',
		summary:
			'Tulsa Law helps Oklahoma clients put financial and medical decision-making authority in place through practical power of attorney planning.',
		searchPhrases: [
			'Tulsa power of attorney lawyer',
			'Oklahoma durable power of attorney attorney',
			'Tulsa medical power of attorney lawyer',
		],
		idealFor: [
			'Adults who want emergency decision authority in place before a health issue or travel issue arises',
			'Families helping parents or loved ones get organized',
			'Clients reviewing whether old POA documents still match their wishes',
		],
		includes: [
			'Durable financial powers of attorney',
			'Medical and health care decision documents',
			'Updates to older planning documents',
			'Coordination with broader estate planning when needed',
		],
		process: [
			'We identify who should act, when authority should apply, and what guardrails matter most to you.',
			'The documents are drafted for clarity, usability, and practical real-world handoff.',
			'You leave with stronger decision authority planning and a clearer understanding of how it fits your larger estate plan.',
		],
		faqs: [
			{
				question: 'What is the difference between financial and medical powers of attorney?',
				answer:
					'They cover different kinds of decisions. One is generally about money and property matters, while the other addresses health-related decisions and directions.',
			},
			{
				question: 'Can I choose more than one person?',
				answer:
					'Possibly, depending on how you want authority handled and how much simplicity you want when the document is actually used.',
			},
			{
				question: 'Should a power of attorney be part of a larger estate plan?',
				answer:
					'Very often, yes. These documents often work best when coordinated with wills, trusts, and broader family planning choices.',
			},
		],
		related: ['estate-planning', 'wills-and-trusts', 'guardianship'],
	},
	{
		slug: 'guardianship',
		name: 'Guardianship Planning',
		navLabel: 'Guardianship',
		category: 'Planning',
		metaTitle: 'Tulsa Guardianship Attorney | Family and Care Planning',
		metaDescription:
			'Talk with a Tulsa guardianship attorney about planning, family protection, decision-making arrangements, and related estate documents in Oklahoma.',
		eyebrow: 'Guardianship',
		heroTitle:
			'Tulsa guardianship planning for families who need more certainty around care, authority, and next steps',
		intro:
			'Guardianship questions can feel emotionally heavy and administratively confusing. Clear legal planning can reduce some of that uncertainty.',
		summary:
			'Tulsa Law helps clients think through guardianship-related planning and the supporting legal documents that protect children, dependents, and vulnerable loved ones.',
		searchPhrases: [
			'Tulsa guardianship lawyer',
			'Oklahoma guardianship attorney',
			'Tulsa guardianship planning attorney',
		],
		idealFor: [
			'Parents who want to name trusted people and clarify family intentions',
			'Families trying to prepare for future incapacity or care needs',
			'Clients who want guardianship questions coordinated with powers of attorney and estate planning',
		],
		includes: [
			'Family protection planning',
			'Guardianship-related attorney guidance',
			'Coordination with wills, trusts, and powers of attorney',
			'Clearer next-step guidance when family decisions need structure',
		],
		process: [
			'We talk through who needs protection, who should be involved, and what practical concerns are driving the request.',
			'The planning is matched to the family situation instead of a generic checklist.',
			'You leave with more clarity around the legal documents and decisions that should come next.',
		],
		faqs: [
			{
				question: 'Is guardianship planning the same as general estate planning?',
				answer:
					'Not exactly. The issues overlap, but guardianship planning often raises additional family, care, and authority questions that deserve focused attention.',
			},
			{
				question: 'Can guardianship concerns be addressed before a crisis happens?',
				answer:
					'Yes. Early planning is often the best way to create more stability and reduce confusion later.',
			},
			{
				question: 'Should guardianship planning include powers of attorney too?',
				answer:
					'Very often, yes. Families usually benefit when the planning documents work together instead of living in separate silos.',
			},
		],
		related: ['estate-planning', 'power-of-attorney', 'family-law'],
	},
	{
		slug: 'family-law',
		name: 'Family Law',
		navLabel: 'Family Law',
		category: 'Family',
		metaTitle: 'Tulsa Family Law Attorney | Divorce, Parenting, Agreements',
		metaDescription:
			'Get Tulsa family law guidance on divorce-related filings, agreements, parenting issues, and practical next steps for Oklahoma families.',
		eyebrow: 'Family Law',
		heroTitle:
			'Tulsa family law attorney for divorce planning, agreements, parenting issues, and document-heavy family matters',
		intro:
			'Family law issues are personal, emotional, and time-sensitive. The right legal help should steady the process instead of making it more chaotic.',
		summary:
			'Tulsa Law helps Oklahoma clients navigate family-law matters with direct guidance, organized paperwork, and a focus on practical next steps.',
		searchPhrases: [
			'Tulsa family law attorney',
			'Tulsa divorce lawyer',
			'Oklahoma family law attorney',
		],
		idealFor: [
			'Clients trying to understand their options before things escalate further',
			'People who need help with agreements, filings, and document-heavy family transitions',
			'Families who want clear communication and a calmer plan forward',
		],
		includes: [
			'Divorce-related planning and filings',
			'Separation and related agreement guidance',
			'Parenting and paternity-related issues',
			'Practical review of the documents and decisions that shape the next stage',
		],
		process: [
			'We clarify what is urgent, what needs to be filed, and what outcomes matter most to you.',
			'The matter is organized around the paperwork, timeline, and strategy needed for your next step.',
			'You leave with a clearer path instead of trying to decode the process on your own.',
		],
		faqs: [
			{
				question: 'Is this page only for contested matters?',
				answer:
					'No. Many people come in before a matter becomes fully contested because they want a calmer, more organized way to move forward.',
			},
			{
				question: 'Can I get help if I am still deciding what to do?',
				answer:
					'Yes. Early guidance is often where good decisions get made and costly mistakes get avoided.',
			},
			{
				question: 'Do family law matters always go to court?',
				answer:
					'Not always. Some matters can be resolved more efficiently through planning, agreement work, and focused negotiation.',
			},
		],
		related: ['uncontested-divorce', 'guardianship', 'estate-planning'],
	},
	{
		slug: 'uncontested-divorce',
		name: 'Uncontested Divorce',
		navLabel: 'Uncontested Divorce',
		category: 'Family',
		metaTitle: 'Tulsa Uncontested Divorce Attorney | Oklahoma Divorce Paperwork',
		metaDescription:
			'Need help with an uncontested divorce in Tulsa? Get attorney guidance on paperwork, agreements, and next steps for Oklahoma divorce matters.',
		eyebrow: 'Uncontested Divorce',
		heroTitle:
			'Tulsa uncontested divorce attorney for clients who want a cleaner, more organized divorce process',
		intro:
			'When both sides are closer to agreement, the goal should be a clean process, solid paperwork, and fewer avoidable setbacks. This page is meant for people who want a calmer uncontested-divorce path, not a fight-first sales funnel.',
		summary:
			'Tulsa Law helps Oklahoma clients move through uncontested-divorce matters with stronger documents, clearer expectations, and direct attorney guidance. If an uncontested-divorce matter appears to fit after intake review, the next step is usually the $100 30-minute consultation so the paperwork, agreements, and filing posture can be reviewed before anything important is signed.',
		searchPhrases: [
			'Tulsa uncontested divorce lawyer',
			'Oklahoma uncontested divorce attorney',
			'Tulsa divorce paperwork attorney',
		],
		idealFor: [
			'Couples who are largely aligned and want the process handled more carefully',
			'People who want help understanding divorce paperwork before filing',
			'Clients who prefer a more efficient path when the matter does not need a major fight',
		],
		includes: [
			'Review of uncontested-divorce fit and next steps',
			'Agreement and paperwork guidance',
			'Attorney input on practical issues that still need to be clarified',
			'Coordination with broader family-law concerns when needed',
		],
		process: [
			'We assess whether the matter appears suited for a more streamlined path.',
			'The agreements and paperwork are organized so nothing important gets handled casually.',
			'You get a clearer roadmap for filing, review, and the next required steps.',
		],
		faqs: [
			{
				question: 'What makes a divorce uncontested?',
				answer:
					'In general, it means the parties are closer to agreement on the major issues and the matter may not require the same level of conflict as a contested case.',
			},
			{
				question: 'Is an uncontested divorce always simple?',
				answer:
					'Not necessarily. Even when people agree broadly, the paperwork and legal consequences still deserve careful handling.',
			},
			{
				question: 'Can attorney guidance still help if we agree on most things?',
				answer:
					'Yes. Agreement does not remove the need for clear drafting or thoughtful review.',
			},
		],
		related: ['family-law', 'estate-planning', 'guardianship'],
		localSupport: {
			heading: 'Uncontested-divorce help from a Tulsa office for families in Tulsa, Bixby, Broken Arrow, and nearby communities',
			copy:
				'This page fits people who want a calmer, more organized divorce process when the matter is closer to agreement than conflict.',
			bullets: [
				'Useful when both sides want the paperwork handled more carefully, not more aggressively',
				'Helpful when you need attorney guidance on next steps before filing or signing anything important',
				'Relevant for clients who want a nearby Tulsa office and an intake-first path instead of a high-pressure process',
			],
		},
		moneyPageLinks: ['family-law', 'legal-guidance'],
		siblingSupportLinks: ['guardianship'],
	},
	{
		slug: 'personal-injury',
		name: 'Personal Injury',
		navLabel: 'Personal Injury',
		category: 'Injury',
		metaTitle: 'Tulsa Personal Injury Attorney | Injury Claims and Liability Review',
		metaDescription:
			'Talk with a Tulsa personal injury attorney about auto collisions, trucking wrecks, injury claims, liability review, treatment issues, and next steps in Oklahoma.',
		eyebrow: 'Personal Injury',
		heroTitle:
			'Tulsa personal injury attorney for collision and injury matters where liability and damages need careful review',
		intro:
			'Injury matters turn on timing, treatment, liability, and whether someone else can actually be held responsible. A good first review should separate a real claim from a dead end before you spend months pursuing the wrong case.',
		summary:
			'Tulsa Law reviews Oklahoma personal injury matters involving vehicle collisions and other injury claims where liability, insurance, and damages need a serious first look. Personal injury matters are screened for fit first so liability, treatment, insurance, and damages can be judged before the matter is treated like a standard consultation.',
		searchPhrases: [
			'Tulsa personal injury attorney',
			'Tulsa car accident lawyer',
			'Oklahoma injury claim attorney',
		],
		idealFor: [
			'People hurt in a crash or injury event where another person, driver, or business may be responsible',
			'Clients who have treatment, damage documentation, or insurance information that can be evaluated early',
			'People who want attorney review before spending time on a claim that may not be worth pursuing',
		],
		includes: [
			'Initial liability and damages review',
			'Auto, trucking, and injury claim screening',
			'Insurance and claim-position review',
			'Guidance on whether the matter appears strong enough to move forward',
		],
		process: [
			'We review the basic facts, timing, location, parties, and how the injury happened.',
			'The matter is screened for liability, damages, treatment, and whether there appears to be a realistic path forward.',
			'You get a clearer answer on whether the claim is worth pursuing and what the next step should be.',
		],
		faqs: [
			{
				question: 'Does every injury lead to a viable personal injury claim?',
				answer:
					'No. A claim usually depends on more than being hurt. Liability, damages, treatment, timing, and insurance often make the difference.',
			},
			{
				question: 'Should I reach out even if I am not sure the claim is strong yet?',
				answer:
					'Yes. Early screening can help determine whether the matter appears worth further time and attention.',
			},
			{
				question: 'What information helps with a first review?',
				answer:
					'The date range, location, parties involved, injury details, treatment status, insurance information, and anything that helps explain who was at fault.',
			},
		],
		related: [
			'tulsa-car-accident-lawyer',
			'tulsa-truck-accident-lawyer',
			'tulsa-wrongful-death-lawyer',
			'tulsa-slip-and-fall-lawyer',
			'tulsa-motorcycle-accident-lawyer',
			'tulsa-pedestrian-accident-lawyer',
		],
	},
	{
		slug: 'legal-guidance',
		name: 'Legal Guidance',
		navLabel: 'Legal Guidance',
		category: 'Guidance',
		metaTitle: 'Tulsa Legal Guidance Attorney | Matter Review and Next-Step Advice',
		metaDescription:
			'Get Tulsa legal guidance when you need an attorney to review the situation, sort the facts, and help decide the smartest next step in Oklahoma.',
		eyebrow: 'Legal Guidance',
		heroTitle:
			'Tulsa legal guidance for people who need an attorney to sort the issue and point to the right next step',
		intro:
			'Some matters do not start with a clean label. They start with a difficult situation, a deadline, a document, or a decision that needs attorney judgment before the wrong move is made. This is the right lane when the issue is real but the category is not obvious yet.',
		summary:
			'Tulsa Law offers legal guidance for Oklahoma clients who need a serious review, a clearer strategy, and help deciding what should happen next before they commit more time or money. This page is built for matters that need attorney judgment first, and many that fit move next to the $100 30-minute consultation after intake review.',
		searchPhrases: [
			'Tulsa legal guidance attorney',
			'Tulsa legal advice consultation',
			'Oklahoma attorney consultation',
		],
		idealFor: [
			'People who know there is a legal issue but are not yet sure which lane it belongs in',
			'Clients who need a lawyer to review documents, timing, risks, and next-step options',
			'Business or family clients trying to avoid a bad decision before signing, filing, or escalating the matter',
		],
		includes: [
			'Attorney review of the issue, timeline, and likely pressure points',
			'Practical next-step guidance before filing, signing, or escalating',
			'Direction on whether the matter fits injury, family, planning, or business work',
			'Consultation-based strategy when the issue needs legal judgment before action',
		],
		process: [
			'We start with the facts, the urgency, and the decision you are trying to make.',
			'The matter is reviewed for fit, risk, and whether a cleaner lane or document path is available.',
			'You leave with a clearer next step instead of guessing whether the issue is worth pursuing.',
		],
		faqs: [
			{
				question: 'When is legal guidance a better fit than a specific service page?',
				answer:
					'It is usually the better fit when the issue does not land cleanly in one category yet, or when you need an attorney to review the situation before deciding which path makes the most sense.',
			},
			{
				question: 'Can this help if I am not ready to hire for full representation?',
				answer:
					'Yes. Many clients start here because they need a serious review and a smarter next step before deciding how much legal work is actually needed.',
			},
			{
				question: 'What should I bring to a legal guidance consultation?',
				answer:
					'Bring the key documents, the timeline, the names involved, any deadline, and a short explanation of the decision or problem you are trying to solve.',
			},
		],
		related: ['personal-injury', 'family-law', 'business-law'],
	},
	{
		slug: 'tulsa-car-accident-lawyer',
		name: 'Car Accidents',
		navLabel: 'Car Accidents',
		category: 'Injury',
		metaTitle: 'Tulsa Car Accident Lawyer | Injury Claim Review After a Crash',
		metaDescription:
			'Speak with a Tulsa car accident lawyer about fault, treatment, insurance, and whether your Oklahoma collision claim is worth pursuing.',
		eyebrow: 'Car Accidents',
		heroTitle:
			'Tulsa car accident lawyer for crash claims where fault, treatment, and insurance need a serious review',
		intro:
			'After a car accident, the first question is not just whether you were hurt. It is whether liability, treatment, insurance, and damages line up strongly enough to justify moving forward.',
		summary:
			'Tulsa Law reviews Oklahoma car accident matters involving fault disputes, treatment history, insurance issues, and injury-related damages after a crash.',
		searchPhrases: [
			'Tulsa car accident lawyer',
			'Tulsa auto accident attorney',
			'Oklahoma car wreck lawyer',
		],
		idealFor: [
			'Drivers or passengers hurt in a collision where another driver may be at fault',
			'People who have begun treatment or have damage documentation ready for review',
			'Clients who want to know whether the claim looks strong enough to pursue before wasting time',
		],
		includes: [
			'Fault and liability review after a collision',
			'Insurance and claim-position screening',
			'Treatment and damages evaluation',
			'Guidance on what information matters most before moving forward',
		],
		process: [
			'We review the crash facts, the timing, the parties, and the location first.',
			'The matter is screened for fault, treatment, insurance coverage, and damages support.',
			'You get a clearer answer on whether the claim appears worth pursuing and what should happen next.',
		],
		faqs: [
			{
				question: 'What makes a car accident claim stronger?',
				answer:
					'Clear liability, documented treatment, meaningful damages, and insurance or another realistic source of recovery usually make the biggest difference.',
			},
			{
				question: 'Should I reach out before treatment is complete?',
				answer:
					'Yes. Early review can help you understand whether the claim appears viable and what facts or records are likely to matter most.',
			},
			{
				question: 'What should I gather before contacting the firm?',
				answer:
					'The date or date range, location, crash details, insurance information, treatment status, photos, and anything that helps show who caused the wreck.',
			},
		],
		related: ['personal-injury', 'tulsa-truck-accident-lawyer', 'tulsa-motorcycle-accident-lawyer'],
	},
	{
		slug: 'tulsa-truck-accident-lawyer',
		name: 'Truck Accidents',
		navLabel: 'Truck Accidents',
		category: 'Injury',
		metaTitle: 'Tulsa Truck Accident Lawyer | Commercial Vehicle Injury Claims',
		metaDescription:
			'Talk with a Tulsa truck accident lawyer about commercial vehicle crashes, serious injuries, insurance, and liability review in Oklahoma.',
		eyebrow: 'Truck Accidents',
		heroTitle:
			'Tulsa truck accident lawyer for commercial vehicle wrecks that need careful liability and damages review',
		intro:
			'Truck accidents can involve larger injuries, multiple layers of insurance, and more than one potentially responsible party. Early review matters.',
		summary:
			'Tulsa Law reviews Oklahoma truck accident claims involving commercial drivers, serious collision damage, insurance questions, and whether the matter appears worth pursuing.',
		searchPhrases: [
			'Tulsa truck accident lawyer',
			'Tulsa commercial vehicle accident attorney',
			'Oklahoma trucking accident lawyer',
		],
		idealFor: [
			'People hurt in collisions involving semis, delivery vehicles, or other commercial trucks',
			'Clients with treatment, crash reports, or insurance information that can be reviewed early',
			'People who need to know whether liability and damages support a stronger truck accident claim',
		],
		includes: [
			'Commercial vehicle liability review',
			'Insurance and coverage screening',
			'Treatment and damages evaluation',
			'First-pass review of whether the truck accident claim appears strong enough to pursue',
		],
		process: [
			'We review the crash, the parties involved, and whether a commercial driver or company may be responsible.',
			'The matter is screened for fault, treatment, damages, and available insurance support.',
			'You get a clearer sense of whether the claim appears worth further action.',
		],
		faqs: [
			{
				question: 'Why are truck accident claims often treated differently than ordinary car crashes?',
				answer:
					'Truck matters can involve commercial insurance, company responsibility, and larger injury or damages issues, so the early screening usually needs to be more careful.',
			},
			{
				question: 'What helps with a first review of a truck accident claim?',
				answer:
					'The crash details, location, photos, treatment records, any report information, and whatever you know about the truck, company, or insurer.',
			},
			{
				question: 'Can Tulsa Law tell me if the matter looks worth pursuing?',
				answer:
					'That is the point of the first review. The goal is to determine whether liability, damages, and coverage appear strong enough to justify moving forward.',
			},
		],
		related: ['personal-injury', 'tulsa-car-accident-lawyer', 'tulsa-wrongful-death-lawyer'],
	},
	{
		slug: 'tulsa-motorcycle-accident-lawyer',
		name: 'Motorcycle Accidents',
		navLabel: 'Motorcycle Accidents',
		category: 'Injury',
		metaTitle: 'Tulsa Motorcycle Accident Lawyer | Injury Claim Review',
		metaDescription:
			'Get Tulsa motorcycle accident lawyer review for liability, treatment, insurance, and whether an Oklahoma injury claim appears worth pursuing.',
		eyebrow: 'Motorcycle Accidents',
		heroTitle:
			'Tulsa motorcycle accident lawyer for injury claims where fault and damages need a serious first review',
		intro:
			'Motorcycle wrecks often involve significant injury, contested fault, and insurers looking hard at how the crash happened. A serious review can help separate a real claim from a weak one.',
		summary:
			'Tulsa Law reviews Oklahoma motorcycle accident matters involving fault disputes, treatment history, and whether the damages support a stronger injury claim.',
		searchPhrases: [
			'Tulsa motorcycle accident lawyer',
			'Tulsa motorcycle injury attorney',
			'Oklahoma motorcycle wreck lawyer',
		],
		idealFor: [
			'Riders hurt in a crash where another driver may have caused or contributed to the collision',
			'People with treatment records, photos, or insurance details ready for early review',
			'Clients who want a realistic assessment of whether the claim appears strong enough to pursue',
		],
		includes: [
			'Motorcycle crash liability review',
			'Treatment and injury screening',
			'Insurance and damages evaluation',
			'Guidance on whether the claim appears worth pursuing',
		],
		process: [
			'We review the crash facts, the vehicles involved, and where fault appears to fall.',
			'The matter is screened for treatment, damages, insurance, and whether the evidence supports a stronger claim.',
			'You get a clearer answer on whether the matter is worth more time and attention.',
		],
		faqs: [
			{
				question: 'Do motorcycle claims often involve fault disputes?',
				answer:
					'Yes. That is one reason early review matters. Liability, treatment, and the available evidence all need to be looked at together.',
			},
			{
				question: 'What should I gather for a first review?',
				answer:
					'Bring the crash date or date range, location, photos, treatment status, insurance information, and anything that helps show how the collision happened.',
			},
			{
				question: 'Can a motorcycle claim still be worth pursuing if the insurer pushes back early?',
				answer:
					'Possibly. The real question is whether the facts, treatment, and damages line up strongly enough once the matter is reviewed carefully.',
			},
		],
		related: ['personal-injury', 'tulsa-car-accident-lawyer', 'tulsa-pedestrian-accident-lawyer'],
	},
	{
		slug: 'tulsa-pedestrian-accident-lawyer',
		name: 'Pedestrian Accidents',
		navLabel: 'Pedestrian Accidents',
		category: 'Injury',
		metaTitle: 'Tulsa Pedestrian Accident Lawyer | Injury Claim Review',
		metaDescription:
			'Talk with a Tulsa pedestrian accident lawyer about fault, treatment, insurance, and whether an Oklahoma injury claim appears worth pursuing.',
		eyebrow: 'Pedestrian Accidents',
		heroTitle:
			'Tulsa pedestrian accident lawyer for injury matters where fault and damages need careful review',
		intro:
			'Pedestrian injury claims can be serious very quickly. The key early questions are fault, treatment, insurance, and whether the damages support a meaningful claim.',
		summary:
			'Tulsa Law reviews Oklahoma pedestrian accident matters involving driver fault, treatment, damages, and whether the injury claim appears strong enough to move forward.',
		searchPhrases: [
			'Tulsa pedestrian accident lawyer',
			'Tulsa pedestrian injury attorney',
			'Oklahoma pedestrian accident lawyer',
		],
		idealFor: [
			'People hit while walking or crossing where a driver, business, or other party may be responsible',
			'Clients with treatment, photo, or incident information ready for review',
			'People who need to know whether the injury claim appears worth more time and attention',
		],
		includes: [
			'Pedestrian accident liability review',
			'Treatment and damages screening',
			'Insurance and recovery-position review',
			'Guidance on whether the matter appears strong enough to pursue',
		],
		process: [
			'We review how the incident happened, who may be responsible, and what evidence exists.',
			'The matter is screened for fault, treatment, damages, and available insurance support.',
			'You get a clearer read on whether the claim appears worth moving forward.',
		],
		faqs: [
			{
				question: 'What makes a pedestrian injury claim stronger?',
				answer:
					'Clear fault, documented treatment, meaningful damages, and usable insurance or another source of recovery usually matter most.',
			},
			{
				question: 'What should I gather before contacting the firm?',
				answer:
					'Gather the incident date, location, photos, any report information, treatment status, and anything that helps explain how the pedestrian accident happened.',
			},
			{
				question: 'Can Tulsa Law review whether the claim appears worth pursuing?',
				answer:
					'Yes. The first review is meant to help determine whether liability and damages appear strong enough to justify further action.',
			},
		],
		related: ['personal-injury', 'tulsa-car-accident-lawyer', 'tulsa-slip-and-fall-lawyer'],
	},
	{
		slug: 'tulsa-wrongful-death-lawyer',
		name: 'Wrongful Death',
		navLabel: 'Wrongful Death',
		category: 'Injury',
		metaTitle: 'Tulsa Wrongful Death Lawyer | Fatal Injury Claim Review',
		metaDescription:
			'Speak with a Tulsa wrongful death lawyer about fatal injury claims, liability, insurance, and whether an Oklahoma matter appears worth pursuing.',
		eyebrow: 'Wrongful Death',
		heroTitle:
			'Tulsa wrongful death lawyer for fatal injury matters that need serious review of liability, damages, and next steps',
		intro:
			'Wrongful death matters are high-stakes and emotionally heavy. The first questions are usually whether another party can be held responsible and whether the claim appears strong enough to move forward.',
		summary:
			'Tulsa Law reviews Oklahoma wrongful death matters involving fatal injuries, liability questions, insurance, and whether the claim appears worth pursuing.',
		searchPhrases: [
			'Tulsa wrongful death lawyer',
			'Tulsa wrongful death attorney',
			'Oklahoma wrongful death lawyer',
		],
		idealFor: [
			'Families who need an early legal review after a fatal injury where another party may be responsible',
			'People with incident, treatment, insurance, or investigation information ready for review',
			'Clients who want to understand whether the claim appears strong enough to justify moving forward',
		],
		includes: [
			'Wrongful death liability review',
			'Insurance and claim-position screening',
			'High-damages matter assessment',
			'Guidance on whether the matter appears worth pursuing',
		],
		process: [
			'We review the incident, the parties involved, and the available information about fault.',
			'The matter is screened for liability, damages, insurance, and whether there appears to be a realistic path forward.',
			'You get a clearer answer on whether the claim appears strong enough to pursue.',
		],
		faqs: [
			{
				question: 'What matters most in an early wrongful death review?',
				answer:
					'Liability, available evidence, insurance or another source of recovery, and whether the facts support a realistic path forward are usually the key issues.',
			},
			{
				question: 'Can the firm help determine whether the matter appears strong enough to pursue?',
				answer:
					'Yes. The point of the first review is to determine whether the facts and damages support a stronger claim.',
			},
			{
				question: 'What should I gather before reaching out?',
				answer:
					'Gather the basic timeline, incident details, available reports, insurance information, and anything that helps explain what happened and who may be responsible.',
			},
		],
		related: ['personal-injury', 'tulsa-truck-accident-lawyer', 'tulsa-car-accident-lawyer'],
	},
	{
		slug: 'tulsa-slip-and-fall-lawyer',
		name: 'Slip and Fall',
		navLabel: 'Slip and Fall',
		category: 'Injury',
		metaTitle: 'Tulsa Slip and Fall Lawyer | Premises Injury Claim Review',
		metaDescription:
			'Get Tulsa slip and fall lawyer review for premises liability, treatment, damages, and whether an Oklahoma injury claim appears worth pursuing.',
		eyebrow: 'Slip and Fall',
		heroTitle:
			'Tulsa slip and fall lawyer for premises injury matters where fault and damages need a serious review',
		intro:
			'Slip and fall claims often turn on proof. The first review should focus on what happened, what made the condition dangerous, and whether the damages support a meaningful claim.',
		summary:
			'Tulsa Law reviews Oklahoma slip and fall and premises injury matters involving hazardous conditions, treatment, damages, and whether the claim appears worth pursuing.',
		searchPhrases: [
			'Tulsa slip and fall lawyer',
			'Tulsa premises liability attorney',
			'Oklahoma slip and fall lawyer',
		],
		idealFor: [
			'People hurt on another property where unsafe conditions may have caused the injury',
			'Clients with treatment records, photos, or incident details ready for review',
			'People who want to know whether the liability and damages support a stronger premises claim',
		],
		includes: [
			'Premises liability and condition review',
			'Treatment and damages screening',
			'Insurance and recovery-position review',
			'Guidance on whether the claim appears worth pursuing',
		],
		process: [
			'We review the location, condition, timing, and what evidence exists about how the fall happened.',
			'The matter is screened for liability, damages, treatment, and whether the claim appears strong enough to move forward.',
			'You get a clearer answer on whether the matter appears worth further action.',
		],
		faqs: [
			{
				question: 'What helps make a slip and fall claim stronger?',
				answer:
					'Photos, incident details, documented treatment, and facts that help explain why the condition was dangerous and who may be responsible usually matter most.',
			},
			{
				question: 'Should I reach out even if I am not sure the condition was enough to support a claim?',
				answer:
					'Yes. Early review can help determine whether the liability and damages appear strong enough to justify moving forward.',
			},
			{
				question: 'What should I bring to a first review?',
				answer:
					'Bring the date or date range, location, photos if available, treatment status, and anything that helps explain what caused the fall and how you were hurt.',
			},
		],
		related: ['personal-injury', 'tulsa-pedestrian-accident-lawyer', 'tulsa-car-accident-lawyer'],
	},
	{
		slug: 'business-law',
		name: 'Business Law',
		navLabel: 'Business Law',
		category: 'Business',
		metaTitle: 'Tulsa Business Lawyer | Formation, Contracts, Governance',
		metaDescription:
			'Get practical Tulsa business law help for company formation, contracts, governance questions, purchases, and everyday legal documents in Oklahoma.',
		eyebrow: 'Business Law',
		heroTitle:
			'Tulsa business lawyer for formation, contracts, governance, and the legal documents companies should get right early',
		intro:
			'Many business problems show up long before there is a lawsuit. Good document work can prevent unnecessary friction, expense, and future cleanup.',
		summary:
			'Tulsa Law supports Oklahoma businesses with formation work, contract guidance, agreement review, and the practical legal documents that keep decisions moving.',
		searchPhrases: [
			'Tulsa business lawyer',
			'Oklahoma business attorney',
			'Tulsa contract lawyer',
		],
		idealFor: [
			'Owners starting or cleaning up an Oklahoma business',
			'Companies needing better agreements before a deal goes sideways',
			'Businesses that want attorney guidance from someone with both legal and MBA training',
		],
		includes: [
			'Business formation and entity planning',
			'Contract drafting and review',
			'Governance, ownership, and practical document review',
			'Support for transactions and day-to-day business legal questions',
		],
		process: [
			'We identify the business goal, the agreement or filing needed, and the risks that should be addressed early.',
			'The legal work is drafted in plain terms with enough structure to protect the deal.',
			'You move forward with stronger paperwork and fewer avoidable surprises.',
		],
		faqs: [
			{
				question: 'Do I need an attorney before signing a business agreement?',
				answer:
					'That is often the best time to get help. Reviewing the agreement before it becomes a problem is usually far cheaper than fighting over it later.',
			},
			{
				question: 'Can Tulsa Law help with existing companies too?',
				answer:
					'Yes. Many matters involve reviewing and improving documents for companies that are already operating.',
			},
			{
				question: 'Why does an MBA background matter here?',
				answer:
					'It can help bridge the gap between legal drafting and the commercial realities behind the deal, operations, or ownership structure.',
			},
		],
		related: ['llc-formation', 'contract-drafting-review'],
	},
	{
		slug: 'llc-formation',
		name: 'LLC Formation',
		navLabel: 'LLC Formation',
		category: 'Business',
		metaTitle: 'Tulsa LLC Formation Lawyer | Oklahoma LLC Setup and Agreements',
		metaDescription:
			'Start or clean up an Oklahoma LLC with Tulsa attorney guidance on entity setup, operating agreements, ownership structure, and early-stage legal decisions.',
		eyebrow: 'LLC Formation',
		heroTitle:
			'Tulsa LLC formation lawyer for owners who want the setup done cleanly from the start',
		intro:
			'Business formation should not stop at filing a name. The early structure matters because it shapes ownership, authority, and how conflict gets handled later. This page is for owners who want cleaner setup and better documents from the start.',
		summary:
			'Tulsa Law helps founders and business owners form Oklahoma LLCs with stronger documentation and more thoughtful upfront planning. If an LLC-formation matter appears to fit after intake review, the next step is usually the $100 30-minute consultation so ownership, authority, and operating-agreement issues can be reviewed before filing becomes the only focus.',
		searchPhrases: [
			'Tulsa LLC formation lawyer',
			'Oklahoma LLC attorney',
			'Tulsa LLC operating agreement lawyer',
		],
		idealFor: [
			'New founders who want real attorney guidance instead of only a filing service',
			'Partners who need better clarity around ownership and responsibilities',
			'Existing LLCs that need a cleanup pass on operating documents',
		],
		includes: [
			'Entity and ownership structure review',
			'Operating agreement guidance',
			'Formation document planning',
			'Practical early-stage contract and governance support',
		],
		process: [
			'We review who owns what, how decisions will be made, and where the future friction points may be.',
			'The formation work is organized around clear authority, strong documentation, and practical growth considerations.',
			'You leave with a more usable foundation for running the business.',
		],
		faqs: [
			{
				question: 'Is filing an LLC enough on its own?',
				answer:
					'Usually not. The filing is only one part of the business setup. Internal authority, ownership terms, and operating rules matter too.',
			},
			{
				question: 'Can you help if the LLC already exists?',
				answer:
					'Yes. A lot of owners need help tightening the paperwork after they have already started operating.',
			},
			{
				question: 'Can this help prevent disputes between partners later?',
				answer:
					'That is one of the main reasons to do the work carefully now instead of after relationships are strained.',
			},
		],
		related: ['business-law', 'contract-drafting-review'],
		localSupport: {
			heading: 'LLC formation from a Tulsa office for owners in Tulsa, Bixby, Broken Arrow, and nearby business corridors',
			copy:
				'This page fits owners who want more than a filing service and want the structure, operating terms, and early documents reviewed by an attorney.',
			bullets: [
				'Good fit for solo founders and partners launching service businesses, professional firms, and local companies',
				'Useful when an owner wants a nearby attorney to review ownership, authority, and cleanup issues early',
				'Strong next step if an existing LLC already exists but the documents need tightening before growth or conflict',
			],
		},
		moneyPageLinks: ['business-law', 'contract-drafting-review', 'legal-guidance'],
		siblingSupportLinks: [],
	},
	{
		slug: 'contract-drafting-review',
		name: 'Contract Drafting and Review',
		navLabel: 'Contracts',
		category: 'Business',
		metaTitle: 'Tulsa Contract Lawyer | Drafting, Review, Business Agreements',
		metaDescription:
			'Get Tulsa contract drafting and review help for business agreements, service contracts, ownership terms, and everyday commercial documents in Oklahoma.',
		eyebrow: 'Contracts',
		heroTitle:
			'Tulsa contract drafting and review for businesses that want clearer deals before conflict starts',
		intro:
			'The strongest time to fix a contract problem is before anyone signs it. Good drafting protects relationships, money, and expectations.',
		summary:
			'Tulsa Law helps Oklahoma businesses review, draft, and tighten contracts so important terms are not left to guesswork.',
		searchPhrases: [
			'Tulsa contract lawyer',
			'Tulsa contract review attorney',
			'Oklahoma business contract attorney',
		],
		idealFor: [
			'Businesses entering new vendor, service, partnership, or purchase agreements',
			'Owners who want a second look before signing',
			'Companies cleaning up old agreements that no longer fit how the business works',
		],
		includes: [
			'Contract review before signature',
			'Drafting and revision of business agreements',
			'Plain-language identification of risk points and leverage points',
			'Coordination with broader business structure issues when needed',
		],
		process: [
			'We look at what the agreement is supposed to accomplish and what it actually says.',
			'The draft or revision work focuses on practical business reality, not filler language.',
			'You move forward with a stronger agreement and more confidence in the terms.',
		],
		faqs: [
			{
				question: 'Can I use a template contract from the internet?',
				answer:
					'Templates can be a starting point, but they often leave major business-specific issues unresolved. Review matters most when money, ownership, and responsibility are on the line.',
			},
			{
				question: 'Should I review contracts even for small deals?',
				answer:
					'Small deals can still create expensive problems if the terms are unclear. The right level of review depends on the risk and the deal structure.',
			},
			{
				question: 'Can Tulsa Law help with revisions to a contract someone else drafted?',
				answer:
					'Yes. Many clients come in with an existing draft and need a practical review before they sign.',
			},
		],
		related: ['business-law', 'llc-formation'],
	},
];

const featuredServiceOrder = [
	'personal-injury',
	'estate-planning',
	'legal-guidance',
	'power-of-attorney',
	'uncontested-divorce',
	'llc-formation',
	'contract-drafting-review',
];

export const featuredServices = featuredServiceOrder
	.map((slug) => services.find((service) => service.slug === slug))
	.filter((service): service is Service => Boolean(service));

export const getServiceUrl = (slug: string) => `/${slug}/`;

export const getAbsoluteUrl = (path: string) => new URL(path, firm.url).toString();

export const testimonials: Testimonial[] = [
	{
		author: 'S.C.',
		quote: 'Cinocca is the consummate professional, diligent and thorough.',
	},
	{
		author: 'S.C.',
		quote:
			'She is up-front, honest, and forthcoming in her work, and honesty can sometimes be something you need to hear, not what you want to hear.',
	},
	{
		author: 'K.M.',
		quote: 'Tracy Cinocca helped me navigate my way through a very emotional legal issue.',
	},
	{
		author: 'K.M.',
		quote: 'She was kind and gentle with the subject matter and proved to be a font of knowledge.',
	},
	{
		author: 'D.B.',
		quote: 'I appreciate upfront details on pricing, time frames, and what to expect.',
	},
	{
		author: 'D.B.',
		quote: 'Ms. Cinocca was understanding and listened to my needs.',
	},
	{
		author: 'J.N.',
		quote:
			'I have always come away learning something from her that I otherwise would not have known.',
	},
	{
		author: 'S.R.',
		quote:
			'Miss Cinocca’s experience and expertise are reflected in her work and professionalism.',
	},
];

export const intakeExpectations: IntakeExpectation[] = [
	{
		title: 'Who reviews the request',
		copy:
			'New requests are reviewed by the firm for fit, timing, conflicts, and current scheduling before the next step is offered.',
	},
	{
		title: 'How fast the reply usually works',
		copy:
			'Most requests are reviewed within 1 business day when submitted on a business day. If the matter appears to fit, the next step is usually an email with scheduling instructions or a request for one more piece of information.',
	},
	{
		title: 'Whether a consultation may be paid',
		copy:
			'Most planning, family, business, and legal-guidance matters that fit move next to the $100 30-minute consultation path. Personal injury matters are screened for fit first before a deeper review is discussed.',
	},
	{
		title: 'What may not be a fit',
		copy:
			'The site is not built for emergency matters, requests for free legal advice, out-of-state issues, or matters outside the listed practice areas.',
	},
];
