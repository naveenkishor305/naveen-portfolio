"use client";

import { useState } from "react";

type NadiLivePreviewProps = {
  baseUrl?: string;
};

/**
 * Nadi is gated behind real Supabase authentication, so there is no set of
 * public deep links to switch between the way Spine's documentation allows.
 * The honest preview is the login screen itself — which is where the
 * recruiter demo account lives, one click away from the real workspace.
 */
export default function NadiLivePreview({
  baseUrl = "https://hospital-os-mvp.vercel.app/",
}: NadiLivePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  const src = `${baseUrl}login`;
  const host = baseUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="w-full rounded-[2.5rem] border border-white/10 bg-[#150f24] p-4 shadow-2xl sm:p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-5 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c3b3ec]">
              Live application
            </span>
          </div>

          <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-white">
            Sign in and look around
          </h3>

          <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-white/55">
            Not screenshots — the deployed app. The login screen ships with a
            recruiter demo account, filled in with one click, so you can walk
            the real OPD workspace instead of reading about it.
          </p>
        </div>

        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#5b3fa6] px-5 py-2.5 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Open full screen ↗
        </a>
      </div>

      <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#1c1330] shadow-2xl">
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
              {host}/login
            </span>
          </div>

          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 sm:block">
            1440 × 900
          </span>
        </div>

        <div className="relative aspect-[16/10] w-full bg-[#0b1220]">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#150f24]">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#c3b3ec] border-t-transparent" />
              <p className="mt-3 text-xs font-medium text-white/50">
                Loading the workspace…
              </p>
            </div>
          )}

          <iframe
            src={src}
            title="Nadi — Hospital OS MVP login"
            className="h-full w-full border-0"
            onLoad={() => setIsLoading(false)}
            loading="lazy"
          />
        </div>
      </div>

      <p className="mt-4 text-center text-[13px] leading-relaxed text-white/45">
        <span className="font-medium text-white/70">Demo access</span> — the
        credentials on screen unlock patient access, scheduling, consultation,
        diagnostics, pharmacy, billing and visit closure.
      </p>
    </div>
  );
}
