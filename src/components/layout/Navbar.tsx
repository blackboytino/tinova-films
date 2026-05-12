"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[800] flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(8,10,12,0.92)] backdrop-blur-[20px] py-4 px-12 border-b border-white/[0.04]"
            : "py-6 px-12"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 text-cream no-underline"
          style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", letterSpacing: "0.15em" }}
        >
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--orange)] inline-block" />
          TINO AKPOTU
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="nav-link-item bg-transparent border-0 cursor-none"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA (desktop) */}
        <button
          onClick={() => scrollTo("#contact")}
          className="hidden md:block bg-[var(--orange)] text-[var(--black)] px-5 py-2 rounded-[2px] text-[0.78rem] font-bold tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[#ff7440] hover:scale-105 cursor-none"
          style={{ fontFamily: "var(--font-head)" }}
        >
          Hire Me
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex md:hidden flex-col gap-[5px] p-1 bg-transparent border-0"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-cream transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-x-[1px] translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-cream transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-cream transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 translate-x-[1px] -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[750] bg-[rgba(8,10,12,0.97)] backdrop-blur-[30px] flex flex-col items-center justify-center gap-12">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="bg-transparent border-0 text-[var(--off-white)] hover:text-[var(--orange)] transition-colors duration-300"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                letterSpacing: "0.1em",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-4 bg-[var(--orange)] text-[var(--black)] px-8 py-3 rounded-[2px] text-sm font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-head)" }}
          >
            Hire Me
          </button>
        </div>
      )}
    </>
  );
}
