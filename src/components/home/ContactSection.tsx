"use client";

import React, { useState } from "react";
import { CONTACT_INFO } from "@/data/contactInfo";
import {
  Send,
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import {
  InstagramIcon,
  LinkedInIcon,
  GitHubIcon,
  TelegramIcon,
} from "@/components/ui/BrandIcons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    service: "Web Development",
    budget: "$3,000 - $5,000",
    timeline: "1 - 2 Months",
    projectDescription: "",
    honeyPot: "", // Spam prevention honeypot
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryId, setInquiryId] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setInquiryId(data.inquiryId);
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please reach out via email or Telegram.");
      }
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0B0B0B] dark:bg-[#0B0B0B] light:bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-[1.05] mb-4">
            Have A Project In Mind? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-orange-400">
              Let&apos;s Build It.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
            Tell me what you&apos;re building, what you need, and where you want to go. Every project inquiry receives personal scoping from Samuel Tafese.
          </p>
        </div>

        {/* 2-Column Conversion Layout: Quick Actions & Brief Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Quick Actions & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white border border-white/10 dark:border-white/10 light:border-black/5 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  DIRECT FAST CHANNELS
                </span>
                <h3 className="text-xl font-bold text-white dark:text-white light:text-zinc-900 uppercase">
                  Instant Connections
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Prefer chatting directly over instant messaging? Reach out right away through verified personal channels.
                </p>
              </div>

              {/* Quick Actions List */}
              <div className="space-y-3">
                {/* Email Direct */}
                <div className="p-4 rounded-xl bg-black/40 dark:bg-black/40 light:bg-zinc-50 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 uppercase block">
                        Official Inquiries
                      </span>
                      <a
                        href={CONTACT_INFO.emailHref}
                        className="text-sm font-bold text-white dark:text-white light:text-zinc-900 hover:text-blue-400 transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Telegram Direct */}
                <a
                  href={CONTACT_INFO.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-black/40 dark:bg-black/40 light:bg-zinc-50 border border-white/5 hover:border-blue-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-sky-600/20 text-sky-400 border border-sky-500/30">
                      <TelegramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 uppercase block">
                        Telegram Messaging
                      </span>
                      <span className="text-sm font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-sky-400 transition-colors">
                        {CONTACT_INFO.telegramHandle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>

                {/* Instagram Direct */}
                <a
                  href={CONTACT_INFO.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-black/40 dark:bg-black/40 light:bg-zinc-50 border border-white/5 hover:border-pink-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-pink-600/20 text-pink-400 border border-pink-500/30">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 uppercase block">
                        Instagram DM
                      </span>
                      <span className="text-sm font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-pink-400 transition-colors">
                        {CONTACT_INFO.instagramHandle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>

                {/* GitHub Direct */}
                <a
                  href={CONTACT_INFO.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-black/40 dark:bg-black/40 light:bg-zinc-50 border border-white/5 hover:border-zinc-400/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300 border border-white/10">
                      <GitHubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 uppercase block">
                        GitHub Profile
                      </span>
                      <span className="text-sm font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-zinc-300 transition-colors">
                        github.com/{CONTACT_INFO.githubHandle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>

                {/* LinkedIn Direct */}
                <a
                  href={CONTACT_INFO.linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-black/40 dark:bg-black/40 light:bg-zinc-50 border border-white/5 hover:border-blue-600/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-700/20 text-blue-400 border border-blue-600/30">
                      <LinkedInIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 uppercase block">
                        LinkedIn (Verified)
                      </span>
                      <span className="text-sm font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-blue-400 transition-colors">
                        linkedin.com/in/{CONTACT_INFO.linkedinHandle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>
              </div>
            </div>

            {/* Direct Scope Guarantee Note */}
            <div className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 font-mono text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="font-bold">Personal Response Within 24h</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                No middle managers or generic sales reps. You speak directly with Samuel Tafese from the first conversation to final delivery.
              </p>
            </div>
          </div>

          {/* Right Column: Full Scoping Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-black/5 shadow-2xl">
              {status === "success" ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                      INQUIRY LOGGED // {inquiryId}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-zinc-900 uppercase">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Samuel Tafese is reviewing your requirements and will reply via email ({formData.email}) within 24 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          fullName: "",
                          email: "",
                          businessName: "",
                          service: "Web Development",
                          budget: "$3,000 - $5,000",
                          timeline: "1 - 2 Months",
                          projectDescription: "",
                          honeyPot: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors"
                    >
                      Send Another Brief
                    </button>
                    <a
                      href={CONTACT_INFO.telegramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider transition-colors"
                    >
                      Message On Telegram
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-3 text-red-300 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot hidden input */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeyPot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeyPot}
                      onChange={(e) =>
                        setFormData({ ...formData, honeyPot: e.target.value })
                      }
                    />
                  </div>

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="fullName"
                        className="text-xs font-mono uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-700 block font-semibold"
                      >
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        placeholder="Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/50 dark:bg-black/50 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-mono uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-700 block font-semibold"
                      >
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/50 dark:bg-black/50 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Business Name & Service Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="businessName"
                        className="text-xs font-mono uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-700 block font-semibold"
                      >
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        placeholder="e.g. Apex Athletics"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            businessName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/50 dark:bg-black/50 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-xs font-mono uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-700 block font-semibold"
                      >
                        Service Required <span className="text-orange-500">*</span>
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/50 dark:bg-black/50 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-zinc-900 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      >
                        <option value="Web Development">01 Web Development</option>
                        <option value="Video Editing">02 Video Editing</option>
                        <option value="Graphic Design">03 Graphic Design</option>
                        <option value="Multiple Services">
                          Multiple Services (The VENOMOUS Triad)
                        </option>
                        <option value="Other">Other / Bespoke Scope</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="budget"
                        className="text-xs font-mono uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-700 block font-semibold"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/50 dark:bg-black/50 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-zinc-900 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      >
                        <option value="$1,500 - $3,000">$1,500 – $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 – $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 – $10,000</option>
                        <option value="$10,000+">$10,000+ (Full Studio Commission)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="timeline"
                        className="text-xs font-mono uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-700 block font-semibold"
                      >
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/50 dark:bg-black/50 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-zinc-900 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      >
                        <option value="Urgent (< 3 Weeks)">Urgent (&lt; 3 Weeks)</option>
                        <option value="1 - 2 Months">1 – 2 Months (Standard)</option>
                        <option value="2 - 3 Months">2 – 3 Months</option>
                        <option value="Flexible">Flexible / Ongoing Partnership</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Description */}
                  <div className="space-y-2">
                    <label
                      htmlFor="projectDescription"
                      className="text-xs font-mono uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-700 block font-semibold"
                    >
                      Project Description <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      required
                      rows={4}
                      placeholder="Outline your current situation, target audience, core objectives, and any reference links..."
                      value={formData.projectDescription}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectDescription: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/50 dark:bg-black/50 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-blue-600/30 border border-blue-400/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Verifying &amp; Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
