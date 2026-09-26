/**
 * Scroll Progress Indicator Bar
 * Calculates real-time page scroll percentage and updates the indicator line.
 */

export function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-fill');
  const progressHud = document.getElementById('scroll-progress-hud');
  const progressText = document.getElementById('scroll-progress-percent');
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollTotal <= 0) return;

    const scrollCurrent = window.scrollY;
    const progress = Math.min(Math.max((scrollCurrent / scrollTotal) * 100, 0), 100);

    progressBar.style.width = `${progress}%`;
    if (progressText) {
      progressText.textContent = `${Math.round(progress)}%`;
    }

    if (progressHud) {
      if (scrollCurrent > 80) {
        progressHud.classList.add('visible');
      } else {
        progressHud.classList.remove('visible');
      }
    }
  };

  // Click on HUD to smoothly scroll to top
  if (progressHud) {
    progressHud.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}
