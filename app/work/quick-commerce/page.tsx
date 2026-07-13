import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quick Commerce — Naveen Kishore",
  description:
    "A product design case study about creating a local quick-commerce mobile experience.",
};

const journey = [
  {
    number: "01",
    title: "Discover",
    description:
      "Help shoppers quickly understand what is available and find relevant everyday products.",
  },
  {
    number: "02",
    title: "Decide",
    description:
      "Present the information needed to compare products and make confident purchase decisions.",
  },
  {
    number: "03",
    title: "Order",
    description:
      "Reduce uncertainty throughout the cart, address, payment and confirmation experience.",
  },
  {
    number: "04",
    title: "Track",
    description:
      "Communicate delivery progress clearly after the order has been placed.",
  },
];

const screens = [
  {
    label: "Discover",
    title: "Find everyday products.",
    accent: "#a4532f",
  },
  {
    label: "Cart",
    title: "Review with confidence.",
    accent: "#2f6b55",
  },
  {
    label: "Delivery",
    title: "Know what happens next.",
    accent: "#3d5f8d",
  },
];

export default function QuickCommercePage() {
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
          Quick Commerce · 0–1 Mobile Product
        </p>

        <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Designing quick commerce around everyday decisions.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600 sm:text-2xl">
          A mobile shopping experience designed to make product discovery,
          ordering and delivery tracking feel straightforward in a Ghanaian
          market context.
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
            <dd className="mt-2 font-medium">Consumer mobile app</dd>
          </div>

          <div className="border-b border-black/15 py-6 sm:border-r sm:px-6 lg:border-b-0">
            <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              Contribution
            </dt>
            <dd className="mt-2 font-medium">Product flows and UX/UI</dd>
          </div>

          <div className="py-6 sm:px-6 lg:pr-0">
            <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              Focus
            </dt>
            <dd className="mt-2 font-medium">End-to-end ordering journey</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm text-neutral-500">
          Some product details have been generalized to respect confidentiality.
        </p>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#eadfce] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {screens.map((screen) => (
              <div
                key={screen.label}
                className="mx-auto w-full max-w-[280px] rounded-[2.5rem] bg-[#111111] p-2 shadow-2xl"
              >
                <div className="min-h-[500px] overflow-hidden rounded-[2rem] bg-[#f8f8f5] p-5">
                  <div className="mx-auto h-5 w-20 rounded-full bg-black" />

                  <p className="mt-8 text-xs uppercase tracking-[0.16em] text-black/40">
                    {screen.label}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold leading-tight">
                    {screen.title}
                  </h2>

                  <div className="mt-6 h-11 rounded-full bg-black/5" />

                  <div
                    className="mt-4 rounded-2xl p-5 text-white"
                    style={{ backgroundColor: screen.accent }}
                  >
                    <div className="h-2.5 w-2/3 rounded-full bg-white/50" />
                    <div className="mt-3 h-2.5 w-1/2 rounded-full bg-white/30" />
                    <div className="mt-10 h-8 w-24 rounded-full bg-white/20" />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="rounded-2xl bg-black/5 p-3">
                        <div className="aspect-square rounded-xl bg-black/5" />
                        <div className="mt-3 h-2.5 rounded-full bg-black/15" />
                        <div className="mt-2 h-2.5 w-1/2 rounded-full bg-black/10" />
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-5 h-12 rounded-full"
                    style={{ backgroundColor: screen.accent }}
                  />
                </div>
              </div>
            ))}
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
              Speed matters, but confidence matters too.
            </h2>

            <div className="mt-10 grid gap-6 text-lg leading-8 text-neutral-600 sm:grid-cols-2">
              <p>
                Quick-commerce products bring product discovery, availability,
                payment and delivery into one continuous journey.
              </p>

              <p>
                The experience needed to remain fast without hiding the
                information shoppers need to make confident decisions.
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
            How might we create a quick ordering experience that feels simple,
            trustworthy and relevant to its local context?
          </p>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
              02 / Journey
            </p>

            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Designing the complete experience, not isolated screens.
              </h2>

              <div className="mt-14 divide-y divide-black/15 border-y border-black/15">
                {journey.map((step) => (
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

      <section className="bg-[#eadfce] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm uppercase tracking-[0.18em] text-black/50">
            03 / Design principles
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A simple interface supported by clear product decisions.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Make availability visible",
                text: "Set clear expectations before shoppers invest time building an order.",
              },
              {
                title: "Reduce checkout uncertainty",
                text: "Keep costs, delivery details and required decisions visible throughout checkout.",
              },
              {
                title: "Communicate progress",
                text: "Use understandable delivery states so customers always know what happens next.",
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
