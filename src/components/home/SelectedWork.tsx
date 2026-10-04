"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/projects";
import { ArrowUpRight, ArrowRight, Sparkles, Filter } from "lucide-react";

type FilterType = "ALL" | "WEB" | "VIDEO" | "DESIGN";

export function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "WEB") return p.category === "web";
    if (activeFilter === "VIDEO") return p.category === "video";
    if (activeFilter === "DESIGN") return p.category === "design";
    return true;
  });

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
              <span>SELECTED WORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-tight">
              Featured Case Studies &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-400 dark:to-orange-400">
                Digital Craft.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 font-light">
              Explore bespoke digital homes, high-retention video reels, and architectural visual identities engineered for industry leaders.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[var(--surface-card)] border border-[var(--border)] self-start md:self-auto backdrop-blur-md shadow-sm">
            {(["ALL", "WEB", "VIDEO", "DESIGN"] as FilterType[]).map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  type="button"
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    isSelected
                      ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => {
            const isWeb = project.category === "web";
            const isVideo = project.category === "video";
            const badgeColor = isWeb
              ? "bg-blue-600/15 text-blue-600 dark:text-blue-400 border-blue-500/30"
              : isVideo
              ? "bg-orange-600/15 text-orange-600 dark:text-orange-400 border-orange-500/30"
              : "bg-indigo-600/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30";

            return (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                data-cursor-project="true"
                className="group relative rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {/* Large Visual Area with Smooth Hover Scale */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold border backdrop-blur-md ${badgeColor}`}
                    >
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-zinc-200 bg-black/60 border border-white/10 backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover "VIEW PROJECT →" Reveal Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-mono text-xs tracking-widest font-bold shadow-2xl shadow-blue-500/50 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>VIEW PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Industry and Client */}
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-2">
                      <span className="uppercase tracking-wider">
                        {project.industry}
                      </span>
                      <span>{project.client}</span>
                    </div>

                    {/* Project Title with Arrow Transition */}
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight uppercase group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-9 h-9 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 group-hover:rotate-45 transition-all duration-300 shrink-0 shadow-sm">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>
                  </div>

                  {/* Services Tags & Link */}
                  <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.slice(0, 3).map((srv) => (
                        <span
                          key={srv}
                          className="px-2 py-0.5 rounded bg-[var(--surface-elevated)] text-[var(--text-secondary)] text-[11px] font-mono border border-[var(--border)]"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 group-hover:underline font-semibold">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Projects Action */}
        <div className="mt-14 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--surface-card)] hover:bg-[var(--surface-elevated)] text-[var(--text-primary)] font-mono text-xs tracking-widest uppercase border border-[var(--border)] transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <span>Explore Complete Archive ({PROJECTS.length} Projects)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
