/**
 * Central portfolio data — generated from Riya Chaubey's resume.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Riya Chaubey',
  displayName: 'Riya Chaubey',
  firstName: 'RIYA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A RIYA CHAUBEY ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Developer', 'Python, Java, Flask', 'React.js'],
  intro:
    'Computer Science and Engineering graduate (B.Tech, 2026) with hands-on experience in backend development, full-stack web applications, web automation and REST APIs. Proficient in Python, Java, JavaScript, Flask and React.js, with a strong foundation in Data Structures and Algorithms, Object-Oriented Programming, DBMS and Operating Systems. Built and deployed multiple live applications using Git and GitHub, and earned a Machine Learning certification from Stanford University and DeepLearning.AI.',
  location: 'Vadodara, Gujarat, India',
  phone: '+91-9453677082',
  email: 'riyachaubey2004@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/riya-chaubey-066a50264/',
    github: 'https://github.com/riiiyaah10',
  },
  resumePdf: '/assets/Riya_Chaubey_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Riya Chaubey',
  },
  interests: ['Machine Learning', 'Web Automation', 'Web Security & Compliance', 'Cloud Architectures'],
};

export const education = [
  {
    school: 'Parul Institute of Engineering and Technology',
    place: 'Vadodara',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2022 – 2026',
    score: 'CGPA 7.1',
  },
  {
    school: 'American Montessori Public School',
    place: 'CBSE',
    degree: 'Class XII (Senior Secondary)',
    period: '2021 – 2022',
    score: '65%',
  },
  {
    school: 'Sant Atulanand Convent School',
    place: 'CBSE',
    degree: 'Class X (Secondary)',
    period: '2019 – 2020',
    score: '92%',
  },
];

export const experience = [
  {
    company: 'Full-Stack & Web Engineering',
    role: 'Software Developer',
    place: 'Vadodara, Gujarat',
    period: '2022 – Present',
    points: [
      'Built and deployed 3 live, full-stack web applications across Vercel and Render with end-to-end integration and responsive design.',
      'Implemented secure user authentication, RESTful APIs, database persistence (PostgreSQL, SQLite, MySQL, MongoDB), and automated compliance verification.',
      'Applied automation, web scraping, computer vision, and NLP concepts to solve practical engineering and compliance challenges.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  liveUrl?: string;
  github?: string;
  palette: Palette;
  motif: 'candle' | 'crm' | 'shield';
};

export const projects: Project[] = [
  {
    id: 'house-of-vyora',
    title: 'House of Vyora',
    year: '2025',
    genre: 'Luxury Lifestyle • Next.js • Brand',
    logline: 'Luxury product showcase for handcrafted soy candles and curated brand exhibition experience.',
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://vyora-kappa.vercel.app/#exhibition',
    github: 'https://github.com/riiiyaah10',
    build: [
      'Developed a luxury product website showcasing handcrafted soy candles with high-end editorial aesthetics and brand presentation.',
      'Crafted interactive exhibition galleries, sensory narrative styling, and smooth layout transitions.',
      'Configured responsive styling and production hosting on Vercel with smooth cross-device accessibility.',
    ],
    features: [
      'Handcrafted soy candle collection showcase',
      'Curated brand exhibition space (#exhibition)',
      'Editorial luxury design language & fluid micro-interactions',
      'Production deployment on Vercel',
    ],
    metrics: [
      { value: 'Luxury', label: 'brand aesthetic' },
      { value: 'Live', label: 'on Vercel' },
      { value: 'Next.js', label: 'React framework' },
      { value: 'Custom', label: 'Tailwind styling' },
    ],
    palette: { from: '#211204', via: '#7e4610', to: '#0d0702', accent: '#ffb24d' },
    motif: 'candle',
  },
  {
    id: 'nexora-crm',
    title: 'Nexora CRM',
    year: '2025',
    genre: 'Full-Stack • Django • React.js',
    logline: 'Full-stack CRM platform for managing customers, leads, interactions and business activities.',
    stack: ['React.js', 'Django', 'Django REST Framework', 'SQLite', 'Vercel'],
    liveUrl: 'https://nexora-crm-ten-mu.vercel.app',
    github: 'https://github.com/riiiyaah10',
    build: [
      'Developed and deployed a full-stack CRM platform for managing customers, leads, interactions and business activities.',
      'Implemented secure user authentication, role-based workflows, RESTful API endpoints, and database models in Django.',
      'Engineered a responsive React dashboard with streamlined customer tracking and real-time interaction logs.',
    ],
    features: [
      'Lead and customer lifecycle management',
      'Secure user authentication & session control',
      'Django REST Framework backend integration',
      'Responsive analytical dashboard for operations',
    ],
    metrics: [
      { value: 'Full-Stack', label: 'architecture' },
      { value: 'DRF', label: 'RESTful API backend' },
      { value: 'Live', label: 'deployed on Vercel' },
      { value: 'Secure', label: 'user authentication' },
    ],
    palette: { from: '#051824', via: '#0c5270', to: '#040b10', accent: '#38bdf8' },
    motif: 'crm',
  },
  {
    id: 'web-compliance-checker',
    title: 'Web Compliance Checker',
    year: '2025',
    genre: 'Security • Python • Flask • GDPR',
    logline: 'Automated compliance and security scanner evaluating GDPR indicators, cookies, and HTTPS enforcement.',
    stack: ['Python', 'Flask', 'Web Scraping', 'REST APIs', 'Render'],
    liveUrl: 'https://web-compliance-checker.onrender.com',
    github: 'https://github.com/riiiyaah10',
    build: [
      'Implemented a web-based compliance checker to evaluate GDPR and basic security indicators across websites.',
      'Automated checks for cookie usage, privacy policy availability, HTTPS enforcement and security headers.',
      'Deployed the application as a public web service on Render enabling real-time compliance scanning.',
    ],
    features: [
      'Automated GDPR compliance auditing',
      'Cookie banner and tracker detection',
      'HTTPS enforcement & security header checks',
      'Real-time public scanning API & web interface',
    ],
    metrics: [
      { value: 'Automated', label: 'compliance auditing' },
      { value: 'GDPR', label: 'indicator analysis' },
      { value: 'Real-time', label: 'scanning engine' },
      { value: 'Live', label: 'deployed on Render' },
    ],
    palette: { from: '#1a060d', via: '#69122c', to: '#0b0407', accent: '#ff3d68' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'deployed-apps',
    title: '3 Live Web Apps',
    org: 'Vercel & Render',
    detail: 'Built, deployed, and maintain 3 live web applications accessible publicly, demonstrating end-to-end full-stack mastery.',
    laurel: 'Live Production',
  },
  {
    id: 'brainnbody-paper',
    title: 'Research Paper',
    org: 'JAAFR · Vol 3, Issue 11',
    detail: 'Published research publication: "BrainNBody" in Journal of Advance and Future Research (JAAFR), November 2025.',
    laurel: 'Research Publication',
    link: 'https://github.com/riiiyaah10',
  },
  {
    id: 'stanford-ml',
    title: 'Supervised ML',
    org: 'Stanford & DeepLearning.AI',
    detail: 'Earned certification in Supervised Machine Learning: Regression and Classification from Stanford University and DeepLearning.AI.',
    laurel: 'Machine Learning',
  },
  {
    id: 'academic-excellence',
    title: '92% in Class X',
    org: 'CBSE Board',
    detail: 'Achieved 92% in Class X Secondary Board exams from Sant Atulanand Convent School with academic distinction.',
    laurel: 'Academic Excellence',
  },
  {
    id: 'practical-ai',
    title: 'Applied Engineering',
    org: 'Automation & NLP',
    detail: 'Applied automation, web scraping, computer vision and NLP concepts to solve practical engineering and compliance problems.',
    laurel: 'Engineering Focus',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'Stanford Online',
    name: 'Supervised Machine Learning: Regression and Classification (DeepLearning.AI & Stanford, Apr 2026)',
    link: 'https://coursera.org',
  },
  {
    issuer: 'NPTEL',
    name: 'Introduction to Internet of Things (2025)',
    link: 'https://nptel.ac.in',
  },
  {
    issuer: 'JAAFR',
    name: 'Research Publication: "BrainNBody" (Journal of Advance and Future Research, Nov 2025)',
    link: 'https://github.com/riiiyaah10',
  },
  {
    issuer: 'Vercel',
    name: 'House of Vyora — Handcrafted Luxury Soy Candles (Live Production)',
    link: 'https://vyora-kappa.vercel.app/#exhibition',
  },
  {
    issuer: 'Vercel',
    name: 'Nexora — Full-Stack CRM & Customer Management System (Live Production)',
    link: 'https://nexora-crm-ten-mu.vercel.app',
  },
  {
    issuer: 'Render',
    name: 'Web Compliance Checker — GDPR & Security Scanner (Live Production)',
    link: 'https://web-compliance-checker.onrender.com',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python & Java are primary',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv', note: 'Core' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interactive interfaces & modern web',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'Responsive Web Design', mono: 'Rw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Server logic, APIs & automation',
    skills: [
      { name: 'Flask', mono: 'Fl' },
      { name: 'Django', mono: 'Dj' },
      { name: 'Django REST Framework', mono: 'Df' },
      { name: 'Node.js', mono: 'No' },
      { name: 'RESTful APIs', mono: 'Ap' },
      { name: 'Web Scraping', mono: 'Ws' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & document stores',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg', note: 'Relational' },
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'SQLite', mono: 'Sq' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Cloud',
    subtitle: 'Shipping & development workflows',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Render', mono: 'Rn' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Vibe Coding', mono: 'Vb' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core CS & Security',
    subtitle: 'Algorithmic & engineering foundation',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Web Security Basics', mono: 'Ws' },
      { name: 'GDPR Compliance', mono: 'Gd' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Collaboration & Strengths',
    subtitle: 'How I solve problems',
    skills: [
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Communication', mono: 'Cm' },
      { name: 'Self-Learning', mono: 'Sl' },
      { name: 'Adaptability', mono: 'Ad' },
      { name: 'Team Collaboration', mono: 'Tc' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Web Compliance Checker', 'Stanford ML Certification', 'Automation & Web Scraping'],
  Java: ['B.Tech CSE Core', 'OOPs & Algorithm Implementation'],
  JavaScript: ['House of Vyora', 'Nexora CRM Dashboard'],
  'React.js': ['House of Vyora', 'Nexora CRM Dashboard'],
  'Next.js': ['House of Vyora Luxury Candles'],
  'Tailwind CSS': ['House of Vyora Luxury Styling'],
  HTML5: ['House of Vyora', 'Nexora CRM'],
  CSS3: ['Responsive Web Design', 'House of Vyora Luxury Styling'],
  'Responsive Web Design': ['House of Vyora', 'Nexora CRM'],
  Flask: ['Web Compliance Checker (Live on Render)'],
  Django: ['Nexora CRM & Customer Management System'],
  'Django REST Framework': ['Nexora CRM RESTful API Endpoints'],
  'Node.js': ['Full-Stack Web Services & Tooling'],
  'RESTful APIs': ['Nexora CRM', 'Web Compliance Checker'],
  'Web Scraping': ['Web Compliance Checker Automated Audits'],
  PostgreSQL: ['Relational Database Architecture', 'Schema Design & SQL Optimization'],
  MySQL: ['B.Tech DBMS Curriculum & Relational Storage'],
  MongoDB: ['Full-Stack Document Database Projects'],
  SQLite: ['Nexora CRM Database Backend'],
  Git: ['Version Control across all deployed projects'],
  GitHub: ['github.com/riiiyaah10 repository management'],
  Vercel: ['House of Vyora', 'Nexora CRM'],
  Render: ['Web Compliance Checker live web service'],
  Postman: ['API Testing for Nexora CRM & Compliance Checker'],
  'Prompt Engineering': ['Applied AI & LLM Workflows'],
  'Data Structures & Algorithms': ['B.Tech CSE Core', 'Problem Solving Foundation'],
  OOPs: ['Object-Oriented Design in Python & Java'],
  DBMS: ['Relational Schema Design & Query Optimization'],
  'Operating Systems': ['Process Management, File Systems & Concurrency'],
  'Web Security Basics': ['Web Compliance Checker (HTTPS & Headers)'],
  'GDPR Compliance': ['Web Compliance Checker Automated Scanning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2022',
    synopsis: 'Formative academic years across Sant Atulanand Convent School and American Montessori Public School.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Secondary Milestone',
        description: 'Completed CBSE Class X at Sant Atulanand Convent School with an outstanding 92% score, building a disciplined foundation in mathematics and sciences.',
        tags: ['CBSE', 'Class X', '92%'],
        runtime: '2019 – 2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Senior Secondary',
        description: 'Completed CBSE Class XII at American Montessori Public School, preparing for higher education in Computer Science and Engineering.',
        tags: ['CBSE', 'Class XII', 'Sciences'],
        runtime: '2021 – 2022',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Engineering Begins',
    period: '2022 – 2024',
    synopsis: 'Commencing B.Tech in Computer Science and Engineering at Parul Institute of Engineering and Technology, Vadodara.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The CSE Groundwork',
        description: 'Studying core computer science: Data Structures & Algorithms, Object-Oriented Programming with Java & Python, DBMS, and Operating Systems.',
        tags: ['B.Tech CSE', 'Parul Institute', 'CGPA 7.1'],
        runtime: '2022 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Frontend Craft',
        description: 'Mastering modern user interface development with React.js, Next.js, Tailwind CSS, HTML5, and responsive design systems.',
        tags: ['React.js', 'Next.js', 'Tailwind CSS'],
        runtime: '2023 – 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Full-Stack & Systems',
    period: '2024 – 2025',
    synopsis: 'Expanding backend architecture with Flask, Django, Django REST Framework, web automation, and database persistence.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Backend Engine',
        description: 'Architecting RESTful APIs using Python, Flask, and Django with robust database integration across SQLite, PostgreSQL, MySQL, and MongoDB.',
        tags: ['Python', 'Flask', 'Django', 'REST APIs'],
        runtime: '2024 – 2025',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'Automation & Security',
        description: 'Engineering web automation and web scraping pipelines, investigating web security headers, cookie tracking, and GDPR compliance rules.',
        tags: ['Web Scraping', 'GDPR', 'Web Security'],
        runtime: '2024 – 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The 3 Live Originals',
    period: '2025 – 2026',
    synopsis: 'Building and shipping three full-stack applications to public production on Vercel and Render.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'House of Vyora',
        description: 'Luxury handcrafted soy candle website showcasing sensory brand presentation and curated exhibitions.',
        tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
        runtime: 'Live on Vercel',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'Nexora CRM',
        description: 'Full-stack customer management platform with authentication, RESTful APIs in Django REST Framework, and a responsive React dashboard.',
        tags: ['Django', 'React.js', 'DRF', 'SQLite'],
        runtime: 'Live on Vercel',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Web Compliance Checker',
        description: 'Real-time compliance auditing web service analyzing GDPR rules, cookie policies, HTTPS enforcement, and security headers.',
        tags: ['Python', 'Flask', 'Web Scraping', 'Render'],
        runtime: 'Live on Render',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: 'Research & What’s Next',
    period: '2025 – Present',
    synopsis: 'Publishing original research, completing Machine Learning certification, and launching a professional software engineering career.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Research: BrainNBody',
        description: 'Authored and published research paper "BrainNBody" in Journal of Advance and Future Research (JAAFR), Volume 3, Issue 11.',
        tags: ['JAAFR', 'Publication', 'AI & Research'],
        runtime: 'Nov 2025',
        palette: jade,
      },
      {
        code: 'S05 E02',
        title: 'Stanford Machine Learning',
        description: 'Earned Supervised Machine Learning credential from Stanford University and DeepLearning.AI, plus NPTEL Internet of Things certification.',
        tags: ['Stanford', 'DeepLearning.AI', 'NPTEL IoT'],
        runtime: '2025 – 2026',
        palette: violet,
      },
      {
        code: 'S05 E03',
        title: 'Ready to Deploy',
        description: 'Seeking an entry-level Software Developer or IT role to build scalable, reliable, and secure production solutions.',
        tags: ['Software Developer', 'Entry-Level', 'Full-Stack'],
        runtime: 'Now streaming',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'Core language for Flask, automation & Machine Learning', palette: amber },
  { label: 'Flagship tool', title: 'Web Compliance Checker', detail: 'Real-time GDPR & security scanner live on Render', palette: crimson },
  { label: 'Enterprise system', title: 'Nexora CRM', detail: 'Full-stack platform with React.js & Django REST Framework', palette: ocean },
  { label: 'Relational database', title: 'PostgreSQL', detail: 'Advanced relational schema design, indexing & SQL queries', palette: violet },
  { label: 'Curated lifestyle', title: 'House of Vyora', detail: 'Handcrafted luxury soy candles live on Vercel', palette: amber },
  { label: 'Research paper', title: 'BrainNBody', detail: 'Published in JAAFR (Vol. 3, Issue 11, Nov 2025)', palette: jade },
  { label: 'Stanford credential', title: 'Supervised ML', detail: 'Certified by Stanford University & DeepLearning.AI', palette: crimson },
  { label: 'Academic high', title: '92% in Class X', detail: 'CBSE Board distinction at Sant Atulanand Convent', palette: jade },
  { label: 'IoT credential', title: 'NPTEL IoT', detail: 'Introduction to Internet of Things certified (2025)', palette: ocean },
  { label: 'Production record', title: '3 Live Web Apps', detail: 'Publicly accessible web applications on Vercel & Render', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Riya Chaubey',
    lines: ['Software Developer · Full-Stack & Backend Engineer', 'Vadodara, Gujarat, India'],
    chips: ['Python', 'Java', 'React.js', 'Flask'],
  },
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Parul Institute of Engineering and Technology, Vadodara', 'Class of 2026 · CGPA 7.1', 'Class X CBSE: 92%'],
    chips: ['B.Tech 2026', 'CGPA 7.1', '92% CBSE X'],
  },
  {
    kicker: 'Core Stack',
    title: 'Python, Java & React',
    lines: ['Frontend: React.js, Next.js, Tailwind CSS', 'Backend: Flask, Django, Django REST Framework, RESTful APIs', 'Databases: PostgreSQL, MySQL, MongoDB, SQLite'],
    chips: ['Python', 'Java', 'Flask', 'Django', 'React.js', 'PostgreSQL'],
  },
  {
    kicker: 'Originals',
    title: 'Three Live Apps',
    lines: [
      'House of Vyora — Handcrafted Luxury Soy Candles (Next.js)',
      'Nexora — Full-Stack CRM & Customer Management (React + Django)',
      'Web Compliance Checker — GDPR & Security Scanner (Flask + Render)',
    ],
  },
  {
    kicker: 'Research',
    title: 'Published Paper',
    lines: [
      'Research Publication: "BrainNBody"',
      'Journal of Advance and Future Research (JAAFR)',
      'Volume 3, Issue 11, November 2025',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Stanford & NPTEL',
    lines: [
      'Supervised Machine Learning — DeepLearning.AI & Stanford University',
      'Introduction to Internet of Things — NPTEL (2025)',
      '3 Live Apps Deployed on Vercel & Render',
    ],
  },
  {
    kicker: 'Mission',
    title: 'Ready to Deploy',
    lines: ['Seeking an entry-level Software Developer or IT role', 'To build scalable, reliable and secure production solutions.'],
  },
];

export type ProfileId = 'riya' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'riya',
    name: 'Riya',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & live demos first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Live Deployments`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
