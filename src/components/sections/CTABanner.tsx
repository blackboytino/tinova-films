import { CTA_STATS } from "@/data/site";

export default function CTABanner() {
  return (
    <div
      className="px-[8vw] py-20 flex flex-wrap gap-16 items-center border-t border-b border-white/[0.04]"
      style={{
        background: `linear-gradient(135deg,
          rgba(232,98,42,0.12) 0%,
          rgba(8,10,12,0) 30%,
          rgba(8,10,12,0) 70%,
          rgba(79,195,247,0.06) 100%
        )`,
      }}
    >
      {/* Stats */}
      <div className="flex gap-16 flex-wrap">
        {CTA_STATS.map((stat) => (
          <div key={stat.label}>
            <div
              className="leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                color: "var(--cream)",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: "var(--orange)" }}>{stat.num}</span>
              {stat.suffix}
            </div>
            <div
              className="mt-1.5"
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "0.72rem",
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

      {/* CTA text */}
      <div className="flex-1 min-w-[260px]">
        <h3
          className="mb-5"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
            color: "var(--cream)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
          }}
        >
          READY TO CREATE
          <br />
          SOMETHING{" "}
          <span style={{ color: "var(--orange)" }}>GREAT?</span>
        </h3>
        <a
          href="#contact"
          className="inline-block btn-primary-shimmer relative overflow-hidden bg-[var(--orange)] text-[var(--black)] px-9 py-[14px] rounded-[2px] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_var(--orange-soft)] cursor-none"
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Start a Project →
        </a>
      </div>
    </div>
  );
}
