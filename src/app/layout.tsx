import type { Metadata } from "next";
import { Bebas_Neue, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tino Akpotu — Visual Storyteller",
  description:
    "All-round video specialist crafting cinematic experiences. Video editing, videography, cinematography, event recaps & creative direction from Lagos.",
  keywords: [
    "video editor",
    "videographer",
    "cinematographer",
    "Lagos",
    "Nigeria",
    "visual storyteller",
    "Tino Akpotu",
  ],
  openGraph: {
    title: "Tino Akpotu — Visual Storyteller",
    description:
      "Crafting cinematic visual experiences from Lagos to the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${syne.variable} ${dmSans.variable} font-body bg-black text-cream overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
