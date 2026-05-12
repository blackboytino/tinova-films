import Loader from "@/components/ui/Loader";
import ClientProviders from "@/components/ui/ClientProviders";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import GridSection from "@/components/sections/GridSection";
import CTABanner from "@/components/sections/CTABanner";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Background atmosphere orbs */}
      <div
        className="orb"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(232,98,42,0.3), transparent)",
          top: "10%",
          right: "20%",
          animation: "orbFloat 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="orb"
        style={{
          width: 250,
          height: 250,
          background: "radial-gradient(circle, rgba(79,195,247,0.15), transparent)",
          bottom: "20%",
          left: "10%",
          animation: "orbFloat 8s ease-in-out infinite 3s",
        }}
        aria-hidden="true"
      />

      {/* Client-only: cursor, scroll progress, reveal observer */}
      <ClientProviders />

      {/* Loader */}
      <Loader />

      {/* Nav */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <MarqueeTicker />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
