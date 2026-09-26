/**
 * Contact Form Controller & Copy Email Utility
 * Strictly secure: Zero exposed secrets, client-side input validation, honeypot bot trap.
 */

import { personalInfo } from '../data/portfolioData.js';
import { trackEvent } from '../utils/analytics.js';
import { showToast } from '../utils/toast.js';
export { showToast };

export function initContact() {
  const copyBtn = document.getElementById('copy-email-btn');
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');

  // Copy Email Button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(personalInfo.email, () => {
        showToast('Email address copied to clipboard!', toastContainer);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<span>✓</span> <span>Copied!</span>`;
        setTimeout(() => { copyBtn.innerHTML = originalText; }, 2500);
        trackEvent('copy_email_success');
      });
    });
  }

  // Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Honeypot spam check
      const honeypot = contactForm.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        console.warn('Spam submission detected by honeypot.');
        return;
      }

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      // Validation
      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', toastContainer, 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', toastContainer, 'error');
        return;
      }

      // Safe mailto fallback or optional endpoint dispatch
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Kalanidhi,\n\n${message}\n\nFrom: ${name} (${email})`);
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      showToast('Opening default mail client to deliver message...', toastContainer);
      trackEvent('contact_form_submit', { name, emailLength: email.length });

      setTimeout(() => {
        window.location.href = mailtoUrl;
        contactForm.reset();
      }, 600);
    });
  }
}

function copyToClipboard(text, onSuccess) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => fallbackCopy(text, onSuccess));
  } else {
    fallbackCopy(text, onSuccess);
  }
}

function fallbackCopy(text, onSuccess) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    onSuccess();
  } catch (err) {
    console.error('Fallback copy error', err);
  }
  document.body.removeChild(textArea);
}
