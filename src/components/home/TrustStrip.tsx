"use client";

import React from "react";
import { Layers, Sparkles, Target, Zap } from "lucide-react";

export function TrustStrip() {
  const pillars = [
    "WEB DEVELOPMENT",
    "VIDEO EDITING",
    "GRAPHIC DESIGN",
    "DIGITAL EXPERIENCES",
  ];

  const credentials = [
    {
      label: "3 Core Services",
      detail: "Web • Video • Design",
      icon: Layers,
      color: "text-blue-600 dark:text-blue-500",
    },
    {
      label: "Creative + Technical",
      detail: "Artistic Vision & Clean Code",
      icon: Sparkles,
      color: "text-orange-500 dark:text-orange-400",
    },
    {
      label: "Business-Focused",
      detail: "Conversion & Growth Driven",
      icon: Target,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Zero Generic Templates",
      detail: "100% Bespoke Craftsmanship",
      icon: Zap,
      color: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section className="relative z-20 border-y border-[var(--border)] bg-[var(--surface-section)] backdrop-blur-md py-6 overflow-hidden transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Ticker: Pillars */}
        <div className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 pb-5 border-b border-[var(--border)] text-xs sm:text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase font-semibold">
          {pillars.map((pillar, i) => (
            <React.Fragment key={pillar}>
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                {pillar}
              </span>
              {i < pillars.length - 1 && (
                <span className="text-[var(--border)] select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Credibility Strip: Honest Non-Fabricated Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-5">
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3.5 p-2 rounded-xl transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5"
              >
                <div className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] shadow-sm">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
                    {item.label}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] font-mono">
                    {item.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
