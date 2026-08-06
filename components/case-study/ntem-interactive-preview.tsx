"use client";

import { useState } from "react";

interface NtemInteractivePreviewProps {
  initialUrl?: string;
}

export default function NtemInteractivePreview({
  initialUrl = "https://ntem-prototype.vercel.app/",
}: NtemInteractivePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full rounded-[2.5rem] border border-white/10 bg-[#15100C] p-4 sm:p-8 shadow-2xl">
      {/* Header controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E39B26]">
              Live Interactive Prototype
            </span>
          </div>
          <h3 className="mt-1 text-2xl font-semibold text-white tracking-tight">
            Interact with Ntɛm in Real Time
          </h3>
          <p className="mt-1 text-sm text-white/60">
            Test the three-sided quick-commerce flow directly inside this frame.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={initialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Open in new tab ↗
          </a>
        </div>
      </div>

      {/* Embedded Mobile Device Frame */}
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center">
        <div className="relative aspect-[9/18] w-full max-w-[380px] overflow-hidden rounded-[2.5rem] border-[8px] border-[#231A14] bg-black shadow-2xl shadow-black/80 ring-1 ring-white/10 sm:aspect-[9/17] sm:max-w-[400px]">
          {/* Phone Notch */}
          <div className="absolute top-2 left-1/2 z-30 h-4 w-28 -translate-x-1/2 rounded-full bg-black" />

          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#15100C] text-white">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#E39B26] border-t-transparent" />
              <p className="mt-3 text-xs font-medium text-white/60">Loading Ntɛm Prototype...</p>
            </div>
          )}

          {/* Live Application Iframe */}
          <iframe
            src={initialUrl}
            title="Ntɛm Quick Commerce Interactive Prototype"
            className="h-full w-full border-0 bg-white"
            onLoad={() => setIsLoading(false)}
            allow="geolocation; microphone; camera"
          />
        </div>

        <p className="mt-4 text-center text-xs text-white/50">
          Tip: You can add items, review store subtotals, and test the multi-merchant basket directly above.
        </p>
      </div>
    </div>
  );
}
