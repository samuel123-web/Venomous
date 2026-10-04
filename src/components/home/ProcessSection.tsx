"use client";

import React, { useState } from "react";
import { PROCESS_STEPS } from "@/data/process";
import { Check, Clock, Layers, Sparkles, ChevronRight } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-tight mb-4">
            From Idea To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 dark:from-blue-400 dark:via-indigo-300 dark:to-orange-400">
              Digital Experience.
            </span>
          </h2>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed font-light">
            A structured, transparent 5-step timeline engineered for clarity, speed, and uncompromising aesthetic execution.
          </p>
        </div>

        {/* Step Progression Bar (Desktop) */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                type="button"
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 relative ${
                  isCurrent
                    ? "bg-[var(--surface-card)] border-blue-500/80 shadow-md shadow-blue-500/10"
                    : isCompleted
                    ? "bg-[var(--surface-elevated)] border-[var(--border)] text-[var(--text-secondary)]"
                    : "bg-[var(--surface-section)] border-[var(--border)] text-[var(--text-muted)] hover:border-blue-500/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isCurrent
                        ? "text-blue-600 dark:text-blue-400"
                        : isCompleted
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    {step.duration}
                  </span>
                </div>
                <h4
                  className={`text-sm font-bold tracking-tight uppercase ${
                    isCurrent
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
                  {PROCESS_STEPS[activeStep].eyebrow}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-[var(--text-primary)] uppercase tracking-tight">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-light">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono text-orange-500 dark:text-orange-400 uppercase tracking-widest block mb-1 font-semibold">
                  Primary Milestone Focus
                </span>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {PROCESS_STEPS[activeStep].focus}
                </p>
              </div>
            </div>

            {/* Right Deliverables List */}
            <div className="lg:col-span-6 space-y-3 bg-[var(--surface-elevated)] p-6 rounded-xl border border-[var(--border)]">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-2 font-semibold">
                Key Deliverables &amp; Artifacts
              </span>

              {PROCESS_STEPS[activeStep].deliverables.map((del) => (
                <div
                  key={del}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface-card)] border border-[var(--border)] shadow-sm"
                >
                  <div className="p-1 rounded bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-medium">
                    {del}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stepper Navigation Buttons for Mobile & Quick Progression */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-[var(--border)]">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-4 py-2 rounded-lg bg-[var(--surface-elevated)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              ← Previous Phase
            </button>

            <span className="text-xs font-mono text-[var(--text-muted)]">
              0{activeStep + 1} of 05
            </span>

            <button
              type="button"
              onClick={() =>
                setActiveStep((prev) =>
                  Math.min(PROCESS_STEPS.length - 1, prev + 1)
                )
              }
              disabled={activeStep === PROCESS_STEPS.length - 1}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm"
            >
              Next Phase →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
