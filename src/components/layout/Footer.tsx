"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/data/contactInfo";
import { ArrowUp, Mail } from "lucide-react";
import {
  InstagramIcon,
  LinkedInIcon,
  GitHubIcon,
  TelegramIcon,
} from "@/components/ui/BrandIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: CONTACT_INFO.instagramHref,
      icon: InstagramIcon,
    },
    {
      name: "Telegram",
      href: CONTACT_INFO.telegramHref,
      icon: TelegramIcon,
    },
    {
      name: "GitHub",
      href: CONTACT_INFO.githubHref,
      icon: GitHubIcon,
    },
    {
      name: "LinkedIn",
      href: CONTACT_INFO.linkedinHref,
      icon: LinkedInIcon,
    },
    {
      name: "Email",
      href: CONTACT_INFO.emailHref,
      icon: Mail,
    },
  ];

  return (
    <footer className="relative bg-[var(--footer-bg)] text-[var(--text-primary)] border-t border-[var(--border)] overflow-hidden transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--border)] items-start">
          {/* Brand & Descriptor Column */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
              <div className="relative w-8 h-8 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Image
                  src="/brand/logo.png"
                  alt="VENOMOUS Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-mono text-xl font-black tracking-[0.25em] text-[var(--text-primary)] uppercase">
                VENOMOUS
              </span>
            </Link>

            <p className="text-sm font-mono text-[var(--text-secondary)] max-w-sm tracking-wider uppercase font-medium">
              Web Development • Video Editing • Graphic Design
            </p>

            <p className="text-xs text-[var(--text-secondary)] max-w-md leading-relaxed font-normal">
              Official digital creative studio founded by Samuel Tafese. Helping businesses build a stronger, unforgettable digital presence through bespoke engineering, cinematic video, and vector recognition.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block font-semibold">
              Navigation
            </span>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block font-semibold">
              Connect
            </span>
            <ul className="space-y-2.5">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Back to top & Final Brand Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            <p>© 2026 VENOMOUS. All rights reserved.</p>
            <p className="text-[var(--text-muted)] mt-1">
              Built with creativity, code, and purpose.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-[11px]">
              VENOMOUS — BUILD. EDIT. DESIGN.
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-blue-500 hover:text-[var(--text-primary)] transition-all text-[var(--text-secondary)] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
