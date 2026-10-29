"use client";
import { useEffect, useRef } from "react";

// Children slide in one by one, left to right, as they scroll into view.
export default function Stagger({ as: Tag = "div", className = "", children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timers = [];
    const io = new IntersectionObserver((entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
        .forEach((e, i) => {
          const t = e.target;
          t.style.transitionDelay = `${i * 140}ms`;
          t.classList.add("in");
          io.unobserve(t);
          timers.push(setTimeout(() => { t.style.transitionDelay = ""; }, i * 140 + 1000));
        });
    }, { threshold: 0.2, rootMargin: "0px 0px -5% 0px" });
    Array.from(el.children).forEach((k) => io.observe(k));
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, []);
  return <Tag ref={ref} className={`stagger ${className}`}>{children}</Tag>;
}
