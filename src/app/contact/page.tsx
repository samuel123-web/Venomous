import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/home/ContactSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Contact Samuel Tafese — Start A Project with VENOMOUS",
  description:
    "Direct project inquiry and contact form for VENOMOUS. Connect with Samuel Tafese for web development, video editing, and graphic design.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-16">
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
