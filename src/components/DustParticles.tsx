"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  originalVy: number;
}

export default function DustParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef({ lastY: 0, velocity: 0 });
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 65;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Track scroll velocity
    scrollRef.current.lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - scrollRef.current.lastY;
      scrollRef.current.velocity = Math.min(Math.abs(diff) * 0.45, 12); // Cap velocity
      scrollRef.current.lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);

    // Paleta de colores tierra/asfalto/polvo/amarillo CAT
    const colors = [
      "rgba(245, 197, 24, 0.45)", // Amarillo CAT semi-opaco
      "rgba(255, 215, 0, 0.35)",  // Dorado
      "rgba(212, 163, 11, 0.25)", // Ocre
      "rgba(128, 128, 128, 0.15)", // Polvo gris
      "rgba(160, 160, 160, 0.2)",  // Humo claro
    ];

    // Inicializar partículas
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        const vy = -(Math.random() * 0.7 + 0.2);
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: vy,
          originalVy: vy,
          size: Math.random() * 2.8 + 0.8,
          alpha: Math.random() * 0.6 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initParticles();

    // Loop de animación
    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ralentizar la velocidad de scroll residual
      scrollRef.current.velocity *= 0.95;
      const scrollImpact = scrollRef.current.velocity;

      particles.forEach((p) => {
        // Impacto del scroll: Las partículas se elevan más rápido y se inclinan
        p.vy = p.originalVy - scrollImpact * 0.6;
        p.vx += (Math.random() - 0.5) * 0.05 - scrollImpact * 0.03; // Pequeña deriva lateral al scroll

        // Movimiento básico
        p.x += p.vx;
        p.y += p.vy;

        // Interacción con el cursor del mouse (repulsión suave)
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          const force = (180 - dist) / 180;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 2.2;
          p.y += Math.sin(angle) * force * 2.2;
        }

        // Límites de pantalla: regenerar partícula si sale de bordes
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
          p.vx = (Math.random() - 0.5) * 0.5;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = "rgba(245, 197, 24, 0.1)";
        ctx.shadowBlur = p.size > 2 ? 4 : 0;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
}
