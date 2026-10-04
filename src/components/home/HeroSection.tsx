"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Film, Layers, Play, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { VenomousMotif } from "@/components/ui/VenomousMotif";

type HeroTab = "code" | "video" | "design";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<HeroTab>("code");

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern transition-colors duration-250">
      {/* Ambient background glows & serpent motif */}
      <VenomousMotif variant="glow" className="top-10 left-1/4" />
      <VenomousMotif variant="path" className="inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono tracking-widest uppercase mb-6 font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
              <span>VENOMOUS / DIGITAL CREATIVE STUDIO</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-[var(--text-primary)] mb-6 uppercase"
            >
              We Build Digital Experiences That Make Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 dark:from-blue-400 dark:via-indigo-300 dark:to-orange-400">
                Stand Out.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-8 font-normal"
            >
              Web development, video editing, and graphic design — combined to help businesses build a stronger digital presence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-xl shadow-blue-600/30 border border-blue-400/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--surface-card)] text-[var(--text-primary)] font-semibold text-sm tracking-wide border border-[var(--border)] transition-all duration-300 hover:scale-[1.02] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>View My Work</span>
              </Link>
            </motion.div>

            {/* Micro Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-xs text-[var(--text-muted)] font-mono"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                <span className="text-[var(--text-secondary)] font-medium">By Samuel Tafese</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                <span className="text-[var(--text-secondary)] font-medium">Bespoke Engineering &amp; Cinema</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span className="text-[var(--text-secondary)] font-medium">Zero Templates</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium CODE + VIDEO + DESIGN Hero Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/25 via-indigo-600/15 to-orange-500/25 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Main Interactive Studio Console Container */}
            <div className="relative rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-xl overflow-hidden backdrop-blur-xl">
              {/* Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-elevated)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-[var(--text-muted)] ml-2">
                    venomous-engine // v2.6
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="relative w-4 h-4">
                    <Image
                      src="/brand/logo.png"
                      alt="Mark"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] font-bold">
                    STUDIO
                  </span>
                </div>
              </div>

              {/* Composition Pillar Tabs (CODE + VIDEO + DESIGN) */}
              <div className="grid grid-cols-3 border-b border-[var(--border)] bg-[var(--surface-section)] p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono transition-all duration-200 ${
                    activeTab === "code"
                      ? "bg-blue-600 text-white shadow-md font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>01 CODE</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("video")}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono transition-all duration-200 ${
                    activeTab === "video"
                      ? "bg-orange-600 text-white shadow-md font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>02 VIDEO</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("design")}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono transition-all duration-200 ${
                    activeTab === "design"
                      ? "bg-indigo-600 text-white shadow-md font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>03 DESIGN</span>
                </button>
              </div>

              {/* Dynamic Pillar Preview Canvas */}
              <div className="p-5 min-h-[340px] flex flex-col justify-between bg-zinc-950 text-zinc-100 rounded-b-2xl">
                {activeTab === "code" && (
                  <motion.div
                    key="tab-code"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 font-mono text-xs"
                  >
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-white/5 pb-2">
                      <span className="text-blue-400 flex items-center gap-1.5 font-semibold">
                        <Terminal className="w-3 h-3" /> App.tsx (Next.js 16 • React 19)
                      </span>
                      <span>TypeScript Strict</span>
                    </div>

                    <div className="space-y-1.5 text-zinc-300">
                      <p>
                        <span className="text-purple-400">import</span> &#123;{" "}
                        <span className="text-blue-300">DigitalPresence</span> &#125;{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-emerald-400">&apos;@venomous/core&apos;</span>;
                      </p>
                      <p className="text-zinc-500">// Samuel Tafese: Web • Video • Design</p>
                      <p>
                        <span className="text-purple-400">export async function</span>{" "}
                        <span className="text-yellow-300">LaunchClientExperience</span>(
                        <span className="text-orange-300">business</span>:{" "}
                        <span className="text-blue-300">Partner</span>) &#123;
                      </p>
                      <div className="pl-4 space-y-1 border-l border-white/10 ml-1">
                        <p>
                          <span className="text-purple-400">const</span> presence ={" "}
                          <span className="text-purple-400">await</span> DigitalPresence.
                          <span className="text-blue-300">unify</span>(&#123;
                        </p>
                        <p className="pl-4">
                          <span className="text-blue-400">web</span>:{" "}
                          <span className="text-emerald-400">&quot;High-Conversion Next.js&quot;</span>,
                        </p>
                        <p className="pl-4">
                          <span className="text-orange-400">video</span>:{" "}
                          <span className="text-emerald-400">&quot;Cinematic 4K Retention Reels&quot;</span>,
                        </p>
                        <p className="pl-4">
                          <span className="text-indigo-400">design</span>:{" "}
                          <span className="text-emerald-400">&quot;Unmistakable Vector Identity&quot;</span>,
                        </p>
                        <p>&#125;);</p>
                        <p>
                          <span className="text-purple-400">return</span> presence.
                          <span className="text-yellow-300">maximizeGrowth</span>();
                        </p>
                      </div>
                      <p>&#125;</p>
                    </div>

                    {/* Console Output Bar */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400 bg-black/40 p-2.5 rounded-lg">
                      <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Compiled in 0.4s • Zero runtime errors
                      </span>
                      <span className="text-zinc-500">100% Bespoke</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "video" && (
                  <motion.div
                    key="tab-video"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {/* Video Player Mockup */}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-white/10 group">
                      <Image
                        src="/projects/luminary-video.jpg"
                        alt="Video Timeline Preview"
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-orange-600/90 text-white flex items-center justify-center shadow-lg shadow-orange-600/40 backdrop-blur-sm">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-zinc-300">
                        <span>4K DCI • 23.976 fps</span>
                        <span className="text-orange-400 font-semibold">00:01:24:18 / REC</span>
                      </div>
                    </div>

                    {/* Timeline Tracks */}
                    <div className="space-y-1.5 bg-black/50 p-2.5 rounded-lg border border-white/5 font-mono text-[10px]">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500 w-8">V1</span>
                        <div className="flex-1 h-3 rounded bg-blue-950/80 border border-blue-500/30 flex items-center px-2 text-[9px] text-blue-300">
                          Commercial_Main_Cut_4K.mov
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500 w-8">V2</span>
                        <div className="flex-1 h-3 rounded bg-orange-950/80 border border-orange-500/30 flex items-center px-2 text-[9px] text-orange-300">
                          Kinetic_Text_Overlay_Grade.prproj
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500 w-8">A1</span>
                        <div className="flex-1 h-3 rounded bg-emerald-950/80 border border-emerald-500/30 flex items-center px-2 text-[9px] text-emerald-300">
                          Bespoke_Sound_Design_Mix_Master.wav
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "design" && (
                  <motion.div
                    key="tab-design"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0A0A0C] border border-white/10 p-4 flex flex-col justify-between">
                      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[10px] font-mono text-zinc-400">
                          CANVAS // 3840 x 2160 (Vector Grid)
                        </span>
                        <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/30">
                          Precision Bezier
                        </span>
                      </div>

                      <div className="flex items-center justify-center my-auto relative z-10">
                        <div className="relative w-28 h-20">
                          <Image
                            src="/brand/logo.png"
                            alt="Logo Emblem Canvas"
                            fill
                            className="object-contain filter drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between relative z-10 pt-2 border-t border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#090909] border border-white/30" title="#090909" />
                          <div className="w-4 h-4 rounded-full bg-[#2563EB]" title="#2563EB" />
                          <div className="w-4 h-4 rounded-full bg-[#F97316]" title="#F97316" />
                          <div className="w-4 h-4 rounded-full bg-[#FFFFFF]" title="#FFFFFF" />
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">Golden Ratio Monogram</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="p-2 rounded bg-black/40 border border-white/5 text-zinc-400 flex items-center justify-between">
                        <span>Typographic Scale</span>
                        <span className="text-zinc-200">Editorial Modern</span>
                      </div>
                      <div className="p-2 rounded bg-black/40 border border-white/5 text-zinc-400 flex items-center justify-between">
                        <span>Vector Master</span>
                        <span className="text-emerald-400">SVG Ready</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Bottom Signature Badge */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>One Connected Digital Solution</span>
                  </div>
                  <span className="text-blue-400 font-bold">VENOMOUS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
