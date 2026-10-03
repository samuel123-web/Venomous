"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code, Film, Palette, Share2, Mail } from "lucide-react";
import { InstagramIcon, TelegramIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { CONTACT_INFO } from "@/data/contactInfo";

export function PersonalBrand() {
  const contentStreams = [
    {
      title: "VENOMOUS CODE",
      role: "Web Development",
      description: "Architectural deep-dives, fullstack Next.js patterns, interactive UI builds, and performance optimization.",
      icon: Code,
      color: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    },
    {
      title: "VENOMOUS EDITS",
      role: "Video Editing",
      description: "Viral short-form hook pacing, CapCut & Premiere workflows, sound design stems, and cinematic color grading.",
      icon: Film,
      color: "border-orange-500/40 text-orange-400 bg-orange-500/10",
    },
    {
      title: "VENOMOUS DESIGN",
      role: "Graphic Design",
      description: "Visual identity construction, bespoke monogram vectors, modern Swiss typography systems, and brand manuals.",
      icon: Palette,
      color: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10",
    },
    {
      title: "BUILDING VENOMOUS",
      role: "Brand & Journey",
      description: "The raw behind-the-scenes reality of building an independent digital creative studio, client operations, and craft.",
      icon: Share2,
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#0F0F12] dark:bg-[#0F0F12] light:bg-[#FFFFFF] border-y border-white/10 dark:border-white/10 light:border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400">
              FOUNDER &amp; CREATIVE TECHNOLOGIST
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white dark:text-white light:text-zinc-950 uppercase mt-1">
              Meet Samuel
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT_INFO.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 dark:bg-zinc-900 border border-white/10 hover:border-pink-500/50 hover:text-pink-400 transition-all text-zinc-400"
              aria-label="Instagram @sam_fullstack_d"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 dark:bg-zinc-900 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all text-zinc-400"
              aria-label="Telegram @hewerrrr"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 dark:bg-zinc-900 border border-white/10 hover:border-zinc-300 hover:text-white transition-all text-zinc-400"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 dark:bg-zinc-900 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all text-zinc-400"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Editorial Layout: Portrait + Bio & Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
              <Image
                src="/images/samuel-portrait.jpg"
                alt="Samuel Tafese — Founder & Creative Technologist at VENOMOUS"
                fill
                priority
                className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Portrait Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-mono tracking-widest text-orange-400 uppercase font-semibold">
                  FOUNDER • VENOMOUS
                </span>
                <h3 className="text-2xl font-black tracking-tight text-white uppercase font-sans mt-0.5">
                  Samuel Tafese
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  TafeSES43@GMAIL.COM • @SAM_FULLSTACK_D
                </p>
              </div>
            </div>
          </div>

          {/* Bio & Professional Statement Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Disciplines Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/40 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase">
                  WEB DEVELOPER
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-orange-600/15 border border-orange-500/40 text-orange-400 text-xs font-mono font-bold tracking-wider uppercase">
                  VIDEO EDITOR
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-indigo-600/15 border border-indigo-500/40 text-indigo-400 text-xs font-mono font-bold tracking-wider uppercase">
                  GRAPHIC DESIGNER
                </span>
              </div>

              {/* Personal Statement */}
              <blockquote className="text-xl sm:text-2xl font-medium tracking-tight text-white dark:text-white light:text-zinc-900 leading-relaxed border-l-2 border-blue-500 pl-6 my-4 italic">
                &ldquo;I believe the strongest digital presence is built when the person writing the code deeply understands visual rhythm, color psychology, and video storytelling. When these disciplines fuse, a brand becomes unforgettable.&rdquo;
              </blockquote>

              <p className="text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                As the founder of VENOMOUS, I work directly with ambitious businesses, entrepreneurs, and founders to elevate their digital presence. Instead of handing off projects across fragmented agency silos, I oversee the complete creative and technical lifecycle — from the underlying architecture of your Next.js website to high-retention commercial video edits and razor-sharp brand identity systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-100 border border-white/5">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Availability</span>
                  <p className="text-sm font-bold text-white dark:text-white light:text-zinc-900 mt-1">
                    Accepting Q4 2026 Inquiries
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-100 border border-white/5">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Direct Channel</span>
                  <p className="text-sm font-bold text-white dark:text-white light:text-zinc-900 mt-1">
                    Telegram @hewerrrr
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-blue-600/30 transition-all"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={CONTACT_INFO.emailHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 font-semibold text-xs tracking-wider uppercase border border-white/10 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Strategy Integration: 4 Core Streams */}
        <div className="pt-8 border-t border-white/10">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              CONTENT ECOSYSTEM
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 uppercase mt-1">
              The Four Content Pillars
            </h3>
            <p className="text-xs text-zinc-400 max-w-xl mt-1">
              Explore how I document technical engineering, video craft, and design systems across social channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentStreams.map((stream) => {
              const Icon = stream.icon;
              return (
                <div
                  key={stream.title}
                  className="p-5 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border mb-3 ${stream.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white dark:text-white light:text-zinc-900 font-mono tracking-wide">
                    {stream.title}
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-2">
                    {stream.role}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {stream.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
