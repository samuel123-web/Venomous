"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Only show on first visit in the session
    const hasSeenSplash = sessionStorage.getItem("venomous_splash_seen");
    if (hasSeenSplash) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("venomous_splash_seen", "true");
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0B] text-white selection:bg-transparent pointer-events-none"
        >
          {/* Subtle background glow */}
          <div className="absolute w-72 h-72 bg-blue-600/15 rounded-full blur-[100px] animate-pulse" />

          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-20 h-20 mb-5"
          >
            <Image
              src="/brand/logo.png"
              alt="VENOMOUS"
              fill
              className="object-contain filter drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              priority
            />
          </motion.div>

          {/* Brand Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-center"
          >
            <h1 className="text-xl md:text-2xl font-black tracking-[0.25em] text-white font-mono uppercase">
              VENOMOUS
            </h1>
            <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mt-1 font-mono">
              Build • Edit • Design
            </p>
          </motion.div>

          {/* Micro progress line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute bottom-16 h-[2px] w-24 bg-gradient-to-r from-blue-600 via-white to-orange-500 origin-left rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
