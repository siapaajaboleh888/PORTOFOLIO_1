// translations.ts — Complete Bilingual dictionary (English default & Bahasa Indonesia)

export type Language = 'en' | 'id';

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  note: string | null;
}

export interface WorkflowItem {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      process: 'My Process',
      about: 'About',
      contact: 'Contact',
      hireMe: 'Hire Me',
    },
    hero: {
      statusBadge: 'Available for freelance projects',
      location: '· Madura, Indonesia · Remote',
      greeting: "Hi, I'm",
      headline: 'AI-Assisted Web Developer',
      subheadline: 'Information Systems & Software Testing',
      tagline:
        'I build responsive websites, web app prototypes, and functional information systems — accelerated by AI, validated through rigorous testing.',
      chips: ['Web Development', 'Software Testing', 'AI-Accelerated', 'Remote-Ready'],
      ctaWork: 'View My Work',
      ctaContact: 'Contact Me',
      statProjects: 'Projects Built',
      statWorkflow: 'AI Workflow',
      statRemote: 'Remote-Ready',
      scroll: 'Scroll',
      visualLang: 'TS',
      visualConfig: 'EmhaAnam.config.ts',
      visualActive: 'Active',
      visualSpeedBadgeTitle: '3x Faster Delivery',
      visualSpeedBadgeSub: 'AI-Augmented Workflow',
      visualQABadgeTitle: 'Zero Critical Bugs',
      visualQABadgeSub: 'Strict QA & Software Testing',
      visualTestsPassed: 'All 28 Test Suites Passed',
      visualQAVerified: 'QA Verified',
    },
    projects: {
      label: 'Portfolio',
      title: 'Featured Projects & Case Studies',
      subtitle: 'Real, working software applications built with modern tools and validated with testing.',
      filterAll: 'All',
      filterWebApp: 'Web Apps',
      filterFrontend: 'Frontend',
      filterTesting: 'QA & Testing',
      filterDashboard: 'Dashboards',
      viewDetails: 'View Case Study',
      demoBtn: 'Live Demo',
      codeBtn: 'Source Code',
      modalProblem: 'The Problem',
      modalSolution: 'The Solution',
      modalFeatures: 'Key Features',
      modalProcess: 'Engineering Process',
      modalTesting: 'QA & Validation',
      modalStack: 'Technologies Used',
      modalClose: 'Close Case Study',
    },
    services: {
      label: 'Services',
      title: 'What I Can Build For You',
      subtitle: 'Practical, high-impact services focused on delivering real, working results — not just designs.',
      deliverablesLabel: 'Deliverables:',
      ctaTitle: 'Have a project in mind?',
      ctaDesc: "Let's discuss your requirements, define the scope, and figure out what I can realistically deliver.",
      ctaBtn: 'Start a Conversation',
      list: [
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
      ] as ServiceItem[],
    },
    process: {
      label: 'Workflow',
      title: 'How I Work With Clients',
      subtitle: 'A disciplined, AI-accelerated process from initial discussion to final handover.',
      noteTitle: 'How AI fits in:',
      noteDesc:
        'AI is my tool for drafting code, exploring edge cases, and generating test fixtures. Human judgment, validation, and accountability guide every single step.',
      steps: [
        {
          step: '01',
          title: 'Understand Requirements',
          description:
            'I start by listening carefully to understand what you actually need — not just what is described, but the underlying problem and business goals.',
          icon: '🎯',
        },
        {
          step: '02',
          title: 'Define Scope & Criteria',
          description:
            "We agree on what is in scope, what success looks like, and what won't be part of this version — preventing surprises and scope creep later.",
          icon: '📋',
        },
        {
          step: '03',
          title: 'Design & Implement',
          description:
            'I build the solution using modern AI tools to accelerate repetitive tasks while maintaining full human control over architecture, logic, and code quality.',
          icon: '⚙️',
        },
        {
          step: '04',
          title: 'Test & Validate',
          description:
            'I run comprehensive functional tests against agreed acceptance criteria. Bugs are caught and documented with clear reproduction steps before release.',
          icon: '🧪',
        },
        {
          step: '05',
          title: 'Review & Revise',
          description:
            'I present the working solution, collect your direct feedback, and implement iterations until the result matches your exact expectations.',
          icon: '🔄',
        },
        {
          step: '06',
          title: 'Deliver & Handover',
          description:
            'Clean source code, comprehensive documentation, and live deployment guidance. You get full ownership and maintainability of the project.',
          icon: '🚀',
        },
      ] as WorkflowItem[],
    },
    about: {
      label: 'About Me',
      title: 'Background, Philosophy & Skills',
      p1: "I'm a web developer and Information Systems graduate from Universitas Islam Madura (UIM), based in Madura, Indonesia. I specialize in building functional web applications, geospatial systems, and business tools.",
      p2: 'My philosophy is grounded in honesty and craftsmanship: no exaggerated promises, no black-box code. I leverage modern AI tools to accelerate development velocity while maintaining complete manual control over software architecture and quality assurance.',
      p3: "I'm open for remote freelance contracts worldwide — including custom web design, rapid prototyping, bug audits, and information systems.",
      institutionLabel: 'Education / Institution',
      locationLabel: 'Location & Work Mode',
      locationVal: 'Madura, Indonesia · Remote Worldwide',
      approachLabel: 'Development Approach',
      approachVal: 'AI-Augmented Velocity + Rigorous QA',
      skillsTitle: 'Technical Capabilities',
    },
    contact: {
      label: 'Get In Touch',
      title: "Let's Build Something Together",
      subtitle: 'Send me a message with your project goals, timeline, and questions. I reply promptly.',
      formTitle: 'Send a Message',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Alex Morgan',
      emailLabel: 'Your Email',
      emailPlaceholder: 'e.g. alex@company.com',
      serviceLabel: 'Service You Need',
      servicePlaceholder: 'Select a service...',
      messageLabel: 'Project Details / Message',
      messagePlaceholder: 'Tell me about what you want to build, target timeline, or specific challenges...',
      submitBtn: 'Send Inquiry',
      submittingBtn: 'Preparing...',
      directChannels: 'Direct Channels',
      whatsappTitle: 'WhatsApp Direct Chat',
      whatsappDesc: 'Quick response for discussions & inquiries',
      emailDirectTitle: 'Professional Email',
      emailDirectDesc: 'Send RFPs, specs, or formal requests',
      githubTitle: 'GitHub Profile',
      githubDesc: 'Inspect real source code & repos',
      upworkTitle: 'Upwork Profile',
      upworkDesc: 'Hire through escrow & contracts',
      hoursTitle: 'Availability & Response Time',
      hoursDesc: 'Monday - Saturday · Usually replies within a few hours (UTC+7 / WIB)',
      successMsg: 'Message template prepared! Opening your mail client...',
      errorMsg: 'Please fill out all required fields.',
    },
    footer: {
      tagline: 'AI-Assisted Web Developer · Madura, Indonesia',
      builtWith: 'Built with React 19 + TypeScript + Vite. Deployed on GitHub Pages.',
      navigation: 'Navigation',
      backToTop: 'Back to top',
    },
  },

  id: {
    nav: {
      home: 'Beranda',
      projects: 'Portofolio',
      services: 'Layanan',
      process: 'Alur Kerja',
      about: 'Tentang',
      contact: 'Kontak',
      hireMe: 'Rekrut Saya',
    },
    hero: {
      statusBadge: 'Tersedia untuk proyek freelance',
      location: '· Madura, Indonesia · Remote',
      greeting: 'Halo, saya',
      headline: 'Pengembang Web Berbasis AI',
      subheadline: 'Sistem Informasi & Pengujian Perangkat Lunak',
      tagline:
        'Saya membangun website responsif, prototipe aplikasi web, dan sistem informasi fungsional — dipercepat dengan AI, divalidasi dengan pengujian menyeluruh.',
      chips: ['Pengembangan Web', 'Software Testing', 'AI-Accelerated', 'Siap Remote'],
      ctaWork: 'Lihat Portofolio',
      ctaContact: 'Hubungi Saya',
      statProjects: 'Proyek Selesai',
      statWorkflow: 'Alur Kerja AI',
      statRemote: 'Siap Remote',
      scroll: 'Gulir',
      visualLang: 'TS',
      visualConfig: 'EmhaAnam.config.ts',
      visualActive: 'Aktif',
      visualSpeedBadgeTitle: '3x Lebih Cepat',
      visualSpeedBadgeSub: 'Alur Kerja Terakselerasi AI',
      visualQABadgeTitle: 'Bebas Bug Kritis',
      visualQABadgeSub: 'Standar Ketat QA & Testing',
      visualTestsPassed: 'Semua 28 Pengujian Lolos',
      visualQAVerified: 'Terverifikasi QA',
    },
    projects: {
      label: 'Portofolio',
      title: 'Proyek Pilihan & Studi Kasus',
      subtitle: 'Aplikasi web nyata dan fungsional yang dibangun dengan teknologi modern serta divalidasi dengan pengujian kualitas.',
      filterAll: 'Semua',
      filterWebApp: 'Web Apps',
      filterFrontend: 'Frontend',
      filterTesting: 'QA & Pengujian',
      filterDashboard: 'Dashboard',
      viewDetails: 'Lihat Studi Kasus',
      demoBtn: 'Demo Langsung',
      codeBtn: 'Lihat Kode',
      modalProblem: 'Masalah yang Dihadapi',
      modalSolution: 'Solusi yang Dibangun',
      modalFeatures: 'Fitur Utama',
      modalProcess: 'Proses Pengerjaan',
      modalTesting: 'Pengujian & Validasi Mutu',
      modalStack: 'Teknologi yang Digunakan',
      modalClose: 'Tutup Studi Kasus',
    },
    services: {
      label: 'Layanan',
      title: 'Solusi Yang Dapat Saya Bangun Untuk Anda',
      subtitle: 'Layanan praktis berorientasi hasil nyata yang benar-benar berfungsi dan siap digunakan.',
      deliverablesLabel: 'Hasil yang Anda Dapatkan:',
      ctaTitle: 'Punya ide proyek yang ingin direalisasikan?',
      ctaDesc: 'Mari diskusikan kebutuhan Anda, tentukan ruang lingkup kerja, dan wujudkan hasil yang terukur.',
      ctaBtn: 'Mulai Diskusi Proyek',
      list: [
        {
          id: 'web-development',
          icon: '🌐',
          title: 'Pengembangan Website',
          description:
            'Landing page responsif, website profil perusahaan/bisnis, dan web portofolio. Dibangun dengan kode bersih HTML/CSS/JavaScript atau React — cepat, fungsional, dan mobile-ready.',
          deliverables: [
            'Desain responsif penuh (HP & Laptop)',
            'Struktur kode rapi, semantik & SEO-friendly',
            'Pengujian lintas browser & perangkat',
            'Penyerahan source code lengkap & panduan deploy',
          ],
          note: null,
        },
        {
          id: 'web-prototyping',
          icon: '⚡',
          title: 'Prototipe Web App & MVP',
          description:
            'Prototipe interaktif dan MVP aplikasi web yang dipercepat dengan alat AI. Sangat cocok untuk memvalidasi ide startup, demonstrasi fitur, atau presentasi ke investor sebelum investasi skala penuh.',
          deliverables: [
            'Prototipe interaktif frontend (React / Web)',
            'Simulasi alur data dan interaksi pengguna',
            'Arsitektur modular siap integrasi API',
            'Dokumentasi ruang lingkup & spesifikasi fitur',
          ],
          note: 'Integrasi backend kompleks atau database enterprise berskala besar memerlukan kesepakatan terpisah.',
        },
        {
          id: 'figma-to-code',
          icon: '🎨',
          title: 'Konversi Desain / Figma ke Kode',
          description:
            'Mengubah desain dari Figma, Adobe XD, Canva, atau tangkapan layar UI menjadi kode web responsif yang presisi dan bersih menggunakan sintesis kode AI dengan penyempurnaan manual.',
          deliverables: [
            'Konversi presisi ke HTML/CSS atau React',
            'Responsif dinamis di seluruh ukuran layar',
            'Struktur komponen rapi & dapat digunakan ulang',
            'Efek interaktif (hover, fokus, transisi halus)',
          ],
          note: null,
        },
        {
          id: 'software-testing',
          icon: '🧪',
          title: 'Pengujian Website & Laporan Bug',
          description:
            'Pengujian fungsional menyeluruh, validasi skenario edge-case UI/UX, verifikasi formulir, dan inspeksi lintas perangkat dengan laporan terstruktur yang mudah dipahami pengembang.',
          deliverables: [
            'Dokumen skenario pengujian (Test Cases)',
            'Laporan bug lengkap dengan langkah reproduksi',
            'Klasifikasi tingkat keparahan & prioritas bug',
            'Pengujian ulang (Retest) setelah perbaikan',
          ],
          note: null,
        },
        {
          id: 'dashboard-systems',
          icon: '📊',
          title: 'Dashboard Bisnis & Portal Admin',
          description:
            'Dashboard visual dan sistem informasi internal yang disesuaikan untuk kebutuhan bisnis, UMKM, atau akademik. Sangat berguna untuk visualisasi data, pencatatan transaksi, dan panel admin.',
          deliverables: [
            'UI dashboard modern dengan grafik interaktif',
            'Formulir input data & operasi CRUD dasar',
            'Tabel data dengan filter dan pencarian instan',
            'Penyimpanan data lokal atau koneksi API',
          ],
          note: 'Sistem berskala besar dengan autentikasi multi-role enterprise memerlukan kesepakatan terpisah.',
        },
        {
          id: 'redesign-modernization',
          icon: '🛠️',
          title: 'Redesain & Modernisasi Website',
          description:
            'Memperbarui website lama yang lambat, kaku, atau belum ramah smartphone menjadi website baru yang modern, memukau, berkecepatan tinggi, dan meningkatkan konversi pengunjung.',
          deliverables: [
            'Penyegaran total estetika visual & pengalaman pengguna (UX)',
            'Optimasi tampilan mobile-first untuk smartphone',
            'Peningkatan performa kecepatan & kompresi aset',
            'Pembaruan struktur meta tag SEO modern',
          ],
          note: null,
        },
      ] as ServiceItem[],
    },
    process: {
      label: 'Alur Kerja',
      title: 'Bagaimana Saya Bekerja dengan Klien',
      subtitle: 'Proses terstruktur yang dipercepat AI mulai dari tahap diskusi hingga serah terima.',
      noteTitle: 'Peran AI dalam alur kerja:',
      noteDesc:
        'AI digunakan sebagai akselerator untuk merancang kode, mengeksplorasi skenario pengujian, dan otomatisasi tugas repetitif. Validasi, logika, dan kendali kualitas sepenuhnya diawasi oleh manusia.',
      steps: [
        {
          step: '01',
          title: 'Pahami Kebutuhan',
          description:
            'Saya mulai dengan mendengarkan secara saksama kebutuhan Anda — bukan sekadar apa yang tertulis, melainkan tujuan utama dan solusi yang paling efisien.',
          icon: '🎯',
        },
        {
          step: '02',
          title: 'Tentukan Ruang Lingkup',
          description:
            'Kita menyepakati apa saja fitur yang dikerjakan, indikator keberhasilan, dan batasan versi ini — sehingga tidak ada kesalahpahaman di kemudian hari.',
          icon: '📋',
        },
        {
          step: '03',
          title: 'Desain & Implementasi',
          description:
            'Saya membangun solusi dengan bantuan AI untuk mempercepat pembuatan kode sambil tetap memegang kendali penuh atas arsitektur, logika, dan kerapian struktur.',
          icon: '⚙️',
        },
        {
          step: '04',
          title: 'Pengujian & Validasi',
          description:
            'Saya melakukan uji fungsi berdasarkan kriteria yang telah disepakati. Bug dicatat dengan langkah reproduksi jelas dan diperbaiki secara tuntas.',
          icon: '🧪',
        },
        {
          step: '05',
          title: 'Evaluasi & Revisi',
          description:
            'Saya mempresentasikan hasilnya, mendengarkan masukan Anda, dan melakukan revisi yang diperlukan agar sesuai dengan ekspektasi Anda.',
          icon: '🔄',
        },
        {
          step: '06',
          title: 'Serah Terima & Panduan',
          description:
            'Penyerahan kode sumber bersih, dokumentasi, dan panduan publikasi online. Anda dapat mengelola dan memelihara hasil kerja dengan mudah.',
          icon: '🚀',
        },
      ] as WorkflowItem[],
    },
    about: {
      label: 'Tentang Saya',
      title: 'Latar Belakang, Filosofi & Keahlian',
      p1: 'Saya seorang pengembang web dan lulusan Sistem Informasi dari Universitas Islam Madura (UIM), berdomisili di Madura, Indonesia. Saya terbiasa membangun website, prototipe aplikasi digital, dan sistem informasi fungsional.',
      p2: 'Filosofi kerja saya berfokus pada kejujuran dan kualitas: tidak ada janji berlebihan atau kode yang tidak dapat dipertanggungjawabkan. Saya memanfaatkan kecerdasan buatan (AI) untuk meningkatkan kecepatan pengembangan sambil tetap memegang kendali penuh atas arsitektur kode dan pengujian kualitas.',
      p3: 'Saya siap menerima proyek freelance jarak jauh (remote) untuk klien internasional maupun lokal — mencakup pembuatan landing page, prototipe MVP, pengujian perangkat lunak, dan portal sistem informasi bisnis.',
      institutionLabel: 'Pendidikan / Institusi',
      locationLabel: 'Lokasi & Mode Kerja',
      locationVal: 'Madura, Indonesia · Remote Fleksibel',
      approachLabel: 'Pendekatan Kerja',
      approachVal: 'Akselerasi AI + Uji Kualitas Ketat',
      skillsTitle: 'Keahlian Teknis',
    },
    contact: {
      label: 'Hubungi Saya',
      title: 'Mari Bangun Proyek Bersama',
      subtitle: 'Kirimkan pesan mengenai target proyek, estimasi waktu, atau pertanyaan Anda. Saya akan merespons dengan cepat.',
      formTitle: 'Kirim Pesan',
      nameLabel: 'Nama Anda',
      namePlaceholder: 'Contoh: Budi Santoso',
      emailLabel: 'Email Anda',
      emailPlaceholder: 'Contoh: budi@company.com',
      serviceLabel: 'Layanan yang Dibutuhkan',
      servicePlaceholder: 'Pilih jenis layanan...',
      messageLabel: 'Detail Proyek / Pertanyaan',
      messagePlaceholder: 'Ceritakan apa yang ingin Anda buat, target waktu, atau kebutuhan khusus lainnya...',
      submitBtn: 'Kirim Pengajuan Proyek',
      submittingBtn: 'Menyiapkan...',
      directChannels: 'Saluran Kontak Langsung',
      whatsappTitle: 'Chat WhatsApp Langsung',
      whatsappDesc: 'Respon cepat untuk tanya jawab & diskusi',
      emailDirectTitle: 'Email Profesional',
      emailDirectDesc: 'Kirim dokumen spesifikasi atau penawaran resmi',
      githubTitle: 'Profil GitHub',
      githubDesc: 'Tinjau kode sumber dan repositori nyata',
      upworkTitle: 'Profil Upwork',
      upworkDesc: 'Rekrut lewat kontrak & pembayaran aman',
      hoursTitle: 'Waktu Ketersediaan & Respon',
      hoursDesc: 'Senin - Sabtu · Biasanya membalas dalam beberapa jam (WIB / UTC+7)',
      successMsg: 'Format pesan siap! Membuka aplikasi email Anda...',
      errorMsg: 'Harap lengkapi semua kolom yang wajib diisi.',
    },
    footer: {
      tagline: 'Pengembang Web Berbasis AI · Madura, Indonesia',
      builtWith: 'Dibangun dengan React 19 + TypeScript + Vite. Diterbitkan di GitHub Pages.',
      navigation: 'Navigasi',
      backToTop: 'Kembali ke atas',
    },
  },
};
