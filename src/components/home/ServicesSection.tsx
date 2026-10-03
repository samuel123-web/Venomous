"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { ArrowRight, CheckCircle, Code, Film, Layers, Sparkles, X, ChevronRight } from "lucide-react";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0B0B0B] dark:bg-[#0B0B0B] light:bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
            <span>WHAT VENOMOUS DOES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-[1.1] mb-6">
            Three Flagship <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-orange-400">
              Creative Disciplines.
            </span>
          </h2>

          <p className="text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
            Engineered to elevate your market standing. Seamlessly available individually or fused as one high-octane digital presence.
          </p>
        </div>

        {/* 3 Flagship Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const isWeb = service.id === "web-development";
            const isVideo = service.id === "video-editing";
            const isDesign = service.id === "graphic-design";

            const Icon = isWeb ? Code : isVideo ? Film : Layers;
            const accentBorder = isWeb
              ? "hover:border-blue-500/50"
              : isVideo
              ? "hover:border-orange-500/50"
              : "hover:border-indigo-500/50";
            const accentGlow = isWeb
              ? "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
              : isVideo
              ? "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
              : "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]";

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-zinc-900/70 dark:bg-zinc-900/70 light:bg-white p-8 border border-white/10 dark:border-white/10 light:border-black/5 shadow-xl flex flex-col justify-between transition-all duration-300 ${accentBorder} ${accentGlow}`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-black text-zinc-600 group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-black/60 dark:bg-black/60 light:bg-zinc-100 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title & Heading */}
                  <span className="text-xs font-mono tracking-widest uppercase text-blue-400 block mb-2">
                    {service.title}
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-white dark:text-white light:text-zinc-900 uppercase mb-4">
                    {service.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Offerings Tags */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Scope of Services
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.services.slice(0, 6).map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-white/5 dark:bg-white/5 light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-xs font-medium border border-white/5"
                        >
                          {item}
                        </span>
                      ))}
                      {service.services.length > 6 && (
                        <span className="px-2 py-1 rounded-md text-xs font-mono text-zinc-500">
                          +{service.services.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies / Tools */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                      {isWeb ? "Core Technologies" : "Primary Tools"}
                    </span>
                    <p className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                      {isWeb
                        ? service.technologies.slice(0, 5).join(" • ")
                        : service.tools.join(" • ")}
                    </p>
                  </div>
                </div>

                {/* Card CTA: Opens Deep Modal or Scopes Inquiry */}
                <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-black/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>{service.ctaText}</span>
                  </button>

                  <Link
                    href={`/#contact?service=${encodeURIComponent(service.title)}`}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title={`Inquire about ${service.title}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Service Modal / Detail Sheet */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#141416] border border-white/10 p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm font-bold text-blue-400">
                {selectedService.number} // VENOMOUS DISCIPLINE
              </span>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
              {selectedService.heading}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Business Value Section */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-1">
                Strategic Business Value
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedService.businessValue}
              </p>
            </div>

            {/* Complete Scope */}
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                Full Service Scope
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {selectedService.services.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Deliverables */}
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                Included Deliverables
              </span>
              <div className="space-y-2">
                {selectedService.deliverables.map((del) => (
                  <div
                    key={del}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-zinc-500">
                100% Bespoke Execution
              </span>
              <Link
                href={`/#contact?service=${encodeURIComponent(selectedService.title)}`}
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-blue-600/30"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
