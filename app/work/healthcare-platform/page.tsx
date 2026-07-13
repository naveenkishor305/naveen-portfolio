import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare Operations — Naveen Kishore",
  description:
    "A product design case study about simplifying complex healthcare CRM and ERP workflows.",
};

const processSteps = [
  {
    number: "01",
    title: "Understand the system",
    description:
      "Map the roles, goals, recurring tasks and dependencies that shape the product experience.",
  },
  {
    number: "02",
    title: "Structure the workflows",
    description:
      "Organize information around user responsibilities instead of reflecting internal system complexity.",
  },
  {
    number: "03",
    title: "Design scalable patterns",
    description:
      "Create predictable interaction patterns that can work consistently across modules and roles.",
  },
  {
    number: "04",
    title: "Prototype and refine",
    description:
      "Use connected flows and high-fidelity prototypes to evaluate decisions before implementation.",
  },
];

export default function HealthcarePlatformPage() {
  return (
    <main className="min-h-screen bg-[#f4f3ee] text-[#111111]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight"
          aria-label="Naveen Kishore home"
        >
          NK.
        </Link>

        <Link
          href="/#work"
          className="text-sm text-neutral-600 transition-colors hover:text-black"
        >
          ← All work
        </Link>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-8 lg:px-10 lg:pb-32 lg:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Healthcare CRM & ERP · Enterprise SaaS
        </p>

        <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Making healthcare operations easier to understand and manage.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600 sm:text-2xl">
          A multi-role product experience designed to bring greater clarity and
          consistency to data-heavy care and business workflows.
        </p>

        <dl className="mt-14 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-black/15 py-6 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0">
            <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              Role
            </dt>
            <dd className="mt-2 font-medium">Product Designer</dd>
          </div>

          <div className="border-b border-black/15 py-6 sm:px-6 lg:border-b-0 lg:border-r">
            <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              Product
            </dt>
            <dd className="mt-2 font-medium">Enterprise CRM & ERP</dd>
          </div>

          <div className="border-b border-black/15 py-6 sm:border-r sm:px-6 lg:border-b-0">
            <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              Contribution
            </dt>
            <dd className="mt-2 font-medium">Discovery through UI design</dd>
          </div>

          <div className="py-6 sm:px-6 lg:pr-0">
            <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              Focus
            </dt>
            <dd className="mt-2 font-medium">Multi-role workflows</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm text-neutral-500">
          Some product details have been generalized to respect confidentiality.
        </p>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#dce6df] p-5 sm:p-10 lg:p-14">
          <div className="mx-auto max-w-5xl rounded-3xl border border-black/10 bg-[#f8f8f5] p-4 shadow-2xl sm:p-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.18em] text-black/40">
                Operations overview
              </span>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[0.28fr_1fr]">
              <aside className="rounded-2xl bg-[#edf0ec] p-4">
                <div className="h-9 w-9 rounded-xl bg-[#2f6b55]" />

                <div className="mt-10 space-y-3">
                  <div className="h-2.5 rounded-full bg-black/15" />
                  <div className="h-2.5 w-4/5 rounded-full bg-black/10" />
                  <div className="h-2.5 w-3/5 rounded-full bg-black/10" />
                  <div className="h-2.5 w-4/5 rounded-full bg-black/10" />
                </div>
              </aside>

              <div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-[#2f6b55] p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">
                      Active
                    </p>
                    <p className="mt-8 text-3xl font-semibold">128</p>
                  </div>

                  <div className="rounded-2xl bg-[#edf0ec] p-5">
                    <p className="text-xs uppercase tracking-[0.14em] text-black/40">
                      Pending
                    </p>
                    <p className="mt-8 text-3xl font-semibold">24</p>
                  </div>

                  <div className="rounded-2xl bg-[#edf0ec] p-5">
                    <p className="text-xs uppercase tracking-[0.14em] text-black/40">
                      Completed
                    </p>
                    <p className="mt-8 text-3xl font-semibold">86</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-2xl bg-[#edf0ec] p-5">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-28 rounded-full bg-black/15" />
                      <div className="h-7 w-16 rounded-full bg-white" />
                    </div>

                    <div className="mt-8 space-y-3">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-4 rounded-xl bg-white p-3"
                        >
                          <span className="h-8 w-8 rounded-lg bg-[#dce6df]" />
                          <span className="h-2.5 flex-1 rounded-full bg-black/10" />
                          <span className="h-2.5 w-12 rounded-full bg-black/10" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex min-h-64 items-end rounded-2xl bg-[#edf0ec] p-5">
                    <div className="flex h-40 w-full items-end gap-3">
                      {[45, 70, 52, 88, 64, 78].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-lg bg-[#2f6b55]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[0.35fr_1fr] lg:px-10 lg:py-32">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            01 / Context
          </p>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              One platform. Many roles, responsibilities and decisions.
            </h2>

            <div className="mt-10 grid gap-6 text-lg leading-8 text-neutral-600 sm:grid-cols-2">
              <p>
                Healthcare operational products must support dense records,
                frequent status changes, handoffs and role-specific
                responsibilities.
              </p>

              <p>
                My focus was to create a clearer product structure without
                removing the depth required by experienced operational users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm uppercase tracking-[0.18em] text-white/50">
            Core design question
          </p>

          <p className="mt-8 max-w-5xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            How might we make a data-heavy platform feel predictable across
            different roles while preserving its operational depth?
          </p>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
              02 / Approach
            </p>

            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Clarity came from understanding the system before styling the
                screens.
              </h2>

              <div className="mt-14 divide-y divide-black/15 border-y border-black/15">
                {processSteps.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-5 py-8 sm:grid-cols-[0.15fr_0.4fr_0.45fr]"
                  >
                    <p className="text-sm text-neutral-500">{step.number}</p>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="leading-7 text-neutral-600">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dce6df] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm uppercase tracking-[0.18em] text-black/50">
            03 / Design direction
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A foundation designed to remain useful as the product grows.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Role-based clarity",
                text: "Prioritize the information and actions most relevant to each responsibility.",
              },
              {
                title: "Predictable workflows",
                text: "Use repeatable task patterns so users do not have to relearn each module.",
              },
              {
                title: "Scalable structure",
                text: "Build navigation and interface patterns that can support future functionality.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-black/10 bg-white/55 p-7"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-black/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#c96b48] px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-black/55">
              Continue exploring
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              More projects, systems and product thinking.
            </h2>
          </div>

          <Link
            href="/#work"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1"
          >
            Back to selected work ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
