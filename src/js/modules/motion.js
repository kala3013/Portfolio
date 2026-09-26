/**
 * GSAP Motion Engine & Scroll-Driven Animation System
 * Implements smooth cinematic scroll animations, micro-interactions, and 3D card tilt effects.
 */

import { gsap } from 'gsap';

export function initMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // 1. Hero Entrance Motion Timeline
  initHeroMotion();

  // 2. Scroll-Triggered Section Reveals
  initScrollReveals();

  // 3. Perspective Tilt Micro-Interactions on Cards
  initCardPerspectiveTilt();
}

/**
 * Cinematic Hero Entrance Animation
 */
function initHeroMotion() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.recruiter-ribbon', {
    y: -25,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
  })
  .from('.hero-badge-row', {
    y: 15,
    opacity: 0,
    duration: 0.5
  }, '-=0.4')
  .from('.hero-name', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.3')
  .from('.hero-role-title', {
    y: 20,
    opacity: 0,
    duration: 0.6
  }, '-=0.5')
  .from('.hero-bio', {
    y: 20,
    opacity: 0,
    duration: 0.6
  }, '-=0.4')
  .from('.hero-actions .btn', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
  }, '-=0.4')
  .from('.hero-flow-strip', {
    y: 20,
    opacity: 0,
    duration: 0.6
  }, '-=0.3')
  .from('.hero-3d-wrapper', {
    scale: 0.94,
    opacity: 0,
    duration: 0.9
  }, '-=0.8')
  .from('.terminal-window', {
    y: 25,
    opacity: 0,
    duration: 0.7
  }, '-=0.5');
}

/**
 * Scroll-Triggered Reveals via IntersectionObserver + GSAP
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.section-header, .about-card, .timeline-card, .resume-viewer-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(entry.target, 
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' }
        );
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * 3D Perspective Tilt Micro-Interactions
 */
function initCardPerspectiveTilt() {
  const cards = document.querySelectorAll('.project-card, .tech-stack-card, .strength-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(card, {
        transformPerspective: 800,
        rotationX: rotateX,
        rotationY: rotateY,
        scale: 1.015,
        duration: 0.25,
        ease: 'power1.out',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.15)'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.45,
        ease: 'power2.out',
        boxShadow: ''
      });
    });
  });
}
