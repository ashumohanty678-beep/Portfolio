import React, { useEffect, useRef } from 'react';

/**
 * CursorSparkles - Fire Violet Sparkling Kunai Cursor with Clickable Electric Aura Burst.
 *
 * Characteristics:
 * - Hover / Movement: Enchanted fire-violet embers, rising heat flame wisps, and 4-point diamond sparkles.
 * - Click Effect: High-energy bursting violet electric aura featuring:
 *   1. Expanding electric shockwave rings with pulsating violet ionization.
 *   2. Crackling jagged lightning arcs branching radially outward.
 *   3. High-velocity electric spark particles decelerating with friction.
 *   4. Incandescent central plasma flash.
 * - Completely passive: pointer-events: none on canvas, passive window listeners, zero interference with clicking.
 * - Accessibility: Automatically honors prefers-reduced-motion and pointer: coarse.
 */

const FIRE_PALETTE = [
  {
    core: '255, 255, 255',
    mid: '196, 181, 253', // #c4b5fd hot lavender
    flame: '139, 92, 246', // #8b5cf6 electric violet
    aura: 'rgba(124, 58, 237, 0.75)',
  },
  {
    core: '245, 243, 255',
    mid: '167, 139, 250', // #a78bfa bright violet
    flame: '124, 58, 237', // #7c3aed royal purple fire
    aura: 'rgba(109, 40, 217, 0.8)',
  },
  {
    core: '237, 233, 254',
    mid: '139, 92, 246',
    flame: '109, 40, 217', // #6d28d9 deep violet flame
    aura: 'rgba(88, 28, 135, 0.7)',
  },
  {
    core: '250, 245, 255',
    mid: '192, 132, 252', // #c084fc magenta-violet flame
    flame: '147, 51, 234', // #9333ea mystical purple
    aura: 'rgba(126, 34, 206, 0.75)',
  },
];

export default function CursorSparkles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(pointer: fine)');

    if (motionQuery.matches || !pointerQuery.matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Track mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      speed: 0,
      inside: false,
    };

    const particles = [];
    const MAX_PARTICLES = 16;
    let spawnTimer = 0;
    const BASE_SPAWN_INTERVAL = 0.08;

    // Click Electric Aura Bursts
    const electricBursts = [];

    function triggerElectricBurst(originX, originY) {
      // 1. Generate Lightning Arcs (6 to 9 jagged electric bolts)
      const boltCount = 7 + Math.floor(Math.random() * 3);
      const bolts = [];
      for (let i = 0; i < boltCount; i++) {
        const baseAngle = (i / boltCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.45;
        const totalLength = 22 + Math.random() * 26; // length of lightning arc
        const segments = 3 + Math.floor(Math.random() * 2);
        const points = [{ x: 0, y: 0 }];

        let currentDist = 0;
        for (let s = 1; s <= segments; s++) {
          const segProgress = s / segments;
          currentDist = totalLength * segProgress;
          // Perpendicular jagged jitter
          const jitterAngle = baseAngle + (Math.random() - 0.5) * 0.75;
          points.push({
            x: Math.cos(jitterAngle) * currentDist,
            y: Math.sin(jitterAngle) * currentDist,
          });
        }
        bolts.push({ points, life: 0.22 + Math.random() * 0.12 });
      }

      // 2. Generate High-Velocity Electric Spark Embers (12 to 16 sparks)
      const sparks = [];
      const sparkCount = 13 + Math.floor(Math.random() * 4);
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 90 + Math.random() * 160;
        sparks.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.2 + Math.random() * 1.5,
          age: 0,
          lifespan: 0.32 + Math.random() * 0.18,
        });
      }

      electricBursts.push({
        x: originX,
        y: originY,
        age: 0,
        lifespan: 0.42, // total burst duration ~0.42s
        bolts,
        sparks,
        maxRingRadius: 46 + Math.random() * 14,
      });
    }

    function createParticle(burst = false) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 3 + Math.random() * (burst ? 26 : 18);
      const x = mouse.x + Math.cos(angle) * dist;
      const y = mouse.y + Math.sin(angle) * dist;

      const palette = FIRE_PALETTE[Math.floor(Math.random() * FIRE_PALETTE.length)];
      
      const typeRand = Math.random();
      let type = 0;
      if (typeRand < 0.45) type = 0; // ember
      else if (typeRand < 0.78) type = 1; // flame wisp
      else type = 2; // fire sparkle

      return {
        x,
        y,
        type,
        vx: (Math.random() - 0.5) * 16,
        vy: -24 - Math.random() * 32,
        swaySpeed: 4 + Math.random() * 5,
        swayAmount: 12 + Math.random() * 16,
        phase: Math.random() * Math.PI * 2,
        size: type === 1 ? 2.4 + Math.random() * 2.0 : type === 2 ? 2.0 + Math.random() * 1.5 : 1.2 + Math.random() * 1.4,
        lifespan: 0.65 + Math.random() * 0.65,
        age: 0,
        flickerSeed: Math.random() * 20,
        flickerSpeed: 14 + Math.random() * 10,
        palette,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 3,
      };
    }

    function drawParticle(p) {
      const progress = p.age / p.lifespan;
      let baseOpacity = 0;
      if (progress < 0.15) {
        baseOpacity = progress / 0.15;
      } else {
        baseOpacity = Math.pow(1 - progress, 1.2);
      }

      const flicker = 0.82 + 0.18 * Math.sin(p.flickerSeed + p.age * p.flickerSpeed);
      const opacity = Math.max(0, Math.min(1, baseOpacity * flicker));

      if (opacity <= 0.02) return;

      const currentSize = Math.max(0.4, p.size * (1 - progress * 0.55));

      ctx.save();
      ctx.translate(p.x, p.y);

      if (p.type === 1) {
        // Flame tongue / wisp
        ctx.rotate(p.rotation * 0.2);
        const flameHeight = currentSize * 2.8;
        const flameWidth = currentSize * 1.1;

        ctx.shadowColor = p.palette.aura;
        ctx.shadowBlur = 8;
        ctx.fillStyle = `rgba(${p.palette.flame}, ${(opacity * 0.85).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(0, -flameHeight);
        ctx.bezierCurveTo(flameWidth, -flameHeight * 0.3, flameWidth * 0.8, flameHeight * 0.5, 0, flameHeight * 0.4);
        ctx.bezierCurveTo(-flameWidth * 0.8, flameHeight * 0.5, -flameWidth, -flameHeight * 0.3, 0, -flameHeight);
        ctx.fill();

        ctx.shadowBlur = 3;
        ctx.fillStyle = `rgba(${p.palette.core}, ${(opacity * 0.95).toFixed(3)})`;
        ctx.beginPath();
        ctx.ellipse(0, flameHeight * 0.05, flameWidth * 0.4, flameHeight * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();

      } else if (p.type === 2) {
        // Fiery 4-point sparkle diamond
        ctx.rotate(p.rotation);
        const arm = currentSize * 1.6;
        const halfWidth = arm * 0.28;

        ctx.shadowColor = p.palette.aura;
        ctx.shadowBlur = 7;
        ctx.fillStyle = `rgba(${p.palette.flame}, ${(opacity * 0.9).toFixed(3)})`;

        ctx.beginPath();
        ctx.moveTo(0, -arm);
        ctx.quadraticCurveTo(halfWidth * 0.2, 0, arm, 0);
        ctx.quadraticCurveTo(halfWidth * 0.2, 0, 0, arm);
        ctx.quadraticCurveTo(-halfWidth * 0.2, 0, -arm, 0);
        ctx.quadraticCurveTo(-halfWidth * 0.2, 0, 0, -arm);
        ctx.closePath();
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(${p.palette.core}, ${(opacity * 0.98).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(0, 0, halfWidth * 0.65, 0, Math.PI * 2);
        ctx.fill();

      } else {
        // Glowing ember dot
        ctx.shadowColor = p.palette.aura;
        ctx.shadowBlur = 6;
        ctx.fillStyle = `rgba(${p.palette.flame}, ${(opacity * 0.9).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(0, 0, currentSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(${p.palette.core}, ${(opacity * 0.95).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(0, 0, currentSize * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    function drawElectricBurst(burst, dt) {
      const progress = burst.age / burst.lifespan;
      const fadeOut = Math.max(0, 1 - progress);

      ctx.save();
      ctx.translate(burst.x, burst.y);

      // A. Central Ionized Plasma Core Flash
      if (progress < 0.35) {
        const coreProgress = progress / 0.35;
        const coreRadius = 14 * Math.sin(coreProgress * Math.PI);
        ctx.shadowColor = 'rgba(168, 85, 247, 0.95)';
        ctx.shadowBlur = 12;
        ctx.fillStyle = `rgba(255, 255, 255, ${(1 - coreProgress).toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(0, 0, coreRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(192, 132, 252, ${(0.6 * (1 - coreProgress)).toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(0, 0, coreRadius * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // B. Expanding Electric Shockwave Aura Rings
      // Ring 1: Fast electric shockwave
      const ringRadius1 = burst.maxRingRadius * Math.pow(progress, 0.6);
      const ringOpacity1 = Math.pow(fadeOut, 1.4) * 0.85;
      if (ringOpacity1 > 0.01) {
        ctx.shadowColor = 'rgba(192, 132, 252, 0.9)';
        ctx.shadowBlur = 10;
        ctx.strokeStyle = `rgba(216, 180, 254, ${ringOpacity1.toFixed(3)})`;
        ctx.lineWidth = 1.8 * fadeOut;
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius1, 0, Math.PI * 2);
        ctx.stroke();

        // Outer neon violet aura haze
        ctx.strokeStyle = `rgba(139, 92, 246, ${(ringOpacity1 * 0.65).toFixed(3)})`;
        ctx.lineWidth = 3.8 * fadeOut;
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius1, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Ring 2: Secondary delayed ripple
      if (progress > 0.12) {
        const p2 = (progress - 0.12) / 0.88;
        const ringRadius2 = (burst.maxRingRadius * 0.72) * Math.pow(p2, 0.7);
        const ringOpacity2 = Math.pow(1 - p2, 1.2) * 0.65;
        if (ringOpacity2 > 0.01) {
          ctx.shadowColor = 'rgba(147, 51, 234, 0.8)';
          ctx.shadowBlur = 8;
          ctx.strokeStyle = `rgba(168, 85, 247, ${ringOpacity2.toFixed(3)})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(0, 0, ringRadius2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // C. Branching Electric Lightning Arcs
      for (const bolt of burst.bolts) {
        if (burst.age <= bolt.life) {
          const boltFade = 1 - burst.age / bolt.life;
          const crackleFlicker = Math.random() > 0.15 ? 1 : 0.3; // intense electric flicker

          // Electric Aura Glow
          ctx.shadowColor = 'rgba(168, 85, 247, 1)';
          ctx.shadowBlur = 9;
          ctx.strokeStyle = `rgba(147, 51, 234, ${(boltFade * crackleFlicker * 0.9).toFixed(3)})`;
          ctx.lineWidth = 2.4;
          ctx.beginPath();
          ctx.moveTo(bolt.points[0].x, bolt.points[0].y);
          for (let i = 1; i < bolt.points.length; i++) {
            ctx.lineTo(bolt.points[i].x, bolt.points[i].y);
          }
          ctx.stroke();

          // Hot White Electric Core
          ctx.shadowBlur = 3;
          ctx.strokeStyle = `rgba(255, 255, 255, ${(boltFade * crackleFlicker).toFixed(3)})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }

      ctx.restore();

      // D. Radiating Electric Sparks (moving in world coords)
      for (let i = burst.sparks.length - 1; i >= 0; i--) {
        const s = burst.sparks[i];
        s.age += dt;
        if (s.age >= s.lifespan) {
          burst.sparks.splice(i, 1);
          continue;
        }

        // Apply friction drag
        s.vx *= Math.pow(0.15, dt);
        s.vy *= Math.pow(0.15, dt);
        s.x += s.vx * dt;
        s.y += s.vy * dt;

        const sProgress = s.age / s.lifespan;
        const sOpacity = Math.pow(1 - sProgress, 1.3);

        ctx.save();
        ctx.shadowColor = 'rgba(168, 85, 247, 0.95)';
        ctx.shadowBlur = 7;
        ctx.fillStyle = `rgba(168, 85, 247, ${(sOpacity * 0.9).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 1;
        ctx.fillStyle = `rgba(255, 255, 255, ${(sOpacity * 0.98).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const onPointerMove = (e) => {
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.inside = true;

      if (mouse.speed > 8 && particles.length < MAX_PARTICLES) {
        particles.push(createParticle(true));
      }
    };

    const onMouseEnter = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.inside = true;
    };

    const onMouseLeave = () => {
      mouse.inside = false;
    };

    // On Click / Pointer Down: Trigger Bursting Violet Electric Aura
    const onPointerDown = (e) => {
      triggerElectricBurst(e.clientX, e.clientY);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    let animId = null;
    let lastTime = performance.now();

    function loop(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Continuous simmering fire spawn
      if (mouse.inside) {
        spawnTimer += dt;
        if (spawnTimer >= BASE_SPAWN_INTERVAL && particles.length < MAX_PARTICLES) {
          particles.push(createParticle(false));
          spawnTimer = 0;
        }
      }

      // Update and render ambient fire embers
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age += dt;

        if (p.age >= p.lifespan) {
          particles.splice(i, 1);
          continue;
        }

        p.vy -= 16 * dt; // upward heat buoyancy
        p.y += p.vy * dt;
        p.x += (p.vx + Math.sin(p.phase + p.age * p.swaySpeed) * p.swayAmount) * dt;
        p.rotation += p.rotationSpeed * dt;

        drawParticle(p);
      }

      // Update and render clickable electric aura bursts
      for (let i = electricBursts.length - 1; i >= 0; i--) {
        const burst = electricBursts[i];
        burst.age += dt;

        if (burst.age >= burst.lifespan && burst.sparks.length === 0) {
          electricBursts.splice(i, 1);
          continue;
        }

        drawElectricBurst(burst, dt);
      }

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    const onVisibilityChange = () => {
      if (document.hidden) {
        particles.length = 0;
        electricBursts.length = 0;
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] block"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}
