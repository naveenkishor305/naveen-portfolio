"use client";

import { motion, useReducedMotion } from "motion/react";
import GridBackdrop from "@/components/ui/grid-backdrop";
import Crosshair from "@/components/ui/crosshair";

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  "Enterprise SaaS",
  "Information architecture",
  "Interaction design",
  "Prototyping",
];

const process = [
  {
    number: "01",
    title: "Understand the system",
    description: "Domains, workflows, actors and dependencies — before any screen.",
  },
  {
    number: "02",
    title: "Create structure",
    description: "Shared models that hold up across departments and edge cases.",
  },
  {
    number: "03",
    title: "Prototype and validate",
    description: "Test the important interactions before polishing.",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-14">
      <GridBackdrop />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-[#c96b48]/10 blur-3xl"
      />

      <div className="mx-auto grid min-h-[calc(100svh-110px)] w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/45 px-3 py-2 text-xs font-medium backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-600"
            />
            Open to product design opportunities
          </div>

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Naveen Kishore · Product Designer
          </p>

          <h1 className="mt-5 max-w-4xl text-[clamp(3.75rem,9vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            I simplify
            <span className="block text-neutral-400">complex software.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
            I map how a business actually runs before I open Figma — then
            design the interface that fits it.
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
              href="/naveen-kishore-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3.5 text-sm font-medium transition-colors hover:border-black hover:bg-white/60"
            >
              View résumé
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

        <motion.aside
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          aria-label="Design approach"
          className="relative overflow-hidden rounded-[2rem] bg-[#111111] p-7 text-white shadow-2xl sm:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#c96b48]/30 blur-3xl"
          />

          <Crosshair className="absolute left-4 top-4 h-3 w-3 text-white/20" />

          <div className="relative">
            <div className="flex items-center justify-between gap-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                How I approach products
              </p>
              <span className="font-mono text-xs text-white/35">
                01—03
              </span>
            </div>

            <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[2rem_1fr] gap-4 py-6"
                >
                  <span className="font-mono text-xs text-[#dc8b6c]">
                    {item.number}
                  </span>

                  <div>
                    <h2 className="font-medium tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Currently exploring
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
                  A unified operating system for hospitals — currently in
                  discovery.
                </p>
              </div>

              <span
                aria-hidden="true"
                className="shrink-0 text-3xl text-[#dc8b6c]"
              >
                ↗
              </span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
