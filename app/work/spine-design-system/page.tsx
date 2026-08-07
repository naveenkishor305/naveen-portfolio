import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyHeader from "@/components/case-study/case-study-header";
import Reveal from "@/components/motion/reveal";
import SpineLivePreview from "@/components/case-study/spine-live-preview";
import {
  HandoffDiagram,
  RoleWorkspaces,
  SystemStates,
  AuditTrail,
  IdentityBar,
  DocumentationMap,
  GovernanceFlow,
} from "@/components/case-study/spine-graphics";

const sections = [
  { label: "Problem", href: "#problem" },
  { label: "Identity", href: "#identity" },
  { label: "Roles", href: "#roles" },
  { label: "States", href: "#states" },
  { label: "Audit", href: "#audit" },
  { label: "Structure", href: "#structure" },
  { label: "Governance", href: "#governance" },
  { label: "Live system", href: "#live" },
];

export const metadata: Metadata = {
  title: "Spine Design System — Naveen Kishore",
  description:
    "A design system case study: making hospital software safe, role-aware and consistent across five teams, one patient journey and every handoff between them.",
};

const projectDetails = [
  { label: "Role", value: "Product Designer · Systems Designer" },
  { label: "Scope", value: "Design system · Documentation · Front-end" },
  { label: "Status", value: "Live · Version 1.0" },
  { label: "Built with", value: "Next.js · React · TypeScript · Tailwind" },
];

const outcomes = [
  { v: "14", k: "Documentation chapters", d: "Principles through governance and migration" },
  { v: "5", k: "Role workspaces", d: "Reception, clinical, diagnostics, pharmacy, operations" },
  { v: "7", k: "System states", d: "Including restricted, offline and partial" },
  { v: "6", k: "Reproducible renders", d: "Captured from the running app with Playwright" },
];

const principles = [
  {
    title: "The patient is never ambiguous",
    text: "Identity, allergy and consent sit in a persistent bar that never scrolls away, in every workspace. Wrong-patient error is the failure mode a clinical system exists to prevent, so the answer to “who am I looking at?” cannot be more than zero clicks away.",
  },
  {
    title: "Density follows role, structure does not",
    text: "Reception, clinicians, diagnostics, pharmacy and operations see the same underlying object rendered at different depths. Changing the model per role would create five products; changing only the density and permissions keeps one.",
  },
  {
    title: "Restricted is not the same as empty",
    text: "A clinician who sees nothing assumes nothing exists. One who sees a locked record knows to ask. Distinguishing absence from denial is a safety property, and it earns its own state rather than collapsing into a blank panel.",
  },
  {
    title: "Emergencies are designed for, not designed out",
    text: "Break-glass access is possible, requires a stated reason, and is visible in the record afterwards. A system that makes urgent access impossible gets worked around with shared logins — which is worse than the thing it was protecting against.",
  },
  {
    title: "Language is part of the interface",
    text: "Clinical writing is terse for a reason, and terse writing goes wrong in specific ways. Terminology, label structure and multilingual behaviour are documented alongside components, because a correct component with the wrong words is still an unsafe screen.",
  },
  {
    title: "Governance is a design deliverable",
    text: "Contribution, review, ownership and release are documented as carefully as the components. A system that only says yes becomes a component dump; one that says no without a reason gets routed around. Both end in teams forking it.",
  },
];

function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#176e6a]">
      {n} / {children}
    </p>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
      {children}
    </h2>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-[#7d8f8e]">
      {children}
    </p>
  );
}

export default function SpineDesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#f4f3ee] text-[#12201f]">
      <CaseStudyHeader sections={sections} />

      {/* ─────────────────────────────────────────────── HERO ── */}
      <section className="px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-black/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em]">
                Design system case study
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#dcebea] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#176e6a]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#176e6a]" />
                Live · Version 1.0
              </span>
            </div>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Spine · Clinical operations
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
              Designing consistency for software where mistakes matter.
            </h1>

            <p className="mt-9 max-w-3xl text-xl leading-9 text-neutral-600 sm:text-2xl">
              Spine is the role-aware design system for Hospital OS. It turns
              patient safety, permissions, accessibility and clinical workflow
              into reusable interface standards — one operating language across
              five teams and every handoff between them.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://spine-design-system.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-1"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Browse the live system ↗
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
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-black/10 bg-black/10 lg:grid-cols-4">
              {outcomes.map((o) => (
                <div key={o.k} className="bg-[#f5faf9] p-6">
                  <div className="text-4xl font-semibold tracking-tight text-[#176e6a] [font-variant-numeric:tabular-nums]">
                    {o.v}
                  </div>
                  <div className="mt-2 text-sm font-semibold">{o.k}</div>
                  <div className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">
                    {o.d}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <dl className="mt-14 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
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
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    {item.label}
                  </dt>
                  <dd className="mt-3 text-lg leading-7">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────── PROBLEM ── */}
      <section id="problem" className="scroll-mt-24 bg-[#12201f] px-6 py-24 text-[#f5faf9] sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7fc9c4]">
              01 / The problem
            </p>
            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
              Hospital work is rarely a single-screen task.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              One outpatient journey moves through reception, consultation,
              diagnostics, pharmacy and revenue. Each team has its own software
              habits, its own vocabulary and its own idea of what &ldquo;done&rdquo;
              means. Every handoff is a chance to lose context, duplicate work
              or make an unsafe assumption.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14 rounded-[2rem] bg-[#f5faf9] p-6 sm:p-10">
              <HandoffDiagram />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Context is not portable", "A note written in consultation has to mean the same thing in pharmacy, without the pharmacist reading the whole chart."],
                ["Roles need different things", "Reception needs breadth and speed. A clinician needs depth. Building for both by building for neither is the usual outcome."],
                ["Consistency is a safety feature", "When the same action looks different in two workspaces, people slow down or guess. In a hospital, guessing has consequences."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7">
                  <h3 className="text-lg font-semibold tracking-tight">{t}</h3>
                  <p className="mt-3 leading-7 text-white/55">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────── IDENTITY ── */}
      <section id="identity" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="02">Patient identity</Eyebrow>
            <Lead>The one component that appears on every screen.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
              Wrong-patient error is the failure mode a clinical system exists
              to prevent. So the answer to &ldquo;who am I looking at, and may I
              act?&rdquo; is never more than zero clicks away — the identity bar
              is persistent, unscrollable and identical in all five workspaces.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12">
              <IdentityBar />
            </div>
            <Caption>
              The same bar renders in reception, consultation, diagnostics,
              pharmacy and operations. Only the actions beside it change.
            </Caption>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────────────────────────── ROLES ── */}
      <section id="roles" className="scroll-mt-24 bg-[#dcebea] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="03">Role workspaces</Eyebrow>
            <Lead>Same object. Five densities.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
              A generic clinical UI serves everybody equally badly. Spine keeps
              one model and varies three things per role: how much is shown, what
              can be done, and what is deliberately withheld. Changing the model
              per role would have produced five products to maintain.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12">
              <RoleWorkspaces />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────── STATES ── */}
      <section id="states" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="04">System states</Eyebrow>
            <Lead>What the screen says when things are not fine.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
              Most design systems document the happy path thoroughly and the
              rest in a paragraph. In hospital software the exception states are
              where harm happens, so each one is a first-class pattern with its
              own rules about what it must say.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12">
              <SystemStates />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────────────────────────── AUDIT ── */}
      <section id="audit" className="scroll-mt-24 bg-[#12201f] px-6 py-24 text-[#f5faf9] sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7fc9c4]">
              05 / Privacy, access and audit
            </p>
            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
              Emergencies are designed for, not designed out.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              A permission model that makes urgent access impossible gets worked
              around with shared logins — which is worse than what it was
              protecting against. So break-glass access exists, requires a
              reason, and is visible in the record afterwards.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14">
              <AuditTrail />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────────────────────── STRUCTURE ── */}
      <section id="structure" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="06">Documentation structure</Eyebrow>
            <Lead>Fourteen chapters, four jobs.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
              The chapters are not an alphabetical index. They group by what
              they are for: the shared vocabulary, the parts that make it a
              hospital rather than a generic product, the obligations that are
              not negotiable per screen, and the machinery that keeps the system
              alive after the person who wrote it moves on.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12">
              <DocumentationMap />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 rounded-[2rem] border border-[#c9dcda] bg-[#f5faf9] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#176e6a]">
                Documentation that stays true
              </p>
              <p className="mt-4 max-w-4xl text-xl leading-9 tracking-tight">
                The reference images are captured from the running application
                with Playwright, not exported from Figma. Documentation that
                drifts from the build is worse than none — teams stop trusting
                it, then stop reading it.
              </p>
              <p className="mt-5 max-w-3xl leading-8 text-neutral-600">
                One command regenerates every render at a consistent viewport,
                so the system&rsquo;s own documentation cannot quietly go stale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────── GOVERNANCE ── */}
      <section id="governance" className="scroll-mt-24 bg-[#dcebea] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="07">Governance</Eyebrow>
            <Lead>How the system survives the people who wrote it.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
              Most design systems fail for organisational reasons rather than
              visual ones. Spine documents contribution, review, ownership and
              release with the same care as the components.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12">
              <GovernanceFlow />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────── LIVE ── */}
      <section
        id="live"
        className="scroll-mt-24 bg-[#12201f] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7fc9c4]">
              08 / The system itself
            </p>
            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-[#f5faf9] sm:text-6xl">
              Everything above, deployed.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              A design system that only exists as a case study is a proposal. This
              one is built and running — fourteen chapters, five role workspaces
              and every state documented against the interface that implements
              them.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-14">
            <SpineLivePreview />
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────── PRINCIPLES ── */}
      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="09">Principles</Eyebrow>
            <Lead>The decisions that shaped everything else.</Lead>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={0.06 * index}>
                <article className="h-full rounded-[2rem] border border-[#c9dcda] bg-[#f5faf9] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7d8f8e]">
                    Principle {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-600">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-[2rem] border border-[#c9dcda] bg-[#f5faf9] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#176e6a]">
                Scope, honestly
              </p>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-600">
                Spine is a portfolio design-system case study and interface
                prototype built around Hospital OS, a conceptual platform. It is
                not production medical software and has not been through
                clinical validation. The demonstration data is fictional. What
                it is meant to show is how the safety, permission and workflow
                requirements of a clinical product translate into interface
                standards a team could actually build against.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────── FOOTER ── */}
      <section className="bg-[#176e6a] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/65">
              Continue exploring
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              The platform Spine was built for.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/70">
              Hospital OS — 11 operational domains and 42 departments, mapped
              from vendor research before a single screen was drawn.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/work/healthcare-platform"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#12201f] transition-transform hover:-translate-y-1"
            >
              Read Hospital OS
            </Link>
            <Link
              href="/work/nadi-hospital-os"
              className="rounded-full bg-[#5b3fa6] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1"
            >
              See Spine, deployed as Nadi
            </Link>
            <a
              href="https://spine-design-system.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#12201f] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1"
            >
              Browse Spine ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
