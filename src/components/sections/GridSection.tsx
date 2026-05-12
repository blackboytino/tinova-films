export default function GridSection() {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section
      id="grid-section"
      className="py-20"
      style={{ background: "var(--charcoal)", padding: "80px 0" }}
    >
      <div className="px-[8vw] pb-10 text-center">
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
          Visual Feed
          <span className="block w-8 h-px" style={{ background: "var(--orange)" }} />
        </div>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 4rem)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            color: "var(--cream)",
          }}
        >
          FRAMES FROM THE FIELD
        </h2>
      </div>

      {/* Grid */}
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
      >
        {items.map((i) => (
          <div
            key={i}
            className={`gi-${i} grid-item relative overflow-hidden cursor-none group ${
              i === 1 || i === 6 ? "col-span-2 row-span-2" : ""
            }`}
            style={{ aspectRatio: 1 }}
          >
            <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.08]" />
            {/* Overlay */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(8,10,12,0.7)" }}
            >
              <span
                className="text-[0.7rem] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-head)", color: "var(--orange)" }}
              >
                View
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
