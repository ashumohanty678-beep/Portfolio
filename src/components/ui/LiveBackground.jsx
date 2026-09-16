import React, { useEffect, useRef } from 'react';

export default function LiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const COLORS = [
      '#ffd8ec',
      '#ffb4d7',
      '#ff8fc2',
      '#ff6aaa',
      '#dca6ff',
    ];

    let width = 0;
    let height = 0;
    let dpr = 1;
    let petals = [];
    let animationFrame = null;
    let previousTime = performance.now();

    function getPetalCount() {
      // Keep the blossom effect subtle.
      return window.innerWidth < 650 ? 14 : 26;
    }

    function resetPetal(petal, startAnywhere = false) {
      petal.x = Math.random() * (width + 100) - 50;
      petal.y = startAnywhere
        ? Math.random() * height
        : -30 - Math.random() * Math.min(height * 0.25, 180);

      petal.size = 3.5 + Math.random() * 5.5;
      petal.speedY = 18 + Math.random() * 28;
      petal.speedX = 2 + Math.random() * 9;
      petal.sway = 8 + Math.random() * 28;
      petal.swaySpeed = 0.7 + Math.random() * 1.2;
      petal.phase = Math.random() * Math.PI * 2;
      petal.rotation = Math.random() * Math.PI * 2;
      petal.rotationSpeed = (Math.random() - 0.5) * 1.6;
      petal.flip = Math.random() * Math.PI * 2;
      petal.flipSpeed = 1.4 + Math.random() * 2.2;
      petal.opacity = 0.3 + Math.random() * 0.5;
      petal.color = COLORS[Math.floor(Math.random() * COLORS.length)];

      // Some particles are complete tiny flowers.
      petal.isFlower = Math.random() < 0.14;
    }

    function createPetals() {
      petals = Array.from({ length: getPetalCount() }, () => {
        const petal = {};
        resetPetal(petal, true);
        return petal;
      });
    }

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createPetals();
      restartAnimation();
    }

    function drawSinglePetal(petal, x) {
      const size = petal.size;
      const horizontalFlip = 0.35 + Math.abs(Math.cos(petal.flip)) * 0.65;

      ctx.save();
      ctx.translate(x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.scale(horizontalFlip, 1);
      ctx.globalAlpha = petal.opacity;
      ctx.fillStyle = petal.color;

      if (petal.isFlower) {
        // Small five-petal blossom.
        for (let i = 0; i < 5; i++) {
          ctx.save();
          ctx.rotate((Math.PI * 2 * i) / 5);
          ctx.beginPath();
          ctx.ellipse(
            0,
            -size * 0.48,
            size * 0.28,
            size * 0.52,
            0,
            0,
            Math.PI * 2
          );
          ctx.fill();
          ctx.restore();
        }

        ctx.fillStyle = '#fff1ba';
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.16, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Individual curved cherry-blossom petal.
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

        ctx.strokeStyle = 'rgba(255,255,255,0.22)';
        ctx.lineWidth = 0.45;
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.65);
        ctx.quadraticCurveTo(size * 0.1, 0, 0, size * 0.65);
        ctx.stroke();
      }

      ctx.restore();
    }

    function render(deltaTime, time, shouldMove) {
      ctx.clearRect(0, 0, width, height);

      // Slowly changing wind gives the petals a natural diagonal fall.
      const wind = 5 + Math.sin(time / 3600) * 4;

      petals.forEach((petal) => {
        if (shouldMove) {
          petal.y += petal.speedY * deltaTime;
          petal.x += (petal.speedX + wind) * deltaTime;
          petal.phase += petal.swaySpeed * deltaTime;
          petal.rotation += petal.rotationSpeed * deltaTime;
          petal.flip += petal.flipSpeed * deltaTime;

          if (petal.y > height + 30) {
            resetPetal(petal, false);
          }

          if (petal.x > width + 70) {
            petal.x = -70;
          }
        }

        const swayingX = petal.x + Math.sin(petal.phase) * petal.sway;
        drawSinglePetal(petal, swayingX);
      });
    }

    function animate(currentTime) {
      const deltaTime = Math.min((currentTime - previousTime) / 1000, 0.034);
      previousTime = currentTime;
      render(deltaTime, currentTime, true);
      animationFrame = requestAnimationFrame(animate);
    }

    function restartAnimation() {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }

      // Show a few static blossoms for reduced-motion users.
      render(0, performance.now(), false);

      if (!reducedMotion.matches && !document.hidden) {
        previousTime = performance.now();
        animationFrame = requestAnimationFrame(animate);
      }
    }

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('visibilitychange', restartAnimation);

    const onMotionChange = () => restartAnimation();
    if (reducedMotion.addEventListener) {
      reducedMotion.addEventListener('change', onMotionChange);
    }

    resizeCanvas();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', restartAnimation);
      if (reducedMotion.removeEventListener) {
        reducedMotion.removeEventListener('change', onMotionChange);
      }
    };
  }, []);

  return (
    <div className="live-background" aria-hidden="true">
      <div className="background-image" />
      <div className="background-shade" />
      <div className="ambient-glow" />
      <canvas ref={canvasRef} id="blossom-canvas" />
      <div className="vignette" />
    </div>
  );
}
