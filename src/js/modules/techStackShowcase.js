/**
 * Portfolio Tech & Design Stack Architecture Showcase
 * Renders the 5 core engineering & design pillars:
 * Frontend, Motion (GSAP), 3D & Immersive Design (Three.js), UI/UX (Figma), and Performance & Delivery.
 */

import { portfolioTechStackData } from '../data/portfolioData.js';
import { trackEvent } from '../utils/analytics.js';

import gsap from 'gsap';

export function initTechStackShowcase() {
  const container = document.getElementById('tech-stack-pillars-grid');
  const positioningEl = document.getElementById('portfolio-positioning-quote');

  if (positioningEl) {
    positioningEl.textContent = `"${portfolioTechStackData.positioning}"`;
  }

  if (!container) return;

  container.innerHTML = portfolioTechStackData.pillars.map((pillar, idx) => `
    <article class="tech-stack-card" id="tech-pillar-${pillar.id}">
      <div class="tech-stack-card-header">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <span class="tech-stack-icon">${pillar.icon}</span>
          <div>
            <span class="tech-pillar-number">PILLAR 0${idx + 1}</span>
            <h3 class="tech-stack-title">${escapeHtml(pillar.category)}</h3>
          </div>
        </div>
        <span class="badge ${pillar.badgeClass}">${pillar.tech.split('•')[0].trim()}</span>
      </div>

      <div class="tech-stack-tech-strip">
        <span class="tech-strip-label">TECHNOLOGY / APPROACH:</span>
        <div class="tech-strip-tags">
          ${pillar.tech.split('•').map(t => `<span class="tech-pill">${escapeHtml(t.trim())}</span>`).join('')}
        </div>
      </div>

      <div class="tech-stack-purpose-box">
        <div class="purpose-label">PURPOSE:</div>
        <ul class="purpose-list">
          ${pillar.items.map(item => `<li><span class="purpose-bullet">▹</span> <span>${escapeHtml(item)}</span></li>`).join('')}
        </ul>
      </div>

      <!-- Interactive Micro-Feature per Pillar -->
      <div class="tech-stack-interactive-footer">
        ${renderInteractivePillarWidget(pillar)}
      </div>
    </article>
  `).join('');

  // Attach interactive widget listeners
  container.querySelectorAll('.btn-test-motion')?.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = document.getElementById('tech-pillar-motion');
      if (card) {
        gsap.timeline()
          .to(card, { scale: 0.94, duration: 0.12, ease: 'power2.in' })
          .to(card, { scale: 1.03, duration: 0.25, ease: 'back.out(2)' })
          .to(card, { scale: 1, duration: 0.2, ease: 'power2.out' });
      }
      btn.classList.add('pulse-anim');
      setTimeout(() => btn.classList.remove('pulse-anim'), 800);
      trackEvent('test_motion_click');
    });
  });
}

function renderInteractivePillarWidget(pillar) {
  if (pillar.id === 'motion') {
    return `
      <div style="display:flex; align-items:center; justify-content:space-between; width:100%; font-size:0.78rem;">
        <span style="color:var(--accent-emerald); font-family:var(--font-mono); font-weight:600;">⚡ GSAP Motion Engine Active</span>
        <button type="button" class="btn btn-secondary btn-sm btn-test-motion" style="font-size:0.75rem; padding:0.25rem 0.6rem;">
          Test Spring Physics
        </button>
      </div>
    `;
  } else if (pillar.id === 'immersive-3d') {
    return `
      <div style="display:flex; align-items:center; justify-content:space-between; width:100%; font-size:0.78rem;">
        <span style="color:var(--accent-indigo); font-family:var(--font-mono); font-weight:600;">🌐 360° Rotational Core</span>
        <a href="#home" class="btn btn-secondary btn-sm" style="font-size:0.75rem; padding:0.25rem 0.6rem;">
          Rotate Core 360° ↑
        </a>
      </div>
    `;
  } else if (pillar.id === 'ui-ux') {
    return `
      <div style="display:flex; align-items:center; gap:0.5rem; width:100%; font-size:0.75rem; font-family:var(--font-mono);">
        <span style="color:var(--text-muted);">Tokens:</span>
        <span style="width:14px; height:14px; border-radius:50%; background:#38bdf8;" title="Cyan #38bdf8"></span>
        <span style="width:14px; height:14px; border-radius:50%; background:#10b981;" title="Emerald #10b981"></span>
        <span style="width:14px; height:14px; border-radius:50%; background:#6366f1;" title="Indigo #6366f1"></span>
        <span style="width:14px; height:14px; border-radius:50%; background:#f59e0b;" title="Amber #f59e0b"></span>
        <span style="color:var(--text-muted); margin-left:auto;">Inter + JetBrains</span>
      </div>
    `;
  } else if (pillar.id === 'performance') {
    return `
      <div style="display:flex; align-items:center; gap:0.5rem; width:100%; font-size:0.75rem; font-family:var(--font-mono);">
        <span style="color:var(--accent-emerald); font-weight:700;">✓ Sub-second FCP</span>
        <span style="color:var(--text-muted);">•</span>
        <span style="color:var(--text-secondary);">Zero CLS Layout</span>
        <span style="color:var(--text-muted); margin-left:auto;">Vite 5.4</span>
      </div>
    `;
  } else {
    return `
      <div style="display:flex; align-items:center; gap:0.5rem; width:100%; font-size:0.75rem; font-family:var(--font-mono); color:var(--accent-cyan);">
        <span>✓ Reactive Component Lifecycle</span>
        <span style="color:var(--text-muted); margin-left:auto;">Tailwind + CSS Tokens</span>
      </div>
    `;
  }
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
