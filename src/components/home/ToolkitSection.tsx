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
    <section className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>TOOLS I USE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-tight">
              The Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 dark:from-blue-400 dark:via-indigo-300 dark:to-orange-400">
                Creative &amp; Technical Stack.
              </span>
            </h2>

            <p className="text-base text-[var(--text-secondary)] mt-3 font-light">
              Battle-tested tools and industry-standard creative suites deployed to architect high-performance digital solutions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[var(--surface-card)] border border-[var(--border)] self-start md:self-auto backdrop-blur-md shadow-sm">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
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

            const GroupIcon = isDev ? Terminal : isDesign ? Palette : Film;

            return (
              <div
                key={group.category}
                className="rounded-2xl bg-[var(--surface-section)] p-6 sm:p-8 border border-[var(--border)] shadow-sm"
              >
                {/* Group Heading */}
                <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-[var(--border)]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-blue-600 dark:text-blue-400 shadow-sm">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] uppercase tracking-tight">
                        {group.category}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    {group.badge}
                  </span>
                </div>

                {/* Tool Cards Wall */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="group p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-[var(--text-primary)] text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold">
                          {tool.proficiency}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-[var(--text-muted)] block mb-3">
                        {tool.role}
                      </span>

                      <div className="text-[11px] text-[var(--text-secondary)] bg-[var(--surface-elevated)] p-2 rounded-lg border border-[var(--border)]">
                        <span className="font-medium text-[var(--text-primary)]">
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
