import type { Metadata } from "next";
import Link from "next/link";
import HealthcareSystemMap from "@/components/case-study/healthcare-system-map";
import CaseStudyHeader from "@/components/case-study/case-study-header";
import Reveal from "@/components/motion/reveal";

const sections = [
  { label: "Context", href: "#context" },
  { label: "System", href: "#model" },
  { label: "Workflows", href: "#workflows" },
  { label: "Research", href: "#research" },
  { label: "Roadmap", href: "#roadmap" },
];

export const metadata: Metadata = {
  title: "Hospital OS — Naveen Kishore",
  description:
    "A product design case study about designing a unified, modular Hospital Operating Platform for the Indian healthcare market.",
};

const projectDetails = [
  {
    label: "Role",
    value: "Product Designer",
  },
  {
    label: "Scope",
    value: "Discovery research · Product strategy · Systems design",
  },
  {
    label: "Status",
    value: "Phase 1 of 18 · Discovery",
  },
  {
    label: "Year",
    value: "2026",
  },
];

const ecosystemFacts = [
  {
    title: "A layered market, not one buyer",
    description:
      "Government/public hospitals (AIIMS, district hospitals), corporate chains (Apollo, Max, Fortis), trust and not-for-profit hospitals, private standalone facilities, and single-specialty day-care clinics all operate under different economics and constraints.",
  },
  {
    title: "Labour is the largest cost line",
    description:
      "Salaries and benefits account for roughly 43–56% of hospital revenue, which is why bed occupancy and staff utilisation — not just software features — drive whether a hospital survives.",
  },
  {
    title: "Three payer types, one patient",
    description:
      "A single hospital concurrently manages out-of-pocket cash patients, private insurance (TPA) claims with strict pre-authorization workflows, and government schemes like PM-JAY at standardised, discounted rates.",
  },
  {
    title: "Compliance is infrastructure, not a checkbox",
    description:
      "ABDM/ABHA interoperability mandates, the DPDP Act's consent and access-control requirements, NMC's biometric attendance rules, and IRDAI's 1-hour cashless pre-authorization timeline all shape what the platform must guarantee, not just offer.",
  },
];

const domainCallouts = [
  {
    number: "11",
    label: "operational domains",
    detail: "from Patient Access through Administration & Compliance — the architectural pillars the platform is organised around.",
  },
  {
    number: "42",
    label: "departments",
    detail: "coordinated across 4 functional blocks: front-of-house, clinical core, ancillary/diagnostic, and back-office.",
  },
  {
    number: "443",
    label: "workflows mapped",
    detail: "each one specified down to its trigger, actors and system integrations before any interface was considered.",
  },
  {
    number: "19",
    label: "vendors researched",
    detail: "spanning enterprise EHR, India-focused HIS/EMR, and specialised point solutions (billing, patient engagement, RCM).",
  },
];

const workflowExamples = [
  {
    number: "058",
    name: "Emergency Triage",
    domain: "Emergency & Trauma Services",
    purpose:
      "Rapidly assesses an arriving patient's condition, assigns an evidence-based urgency category, and routes them to the right treatment area within minutes.",
    triggers: ["Walk-in patient", "Ambulance arrival", "Mass casualty incident"],
    actors: "Triage Nurse, Emergency Physician, Trauma Team",
  },
  {
    number: "100",
    name: "Clinical Decision Support",
    domain: "Outpatient & Inpatient Care",
    purpose:
      "Analyses clinical data in real time and delivers evidence-based, patient-specific guidance to clinicians — while keeping the clinician the final decision-maker.",
    triggers: ["Medication ordering", "Lab result availability", "Clinical deterioration"],
    actors: "Physician, Nurse, Pharmacist",
  },
  {
    number: "108",
    name: "Inpatient Discharge Management",
    domain: "Inpatient Care & Ward Management",
    purpose:
      "Governs the safe transition out of inpatient care — clinical sign-off, medication handover, patient education and encounter closure — so no step gets skipped to save time.",
    triggers: ["Physician authorises discharge", "Transfer to another facility approved", "Discharge against medical advice"],
    actors: "Attending Physician, Discharge Nurse, Case Manager, Billing Team",
  },
  {
    number: "224",
    name: "Denial Management",
    domain: "Financial Operations & Revenue Cycle",
    purpose:
      "Investigates, corrects and appeals insurance claims a payer has denied after adjudication — the workflow that decides whether the hospital actually gets paid for care already delivered.",
    triggers: ["Medical necessity denial", "Authorization denial", "Coding denial"],
    actors: "Denial Management Specialist, Medical Coder, Appeals Coordinator",
  },
];

const competitiveGroups = [
  {
    title: "Enterprise EHR / HIS",
    vendors: ["Epic Systems", "Oracle Health (formerly Cerner)", "athenaOne", "NextGen Enterprise", "SAP S/4HANA Healthcare"],
  },
  {
    title: "India-focused HIS / EMR",
    vendors: ["Akhil Systems – Miracle HIS", "Attune HIS", "Ezovion HIMS", "KareXpert HIMS", "MocDoc HMS", "Practo Ray", "HealthPlix EMR", "Cliniqwise", "CrelioHealth LIMS & RIS"],
  },
  {
    title: "Specialised point solutions",
    vendors: ["Availity Essentials", "LeadSquared Health (CRM)", "Luma Health", "Phreesia", "Waystar RCM / AltitudeAI", "Hayati AI Nexus"],
  },
];

const researchQuestions = [
  "What modules does this vendor actually provide?",
  "What real operational problems do they solve?",
  "What do they explicitly ignore or leave to other vendors?",
  "What integrations does adopting them require?",
];

const scopeAreas = [
  {
    title: "Clinical Operations",
    detail: "Patient registration, EMR, appointments, consultation, admissions, discharge, nursing workflows.",
  },
  {
    title: "Diagnostic Services",
    detail: "Laboratory, radiology, report management.",
  },
  {
    title: "Pharmacy",
    detail: "Prescription management, drug inventory, dispensing.",
  },
  {
    title: "Business Operations",
    detail: "Billing, insurance, CRM, sales pipeline, customer support.",
  },
  {
    title: "Hospital Administration",
    detail: "HR, attendance, shift scheduling, asset management, procurement.",
  },
  {
    title: "Patient Experience",
    detail: "Mobile portal, appointment booking, digital consent, payments, notifications.",
  },
];

const designPrinciples = [
  "One source of truth — data is entered once and accessible everywhere.",
  "Role-based by default — interfaces adapt to the specific needs of the user.",
  "Automation over repetition — the system handles handoffs and notifications.",
  "Configurable, not hardcoded — workflows adapt to the hospital, not the reverse.",
  "Modular before monolithic — built to scale and be adopted incrementally.",
  "Secure by design — privacy and compliance built into the foundation.",
];

const discoverySteps = [
  { step: "1.1", title: "Design Challenge Brief", status: "done" },
  { step: "1.2", title: "Healthcare Ecosystem Overview (India)", status: "done" },
  { step: "1.3", title: "Hospital Operations Analysis (11 domains)", status: "done" },
  { step: "1.4", title: "Competitive Landscape (19 vendors)", status: "done" },
  { step: "1.5", title: "Stakeholder Inventory", status: "next" },
  { step: "1.6", title: "Problem Inventory", status: "next" },
  { step: "1.7", title: "Affinity Mapping", status: "next" },
  { step: "1.8", title: "Root Cause Analysis", status: "next" },
  { step: "1.9", title: "Opportunity Mapping", status: "next" },
  { step: "1.10", title: "Final Problem Statement", status: "done" },
];

const laterPhases = [
  "Stakeholder & User Research",
  "Current System Analysis",
  "Business Goals & Product Vision",
  "Information Architecture",
  "Service Blueprint",
  "User Journey Mapping",
  "Feature Prioritization",
  "Workflow Design",
  "System Architecture",
  "Interaction Design",
  "Design System",
  "Prototype",
  "Usability Testing",
  "Iteration",
  "Final Portfolio Case Study",
];

export default function HealthcarePlatformPage() {
  return (
    <main className="min-h-screen bg-[#f4f3ee] text-[#111111]">
      <CaseStudyHeader sections={sections} />

      <section className="px-6 pb-24 pt-16 sm:px-8 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-black/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em]">
                Flagship case study
              </span>

              <span className="rounded-full bg-[#dce6df] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#2f6b55]">
                Phase 1 of 18 · Discovery
              </span>
            </div>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Hospital OS · Enterprise SaaS
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-7xl lg:text-[6.8rem]">
              Designing a unified operating system for hospitals.
            </h1>

            <p className="mt-9 max-w-3xl text-xl leading-9 text-neutral-600 sm:text-2xl">
              A modular, cloud-native platform that unifies clinical,
              operational, financial and administrative workflows into a
              single connected ecosystem — reducing fragmentation for
              hospitals operating in the Indian healthcare market.
            </p>

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
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2f6b55]"
              />

              <p>
                This is a self-initiated project grounded in real Indian
                healthcare-industry research, regulatory analysis and public
                competitor documentation. It is not presented as commissioned
                client work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {domainCallouts.map((callout) => (
              <div
                key={callout.label}
                className="rounded-3xl border border-black/10 bg-[#dce6df] p-6"
              >
                <p className="text-4xl font-semibold tracking-[-0.03em] text-[#2f6b55]">
                  {callout.number}
                </p>
                <p className="mt-2 text-sm font-semibold">{callout.label}</p>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {callout.detail}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/15">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[0.3fr_1fr] lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
              01 / Problem
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              Hospitals run on a patchwork of disconnected systems.
            </h2>

            <div className="mt-12 grid gap-8 text-base leading-8 text-neutral-600 sm:grid-cols-2 sm:text-lg">
              <p>
                Modern hospitals rely on separate software for appointments,
                records, billing, pharmacy, labs, inventory, HR and CRM. As
                hospitals grow, these specialised applications rarely operate
                as one cohesive system.
              </p>

              <p>
                Staff spend significant time coordinating between systems
                instead of delivering care, duplicate data entry is routine,
                and leadership lacks a single view of operations across
                departments.
              </p>
            </div>

            <div className="mt-12 rounded-3xl bg-[#111111] p-7 text-white sm:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                Core design question
              </p>

              <p className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                How might we design a unified Hospital Operating System that
                simplifies healthcare operations while supporting the needs of
                every department through a single, scalable platform?
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="context"
        className="scroll-mt-24 bg-[#eef1ec] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.18em] text-black/50">
                02 / Context
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                An Indian hospital is a portfolio of tightly coupled
                businesses, not a single building.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
                Before designing any screen, the research grounded the
                platform in how Indian hospitals actually operate as
                regulated, financially complex enterprises.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {ecosystemFacts.map((fact, index) => (
              <Reveal key={fact.title} delay={0.08 * index}>
                <article className="h-full rounded-3xl border border-black/10 bg-white/60 p-7">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {fact.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {fact.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="model"
        className="scroll-mt-24 bg-[#dce6df] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.18em] text-black/50">
                03 / System model
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                Reverse-engineering the hospital before designing a single
                screen.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
                Rather than starting from software features, the research
                mapped the hospital itself: every domain, department,
                workflow, actor and dependency — the foundation a modular
                platform has to be built on.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-16">
            <HealthcareSystemMap />
          </Reveal>
        </div>
      </section>

      <section
        id="workflows"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                04 / Workflow depth
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                Domains and departments are the map. 443 workflows are the
                terrain.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
                Every one of the 42 departments was decomposed into its actual
                workflows — each specified with its trigger, its actors and
                the systems it has to talk to. Four examples, spanning very
                different parts of the hospital:
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {workflowExamples.map((workflow, index) => (
              <Reveal key={workflow.number} delay={0.08 * index}>
                <article className="h-full rounded-3xl border border-black/10 bg-[#f8f8f5] p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-black/40">
                      Workflow {workflow.number}
                    </span>
                    <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-black/50">
                      {workflow.domain}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {workflow.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {workflow.purpose}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {workflow.triggers.map((trigger) => (
                      <span
                        key={trigger}
                        className="rounded-full bg-[#dce6df] px-3 py-1.5 text-xs font-medium text-[#2f6b55]"
                      >
                        {trigger}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-xs uppercase tracking-[0.14em] text-black/40">
                    Actors
                  </p>
                  <p className="mt-1.5 text-sm text-black/60">
                    {workflow.actors}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="research"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                05 / Competitive research
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                Understanding what already exists before proposing something
                new.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
                19 hospital and healthcare software vendors were researched
                across three tiers — global enterprise EHR, India-focused
                HIS/EMR, and specialised point solutions — deliberately before
                evaluating any interface.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {competitiveGroups.map((group, index) => (
              <Reveal key={group.title} delay={0.08 * index}>
                <article className="h-full rounded-3xl border border-black/10 p-7">
                  <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                    {group.title}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {group.vendors.map((vendor) => (
                      <li
                        key={vendor}
                        className="text-sm font-medium leading-6 text-black/70"
                      >
                        {vendor}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8 rounded-3xl bg-[#111111] p-7 text-white sm:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-white/40">
              Questions asked of every vendor — deliberately not about UI
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {researchQuestions.map((question) => (
                <p
                  key={question}
                  className="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white/85"
                >
                  {question}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              06 / Product scope &amp; principles
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              A modular ecosystem, not a monolith with everything bolted on.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-4xl bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {scopeAreas.map((area, index) => (
              <Reveal key={area.title} delay={0.06 * index}>
                <article className="h-full bg-[#111111] p-7">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {area.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8">
            <p className="text-xs uppercase tracking-[0.16em] text-white/40">
              Design principles guiding every later phase
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {designPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="rounded-2xl border border-white/15 p-4 text-sm leading-6 text-white/80"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        id="roadmap"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                07 / Where this stands
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                This follows an 18-phase process. I am at the end of Phase 1.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
                I&apos;d rather show exactly what&apos;s done and what&apos;s
                next than round the project up to a finished product.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-14 rounded-3xl border border-black/10 bg-[#deddd6] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-black/40">
              Phase 1 — Discovery
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {discoverySteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white/70 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-black/40">
                      {item.step}
                    </span>
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>

                  <span
                    className={[
                      "rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]",
                      item.status === "done"
                        ? "bg-[#2f6b55] text-white"
                        : "border border-black/15 text-black/50",
                    ].join(" ")}
                  >
                    {item.status === "done" ? "Done" : "Next"}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-6 rounded-3xl border border-dashed border-black/15 p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-black/40">
              Phases 2–18 · Ahead
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {laterPhases.map((phase) => (
                <span
                  key={phase}
                  className="rounded-full border border-black/15 px-3 py-1.5 text-xs text-black/60"
                >
                  {phase}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#c96b48] px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-black/55">
              Continue exploring
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              See more systems, products and design thinking.
            </h2>
          </div>

          <Link
            href="/#work"
            className="shrink-0 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-1"
          >
            Back to selected work ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
