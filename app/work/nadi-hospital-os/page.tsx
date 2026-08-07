import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyHeader from "@/components/case-study/case-study-header";
import Reveal from "@/components/motion/reveal";
import NadiLivePreview from "@/components/case-study/nadi-live-preview";

const LIVE_URL = "https://hospital-os-mvp.vercel.app/";
const REPO_URL = "https://github.com/naveenkishor305/hospital-os-mvp";

const sections = [
  { label: "From system to software", href: "#lineage" },
  { label: "Workspace", href: "#workspace" },
  { label: "Decisions", href: "#decisions" },
  { label: "Live app", href: "#live" },
];

export const metadata: Metadata = {
  title: "Nadi — Hospital OS MVP — Naveen Kishore",
  description:
    "A case study on Nadi, the authenticated Next.js and Supabase application that turns the Spine design system and the Hospital OS strategy into a working OPD workspace.",
};

const projectDetails = [
  { label: "Role", value: "Product Designer · Front-end Engineer" },
  { label: "Scope", value: "Full-stack build · Auth · Design system integration" },
  { label: "Status", value: "Live MVP" },
  { label: "Built with", value: "Next.js · TypeScript · Supabase · Spine" },
];

const outcomes = [
  { v: "8", k: "Connected workspaces", d: "From patient arrival to visit closure" },
  { v: "1", k: "Governed patient journey", d: "One identity bar, every workspace" },
  { v: "Real", k: "Authentication", d: "Supabase-backed staff sign-in" },
  { v: "0", k: "Static screenshots", d: "It is the deployed application" },
];

const lineage = [
  {
    step: "Hospital OS",
    title: "Strategy",
    detail:
      "11 operational domains and 42 departments, modelled from vendor research before a single screen existed.",
    href: "/work/healthcare-platform",
  },
  {
    step: "Spine",
    title: "Design system",
    detail:
      "The role-aware components, tokens and safety patterns the strategy required a hospital interface to have.",
    href: "/work/spine-design-system",
  },
  {
    step: "Nadi",
    title: "This project",
    detail:
      "Spine's tokens and patterns, wired into real routes, real Supabase auth and a real deployed URL.",
    href: undefined,
  },
];

const workspaceModules = [
  { route: "/", name: "OPD overview", detail: "Arrivals, active consultations and same-day metrics in one command centre." },
  { route: "/patients", name: "Patient access", detail: "Progressive, privacy-safe search with duplicate review before any merge." },
  { route: "/appointments", name: "Appointments", detail: "Conflict-safe booking, slot locking, rescheduling and waitlist review." },
  { route: "/consultation", name: "Consultation", detail: "SOAP notes, coded diagnoses, allergy blocking and deliberate clinical signing." },
  { route: "/diagnostics", name: "Diagnostics", detail: "Order acceptance through specimen accession to verified, versioned results." },
  { route: "/pharmacy", name: "Medication", detail: "Prescription review, interaction checks and dispensing handoff." },
  { route: "/billing", name: "Billing", detail: "Insurance, payments and reconciliation tied back to the same encounter." },
  { route: "/visit-closure", name: "Visit closure", detail: "Immutable signed records with attributed addenda before a visit ends." },
];

const decisions = [
  {
    title: "The workspace is a route group, not a role check sprinkled everywhere",
    text: "Every authenticated screen lives under a single (workspace) route group with one layout that verifies the Supabase session and redirects otherwise. Auth is enforced once, structurally — not re-implemented per page.",
  },
  {
    title: "Server Actions own the state that matters",
    text: "Sign-in and sign-out are Server Actions, not client-side fetches to an API route. The form works before any client JavaScript hydrates, which matters more in a hospital than it does almost anywhere else.",
  },
  {
    title: "Tokens travel with the product, not just the docs",
    text: "Nadi imports Spine's semantic color, spacing and elevation tokens directly rather than re-deriving a palette. A design system that only looks right in its own documentation site hasn't proven anything yet.",
  },
  {
    title: "The login screen is not a formality",
    text: "It carries the brand, states the security posture, and — because this build exists to be reviewed — surfaces a demo account a recruiter can use with one click instead of asking me for credentials.",
  },
  {
    title: "A boot sequence, once per session",
    text: "A brief system-initialization animation plays on first load and is remembered for the session via sessionStorage, so it reads as a deliberate detail on a first visit rather than friction on every navigation.",
  },
  {
    title: "Mock data, real plumbing",
    text: "Clinical records are illustrative and session-scoped by design — this is a portfolio MVP, not software handling real patients. Authentication, routing, and the interface layer underneath it are not mocked.",
  },
];

function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5b3fa6]">
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

export default function NadiHospitalOsPage() {
  return (
    <main className="min-h-screen bg-[#f4f3ee] text-[#1a1626]">
      <CaseStudyHeader sections={sections} />

      {/* ─────────────────────────────────────────────── HERO ── */}
      <section className="px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-black/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em]">
                Full-stack MVP case study
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e6e1f2] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#5b3fa6]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5b3fa6]" />
                Live MVP
              </span>
            </div>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Nadi · Clinical operations
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
              Turning the design system into a working hospital app.
            </h1>

            <p className="mt-9 max-w-3xl text-xl leading-9 text-neutral-600 sm:text-2xl">
              Nadi is the interactive OPD workspace built on Spine — patient
              access, scheduling, clinical consultation, diagnostics,
              pharmacy and billing wired into one authenticated Next.js and
              Supabase application. Not a click-through prototype. A product
              you can sign into.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`${LIVE_URL}login`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-1"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Sign in to the workspace ↗
              </a>

              <a
                href={REPO_URL}
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
                <div key={o.k} className="bg-[#f7f5fb] p-6">
                  <div className="text-4xl font-semibold tracking-tight text-[#5b3fa6] [font-variant-numeric:tabular-nums]">
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

      {/* ─────────────────────────────────────────── LINEAGE ── */}
      <section id="lineage" className="scroll-mt-24 bg-[#180f2e] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#c3b3ec]">
              01 / From system to software
            </p>
            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
              A case study only proves so much. Software people can log into
              proves the rest.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              Hospital OS mapped the domain. Spine turned the safety and
              workflow requirements into reusable components. Nadi is where
              those decisions meet real routes, real authentication and a
              real deployment — the point where a design system either holds
              up under implementation or doesn&rsquo;t.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {lineage.map((item, index) => (
              <Reveal key={item.step} delay={0.08 * index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-[1.75rem] border border-white/15 bg-white/[0.04] p-7 transition-colors hover:border-white/30 hover:bg-white/[0.07]"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c3b3ec]">
                      {item.step}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-7 text-white/55">
                      {item.detail}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#c3b3ec]">
                      Read the case study
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </span>
                  </Link>
                ) : (
                  <div className="flex h-full flex-col rounded-[1.75rem] border-2 border-[#5b3fa6] bg-[#5b3fa6]/15 p-7">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c3b3ec]">
                      {item.step}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-7 text-white/70">
                      {item.detail}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      You are here
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────── WORKSPACE ── */}
      <section id="workspace" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <Reveal>
              <Eyebrow n="02">The workspace</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <Lead>Eight workspaces, one patient, no re-entered data.</Lead>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
                Every route below sits behind the same authenticated layout
                and the same persistent patient-identity bar. Reception,
                clinical, diagnostics, pharmacy and billing are different
                screens over the same encounter, not five separate
                applications glued together.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workspaceModules.map((module, index) => (
              <Reveal key={module.route} delay={0.05 * index}>
                <article className="h-full rounded-3xl border border-black/10 bg-[#f8f7fb] p-6">
                  <p className="font-mono text-[11px] text-black/40">
                    {module.route}
                  </p>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">
                    {module.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-black/55">
                    {module.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────── DECISIONS ── */}
      <section id="decisions" className="scroll-mt-24 bg-[#e6e1f2] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="03">Product &amp; engineering decisions</Eyebrow>
            <Lead>Small choices that only matter once something is live.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
              A prototype can fake authentication, routing and state. A
              deployed app can&rsquo;t. These are the decisions that only
              came up because Nadi actually has to run.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {decisions.map((item, index) => (
              <Reveal key={item.title} delay={0.06 * index}>
                <article className="h-full rounded-[2rem] border border-black/10 bg-white/70 p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5b3fa6]">
                    Decision {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── LIVE ── */}
      <section id="live" className="scroll-mt-24 bg-[#180f2e] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#c3b3ec]">
              04 / The app itself
            </p>
            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-6xl">
              Everything above, deployed and behind a real login.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              A design system that only exists as a case study is a proposal.
              This is built and running, with a demo account left on the
              door for anyone reviewing it.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-14">
            <NadiLivePreview baseUrl={LIVE_URL} />
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────── SCOPE ── */}
      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="rounded-[2rem] border border-black/10 bg-[#f8f7fb] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5b3fa6]">
                Scope, honestly
              </p>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-600">
                Nadi is a portfolio MVP built around Hospital OS, a conceptual
                platform. It is not production medical software and has not
                been through clinical validation. Clinical data is
                illustrative and session-scoped by design. What&rsquo;s real
                is the authentication, the routing architecture and the
                interface layer — the parts of a clinical product that are
                hardest to fake convincingly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────── FOOTER ── */}
      <section className="bg-[#5b3fa6] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/65">
              Continue exploring
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              The strategy and the system Nadi was built on.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/work/healthcare-platform"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1a1626] transition-transform hover:-translate-y-1"
            >
              Read Hospital OS
            </Link>
            <Link
              href="/work/spine-design-system"
              className="rounded-full bg-[#180f2e] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1"
            >
              Read Spine
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
