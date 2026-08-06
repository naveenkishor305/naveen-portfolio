import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyHeader from "@/components/case-study/case-study-header";
import Reveal from "@/components/motion/reveal";
import NtemInteractivePreview from "@/components/case-study/ntem-interactive-preview";

const sections = [
  { label: "Overview", href: "#overview" },
  { label: "Prototype", href: "#prototype" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Journey", href: "#journey" },
  { label: "Principles", href: "#principles" },
];

export const metadata: Metadata = {
  title: "Ntɛm — Quick Commerce for Ghana | Naveen Kishore",
  description:
    "An end-to-end product design case study for a three-sided quick-commerce ecosystem connecting customers, local merchants and riders in Ghana.",
};

const projectDetails = [
  {
    label: "Role",
    value: "End-to-end Product Designer",
  },
  {
    label: "Platform",
    value: "Android-first mobile ecosystem",
  },
  {
    label: "Market",
    value: "Accra and Kumasi, Ghana",
  },
  {
    label: "Deliverable",
    value: "Interactive prototype and design system",
  },
];

const ecosystem = [
  {
    number: "01",
    label: "Customer",
    title: "Everything I need, delivered quickly.",
    description:
      "A simple way to discover products, combine items from multiple local businesses, pay with MoMo and track one coherent order.",
    accent: "#B4441F",
    surface: "#F6E4DC",
  },
  {
    number: "02",
    label: "Merchant",
    title: "Digitise my business without complicating it.",
    description:
      "A lightweight operating layer for neighbourhood stores, restaurants and pharmacies to manage inventory, orders and fulfilment.",
    accent: "#1B5E43",
    surface: "#DCEDE4",
  },
  {
    number: "03",
    label: "Rider",
    title: "Clear work, clear route, clear pay.",
    description:
      "A glanceable workflow that sequences multi-store pickups, prioritises landmark-based navigation and keeps earnings visible.",
    accent: "#8A5A0B",
    surface: "#FBEDD3",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    description:
      "Search across groceries, food, pharmacy products and nearby independent stores without requiring customers to know which merchant carries an item.",
  },
  {
    number: "02",
    title: "Build one basket",
    description:
      "Combine products from multiple merchants while keeping store subtotals, preparation times and delivery fees visible.",
  },
  {
    number: "03",
    title: "Choose an outcome",
    description:
      "Select one combined arrival or faster staggered deliveries while the platform handles the underlying routing logic.",
  },
  {
    number: "04",
    title: "Track and recover",
    description:
      "Follow each merchant partition, the assigned rider and exception states such as substitutions or partial refunds.",
  },
];

const principles = [
  {
    title: "Convenience",
    text: "Reduce the distance between intent and order without concealing information that affects the customer’s decision.",
  },
  {
    title: "Trust",
    text: "Make merchants, prices, preparation times, riders, fees and refund outcomes visible before commitment.",
  },
  {
    title: "Accessibility",
    text: "Support fluent and first-time commerce users through plain language, strong hierarchy and safe default behaviour.",
  },
  {
    title: "Scalability",
    text: "Use merchant-partitioned orders and category-led navigation so new businesses and categories can be added without redesigning the product.",
  },
];

const productViews = [
  {
    label: "Customer",
    title: "One evening. One basket.",
    accent: "#B4441F",
    background: "#FDF9F5",
  },
  {
    label: "Merchant",
    title: "Orders without counter friction.",
    accent: "#1B5E43",
    background: "#FFFFFF",
  },
  {
    label: "Rider",
    title: "One clear action at a time.",
    accent: "#E39B26",
    background: "#231A14",
  },
];

export default function QuickCommercePage() {
  return (
    <main className="min-h-screen bg-[#FDF9F5] text-[#231A14]">
      <CaseStudyHeader sections={sections} />

      <section className="overflow-hidden bg-[#231A14] text-[#FDF9F5]">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                Self-initiated product concept
              </span>

              <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                Android-first · Ghana
              </span>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div>
                <p className="text-5xl font-semibold tracking-[-0.06em] text-[#E39B26] sm:text-7xl">
                  Ntɛm
                </p>

                <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-7xl lg:text-[6.25rem]">
                  Quick commerce designed around a Ghanaian evening.
                </h1>
              </div>

              <p className="max-w-xl text-lg leading-8 text-white/65 lg:pb-2">
                A three-sided marketplace connecting customers, independent
                merchants and riders through one coherent ordering and
                fulfilment system.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-14">
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="https://ntem-prototype.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-white/15 bg-[#FDF9F5] p-6 text-[#231A14] transition duration-300 hover:-translate-y-1 hover:border-[#E39B26]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#B4441F]">
                      Live product
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                      Open the interactive prototype
                    </h2>

                    <p className="mt-3 max-w-md leading-7 text-[#5A4A3F]">
                      Explore the customer, merchant and rider views of one
                      shared multi-merchant order.
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/naveenkishor305/ntem-prototype"
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-white/15 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#E39B26]">
                      Source code
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                      View the GitHub repository
                    </h2>

                    <p className="mt-3 max-w-md leading-7 text-white/60">
                      Review the React implementation, shared order model,
                      interaction states and deployment structure.
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="mt-16">
            <div className="rounded-[2rem] border border-white/10 bg-[#15100C] p-5 sm:p-8 lg:p-10">
              <div className="grid gap-6 md:grid-cols-3">
                {productViews.map((view, index) => (
                  <Reveal key={view.label} delay={0.06 * index}>
                    <div className="mx-auto w-full max-w-[18rem] rounded-[2.25rem] bg-black p-2 shadow-2xl shadow-black/30">
                      <div
                        className="min-h-[31rem] overflow-hidden rounded-[1.8rem] p-5"
                        style={{
                          backgroundColor: view.background,
                          color:
                            view.background === "#231A14"
                              ? "#FDF9F5"
                              : "#231A14",
                        }}
                      >
                        <div className="mx-auto h-5 w-20 rounded-full bg-black" />

                        <p
                          className="mt-9 text-xs font-semibold uppercase tracking-[0.16em]"
                          style={{ color: view.accent }}
                        >
                          {view.label} app
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">
                          {view.title}
                        </h2>

                        <div
                          className="mt-8 rounded-2xl p-5"
                          style={{
                            backgroundColor: view.accent,
                            color:
                              view.label === "Rider" ? "#231A14" : "#FFFFFF",
                          }}
                        >
                          <div className="h-2.5 w-3/4 rounded-full bg-current opacity-45" />
                          <div className="mt-3 h-2.5 w-1/2 rounded-full bg-current opacity-25" />
                          <div className="mt-12 h-10 rounded-xl bg-current opacity-15" />
                        </div>

                        <div className="mt-4 space-y-3">
                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="rounded-2xl border border-current/10 p-4"
                            >
                              <div className="h-2.5 w-2/3 rounded-full bg-current opacity-15" />
                              <div className="mt-3 h-2.5 w-1/3 rounded-full bg-current opacity-10" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="overview"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B4441F]">
              01 / Project overview
            </p>

            <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_0.58fr]">
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
                The unit of need is not a category. It is an evening.
              </h2>

              <p className="text-lg leading-8 text-[#5A4A3F]">
                A customer may need vegetables, dinner and medicine at the same
                time. Existing category-specific services fragment that need
                into separate apps, fees, riders and arrival times.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-16">
            <dl className="grid border-y border-[#E3D5C6] sm:grid-cols-2 lg:grid-cols-4">
              {projectDetails.map((item, index) => (
                <div
                  key={item.label}
                  className={[
                    "py-6",
                    index < projectDetails.length - 1
                      ? "border-b border-[#E3D5C6] sm:border-r lg:border-b-0"
                      : "",
                    index === 1 ? "sm:border-r-0 lg:border-r" : "",
                    index > 0 ? "sm:px-6" : "",
                  ].join(" ")}
                >
                  <dt className="text-xs font-medium uppercase tracking-[0.16em] text-[#8A776A]">
                    {item.label}
                  </dt>
                  <dd className="mt-3 font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[2rem] bg-[#F4EBE1] p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8E3315]">
                  The market problem
                </p>

                <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight">
                  Local commerce already works. It is simply disconnected.
                </h3>

                <p className="mt-6 text-lg leading-8 text-[#5A4A3F]">
                  Neighbourhood provision shops, chop bars and pharmacies
                  already hold the inventory people rely on. They need a
                  connective digital layer—not an imported operating model
                  that forces them to change how their businesses work.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="h-full rounded-[2rem] bg-[#1B5E43] p-7 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                  The design opportunity
                </p>

                <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight">
                  One marketplace, many merchants, one understandable promise.
                </h3>

                <p className="mt-6 text-lg leading-8 text-white/70">
                  Ntɛm combines independent merchant inventory with adaptive
                  fulfilment, allowing the system to coordinate different
                  preparation times while the customer chooses a simple
                  outcome: together, or as ready.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Embedded Live Prototype Section */}
      <section
        id="prototype"
        className="scroll-mt-24 bg-[#15100C] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#E39B26]">
              02 / Live App Preview
            </p>

            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
              Try the Ntɛm prototype live.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Interact directly with the prototype below to test multi-merchant ordering, checkout, and tracking.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <NtemInteractivePreview initialUrl="https://ntem-prototype.vercel.app/" />
          </Reveal>
        </div>
      </section>

      <section
        id="ecosystem"
        className="scroll-mt-24 border-y border-[#E3D5C6] bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B4441F]">
              03 / Three-sided ecosystem
            </p>

            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
              Three applications coordinating one shared order.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5A4A3F]">
              Each participant sees only the decisions required for their job.
              The platform absorbs the coordination complexity in the middle.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {ecosystem.map((item, index) => (
              <Reveal key={item.label} delay={0.07 * index}>
                <article
                  className="h-full rounded-[2rem] border p-7"
                  style={{
                    backgroundColor: item.surface,
                    borderColor: `${item.accent}30`,
                  }}
                >
                  <div className="flex items-center justify-between gap-5">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                      style={{ color: item.accent }}
                    >
                      {item.label}
                    </p>

                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-7 text-[#5A4A3F]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.32fr_1fr]">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B4441F]">
              04 / Hero journey
            </p>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
                Designing the complete system, not isolated screens.
              </h2>
            </Reveal>

            <div className="mt-14 divide-y divide-[#E3D5C6] border-y border-[#E3D5C6]">
              {journey.map((step, index) => (
                <Reveal key={step.number} delay={0.05 * index}>
                  <article className="grid gap-5 py-8 sm:grid-cols-[0.13fr_0.34fr_0.53fr]">
                    <p className="text-sm font-medium text-[#B4441F]">
                      {step.number}
                    </p>

                    <h3 className="text-xl font-semibold">{step.title}</h3>

                    <p className="leading-7 text-[#5A4A3F]">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="principles"
        className="scroll-mt-24 bg-[#F4EBE1] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B4441F]">
              05 / UX principles
            </p>

            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
              Clear decisions at the edges. Complex coordination in the middle.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={0.06 * index}>
                <article className="h-full rounded-[2rem] border border-[#E3D5C6] bg-[#FDF9F5] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A776A]">
                    Principle {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#5A4A3F]">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#B4441F] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/65">
              Continue exploring
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              More systems, products and design decisions.
            </h2>
          </div>

          <Link
            href="/#work"
            className="rounded-full bg-[#231A14] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1"
          >
            Back to selected work ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
