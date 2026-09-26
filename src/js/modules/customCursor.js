/**
 * Custom Desktop Cursor (Dot + Smooth Trailing Ring)
 * Disabled on touch/mobile devices or when prefers-reduced-motion is active.
 */

export function initCustomCursor() {
  // Disable on mobile/touch or reduced motion
  if (window.matchMedia('(pointer: coarse)').matches || 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Create cursor DOM elements
  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  cursorDot.setAttribute('aria-hidden', 'true');

  const cursorRing = document.createElement('div');
  cursorRing.className = 'custom-cursor-ring';
  cursorRing.setAttribute('aria-hidden', 'true');

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }, { passive: true });

  // Smooth ring follow loop
  const follow = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(follow);
  };
  requestAnimationFrame(follow);

  // Hover detection on interactive elements
  const interactiveSelectors = 'a, button, input, textarea, .skill-card, .project-card, .recruiter-pill, .arch-node, [role="button"]';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursorRing.classList.add('cursor-hover');
      cursorDot.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursorRing.classList.remove('cursor-hover');
      cursorDot.classList.remove('cursor-hover');
    }
  });

  // Hide when leaving viewport
  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorRing.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorRing.style.opacity = '1';
  });
}
