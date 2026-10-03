"use client";

import React, { useState } from "react";
import { PROCESS_STEPS } from "@/data/process";
import { Check, Clock, Layers, Sparkles, ChevronRight } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#0B0B0B] dark:bg-[#0B0B0B] light:bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-tight mb-4">
            From Idea To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-orange-400">
              Digital Experience.
            </span>
          </h2>

          <p className="text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
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
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 relative ${
                  isCurrent
                    ? "bg-zinc-900 border-blue-500/80 shadow-lg shadow-blue-500/10"
                    : isCompleted
                    ? "bg-zinc-900/60 border-white/20 text-zinc-300"
                    : "bg-zinc-900/30 border-white/5 text-zinc-500 hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isCurrent
                        ? "text-blue-400"
                        : isCompleted
                        ? "text-emerald-400"
                        : "text-zinc-500"
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {step.duration}
                  </span>
                </div>
                <h4
                  className={`text-sm font-bold tracking-tight uppercase ${
                    isCurrent
                      ? "text-white"
                      : isCompleted
                      ? "text-zinc-200"
                      : "text-zinc-400"
                  }`}
                >
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="rounded-2xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-black/5 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold">
                  {PROCESS_STEPS[activeStep].eyebrow}
                </span>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white dark:text-white light:text-zinc-900 uppercase tracking-tight">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed font-light">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-1">
                  Primary Milestone Focus
                </span>
                <p className="text-sm font-semibold text-white dark:text-white light:text-zinc-900">
                  {PROCESS_STEPS[activeStep].focus}
                </p>
              </div>
            </div>

            {/* Right Deliverables List */}
            <div className="lg:col-span-6 space-y-3 bg-black/40 dark:bg-black/40 light:bg-zinc-50 p-6 rounded-xl border border-white/5">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                Key Deliverables &amp; Artifacts
              </span>

              {PROCESS_STEPS[activeStep].deliverables.map((del) => (
                <div
                  key={del}
                  className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white border border-white/5"
                >
                  <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-200 dark:text-zinc-200 light:text-zinc-800 leading-relaxed font-medium">
                    {del}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stepper Navigation Buttons for Mobile & Quick Progression */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/10">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-4 py-2 rounded-lg bg-white/5 text-xs font-mono text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              ← Previous Phase
            </button>

            <span className="text-xs font-mono text-zinc-500">
              0{activeStep + 1} of 05
            </span>

            <button
              onClick={() =>
                setActiveStep((prev) =>
                  Math.min(PROCESS_STEPS.length - 1, prev + 1)
                )
              }
              disabled={activeStep === PROCESS_STEPS.length - 1}
              className="px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-mono border border-blue-500/30 disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              Next Phase →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
