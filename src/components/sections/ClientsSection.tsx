import { CLIENTS } from "@/data/site";

export default function ClientsSection() {
  return (
    <section id="clients" className="px-[8vw] py-[120px] text-center" style={{ background: "var(--black)" }}>
      <div
        className="reveal flex items-center justify-center gap-3 mb-4"
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "0.7rem",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "var(--orange)",
        }}
      >
        <span className="block w-8 h-px" style={{ background: "var(--orange)" }} />
        Clients
        <span className="block w-8 h-px" style={{ background: "var(--orange)" }} />
      </div>
      <h2
        className="reveal"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 5rem)",
          lineHeight: 0.95,
          letterSpacing: "0.02em",
          color: "var(--cream)",
          marginBottom: 12,
        }}
      >
        TRUSTED BY
      </h2>
      <p
        className="reveal text-sm tracking-[0.1em] mb-16"
        style={{ color: "var(--dim-text)", letterSpacing: "0.1em" }}
      >
        Brands that trusted the vision
      </p>

      <div
        className="reveal grid gap-[2px]"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
      >
        {CLIENTS.map((client) => (
          <div
            key={client}
            className="brand-cell relative overflow-hidden flex items-center justify-center transition-all duration-300 group cursor-none"
            style={{ aspectRatio: "2/1", background: "var(--charcoal)" }}
          >
            {/* Glow overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: "var(--orange-glow)" }}
            />
            <span
              className="relative z-[1] transition-colors duration-300 group-hover:text-[var(--orange)]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--dim-text)",
              }}
            >
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
