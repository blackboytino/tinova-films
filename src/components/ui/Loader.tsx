"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.classList.add("loaded");
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const letters = "TINO AKPOTU".split("");

  return (
    <div
      className={`fixed inset-0 z-[9000] bg-[var(--black)] flex flex-col items-center justify-center gap-6 transition-[opacity,visibility] duration-[800ms] ease-[var(--ease-out)] ${
        hidden ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
      }`}
    >
      {/* Name */}
      <div
        className="overflow-hidden"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          letterSpacing: "0.25em",
          color: "var(--cream)",
        }}
      >
        {letters.map((char, i) => (
          <span
            key={i}
            className="loader-name"
            style={{
              display: "inline-block",
              transform: "translateY(100%)",
              animation: `slideUp 0.8s var(--ease-out) ${i * 0.08}s forwards`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "var(--orange)",
          opacity: 0,
          animation: "fadeIn 0.6s 1s forwards",
        }}
      >
        Visual Storyteller
      </p>

      {/* Progress bar */}
      <div
        className="relative overflow-hidden"
        style={{
          width: 200,
          height: 1,
          background: "var(--mid-gray)",
          opacity: 0,
          animation: "fadeIn 0.4s 0.8s forwards",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "var(--orange)",
            width: "0%",
            animation: "loadBar 1.4s 0.8s var(--ease-out) forwards",
          }}
        />
      </div>
    </div>
  );
}
