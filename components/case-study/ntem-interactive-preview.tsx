"use client";

import { useState } from "react";

interface NtemInteractivePreviewProps {
  /** Full workbench — opened in a new tab, where there is room for it. */
  initialUrl?: string;
  /** Stripped-down build for the phone frame below. */
  embedUrl?: string;
}

/**
 * The prototype is a desktop workbench: sidebar, device frame, live-order panel.
 * Embedding that inside a 400px phone gives you a phone inside a phone.
 * So the frame loads `?embed=1`, which strips the workbench and renders the app
 * at real phone size — and the button sends you to the full thing.
 */
export default function NtemInteractivePreview({
  initialUrl = "https://ntem-prototype.vercel.app/",
  embedUrl = "https://ntem-prototype.vercel.app/?embed=1",
}: NtemInteractivePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState(0);

  const reset = () => {
    setIsLoading(true);
    setKey((k) => k + 1);
  };

  return (
    <div className="w-full rounded-[2.5rem] border border-white/10 bg-[#15100C] p-4 shadow-2xl sm:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E39B26]">
              Live interactive prototype
            </span>
          </div>

          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            Three apps, one live order
          </h3>

          <p className="mt-1 max-w-md text-sm text-white/60">
            Switch apps with the tabs on the phone. The order follows you — accept as
            the merchant and the customer&rsquo;s tracking screen updates.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Restart
          </button>

          <a
            href={initialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#B4441F] px-4 py-2 text-xs font-medium text-white transition hover:-translate-y-0.5"
          >
            Full workbench ↗
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
        {/* Phone */}
        <div className="relative w-full max-w-[380px] shrink-0">
          <div className="relative aspect-[400/820] w-full overflow-hidden rounded-[2.25rem] border-[10px] border-[#231A14] bg-black shadow-2xl shadow-black/70 ring-1 ring-white/10">
            <div className="pointer-events-none absolute left-1/2 top-1.5 z-30 h-4 w-24 -translate-x-1/2 rounded-full bg-[#231A14]" />

            {isLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#15100C] text-white">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#E39B26] border-t-transparent" />
                <p className="mt-3 text-xs font-medium text-white/60">
                  Loading Nt&#603;m&hellip;
                </p>
              </div>
            )}

            <iframe
              key={key}
              src={embedUrl}
              title="Ntɛm quick commerce prototype"
              className="h-full w-full border-0 bg-[#FDF9F5]"
              onLoad={() => setIsLoading(false)}
              loading="lazy"
            />
          </div>

          <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white/35">
            400 &times; 820 &middot; Pixel-class Android
          </p>
        </div>

        {/* What to try */}
        <div className="w-full max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Try this
          </p>

          <ol className="mt-5 space-y-4">
            {[
              ["Customer", "Build a basket across three stores, then pick a delivery outcome at checkout."],
              ["Merchant", "Accept as Yaa, Kofi and Adom. Then mark an item out of stock and offer a substitute."],
              ["Customer", "The exception is waiting on Tracking, with a live four-minute countdown."],
              ["Rider", "Go online. The run is sequenced so the chop bar is collected last."],
            ].map(([app, text], i) => (
              <li key={i} className="flex gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white/70">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-white/70">
                  <span className="font-semibold text-white">{app}</span> &mdash; {text}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/45">
            Do nothing when the substitution appears. It removes the item and refunds in
            full — inaction is always the free, safe outcome.
          </p>
        </div>
      </div>
    </div>
  );
}
