import { SERVICES } from "@/data/site";

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    video: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-full h-full">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    camera: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-full h-full">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    film: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-full h-full">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-full h-full">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    zap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-full h-full">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    eye: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-full h-full">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  };
  return icons[icon] ?? null;
}

export default function ServicesSection() {
  return (
    <section id="services" className="px-[8vw] py-[120px]" style={{ background: "var(--charcoal)" }}>
      {/* Label */}
      <div
        className="reveal flex items-center gap-3 mb-4"
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "0.7rem",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "var(--orange)",
        }}
      >
        <span className="block w-8 h-px" style={{ background: "var(--orange)" }} />
        Services
      </div>
      <h2
        className="reveal"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 5rem)",
          lineHeight: 0.95,
          letterSpacing: "0.02em",
          color: "var(--cream)",
          marginBottom: 20,
        }}
      >
        WHAT I
        <br />
        <span style={{ color: "var(--orange)" }}>BRING</span>
      </h2>

      {/* Grid */}
      <div
        className="grid gap-[2px] mt-16"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {SERVICES.map((service) => (
          <div
            key={service.num}
            className="service-card-bar relative overflow-hidden p-10 transition-all duration-400 hover:-translate-y-1 group"
            style={{ background: "var(--deep-gray)" }}
          >
            {/* Large number */}
            <div
              className="leading-none mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "3.5rem",
                color: "rgba(255,255,255,0.04)",
                letterSpacing: "-0.02em",
              }}
            >
              {service.num}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 mb-5" style={{ color: "var(--orange)" }}>
              <ServiceIcon icon={service.icon} />
            </div>

            {/* Name */}
            <h3
              className="mb-3"
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--cream)",
              }}
            >
              {service.name}
            </h3>

            {/* Desc */}
            <p
              className="mb-5"
              style={{ fontSize: "0.9rem", color: "var(--off-white)", lineHeight: 1.7, fontWeight: 300 }}
            >
              {service.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {service.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-[0.65rem] tracking-[0.1em] uppercase border rounded-[2px]"
                  style={{
                    fontFamily: "var(--font-head)",
                    color: "var(--dim-text)",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Hover background tint */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background: "rgba(255,255,255,0.02)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
