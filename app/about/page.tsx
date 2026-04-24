"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Download, MapPin, Calendar, ExternalLink } from "lucide-react";
import {
  siteOwner,
  stats,
  experiences,
  skills,
  education,
  testimonials,
  socialLinks,
} from "@/lib/data";

// ─── Shared components ────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-[0.12em] mb-4">
      <span className="w-6 h-px bg-blue-600 inline-block" />
      {children}
    </p>
  );
}

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Skills grouped by category ───────────────────────────────
const skillCategories = ["Frontend", "Backend", "Mobile", "Database", "Tools & DevOps"] as const;

export default function AboutPage() {
  const skillsByCategory = skillCategories.map((cat) => ({
    category: cat,
    items: skills.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="min-h-screen">

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f8f7f4] border-b border-slate-100">
        {/* ── Decorative vectors (absolute, pointer-events-none) ── */}
        {/* 1 — 4-point star, top-right */}
        <svg
          className="absolute top-10 right-12 opacity-40 text-blue-600 float-slow pointer-events-none"
          width="48" height="48" viewBox="0 0 48 48" fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 0 L26.5 21.5 L48 24 L26.5 26.5 L24 48 L21.5 26.5 L0 24 L21.5 21.5 Z" />
        </svg>

        {/* 2 — smaller star, bottom-left */}
        <svg
          className="absolute bottom-16 left-10 opacity-35 text-blue-500 float-medium pointer-events-none"
          width="32" height="32" viewBox="0 0 48 48" fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 0 L26.5 21.5 L48 24 L26.5 26.5 L24 48 L21.5 26.5 L0 24 L21.5 21.5 Z" />
        </svg>

        {/* 3 — crossed lines / plus vector, mid-right */}
        <svg
          className="absolute top-1/2 right-6 -translate-y-1/2 opacity-40 text-blue-600 float-fast pointer-events-none"
          width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="18" y1="0" x2="18" y2="36" />
          <line x1="0" y1="18" x2="36" y2="18" />
          <line x1="4" y1="4" x2="32" y2="32" />
          <line x1="32" y1="4" x2="4" y2="32" />
        </svg>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <SectionLabel>About Me</SectionLabel>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Engineer. Builder.<br />
                <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                  Problem Solver.
                </span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                {siteOwner.bio}
              </p>
              <p className="text-base text-slate-400 leading-relaxed mb-8">
                I&apos;ve spent the last 6+ years turning complex problems into clean,
                scalable software from AI-powered analytics dashboards to fintech
                mobile apps and headless CMS platforms. I care deeply about code
                quality, user experience, and shipping things that actually work in
                production.
              </p>

              <div className="flex items-center gap-1.5 text-sm text-slate-400 mb-8">
                <MapPin size={14} className="text-blue-500 shrink-0" />
                Rivers State, Nigeria &mdash; working globally
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
                >
                  <Mail size={15} /> Get in Touch
                </Link>
                <Link
                  href={siteOwner.cvUrl}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <Download size={15} /> Download CV
                </Link>
              </div>
            </div>

            {/* Photo + quick facts */}
            <div className="flex flex-col gap-6">
              {/* Photo */}
              <div className="relative w-full max-w-xs mx-auto ">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-100 via-sky-50 to-slate-100 opacity-80" />
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white shadow-2xl shadow-slate-200/80">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 select-none">
                    <span className="text-7xl font-extrabold text-slate-200">{siteOwner.initials}</span>
                  </div>
                  <Image
                    src={siteOwner.profileImage}
                    alt={siteOwner.name}
                    fill
                    sizes="(max-width: 768px) 80vw, 320px"
                    className="object-cover object-top relative z-10"
                    priority
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 justify-center">
                {socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target={s.platform !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 text-slate-500 flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                  >
                    {s.platform === "GitHub" && <GitHubIcon />}
                    {s.platform === "LinkedIn" && <LinkedInIcon />}
                    {s.platform === "Email" && <Mail size={18} />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
            {stats.map((s) => (
              <div key={s.label} className="px-8 py-10 text-center">
                <div className="text-4xl font-extrabold text-slate-900 tracking-tight mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE ─────────────────────────────── */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-200 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-blue-600 bg-white items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-sm font-semibold text-blue-600">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                      <Calendar size={11} />
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────── */}
      <section id="skills" className="bg-slate-50 border-y border-slate-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Skills</SectionLabel>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Tools &amp; Technologies
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {skillsByCategory.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  {category}
                </p>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm rounded-xl px-4 py-2.5 transition-all group"
                    >
                      {skill.iconUrl && (
                        <img
                          src={skill.iconUrl}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                        />
                      )}
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ───────────────────────────────────────── */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <SectionLabel>Education</SectionLabel>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic background
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 shrink-0">
                <span className="text-blue-600 font-extrabold text-sm">{edu.id}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{edu.degree}</h3>
              <p className="text-sm font-semibold text-blue-600 mb-1">{edu.institution}</p>
              <p className="text-xs text-slate-400 mb-2">{edu.period}</p>
              {edu.detail && (
                <p className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 w-fit">
                  {edu.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              What clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-md transition-all flex flex-col"
              >
                {/* Quote mark */}
                <span className="text-4xl font-black text-blue-100 leading-none mb-3 select-none">&ldquo;</span>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 font-medium">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1e3a5f] to-slate-900 rounded-3xl px-10 py-20 text-center">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-600/20 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-sky-500/10 pointer-events-none" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-[0.12em] mb-4">
              <span className="w-6 h-px bg-blue-400 inline-block" />
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let&apos;s build something great.
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of something amazing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-900/30"
              >
                <Mail size={17} /> Send a Message
              </Link>
              <a
                href={`mailto:${siteOwner.email}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors"
              >
                {siteOwner.email}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
