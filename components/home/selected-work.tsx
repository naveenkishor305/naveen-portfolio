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
          Healthcare IA Explorer
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-black/40">
            Selected company
          </p>
          <p className="mt-1 text-sm font-semibold">Epic Systems</p>
        </div>

        <div
          className="rounded-full px-3 py-1.5 text-[10px] font-medium text-white"
          style={{ backgroundColor: accent }}
        >
          Interactive map
        </div>
      </div>

      <div className="mt-7 grid grid-cols-3 items-center gap-3 text-center">
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
            Company
          </span>
          <p className="mt-2 text-xs font-semibold">Epic</p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
            Product
          </span>
          <p className="mt-2 text-xs font-semibold">Hyperspace</p>
        </div>

        <div
          className="rounded-2xl p-4 text-white"
          style={{ backgroundColor: accent }}
        >
          <span className="text-[10px] uppercase tracking-[0.14em] text-white/60">
            Module
          </span>
          <p className="mt-2 text-xs font-semibold">Clinical</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[0.7fr_1fr_0.8fr] gap-3">
        <div className="h-16 rounded-2xl bg-black/5" />
        <div className="h-16 rounded-2xl bg-black/5" />
        <div className="h-16 rounded-2xl bg-black/5" />
      </div>

      <div className="mt-3 rounded-2xl border border-dashed border-black/15 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium">Workflow hierarchy</span>
          <span className="font-mono text-[10px] text-black/40">05 levels</span>
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

function CommercePreview({ accent }: { accent: string }) {
  return (
    <div className="relative flex w-full max-w-xl items-center justify-center">
      <div className="absolute left-3 top-16 hidden w-36 rotate-[-8deg] rounded-3xl bg-white/70 p-4 shadow-xl sm:block">
        <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
          Delivery
        </p>
        <p className="mt-2 text-xl font-semibold">18 min</p>
        <div className="mt-4 h-1.5 rounded-full bg-black/10">
          <div
            className="h-full w-3/4 rounded-full"
            style={{ backgroundColor: accent }}
          />
        </div>
      </div>

      <div className="relative z-10 w-64 rounded-[2.75rem] border-[7px] border-[#191919] bg-[#f8f8f5] p-4 shadow-2xl">
        <div className="mx-auto h-1.5 w-16 rounded-full bg-black/20" />

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.14em] text-black/40">
              Delivering to
            </p>
            <p className="mt-1 text-xs font-semibold">East Legon</p>
          </div>

          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs text-white"
            style={{ backgroundColor: accent }}
          >
            NK
          </div>
        </div>

        <div
          className="mt-5 rounded-2xl p-4 text-white"
          style={{ backgroundColor: accent }}
        >
          <p className="text-[10px] text-white/65">Groceries in minutes</p>
          <p className="mt-1 text-lg font-semibold">What do you need?</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {["Fresh food", "Essentials", "Drinks", "Household"].map(
            (category, index) => (
              <div key={category} className="rounded-2xl bg-black/5 p-3">
                <div
                  className="h-12 rounded-xl opacity-70"
                  style={{
                    backgroundColor:
                      index === 0 ? accent : "rgba(0,0,0,0.08)",
                  }}
                />
                <p className="mt-2 text-[10px] font-medium">{category}</p>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="absolute bottom-16 right-3 hidden w-36 rotate-[8deg] rounded-3xl bg-white/75 p-4 shadow-xl sm:block">
        <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
          Availability
        </p>
        <p className="mt-2 text-sm font-semibold">In stock nearby</p>
        <div className="mt-3 flex gap-1">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <span className="h-2 w-2 rounded-full bg-black/10" />
          <span className="h-2 w-2 rounded-full bg-black/10" />
        </div>
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

function ProjectPreview({ project }: { project: Project }) {
  if (project.number === "01") {
    return <HealthcarePreview accent={project.accent} />;
  }

  if (project.number === "02") {
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
