/**
 * "Ask My Portfolio" Grounded AI Assistant
 * Strict zero-hallucination policy. Answers exclusively from structured candidate facts.
 */

import { predefinedQA, fallbackResponse } from '../data/aiKnowledge.js';
import { trackEvent } from '../utils/analytics.js';

export function initAiAssistant() {
  const form = document.getElementById('ai-input-form');
  const input = document.getElementById('ai-input-field');
  const output = document.getElementById('ai-chat-output');
  const chips = document.querySelectorAll('.ai-chip');

  if (!form || !input || !output) return;

  // Chips click handlers
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query') || chip.textContent.trim();
      input.value = query;
      processQuery(query, output);
      trackEvent('ai_chip_query', { query });
    });
  });

  // Form submit handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    processQuery(query, output);
    trackEvent('ai_custom_query', { query });
  });
}

function processQuery(query, output) {
  output.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.5rem; color:var(--accent-cyan); font-family:var(--font-mono); font-size:0.85rem;">
      <span class="pulse-dot"></span> Consulting grounded portfolio data...
    </div>
  `;

  setTimeout(() => {
    const answer = findAnswer(query);
    renderAnswer(query, answer, output);
  }, 300);
}

function findAnswer(userQuery) {
  const normalized = userQuery.toLowerCase().trim();

  // 1. Direct exact or substring match
  for (const item of predefinedQA) {
    if (normalized.includes(item.query.toLowerCase()) || item.query.toLowerCase().includes(normalized)) {
      return item.answer;
    }
  }

  // 2. Keyword overlap scoring
  const queryTokens = normalized.split(/\W+/).filter(Boolean);
  let bestMatch = null;
  let highestScore = 0;

  for (const item of predefinedQA) {
    let score = 0;
    for (const kw of item.keywords) {
      if (queryTokens.includes(kw.toLowerCase())) {
        score += 2;
      } else if (normalized.includes(kw.toLowerCase())) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore >= 2) {
    return bestMatch.answer;
  }

  return fallbackResponse;
}

function renderAnswer(query, answer, output) {
  const formattedAnswer = answer
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-primary);">$1</strong>')
    .replace(/\n/g, '<br>');

  output.innerHTML = `
    <div style="margin-bottom:0.75rem; font-size:0.85rem; font-family:var(--font-mono); color:var(--text-muted);">
      <span style="color:var(--accent-cyan);">Q:</span> "${escapeHtml(query)}"
    </div>
    <div style="color:var(--text-secondary); line-height:1.7;">
      ${formattedAnswer}
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
