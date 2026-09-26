/**
 * Toast Notification Utility
 */

export function showToast(message, type = 'success', container = document.getElementById('toast-container')) {
  if (!container) {
    container = document.getElementById('toast-container');
  }
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.style.borderColor = type === 'error' ? 'var(--accent-rose)' : type === 'info' ? 'var(--accent-indigo)' : 'var(--accent-cyan)';
  toast.innerHTML = `
    <span>${type === 'error' ? '⚠️' : type === 'info' ? 'ℹ️' : '✓'}</span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
