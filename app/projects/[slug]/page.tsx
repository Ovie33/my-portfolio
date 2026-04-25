import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { projects, getProjectBySlug, getProjectCoverUrl } from "@/lib/data";
import ProjectCoverImage from "@/components/ui/ProjectCoverImage";
import type { Metadata } from "next";

// ─── Static params (pre-render all project pages) ─────────────
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ─── Dynamic metadata ─────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

// ─── Category colour map ──────────────────────────────────────
const catColours: Record<string, string> = {
  Dashboard:    "text-purple-700 bg-purple-50 border-purple-200",
  Fintech:      "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Web App":    "text-blue-700 bg-blue-50 border-blue-200",
  Mobile:       "text-orange-700 bg-orange-50 border-orange-200",
  "E-Commerce": "text-pink-700 bg-pink-50 border-pink-200",
  EdTech:       "text-sky-700 bg-sky-50 border-sky-200",
  Platform:     "text-indigo-700 bg-indigo-50 border-indigo-200",
  AI:           "text-violet-700 bg-violet-50 border-violet-200",
};

// ─── Section block ────────────────────────────────────────────
function CaseBlock({
  icon,
  heading,
  body,
}: {
  icon: React.ReactNode;
  heading: string;
  body: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          {icon}
        </div>
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">{heading}</h3>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const coverUrl = getProjectCoverUrl(project);
  const catClass = catColours[project.category] ?? "text-slate-600 bg-slate-50 border-slate-200";

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen">

      {/* ── BACK NAV ──────────────────────────────────────── */}
      <div className="bg-[#f8f7f4] border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
        </div>
      </div>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="bg-[#f8f7f4] border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: meta */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`text-xs font-bold border px-3 py-1 rounded-full ${catClass}`}>
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-white border border-slate-100 px-3 py-1 rounded-full">
                  <Calendar size={11} /> {project.year}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">{project.tagline}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
                  >
                    <ExternalLink size={14} /> View Live Site
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1e1e1e] hover:bg-[#0d99ff] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
                  >
                    {/* Figma logo */}
                    <svg width="14" height="14" viewBox="0 0 38 57" fill="none" aria-hidden="true">
                      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="currentColor"/>
                      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="currentColor"/>
                      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="currentColor"/>
                      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="currentColor"/>
                      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="currentColor"/>
                    </svg>
                    View in Figma
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Right: cover image */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-100 via-sky-50 to-slate-100 opacity-60" />
              <div className="relative">
                <ProjectCoverImage
                  src={coverUrl}
                  alt={`${project.title} screenshot`}
                  initials={project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  figmaUrl={project.figmaUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Overview */}
        <div className="max-w-3xl mb-14">
          <p className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-[0.12em] mb-4">
            <span className="w-6 h-px bg-blue-600 inline-block" />
            Overview
          </p>
          <p className="text-xl text-slate-600 leading-relaxed">{project.overview}</p>
        </div>

        {/* Challenge / Solution / Outcome grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <CaseBlock
            heading="The Challenge"
            body={project.challenge}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r="0.5" fill="currentColor" />
              </svg>
            }
          />
          <CaseBlock
            heading="The Solution"
            body={project.solution}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            }
          />
          <CaseBlock
            heading="The Outcome"
            body={project.outcome}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
              </svg>
            }
          />
        </div>

        {/* Additional screenshots */}
        {project.images && project.images.length > 0 && (
          <div className="mb-16">
            <p className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-[0.12em] mb-6">
              <span className="w-6 h-px bg-blue-600 inline-block" />
              Screenshots
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, i) => (
                <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                  <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Figma prototype embed */}
        {project.figmaUrl && (
          <div className="mb-16">
            <p className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-[0.12em] mb-6">
              <span className="w-6 h-px bg-blue-600 inline-block" />
              {project.liveUrl ? "Design Prototype" : "Design Preview"}
            </p>
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50" style={{ height: "700px" }}>
              <iframe
                src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.figmaUrl)}`}
                className="w-full h-full"
                allowFullScreen
                title={`${project.title} Figma design`}
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 text-center">
              Can&apos;t see the embed?{" "}
              <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Open directly in Figma ↗
              </a>
            </p>
          </div>
        )}
      </section>

      {/* ── PROJECT NAVIGATION ────────────────────────────── */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex-1 flex items-center gap-4 bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-2xl px-6 py-5 transition-all"
              >
                <ArrowLeft size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Previous</p>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">{prev.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold px-6 py-5 rounded-2xl transition-colors text-sm"
            >
              All Projects
            </Link>

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex-1 flex items-center justify-end gap-4 bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-2xl px-6 py-5 transition-all"
              >
                <div className="min-w-0 text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Next</p>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">{next.title}</p>
                </div>
                <ArrowLeft size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors shrink-0 rotate-180" />
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </section>

    </div>
  );
}
