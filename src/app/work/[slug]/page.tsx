import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle,
  Terminal,
  Palette,
  Film,
  Calendar,
  Building,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — VENOMOUS",
    };
  }

  return {
    title: `${project.title} — VENOMOUS Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — VENOMOUS Case Study`,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject =
    projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  const isWeb = project.category === "web";
  const isVideo = project.category === "video";

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full pt-28 pb-24 bg-[#0B0B0B] dark:bg-[#0B0B0B] light:bg-[#F8F9FA] text-white selection:bg-blue-600 selection:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back To Selected Work</span>
            </Link>
          </div>

          {/* Hero Header */}
          <div className="mb-12 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                {project.industry}
              </span>
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white dark:text-white light:text-zinc-950 leading-[1.05]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-300 dark:text-zinc-300 light:text-zinc-700 max-w-4xl font-light leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Master Visual Canvas */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-white/10 mb-16 shadow-2xl">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-zinc-300 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                Client: <span className="text-white font-bold">{project.client}</span>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-lg shadow-blue-600/30 transition-all"
                >
                  <span>Launch Live Experience</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Project Details Spec Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-zinc-900/60 border border-white/10 mb-20 text-xs font-mono">
            <div>
              <span className="text-zinc-500 uppercase block mb-1">Services</span>
              <p className="text-zinc-200 font-semibold">{project.services.slice(0, 2).join(", ")}</p>
            </div>
            <div>
              <span className="text-zinc-500 uppercase block mb-1">Stack / Tools</span>
              <p className="text-zinc-200 font-semibold">{project.technologies.slice(0, 3).join(", ")}</p>
            </div>
            <div>
              <span className="text-zinc-500 uppercase block mb-1">Timeline &amp; Year</span>
              <p className="text-zinc-200 font-semibold">Q4 {project.year} • 4-Week Sprint</p>
            </div>
            <div>
              <span className="text-zinc-500 uppercase block mb-1">Lead Creative</span>
              <p className="text-blue-400 font-bold">Samuel Tafese</p>
            </div>
          </div>

          {/* Case Study Core Sections per Section 19 Specification */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Sticky Table of Contents */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block font-semibold">
                  CASE STUDY CHAPTERS
                </span>
                <nav className="space-y-2 text-xs font-mono">
                  {["Overview", "Challenge", "Strategy", "Design", "Development", "Content", "Outcome"].map(
                    (sec) => (
                      <a
                        key={sec}
                        href={`#${sec.toLowerCase()}`}
                        className="block py-1 text-zinc-400 hover:text-white transition-colors"
                      >
                        • {sec}
                      </a>
                    )
                  )}
                </nav>
              </div>

              {/* Inquiry Action Box */}
              <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-500/20 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold block">
                  Need a similar outcome?
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Let&apos;s engineer a high-conversion digital presence for your brand.
                </p>
                <Link
                  href={`/#contact?project=${encodeURIComponent(project.title)}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 pt-1"
                >
                  <span>Start A Project Inquiry →</span>
                </Link>
              </div>
            </div>

            {/* In-depth Narrative Columns */}
            <div className="lg:col-span-8 space-y-14">
              {/* 01: Overview */}
              <section id="overview" className="space-y-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest">
                  <span>01</span>
                  <span>// OVERVIEW</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Project Summary
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed font-light">
                  {project.overview}
                </p>
              </section>

              {/* 02: Challenge */}
              <section id="challenge" className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest">
                  <span>02</span>
                  <span>// CHALLENGE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  The Problem Being Solved
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed font-light">
                  {project.challenge}
                </p>
              </section>

              {/* 03: Strategy */}
              <section id="strategy" className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
                  <span>03</span>
                  <span>// STRATEGY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Creative &amp; Technical Approach
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed font-light">
                  {project.strategy}
                </p>
              </section>

              {/* 04: Design */}
              <section id="design" className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-widest">
                  <span>04</span>
                  <span>// DESIGN</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Visual &amp; Aesthetic Decisions
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed font-light">
                  {project.design}
                </p>
              </section>

              {/* 05: Development */}
              <section id="development" className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest">
                  <span>05</span>
                  <span>// DEVELOPMENT</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Technical Implementation
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed font-light">
                  {project.development}
                </p>
              </section>

              {/* 06: Content */}
              <section id="content" className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  <span>06</span>
                  <span>// CONTENT &amp; MEDIA</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Video, Design &amp; Narrative Direction
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed font-light">
                  {project.content}
                </p>
              </section>

              {/* 07: Outcome */}
              <section id="outcome" className="p-8 rounded-2xl bg-zinc-900 border border-blue-500/30 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4" />
                  <span>07 // DELIVERABLE OUTCOME</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Project Outcome
                </h2>
                <p className="text-base text-zinc-200 leading-relaxed">
                  {project.outcome}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
                    Key Deliverables Handed Over:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {project.keyDeliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Project Pagination (Prev / Next) */}
          <div className="pt-12 border-t border-white/10 flex items-center justify-between">
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex flex-col items-start"
            >
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1 group-hover:text-blue-400">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Project
              </span>
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors uppercase">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col items-end text-right"
            >
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1 group-hover:text-blue-400">
                Next Project <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors uppercase">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
