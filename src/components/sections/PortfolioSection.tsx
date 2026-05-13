"use client";

import { useEffect, useRef, useState } from "react";
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
/* CARD (AUTO LOOP PREVIEW) */
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

    let interval: ReturnType<typeof setInterval>;

    const startLoop = async () => {
      try {
        vid.currentTime = start;
        await vid.play();
      } catch {}

      interval = setInterval(() => {
        if (!videoRef.current) return;

        videoRef.current.currentTime = start;
        videoRef.current.play().catch(() => {});
      }, PREVIEW_DURATION);
    };

    startLoop();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [card.previewStart, card.videoUrl]);

  return (
    <div
      className={`
        relative overflow-hidden bg-[var(--deep-gray)]
        cursor-pointer transition-all duration-500 group
        ${card.large && !mobile ? "col-span-2" : ""}
      `}
      onClick={() => onClick(card)}
    >
      {/* MEDIA */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: mobile ? "4/5" : card.large ? "16/9" : "4/3",
        }}
      >
        {/* AUTO PLAY LOOPING VIDEO */}
        {card.videoUrl && (
          <video
            ref={videoRef}
            src={card.videoUrl}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* PLAY ICON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[52px] h-[52px] rounded-full bg-[var(--orange)] flex items-center justify-center">
            <PlayIcon />
          </div>
        </div>
      </div>

      {/* CAPTION */}
      <div className="p-3 md:p-5">
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
/* MODAL (FULL VIDEO) */
/* ───────────────────────────────────────────── */

function Modal({
  card,
  onClose,
}: {
  card: PortfolioCard;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[3000] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-xs uppercase tracking-[0.25em] px-3 py-2 border border-white/20 bg-black/40 backdrop-blur"
      >
        Close
      </button>

      <div
        className="w-full max-w-[1200px] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={card.videoUrl}
          controls
          autoPlay
          className="max-w-full max-h-[90vh] w-auto h-auto"
        />
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────── */
/* MAIN SECTION */
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
      <section className="bg-[var(--black)] px-4 md:px-[6vw] py-12 md:py-28">
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 md:w-8 h-px bg-[var(--orange)]" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-[var(--orange)] font-medium">
            Portfolio
          </span>
        </div>

        <h2
          className="mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem,6vw,5.2rem)",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            color: "var(--cream)",
            fontWeight: 600,
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
              className="px-3 py-2 border text-[10px] uppercase whitespace-nowrap tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                background:
                  activeFilter === filter.value
                    ? "var(--orange)"
                    : "transparent",
                color:
                  activeFilter === filter.value
                    ? "black"
                    : "var(--off-white)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* SECTIONS */}
        {visible.map((section) => (
          <div key={section.category} className="mb-14 md:mb-24">
            <div className="flex justify-between mb-4 border-b border-white/10 pb-3">
              <span className="text-[var(--cream)] font-semibold">
                {section.name}
              </span>
              <span className="text-[var(--orange)] text-sm">
                {section.count}
              </span>
            </div>

            {/* MOBILE */}
            <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
              {section.cards.map((card) => (
                <div key={card.id} className="min-w-[88%] snap-center">
                  <Card card={{ ...card, large: false }} onClick={setModal} mobile />
                </div>
              ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {section.cards.map((card) => (
                <Card key={card.id} card={card} onClick={setModal} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {modal && <Modal card={modal} onClose={() => setModal(null)} />}
    </>
  );
}