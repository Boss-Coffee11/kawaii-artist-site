"use client";
import React, { useEffect, useRef } from "react";

// トップの夜空（瞬く星＋ときどき光る大きな星）。触らなくて大丈夫です。
export const NightSky = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const COLORS = ["255,255,255", "226,240,255", "190,222,240", "255,244,224"];
    let W = 0, H = 0, raf = 0;
    let stars: { x: number; y: number; r: number; ph: number; sp: number; c: string }[] = [];

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round((W * H) / 4200);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H * 0.92,
        r: Math.random() * 1.3 + 0.3, ph: Math.random() * 6.28, sp: Math.random() * 1.6 + 0.4,
        c: COLORS[Math.random() < 0.6 ? 0 : 1 + Math.floor(Math.random() * 3)],
      }));
    };

    const glint = (x: number, y: number, s: number, a: number) => {
      ctx.save(); ctx.translate(x, y); ctx.globalCompositeOperation = "lighter";
      const h = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 1.3);
      h.addColorStop(0, `rgba(255,255,255,${a})`); h.addColorStop(0.2, `rgba(223,243,255,${a * 0.7})`); h.addColorStop(1, "rgba(223,243,255,0)");
      ctx.fillStyle = h; ctx.beginPath(); ctx.arc(0, 0, s * 1.3, 0, 6.29); ctx.fill();
      for (let k = 0; k < 4; k++) {
        const len = s * (k % 2 ? 2.2 : 3.4), w = s * 0.07;
        const g = ctx.createLinearGradient(0, 0, len, 0);
        g.addColorStop(0, `rgba(255,255,255,${a})`); g.addColorStop(1, "rgba(223,243,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(0, -w); ctx.lineTo(len, 0); ctx.lineTo(0, w); ctx.fill();
        ctx.rotate(Math.PI / 2);
      }
      ctx.restore();
    };

    const frame = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        const a = 0.25 + 0.75 * Math.pow(Math.sin(t * s.sp + s.ph), 2);
        ctx.fillStyle = `rgba(${s.c},${a})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.29); ctx.fill();
        if (s.r > 1.45 && a > 0.9) glint(s.x, s.y, s.r * 3, a * 0.5);
      }
      if (!reduced) raf = requestAnimationFrame(frame);
    };

    size();
    window.addEventListener("resize", size);
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", size); };
  }, []);

  return <canvas ref={ref} className="nightSkyCanvas" aria-hidden="true" />;
};
