"use client";

import { useState, useRef, useEffect } from "react";
import {
  PORTFOLIO_SECTIONS,
  PortfolioCategory,
  PortfolioCard,
} from "@/data/site";

/* ───────────────────────────────────────────── */
/* PLAY ICON */
/* ───────────────────────────────────────────── */

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="var(--black)">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

/* ───────────────────────────────────────────── */
/* CARD (UNCHANGED LOGIC) */
/* ───────────────────────────────────────────── */

function Card({
  card,
  onClick,
  mobile = false,
}: {
  card: PortfolioCard;
  onClick: (c: PortfolioCard) => void;
  mobile?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const PREVIEW_DURATION = 3000;

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !card.videoUrl) return;

    const start = card.previewStart ?? 0;

    let timeout: ReturnType<typeof setTimeout>;

    const playLoop = async () => {
      try {
        vid.currentTime = start;
        await vid.play();
      } catch {}

      timeout = setTimeout(() => {
        if (!videoRef.current) return;

        videoRef.current.pause();
        videoRef.current.currentTime = start;

        playLoop();
      }, PREVIEW_DURATION);
    };

    playLoop();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [card.previewStart, card.videoUrl]);

  return (
    <div
      className="
        relative overflow-hidden cursor-pointer group
        bg-[var(--deep-gray)]
        rounded-[8px]
        shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
        transition-transform duration-300
        hover:scale-[1.01]
      "
      onClick={() => onClick(card)}
    >
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: mobile ? "4/5" : card.large ? "16/9" : "4/3",
        }}
      >
        <video
          ref={videoRef}
          src={card.videoUrl}
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[52px] h-[52px] rounded-full bg-[var(--orange)] flex items-center justify-center">
            <PlayIcon />
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <p className="text-[var(--cream)] text-sm md:text-base font-semibold">
          {card.title}
        </p>
        <p className="text-[var(--dim-text)] text-[11px] md:text-xs mt-1">
          {card.sub}
        </p>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────── */
/* MAIN SECTION (MOBILE POLISH ONLY) */
/* ───────────────────────────────────────────── */

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] =
    useState<PortfolioCategory | "all">("all");

  const [modal, setModal] = useState<PortfolioCard | null>(null);

  const visible = PORTFOLIO_SECTIONS.filter(
    (section) =>
      activeFilter === "all" ||
      section.category === activeFilter
  );

  return (
    <>
      <section className="bg-[var(--black)] px-4 md:px-[6vw] py-16 md:py-28">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-px bg-[var(--orange)]" />
          <span className="text-[11px] tracking-[0.45em] uppercase text-[var(--orange)] font-medium">
            Portfolio
          </span>
        </div>

        <h2
          className="mb-10"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem,6vw,5.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            color: "var(--cream)",
          }}
        >
          SELECTED WORK
        </h2>

        {/* FILTERS */}
        <div className="flex gap-2 overflow-x-auto py-6">
          {[
            { label: "All Work", value: "all" },
            { label: "Video Editing", value: "editing" },
            { label: "Videography", value: "videography" },
            { label: "Cinematography", value: "cinematography" },
            { label: "Animation", value: "animation" },
            { label: "Event Recaps", value: "events" },
            { label: "Creative Direction", value: "direction" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as any)}
              className="
                px-3 py-2 border
                text-[10px] uppercase tracking-[0.25em]
                whitespace-nowrap
              "
              style={{
                fontFamily: "var(--font-head)",
                background:
                  activeFilter === filter.value
                    ? "var(--orange)"
                    : "transparent",
                color:
                  activeFilter === filter.value
                    ? "black"
                    : "var(--off-white)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* SECTIONS */}
        {visible.map((section) => (
          <div
            key={section.category}
            className="mb-24 md:mb-32 px-1 md:px-6"
          >
            {/* HEADER */}
            <div className="flex justify-between items-end mb-6 md:mb-8 border-b border-white/10 pb-4">
              <span className="text-[var(--cream)] text-lg font-semibold">
                {section.name}
              </span>

              <span className="text-[var(--orange)] text-sm">
                {section.count}
              </span>
            </div>

            {/* ───────────────────────────── */}
            {/* MOBILE (FIXED SCALE FEEL) */}
            {/* ───────────────────────────── */}

            <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4">
              {section.cards.map((card) => (
                <div
                  key={card.id}
                  className="
                    snap-center
                    flex-shrink-0
                    w-[78%]
                  "
                >
                  <Card
                    card={{ ...card, large: false }}
                    onClick={setModal}
                    mobile
                  />
                </div>
              ))}
            </div>

            {/* DESKTOP (UNCHANGED) */}
            <div className="hidden md:grid grid-cols-3 gap-5 items-start">
              {section.cards.map((card) => (
                <Card key={card.id} card={card} onClick={setModal} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {modal && (
        <div
          className="fixed inset-0 z-[3000] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <button
            onClick={() => setModal(null)}
            className="
              absolute top-5 right-5 md:top-8 md:right-8
              text-white text-xs uppercase tracking-[0.25em]
              px-3 py-2 border border-white/20 bg-black/40 backdrop-blur
            "
          >
            Close
          </button>

          <div
            className="w-full max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={modal.videoUrl}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] w-auto h-auto mx-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}