/**
 * Privacy-First Local Event Logger
 * Collects zero personally identifiable data.
 * Useful for monitoring user engagement (Resume downloads, GitHub clicks).
 */

const STORAGE_KEY = 'km_portfolio_analytics';

export function trackEvent(eventName, eventData = {}) {
  try {
    const timestamp = new Date().toISOString();
    const event = {
      event: eventName,
      data: eventData,
      time: timestamp
    };

    // Store in session storage for local debugging
    const events = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]');
    events.push(event);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(events));

    // Optional console log in Developer Mode
    if (document.documentElement.getAttribute('data-dev-mode') === 'true') {
      console.log(`[Analytics Event]: ${eventName}`, eventData);
    }
  } catch (e) {
    // Fail silently
  }
}

export function getSessionEvents() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}
