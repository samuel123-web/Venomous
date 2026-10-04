"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { ArrowRight, CheckCircle, Code, Film, Layers, Sparkles, X, ChevronRight } from "lucide-react";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <span>WHAT VENOMOUS DOES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-[1.1] mb-6">
            Three Flagship <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 dark:from-blue-400 dark:via-indigo-300 dark:to-orange-400">
              Creative Disciplines.
            </span>
          </h2>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-light">
            Engineered to elevate your market standing. Seamlessly available individually or fused as one high-octane digital presence.
          </p>
        </div>

        {/* 3 Flagship Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const isWeb = service.id === "web-development";
            const isVideo = service.id === "video-editing";

            const Icon = isWeb ? Code : isVideo ? Film : Layers;
            const accentBorder = isWeb
              ? "hover:border-blue-500/50"
              : isVideo
              ? "hover:border-orange-500/50"
              : "hover:border-indigo-500/50";

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-[var(--surface-card)] p-8 border border-[var(--border)] shadow-sm hover:shadow-md flex flex-col justify-between transition-all duration-300 ${accentBorder}`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-black text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface-elevated)] flex items-center justify-center border border-[var(--border)] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[var(--text-primary)]" />
                    </div>
                  </div>

                  {/* Title & Heading */}
                  <span className="text-xs font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 block mb-2 font-semibold">
                    {service.title}
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-[var(--text-primary)] uppercase mb-4">
                    {service.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Offerings Tags */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-medium">
                      Scope of Services
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.services.slice(0, 6).map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] text-[var(--text-secondary)] text-xs font-medium border border-[var(--border)]"
                        >
                          {item}
                        </span>
                      ))}
                      {service.services.length > 6 && (
                        <span className="px-2 py-1 rounded-md text-xs font-mono text-[var(--text-muted)]">
                          +{service.services.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies / Tools */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-medium">
                      {isWeb ? "Core Technologies" : "Primary Tools"}
                    </span>
                    <p className="text-xs font-mono text-[var(--text-secondary)]">
                      {isWeb
                        ? service.technologies.slice(0, 5).join(" • ")
                        : service.tools.join(" • ")}
                    </p>
                  </div>
                </div>

                {/* Card CTA: Opens Deep Modal or Scopes Inquiry */}
                <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 hover:text-blue-500 group-hover:translate-x-1 transition-all"
                  >
                    <span>{service.ctaText}</span>
                  </button>

                  <Link
                    href={`/#contact?service=${encodeURIComponent(service.title)}`}
                    className="p-2 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--surface-section)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors border border-[var(--border)]"
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
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] p-6 sm:p-8 shadow-2xl text-[var(--text-primary)] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--surface-section)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors border border-[var(--border)]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                {selectedService.number} // VENOMOUS DISCIPLINE
              </span>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-2 text-[var(--text-primary)]">
              {selectedService.heading}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Business Value Section */}
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1 font-semibold">
                Strategic Business Value
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                {selectedService.businessValue}
              </p>
            </div>

            {/* Complete Scope */}
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-3 font-semibold">
                Full Service Scope
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {selectedService.services.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Deliverables */}
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-3 font-semibold">
                Included Deliverables
              </span>
              <div className="space-y-2">
                {selectedService.deliverables.map((del) => (
                  <div
                    key={del}
                    className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-xs text-[var(--text-primary)] flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex items-center justify-between pt-6 border-t border-[var(--border)]">
              <span className="text-xs font-mono text-[var(--text-muted)]">
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
