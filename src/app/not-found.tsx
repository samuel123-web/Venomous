import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VenomousMotif } from "@/components/ui/VenomousMotif";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-[#0B0B0B] text-white py-20">
        <VenomousMotif variant="glow" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <VenomousMotif variant="viper" className="w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-2xl mx-auto px-4 text-center relative z-10 space-y-6">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/brand/logo.png"
              alt="VENOMOUS Emblem"
              fill
              className="object-contain filter drop-shadow-[0_0_25px_rgba(37,99,235,0.4)]"
            />
          </div>

          <span className="text-xs font-mono uppercase tracking-[0.3em] text-orange-400 font-bold block">
            ERROR 404 // ROUTE UNRESOLVED
          </span>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Lost In The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Digital Wild?
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been relocated to another coordinate in the VENOMOUS network.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase shadow-xl shadow-blue-600/30 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back Home →</span>
            </Link>

            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 font-semibold text-xs tracking-wider uppercase border border-white/10 transition-all"
            >
              <Compass className="w-4 h-4 text-orange-400" />
              <span>Explore Selected Work</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
