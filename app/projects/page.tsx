"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  projects,
  getProjectCategories,
  getProjectCoverUrl,
} from "@/lib/data";
import type { Project } from "@/lib/types";

// ─── Shared ───────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-[0.12em] mb-4">
      <span className="w-6 h-px bg-blue-600 inline-block" />
      {children}
    </p>
  );
}

// ─── Category pill ────────────────────────────────────────────
function CategoryBadge({ label }: { label: string }) {
  const colours: Record<string, string> = {
    Dashboard: "text-purple-700 bg-purple-50 border-purple-200",
    Fintech: "text-emerald-700 bg-emerald-50 border-emerald-200",
    "Web App": "text-blue-700 bg-blue-50 border-blue-200",
    Mobile: "text-orange-700 bg-orange-50 border-orange-200",
    "E-Commerce": "text-pink-700 bg-pink-50 border-pink-200",
    EdTech: "text-sky-700 bg-sky-50 border-sky-200",
    Platform: "text-indigo-700 bg-indigo-50 border-indigo-200",
    AI: "text-violet-700 bg-violet-50 border-violet-200",
  };
  return (
    <span className={`text-xs font-bold border px-3 py-1 rounded-full ${colours[label] ?? "text-slate-600 bg-slate-50 border-slate-200"}`}>
      {label}
    </span>
  );
}

// ─── Project card ─────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const coverUrl = getProjectCoverUrl(project);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Cover image */}
      <div className="relative w-full h-52 bg-gradient-to-br from-blue-50 to-slate-200 dark:from-slate-700 dark:to-slate-600 overflow-hidden shrink-0">
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
            {/* Figma logo */}
            <svg width="36" height="54" viewBox="0 0 38 57" fill="none" aria-hidden="true" className="drop-shadow-lg">
              <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#0d99ff" />
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#a259ff" />
              <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#f24e1e" />
              <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#ff7262" />
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#1abcfe" />
            </svg>
            <span className="text-white/90 text-xs font-bold tracking-widest uppercase">Figma Designs</span>
          </div>
        ) : (
          /* Generic placeholder */
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-extrabold text-slate-300 select-none">
              {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <CategoryBadge label={project.category} />
        </div>
        <span className="absolute top-4 right-4 text-xs font-semibold text-slate-500 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 px-2.5 py-0.5 rounded-md">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs font-medium text-slate-400 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 px-2.5 py-0.5 rounded-md">
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
export default function ProjectsPage() {
  const categories = getProjectCategories();
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f8f7f4] dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        {/* Decorative vectors */}
        <svg className="absolute top-10 right-14 opacity-40 text-blue-600 float-slow pointer-events-none"
          width="44" height="44" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
          <path d="M24 0 L26.5 21.5 L48 24 L26.5 26.5 L24 48 L21.5 26.5 L0 24 L21.5 21.5 Z" />
        </svg>
        <svg className="absolute bottom-8 left-12 opacity-35 text-blue-500 float-medium pointer-events-none"
          width="28" height="28" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
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
            <SectionLabel>My Work</SectionLabel>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
              Projects I&apos;ve{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                shipped.
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              A collection of production-grade work from fintech mobile apps and AI dashboards to
              e-commerce platforms and community tools. Each project is a real problem solved with
              real technology.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-all ${active === cat
                ? "bg-slate-900 text-white border-slate-900 dark:bg-blue-600 dark:border-blue-600"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {cat}
              {cat !== "All" && (
                <span className={`ml-1.5 text-xs ${active === cat ? "text-slate-300" : "text-slate-400"}`}>
                  {projects.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-slate-400 mb-8">
          Showing <span className="font-semibold text-slate-600 dark:text-slate-300">{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
          {active !== "All" && <> in <span className="font-semibold text-blue-600">{active}</span></>}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1e3a5f] to-slate-900 rounded-3xl px-10 py-16 text-center">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-600/20 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-sky-500/10 pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.12em] mb-3">
              Have a project in mind?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Let&apos;s build something great.
            </h2>
            <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
              I&apos;m currently available for freelance and full-time opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-900/30"
            >
              Get In Touch <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
