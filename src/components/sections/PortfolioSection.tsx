"use client";

import { useRef, useState, useCallback } from "react";
import {
  PORTFOLIO_SECTIONS,
  PortfolioCategory,
  PortfolioCard,
} from "@/data/site";

/* ───────────────────────────────────────────── */
/* FILTERS */
/* ───────────────────────────────────────────── */

const FILTERS: { label: string; value: PortfolioCategory | "all" }[] = [
  { label: "All Work", value: "all" },
  { label: "Video Editing", value: "editing" },
  { label: "Videography", value: "videography" },
  { label: "Cinematography", value: "cinematography" },
  { label: "Animation", value: "animation" },
  { label: "Event Recaps", value: "events" },
  { label: "Creative Direction", value: "direction" },
];

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
/* CARD */
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
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetVideo = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    vid.pause();
    vid.currentTime = card.previewStart ?? 0;
  }, [card.previewStart]);

  const handleMouseEnter = useCallback(() => {
    if (mobile) return;

    const vid = videoRef.current;
    if (!vid || !card.videoUrl) return;

    vid.currentTime = card.previewStart ?? 0;
    vid.play().catch(() => {});

    timerRef.current = setTimeout(() => {
      resetVideo();
    }, 5000);
  }, [card.videoUrl, card.previewStart, resetVideo, mobile]);

  const handleMouseLeave = useCallback(() => {
    if (mobile) return;
    resetVideo();
  }, [resetVideo, mobile]);

  return (
    <div
      className={`
        relative overflow-hidden bg-[var(--deep-gray)]
        transition-all duration-500 group cursor-pointer
        ${!mobile ? "hover:scale-[1.01]" : ""}
        ${card.large && !mobile ? "col-span-2" : ""}
      `}
      onClick={() => onClick(card)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* MEDIA */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: mobile ? "4/5" : card.large ? "16/9" : "4/3",
        }}
      >
        <div className={`absolute inset-0 card-pattern-${card.pattern}`} />

        {card.thumbnailSrc && (
          <img
            src={card.thumbnailSrc}
            alt={card.title}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-500
              ${mobile ? "" : "group-hover:opacity-0"}
            `}
          />
        )}

        {card.videoUrl && (
          <video
            ref={videoRef}
            src={card.videoUrl}
            muted
            playsInline
            autoPlay={mobile}
            loop={mobile}
            preload="metadata"
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-500
              ${mobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
            `}
          />
        )}

        <div
          className={`
            absolute inset-0 transition-all duration-500
            ${mobile ? "opacity-40" : "opacity-0 group-hover:opacity-100"}
          `}
          style={{ background: "rgba(0,0,0,0.45)" }}
        />

        <div
          className={`
            absolute inset-0 flex items-center justify-center
            transition-all duration-500
            ${mobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        >
          <div
            className="w-[52px] h-[52px] rounded-full flex items-center justify-center backdrop-blur-md"
            style={{ background: "rgba(232,98,42,0.92)" }}
          >
            <PlayIcon />
          </div>
        </div>
      </div>

      {/* CAPTION (mobile tightened) */}
      <div
        className={`
          flex flex-col justify-end
          ${mobile ? "p-3 min-h-[72px]" : "p-5 min-h-[95px]"}
        `}
      >
        <p
          style={{
            fontFamily: "var(--font-head)",
            color: "var(--cream)",
            fontSize: mobile ? "0.95rem" : "0.95rem",
            fontWeight: 600,
          }}
        >
          {card.title}
        </p>

        <p
          style={{
            color: "var(--dim-text)",
            fontSize: mobile ? "0.75rem" : "0.72rem",
            marginTop: "2px",
          }}
        >
          {card.sub}
        </p>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────── */
/* MODAL */
/* ───────────────────────────────────────────── */

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
      className="fixed inset-0 z-[3000] bg-black/90 flex items-center justify-center p-3 md:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[1100px] bg-[var(--deep-gray)] overflow-hidden rounded-xl md:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full" style={{ aspectRatio: "16/9" }}>
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

        <div className="p-4 md:p-6">
          <p
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--cream)",
              fontSize: "clamp(1rem,3vw,1.6rem)",
            }}
          >
            {card.title}
          </p>

          <p
            style={{
              color: "var(--dim-text)",
              marginTop: "6px",
              fontSize: "0.8rem",
            }}
          >
            {card.sub}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────── */
/* MAIN */
/* ───────────────────────────────────────────── */

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] =
    useState<PortfolioCategory | "all">("all");

  const [modal, setModal] = useState<PortfolioCard | null>(null);

  const visible = PORTFOLIO_SECTIONS.filter(
    (section) => activeFilter === "all" || section.category === activeFilter
  );

  return (
    <>
      <section
        id="portfolio"
        className="bg-[var(--black)] px-4 md:px-[6vw] py-12 md:py-28"
      >
        {/* HEADER (mobile tightened) */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-6 md:w-8 h-px bg-[var(--orange)]" />
          <span
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--orange)",
            }}
          >
            Portfolio
          </span>
        </div>

        <h2
          className="leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem,7vw,5.5rem)",
            color: "var(--cream)",
          }}
        >
          SELECTED WORK
        </h2>

        {/* FILTERS */}
        <div className="flex gap-2 overflow-x-auto py-6 scrollbar-hide">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className="shrink-0 px-3 py-2 uppercase border text-[10px] md:text-xs"
              style={{
                background:
                  activeFilter === filter.value
                    ? "var(--orange)"
                    : "transparent",
                color:
                  activeFilter === filter.value
                    ? "black"
                    : "var(--off-white)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* SECTIONS */}
        {visible.map((section) => (
          <div key={section.category} className="mb-14 md:mb-24">
            {/* SECTION HEADER (mobile stacked cleaner) */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 border-b border-white/10 pb-3 mb-5">
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--cream)",
                    fontSize: "1rem",
                  }}
                >
                  {section.name}
                </span>

                <span style={{ color: "var(--orange)" }}>
                  {section.count}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 md:ml-auto">
                {section.subs.map((sub) => (
                  <span
                    key={sub}
                    className="px-2 py-1 border uppercase text-[0.6rem]"
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

            {/* MOBILE (SWIPE CAROUSEL) */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide">
                {section.cards.map((card) => (
                  <div key={card.id} className="min-w-[88%] snap-center">
                    <Card card={{ ...card, large: false }} onClick={setModal} mobile />
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-3 gap-4 items-start">
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