import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Navigation Concept — Naveen Kishore",
  description:
    "An independent product design concept exploring navigation for a complex cloud platform.",
};

const processSteps = [
  {
    number: "01",
    title: "Audit the landscape",
    description:
      "Review the existing service inventory, labels, hierarchy and common paths into the product.",
  },
  {
    number: "02",
    title: "Group by user intent",
    description:
      "Organize services around recognizable goals instead of expecting users to understand the internal product structure.",
  },
  {
    number: "03",
    title: "Support different strategies",
    description:
      "Combine browsing, search, recent activity and saved services so users can navigate in different ways.",
  },
  {
    number: "04",
    title: "Prototype key tasks",
    description:
      "Connect the proposed structure to realistic service-discovery and switching workflows.",
  },
];

const serviceGroups = [
  "Compute",
  "Data & analytics",
  "AI & machine learning",
  "Networking",
  "Security",
];

const recentServices = [
  "Virtual machines",
  "Cloud storage",
  "Data warehouse",
  "Model development",
];

export default function CloudNavigationPage() {
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
          Cloud Platform · Independent Concept
        </p>

        <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Helping people find their way through Google Cloud.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600 sm:text-2xl">
          A navigation concept exploring how people could discover, revisit and
          move between services in a large cloud ecosystem.
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
              Project
            </dt>
            <dd className="mt-2 font-medium">Independent concept</dd>
          </div>

          <div className="border-b border-black/15 py-6 sm:border-r sm:px-6 lg:border-b-0">
            <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              Contribution
            </dt>
            <dd className="mt-2 font-medium">IA and interaction design</dd>
          </div>

          <div className="py-6 sm:px-6 lg:pr-0">
            <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              Focus
            </dt>
            <dd className="mt-2 font-medium">Service discovery</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm text-neutral-500">
          This independent concept was not commissioned by or affiliated with
          Google.
        </p>

        <div className="mt-16 overflow-hidden rounded-4xl bg-[#dce3ec] p-5 sm:p-10 lg:p-14">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-black/10 bg-[#f8f8f5] shadow-2xl">
            <div className="flex flex-col gap-4 border-b border-black/10 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 grid-cols-2 gap-1 rounded-xl bg-white p-2">
                  <span className="rounded-sm bg-[#3d5f8d]" />
                  <span className="rounded-sm bg-[#a4532f]" />
                  <span className="rounded-sm bg-[#d3a334]" />
                  <span className="rounded-sm bg-[#2f6b55]" />
                </div>

                <span className="text-sm font-semibold">Cloud console</span>
              </div>

              <div className="flex h-11 items-center rounded-full bg-black/5 px-5 text-sm text-black/40 sm:w-80">
                Search services, resources and documentation
              </div>
            </div>

            <div className="grid min-h-125 lg:grid-cols-[0.28fr_1fr]">
              <aside className="border-b border-black/10 bg-[#edf0f4] p-5 lg:border-b-0 lg:border-r">
                <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                  Navigation
                </p>

                <div className="mt-6 space-y-2">
                  {[
                    "Overview",
                    "All services",
                    "Recent",
                    "Saved",
                    "Projects",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-xl px-4 py-3 text-sm ${
                        index === 1
                          ? "bg-[#3d5f8d] font-medium text-white"
                          : "text-black/60"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-xs uppercase tracking-[0.16em] text-black/40">
                  Service groups
                </p>

                <div className="mt-4 space-y-3">
                  {serviceGroups.map((group) => (
                    <div
                      key={group}
                      className="flex items-center justify-between text-sm text-black/60"
                    >
                      <span>{group}</span>
                      <span aria-hidden="true">›</span>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="p-5 sm:p-8">
                <p className="text-sm text-black/45">All services</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Find the right cloud service.
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {serviceGroups.slice(0, 4).map((group, index) => (
                    <article
                      key={group}
                      className="rounded-2xl border border-black/10 bg-white p-5"
                    >
                      <div
                        className="h-10 w-10 rounded-xl"
                        style={{
                          backgroundColor: [
                            "#3d5f8d",
                            "#2f6b55",
                            "#a4532f",
                            "#74548f",
                          ][index],
                        }}
                      />
                      <h3 className="mt-6 font-semibold">{group}</h3>
                      <p className="mt-2 text-sm leading-6 text-black/50">
                        Explore related services and common starting points.
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-black/5 p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                    Recently used
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {recentServices.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm"
                      >
                        <span className="h-7 w-7 rounded-lg bg-[#dce3ec]" />
                        <span>{service}</span>
                      </div>
                    ))}
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
              Powerful platforms become difficult when their structure is hard
              to recognize.
            </h2>

            <div className="mt-10 grid gap-6 text-lg leading-8 text-neutral-600 sm:grid-cols-2">
              <p>
                Large cloud ecosystems contain many specialized products,
                technical labels and overlapping pathways into services.
              </p>

              <p>
                The concept explores how navigation could support both new users
                who browse and experienced users who move quickly between
                familiar tools.
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
            How might we help people discover and move between cloud services
            without requiring them to memorize the platform?
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
                Treat navigation as a connected system of finding strategies.
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

      <section className="bg-[#dce3ec] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm uppercase tracking-[0.18em] text-black/50">
            03 / Navigation principles
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Make complexity navigable without pretending it does not exist.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Organize around intent",
                text: "Use recognizable goals and categories as entry points into the service ecosystem.",
              },
              {
                title: "Offer multiple paths",
                text: "Support browsing, search, recent activity and saved services together.",
              },
              {
                title: "Preserve orientation",
                text: "Help users understand where they are and move to related services without restarting.",
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
