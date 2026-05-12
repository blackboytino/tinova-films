"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const cursor = cursorRef.current;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) {
        dot.style.left = mx + "px";
        dot.style.top = my + "px";
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      requestAnimationFrame(animate);
    };

    animate();
    document.addEventListener("mousemove", onMove);

    const interactables = document.querySelectorAll(
      "a, button, .portfolio-card, .brand-cell, .grid-item, [data-cursor]"
    );

    interactables.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursor?.classList.add("cursor-expand")
      );
      el.addEventListener("mouseleave", () =>
        cursor?.classList.remove("cursor-expand")
      );
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
