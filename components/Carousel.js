"use client";
import { Children, useEffect, useState } from "react";

// Auto-scrolling carousel (right to left) with dots. Pauses on hover and focus. perView applies from 900px wide, one card below that.
export default function Carousel({ children, perView = 2, mobileView = 1, one = false, label = "Carousel", className = "", interval = 4500 }) {
  const items = Children.toArray(children);
  const n = items.length;
  const [pv, setPv] = useState(1);
  const [p, setP] = useState(0);
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const set = () => { setPv(mq.matches ? perView : mobileView); setP(0); };
    set();
    mq.addEventListener("change", set);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    return () => mq.removeEventListener("change", set);
  }, [perView, mobileView]);

  const pages = Math.ceil(n / pv);
  useEffect(() => {
    if (paused || reduced || pages < 2) return;
    const id = setInterval(() => setP((x) => (x >= pages ? x : x + 1)), interval);
    return () => clearInterval(id);
  }, [paused, reduced, pages, interval]);

  // After sliding onto the cloned first page, jump back to the real first page without animation.
  const onEnd = (e) => {
    if (e.target !== e.currentTarget || p < pages) return;
    setAnim(false); setP(0);
    setTimeout(() => setAnim(true), 60);
  };

  const slides = [...items, ...items.slice(0, pv)];
  const active = p % pages;
  const mouse = (v) => (e) => { if (e.pointerType === "mouse") setPaused(v); };

  return (
    <div className={`car ${one ? "one" : ""} ${className}`} role="region" aria-roledescription="carousel" aria-label={label}
      onPointerEnter={mouse(true)} onPointerLeave={mouse(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="car-view">
        <div className="car-track" onTransitionEnd={onEnd}
          style={{ width: `${((n + pv) / pv) * 100}%`, transform: `translateX(-${((p * pv) / (n + pv)) * 100}%)`, transition: anim ? undefined : "none" }}>
          {slides.map((it, i) => (
            <div key={i} className="car-slide" style={{ width: `${100 / (n + pv)}%` }} aria-hidden={i >= n ? true : undefined}>{it}</div>
          ))}
        </div>
      </div>
      <div className="car-dots">
        {Array.from({ length: pages }, (_, i) => (
          <button key={i} className={i === active ? "on" : ""} aria-label={`Show slide ${i + 1} of ${pages}`} aria-current={i === active} onClick={() => setP(i)} />
        ))}
      </div>
    </div>
  );
}
