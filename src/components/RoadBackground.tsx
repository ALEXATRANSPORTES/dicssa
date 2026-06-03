"use client";

import { useEffect, useRef } from "react";

/**
 * Fondo premium: carriles de carretera que serpentean con curvas suaves.
 * Las líneas de carril fluyen lentamente y se "encienden" en amarillo
 * siguiendo la posición del mouse, como faros iluminando el asfalto.
 * Respeta prefers-reduced-motion (queda estático y sutil).
 */
export default function RoadBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse suavizado (con lerp para que el faro siga con inercia)
    const mouse = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("mouseout", onLeave);

    // Definición de carriles. Cada carril es una curva vertical que ondula.
    const LANES = 7;
    const lanes = Array.from({ length: LANES }, (_, i) => {
      const t = LANES === 1 ? 0.5 : i / (LANES - 1);
      return {
        baseX: t, // posición horizontal relativa (0..1)
        amp: 60 + Math.random() * 90, // amplitud de la curva en px
        freq: 0.8 + Math.random() * 1.4, // ondulaciones a lo alto
        phase: Math.random() * Math.PI * 2,
        speed: 0.06 + Math.random() * 0.08, // velocidad de deriva de la curva
      };
    });

    const GLOW_RADIUS = 240; // radio de iluminación del mouse
    const STEP = 16; // resolución vertical del muestreo (px)

    let raf = 0;
    let time = 0;

    const laneX = (lane: (typeof lanes)[number], yNorm: number, t: number) => {
      const base = lane.baseX * w;
      const wave =
        Math.sin(yNorm * Math.PI * lane.freq + lane.phase + t * lane.speed) * lane.amp +
        Math.sin(yNorm * Math.PI * lane.freq * 2.3 + lane.phase * 1.7) * (lane.amp * 0.25);
      return base + wave;
    };

    const draw = () => {
      time += reduced ? 0 : 1;

      // Inercia del faro del mouse
      smooth.x += (mouse.x - smooth.x) * 0.08;
      smooth.y += (mouse.y - smooth.y) * 0.08;

      // Fondo: gradiente de asfalto oscuro
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#0a0a0a");
      bg.addColorStop(0.5, "#070707");
      bg.addColorStop(1, "#000000");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const dashFlow = (time * 0.9) % 34; // flujo de las líneas discontinuas

      for (const lane of lanes) {
        // 1) Trazo base tenue del carril (línea continua gris)
        ctx.beginPath();
        for (let y = -20; y <= h + 20; y += STEP) {
          const yNorm = y / h;
          const x = laneX(lane, yNorm, time);
          if (y === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgba(120,120,120,0.07)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
        ctx.stroke();

        // 2) Línea discontinua de carril (flujo)
        ctx.beginPath();
        for (let y = -20; y <= h + 20; y += STEP) {
          const yNorm = y / h;
          const x = laneX(lane, yNorm, time);
          if (y === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgba(245,197,24,0.05)";
        ctx.lineWidth = 2;
        ctx.setLineDash([18, 16]);
        ctx.lineDashOffset = -dashFlow;
        ctx.stroke();

        // 3) Iluminación por mouse: segmentos cercanos al faro brillan en amarillo
        if (smooth.x > -9000) {
          ctx.setLineDash([]);
          for (let y = -20; y <= h + 20; y += STEP) {
            const yNorm = y / h;
            const x1 = laneX(lane, yNorm, time);
            const y2 = y + STEP;
            const x2 = laneX(lane, y2 / h, time);

            const midX = (x1 + x2) / 2;
            const midY = (y + y2) / 2;
            const dx = midX - smooth.x;
            const dy = midY - smooth.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < GLOW_RADIUS) {
              const intensity = 1 - dist / GLOW_RADIUS;
              ctx.beginPath();
              ctx.moveTo(x1, y);
              ctx.lineTo(x2, y2);
              ctx.strokeStyle = `rgba(245,197,24,${(intensity * 0.85).toFixed(3)})`;
              ctx.lineWidth = 1.5 + intensity * 2.5;
              ctx.shadowColor = "rgba(245,197,24,0.8)";
              ctx.shadowBlur = intensity * 18;
              ctx.stroke();
            }
          }
          ctx.shadowBlur = 0;
        }
      }

      // Halo radial cálido alrededor del faro
      if (smooth.x > -9000) {
        const glow = ctx.createRadialGradient(
          smooth.x, smooth.y, 0,
          smooth.x, smooth.y, GLOW_RADIUS
        );
        glow.addColorStop(0, "rgba(245,197,24,0.06)");
        glow.addColorStop(1, "rgba(245,197,24,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(
          smooth.x - GLOW_RADIUS,
          smooth.y - GLOW_RADIUS,
          GLOW_RADIUS * 2,
          GLOW_RADIUS * 2
        );
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none -z-20"
    />
  );
}
