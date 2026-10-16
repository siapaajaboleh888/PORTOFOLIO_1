// ============================================================
// PROFILE & SITE CONFIG DATA
// ============================================================

export const PROFILE = {
  name: 'Moh. Syaiful Anam',
  nameShort: 'Syaiful',
  headline: 'AI-Assisted Web Developer',
  subheadline: 'Information Systems & Software Testing',
  location: 'Madura, Indonesia',
  tagline: 'I build responsive websites, web app prototypes, and functional information systems — accelerated by AI, validated through testing.',
  bio: `I'm a web developer and information systems graduate from Universitas Islam Madura (UIM) based in Madura, Indonesia. My work spans building functional web applications, geographic information systems, and digital platforms — with a focus on clean structure, honest documentation, and practical results.

I use AI tools to accelerate development workflows: from drafting UI components to writing and reviewing test cases. The decisions, validation, and final output are always mine to own.

I'm open to remote freelance projects involving website development, web app prototyping, software testing, or business dashboards.`,
  institution: 'Universitas Islam Madura (UIM)',
  github: 'https://github.com/siapaajaboleh888',
  // [UPDATE] Replace with your real LinkedIn URL when available
  linkedin: null,
  // [UPDATE] Replace with your real Upwork profile URL when available
  upwork: null,
  // [UPDATE] Replace with your real Fiverr profile URL when available
  fiverr: null,
  // [UPDATE] Replace with your professional email (shown as mailto: link)
  email: null,
};

export const SERVICES = [
  {
    id: 'web-development',
    icon: '🌐',
    title: 'Website Development',
    description:
      'Responsive landing pages, business profile websites, and portfolio sites. Built with clean HTML/CSS/JavaScript or modern frameworks — functional, fast, and mobile-ready.',
    deliverables: [
      'Fully responsive layout',
      'Clean, semantic HTML',
      'Cross-browser testing',
      'Source code handover',
    ],
    note: null,
  },
  {
    id: 'web-prototyping',
    icon: '⚡',
    title: 'Web App Prototyping',
    description:
      'Interactive prototypes and simple web applications based on client requirements. Ideal for validating ideas, demonstrating features, or building MVPs before full development.',
    deliverables: [
      'Clickable frontend prototype',
      'Basic data flow implementation',
      'API-ready structure',
      'Documentation of assumptions and scope',
    ],
    note: 'Complex backend integrations, production databases, and third-party APIs require separate scoping.',
  },
  {
    id: 'software-testing',
    icon: '🧪',
    title: 'Website Testing & Bug Reporting',
    description:
      'Functional testing, UI/UX review, form validation, and navigation checks. I document bugs with clear reproduction steps, screenshots, and severity ratings.',
    deliverables: [
      'Structured test case document',
      'Bug report with reproduction steps',
      'Severity classification',
      'Retest confirmation',
    ],
    note: null,
  },
  {
    id: 'dashboard-systems',
    icon: '📊',
    title: 'Business Dashboards & Information Systems',
    description:
      'Simple dashboards and information system prototypes tailored to business or academic needs. Useful for internal tools, data displays, and administrative interfaces.',
    deliverables: [
      'Dashboard UI design and build',
      'Data input and display forms',
      'Basic CRUD operations',
      'Deployment guidance',
    ],
    note: 'Production-grade systems with complex authentication or multi-role workflows require detailed scoping.',
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Understand Requirements',
    description:
      'I start by listening carefully to understand what you actually need — not just what\'s described, but the underlying problem and goals.',
    icon: '🎯',
  },
  {
    step: '02',
    title: 'Define Scope & Criteria',
    description:
      'We agree on what\'s in scope, what success looks like, and what won\'t be part of this version — preventing surprises later.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Design & Implement',
    description:
      'I build the solution using AI to accelerate repetitive work while maintaining full control over structure, logic, and quality.',
    icon: '⚙️',
  },
  {
    step: '04',
    title: 'Test & Validate',
    description:
      'I run functional tests against the acceptance criteria we defined. Bugs are documented with reproduction steps — not swept under the rug.',
    icon: '🧪',
  },
  {
    step: '05',
    title: 'Review & Revise',
    description:
      'I present the result, collect your feedback, and make revisions. Iteration is part of the process, not an afterthought.',
    icon: '🔄',
  },
  {
    step: '06',
    title: 'Deliver & Handover',
    description:
      'Clean source code, documentation, and deployment guidance. You should be able to understand, update, and maintain what I built.',
    icon: '🚀',
  },
];

export const SKILLS = [
  {
    category: 'Programming & Web Development',
    note: 'Used in verified projects',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'PHP', 'TypeScript'],
  },
  {
    category: 'Frameworks & Libraries',
    note: 'Used in verified projects',
    items: ['React', 'Bootstrap', 'Leaflet.js', 'Vite'],
  },
  {
    category: 'Databases',
    note: 'Used in verified projects',
    items: ['MySQL'],
  },
  {
    category: 'Software Testing',
    note: 'Demonstrated in whitebox-testing-lab and academic projects',
    items: [
      'Whitebox Testing',
      'Functional Testing',
      'Test Case Design',
      'Bug Reporting',
      'Boundary Value Analysis',
    ],
  },
  {
    category: 'AI-Assisted Development',
    note: 'Actively used in current workflow',
    items: [
      'AI Prompt Engineering',
      'Code Review with AI',
      'Documentation Generation',
      'Test Case Assistance',
    ],
  },
  {
    category: 'Tools & Deployment',
    note: 'Used in verified projects',
    items: ['Git', 'GitHub', 'GitHub Pages', 'VS Code', 'XAMPP'],
  },
];
