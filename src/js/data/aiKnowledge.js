/**
 * Grounded Knowledge Base for "Ask My Portfolio" AI Assistant
 * Constrained 100% to Kalanidhi M C's verified credentials.
 * Zero hallucination policy: Will decline to invent facts outside this scope.
 * Only verified projects and credentials included.
 */

export const predefinedQA = [
  {
    query: "What projects has Kalanidhi built?",
    keywords: ["projects", "built", "work", "applications", "portfolio", "creations", "github"],
    answer: "Kalanidhi has engineered 6 verified practical projects:\n1. **Candidate Ranking System**: Automated candidate intake, multi-criteria metric scoring, and transparent ranking pipeline (Node.js, Express, REST APIs, SQL).\n2. **AI Code Analyzer**: AI-assisted application using Python & CrewAI to perform static code analysis and developer productivity guidance.\n3. **Thamarai Fertility Hospital Management System**: Healthcare web application featuring role-based JWT authentication and multi-branch database architecture (Node.js, Express, MySQL).\n4. **Automated Certificate Generation System**: Academic certificate management application with dynamic issuance and CRUD operations (PHP, MySQL).\n5. **Pediatric Hospital Management System**: Modern healthcare web platform featuring 14 medical departments, doctor directory, and appointment intake (React 18, Vite, Tailwind CSS).\n6. **Research Answer Bot**: Retrieval-Augmented Generation (RAG) system for querying research papers using FastAPI, Streamlit, LangChain, ChromaDB, and FAISS.\n\nYou can click 'Case Study' on any project to inspect interactive workflows, architecture diagrams, and code snippets!"
  },
  {
    query: "What technologies does he use?",
    keywords: ["technologies", "skills", "tech stack", "languages", "tools", "frameworks", "java", "react", "node", "python", "mysql"],
    answer: "Kalanidhi's technical stack is categorized by verified experience:\n• **Programming**: Java, C, JavaScript\n• **Frontend**: React.js, HTML5, CSS3, Flutter (Exploring)\n• **Backend**: Node.js, Express.js, REST APIs\n• **Databases**: MySQL, MongoDB, Firebase\n• **Authentication**: JWT (JSON Web Tokens)\n• **Cloud**: Google Cloud, AWS, Oracle Cloud Infrastructure\n• **DevOps**: Docker, Jenkins, CI/CD, Terraform\n• **AI Exploration**: Generative AI, LLM Concepts, AI Agents, CrewAI\n• **Core CS**: Object-Oriented Programming, Data Structures, Algorithms, SQL\n• **Tools**: Git, GitHub, VS Code, Android Studio, Figma"
  },
  {
    query: "Does he have internship experience?",
    keywords: ["internship", "intern", "company", "sangam", "experience", "work experience", "employment"],
    answer: "Yes! Kalanidhi completed an internship as a **Full Stack Development Intern** at **Sangam Soft Solutions — Coimbatore** in June 2026.\n\nHis primary project was the **Code Infinite Website Redesign**, where he built modular components for Home, About, Training & Courses, Services, Forms, Gallery, and Blog-related sections with a responsive UI, dark/light theme, and Git-based collaborative workflow using React and Node.js."
  },
  {
    query: "What certifications has he completed?",
    keywords: ["certifications", "certificate", "credentials", "google cloud", "aws", "ibm", "celonis", "uipath", "oracle"],
    answer: "Kalanidhi has earned 8 industry and cloud certifications:\n1. **Google Cloud Cybersecurity Certificate**\n2. **Google Cloud Data Analytics Certificate**\n3. **IBM Generative AI in Action**\n4. **Celonis AI Foundations**\n5. **UiPath Agentic Automation Developer Associate Training**\n6. **Oracle Cloud Infrastructure**\n7. **AWS Cloud Workshop**\n8. **Applied GenAI Workshop**\n\nYou can view the full Certifications section on this site for detailed badges!"
  },
  {
    query: "What is his educational background?",
    keywords: ["education", "degree", "college", "university", "anna university", "gpa", "cgpa", "marks", "diploma"],
    answer: "Kalanidhi is currently pursuing his **B.E. in Computer Science and Engineering (Lateral Entry)** at **Anna University Regional Campus, Coimbatore** (2024–2027) with a **CGPA of 8.01 / 10**.\n\nPrior to this, he completed his **Diploma in Computer Engineering** at **Konghu Velalar Polytechnic College** in 2024 with **93% distinction**."
  },
  {
    query: "What hackathons or awards has he achieved?",
    keywords: ["achievements", "awards", "hackathons", "daimler", "sih", "smart india", "competition", "india.run"],
    answer: "Kalanidhi has earned several verified recognitions:\n1. **Daimler 2024 — Best for Innovation** for creative technical problem-solving.\n2. **Smart India Hackathon 2025 — Round 2** competing at the national level.\n3. **India.RUN Hackathon 2026** participant developing collaborative solutions under intensive timelines."
  },
  {
    query: "Does he have leadership experience?",
    keywords: ["leadership", "extracurricular", "coordinator", "placement", "soft skills", "activities", "representative"],
    answer: "Yes! Kalanidhi actively contributes to student leadership:\n• **CSE Placement Coordinator**: Coordinating campus recruitment initiatives with corporate teams.\n• **Class Placement Representative**: Serving as communication liaison between faculty and students.\n• **CSE Committee Member**: Organizing department technical symposiums and coding workshops.\n• **Placement Training Coordination**: Assisting student peers with aptitude practice and technical interview readiness."
  },
  {
    query: "How can I contact Kalanidhi?",
    keywords: ["contact", "email", "reach", "hire", "phone", "linkedin", "github", "message", "call", "location"],
    answer: "You can reach Kalanidhi directly via:\n• **Email**: kalanidhimurugan@gmail.com\n• **Phone**: +91 6383396164\n• **Location**: Tirupur, Tamil Nadu, India\n• **GitHub**: github.com/kala3013\n• **LinkedIn**: linkedin.com/in/kalanidhi-m-c-b568782a5\n\nYou can also download his official resume directly from the site!"
  }
];

export const fallbackResponse = "I can only answer questions directly related to Kalanidhi M C's verified education (B.E. CSE at Anna University, Diploma 93%), technical skills (React, Node, Java, MySQL, CrewAI, Cloud/DevOps), verified projects (Candidate Ranking System, AI Code Analyzer, Thamarai Fertility HMS, Automated Certificate Generation, Pediatric Hospital MS, Research Answer Bot), Sangam Soft Solutions internship, 8 certifications, hackathon achievements, and contact details. Try asking one of the suggested prompts above!";
