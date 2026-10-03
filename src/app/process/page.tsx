import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyVenomous } from "@/components/home/WhyVenomous";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Process — From Idea to Digital Experience | VENOMOUS",
  description:
    "Discover the VENOMOUS 5-step creative and technical process: Discover, Strategize, Create, Refine, Launch.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-16">
        <ProcessSection />
        <WhyVenomous />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
