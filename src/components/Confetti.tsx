import { useEffect, useRef } from 'react';

interface ConfettiProps {
  active: boolean;
  colors?: string[];
}

export default function Confetti({ active, colors }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const palette = colors || ['#7C3AED', '#A855F7', '#3B82F6', '#F59E0B', '#EC4899', '#10B981'];
    const particles: { x: number; y: number; vx: number; vy: number; color: string; size: number; rotation: number; rotSpeed: number }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height / 3,
        vx: (Math.random() - 0.5) * 12,
        vy: Math.random() * 6 + 2,
        color: palette[Math.floor(Math.random() * palette.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.3,
      });
    }

    let frame = 0;
    const DURATION = 120; // ~2 seconds at 60fps
    let animId: number;

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      frame++;

      for (const p of particles) {
        p.x += p.vx;
        p.vy += 0.15; // gravity
        p.y += p.vy;
        p.vx *= 0.99;
        p.rotation += p.rotSpeed;

        const alpha = frame < DURATION - 30 ? 1 : Math.max(0, (DURATION - frame) / 30);
        ctx!.save();
        ctx!.translate(p.x, p.y);
        ctx!.rotate(p.rotation);
        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = p.color;
        ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx!.restore();
      }

      if (frame < DURATION) {
        animId = requestAnimationFrame(draw);
      }
    }

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [active, colors]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
