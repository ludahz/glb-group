export const services = [
  {
    slug: 'international-trade',
    icon: 'globe',
    title: 'International Trade (Import & Export)',
    description:
      'Comprehensive import and export solutions across food, electronics, and industrial goods with end-to-end support.',
    features: [
      'Global sourcing',
      'Quality assurance',
      'Documentation & compliance',
      'Logistics coordination',
    ],
    image: '/images/services/International-trade.jpeg',
    longDescription:
      'Trade facilitation involves a wide range of activities centered on lowering trade transaction costs for global commerce firms. These costs include the price of moving freight from the factory to final destinations. Firms must manage border clearance procedures and pay trade services fees, among many other steps after goods and services are produced. As such, trade facilitation involves much more than trucking goods across national borders or shipping a package by sea transport. As a consulting firm, it is our job to run by taking over these operations, leaving companies to focus on other more imperative and tenacious factors of running their business.',
    highlights: [
      'Trusted supplier network across mali and beyond',
      'Customs clearance and regulatory guidance',
    ],
    steps: [
      'Requirement & specs gathering',
      'Sourcing & vendor shortlisting',
      'Quality checks & compliance',
      'Logistics & delivery coordination',
    ],
    faqs: [
      // { q: 'Which Incoterms do you support?', a: 'We commonly operate under EXW, FOB, CIF, and DDP depending on destination and client preference.' },
      { q: 'Can you handle customs?', a: 'Yes, we manage documentation, brokerage coordination, and compliance checks.' },
    ],
  },
  {
    slug: 'visa-consultation',
    icon: 'passport',
    title: 'Visa Consultation',
    description:
      'Guidance and support for business and travel visas, documentation preparation, and application follow-up.',
    features: ['Document review', 'Application support', 'Interview prep', 'Status follow-up'],
    image: '/images/services/visa-consult.jpeg',
    highlights: [
      'Up-to-date guidance on requirements',
      'Tailored document checklists',
      'Mock interviews and timeline planning',
    ],
    steps: [
      'Case assessment & country selection',
      'Documents checklist & preparation',
      'Application submission & tracking',
      'Interview coaching & final review',
    ],
    faqs: [
      { q: 'Do you file applications on my behalf?', a: 'We assist with preparation and submission steps per embassy guidelines; some countries require in-person submission.' },
      { q: 'What is the typical processing time?', a: 'It varies by country and visa type; we provide estimates and tracking updates.' },
    ],
  },
  {
    slug: 'training-capacity',
    icon: 'chalkboard',
    title: 'Training & Capacity Building',
    description:
      'Workshops and programs to build capacity in trade operations, compliance, and market readiness.',
    features: ['Workshops', 'Team upskilling', 'Regulatory training', 'Best practices'],
    image: '/images/services/training-capacity.jpeg',
    longDescription:
      'We recognize the need for our Malian businesses to be equipped with sufficient skills and knowledge to run their firms efficiently. One such crucial knowledge is tax laws and regulations. We offer tax training, giving the much-needed emphasis on Income Tax and Provisional tax, VAT on Import, Value Added Tax for different businesses in different industries, and PAYE for personal tax. We also offer training in accounting and bookkeeping as well as business-related acumen. For group bookings and tailor-made training for your organization, please do not hesitate to contact us.',
    topics: [
      'Income Tax and Provisional Tax',
      'VAT on Import',
      'Value Added Tax across industries',
      'PAYE for personal tax',
      'Accounting and Bookkeeping',
      'Business-related acumen',
    ],
    highlights: [
      'Practical, case-based learning',
      'Industry and role-specific tracks',
      'On-site and virtual delivery',
    ],
    steps: [
      'Skills gap assessment',
      'Curriculum design',
      'Delivery & hands-on exercises',
      'Evaluation & certification',
    ],
    faqs: [
      // { q: 'Do you offer certificates?', a: 'Yes, certificates are issued upon successful completion.' },
      { q: 'Can you customize the training?', a: 'Absolutely. We tailor modules to your industry, team size, and goals.' },
    ],
  },
  {
    slug: 'business-consultancy',
    icon: 'handshake',
    title: 'Business Consultancy',
    description:
      'Market entry strategy, partner sourcing, and business development to accelerate growth.',
    features: ['Market analysis', 'Partner sourcing', 'Growth strategy', 'Trade advisory'],
    image: '/images/services/consult.jpg',
    highlights: [
      'Data-driven insights',
      'Local market expertise',
      'Actionable roadmaps',
    ],
    steps: [
      'Discovery & objectives',
      'Research & validation',
      'Strategy & planning',
      'Execution support',
    ],
    faqs: [
      { q: 'Do you help with partner introductions?', a: 'Yes, we can source and vet potential partners in your target market.' },
      { q: 'Can you execute the plan?', a: 'We provide hands-on support or can work alongside your internal team.' },
    ],
  },
]

export function iconFor(key) {
  switch (key) {
    case 'globe':
      return 'FaGlobe'
    case 'passport':
      return 'FaPassport'
    case 'chalkboard':
      return 'FaChalkboardTeacher'
    case 'handshake':
      return 'FaHandshake'
    default:
      return 'FaGlobe'
  }
}
