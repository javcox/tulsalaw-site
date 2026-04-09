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
};

export const firm = {
	name: 'Tulsa Law',
	legalName: 'Tracy A. Cinocca, P.C.',
	url: 'https://tulsalaw.llc',
	legacyUrl: 'https://cinoccalaw.com',
	consultationUrl: 'https://cinoccalaw.com/contact/',
	phoneDisplay: '(918) 488-9117',
	phoneHref: 'tel:+19184889117',
	email: 'tcinocca@cinoccalaw.com',
	emailHref: 'mailto:tcinocca@cinoccalaw.com?subject=Consultation%20Request%20from%20TulsaLaw.llc',
	city: 'Tulsa',
	region: 'Oklahoma',
	serviceArea: 'Clients across Oklahoma',
	tagline:
		'Modern legal guidance for wills, powers of attorney, guardianship planning, family matters, and business documents.',
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
		'The firm serves clients from Tulsa while handling Oklahoma matters that benefit from clear drafting, organized intake, and direct attorney guidance.',
	],
	brandPillars: [
		'Clear next steps instead of vague legalese',
		'Thoughtful document work that protects the long game',
		'Direct attorney review for the matters that affect family, money, and business decisions',
	],
};

export const homepageFAQs = [
	{
		question: 'What kinds of legal matters fit this site best?',
		answer:
			'Tulsa Law is built around higher-intent document and planning matters like wills, trusts, powers of attorney, guardianship preparation, uncontested divorce paths, LLC formation, and contract review.',
	},
	{
		question: 'Does Tulsa Law handle clients outside Tulsa?',
		answer:
			'Yes. The site is Tulsa-based, but the firm is designed to welcome Oklahoma matters that can be handled within the attorney’s practice scope and availability.',
	},
	{
		question: 'How do consultation requests work?',
		answer:
			'The fastest paths are phone, email, or the secure consultation request form on the main firm contact page. Every new matter is reviewed for conflicts, fit, and scheduling before representation begins.',
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
			'The right estate plan should make life easier for the people you care about, not leave them sorting through uncertainty during a crisis.',
		summary:
			'Tulsa Law helps Oklahoma clients prepare practical estate documents, organize decision-making authority, and put a clear plan in place before problems become expensive.',
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
			'Revocable trust planning where appropriate',
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
			'When both sides are closer to agreement, the goal should be a clean process, solid paperwork, and fewer avoidable setbacks.',
		summary:
			'Tulsa Law helps Oklahoma clients move through uncontested-divorce matters with stronger documents, clearer expectations, and direct attorney guidance.',
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
			'Business formation should not stop at filing a name. The early structure matters because it shapes ownership, authority, and how conflict gets handled later.',
		summary:
			'Tulsa Law helps founders and business owners form Oklahoma LLCs with stronger documentation and more thoughtful upfront planning.',
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

export const featuredServices = services.filter((service) =>
	[
		'estate-planning',
		'power-of-attorney',
		'uncontested-divorce',
		'llc-formation',
		'contract-drafting-review',
	].includes(service.slug),
);

export const getServiceUrl = (slug: string) => `/${slug}/`;

export const getAbsoluteUrl = (path: string) => new URL(path, firm.url).toString();
