"use client";

import { Mail, MapPin, Globe } from "lucide-react";
import { siteOwner, experiences, education, projects } from "@/lib/data";


// ─── Skill categories to show in sidebar ─────────────────────
const sidebarSkills: { heading: string; items: string[] }[] = [
  {
    heading: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
  },
  {
    heading: "Frontend",
    items: ["React.js", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    heading: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    heading: "Databases & Infrastructure",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Docker", "Git"],
  },
];

// ─── Section heading component ────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <h2 className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-900 whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-slate-300" />
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      {/* ── Print / Download button (screen only) ─────────────── */}
      <div className="print:hidden flex justify-end max-w-[900px] mx-auto px-6 pt-6 pb-2">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
        >
          ⬇ Download / Print PDF
        </button>
      </div>

      {/* ── Resume document ───────────────────────────────────── */}
      <div
        id="resume"
        className="max-w-[900px] mx-auto bg-white shadow-xl print:shadow-none my-4 print:my-0"
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      >
        {/* ════ HEADER ════════════════════════════════════════ */}
        <header className="px-12 py-10 border-b border-slate-200">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase mb-1">
            {siteOwner.name}
          </h1>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.15em] mb-5">
            {siteOwner.title}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Mail size={11} className="text-slate-400" />
              {siteOwner.email}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} className="text-slate-400" />
              Delta State, Nigeria
            </span>
            <span className="flex items-center gap-1.5">
              <Globe size={11} className="text-slate-400" />
              github.com/Ovie33
            </span>
            <span className="flex items-center gap-1.5">
              <Globe size={11} className="text-slate-400" />
              linkedin.com/in/oviemo-obukohwo-00866a228
            </span>
          </div>
        </header>

        {/* ════ BODY: two-column layout ═══════════════════════ */}
        <div className="flex">

          {/* ── MAIN COLUMN (left ~65%) ── */}
          <main className="flex-1 px-12 py-8 min-w-0">

            {/* SUMMARY */}
            <section className="mb-8">
              <SectionHeading>Summary</SectionHeading>
              <p className="text-[12.5px] text-slate-600 leading-relaxed">
                Full-Stack Software Engineer with <strong>6+ years</strong> of
                hands-on experience building scalable, production-ready applications
                across the full technology stack. Proficient in{" "}
                <strong>React, Next.js, Node.js, TypeScript, and Python</strong>.
                Passionate about clean architecture, automation, SEO accessibility,
                and data-driven products. Proven ability to deliver systems that
                perform, scale, and delight — collaborating across teams in
                fast-paced environments. Based in Nigeria, working globally.
              </p>
            </section>

            {/* PROFESSIONAL EXPERIENCE */}
            <section className="mb-8">
              <SectionHeading>Professional Experience</SectionHeading>
              <div className="flex flex-col gap-6">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <p className="text-[13px] font-bold text-slate-900">{exp.role}</p>
                        <p className="text-[12px] font-semibold text-slate-500">{exp.company}</p>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap shrink-0 mt-0.5">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-[12px] text-slate-600 leading-relaxed mb-2">
                      {exp.description}
                    </p>
                    <p className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider">
                      {exp.tech.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SELECTED PROJECTS */}
            <section className="mb-8">
              <SectionHeading>Selected Projects</SectionHeading>
              <div className="flex flex-col gap-5">
                {projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-[13px] font-bold text-slate-900">{project.title}</p>
                        <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10.5px] text-blue-600 hover:underline print:underline whitespace-nowrap"
                          >
                            View Live ↗
                          </a>
                        )}
                        <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-[12px] text-slate-600 leading-relaxed mb-1.5">
                      {project.outcome}
                    </p>
                    <p className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider">
                      {project.tech.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </main>


          {/* ── SIDEBAR (right ~35%) ── */}
          <aside className="w-[260px] shrink-0 bg-slate-50 border-l border-slate-200 px-7 py-8 print:bg-white">

            {/* EXPERTISE */}
            <section className="mb-7">
              <SectionHeading>Expertise</SectionHeading>
              <div className="flex flex-col gap-4">
                {sidebarSkills.map((group) => (
                  <div key={group.heading}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 mb-1.5">
                      {group.heading}
                    </p>
                    <div className="flex flex-col gap-0.5">
                      {group.items.map((item) => (
                        <p key={item} className="text-[12px] text-slate-700">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            <section className="mb-7">
              <SectionHeading>Education</SectionHeading>
              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-[12px] font-bold text-slate-900 leading-snug">{edu.degree}</p>
                    <p className="text-[11.5px] text-slate-500 leading-snug">{edu.institution}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{edu.period}</p>
                    {edu.detail && (
                      <p className="text-[11px] text-slate-400">{edu.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* AVAILABILITY */}
            <section>
              <SectionHeading>Status</SectionHeading>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[11px] font-semibold text-green-700">
                  {siteOwner.available ? "Open to Work" : "Not Available"}
                </span>
              </div>
            </section>

          </aside>
        </div>
      </div>

      {/* ── Print styles ──────────────────────────────────────── */}
      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          nav, footer, button { display: none !important; }
          #resume { max-width: 100% !important; margin: 0 !important; box-shadow: none !important; }
        }
      `}</style>
    </>
  );
}
