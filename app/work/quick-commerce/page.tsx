import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyHeader from "@/components/case-study/case-study-header";
import Reveal from "@/components/motion/reveal";
import NtemInteractivePreview from "@/components/case-study/ntem-interactive-preview";
import {
  CompetitiveWedge,
  PartitionDiagram,
  RoutingDiagram,
  ChoreographyDiagram,
  SitemapDiagram,
  ContrastAudit,
  ProcessTimeline,
  BasketMock,
  ExceptionMock,
  CharacterStrip,
} from "@/components/case-study/ntem-graphics";

const sections = [
  { label: "Overview", href: "#overview" },
  { label: "Market", href: "#market" },
  { label: "Personas", href: "#personas" },
  { label: "Architecture", href: "#architecture" },
  { label: "Decisions", href: "#ux-decisions" },
  { label: "Prototype", href: "#prototype" },
  { label: "System", href: "#design-system" },
  { label: "Principles", href: "#principles" },
];

export const metadata: Metadata = {
  title: "Ntɛm — Quick Commerce for Ghana | Naveen Kishore",
  description:
    "An end-to-end product design case study and interactive prototype for a three-sided quick-commerce ecosystem connecting customers, local merchants and riders in Ghana.",
};

const projectDetails = [
  { label: "Role", value: "End-to-end Product Designer" },
  { label: "Scope", value: "Research · IA · Interaction · System · Prototype" },
  { label: "Platform", value: "Android-first mobile ecosystem" },
  { label: "Market", value: "Accra & Kumasi, Ghana" },
];

const outcomes = [
  { v: "3", k: "Apps", d: "Customer, merchant and rider on one component tree" },
  { v: "30", k: "Screens", d: "All interactive, all reachable" },
  { v: "97", k: "Design tokens", d: "Every colour pairing contrast-verified" },
  { v: "21", k: "Passing assertions", d: "Order model tested before any UI existed" },
];

const personas = [
  {
    name: "Ama Serwaa",
    tag: "The Fluent Shopper · 28",
    mode: "Search-first · under 2 min",
    quote:
      "I don't want to browse. I know what I need — I need it to be here in thirty minutes.",
    need: "Speed, saved payment, one-tap reorder, an ETA she can trust.",
    solution:
      "Prominent search, persistent basket bar, MoMo as the default rather than an option.",
    accent: "#B4441F",
  },
  {
    name: "Kwame Boateng",
    tag: "The Deliberate Provider · 36",
    mode: "Browse-and-compare · 10–20 min",
    quote:
      "If I see one price in the store and another at the end, I won't come back.",
    need: "Unit prices in local measures, transparent totals, no surprises at checkout.",
    solution:
      "Store subtotals, olonka/bowl pricing, the single delivery fee shown in the basket.",
    accent: "#1B5E43",
  },
  {
    name: "Auntie Efua Mensah",
    tag: "The Assisted Newcomer · 54",
    mode: "Guided and linear · deliberate",
    quote: "If I press the wrong thing, will my money go?",
    need: "Large targets, plain language, one action per screen, no way to lose money.",
    solution:
      "17px base body, buttons that state their consequence, full refund on timeout.",
    accent: "#8A5A0B",
  },
];

const supplyPersonas = [
  {
    name: "Yaa Darko",
    role: "Provisions shop · Madina",
    mode: "Batch management",
    note: "High SKU count, steady volume. Sets up in bulk, then manages exceptions.",
    accent: "#1B5E43",
  },
  {
    name: "Kofi Owusu",
    role: "Chop bar · Osu",
    mode: "Interrupt-driven",
    note: "Cooks alone. Must accept or decline in under five seconds, mid-service.",
    accent: "#B4441F",
  },
  {
    name: "Ibrahim Alhassan",
    role: "Rider · Nima",
    mode: "Glanceable",
    note: "One-handed, phone mounted, in traffic. Navigates by landmark, not street.",
    accent: "#8A5A0B",
  },
  {
    name: "Selorm Agbeko",
    role: "Part-time rider · Achimota",
    mode: "Guided step-through",
    note: "New to the work. Needs the app to teach the job, not assume it.",
    accent: "#1D6A8C",
  },
];

const colorTokens = [
  { name: "Clay Red", hex: "#B4441F", role: "Primary · buttons and brand" },
  { name: "Forest Green", hex: "#1B5E43", role: "Success · delivered and healthy" },
  { name: "Gold Accent", hex: "#E39B26", role: "Accent only · never text" },
  { name: "Warm Ink", hex: "#231A14", role: "Primary text · 17.08:1" },
  { name: "Warm Sand", hex: "#FDF9F5", role: "App background surface" },
];

const principles = [
  {
    title: "Expose the preference, hide the logic",
    text: "Four routing models sit behind the checkout screen, chosen on prep-time variance, merchant proximity, distance and rider supply. Ama sees none of it — she answers one question: together, or as it comes? The engine can be rewritten without the interface changing, because the interface was never describing the mechanism.",
  },
  {
    title: "The order partition is the architecture",
    text: "Each merchant owns a partition rather than a slice of a flat list. That one decision is why failure isolation, per-store tracking, partial refunds and merchant privacy fall out of the model instead of being engineered individually. Cancel one store in the prototype and the other two stay intact.",
  },
  {
    title: "Inaction is always the free, safe outcome",
    text: "When an item goes unavailable after payment, silence removes it and refunds in full. The system never spends her money on something she didn't confirm. Most apps default the other way, optimising basket value at the cost of trust — the wrong trade in a market where digital commerce is still earning credibility.",
  },
  {
    title: "Layer depth, don't branch modes",
    text: "One app serves every fluency level through progressive depth rather than a simplified mode. Fluent users travel further per tap; nobody is segregated. The same pattern carries into the merchant and rider apps, where one shared core does the essential job and additional structure waits for those who need it.",
  },
  {
    title: "Resolve exceptions where the knowledge is",
    text: "A merchant marking something unavailable must suggest a substitute or explicitly decline one — she knows her shelf, the platform doesn't. The rider never meets the problem as a decision, only as an updated list. Complexity is absorbed in the middle so the edges stay simple.",
  },
  {
    title: "Every cost appears before the decision that incurs it",
    text: "Delivery fee in the basket, prep time on the store card, refund amount above the buttons. Late-revealed costs are the most common trust failure in commerce — and one fee for three stores is the clearest proof of the product's value, so burying it would hide the argument.",
  },
];

/* Small building blocks used across sections */
function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B4441F]">
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
    <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-[#8A776A]">
      {children}
    </p>
  );
}

export default function QuickCommercePage() {
  return (
    <main className="bg-[#FDF9F5] text-[#231A14]">
      <CaseStudyHeader sections={sections} />

      {/* ─────────────────────────────────────────────── HERO ── */}
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
                  <span aria-hidden="true" className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/naveenkishor305/ntem-prototype"
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-white/15 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/35"
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
                      React implementation, shared order model, interaction
                      states and deployment structure.
                    </p>
                  </div>
                  <span aria-hidden="true" className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </Reveal>

          {/* outcomes strip */}
          <Reveal delay={0.14} className="mt-14">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
              {outcomes.map((o) => (
                <div key={o.k} className="bg-[#231A14] p-6">
                  <div className="text-4xl font-semibold tracking-tight text-[#E39B26] [font-variant-numeric:tabular-nums]">
                    {o.v}
                  </div>
                  <div className="mt-2 text-sm font-semibold">{o.k}</div>
                  <div className="mt-1.5 text-[13px] leading-relaxed text-white/50">
                    {o.d}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────── OVERVIEW ── */}
      <section id="overview" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="01">The problem</Eyebrow>
            <Lead>The unit of need is not a category. It is an evening.</Lead>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <blockquote className="rounded-[2rem] border border-[#E3D5C6] bg-[#F4EBE1] p-8">
                <p className="text-xl leading-9 tracking-tight">
                  7:10 pm, Tuesday. Ama gets home from work. Her daughter has a
                  fever and needs paracetamol. There are no vegetables for
                  tomorrow&rsquo;s stew. She hasn&rsquo;t eaten.
                </p>
                <p className="mt-6 text-lg leading-8 text-[#5A4A3F]">
                  Three needs, three kinds of business, one evening. Today that
                  means a pharmacy run, a market trip and cooking — or three
                  separate apps and three separate deliveries.
                </p>
              </blockquote>

              <div className="space-y-6">
                <p className="text-lg leading-8 text-[#5A4A3F]">
                  Every quick commerce app in the market solves one category at
                  a time. Ntɛm treats the <b className="text-[#231A14]">evening</b> as
                  the unit of need rather than the category — which means one
                  basket containing three merchants with radically different
                  operating realities.
                </p>

                <div className="overflow-hidden rounded-[1.5rem] border border-[#E3D5C6]">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#F4EBE1]">
                      <tr>
                        {["Merchant", "Item", "Prep", "Behaviour"].map((h) => (
                          <th key={h} className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A4A3F]">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Yaa's Provisions", "Vegetables", "~2 min", "Pick from shelf"],
                        ["Kofi's Chop Bar", "Waakye + tilapia", "~20 min", "Cooked to order"],
                        ["Adom Pharmacy", "Paracetamol", "~3 min", "Pick, may verify"],
                      ].map((r) => (
                        <tr key={r[0]} className="border-t border-[#E3D5C6]">
                          {r.map((c, i) => (
                            <td key={i} className={`px-4 py-3 ${i === 0 ? "font-semibold" : "text-[#5A4A3F]"}`}>
                              {c}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-lg leading-8 text-[#5A4A3F]">
                  <b className="text-[#231A14]">The design question:</b> how do you
                  present a single, honest promise on top of three incompatible
                  timelines?
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 grid gap-8 border-t border-[#E3D5C6] pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {projectDetails.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A776A]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg leading-7">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── MARKET ── */}
      <section id="market" className="scroll-mt-24 bg-[#231A14] px-6 py-24 text-[#FDF9F5] sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#E39B26]">
              02 / Market conditions
            </p>
            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
              I checked what was true before deciding what to build.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              Two of my starting assumptions were wrong. Payment friction and
              data cost are the obvious angles for an African market — and
              neither survives contact with the numbers.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14 [&_*]:!text-inherit">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { v: "26.4M", k: "Active MoMo wallets", d: "Payment is a solved rail, not a differentiator", tone: "#5FBF92" },
                  { v: "GH¢492.9bn", k: "Moved in June 2026 alone", d: "Digital money is ordinary here", tone: "#E39B26" },
                  { v: "$0.40", k: "Per GB of mobile data", d: "Among Africa's lowest — bandwidth is not the barrier", tone: "#7FC4E0" },
                  { v: "~70%", k: "Internet penetration", d: "Digital literacy and device range are the real constraints", tone: "#E08070" },
                ].map((s) => (
                  <div key={s.k} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                    <div className="text-3xl font-semibold tracking-tight [font-variant-numeric:tabular-nums]" style={{ color: s.tone }}>
                      {s.v}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white">{s.k}</div>
                    <div className="mt-2 text-[13px] leading-relaxed text-white/50">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-14 rounded-[2rem] border border-white/10 bg-[#FDF9F5] p-8 text-[#231A14] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B4441F]">
                The finding that shaped the strategy
              </p>
              <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                Melcom wins on inventory it owns. Nobody is serving the
                inventory that actually feeds Accra.
              </h3>
              <p className="mt-4 max-w-3xl leading-8 text-[#5A4A3F]">
                Melcom launched <i>NOW</i> in 2026 — 20-minute delivery from 65
                owned stores. Every well-capitalised competitor is building a
                vertically integrated supply chain. Ghana&rsquo;s retail depth,
                meanwhile, lives in provisions shops, chop bars and neighbourhood
                pharmacies that no aggregator can acquire.
              </p>
              <div className="mt-8">
                <CompetitiveWedge />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E39B26]">
                  Wedge 01 · Supply-side moat
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  The merchant network
                </h3>
                <p className="mt-3 leading-7 text-white/60">
                  Melcom sells its own stock. Ntɛm digitises everyone
                  else&rsquo;s. A platform that makes independent merchants
                  operable builds a catalogue a single retailer structurally
                  cannot match — which is why the merchant app is not a
                  companion product, it is the product.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E39B26]">
                  Wedge 02 · Demand-side experience
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  The multi-merchant basket
                </h3>
                <p className="mt-3 leading-7 text-white/60">
                  Single-vertical players cannot fulfil an evening that needs
                  vegetables, dinner and paracetamol. The merchant network makes
                  the multi-basket possible; the multi-basket makes the merchant
                  network valuable. Neither works alone.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────── PERSONAS ── */}
      <section id="personas" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="03">Users</Eyebrow>
            <Lead>Designing for interaction modes, not demographics.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5A4A3F]">
              Two users of the same age can need entirely different interfaces;
              two users thirty years apart can need the same one. So each
              persona is defined by how they actually engage with the system —
              search-first, browse-and-compare, guided, interrupt-driven,
              glanceable.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {personas.map((p, i) => (
              <Reveal key={p.name} delay={0.06 * i}>
                <article className="h-full rounded-[2rem] border border-[#E3D5C6] bg-white p-7">
                  <span className="inline-block h-1.5 w-12 rounded-full" style={{ background: p.accent }} />
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: p.accent }}>{p.tag}</p>

                  <p className="mt-6 border-l-2 pl-4 text-lg italic leading-8 text-[#231A14]" style={{ borderColor: p.accent }}>
                    &ldquo;{p.quote}&rdquo;
                  </p>

                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A776A]">Interaction mode</dt>
                      <dd className="mt-1.5 leading-6 text-[#5A4A3F]">{p.mode}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A776A]">Needs</dt>
                      <dd className="mt-1.5 leading-6 text-[#5A4A3F]">{p.need}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A776A]">Design response</dt>
                      <dd className="mt-1.5 leading-6 text-[#5A4A3F]">{p.solution}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-[2rem] border border-[#8A5A0B]/25 bg-[#FBEDD3] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A5A0B]">
                Why Auntie Efua matters
              </p>
              <p className="mt-4 max-w-4xl text-xl leading-9 tracking-tight">
                Designing for her raised the floor for everyone. Every clarity
                decision made for her — plain labels, explicit confirmation,
                honest totals — measurably reduced friction for Ama and Kwame
                too. She is not an edge case. She is the reason the product is
                usable.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <h3 className="mt-16 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A776A]">
              The supply side · four more interaction modes
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {supplyPersonas.map((s) => (
                <div key={s.name} className="rounded-[1.5rem] border border-[#E3D5C6] bg-white p-6">
                  <span className="inline-block h-1.5 w-9 rounded-full" style={{ background: s.accent }} />
                  <div className="mt-4 text-lg font-semibold tracking-tight">{s.name}</div>
                  <div className="text-[13px] text-[#8A776A]">{s.role}</div>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.13em]" style={{ color: s.accent }}>
                    {s.mode}
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#5A4A3F]">{s.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────── ARCHITECTURE ── */}
      <section id="architecture" className="scroll-mt-24 bg-[#F4EBE1] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="04">Architecture</Eyebrow>
            <Lead>One decision that makes everything else possible.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5A4A3F]">
              A naive system delivers three times, charges three fees and knocks
              on the door across an hour. The fix is not a screen — it is how the
              order itself is shaped.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14 rounded-[2rem] border border-[#E3D5C6] bg-[#FDF9F5] p-6 sm:p-10">
              <PartitionDiagram />
            </div>
            <Caption>
              Each merchant owns a partition, not a slice of a flat list. The
              customer sees one basket; the system holds three independently
              addressable objects under it.
            </Caption>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-16 rounded-[2rem] border border-[#E3D5C6] bg-[#FDF9F5] p-6 sm:p-10">
              <ChoreographyDiagram />
            </div>
            <Caption>
              One order moving across three applications. The platform absorbs
              the complexity so the edges stay simple.
            </Caption>
          </Reveal>

          <Reveal delay={0.16}>
            <h3 className="mt-20 text-2xl font-semibold tracking-tight">
              Information architecture · 30 screens
            </h3>
            <p className="mt-3 max-w-3xl leading-8 text-[#5A4A3F]">
              Categories lead and merchants follow. Ama knows she needs
              paracetamol, not which of eleven pharmacies stocks it — requiring
              users to understand the supply chain before they can shop would
              make the platform&rsquo;s differentiator the customer&rsquo;s problem.
            </p>
            <div className="mt-8">
              <SitemapDiagram />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────────────────────── UX DECISIONS ── */}
      <section id="ux-decisions" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="05">Interaction design</Eyebrow>
            <Lead>Solving the three unsolved screens of quick commerce.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5A4A3F]">
              Most screens in a commerce app are solved problems. A product page
              is a product page. Three screens here are not, because no existing
              app has to answer what they answer.
            </p>
          </Reveal>

          {/* 01 basket */}
          <Reveal delay={0.06}>
            <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <BasketMock />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B4441F]">
                  Screen 01
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                  The multi-merchant basket
                </h3>
                <p className="mt-4 text-lg leading-8 text-[#5A4A3F]">
                  One basket, one title. The plural would undo the entire
                  premise — Ama is placing <i>one</i> order for <i>one</i> evening.
                </p>

                <ul className="mt-7 space-y-5">
                  {[
                    ["The store card is the partition made visible", "Grouping is not cosmetic. It is the same boundary that later lets one store fail without taking down the order, so the user learns the structure while shopping calmly."],
                    ["Price per unit, in local measures", "1 olonka · GH¢25/olonka. Kwame buys in olonka, bowl and paint rubber, not kilograms. Metric units would be a translation, not a design."],
                    ["Prep time on the card, not at checkout", "Ordering hot food is a choice about time, and that choice belongs where it is made."],
                    ["The delivery fee lives here", "Late-revealed costs are the most common trust failure in commerce — and one fee for three stores is the clearest proof of value, so burying it would hide the argument."],
                  ].map(([t, d]) => (
                    <li key={t} className="border-l-2 border-[#E3D5C6] pl-5">
                      <p className="font-semibold">{t}</p>
                      <p className="mt-1.5 leading-7 text-[#5A4A3F]">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 02 delivery */}
          <Reveal delay={0.06}>
            <div className="mt-24 rounded-[2rem] border border-[#E3D5C6] bg-white p-6 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B4441F]">
                Screen 02
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                The adaptive delivery choice
              </h3>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5A4A3F]">
                An adaptive system is by definition invisible. If the customer
                can&rsquo;t see it, it can&rsquo;t build trust — and if you expose the
                algorithm, you&rsquo;ve built a logistics dashboard rather than a
                shopping app. Naming the <i>preference</i> is the narrow path
                between them.
              </p>
              <div className="mt-10">
                <RoutingDiagram />
              </div>
            </div>
          </Reveal>

          {/* 03 exception */}
          <Reveal delay={0.06}>
            <div className="mt-24 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C0341B]">
                  Screen 03 · the hard one
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                  The substitution exception
                </h3>
                <p className="mt-4 text-lg leading-8 text-[#5A4A3F]">
                  Money has already left. A child is sick. A rider is waiting.
                  And the person on the other end may never have completed a
                  purchase in an app before.
                </p>

                <ul className="mt-7 space-y-5">
                  {[
                    ["Scope before problem", "“One item is not available.” The first three words say this is small. “There’s a problem with your order” spikes anxiety before she has read anything."],
                    ["The merchant suggested it, and is named for it", "Yaa knows her shelf; the platform doesn’t. The merchant app will not let her flag an item without either offering a substitute or explicitly confirming there is none."],
                    ["The refund is a number, before the decision", "GH¢4.00 comes back to your MoMo. Exact amount, named destination, present tense. An unquantified refund is a lost one."],
                    ["Buttons are answers, not commands", "“Yes, send the aubergine.” Each button contains its full consequence, so a skim cannot produce an expensive mistake."],
                    ["Inaction is safe, stated plainly, and costs nothing", "If she is busy with a feverish child and never opens it, the item is removed and she is refunded in full. She cannot lose by hesitating."],
                  ].map(([t, d]) => (
                    <li key={t} className="border-l-2 border-[#E3D5C6] pl-5">
                      <p className="font-semibold">{t}</p>
                      <p className="mt-1.5 leading-7 text-[#5A4A3F]">{d}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-[1.5rem] border border-[#C0341B]/20 bg-[#FBE5E0] p-6">
                  <p className="text-lg leading-8">
                    Most commerce apps default the other way: silence means the
                    substitute ships. That optimises basket value at the cost of
                    trust — the wrong trade in a market where one bad story
                    travels a neighbourhood faster than any advertisement.
                  </p>
                </div>
              </div>

              <ExceptionMock />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────── PROTOTYPE ── */}
      <section id="prototype" className="scroll-mt-24 bg-[#231A14] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#E39B26]">
              06 / Interactive prototype
            </p>
            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-[#FDF9F5] sm:text-6xl">
              Test the live React prototype.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              Not a click-through. Three real apps sharing one order object —
              act as the merchant and the customer&rsquo;s screen changes.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-14">
            <NtemInteractivePreview />
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────── DESIGN SYSTEM ── */}
      <section id="design-system" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="07">Design system</Eyebrow>
            <Lead>Warm and local, because the strategy is.</Lead>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5A4A3F]">
              Every quick commerce app in the region looks the same: blue or
              green, white, high-gloss, imported. A product whose differentiator
              is local supply cannot look like it was designed somewhere else.
              The palette comes from where the product operates — the clay-red of
              laterite roads, the deep green of plantain and garden eggs, the
              gold of late Accra afternoons.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {colorTokens.map((t) => (
                <div key={t.hex} className="overflow-hidden rounded-[1.5rem] border border-[#E3D5C6] bg-white">
                  <div className="h-24" style={{ background: t.hex }} />
                  <div className="p-4">
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="mt-0.5 text-[12px] text-[#8A776A] [font-variant-numeric:tabular-nums]">
                      {t.hex}
                    </div>
                    <div className="mt-2 text-[12.5px] leading-relaxed text-[#5A4A3F]">
                      {t.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mt-20 text-2xl font-semibold tracking-tight">
              Contrast was measured, not assumed
            </h3>
            <p className="mt-3 max-w-3xl leading-8 text-[#5A4A3F]">
              Riders work outdoors in Accra sun and customers check ETAs on the
              street, so every pairing was computed against WCAG 2.1 rather than
              eyeballed.
            </p>
            <div className="mt-8">
              <ContrastAudit />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 rounded-[2rem] border border-[#8A5A0B]/25 bg-[#FBEDD3] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A5A0B]">
                The gold problem
              </p>
              <p className="mt-4 max-w-4xl text-xl leading-9 tracking-tight">
                Gold scores 2.34:1 against white — it fails as a text colour and
                as a button fill. Darkening it until it passed would have
                produced a muddy brown that lost the quality worth having. So
                the constraint is documented and enforced instead:{" "}
                <b>gold is a surface and an accent, never a text colour and never
                a primary button.</b>
              </p>
              <p className="mt-5 max-w-4xl leading-8 text-[#5A4A3F]">
                A design system&rsquo;s job is to record where the brand and
                accessibility disagree, and to decide once, in public, rather
                than repeatedly and quietly in individual screens.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <h3 className="mt-20 text-2xl font-semibold tracking-tight">
              One system, three characters
            </h3>
            <p className="mt-3 max-w-3xl leading-8 text-[#5A4A3F]">
              The three apps share tokens but not personality. Kofi accepts
              orders between serving customers, so density is respect for his
              time. Ibrahim reads at a glance while moving, so sparseness is
              safety. Ama browses, so imagery is the point.
            </p>
            <div className="mt-8">
              <CharacterStrip />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#E3D5C6] bg-white p-7">
                <h4 className="text-lg font-semibold tracking-tight">
                  Inter, chosen for a linguistic reason
                </h4>
                <p className="mt-3 leading-7 text-[#5A4A3F]">
                  The product is named <b className="text-[#231A14]">Ntɛm</b>, and
                  the character <b className="text-[#231A14]">ɛ</b> (U+025B) is
                  essential to Twi orthography alongside <b className="text-[#231A14]">ɔ</b>.
                  Many popular UI typefaces lack these glyphs or fall back in
                  ways that break the line. A product named in Twi cannot use a
                  typeface that cannot spell its own name.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[#E3D5C6] bg-white p-7">
                <h4 className="text-lg font-semibold tracking-tight">
                  17px body, 48dp targets
                </h4>
                <p className="mt-3 leading-7 text-[#5A4A3F]">
                  One pixel above the conventional 16, applied everywhere,
                  measurably eases reading for Auntie Efua and costs the other
                  personas nothing. Targets sit above the 44dp convention because
                  she taps deliberately and imprecisely, and Ibrahim taps
                  one-handed on a mounted phone. Accessibility gains are usually
                  made in decisions this small.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────── PROCESS ── */}
      <section className="bg-[#F4EBE1] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="08">Process</Eyebrow>
            <Lead>Eight phases, each closing on a deliverable.</Lead>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr]">
              <ProcessTimeline />

              <div className="space-y-5">
                <div className="rounded-[1.75rem] border border-[#E3D5C6] bg-[#FDF9F5] p-7">
                  <h4 className="text-lg font-semibold tracking-tight">
                    The model was tested before any UI existed
                  </h4>
                  <p className="mt-3 leading-7 text-[#5A4A3F]">
                    The order reducer went through 21 assertions in Node before a
                    single screen was built — including the one that matters:
                    cancelling one store refunds exactly that store&rsquo;s
                    subtotal and leaves the other two partitions intact. If that
                    hadn&rsquo;t held, the substitution screen would have needed
                    special-casing at every layer.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[#E3D5C6] bg-[#FDF9F5] p-7">
                  <h4 className="text-lg font-semibold tracking-tight">
                    Building it found a design bug
                  </h4>
                  <p className="mt-3 leading-7 text-[#5A4A3F]">
                    The rider never received a job. A run is only built once
                    every merchant accepts — but the merchant app initially
                    exposed only two of the three. The flow diagram had been
                    correct and the implementation was not, which is the argument
                    for prototyping in code rather than in frames.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[#E3D5C6] bg-[#FDF9F5] p-7">
                  <h4 className="text-lg font-semibold tracking-tight">
                    Scope, honestly
                  </h4>
                  <p className="mt-3 leading-7 text-[#5A4A3F]">
                    Static mock data, no backend, no persistence. This is a
                    concept project: the deliverable is the interaction model and
                    the cross-app choreography, not the plumbing. Next step is
                    moderated testing with Ghanaian users against the live build.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────── PRINCIPLES ── */}
      <section id="principles" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow n="09">Principles</Eyebrow>
            <Lead>Clear decisions at the edges. Complex coordination in the middle.</Lead>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={0.06 * index}>
                <article className="h-full rounded-[2rem] border border-[#E3D5C6] bg-white p-7">
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

      {/* ─────────────────────────────────────────── FOOTER CTA ── */}
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

          <div className="flex flex-wrap gap-3">
            <a
              href="https://ntem-prototype.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#FDF9F5] px-6 py-3 text-sm font-medium text-[#231A14] transition-transform hover:-translate-y-1"
            >
              Open the prototype ↗
            </a>
            <Link
              href="/#work"
              className="rounded-full bg-[#231A14] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-1"
            >
              Back to selected work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
