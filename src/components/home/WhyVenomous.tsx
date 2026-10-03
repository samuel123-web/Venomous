"use client";

import React from "react";
import { PRINCIPLES } from "@/data/whyVenomous";
import { Target, Sparkles, Cpu, ZoomIn, Flame, TrendingUp } from "lucide-react";

export function WhyVenomous() {
  const iconList = [Target, Flame, Cpu, ZoomIn, Sparkles, TrendingUp];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0F0F12] dark:bg-[#0F0F12] light:bg-[#FFFFFF] border-y border-white/10 dark:border-white/10 light:border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4">
            <span>BUILT DIFFERENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-tight mb-4">
            Six Non-Negotiable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-blue-400">
              Foundational Principles.
            </span>
          </h2>

          <p className="text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
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
                className="group relative rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-50 p-8 border border-white/10 dark:border-white/10 light:border-black/5 shadow-xl hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-zinc-600 group-hover:text-blue-400 transition-colors">
                      {principle.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-black/60 dark:bg-black/60 light:bg-white flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-white dark:text-white light:text-zinc-900" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-white light:text-zinc-900 uppercase tracking-tight mb-1">
                    {principle.title}
                  </h3>
                  <span className="text-xs font-mono text-orange-400 block mb-3 font-semibold">
                    {principle.tagline}
                  </span>

                  <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>VENOMOUS STANDARD</span>
                  <span className="text-zinc-400">0{idx + 1}/06</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
