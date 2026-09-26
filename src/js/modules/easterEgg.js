/**
 * Developer Easter Egg: Konami Code Sequence
 * Subtle, professional, and delightfully engineered.
 */

import { showToast } from './contact.js';
import { trackEvent } from '../utils/analytics.js';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export function initEasterEgg() {
  let index = 0;

  window.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
      return;
    }

    const expectedKey = KONAMI_CODE[index];
    if (e.key === expectedKey || e.key.toLowerCase() === expectedKey.toLowerCase()) {
      index++;
      if (index === KONAMI_CODE.length) {
        triggerEasterEgg();
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

function triggerEasterEgg() {
  trackEvent('easter_egg_unlocked');
  showToast('🚀 Easter Egg Unlocked: Engineering mode overclocked! Keep building great software.');

  // Subtle confetti / glow pulse across the viewport
  const banner = document.createElement('div');
  banner.style.cssText = `
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
  `;
  banner.innerHTML = `
    <div style="color:var(--accent-cyan); font-weight:700; margin-bottom:0.25rem;">🎮 KONAMI CODE DETECTED</div>
    <div style="font-size:0.8rem; color:#cbd5e1;">"Talk is cheap. Show me the code." — Linus Torvalds</div>
  `;

  document.body.appendChild(banner);

  setTimeout(() => {
    banner.style.opacity = '0';
    setTimeout(() => banner.remove(), 500);
  }, 4000);
}
