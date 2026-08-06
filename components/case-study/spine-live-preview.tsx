"use client";

import { useState } from "react";

type SpineLivePreviewProps = {
  baseUrl?: string;
};

/**
 * Spine is a desktop-first documentation site, so it gets browser chrome rather
 * than a phone frame. The deep links let a visitor land on a specific chapter
 * instead of the overview, which is the difference between "here is a website"
 * and "here is the argument I just made, running."
 */
const VIEWS = [
  {
    id: "overview",
    label: "Overview",
    hash: "#overview",
    note: "System scope, the OPD journey and who each workspace is for.",
  },
  {
    id: "foundations",
    label: "Foundations",
    hash: "#foundations",
    note: "Colour, type, spacing and elevation — the shared vocabulary.",
  },
  {
    id: "clinical-patterns",
    label: "Clinical patterns",
    hash: "#clinical-patterns",
    note: "The connected outpatient workflow, end to end.",
  },
  {
    id: "accessibility",
    label: "Accessibility",
    hash: "#accessibility",
    note: "Keyboard access, focus, contrast and reduced motion as requirements.",
  },
] as const;

export default function SpineLivePreview({
  baseUrl = "https://spine-design-system.vercel.app/",
}: SpineLivePreviewProps) {
  const [view, setView] = useState<(typeof VIEWS)[number]>(VIEWS[0]);
  const [isLoading, setIsLoading] = useState(true);

  const src = `${baseUrl}${view.hash}`;

  const goTo = (next: (typeof VIEWS)[number]) => {
    if (next.id === view.id) return;
    setIsLoading(true);
    setView(next);
  };

  return (
    <div className="w-full rounded-[2.5rem] border border-white/10 bg-[#0d1817] p-4 shadow-2xl sm:p-8">
      {/* header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-5 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7fc9c4]">
              Live design system
            </span>
          </div>

          <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-[#f5faf9]">
            The system, running
          </h3>

          <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-white/55">
            Not screenshots of a design file — the deployed documentation site.
            Jump to a chapter below, or open it full screen.
          </p>
        </div>

        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#176e6a] px-5 py-2.5 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Open full screen ↗
        </a>
      </div>

      {/* chapter switcher */}
      <div className="mb-5 flex flex-wrap gap-2">
        {VIEWS.map((v) => (
          <button
            key={v.id}
            onClick={() => goTo(v)}
            aria-pressed={view.id === v.id}
            className={[
              "rounded-full px-4 py-2 text-xs font-medium transition-colors",
              view.id === v.id
                ? "bg-[#dcebea] text-[#0d1817]"
                : "border border-white/15 text-white/60 hover:border-white/35 hover:text-white",
            ].join(" ")}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* browser frame */}
      <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#12201f] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>

          <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-full bg-black/40 px-3.5 py-1.5">
            <span aria-hidden="true" className="text-[10px] text-emerald-400">
              ●
            </span>
            <span className="truncate font-mono text-[11px] text-white/45">
              spine-design-system.vercel.app/{view.hash}
            </span>
          </div>

          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 sm:block">
            1440 × 900
          </span>
        </div>

        <div className="relative aspect-[16/10] w-full bg-[#f5faf9]">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#12201f]">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#7fc9c4] border-t-transparent" />
              <p className="mt-3 text-xs font-medium text-white/50">
                Loading {view.label.toLowerCase()}…
              </p>
            </div>
          )}

          <iframe
            key={view.id}
            src={src}
            title={`Spine Design System — ${view.label}`}
            className="h-full w-full border-0"
            onLoad={() => setIsLoading(false)}
            loading="lazy"
          />
        </div>
      </div>

      <p className="mt-4 text-center text-[13px] leading-relaxed text-white/45">
        <span className="font-medium text-white/70">{view.label}</span> &mdash;{" "}
        {view.note}
      </p>
    </div>
  );
}
