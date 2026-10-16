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
      'Fully responsive layout (Mobile & Desktop)',
      'Clean, semantic & SEO-friendly code',
      'Cross-browser and device testing',
      'Full source code handover & deployment',
    ],
    note: null,
  },
  {
    id: 'web-prototyping',
    icon: '⚡',
    title: 'Web App Prototyping & MVPs',
    description:
      'Rapid interactive prototypes and web app MVPs accelerated with AI tools. Ideal for validating startup ideas, demonstrating features, or investor pitches before full production.',
    deliverables: [
      'Clickable React / Web frontend prototype',
      'Basic interactive data flow and state',
      'Modular, API-ready architecture',
      'Documentation of scope and assumptions',
    ],
    note: 'Complex multi-tenant backends or enterprise database integrations require custom scoping.',
  },
  {
    id: 'figma-to-code',
    icon: '🎨',
    title: 'Figma / Mockup to Code',
    description:
      'Converting Figma, Adobe XD, Canva, or UI screenshots into clean, pixel-accurate, and responsive web code using modern AI code synthesis and manual refinement.',
    deliverables: [
      'Pixel-faithful conversion to HTML/CSS or React',
      'Fluid responsiveness for all screen sizes',
      'Reusable component structure',
      'Interactive states (hover, focus, animations)',
    ],
    note: null,
  },
  {
    id: 'software-testing',
    icon: '🧪',
    title: 'Website Testing & Bug Reporting',
    description:
      'Comprehensive manual and automated functional testing, UI/UX edge-case validation, form verification, and cross-browser inspections with clear actionable reports.',
    deliverables: [
      'Structured test case documentation',
      'Bug report with step-by-step reproduction',
      'Severity & priority classification',
      'Post-fix retest verification',
    ],
    note: null,
  },
  {
    id: 'dashboard-systems',
    icon: '📊',
    title: 'Business Dashboards & Admin Portals',
    description:
      'Custom dashboards and internal information systems tailored to business, retail, or academic needs. Perfect for data visualization, record tracking, and admin tools.',
    deliverables: [
      'Modern dashboard UI with interactive charts',
      'Data input forms & CRUD operations',
      'Filterable data tables & search views',
      'Local storage or API connectivity',
    ],
    note: 'Production systems requiring complex enterprise authentication require agreed scoping.',
  },
  {
    id: 'redesign-modernization',
    icon: '🛠️',
    title: 'Website Redesign & Modernization',
    description:
      'Refreshing dated, slow, or non-responsive websites into modern, high-converting digital experiences with contemporary aesthetics, faster load times, and mobile optimization.',
    deliverables: [
      'Visual aesthetic and UX overhaul',
      'Mobile-first responsive optimization',
      'Performance & image optimization',
      'SEO meta structure refresh',
    ],
    note: null,
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
