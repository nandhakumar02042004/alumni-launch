import React, { useEffect, useRef } from 'react';

export function ParticleCanvas({ count = 75, active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const parent = canvas.parentElement || document.body;
    let width = (canvas.width = parent.clientWidth || window.innerWidth);
    let height = (canvas.height = parent.clientHeight || window.innerHeight);

    const handleResize = () => {
      width = canvas.width = parent.clientWidth || window.innerWidth;
      height = canvas.height = parent.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = ['#00F2FE', '#8BC53F', '#F4C542', '#A855F7', '#38BDF8'];

    // Dynamic glowing floating spheres & particles inside card
    const balls = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 4.5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.65 + 0.25,
      speedY: -(Math.random() * 0.7 + 0.2),
      speedX: (Math.random() - 0.5) * 0.6,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      angle: Math.random() * Math.PI * 2,
      wobble: Math.random() * 1.5 + 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.002;

      balls.forEach((b) => {
        b.y += b.speedY;
        b.x += b.speedX + Math.sin(time + b.angle) * b.wobble * 0.35;

        b.alpha += Math.sin(time * 2 + b.angle) * b.pulseSpeed;
        if (b.alpha < 0.2) b.alpha = 0.2;
        if (b.alpha > 0.85) b.alpha = 0.85;

        if (b.y < -10) {
          b.y = height + 10;
          b.x = Math.random() * width;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.globalAlpha = b.alpha;
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = b.radius * 4;
        ctx.fill();
        ctx.restore();
      });

      if (active) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        borderRadius: 'inherit',
      }}
    />
  );
}
