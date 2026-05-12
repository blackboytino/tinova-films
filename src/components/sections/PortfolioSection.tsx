"use client";

import { useRef, useState, useCallback } from "react";
import {
  PORTFOLIO_SECTIONS,
  PortfolioCategory,
  PortfolioCard,
} from "@/data/site";

/* ─── FILTERS ─────────────────────────────────────────────── */
const FILTERS: { label: string; value: PortfolioCategory | "all" }[] = [
  { label: "All Work", value: "all" },
  { label: "Video Editing", value: "editing" },
  { label: "Videography", value: "videography" },
  { label: "Cinematography", value: "cinematography" },
  { label: "Animation", value: "animation" },
  { label: "Event Recaps", value: "events" },
  { label: "Creative Direction", value: "direction" },
];

/* ─── PLAY ICON ───────────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="var(--black)">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

/* ─── CARD ─────────────────────────────────────────────── */
function Card({
  card,
  onClick,
}: {
  card: PortfolioCard;
  onClick: (c: PortfolioCard) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetVideo = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    vid.pause();
    vid.currentTime = card.previewStart ?? 0;
  }, [card.previewStart]);

  const handleMouseEnter = useCallback(() => {
    const vid = videoRef.current;
    if (!vid || !card.videoUrl) return;

    vid.currentTime = card.previewStart ?? 0;
    vid.play().catch(() => {});

    timerRef.current = setTimeout(() => {
      resetVideo();
    }, 5000);
  }, [card.videoUrl, card.previewStart, resetVideo]);

  const handleMouseLeave = useCallback(() => {
    resetVideo();
  }, [resetVideo]);

  return (
    <div
      className={`portfolio-card relative overflow-hidden cursor-none group transition-transform duration-500 ${
        card.large ? "md:col-span-2" : ""
      }`}
      style={{ background: "var(--deep-gray)" }}
      onClick={() => onClick(card)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* MEDIA */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: card.large ? "16/9" : "4/3" }}
      >
        <div className={`absolute inset-0 card-pattern-${card.pattern}`} />

        {card.thumbnailSrc && (
          <img
            src={card.thumbnailSrc}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
        )}

        {card.videoUrl && (
          <video
            ref={videoRef}
            src={card.videoUrl}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        )}

        {/* overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(0,0,0,0.45)" }}
        />

        {/* play */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          <div
            className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
            style={{ background: "rgba(232,98,42,0.9)" }}
          >
            <PlayIcon />
          </div>
        </div>
      </div>

      {/* CAPTION */}
      <div className="p-5 min-h-[80px] flex flex-col justify-end">
        <p
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "var(--cream)",
          }}
        >
          {card.title}
        </p>
        <p style={{ fontSize: "0.72rem", color: "var(--dim-text)" }}>
          {card.sub}
        </p>
      </div>
    </div>
  );
}

/* ─── MODAL ─────────────────────────────────────────────── */
function Modal({
  card,
  onClose,
}: {
  card: PortfolioCard;
  onClose: () => void;
}) {
  const isEmbed =
    card.videoUrl &&
    (card.videoUrl.includes("youtube.com/embed") ||
      card.videoUrl.includes("player.vimeo.com"));

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <div
        className="w-[90vw] max-w-[1000px]"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "var(--deep-gray)" }}
      >
        <div style={{ aspectRatio: "16/9" }}>
          {isEmbed ? (
            <iframe
              className="w-full h-full"
              src={`${card.videoUrl}?autoplay=1&rel=0`}
              allow="autoplay; fullscreen"
            />
          ) : (
            <video
              className="w-full h-full object-contain"
              src={card.videoUrl}
              controls
              autoPlay
            />
          )}
        </div>

        <div className="p-5">
          <p
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--cream)",
            }}
          >
            {card.title}
          </p>
          <p style={{ color: "var(--dim-text)", fontSize: "0.8rem" }}>
            {card.sub}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN ─────────────────────────────────────────────── */
export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] =
    useState<PortfolioCategory | "all">("all");

  const [modal, setModal] = useState<PortfolioCard | null>(null);

  const visible = PORTFOLIO_SECTIONS.filter(
    (s) => activeFilter === "all" || s.category === activeFilter
  );

  return (
    <>
      <section
        id="portfolio"
        className="px-[8vw] py-[120px]"
        style={{ background: "var(--black)" }}
      >
        {/* HEADER */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="block w-8 h-px bg-[var(--orange)]" />
          <span
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--orange)",
            }}
          >
            Portfolio
          </span>
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem,5vw,5rem)",
            color: "var(--cream)",
          }}
        >
          SELECTED WORK
        </h2>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2 my-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className="px-4 py-2 text-xs uppercase border"
              style={{
                background:
                  activeFilter === f.value ? "var(--orange)" : "transparent",
                color:
                  activeFilter === f.value ? "black" : "var(--off-white)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* GROUPED SECTIONS (RESTORED PROPERLY) */}
        {visible.map((section) => (
          <div key={section.category} className="mb-20">
            {/* SECTION HEADER (RESTORED STYLE) */}
            <div className="flex items-center gap-6 mb-6 pb-4 border-b border-white/10">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--cream)",
                }}
              >
                {section.name}
              </span>

              <span style={{ color: "var(--orange)" }}>
                {section.count}
              </span>

              <div className="flex flex-wrap gap-2 ml-auto">
                {section.subs.map((sub) => (
                  <span
                    key={sub}
                    className="px-2 py-0.5 text-[0.62rem] uppercase border"
                    style={{
                      fontFamily: "var(--font-head)",
                      color: "var(--dim-text)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-start">
              {section.cards.map((card, i) => (
                <Card
                  key={card.id}
                  card={{ ...card, large: i === 0 }}
                  onClick={setModal}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {modal && <Modal card={modal} onClose={() => setModal(null)} />}
    </>
  );
}