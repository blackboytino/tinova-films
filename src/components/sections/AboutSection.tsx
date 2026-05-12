import { SKILLS } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="about" className="px-[8vw] py-[120px]" style={{ background: "var(--charcoal)" }}>
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
        Profile
      </div>

      <div
        className="grid gap-[80px] mt-15 items-center"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Visual */}
        <div className="reveal relative" style={{ maxWidth: 420 }}>
          <div
            className="relative w-full"
            style={{ aspectRatio: "3/4" }}
          >
            {/* Placeholder frame */}
            <div
              className="w-full h-full flex items-center justify-center relative overflow-hidden"
              style={{ background: "var(--deep-gray)" }}
            >
              <img

    src="https://res.cloudinary.com/dhbt8jcpg/image/upload/v1778618847/tinova_itrb1b.jpg"

    alt="Tino Akpotu Logo"

    className="w-full h-full object-cover opacity-90"

  />

  {/* Corner decorations */}
              <div className="about-corner tl" />
              <div className="about-corner br" />
            </div>

            {/* Tag */}
            <div
              className="absolute bottom-[-16px] right-[-16px] px-4 py-2 text-xs tracking-[0.15em] uppercase"
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

        {/* Text */}
        <div>
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
            ABSOLUTE 
           
            <span style={{ color: "var(--orange)" }}> CINEMA</span>
          </h2>

          <p
            className="reveal"
            style={{
              color: "var(--off-white)",
              fontSize: "1rem",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: 16,
              maxWidth: 480,
            }}
          >
            I&apos;m Tino Akpotu, an all-round video specialist with a passion for creative
            visual storytelling. From the raw energy of live events to the quiet intensity
            of cinematic narratives, I craft visuals that don&apos;t just show a moment,
            they make you feel it.
          </p>

          <p
            className="reveal"
            style={{
              color: "var(--off-white)",
              fontSize: "1rem",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: 32,
              maxWidth: 480,
            }}
          >
            With deep roots in nightlife culture, live events, and digital content, I bring
            a unique lens that blends technical precision with artistic instinct.
          </p>

          {/* Skills */}
          <div className="reveal flex flex-wrap gap-2 mb-10">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs tracking-[0.1em] uppercase border rounded-[2px]"
                style={{
                  fontFamily: "var(--font-head)",
                  color: "var(--off-white)",
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="reveal inline-block btn-primary-shimmer relative overflow-hidden bg-[var(--orange)] text-[var(--black)] px-9 py-[14px] rounded-[2px] no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_var(--orange-soft)] cursor-none"
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "0.85rem",
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
