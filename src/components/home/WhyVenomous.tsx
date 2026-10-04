"use client";

import React from "react";
import { PRINCIPLES } from "@/data/whyVenomous";
import { Target, Sparkles, Cpu, ZoomIn, Flame, TrendingUp } from "lucide-react";

export function WhyVenomous() {
  const iconList = [Target, Flame, Cpu, ZoomIn, Sparkles, TrendingUp];

  return (
    <section className="relative py-24 sm:py-32 bg-[var(--surface-section)] border-y border-[var(--border)] overflow-hidden transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 dark:text-orange-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <span>BUILT DIFFERENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-tight mb-4">
            Six Non-Negotiable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-indigo-500 to-blue-600 dark:from-orange-400 dark:via-white dark:to-blue-400">
              Foundational Principles.
            </span>
          </h2>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed font-light">
            Why high-growth businesses choose VENOMOUS over bloated traditional marketing agencies and fragmented freelance platforms.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRINCIPLES.map((principle, idx) => {
            const Icon = iconList[idx] || Sparkles;

            return (
              <div
                key={principle.number}
                className="group relative rounded-2xl bg-[var(--surface-card)] p-8 border border-[var(--border)] shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-[var(--text-muted)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {principle.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface-elevated)] flex items-center justify-center border border-[var(--border)] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-[var(--text-primary)]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] uppercase tracking-tight mb-1">
                    {principle.title}
                  </h3>
                  <span className="text-xs font-mono text-orange-500 dark:text-orange-400 block mb-3 font-semibold">
                    {principle.tagline}
                  </span>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                  <span>VENOMOUS STANDARD</span>
                  <span>0{idx + 1}/06</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
