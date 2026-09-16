import React, { useEffect, useRef } from 'react';

/**
 * CursorPetals - Delicate falling sakura petals specifically around the cursor.
 *
 * Characteristics:
 * - Does NOT alter or replace the static cursor (cursor.png remains the CSS cursor).
 * - Spawns 5-9 small pink cherry blossom petals slightly above and around the cursor.
 * - Gently falls downward with organic horizontal swaying, 3D tumbling, and rotation.
 * - Petals fade in softly and fade out gradually before vanishing.
 * - Continues to spawn naturally even when the cursor is stationary.
 * - Zero pointer interference: pointer-events: none.
 */

const PETAL_COLORS = [
  '#ffb8d9',
  '#ffa2cb',
  '#ff8fc1',
  '#ffd3e8',
  '#ff7eb6',
];

export default function CursorPetals() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check motion preference and device capabilities
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

    // Track mouse position and presence
    const mouse = {
      x: -1000,
      y: -1000,
      inside: false,
    };

    const updateGlowPosition = (x, y) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        glowRef.current.style.opacity = '1';
      }
    };

    const onPointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.inside = true;
      updateGlowPosition(e.clientX, e.clientY);
    };

    const onMouseEnter = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.inside = true;
      updateGlowPosition(e.clientX, e.clientY);
    };

    const onMouseLeave = () => {
      mouse.inside = false;
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Petal management
    const petals = [];
    const MAX_PETALS = 9;
    const SPAWN_INTERVAL = 0.2; // seconds (~5 petals per second, 6-9 alive at any time)
    let spawnTimer = 0;
    let prevTime = performance.now();
    let animFrame = null;

    function createPetal() {
      // Spawn slightly ABOVE and around the cursor position
      const spawnX = mouse.x + (Math.random() - 0.5) * 32;
      const spawnY = mouse.y - 12 - Math.random() * 22;

      return {
        x: spawnX,
        y: spawnY,
        baseX: spawnX,
        size: 3.6 + Math.random() * 2.2, // small, delicate petal size
        vy: 36 + Math.random() * 28, // gentle downward speed (px/sec)
        vxDrift: (Math.random() - 0.5) * 12, // subtle lateral drift
        swayWidth: 10 + Math.random() * 16,
        swaySpeed: 2.2 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 2.2,
        flip: Math.random() * Math.PI * 2,
        flipSpeed: 2.0 + Math.random() * 2.4,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        age: 0,
        lifespan: 1.4 + Math.random() * 0.7, // 1.4s to 2.1s
        peakOpacity: 0.75 + Math.random() * 0.2,
      };
    }

    function drawPetal(petal, currentX) {
      const size = petal.size;
      const progress = petal.age / petal.lifespan;

      // Smooth fade-in (first 18%) and fade-out (remaining 82%)
      let opacity = 0;
      if (progress < 0.18) {
        opacity = (progress / 0.18) * petal.peakOpacity;
      } else {
        opacity = ((1 - progress) / 0.82) * petal.peakOpacity;
      }

      if (opacity <= 0.01) return;

      const horizontalFlip = 0.35 + Math.abs(Math.cos(petal.flip)) * 0.65;

      ctx.save();
      ctx.translate(currentX, petal.y);
      ctx.rotate(petal.rotation);
      ctx.scale(horizontalFlip, 1);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = petal.color;

      // Delicate curved cherry blossom petal shape
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(
        size * 0.85,
        -size * 0.42,
        size * 0.72,
        size * 0.65,
        0,
        size
      );
      ctx.bezierCurveTo(
        -size * 0.72,
        size * 0.65,
        -size * 0.85,
        -size * 0.42,
        0,
        -size
      );
      ctx.fill();

      // Subtle translucent inner highlight for natural depth
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.5);
      ctx.lineTo(0, size * 0.4);
      ctx.stroke();

      ctx.restore();
    }

    function loop(now) {
      const dt = Math.min((now - prevTime) / 1000, 0.1);
      prevTime = now;

      // Spawn petals if cursor is inside viewport
      if (mouse.inside) {
        spawnTimer += dt;
        if (spawnTimer >= SPAWN_INTERVAL && petals.length < MAX_PETALS) {
          spawnTimer = 0;
          petals.push(createPetal());
        }
      }

      ctx.clearRect(0, 0, width, height);

      // Update and draw existing petals
      for (let i = petals.length - 1; i >= 0; i--) {
        const petal = petals[i];
        petal.age += dt;

        if (petal.age >= petal.lifespan) {
          petals.splice(i, 1);
          continue;
        }

        // Downward fall
        petal.y += petal.vy * dt;

        // Subtle lateral drift + sinusoidal sway
        petal.baseX += petal.vxDrift * dt;
        petal.phase += petal.swaySpeed * dt;
        const currentX = petal.baseX + Math.sin(petal.phase) * petal.swayWidth;

        // Rotation & 3D tumbling
        petal.rotation += petal.rotationSpeed * dt;
        petal.flip += petal.flipSpeed * dt;

        drawPetal(petal, currentX);
      }

      animFrame = requestAnimationFrame(loop);
    }

    animFrame = requestAnimationFrame(loop);

    const onVisibilityChange = () => {
      if (!document.hidden) {
        prevTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* Falling Sakura Petals Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999] block"
        style={{ pointerEvents: 'none' }}
        aria-hidden="true"
      />

      {/* Tiny Soft Pink Glowing Point at Top of Cursor */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] transition-opacity duration-150"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          opacity: 0,
          pointerEvents: 'none',
          willChange: 'transform, opacity',
        }}
        aria-hidden="true"
      >
        <div className="cursor-glow-point" />
      </div>
    </>
  );
}

