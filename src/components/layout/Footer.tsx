import { NAV_LINKS, SERVICES } from "@/data/site";

const FOOTER_SERVICES = SERVICES.map((s) => s.name);

export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.04] px-[8vw] pt-15 pb-10"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="flex flex-wrap justify-between items-start gap-10 pb-10 mb-10 border-b border-white/[0.04]">
        {/* Brand */}
        <div>
          <a
            href="#hero"
            className="block mb-3 no-underline"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              letterSpacing: "0.15em",
              color: "var(--cream)",
            }}
          >
            TINO AKPOTU
          </a>
          <p className="text-sm max-w-[280px] leading-relaxed" style={{ color: "var(--dim-text)" }}>
            Visual storyteller crafting cinematic experiences from Lagos to the world.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-15">
          <div>
            <h4
              className="text-[0.7rem] tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "var(--font-head)", color: "var(--orange)" }}
            >
              Navigate &nbsp;
            </h4>
            <ul className="list-none flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.88rem] no-underline transition-colors duration-300 hover:text-cream"
                    style={{ color: "var(--dim-text)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[0.7rem] tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "var(--font-head)", color: "var(--orange)" }}
            >  Services</h4>
            <ul className="list-none flex flex-col gap-2">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#portfolio"
                    className="text-[0.88rem] no-underline transition-colors duration-300 hover:text-cream"
                    style={{ color: "var(--dim-text)" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[0.7rem] tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "var(--font-head)", color: "var(--orange)" }}
            >
              Connect
            </h4>
            <ul className="list-none flex flex-col gap-2">
              {["Instagram", "YouTube", "TikTok", "LinkedIn"].map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    className="text-[0.88rem] no-underline transition-colors duration-300 hover:text-cream"
                    style={{ color: "var(--dim-text)" }}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4">
        <p className="text-[0.78rem]" style={{ color: "var(--dim-text)" }}>
          © 2026 Tino Akpotu. Designed &amp; built with{" "}
          <span style={{ color: "var(--orange)" }}>Next.js</span> 
        </p>
        <p className="text-[0.78rem]" style={{ color: "var(--dim-text)" }}>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
