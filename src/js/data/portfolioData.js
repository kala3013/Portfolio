/**
 * Single Source of Truth for Kalanidhi M C's Portfolio
 * Truthful, non-fabricated, verified against public GitHub & credentials.
 * Only verified projects and credentials included.
 */

export const personalInfo = {
  name: "Kalanidhi M C",
  role: "Software Developer",
  specialization: "Full Stack Development",
  heroLabel: "COMPUTER SCIENCE ENGINEERING",
  heroRoleSecondary: "FULL STACK • AI • CLOUD • DEVOPS",
  heroPositioning: "Building practical software while exploring AI, Cloud & DevOps.",
  positioning: "Computer Science Engineering student at Anna University Regional Campus, Coimbatore, with hands-on experience in Full Stack Development and multiple software/AI projects. Skilled in Java, C, React.js, Node.js, MySQL, Firebase, Git and familiar with Docker, Jenkins, CI/CD, cloud computing and Generative AI. Seeking entry-level Software Developer / Full Stack Developer opportunities.",
  location: "Tirupur, Tamil Nadu, India",
  phone: "+91 6383396164",
  email: "kalanidhimurugan@gmail.com",
  github: "https://github.com/kala3013",
  linkedin: "https://www.linkedin.com/in/kalanidhi-m-c-b568782a5/",
  resumePath: "public/resume/Kalanidhi_M_C_Resume.pdf",
  availability: "Available for Software Developer Roles & Internships",
  interests: [
    "Artificial Intelligence",
    "Generative AI",
    "Cloud Computing",
    "DevOps",
    "Modern Software Engineering"
  ]
};

export const recruiterHighlights = [
  { icon: "🎓", label: "B.E. CSE (2024–2027)", detail: "Anna University Regional Campus (Lateral Entry, CGPA: 8.01)", targetSection: "#education" },
  { icon: "📜", label: "Diploma (93% Distinction)", detail: "Konghu Velalar Polytechnic College (2024)", targetSection: "#education" },
  { icon: "💻", label: "Full Stack Development", detail: "React • Node.js • Express • MySQL • MongoDB", targetSection: "#skills" },
  { icon: "🤖", label: "AI Exploration", detail: "CrewAI • Generative AI • LLM Concepts", targetSection: "#projects" },
  { icon: "☁️", label: "Cloud & DevOps", detail: "Google Cloud • AWS • OCI • Docker • CI/CD", targetSection: "#certifications" },
  { icon: "💼", label: "Full Stack Intern", detail: "Sangam Soft Solutions (June 2026)", targetSection: "#experience" },
  { icon: "🏆", label: "Hackathons & Innovation", detail: "Daimler Best for Innovation • SIH Round 2", targetSection: "#achievements" },
  { icon: "👨‍💼", label: "Placement Leadership", detail: "CSE Placement Coordinator & Committee", targetSection: "#leadership" }
];

export const skillsData = [
  // Programming
  { name: "Java", category: "Programming", level: "Project Experience", badgeClass: "badge-cyan", desc: "Core object-oriented programming, data structures, and backend logic." },
  { name: "JavaScript", category: "Programming", level: "Project Experience", badgeClass: "badge-cyan", desc: "Modern ES6+, asynchronous async/await, DOM APIs, and full-stack integration." },
  { name: "C", category: "Programming", level: "Familiar", badgeClass: "badge-outline", desc: "Procedural programming, memory addressing concepts, and academic algorithmic foundations." },

  // Frontend
  { name: "React.js", category: "Frontend", level: "Project Experience", badgeClass: "badge-cyan", desc: "Component architecture, reactive state hooks, props flow, and responsive interfaces." },
  { name: "HTML5", category: "Frontend", level: "Project Experience", badgeClass: "badge-cyan", desc: "Semantic structural markup, accessibility (ARIA), and SEO tags." },
  { name: "CSS3", category: "Frontend", level: "Project Experience", badgeClass: "badge-cyan", desc: "Flexbox, CSS Grid, custom properties design tokens, and fluid media queries." },
  { name: "Flutter", category: "Frontend", level: "Familiar / Exploring", badgeClass: "badge-purple", desc: "Cross-platform mobile UI prototyping with widgets and stateful views." },

  // Backend
  { name: "Node.js", category: "Backend", level: "Project Experience", badgeClass: "badge-cyan", desc: "Event-driven asynchronous server-side runtime for RESTful APIs." },
  { name: "Express.js", category: "Backend", level: "Project Experience", badgeClass: "badge-cyan", desc: "Middleware pipelines, routing, route controllers, and request validation." },
  { name: "REST APIs", category: "Backend", level: "Project Experience", badgeClass: "badge-cyan", desc: "HTTP methods, JSON serialization, status codes, and decoupled client consumption." },
  { name: "JWT", category: "Backend", level: "Project Experience", badgeClass: "badge-cyan", desc: "Stateless Bearer token issuance, signing, and role-based route guard verification." },

  // Databases
  { name: "MySQL", category: "Databases", level: "Project Experience", badgeClass: "badge-cyan", desc: "Relational database schema normalization, foreign keys, and parameterized queries." },
  { name: "MongoDB", category: "Databases", level: "Project Experience", badgeClass: "badge-cyan", desc: "NoSQL document collections, schema validation, and flexible indexing." },
  { name: "Firebase", category: "Databases", level: "Familiar", badgeClass: "badge-outline", desc: "BaaS database collections, real-time syncing, and cloud service integration." },

  // AI Exploration
  { name: "Generative AI", category: "AI", level: "Exploring", badgeClass: "badge-indigo", desc: "Foundations of generative models, prompt engineering, and contextual reasoning." },
  { name: "LLM Concepts", category: "AI", level: "Exploring", badgeClass: "badge-indigo", desc: "Context windows, tokenization, embeddings, and API temperature configurations." },
  { name: "AI Agents", category: "AI", level: "Exploring", badgeClass: "badge-indigo", desc: "Autonomous agentic personas with defined goals, tools, and sequential workflows." },
  { name: "CrewAI", category: "AI", level: "Exploring", badgeClass: "badge-indigo", desc: "Multi-agent Python orchestration for collaborative static code inspection." },

  // Cloud & DevOps
  { name: "Google Cloud", category: "Cloud & DevOps", level: "Currently Learning", badgeClass: "badge-amber", desc: "GCP fundamental compute, cybersecurity credentials, and IAM concepts." },
  { name: "AWS", category: "Cloud & DevOps", level: "Currently Learning", badgeClass: "badge-amber", desc: "Core cloud architecture concepts, EC2, S3, and cloud workshop practices." },
  { name: "Oracle Cloud Infrastructure", category: "Cloud & DevOps", level: "Currently Learning", badgeClass: "badge-amber", desc: "OCI cloud foundations, tenancy, and basic architecture concepts." },
  { name: "Docker", category: "Cloud & DevOps", level: "Currently Learning", badgeClass: "badge-amber", desc: "Container images, Dockerfile configuration, container lifecycles, and isolation." },
  { name: "Jenkins", category: "Cloud & DevOps", level: "Currently Learning", badgeClass: "badge-amber", desc: "Automated build triggers, CI pipeline steps, and continuous delivery basics." },
  { name: "CI/CD", category: "Cloud & DevOps", level: "Currently Learning", badgeClass: "badge-amber", desc: "Automating testing and build workflows via GitHub Actions and pipeline stages." },
  { name: "Terraform", category: "Cloud & DevOps", level: "Currently Learning", badgeClass: "badge-amber", desc: "Declarative Infrastructure as Code (IaC) configuration and state management basics." },

  // Core Computer Science
  { name: "OOP", category: "Core CS", level: "Academic & Project", badgeClass: "badge-cyan", desc: "Encapsulation, inheritance, polymorphism, abstraction, and clean class design." },
  { name: "Data Structures", category: "Core CS", level: "Academic & Project", badgeClass: "badge-cyan", desc: "Arrays, linked lists, stacks, queues, trees, hash maps, and space-time complexity." },
  { name: "Algorithms", category: "Core CS", level: "Academic & Project", badgeClass: "badge-cyan", desc: "Searching, sorting, traversal, recursion, and algorithmic problem-solving." },
  { name: "SQL", category: "Core CS", level: "Academic & Project", badgeClass: "badge-cyan", desc: "Relational queries, JOIN operations, aggregations, and subqueries." },

  // Tools
  { name: "Git", category: "Tools", level: "Project Experience", badgeClass: "badge-cyan", desc: "Version control, feature branch workflows, staging, and merge commits." },
  { name: "GitHub", category: "Tools", level: "Project Experience", badgeClass: "badge-cyan", desc: "Remote repositories, code reviews, collaboration, and GitHub Actions." },
  { name: "VS Code", category: "Tools", level: "Project Experience", badgeClass: "badge-cyan", desc: "Primary code editor, extensions, integrated terminal, and debugging workflows." },
  { name: "Android Studio", category: "Tools", level: "Familiar", badgeClass: "badge-outline", desc: "Android SDK tooling and mobile application emulators." },
  { name: "Figma", category: "Tools", level: "Familiar", badgeClass: "badge-outline", desc: "Interface wireframing, UI prototyping, and responsive layout inspection." }
];

export const projectsData = [
  {
    id: "candidate-ranking-system",
    title: "Candidate Ranking System",
    tagline: "Automated candidate intake, multi-criteria metric scoring, and transparent ranking pipeline.",
    projectType: "Full-Stack System • Decision & Scoring Logic",
    maturity: "Prototype / Academic Capstone",
    maturityClass: "badge-cyan",
    category: ["Full Stack", "Backend", "Database", "Web"],
    technologies: ["JavaScript", "Node.js", "Express.js", "REST APIs", "Data Processing", "Evaluation Algorithm", "SQL / Database"],
    github: "https://github.com/kala3013",
    architecturePreview: "Candidate Intake ──► Normalization ──► Scoring Engine ──► Weighted Ranking ──► Leaderboard",
    keyFeatures: [
      "Standardized candidate profile intake parsing academic, assessment, and skill vectors",
      "Configurable multi-factor evaluation engine applying objective weighting formulas",
      "Deterministic candidate ranking calculation generating ordered shortlists",
      "Transparent metric breakdown explaining composite ranking placement"
    ],
    caseStudy: {
      overview: "An automated candidate management and ranking system engineered to alleviate recruitment bottlenecks. The application normalizes candidate assessment scores, applies customizable multi-criteria weightings, and outputs an auditable ranked candidate leaderboard.",
      problem: "Campus placement cells and technical recruitment coordinators process hundreds of candidate applications manually. Traditional spreadsheet-based screening causes evaluation fatigue, inconsistent scoring criteria, and delayed shortlist communication.",
      solution: "Engineered a candidate evaluation pipeline comprising a profile intake controller, data normalization routines, and a multi-factor ranking algorithm that calculates transparent composite scores against established competency benchmarks.",
      workflow: "Candidate Intake ──► Data Processing & Normalization ──► Criteria Scoring ──► Multi-Factor Ranking ──► Ranked Candidate Dashboard",
      architecture: `┌──────────────────────────────────────────────┐
│ CANDIDATE INTAKE & DASHBOARD (Client Tier)   │
│ - Candidate Profile Form & Batch Data Parser │
│ - Interactive Ranked Leaderboard UI          │
└──────────────────────┬───────────────────────┘
                       │ JSON REST API
                       ▼
┌──────────────────────────────────────────────┐
│ API GATEWAY & CONTROLLER (Node.js / Express) │
│ - Request Validation & Input Sanitization    │
│ - Candidate Profile Extraction Router        │
└──────────────────────┬───────────────────────┘
                       │ Normalized Candidate Vector
                       ▼
┌──────────────────────────────────────────────┐
│ RANKING & EVALUATION ENGINE                  │
│ - Technical Assessment Weight (40%)          │
│ - Skills Compatibility Weight (35%)          │
│ - Academic / Problem Solving Weight (25%)    │
│ - Composite Score & Positional Sorting       │
└──────────────────────┬───────────────────────┘
                       │ Ranked Candidate Array
                       ▼
┌──────────────────────────────────────────────┐
│ PERSISTENCE LAYER (Relational Database)      │
│ - Candidates Table & Evaluation Log Records  │
└──────────────────────────────────────────────┘`,
      technologies: ["JavaScript (ES6+)", "Node.js", "Express.js", "REST APIs", "Data Processing", "Relational Database / SQL"],
      candidateRankingVisualization: [
        { rank: 1, id: "Ref #A-101", compositeScore: 92, skillsMatch: 95, expFit: 90, assessmentScore: 91, status: "Top Shortlist" },
        { rank: 2, id: "Ref #B-204", compositeScore: 87, skillsMatch: 88, expFit: 85, assessmentScore: 88, status: "Recommended" },
        { rank: 3, id: "Ref #C-309", compositeScore: 81, skillsMatch: 82, expFit: 80, assessmentScore: 81, status: "Qualified" },
        { rank: 4, id: "Ref #D-412", compositeScore: 76, skillsMatch: 75, expFit: 78, assessmentScore: 75, status: "Under Review" }
      ],
      codeSnippet: `// Candidate multi-factor weighted scoring and ranking algorithm
export function evaluateAndRankCandidates(candidates, weights = { technical: 0.40, skills: 0.35, academic: 0.25 }) {
  return candidates
    .map(candidate => {
      // 1. Normalize individual factor scores to a standardized 0-100 baseline
      const normTech = Math.min(Math.max(candidate.assessmentScore, 0), 100);
      const normSkills = Math.min(Math.max(candidate.skillsMatchScore, 0), 100);
      const normAcad = Math.min(Math.max(candidate.academicScore, 0), 100);

      // 2. Compute composite weighted score
      const compositeScore = Number(
        ((normTech * weights.technical) + 
         (normSkills * weights.skills) + 
         (normAcad * weights.academic)).toFixed(2)
      );

      return {
        ...candidate,
        compositeScore,
        breakdown: { normTech, normSkills, normAcad }
      };
    })
    // 3. Sort descending by composite score (with technical assessment tie-breaker)
    .sort((a, b) => b.compositeScore - a.compositeScore || b.breakdown.normTech - a.breakdown.normTech)
    // 4. Assign deterministic positional ranking
    .map((candidate, index) => ({
      rank: index + 1,
      ...candidate
    }));
}`,
      features: [
        "Candidate Intake: Standardized form processing for student profiles and assessment marks.",
        "Data Normalization: Maps disparate assessment scores into a uniform 0-100% baseline.",
        "Multi-Factor Scoring: Evaluates candidate profiles across technical, skills, and academic dimensions.",
        "Transparent Shortlist: Generates an auditable ranked table with score breakdown per candidate."
      ],
      development: "Engineered candidate evaluation algorithms, authored schema validation checks for profile records, and built sorting routines with deterministic tie-breaking logic.",
      challenges: "Designing an objective normalization model that accounts for disparate input scales without skewing composite rankings.",
      learning: "Gained practical mastery in algorithmic data processing, score normalization mathematics, REST API design, and building transparent, auditable decision pipelines.",
      futureImprovements: [
        "Resume document automatic text extraction using NLP parsing.",
        "Automated email notification triggers to inform candidates of shortlist status."
      ]
    }
  },
  {
    id: "code-analyzer",
    title: "AI Code Analyzer",
    tagline: "AI-assisted source-code analysis and productivity assistance using CrewAI.",
    projectType: "AI Agent Orchestration • Developer Productivity",
    maturity: "Prototype / Exploring",
    maturityClass: "badge-indigo",
    category: ["AI", "Backend"],
    technologies: ["Python", "CrewAI", "LLM Concepts", "AI Agents", "Code Analysis"],
    github: "https://github.com/kala3013/crewai-code-anayzer",
    architecturePreview: "Source Code ──► CrewAI Agents ──► Defect Analysis ──► AI Suggestions",
    keyFeatures: [
      "Multi-agent collaborative source code static inspection pipeline",
      "Specialized agent roles for syntax examination and defect identification",
      "AI-assisted code recommendations to enhance developer productivity",
      "Grounded prompt strategies avoiding hallucinated libraries"
    ],
    caseStudy: {
      overview: "An experimental AI-assisted developer tool designed to analyze source code snippets and provide contextual explanations and suggestions using autonomous multi-agent pipelines.",
      problem: "Software developers frequently spend significant time identifying subtle syntax oversights and code anti-patterns that standard linters flag without explanatory context.",
      solution: "Leveraged multi-agent orchestration with CrewAI in Python, partitioning static inspection into specialized agent roles: an Auditor agent inspecting structure and a Specialist formulating contextual guidance.",
      workflow: "Source Code File ──► Code Auditor Agent ──► Defect Diagnosis Agent ──► Suggestion Agent ──► Structured Analysis Report",
      architecture: `┌──────────────────────────────────────────────┐
│ INPUT: Python / Target Source Files          │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ CREWAI MULTI-AGENT WORKFLOW                  │
│ 1. Code Auditor Agent (Syntax & Flow)        │
│ 2. Defect Diagnosis Agent (Contextual Logic) │
│ 3. Suggestion Agent (Actionable Advice)      │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ OUTPUT: Structured Defect Report & Hints     │
└──────────────────────────────────────────────┘`,
      technologies: ["Python", "CrewAI", "LLM API Interfaces", "AST Parsing Concepts"],
      codeSnippet: `# CrewAI multi-agent source code analysis workflow
from crewai import Agent, Task, Crew, Process

# 1. Specialized Code Auditor Agent
auditor = Agent(
    role="Senior Code Auditor",
    goal="Identify AST syntax errors, logic anti-patterns, and code smells",
    backstory="Static analysis engineer focused on code readability and bug prevention.",
    verbose=True
)

# 2. Defect Diagnostics Task
audit_task = Task(
    description="Inspect target source snippet for syntax hazards and logical anti-patterns.",
    expected_output="Structured JSON report of identified issues with line numbers.",
    agent=auditor
)

# 3. Multi-Agent Crew
crew = Crew(
    agents=[auditor],
    tasks=[audit_task],
    process=Process.sequential
)`,
      features: [
        "Source-Code Analysis: Scans codebase snippets for potential runtime hazards.",
        "Error Detection: Flags syntax violations and algorithmic anti-patterns.",
        "AI-Assisted Insights: Formulates clear explanations and actionable developer hints.",
        "Developer Productivity: Designed to speed up debugging during early development."
      ],
      development: "Configured CrewAI agent tasks and agent roles in Python, implemented file input handlers, and structured strict prompt constraints to prevent unsupported assumptions.",
      challenges: "Ensuring agents strictly adhere to verified syntax rules rather than speculating about external modules.",
      learning: "Gained practical knowledge of agentic orchestration, sequential task pipelines, role prompt engineering, and LLM developer integration.",
      futureImprovements: [
        "Automated unit-test execution against code snippets to verify suggestions programmatically.",
        "VS Code in-editor extension interface for seamless local IDE integration."
      ]
    }
  },
  {
    id: "thamarai-hospital",
    title: "Thamarai Fertility Hospital Management System",
    tagline: "Multi-branch healthcare web application with JWT role-based access.",
    projectType: "Healthcare Backend & DB • Multi-Branch Architecture",
    maturity: "Prototype / Academic Project",
    maturityClass: "badge-amber",
    category: ["Full Stack", "Backend", "Database", "Web"],
    technologies: ["Node.js", "Express.js", "MySQL", "JWT", "REST APIs"],
    github: "https://github.com/kala3013",
    architecturePreview: "Client ──► JWT Auth Guard ──► Multi-Branch Router ──► MySQL",
    keyFeatures: [
      "Role-based authentication & authorization using JSON Web Tokens (JWT)",
      "Multi-branch conceptual architecture (Coimbatore, Chennai, Salem, Tiruppur, Pollachi)",
      "Normalized relational schema for patients, appointment schedules, and staff accounts",
      "Strict data isolation and centralized administrative query management"
    ],
    caseStudy: {
      overview: "A full-stack healthcare web application prototype featuring backend REST APIs, secure JWT authentication, and relational database management across multiple regional clinic branches.",
      problem: "Coordinating patient records and appointment schedules across multiple regional clinics requires reliable authentication, role enforcement, and centralized database partitioning.",
      solution: "Engineered a secure Node/Express backend backed by a normalized MySQL relational database, enforcing branch-level query filtering and signed JWT token verification.",
      workflow: "Client Request ──► JWT Authentication Middleware ──► Branch Role Validation ──► Express Route Controller ──► MySQL Query Execution",
      architecture: `┌──────────────────────────────────────────────┐
│ CLIENT APPLICATIONS / FRONTEND CONSUMERS     │
└──────────────────────┬───────────────────────┘
                       │ Bearer JWT Authorization
                       ▼
┌──────────────────────────────────────────────┐
│ AUTH & ROUTING MIDDLEWARE                    │
│ - JWT Token Verification                     │
│ - Role Guard (Admin, Branch Staff)           │
└──────────────────────┬───────────────────────┘
                       │ Authorized Dispatch
                       ▼
┌──────────────────────────────────────────────┐
│ MULTI-BRANCH CONTROLLERS                     │
│ [Coimbatore] [Chennai] [Salem] [Tiruppur] [Pollachi]
└──────────────────────┬───────────────────────┘
                       │ Parameterized SQL Queries
                       ▼
┌──────────────────────────────────────────────┐
│ RELATIONAL DATABASE (MySQL)                  │
│ - Patients Table                             │
│ - Appointments Table (Foreign Keys)          │
│ - Branches & User Credentials (Salted Hashes)│
└──────────────────────────────────────────────┘`,
      technologies: ["Node.js", "Express.js", "MySQL", "JWT (JSON Web Tokens)", "Bcrypt Password Hashing"],
      codeSnippet: `// JWT Role Guard middleware with regional branch-level data isolation
export const verifyBranchAccess = (requiredRole) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: 'Authentication token required' });
    }

    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Role enforcement: Admin has global visibility; Branch staff restricted to local clinic
      if (requiredRole && decoded.role !== requiredRole && decoded.role !== 'SUPERADMIN') {
        return res.status(403).json({ success: false, error: 'Access denied: Insufficient privileges' });
      }

      req.user = decoded; // Contains user ID, role, and branchCode ('CBE', 'CHN', 'SLM', etc.)
      next();
    } catch (err) {
      return res.status(403).json({ success: false, error: 'Invalid or expired session token' });
    }
  };
};`,
      features: [
        "Authentication: Secure user login issuing tamper-proof signed JWTs.",
        "Authorization: Role-based endpoints ensuring branch staff only access their regional clinic records.",
        "Multi-Branch Partitioning: Configured routing for Coimbatore, Chennai, Salem, Tiruppur, and Pollachi branches.",
        "User Management: Administrative provisioning of staff accounts and access revocation."
      ],
      development: "Architected relational MySQL table schema with foreign key constraints, authored Express middleware for JWT validation, and implemented parameterized CRUD queries.",
      challenges: "Managing branch-specific data isolation within a single unified database schema while maintaining administrative cross-branch views.",
      learning: "Mastered JWT lifecycle management, HTTP Authorization header patterns, relational foreign keys, and SQL injection prevention using parameterized statements.",
      futureImprovements: [
        "Automated multi-factor authentication (MFA) for administrative accounts.",
        "Read-replica database routing for high-volume appointment queries."
      ]
    }
  },
  {
    id: "certificate-generator",
    title: "Automated Certificate Generation System",
    tagline: "Relational database application for academic certificate tracking and dynamic issuance.",
    projectType: "Full-Stack Web App • Database & Form Processing",
    maturity: "Completed Academic Project",
    maturityClass: "badge-emerald",
    category: ["Full Stack", "Backend", "Database", "Web"],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/kala3013/Exam-Cell-Certificate-Issue-Register",
    architecturePreview: "Intake Form ──► Server Validation ──► MySQL Ledger ──► Dynamic Generation",
    keyFeatures: [
      "Dynamic certificate record creation with unique tracking IDs",
      "Normalized relational schema in MySQL with student verification mappings",
      "Server-side form sanitization and input validation preventing duplications",
      "Administrative interface for certificate status verification and searching"
    ],
    caseStudy: {
      overview: "An institutional web application built with PHP and MySQL designed to streamline certificate issuance for examination cells, ensuring tamper-proof record maintenance and automated tracking.",
      problem: "Academic examination cells often rely on physical ledgers or fragmented spreadsheets to track certificate issuances, causing administrative delays and risks of duplicate issue numbers.",
      solution: "Engineered a normalized relational database in MySQL coupled with PHP form controllers that validate student registration numbers, prevent duplicate requests, and automate certificate record generation.",
      workflow: "Student Data Input ──► Server Validation & Sanitization ──► Relational MySQL Insertion ──► Certificate Document Generation",
      architecture: `┌──────────────────────────────────────────────┐
│ CLIENT INTAKE & ADMIN DASHBOARD              │
│ - HTML5 / CSS3 Responsive Form Interface     │
│ - Certificate Record Search & Audit Views    │
└──────────────────────┬───────────────────────┘
                       │ HTTP POST / Form Submissions
                       ▼
┌──────────────────────────────────────────────┐
│ SERVER CONTROLLER (PHP)                      │
│ - Input Sanitization & Validation (filter_var)
│ - Unique Certificate ID Generation           │
└──────────────────────┬───────────────────────┘
                       │ Parameterized SQL Execution
                       ▼
┌──────────────────────────────────────────────┐
│ PERSISTENCE TIER (MySQL)                     │
│ - Students Table (Registration Numbers)      │
│ - Certificates Table (Issue Dates, Signatures│
└──────────────────────────────────────────────┘`,
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      codeSnippet: `<?php
// Parameterized SQL query ensuring atomic certificate record lookup
$certNumber = filter_input(INPUT_POST, 'certificate_number', FILTER_SANITIZE_SPECIAL_CHARS);
$studentId  = filter_input(INPUT_POST, 'student_id', FILTER_VALIDATE_INT);

if (!$certNumber || !$studentId) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Valid Certificate Number and Student ID required']);
    exit;
}

$stmt = $conn->prepare("
    SELECT c.certificate_number, c.issue_date, s.student_name, s.department
    FROM certificates c
    INNER JOIN students s ON c.student_id = s.id
    WHERE c.certificate_number = ? AND c.student_id = ?
");
$stmt->bind_param("si", $certNumber, $studentId);
$stmt->execute();
$result = $stmt->get_result();
$record = $result->fetch_assoc();
?>`,
      features: [
        "Certificate Registration: Form-based intake of student registration and examination data.",
        "Dynamic Generation: Automated generation of verified certificate records with tracking IDs.",
        "Database Administration: Administrative panel to search, update, approve, and delete records.",
        "Form Handling: Robust server-side validation preventing incomplete or duplicate submissions."
      ],
      development: "Developed the end-to-end web system including relational database design, PHP CRUD script authoring, responsive form styling, and input validation routines.",
      challenges: "Designing reliable input sanitization and ensuring unique certificate numbering constraints across concurrent submissions.",
      learning: "Gained solid foundations in server-side request-response cycles, relational database integrity, session handling, and clean form processing.",
      futureImprovements: [
        "QR code generation on issued certificates for instant mobile verification.",
        "Automated student notification emails upon certificate approval."
      ]
    }
  },
  {
    id: "pediatric-hospital",
    title: "Pediatric Hospital Management System",
    tagline: "Modern healthcare web platform featuring 14 medical departments, doctor profiles, and appointment scheduling.",
    projectType: "Healthcare Frontend Architecture • UI/UX Design",
    maturity: "Frontend Prototype / In Refinement",
    maturityClass: "badge-cyan",
    category: ["Web"],
    technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Router", "HTML5", "CSS3"],
    github: "https://github.com/kala3013/Pediatric-Hospital-Website",
    architecturePreview: "React 18 SPA ──► Router 6 ──► 14 Departments ──► Doctor Profile ──► Appointment Intake",
    keyFeatures: [
      "14 dedicated pediatric medical department modules with symptom guides and service breakdowns",
      "Comprehensive doctor directory with specialty certifications, OPD timings, and profiles",
      "Multi-step appointment booking workflow with client-side validation and feedback",
      "Accessible healthcare user interface with 24/7 emergency sticky quick-dial and responsive layouts"
    ],
    caseStudy: {
      overview: "A modern healthcare single-page application built with React 18, Vite, and Tailwind CSS. The platform simplifies hospital discovery by structuring 14 medical departments, doctor credentials, and an appointment booking intake workflow.",
      problem: "Patients and parents seeking pediatric care struggle to navigate complex hospital services, view doctor availability, or book consultations on outdated, non-responsive hospital web pages.",
      solution: "Engineered a modular single-page healthcare web platform utilizing React Router 6 and Tailwind CSS, providing sub-second page transitions between 14 specialized departments and an accessible consultation booking interface.",
      workflow: "User Discovery ──► Department & Doctor Profile Inspection ──► Appointment Form Intake ──► Client Validation ──► Booking Confirmation View",
      architecture: `┌──────────────────────────────────────────────┐
│ BROWSER CLIENT (React 18 SPA + Vite)         │
│ - BrowserRouter (React Router 6)             │
│ - Global Navigation & Emergency Sticky Bar   │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ MODULAR ROUTE VIEWS                          │
│ ├── Home & Facilities Overview               │
│ ├── 14 Department Discovery (/departments)   │
│ ├── Doctors & Specialist Directory (/doctors)│
│ └── Appointment Booking Intake (/book)       │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ UI & INTERACTION LAYER                       │
│ - Tailwind CSS Utility Design System         │
│ - Framer Motion Transition Animations        │
│ - Form Validation & Accessibility Hooks      │
└──────────────────────────────────────────────┘`,
      technologies: ["React.js (React 18)", "Vite", "Tailwind CSS", "Framer Motion", "React Router 6", "JavaScript"],
      codeSnippet: `// Sample React Appointment Booking Controller with Department Validation
import React, { useState } from 'react';

export function AppointmentBookingForm({ availableDepartments = [] }) {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    department: '',
    preferredDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.department) {
      alert('Please select a department and provide contact details.');
      return;
    }
    // Dispatches booking request to notification / backend handler
    console.log('[Appointment Request Dispatched]:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-slate-900 rounded-xl space-y-4">
      <input
        type="text"
        placeholder="Parent / Guardian Name"
        value={formData.parentName}
        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
        required
        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
      />
      <select
        value={formData.department}
        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        required
        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
      >
        <option value="">Select Medical Department</option>
        {availableDepartments.map((dept) => (
          <option key={dept.slug} value={dept.name}>{dept.name}</option>
        ))}
      </select>
      <button type="submit" className="w-full py-2 bg-sky-500 hover:bg-sky-600 font-bold rounded-lg text-white">
        Request Appointment ▹
      </button>
    </form>
  );
}`,
      features: [
        "Department Discovery: 14 specialty department profiles with structured overview data.",
        "Doctor Profiles: Comprehensive credentials, availability schedules, and booking hooks.",
        "Appointment Flow: Form intake validating patient contacts and consultation preferences.",
        "Responsive Design: Fluid navigation across desktop, tablet, and mobile breakpoints."
      ],
      development: "Structured React components using Vite, implemented React Router 6 dynamic route parameters, and built Tailwind CSS responsive cards and accessible forms.",
      challenges: "Designing accessible healthcare typography with high contrast while maintaining an engaging, friendly UI suitable for pediatric care.",
      learning: "Advanced component composition in React 18, declarative routing with React Router, and utility-first styling with Tailwind CSS.",
      futureImprovements: [
        "Backend REST API integration with Supabase or Node.js for persistent appointment storage.",
        "Patient SMS/WhatsApp confirmation notification service."
      ]
    }
  },
  {
    id: "research-answer-bot",
    title: "Research Answer Bot",
    tagline: "Retrieval-Augmented Generation (RAG) system for querying research papers using LangChain and vector stores.",
    projectType: "Generative AI • RAG Architecture • Vector Search",
    maturity: "Functional RAG Prototype",
    maturityClass: "badge-indigo",
    category: ["AI", "Backend", "Database", "Web"],
    technologies: ["Python", "FastAPI", "Streamlit", "LangChain", "ChromaDB", "FAISS", "Sentence-Transformers"],
    github: "https://github.com/kala3013/Research-Answer-Bot",
    architecturePreview: "PDF Upload ──► LangChain Chunking ──► ChromaDB ──► Semantic Retrieval ──► Grounded Answer",
    keyFeatures: [
      "Academic PDF research paper ingestion with recursive chunking and sliding window overlap",
      "Dense semantic vector embeddings generated locally using Sentence-Transformers",
      "Sub-second similarity search across ChromaDB and FAISS vector indexing",
      "Decoupled FastAPI backend service providing REST endpoints for Streamlit frontend",
      "Strictly bounded response generation citing specific sections with zero hallucination"
    ],
    caseStudy: {
      overview: "A Retrieval-Augmented Generation (RAG) AI application that allows researchers and engineers to upload complex academic papers and pose technical queries, generating accurate responses anchored strictly in the source text.",
      problem: "Academic research papers are dense and often exceed 30+ pages, making manual information extraction slow. Standard LLMs frequently hallucinate facts or conflate experimental figures when asked about specific papers.",
      solution: "Engineered a RAG pipeline utilizing LangChain document loaders, chunking strategies, local embedding generation via Sentence-Transformers, and top-K similarity search in ChromaDB to ground the LLM with exact paper excerpts.",
      workflow: "Research PDF Upload ──► Text Extraction & Chunking ──► Vector Embedding Generation ──► Top-K Similarity Search ──► Grounded LLM Response with Citations",
      architecture: `┌──────────────────────────────────────────────┐
│ USER INTERFACE (Streamlit Frontend)          │
│ - Research Paper PDF Upload                  │
│ - Query Input & Source Citation Display      │
└──────────────────────┬───────────────────────┘
                       │ HTTP Multipart / REST
                       ▼
┌──────────────────────────────────────────────┐
│ FASTAPI BACKEND SERVER                       │
│ - /upload-paper: Document Ingestion Router   │
│ - /query: Semantic Query Dispatcher          │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ INGESTION & VECTOR RETRIEVAL PIPELINE        │
│ 1. RecursiveCharacterTextSplitter (Chunks)   │
│ 2. Sentence-Transformers (Embeddings)        │
│ 3. ChromaDB / FAISS (Vector Index)           │
│ 4. Cosine Similarity Top-K Retrieval         │
└──────────────────────┬───────────────────────┘
                       │ Retrieved Context Chunks
                       ▼
┌──────────────────────────────────────────────┐
│ LANGCHAIN RAG GENERATION                     │
│ - Grounded Prompt Template (Zero Hallucinate)│
│ - LLM Contextual Synthesis & Citation Output │
└──────────────────────────────────────────────┘`,
      technologies: ["Python", "FastAPI", "Streamlit", "LangChain", "ChromaDB", "FAISS", "Sentence-Transformers"],
      codeSnippet: `# FastAPI Retrieval-Augmented Generation query endpoint
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

app = FastAPI(title="Research Answer Bot API")
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vector_db = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)

class QueryRequest(BaseModel):
    query: str
    top_k: int = 4

@app.post("/api/query")
async def query_research_paper(req: QueryRequest):
    if not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")
    
    # 1. Retrieve top-K relevant text chunks via cosine similarity
    docs = vector_db.similarity_search(req.query, k=req.top_k)
    context_chunks = [doc.page_content for doc in docs]
    
    return {
        "status": "success",
        "retrieved_count": len(context_chunks),
        "context": context_chunks
    }`,
      features: [
        "Document Ingestion: Automated parsing and chunking of complex academic PDFs.",
        "Vector Storage: High-performance semantic indexing with ChromaDB and FAISS.",
        "Decoupled Architecture: Independent FastAPI service and interactive Streamlit UI.",
        "Grounded Q&A: Strictly bounds answers to verified paper content with zero hallucination."
      ],
      development: "Configured FastAPI async endpoints, implemented LangChain text splitters with optimal chunk sizes, and built the Streamlit interactive dashboard.",
      challenges: "Optimizing chunk size and overlap to preserve academic context across mathematical equations and citation footnotes.",
      learning: "Gained deep, hands-on understanding of vector databases, embedding spaces, cosine similarity search, and RAG architectural patterns.",
      futureImprovements: [
        "Multi-document comparative analysis across multiple research papers simultaneously.",
        "Interactive PDF viewer highlighting retrieved citation bounding boxes."
      ]
    }
  }
];

export const certificationsData = [
  {
    name: "Google Cloud Cybersecurity Certificate",
    issuer: "Google Cloud",
    badgeClass: "badge-cyan",
    icon: "🛡️",
    desc: "Foundations of cloud security, threat detection, network protection, and security posture management."
  },
  {
    name: "Google Cloud Data Analytics Certificate",
    issuer: "Google Cloud",
    badgeClass: "badge-cyan",
    icon: "📊",
    desc: "Cloud data processing, analytical query modeling, data pipelines, and reporting architectures."
  },
  {
    name: "IBM Generative AI in Action",
    issuer: "IBM",
    badgeClass: "badge-indigo",
    icon: "🤖",
    desc: "Practical generative AI model integration, prompt architectures, and enterprise AI workflows."
  },
  {
    name: "Celonis AI Foundations",
    issuer: "Celonis",
    badgeClass: "badge-indigo",
    icon: "⚡",
    desc: "Process intelligence, algorithmic optimization, and data-driven workflow discovery."
  },
  {
    name: "UiPath Agentic Automation Developer Associate Training",
    issuer: "UiPath",
    badgeClass: "badge-purple",
    icon: "⚙️",
    desc: "Autonomous agentic automation, robotic process triggers, and enterprise integration patterns."
  },
  {
    name: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    badgeClass: "badge-amber",
    icon: "☁️",
    desc: "OCI cloud architecture, computing instances, virtual cloud networks (VCN), and storage tiers."
  },
  {
    name: "AWS Cloud Workshop",
    issuer: "AWS",
    badgeClass: "badge-amber",
    icon: "🏗️",
    desc: "Practical hands-on exploration of AWS core services, EC2 compute, S3 storage, and IAM roles."
  },
  {
    name: "Applied GenAI Workshop",
    issuer: "Applied GenAI",
    badgeClass: "badge-indigo",
    icon: "🧠",
    desc: "Hands-on application of Large Language Models, contextual reasoning, and AI-assisted tooling."
  }
];

export const internshipData = {
  company: "Sangam Soft Solutions",
  location: "Coimbatore, Tamil Nadu",
  role: "Full Stack Development Intern",
  duration: "June 2026",
  project: "Code Infinite Website Redesign",
  technologies: ["React", "Node.js", "Git", "VS Code"],
  overview: "Worked on practical web development and interface redesign activities for the Code Infinite website.",
  modules: [
    { name: "Home Section", desc: "Redesigned landing hero presentation and responsive layout." },
    { name: "About Section", desc: "Structured modular company profile and informational overview." },
    { name: "Training & Courses", desc: "Developed structured catalog layouts for educational programs." },
    { name: "Services", desc: "Created responsive service cards with clear visual hierarchy." },
    { name: "Forms", desc: "Implemented accessible form validation for inquiry submissions." },
    { name: "Gallery", desc: "Engineered responsive media display layouts." },
    { name: "Blog-Related Sections", desc: "Structured readable article feeds and content views." },
    { name: "Dark / Light Theme", desc: "Implemented user-friendly theme switching functionality." }
  ],
  workflow: "Collaborated using standard Git feature branches, pull requests, and peer code reviews inside VS Code."
};

export const careerTimeline = [
  {
    year: "2024",
    title: "Diploma with Distinction (93%) & Daimler Award",
    detail: "Completed Diploma in Computer Engineering at Konghu Velalar Polytechnic College with 93% distinction. Won Daimler Best for Innovation award for creative technical problem-solving."
  },
  {
    year: "2024–2025",
    title: "B.E. CSE Lateral Entry & Smart India Hackathon",
    detail: "Admitted via lateral entry to Anna University Regional Campus, Coimbatore. Maintained 8.01 CGPA. Competed and advanced to Round 2 of Smart India Hackathon 2025."
  },
  {
    year: "2026",
    title: "Full Stack Internship & AI / Cloud Projects",
    detail: "Full Stack Development Intern at Sangam Soft Solutions (Code Infinite Redesign). Built AI Code Analyzer (CrewAI) and Thamarai Hospital Management system. Competed in India.RUN Hackathon."
  },
  {
    year: "2027",
    title: "B.E. Graduation & Software Engineering",
    detail: "Graduating with B.E. in Computer Science and Engineering from Anna University Regional Campus, prepared for professional Full Stack / Software Developer roles."
  }
];

export const achievementsData = [
  {
    title: "Daimler — Best for Innovation",
    year: "2024",
    description: "Awarded Best for Innovation by Daimler for creative technical problem-solving and software application prototype development."
  },
  {
    title: "Smart India Hackathon (SIH) — Round 2",
    year: "2025",
    description: "Successfully advanced to Round 2 of India's prestigious national hackathon, tackling complex technological problem statements under intensive timelines."
  },
  {
    title: "India.RUN Hackathon",
    year: "2026",
    description: "Participated and competed in nationwide technology hackathon, developing collaborative software solutions within demanding team constraints."
  }
];

export const leadershipData = [
  {
    title: "CSE Placement Coordinator",
    role: "Departmental Placement Leadership",
    desc: "Liaising with corporate recruiters, coordinating recruitment drives, and preparing student peers for technical recruitment pipelines."
  },
  {
    title: "Class Placement Representative",
    role: "Student Representation & Communication",
    desc: "Acting as the primary bridge between the department placement cell and classmates, managing vital scheduling and career announcements."
  },
  {
    title: "CSE Committee Member",
    role: "Event Management & Department Support",
    desc: "Actively organizing technical symposiums, coding workshops, and department initiatives at Anna University Regional Campus."
  },
  {
    title: "Placement Training Coordination",
    role: "Peer Mentorship & Skill Development",
    desc: "Assisting classmates with aptitude practice, technical interview preparation, and coding problem-solving sessions."
  },
  {
    title: "Applied GenAI Workshop (Anna Univ × Kissflow)",
    role: "Technical Workshop Collaboration",
    desc: "Practical hands-on exploration of Large Language Models, prompt architectures, and enterprise AI workflows."
  }
];

export const educationData = [
  {
    degree: "B.E. Computer Science and Engineering — Lateral Entry",
    institution: "Anna University Regional Campus, Coimbatore",
    duration: "2024 – 2027",
    score: "CGPA: 8.01 / 10",
    scoreLabel: "Current CGPA",
    status: "In Progress"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Konghu Velalar Polytechnic College",
    duration: "Completed in 2024",
    score: "93%",
    scoreLabel: "Final Percentage",
    status: "Completed with Distinction"
  }
];

export const aboutNarrative = [
  {
    step: "01",
    action: "I BUILD",
    title: "Practical Full-Stack Applications",
    desc: "I focus on engineering software that addresses real workflows: responsive React user interfaces, robust Node.js and Express REST services, and normalized relational and document databases."
  },
  {
    step: "02",
    action: "I LEARN",
    title: "Continuous Technology Absorption",
    desc: "From completing my Diploma with 93% distinction to maintaining an 8.01 CGPA at Anna University, I cultivate consistent academic and technical discipline."
  },
  {
    step: "03",
    action: "I EXPERIMENT",
    title: "AI Agents & Cloud Architecture",
    desc: "I explore autonomous AI agentic workflows with CrewAI in Python, experiment with Docker containerization, and study cloud infrastructure across Google Cloud, AWS, and OCI."
  },
  {
    step: "04",
    action: "I COLLABORATE",
    title: "Industry Internship & Team Leadership",
    desc: "During my Full Stack Internship at Sangam Soft Solutions, I contributed to the Code Infinite website redesign using Git branch workflows. As Placement Coordinator, I coordinate campus drives and mentor peers."
  },
  {
    step: "05",
    action: "I IMPROVE",
    title: "Code Quality & Engineering Mindset",
    desc: "Building, benchmarking, testing, and refining. Every project is an opportunity to write cleaner, more resilient, and more maintainable software."
  }
];

export const personalStrengths = [
  { name: "Problem Solving", icon: "🧩", desc: "Decomposing complex engineering challenges into clean, structured components." },
  { name: "Quick Learning", icon: "⚡", desc: "Rapidly assimilating new frameworks, language paradigms, and developer tools." },
  { name: "Teamwork", icon: "🤝", desc: "Collaborating transparently with fellow engineers using Git branches and clear communication." },
  { name: "Leadership", icon: "🧭", desc: "Guiding classmates as Placement Coordinator and organizing technical initiatives." },
  { name: "Communication", icon: "🎙️", desc: "Articulating ideas clearly through technical documentation and presentation skills." },
  { name: "Adaptability", icon: "🔄", desc: "Thriving across changing priorities, hackathon constraints, and evolving tech stacks." },
  { name: "Continuous Learning", icon: "📚", desc: "Proactively exploring AI agents, cloud containerization, and modern architecture." }
];

export const portfolioTechStackData = {
  positioning: "Premium personal portfolio development — combining strong visual design, immersive 3D presentation, smooth motion, responsive UX, and modern frontend engineering to create a memorable digital first impression.",
  pillars: [
    {
      id: "frontend",
      category: "Frontend Development",
      icon: "⚛️",
      tech: "React • JavaScript / TypeScript • Tailwind CSS • HTML5 & CSS3",
      badgeClass: "badge-cyan",
      items: [
        "Component-based UI architecture and interactive portfolio sections.",
        "Fast, consistent, responsive UI development and design-system styling.",
        "Application logic, interactions, and maintainable frontend structure.",
        "Semantic structure, responsive layouts, and polished visual styling."
      ]
    },
    {
      id: "motion",
      category: "Motion & Interaction",
      icon: "🎬",
      tech: "GSAP • Scroll-Driven Animation • Micro-Interactions",
      badgeClass: "badge-emerald",
      items: [
        "Smooth, cinematic scroll animations, transitions, and interactive motion.",
        "Subtle motion details that make the interface feel refined and responsive.",
        "Interactive storytelling that responds naturally to user scrolling."
      ]
    },
    {
      id: "immersive-3d",
      category: "3D & Immersive Design",
      icon: "🌐",
      tech: "3D Visual Design • 360° Interactive Presentation • Depth & Perspective",
      badgeClass: "badge-indigo",
      items: [
        "Large-scale immersive hero visuals designed to create an immediate premium impression.",
        "Layered composition and perspective-based motion for a more dimensional interface.",
        "A complete rotational visual experience integrated into the hero section."
      ]
    },
    {
      id: "ui-ux",
      category: "UI / UX Design",
      icon: "🎨",
      tech: "Figma • Design Systems • Responsive UX",
      badgeClass: "badge-purple",
      items: [
        "Interface planning, visual systems, layouts, prototypes, and responsive design.",
        "Layouts and interactions optimized across desktop, tablet, and mobile.",
        "Consistent typography, spacing, components, and visual hierarchy."
      ]
    },
    {
      id: "performance",
      category: "Performance & Delivery",
      icon: "⚡",
      tech: "Modern Responsive Architecture • Asset Optimization • Production-Ready Workflow",
      badgeClass: "badge-amber",
      items: [
        "Built for fast rendering and smooth interaction across screen sizes.",
        "Structured development approach for maintainable portfolio projects.",
        "Visual assets prepared with performance and loading experience in mind."
      ]
    }
  ]
};

