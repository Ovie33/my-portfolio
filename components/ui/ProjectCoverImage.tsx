"use client";

import Image from "next/image";

interface Props {
  src: string;      // may be empty — handled gracefully
  alt: string;
  initials: string; // shown as fallback
}

/**
 * Client-only component so onError (an event handler) is allowed.
 * The placeholder renders underneath; the photo sits on top via z-10.
 */
export default function ProjectCoverImage({ src, alt, initials }: Props) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-white shadow-2xl shadow-slate-200/80">
      {/* Placeholder — always visible underneath */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 select-none">
        <span className="text-5xl font-extrabold text-slate-200">{initials}</span>
      </div>

      {/* Only mount Image when src is a non-empty string */}
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
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
