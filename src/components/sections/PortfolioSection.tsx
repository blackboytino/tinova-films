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
    <svg
      viewBox="0 0 24 24"
      className="w-[18px] h-[18px]"
      fill="var(--black)"
    >
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
      className={`
        portfolio-card
        relative
        overflow-hidden
        cursor-pointer
        group
        transition-all
        duration-500
        hover:scale-[1.01]
        ${card.large ? "lg:col-span-2" : ""}
      `}
      style={{
        background: "var(--deep-gray)",
      }}
      onClick={() => onClick(card)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* MEDIA */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: card.large ? "16/9" : "4/5",
        }}
      >
        {/* PATTERN */}
        <div className={`absolute inset-0 card-pattern-${card.pattern}`} />

        {/* THUMBNAIL */}
        {card.thumbnailSrc && (
          <img
            src={card.thumbnailSrc}
            alt={card.title}
            className="
              absolute inset-0
              w-full h-full
              object-cover
              transition-opacity
              duration-500
              md:group-hover:opacity-0
            "
          />
        )}

        {/* VIDEO */}
        {card.videoUrl && (
          <video
            ref={videoRef}
            src={card.videoUrl}
            muted
            playsInline
            preload="metadata"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              opacity-100
              md:opacity-0
              md:group-hover:opacity-100
              transition-all
              duration-500
            "
          />
        )}

        {/* DARK OVERLAY */}
        <div
          className="
            absolute inset-0
            opacity-30
            md:opacity-0
            md:group-hover:opacity-100
            transition-opacity
            duration-500
          "
          style={{
            background: "rgba(0,0,0,0.45)",
          }}
        />

        {/* PLAY BUTTON */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            opacity-100
            md:opacity-0
            md:group-hover:opacity-100
            transition-all
            duration-500
          "
        >
          <div
            className="
              w-[50px] h-[50px]
              md:w-[58px] md:h-[58px]
              rounded-full
              flex items-center justify-center
              backdrop-blur-sm
            "
            style={{
              background: "rgba(232,98,42,0.92)",
            }}
          >
            <PlayIcon />
          </div>
        </div>
      </div>

      {/* CAPTION */}
      <div className="p-4 md:p-5 min-h-[75px] md:min-h-[95px] flex flex-col justify-end">
        <p
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(0.85rem,2vw,1rem)",
            fontWeight: 600,
            color: "var(--cream)",
          }}
        >
          {card.title}
        </p>

        <p
          style={{
            fontSize: "clamp(0.68rem,1.5vw,0.8rem)",
            color: "var(--dim-text)",
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
      className="
        fixed inset-0
        z-[3000]
        flex items-center justify-center
        p-4
      "
      style={{
        background: "rgba(0,0,0,0.94)",
      }}
      onClick={onClose}
    >
      <div
        className="
          w-full
          md:w-[90vw]
          max-w-[1100px]
          rounded-2xl
          overflow-hidden
        "
        style={{
          background: "var(--deep-gray)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* VIDEO */}
        <div
          className="w-full max-h-[85vh]"
          style={{
            aspectRatio: "16/9",
          }}
        >
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

        {/* INFO */}
        <div className="p-4 md:p-6">
          <p
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--cream)",
              fontSize: "clamp(1rem,3vw,1.5rem)",
            }}
          >
            {card.title}
          </p>

          <p
            style={{
              color: "var(--dim-text)",
              fontSize: "clamp(0.75rem,2vw,0.9rem)",
              marginTop: "6px",
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
    (section) =>
      activeFilter === "all" || section.category === activeFilter
  );

  return (
    <>
      <section
        id="portfolio"
        className="
          px-4
          sm:px-6
          md:px-[6vw]
          py-16
          md:py-24
        "
        style={{
          background: "var(--black)",
        }}
      >
        {/* TOP LABEL */}
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

        {/* TITLE */}
        <h2
          className="reveal leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem,8vw,5rem)",
            color: "var(--cream)",
          }}
        >
          SELECTED WORK
        </h2>

        {/* FILTERS */}
        <div
          className="
            flex
            gap-2
            my-8
            overflow-x-auto
            pb-2
            scrollbar-hide
          "
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className="
                shrink-0
                px-4
                py-2
                text-[10px]
                sm:text-xs
                uppercase
                border
                transition-all
                duration-300
              "
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
          <div key={section.category} className="mb-16 md:mb-24">
            {/* SECTION HEADER */}
            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-center
                gap-4
                md:gap-6
                mb-6
                pb-4
                border-b
                border-white/10
              "
            >
              <div className="flex items-center gap-4">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--cream)",
                    fontSize: "clamp(1rem,2vw,1.3rem)",
                  }}
                >
                  {section.name}
                </span>

                <span
                  style={{
                    color: "var(--orange)",
                  }}
                >
                  {section.count}
                </span>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 md:ml-auto">
                {section.subs.map((sub) => (
                  <span
                    key={sub}
                    className="
                      px-2 py-1
                      text-[0.6rem]
                      uppercase
                      border
                    "
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

            {/* GRID */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-3
                md:gap-4
                items-start
              "
            >
              {section.cards.map((card, i) => (
                <Card
                  key={card.id}
                  card={{
                    ...card,
                    large: i === 0,
                  }}
                  onClick={setModal}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {modal && (
        <Modal
          card={modal}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}