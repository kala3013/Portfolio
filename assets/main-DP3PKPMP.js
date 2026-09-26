(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const Pt={name:"Kalanidhi M C",role:"Software Developer",positioning:"Computer Science Engineering student at Anna University Regional Campus, Coimbatore, with hands-on experience in Full Stack Development and multiple software/AI projects. Skilled in Java, C, React.js, Node.js, MySQL, Firebase, Git and familiar with Docker, Jenkins, CI/CD, cloud computing and Generative AI. Seeking entry-level Software Developer / Full Stack Developer opportunities.",location:"Tirupur, Tamil Nadu, India",phone:"+91 6383396164",email:"kalanidhimurugan@gmail.com",github:"https://github.com/kala3013",linkedin:"https://www.linkedin.com/in/kalanidhi-m-c-b568782a5/",resumePath:"public/resume/Kalanidhi_M_C_Resume.pdf",interests:["Artificial Intelligence","Generative AI","Cloud Computing","DevOps","Modern Software Engineering"]},Cf=[{icon:"🎓",label:"B.E. CSE (2024–2027)",detail:"Anna University Regional Campus (Lateral Entry, CGPA: 8.01)",targetSection:"#education"},{icon:"📜",label:"Diploma (93% Distinction)",detail:"Konghu Velalar Polytechnic College (2024)",targetSection:"#education"},{icon:"💻",label:"Full Stack Development",detail:"React • Node.js • Express • MySQL • MongoDB",targetSection:"#skills"},{icon:"🤖",label:"AI Exploration",detail:"CrewAI • Generative AI • LLM Concepts",targetSection:"#projects"},{icon:"☁️",label:"Cloud & DevOps",detail:"Google Cloud • AWS • OCI • Docker • CI/CD",targetSection:"#certifications"},{icon:"💼",label:"Full Stack Intern",detail:"Sangam Soft Solutions (June 2026)",targetSection:"#experience"},{icon:"🏆",label:"Hackathons & Innovation",detail:"Daimler Best for Innovation • SIH Round 2",targetSection:"#achievements"},{icon:"👨‍💼",label:"Placement Leadership",detail:"CSE Placement Coordinator & Committee",targetSection:"#leadership"}],bs=[{name:"Java",category:"Programming",level:"Project Experience",badgeClass:"badge-cyan",desc:"Core object-oriented programming, data structures, and backend logic."},{name:"JavaScript",category:"Programming",level:"Project Experience",badgeClass:"badge-cyan",desc:"Modern ES6+, asynchronous async/await, DOM APIs, and full-stack integration."},{name:"C",category:"Programming",level:"Familiar",badgeClass:"badge-outline",desc:"Procedural programming, memory addressing concepts, and academic algorithmic foundations."},{name:"React.js",category:"Frontend",level:"Project Experience",badgeClass:"badge-cyan",desc:"Component architecture, reactive state hooks, props flow, and responsive interfaces."},{name:"HTML5",category:"Frontend",level:"Project Experience",badgeClass:"badge-cyan",desc:"Semantic structural markup, accessibility (ARIA), and SEO tags."},{name:"CSS3",category:"Frontend",level:"Project Experience",badgeClass:"badge-cyan",desc:"Flexbox, CSS Grid, custom properties design tokens, and fluid media queries."},{name:"Flutter",category:"Frontend",level:"Familiar / Exploring",badgeClass:"badge-purple",desc:"Cross-platform mobile UI prototyping with widgets and stateful views."},{name:"Node.js",category:"Backend",level:"Project Experience",badgeClass:"badge-cyan",desc:"Event-driven asynchronous server-side runtime for RESTful APIs."},{name:"Express.js",category:"Backend",level:"Project Experience",badgeClass:"badge-cyan",desc:"Middleware pipelines, routing, route controllers, and request validation."},{name:"REST APIs",category:"Backend",level:"Project Experience",badgeClass:"badge-cyan",desc:"HTTP methods, JSON serialization, status codes, and decoupled client consumption."},{name:"JWT",category:"Backend",level:"Project Experience",badgeClass:"badge-cyan",desc:"Stateless Bearer token issuance, signing, and role-based route guard verification."},{name:"MySQL",category:"Databases",level:"Project Experience",badgeClass:"badge-cyan",desc:"Relational database schema normalization, foreign keys, and parameterized queries."},{name:"MongoDB",category:"Databases",level:"Project Experience",badgeClass:"badge-cyan",desc:"NoSQL document collections, schema validation, and flexible indexing."},{name:"Firebase",category:"Databases",level:"Familiar",badgeClass:"badge-outline",desc:"BaaS database collections, real-time syncing, and cloud service integration."},{name:"Generative AI",category:"AI",level:"Exploring",badgeClass:"badge-indigo",desc:"Foundations of generative models, prompt engineering, and contextual reasoning."},{name:"LLM Concepts",category:"AI",level:"Exploring",badgeClass:"badge-indigo",desc:"Context windows, tokenization, embeddings, and API temperature configurations."},{name:"AI Agents",category:"AI",level:"Exploring",badgeClass:"badge-indigo",desc:"Autonomous agentic personas with defined goals, tools, and sequential workflows."},{name:"CrewAI",category:"AI",level:"Exploring",badgeClass:"badge-indigo",desc:"Multi-agent Python orchestration for collaborative static code inspection."},{name:"Google Cloud",category:"Cloud & DevOps",level:"Currently Learning",badgeClass:"badge-amber",desc:"GCP fundamental compute, cybersecurity credentials, and IAM concepts."},{name:"AWS",category:"Cloud & DevOps",level:"Currently Learning",badgeClass:"badge-amber",desc:"Core cloud architecture concepts, EC2, S3, and cloud workshop practices."},{name:"Oracle Cloud Infrastructure",category:"Cloud & DevOps",level:"Currently Learning",badgeClass:"badge-amber",desc:"OCI cloud foundations, tenancy, and basic architecture concepts."},{name:"Docker",category:"Cloud & DevOps",level:"Currently Learning",badgeClass:"badge-amber",desc:"Container images, Dockerfile configuration, container lifecycles, and isolation."},{name:"Jenkins",category:"Cloud & DevOps",level:"Currently Learning",badgeClass:"badge-amber",desc:"Automated build triggers, CI pipeline steps, and continuous delivery basics."},{name:"CI/CD",category:"Cloud & DevOps",level:"Currently Learning",badgeClass:"badge-amber",desc:"Automating testing and build workflows via GitHub Actions and pipeline stages."},{name:"Terraform",category:"Cloud & DevOps",level:"Currently Learning",badgeClass:"badge-amber",desc:"Declarative Infrastructure as Code (IaC) configuration and state management basics."},{name:"OOP",category:"Core CS",level:"Academic & Project",badgeClass:"badge-cyan",desc:"Encapsulation, inheritance, polymorphism, abstraction, and clean class design."},{name:"Data Structures",category:"Core CS",level:"Academic & Project",badgeClass:"badge-cyan",desc:"Arrays, linked lists, stacks, queues, trees, hash maps, and space-time complexity."},{name:"Algorithms",category:"Core CS",level:"Academic & Project",badgeClass:"badge-cyan",desc:"Searching, sorting, traversal, recursion, and algorithmic problem-solving."},{name:"SQL",category:"Core CS",level:"Academic & Project",badgeClass:"badge-cyan",desc:"Relational queries, JOIN operations, aggregations, and subqueries."},{name:"Git",category:"Tools",level:"Project Experience",badgeClass:"badge-cyan",desc:"Version control, feature branch workflows, staging, and merge commits."},{name:"GitHub",category:"Tools",level:"Project Experience",badgeClass:"badge-cyan",desc:"Remote repositories, code reviews, collaboration, and GitHub Actions."},{name:"VS Code",category:"Tools",level:"Project Experience",badgeClass:"badge-cyan",desc:"Primary code editor, extensions, integrated terminal, and debugging workflows."},{name:"Android Studio",category:"Tools",level:"Familiar",badgeClass:"badge-outline",desc:"Android SDK tooling and mobile application emulators."},{name:"Figma",category:"Tools",level:"Familiar",badgeClass:"badge-outline",desc:"Interface wireframing, UI prototyping, and responsive layout inspection."}],mr=[{id:"candidate-ranking-system",title:"Candidate Ranking System",tagline:"Automated candidate intake, multi-criteria metric scoring, and transparent ranking pipeline.",projectType:"Full-Stack System • Decision & Scoring Logic",maturity:"Prototype / Academic Capstone",maturityClass:"badge-cyan",category:["Full Stack","Backend","Database","Web"],technologies:["JavaScript","Node.js","Express.js","REST APIs","Data Processing","Evaluation Algorithm","SQL / Database"],github:"https://github.com/kala3013",architecturePreview:"Candidate Intake ──► Normalization ──► Scoring Engine ──► Weighted Ranking ──► Leaderboard",keyFeatures:["Standardized candidate profile intake parsing academic, assessment, and skill vectors","Configurable multi-factor evaluation engine applying objective weighting formulas","Deterministic candidate ranking calculation generating ordered shortlists","Transparent metric breakdown explaining composite ranking placement"],caseStudy:{overview:"An automated candidate management and ranking system engineered to alleviate recruitment bottlenecks. The application normalizes candidate assessment scores, applies customizable multi-criteria weightings, and outputs an auditable ranked candidate leaderboard.",problem:"Campus placement cells and technical recruitment coordinators process hundreds of candidate applications manually. Traditional spreadsheet-based screening causes evaluation fatigue, inconsistent scoring criteria, and delayed shortlist communication.",solution:"Engineered a candidate evaluation pipeline comprising a profile intake controller, data normalization routines, and a multi-factor ranking algorithm that calculates transparent composite scores against established competency benchmarks.",workflow:"Candidate Intake ──► Data Processing & Normalization ──► Criteria Scoring ──► Multi-Factor Ranking ──► Ranked Candidate Dashboard",architecture:`┌──────────────────────────────────────────────┐
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
└──────────────────────────────────────────────┘`,technologies:["JavaScript (ES6+)","Node.js","Express.js","REST APIs","Data Processing","Relational Database / SQL"],candidateRankingVisualization:[{rank:1,id:"Ref #A-101",compositeScore:92,skillsMatch:95,expFit:90,assessmentScore:91,status:"Top Shortlist"},{rank:2,id:"Ref #B-204",compositeScore:87,skillsMatch:88,expFit:85,assessmentScore:88,status:"Recommended"},{rank:3,id:"Ref #C-309",compositeScore:81,skillsMatch:82,expFit:80,assessmentScore:81,status:"Qualified"},{rank:4,id:"Ref #D-412",compositeScore:76,skillsMatch:75,expFit:78,assessmentScore:75,status:"Under Review"}],codeSnippet:`// Candidate multi-factor weighted scoring and ranking algorithm
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
}`,features:["Candidate Intake: Standardized form processing for student profiles and assessment marks.","Data Normalization: Maps disparate assessment scores into a uniform 0-100% baseline.","Multi-Factor Scoring: Evaluates candidate profiles across technical, skills, and academic dimensions.","Transparent Shortlist: Generates an auditable ranked table with score breakdown per candidate."],development:"Engineered candidate evaluation algorithms, authored schema validation checks for profile records, and built sorting routines with deterministic tie-breaking logic.",challenges:"Designing an objective normalization model that accounts for disparate input scales without skewing composite rankings.",learning:"Gained practical mastery in algorithmic data processing, score normalization mathematics, REST API design, and building transparent, auditable decision pipelines.",futureImprovements:["Resume document automatic text extraction using NLP parsing.","Automated email notification triggers to inform candidates of shortlist status."]}},{id:"code-analyzer",title:"AI Code Analyzer",tagline:"AI-assisted source-code analysis and productivity assistance using CrewAI.",projectType:"AI Agent Orchestration • Developer Productivity",maturity:"Prototype / Exploring",maturityClass:"badge-indigo",category:["AI","Backend"],technologies:["Python","CrewAI","LLM Concepts","AI Agents","Code Analysis"],github:"https://github.com/kala3013/crewai-code-anayzer",architecturePreview:"Source Code ──► CrewAI Agents ──► Defect Analysis ──► AI Suggestions",keyFeatures:["Multi-agent collaborative source code static inspection pipeline","Specialized agent roles for syntax examination and defect identification","AI-assisted code recommendations to enhance developer productivity","Grounded prompt strategies avoiding hallucinated libraries"],caseStudy:{overview:"An experimental AI-assisted developer tool designed to analyze source code snippets and provide contextual explanations and suggestions using autonomous multi-agent pipelines.",problem:"Software developers frequently spend significant time identifying subtle syntax oversights and code anti-patterns that standard linters flag without explanatory context.",solution:"Leveraged multi-agent orchestration with CrewAI in Python, partitioning static inspection into specialized agent roles: an Auditor agent inspecting structure and a Specialist formulating contextual guidance.",workflow:"Source Code File ──► Code Auditor Agent ──► Defect Diagnosis Agent ──► Suggestion Agent ──► Structured Analysis Report",architecture:`┌──────────────────────────────────────────────┐
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
└──────────────────────────────────────────────┘`,technologies:["Python","CrewAI","LLM API Interfaces","AST Parsing Concepts"],codeSnippet:`# CrewAI multi-agent source code analysis workflow
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
)`,features:["Source-Code Analysis: Scans codebase snippets for potential runtime hazards.","Error Detection: Flags syntax violations and algorithmic anti-patterns.","AI-Assisted Insights: Formulates clear explanations and actionable developer hints.","Developer Productivity: Designed to speed up debugging during early development."],development:"Configured CrewAI agent tasks and agent roles in Python, implemented file input handlers, and structured strict prompt constraints to prevent unsupported assumptions.",challenges:"Ensuring agents strictly adhere to verified syntax rules rather than speculating about external modules.",learning:"Gained practical knowledge of agentic orchestration, sequential task pipelines, role prompt engineering, and LLM developer integration.",futureImprovements:["Automated unit-test execution against code snippets to verify suggestions programmatically.","VS Code in-editor extension interface for seamless local IDE integration."]}},{id:"thamarai-hospital",title:"Thamarai Fertility Hospital Management System",tagline:"Multi-branch healthcare web application with JWT role-based access.",projectType:"Healthcare Backend & DB • Multi-Branch Architecture",maturity:"Prototype / Academic Project",maturityClass:"badge-amber",category:["Full Stack","Backend","Database","Web"],technologies:["Node.js","Express.js","MySQL","JWT","REST APIs"],github:"https://github.com/kala3013",architecturePreview:"Client ──► JWT Auth Guard ──► Multi-Branch Router ──► MySQL",keyFeatures:["Role-based authentication & authorization using JSON Web Tokens (JWT)","Multi-branch conceptual architecture (Coimbatore, Chennai, Salem, Tiruppur, Pollachi)","Normalized relational schema for patients, appointment schedules, and staff accounts","Strict data isolation and centralized administrative query management"],caseStudy:{overview:"A full-stack healthcare web application prototype featuring backend REST APIs, secure JWT authentication, and relational database management across multiple regional clinic branches.",problem:"Coordinating patient records and appointment schedules across multiple regional clinics requires reliable authentication, role enforcement, and centralized database partitioning.",solution:"Engineered a secure Node/Express backend backed by a normalized MySQL relational database, enforcing branch-level query filtering and signed JWT token verification.",workflow:"Client Request ──► JWT Authentication Middleware ──► Branch Role Validation ──► Express Route Controller ──► MySQL Query Execution",architecture:`┌──────────────────────────────────────────────┐
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
└──────────────────────────────────────────────┘`,technologies:["Node.js","Express.js","MySQL","JWT (JSON Web Tokens)","Bcrypt Password Hashing"],codeSnippet:`// JWT Role Guard middleware with regional branch-level data isolation
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
};`,features:["Authentication: Secure user login issuing tamper-proof signed JWTs.","Authorization: Role-based endpoints ensuring branch staff only access their regional clinic records.","Multi-Branch Partitioning: Configured routing for Coimbatore, Chennai, Salem, Tiruppur, and Pollachi branches.","User Management: Administrative provisioning of staff accounts and access revocation."],development:"Architected relational MySQL table schema with foreign key constraints, authored Express middleware for JWT validation, and implemented parameterized CRUD queries.",challenges:"Managing branch-specific data isolation within a single unified database schema while maintaining administrative cross-branch views.",learning:"Mastered JWT lifecycle management, HTTP Authorization header patterns, relational foreign keys, and SQL injection prevention using parameterized statements.",futureImprovements:["Automated multi-factor authentication (MFA) for administrative accounts.","Read-replica database routing for high-volume appointment queries."]}},{id:"certificate-generator",title:"Automated Certificate Generation System",tagline:"Relational database application for academic certificate tracking and dynamic issuance.",projectType:"Full-Stack Web App • Database & Form Processing",maturity:"Completed Academic Project",maturityClass:"badge-emerald",category:["Full Stack","Backend","Database","Web"],technologies:["PHP","MySQL","HTML5","CSS3","JavaScript"],github:"https://github.com/kala3013/Exam-Cell-Certificate-Issue-Register",architecturePreview:"Intake Form ──► Server Validation ──► MySQL Ledger ──► Dynamic Generation",keyFeatures:["Dynamic certificate record creation with unique tracking IDs","Normalized relational schema in MySQL with student verification mappings","Server-side form sanitization and input validation preventing duplications","Administrative interface for certificate status verification and searching"],caseStudy:{overview:"An institutional web application built with PHP and MySQL designed to streamline certificate issuance for examination cells, ensuring tamper-proof record maintenance and automated tracking.",problem:"Academic examination cells often rely on physical ledgers or fragmented spreadsheets to track certificate issuances, causing administrative delays and risks of duplicate issue numbers.",solution:"Engineered a normalized relational database in MySQL coupled with PHP form controllers that validate student registration numbers, prevent duplicate requests, and automate certificate record generation.",workflow:"Student Data Input ──► Server Validation & Sanitization ──► Relational MySQL Insertion ──► Certificate Document Generation",architecture:`┌──────────────────────────────────────────────┐
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
└──────────────────────────────────────────────┘`,technologies:["PHP","MySQL","HTML5","CSS3","JavaScript"],codeSnippet:`<?php
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
?>`,features:["Certificate Registration: Form-based intake of student registration and examination data.","Dynamic Generation: Automated generation of verified certificate records with tracking IDs.","Database Administration: Administrative panel to search, update, approve, and delete records.","Form Handling: Robust server-side validation preventing incomplete or duplicate submissions."],development:"Developed the end-to-end web system including relational database design, PHP CRUD script authoring, responsive form styling, and input validation routines.",challenges:"Designing reliable input sanitization and ensuring unique certificate numbering constraints across concurrent submissions.",learning:"Gained solid foundations in server-side request-response cycles, relational database integrity, session handling, and clean form processing.",futureImprovements:["QR code generation on issued certificates for instant mobile verification.","Automated student notification emails upon certificate approval."]}},{id:"pediatric-hospital",title:"Pediatric Hospital Management System",tagline:"Modern healthcare web platform featuring 14 medical departments, doctor profiles, and appointment scheduling.",projectType:"Healthcare Frontend Architecture • UI/UX Design",maturity:"Frontend Prototype / In Refinement",maturityClass:"badge-cyan",category:["Web"],technologies:["React.js","Vite","Tailwind CSS","Framer Motion","React Router","HTML5","CSS3"],github:"https://github.com/kala3013/Pediatric-Hospital-Website",architecturePreview:"React 18 SPA ──► Router 6 ──► 14 Departments ──► Doctor Profile ──► Appointment Intake",keyFeatures:["14 dedicated pediatric medical department modules with symptom guides and service breakdowns","Comprehensive doctor directory with specialty certifications, OPD timings, and profiles","Multi-step appointment booking workflow with client-side validation and feedback","Accessible healthcare user interface with 24/7 emergency sticky quick-dial and responsive layouts"],caseStudy:{overview:"A modern healthcare single-page application built with React 18, Vite, and Tailwind CSS. The platform simplifies hospital discovery by structuring 14 medical departments, doctor credentials, and an appointment booking intake workflow.",problem:"Patients and parents seeking pediatric care struggle to navigate complex hospital services, view doctor availability, or book consultations on outdated, non-responsive hospital web pages.",solution:"Engineered a modular single-page healthcare web platform utilizing React Router 6 and Tailwind CSS, providing sub-second page transitions between 14 specialized departments and an accessible consultation booking interface.",workflow:"User Discovery ──► Department & Doctor Profile Inspection ──► Appointment Form Intake ──► Client Validation ──► Booking Confirmation View",architecture:`┌──────────────────────────────────────────────┐
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
└──────────────────────────────────────────────┘`,technologies:["React.js (React 18)","Vite","Tailwind CSS","Framer Motion","React Router 6","JavaScript"],codeSnippet:`// Sample React Appointment Booking Controller with Department Validation
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
}`,features:["Department Discovery: 14 specialty department profiles with structured overview data.","Doctor Profiles: Comprehensive credentials, availability schedules, and booking hooks.","Appointment Flow: Form intake validating patient contacts and consultation preferences.","Responsive Design: Fluid navigation across desktop, tablet, and mobile breakpoints."],development:"Structured React components using Vite, implemented React Router 6 dynamic route parameters, and built Tailwind CSS responsive cards and accessible forms.",challenges:"Designing accessible healthcare typography with high contrast while maintaining an engaging, friendly UI suitable for pediatric care.",learning:"Advanced component composition in React 18, declarative routing with React Router, and utility-first styling with Tailwind CSS.",futureImprovements:["Backend REST API integration with Supabase or Node.js for persistent appointment storage.","Patient SMS/WhatsApp confirmation notification service."]}},{id:"research-answer-bot",title:"Research Answer Bot",tagline:"Retrieval-Augmented Generation (RAG) system for querying research papers using LangChain and vector stores.",projectType:"Generative AI • RAG Architecture • Vector Search",maturity:"Functional RAG Prototype",maturityClass:"badge-indigo",category:["AI","Backend","Database","Web"],technologies:["Python","FastAPI","Streamlit","LangChain","ChromaDB","FAISS","Sentence-Transformers"],github:"https://github.com/kala3013/Research-Answer-Bot",architecturePreview:"PDF Upload ──► LangChain Chunking ──► ChromaDB ──► Semantic Retrieval ──► Grounded Answer",keyFeatures:["Academic PDF research paper ingestion with recursive chunking and sliding window overlap","Dense semantic vector embeddings generated locally using Sentence-Transformers","Sub-second similarity search across ChromaDB and FAISS vector indexing","Decoupled FastAPI backend service providing REST endpoints for Streamlit frontend","Strictly bounded response generation citing specific sections with zero hallucination"],caseStudy:{overview:"A Retrieval-Augmented Generation (RAG) AI application that allows researchers and engineers to upload complex academic papers and pose technical queries, generating accurate responses anchored strictly in the source text.",problem:"Academic research papers are dense and often exceed 30+ pages, making manual information extraction slow. Standard LLMs frequently hallucinate facts or conflate experimental figures when asked about specific papers.",solution:"Engineered a RAG pipeline utilizing LangChain document loaders, chunking strategies, local embedding generation via Sentence-Transformers, and top-K similarity search in ChromaDB to ground the LLM with exact paper excerpts.",workflow:"Research PDF Upload ──► Text Extraction & Chunking ──► Vector Embedding Generation ──► Top-K Similarity Search ──► Grounded LLM Response with Citations",architecture:`┌──────────────────────────────────────────────┐
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
└──────────────────────────────────────────────┘`,technologies:["Python","FastAPI","Streamlit","LangChain","ChromaDB","FAISS","Sentence-Transformers"],codeSnippet:`# FastAPI Retrieval-Augmented Generation query endpoint
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
    }`,features:["Document Ingestion: Automated parsing and chunking of complex academic PDFs.","Vector Storage: High-performance semantic indexing with ChromaDB and FAISS.","Decoupled Architecture: Independent FastAPI service and interactive Streamlit UI.","Grounded Q&A: Strictly bounds answers to verified paper content with zero hallucination."],development:"Configured FastAPI async endpoints, implemented LangChain text splitters with optimal chunk sizes, and built the Streamlit interactive dashboard.",challenges:"Optimizing chunk size and overlap to preserve academic context across mathematical equations and citation footnotes.",learning:"Gained deep, hands-on understanding of vector databases, embedding spaces, cosine similarity search, and RAG architectural patterns.",futureImprovements:["Multi-document comparative analysis across multiple research papers simultaneously.","Interactive PDF viewer highlighting retrieved citation bounding boxes."]}}],Rf=[{name:"Google Cloud Cybersecurity Certificate",issuer:"Google Cloud",badgeClass:"badge-cyan",icon:"🛡️",desc:"Foundations of cloud security, threat detection, network protection, and security posture management."},{name:"Google Cloud Data Analytics Certificate",issuer:"Google Cloud",badgeClass:"badge-cyan",icon:"📊",desc:"Cloud data processing, analytical query modeling, data pipelines, and reporting architectures."},{name:"IBM Generative AI in Action",issuer:"IBM",badgeClass:"badge-indigo",icon:"🤖",desc:"Practical generative AI model integration, prompt architectures, and enterprise AI workflows."},{name:"Celonis AI Foundations",issuer:"Celonis",badgeClass:"badge-indigo",icon:"⚡",desc:"Process intelligence, algorithmic optimization, and data-driven workflow discovery."},{name:"UiPath Agentic Automation Developer Associate Training",issuer:"UiPath",badgeClass:"badge-purple",icon:"⚙️",desc:"Autonomous agentic automation, robotic process triggers, and enterprise integration patterns."},{name:"Oracle Cloud Infrastructure",issuer:"Oracle",badgeClass:"badge-amber",icon:"☁️",desc:"OCI cloud architecture, computing instances, virtual cloud networks (VCN), and storage tiers."},{name:"AWS Cloud Workshop",issuer:"AWS",badgeClass:"badge-amber",icon:"🏗️",desc:"Practical hands-on exploration of AWS core services, EC2 compute, S3 storage, and IAM roles."},{name:"Applied GenAI Workshop",issuer:"Applied GenAI",badgeClass:"badge-indigo",icon:"🧠",desc:"Hands-on application of Large Language Models, contextual reasoning, and AI-assisted tooling."}],Wt={company:"Sangam Soft Solutions",location:"Coimbatore, Tamil Nadu",role:"Full Stack Development Intern",duration:"June 2026",project:"Code Infinite Website Redesign",technologies:["React","Node.js","Git","VS Code"],overview:"Worked on practical web development and interface redesign activities for the Code Infinite website.",modules:[{name:"Home Section",desc:"Redesigned landing hero presentation and responsive layout."},{name:"About Section",desc:"Structured modular company profile and informational overview."},{name:"Training & Courses",desc:"Developed structured catalog layouts for educational programs."},{name:"Services",desc:"Created responsive service cards with clear visual hierarchy."},{name:"Forms",desc:"Implemented accessible form validation for inquiry submissions."},{name:"Gallery",desc:"Engineered responsive media display layouts."},{name:"Blog-Related Sections",desc:"Structured readable article feeds and content views."},{name:"Dark / Light Theme",desc:"Implemented user-friendly theme switching functionality."}],workflow:"Collaborated using standard Git feature branches, pull requests, and peer code reviews inside VS Code."},Pf=[{year:"2024",title:"Diploma with Distinction (93%) & Daimler Award",detail:"Completed Diploma in Computer Engineering at Konghu Velalar Polytechnic College with 93% distinction. Won Daimler Best for Innovation award for creative technical problem-solving."},{year:"2024–2025",title:"B.E. CSE Lateral Entry & Smart India Hackathon",detail:"Admitted via lateral entry to Anna University Regional Campus, Coimbatore. Maintained 8.01 CGPA. Competed and advanced to Round 2 of Smart India Hackathon 2025."},{year:"2026",title:"Full Stack Internship & AI / Cloud Projects",detail:"Full Stack Development Intern at Sangam Soft Solutions (Code Infinite Redesign). Built AI Code Analyzer (CrewAI) and Thamarai Hospital Management system. Competed in India.RUN Hackathon."},{year:"2027",title:"B.E. Graduation & Software Engineering",detail:"Graduating with B.E. in Computer Science and Engineering from Anna University Regional Campus, prepared for professional Full Stack / Software Developer roles."}],Lf=[{title:"Daimler — Best for Innovation",year:"2024",description:"Awarded Best for Innovation by Daimler for creative technical problem-solving and software application prototype development."},{title:"Smart India Hackathon (SIH) — Round 2",year:"2025",description:"Successfully advanced to Round 2 of India's prestigious national hackathon, tackling complex technological problem statements under intensive timelines."},{title:"India.RUN Hackathon",year:"2026",description:"Participated and competed in nationwide technology hackathon, developing collaborative software solutions within demanding team constraints."}],If=[{title:"CSE Placement Coordinator",role:"Departmental Placement Leadership",desc:"Liaising with corporate recruiters, coordinating recruitment drives, and preparing student peers for technical recruitment pipelines."},{title:"Class Placement Representative",role:"Student Representation & Communication",desc:"Acting as the primary bridge between the department placement cell and classmates, managing vital scheduling and career announcements."},{title:"CSE Committee Member",role:"Event Management & Department Support",desc:"Actively organizing technical symposiums, coding workshops, and department initiatives at Anna University Regional Campus."},{title:"Placement Training Coordination",role:"Peer Mentorship & Skill Development",desc:"Assisting classmates with aptitude practice, technical interview preparation, and coding problem-solving sessions."},{title:"Applied GenAI Workshop (Anna Univ × Kissflow)",role:"Technical Workshop Collaboration",desc:"Practical hands-on exploration of Large Language Models, prompt architectures, and enterprise AI workflows."}],pi=[{degree:"B.E. Computer Science and Engineering — Lateral Entry",institution:"Anna University Regional Campus, Coimbatore",duration:"2024 – 2027",score:"CGPA: 8.01 / 10",scoreLabel:"Current CGPA",status:"In Progress"},{degree:"Diploma in Computer Engineering",institution:"Konghu Velalar Polytechnic College",duration:"Completed in 2024",score:"93%",scoreLabel:"Final Percentage",status:"Completed with Distinction"}],Es=[{step:"01",action:"I BUILD",title:"Practical Full-Stack Applications",desc:"I focus on engineering software that addresses real workflows: responsive React user interfaces, robust Node.js and Express REST services, and normalized relational and document databases."},{step:"02",action:"I LEARN",title:"Continuous Technology Absorption",desc:"From completing my Diploma with 93% distinction to maintaining an 8.01 CGPA at Anna University, I cultivate consistent academic and technical discipline."},{step:"03",action:"I EXPERIMENT",title:"AI Agents & Cloud Architecture",desc:"I explore autonomous AI agentic workflows with CrewAI in Python, experiment with Docker containerization, and study cloud infrastructure across Google Cloud, AWS, and OCI."},{step:"04",action:"I COLLABORATE",title:"Industry Internship & Team Leadership",desc:"During my Full Stack Internship at Sangam Soft Solutions, I contributed to the Code Infinite website redesign using Git branch workflows. As Placement Coordinator, I coordinate campus drives and mentor peers."},{step:"05",action:"I IMPROVE",title:"Code Quality & Engineering Mindset",desc:"Building, benchmarking, testing, and refining. Every project is an opportunity to write cleaner, more resilient, and more maintainable software."}],Df=[{name:"Problem Solving",icon:"🧩",desc:"Decomposing complex engineering challenges into clean, structured components."},{name:"Quick Learning",icon:"⚡",desc:"Rapidly assimilating new frameworks, language paradigms, and developer tools."},{name:"Teamwork",icon:"🤝",desc:"Collaborating transparently with fellow engineers using Git branches and clear communication."},{name:"Leadership",icon:"🧭",desc:"Guiding classmates as Placement Coordinator and organizing technical initiatives."},{name:"Communication",icon:"🎙️",desc:"Articulating ideas clearly through technical documentation and presentation skills."},{name:"Adaptability",icon:"🔄",desc:"Thriving across changing priorities, hackathon constraints, and evolving tech stacks."},{name:"Continuous Learning",icon:"📚",desc:"Proactively exploring AI agents, cloud containerization, and modern architecture."}],uc={positioning:"Premium personal portfolio development — combining strong visual design, immersive 3D presentation, smooth motion, responsive UX, and modern frontend engineering to create a memorable digital first impression.",pillars:[{id:"frontend",category:"Frontend Development",icon:"⚛️",tech:"React • JavaScript / TypeScript • Tailwind CSS • HTML5 & CSS3",badgeClass:"badge-cyan",items:["Component-based UI architecture and interactive portfolio sections.","Fast, consistent, responsive UI development and design-system styling.","Application logic, interactions, and maintainable frontend structure.","Semantic structure, responsive layouts, and polished visual styling."]},{id:"motion",category:"Motion & Interaction",icon:"🎬",tech:"GSAP • Scroll-Driven Animation • Micro-Interactions",badgeClass:"badge-emerald",items:["Smooth, cinematic scroll animations, transitions, and interactive motion.","Subtle motion details that make the interface feel refined and responsive.","Interactive storytelling that responds naturally to user scrolling."]},{id:"immersive-3d",category:"3D & Immersive Design",icon:"🌐",tech:"3D Visual Design • 360° Interactive Presentation • Depth & Perspective",badgeClass:"badge-indigo",items:["Large-scale immersive hero visuals designed to create an immediate premium impression.","Layered composition and perspective-based motion for a more dimensional interface.","A complete rotational visual experience integrated into the hero section."]},{id:"ui-ux",category:"UI / UX Design",icon:"🎨",tech:"Figma • Design Systems • Responsive UX",badgeClass:"badge-purple",items:["Interface planning, visual systems, layouts, prototypes, and responsive design.","Layouts and interactions optimized across desktop, tablet, and mobile.","Consistent typography, spacing, components, and visual hierarchy."]},{id:"performance",category:"Performance & Delivery",icon:"⚡",tech:"Modern Responsive Architecture • Asset Optimization • Production-Ready Workflow",badgeClass:"badge-amber",items:["Built for fast rendering and smooth interaction across screen sizes.","Structured development approach for maintainable portfolio projects.","Visual assets prepared with performance and loading experience in mind."]}]},Ts="km_portfolio_theme";function Nf(){const r=document.getElementById("theme-toggle-btn"),e=localStorage.getItem(Ts);if(e)ga(e);else{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;ga(t?"dark":"light")}r&&r.addEventListener("click",()=>{const n=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";ga(n),localStorage.setItem(Ts,n)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{localStorage.getItem(Ts)||ga(t.matches?"dark":"light")})}function ga(r){document.documentElement.setAttribute("data-theme",r);const e=document.getElementById("theme-toggle-btn");if(e){e.setAttribute("aria-label",`Switch to ${r==="dark"?"light":"dark"} mode`),e.setAttribute("title",`Current mode: ${r}. Click to toggle.`);const t=e.querySelector(".theme-icon");t&&(t.textContent=r==="dark"?"☀️":"🌙")}}function Uf(){const r=document.querySelector(".site-header"),e=document.querySelectorAll(".nav-link"),t=document.querySelectorAll("section[id]"),n=document.getElementById("hamburger-toggle"),i=document.getElementById("mobile-drawer");window.addEventListener("scroll",()=>{window.scrollY>20?r==null||r.classList.add("scrolled"):r==null||r.classList.remove("scrolled")},{passive:!0});const a={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=document.querySelector(".nav-dropdown-btn"),o=document.querySelector(".nav-dropdown"),l=["certifications","achievements","education"],c=new IntersectionObserver(d=>{d.forEach(f=>{if(f.isIntersecting){const u=f.target.getAttribute("id");e.forEach(m=>{m.getAttribute("href")===`#${u}`?m.classList.add("active"):m.classList.remove("active")}),s&&(l.includes(u)?s.classList.add("active"):s.classList.remove("active"))}})},a);t.forEach(d=>c.observe(d)),o&&s&&(s.addEventListener("click",d=>{d.stopPropagation();const f=o.classList.toggle("open");s.setAttribute("aria-expanded",String(f))}),document.addEventListener("click",d=>{o.contains(d.target)||(o.classList.remove("open"),s.setAttribute("aria-expanded","false"))}),o.querySelectorAll(".dropdown-item").forEach(d=>{d.addEventListener("click",()=>{o.classList.remove("open"),s.setAttribute("aria-expanded","false")})})),n&&i&&(n.addEventListener("click",()=>{const d=i.classList.toggle("open");n.setAttribute("aria-expanded",String(d)),n.innerHTML=d?'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>':'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>'}),i.querySelectorAll(".nav-link").forEach(d=>{d.addEventListener("click",()=>{i.classList.remove("open"),n.setAttribute("aria-expanded","false"),n.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>'})}))}function Ff(){const r=document.getElementById("scroll-progress-fill"),e=document.getElementById("scroll-progress-hud"),t=document.getElementById("scroll-progress-percent");if(!r)return;const n=()=>{const i=document.documentElement.scrollHeight-window.innerHeight;if(i<=0)return;const a=window.scrollY,s=Math.min(Math.max(a/i*100,0),100);r.style.width=`${s}%`,t&&(t.textContent=`${Math.round(s)}%`),e&&(a>80?e.classList.add("visible"):e.classList.remove("visible"))};e&&e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",n,{passive:!0}),n()}function Of(){if(window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=document.createElement("div");r.className="custom-cursor-dot",r.setAttribute("aria-hidden","true");const e=document.createElement("div");e.className="custom-cursor-ring",e.setAttribute("aria-hidden","true"),document.body.appendChild(r),document.body.appendChild(e);let t=-100,n=-100,i=-100,a=-100;window.addEventListener("mousemove",l=>{t=l.clientX,n=l.clientY,r.style.transform=`translate3d(${t}px, ${n}px, 0)`},{passive:!0});const s=()=>{i+=(t-i)*.18,a+=(n-a)*.18,e.style.transform=`translate3d(${i}px, ${a}px, 0)`,requestAnimationFrame(s)};requestAnimationFrame(s);const o='a, button, input, textarea, .skill-card, .project-card, .recruiter-pill, .arch-node, [role="button"]';document.addEventListener("mouseover",l=>{l.target.closest(o)&&(e.classList.add("cursor-hover"),r.classList.add("cursor-hover"))}),document.addEventListener("mouseout",l=>{l.target.closest(o)&&(e.classList.remove("cursor-hover"),r.classList.remove("cursor-hover"))}),document.addEventListener("mouseleave",()=>{r.style.opacity="0",e.style.opacity="0"}),document.addEventListener("mouseenter",()=>{r.style.opacity="1",e.style.opacity="1"})}function kf(){if(window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.querySelectorAll(".btn-magnetic, .btn-primary, .hero-social-strip a").forEach(e=>{e.addEventListener("mousemove",t=>{const n=e.getBoundingClientRect(),i=t.clientX-n.left-n.width/2,a=t.clientY-n.top-n.height/2;e.style.transform=`translate(${i*.15}px, ${a*.15}px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="translate(0px, 0px)",e.style.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",setTimeout(()=>{e.style.transition=""},300)})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="186",Bf=0,fc=1,zf=2,Va=1,Hf=2,Hr=3,Gi=0,Kt=1,Un=2,ti=0,$r=1,hc=2,pc=3,mc=4,Gf=5,dr=100,Vf=101,Wf=102,Xf=103,qf=104,$f=200,Yf=201,Kf=202,Jf=203,Fd=204,Od=205,Zf=206,Qf=207,jf=208,eh=209,th=210,nh=211,ih=212,rh=213,ah=214,go=0,_o=1,vo=2,Zr=3,xo=4,So=5,yo=6,Mo=7,kd=0,sh=1,oh=2,zn=0,Bd=1,zd=2,Hd=3,Gd=4,Vd=5,Wd=6,Xd=7,qd=300,Vi=301,yr=302,As=303,ws=304,hs=306,bo=1e3,jn=1001,Eo=1002,Dt=1003,lh=1004,_a=1005,zt=1006,Cs=1007,Ui=1008,xn=1009,$d=1010,Yd=1011,Qr=1012,Sl=1013,Gn=1014,On=1015,Vn=1016,yl=1017,Ml=1018,jr=1020,Kd=35902,Jd=35899,Zd=1021,Qd=1022,wn=1023,ii=1026,Fi=1027,jd=1028,bl=1029,Wi=1030,El=1031,Tl=1033,Wa=33776,Xa=33777,qa=33778,$a=33779,To=35840,Ao=35841,wo=35842,Co=35843,Ro=36196,Po=37492,Lo=37496,Io=37488,Do=37489,Qa=37490,No=37491,Uo=37808,Fo=37809,Oo=37810,ko=37811,Bo=37812,zo=37813,Ho=37814,Go=37815,Vo=37816,Wo=37817,Xo=37818,qo=37819,$o=37820,Yo=37821,Ko=36492,Jo=36494,Zo=36495,Qo=36283,jo=36284,ja=36285,el=36286,ch=3200,gc=0,dh=1,gi="",_n="srgb",es="srgb-linear",ts="linear",Qe="srgb",Rs=7680,uh=519,fh=512,hh=513,ph=514,Al=515,mh=516,gh=517,wl=518,_h=519,vh=35044,_c="300 es",kn=2e3,ns=2001;function xh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function is(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sh(){const r=is("canvas");return r.style.display="block",r}const vc={};function xc(...r){const e="THREE."+r.shift();console.log(e,...r)}function eu(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ce(...r){r=eu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function qe(...r){r=eu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function gr(...r){const e=r.join(" ");e in vc||(vc[e]=!0,Ce(...r))}function yh(r,e,t){return new Promise(function(n,i){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Mh={[go]:_o,[vo]:yo,[xo]:Mo,[Zr]:So,[_o]:go,[yo]:vo,[Mo]:xo,[So]:Zr};class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ps=Math.PI/180,tl=180/Math.PI;function ca(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function He(r,e,t){return Math.max(e,Math.min(t,r))}function bh(r,e){return(r%e+e)%e}function Ls(r,e,t){return(1-t)*r+t*e}function Lr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Jl=class Jl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jl.prototype.isVector2=!0;let Ve=Jl;class Rr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,s,o){let l=n[i+0],c=n[i+1],d=n[i+2],f=n[i+3],u=a[s+0],m=a[s+1],_=a[s+2],g=a[s+3];if(f!==g||l!==u||c!==m||d!==_){let p=l*u+c*m+d*_+f*g;p<0&&(u=-u,m=-m,_=-_,g=-g,p=-p);let h=1-o;if(p<.9995){const y=Math.acos(p),w=Math.sin(y);h=Math.sin(h*y)/w,o=Math.sin(o*y)/w,l=l*h+u*o,c=c*h+m*o,d=d*h+_*o,f=f*h+g*o}else{l=l*h+u*o,c=c*h+m*o,d=d*h+_*o,f=f*h+g*o;const y=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=y,c*=y,d*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,a,s){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],f=a[s],u=a[s+1],m=a[s+2],_=a[s+3];return e[t]=o*_+d*f+l*m-c*u,e[t+1]=l*_+d*u+c*f-o*m,e[t+2]=c*_+d*m+o*u-l*f,e[t+3]=d*_-o*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),f=o(a/2),u=l(n/2),m=l(i/2),_=l(a/2);switch(s){case"XYZ":this._x=u*d*f+c*m*_,this._y=c*m*f-u*d*_,this._z=c*d*_+u*m*f,this._w=c*d*f-u*m*_;break;case"YXZ":this._x=u*d*f+c*m*_,this._y=c*m*f-u*d*_,this._z=c*d*_-u*m*f,this._w=c*d*f+u*m*_;break;case"ZXY":this._x=u*d*f-c*m*_,this._y=c*m*f+u*d*_,this._z=c*d*_+u*m*f,this._w=c*d*f-u*m*_;break;case"ZYX":this._x=u*d*f-c*m*_,this._y=c*m*f+u*d*_,this._z=c*d*_-u*m*f,this._w=c*d*f+u*m*_;break;case"YZX":this._x=u*d*f+c*m*_,this._y=c*m*f+u*d*_,this._z=c*d*_-u*m*f,this._w=c*d*f-u*m*_;break;case"XZY":this._x=u*d*f-c*m*_,this._y=c*m*f-u*d*_,this._z=c*d*_+u*m*f,this._w=c*d*f+u*m*_;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=n+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(s-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(i+s)/m,this._z=(a+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(a-c)/m,this._x=(i+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(s-i)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+i*c-a*l,this._y=i*d+s*l+a*o-n*c,this._z=a*d+s*c+n*l-i*o,this._w=s*d-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zl=class Zl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*n),d=2*(o*t-a*i),f=2*(a*n-s*t);return this.x=t+l*c+s*f-o*d,this.y=n+l*d+o*c-a*f,this.z=i+l*f+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zl.prototype.isVector3=!0;let z=Zl;const Is=new z,Sc=new Rr,Ql=class Ql{constructor(e,t,n,i,a,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,o,l,c)}set(e,t,n,i,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],u=n[2],m=n[5],_=n[8],g=i[0],p=i[3],h=i[6],y=i[1],w=i[4],S=i[7],M=i[2],T=i[5],A=i[8];return a[0]=s*g+o*y+l*M,a[3]=s*p+o*w+l*T,a[6]=s*h+o*S+l*A,a[1]=c*g+d*y+f*M,a[4]=c*p+d*w+f*T,a[7]=c*h+d*S+f*A,a[2]=u*g+m*y+_*M,a[5]=u*p+m*w+_*T,a[8]=u*h+m*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*a*d+n*o*l+i*a*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,u=o*l-d*a,m=c*a-s*l,_=t*f+n*u+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*c-d*n)*g,e[2]=(o*n-i*s)*g,e[3]=u*g,e[4]=(d*t-i*l)*g,e[5]=(i*a-o*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ql.prototype.isMatrix3=!0;let Ie=Ql;const Ds=new Ie,yc=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eh(){const r={enabled:!0,workingColorSpace:es,spaces:{},convert:function(i,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Qe&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Qe&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?ts:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,s){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[es]:{primaries:e,whitePoint:n,transfer:ts,toXYZ:yc,fromXYZ:Mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:yc,fromXYZ:Mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),r}const ze=Eh();function ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ji;class Th{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ji===void 0&&(Ji=is("canvas")),Ji.width=e.width,Ji.height=e.height;const i=Ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=ni(a[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ah=0;class Cl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(Ns(i[s].image)):a.push(Ns(i[s]))}else a=Ns(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ns(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Th.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let wh=0;const Us=new z;class Xt extends qi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=jn,i=jn,a=zt,s=Ui,o=wn,l=xn,c=Xt.DEFAULT_ANISOTROPY,d=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=ca(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Us).x}get height(){return this.source.getSize(Us).y}get depth(){return this.source.getSize(Us).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=qd;Xt.DEFAULT_ANISOTROPY=1;const jl=class jl{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(m+1)/2,M=(h+1)/2,T=(d+u)/4,A=(f+g)/4,v=(_+p)/4;return w>S&&w>M?w<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(w),i=T/n,a=A/n):S>M?S<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(S),n=T/i,a=v/i):M<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(M),n=A/a,i=v/a),this.set(n,i,a,t),this}let y=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-g)/y,this.z=(u-d)/y,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jl.prototype.isVector4=!0;let gt=jl;class Ch extends qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},a=new Xt(i),s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Cl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Ch{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tu extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rh extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const fs=class fs{constructor(e,t,n,i,a,s,o,l,c,d,f,u,m,_,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,o,l,c,d,f,u,m,_,g,p)}set(e,t,n,i,a,s,o,l,c,d,f,u,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Zi.setFromMatrixColumn(e,0).length(),a=1/Zi.setFromMatrixColumn(e,1).length(),s=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const u=s*d,m=s*f,_=o*d,g=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=_+m*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,m=l*f,_=c*d,g=c*f;t[0]=u+g*o,t[4]=_*o-m,t[8]=s*c,t[1]=s*f,t[5]=s*d,t[9]=-o,t[2]=m*o-_,t[6]=g+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,m=l*f,_=c*d,g=c*f;t[0]=u-g*o,t[4]=-s*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=s*d,t[9]=g-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,m=s*f,_=o*d,g=o*f;t[0]=l*d,t[4]=_*c-m,t[8]=u*c+g,t[1]=l*f,t[5]=g*c+u,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,m=s*c,_=o*l,g=o*c;t[0]=l*d,t[4]=g-u*f,t[8]=_*f+m,t[1]=f,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*f+_,t[10]=u-g*f}else if(e.order==="XZY"){const u=s*l,m=s*c,_=o*l,g=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+g,t[5]=s*d,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*d,t[10]=g*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ph,e,Lh)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ci.crossVectors(n,rn),ci.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ci.crossVectors(n,rn)),ci.normalize(),va.crossVectors(rn,ci),i[0]=ci.x,i[4]=va.x,i[8]=rn.x,i[1]=ci.y,i[5]=va.y,i[9]=rn.y,i[2]=ci.z,i[6]=va.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],u=n[9],m=n[13],_=n[2],g=n[6],p=n[10],h=n[14],y=n[3],w=n[7],S=n[11],M=n[15],T=i[0],A=i[4],v=i[8],E=i[12],R=i[1],P=i[5],U=i[9],O=i[13],L=i[2],F=i[6],q=i[10],B=i[14],Z=i[3],$=i[7],Q=i[11],W=i[15];return a[0]=s*T+o*R+l*L+c*Z,a[4]=s*A+o*P+l*F+c*$,a[8]=s*v+o*U+l*q+c*Q,a[12]=s*E+o*O+l*B+c*W,a[1]=d*T+f*R+u*L+m*Z,a[5]=d*A+f*P+u*F+m*$,a[9]=d*v+f*U+u*q+m*Q,a[13]=d*E+f*O+u*B+m*W,a[2]=_*T+g*R+p*L+h*Z,a[6]=_*A+g*P+p*F+h*$,a[10]=_*v+g*U+p*q+h*Q,a[14]=_*E+g*O+p*B+h*W,a[3]=y*T+w*R+S*L+M*Z,a[7]=y*A+w*P+S*F+M*$,a[11]=y*v+w*U+S*q+M*Q,a[15]=y*E+w*O+S*B+M*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15],y=l*m-c*u,w=o*m-c*f,S=o*u-l*f,M=s*m-c*d,T=s*u-l*d,A=s*f-o*d;return t*(g*y-p*w+h*S)-n*(_*y-p*M+h*T)+i*(_*w-g*M+h*A)-a*(_*S-g*T+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(s*d-o*c)-n*(a*d-o*l)+i*(a*c-s*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],y=t*o-n*s,w=t*l-i*s,S=t*c-a*s,M=n*l-i*o,T=n*c-a*o,A=i*c-a*l,v=d*g-f*_,E=d*p-u*_,R=d*h-m*_,P=f*p-u*g,U=f*h-m*g,O=u*h-m*p,L=y*O-w*U+S*P+M*R-T*E+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=(o*O-l*U+c*P)*F,e[1]=(i*U-n*O-a*P)*F,e[2]=(g*A-p*T+h*M)*F,e[3]=(u*T-f*A-m*M)*F,e[4]=(l*R-s*O-c*E)*F,e[5]=(t*O-i*R+a*E)*F,e[6]=(p*S-_*A-h*w)*F,e[7]=(d*A-u*S+m*w)*F,e[8]=(s*U-o*R+c*v)*F,e[9]=(n*R-t*U-a*v)*F,e[10]=(_*T-g*S+h*y)*F,e[11]=(f*S-d*T-m*y)*F,e[12]=(o*E-s*P-l*v)*F,e[13]=(t*P-n*E+i*v)*F,e[14]=(g*w-_*M-p*y)*F,e[15]=(d*M-f*w+u*y)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*s,0,c*l-i*o,d*l+i*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,f=o+o,u=a*c,m=a*d,_=a*f,g=s*d,p=s*f,h=o*f,y=l*c,w=l*d,S=l*f,M=n.x,T=n.y,A=n.z;return i[0]=(1-(g+h))*M,i[1]=(m+S)*M,i[2]=(_-w)*M,i[3]=0,i[4]=(m-S)*T,i[5]=(1-(u+h))*T,i[6]=(p+y)*T,i[7]=0,i[8]=(_+w)*A,i[9]=(p-y)*A,i[10]=(1-(u+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let s=Zi.set(i[0],i[1],i[2]).length();const o=Zi.set(i[4],i[5],i[6]).length(),l=Zi.set(i[8],i[9],i[10]).length();a<0&&(s=-s),bn.copy(this);const c=1/s,d=1/o,f=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,a,s,o=kn,l=!1){const c=this.elements,d=2*a/(t-e),f=2*a/(n-i),u=(t+e)/(t-e),m=(n+i)/(n-i);let _,g;if(l)_=a/(s-a),g=s*a/(s-a);else if(o===kn)_=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===ns)_=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,s,o=kn,l=!1){const c=this.elements,d=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),m=-(n+i)/(n-i);let _,g;if(l)_=1/(s-a),g=s/(s-a);else if(o===kn)_=-2/(s-a),g=-(s+a)/(s-a);else if(o===ns)_=-1/(s-a),g=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fs.prototype.isMatrix4=!0;let St=fs;const Zi=new z,bn=new St,Ph=new z(0,0,0),Lh=new z(1,1,1),ci=new z,va=new z,rn=new z,bc=new St,Ec=new Rr;class Xi{constructor(e=0,t=0,n=0,i=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],l=i[1],c=i[5],d=i[9],f=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-He(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ih=0;const Tc=new z,Qi=new Rr,qn=new St,xa=new z,Ir=new z,Dh=new z,Nh=new Rr,Ac=new z(1,0,0),wc=new z(0,1,0),Cc=new z(0,0,1),Rc={type:"added"},Uh={type:"removed"},ji={type:"childadded",child:null},Fs={type:"childremoved",child:null};class Jt extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new z,t=new Xi,n=new Rr,i=new z(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new Ie}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xa.copy(e):xa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ir,xa,this.up):qn.lookAt(xa,Ir,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(qn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rc),ji.child=e,this.dispatchEvent(ji),ji.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rc),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*i,a[13]+=n-a[1]*t-a[5]*n-a[9]*i,a[14]+=i-a[2]*t-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),m=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Jt.DEFAULT_UP=new z(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gr extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fh={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fh)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function ks(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=bh(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=ks(s,a,e+1/3),this.g=ks(s,a,e),this.b=ks(s,a,e-1/3)}return ze.colorSpaceToWorking(this,i),this}setStyle(e,t=_n){function n(a){a!==void 0&&parseFloat(a)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const n=iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return ze.workingToColorSpace(kt.copy(this),e),Math.round(He(kt.r*255,0,255))*65536+Math.round(He(kt.g*255,0,255))*256+Math.round(He(kt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,a=kt.b,s=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case n:l=(i-a)/f+(i<a?6:0);break;case i:l=(a-n)/f+2;break;case a:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=_n){ze.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Sa);const n=Ls(di.h,Sa.h,t),i=Ls(di.s,Sa.s,t),a=Ls(di.l,Sa.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ye;Ye.NAMES=iu;class Oh extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const En=new z,$n=new z,Bs=new z,Yn=new z,er=new z,tr=new z,Pc=new z,zs=new z,Hs=new z,Gs=new z,Vs=new gt,Ws=new gt,Xs=new gt;class An{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){En.subVectors(i,t),$n.subVectors(n,t),Bs.subVectors(e,t);const s=En.dot(En),o=En.dot($n),l=En.dot(Bs),c=$n.dot($n),d=$n.dot(Bs),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,m=(c*l-o*d)*u,_=(s*d-o*l)*u;return a.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,a,s,o,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Yn.x),l.addScaledVector(s,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(e,t,n,i,a,s){return Vs.setScalar(0),Ws.setScalar(0),Xs.setScalar(0),Vs.fromBufferAttribute(e,t),Ws.fromBufferAttribute(e,n),Xs.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Vs,a.x),s.addScaledVector(Ws,a.y),s.addScaledVector(Xs,a.z),s}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),$n.subVectors(e,t),En.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let s,o;er.subVectors(i,n),tr.subVectors(a,n),zs.subVectors(e,n);const l=er.dot(zs),c=tr.dot(zs);if(l<=0&&c<=0)return t.copy(n);Hs.subVectors(e,i);const d=er.dot(Hs),f=tr.dot(Hs);if(d>=0&&f<=d)return t.copy(i);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(er,s);Gs.subVectors(e,a);const m=er.dot(Gs),_=tr.dot(Gs);if(_>=0&&m<=_)return t.copy(a);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(tr,o);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return Pc.subVectors(a,i),o=(f-d)/(f-d+(m-_)),t.copy(i).addScaledVector(Pc,o);const h=1/(p+g+u);return s=g*h,o=u*h,t.copy(n).addScaledVector(er,s).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class da{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Tn):Tn.fromBufferAttribute(a,s),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Ma.subVectors(this.max,Dr),nr.subVectors(e.a,Dr),ir.subVectors(e.b,Dr),rr.subVectors(e.c,Dr),ui.subVectors(ir,nr),fi.subVectors(rr,ir),wi.subVectors(nr,rr);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-wi.z,wi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,wi.z,0,-wi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-wi.y,wi.x,0];return!qs(t,nr,ir,rr,Ma)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,nr,ir,rr,Ma))?!1:(ba.crossVectors(ui,fi),t=[ba.x,ba.y,ba.z],qs(t,nr,ir,rr,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new z,new z,new z,new z,new z,new z,new z,new z],Tn=new z,ya=new da,nr=new z,ir=new z,rr=new z,ui=new z,fi=new z,wi=new z,Dr=new z,Ma=new z,ba=new z,Ci=new z;function qs(r,e,t,n,i){for(let a=0,s=r.length-3;a<=s;a+=3){Ci.fromArray(r,a);const o=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),d=n.dot(Ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const bt=new z,Ea=new Ve;let kh=0;class Hn extends qi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array),a=$t(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ru extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class au extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Bh=new da,Nr=new z,$s=new z;class ps{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bh.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Nr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add($s)),this.expandByPoint(Nr.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zh=0;const mn=new St,Ys=new Jt,ar=new z,an=new da,Ur=new da,Rt=new z;class nn extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?au:ru)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ie().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Ys.lookAt(e),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];an.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(an.min,Ur.min),an.expandByPoint(Rt),Rt.addVectors(an.max,Ur.max),an.expandByPoint(Rt)):(an.expandByPoint(Ur.min),an.expandByPoint(Ur.max))}an.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)Rt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Rt.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(e,c),Rt.add(ar)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new z,l[v]=new z;const c=new z,d=new z,f=new z,u=new Ve,m=new Ve,_=new Ve,g=new z,p=new z;function h(v,E,R){c.fromBufferAttribute(n,v),d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,R),u.fromBufferAttribute(a,v),m.fromBufferAttribute(a,E),_.fromBufferAttribute(a,R),d.sub(c),f.sub(c),m.sub(u),_.sub(u);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(P),o[v].add(g),o[E].add(g),o[R].add(g),l[v].add(p),l[E].add(p),l[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,E=y.length;v<E;++v){const R=y[v],P=R.start,U=R.count;for(let O=P,L=P+U;O<L;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new z,S=new z,M=new z,T=new z;function A(v){M.fromBufferAttribute(i,v),T.copy(M);const E=o[v];w.copy(E),w.sub(M.multiplyScalar(M.dot(E))).normalize(),S.crossVectors(T,E);const P=S.dot(l[v])<0?-1:1;s.setXYZW(v,w.x,w.y,w.z,P)}for(let v=0,E=y.length;v<E;++v){const R=y[v],P=R.start,U=R.count;for(let O=P,L=P+U;O<L;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new z,a=new z,s=new z,o=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),g=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),d.subVectors(s,a),f.subVectors(i,a),d.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),f.subVectors(i,a),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*d;for(let h=0;h<d;h++)u[_++]=c[m++]}return new Hn(u,d,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(i[l]=d,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let u=0,m=f.length;u<m;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ks=new z,Hh=new z,Gh=new Ie;class mi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ks.subVectors(n,t).cross(Hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Ks),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gh.getNormalMatrix(e),i=this.coplanarPoint(Ks).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Vh=0;class ua extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=$r,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Od,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jn=new z,Js=new z,Ta=new z,Aa=new z;class su{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Js.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Aa.copy(this.origin).sub(Js);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ta),o=Aa.dot(this.direction),l=-Aa.dot(Ta),c=Aa.lengthSq(),d=Math.abs(1-s*s);let f,u,m,_;if(d>0)if(f=s*l-o,u=s*o-l,_=a*d,f>=0)if(u>=-_)if(u<=_){const g=1/d;f*=g,u*=g,m=f*(f+s*u+2*o)+u*(s*f+u+2*l)+c}else u=a,f=Math.max(0,-(s*u+o)),m=-f*f+u*(u+2*l)+c;else u=-a,f=Math.max(0,-(s*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-s*a+o)),u=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-a,-l),a),m=u*(u+2*l)+c):(f=Math.max(0,-(s*a+o)),u=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+u*(u+2*l)+c);else u=s>0?-a:a,f=Math.max(0,-(s*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Js).addScaledVector(Ta,u),m}intersectSphere(e,t){if(e.radius<0)return null;Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||a>i||((a>n||isNaN(n))&&(n=a),(s<i||isNaN(i))&&(i=s),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,a){const s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-s.x,u=e.y-s.y,m=e.z-s.z,_=t.x-s.x,g=t.y-s.y,p=t.z-s.z,h=n.x-s.x,y=n.y-s.y,w=n.z-s.z,S=Math.abs(l),M=Math.abs(c),T=Math.abs(d);let A,v,E,R,P,U,O,L,F,q,B,Z;if(S>=M&&S>=T?(E=l,U=f,F=_,Z=h,l>=0?(A=c,v=d,R=u,P=m,O=g,L=p,q=y,B=w):(A=d,v=c,R=m,P=u,O=p,L=g,q=w,B=y)):M>=T?(E=c,U=u,F=g,Z=y,c>=0?(A=d,v=l,R=m,P=f,O=p,L=_,q=w,B=h):(A=l,v=d,R=f,P=m,O=_,L=p,q=h,B=w)):(E=d,U=m,F=p,Z=w,d>=0?(A=l,v=c,R=f,P=u,O=_,L=g,q=h,B=y):(A=c,v=l,R=u,P=f,O=g,L=_,q=y,B=h)),E===0)return null;const $=A/E,Q=v/E,W=1/E,ce=R-$*U,he=P-Q*U,Re=O-$*F,Pe=L-Q*F,$e=q-$*Z,K=B-Q*Z,te=$e*Pe-K*Re,xe=ce*K-he*$e,Le=Re*he-Pe*ce;if(i){if(te<0||xe<0||Le<0)return null}else if((te<0||xe<0||Le<0)&&(te>0||xe>0||Le>0))return null;const _e=te+xe+Le;if(_e===0)return null;const Fe=W*(te*U+xe*F+Le*Z);return(_e>0?Fe<0:Fe>0)?null:this.at(Fe/_e,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ur extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lc=new St,Ri=new su,wa=new ps,Ic=new z,Ca=new z,Ra=new z,Pa=new z,Zs=new z,La=new z,Dc=new z,Ia=new z;class ln extends Jt{constructor(e=new nn,t=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){La.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],f=a[l];d!==0&&(Zs.fromBufferAttribute(f,e),s?La.addScaledVector(Zs,d):La.addScaledVector(Zs.sub(t),d))}t.add(La)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(a),Ri.copy(e.ray).recast(e.near),!(wa.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(wa,Ic)===null||Ri.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Lc.copy(a).invert(),Ri.copy(e.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let i;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,u=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,g=u.length;_<g;_++){const p=u[_],h=s[p.materialIndex],y=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,M=w;S<M;S+=3){const T=o.getX(S),A=o.getX(S+1),v=o.getX(S+2);i=Da(this,h,e,n,c,d,f,T,A,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const y=o.getX(p),w=o.getX(p+1),S=o.getX(p+2);i=Da(this,s,e,n,c,d,f,y,w,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,g=u.length;_<g;_++){const p=u[_],h=s[p.materialIndex],y=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,M=w;S<M;S+=3){const T=S,A=S+1,v=S+2;i=Da(this,h,e,n,c,d,f,T,A,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const y=p,w=p+1,S=p+2;i=Da(this,s,e,n,c,d,f,y,w,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Wh(r,e,t,n,i,a,s,o){let l;if(e.side===Kt?l=n.intersectTriangle(s,a,i,!0,o):l=n.intersectTriangle(i,a,s,e.side===Gi,o),l===null)return null;Ia.copy(o),Ia.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:r}}function Da(r,e,t,n,i,a,s,o,l,c){r.getVertexPosition(o,Ca),r.getVertexPosition(l,Ra),r.getVertexPosition(c,Pa);const d=Wh(r,e,t,n,Ca,Ra,Pa,Dc);if(d){const f=new z;An.getBarycoord(Dc,Ca,Ra,Pa,f),i&&(d.uv=An.getInterpolatedAttribute(i,o,l,c,f,new Ve)),a&&(d.uv1=An.getInterpolatedAttribute(a,o,l,c,f,new Ve)),s&&(d.normal=An.getInterpolatedAttribute(s,o,l,c,f,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};An.getNormal(Ca,Ra,Pa,u.normal),d.face=u,d.barycoord=f}return d}class Xh extends Xt{constructor(e=null,t=1,n=1,i,a,s,o,l,c=Dt,d=Dt,f,u){super(null,s,o,l,c,d,i,a,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pi=new ps,qh=new Ve(.5,.5),Na=new z;class ou{constructor(e=new mi,t=new mi,n=new mi,i=new mi,a=new mi,s=new mi){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){const i=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],d=a[4],f=a[5],u=a[6],m=a[7],_=a[8],g=a[9],p=a[10],h=a[11],y=a[12],w=a[13],S=a[14],M=a[15];if(i[0].setComponents(c-s,m-d,h-_,M-y).normalize(),i[1].setComponents(c+s,m+d,h+_,M+y).normalize(),i[2].setComponents(c+o,m+f,h+g,M+w).normalize(),i[3].setComponents(c-o,m-f,h-g,M-w).normalize(),n)i[4].setComponents(l,u,p,S).normalize(),i[5].setComponents(c-l,m-u,h-p,M-S).normalize();else if(i[4].setComponents(c-l,m-u,h-p,M-S).normalize(),t===kn)i[5].setComponents(c+l,m+u,h+p,M+S).normalize();else if(t===ns)i[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=qh.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends ua{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nc=new St,nl=new su,Ua=new ps,Fa=new z;class $h extends Jt{constructor(e=new nn,t=new lu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=a,e.ray.intersectsSphere(Ua)===!1)return;Nc.copy(i).invert(),nl.copy(e.ray).applyMatrix4(Nc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let _=u,g=m;_<g;_++){const p=c.getX(_);Fa.fromBufferAttribute(f,p),Uc(Fa,p,l,i,e,t,this)}}else{const u=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let _=u,g=m;_<g;_++)Fa.fromBufferAttribute(f,_),Uc(Fa,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Uc(r,e,t,n,i,a,s){const o=nl.distanceSqToPoint(r);if(o<t){const l=new z;nl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class cu extends Xt{constructor(e=[],t=Vi,n,i,a,s,o,l,c,d){super(e,t,n,i,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ea extends Xt{constructor(e,t,n=Gn,i,a,s,o=Dt,l=Dt,c,d=ii,f=1){if(d!==ii&&d!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,i,a,s,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Yh extends ea{constructor(e,t=Gn,n=Vi,i,a,s=Dt,o=Dt,l,c=ii){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,i,a,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class du extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fa extends nn{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],f=[];let u=0,m=0;_("z","y","x",-1,-1,n,t,e,s,a,0),_("z","y","x",1,-1,n,t,-e,s,a,1),_("x","z","y",1,1,e,n,t,i,s,2),_("x","z","y",1,-1,e,n,-t,i,s,3),_("x","y","z",1,-1,e,t,n,i,a,4),_("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2));function _(g,p,h,y,w,S,M,T,A,v,E){const R=S/A,P=M/v,U=S/2,O=M/2,L=T/2,F=A+1,q=v+1;let B=0,Z=0;const $=new z;for(let Q=0;Q<q;Q++){const W=Q*P-O;for(let ce=0;ce<F;ce++){const he=ce*R-U;$[g]=he*y,$[p]=W*w,$[h]=L,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[h]=T>0?1:-1,d.push($.x,$.y,$.z),f.push(ce/A),f.push(1-Q/v),B+=1}}for(let Q=0;Q<v;Q++)for(let W=0;W<A;W++){const ce=u+W+F*Q,he=u+W+F*(Q+1),Re=u+(W+1)+F*(Q+1),Pe=u+(W+1)+F*Q;l.push(ce,he,Pe),l.push(he,Re,Pe),Z+=6}o.addGroup(m,Z,E),m+=Z,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rl extends nn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],s=[];o(i),c(n),d(),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(a.slice(),3)),this.setAttribute("uv",new Lt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const w=new z,S=new z,M=new z;for(let T=0;T<t.length;T+=3)m(t[T+0],w),m(t[T+1],S),m(t[T+2],M),l(w,S,M,y)}function l(y,w,S,M){const T=M+1,A=[];for(let v=0;v<=T;v++){A[v]=[];const E=y.clone().lerp(S,v/T),R=w.clone().lerp(S,v/T),P=T-v;for(let U=0;U<=P;U++)U===0&&v===T?A[v][U]=E:A[v][U]=E.clone().lerp(R,U/P)}for(let v=0;v<T;v++)for(let E=0;E<2*(T-v)-1;E++){const R=Math.floor(E/2);E%2===0?(u(A[v][R+1]),u(A[v+1][R]),u(A[v][R])):(u(A[v][R+1]),u(A[v+1][R+1]),u(A[v+1][R]))}}function c(y){const w=new z;for(let S=0;S<a.length;S+=3)w.x=a[S+0],w.y=a[S+1],w.z=a[S+2],w.normalize().multiplyScalar(y),a[S+0]=w.x,a[S+1]=w.y,a[S+2]=w.z}function d(){const y=new z;for(let w=0;w<a.length;w+=3){y.x=a[w+0],y.y=a[w+1],y.z=a[w+2];const S=p(y)/2/Math.PI+.5,M=h(y)/Math.PI+.5;s.push(S,1-M)}_(),f()}function f(){for(let y=0;y<s.length;y+=6){const w=s[y+0],S=s[y+2],M=s[y+4],T=Math.max(w,S,M),A=Math.min(w,S,M);T>.9&&A<.1&&(w<.2&&(s[y+0]+=1),S<.2&&(s[y+2]+=1),M<.2&&(s[y+4]+=1))}}function u(y){a.push(y.x,y.y,y.z)}function m(y,w){const S=y*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function _(){const y=new z,w=new z,S=new z,M=new z,T=new Ve,A=new Ve,v=new Ve;for(let E=0,R=0;E<a.length;E+=9,R+=6){y.set(a[E+0],a[E+1],a[E+2]),w.set(a[E+3],a[E+4],a[E+5]),S.set(a[E+6],a[E+7],a[E+8]),T.set(s[R+0],s[R+1]),A.set(s[R+2],s[R+3]),v.set(s[R+4],s[R+5]),M.copy(y).add(w).add(S).divideScalar(3);const P=p(M);g(T,R+0,y,P),g(A,R+2,w,P),g(v,R+4,S,P)}}function g(y,w,S,M){M<0&&y.x===1&&(s[w]=y.x-1),S.x===0&&S.z===0&&(s[w]=M/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.vertices,e.indices,e.radius,e.detail)}}class Pl extends Rl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pl(e.radius,e.detail)}}class ms extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,f=e/o,u=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<d;h++){const y=h*u-s;for(let w=0;w<c;w++){const S=w*f-a;_.push(S,-y,0),g.push(0,0,1),p.push(w/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const w=y+c*h,S=y+c*(h+1),M=y+1+c*(h+1),T=y+1+c*h;m.push(w,S,T),m.push(S,M,T)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(g,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ll extends nn{constructor(e=.5,t=1,n=32,i=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],d=[];let f=e;const u=(t-e)/i,m=new z,_=new Ve;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){const h=a+p/n*s;m.x=f*Math.cos(h),m.y=f*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,d.push(_.x,_.y)}f+=u}for(let g=0;g<i;g++){const p=g*(n+1);for(let h=0;h<n;h++){const y=h+p,w=y,S=y+n+1,M=y+n+2,T=y+1;o.push(w,S,T),o.push(S,M,T)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rs extends nn{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const d=[],f=new z,u=new z,m=[],_=[],g=[],p=[];for(let h=0;h<=n;h++){const y=[],w=h/n,S=s+w*o,M=e*Math.cos(S),T=Math.sqrt(e*e-M*M);let A=0;h===0&&s===0?A=.5/t:h===n&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){const E=v/t,R=i+E*a;f.x=-T*Math.cos(R),f.y=M,f.z=T*Math.sin(R),_.push(f.x,f.y,f.z),u.copy(f).normalize(),g.push(u.x,u.y,u.z),p.push(E+A,1-w),y.push(c++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){const w=d[h][y+1],S=d[h][y],M=d[h+1][y],T=d[h+1][y+1];(h!==0||s>0)&&m.push(w,S,T),(h!==n-1||l<Math.PI)&&m.push(S,M,T)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(g,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Mr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Fc(i))i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Fc(i[0])){const a=[];for(let s=0,o=i.length;s<o;s++)a[s]=i[s].clone();e[t][n]=a}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const n=Mr(r[t]);for(const i in n)e[i]=n[i]}return e}function Fc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Kh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function uu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Jh={clone:Mr,merge:Vt};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Kh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(i.value);break;case"m4":this.uniforms[n].value=new St().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jh extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ep extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tp extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oa=new z,ka=new Rr,Ln=new z;class fu extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oa,ka,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,ka,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Oa,ka,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,ka,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hi=new z,Oc=new Ve,kc=new Ve;class vn extends fu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,kc),t.subVectors(kc,Oc)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hu extends fu{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=-90,or=1;class np extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(sr,or,e,t);i.layers=this.layers,this.add(i);const a=new vn(sr,or,e,t);a.layers=this.layers,this.add(a);const s=new vn(sr,or,e,t);s.layers=this.layers,this.add(s);const o=new vn(sr,or,e,t);o.layers=this.layers,this.add(o);const l=new vn(sr,or,e,t);l.layers=this.layers,this.add(l);const c=new vn(sr,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ip extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ec=class ec{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=i,this}};ec.prototype.isMatrix2=!0;let Bc=ec;function zc(r,e,t,n){const i=ap(n);switch(t){case Zd:return r*e;case jd:return r*e/i.components*i.byteLength;case bl:return r*e/i.components*i.byteLength;case Wi:return r*e*2/i.components*i.byteLength;case El:return r*e*2/i.components*i.byteLength;case Qd:return r*e*3/i.components*i.byteLength;case wn:return r*e*4/i.components*i.byteLength;case Tl:return r*e*4/i.components*i.byteLength;case Wa:case Xa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qa:case $a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ao:case Co:return Math.max(r,16)*Math.max(e,8)/4;case To:case wo:return Math.max(r,8)*Math.max(e,8)/2;case Ro:case Po:case Io:case Do:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Qa:case No:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ko:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $o:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ko:case Jo:case Zo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qo:case jo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ja:case el:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ap(r){switch(r){case xn:case $d:return{byteLength:1,components:1};case Qr:case Yd:case Vn:return{byteLength:2,components:1};case yl:case Ml:return{byteLength:2,components:4};case Gn:case Sl:case On:return{byteLength:4,components:1};case Kd:case Jd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pu(){let r=null,e=!1,t=null,n=null;function i(a,s){n=r.requestAnimationFrame(i),t(a,s)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function sp(r){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,d);else{f.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<f.length;m++){const _=f[u],g=f[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,f[u]=g)}f.length=u+1;for(let m=0,_=f.length;m<_;m++){const g=f[m];r.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:s}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,am=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ng=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ng=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:op,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:dp,alphatest_fragment:up,alphatest_pars_fragment:fp,aomap_fragment:hp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:xp,iridescence_fragment:Sp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:wp,color_pars_vertex:Cp,color_vertex:Rp,common:Pp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Dp,displacementmap_vertex:Np,emissivemap_fragment:Up,emissivemap_pars_fragment:Fp,colorspace_fragment:Op,colorspace_pars_fragment:kp,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:Hp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:jp,envmap_vertex:Vp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:qp,fog_pars_fragment:$p,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Kp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:tm,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:rm,lights_physical_pars_fragment:am,lights_fragment_begin:sm,lights_fragment_maps:om,lights_fragment_end:lm,lightprobes_pars_fragment:cm,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:hm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:_m,metalnessmap_fragment:vm,metalnessmap_pars_fragment:xm,morphinstance_vertex:Sm,morphcolor_vertex:ym,morphnormal_vertex:Mm,morphtarget_pars_vertex:bm,morphtarget_vertex:Em,normal_fragment_begin:Tm,normal_fragment_maps:Am,normal_pars_fragment:wm,normal_pars_vertex:Cm,normal_vertex:Rm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Nm,opaque_fragment:Um,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:km,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:$m,skinning_pars_vertex:Ym,skinning_vertex:Km,skinnormal_vertex:Jm,specularmap_fragment:Zm,specularmap_pars_fragment:Qm,tonemapping_fragment:jm,tonemapping_pars_fragment:eg,transmission_fragment:tg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:rg,uv_vertex:ag,worldpos_vertex:sg,background_vert:og,background_frag:lg,backgroundCube_vert:cg,backgroundCube_frag:dg,cube_vert:ug,cube_frag:fg,depth_vert:hg,depth_frag:pg,distance_vert:mg,distance_frag:gg,equirect_vert:_g,equirect_frag:vg,linedashed_vert:xg,linedashed_frag:Sg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:bg,meshlambert_frag:Eg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:wg,meshnormal_frag:Cg,meshphong_vert:Rg,meshphong_frag:Pg,meshphysical_vert:Lg,meshphysical_frag:Ig,meshtoon_vert:Dg,meshtoon_frag:Ng,points_vert:Ug,points_frag:Fg,shadow_vert:Og,shadow_frag:kg,sprite_vert:Bg,sprite_frag:zg},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Nn={basic:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Vt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Vt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Vt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Vt([ue.points,ue.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Vt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Vt([ue.common,ue.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Vt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Vt([ue.sprite,ue.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Vt([ue.common,ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Vt([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Nn.physical={uniforms:Vt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ba={r:0,b:0,g:0},Hg=new St,mu=new Ie;mu.set(-1,0,0,0,1,0,0,0,1);function Gg(r,e,t,n,i,a){const s=new Ye(0);let o=i===!0?0:1,l,c,d=null,f=0,u=null;function m(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const S=y.backgroundBlurriness>0;w=e.get(w,S)}return w}function _(y){let w=!1;const S=m(y);S===null?p(s,o):S&&S.isColor&&(p(S,1),w=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,w){const S=m(w);S&&(S.isCubeTexture||S.mapping===hs)?(c===void 0&&(c=new ln(new fa(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Mr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mu),c.material.toneMapped=ze.getTransfer(S.colorSpace)!==Qe,(d!==S||f!==S.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,u=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ln(new ms(2,2),new Wn({name:"BackgroundMaterial",uniforms:Mr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ze.getTransfer(S.colorSpace)!==Qe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,u=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,w){y.getRGB(Ba,uu(r)),t.buffers.color.setClear(Ba.r,Ba.g,Ba.b,w,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,w=1){s.set(y),o=w,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(s,o)},render:_,addToRenderList:g,dispose:h}}function Vg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,s=!1;function o(P,U,O,L,F){let q=!1;const B=f(P,L,O,U);a!==B&&(a=B,c(a.object)),q=m(P,L,O,F),q&&_(P,L,O,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,S(P,U,O,L),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function d(P){return r.deleteVertexArray(P)}function f(P,U,O,L){const F=L.wireframe===!0;let q=n[U.id];q===void 0&&(q={},n[U.id]=q);const B=P.isInstancedMesh===!0?P.id:0;let Z=q[B];Z===void 0&&(Z={},q[B]=Z);let $=Z[O.id];$===void 0&&($={},Z[O.id]=$);let Q=$[F];return Q===void 0&&(Q=u(l()),$[F]=Q),Q}function u(P){const U=[],O=[],L=[];for(let F=0;F<t;F++)U[F]=0,O[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:L,object:P,attributes:{},index:null}}function m(P,U,O,L){const F=a.attributes,q=U.attributes;let B=0;const Z=O.getAttributes();for(const $ in Z)if(Z[$].location>=0){const W=F[$];let ce=q[$];if(ce===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),W===void 0||W.attribute!==ce||ce&&W.data!==ce.data)return!0;B++}return a.attributesNum!==B||a.index!==L}function _(P,U,O,L){const F={},q=U.attributes;let B=0;const Z=O.getAttributes();for(const $ in Z)if(Z[$].location>=0){let W=q[$];W===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(W=P.instanceColor));const ce={};ce.attribute=W,W&&W.data&&(ce.data=W.data),F[$]=ce,B++}a.attributes=F,a.attributesNum=B,a.index=L}function g(){const P=a.newAttributes;for(let U=0,O=P.length;U<O;U++)P[U]=0}function p(P){h(P,0)}function h(P,U){const O=a.newAttributes,L=a.enabledAttributes,F=a.attributeDivisors;O[P]=1,L[P]===0&&(r.enableVertexAttribArray(P),L[P]=1),F[P]!==U&&(r.vertexAttribDivisor(P,U),F[P]=U)}function y(){const P=a.newAttributes,U=a.enabledAttributes;for(let O=0,L=U.length;O<L;O++)U[O]!==P[O]&&(r.disableVertexAttribArray(O),U[O]=0)}function w(P,U,O,L,F,q,B){B===!0?r.vertexAttribIPointer(P,U,O,F,q):r.vertexAttribPointer(P,U,O,L,F,q)}function S(P,U,O,L){g();const F=L.attributes,q=O.getAttributes(),B=U.defaultAttributeValues;for(const Z in q){const $=q[Z];if($.location>=0){let Q=F[Z];if(Q===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const W=Q.normalized,ce=Q.itemSize,he=e.get(Q);if(he===void 0)continue;const Re=he.buffer,Pe=he.type,$e=he.bytesPerElement,K=Pe===r.INT||Pe===r.UNSIGNED_INT||Q.gpuType===Sl;if(Q.isInterleavedBufferAttribute){const te=Q.data,xe=te.stride,Le=Q.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<$.locationSize;_e++)h($.location+_e,te.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<$.locationSize;_e++)p($.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let _e=0;_e<$.locationSize;_e++)w($.location+_e,ce/$.locationSize,Pe,W,xe*$e,(Le+ce/$.locationSize*_e)*$e,K)}else{if(Q.isInstancedBufferAttribute){for(let te=0;te<$.locationSize;te++)h($.location+te,Q.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let te=0;te<$.locationSize;te++)p($.location+te);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let te=0;te<$.locationSize;te++)w($.location+te,ce/$.locationSize,Pe,W,ce*$e,ce/$.locationSize*te*$e,K)}}else if(B!==void 0){const W=B[Z];if(W!==void 0)switch(W.length){case 2:r.vertexAttrib2fv($.location,W);break;case 3:r.vertexAttrib3fv($.location,W);break;case 4:r.vertexAttrib4fv($.location,W);break;default:r.vertexAttrib1fv($.location,W)}}}}y()}function M(){E();for(const P in n){const U=n[P];for(const O in U){const L=U[O];for(const F in L){const q=L[F];for(const B in q)d(q[B].object),delete q[B];delete L[F]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const U=n[P.id];for(const O in U){const L=U[O];for(const F in L){const q=L[F];for(const B in q)d(q[B].object),delete q[B];delete L[F]}}delete n[P.id]}function A(P){for(const U in n){const O=n[U];for(const L in O){const F=O[L];if(F[P.id]===void 0)continue;const q=F[P.id];for(const B in q)d(q[B].object),delete q[B];delete F[P.id]}}}function v(P){for(const U in n){const O=n[U],L=P.isInstancedMesh===!0?P.id:0,F=O[L];if(F!==void 0){for(const q in F){const B=F[q];for(const Z in B)d(B[Z].object),delete B[Z];delete F[q]}delete O[L],Object.keys(O).length===0&&delete n[U]}}}function E(){R(),s=!0,a!==i&&(a=i,c(a.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function Wg(r,e,t){let n;function i(l){n=l}function a(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,d){d!==0&&(r.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let m=0;m<d;m++)u+=c[m];t.update(u,n,1)}this.setMode=i,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function Xg(r,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){return!(A!==wn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xn&&A!==On&&!v&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ce("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),h=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:S,maxSamples:M,samples:T}}function qg(r){const e=this;let t=null,n=0,i=!1,a=!1;const s=new mi,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||n!==0||i;return i=u,n=f.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=r.get(f);if(!i||_===null||_.length===0||a&&!p)a?d(null):c();else{const y=a?0:n,w=y*4;let S=h.clippingState||null;l.value=S,S=d(_,u,w,m);for(let M=0;M!==w;++M)S[M]=t[M];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let w=0,S=m;w!==g;++w,S+=4)s.copy(f[w]).applyMatrix4(y,o),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const fr=4,$g=6,Yg=20,Kg=256,Fr=new hu,Hc=new Ye;let Qs=null,js=0,eo=0,to=!1;const Jg=new z,Li=new z;class Gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,a={}){const{size:s=256,position:o=Jg}=a;Qs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qs,js,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Vn,format:wn,colorSpace:es,depthBuffer:!1},i=Vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zg(a)),this._blurMaterial=jg(a,e,t),this._ggxMaterial=Qg(a,e,t)}return i}_compileMaterial(e){const t=new ln(new nn,e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,n,i,a){const l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Hc),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new fa,new ur({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let h=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,h=!0):(p.color.copy(Hc),h=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[w],a.y,a.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[w],a.z)):(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[w]));const M=this._cubeSize;lr(i,S*M,w>2?M:0,M,M),f.setRenderTarget(i),h&&f.render(g,l),f.render(e,l)}f.toneMapping=m,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vi||e.mapping===yr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const a=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;lr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let a=1;a<i;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const l=s.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=c*1.25,m=f*u,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-fr?n-_+fr:0),h=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,lr(a,p,h,3*g,2*g),i.setRenderTarget(a),i.render(o,Fr),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-n,lr(e,p,h,3*g,2*g),i.setRenderTarget(e),i.render(o,Fr)}_blur(e,t,n,i){const a=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,s),this._blurPass(a,e,n,n,s)}_blurPass(e,t,n,i,a){const s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[i],f=3*d*(i>this._lodMax-fr?i-this._lodMax+fr:0),u=4*(this._cubeSize-d);lr(t,f,u,3*d,2*d),s.setRenderTarget(t),s.render(l,Fr)}}function Zg(r){const e=[],t=[];let n=r;const i=r-fr+1+$g;for(let a=0;a<i;a++){const s=Math.pow(2,n);e.push(s);const o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,m=3,_=new Float32Array(m*u*f),g=new Float32Array(m*u*f);for(let h=0;h<f;h++){const y=h%3*2/3-1,w=h>2?0:-1,S=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];_.set(S,m*u*h);for(let M=0;M<u;M++){const T=d[M*2]*2-1,A=d[M*2+1]*2-1;h===0?Li.set(1,A,T):h===1?Li.set(-T,1,-A):h===2?Li.set(-T,A,1):h===3?Li.set(-1,A,-T):h===4?Li.set(-T,-1,A):Li.set(T,A,-1),Li.toArray(g,(h*u+M)*m)}}const p=new nn;p.setAttribute("position",new Hn(_,m)),p.setAttribute("outputDirection",new Hn(g,m)),t.push(new ln(p,null)),n>fr&&n--}return{lodMeshes:t,sizeLods:e}}function Vc(r,e,t){const n=new Cn(r,e,t);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Qg(r,e,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function jg(r,e,t){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:Yg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Wc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function gs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gu extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fa(5,5,5),a=new Wn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ti});a.uniforms.tEquirect.value=t;const s=new ln(i,a),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=zt),new np(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}}function e_(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,m=!1){return u==null?null:m?s(u):a(u)}function a(u){if(u&&u.isTexture){const m=u.mapping;if(m===As||m===ws)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const g=new gu(_.height);return g.fromEquirectangularTexture(r,u),e.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const m=u.mapping,_=m===As||m===ws,g=m===Vi||m===yr;if(_||g){let p=t.get(u);const h=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new Gc(r)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return _&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new Gc(r)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,m){return m===As?u.mapping=Vi:m===ws&&(u.mapping=yr),u}function l(u){let m=0;const _=6;for(let g=0;g<_;g++)u[g]!==void 0&&m++;return m===_}function c(u){const m=u.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function t_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&gr("WebGLRenderer: "+n+" extension not supported."),i}}}function n_(r,e,t,n){const i={},a=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",s),delete i[u.id];const m=a.get(u);m&&(e.remove(m),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",s),i[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)e.update(u[m],r.ARRAY_BUFFER)}function c(f){const u=[],m=f.index,_=f.attributes.position;let g=0;if(_===void 0)return;if(m!==null){const y=m.array;g=m.version;for(let w=0,S=y.length;w<S;w+=3){const M=y[w+0],T=y[w+1],A=y[w+2];u.push(M,T,T,A,A,M)}}else{const y=_.array;g=_.version;for(let w=0,S=y.length/3-1;w<S;w+=3){const M=w+0,T=w+1,A=w+2;u.push(M,T,T,A,A,M)}}const p=new(_.count>=65535?au:ru)(u,1);p.version=g;const h=a.get(f);h&&e.remove(h),a.set(f,p)}function d(f){const u=a.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function i_(r,e,t){let n;function i(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,u){r.drawElements(n,u,a,f*s),t.update(u,n,1)}function c(f,u,m){m!==0&&(r.drawElementsInstanced(n,u,a,f*s,m),t.update(u,n,m))}function d(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,f,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];t.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function r_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:qe("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function a_(r,e,t){const n=new WeakMap,i=new gt;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var m=R;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let M=o.attributes.position.count*S,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*T*4*f),v=new tu(A,M,T,f);v.type=On,v.needsUpdate=!0;const E=S*4;for(let P=0;P<f;P++){const U=h[P],O=y[P],L=w[P],F=M*T*4*P;for(let q=0;q<U.count;q++){const B=q*E;_===!0&&(i.fromBufferAttribute(U,q),A[F+B+0]=i.x,A[F+B+1]=i.y,A[F+B+2]=i.z,A[F+B+3]=0),g===!0&&(i.fromBufferAttribute(O,q),A[F+B+4]=i.x,A[F+B+5]=i.y,A[F+B+6]=i.z,A[F+B+7]=0),p===!0&&(i.fromBufferAttribute(L,q),A[F+B+8]=i.x,A[F+B+9]=i.y,A[F+B+10]=i.z,A[F+B+11]=L.itemSize===4?i.w:1)}}u={count:f,texture:v,size:new Ve(M,T)},n.set(o,u),o.addEventListener("dispose",R)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:a}}function s_(r,e,t,n,i){let a=new WeakMap;function s(c){const d=i.render.frame,f=c.geometry,u=e.get(c,f);if(a.get(u)!==d&&(e.update(u),a.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==d&&(m.update(),a.set(m,d))}return u}function o(){a=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const o_={[Bd]:"LINEAR_TONE_MAPPING",[zd]:"REINHARD_TONE_MAPPING",[Hd]:"CINEON_TONE_MAPPING",[Gd]:"ACES_FILMIC_TONE_MAPPING",[Wd]:"AGX_TONE_MAPPING",[Xd]:"NEUTRAL_TONE_MAPPING",[Vd]:"CUSTOM_TONE_MAPPING"};function l_(r,e,t,n,i,a){const s=new Cn(e,t,{type:r,depthBuffer:i,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new nn;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const d=new jh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ln(c,d),u=new hu(-1,1,1,-1,0,1);let m=null,_=null,g=!1,p,h=null,y=[],w=!1;this.setSize=function(S,M){s.setSize(S,M),o!==null&&o.setSize(S,M),l!==null&&l.setSize(S,M);for(let T=0;T<y.length;T++){const A=y[T];A.setSize&&A.setSize(S,M)}},this.setEffects=function(S){y=S,w=y.length>0&&y[0].isRenderPass===!0;const M=s.width,T=s.height;y.length>0&&o===null&&(o=new Cn(M,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(M,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){const v=y[A];v.setSize&&v.setSize(M,T)}},this.begin=function(S,M){if(g||S.toneMapping===zn&&y.length===0)return!1;if(h=M,M!==null){const T=M.width,A=M.height;(s.width!==T||s.height!==A)&&this.setSize(T,A)}return w===!1&&S.setRenderTarget(s),p=S.toneMapping,S.toneMapping=zn,!0},this.hasRenderPass=function(){return w},this.end=function(S,M){S.toneMapping=p,g=!0;let T=s,A=o;for(let v=0;v<y.length;v++){const E=y[v];E.enabled!==!1&&(E.render(S,A,T,M),E.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,d.defines={},ze.getTransfer(m)===Qe&&(d.defines.SRGB_TRANSFER="");const v=o_[_];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(h),S.render(f,u),h=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const _u=new Xt,il=new ea(1,1),vu=new tu,xu=new Rh,Su=new cu,qc=[],$c=[],Yc=new Float32Array(16),Kc=new Float32Array(9),Jc=new Float32Array(4);function Pr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let a=qc[i];if(a===void 0&&(a=new Float32Array(i),qc[i]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _s(r,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function c_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function d_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function u_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function f_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function h_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Jc.set(n),r.uniformMatrix2fv(this.addr,!1,Jc),wt(t,n)}}function p_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Kc.set(n),r.uniformMatrix3fv(this.addr,!1,Kc),wt(t,n)}}function m_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Yc.set(n),r.uniformMatrix4fv(this.addr,!1,Yc),wt(t,n)}}function g_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function __(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function v_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function x_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function S_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function y_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function M_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function b_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function E_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let a;this.type===r.SAMPLER_2D_SHADOW?(il.compareFunction=t.isReversedDepthBuffer()?wl:Al,a=il):a=_u,t.setTexture2D(e||a,i)}function T_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xu,i)}function A_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Su,i)}function w_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vu,i)}function C_(r){switch(r){case 5126:return c_;case 35664:return d_;case 35665:return u_;case 35666:return f_;case 35674:return h_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return x_;case 5125:return S_;case 36294:return y_;case 36295:return M_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return w_}}function R_(r,e){r.uniform1fv(this.addr,e)}function P_(r,e){const t=Pr(e,this.size,2);r.uniform2fv(this.addr,t)}function L_(r,e){const t=Pr(e,this.size,3);r.uniform3fv(this.addr,t)}function I_(r,e){const t=Pr(e,this.size,4);r.uniform4fv(this.addr,t)}function D_(r,e){const t=Pr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function N_(r,e){const t=Pr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function U_(r,e){const t=Pr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function F_(r,e){r.uniform1iv(this.addr,e)}function O_(r,e){r.uniform2iv(this.addr,e)}function k_(r,e){r.uniform3iv(this.addr,e)}function B_(r,e){r.uniform4iv(this.addr,e)}function z_(r,e){r.uniform1uiv(this.addr,e)}function H_(r,e){r.uniform2uiv(this.addr,e)}function G_(r,e){r.uniform3uiv(this.addr,e)}function V_(r,e){r.uniform4uiv(this.addr,e)}function W_(r,e,t){const n=this.cache,i=e.length,a=_s(t,i);At(n,a)||(r.uniform1iv(this.addr,a),wt(n,a));let s;this.type===r.SAMPLER_2D_SHADOW?s=il:s=_u;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||s,a[o])}function X_(r,e,t){const n=this.cache,i=e.length,a=_s(t,i);At(n,a)||(r.uniform1iv(this.addr,a),wt(n,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||xu,a[s])}function q_(r,e,t){const n=this.cache,i=e.length,a=_s(t,i);At(n,a)||(r.uniform1iv(this.addr,a),wt(n,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Su,a[s])}function $_(r,e,t){const n=this.cache,i=e.length,a=_s(t,i);At(n,a)||(r.uniform1iv(this.addr,a),wt(n,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||vu,a[s])}function Y_(r){switch(r){case 5126:return R_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return D_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return k_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return H_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return $_}}class K_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class J_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}}class Z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Zc(r,e){r.seq.push(e),r.map[e.id]=e}function Q_(r,e,t){const n=r.name,i=n.length;for(no.lastIndex=0;;){const a=no.exec(n),s=no.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Zc(t,c===void 0?new K_(o,r,e):new J_(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new Z_(o),Zc(t,f)),t=f}}}class Ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);Q_(o,l,this)}const i=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):a.push(s);i.length>0&&(this.seq=i.concat(a))}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Qc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const j_=37297;let e0=0;function t0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=i;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const jc=new Ie;function n0(r){ze._getMatrix(jc,ze.workingColorSpace,r);const e=`mat3( ${jc.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(r)){case ts:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ed(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),a=(r.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+t0(r.getShaderSource(e),o)}else return a}function i0(r,e){const t=n0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const r0={[Bd]:"Linear",[zd]:"Reinhard",[Hd]:"Cineon",[Gd]:"ACESFilmic",[Wd]:"AgX",[Xd]:"Neutral",[Vd]:"Custom"};function a0(r,e){const t=r0[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const za=new z;function s0(){ze.getLuminanceCoefficients(za);const r=za.x.toFixed(4),e=za.y.toFixed(4),t=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function l0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function c0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=r.getActiveAttrib(e,i),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Vr(r){return r!==""}function td(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(r){return r.replace(d0,f0)}const u0=new Map;function f0(r,e){let t=Ue[e];if(t===void 0){const n=u0.get(e);if(n!==void 0)t=Ue[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rl(t)}const h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(r){return r.replace(h0,p0)}function p0(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function rd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const m0={[Va]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function g0(r){return m0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _0={[Vi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE_UV"};function v0(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_0[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const x0={[yr]:"ENVMAP_MODE_REFRACTION"};function S0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":x0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y0={[kd]:"ENVMAP_BLENDING_MULTIPLY",[sh]:"ENVMAP_BLENDING_MIX",[oh]:"ENVMAP_BLENDING_ADD"};function M0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":y0[r.combine]||"ENVMAP_BLENDING_NONE"}function b0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function E0(r,e,t,n){const i=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=g0(t),c=v0(t),d=S0(t),f=M0(t),u=b0(t),m=o0(t),_=l0(a),g=i.createProgram();let p,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vr).join(`
`),h.length>0&&(h+=`
`)):(p=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),h=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==zn?a0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),s0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),s=rl(s),s=td(s,t),s=nd(s,t),o=rl(o),o=td(o,t),o=nd(o,t),s=id(s),o=id(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=y+p+s,S=y+h+o,M=Qc(i,i.VERTEX_SHADER,w),T=Qc(i,i.FRAGMENT_SHADER,S);i.attachShader(g,M),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g)||"",O=i.getShaderInfoLog(M)||"",L=i.getShaderInfoLog(T)||"",F=U.trim(),q=O.trim(),B=L.trim();let Z=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,T);else{const Q=ed(i,M,"vertex"),W=ed(i,T,"fragment");qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Q+`
`+W)}else F!==""?Ce("WebGLProgram: Program Info Log:",F):(q===""||B==="")&&($=!1);$&&(P.diagnostics={runnable:Z,programLog:F,vertexShader:{log:q,prefix:p},fragmentShader:{log:B,prefix:h}})}i.deleteShader(M),i.deleteShader(T),v=new Ya(i,g),E=c0(i,g)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(g,j_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}let T0=0;class A0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new w0(e),t.set(e,n)),n}}class w0{constructor(e){this.id=T0++,this.code=e,this.usedTimes=0}}function C0(r){return r===Wi||r===Qa||r===ja}function R0(r,e,t,n,i,a){const s=new nu,o=new A0,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,E,R,P,U,O){const L=P.fog,F=U.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||q,B),$=Z&&Z.mapping===hs?Z.image.height:null,Q=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const W=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ce=W!==void 0?W.length:0;let he=0;F.morphAttributes.position!==void 0&&(he=1),F.morphAttributes.normal!==void 0&&(he=2),F.morphAttributes.color!==void 0&&(he=3);let Re,Pe,$e,K;if(Q){const rt=Nn[Q];Re=rt.vertexShader,Pe=rt.fragmentShader}else{Re=v.vertexShader,Pe=v.fragmentShader;const rt=o.getVertexShaderStage(v),Ke=o.getFragmentShaderStage(v);o.update(v,rt,Ke),$e=rt.id,K=Ke.id}const te=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),Le=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,Fe=!!v.map,Tt=!!v.matcap,Oe=!!Z,Xe=!!v.aoMap,it=!!v.lightMap,Be=!!v.bumpMap&&v.wireframe===!1,lt=!!v.normalMap,Ct=!!v.displacementMap,qt=!!v.emissiveMap,ut=!!v.metalnessMap,yt=!!v.roughnessMap,N=v.anisotropy>0,Ut=v.clearcoat>0,Ze=v.dispersion>0,C=v.retroreflectivity>0,x=v.iridescence>0,k=v.sheen>0,V=v.transmission>0,Y=N&&!!v.anisotropyMap,ie=Ut&&!!v.clearcoatMap,re=Ut&&!!v.clearcoatNormalMap,J=Ut&&!!v.clearcoatRoughnessMap,ee=x&&!!v.iridescenceMap,ae=x&&!!v.iridescenceThicknessMap,Ee=k&&!!v.sheenColorMap,de=k&&!!v.sheenRoughnessMap,se=!!v.specularMap,Te=!!v.specularColorMap,we=!!v.specularIntensityMap,De=V&&!!v.transmissionMap,D=V&&!!v.thicknessMap,oe=!!v.gradientMap,j=!!v.alphaMap,le=v.alphaTest>0,me=!!v.alphaHash,ne=!!v.extensions;let Ae=zn;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const Me={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:Re,fragmentShader:Pe,defines:v.defines,customVertexShaderID:$e,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Fe,matcap:Tt,envMap:Oe,envMapMode:Oe&&Z.mapping,envMapCubeUVHeight:$,aoMap:Xe,lightMap:it,bumpMap:Be,normalMap:lt,displacementMap:Ct,emissiveMap:qt,normalMapObjectSpace:lt&&v.normalMapType===dh,normalMapTangentSpace:lt&&v.normalMapType===gc,packedNormalMap:lt&&v.normalMapType===gc&&C0(v.normalMap.format),metalnessMap:ut,roughnessMap:yt,anisotropy:N,anisotropyMap:Y,clearcoat:Ut,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:J,dispersion:Ze,retroreflection:C,iridescence:x,iridescenceMap:ee,iridescenceThicknessMap:ae,sheen:k,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:se,specularColorMap:Te,specularIntensityMap:we,transmission:V,transmissionMap:De,thicknessMap:D,gradientMap:oe,opaque:v.transparent===!1&&v.blending===$r&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:le,alphaHash:me,combine:v.combine,mapUv:Fe&&_(v.map.channel),aoMapUv:Xe&&_(v.aoMap.channel),lightMapUv:it&&_(v.lightMap.channel),bumpMapUv:Be&&_(v.bumpMap.channel),normalMapUv:lt&&_(v.normalMap.channel),displacementMapUv:Ct&&_(v.displacementMap.channel),emissiveMapUv:qt&&_(v.emissiveMap.channel),metalnessMapUv:ut&&_(v.metalnessMap.channel),roughnessMapUv:yt&&_(v.roughnessMap.channel),anisotropyMapUv:Y&&_(v.anisotropyMap.channel),clearcoatMapUv:ie&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(v.sheenRoughnessMap.channel),specularMapUv:se&&_(v.specularMap.channel),specularColorMapUv:Te&&_(v.specularColorMap.channel),specularIntensityMapUv:we&&_(v.specularIntensityMap.channel),transmissionMapUv:De&&_(v.transmissionMap.channel),thicknessMapUv:D&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(lt||N),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Fe||j),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:he,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Fe&&v.map.isVideoTexture===!0&&ze.getTransfer(v.map.colorSpace)===Qe,decodeVideoTextureEmissive:qt&&v.emissiveMap.isVideoTexture===!0&&ze.getTransfer(v.emissiveMap.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Un,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(h(E,v),y(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function h(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.retroreflection&&s.enable(24),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function w(v){const E=m[v.type];let R;if(E){const P=Nn[E];R=Jh.clone(P.uniforms)}else R=v.uniforms;return R}function S(v,E){let R=d.get(E);return R!==void 0?++R.usedTimes:(R=new E0(r,E,v,i),c.push(R),d.set(E,R)),R}function M(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function P0(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function n(s){r.delete(s)}function i(s,o,l){r.get(s)[o]=l}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function L0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function ad(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sd(){const r=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function s(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,g,p,h){let y=r[e];return y===void 0?(y={id:u.id,object:u,geometry:m,material:_,materialVariant:s(u),groupOrder:g,renderOrder:u.renderOrder,z:p,group:h},r[e]=y):(y.id=u.id,y.object=u,y.geometry=m,y.material=_,y.materialVariant=s(u),y.groupOrder=g,y.renderOrder=u.renderOrder,y.z=p,y.group=h),e++,y}function l(u,m,_,g,p,h,y){y.reversedDepth===!0&&(p=-p);const w=o(u,m,_,g,p,h);_.transmission>0?n.push(w):_.transparent===!0?i.push(w):t.push(w)}function c(u,m,_,g,p,h){const y=o(u,m,_,g,p,h);_.transmission>0?n.unshift(y):_.transparent===!0?i.unshift(y):t.unshift(y)}function d(u,m){t.length>1&&t.sort(u||L0),n.length>1&&n.sort(m||ad),i.length>1&&i.sort(m||ad)}function f(){for(let u=e,m=r.length;u<m;u++){const _=r[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:l,unshift:c,finish:f,sort:d}}function I0(){let r=new WeakMap;function e(n,i){const a=r.get(n);let s;return a===void 0?(s=new sd,r.set(n,[s])):i>=a.length?(s=new sd,a.push(s)):s=a[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function D0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ye};break;case"SpotLight":t={position:new z,direction:new z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function N0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let U0=0;function F0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function O0(r){const e=new D0,t=N0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,a=new St,s=new St;function o(c){let d=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,_=0,g=0,p=0,h=0,y=0,w=0,S=0,M=0,T=0,A=0,v=0,E=0,R=0;c.sort(F0);for(let U=0,O=c.length;U<O;U++){const L=c[U],F=L.color,q=L.intensity,B=L.distance;let Z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Wi?Z=L.shadow.map.texture:Z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=F.r*q,f+=F.g*q,u+=F.b*q;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],q);R++}else if(L.isSunLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=W,n.sunShadowMap[_]=Z;const ce=Q.getViewportCount();for(let he=0;he<ce;he++)n.sunShadowMatrix[g+he]=Q.getMatrix(he),n.sunShadowCascade[g+he]=Q._cascadeData[he];g+=ce,_++}n.sun[m]=$,m++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=$,p++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(F).multiplyScalar(q),$.distance=B,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[y]=$;const Q=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,Q.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[y]=Q.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=Z,A++}y++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(F).multiplyScalar(q),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=$,w++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const Q=L.shadow,W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,n.pointShadow[h]=W,n.pointShadowMap[h]=Z,n.pointShadowMatrix[h]=L.shadow.matrix,T++}n.point[h]=$,h++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(q),$.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[S]=$,S++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const P=n.hash;(P.sunLength!==m||P.directionalLength!==p||P.pointLength!==h||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==S||P.numSunShadows!==_||P.numDirectionalShadows!==M||P.numPointShadows!==T||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=p,n.spot.length=y,n.rectArea.length=w,n.point.length=h,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=m,P.directionalLength=p,P.pointLength=h,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=S,P.numSunShadows=_,P.numDirectionalShadows=M,P.numPointShadows=T,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=R,n.version=U0++)}function l(c,d){let f=0,u=0,m=0,_=0,g=0,p=0;const h=d.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const S=c[y];if(S.isSunLight){const M=n.sun[f];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(h),f++}else if(S.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(h),u++}else if(S.isSpotLight){const M=n.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(h),_++}else if(S.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(h),s.identity(),a.copy(S.matrixWorld),a.premultiply(h),s.extractRotation(a),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){const M=n.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(h),m++}else if(S.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(h),p++}}}return{setup:o,setupView:l,state:n}}function od(r){const e=new O0(r),t=[],n=[],i=[];function a(u){f.camera=u,t.length=0,n.length=0,i.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function k0(r){let e=new WeakMap;function t(i,a=0){const s=e.get(i);let o;return s===void 0?(o=new od(r),e.set(i,[o])):a>=s.length?(o=new od(r),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],G0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],ld=new St,Or=new z,io=new z;function V0(r,e,t){let n=new ou;const i=new Ve,a=new Ve,s=new gt,o=new ep,l=new tp,c={},d=t.maxTextureSize,f={[Gi]:Kt,[Kt]:Gi,[Un]:Un},u=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:B0,fragmentShader:z0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ln(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let h=this.type;this.render=function(T,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Hf&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Va);const E=r.getRenderTarget(),R=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ti),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=h!==this.type;O&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=T.length;L<F;L++){const q=T[L],B=q.shadow;if(B===void 0){Ce("WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Z=B.getFrameExtents();i.multiply(Z),a.copy(B.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/Z.x),i.x=a.x*Z.x,B.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/Z.y),i.y=a.y*Z.y,B.mapSize.y=a.y));const $=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Hr){if(q.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Cn(i.x,i.y,{format:Wi,type:Vn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),B.map.texture.name=q.name+".shadowMap",B.map.depthTexture=new ea(i.x,i.y,On),B.map.depthTexture.name=q.name+".shadowMapDepth",B.map.depthTexture.format=ii,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dt,B.map.depthTexture.magFilter=Dt}else q.isPointLight?(B.map=new gu(i.x),B.map.depthTexture=new Yh(i.x,Gn)):(B.map=new Cn(i.x,i.y),B.map.depthTexture=new ea(i.x,i.y,Gn)),B.map.depthTexture.name=q.name+".shadowMap",B.map.depthTexture.format=ii,this.type===Va?(B.map.depthTexture.compareFunction=$?wl:Al,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dt,B.map.depthTexture.magFilter=Dt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);const Q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();q.isPointLight!==!0&&B.updateMatrices(q,v);for(let W=0;W<Q;W++){const ce=B.getCamera(W);if(q.isPointLight){const he=B.camera,Re=B.matrix,Pe=q.distance||he.far;Pe!==he.far&&(he.far=Pe,he.updateProjectionMatrix()),Or.setFromMatrixPosition(q.matrixWorld),he.position.copy(Or),io.copy(he.position),io.add(H0[W]),he.up.copy(G0[W]),he.lookAt(io),he.updateMatrixWorld(),Re.makeTranslation(-Or.x,-Or.y,-Or.z),ld.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ld,he.coordinateSystem,he.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,W),r.clear();else{W===0&&(r.setRenderTarget(B.map),r.clear());const he=B.getViewport(W);s.set(a.x*he.x,a.y*he.y,a.x*he.z,a.y*he.w),U.viewport(s)}n=B.getFrustum(W),S(A,v,ce,q,this.type)}B.isPointLightShadow!==!0&&this.type===Hr&&y(B,v),B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,r.setRenderTarget(E,R,P)};function y(T,A){const v=e.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Cn(i.x,i.y,{format:Wi,type:Vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,v,u,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,v,m,g,null)}function w(T,A,v,E){let R=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=R.uuid,O=A.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let F=L[O];F===void 0&&(F=R.clone(),L[O]=F,A.addEventListener("dispose",M)),R=F}if(R.visible=A.visible,R.wireframe=A.wireframe,E===Hr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=r.properties.get(R);U.light=v}return R}function S(T,A,v,E,R){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Hr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const O=e.update(T),L=T.material;if(Array.isArray(L)){const F=O.groups;for(let q=0,B=F.length;q<B;q++){const Z=F[q],$=L[Z.materialIndex];if($&&$.visible){const Q=w(T,$,E,R);T.onBeforeShadow(r,T,A,v,O,Q,Z),r.renderBufferDirect(v,null,O,Q,T,Z),T.onAfterShadow(r,T,A,v,O,Q,Z)}}}else if(L.visible){const F=w(T,L,E,R);T.onBeforeShadow(r,T,A,v,O,F,null),r.renderBufferDirect(v,null,O,F,T,null),T.onAfterShadow(r,T,A,v,O,F,null)}}const U=T.children;for(let O=0,L=U.length;O<L;O++)S(U[O],A,v,E,R)}function M(T){T.target.removeEventListener("dispose",M);for(const v in c){const E=c[v],R=T.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function W0(r,e){function t(){let D=!1;const oe=new gt;let j=null;const le=new gt(0,0,0,0);return{setMask:function(me){j!==me&&!D&&(r.colorMask(me,me,me,me),j=me)},setLocked:function(me){D=me},setClear:function(me,ne,Ae,Me,rt){rt===!0&&(me*=Me,ne*=Me,Ae*=Me),oe.set(me,ne,Ae,Me),le.equals(oe)===!1&&(r.clearColor(me,ne,Ae,Me),le.copy(oe))},reset:function(){D=!1,j=null,le.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,j=null,le=null,me=null;return{setReversed:function(ne){if(oe!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;const Me=me;me=null,this.setClear(Me)}},getReversed:function(){return oe},setTest:function(ne){ne?te(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(ne){j!==ne&&!D&&(r.depthMask(ne),j=ne)},setFunc:function(ne){if(oe&&(ne=Mh[ne]),le!==ne){switch(ne){case go:r.depthFunc(r.NEVER);break;case _o:r.depthFunc(r.ALWAYS);break;case vo:r.depthFunc(r.LESS);break;case Zr:r.depthFunc(r.LEQUAL);break;case xo:r.depthFunc(r.EQUAL);break;case So:r.depthFunc(r.GEQUAL);break;case yo:r.depthFunc(r.GREATER);break;case Mo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=ne}},setLocked:function(ne){D=ne},setClear:function(ne){me!==ne&&(me=ne,oe&&(ne=1-ne),r.clearDepth(ne))},reset:function(){D=!1,j=null,le=null,me=null,oe=!1}}}function i(){let D=!1,oe=null,j=null,le=null,me=null,ne=null,Ae=null,Me=null,rt=null;return{setTest:function(Ke){D||(Ke?te(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!D&&(r.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,Mn,Rn){(j!==Ke||le!==Mn||me!==Rn)&&(r.stencilFunc(Ke,Mn,Rn),j=Ke,le=Mn,me=Rn)},setOp:function(Ke,Mn,Rn){(ne!==Ke||Ae!==Mn||Me!==Rn)&&(r.stencilOp(Ke,Mn,Rn),ne=Ke,Ae=Mn,Me=Rn)},setLocked:function(Ke){D=Ke},setClear:function(Ke){rt!==Ke&&(r.clearStencil(Ke),rt=Ke)},reset:function(){D=!1,oe=null,j=null,le=null,me=null,ne=null,Ae=null,Me=null,rt=null}}}const a=new t,s=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},f={},u={},m=new WeakMap,_=[],g=null,p=!1,h=null,y=null,w=null,S=null,M=null,T=null,A=null,v=new Ye(0,0,0),E=0,R=!1,P=null,U=null,O=null,L=null,F=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),B=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=Z>=2);let Q=null,W={};const ce=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),Re=new gt().fromArray(ce),Pe=new gt().fromArray(he);function $e(D,oe,j,le){const me=new Uint8Array(4),ne=r.createTexture();r.bindTexture(D,ne),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ae=0;Ae<j;Ae++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(oe,0,r.RGBA,1,1,le,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(oe+Ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return ne}const K={};K[r.TEXTURE_2D]=$e(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=$e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=$e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=$e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(r.DEPTH_TEST),s.setFunc(Zr),Be(!1),lt(fc),te(r.CULL_FACE),Xe(ti);function te(D){d[D]!==!0&&(r.enable(D),d[D]=!0)}function xe(D){d[D]!==!1&&(r.disable(D),d[D]=!1)}function Le(D,oe){return u[D]!==oe?(r.bindFramebuffer(D,oe),u[D]=oe,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=oe),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=oe),!0):!1}function _e(D,oe){let j=_,le=!1;if(D){j=m.get(oe),j===void 0&&(j=[],m.set(oe,j));const me=D.textures;if(j.length!==me.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,Ae=me.length;ne<Ae;ne++)j[ne]=r.COLOR_ATTACHMENT0+ne;j.length=me.length,le=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,le=!0);le&&r.drawBuffers(j)}function Fe(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const Tt={[dr]:r.FUNC_ADD,[Vf]:r.FUNC_SUBTRACT,[Wf]:r.FUNC_REVERSE_SUBTRACT};Tt[Xf]=r.MIN,Tt[qf]=r.MAX;const Oe={[$f]:r.ZERO,[Yf]:r.ONE,[Kf]:r.SRC_COLOR,[Fd]:r.SRC_ALPHA,[th]:r.SRC_ALPHA_SATURATE,[jf]:r.DST_COLOR,[Zf]:r.DST_ALPHA,[Jf]:r.ONE_MINUS_SRC_COLOR,[Od]:r.ONE_MINUS_SRC_ALPHA,[eh]:r.ONE_MINUS_DST_COLOR,[Qf]:r.ONE_MINUS_DST_ALPHA,[nh]:r.CONSTANT_COLOR,[ih]:r.ONE_MINUS_CONSTANT_COLOR,[rh]:r.CONSTANT_ALPHA,[ah]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(D,oe,j,le,me,ne,Ae,Me,rt,Ke){if(D===ti){p===!0&&(xe(r.BLEND),p=!1);return}if(p===!1&&(te(r.BLEND),p=!0),D!==Gf){if(D!==h||Ke!==R){if((y!==dr||M!==dr)&&(r.blendEquation(r.FUNC_ADD),y=dr,M=dr),Ke)switch(D){case $r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hc:r.blendFunc(r.ONE,r.ONE);break;case pc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qe("WebGLState: Invalid blending: ",D);break}else switch(D){case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case pc:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",D);break}w=null,S=null,T=null,A=null,v.set(0,0,0),E=0,h=D,R=Ke}return}me=me||oe,ne=ne||j,Ae=Ae||le,(oe!==y||me!==M)&&(r.blendEquationSeparate(Tt[oe],Tt[me]),y=oe,M=me),(j!==w||le!==S||ne!==T||Ae!==A)&&(r.blendFuncSeparate(Oe[j],Oe[le],Oe[ne],Oe[Ae]),w=j,S=le,T=ne,A=Ae),(Me.equals(v)===!1||rt!==E)&&(r.blendColor(Me.r,Me.g,Me.b,rt),v.copy(Me),E=rt),h=D,R=!1}function it(D,oe){D.side===Un?xe(r.CULL_FACE):te(r.CULL_FACE);let j=D.side===Kt;oe&&(j=!j),Be(j),D.blending===$r&&D.transparent===!1?Xe(ti):Xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),a.setMask(D.colorWrite);const le=D.stencilWrite;o.setTest(le),le&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),qt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){P!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),P=D)}function lt(D){D!==Bf?(te(r.CULL_FACE),D!==U&&(D===fc?r.cullFace(r.BACK):D===zf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),U=D}function Ct(D){D!==O&&(B&&r.lineWidth(D),O=D)}function qt(D,oe,j){D?(te(r.POLYGON_OFFSET_FILL),(L!==oe||F!==j)&&(L=oe,F=j,s.getReversed()&&(oe=-oe),r.polygonOffset(oe,j))):xe(r.POLYGON_OFFSET_FILL)}function ut(D){D?te(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function yt(D){D===void 0&&(D=r.TEXTURE0+q-1),Q!==D&&(r.activeTexture(D),Q=D)}function N(D,oe,j){j===void 0&&(Q===null?j=r.TEXTURE0+q-1:j=Q);let le=W[j];le===void 0&&(le={type:void 0,texture:void 0},W[j]=le),(le.type!==D||le.texture!==oe)&&(Q!==j&&(r.activeTexture(j),Q=j),r.bindTexture(D,oe||K[D]),le.type=D,le.texture=oe)}function Ut(){const D=W[Q];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ze(){try{r.compressedTexImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function x(){try{r.texSubImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function k(){try{r.texSubImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function Y(){try{r.compressedTexSubImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function ie(){try{r.texStorage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function re(){try{r.texStorage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function J(){try{r.texImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function ee(){try{r.texImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function ae(D){return f[D]!==void 0?f[D]:r.getParameter(D)}function Ee(D,oe){f[D]!==oe&&(r.pixelStorei(D,oe),f[D]=oe)}function de(D){Re.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Re.copy(D))}function se(D){Pe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Pe.copy(D))}function Te(D,oe){let j=c.get(oe);j===void 0&&(j=new WeakMap,c.set(oe,j));let le=j.get(D);le===void 0&&(le=r.getUniformBlockIndex(oe,D.name),j.set(D,le))}function we(D,oe){const le=c.get(oe).get(D);l.get(oe)!==le&&(r.uniformBlockBinding(oe,le,D.__bindingPointIndex),l.set(oe,le))}function De(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),d={},f={},Q=null,W={},u={},m=new WeakMap,_=[],g=null,p=!1,h=null,y=null,w=null,S=null,M=null,T=null,A=null,v=new Ye(0,0,0),E=0,R=!1,P=null,U=null,O=null,L=null,F=null,Re.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:te,disable:xe,bindFramebuffer:Le,drawBuffers:_e,useProgram:Fe,setBlending:Xe,setMaterial:it,setFlipSided:Be,setCullFace:lt,setLineWidth:Ct,setPolygonOffset:qt,setScissorTest:ut,activeTexture:yt,bindTexture:N,unbindTexture:Ut,compressedTexImage2D:Ze,compressedTexImage3D:C,texImage2D:J,texImage3D:ee,pixelStorei:Ee,getParameter:ae,updateUBOMapping:Te,uniformBlockBinding:we,texStorage2D:ie,texStorage3D:re,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:de,viewport:se,reset:De}}function X0(r,e,t,n,i,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,d=new WeakMap,f=new Set;let u;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return _?new OffscreenCanvas(C,x):is("canvas")}function p(C,x,k){let V=1;const Y=Ze(C);if((Y.width>k||Y.height>k)&&(V=k/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ie=Math.floor(V*Y.width),re=Math.floor(V*Y.height);u===void 0&&(u=g(ie,re));const J=x?g(ie,re):u;return J.width=ie,J.height=re,J.getContext("2d").drawImage(C,0,0,ie,re),Ce("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ie+"x"+re+")."),J}else return"data"in C&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function h(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,x,k,V,Y,ie=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re;V&&(re=e.get("EXT_texture_norm16"),re||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===r.RED&&(k===r.FLOAT&&(J=r.R32F),k===r.HALF_FLOAT&&(J=r.R16F),k===r.UNSIGNED_BYTE&&(J=r.R8),k===r.UNSIGNED_SHORT&&re&&(J=re.R16_EXT),k===r.SHORT&&re&&(J=re.R16_SNORM_EXT)),x===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.R8UI),k===r.UNSIGNED_SHORT&&(J=r.R16UI),k===r.UNSIGNED_INT&&(J=r.R32UI),k===r.BYTE&&(J=r.R8I),k===r.SHORT&&(J=r.R16I),k===r.INT&&(J=r.R32I)),x===r.RG&&(k===r.FLOAT&&(J=r.RG32F),k===r.HALF_FLOAT&&(J=r.RG16F),k===r.UNSIGNED_BYTE&&(J=r.RG8),k===r.UNSIGNED_SHORT&&re&&(J=re.RG16_EXT),k===r.SHORT&&re&&(J=re.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RG8UI),k===r.UNSIGNED_SHORT&&(J=r.RG16UI),k===r.UNSIGNED_INT&&(J=r.RG32UI),k===r.BYTE&&(J=r.RG8I),k===r.SHORT&&(J=r.RG16I),k===r.INT&&(J=r.RG32I)),x===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGB8UI),k===r.UNSIGNED_SHORT&&(J=r.RGB16UI),k===r.UNSIGNED_INT&&(J=r.RGB32UI),k===r.BYTE&&(J=r.RGB8I),k===r.SHORT&&(J=r.RGB16I),k===r.INT&&(J=r.RGB32I)),x===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),k===r.UNSIGNED_INT&&(J=r.RGBA32UI),k===r.BYTE&&(J=r.RGBA8I),k===r.SHORT&&(J=r.RGBA16I),k===r.INT&&(J=r.RGBA32I)),x===r.RGB&&(k===r.UNSIGNED_SHORT&&re&&(J=re.RGB16_EXT),k===r.SHORT&&re&&(J=re.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),x===r.RGBA){const ee=ie?ts:ze.getTransfer(Y);k===r.FLOAT&&(J=r.RGBA32F),k===r.HALF_FLOAT&&(J=r.RGBA16F),k===r.UNSIGNED_BYTE&&(J=ee===Qe?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&re&&(J=re.RGBA16_EXT),k===r.SHORT&&re&&(J=re.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(C,x){let k;return C?x===null||x===Gn||x===jr?k=r.DEPTH24_STENCIL8:x===On?k=r.DEPTH32F_STENCIL8:x===Qr&&(k=r.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gn||x===jr?k=r.DEPTH_COMPONENT24:x===On?k=r.DEPTH_COMPONENT32F:x===Qr&&(k=r.DEPTH_COMPONENT16),k}function T(C,x){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==zt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){const x=C.target;x.removeEventListener("dispose",A),E(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&f.delete(x)}function v(C){const x=C.target;x.removeEventListener("dispose",v),P(x)}function E(C){const x=n.get(C);if(x.__webglInit===void 0)return;const k=C.source,V=m.get(k);if(V){const Y=V[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(V).length===0&&m.delete(k)}n.remove(C)}function R(C){const x=n.get(C);r.deleteTexture(x.__webglTexture);const k=C.source,V=m.get(k);delete V[x.__cacheKey],s.memory.textures--}function P(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let Y=0;Y<x.__webglFramebuffer[V].length;Y++)r.deleteFramebuffer(x.__webglFramebuffer[V][Y]);else r.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)r.deleteFramebuffer(x.__webglFramebuffer[V]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=C.textures;for(let V=0,Y=k.length;V<Y;V++){const ie=n.get(k[V]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),s.memory.textures--),n.remove(k[V])}n.remove(C)}let U=0;function O(){U=0}function L(){return U}function F(C){U=C}function q(){const C=U;return C>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,C}function B(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Z(C,x){const k=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const V=C.image;if(V===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,C,x);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+x)}function $(C,x){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){xe(k,C,x);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+x)}function Q(C,x){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){xe(k,C,x);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+x)}function W(C,x){const k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Le(k,C,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+x)}const ce={[bo]:r.REPEAT,[jn]:r.CLAMP_TO_EDGE,[Eo]:r.MIRRORED_REPEAT},he={[Dt]:r.NEAREST,[lh]:r.NEAREST_MIPMAP_NEAREST,[_a]:r.NEAREST_MIPMAP_LINEAR,[zt]:r.LINEAR,[Cs]:r.LINEAR_MIPMAP_NEAREST,[Ui]:r.LINEAR_MIPMAP_LINEAR},Re={[fh]:r.NEVER,[_h]:r.ALWAYS,[hh]:r.LESS,[Al]:r.LEQUAL,[ph]:r.EQUAL,[wl]:r.GEQUAL,[mh]:r.GREATER,[gh]:r.NOTEQUAL};function Pe(C,x){if(x.type===On&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===zt||x.magFilter===Cs||x.magFilter===_a||x.magFilter===Ui||x.minFilter===zt||x.minFilter===Cs||x.minFilter===_a||x.minFilter===Ui)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ce[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ce[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ce[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,he[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dt||x.minFilter!==_a&&x.minFilter!==Ui||x.type===On&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $e(C,x){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));const V=x.source;let Y=m.get(V);Y===void 0&&(Y={},m.set(V,Y));const ie=B(x);if(ie!==C.__cacheKey){Y[ie]===void 0&&(Y[ie]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,k=!0),Y[ie].usedTimes++;const re=Y[C.__cacheKey];re!==void 0&&(Y[C.__cacheKey].usedTimes--,re.usedTimes===0&&R(x)),C.__cacheKey=ie,C.__webglTexture=Y[ie].texture}return k}function K(C,x,k){return Math.floor(Math.floor(C/k)/x)}function te(C,x,k,V){const ie=C.updateRanges;if(ie.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,k,V,x.data);else{ie.sort((Ee,de)=>Ee.start-de.start);let re=0;for(let Ee=1;Ee<ie.length;Ee++){const de=ie[re],se=ie[Ee],Te=de.start+de.count,we=K(se.start,x.width,4),De=K(de.start,x.width,4);se.start<=Te+1&&we===De&&K(se.start+se.count-1,x.width,4)===we?de.count=Math.max(de.count,se.start+se.count-de.start):(++re,ie[re]=se)}ie.length=re+1;const J=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),ae=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,de=ie.length;Ee<de;Ee++){const se=ie[Ee],Te=Math.floor(se.start/4),we=Math.ceil(se.count/4),De=Te%x.width,D=Math.floor(Te/x.width),oe=we,j=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,De),t.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,De,D,oe,j,k,V,x.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,J),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function xe(C,x,k){let V=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=r.TEXTURE_3D);const Y=$e(C,x),ie=x.source;t.bindTexture(V,C.__webglTexture,r.TEXTURE0+k);const re=n.get(ie);if(ie.version!==re.__version||Y===!0){if(t.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=ze.getPrimaries(ze.workingColorSpace),le=x.colorSpace===gi?null:ze.getPrimaries(x.colorSpace),me=x.colorSpace===gi||j===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let ee=p(x.image,!1,i.maxTextureSize);ee=Ut(x,ee);const ae=a.convert(x.format,x.colorSpace),Ee=a.convert(x.type);let de=S(x.internalFormat,ae,Ee,x.normalized,x.colorSpace,x.isVideoTexture);Pe(V,x);let se;const Te=x.mipmaps,we=x.isVideoTexture!==!0,De=re.__version===void 0||Y===!0,D=ie.dataReady,oe=T(x,ee);if(x.isDepthTexture)de=M(x.format===Fi,x.type),De&&(we?t.texStorage2D(r.TEXTURE_2D,1,de,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,de,ee.width,ee.height,0,ae,Ee,null));else if(x.isDataTexture)if(Te.length>0){we&&De&&t.texStorage2D(r.TEXTURE_2D,oe,de,Te[0].width,Te[0].height);for(let j=0,le=Te.length;j<le;j++)se=Te[j],we?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,se.width,se.height,ae,Ee,se.data):t.texImage2D(r.TEXTURE_2D,j,de,se.width,se.height,0,ae,Ee,se.data);x.generateMipmaps=!1}else we?(De&&t.texStorage2D(r.TEXTURE_2D,oe,de,ee.width,ee.height),D&&te(x,ee,ae,Ee)):t.texImage2D(r.TEXTURE_2D,0,de,ee.width,ee.height,0,ae,Ee,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){we&&De&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,de,Te[0].width,Te[0].height,ee.depth);for(let j=0,le=Te.length;j<le;j++)if(se=Te[j],x.format!==wn)if(ae!==null)if(we){if(D)if(x.layerUpdates.size>0){const me=zc(se.width,se.height,x.format,x.type);for(const ne of x.layerUpdates){const Ae=se.data.subarray(ne*me/se.data.BYTES_PER_ELEMENT,(ne+1)*me/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,ne,se.width,se.height,1,ae,Ae)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,se.width,se.height,ee.depth,ae,se.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,de,se.width,se.height,ee.depth,0,se.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,se.width,se.height,ee.depth,ae,Ee,se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,de,se.width,se.height,ee.depth,0,ae,Ee,se.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{we&&De&&t.texStorage2D(r.TEXTURE_2D,oe,de,Te[0].width,Te[0].height);for(let j=0,le=Te.length;j<le;j++)se=Te[j],x.format!==wn?ae!==null?we?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,se.width,se.height,ae,se.data):t.compressedTexImage2D(r.TEXTURE_2D,j,de,se.width,se.height,0,se.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,se.width,se.height,ae,Ee,se.data):t.texImage2D(r.TEXTURE_2D,j,de,se.width,se.height,0,ae,Ee,se.data)}else if(x.isDataArrayTexture)if(we){if(De&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,de,ee.width,ee.height,ee.depth),D)if(x.layerUpdates.size>0){const j=zc(ee.width,ee.height,x.format,x.type);for(const le of x.layerUpdates){const me=ee.data.subarray(le*j/ee.data.BYTES_PER_ELEMENT,(le+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,le,ee.width,ee.height,1,ae,Ee,me)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ae,Ee,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,ee.width,ee.height,ee.depth,0,ae,Ee,ee.data);else if(x.isData3DTexture)we?(De&&t.texStorage3D(r.TEXTURE_3D,oe,de,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ae,Ee,ee.data)):t.texImage3D(r.TEXTURE_3D,0,de,ee.width,ee.height,ee.depth,0,ae,Ee,ee.data);else if(x.isFramebufferTexture){if(De)if(we)t.texStorage2D(r.TEXTURE_2D,oe,de,ee.width,ee.height);else{let j=ee.width,le=ee.height;for(let me=0;me<oe;me++)t.texImage2D(r.TEXTURE_2D,me,de,j,le,0,ae,Ee,null),j>>=1,le>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const j=r.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),f.add(x),j.onpaint=le=>{const me=le.changedElements;for(const ne of f)me.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{const me=r.RGBA,ne=r.RGBA,Ae=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,me,ne,Ae,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Te.length>0){if(we&&De){const j=Ze(Te[0]);t.texStorage2D(r.TEXTURE_2D,oe,de,j.width,j.height)}for(let j=0,le=Te.length;j<le;j++)se=Te[j],we?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ae,Ee,se):t.texImage2D(r.TEXTURE_2D,j,de,ae,Ee,se);x.generateMipmaps=!1}else if(we){if(De){const j=Ze(ee);t.texStorage2D(r.TEXTURE_2D,oe,de,j.width,j.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Ee,ee)}else t.texImage2D(r.TEXTURE_2D,0,de,ae,Ee,ee);h(x)&&y(V),re.__version=ie.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Le(C,x,k){if(x.image.length!==6)return;const V=$e(C,x),Y=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const ie=n.get(Y);if(Y.version!==ie.__version||V===!0){t.activeTexture(r.TEXTURE0+k);const re=ze.getPrimaries(ze.workingColorSpace),J=x.colorSpace===gi?null:ze.getPrimaries(x.colorSpace),ee=x.colorSpace===gi||re===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ae=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!ae&&!Ee?de[ne]=p(x.image[ne],!0,i.maxCubemapSize):de[ne]=Ee?x.image[ne].image:x.image[ne],de[ne]=Ut(x,de[ne]);const se=de[0],Te=a.convert(x.format,x.colorSpace),we=a.convert(x.type),De=S(x.internalFormat,Te,we,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,oe=ie.__version===void 0||V===!0,j=Y.dataReady;let le=T(x,se);Pe(r.TEXTURE_CUBE_MAP,x);let me;if(ae){D&&oe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,De,se.width,se.height);for(let ne=0;ne<6;ne++){me=de[ne].mipmaps;for(let Ae=0;Ae<me.length;Ae++){const Me=me[Ae];x.format!==wn?Te!==null?D?j&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,De,Me.width,Me.height,0,Me.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,Me.width,Me.height,Te,we,Me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,De,Me.width,Me.height,0,Te,we,Me.data)}}}else{if(me=x.mipmaps,D&&oe){me.length>0&&le++;const ne=Ze(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,De,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){D?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,Te,we,de[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,de[ne].width,de[ne].height,0,Te,we,de[ne].data);for(let Ae=0;Ae<me.length;Ae++){const rt=me[Ae].image[ne].image;D?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,rt.width,rt.height,Te,we,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,De,rt.width,rt.height,0,Te,we,rt.data)}}else{D?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,we,de[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,Te,we,de[ne]);for(let Ae=0;Ae<me.length;Ae++){const Me=me[Ae];D?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Te,we,Me.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,De,Te,we,Me.image[ne])}}}h(x)&&y(r.TEXTURE_CUBE_MAP),ie.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function _e(C,x,k,V,Y,ie){const re=a.convert(k.format,k.colorSpace),J=a.convert(k.type),ee=S(k.internalFormat,re,J,k.normalized,k.colorSpace),ae=n.get(x),Ee=n.get(k);if(Ee.__renderTarget=x,!ae.__hasExternalTextures){const de=Math.max(1,x.width>>ie),se=Math.max(1,x.height>>ie);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?t.texImage3D(Y,ie,ee,de,se,x.depth,0,re,J,null):t.texImage2D(Y,ie,ee,de,se,0,re,J,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),yt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,Y,Ee.__webglTexture,0,ut(x)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,Y,Ee.__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(C,x,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer){const V=x.depthTexture,Y=V&&V.isDepthTexture?V.type:null,ie=M(x.stencilBuffer,Y),re=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;yt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(x),ie,x.width,x.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(x),ie,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ie,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,C)}else{const V=x.textures;for(let Y=0;Y<V.length;Y++){const ie=V[Y],re=a.convert(ie.format,ie.colorSpace),J=a.convert(ie.type),ee=S(ie.internalFormat,re,J,ie.normalized,ie.colorSpace);yt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(x),ee,x.width,x.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(x),ee,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ee,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(C,x,k){const V=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,x.depthTexture);const ae=a.convert(x.depthTexture.format),Ee=a.convert(x.depthTexture.type);let de;x.depthTexture.format===ii?de=r.DEPTH_COMPONENT24:x.depthTexture.format===Fi&&(de=r.DEPTH24_STENCIL8);for(let se=0;se<6;se++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,de,x.width,x.height,0,ae,Ee,null)}}else Z(x.depthTexture,0);const ie=Y.__webglTexture,re=ut(x),J=V?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,ee=x.depthTexture.format===Fi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===ii)yt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,J,ie,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,ee,J,ie,0);else if(x.depthTexture.format===Fi)yt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,J,ie,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,ee,J,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(C){const x=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=V}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)Tt(x.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?Tt(x.__webglFramebuffer[0],C,0):Tt(x.__webglFramebuffer,C,0)}else if(k){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=r.createRenderbuffer(),Fe(x.__webglDepthbuffer[V],C,!1);else{const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer[V];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,ie)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Fe(x.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,ie)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(C,x,k){const V=n.get(C);x!==void 0&&_e(V.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Oe(C)}function it(C){const x=C.texture,k=n.get(C),V=n.get(x);C.addEventListener("dispose",v);const Y=C.textures,ie=C.isWebGLCubeRenderTarget===!0,re=Y.length>1;if(re||(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=x.version,s.memory.textures++),ie){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let ee=0;ee<x.mipmaps.length;ee++)k.__webglFramebuffer[J][ee]=r.createFramebuffer()}else k.__webglFramebuffer[J]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)k.__webglFramebuffer[J]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(re)for(let J=0,ee=Y.length;J<ee;J++){const ae=n.get(Y[J]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),s.memory.textures++)}if(C.samples>0&&yt(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<Y.length;J++){const ee=Y[J];k.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const ae=a.convert(ee.format,ee.colorSpace),Ee=a.convert(ee.type),de=S(ee.internalFormat,ae,Ee,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),se=ut(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,se,de,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,k.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)_e(k.__webglFramebuffer[J][ee],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else _e(k.__webglFramebuffer[J],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);h(x)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let J=0,ee=Y.length;J<ee;J++){const ae=Y[J],Ee=n.get(ae);let de=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),Pe(de,ae),_e(k.__webglFramebuffer,C,ae,r.COLOR_ATTACHMENT0+J,de,0),h(ae)&&y(de)}t.unbindTexture()}else{let J=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),Pe(J,x),x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)_e(k.__webglFramebuffer[ee],C,x,r.COLOR_ATTACHMENT0,J,ee);else _e(k.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,J,0);h(x)&&y(J),t.unbindTexture()}C.depthBuffer&&Oe(C)}function Be(C){const x=C.textures;for(let k=0,V=x.length;k<V;k++){const Y=x[k];if(h(Y)){const ie=w(C),re=n.get(Y).__webglTexture;t.bindTexture(ie,re),y(ie),t.unbindTexture()}}}const lt=[],Ct=[];function qt(C){if(C.samples>0){if(yt(C)===!1){const x=C.textures,k=C.width,V=C.height;let Y=r.COLOR_BUFFER_BIT;const ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=n.get(C),J=x.length>1;if(J)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const Ee=n.get(x[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,k,V,0,0,k,V,Y,r.NEAREST),l===!0&&(lt.length=0,Ct.length=0,lt.push(r.COLOR_ATTACHMENT0+ae),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(lt.push(ie),Ct.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const Ee=n.get(x[ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const x=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function ut(C){return Math.min(i.maxSamples,C.samples)}function yt(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(C){const x=s.render.frame;d.get(C)!==x&&(d.set(C,x),C.update())}function Ut(C,x){const k=C.colorSpace,V=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==es&&k!==gi&&(ze.getTransfer(k)===Qe?(V!==wn||Y!==xn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",k)),x}function Ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=Xe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function q0(r,e){function t(n,i=gi){let a;const s=ze.getTransfer(i);if(n===xn)return r.UNSIGNED_BYTE;if(n===yl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===$d)return r.BYTE;if(n===Yd)return r.SHORT;if(n===Qr)return r.UNSIGNED_SHORT;if(n===Sl)return r.INT;if(n===Gn)return r.UNSIGNED_INT;if(n===On)return r.FLOAT;if(n===Vn)return r.HALF_FLOAT;if(n===Zd)return r.ALPHA;if(n===Qd)return r.RGB;if(n===wn)return r.RGBA;if(n===ii)return r.DEPTH_COMPONENT;if(n===Fi)return r.DEPTH_STENCIL;if(n===jd)return r.RED;if(n===bl)return r.RED_INTEGER;if(n===Wi)return r.RG;if(n===El)return r.RG_INTEGER;if(n===Tl)return r.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===$a)if(s===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ao||n===wo||n===Co)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===To)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Po||n===Lo||n===Io||n===Do||n===Qa||n===No)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ro||n===Po)return s===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Lo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Io)return a.COMPRESSED_R11_EAC;if(n===Do)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Qa)return a.COMPRESSED_RG11_EAC;if(n===No)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uo||n===Fo||n===Oo||n===ko||n===Bo||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===$o||n===Yo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Uo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===Jo||n===Zo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ko)return s===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===jo||n===ja||n===el)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Qo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new du(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wn({vertexShader:$0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J0 extends qi{constructor(e,t){super();const n=this;let i=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,m=null,_=null;const g=typeof XRWebGLBinding<"u",p=new K0,h={},y=t.getContextAttributes();let w=null,S=null;const M=[],T=[],A=new Ve;let v=null,E=null;const R=new vn;R.viewport=new gt;const P=new vn;P.viewport=new gt;const U=[R,P],O=new ip;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=M[K];return te===void 0&&(te=new Os,M[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=M[K];return te===void 0&&(te=new Os,M[K]=te),te.getGripSpace()},this.getHand=function(K){let te=M[K];return te===void 0&&(te=new Os,M[K]=te),te.getHandSpace()};function q(K){const te=T.indexOf(K.inputSource);if(te===-1)return;const xe=M[te];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||s),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Z);for(let K=0;K<M.length;K++){const te=T[K];te!==null&&(T[K]=null,M[K].disconnect(te))}L=null,F=null,p.reset();for(const K in h)delete h[K];if(e.setRenderTarget(w),m=null,u=null,f=null,i=null,S=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),E!==null){const K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Le=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?Fi:ii,Le=y.stencil?jr:Gn);const Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(Fe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Cn(u.textureWidth,u.textureHeight,{format:wn,type:xn,depthTexture:new ea(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Cn(m.framebufferWidth,m.framebufferHeight,{format:wn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(K){for(let te=0;te<K.removed.length;te++){const xe=K.removed[te],Le=T.indexOf(xe);Le>=0&&(T[Le]=null,M[Le].disconnect(xe))}for(let te=0;te<K.added.length;te++){const xe=K.added[te];let Le=T.indexOf(xe);if(Le===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=T.length){T.push(xe),Le=Fe;break}else if(T[Fe]===null){T[Fe]=xe,Le=Fe;break}if(Le===-1)break}const _e=M[Le];_e&&_e.connect(xe)}}const $=new z,Q=new z;function W(K,te,xe){$.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);const Le=$.distanceTo(Q),_e=te.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,Tt=_e[14]/(_e[10]-1),Oe=_e[14]/(_e[10]+1),Xe=(_e[9]+1)/_e[5],it=(_e[9]-1)/_e[5],Be=(_e[8]-1)/_e[0],lt=(Fe[8]+1)/Fe[0],Ct=Tt*Be,qt=Tt*lt,ut=Le/(-Be+lt),yt=ut*-Be;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(yt),K.translateZ(ut),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_e[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const N=Tt+ut,Ut=Oe+ut,Ze=Ct-yt,C=qt+(Le-yt),x=Xe*Oe/Ut*N,k=it*Oe/Ut*N;K.projectionMatrix.makePerspective(Ze,C,x,k,N,Ut),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let te=K.near,xe=K.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),O.near=P.near=R.near=te,O.far=P.far=R.far=xe,(L!==O.near||F!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,F=O.far),O.layers.mask=K.layers.mask|6,R.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Le=K.parent,_e=O.cameras;ce(O,Le);for(let Fe=0;Fe<_e.length;Fe++)ce(_e[Fe],Le);_e.length===2?W(O,R,P):O.projectionMatrix.copy(R.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),he(K,O,Le)};function he(K,te,xe){xe===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=tl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(K){return h[K]};let Re=null;function Pe(K,te){if(d=te.getViewerPose(c||s),_=te,d!==null){const xe=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Le=!1;xe.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let Oe=0;Oe<xe.length;Oe++){const Xe=xe[Oe];let it=null;if(m!==null)it=m.getViewport(Xe);else{const lt=f.getViewSubImage(u,Xe);it=lt.viewport,Oe===0&&(e.setRenderTargetTextures(S,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(S))}let Be=U[Oe];Be===void 0&&(Be=new vn,Be.layers.enable(Oe),Be.viewport=new gt,U[Oe]=Be),Be.matrix.fromArray(Xe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Xe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(it.x,it.y,it.width,it.height),Oe===0&&(O.matrix.copy(Be.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(Be)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const Oe=f.getDepthInformation(xe[0]);Oe&&Oe.isValid&&Oe.texture&&p.init(Oe,i.renderState)}if(_e&&_e.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let Oe=0;Oe<xe.length;Oe++){const Xe=xe[Oe].camera;if(Xe){let it=h[Xe];it||(it=new du,h[Xe]=it);const Be=f.getCameraImage(Xe);it.sourceTexture=Be}}}}for(let xe=0;xe<M.length;xe++){const Le=T[xe],_e=M[xe];Le!==null&&_e!==void 0&&_e.update(Le,te,c||s)}Re&&Re(K,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const $e=new pu;$e.setAnimationLoop(Pe),this.setAnimationLoop=function(K){Re=K},this.dispose=function(){}}}const Z0=new St,yu=new Ie;yu.set(-1,0,0,0,1,0,0,0,1);function Q0(r,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,uu(r)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,y,w,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(p,h):h.isMeshLambertMaterial?(a(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(p,h),f(p,h)):h.isMeshPhongMaterial?(a(p,h),d(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(p,h),u(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(a(p,h),_(p,h)):h.isMeshDepthMaterial?a(p,h):h.isMeshDistanceMaterial?(a(p,h),g(p,h)):h.isMeshNormalMaterial?a(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,y,w):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Kt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Kt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=e.get(h),w=y.envMap,S=y.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(yu),p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,y,w){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=w*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function u(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.retroreflectivity>0&&(p.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const y=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function j0(r,e,t,n){let i={},a={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const T=M.program;n.uniformBlockBinding(S,T)}function c(S,M){let T=i[S.id];T===void 0&&(p(S),T=d(S),i[S.id]=T,S.addEventListener("dispose",y));const A=M.program;n.updateUBOMapping(S,A);const v=e.render.frame;a[S.id]!==v&&(u(S),a[S.id]=v)}function d(S){const M=f();S.__bindingPointIndex=M;const T=r.createBuffer(),A=S.__size,v=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,A,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,T),T}function f(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const M=i[S.id],T=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let v=0,E=T.length;v<E;v++){const R=T[v];if(Array.isArray(R))for(let P=0,U=R.length;P<U;P++)m(R[P],v,P,A);else m(R,v,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(S,M,T,A){if(g(S,M,T,A)===!0){const v=S.__offset,E=S.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){const U=E[P],O=h(U);_(U,S.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,S.__data)}}function _(S,M,T){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,T)}function g(S,M,T,A){const v=S.value,E=M+"_"+T;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const R=A[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function p(S){const M=S.uniforms;let T=0;const A=16;for(let E=0,R=M.length;E<R;E++){const P=Array.isArray(M[E])?M[E]:[M[E]];for(let U=0,O=P.length;U<O;U++){const L=P[U],F=Array.isArray(L.value)?L.value:[L.value];for(let q=0,B=F.length;q<B;q++){const Z=F[q],$=h(Z),Q=T%A,W=Q%$.boundary,ce=Q+W;T+=W,ce!==0&&A-ce<$.storage&&(T+=A-ce),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=$.storage}}}const v=T%A;return v>0&&(T+=A-v),S.__size=T,S.__cache={},this}function h(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",S),M}function y(S){const M=S.target;M.removeEventListener("dispose",y);const T=s.indexOf(M.__bindingPointIndex);s.splice(T,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete a[M.id]}function w(){for(const S in i)r.deleteBuffer(i[S]);s=[],i={},a={}}return{bind:l,update:c,dispose:w}}const ev=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function tv(){return In===null&&(In=new Xh(ev,16,16,Wi,Vn),In.name="DFG_LUT",In.minFilter=zt,In.magFilter=zt,In.wrapS=jn,In.wrapT=jn,In.generateMipmaps=!1,In.needsUpdate=!0),In}class nv{constructor(e={}){const{canvas:t=Sh(),context:n=null,depth:i=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=xn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=s;const g=m,p=new Set([Tl,El,bl]),h=new Set([xn,Gn,Qr,jr,yl,Ml]),y=new Uint32Array(4),w=new Int32Array(4),S=new z;let M=null,T=null;const A=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,U=null,O=null,L=null,F=null;this._outputColorSpace=_n;let q=0,B=0,Z=null,$=-1,Q=null;const W=new gt,ce=new gt;let he=null;const Re=new Ye(0);let Pe=0,$e=t.width,K=t.height,te=1,xe=null,Le=null;const _e=new gt(0,0,$e,K),Fe=new gt(0,0,$e,K);let Tt=!1;const Oe=new ou;let Xe=!1,it=!1;const Be=new St,lt=new z,Ct=new gt,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function yt(){return Z===null?te:1}let N=n;function Ut(b,I){return t.getContext(b,I)}let Ze,C,x,k,V,Y,ie,re,J,ee,ae,Ee,de,se,Te,we,De,D,oe,j,le,me,ne;try{const b={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),N===null){const I="webgl2";if(N=Ut(I,b),N===null)throw Ut(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(b){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),qe("WebGLRenderer: "+b.message),b}function Ae(){Ze=new t_(N),Ze.init(),le=new q0(N,Ze),C=new Xg(N,Ze,e,le),x=new W0(N,Ze),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=N.createFramebuffer(),L=N.createFramebuffer(),F=N.createFramebuffer(),k=new r_(N),V=new P0,Y=new X0(N,Ze,x,V,C,le,k),ie=new e_(R),re=new sp(N),me=new Vg(N,re),J=new n_(N,re,k,me),ee=new s_(N,J,re,me,k),D=new a_(N,C,Y),Te=new qg(V),ae=new R0(R,ie,Ze,C,me,Te),Ee=new Q0(R,V),de=new I0,se=new k0(Ze),De=new Gg(R,ie,x,ee,_,l),we=new V0(R,ee,C),ne=new j0(N,k,C,x),oe=new Wg(N,Ze,k),j=new i_(N,Ze,k),k.programs=ae.programs,R.capabilities=C,R.extensions=Ze,R.properties=V,R.renderLists=de,R.shadowMap=we,R.state=x,R.info=k}g!==xn&&(E=new l_(g,t.width,t.height,o,i,a));const Me=new J0(R,N);this.xr=Me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize($e,K,!1))},this.getSize=function(b){return b.set($e,K)},this.setSize=function(b,I,X=!0){if(Me.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=b,K=I,t.width=Math.floor(b*te),t.height=Math.floor(I*te),X===!0&&(t.style.width=b+"px",t.style.height=I+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set($e*te,K*te).floor()},this.setDrawingBufferSize=function(b,I,X){$e=b,K=I,te=X,t.width=Math.floor(b*X),t.height=Math.floor(I*X),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(g===xn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(W)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,I,X,H){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,I,X,H),x.viewport(W.copy(_e).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(Fe)},this.setScissor=function(b,I,X,H){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,I,X,H),x.scissor(ce.copy(Fe).multiplyScalar(te).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(b){x.setScissorTest(Tt=b)},this.setOpaqueSort=function(b){xe=b},this.setTransparentSort=function(b){Le=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,X=!0){let H=0;if(b){let G=!1;if(Z!==null){const pe=Z.texture.format;G=p.has(pe)}if(G){const pe=Z.texture.type,ve=h.has(pe),fe=De.getClearColor(),Se=De.getClearAlpha(),be=fe.r,Ne=fe.g,ke=fe.b;ve?(y[0]=be,y[1]=Ne,y[2]=ke,y[3]=Se,N.clearBufferuiv(N.COLOR,0,y)):(w[0]=be,w[1]=Ne,w[2]=ke,w[3]=Se,N.clearBufferiv(N.COLOR,0,w))}else H|=N.COLOR_BUFFER_BIT}I&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),De.dispose(),de.dispose(),se.dispose(),V.dispose(),ie.dispose(),ee.dispose(),me.dispose(),ne.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",nc),Me.removeEventListener("sessionend",ic),Ai.stop()};function rt(b){b.preventDefault(),xc("WebGLRenderer: Context Lost."),P=!0}function Ke(){xc("WebGLRenderer: Context Restored."),P=!1;const b=k.autoReset,I=we.enabled,X=we.autoUpdate,H=we.needsUpdate,G=we.type;Ae(),k.autoReset=b,we.enabled=I,we.autoUpdate=X,we.needsUpdate=H,we.type=G}function Mn(b){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Rn(b){const I=b.target;I.removeEventListener("dispose",Rn),yf(I)}function yf(b){Mf(b),V.remove(b)}function Mf(b){const I=V.get(b).programs;I!==void 0&&(I.forEach(function(X){ae.releaseProgram(X)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,X,H,G,pe){I===null&&(I=qt);const ve=G.isMesh&&G.matrixWorld.determinantAffine()<0,fe=Tf(b,I,X,H,G);x.setMaterial(H,ve);let Se=X.index,be=1;if(H.wireframe===!0){if(Se=J.getWireframeAttribute(X),Se===void 0)return;be=2}const Ne=X.drawRange,ke=X.attributes.position;let ye=Ne.start*be,Je=(Ne.start+Ne.count)*be;pe!==null&&(ye=Math.max(ye,pe.start*be),Je=Math.min(Je,(pe.start+pe.count)*be)),Se!==null?(ye=Math.max(ye,0),Je=Math.min(Je,Se.count)):ke!=null&&(ye=Math.max(ye,0),Je=Math.min(Je,ke.count));const Mt=Je-ye;if(Mt<0||Mt===1/0)return;me.setup(G,H,fe,X,Se);let ot,et=oe;if(Se!==null&&(ot=re.get(Se),et=j,et.setIndex(ot)),G.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*yt()),et.setMode(N.LINES)):et.setMode(N.TRIANGLES);else if(G.isLine){let Ft=H.linewidth;Ft===void 0&&(Ft=1),x.setLineWidth(Ft*yt()),G.isLineSegments?et.setMode(N.LINES):G.isLineLoop?et.setMode(N.LINE_LOOP):et.setMode(N.LINE_STRIP)}else G.isPoints?et.setMode(N.POINTS):G.isSprite&&et.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ft=G._multiDrawStarts,ge=G._multiDrawCounts,Gt=G._multiDrawCount,We=Se?re.get(Se).bytesPerElement:1,pn=V.get(H).currentProgram.getUniforms();for(let Pn=0;Pn<Gt;Pn++)pn.setValue(N,"_gl_DrawID",Pn),et.render(Ft[Pn]/We,ge[Pn])}else if(G.isInstancedMesh)et.renderInstances(ye,Mt,G.count);else if(X.isInstancedBufferGeometry){const Ft=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ge=Math.min(X.instanceCount,Ft);et.renderInstances(ye,Mt,ge)}else et.render(ye,Mt)};function tc(b,I,X,H){U!==null&&b.isNodeMaterial&&U.setObject(H,b),Xe===!0&&Te.setState(b,X,!1),b.transparent===!0&&b.side===Un&&b.forceSinglePass===!1?(b.side=Kt,b.needsUpdate=!0,ma(b,I,H),b.side=Gi,b.needsUpdate=!0,ma(b,I,H),b.side=Un):ma(b,I,H)}this.compile=function(b,I,X=null){X===null&&(X=b),U!==null&&U.renderStart(b,I,X),T=se.get(X),T.init(I),v.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),it=this.localClippingEnabled,Xe=Te.init(this.clippingPlanes,it),Xe===!0&&Te.setGlobalState(this.clippingPlanes,I),U!==null&&we.render(T.state.shadowsArray,X,I);const H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const fe=pe[ve];tc(fe,X,I,G),H.add(fe)}else tc(pe,X,I,G),H.add(pe)}),T=v.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(b,I,X=null){const H=this.compile(b,I,X);return new Promise(G=>{function pe(){if(H.forEach(function(ve){const Se=V.get(ve).currentProgram;(Se===void 0||Se.isReady())&&H.delete(ve)}),H.size===0){G(b);return}setTimeout(pe,10)}Ze.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ys=null;function bf(b){ys&&ys(b)}function nc(){Ai.stop()}function ic(){Ai.start()}const Ai=new pu;Ai.setAnimationLoop(bf),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(b){ys=b,Me.setAnimationLoop(b),b===null?Ai.stop():Ai.start()},Me.addEventListener("sessionstart",nc),Me.addEventListener("sessionend",ic),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(b,I);const X=Me.enabled===!0&&Me.isPresenting===!0,H=E!==null&&(Z===null||X)&&E.begin(R,Z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(I),I=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,I,Z),T=se.get(b,v.length),T.init(I),T.state.textureUnits=Y.getTextureUnits(),v.push(T),Be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Oe.setFromProjectionMatrix(Be,kn,I.reversedDepth),it=this.localClippingEnabled,Xe=Te.init(this.clippingPlanes,it),M=de.get(b,A.length),M.init(),A.push(M),Me.enabled===!0&&Me.isPresenting===!0){const ve=R.xr.getDepthSensingMesh();ve!==null&&Ms(ve,I,-1/0,R.sortObjects)}Ms(b,I,0,R.sortObjects),M.finish(),U!==null&&U.updateLights(T.state.lightsArray),R.sortObjects===!0&&M.sort(xe,Le),ut=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ut&&De.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Te.beginShadows();const G=T.state.shadowsArray;if(we.render(G,b,I),Xe===!0&&Te.endShadows(),(H&&E.hasRenderPass())===!1){const ve=M.opaque,fe=M.transmissive;if(T.setupLights(),I.isArrayCamera){const Se=I.cameras;if(fe.length>0)for(let be=0,Ne=Se.length;be<Ne;be++){const ke=Se[be];ac(ve,fe,b,ke)}ut&&De.render(b);for(let be=0,Ne=Se.length;be<Ne;be++){const ke=Se[be];rc(M,b,ke,ke.viewport)}}else fe.length>0&&ac(ve,fe,b,I),ut&&De.render(b),rc(M,b,I)}Z!==null&&B===0&&(Y.updateMultisampleRenderTarget(Z),Y.updateRenderTargetMipmap(Z)),H&&E.end(R),b.isScene===!0&&b.onAfterRender(R,b,I),me.resetDefaultState(),$=-1,Q=null,v.pop(),v.length>0?(T=v[v.length-1],Y.setTextureUnits(T.state.textureUnits),Xe===!0&&Te.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,U!==null&&U.renderEnd()};function Ms(b,I,X,H){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Oe)){H&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Be);const ve=ee.update(b),fe=b.material;fe.visible&&M.push(b,ve,fe,X,Ct.z,null,I)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Oe))){const ve=ee.update(b),fe=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ct.copy(ve.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(Be)),Array.isArray(fe)){const Se=ve.groups;for(let be=0,Ne=Se.length;be<Ne;be++){const ke=Se[be],ye=fe[ke.materialIndex];ye&&ye.visible&&M.push(b,ve,ye,X,Ct.z,ke,I)}}else fe.visible&&M.push(b,ve,fe,X,Ct.z,null,I)}}const pe=b.children;for(let ve=0,fe=pe.length;ve<fe;ve++)Ms(pe[ve],I,X,H)}function rc(b,I,X,H){const{opaque:G,transmissive:pe,transparent:ve}=b;T.setupLightsView(X),Xe===!0&&Te.setGlobalState(R.clippingPlanes,X),H&&x.viewport(W.copy(H)),G.length>0&&pa(G,I,X),pe.length>0&&pa(pe,I,X),ve.length>0&&pa(ve,I,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ac(b,I,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const ye=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Cn(1,1,{generateMipmaps:!0,type:ye?Vn:xn,minFilter:Ui,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const pe=T.state.transmissionRenderTarget[H.id],ve=H.viewport||W;pe.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);const fe=R.getRenderTarget(),Se=R.getActiveCubeFace(),be=R.getActiveMipmapLevel();R.setRenderTarget(pe),R.getClearColor(Re),Pe=R.getClearAlpha(),Pe<1&&R.setClearColor(16777215,.5),R.clear(),ut&&De.render(X);const Ne=R.toneMapping;R.toneMapping=zn;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Xe===!0&&Te.setGlobalState(R.clippingPlanes,H),pa(b,X,H),Y.updateMultisampleRenderTarget(pe),Y.updateRenderTargetMipmap(pe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Je=0,Mt=I.length;Je<Mt;Je++){const ot=I[Je],{object:et,geometry:Ft,material:ge,group:Gt}=ot;if(ge.side===Un&&et.layers.test(H.layers)){const We=ge.side;ge.side=Kt,ge.needsUpdate=!0,sc(et,X,H,Ft,ge,Gt),ge.side=We,ge.needsUpdate=!0,ye=!0}}ye===!0&&(Y.updateMultisampleRenderTarget(pe),Y.updateRenderTargetMipmap(pe))}R.setRenderTarget(fe,Se,be),R.setClearColor(Re,Pe),ke!==void 0&&(H.viewport=ke),R.toneMapping=Ne}function pa(b,I,X){const H=I.isScene===!0?I.overrideMaterial:null;for(let G=0,pe=b.length;G<pe;G++){const ve=b[G],{object:fe,geometry:Se,group:be}=ve;let Ne=ve.material;Ne.allowOverride===!0&&H!==null&&(Ne=H),fe.layers.test(X.layers)&&sc(fe,I,X,Se,Ne,be)}}function sc(b,I,X,H,G,pe){U!==null&&G.isNodeMaterial&&U.setObject(b,G),b.onBeforeRender(R,I,X,H,G,pe),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(R,I,X,H,b,pe),G.transparent===!0&&G.side===Un&&G.forceSinglePass===!1?(G.side=Kt,G.needsUpdate=!0,R.renderBufferDirect(X,I,H,G,b,pe),G.side=Gi,G.needsUpdate=!0,R.renderBufferDirect(X,I,H,G,b,pe),G.side=Un):R.renderBufferDirect(X,I,H,G,b,pe),b.onAfterRender(R,I,X,H,G,pe)}function ma(b,I,X){I.isScene!==!0&&(I=qt);const H=V.get(b),G=T.state.lights,pe=T.state.shadowsArray,ve=G.state.version,fe=ae.getParameters(b,G.state,pe,I,X,T.state.lightProbeGridArray),Se=ae.getProgramCacheKey(fe);let be=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;const Ne=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=ie.get(b.envMap||H.environment,Ne),H.envMapRotation=H.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,be===void 0&&(b.addEventListener("dispose",Rn),be=new Map,H.programs=be);let ke=be.get(Se);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===ve)return lc(b,fe),ke}else fe.uniforms=ae.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,X,fe),b.onBeforeCompile(fe,R),ke=ae.acquireProgram(fe,Se),be.set(Se,ke),H.uniforms=fe.uniforms;const ye=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ye.clippingPlanes=Te.uniform),lc(b,fe),H.needsLights=wf(b),H.lightsStateVersion=ve,H.needsLights&&(ye.ambientLightColor.value=G.state.ambient,ye.lightProbe.value=G.state.probe,ye.sunLights.value=G.state.sun,ye.sunLightShadows.value=G.state.sunShadow,ye.directionalLights.value=G.state.directional,ye.directionalLightShadows.value=G.state.directionalShadow,ye.spotLights.value=G.state.spot,ye.spotLightShadows.value=G.state.spotShadow,ye.rectAreaLights.value=G.state.rectArea,ye.ltc_1.value=G.state.rectAreaLTC1,ye.ltc_2.value=G.state.rectAreaLTC2,ye.pointLights.value=G.state.point,ye.pointLightShadows.value=G.state.pointShadow,ye.hemisphereLights.value=G.state.hemi,ye.sunShadowMatrix.value=G.state.sunShadowMatrix,ye.sunShadowCascade.value=G.state.sunShadowCascade,ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ye.spotLightMatrix.value=G.state.spotLightMatrix,ye.spotLightMap.value=G.state.spotLightMap,ye.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=ke,H.uniformsList=null,ke}function oc(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Ya.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function lc(b,I){const X=V.get(b);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function Ef(b,I){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let X=0,H=b.length;X<H;X++){const G=b[X];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Tf(b,I,X,H,G){I.isScene!==!0&&(I=qt),Y.resetTextureUnits();const pe=I.fog,ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,fe=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ze.workingColorSpace,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,be=ie.get(H.envMap||ve,Se),Ne=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!X.morphAttributes.position,Je=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let ot=zn;H.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ot=R.toneMapping);const et=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ft=et!==void 0?et.length:0,ge=V.get(H),Gt=T.state.lights;if(Xe===!0&&(it===!0||b!==Q)){const at=b===Q&&H.id===$;Te.setState(H,b,at)}let We=!1;H.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Gt.state.version||ge.outputColorSpace!==fe||G.isBatchedMesh&&ge.batching===!1||!G.isBatchedMesh&&ge.batching===!0||G.isBatchedMesh&&ge.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ge.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ge.instancing===!1||!G.isInstancedMesh&&ge.instancing===!0||G.isSkinnedMesh&&ge.skinning===!1||!G.isSkinnedMesh&&ge.skinning===!0||G.isInstancedMesh&&ge.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ge.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ge.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ge.instancingMorph===!1&&G.morphTexture!==null||ge.envMap!==be||H.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Te.numPlanes||ge.numIntersection!==Te.numIntersection)||ge.vertexAlphas!==Ne||ge.vertexTangents!==ke||ge.morphTargets!==ye||ge.morphNormals!==Je||ge.morphColors!==Mt||ge.toneMapping!==ot||ge.morphTargetsCount!==Ft||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,ge.__version=H.version);let pn=ge.currentProgram;We===!0&&(pn=ma(H,I,G),U&&H.isNodeMaterial&&U.onUpdateProgram(H,pn,ge));let Pn=!1,si=!1,Yi=!1;const je=pn.getUniforms(),vt=ge.uniforms;if(x.useProgram(pn.program)&&(Pn=!0,si=!0,Yi=!0),H.id!==$&&($=H.id,si=!0),ge.needsLights){const at=Ef(T.state.lightProbeGridArray,G);ge.lightProbeGrid!==at&&(ge.lightProbeGrid=at,si=!0)}if(Pn||Q!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),je.setValue(N,"projectionMatrix",b.projectionMatrix),je.setValue(N,"viewMatrix",b.matrixWorldInverse);const li=je.map.cameraPosition;li!==void 0&&li.setValue(N,lt.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&je.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&je.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,si=!0,Yi=!0)}if(ge.needsLights&&(Gt.state.sunShadowMap.length>0&&je.setValue(N,"sunShadowMap",Gt.state.sunShadowMap,Y),Gt.state.directionalShadowMap.length>0&&je.setValue(N,"directionalShadowMap",Gt.state.directionalShadowMap,Y),Gt.state.spotShadowMap.length>0&&je.setValue(N,"spotShadowMap",Gt.state.spotShadowMap,Y),Gt.state.pointShadowMap.length>0&&je.setValue(N,"pointShadowMap",Gt.state.pointShadowMap,Y)),G.isSkinnedMesh){je.setOptional(N,G,"bindMatrix"),je.setOptional(N,G,"bindMatrixInverse");const at=G.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),je.setValue(N,"boneTexture",at.boneTexture,Y))}G.isBatchedMesh&&(je.setOptional(N,G,"batchingTexture"),je.setValue(N,"batchingTexture",G._matricesTexture,Y),je.setOptional(N,G,"batchingIdTexture"),je.setValue(N,"batchingIdTexture",G._indirectTexture,Y),je.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&je.setValue(N,"batchingColorTexture",G._colorsTexture,Y));const oi=X.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&D.update(G,X,pn),(si||ge.receiveShadow!==G.receiveShadow)&&(ge.receiveShadow=G.receiveShadow,je.setValue(N,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(vt.envMapIntensity.value=I.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=tv()),si){if(je.setValue(N,"toneMappingExposure",R.toneMappingExposure),ge.needsLights&&Af(vt,Yi),pe&&H.fog===!0&&Ee.refreshFogUniforms(vt,pe),Ee.refreshMaterialUniforms(vt,H,te,K,T.state.transmissionRenderTarget[b.id]),ge.needsLights&&ge.lightProbeGrid){const at=ge.lightProbeGrid;vt.probesSH.value=at.texture,vt.probesMin.value.copy(at.boundingBox.min),vt.probesMax.value.copy(at.boundingBox.max),vt.probesResolution.value.copy(at.resolution)}Ya.upload(N,oc(ge),vt,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ya.upload(N,oc(ge),vt,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&je.setValue(N,"center",G.center),je.setValue(N,"modelViewMatrix",G.modelViewMatrix),je.setValue(N,"normalMatrix",G.normalMatrix),je.setValue(N,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const at=H.uniformsGroups;for(let li=0,Ki=at.length;li<Ki;li++){const dc=at[li];ne.update(dc,pn),ne.bind(dc,pn)}}return pn}function Af(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.sunLights.needsUpdate=I,b.sunLightShadows.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function wf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,I,X){const H=V.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=I,V.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){const X=V.get(b);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,X=0){Z=b,q=I,B=X;let H=null,G=!1,pe=!1;if(b){const fe=V.get(b);if(fe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,fe.__webglFramebuffer),W.copy(b.viewport),ce.copy(b.scissor),he=b.scissorTest,x.viewport(W),x.scissor(ce),x.setScissorTest(he),$=-1;return}else if(fe.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(fe.__hasExternalTextures)Y.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(fe.__boundDepthTexture!==Ne){if(Ne!==null&&V.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}const Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);const be=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(be[I])?H=be[I][X]:H=be[I],G=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?H=V.get(b).__webglMultisampledFramebuffer:Array.isArray(be)?H=be[X]:H=be,W.copy(b.viewport),ce.copy(b.scissor),he=b.scissorTest}else W.copy(_e).multiplyScalar(te).floor(),ce.copy(Fe).multiplyScalar(te).floor(),he=Tt;if(X!==0&&(H=O),x.bindFramebuffer(N.FRAMEBUFFER,H)&&x.drawBuffers(b,H),x.viewport(W),x.scissor(ce),x.setScissorTest(he),G){const fe=V.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,X)}else if(pe){const fe=I;for(let Se=0;Se<b.textures.length;Se++){const be=V.get(b.textures[Se]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Se,be.__webglTexture,X,fe)}}else if(b!==null&&X!==0){const fe=V.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fe.__webglTexture,X)}$=-1};function cc(b){const I=V.get(b);return(I.__readFormat!==b.format||I.__readType!==b.type)&&(I.__readFormat=b.format,I.__readType=b.type,I.__formatReadable=C.textureFormatReadable(b.format),I.__typeReadable=C.textureTypeReadable(b.type)),I}this.readRenderTargetPixels=function(b,I,X,H,G,pe,ve,fe=0){if(!(b&&b.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){x.bindFramebuffer(N.FRAMEBUFFER,Se);try{const be=b.textures[fe],Ne=be.format,ke=be.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe);const ye=cc(be);if(ye.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-H&&X>=0&&X<=b.height-G&&N.readPixels(I,X,H,G,le.convert(Ne),le.convert(ke),pe)}finally{const be=Z!==null?V.get(Z).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,I,X,H,G,pe,ve,fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(I>=0&&I<=b.width-H&&X>=0&&X<=b.height-G){x.bindFramebuffer(N.FRAMEBUFFER,Se);const be=b.textures[fe],Ne=be.format,ke=be.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe);const ye=cc(be);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(I,X,H,G,le.convert(Ne),le.convert(ke),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Mt=Z!==null?V.get(Z).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Mt);const ot=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await yh(N,ot,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Je),N.deleteSync(ot),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,X=0){const H=Math.pow(2,-X),G=Math.floor(b.image.width*H),pe=Math.floor(b.image.height*H),ve=I!==null?I.x:0,fe=I!==null?I.y:0;Y.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,ve,fe,G,pe),x.unbindTexture()},this.copyTextureToTexture=function(b,I,X=null,H=null,G=0,pe=0){let ve,fe,Se,be,Ne,ke,ye,Je,Mt;const ot=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(X!==null)ve=X.max.x-X.min.x,fe=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,be=X.min.x,Ne=X.min.y,ke=X.isBox3?X.min.z:0;else{const vt=Math.pow(2,-G);ve=Math.floor(ot.width*vt),fe=Math.floor(ot.height*vt),b.isDataArrayTexture?Se=ot.depth:b.isData3DTexture?Se=Math.floor(ot.depth*vt):Se=1,be=0,Ne=0,ke=0}H!==null?(ye=H.x,Je=H.y,Mt=H.z):(ye=0,Je=0,Mt=0);const et=le.convert(I.format),Ft=le.convert(I.type);let ge;I.isData3DTexture?(Y.setTexture3D(I,0),ge=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Y.setTexture2DArray(I,0),ge=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(I,0),ge=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Gt=x.getParameter(N.UNPACK_ROW_LENGTH),We=x.getParameter(N.UNPACK_IMAGE_HEIGHT),pn=x.getParameter(N.UNPACK_SKIP_PIXELS),Pn=x.getParameter(N.UNPACK_SKIP_ROWS),si=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,ot.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,be),x.pixelStorei(N.UNPACK_SKIP_ROWS,Ne),x.pixelStorei(N.UNPACK_SKIP_IMAGES,ke);const Yi=b.isDataArrayTexture||b.isData3DTexture,je=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){const vt=V.get(b),oi=V.get(I),at=V.get(vt.__renderTarget),li=V.get(oi.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,at.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Ki=0;Ki<Se;Ki++)Yi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(b).__webglTexture,G,ke+Ki),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(I).__webglTexture,pe,Mt+Ki)),N.blitFramebuffer(be,Ne,ve,fe,ye,Je,ve,fe,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||V.has(b)){const vt=V.get(b),oi=V.get(I);x.bindFramebuffer(N.READ_FRAMEBUFFER,L),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let at=0;at<Se;at++)Yi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.__webglTexture,G,ke+at):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vt.__webglTexture,G),je?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oi.__webglTexture,pe,Mt+at):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,oi.__webglTexture,pe),G!==0?N.blitFramebuffer(be,Ne,ve,fe,ye,Je,ve,fe,N.COLOR_BUFFER_BIT,N.NEAREST):je?N.copyTexSubImage3D(ge,pe,ye,Je,Mt+at,be,Ne,ve,fe):N.copyTexSubImage2D(ge,pe,ye,Je,be,Ne,ve,fe);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else je?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(ge,pe,ye,Je,Mt,ve,fe,Se,et,Ft,ot.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(ge,pe,ye,Je,Mt,ve,fe,Se,et,ot.data):N.texSubImage3D(ge,pe,ye,Je,Mt,ve,fe,Se,et,Ft,ot):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,ye,Je,ve,fe,et,Ft,ot.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,ye,Je,ot.width,ot.height,et,ot.data):N.texSubImage2D(N.TEXTURE_2D,pe,ye,Je,ve,fe,et,Ft,ot);x.pixelStorei(N.UNPACK_ROW_LENGTH,Gt),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,We),x.pixelStorei(N.UNPACK_SKIP_PIXELS,pn),x.pixelStorei(N.UNPACK_SKIP_ROWS,Pn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,si),pe===0&&I.generateMipmaps&&N.generateMipmap(ge),x.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){q=0,B=0,Z=null,x.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}function iv(){const r=document.getElementById("hero-3d-canvas-container");if(!r)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Ha(r);return}try{const t=document.createElement("canvas");if(!(t.getContext("webgl")||t.getContext("experimental-webgl"))){Ha(r);return}}catch{Ha(r);return}try{const t=r.clientWidth||450,n=r.clientHeight||450,i=new Oh,a=new vn(45,t/n,.1,1e3);a.position.z=8;const s=new nv({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setSize(t,n),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.innerHTML="",r.appendChild(s.domElement);const o=new Gr;i.add(o);const l=new rs(1,24,24),c=new ur({color:3718648,wireframe:!0,transparent:!0,opacity:.35}),d=new ln(l,c);o.add(d);const f=new Pl(1.6,1),u=new ur({color:6514417,wireframe:!0,transparent:!0,opacity:.45}),m=new ln(f,u);o.add(m);const _=new Ll(2.5,2.52,64),g=new ur({color:3718648,side:Un,transparent:!0,opacity:.2}),p=new ln(_,g);p.rotation.x=Math.PI/2.3,o.add(p);const h=[{color:3718648,size:.18,angle:0,label:"React"},{color:1096065,size:.18,angle:Math.PI/3,label:"Node.js"},{color:8490232,size:.2,angle:2*Math.PI/3,label:"AI (CrewAI)"},{color:16096779,size:.18,angle:Math.PI,label:"MySQL"},{color:3900150,size:.18,angle:4*Math.PI/3,label:"Cloud (GCP/AWS)"},{color:440020,size:.18,angle:5*Math.PI/3,label:"Docker"}],y=[],w=2.5;h.forEach(W=>{const ce=new rs(W.size,16,16),he=new ur({color:W.color}),Re=new ln(ce,he);Re.userData={angle:W.angle,speed:.008},o.add(Re),y.push(Re)});const S=200,M=new nn,T=new Float32Array(S*3);for(let W=0;W<S*3;W+=3)T[W]=(Math.random()-.5)*14,T[W+1]=(Math.random()-.5)*14,T[W+2]=(Math.random()-.5)*14;M.setAttribute("position",new Hn(T,3));const A=new lu({color:3718648,size:.04,transparent:!0,opacity:.5}),v=new $h(M,A);i.add(v);let E=!1,R={x:0,y:0},P=0,U=0;const O=W=>{E=!0;const ce=W.clientX||W.touches&&W.touches[0].clientX,he=W.clientY||W.touches&&W.touches[0].clientY;R={x:ce,y:he}},L=W=>{if(!E)return;const ce=W.clientX||W.touches&&W.touches[0].clientX,he=W.clientY||W.touches&&W.touches[0].clientY,Re=ce-R.x,Pe=he-R.y;U+=Re*.008,P+=Pe*.008,R={x:ce,y:he}},F=()=>{E=!1};r.addEventListener("mousedown",O),window.addEventListener("mousemove",L),window.addEventListener("mouseup",F),r.addEventListener("touchstart",O,{passive:!0}),window.addEventListener("touchmove",L,{passive:!0}),window.addEventListener("touchend",F);let q={x:0,y:0};window.addEventListener("mousemove",W=>{q.x=(W.clientX/window.innerWidth-.5)*.4,q.y=(W.clientY/window.innerHeight-.5)*.4},{passive:!0});const B=()=>{if(!r)return;const W=r.clientWidth||450,ce=r.clientHeight||450;a.aspect=W/ce,a.updateProjectionMatrix(),s.setSize(W,ce)};window.addEventListener("resize",B);let Z,$=new rp;const Q=()=>{Z=requestAnimationFrame(Q);const W=$.getElapsedTime();U+=.003,o.rotation.y+=(U-o.rotation.y)*.1,o.rotation.x+=(P-o.rotation.x)*.1,a.position.x+=(q.x*2-a.position.x)*.05,a.position.y+=(-q.y*2-a.position.y)*.05,a.lookAt(i.position);const ce=1+Math.sin(W*2)*.05;d.scale.set(ce,ce,ce),m.rotation.y=W*.2,m.rotation.z=W*.15,y.forEach(he=>{he.userData.angle+=he.userData.speed;const Re=he.userData.angle;he.position.x=Math.cos(Re)*w,he.position.z=Math.sin(Re)*w,he.position.y=Math.sin(Re*2+W)*.35}),v.rotation.y=-W*.02,s.render(i,a)};Q()}catch(t){console.warn("Three.js init failed, falling back to 2D canvas:",t),Ha(r)}}function Ha(r){r.innerHTML="";const e=document.createElement("canvas");e.width=450,e.height=450,e.style.width="100%",e.style.height="100%",r.appendChild(e);const t=e.getContext("2d");if(!t)return;let n=0;const i=()=>{t.clearRect(0,0,e.width,e.height);const a=e.width/2,s=e.height/2,o=t.createRadialGradient(a,s,10,a,s,90);o.addColorStop(0,"rgba(56, 189, 248, 0.8)"),o.addColorStop(.5,"rgba(99, 102, 241, 0.4)"),o.addColorStop(1,"transparent"),t.fillStyle=o,t.beginPath(),t.arc(a,s,90,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(56, 189, 248, 0.25)",t.lineWidth=2,t.beginPath(),t.arc(a,s,140,0,Math.PI*2),t.stroke(),[{label:"React",col:"#38bdf8",offset:0},{label:"Node.js",col:"#10b981",offset:Math.PI/3},{label:"AI (CrewAI)",col:"#818cf8",offset:2*Math.PI/3},{label:"MySQL",col:"#f59e0b",offset:Math.PI},{label:"Cloud",col:"#3b82f6",offset:4*Math.PI/3},{label:"Docker",col:"#06b6d4",offset:5*Math.PI/3}].forEach(c=>{const d=n+c.offset,f=a+Math.cos(d)*140,u=s+Math.sin(d)*140;t.fillStyle=c.col,t.beginPath(),t.arc(f,u,7,0,Math.PI*2),t.fill(),t.fillStyle="#cbd5e1",t.font="11px JetBrains Mono, monospace",t.fillText(c.label,f+10,u+4)}),n+=.008,requestAnimationFrame(i)};i()}const cd="km_portfolio_analytics";function ct(r,e={}){try{const t=new Date().toISOString(),n={event:r,data:e,time:t},i=JSON.parse(sessionStorage.getItem(cd)||"[]");i.push(n),sessionStorage.setItem(cd,JSON.stringify(i)),document.documentElement.getAttribute("data-dev-mode")==="true"&&console.log(`[Analytics Event]: ${r}`,e)}catch{}}function rv(){const r=document.getElementById("terminal-body"),e=document.getElementById("terminal-input"),t=document.querySelectorAll(".terminal-pill-cmd");if(!r||!e)return;const n=[];let i=-1;av(r),e.addEventListener("keydown",a=>{if(a.key==="Enter"){const s=e.value.trim();e.value="",s&&(n.push(s),i=n.length,dd(s,r),ct("terminal_command",{command:s}))}else a.key==="ArrowUp"?(a.preventDefault(),n.length>0&&i>0&&(i--,e.value=n[i])):a.key==="ArrowDown"&&(a.preventDefault(),i<n.length-1?(i++,e.value=n[i]):(i=n.length,e.value=""))}),t.forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-cmd")||a.textContent.trim();e.value=s,e.focus(),dd(s,r),ct("terminal_pill_click",{command:s})})})}function av(r){const e=document.createElement("div");e.className="terminal-output",e.innerHTML=`
<span class="cmd-info">⚡ Kalanidhi M C Interactive Dev Terminal v1.0.0</span>
Type <span class="cmd-echo">'help'</span> to see available commands or click the shortcut buttons below.
------------------------------------------------------------
<span class="cmd-echo">$ whoami</span>: Kalanidhi M C
<span class="cmd-echo">$ role</span>: Full Stack Developer
<span class="cmd-echo">$ focus</span>: React.js • Node.js • Java • SQL • MongoDB
<span class="cmd-echo">$ exploring</span>: AI Agents • Cloud • DevOps
<span class="cmd-echo">$ status</span>: Building & Learning 🚀
`,r.appendChild(e),r.scrollTop=r.scrollHeight}function dd(r,e){const t=r.toLowerCase().trim(),n=document.createElement("div");n.className="terminal-output";const i=document.createElement("div");i.innerHTML=`<span class="terminal-prompt-label">kalanidhi@dev-machine:~$</span> <span class="cmd-echo">${kr(r)}</span>`,n.appendChild(i);const a=document.createElement("div");switch(t){case"help":a.innerHTML=`
<span class="cmd-info">Available Commands:</span>
  • <span class="cmd-echo">about</span>       - Brief overview and positioning
  • <span class="cmd-echo">skills</span>      - Technical stack and proficiency
  • <span class="cmd-echo">projects</span>    - Key projects and repository links
  • <span class="cmd-echo">experience</span>  - Internship at Sangam Soft Solutions
  • <span class="cmd-echo">education</span>   - Anna University & Diploma credentials
  • <span class="cmd-echo">achievements</span>- Hackathons and innovation awards
  • <span class="cmd-echo">contact</span>     - Email and networking profiles
  • <span class="cmd-echo">cat resume</span>  - Quick summary and resume link
  • <span class="cmd-echo">devmode</span>     - Toggle Developer Mode overlay
  • <span class="cmd-echo">clear</span>       - Clear the terminal screen
`;break;case"whoami":a.innerHTML=`<span class="cmd-success">${Pt.name}</span> — ${Pt.role}`;break;case"about":a.innerHTML=`
<span class="cmd-info">Kalanidhi M C</span>
${Pt.positioning}
Primary Focus: ${Pt.primaryDirection}
Interests: ${Pt.interests.join(", ")}
`;break;case"skills":a.innerHTML=`
<span class="cmd-info">Core Technical Stacks (Honest Proficiency):</span>
• <span class="cmd-echo">Programming:</span> Java, C, JavaScript
• <span class="cmd-echo">Frontend:</span> React.js, HTML5, CSS3 | Flutter (Exploring)
• <span class="cmd-echo">Backend:</span> Node.js, Express.js, REST APIs, JWT
• <span class="cmd-echo">Databases:</span> MySQL, MongoDB, Firebase
• <span class="cmd-echo">AI (Exploring):</span> Generative AI, LLM Concepts, AI Agents, CrewAI
• <span class="cmd-echo">Cloud & DevOps:</span> Google Cloud, AWS, OCI, Docker, Jenkins, CI/CD, Terraform
• <span class="cmd-echo">Core CS:</span> OOP, Data Structures, Algorithms, SQL
• <span class="cmd-echo">Tools:</span> Git, GitHub, VS Code, Android Studio, Figma
`;break;case"projects":a.innerHTML=`
<span class="cmd-info">Verified Practical Projects (${mr.length}):</span>
${mr.map((l,c)=>`${c+1}. <span class="cmd-echo">${kr(l.title)}</span>: ${kr(l.technologies.slice(0,4).join(" • "))}
   ${kr(l.tagline)}`).join(`
`)}

(Scroll to Projects section or use Ctrl+K to inspect interactive Case Studies!)
`;break;case"certifications":a.innerHTML=`
<span class="cmd-info">Verified Certifications:</span>
• Google Cloud Cybersecurity Certificate
• Google Cloud Data Analytics Certificate
• IBM Generative AI in Action
• Celonis AI Foundations
• UiPath Agentic Automation Developer Associate Training
• Oracle Cloud Infrastructure
• AWS Cloud Workshop
• Applied GenAI Workshop
`;break;case"experience":a.innerHTML=`
<span class="cmd-info">Internship Experience:</span>
• <span class="cmd-success">${Wt.company}</span> (${Wt.location})
  Role: ${Wt.role} | Duration: ${Wt.duration}
  Project: ${Wt.project}
  Technologies: ${Wt.technologies.join(", ")}
  Experience: Redesigned Home, About, Training, Services, Forms, Gallery, Blog, and Dark/Light theme.
`;break;case"education":a.innerHTML=`
<span class="cmd-info">Academic Credentials:</span>
• <span class="cmd-echo">${pi[0].degree}</span>
  ${pi[0].institution} (${pi[0].duration}) | CGPA: <span class="cmd-success">${pi[0].score}</span>
• <span class="cmd-echo">${pi[1].degree}</span>
  ${pi[1].institution} | Score: <span class="cmd-success">${pi[1].score}</span> (Distinction)
`;break;case"achievements":a.innerHTML=`
<span class="cmd-info">Verified Achievements:</span>
• <span class="cmd-warn">Daimler 2024 — Best for Innovation</span>
• <span class="cmd-warn">Smart India Hackathon 2025 — Round 2</span>
• <span class="cmd-warn">India.RUN Hackathon 2026 — Participant</span>
`;break;case"contact":a.innerHTML=`
<span class="cmd-info">Contact & Profiles:</span>
• Email: <a href="mailto:${Pt.email}" class="cmd-echo">${Pt.email}</a>
• Phone: <span class="cmd-echo">${Pt.phone}</span>
• Location: <span class="cmd-echo">${Pt.location}</span>
• GitHub: <a href="${Pt.github}" target="_blank" rel="noopener noreferrer" class="cmd-echo">${Pt.github}</a>
• LinkedIn: <a href="${Pt.linkedin}" target="_blank" rel="noopener noreferrer" class="cmd-echo">linkedin.com/in/kalanidhi-m-c</a>
`;break;case"cat resume":case"resume":a.innerHTML=`
<span class="cmd-success">Resume Document:</span>
Kalanidhi M C — Full Stack Developer & B.E. Computer Science.
File path: <span class="cmd-echo">${Pt.resumePath}</span>
<a href="#resume" class="cmd-info">👉 Click here to jump to Resume section and download</a>
`;break;case"sudo hire kalanidhi":case"hire":a.innerHTML=`<span class="cmd-success">Access granted. Let's build something great. 🚀</span>`;break;case"github":a.innerHTML=`<span class="cmd-info">GitHub: <a href="${Pt.github}" target="_blank" rel="noopener noreferrer" class="cmd-echo">${Pt.github}</a></span>`;break;case"linkedin":a.innerHTML=`<span class="cmd-info">LinkedIn: <a href="${Pt.linkedin}" target="_blank" rel="noopener noreferrer" class="cmd-echo">linkedin.com/in/kalanidhi-m-c</a></span>`;break;case"devmode":const o=!(document.documentElement.getAttribute("data-dev-mode")==="true");document.documentElement.setAttribute("data-dev-mode",String(o)),a.innerHTML=`<span class="cmd-${o?"success":"warn"}">Developer Mode ${o?"ENABLED":"DISABLED"}. Architectural overlays are now ${o?"visible":"hidden"}.</span>`;break;case"clear":e.innerHTML="";return;case"sudo":a.innerHTML=`<span class="cmd-warn">root@dev-machine: Try typing 'sudo hire kalanidhi' 😉</span>`;break;case"status":a.innerHTML='<span class="cmd-success">Status: Building practical software while exploring AI, Cloud & DevOps.</span>';break;case"date":a.innerHTML=`<span class="cmd-info">${new Date().toLocaleString()}</span>`;break;default:a.innerHTML=`<span class="cmd-error">Command not recognized: '${kr(r)}'. Type 'help' for command list.</span>`;break}n.appendChild(a),e.appendChild(n),e.scrollTop=e.scrollHeight}function kr(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Wr=[{id:"home",title:"Go to Home / Hero",category:"Navigation",icon:"🏠",shortcut:"G H",action:()=>mt("home")},{id:"about",title:"Go to About Me",category:"Navigation",icon:"👤",shortcut:"G A",action:()=>mt("about")},{id:"skills",title:"Go to Technical Skills",category:"Navigation",icon:"🛠️",shortcut:"G S",action:()=>mt("skills")},{id:"projects",title:"Go to Projects Showcase",category:"Navigation",icon:"🚀",shortcut:"G P",action:()=>mt("projects")},{id:"architecture",title:"Go to System Architecture",category:"Navigation",icon:"🏗️",shortcut:"G R",action:()=>mt("architecture")},{id:"tech-stack",title:"Go to Tech & Design Stack Showcase",category:"Navigation",icon:"⚡",shortcut:"G T",action:()=>mt("portfolio-tech-stack")},{id:"experience",title:"Go to Internship Experience",category:"Navigation",icon:"💼",shortcut:"G E",action:()=>mt("experience")},{id:"certifications",title:"Go to Certifications & Credentials",category:"Navigation",icon:"📜",shortcut:"G K",action:()=>mt("certifications")},{id:"achievements",title:"Go to Achievements & Awards",category:"Navigation",icon:"🏆",shortcut:"",action:()=>mt("achievements")},{id:"education",title:"Go to Education",category:"Navigation",icon:"🎓",shortcut:"",action:()=>mt("education")},{id:"resume",title:"Go to Resume & Download",category:"Navigation",icon:"📄",shortcut:"G D",action:()=>mt("resume")},{id:"contact",title:"Go to Contact",category:"Navigation",icon:"📬",shortcut:"G C",action:()=>mt("contact")},{id:"theme",title:"Toggle Dark / Light Theme",category:"Action",icon:"🌓",shortcut:"T",action:()=>{var r;return(r=document.getElementById("theme-toggle-btn"))==null?void 0:r.click()}},{id:"devmode",title:"Toggle Developer Mode",category:"Action",icon:"⚡",shortcut:"D",action:()=>{var r;return(r=document.getElementById("dev-mode-toggle"))==null?void 0:r.click()}},{id:"github",title:"Open GitHub Profile",category:"External",icon:"🐙",shortcut:"",action:()=>window.open("https://github.com/kala3013","_blank","noopener noreferrer")},{id:"linkedin",title:"Open LinkedIn Profile",category:"External",icon:"💼",shortcut:"",action:()=>window.open("https://www.linkedin.com/in/kalanidhi-m-c-b568782a5/","_blank","noopener noreferrer")},{id:"copy-email",title:"Copy Email Address",category:"Action",icon:"📋",shortcut:"",action:()=>{var r;return(r=document.getElementById("copy-email-btn"))==null?void 0:r.click()}}];mr.forEach(r=>{Wr.push({id:`project-${r.id}`,title:`Project: ${r.title}`,category:"Project",icon:"🚀",shortcut:"",searchKeywords:`${r.title} ${r.tagline} ${r.technologies.join(" ")} ${r.category.join(" ")} ${r.keyFeatures.join(" ")}`,action:()=>{var e;mt("projects"),(e=window.openProjectModal)==null||e.call(window,r.id)}})});function sv(){const r=document.getElementById("palette-backdrop"),e=document.getElementById("palette-input"),t=document.getElementById("palette-results"),n=document.getElementById("palette-close-btn"),i=document.getElementById("palette-trigger-btn");let a=0,s=[...Wr],o=!1,l=null;Br(Wr,t,a);function c(){r==null||r.classList.add("open"),e.value="",s=[...Wr],a=0,Br(s,t,a),setTimeout(()=>e==null?void 0:e.focus(),50),ct("command_palette_open")}function d(){r==null||r.classList.remove("open")}i==null||i.addEventListener("click",c),n==null||n.addEventListener("click",d),r==null||r.addEventListener("click",f=>{f.target===r&&d()}),e==null||e.addEventListener("input",()=>{const f=e.value.toLowerCase().trim();s=Wr.filter(u=>u.title.toLowerCase().includes(f)||u.category.toLowerCase().includes(f)||u.shortcut.toLowerCase().includes(f)||u.searchKeywords&&u.searchKeywords.toLowerCase().includes(f)),a=0,Br(s,t,a)}),e==null||e.addEventListener("keydown",f=>{f.key==="ArrowDown"?(f.preventDefault(),s.length>0&&(a=(a+1)%s.length,Br(s,t,a))):f.key==="ArrowUp"?(f.preventDefault(),s.length>0&&(a=(a-1+s.length)%s.length,Br(s,t,a))):f.key==="Enter"?(f.preventDefault(),s[a]&&(s[a].action(),d())):f.key==="Escape"&&d()}),window.addEventListener("keydown",f=>{var _,g,p;const u=document.activeElement,m=u&&(u.tagName==="INPUT"||u.tagName==="TEXTAREA");if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="k"){f.preventDefault(),r!=null&&r.classList.contains("open")?d():c();return}if(f.key==="Escape"){d(),(_=document.getElementById("study-modal-backdrop"))==null||_.classList.remove("open");return}if(!m){if(f.key.toLowerCase()==="g"&&!o){o=!0,clearTimeout(l),l=setTimeout(()=>{o=!1},1200);return}if(o){o=!1,clearTimeout(l);const h=f.key.toLowerCase();h==="h"?mt("home"):h==="a"?mt("about"):h==="s"?mt("skills"):h==="p"?mt("projects"):h==="e"?mt("experience"):h==="c"?mt("contact"):h==="d"?mt("resume"):h==="r"?mt("architecture"):h==="t"&&mt("portfolio-tech-stack");return}f.key.toLowerCase()==="t"&&!f.ctrlKey&&!f.altKey&&!f.metaKey?(g=document.getElementById("theme-toggle-btn"))==null||g.click():f.key.toLowerCase()==="d"&&!f.ctrlKey&&!f.altKey&&!f.metaKey?(p=document.getElementById("dev-mode-toggle"))==null||p.click():f.key==="?"&&!f.ctrlKey&&!f.altKey&&!f.metaKey&&c()}})}function Br(r,e,t){if(e){if(e.innerHTML="",r.length===0){e.innerHTML='<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">No matching commands found.</div>';return}r.forEach((n,i)=>{const a=document.createElement("div");a.className=`palette-item ${i===t?"active":""}`,a.innerHTML=`
      <div class="palette-item-left">
        <span class="palette-item-icon">${n.icon}</span>
        <span>${n.title}</span>
      </div>
      <div>
        ${n.shortcut?`<span class="palette-kbd-badge">${n.shortcut}</span>`:`<span style="font-size:0.75rem; color:var(--text-muted);">${n.category}</span>`}
      </div>
    `,a.addEventListener("click",()=>{var s;n.action(),(s=document.getElementById("palette-backdrop"))==null||s.classList.remove("open")}),e.appendChild(a)})}}function mt(r){const e=document.getElementById(r);e&&(e.scrollIntoView({behavior:"smooth"}),ct("navigate_section",{section:r}))}function ov(){const r=document.getElementById("projects-grid"),e=document.querySelectorAll(".filter-btn"),t=document.getElementById("active-skill-filter"),n=document.getElementById("project-search-input"),i=document.getElementById("project-search-clear"),a=document.getElementById("project-count-badge"),s=document.getElementById("study-modal-backdrop"),o=document.getElementById("study-modal-close");let l="All",c=null,d="";u(),e.forEach(p=>{p.addEventListener("click",()=>{e.forEach(h=>{h.classList.remove("active"),h.setAttribute("aria-selected","false")}),p.classList.add("active"),p.setAttribute("aria-selected","true"),l=p.getAttribute("data-filter")||"All",c=null,g(),u(),ct("project_filter_change",{category:l})})}),n==null||n.addEventListener("input",()=>{d=n.value.trim().toLowerCase(),i&&(i.style.display=d.length>0?"inline-flex":"none"),u(),ct("project_search",{query:d})}),i==null||i.addEventListener("click",()=>{n&&(n.value=""),d="",i.style.display="none",n==null||n.focus(),u()}),o==null||o.addEventListener("click",()=>f()),s==null||s.addEventListener("click",p=>{p.target===s&&f()}),document.addEventListener("keydown",p=>{p.key==="Escape"&&(s!=null&&s.classList.contains("open"))&&f()});function f(){s==null||s.classList.remove("open"),document.body.style.overflow=""}function u(){let p=mr;l!=="All"&&(p=p.filter(h=>h.category.some(y=>y.toLowerCase()===l.toLowerCase()))),c&&(p=p.filter(h=>h.technologies.some(y=>y.toLowerCase().includes(c.toLowerCase())))),d&&(p=p.filter(h=>{var R,P,U,O,L,F,q,B;const y=h.title.toLowerCase().includes(d),w=h.tagline.toLowerCase().includes(d),S=(P=(R=h.caseStudy)==null?void 0:R.overview)==null?void 0:P.toLowerCase().includes(d),M=(O=(U=h.caseStudy)==null?void 0:U.problem)==null?void 0:O.toLowerCase().includes(d),T=(F=(L=h.caseStudy)==null?void 0:L.solution)==null?void 0:F.toLowerCase().includes(d),A=h.technologies.some(Z=>Z.toLowerCase().includes(d)),v=h.keyFeatures.some(Z=>Z.toLowerCase().includes(d))||((B=(q=h.caseStudy)==null?void 0:q.features)==null?void 0:B.some(Z=>Z.toLowerCase().includes(d))),E=h.category.some(Z=>Z.toLowerCase().includes(d));return y||w||S||M||T||A||v||E})),m(p.length,mr.length),lv(p,r)}function m(p,h){a&&(p===h?a.textContent=`${h} Verified Projects`:a.textContent=`Showing ${p} of ${h} Projects`)}function _(p){if(t){t.innerHTML=`Skill Filter: <strong>${st(p)}</strong> <button type="button" class="btn-clear-filter" aria-label="Clear filter" style="background:none; border:none; color:inherit; cursor:pointer; margin-left:6px; font-weight:bold;">✕</button>`,t.classList.add("visible");const h=t.querySelector(".btn-clear-filter");h==null||h.addEventListener("click",()=>{c=null,g(),u()})}}function g(){t&&t.classList.remove("visible")}window.filterProjectsBySkill=p=>{var h;if(!p){c=null,g(),l="All",d="",n&&(n.value=""),i&&(i.style.display="none"),e.forEach(y=>{y.getAttribute("data-filter")==="All"?(y.classList.add("active"),y.setAttribute("aria-selected","true")):(y.classList.remove("active"),y.setAttribute("aria-selected","false"))}),u();return}c=p,_(p),e.forEach(y=>{y.getAttribute("data-filter")==="All"?(y.classList.add("active"),y.setAttribute("aria-selected","true")):(y.classList.remove("active"),y.setAttribute("aria-selected","false"))}),l="All",u(),(h=document.getElementById("projects"))==null||h.scrollIntoView({behavior:"smooth"}),ct("skill_explorer_filter",{skill:p})},window.openProjectModal=p=>{const h=mr.find(y=>y.id===p);h&&(Mu(h),ct("view_case_study",{project:h.title}))}}function lv(r,e){var t;if(e){if(e.innerHTML="",r.length===0){const n=document.createElement("div");n.className="projects-empty-state",n.style.gridColumn="1/-1",n.style.textAlign="center",n.style.padding="3.5rem 1.5rem",n.style.background="var(--bg-card)",n.style.border="1px solid var(--border-subtle)",n.style.borderRadius="var(--radius-lg)",n.innerHTML=`
      <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
      <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">No Matching Projects Found</h3>
      <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.5rem; max-width: 480px; margin-inline: auto;">
        No verified projects match your current category, skill, or keyword search criteria.
      </p>
      <button type="button" class="btn btn-primary btn-sm reset-filter-btn">
        Reset All Filters &amp; Search
      </button>
    `,(t=n.querySelector(".reset-filter-btn"))==null||t.addEventListener("click",()=>{window.filterProjectsBySkill(null)}),e.appendChild(n);return}r.forEach((n,i)=>{var s;const a=document.createElement("article");a.className="project-card",a.id=`project-card-${n.id}`,a.innerHTML=`
      <div>
        <div class="project-card-header">
          <div>
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); font-weight:600; margin-bottom:0.25rem; letter-spacing:0.04em;">
              #0${i+1} • ${st(n.projectType||n.category.join(" • "))}
            </div>
            <h3 class="project-title">${st(n.title)}</h3>
            <p class="project-tagline">${st(n.tagline)}</p>
          </div>
          <span class="badge ${n.maturityClass}">${st(n.maturity)}</span>
        </div>

        <div class="project-arch-preview" style="margin: 1.25rem 0;" title="Architecture Flow Preview">
          ${st(n.architecturePreview)}
        </div>

        <div style="margin-bottom: 1.25rem;">
          <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.4rem; text-transform:uppercase; letter-spacing:0.04em;">KEY ARCHITECTURAL HIGHLIGHTS</div>
          <ul class="project-features-preview">
            ${n.keyFeatures.slice(0,3).map(o=>`<li><span style="color:var(--accent-cyan);">▹</span> ${st(o)}</li>`).join("")}
          </ul>
        </div>

        <!-- Developer Mode Panel (Visible in Dev Mode) -->
        <div class="dev-mode-panel">
          <div class="dev-mode-label">⚡ DEV SPECIFICATIONS</div>
          <div class="dev-spec-row"><span class="dev-spec-key">Architecture:</span> <span class="dev-spec-val">${st(n.category.join(" • "))}</span></div>
          <div class="dev-spec-row"><span class="dev-spec-key">Repository:</span> <span class="dev-spec-val">${st(n.github.replace("https://github.com/",""))}</span></div>
          <div class="dev-spec-row"><span class="dev-spec-key">Status:</span> <span class="dev-spec-val">${st(n.maturity)}</span></div>
        </div>
      </div>

      <div>
        <div class="project-tech-tags" style="margin-bottom: 1.25rem;">
          ${n.technologies.map(o=>`<span class="project-tech-tag">${st(o)}</span>`).join("")}
        </div>

        <div class="project-card-actions">
          <a href="${n.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View source code on GitHub for ${n.title}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <button type="button" class="btn btn-primary btn-sm view-study-btn" data-id="${n.id}" aria-label="View deep dive case study for ${n.title}">
            Case Study ▹
          </button>
        </div>
      </div>
    `,(s=a.querySelector(".view-study-btn"))==null||s.addEventListener("click",()=>{Mu(n),ct("view_case_study",{project:n.title})}),e.appendChild(a)})}}function Mu(r){var s;const e=document.getElementById("study-modal-backdrop"),t=document.getElementById("study-modal-title-group"),n=document.getElementById("study-modal-content"),i=document.getElementById("study-modal-footer-actions");if(!e||!n)return;const a=r.caseStudy;t.innerHTML=`
    <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.4rem; flex-wrap:wrap;">
      <span class="badge ${r.maturityClass}">${st(r.maturity)}</span>
      <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan);">${st(r.projectType||r.category.join(" • "))}</span>
    </div>
    <h3 style="font-size:1.8rem; margin:0; color:var(--text-primary);">${st(r.title)}</h3>
    <p style="margin-top:0.25rem; font-size:1rem; color:var(--text-secondary);">${st(r.tagline)}</p>
  `,n.innerHTML=`
    <!-- 01 - Problem -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">01</span>
        <span>The Problem &amp; Context</span>
      </div>
      <div class="study-box">${st(a.problem)}</div>
    </section>

    <!-- 02 - Approach / Solution -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">02</span>
        <span>Engineering Solution</span>
      </div>
      <div class="study-box">${st(a.solution||a.approach)}</div>
    </section>

    <!-- 03 - Workflow Pipeline -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">03</span>
        <span>Workflow Pipeline</span>
      </div>
      <div class="study-workflow-banner">
        ${st(a.workflow)}
      </div>
    </section>

    <!-- 04 - Architecture Flow -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">04</span>
        <span>System Architecture</span>
      </div>
      <pre class="study-arch-diagram">${st(a.architecture)}</pre>
    </section>

    <!-- Interactive Candidate Ranking Visualization (Dedicated for Candidate Ranking System) -->
    ${r.id==="candidate-ranking-system"?dv():""}

    <!-- 05 - Technologies -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">05</span>
        <span>Verified Technologies &amp; Architecture</span>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
        ${a.technologies.map(o=>`<span class="badge badge-cyan" style="font-size:0.85rem; padding:0.4rem 0.8rem;">${st(o)}</span>`).join("")}
      </div>
    </section>

    <!-- 06 - Implementation Code Snippet -->
    ${a.codeSnippet?`
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">06</span>
        <span>Core Architectural Code</span>
      </div>
      <div style="background:var(--term-bg); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:1rem; overflow-x:auto;">
        <pre style="margin:0; font-family:var(--font-mono); font-size:0.825rem; color:var(--term-text); line-height:1.5;"><code>${st(a.codeSnippet)}</code></pre>
      </div>
    </section>
    `:""}

    <!-- 07 - Implemented Features -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">07</span>
        <span>Implemented Functionality</span>
      </div>
      <ul class="study-features-list">
        ${a.features.map(o=>`<li class="study-feature-item"><span class="study-feature-bullet">✓</span> <span>${st(o)}</span></li>`).join("")}
      </ul>
    </section>

    <!-- 08 - Key Learnings -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">08</span>
        <span>Engineering Learnings &amp; Trade-Offs</span>
      </div>
      <div class="study-box" style="border-left: 3px solid var(--accent-cyan);">
        ${st(a.learning)}
      </div>
    </section>

    <!-- 09 - Future Roadmap -->
    <section class="study-section">
      <div class="study-section-title">
        <span class="study-section-number">09</span>
        <span>Future Improvements</span>
      </div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem; font-style:italic;">
        The following capabilities are planned architectural enhancements and are not claimed as completed features:
      </div>
      <ul class="study-features-list">
        ${a.futureImprovements.map(o=>`<li class="study-feature-item"><span class="study-feature-bullet" style="color:var(--accent-amber);">▹</span> <span>${st(o)}</span></li>`).join("")}
      </ul>
    </section>
  `,r.id==="candidate-ranking-system"&&uv(n),i.innerHTML=`
    <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--text-muted);">
      Individual Engineering Implementation
    </span>
    <div style="display:flex; gap:0.75rem;">
      <a href="${r.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        View Repository ↗
      </a>
      <button type="button" class="btn btn-primary btn-sm modal-done-btn">
        Close Case Study
      </button>
    </div>
  `,(s=i.querySelector(".modal-done-btn"))==null||s.addEventListener("click",()=>{e.classList.remove("open"),document.body.style.overflow=""}),e.classList.add("open"),document.body.style.overflow="hidden"}const cv=[{id:"Ref #A-101",tech:95,skills:90,acad:88,status:"Top Shortlist"},{id:"Ref #B-204",tech:88,skills:86,acad:85,status:"Recommended"},{id:"Ref #C-309",tech:82,skills:80,acad:81,status:"Qualified"},{id:"Ref #D-412",tech:75,skills:78,acad:74,status:"Under Review"}];function dv(){return`
    <section class="study-section candidate-ranking-sim-section">
      <div class="study-section-title">
        <span class="study-section-number">⭐</span>
        <span>Candidate Ranking Visualization (Anonymized Demo Data)</span>
      </div>
      <div class="ranking-sim-card">
        <div class="ranking-sim-header">
          <div>
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:0.25rem;">
              SIMULATED MULTI-CRITERIA SCORING PIPELINE
            </div>
            <p style="margin:0; font-size:0.9rem; color:var(--text-secondary);">
              Interactive live demonstration of the multi-factor weighted scoring and sorting algorithm.
            </p>
          </div>
          <div class="ranking-weight-presets" role="group" aria-label="Scoring Weight Presets">
            <button type="button" class="ranking-preset-btn active" data-w-tech="0.40" data-w-skills="0.35" data-w-acad="0.25">
              Balanced (40/35/25)
            </button>
            <button type="button" class="ranking-preset-btn" data-w-tech="0.60" data-w-skills="0.25" data-w-acad="0.15">
              Tech Heavy (60/25/15)
            </button>
            <button type="button" class="ranking-preset-btn" data-w-tech="0.25" data-w-skills="0.55" data-w-acad="0.20">
              Skills Heavy (25/55/20)
            </button>
          </div>
        </div>

        <!-- Leaderboard Table Container -->
        <div id="sim-ranking-table-container" class="ranking-table-wrapper">
          <!-- Populated by JavaScript -->
        </div>

        <div class="ranking-sim-footer">
          <span style="color:var(--accent-cyan); font-weight:bold;">* Note:</span>
          <span>
            Clearly labelled sample demo data simulating the deterministic ranking algorithm. Zero fabricated metrics.
          </span>
        </div>
      </div>
    </section>
  `}function uv(r){const e=r.querySelector("#sim-ranking-table-container"),t=r.querySelectorAll(".ranking-preset-btn");let n={tech:.4,skills:.35,acad:.25};function i(){if(!e)return;const a=cv.map(s=>{const o=s.tech*n.tech+s.skills*n.skills+s.acad*n.acad;return{...s,compositeScore:Number(o.toFixed(1))}}).sort((s,o)=>o.compositeScore-s.compositeScore);e.innerHTML=`
      <table class="ranking-demo-table" aria-label="Candidate Ranking Leaderboard">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Candidate ID</th>
            <th>Technical (${Math.round(n.tech*100)}%)</th>
            <th>Skills Fit (${Math.round(n.skills*100)}%)</th>
            <th>Academic (${Math.round(n.acad*100)}%)</th>
            <th>Composite Score</th>
            <th>Evaluation Status</th>
          </tr>
        </thead>
        <tbody>
          ${a.map((s,o)=>`
            <tr class="ranking-row ${o===0?"top-rank":""}">
              <td class="ranking-pos">
                <span class="rank-num">0${o+1}</span>
              </td>
              <td class="ranking-id">
                <code>${st(s.id)}</code>
              </td>
              <td>${s.tech}%</td>
              <td>${s.skills}%</td>
              <td>${s.acad}%</td>
              <td class="ranking-score">
                <span class="score-badge">${s.compositeScore}%</span>
              </td>
              <td>
                <span class="badge ${o===0?"badge-emerald":o===1?"badge-cyan":"badge-outline"}">
                  ${st(s.status)}
                </span>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}i(),t.forEach(a=>{a.addEventListener("click",()=>{t.forEach(s=>s.classList.remove("active")),a.classList.add("active"),n={tech:parseFloat(a.getAttribute("data-w-tech")||"0.40"),skills:parseFloat(a.getAttribute("data-w-skills")||"0.35"),acad:parseFloat(a.getAttribute("data-w-acad")||"0.25")},i()})})}function st(r){return typeof r!="string"?"":r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const fv=[{id:"client-tier",badge:"LAYER 01",name:"Client Application Tier",tech:"React.js • HTML5 • CSS3",description:"Responsive Single Page Application (SPA) providing an accessible, component-driven user interface. Uses modern React hooks, asynchronous fetch calls, debounced search queries, and zero-flicker state synchronizations.",protocols:"HTTPS / TLS 1.3, JSON Payloads, RESTful Consumption",samplePayload:{type:"HTTP POST Request Dispatch",code:`// React Client API Call
const registerPlayer = async (teamId, playerData) => {
  const response = await fetch('/api/v1/teams/' + teamId + '/players', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('authToken')
    },
    body: JSON.stringify(playerData)
  });
  return await response.json();
};`},responsibilities:["Modular view composition and local state management","Client-side input validation and error feedback states","Dynamic routing and token storage in secure browser memory","Optimized DOM rendering with accessible ARIA semantics"]},{id:"gateway-tier",badge:"LAYER 02",name:"API & Auth Gateway",tech:"REST Endpoints • JWT Auth",description:"Secure routing layer enforcing CORS policies, token validation via Bearer Authorization headers, and request rate/payload sanitization before business logic execution.",protocols:"HTTP REST / Bearer JWT / CORS / Rate Limiting",samplePayload:{type:"JWT Decoded Session Header",code:`{
  "alg": "HS256",
  "typ": "JWT"
}
// Payload Claims:
{
  "sub": "user_89124",
  "name": "Kalanidhi M C",
  "role": "BRANCH_ADMIN",
  "branchCode": "COIMBATORE",
  "exp": 1727362800,
  "iss": "hospital-auth-service"
}`},responsibilities:["JSON Web Token (JWT) cryptographic signature verification","Role-based access guard (Admin, Staff, Student roles)","Strict parameter validation preventing malformed requests","Standardized error codes (400, 401, 403, 404, 500)"]},{id:"backend-tier",badge:"LAYER 03",name:"Controller & Business Logic",tech:"Node.js • Express.js • Python",description:"Decoupled asynchronous execution environment. Handles domain business rules, multi-branch routing logic, database transaction staging, and CrewAI agent pipeline triggers.",protocols:"Asynchronous Event Loop, MVC Pattern, RESTful Router",samplePayload:{type:"Controller Request Handler",code:`// Express Branch Routing Handler
router.get('/appointments', verifyBranchAccess('STAFF'), async (req, res) => {
  try {
    const { branchCode } = req.user; // Enforced from verified JWT
    const { date } = req.query;
    const appointments = await clinicService.getAppointmentsByBranch(branchCode, date);
    res.status(200).json({ success: true, count: appointments.length, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Database query execution failed' });
  }
});`},responsibilities:["Controller orchestration and service layer decoupling","Multi-branch clinic query routing (Coimbatore, Chennai, etc.)","Tournament score aggregation and leaderboard sorting","Password hashing using Bcrypt with secure salt rounds"]},{id:"database-tier",badge:"LAYER 04",name:"Data Persistence Tier",tech:"MySQL (ACID) • MongoDB (NoSQL)",description:"Hybrid data management approach: Relational schema in MySQL for ACID-compliant structured data with foreign key integrity, and flexible document collections in MongoDB for dynamic sport rosters.",protocols:"MySQL Binary Protocol (Port 3306) / MongoDB Wire Protocol (Port 27017)",samplePayload:{type:"Parameterized SQL & Index Spec",code:`-- Relational Schema & Parameterized Execution
CREATE TABLE appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_id INT NOT NULL,
  branch_code VARCHAR(20) NOT NULL,
  appointment_date DATETIME NOT NULL,
  status ENUM('SCHEDULED', 'COMPLETED', 'CANCELLED') DEFAULT 'SCHEDULED',
  FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
  INDEX idx_branch_date (branch_code, appointment_date)
) ENGINE=InnoDB;`},responsibilities:["Normalized relational tables (Patients, Appointments, Branches)","B-Tree indexing on primary IDs and search query columns","Mongoose document schema validation and compound indexing","Parameterized SQL queries eliminating SQL Injection vulnerabilities"]}];function hv(){const r=document.getElementById("arch-nodes-container"),e=document.getElementById("arch-inspector-box");!r||!e||bu(fv,r,e,0)}function bu(r,e,t,n){e.innerHTML="",r.forEach((a,s)=>{const o=document.createElement("div");o.className=`arch-node ${s===n?"active":""}`,o.setAttribute("role","button"),o.setAttribute("tabindex","0"),o.setAttribute("aria-pressed",s===n?"true":"false"),o.setAttribute("aria-label",`Inspect ${a.badge}: ${a.name}`),o.innerHTML=`
      <span class="arch-node-badge">${a.badge}</span>
      <div class="arch-node-name">${a.name}</div>
      <div class="arch-node-tech">${a.tech}</div>
    `;const l=()=>{bu(r,e,t,s),ct("arch_node_inspect",{layer:a.name})};o.addEventListener("click",l),o.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),l())}),e.appendChild(o)});const i=r[n];t.innerHTML=`
    <div class="arch-inspector-header">
      <div>
        <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); font-weight:700;">${i.badge} INSPECTION</span>
        <h3 style="color:var(--text-primary); margin-top:0.25rem; font-size:1.35rem;">${i.name}</h3>
      </div>
      <span class="badge badge-cyan">${i.tech}</span>
    </div>
    <div class="arch-inspector-content">
      <p style="margin-bottom:1.25rem; line-height:1.6; color:var(--text-secondary);">${i.description}</p>
      
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem; margin-bottom:1.25rem;">
        <div style="background:var(--bg-card); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">PRIMARY PROTOCOLS</div>
          <div style="font-family:var(--font-mono); font-size:0.85rem; color:var(--accent-cyan);">${i.protocols}</div>
        </div>
        <div style="background:var(--bg-card); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">KEY ARCHITECTURAL DUTIES</div>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:0.35rem; font-size:0.85rem; color:var(--text-secondary);">
            ${i.responsibilities.map(a=>`<li><span style="color:var(--accent-cyan);">✓</span> ${a}</li>`).join("")}
          </ul>
        </div>
      </div>

      <!-- Sample Wire Payload / Code Preview -->
      <div style="background:var(--term-bg); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:1rem; overflow-x:auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); font-weight:700;">
            SAMPLE SPECIFICATION: ${i.samplePayload.type}
          </span>
          <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--text-muted);">JSON / Code Wire Format</span>
        </div>
        <pre style="margin:0; font-family:var(--font-mono); font-size:0.825rem; color:var(--term-text); line-height:1.5;"><code>${pv(i.samplePayload.code)}</code></pre>
      </div>
    </div>
  `}function pv(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function mv(){const r=document.getElementById("about-narrative-container");if(!r)return;r.innerHTML=`
    <div class="narrative-steps-row" role="tablist" aria-label="Developer Narrative Journey">
      ${Es.map((n,i)=>`
        <button type="button" class="narrative-step-btn ${i===0?"active":""}" data-idx="${i}" role="tab" aria-selected="${i===0}" aria-controls="narrative-panel-${i}" id="narrative-tab-${i}">
          <span class="narrative-step-num">${n.step}</span>
          <span class="narrative-step-action">${n.action}</span>
        </button>
      `).join("")}
    </div>
    <div id="narrative-detail-box" class="narrative-detail-box card" role="tabpanel" aria-labelledby="narrative-tab-0">
      ${ud(Es[0])}
    </div>
  `;const e=r.querySelectorAll(".narrative-step-btn"),t=document.getElementById("narrative-detail-box");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(s=>{s.classList.remove("active"),s.setAttribute("aria-selected","false")}),n.classList.add("active"),n.setAttribute("aria-selected","true");const i=parseInt(n.getAttribute("data-idx")||"0",10),a=Es[i];t.setAttribute("aria-labelledby",`narrative-tab-${i}`),t.innerHTML=ud(a)})})}function ud(r){return`
    <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;">
      <span class="badge badge-cyan" style="font-family:var(--font-mono); font-size:0.8rem;">${r.step} // ${r.action}</span>
      <h3 style="font-size:1.35rem; color:var(--text-primary); margin:0;">${r.title}</h3>
    </div>
    <p style="font-size:1rem; color:var(--text-secondary); line-height:1.7; margin:0;">
      ${r.desc}
    </p>
  `}function gv(){const r=document.getElementById("certifications-grid");r&&(r.innerHTML=Rf.map(e=>`
    <div class="card cert-card">
      <div class="cert-card-top">
        <span class="cert-icon" aria-hidden="true">${e.icon}</span>
        <span class="badge ${e.badgeClass} cert-badge">${e.issuer}</span>
      </div>
      <h3 class="cert-title">${e.name}</h3>
      <p class="cert-desc">${e.desc}</p>
      <div class="cert-verified-label">
        <span style="color:var(--accent-emerald);">✓</span>
        <span>Verified Credential</span>
      </div>
    </div>
  `).join(""))}function ei(r,e="success",t=document.getElementById("toast-container")){if(t||(t=document.getElementById("toast-container")),!t)return;const n=document.createElement("div");n.className="toast show",n.style.borderColor=e==="error"?"var(--accent-rose)":e==="info"?"var(--accent-indigo)":"var(--accent-cyan)",n.innerHTML=`
    <span>${e==="error"?"⚠️":e==="info"?"ℹ️":"✓"}</span>
    <span>${_v(r)}</span>
  `,t.appendChild(n),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},3500)}function _v(r){return typeof r!="string"?"":r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function vv(){const r=document.getElementById("resume-tab-doc"),e=document.getElementById("resume-tab-ats"),t=document.getElementById("resume-paper-view"),n=document.getElementById("resume-ats-view"),i=document.getElementById("resume-paper-theme-toggle"),a=document.getElementById("paper-resume-sheet"),s=document.getElementById("resume-print-btn"),o=document.getElementById("resume-copy-text-btn"),l=document.getElementById("download-resume-btn");r==null||r.addEventListener("click",()=>{r.classList.add("active"),r.setAttribute("aria-selected","true"),e==null||e.classList.remove("active"),e==null||e.setAttribute("aria-selected","false"),t&&(t.style.display="block"),n&&(n.style.display="none"),ct("resume_tab_switch",{tab:"document"})}),e==null||e.addEventListener("click",()=>{e.classList.add("active"),e.setAttribute("aria-selected","true"),r==null||r.classList.remove("active"),r==null||r.setAttribute("aria-selected","false"),t&&(t.style.display="none"),n&&(n.style.display="block"),ct("resume_tab_switch",{tab:"ats"})});let c=!1;i==null||i.addEventListener("click",()=>{c=!c,a&&(c?(a.classList.add("paper-dark-mode"),i.innerHTML="<span>☀️</span> <span>Paper White</span>"):(a.classList.remove("paper-dark-mode"),i.innerHTML="<span>🌙</span> <span>Dark Mode</span>")),ct("resume_paper_theme_toggle",{mode:c?"dark":"paper"})}),s==null||s.addEventListener("click",()=>{ct("resume_print_click"),window.print()}),l==null||l.addEventListener("click",()=>{ct("resume_download_click"),ei("Downloading Kalanidhi M C Resume (PDF)...","info")}),o==null||o.addEventListener("click",async()=>{const d=xv();try{navigator.clipboard&&navigator.clipboard.writeText?(await navigator.clipboard.writeText(d),ei("Resume copied to clipboard in plain text!","success")):(Sv(d),ei("Resume copied to clipboard!","success")),ct("resume_copy_text")}catch(f){console.error("Failed to copy resume:",f),ei("Could not copy automatically. You can print or download the PDF.","error")}})}function xv(){return`KALANIDHI M C
Tirupur, Tamil Nadu | +91 6383396164 | kalanidhimurugan@gmail.com
LinkedIn: https://www.linkedin.com/in/kalanidhi-m-c-b568782a5/ | GitHub: https://github.com/kala3013

PROFESSIONAL SUMMARY
====================
Computer Science Engineering student at Anna University Regional Campus, Coimbatore, with hands-on experience in Full Stack Development and multiple software/AI projects. Skilled in Java, C, React.js, Node.js, MySQL, Firebase, Git and familiar with Docker, Jenkins, CI/CD, cloud computing and Generative AI. Seeking entry-level Software Developer / Full Stack Developer opportunities.

EDUCATION
=========
B.E. Computer Science and Engineering — Lateral Entry                2024–2027
Anna University Regional Campus, Coimbatore                         CGPA: 8.01/10

Diploma in Computer Engineering                                     2024
Konghu Velalar Polytechnic College                                  93%

TECHNICAL SKILLS
================
Programming: Java, C, JavaScript
Frontend: React.js, Flutter, HTML, CSS
Backend: Node.js, Express.js, REST APIs
Databases: MySQL, Firebase, MongoDB
DevOps & Cloud: Docker, Jenkins, CI/CD, Google Cloud, AWS, OCI, Terraform
AI: Generative AI, LLM concepts, AI Agents, CrewAI
Tools & Core: Git, GitHub, VS Code, Android Studio, Figma | OOP, Data Structures, Algorithms, SQL, JWT

INTERNSHIP EXPERIENCE
=====================
FULL STACK DEVELOPMENT INTERN                                       June 2026
Sangam Soft Solutions, Coimbatore
• Developed and redesigned web interfaces using React, Node.js, Git and VS Code, contributing to the Code Infinite website.
• Implemented pages and UI features including Home, About, Training & Courses, Services, forms, gallery, blog-related sections and dark/light theme.

PROJECTS
========
CANDIDATE RANKING SYSTEM (Tech: Node.js, Express.js, REST APIs, SQL)
Automated candidate intake, multi-criteria metric scoring, and transparent ranking pipeline.

AI CODE ANALYZER (Tech: AI, LLM, CrewAI)
AI-assisted application designed to analyze source code and provide useful development.

THAMARAI FERTILITY HOSPITAL (Tech: Node.js, Express.js, MySQL, JWT)
Healthcare web application involving backend APIs, authentication, database management and multi-branch support.

AUTOMATED CERTIFICATE GENERATION SYSTEM (Tech: PHP, MySQL)
Application for managing certificate records and automating certificate generation.

Additional Projects:
Pediatric Hospital Management System • Research Answer Bot

CERTIFICATIONS & TRAINING
=========================
• Google Cloud Cybersecurity
• Google Cloud Data Analytics
• IBM Generative AI in Action
• Celonis AI Foundations
• UiPath Agentic Automation
• Oracle Cloud Infrastructure
• AWS Cloud Workshop

ACHIEVEMENTS & LEADERSHIP
=========================
Achievements:
• Daimler 2024 — Best for Innovation
• Smart India Hackathon 2025 — Round 2
• India.RUN Hackathon 2026 — Participant

Leadership & Activities:
• CSE Placement Coordinator
• Class Placement Representative
• CSE Committee Member
• Applied GenAI Workshop (Anna Univ × Kissflow)
• Placement training coordination
`}function Sv(r){const e=document.createElement("textarea");e.value=r,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}catch(t){console.error("Fallback copy failed",t)}document.body.removeChild(e)}function Zn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Eu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ta={duration:.5,overwrite:!1,delay:0},Il,Nt,dt,Sn=1e8,nt=1/Sn,al=Math.PI*2,yv=al/4,Mv=0,Tu=Math.sqrt,bv=Math.cos,Ev=Math.sin,It=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},ri=function(e){return typeof e=="number"},Dl=function(e){return typeof e>"u"},Xn=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},Nl=function(){return typeof window<"u"},Ga=function(e){return _t(e)||It(e)},Au=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ht=Array.isArray,Tv=/random\([^)]+\)/g,Av=/,\s*/g,fd=/(?:-?\.?\d|\.)+/gi,wu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ro=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cu=/[+-]=-?[.\d]+/,wv=/[^,'"\[\]\s]+/gi,Cv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,Dn,sl,Ul,fn={},as={},Ru,Pu=function(e){return(as=br(e,fn))&&tn},Fl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},na=function(e,t){return!t&&console.warn(e)},Lu=function(e,t){return e&&(fn[e]=t)&&as&&(as[e]=t)||fn},ia=function(){return 0},Rv={suppressEvents:!0,isStart:!0,kill:!1},Ka={suppressEvents:!0,kill:!1},Pv={suppressEvents:!0},Ol={},Si=[],ol={},Iu,sn={},ao={},hd=30,Ja=[],kl="",Bl=function(e){var t=e[0],n,i;if(Xn(t)||_t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ja.length;i--&&!Ja[i].targetTest(t););n=Ja[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ef(e[i],n)))||e.splice(i,1);return e},ki=function(e){return e._gsap||Bl(yn(e))[0]._gsap},Du=function(e,t,n){return(n=e[t])&&_t(n)?e[t]():Dl(n)&&e.getAttribute&&e.getAttribute(t)||n},Qt=function(e,t){return(e=e.split(",")).forEach(t)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},vr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Lv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ss=function(){var e=Si.length,t=Si.slice(0),n,i;for(ol={},Si.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zl=function(e){return!!(e._initted||e._startAt||e.add)},Nu=function(e,t,n,i){Si.length&&!Nt&&ss(),e.render(t,n,!!(Nt&&t<0&&zl(e))),Si.length&&!Nt&&ss()},Uu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wv).length<2?t:It(e)?e.trim():e},Fu=function(e){return e},hn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Iv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},br=function(e,t){for(var n in t)e[n]=t[n];return e},pd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Xn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},os=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Yr=function(e){var t=e.parent||ht,n=e.keyframes?Iv(Ht(e.keyframes)):hn;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Dv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ou=function(e,t,n,i,a){var s=e[i],o;if(a)for(o=t[a];s&&s[a]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},vs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t._prev,s=t._next;a?a._next=s:e[n]===t&&(e[n]=s),s?s._prev=a:e[i]===t&&(e[i]=a),t._next=t._prev=t.parent=null},Mi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Bi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Nv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ll=function(e,t,n,i){return e._startAt&&(Nt?e._startAt.revert(Ka):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Uv=function r(e){return!e||e._ts&&r(e.parent)},md=function(e){return e._repeat?Er(e._tTime,e=e.duration()+e._rDelay)*e:0},Er=function(e,t){var n=Math.floor(e=ft(e/t));return e&&n===e?n-1:n},ls=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xs=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},Ss=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xs(e),n._dirty||Bi(n,e)),e},ku=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ls(e.rawTime(),t),(!t._dur||ha(0,t.totalDuration(),n)-t._tTime>nt)&&t.render(n,!0)),Bi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-nt}},Fn=function(e,t,n,i){return t.parent&&Mi(t),t._start=ft((ri(n)?n:n||e!==ht?gn(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ou(e,t,"_first","_last",e._sort?"_start":0),cl(t)||(e._recent=t),i||ku(e,t),e._ts<0&&Ss(e,e._tTime),e},Bu=function(e,t){return(fn.ScrollTrigger||Fl("scrollTrigger",t))&&fn.ScrollTrigger.create(t,e)},zu=function(e,t,n,i,a){if(Gl(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!Nt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Iu!==on.frame)return Si.push(e),e._lazy=[a,i],1},Fv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},cl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ov=function(e,t,n,i){var a=e.ratio,s=t<0||!t&&(!e._start&&Fv(e)&&!(!e._initted&&cl(e))||(e._ts<0||e._dp._ts<0)&&!cl(e))?0:1,o=e._rDelay,l=0,c,d,f;if(o&&e._repeat&&(l=ha(0,e._tDur,t),d=Er(l,o),e._yoyo&&d&1&&(s=1-s),d!==Er(e._tTime,o)&&(a=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==a||Nt||i||e._zTime===nt||!t&&e._zTime){if(!e._initted&&zu(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?nt:0),n||(n=t&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&ll(e,t,n,!0),e._onUpdate&&!n&&cn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&cn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Mi(e,1),!n&&!Nt&&(cn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Tr=function(e,t,n,i){var a=e._repeat,s=ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=a?a<0?1e10:ft(s*(a+1)+e._rDelay*a):s,o>0&&!i&&Ss(e,e._tTime=e._tDur*o),e.parent&&xs(e),n||Bi(e.parent,e),e},gd=function(e){return e instanceof Yt?Bi(e):Tr(e,e._dur)},Bv={_start:0,endTime:ia,totalDuration:ia},gn=function r(e,t,n){var i=e.labels,a=e._recent||Bv,s=e.duration()>=Sn?a.endTime(!1):e._dur,o,l,c;return It(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?a:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ht(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},Kr=function(e,t,n){var i=ri(t[1]),a=(i?2:1)+(e<2?0:1),s=t[a],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Zt(l.vars.inherit)&&l.parent;s.immediateRender=Zt(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[a-1]}return new Et(t[0],s,t[a+1])},Ti=function(e,t){return e||e===0?t(e):t},ha=function(e,t,n){return n<e?e:n>t?t:n},Bt=function(e,t){return!It(e)||!(t=Cv.exec(e))?"":t[1]},zv=function(e,t,n){return Ti(n,function(i){return ha(e,t,i)})},dl=[].slice,Hu=function(e,t){return e&&Xn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Xn(e[0]))&&!e.nodeType&&e!==Dn},Hv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var a;return It(i)&&!t||Hu(i,1)?(a=n).push.apply(a,yn(i)):n.push(i)})||n},yn=function(e,t,n){return dt&&!t&&dt.selector?dt.selector(e):It(e)&&!n&&(sl||!Ar())?dl.call((t||Ul).querySelectorAll(e),0):Ht(e)?Hv(e,n):Hu(e)?dl.call(e,0):e?[e]:[]},ul=function(e){return e=yn(e)[0]||na("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yn(t,n.querySelectorAll?n:n===e?na("Invalid scope")||Ul.createElement("div"):e)}},Gu=function(e){return e.sort(function(){return .5-Math.random()})},Vu=function(e){if(_t(e))return e;var t=Xn(e)?e:{each:e},n=zi(t.ease),i=t.from||0,a=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,d=i,f=i;return It(i)?d=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(d=i[0],f=i[1]),function(u,m,_){var g=(_||t).length,p=s[g],h,y,w,S,M,T,A,v,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,Sn])[1],!E){for(A=-Sn;A<(A=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(p=s[g]=[],h=l?Math.min(E,g)*d-.5:i%E,y=E===Sn?0:l?g*f/E-.5:i/E|0,A=0,v=Sn,T=0;T<g;T++)w=T%E-h,S=y-(T/E|0),p[T]=M=c?Math.abs(c==="y"?S:w):Tu(w*w+S*S),M>A&&(A=M),M<v&&(v=M);i==="random"&&Gu(p),p.max=A-v,p.min=v,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(i==="edges"?-1:1),p.b=g<0?a-g:a,p.u=Bt(t.amount||t.each)||0,n=n&&g<0?ex(n):n}return g=(p[u]-p.min)/p.max||0,ft(p.b+(n?n(g):g)*p.v)+p.u}},fl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ri(n)?0:Bt(n))}},Wu=function(e,t){var n=Ht(e),i,a;return!n&&Xn(e)&&(i=n=e.radius||Sn,e.values?(e=yn(e.values),(a=!ri(e[0]))&&(i*=i)):e=fl(e.increment)),Ti(t,n?_t(e)?function(s){return a=e(s),Math.abs(a-s)<=i?a:s}:function(s){for(var o=parseFloat(a?s.x:s),l=parseFloat(a?s.y:0),c=Sn,d=0,f=e.length,u,m;f--;)a?(u=e[f].x-o,m=e[f].y-l,u=u*u+m*m):u=Math.abs(e[f]-o),u<c&&(c=u,d=f);return d=!i||c<=i?e[d]:s,a||d===s||ri(s)?d:d+Bt(s)}:fl(e))},Xu=function(e,t,n,i){return Ti(Ht(e)?!t:n===!0?!!(n=0):!i,function(){return Ht(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Gv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(a,s){return s(a)},i)}},Vv=function(e,t){return function(n){return e(parseFloat(n))+(t||Bt(n))}},Wv=function(e,t,n){return $u(e,t,0,1,n)},qu=function(e,t,n){return Ti(n,function(i){return e[~~t(i)]})},Xv=function r(e,t,n){var i=t-e;return Ht(e)?qu(e,r(0,e.length),t):Ti(n,function(a){return(i+(a-e)%i)%i+e})},qv=function r(e,t,n){var i=t-e,a=i*2;return Ht(e)?qu(e,r(0,e.length-1),t):Ti(n,function(s){return s=(a+(s-e)%a)%a||0,e+(s>i?a-s:s)})},ra=function(e){return e.replace(Tv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Av);return Xu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$u=function(e,t,n,i,a){var s=t-e,o=i-n;return Ti(a,function(l){return n+((l-e)/s*o||0)})},$v=function r(e,t,n,i){var a=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!a){var s=It(e),o={},l,c,d,f,u;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Ht(e)&&!Ht(t)){for(d=[],f=e.length,u=f-2,c=1;c<f;c++)d.push(r(e[c-1],e[c]));f--,a=function(_){_*=f;var g=Math.min(u,~~_);return d[g](_-g)},n=t}else i||(e=br(Ht(e)?[]:{},e));if(!d){for(l in t)Hl.call(o,e,l,"get",t[l]);a=function(_){return Xl(_,o)||(s?e.p:e)}}}return Ti(n,a)},_d=function(e,t,n){var i=e.labels,a=Sn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&a>(o=Math.abs(o))&&(l=s,a=o);return l},cn=function(e,t,n){var i=e.vars,a=i[t],s=dt,o=e._ctx,l,c,d;if(a)return l=i[t+"Params"],c=i.callbackScope||e,n&&Si.length&&ss(),o&&(dt=o),d=l?a.apply(c,l):a.call(c),dt=s,d},Xr=function(e){return Mi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Nt),e.progress()<1&&cn(e,"onInterrupt"),e},pr,Yu=[],Ku=function(e){if(e)if(e=!e.name&&e.default||e,Nl()||e.headless){var t=e.name,n=_t(e),i=t&&!n&&e.init?function(){this._props=[]}:e,a={init:ia,render:Xl,add:Hl,kill:dx,modifier:cx,rawVars:0},s={targetTest:0,get:0,getSetter:Wl,aliases:{},register:0};if(Ar(),e!==i){if(sn[t])return;hn(i,hn(os(e,a),s)),br(i.prototype,br(a,os(e,s))),sn[i.prop=t]=i,e.targetTest&&(Ja.push(i),Ol[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Lu(t,i),e.register&&e.register(tn,i,jt)}else Yu.push(e)},tt=255,qr={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},so=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tt+.5|0},Ju=function(e,t,n){var i=e?ri(e)?[e>>16,e>>8&tt,e&tt]:0:qr.black,a,s,o,l,c,d,f,u,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),qr[e])i=qr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+a+a+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&tt,i&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(fd),!t)l=+i[0]%360/360,c=+i[1]/100,d=+i[2]/100,s=d<=.5?d*(c+1):d+c-d*c,a=d*2-s,i.length>3&&(i[3]*=1),i[0]=so(l+1/3,a,s),i[1]=so(l,a,s),i[2]=so(l-1/3,a,s);else if(~e.indexOf("="))return i=e.match(wu),n&&i.length<4&&(i[3]=1),i}else i=e.match(fd)||qr.transparent;i=i.map(Number)}return t&&!_&&(a=i[0]/tt,s=i[1]/tt,o=i[2]/tt,f=Math.max(a,s,o),u=Math.min(a,s,o),d=(f+u)/2,f===u?l=c=0:(m=f-u,c=d>.5?m/(2-f-u):m/(f+u),l=f===a?(s-o)/m+(s<o?6:0):f===s?(o-a)/m+2:(a-s)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},Zu=function(e){var t=[],n=[],i=-1;return e.split(yi).forEach(function(a){var s=a.match(hr)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},vd=function(e,t,n){var i="",a=(e+i).match(yi),s=t?"hsla(":"rgba(",o=0,l,c,d,f;if(!a)return e;if(a=a.map(function(u){return(u=Ju(u,t,1))&&s+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=Zu(e),l=n.c,l.join(i)!==d.c.join(i)))for(c=e.replace(yi,"1").split(hr),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?a.shift()||s+"0,0,0,0)":(d.length?d:a.length?a:n).shift());if(!c)for(c=e.split(yi),f=c.length-1;o<f;o++)i+=c[o]+a[o];return i+c[f]},yi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in qr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Yv=/hsl[a]?\(/,Qu=function(e){var t=e.join(" "),n;if(yi.lastIndex=0,yi.test(t))return n=Yv.test(t),e[1]=vd(e[1],n),e[0]=vd(e[0],n,Zu(e[1])),!0},aa,on=function(){var r=Date.now,e=500,t=33,n=r(),i=n,a=1e3/240,s=a,o=[],l,c,d,f,u,m,_=function g(p){var h=r()-i,y=p===!0,w,S,M,T;if((h>e||h<0)&&(n+=h-t),i+=h,M=i-n,w=M-s,(w>0||y)&&(T=++f.frame,u=M-f.time*1e3,f.time=M=M/1e3,s+=w+(w>=a?4:a-w),S=1),y||(l=c(g)),S)for(m=0;m<o.length;m++)o[m](M,u,T,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Ru&&(!sl&&Nl()&&(Dn=sl=window,Ul=Dn.document||{},fn.gsap=tn,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(tn.version),Pu(as||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),Yu.forEach(Ku)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=d||function(p){return setTimeout(p,s-f.time*1e3+1|0)},aa=1,_(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),aa=0,c=ia},lagSmoothing:function(p,h){e=p||1/0,t=Math.min(h||33,e)},fps:function(p){a=1e3/(p||240),s=f.time*1e3+a},add:function(p,h,y){var w=h?function(S,M,T,A){p(S,M,T,A),f.remove(w)}:p;return f.remove(p),o[y?"unshift":"push"](w),Ar(),w},remove:function(p,h){~(h=o.indexOf(p))&&o.splice(h,1)&&m>=h&&m--},_listeners:o},f}(),Ar=function(){return!aa&&on.wake()},Ge={},Kv=/^[\d.\-M][\d.\-,\s]/,Jv=/["']/g,Zv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],a=1,s=n.length,o,l,c;a<s;a++)l=n[a],o=a!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Jv,"").trim():+c,i=l.substr(o+1).trim();return t},Qv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},jv=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zv(t[1])]:Qv(e).split(",").map(Uu)):Ge._CE&&Kv.test(e)?Ge._CE("",e):n},ex=function(e){return function(t){return 1-e(1-t)}},zi=function(e,t){return e&&(_t(e)?e:Ge[e]||jv(e))||t},$i=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:i},s;return Qt(e,function(o){Ge[o]=fn[o]=a,Ge[s=o.toLowerCase()]=n;for(var l in a)Ge[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ge[o+"."+l]=a[l]}),a},ju=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},oo=function r(e,t,n){var i=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),s=a/al*(Math.asin(1/i)||0),o=function(d){return d===1?1:i*Math.pow(2,-10*d)*Ev((d-s)*a)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:ju(o);return a=al/a,l.config=function(c,d){return r(e,c,d)},l},lo=function r(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:ju(n);return i.config=function(a){return r(e,a)},i};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;$i(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;$i("Elastic",oo("in"),oo("out"),oo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,a=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};$i("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);$i("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});$i("Circ",function(r){return-(Tu(1-r*r)-1)});$i("Sine",function(r){return r===1?1:-bv(r*yv)+1});$i("Back",lo("in"),lo("out"),lo());Ge.SteppedEase=Ge.steps=fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),a=t?1:0,s=1-nt;return function(o){return((i*ha(0,s,o)|0)+a)*n}}};ta.ease=Ge["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return kl+=r+","+r+"Params,"});var ef=function(e,t){this.id=Mv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Du,this.set=t?t.getSetter:Wl},sa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Tr(this,+t.duration,1,1),this.data=t.data,dt&&(this._ctx=dt,dt.data.push(this)),aa||on.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Tr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ar(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Ss(this,n),!a._dp||a.parent||ku(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===nt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Nu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+md(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+md(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,i):this._repeat?Er(this._tTime,a)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?ls(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-nt?0:this._rts,this.totalTime(ha(-Math.abs(this._delay),this.totalDuration(),a),i!==!1),xs(this),Nv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ls(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Pv);var i=Nt;return Nt=n,zl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Nt=i,this},e.globalTime=function(n){for(var i=this,a=arguments.length?n:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gn(this,n),Zt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zt(i)),this._dur||(this._zTime=-nt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=i&&a<this.endTime(!0)-nt)},e.eventCallback=function(n,i,a){var s=this.vars;return arguments.length>1?(i?(s[n]=i,a&&(s[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this,a=i._prom;return new Promise(function(s){var o=_t(n)?n:Fu,l=function(){var d=i.then;i.then=null,a&&a(),_t(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=d),s(o),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Xr(this)},r}();hn(sa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var Yt=function(r){Eu(e,r);function e(n,i){var a;return n===void 0&&(n={}),a=r.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Zt(n.sortChildren),ht&&Fn(n.parent||ht,Zn(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Bu(Zn(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(i,a,s){return Kr(0,arguments,this),this},t.from=function(i,a,s){return Kr(1,arguments,this),this},t.fromTo=function(i,a,s,o){return Kr(2,arguments,this),this},t.set=function(i,a,s){return a.duration=0,a.parent=this,Yr(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Et(i,a,gn(this,s),1),this},t.call=function(i,a,s){return Fn(this,Et.delayedCall(0,i,a),s)},t.staggerTo=function(i,a,s,o,l,c,d){return s.duration=a,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=d,s.parent=this,new Et(i,s,gn(this,l)),this},t.staggerFrom=function(i,a,s,o,l,c,d){return s.runBackwards=1,Yr(s).immediateRender=Zt(s.immediateRender),this.staggerTo(i,a,s,o,l,c,d)},t.staggerFromTo=function(i,a,s,o,l,c,d,f){return o.startAt=s,Yr(o).immediateRender=Zt(o.immediateRender),this.staggerTo(i,a,o,l,c,d,f)},t.render=function(i,a,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=i<=0?0:ft(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,m,_,g,p,h,y,w,S,M,T,A;if(this!==ht&&d>l&&i>=0&&(d=l),d!==this._tTime||s||f){if(o!==this._time&&c&&(d+=this._time-o,i+=this._time-o),u=d,S=this._start,w=this._ts,h=!w,f&&(c||(o=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,a,s);if(u=ft(d%p),d===l?(g=this._repeat,u=c):(M=ft(d/p),g=~~M,g&&g===M&&(u=c,g--),u>c&&(u=c)),M=Er(this._tTime,p),!o&&this._tTime&&M!==g&&this._tTime-M*p-this._dur<=0&&(M=g),T&&g&1&&(u=c-u,A=1),g!==M&&!this._lock){var v=T&&M&1,E=v===(T&&g&1);if(g<M&&(v=!v),o=v?0:d%c?c:d,this._lock=1,this.render(o||(A?0:ft(g*p)),a,!c)._lock=0,this._tTime=d,!a&&this.parent&&cn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=g),o&&o!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=kv(this,ft(o),ft(u)),y&&(d-=u-(u=y._start))),this._tTime=d,this._time=u,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&c&&!a&&!M&&(cn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||u>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,a,s);if(m.render(m._ts>0?(u-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(u-m._start)*m._ts,a,s),u!==this._time||!this._ts&&!h){y=0,_&&(d+=this._zTime=-nt);break}}m=_}else{m=this._last;for(var R=i<0?i:u;m;){if(_=m._prev,(m._act||R<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,a,s);if(m.render(m._ts>0?(R-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(R-m._start)*m._ts,a,s||Nt&&zl(m)),u!==this._time||!this._ts&&!h){y=0,_&&(d+=this._zTime=R?-nt:nt);break}}m=_}}if(y&&!a&&(this.pause(),y.render(u>=o?0:-nt)._zTime=u>=o?1:-1,this._ts))return this._start=S,xs(this),this.render(i,a,s);this._onUpdate&&!a&&cn(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Mi(this,1),!a&&!(i<0&&!o)&&(d||o||!l)&&(cn(this,d===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,a){var s=this;if(ri(a)||(a=gn(this,a,i)),!(i instanceof sa)){if(Ht(i))return i.forEach(function(o){return s.add(o,a)}),this;if(It(i))return this.addLabel(i,a);if(_t(i))i=Et.delayedCall(0,i);else return this}return this!==i?Fn(this,i,a):this},t.getChildren=function(i,a,s,o){i===void 0&&(i=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),o===void 0&&(o=-Sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?a&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,a,s)))),c=c._next;return l},t.getById=function(i){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===i)return a[s]},t.remove=function(i){return It(i)?this.removeLabel(i):_t(i)?this.killTweensOf(i):(i.parent===this&&vs(this,i),i===this._recent&&(this._recent=this._last),Bi(this))},t.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(on.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},t.addLabel=function(i,a){return this.labels[i]=gn(this,a),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,a,s){var o=Et.delayedCall(0,a||ia,s);return o.data="isPause",this._hasPause=1,Fn(this,o,gn(this,i))},t.removePause=function(i){var a=this._first;for(i=gn(this,i);a;)a._start===i&&a.data==="isPause"&&Mi(a),a=a._next},t.killTweensOf=function(i,a,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)_i!==o[l]&&o[l].kill(i,a);return this},t.getTweensOf=function(i,a){for(var s=[],o=yn(i),l=this._first,c=ri(a),d;l;)l instanceof Et?Lv(l._targets,o)&&(c?(!_i||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&s.push(l):(d=l.getTweensOf(o,a)).length&&s.push.apply(s,d),l=l._next;return s},t.tweenTo=function(i,a){a=a||{};var s=this,o=gn(s,i),l=a,c=l.startAt,d=l.onStart,f=l.onStartParams,u=l.immediateRender,m,_=Et.to(s,hn({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||nt,onStart:function(){if(s.pause(),!m){var p=a.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==p&&Tr(_,p,0,1).render(_._time,!0,!0),m=1}d&&d.apply(_,f||[])}},a));return u?_.render(0):_},t.tweenFromTo=function(i,a,s){return this.tweenTo(a,hn({startAt:{time:gn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),_d(this,gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),_d(this,gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(i,a,s){s===void 0&&(s=0);var o=this._first,l=this.labels,c;for(i=ft(i);o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(a)for(c in l)l[c]>=s&&(l[c]+=i);return Bi(this)},t.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Bi(this)},t.totalDuration=function(i){var a=0,s=this,o=s._last,l=Sn,c,d,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(f=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,Fn(s,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(a-=d,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=ft(d/s._ts),s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),l=0),o._end>a&&o._ts&&(a=o._end),o=c;Tr(s,s===ht&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(ht._ts&&(Nu(ht,ls(i,ht)),Iu=on.frame),on.frame>=hd){hd+=un.autoSleep||120;var a=ht._first;if((!a||!a._ts)&&un.autoSleep&&on._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||on.sleep()}}},e}(sa);hn(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var tx=function(e,t,n,i,a,s,o){var l=new jt(this._pt,e,t,0,1,of,null,a),c=0,d=0,f,u,m,_,g,p,h,y;for(l.b=n,l.e=i,n+="",i+="",(h=~i.indexOf("random("))&&(i=ra(i)),s&&(y=[n,i],s(y,e,t),n=y[0],i=y[1]),u=n.match(ro)||[];f=ro.exec(i);)_=f[0],g=i.substring(c,f.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==u[d++]&&(p=parseFloat(u[d-1])||0,l._pt={_next:l._pt,p:g||d===1?g:",",s:p,c:_.charAt(1)==="="?vr(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=ro.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Cu.test(i)||h)&&(l.e=0),this._pt=l,l},Hl=function(e,t,n,i,a,s,o,l,c,d){_t(i)&&(i=i(a||0,e,s));var f=e[t],u=n!=="get"?n:_t(f)?c?e[t.indexOf("set")||!_t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=_t(f)?c?sx:af:Vl,_;if(It(i)&&(~i.indexOf("random(")&&(i=ra(i)),i.charAt(1)==="="&&(_=vr(u,i)+(Bt(u)||0),(_||_===0)&&(i=_))),!d||u!==i||hl)return!isNaN(u*i)&&i!==""?(_=new jt(this._pt,e,t,+u||0,i-(u||0),typeof f=="boolean"?lx:sf,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Fl(t,i),tx.call(this,e,t,u,i,m,l||un.stringFilter,c))},nx=function(e,t,n,i,a){if(_t(e)&&(e=Jr(e,a,t,n,i)),!Xn(e)||e.style&&e.nodeType||Ht(e)||Au(e))return It(e)?Jr(e,a,t,n,i):e;var s={},o;for(o in e)s[o]=Jr(e[o],a,t,n,i);return s},tf=function(e,t,n,i,a,s){var o,l,c,d;if(sn[e]&&(o=new sn[e]).init(a,o.rawVars?t[e]:nx(t[e],i,a,s,n),n,i,s)!==!1&&(n._pt=l=new jt(n._pt,a,e,0,1,o.render,o,0,o.priority),n!==pr))for(c=n._ptLookup[n._targets.indexOf(a)],d=o._props.length;d--;)c[o._props[d]]=l;return o},_i,hl,Gl=function r(e,t,n){var i=e.vars,a=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,d=i.runBackwards,f=i.yoyoEase,u=i.keyframes,m=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,h=e.parent,y=h&&h.data==="nested"?h.vars.targets:p,w=e._overwrite==="auto"&&!Il,S=e.timeline,M=i.easeReverse||f,T,A,v,E,R,P,U,O,L,F,q,B,Z;if(S&&(!u||!a)&&(a="none"),e._ease=zi(a,ta.ease),e._rEase=M&&(zi(M)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||u&&!i.stagger){if(O=p[0]?ki(p[0]).harness:0,B=O&&i[O.prop],T=os(i,Ol),g&&(g._zTime<0&&g.progress(1),t<0&&d&&o&&!m?g.render(-1,!0):g.revert(d&&_?Ka:Rv),g._lazy=0),s){if(Mi(e._startAt=Et.set(p,hn({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&Zt(l),startAt:null,delay:0,onUpdate:c&&function(){return cn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nt||!o&&!m)&&e._startAt.revert(Ka),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&_&&!g){if(t&&(o=!1),v=hn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Zt(l),immediateRender:o,stagger:0,parent:h},T),B&&(v[O.prop]=B),Mi(e._startAt=Et.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nt?e._startAt.revert(Ka):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Zt(l)||l&&!_,A=0;A<p.length;A++){if(R=p[A],U=R._gsap||Bl(p)[A]._gsap,e._ptLookup[A]=F={},ol[U.id]&&Si.length&&ss(),q=y===p?A:y.indexOf(R),O&&(L=new O).init(R,B||T,e,q,y)!==!1&&(e._pt=E=new jt(e._pt,R,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function($){F[$]=E}),L.priority&&(P=1)),!O||B)for(v in T)sn[v]&&(L=tf(v,T,e,q,R,y))?L.priority&&(P=1):F[v]=E=Hl.call(e,R,v,"get",T[v],q,y,0,i.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),w&&e._pt&&(_i=e,ht.killTweensOf(R,F,e.globalTime(t)),Z=!e.parent,_i=0),e._pt&&l&&(ol[U.id]=1)}P&&lf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,u&&t<=0&&S.render(Sn,!0,!0)},ix=function(e,t,n,i,a,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,f,u,m;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,m=e._targets.length;m--;){if(d=u[m][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return hl=1,e.vars[t]="+=0",Gl(e,o),hl=0,l?na(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(m=c.length;m--;)f=c[m],d=f._pt||f,d.s=(i||i===0)&&!a?i:d.s+(i||0)+s*d.c,d.c=n-d.s,f.e&&(f.e=xt(n)+Bt(f.e)),f.b&&(f.b=d.s+Bt(f.b))},rx=function(e,t){var n=e[0]?ki(e[0]).harness:0,i=n&&n.aliases,a,s,o,l;if(!i)return t;a=br({},t);for(s in i)if(s in a)for(l=i[s].split(","),o=l.length;o--;)a[l[o]]=a[s];return a},ax=function(e,t,n,i){var a=t.ease||i||"power1.inOut",s,o;if(Ht(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:a})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:a})},Jr=function(e,t,n,i,a){return _t(e)?e.call(t,n,i,a):It(e)&&~e.indexOf("random(")?ra(e):e},nf=kl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",rf={};Qt(nf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return rf[r]=1});var Et=function(r){Eu(e,r);function e(n,i,a,s){var o;typeof i=="number"&&(a.duration=i,i=a,a=null),o=r.call(this,s?i:Yr(i))||this;var l=o.vars,c=l.duration,d=l.delay,f=l.immediateRender,u=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,h=i.parent||ht,y=(Ht(n)||Au(n)?ri(n[0]):"length"in i)?[n]:yn(n),w,S,M,T,A,v,E,R;if(o._targets=y.length?Bl(y):na("GSAP target "+n+" not found. https://gsap.com",!un.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||u||Ga(c)||Ga(d)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(w=o.timeline=new Yt({data:"nested",defaults:g||{},targets:h&&h.data==="nested"?h.vars.targets:y}),w.kill(),w.parent=w._dp=Zn(o),w._start=0,u||Ga(c)||Ga(d)){if(T=y.length,E=u&&Vu(u),Xn(u))for(A in u)~nf.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(S=0;S<T;S++)M=os(i,rf),M.stagger=0,P&&(M.easeReverse=P),R&&br(M,R),v=y[S],M.duration=+Jr(c,Zn(o),S,v,y),M.delay=(+Jr(d,Zn(o),S,v,y)||0)-o._delay,!u&&T===1&&M.delay&&(o._delay=d=M.delay,o._start+=d,M.delay=0),w.to(v,M,E?E(S,v,y):0),w._ease=Ge.none;w.duration()?c=d=0:o.timeline=0}else if(_){Yr(hn(w.vars.defaults,{ease:"none"})),w._ease=zi(_.ease||i.ease||"none");var U=0,O,L,F;if(Ht(_))_.forEach(function(q){return w.to(y,q,">")}),w.duration();else{M={};for(A in _)A==="ease"||A==="easeEach"||ax(A,_[A],M,_.easeEach);for(A in M)for(O=M[A].sort(function(q,B){return q.t-B.t}),U=0,S=0;S<O.length;S++)L=O[S],F={ease:L.e,duration:(L.t-(S?O[S-1].t:0))/100*c},F[A]=L.v,w.to(y,F,U),U+=F.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return m===!0&&!Il&&(_i=Zn(o),ht.killTweensOf(y),_i=0),Fn(h,Zn(o),a),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===ft(h._time)&&Zt(f)&&Uv(Zn(o))&&h.data!=="nested")&&(o._tTime=-nt,o.render(Math.max(0,-d)||0)),p&&Bu(Zn(o),p),o}var t=e.prototype;return t.render=function(i,a,s){var o=this._time,l=this._tDur,c=this._dur,d=i<0,f=i>l-nt&&!d?l:i<nt?0:i,u,m,_,g,p,h,y,w;if(!c)Ov(this,i,a,s);else if(f!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=f,w=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+i,a,s);if(u=ft(f%g),f===l?(_=this._repeat,u=c):(p=ft(f/g),_=~~p,_&&_===p?(u=c,_--):u>c&&(u=c)),h=this._yoyo&&_&1,h&&(u=c-u),p=Er(this._tTime,g),u===o&&!s&&this._initted&&_===p)return this._tTime=f,this;_!==p&&this.vars.repeatRefresh&&!h&&!this._lock&&u!==g&&this._initted&&(this._lock=s=1,this.render(ft(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(zu(this,d?i:u,s,a,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,a,s)}if(this._rEase){var S=u<o;if(S!==this._inv){var M=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(S?-1:1)/M:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!a&&!p&&(cn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;w&&w.render(i<0?i:w._dur*w._ease(u/this._dur),a,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(d&&ll(this,i,a,s),cn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!a&&this.parent&&cn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&ll(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Mi(this,1),!a&&!(d&&!o)&&(f||o||h)&&(cn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,a,s,o,l){aa||on.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Gl(this,c),d=this._ease(c/this._dur),ix(this,i,a,s,o,d,c,l)?this.resetTo(i,a,s,o,1):(Ss(this,0),this.parent||Ou(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Xr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Nt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,_i&&_i.vars.overwrite!==!0)._first||Xr(this),this.parent&&s!==this.timeline.totalDuration()&&Tr(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?yn(i):o,c=this._ptLookup,d=this._pt,f,u,m,_,g,p,h;if((!a||a==="all")&&Dv(o,l))return a==="all"&&(this._pt=0),Xr(this);for(f=this._op=this._op||[],a!=="all"&&(It(a)&&(g={},Qt(a,function(y){return g[y]=1}),a=g),a=rx(o,a)),h=o.length;h--;)if(~l.indexOf(o[h])){u=c[h],a==="all"?(f[h]=a,_=u,m={}):(m=f[h]=f[h]||{},_=a);for(g in _)p=u&&u[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&vs(this,p,"_pt"),delete u[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&d&&Xr(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return Kr(1,arguments)},e.delayedCall=function(i,a,s,o){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,a,s){return Kr(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,s){return ht.killTweensOf(i,a,s)},e}(sa);hn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(r){Et[r]=function(){var e=new Yt,t=dl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Vl=function(e,t,n){return e[t]=n},af=function(e,t,n){return e[t](n)},sx=function(e,t,n,i){return e[t](i.fp,n)},ox=function(e,t,n){return e.setAttribute(t,n)},Wl=function(e,t){return _t(e[t])?af:Dl(e[t])&&e.setAttribute?ox:Vl},sf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},lx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},of=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Xl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},cx=function(e,t,n,i){for(var a=this._pt,s;a;)s=a._next,a.p===i&&a.modifier(e,t,n),a=s},dx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?vs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ux=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},lf=function(e){for(var t=e._pt,n,i,a,s;t;){for(n=t._next,i=a;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:a=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=a},jt=function(){function r(t,n,i,a,s,o,l,c,d){this.t=n,this.s=a,this.c=s,this.p=i,this.r=o||sf,this.d=l||this,this.set=c||Vl,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,a){this.mSet=this.mSet||this.set,this.set=ux,this.m=n,this.mt=a,this.tween=i},r}();Qt(kl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ol[r]=1});fn.TweenMax=fn.TweenLite=Et;fn.TimelineLite=fn.TimelineMax=Yt;ht=new Yt({sortChildren:!1,defaults:ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});un.stringFilter=Qu;var Hi=[],Za={},fx=[],xd=0,hx=0,co=function(e){return(Za[e]||fx).map(function(t){return t()})},pl=function(){var e=Date.now(),t=[];e-xd>2&&(co("matchMediaInit"),Hi.forEach(function(n){var i=n.queries,a=n.conditions,s,o,l,c;for(o in i)s=Dn.matchMedia(i[o]).matches,s&&(l=1),s!==a[o]&&(a[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),co("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xd=e,co("matchMedia"))},cf=function(){function r(t,n){this.selector=n&&ul(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,a){_t(n)&&(a=i,i=n,n=_t);var s=this,o=function(){var c=dt,d=s.selector,f;return c&&c!==s&&c.data.push(s),a&&(s.selector=ul(a)),dt=s,f=i.apply(s,arguments),_t(f)&&s._r.push(f),dt=c,s.selector=d,s.isReverted=!1,f};return s.last=o,n===_t?o(s,function(l){return s.add(null,l)}):n?s[n]=o:o},e.ignore=function(n){var i=dt;dt=null,n(this),dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var a=this;if(n?function(){for(var o=a.getTweens(),l=a.data.length,c;l--;)c=a.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),l=a.data.length;l--;)c=a.data[l],c instanceof Yt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(n);a._r.forEach(function(d){return d(n,a)}),a.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var s=Hi.length;s--;)Hi[s].id===this.id&&Hi.splice(s,1)},e.revert=function(n){this.kill(n||{})},r}(),px=function(){function r(t){this.contexts=[],this.scope=t,dt&&dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,a){Xn(n)||(n={matches:n});var s=new cf(0,a||this.scope),o=s.conditions={},l,c,d;dt&&!s.selector&&(s.selector=dt.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?d=1:(l=Dn.matchMedia(n[c]),l&&(Hi.indexOf(s)<0&&Hi.push(s),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(pl):l.addEventListener("change",pl)));return d&&i(s,function(f){return s.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),cs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ku(i)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){It(e)&&(e=yn(e)[0]);var a=ki(e||{}).get,s=n?Fu:Uu;return n==="native"&&(n=""),e&&(t?s((sn[t]&&sn[t].get||a)(e,t,n,i)):function(o,l,c){return s((sn[o]&&sn[o].get||a)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=yn(e),e.length>1){var i=e.map(function(d){return tn.quickSetter(d,t,n)}),a=i.length;return function(d){for(var f=a;f--;)i[f](d)}}e=e[0]||{};var s=sn[t],o=ki(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(d){var f=new s;pr._pt=0,f.init(e,n?d+n:d,pr,0,[e]),f.render(1,f),pr._pt&&Xl(1,pr)}:o.set(e,l);return s?c:function(d){return c(e,l,n?d+n:d,o,1)}},quickTo:function(e,t,n){var i,a=tn.to(e,hn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),s=function(l,c,d){return a.resetTo(t,l,c,d)};return s.tween=a,s},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zi(e.ease,ta.ease)),pd(ta,e||{})},config:function(e){return pd(un,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,a=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!sn[o]&&!fn[o]&&na(t+" effect requires "+o+" plugin.")}),ao[t]=function(o,l,c){return n(yn(o),hn(l||{},a),c)},s&&(Yt.prototype[t]=function(o,l,c){return this.add(ao[t](o,Xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ge[e]=zi(t)},parseEase:function(e,t){return arguments.length?zi(e,t):Ge},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yt(e),i,a;for(n.smoothChildTiming=Zt(e.smoothChildTiming),ht.remove(n),n._dp=0,n._time=n._tTime=ht._time,i=ht._first;i;)a=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&Fn(n,i,i._start-i._delay),i=a;return Fn(ht,n,0),n},context:function(e,t){return e?new cf(e,t):dt},matchMedia:function(e){return new px(e)},matchMediaRefresh:function(){return Hi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||pl()},addEventListener:function(e,t){var n=Za[e]||(Za[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Za[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Xv,wrapYoyo:qv,distribute:Vu,random:Xu,snap:Wu,normalize:Wv,getUnit:Bt,clamp:zv,splitColor:Ju,toArray:yn,selector:ul,mapRange:$u,pipe:Gv,unitize:Vv,interpolate:$v,shuffle:Gu},install:Pu,effects:ao,ticker:on,updateRoot:Yt.updateRoot,plugins:sn,globalTimeline:ht,core:{PropTween:jt,globals:Lu,Tween:Et,Timeline:Yt,Animation:sa,getCache:ki,_removeLinkedListItem:vs,reverting:function(){return Nt},context:function(e){return e&&dt&&(dt.data.push(e),e._ctx=dt),dt},suppressOverwrites:function(e){return Il=e}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cs[r]=Et[r]});on.add(Yt.updateRoot);pr=cs.to({},{duration:0});var mx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},gx=function(e,t){var n=e._targets,i,a,s;for(i in t)for(a=n.length;a--;)s=e._ptLookup[a][i],s&&(s=s.d)&&(s._pt&&(s=mx(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[a],i))},uo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,a,s){s._onInit=function(o){var l,c;if(It(a)&&(l={},Qt(a,function(d){return l[d]=1}),a=l),t){l={};for(c in a)l[c]=t(a[c]);a=l}gx(o,a)}}}},tn=cs.registerPlugin({name:"attr",init:function(e,t,n,i,a){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,a,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Nt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},uo("roundProps",fl),uo("modifiers"),uo("snap",Wu))||cs;Et.version=Yt.version=tn.version="3.15.0";Ru=1;Nl()&&Ar();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sd,vi,xr,ql,Oi,yd,$l,_x=function(){return typeof window<"u"},ai={},Ni=180/Math.PI,Sr=Math.PI/180,cr=Math.atan2,Md=1e8,Yl=/([A-Z])/g,vx=/(left|right|width|margin|padding|x)/i,xx=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ml=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},df=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},uf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ex=function(e,t,n){return e.style[t]=n},Tx=function(e,t,n){return e.style.setProperty(t,n)},Ax=function(e,t,n){return e._gsap[t]=n},wx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Cx=function(e,t,n,i,a){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(a,s)},Rx=function(e,t,n,i,a){var s=e._gsap;s[t]=n,s.renderTransform(a,s)},pt="transform",en=pt+"Origin",Px=function r(e,t){var n=this,i=this.target,a=i.style,s=i._gsap;if(e in ai&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Bn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Qn(i,o)}):this.tfm[e]=s.x?s[e]:Qn(i,e),e===en&&(this.tfm.zOrigin=s.zOrigin);else return Bn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(pt)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(en,t,"")),e=pt}(a||t)&&this.props.push(e,t,a[e])},ff=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Lx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,a,s;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Yl,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=$l(),(!a||!a.isStart)&&!n[pt]&&(ff(n),i.zOrigin&&n[en]&&(n[en]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},hf=function(e,t){var n={target:e,props:[],revert:Lx,save:Px};return e._gsap||tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},pf,gl=function(e,t){var n=vi.createElementNS?vi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vi.createElement(e);return n&&n.style?n:vi.createElement(e)},dn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Yl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,wr(t)||t,1)||""},bd="O,Moz,ms,Ms,Webkit".split(","),wr=function(e,t,n){var i=t||Oi,a=i.style,s=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(bd[s]+e in a););return s<0?null:(s===3?"ms":s>=0?bd[s]:"")+e},_l=function(){_x()&&window.document&&(Sd=window,vi=Sd.document,xr=vi.documentElement,Oi=gl("div")||{style:{}},gl("div"),pt=wr(pt),en=pt+"Origin",Oi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pf=!!wr("perspective"),$l=tn.core.reverting,ql=1)},Ed=function(e){var t=e.ownerSVGElement,n=gl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),a;i.style.display="block",n.appendChild(i),xr.appendChild(n);try{a=i.getBBox()}catch{}return n.removeChild(i),xr.removeChild(n),a},Td=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},mf=function(e){var t,n;try{t=e.getBBox()}catch{t=Ed(e),n=1}return t&&(t.width||t.height)||n||(t=Ed(e)),t&&!t.width&&!t.x&&!t.y?{x:+Td(e,["x","cx","x1"])||0,y:+Td(e,["y","cy","y1"])||0,width:0,height:0}:t},gf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&mf(e))},bi=function(e,t){if(t){var n=e.style,i;t in ai&&t!==en&&(t=pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Yl,"-$1").toLowerCase())):n.removeAttribute(t)}},xi=function(e,t,n,i,a,s){var o=new jt(e._pt,t,n,0,1,s?uf:df);return e._pt=o,o.b=i,o.e=a,e._props.push(n),o},Ad={deg:1,rad:1,turn:1},Ix={grid:1,flex:1},Ei=function r(e,t,n,i){var a=parseFloat(n)||0,s=(n+"").trim().substr((a+"").length)||"px",o=Oi.style,l=vx.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",m=i==="%",_,g,p,h;if(i===s||!a||Ad[i]||Ad[s])return a;if(s!=="px"&&!u&&(a=r(e,t,n,"px")),h=e.getCTM&&gf(e),(m||s==="%")&&(ai[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[d],xt(m?a/_*f:a/100*_);if(o[l?"width":"height"]=f+(u?s:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===vi||!g.appendChild)&&(g=vi.body),p=g._gsap,p&&m&&p.width&&l&&p.time===on.time&&!p.uncache)return xt(a/p.width*f);if(m&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,_=e[d],y?e.style[t]=y:bi(e,t)}else(m||s==="%")&&!Ix[dn(g,"display")]&&(o.position=dn(e,"position")),g===e&&(o.position="static"),g.appendChild(Oi),_=Oi[d],g.removeChild(Oi),o.position="absolute";return l&&m&&(p=ki(g),p.time=on.time,p.width=g[d]),xt(u?_*a/f:_&&a?f/_*a:0)},Qn=function(e,t,n,i){var a;return ql||_l(),t in Bn&&t!=="transform"&&(t=Bn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ai[t]&&t!=="transform"?(a=la(e,i),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:us(dn(e,en))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=ds[t]&&ds[t](e,t,n)||dn(e,t)||Du(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Ei(e,t,a,n)+n:a},Dx=function(e,t,n,i){if(!n||n==="none"){var a=wr(t,e,1),s=a&&dn(e,a,1);s&&s!==n?(t=a,n=s):t==="borderColor"&&(n=dn(e,"borderTopColor"))}var o=new jt(this._pt,e.style,t,0,1,of),l=0,c=0,d,f,u,m,_,g,p,h,y,w,S,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=dn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=dn(e,t)||i,g?e.style[t]=g:bi(e,t)),d=[n,i],Qu(d),n=d[0],i=d[1],u=n.match(hr)||[],M=i.match(hr)||[],M.length){for(;f=hr.exec(i);)p=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=u[c++]||"")&&(m=parseFloat(g)||0,S=g.substr((m+"").length),p.charAt(1)==="="&&(p=vr(m,p)+S),h=parseFloat(p),w=p.substr((h+"").length),l=hr.lastIndex-w.length,w||(w=w||un.units[t]||S,l===i.length&&(i+=w,o.e+=w)),S!==w&&(m=Ei(e,t,g,w)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:h-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?uf:df;return Cu.test(i)&&(o.e=0),this._pt=o,o},wd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Nx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=wd[n]||n,t[1]=wd[i]||i,t.join(" ")},Ux=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,a=t.u,s=n._gsap,o,l,c;if(a==="all"||a===!0)i.cssText="",l=1;else for(a=a.split(","),c=a.length;--c>-1;)o=a[c],ai[o]&&(l=1,o=o==="transformOrigin"?en:pt),bi(n,o);l&&(bi(n,pt),s&&(s.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",la(n,1),s.uncache=1,ff(i)))}},ds={clearProps:function(e,t,n,i,a){if(a.data!=="isFromStart"){var s=e._pt=new jt(e._pt,t,n,0,0,Ux);return s.u=i,s.pr=-10,s.tween=a,e._props.push(n),1}}},oa=[1,0,0,1,0,0],_f={},vf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Cd=function(e){var t=dn(e,pt);return vf(t)?oa:t.substr(7).match(wu).map(xt)},Kl=function(e,t){var n=e._gsap||ki(e),i=e.style,a=Cd(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?oa:a):(a===oa&&!e.offsetParent&&e!==xr&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,xr.appendChild(e)),a=Cd(e),l?i.display=l:bi(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):xr.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},vl=function(e,t,n,i,a,s){var o=e._gsap,l=a||Kl(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,m=l[0],_=l[1],g=l[2],p=l[3],h=l[4],y=l[5],w=t.split(" "),S=parseFloat(w[0])||0,M=parseFloat(w[1])||0,T,A,v,E;n?l!==oa&&(A=m*p-_*g)&&(v=S*(p/A)+M*(-g/A)+(g*y-p*h)/A,E=S*(-_/A)+M*(m/A)-(m*y-_*h)/A,S=v,M=E):(T=mf(e),S=T.x+(~w[0].indexOf("%")?S/100*T.width:S),M=T.y+(~(w[1]||w[0]).indexOf("%")?M/100*T.height:M)),i||i!==!1&&o.smooth?(h=S-c,y=M-d,o.xOffset=f+(h*m+y*g)-h,o.yOffset=u+(h*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[en]="0px 0px",s&&(xi(s,o,"xOrigin",c,S),xi(s,o,"yOrigin",d,M),xi(s,o,"xOffset",f,o.xOffset),xi(s,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},la=function(e,t){var n=e._gsap||new ef(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,a=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=dn(e,en)||"0",d,f,u,m,_,g,p,h,y,w,S,M,T,A,v,E,R,P,U,O,L,F,q,B,Z,$,Q,W,ce,he,Re,Pe;return d=f=u=g=p=h=y=w=S=0,m=_=1,n.svg=!!(e.getCTM&&gf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pt]!=="none"?l[pt]:"")),i.scale=i.rotate=i.translate="none"),A=Kl(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),vl(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,T=n.yOrigin||0,A!==oa&&(P=A[0],U=A[1],O=A[2],L=A[3],d=F=A[4],f=q=A[5],A.length===6?(m=Math.sqrt(P*P+U*U),_=Math.sqrt(L*L+O*O),g=P||U?cr(U,P)*Ni:0,y=O||L?cr(O,L)*Ni+g:0,y&&(_*=Math.abs(Math.cos(y*Sr))),n.svg&&(d-=M-(M*P+T*O),f-=T-(M*U+T*L))):(Pe=A[6],he=A[7],Q=A[8],W=A[9],ce=A[10],Re=A[11],d=A[12],f=A[13],u=A[14],v=cr(Pe,ce),p=v*Ni,v&&(E=Math.cos(-v),R=Math.sin(-v),B=F*E+Q*R,Z=q*E+W*R,$=Pe*E+ce*R,Q=F*-R+Q*E,W=q*-R+W*E,ce=Pe*-R+ce*E,Re=he*-R+Re*E,F=B,q=Z,Pe=$),v=cr(-O,ce),h=v*Ni,v&&(E=Math.cos(-v),R=Math.sin(-v),B=P*E-Q*R,Z=U*E-W*R,$=O*E-ce*R,Re=L*R+Re*E,P=B,U=Z,O=$),v=cr(U,P),g=v*Ni,v&&(E=Math.cos(v),R=Math.sin(v),B=P*E+U*R,Z=F*E+q*R,U=U*E-P*R,q=q*E-F*R,P=B,F=Z),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,h=180-h),m=xt(Math.sqrt(P*P+U*U+O*O)),_=xt(Math.sqrt(q*q+Pe*Pe)),v=cr(F,q),y=Math.abs(v)>2e-4?v*Ni:0,S=Re?1/(Re<0?-Re:Re):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vf(dn(e,pt)),B&&e.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(a?(m*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=u+s,n.scaleX=xt(m),n.scaleY=xt(_),n.rotation=xt(g)+o,n.rotationX=xt(p)+o,n.rotationY=xt(h)+o,n.skewX=y+o,n.skewY=w+o,n.transformPerspective=S+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[en]=us(c)),n.xOffset=n.yOffset=0,n.force3D=un.force3D,n.renderTransform=n.svg?Ox:pf?xf:Fx,n.uncache=0,n},us=function(e){return(e=e.split(" "))[0]+" "+e[1]},fo=function(e,t,n){var i=Bt(t);return xt(parseFloat(t)+parseFloat(Ei(e,"x",n+"px",i)))+i},Fx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xf(e,t)},Ii="0deg",zr="0px",Di=") ",xf=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,d=n.rotationY,f=n.rotationX,u=n.skewX,m=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,h=n.force3D,y=n.target,w=n.zOrigin,S="",M=h==="auto"&&e&&e!==1||h===!0;if(w&&(f!==Ii||d!==Ii)){var T=parseFloat(d)*Sr,A=Math.sin(T),v=Math.cos(T),E;T=parseFloat(f)*Sr,E=Math.cos(T),s=fo(y,s,A*E*-w),o=fo(y,o,-Math.sin(T)*-w),l=fo(y,l,v*E*-w+w)}p!==zr&&(S+="perspective("+p+Di),(i||a)&&(S+="translate("+i+"%, "+a+"%) "),(M||s!==zr||o!==zr||l!==zr)&&(S+=l!==zr||M?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Di),c!==Ii&&(S+="rotate("+c+Di),d!==Ii&&(S+="rotateY("+d+Di),f!==Ii&&(S+="rotateX("+f+Di),(u!==Ii||m!==Ii)&&(S+="skew("+u+", "+m+Di),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Di),y.style[pt]=S||"translate(0, 0)"},Ox=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,d=n.skewY,f=n.scaleX,u=n.scaleY,m=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,h=n.yOffset,y=n.forceCSS,w=parseFloat(s),S=parseFloat(o),M,T,A,v,E;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=Sr,c*=Sr,M=Math.cos(l)*f,T=Math.sin(l)*f,A=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(d*=Sr,E=Math.tan(c-d),E=Math.sqrt(1+E*E),A*=E,v*=E,d&&(E=Math.tan(d),E=Math.sqrt(1+E*E),M*=E,T*=E)),M=xt(M),T=xt(T),A=xt(A),v=xt(v)):(M=f,v=u,T=A=0),(w&&!~(s+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(w=Ei(m,"x",s,"px"),S=Ei(m,"y",o,"px")),(_||g||p||h)&&(w=xt(w+_-(_*M+g*A)+p),S=xt(S+g-(_*T+g*v)+h)),(i||a)&&(E=m.getBBox(),w=xt(w+i/100*E.width),S=xt(S+a/100*E.height)),E="matrix("+M+","+T+","+A+","+v+","+w+","+S+")",m.setAttribute("transform",E),y&&(m.style[pt]=E)},kx=function(e,t,n,i,a){var s=360,o=It(a),l=parseFloat(a)*(o&&~a.indexOf("rad")?Ni:1),c=l-i,d=i+c+"deg",f,u;return o&&(f=a.split("_")[1],f==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),f==="cw"&&c<0?c=(c+s*Md)%s-~~(c/s)*s:f==="ccw"&&c>0&&(c=(c-s*Md)%s-~~(c/s)*s)),e._pt=u=new jt(e._pt,t,n,i,c,Sx),u.e=d,u.u="deg",e._props.push(n),u},Rd=function(e,t){for(var n in t)e[n]=t[n];return e},Bx=function(e,t,n){var i=Rd({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,d,f,u,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[pt]=t,o=la(n,1),bi(n,pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[pt],s[pt]=t,o=la(n,1),s[pt]=c);for(l in ai)c=i[l],d=o[l],c!==d&&a.indexOf(l)<0&&(m=Bt(c),_=Bt(d),f=m!==_?Ei(n,l,c,_):parseFloat(c),u=parseFloat(d),e._pt=new jt(e._pt,o,l,f,u-f,ml),e._pt.u=_||0,e._props.push(l));Rd(o,i)};Qt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",a="Left",s=(e<3?[t,n,i,a]:[t+a,t+n,i+n,i+a]).map(function(o){return e<2?r+o:"border"+o+r});ds[e>1?"border"+r:r]=function(o,l,c,d,f){var u,m;if(arguments.length<4)return u=s.map(function(_){return Qn(o,_,c)}),m=u.join(" "),m.split(u[0]).length===5?u[0]:m;u=(d+"").split(" "),m={},s.forEach(function(_,g){return m[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,m,f)}});var Sf={name:"css",register:_l,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,a){var s=this._props,o=e.style,l=n.vars.startAt,c,d,f,u,m,_,g,p,h,y,w,S,M,T,A,v,E;ql||_l(),this.styles=this.styles||hf(e),v=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(d=t[g],!(sn[g]&&tf(g,t,n,i,e,a)))){if(m=typeof d,_=ds[g],m==="function"&&(d=d.call(n,i,e,a),m=typeof d),m==="string"&&~d.indexOf("random(")&&(d=ra(d)),_)_(this,e,g,d,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),d+="",yi.lastIndex=0,yi.test(c)||(p=Bt(c),h=Bt(d),h?p!==h&&(c=Ei(e,g,c,h)+h):p&&(d+=p)),this.add(o,"setProperty",c,d,i,a,0,0,g),s.push(g),v.push(g,0,o[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,a):l[g],It(c)&&~c.indexOf("random(")&&(c=ra(c)),Bt(c+"")||c==="auto"||(c+=un.units[g]||Bt(Qn(e,g))||""),(c+"").charAt(1)==="="&&(c=Qn(e,g))):c=Qn(e,g),u=parseFloat(c),y=m==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),f=parseFloat(d),g in Bn&&(g==="autoAlpha"&&(u===1&&Qn(e,"visibility")==="hidden"&&f&&(u=0),v.push("visibility",0,o.visibility),xi(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Bn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in ai,w){if(this.styles.save(g),E=d,m==="string"&&d.substring(0,6)==="var(--"){if(d=dn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=d,d=dn(e,"perspective"),R?e.style.perspective=R:bi(e,"perspective")}f=parseFloat(d)}if(S||(M=e._gsap,M.renderTransform&&!t.parseTransform||la(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new jt(this._pt,o,pt,0,1,M.renderTransform,M,0,-1),S.dep=1),g==="scale")this._pt=new jt(this._pt,M,"scaleY",M.scaleY,(y?vr(M.scaleY,y+f):f)-M.scaleY||0,ml),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(en,0,o[en]),d=Nx(d),M.svg?vl(e,d,0,T,0,this):(h=parseFloat(d.split(" ")[2])||0,h!==M.zOrigin&&xi(this,M,"zOrigin",M.zOrigin,h),xi(this,o,g,us(c),us(d)));continue}else if(g==="svgOrigin"){vl(e,d,1,T,0,this);continue}else if(g in _f){kx(this,M,g,u,y?vr(u,y+d):d);continue}else if(g==="smoothOrigin"){xi(this,M,"smooth",M.smooth,d);continue}else if(g==="force3D"){M[g]=d;continue}else if(g==="transform"){Bx(this,d,e);continue}}else g in o||(g=wr(g)||g);if(w||(f||f===0)&&(u||u===0)&&!xx.test(d)&&g in o)p=(c+"").substr((u+"").length),f||(f=0),h=Bt(d)||(g in un.units?un.units[g]:p),p!==h&&(u=Ei(e,g,c,h)),this._pt=new jt(this._pt,w?M:o,g,u,(y?vr(u,y+f):f)-u,!w&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?bx:ml),this._pt.u=h||0,w&&E!==d?(this._pt.b=c,this._pt.e=E,this._pt.r=Mx):p!==h&&h!=="%"&&(this._pt.b=c,this._pt.r=yx);else if(g in o)Dx.call(this,e,g,c,y?y+d:d);else if(g in e)this.add(e,g,c||e[g],y?y+d:d,i,a);else if(g!=="parseTransform"){Fl(g,d);continue}w||(g in o?v.push(g,0,o[g]):typeof e[g]=="function"?v.push(g,2,e[g]()):v.push(g,1,c||e[g])),s.push(g)}}A&&lf(this)},render:function(e,t){if(t.tween._time||!$l())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qn,aliases:Bn,getSetter:function(e,t,n){var i=Bn[t];return i&&i.indexOf(",")<0&&(t=i),t in ai&&t!==en&&(e._gsap.x||Qn(e,"x"))?n&&yd===n?t==="scale"?wx:Ax:(yd=n||{})&&(t==="scale"?Cx:Rx):e.style&&!Dl(e.style[t])?Ex:~t.indexOf("-")?Tx:Wl(e,t)},core:{_removeProperty:bi,_getMatrix:Kl}};tn.utils.checkPrefix=wr;tn.core.getStyleSaver=hf;(function(r,e,t,n){var i=Qt(r+","+e+","+t,function(a){ai[a]=1});Qt(e,function(a){un.units[a]="deg",_f[a]=1}),Bn[i[13]]=r+","+e,Qt(n,function(a){var s=a.split(":");Bn[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){un.units[r]="px"});tn.registerPlugin(Sf);var Cr=tn.registerPlugin(Sf)||tn;Cr.core.Tween;function zx(){var t;const r=document.getElementById("tech-stack-pillars-grid"),e=document.getElementById("portfolio-positioning-quote");e&&(e.textContent=`"${uc.positioning}"`),r&&(r.innerHTML=uc.pillars.map((n,i)=>`
    <article class="tech-stack-card" id="tech-pillar-${n.id}">
      <div class="tech-stack-card-header">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <span class="tech-stack-icon">${n.icon}</span>
          <div>
            <span class="tech-pillar-number">PILLAR 0${i+1}</span>
            <h3 class="tech-stack-title">${ho(n.category)}</h3>
          </div>
        </div>
        <span class="badge ${n.badgeClass}">${n.tech.split("•")[0].trim()}</span>
      </div>

      <div class="tech-stack-tech-strip">
        <span class="tech-strip-label">TECHNOLOGY / APPROACH:</span>
        <div class="tech-strip-tags">
          ${n.tech.split("•").map(a=>`<span class="tech-pill">${ho(a.trim())}</span>`).join("")}
        </div>
      </div>

      <div class="tech-stack-purpose-box">
        <div class="purpose-label">PURPOSE:</div>
        <ul class="purpose-list">
          ${n.items.map(a=>`<li><span class="purpose-bullet">▹</span> <span>${ho(a)}</span></li>`).join("")}
        </ul>
      </div>

      <!-- Interactive Micro-Feature per Pillar -->
      <div class="tech-stack-interactive-footer">
        ${Hx(n)}
      </div>
    </article>
  `).join(""),(t=r.querySelectorAll(".btn-test-motion"))==null||t.forEach(n=>{n.addEventListener("click",()=>{const i=document.getElementById("tech-pillar-motion");i&&Cr.timeline().to(i,{scale:.94,duration:.12,ease:"power2.in"}).to(i,{scale:1.03,duration:.25,ease:"back.out(2)"}).to(i,{scale:1,duration:.2,ease:"power2.out"}),n.classList.add("pulse-anim"),setTimeout(()=>n.classList.remove("pulse-anim"),800),ct("test_motion_click")})}))}function Hx(r){return r.id==="motion"?`
      <div style="display:flex; align-items:center; justify-content:space-between; width:100%; font-size:0.78rem;">
        <span style="color:var(--accent-emerald); font-family:var(--font-mono); font-weight:600;">⚡ GSAP Motion Engine Active</span>
        <button type="button" class="btn btn-secondary btn-sm btn-test-motion" style="font-size:0.75rem; padding:0.25rem 0.6rem;">
          Test Spring Physics
        </button>
      </div>
    `:r.id==="immersive-3d"?`
      <div style="display:flex; align-items:center; justify-content:space-between; width:100%; font-size:0.78rem;">
        <span style="color:var(--accent-indigo); font-family:var(--font-mono); font-weight:600;">🌐 360° Rotational Core</span>
        <a href="#home" class="btn btn-secondary btn-sm" style="font-size:0.75rem; padding:0.25rem 0.6rem;">
          Rotate Core 360° ↑
        </a>
      </div>
    `:r.id==="ui-ux"?`
      <div style="display:flex; align-items:center; gap:0.5rem; width:100%; font-size:0.75rem; font-family:var(--font-mono);">
        <span style="color:var(--text-muted);">Tokens:</span>
        <span style="width:14px; height:14px; border-radius:50%; background:#38bdf8;" title="Cyan #38bdf8"></span>
        <span style="width:14px; height:14px; border-radius:50%; background:#10b981;" title="Emerald #10b981"></span>
        <span style="width:14px; height:14px; border-radius:50%; background:#6366f1;" title="Indigo #6366f1"></span>
        <span style="width:14px; height:14px; border-radius:50%; background:#f59e0b;" title="Amber #f59e0b"></span>
        <span style="color:var(--text-muted); margin-left:auto;">Inter + JetBrains</span>
      </div>
    `:r.id==="performance"?`
      <div style="display:flex; align-items:center; gap:0.5rem; width:100%; font-size:0.75rem; font-family:var(--font-mono);">
        <span style="color:var(--accent-emerald); font-weight:700;">✓ Sub-second FCP</span>
        <span style="color:var(--text-muted);">•</span>
        <span style="color:var(--text-secondary);">Zero CLS Layout</span>
        <span style="color:var(--text-muted); margin-left:auto;">Vite 5.4</span>
      </div>
    `:`
      <div style="display:flex; align-items:center; gap:0.5rem; width:100%; font-size:0.75rem; font-family:var(--font-mono); color:var(--accent-cyan);">
        <span>✓ Reactive Component Lifecycle</span>
        <span style="color:var(--text-muted); margin-left:auto;">Tailwind + CSS Tokens</span>
      </div>
    `}function ho(r){return typeof r!="string"?"":r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Gx(){window.matchMedia("(prefers-reduced-motion: reduce)").matches||(Vx(),Wx(),Xx())}function Vx(){Cr.timeline({defaults:{ease:"power3.out"}}).from(".recruiter-ribbon",{y:-25,opacity:0,duration:.8,delay:.2}).from(".hero-badge-row",{y:15,opacity:0,duration:.5},"-=0.4").from(".hero-name",{y:30,opacity:0,duration:.8},"-=0.3").from(".hero-role-title",{y:20,opacity:0,duration:.6},"-=0.5").from(".hero-bio",{y:20,opacity:0,duration:.6},"-=0.4").from(".hero-actions .btn",{y:20,opacity:0,duration:.5,stagger:.1},"-=0.4").from(".hero-flow-strip",{y:20,opacity:0,duration:.6},"-=0.3").from(".hero-3d-wrapper",{scale:.94,opacity:0,duration:.9},"-=0.8").from(".terminal-window",{y:25,opacity:0,duration:.7},"-=0.5")}function Wx(){const r=document.querySelectorAll(".section-header, .about-card, .timeline-card, .resume-viewer-container"),e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(Cr.fromTo(n.target,{y:35,opacity:0},{y:0,opacity:1,duration:.75,ease:"power2.out"}),e.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -50px 0px"});r.forEach(t=>e.observe(t))}function Xx(){document.querySelectorAll(".project-card, .tech-stack-card, .strength-card").forEach(e=>{e.addEventListener("mousemove",t=>{const n=e.getBoundingClientRect(),i=t.clientX-n.left,a=t.clientY-n.top,s=n.width/2,o=n.height/2,l=(a-o)/o*-5,c=(i-s)/s*5;Cr.to(e,{transformPerspective:800,rotationX:l,rotationY:c,scale:1.015,duration:.25,ease:"power1.out",boxShadow:"0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.15)"})}),e.addEventListener("mouseleave",()=>{Cr.to(e,{rotationX:0,rotationY:0,scale:1,duration:.45,ease:"power2.out",boxShadow:""})})})}const Pd=[{query:"What projects has Kalanidhi built?",keywords:["projects","built","work","applications","portfolio","creations","github"],answer:`Kalanidhi has engineered 6 verified practical projects:
1. **Candidate Ranking System**: Automated candidate intake, multi-criteria metric scoring, and transparent ranking pipeline (Node.js, Express, REST APIs, SQL).
2. **AI Code Analyzer**: AI-assisted application using Python & CrewAI to perform static code analysis and developer productivity guidance.
3. **Thamarai Fertility Hospital Management System**: Healthcare web application featuring role-based JWT authentication and multi-branch database architecture (Node.js, Express, MySQL).
4. **Automated Certificate Generation System**: Academic certificate management application with dynamic issuance and CRUD operations (PHP, MySQL).
5. **Pediatric Hospital Management System**: Modern healthcare web platform featuring 14 medical departments, doctor directory, and appointment intake (React 18, Vite, Tailwind CSS).
6. **Research Answer Bot**: Retrieval-Augmented Generation (RAG) system for querying research papers using FastAPI, Streamlit, LangChain, ChromaDB, and FAISS.

You can click 'Case Study' on any project to inspect interactive workflows, architecture diagrams, and code snippets!`},{query:"What technologies does he use?",keywords:["technologies","skills","tech stack","languages","tools","frameworks","java","react","node","python","mysql"],answer:`Kalanidhi's technical stack is categorized by verified experience:
• **Programming**: Java, C, JavaScript
• **Frontend**: React.js, HTML5, CSS3, Flutter (Exploring)
• **Backend**: Node.js, Express.js, REST APIs
• **Databases**: MySQL, MongoDB, Firebase
• **Authentication**: JWT (JSON Web Tokens)
• **Cloud**: Google Cloud, AWS, Oracle Cloud Infrastructure
• **DevOps**: Docker, Jenkins, CI/CD, Terraform
• **AI Exploration**: Generative AI, LLM Concepts, AI Agents, CrewAI
• **Core CS**: Object-Oriented Programming, Data Structures, Algorithms, SQL
• **Tools**: Git, GitHub, VS Code, Android Studio, Figma`},{query:"Does he have internship experience?",keywords:["internship","intern","company","sangam","experience","work experience","employment"],answer:`Yes! Kalanidhi completed an internship as a **Full Stack Development Intern** at **Sangam Soft Solutions — Coimbatore** in June 2026.

His primary project was the **Code Infinite Website Redesign**, where he built modular components for Home, About, Training & Courses, Services, Forms, Gallery, and Blog-related sections with a responsive UI, dark/light theme, and Git-based collaborative workflow using React and Node.js.`},{query:"What certifications has he completed?",keywords:["certifications","certificate","credentials","google cloud","aws","ibm","celonis","uipath","oracle"],answer:`Kalanidhi has earned 8 industry and cloud certifications:
1. **Google Cloud Cybersecurity Certificate**
2. **Google Cloud Data Analytics Certificate**
3. **IBM Generative AI in Action**
4. **Celonis AI Foundations**
5. **UiPath Agentic Automation Developer Associate Training**
6. **Oracle Cloud Infrastructure**
7. **AWS Cloud Workshop**
8. **Applied GenAI Workshop**

You can view the full Certifications section on this site for detailed badges!`},{query:"What is his educational background?",keywords:["education","degree","college","university","anna university","gpa","cgpa","marks","diploma"],answer:`Kalanidhi is currently pursuing his **B.E. in Computer Science and Engineering (Lateral Entry)** at **Anna University Regional Campus, Coimbatore** (2024–2027) with a **CGPA of 8.01 / 10**.

Prior to this, he completed his **Diploma in Computer Engineering** at **Konghu Velalar Polytechnic College** in 2024 with **93% distinction**.`},{query:"What hackathons or awards has he achieved?",keywords:["achievements","awards","hackathons","daimler","sih","smart india","competition","india.run"],answer:`Kalanidhi has earned several verified recognitions:
1. **Daimler 2024 — Best for Innovation** for creative technical problem-solving.
2. **Smart India Hackathon 2025 — Round 2** competing at the national level.
3. **India.RUN Hackathon 2026** participant developing collaborative solutions under intensive timelines.`},{query:"Does he have leadership experience?",keywords:["leadership","extracurricular","coordinator","placement","soft skills","activities","representative"],answer:`Yes! Kalanidhi actively contributes to student leadership:
• **CSE Placement Coordinator**: Coordinating campus recruitment initiatives with corporate teams.
• **Class Placement Representative**: Serving as communication liaison between faculty and students.
• **CSE Committee Member**: Organizing department technical symposiums and coding workshops.
• **Placement Training Coordination**: Assisting student peers with aptitude practice and technical interview readiness.`},{query:"How can I contact Kalanidhi?",keywords:["contact","email","reach","hire","phone","linkedin","github","message","call","location"],answer:`You can reach Kalanidhi directly via:
• **Email**: kalanidhimurugan@gmail.com
• **Phone**: +91 6383396164
• **Location**: Tirupur, Tamil Nadu, India
• **GitHub**: github.com/kala3013
• **LinkedIn**: linkedin.com/in/kalanidhi-m-c-b568782a5

You can also download his official resume directly from the site!`}],qx="I can only answer questions directly related to Kalanidhi M C's verified education (B.E. CSE at Anna University, Diploma 93%), technical skills (React, Node, Java, MySQL, CrewAI, Cloud/DevOps), verified projects (Candidate Ranking System, AI Code Analyzer, Thamarai Fertility HMS, Automated Certificate Generation, Pediatric Hospital MS, Research Answer Bot), Sangam Soft Solutions internship, 8 certifications, hackathon achievements, and contact details. Try asking one of the suggested prompts above!";function $x(){const r=document.getElementById("ai-input-form"),e=document.getElementById("ai-input-field"),t=document.getElementById("ai-chat-output"),n=document.querySelectorAll(".ai-chip");!r||!e||!t||(n.forEach(i=>{i.addEventListener("click",()=>{const a=i.getAttribute("data-query")||i.textContent.trim();e.value=a,Ld(a,t),ct("ai_chip_query",{query:a})})}),r.addEventListener("submit",i=>{i.preventDefault();const a=e.value.trim();a&&(Ld(a,t),ct("ai_custom_query",{query:a}))}))}function Ld(r,e){e.innerHTML=`
    <div style="display:flex; align-items:center; gap:0.5rem; color:var(--accent-cyan); font-family:var(--font-mono); font-size:0.85rem;">
      <span class="pulse-dot"></span> Consulting grounded portfolio data...
    </div>
  `,setTimeout(()=>{const t=Yx(r);Kx(r,t,e)},300)}function Yx(r){const e=r.toLowerCase().trim();for(const a of Pd)if(e.includes(a.query.toLowerCase())||a.query.toLowerCase().includes(e))return a.answer;const t=e.split(/\W+/).filter(Boolean);let n=null,i=0;for(const a of Pd){let s=0;for(const o of a.keywords)t.includes(o.toLowerCase())?s+=2:e.includes(o.toLowerCase())&&(s+=1);s>i&&(i=s,n=a)}return n&&i>=2?n.answer:qx}function Kx(r,e,t){const n=e.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary);">$1</strong>').replace(/\n/g,"<br>");t.innerHTML=`
    <div style="margin-bottom:0.75rem; font-size:0.85rem; font-family:var(--font-mono); color:var(--text-muted);">
      <span style="color:var(--accent-cyan);">Q:</span> "${Jx(r)}"
    </div>
    <div style="color:var(--text-secondary); line-height:1.7;">
      ${n}
    </div>
  `}function Jx(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const po="km_portfolio_dev_mode";function Zx(){const r=document.getElementById("dev-mode-toggle"),e=document.getElementById("dev-mode-banner"),t=localStorage.getItem(po)==="true";mo(t),r&&r.addEventListener("click",()=>{const i=!(document.documentElement.getAttribute("data-dev-mode")==="true");mo(i),localStorage.setItem(po,String(i)),ct("dev_mode_toggle",{enabled:i}),Id(i)}),e==null||e.addEventListener("click",()=>{mo(!1),localStorage.setItem(po,"false"),Id(!1)})}function mo(r){document.documentElement.setAttribute("data-dev-mode",String(r));const e=document.getElementById("dev-mode-toggle");if(e){e.setAttribute("aria-pressed",String(r));const t=e.querySelector(".dev-mode-text");t&&(t.textContent=r?"Dev Mode: ON":"Dev Mode: OFF")}}function Id(r){const e=document.getElementById("toast-container");if(!e)return;const t=document.createElement("div");t.className="toast show",t.innerHTML=r?"<span>⚡</span> <span>Developer Mode Enabled: Technical overlays &amp; schemas now visible.</span>":"<span>👔</span> <span>Recruiter Mode Restored: Clean executive view active.</span>",e.appendChild(t),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3500)}function Qx(){const r=document.getElementById("copy-email-btn"),e=document.getElementById("contact-form"),t=document.getElementById("toast-container");r&&r.addEventListener("click",()=>{jx(Pt.email,()=>{ei("Email address copied to clipboard!",t);const n=r.innerHTML;r.innerHTML="<span>✓</span> <span>Copied!</span>",setTimeout(()=>{r.innerHTML=n},2500),ct("copy_email_success")})}),e&&e.addEventListener("submit",n=>{n.preventDefault();const i=e.querySelector('input[name="_gotcha"]');if(i&&i.value){console.warn("Spam submission detected by honeypot.");return}const a=document.getElementById("contact-name"),s=document.getElementById("contact-email"),o=document.getElementById("contact-message"),l=a.value.trim(),c=s.value.trim(),d=o.value.trim();if(!l||!c||!d){ei("Please fill in all required fields.",t,"error");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)){ei("Please enter a valid email address.",t,"error");return}const u=encodeURIComponent(`Portfolio Inquiry from ${l}`),m=encodeURIComponent(`Hi Kalanidhi,

${d}

From: ${l} (${c})`),_=`mailto:${Pt.email}?subject=${u}&body=${m}`;ei("Opening default mail client to deliver message...",t),ct("contact_form_submit",{name:l,emailLength:c.length}),setTimeout(()=>{window.location.href=_,e.reset()},600)})}function jx(r,e){navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(r).then(e).catch(()=>Dd(r,e)):Dd(r,e)}function Dd(r,e){const t=document.createElement("textarea");t.value=r,t.style.position="fixed",t.style.left="-999999px",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),e()}catch(n){console.error("Fallback copy error",n)}document.body.removeChild(t)}const Nd=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function eS(){let r=0;window.addEventListener("keydown",e=>{const t=document.activeElement;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"))return;const n=Nd[r];e.key===n||e.key.toLowerCase()===n.toLowerCase()?(r++,r===Nd.length&&(tS(),r=0)):r=0})}function tS(){ct("easter_egg_unlocked"),ei("🚀 Easter Egg Unlocked: Engineering mode overclocked! Keep building great software.");const r=document.createElement("div");r.style.cssText=`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #090d16, #162035);
    border: 2px solid var(--accent-cyan);
    box-shadow: 0 0 40px rgba(56, 189, 248, 0.6);
    color: #fff;
    padding: 1rem 1.75rem;
    border-radius: var(--radius-lg);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    z-index: 9999;
    text-align: center;
    transition: opacity 0.5s ease;
  `,r.innerHTML=`
    <div style="color:var(--accent-cyan); font-weight:700; margin-bottom:0.25rem;">🎮 KONAMI CODE DETECTED</div>
    <div style="font-size:0.8rem; color:#cbd5e1;">"Talk is cheap. Show me the code." — Linus Torvalds</div>
  `,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),500)},4e3)}function Ud(){try{Nf(),Uf(),Ff(),Of(),Zx(),sv(),rv(),ov(),hv(),zx(),mv(),gv(),vv(),$x(),Qx(),eS(),iv(),kf(),Gx(),nS(),iS(),rS(),aS(),sS(),oS(),lS(),cS()}catch(r){console.error("Initialization error:",r)}finally{const r=document.getElementById("preloader");r&&(r.style.opacity="0",r.style.pointerEvents="none",setTimeout(()=>r.remove(),350))}ct("portfolio_loaded",{userAgent:navigator.userAgent.substring(0,50)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ud):Ud();function nS(){const r=document.getElementById("recruiter-pills-container");r&&(r.innerHTML=Cf.map(e=>`
    <a href="${e.targetSection}" class="recruiter-pill" title="${e.detail}">
      <span>${e.icon}</span>
      <span>${e.label}</span>
      <span class="pill-jump-arrow" aria-hidden="true">↓</span>
    </a>
  `).join(""))}function iS(){const r=document.getElementById("skills-grid"),e=document.querySelectorAll(".skill-category-btn");if(!r)return;let t="All";function n(i){r.innerHTML=i.map(a=>`
      <div class="skill-card" data-skill="${a.name}" role="button" tabindex="0" aria-label="Filter projects using ${a.name}" title="Click to view projects using ${a.name}">
        <div>
          <div class="skill-card-top">
            <span class="skill-name">${a.name}</span>
            <span class="skill-category-tag">${a.category}</span>
          </div>
          <div style="margin-top:0.4rem;">
            <span class="badge ${a.badgeClass} skill-badge">${a.level}</span>
          </div>
          <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.4rem; line-height:1.4;">${a.desc}</p>
        </div>
        <div class="skill-click-hint">
          Click to filter projects ▹
        </div>
      </div>
    `).join(""),r.querySelectorAll(".skill-card").forEach(a=>{const s=a.getAttribute("data-skill"),o=()=>{typeof window.filterProjectsBySkill=="function"&&window.filterProjectsBySkill(s)};a.addEventListener("click",o),a.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o())})})}n(bs),e.forEach(i=>{i.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),i.classList.add("active"),t=i.getAttribute("data-category")||"All";const a=t==="All"?bs:bs.filter(s=>s.category.toLowerCase().includes(t.toLowerCase()));n(a)})})}function rS(){const r=document.getElementById("strengths-grid");r&&(r.innerHTML=Df.map(e=>`
    <div class="strength-card">
      <span class="strength-icon">${e.icon}</span>
      <div class="strength-title">${e.name}</div>
      <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.35rem; line-height:1.4;">${e.desc}</div>
    </div>
  `).join(""))}function aS(){const r=document.getElementById("internship-container");r&&(r.innerHTML=`
    <div class="timeline-card">
      <div class="timeline-header-row">
        <div>
          <span class="badge badge-emerald" style="margin-bottom:0.5rem;">Verified Industry Internship</span>
          <h3 class="timeline-role-title">${Wt.role}</h3>
          <div class="timeline-company">${Wt.company} — ${Wt.location}</div>
        </div>
        <span class="timeline-duration">${Wt.duration}</span>
      </div>

      <p class="about-text">${Wt.overview}</p>

      <div class="timeline-highlight-box">
        <div class="timeline-highlight-title">
          <span>🚀 Practical Project:</span> <span>${Wt.project}</span>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.75rem;">
          ${Wt.technologies.map(e=>`<span class="badge badge-cyan">${e}</span>`).join("")}
        </div>
        <p style="font-size:0.875rem; color:var(--text-secondary); margin-bottom:0.5rem;">
          Developed and redesigned web interfaces across modular website sections:
        </p>
        <div class="timeline-modules-grid">
          ${Wt.modules.map(e=>`
            <div class="timeline-module-pill" title="${e.desc}">
              <strong>${e.name}</strong>: ${e.desc}
            </div>
          `).join("")}
        </div>
      </div>

      <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--text-muted); display:flex; align-items:center; gap:0.5rem;">
        <span style="color:var(--accent-emerald);">●</span> <span>Git Collaboration: ${Wt.workflow}</span>
      </div>
    </div>
  `)}function sS(){const r=document.getElementById("career-timeline-grid");r&&(r.innerHTML=Pf.map(e=>`
    <div class="card" style="padding:1.5rem; display:flex; flex-direction:column; gap:0.5rem; border-top:3px solid var(--accent-cyan);">
      <div style="font-family:var(--font-mono); font-size:0.9rem; font-weight:700; color:var(--accent-cyan);">${e.year}</div>
      <div style="font-weight:700; font-size:1.05rem; color:var(--text-primary);">${e.title}</div>
      <div style="font-size:0.875rem; color:var(--text-secondary); line-height:1.5;">${e.detail}</div>
    </div>
  `).join(""))}function oS(){const r=document.getElementById("achievements-grid");r&&(r.innerHTML=Lf.map(e=>`
    <div class="achievement-card">
      <span class="achievement-year">${e.year}</span>
      <h3 class="achievement-title">${e.title}</h3>
      <p class="achievement-desc">${e.description}</p>
    </div>
  `).join(""))}function lS(){const r=document.getElementById("leadership-grid");r&&(r.innerHTML=If.map(e=>`
    <div class="leadership-card">
      <div class="leadership-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </div>
      <div>
        <div class="leadership-title">${e.title}</div>
        <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); margin-bottom:0.25rem;">${e.role}</div>
        <div class="leadership-desc">${e.desc}</div>
      </div>
    </div>
  `).join(""))}function cS(){const r=document.getElementById("education-grid");r&&(r.innerHTML=pi.map(e=>`
    <div class="education-card">
      <div>
        <span class="badge ${e.status.includes("Completed")?"badge-emerald":"badge-cyan"}" style="margin-bottom:0.75rem;">${e.status}</span>
        <h3 class="education-degree">${e.degree}</h3>
        <div class="education-institution">${e.institution}</div>
      </div>
      <div class="education-meta">
        <span>${e.duration}</span>
        <span class="education-score">${e.scoreLabel}: ${e.score}</span>
      </div>
    </div>
  `).join(""))}
