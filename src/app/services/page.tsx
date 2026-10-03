import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/home/ServicesSection";
import { VenomousSystem } from "@/components/home/VenomousSystem";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Services — Web Development, Video Editing & Graphic Design | VENOMOUS",
  description:
    "Explore VENOMOUS flagship services: Web Development, Video Editing, and Graphic Design. One connected solution for modern business growth.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-16">
        <ServicesSection />
        <VenomousSystem />
        <IndustriesSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
