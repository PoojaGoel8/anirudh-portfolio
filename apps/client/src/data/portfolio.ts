export type WorkCategory = "AI Transformation" | "Risk & Controls" | "Change & Adoption" | "Strategy";

export type WorkItem = {
  title: string;
  category: WorkCategory;
  period: string;
  summary: string;
  outcome: string;
  methods: string[];
  featured?: boolean;
};

export const metrics = [
  { value: "40+", label: "AI champions mobilised", detail: "Across Deutsche Bank Singapore" },
  { value: "500+", label: "AFC professionals equipped", detail: "Across approximately 10 countries" },
  { value: "80%", label: "Reduction in workflow errors", detail: "Through transformed risk-signal processes" },
  { value: "3,000+", label: "Employees reached", detail: "Through regional learning programmes" },
];

export const workItems: WorkItem[] = [
  {
    title: "Singapore AI Catalyst Think Tank",
    category: "AI Transformation",
    period: "2026 — Present",
    summary:
      "Scaled an Anti-Financial Crime pilot into a branch-wide forum connecting business and infrastructure teams around responsible AI adoption, reuse, and execution.",
    outcome: "40+ AI champions mobilised across the Singapore franchise.",
    methods: ["Portfolio governance", "Champion network", "Executive engagement", "Knowledge reuse"],
    featured: true,
  },
  {
    title: "Regional AI literacy for AFC",
    category: "Change & Adoption",
    period: "2026 — Present",
    summary:
      "Designed recurring forums, workshops, prompt-engineering guidance, and practical AML/CFT use cases to move teams from individual experimentation toward governed adoption.",
    outcome: "500+ professionals equipped across APAC and MEA.",
    methods: ["Learning design", "Prompt libraries", "Use-case demonstrations", "Adoption strategy"],
  },
  {
    title: "Adverse-media intelligence capability",
    category: "AI Transformation",
    period: "2026",
    summary:
      "Evolved a case-specific work product into a reusable, configurable dashboard approach for adverse-media analysis and senior reporting.",
    outcome: "Tested by a complex-client team and drew cross-regional stakeholder interest.",
    methods: ["Product framing", "Evidence traceability", "Dashboard design", "Controlled testing"],
  },
  {
    title: "Governed AI for regulatory analysis",
    category: "Risk & Controls",
    period: "2026 — Present",
    summary:
      "Managed AI-enabled work across regulatory remediation, forensic document analysis, Source of Wealth corroboration, gap analysis, and client-onboarding governance.",
    outcome: "Reusable decision support with human oversight, audit trails, and controlled review.",
    methods: ["Responsible AI", "Human oversight", "Audit ledgers", "Regulatory translation"],
  },
  {
    title: "APAC risk-signal workflow redesign",
    category: "Risk & Controls",
    period: "2019 — 2025",
    summary:
      "Led multi-market operating-model and workflow change in Anti-Bribery & Corruption, balancing control integrity with practical delivery across regional and global teams.",
    outcome: "Reduced errors by 80% while strengthening controls.",
    methods: ["Operating-model redesign", "Process automation", "Agile feedback", "Audit readiness"],
  },
  {
    title: "Enterprise learning & change adoption",
    category: "Change & Adoption",
    period: "2019 — 2025",
    summary:
      "Built learning programmes, governance resources, and regional knowledge platforms that translated policy and control requirements into action.",
    outcome: "Reached 3,000+ employees and created resources for 250 leaders.",
    methods: ["Facilitation", "Executive communications", "Knowledge platforms", "Change measurement"],
  },
  {
    title: "Market-entry and customer strategy",
    category: "Strategy",
    period: "2017 — 2018",
    summary:
      "Led a UOB–SMU Asian Enterprise consulting team through focus groups, surveys, observation, secondary research, and business-development planning.",
    outcome: "Delivered practical recommendations for brand awareness, location optimisation, and customer experience.",
    methods: ["Market research", "Customer insight", "Team leadership", "Strategic recommendations"],
  },
  {
    title: "Sustainability policy & digital communications",
    category: "Strategy",
    period: "2017",
    summary:
      "Developed position-paper foundations on European Union policy and introduced weekly trend analysis to strengthen social-media planning.",
    outcome: "Created an effective base for final policy papers while bringing new ideas to editorial work.",
    methods: ["Policy analysis", "Stakeholder relations", "Editorial strategy", "Trend analysis"],
  },
];

export const experience = [
  {
    period: "Jan 2026 — Present",
    role: "AI Transformation Lead / Regional AI Champion, Compliance & AFC, APAC",
    organisation: "Deutsche Bank · Singapore",
    summary:
      "Leads a portfolio spanning responsible AI adoption, regulatory remediation, risk analysis, onboarding, Source of Wealth, adverse-media intelligence, and workflow automation.",
  },
  {
    period: "Jan 2026 — Present",
    role: "Private Bank Business Line AFC / Singapore AML Officer · Assistant Vice President",
    organisation: "Deutsche Bank · Singapore",
    summary:
      "Advises the International Private Bank on AML/CTF, sanctions, client risk, regulatory requirements, investigations, controls, and high-risk escalations.",
  },
  {
    period: "Nov 2019 — Dec 2025",
    role: "Anti-Bribery & Corruption Officer · AVP, Associate & Analyst",
    organisation: "Deutsche Bank · Singapore",
    summary:
      "Led regional control and transformation work across operating-model redesign, risk signals, regulatory analysis, investigations, learning, and global change.",
  },
  {
    period: "Nov 2018 — Nov 2019",
    role: "Financial Advisor",
    organisation: "AXA Insurance · Singapore",
    summary:
      "Developed financial and communication strategies that strengthened client trust and supported a data-driven, award-recognised agency.",
  },
  {
    period: "Sep 2017 — Feb 2018",
    role: "Management Consultant",
    organisation: "UOB–SMU Asian Enterprise",
    summary:
      "Led customer research and business-development planning using focus groups, market surveys, observation, secondary research, and data analysis.",
  },
  {
    period: "University years · Pre-2018",
    role: "Founder",
    organisation: "Road to Sangam",
    summary:
      "Built an all-India digital art aggregator and gig ecosystem across e-commerce, workshops, galleries, and corporate marketing services.",
  },
  {
    period: "Jun 2017 — Aug 2017",
    role: "Sustainability Relations Intern",
    organisation: "Golden Agri-Resources",
    summary:
      "Developed European Union position-paper foundations on sustainable palm oil and introduced trend analysis to strengthen digital communications.",
  },
  {
    period: "2016 · Four-month internship",
    role: "Editorial & communications intern",
    organisation: "LIV.IN Asia",
    summary:
      "Took on editorial and creative assignments recognised for intellect, accountability, enthusiasm, and natural leadership.",
  },
];

export const recommendations = [
  {
    quote:
      "An outstanding member of the team, always delivering over and above what’s expected… strong in communication, smart, and a fast learner.",
    name: "Alexaneal Dy",
    context: "Vice President / Manager, AFBC APAC · Deutsche Bank",
    theme: "Growth & communication",
  },
  {
    quote:
      "What distinguishes Anirudh is his consistency. He truly understands the change function and the change lifecycle, and articulates complex requirements clearly.",
    name: "Nav Dhaliwal",
    context: "Change Management for Regulation, Compliance & AFC · Deutsche Bank",
    theme: "Change leadership",
  },
  {
    quote:
      "Anirudh brings a unique set of skills: critical analysis of data and the ability to engage a target audience through training and presentations.",
    name: "Si-Min Chua",
    context: "Anti-Fraud, Bribery & Corruption Advisory, APAC · Deutsche Bank",
    theme: "Analysis & influence",
  },
  {
    quote:
      "His enthusiasm, capacity for work, questioning nature, and solutions-oriented approach made him an asset to the entire team.",
    name: "Anita Neville",
    context: "Vice President, Corporate Communications & Sustainability Relations · Golden Agri-Resources",
    theme: "Initiative & ideas",
  },
  {
    quote:
      "He presented innovative, economic and proactive approaches, managed the team efficiently, and represented the company professionally in customer research.",
    name: "General Manager",
    context: "Caffè Vergnano 1882 Singapore · UOB–SMU Asian Enterprise project",
    theme: "Strategy & delivery",
  },
  {
    quote:
      "His witty intellect and editorial skill enable outstanding results. He balances leadership and stewardship, and teammates look to him as a natural leader.",
    name: "LIV.IN Asia leadership",
    context: "Internship testimonial",
    theme: "Leadership & creativity",
  },
];

export const capabilityGroups = [
  {
    title: "Transformation",
    items: ["Programme & product delivery", "Operating-model redesign", "Workflow automation", "Cross-functional orchestration"],
  },
  {
    title: "Responsible AI",
    items: ["Use-case governance", "Human oversight", "Prompt & knowledge architecture", "Evidence traceability"],
  },
  {
    title: "Risk & regulation",
    items: ["AFC / AML advisory", "KYC & Source of Wealth", "Regulatory remediation", "Audit-ready controls"],
  },
  {
    title: "Influence",
    items: ["Executive reporting", "Learning & adoption", "Public speaking", "Coaching & facilitation"],
  },
];
