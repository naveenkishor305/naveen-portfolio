import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyHeader from "@/components/case-study/case-study-header";
import Reveal from "@/components/motion/reveal";

const sections = [
  { label: "Challenge", href: "#challenge" },
  { label: "Architecture", href: "#architecture" },
  { label: "Patterns", href: "#patterns" },
  { label: "Delivery", href: "#delivery" },
];

export const metadata: Metadata = {
  title: "Spine Design System — Naveen Kishore",
  description:
    "A product design case study about creating an accessible, workflow-aware design system for complex hospital software.",
};

const projectDetails = [
  {
    label: "Role",
    value: "Product Designer · Systems Designer",
  },
  {
    label: "Scope",
    value: "Design system · Documentation · Front-end",
  },
  {
    label: "Status",
    value: "Live · Version 1.0",
  },
  {
    label: "Year",
    value: "2026",
  },
];

const proofPoints = [
  {
    number: "14",
    label: "documentation chapters",
    detail:
      "From principles and foundations through clinical patterns, privacy, governance and migration.",
  },
  {
    number: "7",
    label: "architecture layers",
    detail:
      "A reusable system connecting visual foundations to organization-level workflows.",
  },
  {
    number: "6",
    label: "reproducible renders",
    detail:
      "Portfolio-ready documentation captures generated from the implemented interface.",
  },
  {
    number: "1",
    label: "shared navigation state",
    detail:
      "Sidebar, breadcrumb, URL hash and captured documentation remain synchronized.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "Foundations",
    detail:
      "Semantic colour, typography, spacing, elevation, motion, iconography and responsive behaviour.",
  },
  {
    number: "02",
    title: "Core components",
    detail:
      "Buttons, inputs, selectors, tables, feedback, overlays and navigation with complete states.",
  },
  {
    number: "03",
    title: "Operational components",
    detail:
      "Patient banners, encounter context, task queues, clinical timelines and permission-aware actions.",
  },
  {
    number: "04",
    title: "Clinical workflow patterns",
    detail:
      "Reusable arrangements for registration, consultation, diagnostics, medication and revenue workflows.",
  },
  {
    number: "05",
    title: "Role workspaces",
    detail:
      "Interfaces shaped around the responsibilities of clinicians, nurses, pharmacists and operational teams.",
  },
  {
    number: "06",
    title: "Cross-organization workflows",
    detail:
      "External referrals, shared records and handoffs that cross facility and organizational boundaries.",
  },
  {
    number: "07",
    title: "Governance and measurement",
    detail:
      "Contribution standards, accessibility review, migration guidance, ownership and release discipline.",
  },
];

const workflowPatterns = [
  {
    title: "Patient and encounter context",
    detail:
      "Persistent identity and encounter information reduces the risk of acting on the wrong patient or episode of care.",
    signal: "Safety-critical",
  },
  {
    title: "System states and recovery",
    detail:
      "Loading, empty, partial, error and offline states explain what happened and give the user a safe next action.",
    signal: "Resilient",
  },
  {
    title: "Privacy, access and audit",
    detail:
      "Sensitive information, permission boundaries and traceable actions are treated as interface behaviour, not backend details.",
    signal: "Accountable",
  },
  {
    title: "External referral",
    detail:
      "Referral status, receiving organization, record sharing and follow-up remain visible across the handoff.",
    signal: "Cross-system",
  },
];

const deliveryPractices = [
  {
    title: "Documentation as a product",
    detail:
      "Each chapter explains purpose, anatomy, variants, states, accessibility, content rules and responsive behaviour.",
  },
  {
    title: "Realistic clinical context",
    detail:
      "Components are demonstrated inside workflows instead of isolated showcase screens.",
  },
  {
    title: "Reproducible visual evidence",
    detail:
      "A scripted browser-capture workflow generates consistent documentation renders for review and release.",
  },
  {
    title: "Migration-ready guidance",
    detail:
      "Replacement patterns identify breaking differences, product changes, accessibility effects, ownership and target release.",
  },
];

const doneChecks = [
  "Keyboard behaviour and focus order defined",
  "Screen-reader semantics validated",
  "Loading, empty, partial, error and offline states covered",
  "Privacy and permission effects reviewed",
  "Translated content considered",
  "Failure and recovery paths designed",
  "Shared tokens used consistently",
  "Production lint and build passed",
];

export default function SpineDesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#f4f3ee] text-[#111111]">
      <CaseStudyHeader sections={sections} />

      <section className="px-6 pb-24 pt-16 sm:px-8 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-black/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em]">
                Design system case study
              </span>

              <span className="rounded-full bg-[#dcebea] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#176e6a]">
                Live · Version 1.0
              </span>
            </div>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Spine · Clinical operations
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-7xl lg:text-[6.8rem]">
              Designing consistency for software where mistakes matter.
            </h1>

            <p className="mt-9 max-w-3xl text-xl leading-9 text-neutral-600 sm:text-2xl">
              Spine translates the demands of hospital operations into a
              reusable design system—connecting visual foundations,
              accessibility, patient safety, permissions and clinical
              workflows in one documented product language.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://spine-design-system.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-1"
              >
                Explore live system ↗
              </a>

              <a
                href="https://github.com/naveenkishor305/spine-design-system"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/20 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
              >
                View GitHub repository ↗
              </a>
            </div>

            <dl className="mt-16 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
              {projectDetails.map((item, index) => (
                <div
                  key={item.label}
                  className={[
                    "py-6",
                    index < projectDetails.length - 1
                      ? "border-b border-black/15 sm:border-r sm:px-6 lg:border-b-0"
                      : "sm:px-6 lg:pr-0",
                    index === 0 ? "sm:pl-0" : "",
                    index === 1 ? "sm:border-b-0" : "",
                  ].join(" ")}
                >
                  <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium sm:text-base">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex max-w-4xl items-start gap-3 text-sm leading-6 text-neutral-500">
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#176e6a]"
              />
              <p>
                This is a self-initiated design-system project derived from the
                Hospital OS product exploration. It demonstrates product and
                systems thinking; it is not presented as a deployed hospital
                client system.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {proofPoints.map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-black/10 bg-[#dcebea] p-6"
              >
                <p className="text-4xl font-semibold tracking-[-0.03em] text-[#176e6a]">
                  {item.number}
                </p>
                <h2 className="mt-2 text-sm font-semibold">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {item.detail}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        id="challenge"
        className="scroll-mt-24 border-y border-black/15 bg-[#eef2f0] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.3fr_1fr]">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/50">
              01 / Challenge
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              A component library alone cannot make clinical software safe.
            </h2>

            <div className="mt-10 grid gap-8 text-base leading-8 text-black/60 sm:grid-cols-2 sm:text-lg">
              <p>
                Hospital interfaces carry patient identity, encounter state,
                permissions, urgent results and cross-department handoffs.
                Consistency must protect meaning—not just visual appearance.
              </p>

              <p>
                The system therefore needed to document workflow context,
                failure recovery, accessibility, privacy and audit behaviour
                alongside reusable components.
              </p>
            </div>

            <div className="mt-12 rounded-3xl bg-[#111111] p-7 text-white sm:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                Core design question
              </p>

              <p className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                How might one shared system create consistency without erasing
                the safety, role and workflow differences across hospital
                operations?
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="architecture"
        className="scroll-mt-24 bg-[#dcebea] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.18em] text-black/50">
                02 / Architecture
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                Seven layers connect foundations to operational governance.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
                The architecture expands deliberately from low-level visual
                decisions to components, clinical patterns, role workspaces
                and cross-organization workflows.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemLayers.map((layer, index) => (
              <Reveal key={layer.number} delay={index * 0.05}>
                <article className="h-full rounded-3xl border border-black/10 bg-white/65 p-7">
                  <p className="font-mono text-xs text-[#176e6a]">
                    {layer.number}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {layer.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="patterns"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                03 / Workflow patterns
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                Reuse is valuable only when context survives it.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
                Spine demonstrates recurring clinical and operational
                problems as complete patterns, including states, permissions,
                recovery and content guidance.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {workflowPatterns.map((pattern, index) => (
              <Reveal key={pattern.title} delay={index * 0.07}>
                <article className="h-full rounded-3xl border border-black/10 bg-[#f8f8f5] p-7">
                  <span className="rounded-full bg-[#dcebea] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#176e6a]">
                    {pattern.signal}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em]">
                    {pattern.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/60">
                    {pattern.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="delivery"
        className="scroll-mt-24 bg-[#111111] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              04 / Delivery and governance
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              The documentation is implemented, reviewable and migration-ready.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/15 sm:grid-cols-2">
            {deliveryPractices.map((practice, index) => (
              <Reveal key={practice.title} delay={index * 0.06}>
                <article className="h-full bg-[#111111] p-7 sm:p-9">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {practice.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {practice.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="mt-8 rounded-3xl border border-white/15 p-7 sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-white/40">
              Definition-of-done evidence
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {doneChecks.map((check) => (
                <li
                  key={check}
                  className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4 text-sm leading-6 text-white/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8fd3d0]"
                  />
                  {check}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#176e6a] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/60">
              Explore the implementation
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              See Spine working as a complete documentation product.
            </h2>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href="https://spine-design-system.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#111111] transition-transform hover:-translate-y-1"
            >
              Open live system ↗
            </a>

            <Link
              href="/#work"
              className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white hover:text-black"
            >
              All work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}