import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AboutSection } from "@/components/home/AboutSection";
import { PersonalBrand } from "@/components/home/PersonalBrand";
import { ServicesSection } from "@/components/home/ServicesSection";
import { VenomousSystem } from "@/components/home/VenomousSystem";
import { SelectedWork } from "@/components/home/SelectedWork";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyVenomous } from "@/components/home/WhyVenomous";
import { ToolkitSection } from "@/components/home/ToolkitSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCta } from "@/components/home/FinalCta";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="flex-1 w-full">
        {/* 01: Hero */}
        <HeroSection />

        {/* 02: Trust Strip */}
        <TrustStrip />

        {/* 03: About */}
        <AboutSection />

        {/* 04: Samuel Profile / Meet Samuel */}
        <PersonalBrand />

        {/* 05: Services */}
        <ServicesSection />

        {/* 06: Web + Video + Design System (The VENOMOUS System) */}
        <VenomousSystem />

        {/* 07: Selected Work */}
        <SelectedWork />

        {/* 08: Industries */}
        <IndustriesSection />

        {/* 09: Process */}
        <ProcessSection />

        {/* 10: Why VENOMOUS */}
        <WhyVenomous />

        {/* 11: Tools */}
        <ToolkitSection />

        {/* 12: Testimonials */}
        <TestimonialsSection />

        {/* 13: Final CTA */}
        <FinalCta />

        {/* 14: Contact */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
