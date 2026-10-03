"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INDUSTRIES_DATA, IndustryItem } from "@/data/industries";
import {
  Utensils,
  Dumbbell,
  Armchair,
  Building2,
  Compass,
  Palette,
  ShoppingBag,
  Hotel,
  Rocket,
  UserCheck,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export function IndustriesSection() {
  const [selectedId, setSelectedId] = useState<string>("restaurants");

  const activeIndustry =
    INDUSTRIES_DATA.find((ind) => ind.id === selectedId) || INDUSTRIES_DATA[0];

  const iconMap: Record<string, React.ElementType> = {
    Utensils,
    Dumbbell,
    Armchair,
    Building2,
    Compass,
    Palette,
    ShoppingBag,
    Hotel,
    Rocket,
    UserCheck,
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#0F0F12] dark:bg-[#0F0F12] light:bg-[#FFFFFF] border-y border-white/10 dark:border-white/10 light:border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUSINESSES I CAN HELP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-tight mb-4">
            Tailored Solutions For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-orange-400">
              High-Ambition Industries.
            </span>
          </h2>

          <p className="text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
            I don&apos;t build generic websites or cut random videos. Every deliverable is engineered to resolve specific operational bottlenecks and capture high-margin clients in your field.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = iconMap[ind.iconName] || Sparkles;
            const isSelected = ind.id === selectedId;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30 font-bold"
                    : "bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 text-zinc-400 hover:text-white border-white/10 hover:border-white/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Showcase Card */}
        <div className="rounded-2xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-50 border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-1">
                  INDUSTRY PROFILE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-zinc-900 tracking-tight uppercase">
                  {activeIndustry.name}
                </h3>
                <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mt-2 font-medium">
                  {activeIndustry.tagline}
                </p>
              </div>

              {/* The Industry Friction */}
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 block mb-1">
                  Common Market Bottleneck
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeIndustry.problem}
                </p>
              </div>

              {/* The VENOMOUS Solution */}
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block mb-1">
                  The VENOMOUS Playbook
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeIndustry.solution}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/#contact?industry=${encodeURIComponent(activeIndustry.name)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-blue-600/30"
                >
                  <span>Build For {activeIndustry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Triad Implementation for This Industry */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                Unified Three-Power Execution
              </span>

              {/* 01 WEB Role */}
              <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-4">
                <span className="px-2.5 py-1 rounded bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold shrink-0">
                  WEB
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                    Digital Home &amp; Conversion Flow
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {activeIndustry.webRole}
                  </p>
                </div>
              </div>

              {/* 02 VIDEO Role */}
              <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-4">
                <span className="px-2.5 py-1 rounded bg-orange-600/20 border border-orange-500/40 text-orange-400 font-mono text-xs font-bold shrink-0">
                  VIDEO
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                    Attention Capture &amp; Emotional Engagement
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {activeIndustry.videoRole}
                  </p>
                </div>
              </div>

              {/* 03 DESIGN Role */}
              <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-4">
                <span className="px-2.5 py-1 rounded bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 font-mono text-xs font-bold shrink-0">
                  DESIGN
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                    Prestige &amp; Brand Recognition
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {activeIndustry.designRole}
                  </p>
                </div>
              </div>

              {/* Business Impact Footer */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                    Expected Business Result
                  </span>
                  <p className="text-xs font-semibold text-zinc-200">
                    {activeIndustry.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
