import { Project, Skill, Experience } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "virtual-style-ai",
    title: "Virtual Style AI",
    subtitle: "AI-Powered Virtual try-on app",
    description: "Developed an AI-powered virtual try-on application that enables users to preview clothing and accessories digitally. Focused on responsive UI/UX, AI integration, image processing, and an intuitive user experience.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhtDAZGTN7OU1yTfszl7m4cE9emc0mGNQiM30H2aqcY7mvrD8-d3c1gShVqgjLNSw7R7zo1wNC86_PfgYKwpjlDw9vIYieioSj4tbLYiOwAHOGykcvMHIwbZlBa4OMMuGjRbcV48H0w8FvZ28saCU9ku7qD6h7eDdh8m83I2aAZG4t0y7PeXvlTMlc1wGQsCFiWCih6_gHtyyKZwfjOF08bCvLRTLgK6nmTTQtYjhpCzuTWbfUpmoU0tIHEGbOOmlCpJnJJ5wfQxBM",
    tags: ["AI Integration", "Image Processing", "Responsive UI/UX", "Vibe Coding"],
    category: "AI & Fashion",
    timeline: "2025",
    highlights: [
      "Enabled users to preview clothing and fashion accessories digitally",
      "Focused on responsive UI/UX, and an intuitive user experience",
      "Integrated smart generative image pipelines for realistic texture draping"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "hand-gesture",
    title: "Interactive Hand Gesture Web Application",
    subtitle: "MediaPipe-Driven Camera Interactivity",
    description: "Created a browser-based hand gesture recognition application using MediaPipe and JavaScript. Enabled real-time camera interaction to control animations and interactive visual effects through hand movements.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdTZgqAyep_wXp2WEFgetSQ8pfznNER26kBPtaVw7cbMzoqfYJl63rR7Cod8TYqxHyzT6RxlwOiFlnAFsGHIJoSczCF_M-D8oBoHcn312qPUGToTQTAaVXkRUPWB2z8cRwYNbjR2HbNZlwc6RziBHyv_MGEYCskoc2F8prOv2estxb4ABiq7QeKKyElSWUNcPodhaHLnPdh-kvMkdZ31P35iDXSgy2nQL_JSR5tz0ZW9dxmfv6RWQiJElctmW_GpvGHl4d-SAWamZN",
    tags: ["MediaPipe", "JavaScript", "Real-time Camera", "Interactive VFX"],
    category: "Computer Vision",
    timeline: "2024 - 2025",
    highlights: [
      "Built low-latency real-time hand gesture tracking directly in browser",
      "Mapped complex hand velocity vectors to fluid dynamic visual shaders",
      "Developed an ATS-friendly, professional layout suitable for tech recruiters"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "sangamam-ecommerce",
    title: "Sangamam E-Commerce Platform",
    subtitle: "Scalable Multi-Vendor Marketplace",
    description: "Built a scalable multi-vendor e-commerce platform featuring product management, user authentication, shopping cart, secure payments, order tracking, and an admin dashboard with a modern responsive interface.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf7wuI_PH0zukmRTwuPkfP55kZNZlk6N6diYAGLuAakiL2p7GEMcAzjX1EDWvJOvk7eJScSgDPNB-1KPu9uHiHnrLqF0NK85_FdOKzrL_admMCct-gR5y9DXjkXp09BX784t2pyh2_Mub0m-04F_NfriEm-FfyUBDlCZ6mUgkALx_OLTQhJ28LCExAnz8xki3cTGS7y0pwo-oOuCSIbOty5OGKixOY0eyYJtY1hAQOw5qRnoty5ZdaLjZ7jwvgtmj_SAZNJwdegTEL",
    tags: ["Multi-Vendor", "User Auth", "Secure Payments", "Admin Dashboard"],
    category: "Full Stack",
    timeline: "2024",
    highlights: [
      "Supported scalable multi-vendor management and secure payments gateways",
      "Created highly responsive shopping cart, order tracking and custom profiles",
      "Constructed a comprehensive admin dashboard with fluid telemetry widgets"
    ],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const SKILLS: Skill[] = [
  {
    id: "prompt-eng",
    name: "Prompt Engineering",
    category: "core",
    iconName: "bolt",
    description: "Architecting high-fidelity LLM prompts, structural system roles, context chains, and multi-agent directives.",
    rating: 98
  },
  {
    id: "vibe-coder",
    name: "Vibe Coder",
    category: "core",
    iconName: "waves",
    description: "Unleashing the speed of next-generation AI-assisted development tools to build pristine full-stack code.",
    rating: 97
  },
  {
    id: "ai-essentials",
    name: "AI Essentials",
    category: "core",
    iconName: "terminal",
    description: "Deep practical exposure to cognitive model limits, generative pipelines, and agentic solutions.",
    rating: 95
  },
  {
    id: "software-eng",
    name: "Software Engineering",
    category: "frameworks",
    iconName: "web",
    description: "Applying robust programming principles, clean module separations, and software lifecycle optimization.",
    rating: 90
  },
  {
    id: "app-builder",
    name: "Website & App Builder",
    category: "frameworks",
    iconName: "web",
    description: "Fusing clean markup with state management to construct highly tactile, responsive digital properties.",
    rating: 93
  }
];

export const EXPERIENCE_TIMELINE: Experience[] = [
  {
    id: "edu-periyar",
    role: "B.Sc. in Computer Science",
    organization: "Periyar University",
    period: "2024 - 2026",
    description: "Nurturing deep technical knowledge across core computing paradigms, data-structures, software architecture, database management, and intelligent design.",
    bulletPoints: [
      "Acquired comprehensive fundamental understandings in Software Engineering, DBMS, and Algorithms.",
      "Consistently seeking practical implementations of innovative web technologies and e-commerce architectures.",
      "Achieved stellar academic records with active initiatives in computer vision & LLM prompt workflows."
    ],
    tags: ["B.Sc Computer Science", "DBMS", "Software Eng", "Algorithms"]
  }
];

export const PUBLICATIONS = [
  {
    title: "AI Startup Vision: Building Intelligent Solutions for Real-World Problems",
    description: "A concept paper outlining my vision for developing AI-powered solutions that address real-world challenges. It explores product planning, technology selection, software architecture, scalability, and the practical application of Artificial Intelligence and Machine Learning. This work reflects my interest in innovation and entrepreneurship as a Computer Science student.",
    date: "2025"
  }
];

export const INTERESTS = [
  "Book reading",
  "Stamp collection",
  "Volunteering at a Local Soup Kitchen"
];

export const LANGUAGES = [
  "Tamil",
  "English"
];

export const CONTACT_DETAILS = {
  email: "mugilarasu041@gmail.com",
  phone: "8270495250",
  address: "1. MAIN ROAD. KORATTAMPALAIYAM, Veeranam, PO: Sathamir. DIST: Tiruvannamalai, Tamil Nadu-606706",
  objective: "Aspiring Startup Founder | AI & Software Developer Building innovative technology that solves real-world problems and creates meaningful impact."
};
