"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

          setFormData({
            name: "",
            email: "",
            service: "",
            message: "",
          });
        }, 1200);
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
    <section className="w-full py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-4 rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-4 rounded-lg outline-none"
          />

          <input
            type="text"
            name="service"
            placeholder="Service Needed"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-4 rounded-lg outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full border border-gray-300 p-4 rounded-lg outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black px-6 py-3 rounded-full"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Sending...
              </div>
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