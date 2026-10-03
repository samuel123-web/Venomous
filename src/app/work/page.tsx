import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SelectedWork } from "@/components/home/SelectedWork";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Selected Work — VENOMOUS Portfolio & Case Studies",
  description:
    "Explore featured case studies across Web Development, Video Editing, and Graphic Design by Samuel Tafese.",
};

export default function WorkArchivePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-16">
        <SelectedWork />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
