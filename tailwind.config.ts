import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#080a0c",
        charcoal: "#111418",
        "deep-gray": "#1a1e24",
        "mid-gray": "#252b34",
        "muted-blue": "#1c2a3a",
        steel: "#2e3d4f",
        orange: {
          DEFAULT: "#e8622a",
          glow: "rgba(232, 98, 42, 0.15)",
          soft: "rgba(232, 98, 42, 0.4)",
        },
        "neon-blue": "#4fc3f7",
        cream: "#f0ece6",
        "off-white": "#b8b0a6",
        "dim-text": "#6b7280",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        head: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
        widest4: "0.4em",
      },
      animation: {
        "marquee-scroll": "marqueeScroll 25s linear infinite",
        "orb-float-1": "orbFloat 8s ease-in-out infinite",
        "orb-float-2": "orbFloat 8s ease-in-out infinite 3s",
        "rotate-slow": "rotateSlow 12s linear infinite",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "load-bar": "loadBar 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marqueeScroll: {
          to: { transform: "translateX(-50%)" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(20px, -30px)" },
          "66%": { transform: "translate(-15px, 20px)" },
        },
        rotateSlow: {
          to: { transform: "rotate(360deg)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.15)" },
        },
        fadeIn: {
          to: { opacity: "1" },
        },
        slideUp: {
          to: { transform: "translateY(0)" },
        },
        loadBar: {
          to: { width: "100%" },
        },
      },
      transitionTimingFunction: {
        "ease-out-custom": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-in-out-custom": "cubic-bezier(0.83, 0, 0.17, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
