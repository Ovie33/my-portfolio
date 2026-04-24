"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Download, MapPin } from "lucide-react";
import {
  siteOwner,
  stats,
  projects,
  experiences,
  socialLinks,
  getProjectCoverUrl,
} from "@/lib/data";

// ─── SVG icons ────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Section label ────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-[0.12em] mb-4">
      <span className="w-6 h-px bg-blue-600 inline-block" />
      {children}
    </p>
  );
}

// ─── Project teaser card ──────────────────────────────────────
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const coverUrl = getProjectCoverUrl(project);
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Cover */}
      <div className="relative w-full h-52 bg-gradient-to-br from-blue-50 to-slate-200 overflow-hidden shrink-0">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        ) : project.figmaUrl ? (
          /* Figma-branded cover for design-only projects */
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] via-[#2c2c54] to-[#0d99ff] flex flex-col items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-500">
            <svg width="36" height="54" viewBox="0 0 38 57" fill="none" aria-hidden="true" className="drop-shadow-lg">
              <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#0d99ff"/>
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#a259ff"/>
              <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#f24e1e"/>
              <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#ff7262"/>
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#1abcfe"/>
            </svg>
            <span className="text-white/90 text-xs font-bold tracking-widest uppercase">Figma Designs</span>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-extrabold text-slate-300 select-none">
              {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}
        <span className="absolute top-4 left-4 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full z-10">
          {project.category}
        </span>
        <span className="absolute top-4 right-4 text-xs font-semibold text-slate-500 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs font-medium text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-md">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
          {project.figmaUrl && !project.liveUrl ? "View Design" : "View Case Study"} <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const latestJob = experiences[0];

  return (
    <div className="min-h-screen">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#f8f7f4]">
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full bg-blue-200 opacity-30 blur-3xl pointer-events-none" />

        {/* ── Decorative vectors ── */}
        {/* 1 — large 4-point star, top-left */}
        <svg
          className="absolute top-14 left-10 opacity-40 text-blue-600 float-slow pointer-events-none"
          width="52" height="52" viewBox="0 0 48 48" fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 0 L26.5 21.5 L48 24 L26.5 26.5 L24 48 L21.5 26.5 L0 24 L21.5 21.5 Z" />
        </svg>

        {/* 2 — medium star, bottom-right */}
        <svg
          className="absolute bottom-20 right-16 opacity-35 text-blue-500 float-medium pointer-events-none"
          width="38" height="38" viewBox="0 0 48 48" fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 0 L26.5 21.5 L48 24 L26.5 26.5 L24 48 L21.5 26.5 L0 24 L21.5 21.5 Z" />
        </svg>

        {/* 3 — cross/plus lines, top-right corner */}
        <svg
          className="absolute top-12 right-10 opacity-40 text-blue-600 float-fast pointer-events-none"
          width="40" height="40" viewBox="0 0 36 36" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="18" y1="0" x2="18" y2="36" />
          <line x1="0" y1="18" x2="36" y2="18" />
          <line x1="4" y1="4" x2="32" y2="32" />
          <line x1="32" y1="4" x2="4" y2="32" />
        </svg>

        {/* 4 — ring / circle, mid-left */}
        <svg
          className="absolute top-1/2 left-8 -translate-y-1/2 opacity-35 text-blue-500 float-medium pointer-events-none"
          width="30" height="30" viewBox="0 0 30 30" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          aria-hidden="true"
          style={{ animationDelay: "1.2s" }}
        >
          <circle cx="15" cy="15" r="12" />
          <circle cx="15" cy="15" r="6" />
        </svg>

        {/* 5 — tiny 4-point star, bottom-left */}
        <svg
          className="absolute bottom-12 left-1/4 opacity-40 text-blue-600 float-slow pointer-events-none"
          width="24" height="24" viewBox="0 0 48 48" fill="currentColor"
          aria-hidden="true"
          style={{ animationDelay: "2.1s" }}
        >
          <path d="M24 0 L26.5 21.5 L48 24 L26.5 26.5 L24 48 L21.5 26.5 L0 24 L21.5 21.5 Z" />
        </svg>

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: text content ── */}
            <div>
              {/* Available badge */}
              {siteOwner.available && (
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-4 py-1.5 mb-8">
                  <span className="dot-blink w-2 h-2 rounded-full bg-green-500 inline-block" />
                  <span className="text-xs font-semibold text-slate-600">Available for new opportunities</span>
                </div>
              )}

              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.04] text-slate-900 mb-6">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                    {siteOwner.name}
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full opacity-25" />
                </span>
                .
              </h1>

              <p className="text-xl md:text-2xl font-medium text-slate-500 leading-relaxed mb-6 max-w-2xl">
                {siteOwner.title} — building scalable, production-ready applications with clean architecture and sharp UX.
              </p>

              <p className="text-base text-slate-400 leading-relaxed mb-8 max-w-xl">
                {siteOwner.bio}
              </p>

              <div className="flex items-center gap-1.5 text-sm text-slate-400 mb-10">
                <MapPin size={14} className="text-blue-500 shrink-0" />
                Based in Nigeria &mdash; working globally
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-md"
                >
                  View My Work <ArrowRight size={16} />
                </Link>
                <Link
                  href={siteOwner.cvUrl}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <Download size={16} /> Download CV
                </Link>
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
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

            {/* ── RIGHT: profile image ── */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Outer decorative ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 via-sky-50 to-slate-100 opacity-80" />
                {/* Subtle grid overlay on the frame */}
                <div
                  className="absolute -inset-4 rounded-3xl opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Image container */}
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 border-white shadow-2xl shadow-slate-200/80">
                  <Image
                    src={siteOwner.profileImage}
                    alt={`${siteOwner.name} — ${siteOwner.title}`}
                    fill
                    sizes="320px"
                    className="object-cover object-top"
                    priority
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>

                {/* Floating experience badge */}
                <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-extrabold">6+</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 leading-none">Years of</p>
                    <p className="text-xs text-slate-400 leading-none mt-0.5">Experience</p>
                  </div>
                </div>

                {/* Floating stack badge */}
                <div className="absolute -top-4 -right-4 bg-white border border-slate-100 shadow-lg rounded-2xl px-3 py-2.5 text-center">
                  <p className="text-xs font-bold text-slate-800">Full-Stack</p>
                  <p className="text-[10px] text-blue-500 font-semibold mt-0.5">React · Node · Next</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 animate-bounce">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent" />
        </div>
      </section>


      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="bg-white border-y border-slate-100">
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

      {/* ── ABOUT SNIPPET ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Engineering with precision,<br />shipped with purpose.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">{siteOwner.bio}</p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Currently working as a{" "}
              <span className="font-semibold text-slate-700">{latestJob.role}</span>{" "}
              at{" "}
              <span className="font-semibold text-blue-600">{latestJob.company}</span>,
              building tools that bring real data to real users.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all"
            >
              More about me <ArrowRight size={14} />
            </Link>
          </div>

          {/* Quick facts */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Quick Facts</p>
            {[
              { label: "Location", value: "Delta State, Nigeria" },
              { label: "Experience", value: "6+ Years" },
              { label: "Specialty", value: "React · Next.js · Node.js" },
              { label: "Education", value: "B.Sc. Computer Science" },
              { label: "Languages", value: "English (Fluent)" },
              { label: "Status", value: siteOwner.available ? "✅  Open to Work" : "Not Available" },
            ].map((fact) => (
              <div key={fact.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                <span className="text-sm text-slate-400 font-medium">{fact.label}</span>
                <span className="text-sm text-slate-700 font-semibold">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ───────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Projects I&apos;ve shipped</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all whitespace-nowrap">
              View all projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE STRIP ────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Where I&apos;ve worked</h2>
          </div>
          <Link href="/about#experience" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all whitespace-nowrap">
            Full experience <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white border border-slate-200 rounded-2xl px-8 py-6 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <span className="text-3xl font-extrabold text-slate-100 w-10 shrink-0 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-slate-800">{exp.role}</p>
                <p className="text-sm font-semibold text-blue-600">{exp.company}</p>
              </div>
              <div className="hidden lg:flex flex-wrap gap-1.5">
                {exp.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                {exp.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
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
