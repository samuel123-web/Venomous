"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { VenomousMotif } from "@/components/ui/VenomousMotif";

export function FinalCta() {
  return (
    <section className="relative py-28 sm:py-36 bg-[var(--surface-section)] text-[var(--text-primary)] overflow-hidden transition-colors duration-250 border-t border-[var(--border)]">
      {/* Cinematic Serpent Motifs & Ambient Lighting */}
      <VenomousMotif variant="glow" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <VenomousMotif variant="path" className="inset-0 pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Serpent Chrome Logo Mark */}
        <div className="relative w-20 h-20 mb-8">
          <Image
            src="/brand/logo.png"
            alt="VENOMOUS Chrome Logo"
            fill
            className="object-contain filter drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-[0.25em] mb-6 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VENOMOUS — DIGITAL CREATIVE STUDIO</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[1.05] mb-6 max-w-4xl text-[var(--text-primary)]">
          Let&apos;s Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 dark:from-blue-400 dark:via-white dark:to-orange-400">
            Worth Remembering.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-10 font-light">
          Have a business, idea, or project that needs a stronger digital presence? Let&apos;s turn it into something real.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-xl shadow-blue-600/30 border border-blue-400/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/#work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--surface-card)] text-[var(--text-primary)] font-semibold text-sm tracking-wide border border-[var(--border)] transition-all duration-300 hover:scale-[1.03] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>View My Work</span>
          </Link>
        </div>

        {/* Brand Sign-off */}
        <p className="mt-14 text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
          Samuel Tafese • Web Developer • Video Editor • Graphic Designer
        </p>
      </div>
    </section>
  );
}
