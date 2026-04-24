"use client";

import Image from "next/image";

interface Props {
  src: string;        // may be empty — handled gracefully
  alt: string;
  initials: string;   // shown as last-resort fallback
  figmaUrl?: string;  // if set, shows Figma-branded placeholder when src is empty
}

/**
 * Client-only component so onError (an event handler) is allowed.
 * Priority: real image → Figma-branded cover → initials placeholder.
 */
export default function ProjectCoverImage({ src, alt, initials, figmaUrl }: Props) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-white shadow-2xl shadow-slate-200/80">

      {/* Layer 1 — deepest fallback: initials on light gradient */}
      {!figmaUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 select-none">
          <span className="text-5xl font-extrabold text-slate-200">{initials}</span>
        </div>
      )}

      {/* Layer 1 (alt) — Figma-branded cover when no real image */}
      {figmaUrl && !src && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] via-[#2c2c54] to-[#0d99ff] flex flex-col items-center justify-center gap-4 select-none">
          <svg width="52" height="78" viewBox="0 0 38 57" fill="none" aria-hidden="true" className="drop-shadow-xl">
            <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#0d99ff"/>
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#a259ff"/>
            <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#f24e1e"/>
            <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#ff7262"/>
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#1abcfe"/>
          </svg>
          <span className="text-white/80 text-sm font-bold tracking-widest uppercase">Figma Designs</span>
        </div>
      )}

      {/* Layer 2 — real image on top when src is available */}
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top relative z-10"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      ) : null}
    </div>
  );
}
