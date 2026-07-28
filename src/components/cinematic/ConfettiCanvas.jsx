import React, { useEffect, useRef } from 'react';

export function ConfettiCanvas({ trigger = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ['#00F2FE', '#8BC53F', '#F4C542', '#FFD700', '#A855F7', '#FFFFFF', '#38BDF8'];

    // Left corner spark stream (top-left 0,0 shooting towards center right)
    const leftCornerSparks = Array.from({ length: 140 }).map(() => ({
      x: 20,
      y: 20,
      radius: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: Math.random() * 22 + 4,
      vy: Math.random() * 14 - 2,
      gravity: 0.28,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'circle' : 'star',
    }));

    // Right corner spark stream (top-right width,0 shooting towards center left)
    const rightCornerSparks = Array.from({ length: 140 }).map(() => ({
      x: width - 20,
      y: 20,
      radius: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: -(Math.random() * 22 + 4),
      vy: Math.random() * 14 - 2,
      gravity: 0.28,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'circle' : 'star',
    }));

    const allSparks = [...leftCornerSparks, ...rightCornerSparks];

    const drawStar = (cx, cy, spikes, outerRadius, innerRadius, color, alpha) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let aliveCount = 0;

      allSparks.forEach((p) => {
        if (p.opacity <= 0) return;
        aliveCount++;

        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.985;
        p.opacity -= 0.009;

        if (p.shape === 'star') {
          drawStar(p.x, p.y, 5, p.radius * 2.2, p.radius, p.color, p.opacity);
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.restore();
        }
      });

      if (aliveCount > 0) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [trigger]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 300,
      }}
    />
  );
}
