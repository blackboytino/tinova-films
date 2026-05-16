"use client";

import { HERO_STATS } from "@/data/site";
import { useRef, useState } from "react";

export default function HeroSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePlayReel = async () => {
    if (!videoRef.current) return;

    setPlaying(true);

    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
    } catch (err) {
      console.error(err);
      setPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setPlaying(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start px-[8vw] overflow-hidden"
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        onEnded={handleVideoEnd}
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-700 ${
          playing ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <source src="/videos/showreel.mp4" type="video/mp4" />
      </video>

      {/* Background */}
      <div
        className={`hero-bg absolute inset-0 z-0 transition-all duration-700 ${
          playing ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(28,42,58,0.6) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 85% 20%, rgba(232,98,42,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 30% 40% at 10% 80%, rgba(79,195,247,0.05) 0%, transparent 60%),
            var(--black)
          `,
        }}
      />

      {/* Grid lines */}
      <div
        className={`hero-grid-lines absolute inset-0 z-[1] pointer-events-none transition-opacity duration-700 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-[900px]">
        {/* Eyebrow */}
        <p
          className="hero-eyebrow mb-6"
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "0.72rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--orange)",
            opacity: 0,
            transform: "translateX(-20px)",
            transition:
              "opacity 0.8s 0.2s var(--ease-out), transform 0.8s 0.2s var(--ease-out)",
          }}
        >
          Lagos · Nigeria · Available Worldwide
        </p>

        {/* Title */}
        <h1
          className="hero-title mb-7"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 10vw, 10rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "var(--cream)",
            opacity: 0,
            transform: "translateY(40px)",
            transition:
              "opacity 0.9s 0.4s var(--ease-out), transform 0.9s 0.4s var(--ease-out)",
          }}
        >
          VISUAL
          <br />
          <span style={{ color: "var(--orange)" }}>STORY</span>
          TELLER
        </h1>

        {/* Sub */}
        <p
          className="hero-sub mb-12"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--off-white)",
            lineHeight: 1.7,
            maxWidth: 500,
            fontWeight: 300,
            opacity: 0,
            transform: "translateY(20px)",
            transition:
              "opacity 0.8s 0.6s var(--ease-out), transform 0.8s 0.6s var(--ease-out)",
          }}
        >
          I craft cinematic experiences that don&apos;t just show a moment —
          they make you feel it. From live events to branded campaigns.
        </p>

        {/* Actions */}
        <div
          className="hero-actions flex items-center gap-6 flex-wrap"
          style={{
            opacity: 0,
            transition: "opacity 0.8s 0.8s var(--ease-out)",
          }}
        >
          <button
            onClick={() => scrollTo("#portfolio")}
            className="btn-primary-shimmer relative overflow-hidden bg-[var(--orange)] text-[var(--black)] px-9 py-[14px] rounded-[2px] border-0 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_var(--orange-soft)] cursor-none"
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            View My Work
          </button>

          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2.5 bg-transparent border-0 transition-all duration-300 hover:gap-4 cursor-none group"
            style={{
              color: "var(--off-white)",
              fontFamily: "var(--font-head)",
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Let&apos;s Talk{" "}
            <span className="text-xl transition-all duration-300 group-hover:text-cream">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div
        className="hero-stats absolute right-[8vw] bottom-[15vh] flex flex-col gap-8 z-[2] lg:flex hidden"
        style={{
          opacity: 0,
          transition: "opacity 0.8s 1.2s var(--ease-out)",
        }}
      >
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="text-right">
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3vw, 3rem)",
                color: "var(--cream)",
                lineHeight: 1,
              }}
            >
              <span style={{ color: "var(--orange)" }}>{stat.num}</span>
              {stat.suffix}
            </div>

            <div
              className="mt-1"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--dim-text)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Rotating reel badge */}
      <div className="absolute right-[8vw] top-1/2 -translate-y-1/2 w-[180px] h-[180px] z-[2] hidden xl:flex items-center justify-center">
        {/* Rotating ring SVG */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            playing ? "opacity-0 scale-75 rotate-180" : "opacity-100 scale-100"
          }`}
          style={{ animation: "rotateSlow 12s linear infinite" }}
        >
          <svg viewBox="0 0 180 180" className="w-full h-full">
            <defs>
              <path
                id="textCircle"
                d="M90,90 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
              />
            </defs>

            <text
              style={{
                fill: "var(--orange)",
                fontFamily: "var(--font-head)",
                fontSize: 11,
                letterSpacing: 3,
              }}
            >
              <textPath href="#textCircle">
                VISUALIST · TINO · AKPOTU ·{" "}
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center circle */}
        <button
          onClick={handlePlayReel}
          className={`w-20 h-20 rounded-full flex items-center justify-center text-center transition-all duration-500 shadow-[0_0_40px_var(--orange-soft)] ${
            playing
              ? "opacity-0 scale-50 rotate-180 pointer-events-none"
              : "opacity-100 scale-100 rotate-0"
          }`}
          style={{
            background: "var(--orange)",
            fontFamily: "var(--font-display)",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "var(--black)",
            lineHeight: 1.2,
          }}
        >
          PLAY
          <br />
          REEL
        </button>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]"
        style={{ opacity: 0, animation: "fadeIn 1s 2.5s forwards" }}
      >
        <div
          className="w-px h-15"
          style={{
            background:
              "linear-gradient(to bottom, var(--orange), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />

        <span
          className="writing-vertical"
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "var(--dim-text)",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}