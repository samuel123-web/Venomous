"use client";

import React from "react";

interface VenomousMotifProps {
  className?: string;
  variant?: "path" | "glow" | "wave" | "viper";
}

export function VenomousMotif({ className = "", variant = "path" }: VenomousMotifProps) {
  if (variant === "glow") {
    return (
      <div className={`pointer-events-none absolute select-none overflow-hidden ${className}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-blue-500/5 to-orange-500/10 rounded-full blur-[120px] opacity-70" />
      </div>
    );
  }

  if (variant === "viper") {
    return (
      <div className={`pointer-events-none absolute select-none opacity-20 dark:opacity-25 ${className}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full stroke-blue-500/40 fill-none"
          strokeWidth="0.8"
        >
          {/* Subtle geometric serpent curve */}
          <path
            d="M 10 90 C 30 70, 20 40, 50 35 C 70 30, 85 15, 95 10"
            strokeDasharray="4 4"
          />
          <path
            d="M 15 95 C 35 75, 25 45, 55 40 C 75 35, 90 20, 98 15"
            stroke="url(#venom-grad)"
            strokeWidth="1.2"
          />
          <defs>
            <linearGradient id="venom-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute select-none overflow-hidden opacity-30 dark:opacity-20 ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 300 C 200 500, 400 100, 700 350 C 900 500, 1100 200, 1300 250"
          stroke="url(#gradient-line-1)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M-50 350 C 250 550, 450 150, 750 400 C 950 550, 1150 250, 1350 300"
          stroke="url(#gradient-line-2)"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
        <defs>
          <linearGradient id="gradient-line-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
            <stop offset="40%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#F97316" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient-line-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FB923C" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
