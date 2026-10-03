"use client";

import React, { useState } from "react";
import { TOOLKIT_DATA } from "@/data/toolkit";
import { Cpu, Terminal, Palette, Film, Sparkles, CheckCircle2 } from "lucide-react";

export function ToolkitSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Development", "Design", "Video"];

  const filteredCategories =
    activeCategory === "All"
      ? TOOLKIT_DATA
      : TOOLKIT_DATA.filter((c) => c.category === activeCategory);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0B] dark:bg-[#0B0B0B] light:bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>TOOLS I USE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-tight">
              The Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-orange-400">
                Creative &amp; Technical Stack.
              </span>
            </h2>

            <p className="text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-3 font-light">
              Battle-tested tools and industry-standard creative suites deployed to architect high-performance digital solutions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/5 self-start md:self-auto backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Toolkit Groupings Grid */}
        <div className="space-y-12">
          {filteredCategories.map((group) => {
            const isDev = group.category === "Development";
            const isDesign = group.category === "Design";
            const isVideo = group.category === "Video";

            const GroupIcon = isDev ? Terminal : isDesign ? Palette : Film;

            return (
              <div
                key={group.category}
                className="rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white p-6 sm:p-8 border border-white/10 dark:border-white/10 light:border-black/5"
              >
                {/* Group Heading */}
                <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-zinc-800 border border-white/10 text-blue-400">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white dark:text-white light:text-zinc-900 uppercase tracking-tight">
                        {group.category}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    {group.badge}
                  </span>
                </div>

                {/* Tool Cards Wall */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="group p-4 rounded-xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-50 border border-white/5 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-md"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-white dark:text-white light:text-zinc-900 text-sm group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {tool.proficiency}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-zinc-400 block mb-3">
                        {tool.role}
                      </span>

                      <div className="text-[11px] text-zinc-500 bg-black/40 dark:bg-black/40 light:bg-zinc-200/50 p-2 rounded-lg border border-white/5">
                        <span className="text-zinc-300 font-medium">
                          {tool.highlight}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
