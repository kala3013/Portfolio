/**
 * 3D Developer Core Visualizer (Three.js + Canvas Fallback)
 * Interactive 360° presentation representing Kalanidhi's engineering ecosystem:
 * AI, React, Node.js, MySQL, Cloud, Docker
 * Features:
 * - 3D glowing core with orbiting technology nodes
 * - Mouse drag / touch drag 360° rotation
 * - Subtle ambient floating & mouse parallax
 * - Graceful 2D particle fallback if WebGL is unsupported or reduced-motion is requested
 */

import * as THREE from 'three';

export function initHero3D() {
  const container = document.getElementById('hero-3d-canvas-container');
  if (!container) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    render2DFallback(container);
    return;
  }

  // Check WebGL availability
  try {
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) {
      render2DFallback(container);
      return;
    }
  } catch (e) {
    render2DFallback(container);
    return;
  }

  // Initialize Three.js scene
  try {
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Central Developer Core: Icosahedron Wireframe + Glowing Nucleus
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(1.0, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer crystalline cage
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Orbiting Technology Ring & Satellite Nodes
    const orbitRingGeo = new THREE.RingGeometry(2.5, 2.52, 64);
    const orbitRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2
    });
    const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat);
    orbitRing.rotation.x = Math.PI / 2.3;
    coreGroup.add(orbitRing);

    // Satellite Tech Nodes
    const techNodes = [
      { color: 0x38bdf8, size: 0.18, angle: 0, label: "React" },
      { color: 0x10b981, size: 0.18, angle: Math.PI / 3, label: "Node.js" },
      { color: 0x818cf8, size: 0.2, angle: (2 * Math.PI) / 3, label: "AI (CrewAI)" },
      { color: 0xf59e0b, size: 0.18, angle: Math.PI, label: "MySQL" },
      { color: 0x3b82f6, size: 0.18, angle: (4 * Math.PI) / 3, label: "Cloud (GCP/AWS)" },
      { color: 0x06b6d4, size: 0.18, angle: (5 * Math.PI) / 3, label: "Docker" }
    ];

    const nodeMeshes = [];
    const orbitRadius = 2.5;

    techNodes.forEach((node) => {
      const nodeGeo = new THREE.SphereGeometry(node.size, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: node.color });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.userData = { angle: node.angle, speed: 0.008 };
      coreGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);
    });

    // Particle Cloud (Starfield)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 14;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.04,
      transparent: true,
      opacity: 0.5
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Interactive Drag to Rotate (360° Interaction)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Subtly track mouse on window for parallax depth
    let mouseParallax = { x: 0, y: 0 };
    window.addEventListener('mousemove', (e) => {
      mouseParallax.x = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouseParallax.y = (e.clientY / window.innerHeight - 0.5) * 0.4;
    }, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 450;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous subtle idle rotation + manual drag smoothing
      targetRotationY += 0.003;
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.1;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.1;

      // Parallax camera influence
      camera.position.x += (mouseParallax.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseParallax.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Pulse inner sphere
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
      innerMesh.scale.set(scale, scale, scale);

      // Rotate outer crystalline cage
      outerMesh.rotation.y = elapsedTime * 0.2;
      outerMesh.rotation.z = elapsedTime * 0.15;

      // Animate orbiting tech nodes
      nodeMeshes.forEach((mesh) => {
        mesh.userData.angle += mesh.userData.speed;
        const a = mesh.userData.angle;
        mesh.position.x = Math.cos(a) * orbitRadius;
        mesh.position.z = Math.sin(a) * orbitRadius;
        mesh.position.y = Math.sin(a * 2 + elapsedTime) * 0.35;
      });

      // Slowly rotate starfield
      particleSystem.rotation.y = -elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();
  } catch (err) {
    console.warn("Three.js init failed, falling back to 2D canvas:", err);
    render2DFallback(container);
  }
}

/**
 * High-performance 2D Canvas Fallback
 * Used when WebGL is unavailable, device is low-spec, or reduced-motion is active.
 */
function render2DFallback(container) {
  container.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvas.width = 450;
  canvas.height = 450;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let angle = 0;
  let animId;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Glowing core circle
    const grad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 90);
    grad.addColorStop(0, 'rgba(56, 189, 248, 0.8)');
    grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.4)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 90, 0, Math.PI * 2);
    ctx.fill();

    // Orbit Ring
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 140, 0, Math.PI * 2);
    ctx.stroke();

    // Satellite nodes
    const nodes = [
      { label: "React", col: "#38bdf8", offset: 0 },
      { label: "Node.js", col: "#10b981", offset: Math.PI / 3 },
      { label: "AI (CrewAI)", col: "#818cf8", offset: (2 * Math.PI) / 3 },
      { label: "MySQL", col: "#f59e0b", offset: Math.PI },
      { label: "Cloud", col: "#3b82f6", offset: (4 * Math.PI) / 3 },
      { label: "Docker", col: "#06b6d4", offset: (5 * Math.PI) / 3 }
    ];

    nodes.forEach(n => {
      const a = angle + n.offset;
      const x = centerX + Math.cos(a) * 140;
      const y = centerY + Math.sin(a) * 140;

      ctx.fillStyle = n.col;
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText(n.label, x + 10, y + 4);
    });

    angle += 0.008;
    animId = requestAnimationFrame(draw);
  };

  draw();
}
