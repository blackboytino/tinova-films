"use client";

import { useRef, useState, useCallback } from "react";
import {
  PORTFOLIO_SECTIONS,
  PortfolioCategory,
  PortfolioCard,
} from "@/data/site";

/* FILTERS */
const FILTERS: { label: string; value: PortfolioCategory | "all" }[] = [
  { label: "All Work", value: "all" },
  { label: "Editing", value: "editing" },
  { label: "Videography", value: "videography" },
  { label: "Cinematography", value: "cinematography" },
  { label: "Animation", value: "animation" },
  { label: "Events", value: "events" },
  { label: "Direction", value: "direction" },
];

/* PLAY ICON */
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="var(--black)">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

/* CARD (unchanged logic, clean UX) */
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
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetVideo = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    vid.pause();
    vid.currentTime = card.previewStart ?? 0;
    vid.loop = false;
  }, [card.previewStart]);

  const handleMouseEnter = useCallback(() => {
    if (mobile) return;

    const vid = videoRef.current;
    if (!vid || !card.videoUrl) return;

    vid.currentTime = card.previewStart ?? 0;
    vid.loop = false;

    vid.play().catch(() => {});

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      resetVideo();
    }, 5000);
  }, [card.videoUrl, card.previewStart, resetVideo, mobile]);

  return (
    <div
      className="relative overflow-hidden bg-[var(--deep-gray)] cursor-pointer transition-all duration-300"
      onClick={() => onClick(card)}
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: mobile ? "4/5" : "4/3" }}
      >
        {card.thumbnailSrc && (
          <img
            src={card.thumbnailSrc}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {card.videoUrl && (
          <video
            ref={videoRef}
            src={card.videoUrl}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[var(--orange)] flex items-center justify-center">
            <PlayIcon />
          </div>
        </div>
      </div>

      {/* caption */}
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

/* MAIN */
export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] =
    useState<PortfolioCategory | "all">("all");

  const [modal, setModal] = useState<PortfolioCard | null>(null);

  const visible = PORTFOLIO_SECTIONS.filter(
    (s) => activeFilter === "all" || s.category === activeFilter
  );

  return (
    <>
      <section className="bg-[var(--black)] px-4 md:px-[6vw] py-12 md:py-28">
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 md:w-8 h-px bg-[var(--orange)]" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-[var(--orange)]">
            Portfolio
          </span>
        </div>

        <h2 className="text-[2rem] md:text-[5rem] text-[var(--cream)] leading-none mb-6">
          SELECTED WORK
        </h2>

        {/* FILTERS */}
        <div className="flex gap-2 overflow-x-auto pb-5">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className="px-3 py-2 border text-[10px] uppercase whitespace-nowrap"
              style={{
                background:
                  activeFilter === f.value
                    ? "var(--orange)"
                    : "transparent",
                color:
                  activeFilter === f.value
                    ? "black"
                    : "var(--off-white)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* SECTIONS */}
        {visible.map((section) => (
          <div key={section.category} className="mb-14 md:mb-24">
            <div className="mb-4 border-b border-white/10 pb-3">
              <div className="flex justify-between items-center">
                <span className="text-[var(--cream)] font-semibold">
                  {section.name}
                </span>
                <span className="text-[var(--orange)] text-sm">
                  {section.count}
                </span>
              </div>
            </div>

            {/* MOBILE SWIPE */}
            <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory">
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

      {modal && <div />}
    </>
  );
}