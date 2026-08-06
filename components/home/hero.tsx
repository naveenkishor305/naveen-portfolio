"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import GridBackdrop from "@/components/ui/grid-backdrop";
import Crosshair from "@/components/ui/crosshair";
import { projects } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  "Enterprise SaaS",
  "Information architecture",
  "Interaction design",
  "Design systems",
  "Front-end prototyping",
];

/* The hero used to describe a process. A process is a claim; the work is
   evidence. So the panel now lists what actually exists, with the two builds
   you can open in a browser marked as such. */
const liveCount = projects.filter((p) => p.liveUrl).length;

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-14">
      <GridBackdrop />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-[#c96b48]/10 blur-3xl"
      />

      <div className="mx-auto grid min-h-[calc(100svh-110px)] w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* ───────────────────────────────────────────── left ── */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/45 px-3 py-2 text-xs font-medium backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse rounded-full bg-emerald-600"
            />
            Open to product design opportunities
          </div>

          <p className="mt-9 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Naveen Kishore · Product Designer
          </p>

          <h1 className="mt-5 max-w-4xl text-[clamp(3.25rem,8.4vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.062em]">
            I simplify
            <span className="block text-neutral-400">complex software.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600 sm:text-xl">
            I map how a business actually runs before I open Figma — then design
            the interface that fits it, and build enough of it to know the
            decisions hold.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore selected work
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              >
                ↘
              </span>
            </a>

            <a
              href="https://ntem-prototype.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3.5 text-sm font-medium transition-colors hover:border-black hover:bg-white/60"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a4532f]"
              />
              Open a live prototype
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href="/naveen-kishore-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
            >
              Résumé
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </div>

          <ul
            aria-label="Design capabilities"
            className="mt-12 flex max-w-2xl flex-wrap gap-x-6 gap-y-3 border-t border-black/15 pt-6"
          >
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-center gap-2 text-sm text-neutral-600"
              >
                <span aria-hidden="true" className="text-neutral-400">
                  +
                </span>
                {capability}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ──────────────────────────────────────────── right ── */}
        <motion.aside
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          aria-label="Selected work at a glance"
          className="relative overflow-hidden rounded-[2rem] bg-[#111111] p-7 text-white shadow-2xl sm:p-8"
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#c96b48]/30 blur-3xl"
          />

          <Crosshair className="absolute left-4 top-4 h-3 w-3 text-white/20" />

          <div className="relative">
            <div className="flex items-center justify-between gap-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                The work, in numbers
              </p>
              <span className="font-mono text-xs text-white/35">
                01—0{projects.length}
              </span>
            </div>

            <div className="mt-7 divide-y divide-white/12 border-y border-white/12">
              {projects.map((project) => (
                <Link
                  key={project.number}
                  href={project.href}
                  className="group/row grid grid-cols-[1.75rem_1fr_auto] items-start gap-4 py-4 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="pt-0.5 font-mono text-xs text-[#dc8b6c]">
                    {project.number}
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="truncate text-[15px] font-medium tracking-tight">
                        {project.title.replace(/\.$/, "")}
                      </h2>
                      {project.liveUrl && (
                        <span className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-emerald-300">
                          <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
                          Live
                        </span>
                      )}
                    </div>

                    {project.metrics && (
                      <p className="mt-1.5 text-[13px] leading-5 text-white/50">
                        {project.metrics
                          .map((m) => `${m.value} ${m.label.toLowerCase()}`)
                          .join(" · ")}
                      </p>
                    )}
                  </div>

                  <span
                    aria-hidden="true"
                    className="pt-0.5 text-white/25 transition-all duration-300 group-hover/row:translate-x-0.5 group-hover/row:text-white/60"
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-end justify-between gap-6">
              <p className="max-w-[15rem] text-[13px] leading-5 text-white/45">
                {liveCount} of these are running in a browser right now, not
                just written up.
              </p>

              <a
                href="#work"
                aria-label="Jump to selected work"
                className="group/jump shrink-0 text-3xl text-[#dc8b6c] transition-transform duration-300 hover:translate-y-0.5"
              >
                ↘
              </a>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
