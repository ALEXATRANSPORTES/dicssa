"use client";

import { useEffect, useRef } from "react";

/**
 * Fondo premium: una autopista en perspectiva que se aleja hacia el horizonte,
 * con curvas suaves y líneas de carril que fluyen hacia el espectador.
 * Los carriles se iluminan en amarillo siguiendo el mouse (efecto faros).
 * Respeta prefers-reduced-motion.
 */
export default function RoadBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0;
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

    // Mouse normalizado (-1..1) con inercia
    const mouse = { x: 0, y: 0 };
    const smooth = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const NUM_LANE_LINES: number = 5; // 4 carriles => 5 líneas divisorias
    let raf = 0;
    let t = 0;

    // Posición horizontal del centro de la carretera a una profundidad d (0=horizonte, 1=frente)
    const centerAt = (d: number, time: number, vpx: number) => {
      // El centro interpola entre el punto de fuga (arriba) y el frente (abajo),
      // con una curva sinusoidal que ondula con el tiempo (carretera serpenteante).
      const sway = 1 - d; // la curva afecta más cerca del horizonte
      const curve = Math.sin(d * 1.6 + time * 0.0005) * 70 * sway +
                    Math.sin(d * 3.2 + time * 0.0003) * 22 * sway;
      return vpx + curve;
    };

    // Mapea profundidad d (0..1) a coordenada Y con perspectiva
    const horizonRatio = 0.40; // el horizonte está al 40% de la altura
    const yAt = (d: number) => {
      const horizonY = h * horizonRatio;
      // Perspectiva: las franjas se separan más cerca del frente
      return horizonY + (h - horizonY) * Math.pow(d, 1.9);
    };

    // Semiancho de la carretera a profundidad d
    const halfWidthAt = (d: number) => {
      const maxHalf = w * 0.42;
      return maxHalf * Math.pow(d, 1.55) + 2;
    };

    const draw = () => {
      if (!reduced) t += 16;

      smooth.x += (mouse.x - smooth.x) * 0.05;
      smooth.y += (mouse.y - smooth.y) * 0.05;

      // Punto de fuga, desplazado suavemente con el mouse (parallax)
      const vpx = w / 2 + smooth.x * w * 0.12;

      // Fondo: gradiente de cielo/asfalto oscuro
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#050505");
      bg.addColorStop(horizonRatio, "#0c0b08");
      bg.addColorStop(1, "#000000");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Resplandor del horizonte (amanecer cálido sutil)
      const horizonY = h * horizonRatio;
      const halo = ctx.createRadialGradient(vpx, horizonY, 0, vpx, horizonY, w * 0.5);
      halo.addColorStop(0, "rgba(245,197,24,0.10)");
      halo.addColorStop(0.4, "rgba(245,197,24,0.03)");
      halo.addColorStop(1, "rgba(245,197,24,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      // Superficie de la carretera (polígono oscuro con leve degradado)
      const steps = 60;
      ctx.beginPath();
      // borde izquierdo desde horizonte al frente
      for (let i = 0; i <= steps; i++) {
        const d = i / steps;
        const cx = centerAt(d, t, vpx);
        const x = cx - halfWidthAt(d);
        const y = yAt(d);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      // borde derecho de vuelta
      for (let i = steps; i >= 0; i--) {
        const d = i / steps;
        const cx = centerAt(d, t, vpx);
        const x = cx + halfWidthAt(d);
        const y = yAt(d);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      const roadGrad = ctx.createLinearGradient(0, horizonY, 0, h);
      roadGrad.addColorStop(0, "rgba(28,28,30,0.0)");
      roadGrad.addColorStop(0.5, "rgba(26,26,28,0.7)");
      roadGrad.addColorStop(1, "rgba(16,16,18,0.95)");
      ctx.fillStyle = roadGrad;
      ctx.fill();

      const mouseX = ((smooth.x + 1) / 2) * w;
      const mouseY = ((smooth.y + 1) / 2) * h;
      const GLOW = w * 0.18;

      // Líneas de carril
      for (let l = 0; l < NUM_LANE_LINES; l++) {
        const laneFrac = NUM_LANE_LINES === 1 ? 0 : (l / (NUM_LANE_LINES - 1)) * 2 - 1; // -1..1
        const isEdge = l === 0 || l === NUM_LANE_LINES - 1;

        // Construir puntos de la línea
        const pts: { x: number; y: number; d: number }[] = [];
        for (let i = 0; i <= steps; i++) {
          const d = i / steps;
          const cx = centerAt(d, t, vpx);
          const x = cx + laneFrac * halfWidthAt(d);
          pts.push({ x, y: yAt(d), d });
        }

        if (isEdge) {
          // Líneas de borde: continuas, sólidas
          ctx.beginPath();
          pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
          ctx.strokeStyle = "rgba(245,197,24,0.40)";
          ctx.lineWidth = 2.2;
          ctx.setLineDash([]);
          ctx.stroke();
        } else {
          // Líneas internas discontinuas que fluyen hacia el frente
          // Dibujamos guiones cuyo tamaño crece con la profundidad (perspectiva)
          const flow = (t * 0.0009) % 1;
          for (let i = 0; i < steps; i++) {
            const d = (i / steps + flow) % 1;
            // Patrón de guion: visible la mitad del ciclo
            const seg = (d * 9) % 1;
            if (seg > 0.5) continue;
            const p1 = pts[i];
            const p2 = pts[i + 1];
            const alpha = 0.25 + d * 0.55;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(250,240,210,${alpha.toFixed(3)})`;
            ctx.lineWidth = 1 + d * 3.5;
            ctx.stroke();
          }
        }

        // Iluminación por mouse (faros): refuerza segmentos cercanos al cursor
        for (let i = 0; i < steps; i++) {
          const p1 = pts[i];
          const p2 = pts[i + 1];
          const mx = (p1.x + p2.x) / 2;
          const my = (p1.y + p2.y) / 2;
          const dist = Math.hypot(mx - mouseX, my - mouseY);
          if (dist < GLOW) {
            const inten = 1 - dist / GLOW;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(245,197,24,${(inten * 0.9).toFixed(3)})`;
            ctx.lineWidth = 1.5 + inten * 3 + p1.d * 2;
            ctx.shadowColor = "rgba(245,197,24,0.9)";
            ctx.shadowBlur = inten * 16;
            ctx.stroke();
          }
        }
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
