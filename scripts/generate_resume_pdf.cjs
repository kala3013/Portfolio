// Script to generate a clean, valid PDF-1.4 resume file for Kalanidhi M C
const fs = require('fs');
const path = require('path');

function createResumePDF() {
  const content = [];
  
  // PDF Coordinate helper (792pt height, 612pt width)
  // Margins: left=40, right=572, top=750
  let y = 755;

  function line(text, size = 10, font = 'F1', indent = 40, dy = 14) {
    y -= dy;
    const escaped = text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    return `BT /${font} ${size} Tf ${indent} ${y} Td (${escaped}) Tj ET`;
  }

  function centerLine(text, size = 16, font = 'F2', dy = 20) {
    y -= dy;
    const escaped = text.replace(/\\/g, '\\\\').replace(/\(/g, '\\)');
    // Rough character width approximation for centering on 612pt page
    const approxWidth = text.length * (size * 0.52);
    const x = Math.max(40, Math.round((612 - approxWidth) / 2));
    return `BT /${font} ${size} Tf ${x} ${y} Td (${escaped}) Tj ET`;
  }

  function rule(dy = 6) {
    y -= dy;
    const drawY = y;
    y -= 6;
    return `0.5 w 40 ${drawY} m 572 ${drawY} l S`;
  }

  const streamOps = [];

  // Header
  streamOps.push(centerLine("KALANIDHI M C", 20, "F2", 0));
  streamOps.push(centerLine("Tirupur, Tamil Nadu  |  +91 6383396164  |  kalanidhimurugan@gmail.com", 9.5, "F1", 16));

  // Professional Summary
  y -= 8;
  streamOps.push(line("PROFESSIONAL SUMMARY", 10.5, "F2", 40, 16));
  streamOps.push(rule());
  streamOps.push(line("Computer Science Engineering student at Anna University Regional Campus, Coimbatore, with hands-on experience in", 9, "F1", 40, 12));
  streamOps.push(line("Full Stack Development and multiple software/AI projects. Skilled in Java, C, React.js, Node.js, MySQL, Firebase, Git", 9, "F1", 40, 12));
  streamOps.push(line("and familiar with Docker, Jenkins, CI/CD, cloud computing and Generative AI. Seeking entry-level Software Developer /", 9, "F1", 40, 12));
  streamOps.push(line("Full Stack Developer opportunities.", 9, "F1", 40, 12));

  // Education
  y -= 8;
  streamOps.push(line("EDUCATION", 10.5, "F2", 40, 16));
  streamOps.push(rule());
  
  // Degree 1
  y -= 13;
  streamOps.push(`BT /F2 9.5 Tf 40 ${y} Td (B.E. Computer Science and Engineering - Lateral Entry) Tj ET`);
  streamOps.push(`BT /F1 9 Tf 515 ${y} Td (2024-2027) Tj ET`);
  y -= 12;
  streamOps.push(`BT /F1 9 Tf 40 ${y} Td (Anna University Regional Campus, Coimbatore) Tj ET`);
  streamOps.push(`BT /F2 9 Tf 500 ${y} Td (CGPA: 8.01/10) Tj ET`);

  // Degree 2
  y -= 14;
  streamOps.push(`BT /F2 9.5 Tf 40 ${y} Td (Diploma in Computer Engineering) Tj ET`);
  streamOps.push(`BT /F1 9 Tf 545 ${y} Td (2024) Tj ET`);
  y -= 12;
  streamOps.push(`BT /F1 9 Tf 40 ${y} Td (Konghu Velalar Polytechnic College) Tj ET`);
  streamOps.push(`BT /F2 9 Tf 550 ${y} Td (93%) Tj ET`);

  // Technical Skills
  y -= 8;
  streamOps.push(line("TECHNICAL SKILLS", 10.5, "F2", 40, 16));
  streamOps.push(rule());
  streamOps.push(line("Programming: Java, C, JavaScript", 9, "F1", 40, 12));
  streamOps.push(line("Frontend: React.js, Flutter, HTML, CSS", 9, "F1", 40, 12));
  streamOps.push(line("Backend: Node.js, Express.js, REST APIs", 9, "F1", 40, 12));
  streamOps.push(line("Databases: MySQL, Firebase, MongoDB", 9, "F1", 40, 12));
  streamOps.push(line("DevOps & Cloud: Docker, Jenkins, CI/CD, Google Cloud, AWS, OCI, Terraform", 9, "F1", 40, 12));
  streamOps.push(line("AI: Generative AI, LLM concepts, AI Agents, CrewAI", 9, "F1", 40, 12));
  streamOps.push(line("Tools & Core: Git, GitHub, VS Code, Android Studio, Figma | OOP, Data Structures, Algorithms, SQL, JWT", 9, "F1", 40, 12));

  // Internship Experience
  y -= 8;
  streamOps.push(line("INTERNSHIP EXPERIENCE", 10.5, "F2", 40, 16));
  streamOps.push(rule());
  y -= 13;
  streamOps.push(`BT /F2 9.5 Tf 40 ${y} Td (FULL STACK DEVELOPMENT INTERN) Tj ET`);
  streamOps.push(`BT /F1 9 Tf 525 ${y} Td (June 2026) Tj ET`);
  y -= 12;
  streamOps.push(`BT /F1 9 Tf 40 ${y} Td (Sangam Soft Solutions, Coimbatore) Tj ET`);
  y -= 13;
  streamOps.push(line("- Developed and redesigned web interfaces using React, Node.js, Git and VS Code, contributing to the Code Infinite website.", 8.5, "F1", 48, 0));
  y -= 12;
  streamOps.push(line("- Implemented pages and UI features including Home, About, Training & Courses, Services, forms, gallery, blog-related", 8.5, "F1", 48, 0));
  y -= 11;
  streamOps.push(line("  sections and dark/light theme.", 8.5, "F1", 48, 0));

  // Projects
  y -= 8;
  streamOps.push(line("PROJECTS", 10.5, "F2", 40, 16));
  streamOps.push(rule());
  streamOps.push(line("AI CODE ANALYZER (Tech: AI, LLM, CrewAI) - AI-assisted application designed to analyze source code and provide", 8.5, "F1", 40, 12));
  streamOps.push(line("useful development.", 8.5, "F1", 40, 11));
  streamOps.push(line("THAMARAI FERTILITY HOSPITAL (Tech: Node.js, Express.js, MySQL, JWT) - Healthcare web application involving", 8.5, "F1", 40, 13));
  streamOps.push(line("backend APIs, authentication, database management and multi-branch support.", 8.5, "F1", 40, 11));
  streamOps.push(line("AUTOMATED CERTIFICATE GENERATION SYSTEM (Tech: PHP, MySQL) - Application for managing certificate", 8.5, "F1", 40, 13));
  streamOps.push(line("records and automating certificate generation.", 8.5, "F1", 40, 11));
  streamOps.push(line("Additional Projects: Candidate Ranking System * Pediatric Hospital Management System * Research Answer Bot", 8.5, "F1", 40, 13));

  // Certifications & Training
  y -= 8;
  streamOps.push(line("CERTIFICATIONS & TRAINING", 10.5, "F2", 40, 16));
  streamOps.push(rule());
  streamOps.push(line("Google Cloud Cybersecurity * Google Cloud Data Analytics * IBM Generative AI in Action * Celonis AI Foundations *", 8.5, "F1", 40, 12));
  streamOps.push(line("UiPath Agentic Automation * Oracle Cloud Infrastructure * AWS Cloud Workshop", 8.5, "F1", 40, 11));

  // Achievements & Leadership
  y -= 8;
  streamOps.push(line("ACHIEVEMENTS & LEADERSHIP", 10.5, "F2", 40, 16));
  streamOps.push(rule());
  streamOps.push(line("Achievements: Daimler 2024 - Best for Innovation * Smart India Hackathon 2025 - Round 2 * India.RUN Hackathon 2026 - Participant", 8.5, "F1", 40, 12));
  streamOps.push(line("Leadership & Activities: CSE Placement Coordinator * Class Placement Representative * CSE Committee Member *", 8.5, "F1", 40, 13));
  streamOps.push(line("Applied GenAI Workshop (Anna Univ x Kissflow) * Placement training coordination", 8.5, "F1", 40, 11));

  const streamBody = streamOps.join('\n');
  const streamLength = Buffer.byteLength(streamBody, 'utf8');

  // Assembly of PDF-1.4 objects
  let pdf = `%PDF-1.4\n`;
  const offsets = [];

  function addObj(str) {
    offsets.push(Buffer.byteLength(pdf, 'utf8'));
    pdf += str + '\n';
  }

  // Obj 1: Catalog
  addObj(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj`);

  // Obj 2: Pages
  addObj(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj`);

  // Obj 3: Page
  addObj(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj`);

  // Obj 4: Content Stream
  addObj(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamBody}\nendstream\nendobj`);

  // Obj 5: Font Regular (Helvetica)
  addObj(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj`);

  // Obj 6: Font Bold (Helvetica-Bold)
  addObj(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj`);

  // Cross-reference table
  const startXref = Buffer.byteLength(pdf, 'utf8');
  pdf += `xref\n0 7\n0000000000 65535 f \n`;
  for (const offset of offsets) {
    pdf += String(offset).padStart(10, '0') + ` 00000 n \n`;
  }

  pdf += `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

  const outPath1 = path.join(__dirname, '..', 'public', 'resume', 'Kalanidhi_M_C_Resume.pdf');
  const outPath2 = path.join(__dirname, '..', 'public', 'resume.pdf');
  
  fs.mkdirSync(path.dirname(outPath1), { recursive: true });
  fs.writeFileSync(outPath1, pdf, 'utf8');
  fs.writeFileSync(outPath2, pdf, 'utf8');
  console.log('Successfully created resume PDF at:', outPath1);
}

createResumePDF();
