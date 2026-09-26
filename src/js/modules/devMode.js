/**
 * Developer Mode Controller
 * Toggles between Recruiter View and Technical Engineering View
 */

import { trackEvent } from '../utils/analytics.js';

const DEV_MODE_KEY = 'km_portfolio_dev_mode';

export function initDevMode() {
  const toggleBtn = document.getElementById('dev-mode-toggle');
  const banner = document.getElementById('dev-mode-banner');

  // Load saved state
  const isDevMode = localStorage.getItem(DEV_MODE_KEY) === 'true';
  applyDevMode(isDevMode);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-dev-mode') === 'true';
      const next = !current;
      applyDevMode(next);
      localStorage.setItem(DEV_MODE_KEY, String(next));
      trackEvent('dev_mode_toggle', { enabled: next });

      // Trigger toast
      showDevModeToast(next);
    });
  }

  // Allow clicking the floating banner to toggle off
  banner?.addEventListener('click', () => {
    applyDevMode(false);
    localStorage.setItem(DEV_MODE_KEY, 'false');
    showDevModeToast(false);
  });
}

export function applyDevMode(enable) {
  document.documentElement.setAttribute('data-dev-mode', String(enable));
  const toggleBtn = document.getElementById('dev-mode-toggle');

  if (toggleBtn) {
    toggleBtn.setAttribute('aria-pressed', String(enable));
    const labelSpan = toggleBtn.querySelector('.dev-mode-text');
    if (labelSpan) {
      labelSpan.textContent = enable ? 'Dev Mode: ON' : 'Dev Mode: OFF';
    }
  }
}

function showDevModeToast(isEnabled) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.innerHTML = isEnabled
    ? `<span>⚡</span> <span>Developer Mode Enabled: Technical overlays &amp; schemas now visible.</span>`
    : `<span>👔</span> <span>Recruiter Mode Restored: Clean executive view active.</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
