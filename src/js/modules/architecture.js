/**
 * Interactive System Architecture Visualizer
 * Allows recruiters & engineers to click through layers: Client, Gateway/Auth, Server, Database
 * Includes concrete sample wire payloads and protocol specifications.
 */

import { trackEvent } from '../utils/analytics.js';

const ARCH_LAYERS = [
  {
    id: "client-tier",
    badge: "LAYER 01",
    name: "Client Application Tier",
    tech: "React.js • HTML5 • CSS3",
    description: "Responsive Single Page Application (SPA) providing an accessible, component-driven user interface. Uses modern React hooks, asynchronous fetch calls, debounced search queries, and zero-flicker state synchronizations.",
    protocols: "HTTPS / TLS 1.3, JSON Payloads, RESTful Consumption",
    samplePayload: {
      type: "HTTP POST Request Dispatch",
      code: `// React Client API Call
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
};`
    },
    responsibilities: [
      "Modular view composition and local state management",
      "Client-side input validation and error feedback states",
      "Dynamic routing and token storage in secure browser memory",
      "Optimized DOM rendering with accessible ARIA semantics"
    ]
  },
  {
    id: "gateway-tier",
    badge: "LAYER 02",
    name: "API & Auth Gateway",
    tech: "REST Endpoints • JWT Auth",
    description: "Secure routing layer enforcing CORS policies, token validation via Bearer Authorization headers, and request rate/payload sanitization before business logic execution.",
    protocols: "HTTP REST / Bearer JWT / CORS / Rate Limiting",
    samplePayload: {
      type: "JWT Decoded Session Header",
      code: `{
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
}`
    },
    responsibilities: [
      "JSON Web Token (JWT) cryptographic signature verification",
      "Role-based access guard (Admin, Staff, Student roles)",
      "Strict parameter validation preventing malformed requests",
      "Standardized error codes (400, 401, 403, 404, 500)"
    ]
  },
  {
    id: "backend-tier",
    badge: "LAYER 03",
    name: "Controller & Business Logic",
    tech: "Node.js • Express.js • Python",
    description: "Decoupled asynchronous execution environment. Handles domain business rules, multi-branch routing logic, database transaction staging, and CrewAI agent pipeline triggers.",
    protocols: "Asynchronous Event Loop, MVC Pattern, RESTful Router",
    samplePayload: {
      type: "Controller Request Handler",
      code: `// Express Branch Routing Handler
router.get('/appointments', verifyBranchAccess('STAFF'), async (req, res) => {
  try {
    const { branchCode } = req.user; // Enforced from verified JWT
    const { date } = req.query;
    const appointments = await clinicService.getAppointmentsByBranch(branchCode, date);
    res.status(200).json({ success: true, count: appointments.length, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Database query execution failed' });
  }
});`
    },
    responsibilities: [
      "Controller orchestration and service layer decoupling",
      "Multi-branch clinic query routing (Coimbatore, Chennai, etc.)",
      "Tournament score aggregation and leaderboard sorting",
      "Password hashing using Bcrypt with secure salt rounds"
    ]
  },
  {
    id: "database-tier",
    badge: "LAYER 04",
    name: "Data Persistence Tier",
    tech: "MySQL (ACID) • MongoDB (NoSQL)",
    description: "Hybrid data management approach: Relational schema in MySQL for ACID-compliant structured data with foreign key integrity, and flexible document collections in MongoDB for dynamic sport rosters.",
    protocols: "MySQL Binary Protocol (Port 3306) / MongoDB Wire Protocol (Port 27017)",
    samplePayload: {
      type: "Parameterized SQL & Index Spec",
      code: `-- Relational Schema & Parameterized Execution
CREATE TABLE appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_id INT NOT NULL,
  branch_code VARCHAR(20) NOT NULL,
  appointment_date DATETIME NOT NULL,
  status ENUM('SCHEDULED', 'COMPLETED', 'CANCELLED') DEFAULT 'SCHEDULED',
  FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
  INDEX idx_branch_date (branch_code, appointment_date)
) ENGINE=InnoDB;`
    },
    responsibilities: [
      "Normalized relational tables (Patients, Appointments, Branches)",
      "B-Tree indexing on primary IDs and search query columns",
      "Mongoose document schema validation and compound indexing",
      "Parameterized SQL queries eliminating SQL Injection vulnerabilities"
    ]
  }
];

export function initArchitectureVisualizer() {
  const container = document.getElementById('arch-nodes-container');
  const inspectorBox = document.getElementById('arch-inspector-box');

  if (!container || !inspectorBox) return;

  renderVisualizer(ARCH_LAYERS, container, inspectorBox, 0);
}

function renderVisualizer(layers, container, inspectorBox, selectedIdx) {
  container.innerHTML = '';

  layers.forEach((layer, idx) => {
    const nodeEl = document.createElement('div');
    nodeEl.className = `arch-node ${idx === selectedIdx ? 'active' : ''}`;
    nodeEl.setAttribute('role', 'button');
    nodeEl.setAttribute('tabindex', '0');
    nodeEl.setAttribute('aria-pressed', idx === selectedIdx ? 'true' : 'false');
    nodeEl.setAttribute('aria-label', `Inspect ${layer.badge}: ${layer.name}`);

    nodeEl.innerHTML = `
      <span class="arch-node-badge">${layer.badge}</span>
      <div class="arch-node-name">${layer.name}</div>
      <div class="arch-node-tech">${layer.tech}</div>
    `;

    const handleSelect = () => {
      renderVisualizer(layers, container, inspectorBox, idx);
      trackEvent('arch_node_inspect', { layer: layer.name });
    };

    nodeEl.addEventListener('click', handleSelect);
    nodeEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSelect();
      }
    });

    container.appendChild(nodeEl);
  });

  const active = layers[selectedIdx];
  inspectorBox.innerHTML = `
    <div class="arch-inspector-header">
      <div>
        <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); font-weight:700;">${active.badge} INSPECTION</span>
        <h3 style="color:var(--text-primary); margin-top:0.25rem; font-size:1.35rem;">${active.name}</h3>
      </div>
      <span class="badge badge-cyan">${active.tech}</span>
    </div>
    <div class="arch-inspector-content">
      <p style="margin-bottom:1.25rem; line-height:1.6; color:var(--text-secondary);">${active.description}</p>
      
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem; margin-bottom:1.25rem;">
        <div style="background:var(--bg-card); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">PRIMARY PROTOCOLS</div>
          <div style="font-family:var(--font-mono); font-size:0.85rem; color:var(--accent-cyan);">${active.protocols}</div>
        </div>
        <div style="background:var(--bg-card); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">KEY ARCHITECTURAL DUTIES</div>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:0.35rem; font-size:0.85rem; color:var(--text-secondary);">
            ${active.responsibilities.map(r => `<li><span style="color:var(--accent-cyan);">✓</span> ${r}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Sample Wire Payload / Code Preview -->
      <div style="background:var(--term-bg); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:1rem; overflow-x:auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-cyan); font-weight:700;">
            SAMPLE SPECIFICATION: ${active.samplePayload.type}
          </span>
          <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--text-muted);">JSON / Code Wire Format</span>
        </div>
        <pre style="margin:0; font-family:var(--font-mono); font-size:0.825rem; color:var(--term-text); line-height:1.5;"><code>${escapeHtml(active.samplePayload.code)}</code></pre>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
