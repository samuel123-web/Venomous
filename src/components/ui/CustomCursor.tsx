"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor follow
  const springX = useSpring(mouseX, { damping: 28, stiffness: 350 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-cursor-project]");
      if (projectEl) {
        setCursorText("VIEW PROJECT →");
        setIsHovered(true);
        setIsPointer(false);
        return;
      }

      const customTextEl = target.closest("[data-cursor-text]");
      if (customTextEl) {
        setCursorText(customTextEl.getAttribute("data-cursor-text") || "");
        setIsHovered(true);
        setIsPointer(false);
        return;
      }

      const interactiveEl = target.closest("a, button, input, select, textarea, [role='button']");
      if (interactiveEl) {
        setCursorText("");
        setIsHovered(false);
        setIsPointer(true);
        return;
      }

      setCursorText("");
      setIsHovered(false);
      setIsPointer(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer follow ring / badge */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovered ? 1 : isPointer ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={`fixed -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-colors duration-200 ${
          isHovered
            ? "px-3.5 py-1.5 bg-blue-600 text-white text-[11px] font-mono tracking-wider font-semibold shadow-lg shadow-blue-500/30 border border-blue-400/40"
            : isPointer
            ? "w-10 h-10 border border-blue-400/50 bg-blue-500/10 backdrop-blur-[2px]"
            : "w-8 h-8 border border-white/20 dark:border-white/25"
        }`}
      >
        {isHovered && cursorText ? <span>{cursorText}</span> : null}
      </motion.div>

      {/* Center dot (only visible when not displaying project pill) */}
      {!isHovered && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
          }}
          className="fixed w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 dark:bg-white pointer-events-none"
        />
      )}
    </div>
  );
}
