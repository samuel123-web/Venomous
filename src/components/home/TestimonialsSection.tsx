"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TESTIMONIALS } from "@/data/testimonials";
import { MessageSquare, Sparkles, ShieldCheck, ArrowRight, Star } from "lucide-react";

export function TestimonialsSection() {
  const hasRealTestimonials = TESTIMONIALS.length > 0;

  return (
    <section className="relative py-20 sm:py-28 bg-[var(--surface-section)] border-y border-[var(--border)] overflow-hidden transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>AUTHENTIC SOCIAL PROOF</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-tight mb-4">
            Client Reviews &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-400 dark:to-orange-400">
              Collaboration Standards.
            </span>
          </h2>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed font-light">
            I prioritize authentic client outcomes over fabricated testimonials. Reviews are published exclusively with client verification.
          </p>
        </div>

        {hasRealTestimonials ? (
          /* Real Testimonials Grid (Renders if TESTIMONIALS has items) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-primary)] italic mb-6 leading-relaxed">
                    &ldquo;{t.testimonial}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center font-bold text-[var(--text-primary)] font-mono">
                    {t.clientName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">{t.clientName}</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{t.position} • {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Discreet Premium Empty State per Section 24 */
          <div className="max-w-3xl mx-auto rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] p-8 sm:p-12 text-center shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-orange-500 dark:text-orange-400 font-semibold block mb-2">
              ZERO FABRICATED REVIEWS POLICY
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight uppercase mb-3">
              Direct Client Testimonials Published By Verification
            </h3>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              At VENOMOUS, we never invent client quotes, fake 5-star badges, or vanity awards. Recent commercial case studies are currently completing their initial quarters. Verified executive reviews will be posted directly as post-launch assessments finalize.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-blue-600/30 transition-all"
              >
                <span>Partner On Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--surface-elevated)] hover:bg-[var(--surface-section)] text-[var(--text-primary)] font-semibold text-xs tracking-wider uppercase border border-[var(--border)] transition-all shadow-sm"
              >
                <span>Inspect Active Case Studies</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
