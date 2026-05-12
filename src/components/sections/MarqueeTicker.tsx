import { MARQUEE_ITEMS } from "@/data/site";

export default function MarqueeTicker() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="overflow-hidden border-t border-b border-white/[0.05]"
      style={{ background: "rgba(232,98,42,0.03)", padding: 0 }}
    >
      <div
        className="flex"
        style={{ animation: "marqueeScroll 25s linear infinite", whiteSpace: "nowrap" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--dim-text)",
              padding: "18px 48px",
            }}
          >
            {item}
            <span style={{ color: "var(--orange)", margin: "0 16px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
