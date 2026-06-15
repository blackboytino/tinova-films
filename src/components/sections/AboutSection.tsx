import { SKILLS } from "@/data/site";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-4 md:px-[8vw] py-16 md:py-[120px]"
      style={{ background: "var(--charcoal)" }}
    >
      {/* LABEL */}
      <div
        className="flex items-center gap-3 mb-4"
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "0.65rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "var(--orange)",
        }}
      >
        <span className="block w-6 md:w-8 h-px bg-[var(--orange)]" />
        Profile
      </div>

      {/* MOBILE STACK / DESKTOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[80px] items-start md:items-center mt-8">
        {/* IMAGE */}
        <div className="relative w-full max-w-[360px] md:max-w-[420px] mx-auto md:mx-0">
          <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
            <div
              className="w-full h-full relative overflow-hidden"
              style={{ background: "var(--deep-gray)" }}
            >
              <img
                src="https://ik.imagekit.io/afdjudxv6/tinova.JPG"
                alt="Tino Akpotu"
                className="w-full h-full object-cover opacity-90"
              />

              {/* Corner decorations */}
              <div className="about-corner tl" />
              <div className="about-corner br" />
            </div>

            {/* TAG (mobile repositioned) */}
            <div
              className="
                absolute
                -bottom-3
                right-2
                md:-bottom-4
                md:-right-4
                px-3 md:px-4
                py-1.5 md:py-2
                text-[10px] md:text-xs
                tracking-[0.15em]
                uppercase
              "
              style={{
                background: "var(--orange)",
                color: "var(--black)",
                fontFamily: "var(--font-head)",
                fontWeight: 700,
              }}
            >
              Open for Projects
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,6vw,5rem)",
              lineHeight: 0.95,
              color: "var(--cream)",
              marginBottom: 16,
            }}
          >
            ABSOLUTE <span style={{ color: "var(--orange)" }}>CINEMA</span>
          </h2>

          <p
            style={{
              color: "var(--off-white)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              marginBottom: 14,
              maxWidth: 520,
              marginInline: "auto",
            }}
          >
            I&apos;m Tino Akpotu, an all-round video specialist with a passion for creative
            visual storytelling. From live events to cinematic narratives, I craft visuals
            that make you feel the moment.
          </p>

          <p
            style={{
              color: "var(--off-white)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              marginBottom: 26,
              maxWidth: 520,
              marginInline: "auto",
              opacity: 0.9,
            }}
          >
            With deep roots in nightlife culture and digital content, I blend technical
            precision with artistic instinct.
          </p>

          {/* SKILLS (mobile scroll feel) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-[10px] md:text-xs uppercase border"
                style={{
                  fontFamily: "var(--font-head)",
                  color: "var(--off-white)",
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  letterSpacing: "0.08em",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block bg-[var(--orange)] text-[var(--black)] px-7 py-3 md:px-9 md:py-[14px] no-underline transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Work With Me
          </a>
        </div>
      </div>
    </section>
  );
}