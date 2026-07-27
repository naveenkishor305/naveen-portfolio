import type { Metadata } from "next";
import Link from "next/link";
import HealthcareSystemMap from "@/components/case-study/healthcare-system-map";

export const metadata: Metadata = {
  title: "Healthcare IA Explorer — Naveen Kishore",
  description:
    "A product design case study about mapping and comparing the information architecture of complex healthcare software ecosystems.",
};

const projectDetails = [
  {
    label: "Role",
    value: "Product Designer",
  },
  {
    label: "Scope",
    value: "Research · IA · UX · Prototype",
  },
  {
    label: "Status",
    value: "Ongoing independent project",
  },
  {
    label: "Year",
    value: "2026",
  },
];

const researchActivities = [
  {
    number: "01",
    title: "Product ecosystem audit",
    description:
      "Review public product pages, documentation and navigation structures to understand how each healthcare company describes its ecosystem.",
  },
  {
    number: "02",
    title: "Taxonomy normalisation",
    description:
      "Translate inconsistent product terminology into a shared hierarchy that allows meaningful comparison across companies.",
  },
  {
    number: "03",
    title: "Relationship modelling",
    description:
      "Define how companies, products, modules, workflows and screens connect without flattening important structural differences.",
  },
  {
    number: "04",
    title: "Interactive exploration",
    description:
      "Prototype an expandable visual experience so users can move from a broad ecosystem view into increasingly detailed product information.",
  },
];

const designDecisions = [
  {
    title: "Progressive disclosure",
    description:
      "Show only the next relevant level when a node is selected, reducing visual overload while preserving access to deeper information.",
  },
  {
    title: "Visible hierarchy",
    description:
      "Keep parent-child relationships apparent so users can understand where an item belongs and retrace their path.",
  },
  {
    title: "Consistent node types",
    description:
      "Give companies, products, modules, workflows and screens recognisable visual treatments without relying on colour alone.",
  },
  {
    title: "Data before decoration",
    description:
      "Separate the underlying information model from the interface so the experience can grow as more companies and products are researched.",
  },
];

const nextValidation = [
  "Test whether users understand the five hierarchy levels without explanation.",
  "Evaluate navigation when several branches are expanded simultaneously.",
  "Add search, filtering and comparison across healthcare companies.",
  "Validate terminology with healthcare product and UX practitioners.",
];

export default function HealthcarePlatformPage() {
  return (
    <main className="min-h-screen bg-[#f4f3ee] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f3ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
          <Link
            href="/"
            aria-label="Naveen Kishore — Home"
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-xs font-semibold text-white">
              NK
            </span>

            <span className="hidden text-sm font-semibold sm:block">
              Naveen Kishore
            </span>
          </Link>

          <nav aria-label="Case study navigation">
            <ul className="flex items-center gap-4 text-xs font-medium text-black/55 sm:gap-6 sm:text-sm">
              <li>
                <a className="transition-colors hover:text-black" href="#model">
                  System
                </a>
              </li>

              <li>
                <a
                  className="transition-colors hover:text-black"
                  href="#approach"
                >
                  Approach
                </a>
              </li>

              <li>
                <a
                  className="transition-colors hover:text-black"
                  href="#prototype"
                >
                  Prototype
                </a>
              </li>

              <li>
                <Link
                  href="/#work"
                  className="rounded-full bg-black px-4 py-2.5 text-white"
                >
                  All work
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="px-6 pb-24 pt-16 sm:px-8 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-black/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em]">
              Flagship case study
            </span>

            <span className="rounded-full bg-[#dce6df] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#2f6b55]">
              Ongoing
            </span>
          </div>

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Healthcare product intelligence · Information architecture
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-7xl lg:text-[6.8rem]">
            Mapping complex healthcare product ecosystems.
          </h1>

          <p className="mt-9 max-w-3xl text-xl leading-9 text-neutral-600 sm:text-2xl">
            An interactive explorer for understanding how healthcare companies
            organise products, modules, workflows and screens.
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
              This is a self-initiated project based on public product
              information and an independently built prototype. It is not
              presented as commissioned client work.
            </p>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[2.25rem] bg-[#dce6df] p-5 sm:p-10 lg:p-14">
            <span
              aria-hidden="true"
              className="absolute -right-16 -top-24 text-[15rem] font-semibold leading-none text-black/[0.035] sm:text-[24rem]"
            >
              01
            </span>

            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f8f8f5] shadow-2xl">
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.18em] text-black/40">
                  Healthcare IA Explorer
                </span>
              </div>

              <div className="grid min-h-[31rem] lg:grid-cols-[0.26fr_1fr]">
                <aside className="border-b border-black/10 bg-[#edf0ec] p-5 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2f6b55] text-xs font-semibold text-white">
                      IA
                    </span>

                    <div>
                      <p className="text-xs font-semibold">Explorer</p>
                      <p className="text-[10px] text-black/40">
                        Product intelligence
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 space-y-2">
                    {[
                      "Companies",
                      "Products",
                      "Workflows",
                      "Compare",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={[
                          "rounded-xl px-3 py-2.5 text-xs font-medium",
                          index === 0
                            ? "bg-[#2f6b55] text-white"
                            : "bg-white/65 text-black/55",
                        ].join(" ")}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>

                <div className="p-5 sm:p-7">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                        Selected company
                      </p>

                      <h2 className="mt-2 text-xl font-semibold">
                        Epic Systems
                      </h2>
                    </div>

                    <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-[10px] text-black/45">
                      Search products and modules
                    </div>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-black/10 bg-white p-5">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
                        Company
                      </p>

                      <p className="mt-7 text-sm font-semibold">
                        Epic Systems
                      </p>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-white p-5">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-black/40">
                        Product
                      </p>

                      <p className="mt-7 text-sm font-semibold">Hyperspace</p>
                    </div>

                    <div className="rounded-2xl bg-[#2f6b55] p-5 text-white">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/55">
                        Module
                      </p>

                      <p className="mt-7 text-sm font-semibold">
                        Clinical workflows
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-2xl border border-black/10 bg-white p-5">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-semibold">
                          Child relationships
                        </p>

                        <span className="font-mono text-[10px] text-black/35">
                          EXPANDED
                        </span>
                      </div>

                      <div className="mt-5 space-y-3">
                        {[
                          "Patient chart review",
                          "Clinical documentation",
                          "Order management",
                        ].map((item, index) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl bg-[#edf0ec] p-3"
                          >
                            <span
                              className={[
                                "h-8 w-1 rounded-full",
                                index === 0
                                  ? "bg-[#2f6b55]"
                                  : "bg-black/10",
                              ].join(" ")}
                            />

                            <span className="text-[11px] font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#111111] p-5 text-white">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                        Current depth
                      </p>

                      <p className="mt-5 text-5xl font-semibold">03</p>

                      <p className="mt-2 text-xs leading-5 text-white/50">
                        Company, product and module currently visible.
                      </p>

                      <div className="mt-8 flex gap-1.5">
                        {[0, 1, 2, 3, 4].map((item) => (
                          <span
                            key={item}
                            className={[
                              "h-1.5 flex-1 rounded-full",
                              item < 3 ? "bg-[#6fa68f]" : "bg-white/15",
                            ].join(" ")}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[0.3fr_1fr] lg:px-10 lg:py-32">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            01 / Problem
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              Healthcare software ecosystems are difficult to understand before
              you even begin comparing them.
            </h2>

            <div className="mt-12 grid gap-8 text-base leading-8 text-neutral-600 sm:grid-cols-2 sm:text-lg">
              <p>
                Companies describe their products using different naming
                conventions, category structures and levels of detail. A
                product in one ecosystem may resemble a module or workflow in
                another.
              </p>

              <p>
                Flat comparison tables lose these relationships. The design
                challenge was to preserve hierarchy while making a dense
                ecosystem understandable and explorable.
              </p>
            </div>

            <div className="mt-12 rounded-[1.75rem] bg-[#111111] p-7 text-white sm:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                Core design question
              </p>

              <p className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                How might we compare complex healthcare products without
                flattening the relationships that make each ecosystem useful?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="model"
        className="scroll-mt-24 bg-[#dce6df] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <p className="text-sm uppercase tracking-[0.18em] text-black/50">
              02 / System model
            </p>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                A shared five-level model creates structure without pretending
                every company is identical.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
                The model provides a consistent comparison framework while
                allowing individual ecosystems to retain their own product
                terminology and depth.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <HealthcareSystemMap />
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
              03 / Approach
            </p>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                I treated the information model as a product-design problem,
                not simply a visualisation problem.
              </h2>

              <div className="mt-14 divide-y divide-black/15 border-y border-black/15">
                {researchActivities.map((activity) => (
                  <article
                    key={activity.number}
                    className="grid gap-5 py-8 sm:grid-cols-[0.15fr_0.35fr_0.5fr]"
                  >
                    <p className="font-mono text-xs text-neutral-400">
                      {activity.number}
                    </p>

                    <h3 className="text-xl font-semibold tracking-tight">
                      {activity.title}
                    </h3>

                    <p className="leading-7 text-neutral-600">
                      {activity.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm uppercase tracking-[0.18em] text-white/45">
            04 / Product decisions
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            The interaction design protects users from the complexity of the
            complete dataset.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-white/15 md:grid-cols-2">
            {designDecisions.map((decision, index) => (
              <article
                key={decision.title}
                className="min-h-64 bg-[#111111] p-7 sm:p-10"
              >
                <span className="font-mono text-xs text-[#6fa68f]">
                  0{index + 1}
                </span>

                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.025em]">
                  {decision.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-white/55">
                  {decision.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="prototype"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
              05 / Prototype
            </p>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
                Building the interface helped reveal problems that static
                diagrams could not.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
                The functional prototype tests expansion behaviour, node
                positioning, hierarchy visibility and how the canvas responds
                as more information is revealed.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-3">
                {[
                  {
                    label: "Interaction",
                    value: "Expandable hierarchy",
                  },
                  {
                    label: "Structure",
                    value: "Typed relational data",
                  },
                  {
                    label: "Implementation",
                    value: "React · TypeScript · D3",
                  },
                ].map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.5rem] border border-black/10 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                      {item.label}
                    </p>

                    <p className="mt-8 text-lg font-semibold">{item.value}</p>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-black/10 bg-[#deddd6] p-7 sm:p-10">
                <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                  Current project status
                </p>

                <p className="mt-5 max-w-3xl text-xl font-medium leading-8">
                  The explorer is actively being developed. The case study will
                  be updated with final interface screenshots, usability
                  findings and comparison features as they are completed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/15 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.3fr_1fr]">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            06 / Next validation
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              I am separating demonstrated progress from outcomes that still
              need validation.
            </h2>

            <div className="mt-14 divide-y divide-black/15 border-y border-black/15">
              {nextValidation.map((item, index) => (
                <div
                  key={item}
                  className="grid gap-5 py-6 sm:grid-cols-[0.1fr_0.9fr]"
                >
                  <span className="font-mono text-xs text-neutral-400">
                    0{index + 1}
                  </span>

                  <p className="text-lg leading-8 text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
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
