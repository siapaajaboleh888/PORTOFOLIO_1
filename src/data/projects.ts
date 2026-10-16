// ============================================================
// PROJECT DATA — Based on verified GitHub repositories
// Update fields marked with [UPDATE] when you have more info
// ============================================================

export type ProjectStatus = 'completed' | 'prototype' | 'academic' | 'experiment';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  techStack: string[];
  techCategories: { label: string; items: string[] }[];
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  role: string;
  features: string[];
  process: string[];
  testing: string;
  limitations: string;
  repoUrl?: string;
  demoUrl?: string; // Only add if a real, live URL exists and has been verified
  imageColor: string; // fallback gradient color for card
  category: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'whitebox-testing-lab',
    title: 'Whitebox Testing Lab',
    tagline: 'Software testing framework with structured test documentation',
    problem:
      'Software systems often lack structured, reproducible test plans that document both inputs and expected outputs, making it difficult to catch regressions or communicate test coverage.',
    solution:
      'Built a whitebox testing laboratory environment that implements structured test cases, documents test coverage, and produces readable bug reports and validation summaries.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Software Testing'],
    techCategories: [
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
      { label: 'Testing', items: ['Whitebox Testing', 'Test Case Design', 'Bug Reporting'] },
    ],
    status: 'completed',
    statusLabel: 'Completed',
    featured: true,
    role: 'Developer & QA Engineer — wrote test cases, implemented test runner, and documented results',
    features: [
      'Structured whitebox test case implementation',
      'Test coverage documentation',
      'Input/output validation',
      'Bug report generation',
      'Clear pass/fail reporting',
    ],
    process: [
      'Analyzed system under test and identified critical paths',
      'Designed test cases covering boundary conditions and edge cases',
      'Implemented test scripts and collected actual outputs',
      'Documented discrepancies and produced bug reports',
    ],
    testing: 'All test cases executed with documented expected vs. actual results. Test coverage reported per module.',
    limitations: 'Academic scope — not a production CI/CD pipeline. Future: integrate with GitHub Actions.',
    repoUrl: 'https://github.com/siapaajaboleh888/whitebox-testing-lab',
    imageColor: 'linear-gradient(135deg, #1e3a5f 0%, #0f2340 100%)',
    category: 'Software Testing',
  },
  {
    id: '2',
    slug: 'webgis-uim',
    title: 'WebGIS UIM',
    tagline: 'Web-based geographic information system for campus mapping',
    problem:
      'Campus navigation and facility location information was difficult to access digitally, requiring a map-based solution that works in a browser without specialized GIS software.',
    solution:
      'Built an interactive web GIS application displaying campus facilities and points of interest on an interactive map, allowing users to search, filter, and view location details.',
    techStack: ['PHP', 'JavaScript', 'Leaflet.js', 'MySQL', 'CSS'],
    techCategories: [
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js'] },
      { label: 'Backend', items: ['PHP'] },
      { label: 'Database', items: ['MySQL'] },
    ],
    status: 'academic',
    statusLabel: 'Academic Project',
    featured: true,
    role: 'Full-stack developer — frontend map interface, backend data API, and database design',
    features: [
      'Interactive map with campus facility markers',
      'Point-of-interest detail panels',
      'PHP/MySQL backend for location data',
      'Responsive map interface',
      'Layer controls for facility categories',
    ],
    process: [
      'Gathered campus location data and coordinates',
      'Set up Leaflet.js map with base tile layer',
      'Built PHP API to serve location data from MySQL',
      'Designed interactive popups and filter controls',
    ],
    testing: 'Functional testing of map rendering, marker clicks, and data loading. Responsive layout verified on mobile.',
    limitations: 'Academic scope. Live demo not hosted — requires local server setup. Data may be from the 2023–2024 academic period.',
    repoUrl: 'https://github.com/siapaajaboleh888/WebGis_UIM_5',
    imageColor: 'linear-gradient(135deg, #1a3a2a 0%, #0a1f15 100%)',
    category: 'Web Application',
  },
  {
    id: '3',
    slug: 'e-pinggir-papas',
    title: 'E-Pinggir Papas Sumenep',
    tagline: 'Digital information platform for a local community or region',
    problem:
      'Local communities often lack accessible digital presence and organized information portals, making it hard for residents to find services and local information online.',
    solution:
      'Developed a web-based information platform for the Pinggir Papas area of Sumenep, providing community information, local services directory, and digital presence for the region.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    techCategories: [
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
      { label: 'Backend', items: ['PHP'] },
      { label: 'Database', items: ['MySQL'] },
    ],
    status: 'academic',
    statusLabel: 'Academic Project',
    featured: true,
    role: 'Developer — built the web platform including frontend, backend, and database integration',
    features: [
      'Community information portal',
      'Local services directory',
      'Responsive design for mobile access',
      'Content management via backend',
      'Contact and information forms',
    ],
    process: [
      'Gathered community information requirements',
      'Designed information architecture and navigation',
      'Built frontend pages with HTML/CSS/JavaScript',
      'Connected to PHP/MySQL backend for dynamic content',
    ],
    testing: 'Functional testing of navigation, forms, and data display. Cross-browser basic compatibility checked.',
    limitations: 'Academic/community project. Not currently hosted live. Data reflects the time of development.',
    repoUrl: 'https://github.com/siapaajaboleh888/E-pinggirpapas-Sumenep',
    imageColor: 'linear-gradient(135deg, #2a1a3a 0%, #15092a 100%)',
    category: 'Web Application',
  },
  {
    id: '4',
    slug: 'uas-smart-uim',
    title: 'Smart UIM System',
    tagline: 'Smart information management system for academic use',
    problem:
      'Academic administrative processes can benefit from digitization and structured data management to reduce manual work and improve data accessibility.',
    solution:
      'Built a smart information system prototype for UIM with structured data management, reporting features, and a clean administrative interface.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    techCategories: [
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
      { label: 'Backend', items: ['PHP'] },
      { label: 'Database', items: ['MySQL'] },
    ],
    status: 'academic',
    statusLabel: 'Academic Project',
    featured: false,
    role: 'Developer — system design, frontend interface, and backend data management',
    features: [
      'Structured data entry and management',
      'Administrative dashboard',
      'Data export and reporting',
      'User authentication',
      'Responsive admin interface',
    ],
    process: [
      'Analyzed academic information management requirements',
      'Designed database schema for academic data',
      'Built admin interface with Bootstrap',
      'Implemented CRUD operations with PHP/MySQL',
    ],
    testing: 'CRUD operations tested, authentication flow verified, form validations checked.',
    limitations: 'Prototype/academic scope. Not deployed in production. Requires local XAMPP or similar setup.',
    repoUrl: 'https://github.com/siapaajaboleh888/UAS_Smart-UIM',
    imageColor: 'linear-gradient(135deg, #1a2a3a 0%, #0a1520 100%)',
    category: 'Information System',
  },
  {
    id: '5',
    slug: 'investcow',
    title: 'InvestCow Project',
    tagline: 'Agricultural investment platform concept for livestock',
    problem:
      'Small-scale livestock investors and farmers lack a digital platform to manage and track cattle investments transparently, making collaboration between investors and farmers difficult.',
    solution:
      'Conceptual prototype of a digital investment platform for cattle farming, providing transparency tools for investor-farmer collaboration and basic livestock tracking features.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    techCategories: [
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
      { label: 'Backend', items: ['PHP'] },
      { label: 'Database', items: ['MySQL'] },
    ],
    status: 'prototype',
    statusLabel: 'Prototype',
    featured: true,
    role: 'Developer — system concept, frontend, and backend prototype',
    features: [
      'Investment tracking interface',
      'Livestock data management',
      'Investor dashboard concept',
      'Basic financial reporting',
      'Farmer-investor data connection',
    ],
    process: [
      'Researched agricultural investment models and pain points',
      'Designed data flow between investors and farmers',
      'Built prototype frontend and backend',
      'Implemented basic data visualization for investments',
    ],
    testing: 'Core user flows tested in prototype. Data entry and display validated. Not tested in production environment.',
    limitations: 'Prototype — not production-ready. Financial calculations are illustrative only. No real payment integration.',
    repoUrl: 'https://github.com/siapaajaboleh888/InvestCow_Project',
    imageColor: 'linear-gradient(135deg, #2a2000 0%, #1a1500 100%)',
    category: 'Web Application',
  },
  {
    id: '6',
    slug: 'e-modul-pai',
    title: 'E-Modul PAI',
    tagline: 'Digital Islamic education module for academic learning',
    problem:
      'Traditional printed modules for Islamic Education (PAI) are difficult to update, distribute, and access interactively, especially for remote or mobile learners.',
    solution:
      'Built a digital e-module web platform for PAI subject content, allowing structured lesson delivery, navigation between chapters, and interactive learning support.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    techCategories: [
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
    ],
    status: 'academic',
    statusLabel: 'Academic Project',
    featured: false,
    role: 'Developer — structured and built the e-module frontend with lesson navigation and content display',
    features: [
      'Chapter-based content navigation',
      'Responsive reading layout',
      'Interactive content elements',
      'Clean educational UI',
      'Accessible text and media layout',
    ],
    process: [
      'Structured PAI curriculum content into digital chapters',
      'Designed clean reading-optimized layout',
      'Implemented chapter navigation and progress indicators',
    ],
    testing: 'Navigation and content display tested. Mobile layout verified.',
    limitations: 'Content is static. No quiz or assessment engine. Academic use only.',
    repoUrl: 'https://github.com/siapaajaboleh888/E-Modul-PAI',
    imageColor: 'linear-gradient(135deg, #1a2a1a 0%, #0a150a 100%)',
    category: 'Education',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured);
