"use client";

import { useState } from "react";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/data/site";

/* ================= ICONS ================= */

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M22 5.8c-.7.3-1.4.5-2.2.6a3.8 3.8 0 001.7-2.1c-.8.5-1.7.8-2.6 1a3.8 3.8 0 00-6.5 3.5A10.8 10.8 0 013 4.9a3.8 3.8 0 001.2 5 3.7 3.7 0 01-1.7-.5v.1a3.8 3.8 0 003 3.7c-.5.1-1 .2-1.5.1.4 1.5 1.9 2.6 3.5 2.6A7.7 7.7 0 012 17.5 10.8 10.8 0 007.8 19c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.4-1.2 1.9-1.9z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M4 3a2 2 0 100 4 2 2 0 000-4zm0 5H2v14h4V8H4zm7 0H7v14h4v-7c0-2 3-2.2 3 0v7h4v-8c0-5-5.5-4.8-7-2.3V8z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M16 3c.5 2.8 2.3 4.5 5 5v3.2c-1.9 0-3.6-.6-5-1.6V16c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7 0 1 .1v3.3c-.3-.1-.7-.2-1-.2-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V3h3z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ================= ICON MAP ================= */

const iconMap: Record<string, React.ReactNode> = {
  mail: <MailIcon />,
  phone: <PhoneIcon />,
  "map-pin": <MapPinIcon />,
  instagram: <InstagramIcon />,
  twitter: <TwitterIcon />,
  linkedin: <LinkedInIcon />,
  tiktok: <TikTokIcon />,
};

/* ================= COMPONENT ================= */

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

 const handleSubmit = async () => {
  try {
    setSubmitted(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setForm({ name: "", email: "", service: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  } catch (err) {
    console.error(err);
    setSubmitted(false);
  }
};

  return (
    <section id="contact" className="px-[8vw] py-[120px]" style={{ background: "var(--black)" }}>
      
      {/* LABEL */}
      <div
        className="flex items-center gap-3 mb-4"
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "0.7rem",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "var(--orange)",
        }}
      >
        <span className="block w-8 h-px" style={{ background: "var(--orange)" }} />
        Contact
      </div>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 5rem)",
          lineHeight: 0.95,
          color: "var(--cream)",
          marginBottom: 20,
        }}
      >
        LET&apos;S CREATE <br />
        <span style={{ color: "var(--orange)" }}>TOGETHER</span>
      </h2>

      <div className="grid gap-[80px] mt-16" style={{ gridTemplateColumns: "1fr 1fr" }}>
        
        {/* LEFT */}
        <div>
          <p style={{ color: "var(--off-white)", lineHeight: 1.8, marginBottom: 40 }}>
            Ready to bring your vision to life? Let’s talk.
          </p>

          {/* CONTACT DETAILS */}
          <div className="flex flex-col gap-4 mb-10">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ background: "var(--deep-gray)", color: "var(--orange)" }}
                >
                  {iconMap[detail.icon]}
                </div>
                <a href={detail.href} style={{ color: "var(--off-white)" }}>
                  {detail.value}
                </a>
              </div>
            ))}
          </div>

          {/* SOCIALS */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border rounded-[2px]"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "var(--off-white)",
                }}
              >
                {iconMap[social.platform]}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="form-input-custom mb-4"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="form-input-custom mb-4"
          />

          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="form-input-custom mb-4"
          >
            <option value="">Select service</option>
            <option>Video Editing</option>
            <option>Videography</option>
            <option>Cinematography</option>
          </select>

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="form-input-custom mb-6"
            style={{ minHeight: 140 }}
          />

          <button
            onClick={handleSubmit}
            className="w-full py-4"
            style={{
              background: submitted ? "#2e7d32" : "var(--orange)",
              color: "black",
              fontWeight: 700,
            }}
          >
            {submitted ? "Message Sent ✓" : "Send Message →"}
          </button>
        </div>
      </div>
    </section>
  );
}