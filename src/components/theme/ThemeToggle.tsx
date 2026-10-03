"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-white/10 dark:border-white/10 bg-white/5 flex items-center justify-center text-zinc-400" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full border border-white/10 dark:border-white/10 bg-white/5 dark:bg-zinc-900/60 hover:border-blue-500/50 hover:bg-blue-500/10 text-zinc-400 hover:text-white dark:hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-orange-400 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-blue-500 transition-transform duration-300 hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
