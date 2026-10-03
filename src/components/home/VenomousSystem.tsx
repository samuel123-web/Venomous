"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Film, Layers, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export function VenomousSystem() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      num: "01",
      codeName: "WEB",
      verb: "Build",
      tagline: "Build the digital home.",
      description:
        "High-performance Next.js architectures designed around real conversion goals, sub-second load times, and seamless user interaction.",
      icon: Code,
      color: "border-blue-500/40 text-blue-400 bg-blue-500/10",
      accent: "text-blue-400",
    },
    {
      num: "02",
      codeName: "VIDEO",
      verb: "Engage",
      tagline: "Capture attention.",
      description:
        "High-retention social reels, commercial cuts, and kinetic storytelling designed to stop the scroll and captivate prospective clients.",
      icon: Film,
      color: "border-orange-500/40 text-orange-400 bg-orange-500/10",
      accent: "text-orange-400",
    },
    {
      num: "03",
      codeName: "DESIGN",
      verb: "Communicate",
      tagline: "Create recognition.",
      description:
        "Unmistakable visual identities, vector monograms, and typography systems that command immediate authority and respect.",
      icon: Layers,
      color: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10",
      accent: "text-indigo-400",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0F0F12] dark:bg-[#0F0F12] light:bg-[#FFFFFF] border-y border-white/10 dark:border-white/10 light:border-black/5 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-purple-600/5 to-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE VENOMOUS SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-tight mb-6">
            One Brand. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-orange-400">
              Three Creative Powers.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
            Instead of treating websites, content, and design as separate pieces, VENOMOUS brings them together into one consistent digital experience. This is our core brand differentiator.
          </p>
        </div>

        {/* The System Triad Interactive Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: 3 Pillar Stepper Cards */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activePillar === idx;

              return (
                <div
                  key={item.codeName}
                  onClick={() => setActivePillar(idx)}
                  className={`p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 border-blue-500/50 shadow-xl shadow-blue-500/10 translate-x-2"
                      : "bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl border ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                          <span>{item.num} {item.codeName}</span>
                          <span>→</span>
                          <span className={`font-bold uppercase tracking-wider ${item.accent}`}>
                            {item.verb}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-white dark:text-white light:text-zinc-900 uppercase tracking-tight mt-0.5">
                          {item.tagline}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-3 pl-16 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Unified Convergence Node */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#18181B] to-[#111113] p-8 sm:p-10 border border-white/10 shadow-2xl text-center flex flex-col items-center justify-between min-h-[440px]">
              {/* Top Accent Lines */}
              <div className="w-full flex items-center justify-between font-mono text-xs text-zinc-500 border-b border-white/5 pb-4">
                <span>SYSTEM SYNCHRONIZATION</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  UNIFIED
                </span>
              </div>

              {/* Central Metallic Serpent Emblem */}
              <div className="my-6 relative flex flex-col items-center">
                <div className="relative w-36 h-28 mb-4">
                  <Image
                    src="/brand/logo.png"
                    alt="VENOMOUS Brand Triad"
                    fill
                    className="object-contain filter drop-shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                  />
                </div>

                <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                  THE FORMULA
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-zinc-900 tracking-tight uppercase mt-1">
                  ONE DIGITAL PRESENCE
                </h4>
                <p className="text-xs text-zinc-400 max-w-xs mt-2 leading-relaxed">
                  Web, video, and design working in absolute harmony to maximize conversion and market value.
                </p>
              </div>

              {/* Bottom Feature Badges */}
              <div className="w-full pt-4 border-t border-white/5 grid grid-cols-2 gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Legacy Agency</span>
                  <span className="text-xs font-semibold text-red-400">3 Separate Contractors</span>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/30">
                  <span className="text-[10px] font-mono text-blue-400 uppercase block">VENOMOUS System</span>
                  <span className="text-xs font-semibold text-emerald-400">1 Unified Studio Vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Strategy Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              Conversion Pathway
            </span>
            <p className="text-base sm:text-lg font-bold text-white dark:text-white light:text-zinc-900">
              Social Media → Website → Portfolio → Trust → Contact → Client
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-blue-600/30 transition-all shrink-0"
          >
            <span>Activate The System</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
