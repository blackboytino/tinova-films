export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_STATS = [
  { num: "5", suffix: "+", label: "Years Experience" },
  { num: "120", suffix: "+", label: "Projects Delivered" },
  { num: "40", suffix: "+", label: "Brands Worked With" },
] as const;

export const SKILLS = [
  "Script Writing",
  "Capcut Pro",
  "Visual StoryTelling",
  "Color Grading",
  "Canva",
  "Live Events",
  "Motion Design",
] as const;

export const MARQUEE_ITEMS = [
  "Video Editing",
  "Cinematography",
  "Videography",
  "Event Coverage",
  "Creative Direction",
  "Color Grading",
  "Motion Design",
  "Infographic Animation",
] as const;

export type PortfolioCategory =
  | "editing"
  | "videography"
  | "cinematography"
  | "animation"
  | "events"
  | "direction";

export interface PortfolioCard {
  id: string;
  title: string;
  sub: string;
  featured?: boolean;
  large?: boolean;
  pattern: 1 | 2 | 3 | 4 | 5 | 6;
  videoUrl?: string;
  thumbnailSrc?: string;
  /** Seconds into videoUrl to begin the 5-second hover preview */
  previewStart?: number;
}

export interface PortfolioSection {
  category: PortfolioCategory;
  name: string;
  count: string;
  subs: string[];
  cards: PortfolioCard[];
}

export const PORTFOLIO_SECTIONS: PortfolioSection[] = [
  {
    category: "editing",
    name: "Video Editing",
    count: "01",
    subs: ["Fast-Paced", "Music Sync", "Cinematic", "Social"],
    cards: [
        {
      id: "ve-1", title: "Product Showcase", sub: "Full day", pattern: 6,videoUrl: "https://ik.imagekit.io/afdjudxv6/Bubus.mov/ik-video.mp4?updatedAt=1780655943772",
        thumbnailSrc: "https://res.cloudinary.com/dhbt8jcpg/image/upload/v1778618763/bubu_thumbnail_bo98bl.png",
        previewStart: 1  
  }, {
      id: "ve-2", title: "FravionX Campaign", sub: "Full day", pattern: 6,videoUrl: "https://ik.imagekit.io/afdjudxv6/Bubus.mov/ik-video.mp4?updatedAt=1780655943772",
        thumbnailSrc: "https://res.cloudinary.com/dhbt8jcpg/image/upload/v1778618763/bubu_thumbnail_bo98bl.png",
        previewStart: 1  
  }

    ],
  },
  {
    category: "videography",
    name: "Videography",
    count: "02",
    subs: ["Live Shooting", "Camera Work", "Events", "BTS"],
    cards: [
      {
        id: "vg-1",
        title: "NYSC Carnival",
        sub: "Single Cam",
        pattern: 4,
        videoUrl: "https://ik.imagekit.io/afdjudxv6/NYSC%20Cultural%20Carnival.mov",
        thumbnailSrc: "https://res.cloudinary.com/dhbt8jcpg/image/upload/v1778618824/carnival_thumbnail_g9oy9r.png",
        previewStart: 14,
      },
      {
        id: "vg-2",
        title: "NYSC Parade",
        sub: "Documentary style",
        large: true,
        pattern: 3,
        videoUrl: "https://ik.imagekit.io/afdjudxv6/NYSC%20Camp%20Recap.mov",
        thumbnailSrc: "https://res.cloudinary.com/dhbt8jcpg/image/upload/v1778618860/Parade_thumbnail_ugzkhn.png",
        previewStart: 14,
      },
    ],
  },
  {
    category: "cinematography",
    name: "Cinematography",
    count: "03",
    subs: ["Cinematic Shots", "Lighting", "Framing", "Film Style"],
    cards: [
      {
        id: "cine-1",
        title: "Ctrl Z — Short Film",
        sub: "Playful Theme",
        featured: true,
        large: true,
        pattern: 1,
         videoUrl: "https://ik.imagekit.io/afdjudxv6/Ctrl%20Z%20-compressed%202.MOV/ik-video.mp4?updatedAt=1780658478845",
        thumbnailSrc: "https://res.cloudinary.com/dhbt8jcpg/image/upload/v1778618867/z_thumbnail_sqo4ch.png",
        previewStart: 1,
      },
    ],
  },
  {
    category: "animation",
    name: "Infographic Animation",
    count: "04",
    subs: ["Motion Graphics", "Data Viz", "Explainer", "Brand"],
    cards: [
      { id: "anim-1", title: "Finance Timeline", sub: "2D motion", large: true, pattern: 4, videoUrl: "https://ik.imagekit.io/afdjudxv6/vcompress_1.MP4",
        thumbnailSrc: "https://res.cloudinary.com/dhbt8jcpg/image/upload/v1778618772/fin_thumbnail_zxb9kc.jpg",
        previewStart: 52 },
    ],
  },
  {
    category: "events",
    name: "Event Recaps",
    count: "05",
    subs: ["Nightlife", "Corporate", "Weddings", "Festivals"],
    cards: [
      {
        id: "ev-1",
        title: "PM2AM Party Recap",
        sub: "3-day coverage · Highlight reel",
        featured: true,
        large: true,
        pattern: 1,
         videoUrl: "https://ik.imagekit.io/afdjudxv6/pm2am-compressed.mov",
        thumbnailSrc: "https://res.cloudinary.com/dhbt8jcpg/image/upload/v1778618845/pm_thumbnail_m11fop.jpg",
        previewStart: 8,
      },
      { id: "ev-2", title: "DJ Performance Recap", sub: "Energetic", pattern: 2, videoUrl: "https://ik.imagekit.io/afdjudxv6/DJ%20recap.mov", previewStart: 2 },
    ],
  },
  {
    category: "direction",
    name: "Creative Direction",
    count: "06",
    subs: ["Concept", "Art Direction", "Styling", "Campaign"],
    cards: [
      { id: "dir-1", title: "Ctrl Z", sub: "Full concept-to-screen", large: true, pattern: 4, videoUrl: "https://ik.imagekit.io/afdjudxv6/Ctrl%20Z%20-compressed%202.MOV/ik-video.mp4?updatedAt=1780658478845",
        thumbnailSrc: "https://res.cloudinary.com/dhbt8jcpg/image/upload/v1778618867/z_thumbnail_sqo4ch.png",
        previewStart: 1, },
    ],
  },
];

export const SERVICES = [
  {
    num: "01",
    name: "Video Editing",
    desc: "From raw footage to polished cuts — fast-paced music syncs, cinematic narratives, and scroll-stopping social reels.",
    items: ["Music Video", "Narrative Edit", "Social Cuts", "Color Grade"],
    icon: "video",
  },
  {
    num: "02",
    name: "Videography",
    desc: "On-location capture with technical precision. Multi-cam setups, handheld energy, and zero missed moments.",
    items: ["Live Events", "Corporate", "BTS Coverage", "4K"],
    icon: "camera",
  },
  {
    num: "03",
    name: "Cinematography",
    desc: "Frame composition, dramatic lighting, and film-like aesthetics that turn any story into a visual journey.",
    items: ["Cinematic Shots", "Lighting Design", "Color Grading"],
    icon: "film",
  },
  {
    num: "04",
    name: "Infographic Animation",
    desc: "Data-driven stories brought to life through motion design. Explainers, stats, brand reveals — all animated.",
    items: ["Motion Graphics", "Explainers", "Data Viz", "Voiceover Visualization"],
    icon: "chart",
  },
  {
    num: "05",
    name: "Event Recaps",
    desc: "High-energy recap videos that capture the feeling, not just the footage. Nightlife, festivals, corporate events.",
    items: ["Nightlife", "Festivals"],
    icon: "zap",
  },
  {
    num: "06",
    name: "Creative Direction",
    desc: "Concept to camera — leading the full creative vision across campaigns, music videos, and editorial projects.",
    items: ["Campaigns", "Art Direction", "Styling", "Music Videos"],
    icon: "eye",
  },
] as const;

export const CLIENTS = [
  "Bubus of African",
  "PM2AM",
  "DJ Roti",
  "NYSC Ekiti",
] as const;

export const CTA_STATS = [
  { num: "2", suffix: "+", label: "Years in the Game" },
  { num: "15", suffix: "+", label: "Projects Delivered" },
] as const;

export const CONTACT_DETAILS = [
  { label: "Email", value: "ogagaakpotu@gmail.com", href: "mailto:ogagaakpotu@gmail.com", icon: "mail" },
  { label: "Location", value: "Lagos, Nigeria", href: "#", icon: "map-pin" },
] as const;

export const SOCIAL_LINKS = [
  {
    platform: "instagram",
    href: "https://instagram.com/tino.akpotu",
  },
  {
    platform: "twitter",
    href: "https://x.com/tino_akpotu",
  },
  {
    platform: "linkedin",
    href: "https://linkedin.com/in/ogaga-akpotu",
  },
  {
   platform: "tiktok",
    href: "https://tiktok.com/@tino.akpotu",  
  }
] as const;