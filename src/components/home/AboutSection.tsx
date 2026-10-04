"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Code, Film, Palette, Compass, Zap } from "lucide-react";

export function AboutSection() {
  const philosophies = [
    {
      title: "Why VENOMOUS Exists",
      description:
        "Most businesses struggle because their web development, video content, and graphic design are handled by disjointed freelancers or disconnected agencies. VENOMOUS eliminates that friction by uniting code, motion, and design under one cohesive creative vision.",
      icon: Compass,
      accent: "border-blue-500/40 text-blue-600 dark:text-blue-400",
    },
    {
      title: "The Creative Philosophy",
      description:
        "Design is not merely decoration; it is visual communication with purpose. Video is not just moving pictures; it is attention retention. Code is not just syntax; it is the conversion architecture of your digital home.",
      icon: Palette,
      accent: "border-orange-500/40 text-orange-500 dark:text-orange-400",
    },
    {
      title: "Business-Focused Mindset",
      description:
        "Every line of TypeScript, every cut in the timeline, and every typographic choice is engineered with one metric in mind: creating measurable business authority and turning casual browsers into loyal clients.",
      icon: Zap,
      accent: "border-blue-400/40 text-blue-600 dark:text-blue-300",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <span>ABOUT VENOMOUS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-[1.1] mb-6">
            Digital Creativity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-400 dark:to-orange-400">
              Meets Technology.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
            I combine technology and visual creativity to create websites, videos, and designs that help businesses communicate professionally and stand out online.
          </p>
        </div>

        {/* 3 Pillar Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {philosophies.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative rounded-2xl bg-[var(--surface-card)] p-8 border border-[var(--border)] shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--surface-elevated)] flex items-center justify-center mb-6 border border-[var(--border)] group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-6 h-6 ${item.accent}`} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Core Attributes & Standards */}
        <div className="rounded-2xl bg-[var(--surface-section)] p-8 sm:p-10 border border-[var(--border)] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono text-orange-500 dark:text-orange-400 uppercase tracking-widest font-semibold">
                The Standards of Craft
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-2 tracking-tight">
                Attention to Microscopic Detail &amp; Continuous Growth.
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                Whether tuning a bezier curve on a logo monogram, optimizing Next.js bundle sizes, or perfecting an audio transition on a commercial cut, good enough is never acceptable.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Production Next.js 16 & TypeScript Architectures",
                "Kinetic 4K Color Grading & Sound Pacing",
                "Bespoke Vector Identity & Typographic Manuals",
                "Conversion-Engineered Inquiry & Lead Funnels",
                "Mobile-First Responsive Precision (320px to 4K)",
                "Direct Communication & Dedicated Execution",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
