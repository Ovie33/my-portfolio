"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowRight, Send, CheckCircle, } from "lucide-react";
import { siteOwner, socialLinks } from "@/lib/data";

// ─── Shared components ────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-[0.12em] mb-4">
      <span className="w-6 h-px bg-blue-600 inline-block" />
      {children}
    </p>
  );
}

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// ─── Contact details ──────────────────────────────────────────
const contactDetails = [
  {
    icon: <Mail size={20} className="text-blue-600" />,
    label: "Email",
    value: siteOwner.email,
    href: `mailto:${siteOwner.email}`,
  },
  {
    icon: <MapPin size={20} className="text-blue-600" />,
    label: "Location",
    value: "Rivers State, Nigeria",
    href: null,
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "oviemo-obukohwo",
    href: "https://linkedin.com/in/oviemo-obukohwo-00866a228",
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    value: "github.com/Ovie33",
    href: "https://github.com/Ovie33",
  },
];

// ─── What I'm open to ─────────────────────────────────────────
const openTo = [
  "Full-time engineering roles (remote / on-site)",
  "Freelance & contract projects",
  "Technical consultations",
  "Open-source collaborations",
];

// ─── Form state type ─────────────────────────────────────────
type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof fields>>({});

  function validate() {
    const e: Partial<typeof fields> = {};
    if (!fields.name.trim()) e.name = "Name is required";
    if (!fields.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Enter a valid email";
    if (!fields.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setFormState("sending");

    try {
      // ─── Wire up to your preferred form service ──────────────
      // Option A: Formspree — replace YOUR_FORM_ID at formspree.io
      // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST", headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(fields),
      // });
      // if (!res.ok) throw new Error();

      // Option B (fallback): open mailto
      const body = encodeURIComponent(
        `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
      );
      window.location.href = `mailto:${siteOwner.email}?subject=${encodeURIComponent(fields.subject || "Portfolio contact")}&body=${body}`;
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  function field(key: keyof typeof fields, label: string, type = "text", rows?: number) {
    const isTextarea = rows !== undefined;
    const base =
      "w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400";
    const errClass = errors[key] ? "border-red-300" : "border-slate-200";

    return (
      <div>
        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
          {label}
        </label>
        {isTextarea ? (
          <textarea
            id={`contact-${key}`}
            rows={rows}
            value={fields[key]}
            onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
            placeholder={`Your ${label.toLowerCase()}…`}
            className={`${base} ${errClass} resize-none`}
          />
        ) : (
          <input
            id={`contact-${key}`}
            type={type}
            value={fields[key]}
            onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
            placeholder={`Your ${label.toLowerCase()}…`}
            className={`${base} ${errClass}`}
          />
        )}
        {errors[key] && (
          <p className="text-xs text-red-500 mt-1">{errors[key]}</p>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f8f7f4] border-b border-slate-100">
        {/* Decorative vectors */}
        <svg className="absolute top-10 right-14 opacity-40 text-blue-600 float-slow pointer-events-none"
          width="44" height="44" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
          <path d="M24 0 L26.5 21.5 L48 24 L26.5 26.5 L24 48 L21.5 26.5 L0 24 L21.5 21.5 Z" />
        </svg>
        <svg className="absolute bottom-10 left-12 opacity-35 text-blue-500 float-medium pointer-events-none"
          width="30" height="30" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
          <path d="M24 0 L26.5 21.5 L48 24 L26.5 26.5 L24 48 L21.5 26.5 L0 24 L21.5 21.5 Z" />
        </svg>
        <svg className="absolute top-1/2 right-8 -translate-y-1/2 opacity-40 text-blue-600 float-fast pointer-events-none"
          width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <line x1="18" y1="0" x2="18" y2="36" />
          <line x1="0" y1="18" x2="36" y2="18" />
          <line x1="4" y1="4" x2="32" y2="32" />
          <line x1="32" y1="4" x2="4" y2="32" />
        </svg>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                great together.
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Whether it&apos;s a new project, a freelance opportunity, or just a
              conversation I&apos;m always happy to connect. Fill in the form or
              reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN: form + info ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

          {/* ── FORM ── */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle size={52} className="text-green-500" />
                <h2 className="text-2xl font-extrabold text-slate-900">Message sent!</h2>
                <p className="text-slate-500 max-w-sm">
                  Thanks for reaching out. Your default email client should have opened I&apos;ll
                  get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setFormState("idle"); setFields({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <SectionLabel>Send a Message</SectionLabel>
                  <p className="text-sm text-slate-400 -mt-2 mb-5">
                    I typically respond within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {field("name", "Name")}
                  {field("email", "Email", "email")}
                </div>
                {field("subject", "Subject")}
                {field("message", "Message", "text", 6)}

                {formState === "error" && (
                  <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    Something went wrong. Please try emailing me directly at{" "}
                    <a href={`mailto:${siteOwner.email}`} className="font-semibold underline">
                      {siteOwner.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-md self-start"
                >
                  {formState === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="flex flex-col gap-6">

            {/* Contact details */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                Contact Details
              </p>
              <div className="flex flex-col gap-4">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{c.label}</p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors truncate block"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-700">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open to */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                Open To
              </p>
              <ul className="flex flex-col gap-2.5">
                {openTo.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability badge */}
            {siteOwner.available && (
              <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-5 flex items-center gap-3">
                <span className="dot-blink w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-green-800">Currently available</p>
                  <p className="text-xs text-green-600 mt-0.5">Open to new opportunities</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA strip ────────────────────────────────── */}
      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Prefer to browse first?</p>
            <p className="text-slate-600 text-base">Check out my work and background.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 text-slate-700 font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-sm text-sm"
            >
              View Projects <ArrowRight size={14} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 text-slate-700 font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-sm text-sm"
            >
              About Me <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
