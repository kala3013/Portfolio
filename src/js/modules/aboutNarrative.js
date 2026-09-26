/**
 * Interactive About Story / Narrative Explorer
 * Structure: I BUILD → I LEARN → I EXPERIMENT → I COLLABORATE → I IMPROVE
 */

import { aboutNarrative } from '../data/portfolioData.js';

export function initAboutNarrative() {
  const container = document.getElementById('about-narrative-container');
  if (!container) return;

  container.innerHTML = `
    <div class="narrative-steps-row" role="tablist" aria-label="Developer Narrative Journey">
      ${aboutNarrative.map((item, idx) => `
        <button type="button" class="narrative-step-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}" role="tab" aria-selected="${idx === 0}" aria-controls="narrative-panel-${idx}" id="narrative-tab-${idx}">
          <span class="narrative-step-num">${item.step}</span>
          <span class="narrative-step-action">${item.action}</span>
        </button>
      `).join('')}
    </div>
    <div id="narrative-detail-box" class="narrative-detail-box card" role="tabpanel" aria-labelledby="narrative-tab-0">
      ${renderDetail(aboutNarrative[0])}
    </div>
  `;

  const buttons = container.querySelectorAll('.narrative-step-btn');
  const detailBox = document.getElementById('narrative-detail-box');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const idx = parseInt(btn.getAttribute('data-idx') || '0', 10);
      const selected = aboutNarrative[idx];
      detailBox.setAttribute('aria-labelledby', `narrative-tab-${idx}`);
      detailBox.innerHTML = renderDetail(selected);
    });
  });
}

function renderDetail(item) {
  return `
    <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;">
      <span class="badge badge-cyan" style="font-family:var(--font-mono); font-size:0.8rem;">${item.step} // ${item.action}</span>
      <h3 style="font-size:1.35rem; color:var(--text-primary); margin:0;">${item.title}</h3>
    </div>
    <p style="font-size:1rem; color:var(--text-secondary); line-height:1.7; margin:0;">
      ${item.desc}
    </p>
  `;
}
