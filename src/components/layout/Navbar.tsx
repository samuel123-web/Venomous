"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy on homepage
      if (pathname === "/") {
        const sections = ["contact", "process", "work", "services", "about"];
        const scrollPosition = window.scrollY + 250;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
            return;
          }
        }
        if (window.scrollY < 200) {
          setActiveSection("Home");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border)] py-3.5 shadow-sm dark:shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo & Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="VENOMOUS Home"
          >
            <div className="relative w-8 h-8 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-blue-500/60 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <Image
                src="/brand/logo.png"
                alt="VENOMOUS Mark"
                width={28}
                height={28}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-black tracking-[0.2em] text-[var(--text-primary)] leading-none">
                VENOMOUS
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--text-muted)] mt-1 font-mono font-medium">
                Studio
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 bg-[var(--surface-card)] px-4 py-1.5 rounded-full border border-[var(--border)] backdrop-blur-md shadow-sm"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.name === "Home"
                  ? pathname === "/" && activeSection === "Home"
                  : activeSection === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? "bg-blue-600/10 text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Theme Toggle & Primary CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide shadow-md shadow-blue-600/25 border border-blue-400/40 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-[var(--background)]/95 backdrop-blur-xl flex flex-col justify-between p-6 transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header in Drawer */}
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center">
                <Image
                  src="/brand/logo.png"
                  alt="VENOMOUS Mark"
                  width={24}
                  height={24}
                />
              </div>
              <span className="font-mono text-base font-black tracking-[0.2em] text-[var(--text-primary)]">
                VENOMOUS
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links List */}
          <nav className="flex flex-col gap-3 py-8">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-2xl font-bold tracking-tight text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:translate-x-2 transition-all duration-200 py-2 border-b border-[var(--border)]/40"
              >
                <span>{item.name}</span>
                <span className="text-xs font-mono text-blue-500">0{idx + 1}</span>
              </Link>
            ))}
          </nav>

          {/* Drawer Footer CTA */}
          <div className="flex flex-col gap-4 pt-6 border-t border-[var(--border)]">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs font-mono text-[var(--text-muted)]">
              tafeses43@gmail.com • @hewerrrr
            </p>
          </div>
        </div>
      )}
    </>
  );
}
