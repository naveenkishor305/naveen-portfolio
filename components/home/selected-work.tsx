"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/types/project";

type SelectedWorkProps = {
  projects: readonly Project[];
};

const ease = [0.22, 1, 0.36, 1] as const;

function HealthcarePreview({ accent }: { accent: string }) {
  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f8f8f5] p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-black/20" />
          <span className="h-2 w-2 rounded-full bg-black/20" />
          <span className="h-2 w-2 rounded-full bg-black/20" />
        </div>

        <span className="text-[10px] uppercase tracking-[0.16em] text-black/40">
          Hospital OS
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-black/40">
            Selected domain
          </p>
          <p className="mt-1 text-sm font-semibold">Patient Access</p>
        </div>

        <div
          className="rounded-full px-3 py-1.5 text-[10px] font-medium text-white"
          style={{ backgroundColor: accent }}
        >
          11 domains
        </div>
      </div>

      <div className="mt-7 grid grid-cols-3 items-center gap-3 text-center">
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
            Domain
          </span>
          <p className="mt-2 text-xs font-semibold">Front-of-House</p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
            Department
          </span>
          <p className="mt-2 text-xs font-semibold">Registration</p>
        </div>

        <div
          className="rounded-2xl p-4 text-white"
          style={{ backgroundColor: accent }}
        >
          <span className="text-[10px] uppercase tracking-[0.14em] text-white/60">
            Actors
          </span>
          <p className="mt-2 text-xs font-semibold">Reg. Clerks</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[0.7fr_1fr_0.8fr] gap-3">
        <div className="h-16 rounded-2xl bg-black/5" />
        <div className="h-16 rounded-2xl bg-black/5" />
        <div className="h-16 rounded-2xl bg-black/5" />
      </div>

      <div className="mt-3 rounded-2xl border border-dashed border-black/15 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium">Departments mapped</span>
          <span className="font-mono text-[10px] text-black/40">42 total</span>
        </div>

        <div className="mt-3 flex gap-2">
          {[45, 70, 55, 85, 35].map((width, index) => (
            <span
              key={index}
              className="h-1.5 rounded-full"
              style={{
                width: `${width}%`,
                backgroundColor: index === 3 ? accent : "rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* The multi-merchant basket is the product's whole argument, so the card shows
   that rather than a generic grocery app. Sized so the type is actually legible
   at card scale — a 256px phone full of 9px text reads as a toy. */
function CommercePreview({ accent }: { accent: string }) {
  const stores = [
    { icon: "\u{1F3EA}", name: "Yaa's Provisions", meta: "Madina · ready in 5 min", sub: "52.00" },
    { icon: "\u{1F372}", name: "Kofi's Chop Bar", meta: "Osu · cooks in ~20 min", sub: "55.00" },
    { icon: "\u{1F48A}", name: "Adom Pharmacy", meta: "East Legon · ready now", sub: "18.00" },
  ];

  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-4">
      {/* three apps, one order — sits behind, never overlaps the phone */}
      <div className="absolute -left-1 top-0 hidden w-36 -rotate-[6deg] rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur-sm lg:block">
        <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
          One order across
        </p>
        <div className="mt-3 space-y-2.5">
          {["Customer", "Merchant", "Rider"].map((r, i) => (
            <div key={r} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: i === 0 ? accent : "rgba(0,0,0,0.18)" }}
              />
              <span className="text-xs font-medium">{r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* the phone */}
      <div className="relative z-10 w-[19rem] rounded-[2.25rem] border-[9px] border-[#231A14] bg-[#FDF9F5] shadow-2xl">
        <div className="flex items-center justify-between px-4 pb-1.5 pt-2.5">
          <span className="text-[10px] font-semibold text-black/45">7:14</span>
          <span className="text-[10px] font-semibold text-black/45">MTN 78%</span>
        </div>

        <p className="px-4 pb-3 text-lg font-bold tracking-tight text-[#231A14]">
          Your basket
        </p>

        <div className="space-y-2 px-3">
          {stores.map((store) => (
            <div
              key={store.name}
              className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-3 py-2.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/5 text-base">
                {store.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold leading-tight">
                  {store.name}
                </p>
                <p className="truncate text-[11px] text-black/45">{store.meta}</p>
              </div>
              <span className="shrink-0 text-[12px] font-semibold tabular-nums">
                GH&#162;{store.sub}
              </span>
            </div>
          ))}

          <div className="rounded-2xl border border-black/10 bg-white px-3.5 py-3">
            <div className="flex justify-between text-[12px] text-black/50">
              <span>Delivery · 3 stores</span>
              <span className="tabular-nums">GH&#162;12.00</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-black/10 pt-2.5">
              <span className="text-[15px] font-bold">Total</span>
              <span className="text-[15px] font-bold tabular-nums">GH&#162;137.00</span>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div
            className="rounded-2xl py-3 text-center text-[13px] font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            Continue to checkout &rsaquo;
          </div>
        </div>
      </div>

      {/* the fee argument */}
      <div className="absolute -right-1 bottom-2 hidden w-36 rotate-[6deg] rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur-sm lg:block">
        <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
          Delivery
        </p>
        <p className="mt-2 text-[13px] font-semibold leading-snug">
          One fee for three stores
        </p>
        <p className="mt-1.5 text-[11px] leading-4 text-black/45">
          Shown in the basket, not at checkout
        </p>
      </div>
    </div>
  );
}

function CloudPreview({ accent }: { accent: string }) {
  const categories = [
    ["Compute", "Virtual machines", "Containers"],
    ["Data", "Storage", "Databases"],
    ["AI", "Models", "Machine learning"],
  ];

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f8f8f5] p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <p className="text-sm font-semibold">Cloud services</p>
        <div className="rounded-full bg-black/5 px-4 py-2 text-[10px] text-black/45">
          Search services
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[0.65fr_1fr] gap-4">
        <div className="rounded-2xl bg-black/5 p-4">
          <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
            Navigation
          </p>

          <div className="mt-4 space-y-2">
            {["Overview", "Recent", "Saved", "All services"].map(
              (item, index) => (
                <div
                  key={item}
                  className="rounded-xl px-3 py-2 text-[10px] font-medium"
                  style={{
                    backgroundColor:
                      index === 3 ? accent : "rgba(255,255,255,0.65)",
                    color: index === 3 ? "white" : "rgba(0,0,0,0.65)",
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="space-y-3">
          {categories.map(([title, itemOne, itemTwo], index) => (
            <div
              key={title}
              className="rounded-2xl border border-black/10 bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold">{title}</p>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor:
                      index === 1 ? accent : "rgba(0,0,0,0.15)",
                  }}
                />
              </div>

              <div className="mt-3 flex gap-2 text-[9px] text-black/45">
                <span>{itemOne}</span>
                <span>·</span>
                <span>{itemTwo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Spine's whole argument is the persistent patient bar plus role-aware density,
   so the card renders that rather than a generic docs sidebar. Type sized to be
   legible at card scale. */
function SpinePreview({ accent }: { accent: string }) {
  const navigation = [
    "Overview",
    "Foundations",
    "Clinical patterns",
    "Privacy & audit",
  ];

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f5faf9] shadow-2xl">
      {/* browser bar — this is a deployed site, not a mockup */}
      <div className="flex items-center gap-3 border-b border-black/10 bg-white/70 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/12" />
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-black/5 px-3 py-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          <span className="truncate font-mono text-[10px] text-black/40">
            spine-design-system.vercel.app
          </span>
        </div>

        <span className="shrink-0 rounded-full border border-black/10 px-2 py-0.5 text-[9px] text-black/40">
          v1.0
        </span>
      </div>

      <div className="grid grid-cols-[0.4fr_1fr]">
        {/* docs nav */}
        <div className="border-r border-black/10 bg-white/50 p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-black/35">
            14 chapters
          </p>

          <div className="mt-3 space-y-1">
            {navigation.map((item, index) => (
              <div
                key={item}
                className="rounded-lg px-2.5 py-2 text-[11px] font-medium leading-tight"
                style={{
                  backgroundColor: index === 2 ? `${accent}1a` : "transparent",
                  color: index === 2 ? accent : "rgba(0,0,0,0.55)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* the patient bar — the one component on every screen */}
        <div className="p-4">
          <div
            className="rounded-xl border-2 bg-white px-3.5 py-3"
            style={{ borderColor: accent }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-semibold tracking-tight">
                Meera Nair
              </span>
              <span className="rounded-full bg-[#a83232] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.08em] text-white">
                Allergy
              </span>
            </div>
            <p className="mt-1 font-mono text-[10px] text-black/45">
              42 y · MRN HOS-024718
            </p>

            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="text-[10.5px] text-black/50">
                Internal Medicine · OPD 4
              </span>
              <span className="text-[10.5px] font-semibold text-[#a83232]">
                Penicillin
              </span>
              <span className="ml-auto flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <span className="text-[10px] font-medium" style={{ color: accent }}>
                  Consent active
                </span>
              </span>
            </div>
          </div>

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-black/35">
            Same bar · five role workspaces
          </p>

          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {[
              ["Reception", "Wide, shallow"],
              ["Clinician", "Deep, contextual"],
              ["Pharmacy", "Verification-first"],
              ["Operations", "Aggregate"],
            ].map(([role, density], i) => (
              <div
                key={role}
                className="rounded-lg border border-black/10 px-2.5 py-2"
                style={{ backgroundColor: i === 1 ? `${accent}12` : "white" }}
              >
                <p className="text-[10.5px] font-semibold leading-tight">{role}</p>
                <p className="mt-0.5 text-[9px] leading-tight text-black/40">
                  {density}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 rounded-lg px-2.5 py-2" style={{ backgroundColor: `${accent}12` }}>
            <p className="text-[9.5px] leading-4" style={{ color: accent }}>
              Restricted is not the same as empty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Nadi's whole argument is "this actually runs" — a sidebar of real routes,
   a live status pill and the same patient-identity pattern Spine defines,
   rendered as the deployed app rather than a documentation page. */
function NadiPreview({ accent }: { accent: string }) {
  const navItems = [
    "OPD overview",
    "Patient access",
    "Appointments",
    "Consultation",
    "Diagnostics",
  ];

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#150f24] shadow-2xl">
      {/* browser bar — a deployed app, not a mockup */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-black/40 px-3 py-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
          <span className="truncate font-mono text-[10px] text-white/45">
            hospital-os-mvp.vercel.app
          </span>
        </div>

        <span className="shrink-0 rounded-full border border-white/15 px-2 py-0.5 text-[9px] text-white/45">
          Live
        </span>
      </div>

      <div className="grid grid-cols-[0.4fr_1fr]">
        {/* sidebar nav */}
        <div className="border-r border-white/10 bg-white/[0.02] p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30">
            Integrated OPD
          </p>

          <div className="mt-3 space-y-1">
            {navItems.map((item, index) => (
              <div
                key={item}
                className="truncate rounded-lg px-2.5 py-2 text-[10.5px] font-medium leading-tight"
                style={{
                  backgroundColor: index === 1 ? `${accent}33` : "transparent",
                  color: index === 1 ? "#e4dcf7" : "rgba(255,255,255,0.55)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* patient context + metrics */}
        <div className="p-4">
          <div
            className="rounded-xl border-2 bg-white/[0.06] px-3.5 py-3"
            style={{ borderColor: accent }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold tracking-tight text-white">
                Meera Nair
              </span>
              <span className="rounded-full bg-[#a83232] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.08em] text-white">
                Allergy
              </span>
            </div>
            <p className="mt-1 font-mono text-[10px] text-white/45">
              42 y · MRN HOS-024718
            </p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              ["38", "Arrivals today"],
              ["12", "Consultations active"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
              >
                <p className="text-lg font-semibold tabular-nums text-white">
                  {value}
                </p>
                <p className="mt-1 text-[9px] leading-tight text-white/45">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-2.5 rounded-lg px-2.5 py-2"
            style={{ backgroundColor: `${accent}26` }}
          >
            <p className="text-[9.5px] leading-4" style={{ color: "#e4dcf7" }}>
              Signed in as staff · encrypted session
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.href === "/work/healthcare-platform") {
    return <HealthcarePreview accent={project.accent} />;
  }

  if (project.href === "/work/spine-design-system") {
    return <SpinePreview accent={project.accent} />;
  }

  if (project.href === "/work/nadi-hospital-os") {
    return <NadiPreview accent={project.accent} />;
  }

  if (project.href === "/work/quick-commerce") {
    return <CommercePreview accent={project.accent} />;
  }

  return <CloudPreview accent={project.accent} />;
}

export default function SelectedWork({ projects }: SelectedWorkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="scroll-mt-0 bg-[#111111] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-end justify-between gap-8 border-b border-white/20 pb-7">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">
              Selected work
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Evidence of how I think, not just what I made.
            </h2>
          </div>

          <p className="hidden shrink-0 font-mono text-xs text-white/40 sm:block">
            01—0{projects.length}
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
              className="group grid overflow-hidden rounded-[2rem] text-[#111111] lg:grid-cols-[0.9fr_1.1fr]"
              style={{ backgroundColor: project.background }}
            >
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="font-mono text-xs">{project.number}</p>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-black/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em]">
                        {project.status}
                      </span>

                      <span className="font-mono text-[10px] text-black/45">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <p className="mt-12 text-xs font-medium uppercase tracking-[0.16em] text-black/45">
                    {project.type}
                  </p>

                  <h3 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-base leading-7 text-black/60">
                    {project.description}
                  </p>

                  <div className="mt-8 border-l-2 border-black/15 pl-4">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-black/40">
                      What this demonstrates
                    </p>

                    <p className="mt-2 max-w-md text-sm font-medium leading-6">
                      {project.highlight}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  {project.metrics && (
                    <div className="mb-8 grid grid-cols-3 gap-4 border-y border-black/10 py-5">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="text-2xl font-semibold tabular-nums tracking-tight">
                            {m.value}
                          </p>
                          <p className="mt-1 text-[10px] uppercase leading-tight tracking-[0.12em] text-black/45">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-[10px] uppercase tracking-[0.16em] text-black/40">
                    My role
                  </p>

                  <p className="mt-2 text-sm font-medium">{project.role}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/15 px-3 py-1.5 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Read case study
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </Link>

                  {/* Something running to click beats something written to read,
                      so it gets its own button rather than a line in the copy. */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-3 mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
                      style={{ borderColor: project.accent, color: project.accent }}
                    >
                      <span
                        className="h-1.5 w-1.5 animate-pulse rounded-full"
                        style={{ backgroundColor: project.accent }}
                      />
                      {project.liveLabel ?? "Open the live build"}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden p-7 sm:min-h-[34rem] sm:p-12">
                <span className="absolute -right-5 -top-16 text-[13rem] font-semibold leading-none text-black/[0.035] sm:text-[20rem]">
                  {project.number}
                </span>

                <motion.div
                  className="relative w-full"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -8,
                          rotateX: 1,
                          rotateY: -1,
                        }
                  }
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                >
                  <ProjectPreview project={project} />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
