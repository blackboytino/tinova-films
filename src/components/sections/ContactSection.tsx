"use client";

import { useState } from "react";
import { SOCIAL_LINKS } from "@/data/site";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setTimeout(() => {
          setLoading(false);
          setSent(true);
        }, 1200);
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setLoading(false);
        alert("Failed to send message");
      }
    } catch {
      setLoading(false);
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="bg-[var(--black)] px-[8vw] py-24">

      {/* ── Section label ── */}
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-px bg-[var(--orange)]" />
        <span
          className="text-[11px] tracking-[0.45em] uppercase text-[var(--orange)]"
          style={{ fontFamily: "var(--font-head)" }}
        >
          Contact
        </span>
      </div>

      {/* ── Heading ── */}
      <h2
        className="mb-16"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
          lineHeight: 0.9,
          letterSpacing: "0.02em",
          color: "var(--cream)",
        }}
      >
        LET&apos;S CREATE
        <br />
        <span style={{ color: "var(--orange)" }}>TOGETHER</span>
      </h2>

      {/* ── Two-column layout ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* ── LEFT: info ── */}
        <div className="flex flex-col gap-10">
          <p
            className="text-[var(--off-white)] leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 300 }}
          >
            Ready to bring your vision to life? Let&apos;s talk.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--deep-gray)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <a
                href="mailto:ogagaakpotu@gmail.com"
                className="text-[var(--off-white)] hover:text-[var(--orange)] transition-colors duration-300 no-underline"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
              >
                ogagaakpotu@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--deep-gray)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span
                className="text-[var(--off-white)]"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
              >
                Lagos, Nigeria
              </span>
            </div>
          </div>

          {/* Social icons */}
       <div className="flex gap-3">
{[
{
label: "Instagram",
href: SOCIAL_LINKS.find((s) => s.platform === "instagram")?.href || "#",
icon: (
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
<circle cx="12" cy="12" r="4"/>
<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
</svg>
),
},
{
label: "Twitter",
href: SOCIAL_LINKS.find((s) => s.platform === "twitter")?.href || "#",
icon: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
</svg>
),
},
{
label: "LinkedIn",
href: SOCIAL_LINKS.find((s) => s.platform === "linkedin")?.href || "#",
icon: (
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
<rect x="2" y="9" width="4" height="12"/>
<circle cx="4" cy="4" r="2"/>
</svg>
),
},
{
label: "TikTok",
href: SOCIAL_LINKS.find((s) => s.platform === "tiktok")?.href || "#",
icon: (
<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
<path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.2 8.2 0 004.79 1.52V6.82a4.85 4.85 0 01-1.02-.13z"/>
</svg>
),
},
].map((s) => (
<a
key={s.label}
href={s.href}
target="_blank"
rel="noopener noreferrer"
aria-label={s.label}
className="w-10 h-10 border border-white/10 flex items-center justify-center text-[var(--off-white)] hover:border-[var(--orange)] hover:text-[var(--orange)] transition-all duration-300 no-underline"
>
{s.icon}
</a>
))}
</div>
        </div>

        {/* ── RIGHT: form ── */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[var(--deep-gray)] border-0 px-5 py-4 text-[var(--cream)] placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[var(--orange)] transition"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[var(--deep-gray)] border-0 px-5 py-4 text-[var(--cream)] placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[var(--orange)] transition"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-[var(--deep-gray)] border-0 px-5 py-4 text-[var(--cream)] focus:outline-none focus:ring-1 focus:ring-[var(--orange)] transition appearance-none"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
          >
            <option value="" style={{ background: "var(--deep-gray)" }}>Select service</option>
            <option value="Video Editing" style={{ background: "var(--deep-gray)" }}>Video Editing</option>
            <option value="Videography" style={{ background: "var(--deep-gray)" }}>Videography</option>
            <option value="Cinematography" style={{ background: "var(--deep-gray)" }}>Cinematography</option>
            <option value="Infographics Animation" style={{ background: "var(--deep-gray)" }}>Infographics Animation</option>
            <option value="Event Recap" style={{ background: "var(--deep-gray)" }}>Event Recap</option>
            <option value="Creative Directing" style={{ background: "var(--deep-gray)" }}>Creative Directing</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full bg-[var(--deep-gray)] border-0 px-5 py-4 text-[var(--cream)] placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[var(--orange)] transition resize-none"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 border-0 font-bold tracking-[0.15em] uppercase transition-all duration-300 disabled:opacity-60"
            style={{
              background: sent ? "#2e7d32" : "var(--orange)",
              color: "var(--black)",
              fontFamily: "var(--font-head)",
              fontSize: "0.85rem",
            }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Sending...
              </span>
            ) : sent ? (
              "Message Sent ✓"
            ) : (
              "Send Message →"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
