import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/home/AboutSection";
import { PersonalBrand } from "@/components/home/PersonalBrand";
import { WhyVenomous } from "@/components/home/WhyVenomous";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "About Samuel Tafese — VENOMOUS Digital Creative Studio",
  description:
    "Learn about Samuel Tafese, founder of VENOMOUS, combining web development, video editing, and graphic design to build stronger digital presences.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-16">
        <AboutSection />
        <PersonalBrand />
        <WhyVenomous />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
