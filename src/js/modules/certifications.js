/**
 * Certifications Section Module
 * Showcases Kalanidhi's 8 verified cloud, AI, and enterprise credentials.
 */

import { certificationsData } from '../data/portfolioData.js';

export function initCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  container.innerHTML = certificationsData.map((cert) => `
    <div class="card cert-card">
      <div class="cert-card-top">
        <span class="cert-icon" aria-hidden="true">${cert.icon}</span>
        <span class="badge ${cert.badgeClass} cert-badge">${cert.issuer}</span>
      </div>
      <h3 class="cert-title">${cert.name}</h3>
      <p class="cert-desc">${cert.desc}</p>
      <div class="cert-verified-label">
        <span style="color:var(--accent-emerald);">✓</span>
        <span>Verified Credential</span>
      </div>
    </div>
  `).join('');
}
