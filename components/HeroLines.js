"use client";
import { useEffect, useRef } from "react";

const WAVES = [
  "M0 380 C 160 340, 260 300, 380 330 S 560 250, 700 280 S 900 180, 1010 210 S 1130 160, 1200 120",
  "M0 420 C 200 390, 300 360, 430 380 S 620 320, 760 340 S 960 270, 1070 290 S 1150 250, 1200 220",
  "M0 460 C 180 440, 330 420, 480 435 S 700 390, 840 405 S 1040 360, 1200 340",
];
const N = 140;
const T = { draw: 2800, hold1: 300, up: 1700, hold2: 1100, down: 1700, stagger: 260 };
const clamp = (v) => Math.min(1, Math.max(0, v));
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const smooth = (v) => { v = clamp(v); return v * v * (3 - 2 * v); };

// The ends of the first two lines sweep up into one stepped tower: the outer line is the tower, the inner line its setback.
const TOWERS = [
  { x1: 870, x2: 1075, top: 40, edge: 30 },
  { x1: 925, x2: 1025, top: 115, edge: 24 },
];
const target = (x, y, k) => {
  const t = TOWERS[k];
  if (!t) return y;
  const w = smooth((x - t.x1) / t.edge) * (1 - smooth((x - t.x2) / t.edge));
  return y + (t.top - y) * w;
};

export default function HeroLines() {
  const refs = useRef([]);
  useEffect(() => {
    const paths = refs.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      paths.forEach((p) => (p.style.strokeDashoffset = 0));
      return;
    }
    const pts = paths.map((p) => {
      const L = p.getTotalLength();
      return Array.from({ length: N + 1 }, (_, i) => { const q = p.getPointAtLength((L * i) / N); return [q.x, q.y]; });
    });
    const tgt = pts.map((a, k) => a.map(([x, y]) => target(x, y, k)));
    const last = [-1, -1, -1];
    const shape = (k, m) => {
      paths[k].setAttribute("d", pts[k].map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${(y + (tgt[k][i] - y) * m).toFixed(1)}`).join(""));
    };
    const total = T.draw + T.hold1 + T.up + T.hold2 + T.down + 3 * T.stagger;
    let raf; const t0 = performance.now() + 300;
    const tick = (now) => {
      const t = now - t0;
      if (t >= total) {
        paths.forEach((p, k) => { p.setAttribute("d", WAVES[k]); p.style.strokeDashoffset = 0; });
        return;
      }
      paths.forEach((p, k) => {
        const off = k * T.stagger;
        p.style.strokeDashoffset = 1 - ease(clamp((t - off) / T.draw));
        if (!TOWERS[k]) return;
        const up = T.draw + T.hold1 + off, down = up + T.up + T.hold2;
        const m = t < up ? 0 : t < down ? ease(clamp((t - up) / T.up)) : 1 - ease(clamp((t - down) / T.down));
        if (m !== last[k]) { last[k] = m; shape(k, m); }
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg className="contours" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true">
      {WAVES.map((d, k) => (
        <path key={k} ref={(el) => (refs.current[k] = el)} pathLength="1" d={d} style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      ))}
    </svg>
  );
}
