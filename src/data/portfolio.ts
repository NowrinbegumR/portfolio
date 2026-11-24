export const profile = {
  name: "Nowrin Begum R.",
  shortName: "Nowrin Begum R",
  headline:
    "Aspiring Data Scientist | AI & Data Science | Python | SQL | Machine Learning | Generative AI | Computer Vision | Deep Learning | Data Analytics",
  introduction:
    "I build practical AI applications and analytical tools, with a focus on machine learning, generative AI, computer vision, and responsible data science.",
  github: "https://github.com/NowrinbegumR",
  linkedin: "https://www.linkedin.com/in/nowrin-begum/",
  email: "nowrinbegum19@gmail.com",
  college: "St. Joseph's College of Engineering",
  degree: "B.Tech — Artificial Intelligence and Data Science",
  educationDates: "September 2023 — Present",
  cgpa: "8.26 / 10",
  resumeUrl: "/assets/Nowrin-Begum-R-Resume.pdf",
  linkedinPublications: "https://www.linkedin.com/in/nowrin-begum/details/publications/",
  linkedinPatents: "https://www.linkedin.com/in/nowrin-begum/details/patents/",
  portrait: {
    src: "/assets/nowrin-portrait.jpg",
    webp: "/assets/nowrin-portrait.webp",
    alt: "Portrait of Nowrin Begum R., AI and Data Science engineering student",
  },
} as const;

export const projectFilters = [
  "All work",
  "AI & ML",
  "GenAI & RAG",
  "Computer Vision",
  "Data & Analytics",
  "Engineering",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];
export type ProjectCategory = Exclude<ProjectFilter, "All work">;

export interface PortfolioProject {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  categories: ProjectCategory[];
  href: string;
  note?: string;
  image?: { src: string; alt: string };
}

const githubRepo = (name: string) => `https://github.com/NowrinbegumR/${name}`;

export const projects: PortfolioProject[] = [
  {
    id: "dermavision",
    title: "DermaVision",
    summary:
      "Computer-vision experiments for skin type, tone, and imperfection classification, with training notebooks, evaluation plots, and class-activation visualizations.",
    technologies: ["PyTorch", "EfficientNet", "InceptionV3", "ViT", "CAM"],
    categories: ["AI & ML", "Computer Vision"],
    href: githubRepo("DERMAVISION"),
  },
  {
    id: "blueguard",
    title: "BlueGuard AI",
    summary:
      "A collaborative maritime-monitoring system combining vessel-behavior classification with geospatial zone checks, AIS data uploads, and a web dashboard.",
    technologies: ["FastAPI", "React · Vite", "Python", "Geospatial analysis", "AIS"],
    categories: ["AI & ML", "Computer Vision"],
    href: githubRepo("Blueguard-AI"),
    note: "Collaborative project",
    image: {
      src: "/assets/blueguard-architecture.webp",
      alt: "BlueGuard AI system architecture diagram from the public repository",
    },
  },
  {
    id: "legal-rag",
    title: "JusticeBot · Legal RAG",
    summary:
      "A collaborative legal assistant that parses Indian law documents, retrieves relevant passages with Qdrant, and streams responses from a local language model.",
    technologies: ["FastAPI", "Qdrant", "Sentence Transformers", "Ollama"],
    categories: ["AI & ML", "GenAI & RAG"],
    href: githubRepo("Legal-RAG"),
    note: "Collaborative project",
  },
  {
    id: "privacyguard",
    title: "PrivacyGuard",
    summary:
      "A deep-learning pipeline that detects and redacts PII from Aadhaar card images using YOLO models, with multilingual OCR for regional-language documents and explainable-AI techniques for model transparency. Built as a Flask application for upload, redaction, and download.",
    technologies: ["YOLO", "Multilingual OCR", "Explainable AI", "Flask", "Responsible AI"],
    categories: ["AI & ML", "Computer Vision"],
    href: githubRepo("Privacyguard"),
  },
  {
    id: "slm-lora-legal",
    title: "SLM LoRA for Indian Legal Text",
    summary:
      "Fine-tuning notebooks and LoRA adapters for Gemma 2B, Phi-2, and Qwen 2.5 on Indian legal acts and court-case material.",
    technologies: ["LoRA", "Gemma 2B", "Phi-2", "Qwen 2.5", "Python"],
    categories: ["AI & ML", "GenAI & RAG"],
    href: githubRepo("SLM-LoRA-Legal"),
  },
  {
    id: "legal-rag-kaggle",
    title: "Legal RAG Assistant · Kaggle",
    summary:
      "A notebook-based Indian-law assistant that retrieves relevant legal sections from a FAISS index and grounds responses in retrieved passages.",
    technologies: ["FAISS", "Sentence Transformers", "Flan-T5", "Ollama", "Kaggle"],
    categories: ["AI & ML", "GenAI & RAG"],
    href: githubRepo("LEGAL_RAG_KAGGLE_ASSISTANT"),
  },
  {
    id: "walmart-forecast",
    title: "Walmart Sales Forecasting",
    summary:
      "A Kaggle-ready weekly sales forecasting notebook comparing ETS, ARIMA, SARIMA, and LSTM approaches with time-ordered evaluation.",
    technologies: ["Python", "Pandas", "Statsmodels", "Scikit-learn", "TensorFlow"],
    categories: ["AI & ML", "Data & Analytics"],
    href: githubRepo("WALMART_SALES_FORECASTING"),
  },
  {
    id: "powerbi-learning",
    title: "Power BI Learning Journey",
    summary:
      "A collection of dashboard and analytics work covering ETL, data modeling, DAX measures, KPIs, and visual storytelling.",
    technologies: ["Power BI", "Power Query", "DAX", "ETL", "Data modeling"],
    categories: ["Data & Analytics"],
    href: githubRepo("-My-powerbi-learning"),
  },
  {
    id: "influencer-tracker",
    title: "Influencer Tracker",
    summary:
      "A Python project scaffold for tracking audience counts across Instagram, YouTube, and X; its documented dry-run writes mock counts, while live APIs are listed as future work.",
    technologies: ["Python", "CSV", "Data collection"],
    categories: ["Data & Analytics", "Engineering"],
    href: githubRepo("Influencer_tracker"),
    note: "Prototype · dry-run uses mock counts",
  },
  {
    id: "leetcode",
    title: "LeetCode Problem Solving",
    summary:
      "A collection of individual problem write-ups and solutions, primarily in Java with some Python solutions.",
    technologies: ["Java", "Python", "Algorithms", "Data structures"],
    categories: ["Engineering"],
    href: githubRepo("Problem-Solving-Leetcode"),
  },
  {
    id: "coding-challenges",
    title: "Coding Challenges",
    summary:
      "Practice solutions for algorithmic problems and SQL exercises, with per-problem notes in the repository.",
    technologies: ["Java", "SQL", "Algorithms"],
    categories: ["Engineering"],
    href: githubRepo("coding-challenges"),
  },
  {
    id: "flexpaper",
    title: "FlexPaper / FlowPaper Viewer",
    summary:
      "A legacy PDF-viewer repository based on FlexPaper, which its README identifies as renamed to FlowPaper; the source includes Flash-era assets.",
    technologies: ["FlexPaper", "FlowPaper", "Legacy Flash"],
    categories: ["Engineering"],
    href: githubRepo("pdfproject"),
    note: "Legacy source · no current demo verified",
  },
  {
    id: "solarsight",
    title: "SolarSight AI",
    summary:
      "Mask R-CNN fine-tuned on satellite imagery to detect solar panel installations, reaching 95% test accuracy and 89% confidence, with Grad-CAM saliency maps to make predictions interpretable for domain experts.",
    technologies: ["Mask R-CNN", "Segmentation", "Grad-CAM", "Explainable AI"],
    categories: ["AI & ML", "Computer Vision"],
    href: githubRepo("SolarSight-AI"),
    note: "December 2025 · public repository is currently empty",
  },
  {
    id: "pdf-project",
    title: "PDF Project",
    summary:
      "A public repository is present, but it currently contains no files or project documentation to describe.",
    technologies: [],
    categories: ["Engineering"],
    href: githubRepo("pdf-project"),
    note: "Repository has no public files",
  },
  {
    id: "gfg-code",
    title: "GFG Code",
    summary:
      "The repository currently has only a title-only README, so no project purpose or implementation details are documented.",
    technologies: [],
    categories: ["Engineering"],
    href: githubRepo("gfg-code"),
    note: "Minimal public documentation",
  },
];

export function filterProjects(
  filter: ProjectFilter,
  source: readonly PortfolioProject[] = projects,
): PortfolioProject[] {
  if (filter === "All work") return [...source];
  return source.filter((project) => project.categories.includes(filter));
}

export const skills = [
  {
    title: "Programming",
    icon: "code",
    items: ["Python", "Java", "R", "SQL", "MATLAB", "JavaScript", "ReactJS", "ExpressJS"],
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    items: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Hugging Face",
      "Transformers",
    ],
  },
  {
    title: "Generative AI",
    icon: "sparkles",
    items: [
      "LLMs",
      "BERT",
      "GPT",
      "RAG",
      "GraphRAG",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "MCP",
      "Ollama",
    ],
  },
  {
    title: "Computer Vision",
    icon: "scan",
    items: [
      "YOLO",
      "OpenCV",
      "Mask R-CNN",
      "Vision Transformers",
      "Image Classification",
      "Segmentation",
      "Explainable AI",
    ],
  },
  {
    title: "Data & Analytics",
    icon: "chart",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
      "Looker Studio",
      "KNIME",
      "RapidMiner",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "GraphQL", "ChromaDB", "FAISS", "Pinecone"],
  },
  {
    title: "Development & Cloud",
    icon: "layers",
    items: [
      "FastAPI",
      "Flask",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "MLflow",
      "Azure ML",
      "Google Cloud",
    ],
  },
] as const;

export const experience = [
  {
    company: "IQmath Technologies",
    role: "AI Engineer Intern",
    date: "June 2026 — July 2026",
    summary:
      "Contributed to an AI-powered mock interview platform using Next.js, FastAPI, GPT-4o, Whisper AI, and OpenAI text-to-speech.",
    technologies: ["Next.js", "FastAPI", "GPT-4o", "Whisper AI", "OpenAI TTS"],
  },
  {
    company: "Bluestock FinTech",
    role: "Software Developer Intern",
    date: "July 2025 — August 2025",
    summary:
      "Engineered backend modules for financial data processing across multiple services, handling 10,000+ daily transactional records. Designed REST APIs integrated with financial data services for real-time analytics.",
    technologies: [
      "Backend modules",
      "REST APIs",
      "Financial data processing",
      "Real-time analytics",
    ],
  },
  {
    company: "XOBO Technologies Pvt. Ltd.",
    role: "Junior Software Developer",
    date: "September 2025 — October 2025",
    summary:
      "Worked on data visualization and Power BI dashboards; optimized 5+ application modules through refactoring and debugging, reducing bug count by 30%. Contributed to feature development, testing, and Git/GitHub workflows.",
    technologies: ["Power BI", "Git", "GitHub", "Data visualization", "Refactoring", "Debugging"],
  },
] as const;

/**
 * Research papers. `href` / `doi` are intentionally left undefined until a verified
 * publisher or conference URL is supplied — never put a guessed URL here.
 * Fields marked `needs` are shown on the card as "to be confirmed".
 */
export interface ResearchWork {
  id: string;
  title: string;
  domain: string;
  venue?: string;
  year?: string;
  status: string;
  abstract: string;
  authors?: string;
  mentor?: string;
  href?: string;
  doi?: string;
  needs: string[];
}

export const researchWorks: ResearchWork[] = [
  {
    id: "skin-analysis",
    title: "An Intelligent Real-Time Skin Analysis Platform Using Explainable AI",
    domain: "Computer Vision · Explainable AI",
    status: "Research work",
    abstract:
      "A real-time skin-analysis direction that classifies skin type, tone, and imperfections and uses class-activation maps to explain model decisions. The public DermaVision repository holds the related models and explainability notebooks.",
    needs: ["Publication / conference name", "Year", "Co-authors & mentor", "Paper link / DOI"],
  },
  {
    id: "pii-redaction-paper",
    title:
      "System and Method for Automated Redaction of PII Using Responsible AI and Computer Vision",
    domain: "Responsible AI · Computer Vision · Privacy",
    venue: "IATMSI",
    year: "2026",
    status: "Published · April 2026",
    abstract:
      "Detects personally identifiable information in images with computer vision and applies configurable redaction, with responsible-AI considerations built into the pipeline. The related PrivacyGuard application is available on GitHub.",
    needs: ["Co-authors & mentor", "Paper link / DOI"],
  },
  {
    id: "skin-care-rag",
    title: "An AI Automated Facial Skin Analysis and Personalized Skin Care Using RAG",
    domain: "Generative AI · RAG · Computer Vision",
    status: "Research work",
    abstract:
      "An AI system that automates facial skin analysis and uses retrieval-augmented generation (RAG) to provide personalized skin-care guidance.",
    needs: ["Publication / conference name", "Year", "Co-authors & mentor", "Paper link / DOI"],
  },
];

/**
 * Patent records. Both listed numbers are Indian application numbers, and the résumé
 * lists them as *published*. None is described here as granted. `href` stays undefined
 * until the official Indian Patent Office journal / record URL is supplied.
 */
export interface PatentRecord {
  id: string;
  title: string;
  applicationNumber?: string;
  published?: string;
  status: string;
  description?: string;
  inventors?: string;
  href?: string;
  needs: string[];
}

export const patentPublications: PatentRecord[] = [
  {
    id: "maritime-geoai",
    title:
      "Intelligent Agent for Real-time Maritime Threat Detection and Satellite Tasking: GeoAI with LLM Reasoning, MCP and RL",
    applicationNumber: "202541094931",
    published: "October 2025",
    status: "Published application",
    description:
      "An agentic GeoAI system for maritime threat detection and satellite tasking, combining LLM reasoning, the Model Context Protocol (MCP), and reinforcement learning.",
    needs: ["Co-inventors", "Official patent record link"],
  },
  {
    id: "pii-redaction-patent",
    title:
      "System and Method for Automated Redaction of Personal Identifiable Information using AI and Computer Vision",
    applicationNumber: "202541076252",
    published: "September 2025",
    status: "Published application",
    description:
      "A system and method for detecting and redacting personal identifiable information in images using AI and computer vision.",
    needs: ["Co-inventors", "Official patent record link"],
  },
  {
    id: "patent-three",
    title:
      "ASRD-U-MAMBA: An Adaptive State-Space Deep Learning Framework for Building Footprint Extraction from Aerial Remote Sensing Imagery",
    status: "Status to be confirmed",
    description:
      "An adaptive state-space deep-learning framework for extracting building footprints from aerial remote-sensing imagery.",
    needs: [
      "Application number",
      "Publication date",
      "Co-inventors",
      "Official patent record link",
    ],
  },
];

export interface AchievementItem {
  id: string;
  title: string;
  org: string;
  date?: string;
  icon: "trophy" | "users";
  detail: string;
  points: string[];
  needs: string[];
}

export const achievements: AchievementItem[] = [
  {
    id: "tata-hackathon",
    title: "Tata Elxsi TELIPORT Season 3",
    org: "Top 75 team · nationwide",
    date: "2026",
    icon: "trophy",
    detail:
      "Placed among the Top 75 teams out of more than 5,000 registered teams nationwide in Tata Elxsi TELIPORT Season 3.",
    points: ["Top 75 team", "5,000+ registered teams nationwide", "Tata Elxsi TELIPORT · Season 3"],
    needs: ["Challenge / project details", "Your contribution"],
  },
  {
    id: "technical-lead",
    title: "Technical Lead",
    org: "Data Analytics Club",
    date: "2025 — 2026",
    icon: "users",
    detail:
      "Technical Lead of the Data Analytics Club, leading more than five events, including Impact-AI-thon, a national-level 24-hour hackathon.",
    points: [
      "Technical Lead, Data Analytics Club (2025 — 2026)",
      "Led more than five club events",
      "Impact-AI-thon: national-level, 24-hour hackathon",
    ],
    needs: [],
  },
];

export const researchStats = {
  papers: researchWorks.length,
  papersConfirmedPublished: researchWorks.filter((w) => Boolean(w.venue)).length,
  patentsDocumented: patentPublications.filter((p) => p.applicationNumber).length,
  patentsTotal: patentPublications.length,
} as const;

export const certifications = [
  { title: "Data Science for Engineers", issuer: "NPTEL" },
  { title: "Data Science Foundation", issuer: "Infosys Springboard" },
  { title: "Azure Database Administrator Associate", issuer: "Microsoft" },
  { title: "AI/BI for Data Analyst", issuer: "Databricks" },
  { title: "OCI Generative AI", issuer: "Oracle" },
  { title: "Machine Learning with Python", issuer: "IBM" },
  { title: "Basic Proficiency in KNIME Analytics", issuer: "KNIME" },
] as const;
