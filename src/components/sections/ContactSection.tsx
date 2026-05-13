"use client";

import { useState } from "react";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSent(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setTimeout(() => {
          setLoading(false);
          setSent(true);
        }, 1200);

        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setLoading(false);
        alert("Failed to send message");
      }
    } catch (error) {
      setLoading(false);
      alert("Something went wrong");
    }
  };

  return (
    <section className="bg-[var(--black)] px-4 md:px-[6vw] py-20 md:py-28">
      
      {/* HEADER (matches portfolio style) */}
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-px bg-[var(--orange)]" />
        <span className="text-[11px] tracking-[0.45em] uppercase text-[var(--orange)] font-medium">
          Contact
        </span>
      </div>

      <h2
        className="mb-10"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.2rem,6vw,5.5rem)",
          letterSpacing: "-0.02em",
          lineHeight: 0.95,
          color: "var(--cream)",
        }}
      >
        LET’S WORK
      </h2>

      {/* FORM CONTAINER */}
      <div className="max-w-3xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">

          {/* INPUTS */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full bg-transparent
              border border-white/10
              px-4 py-3 md:py-4
              text-[var(--cream)]
              placeholder:text-white/30
              focus:outline-none focus:border-[var(--orange)]
              transition
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="
              w-full bg-transparent
              border border-white/10
              px-4 py-3 md:py-4
              text-[var(--cream)]
              placeholder:text-white/30
              focus:outline-none focus:border-[var(--orange)]
              transition
            "
          />

          {/* SELECT */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="
              w-full bg-transparent
              border border-white/10
              px-4 py-3 md:py-4
              text-[var(--cream)]
              focus:outline-none focus:border-[var(--orange)]
              transition
            "
          >
            <option value="" className="bg-black">
              Select Service
            </option>
            <option value="Video Editing" className="bg-black">
              Video Editing
            </option>
            <option value="Videography" className="bg-black">
              Videography
            </option>
            <option value="Cinematography" className="bg-black">
              Cinematography
            </option>
            <option value="Infographics Animation" className="bg-black">
              Infographics Animation
            </option>
            <option value="Event Recap" className="bg-black">
              Event Recap
            </option>
            <option value="Creative Directing" className="bg-black">
              Creative Directing
            </option>
          </select>

          {/* TEXTAREA */}
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="
              w-full bg-transparent
              border border-white/10
              px-4 py-3 md:py-4
              text-[var(--cream)]
              placeholder:text-white/30
              focus:outline-none focus:border-[var(--orange)]
              transition resize-none
            "
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              mt-2 md:mt-4
              px-6 py-3 md:py-4
              border border-[var(--orange)]
              text-[11px] tracking-[0.3em] uppercase
              text-[var(--cream)]
              hover:bg-[var(--orange)] hover:text-black
              transition
              w-full md:w-fit
            "
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </span>
            ) : sent ? (
              "Sent ✓"
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}