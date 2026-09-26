/**
 * Subtle Magnetic Interaction for Primary CTA Buttons
 * Attracts the button gently towards the cursor on hover.
 */

export function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches || 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const magneticElements = document.querySelectorAll('.btn-magnetic, .btn-primary, .hero-social-strip a');

  magneticElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Subtle displacement (max ~6px)
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0px, 0px)';
      el.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      setTimeout(() => {
        el.style.transition = '';
      }, 300);
    });
  });
}
