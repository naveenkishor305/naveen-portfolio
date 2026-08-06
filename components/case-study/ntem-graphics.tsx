/**
 * Ntɛm case study diagrams.
 *
 * Every graphic here carries an argument the prose cannot make on its own:
 * the shape of the market, the structure of the order, the choreography between
 * three apps. All inline SVG on the case-study palette — no images, no imports,
 * scales cleanly, and stays legible in a screenshot.
 */

const CLAY = "#B4441F";
const CLAY_D = "#8E3315";
const CLAY_L = "#F6E4DC";
const GREEN = "#1B5E43";
const GREEN_L = "#DCEDE4";
const GOLD = "#E39B26";
const GOLD_D = "#8A5A0B";
const GOLD_L = "#FBEDD3";
const TEAL = "#1D6A8C";
const TEAL_L = "#D8EAF2";
const RED = "#C0341B";
const INK = "#231A14";
const INK6 = "#5A4A3F";
const INK4 = "#8A776A";
const SAND = "#FDF9F5";
const SAND2 = "#E3D5C6";

const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
const sans = "Inter, system-ui, sans-serif";

/* ══════════════════════════════════════════════ 1 · MARKET SIGNALS ══════ */
export function MarketSignals() {
  const stats = [
    { v: "26.4M", k: "Active MoMo wallets", d: "Payment is a solved rail, not a differentiator", tone: GREEN },
    { v: "GH¢492.9bn", k: "Moved in June 2026 alone", d: "Digital money is ordinary here", tone: CLAY },
    { v: "$0.40", k: "Per GB of mobile data", d: "Among Africa's lowest — bandwidth is not the barrier", tone: TEAL },
    { v: "~70%", k: "Internet penetration", d: "Literacy and device range are the real constraints", tone: GOLD_D },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.k}
          className="rounded-[1.5rem] border p-6"
          style={{ borderColor: SAND2, background: SAND }}
        >
          <div
            className="text-3xl font-semibold tracking-tight"
            style={{ color: s.tone, fontVariantNumeric: "tabular-nums" }}
          >
            {s.v}
          </div>
          <div className="mt-2 text-sm font-semibold" style={{ color: INK }}>
            {s.k}
          </div>
          <div className="mt-2 text-[13px] leading-relaxed" style={{ color: INK6 }}>
            {s.d}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════ 2 · COMPETITIVE WEDGE ══════ */
export function CompetitiveWedge() {
  return (
    <svg viewBox="0 0 760 340" className="w-full" role="img"
      aria-label="Competitive positioning: owned inventory versus aggregated local merchants">
      {/* axes */}
      <line x1="90" y1="290" x2="710" y2="290" stroke={SAND2} strokeWidth="2" />
      <line x1="90" y1="40" x2="90" y2="290" stroke={SAND2} strokeWidth="2" />
      <text x="400" y="322" textAnchor="middle" fontFamily={sans} fontSize="13"
        fontWeight="600" fill={INK4}>Catalogue breadth →</text>
      <text x="42" y="165" textAnchor="middle" fontFamily={sans} fontSize="13"
        fontWeight="600" fill={INK4} transform="rotate(-90 42 165)">Supply control →</text>

      {/* quadrant tint */}
      <rect x="400" y="40" width="310" height="125" fill={CLAY_L} opacity=".5" rx="8" />

      {/* competitors */}
      {[
        { x: 190, y: 90, r: 34, label: "Melcom NOW", sub: "65 owned stores", fill: INK, tc: "#fff" },
        { x: 250, y: 210, r: 24, label: "Konzoom", sub: "60-min Accra", fill: INK4, tc: "#fff" },
        { x: 330, y: 245, r: 19, label: "Big Samps", sub: "", fill: INK4, tc: "#fff" },
        { x: 160, y: 240, r: 17, label: "easyBasket", sub: "", fill: INK4, tc: "#fff" },
      ].map((c) => (
        <g key={c.label}>
          <circle cx={c.x} cy={c.y} r={c.r} fill={c.fill} opacity={c.fill === INK ? 1 : 0.45} />
          <text x={c.x} y={c.y + c.r + 17} textAnchor="middle" fontFamily={sans}
            fontSize="12.5" fontWeight="600" fill={INK}>{c.label}</text>
          {c.sub && (
            <text x={c.x} y={c.y + c.r + 32} textAnchor="middle" fontFamily={sans}
              fontSize="11" fill={INK4}>{c.sub}</text>
          )}
        </g>
      ))}

      {/* ntem */}
      <circle cx="580" cy="105" r="46" fill={CLAY} />
      <text x="580" y="100" textAnchor="middle" fontFamily={sans} fontSize="17"
        fontWeight="700" fill="#fff">Ntɛm</text>
      <text x="580" y="118" textAnchor="middle" fontFamily={sans} fontSize="10.5"
        fill="#fff" opacity=".85">aggregated</text>

      <text x="580" y="182" textAnchor="middle" fontFamily={sans} fontSize="12.5"
        fontWeight="700" fill={CLAY_D}>The unowned inventory</text>
      <text x="580" y="200" textAnchor="middle" fontFamily={sans} fontSize="11.5" fill={INK6}>
        Provisions shops · chop bars · pharmacies
      </text>
      <text x="580" y="216" textAnchor="middle" fontFamily={sans} fontSize="11.5" fill={INK6}>
        that no single retailer can acquire
      </text>
    </svg>
  );
}

/* ══════════════════════════════════════════ 3 · ORDER PARTITION ═════════ */
export function PartitionDiagram() {
  const parts = [
    { name: "Yaa's Provisions", items: "3 items", tone: GREEN, tl: GREEN_L, x: 60 },
    { name: "Kofi's Chop Bar", items: "1 item · 20 min prep", tone: CLAY, tl: CLAY_L, x: 290 },
    { name: "Adom Pharmacy", items: "1 item", tone: TEAL, tl: TEAL_L, x: 520 },
  ];

  return (
    <svg viewBox="0 0 760 430" className="w-full" role="img"
      aria-label="One order split into three merchant partitions feeding one delivery job">
      {/* order */}
      <rect x="270" y="16" width="220" height="54" rx="14" fill={INK} />
      <text x="380" y="40" textAnchor="middle" fontFamily={sans} fontSize="15"
        fontWeight="700" fill="#fff">ORDER #NT-4471</text>
      <text x="380" y="58" textAnchor="middle" fontFamily={mono} fontSize="11"
        fill={GOLD}>GH¢137.00 · 1 address · 1 fee</text>

      {/* connectors */}
      {parts.map((p) => (
        <path key={p.name} d={`M380 70 V96 H${p.x + 90} V124`} fill="none"
          stroke={SAND2} strokeWidth="2" />
      ))}

      {/* partitions */}
      {parts.map((p) => (
        <g key={p.name}>
          <rect x={p.x} y="124" width="180" height="104" rx="14"
            fill={p.tl} stroke={p.tone} strokeWidth="1.5" />
          <text x={p.x + 14} y="148" fontFamily={sans} fontSize="10"
            fontWeight="700" letterSpacing="1.4" fill={p.tone}>PARTITION</text>
          <text x={p.x + 14} y="172" fontFamily={sans} fontSize="14"
            fontWeight="600" fill={INK}>{p.name}</text>
          <text x={p.x + 14} y="192" fontFamily={sans} fontSize="12" fill={INK6}>{p.items}</text>
          <text x={p.x + 14} y="214" fontFamily={mono} fontSize="10.5" fill={INK4}>
            own status · own total
          </text>
        </g>
      ))}

      {/* down to delivery */}
      {parts.map((p) => (
        <path key={p.name + "d"} d={`M${p.x + 90} 228 V262 H380 V292`} fill="none"
          stroke={SAND2} strokeWidth="2" />
      ))}

      <rect x="255" y="292" width="250" height="50" rx="14" fill={GOLD_L}
        stroke={GOLD} strokeWidth="1.5" />
      <text x="380" y="316" textAnchor="middle" fontFamily={sans} fontSize="14"
        fontWeight="600" fill={GOLD_D}>Delivery job · sequenced pickups</text>
      <text x="380" y="332" textAnchor="middle" fontFamily={sans} fontSize="11"
        fill={GOLD_D} opacity=".8">Adom → Yaa → Kofi (longest prep last)</text>

      {/* consequence */}
      <text x="380" y="378" textAnchor="middle" fontFamily={sans} fontSize="13.5"
        fontWeight="700" fill={INK}>
        One partition can fail without touching the others
      </text>
      <text x="380" y="400" textAnchor="middle" fontFamily={sans} fontSize="12.5" fill={INK6}>
        Failure isolation, per-store tracking, partial refunds and merchant privacy
      </text>
      <text x="380" y="418" textAnchor="middle" fontFamily={sans} fontSize="12.5" fill={INK6}>
        all fall out of this structure rather than being engineered one by one
      </text>
    </svg>
  );
}

/* ═══════════════════════════════════════ 4 · ADAPTIVE ROUTING ═══════════ */
export function RoutingDiagram() {
  const models = [
    "Sequenced pickup",
    "Timed pickup",
    "Split dispatch",
    "Hub consolidation",
  ];

  return (
    <svg viewBox="0 0 760 400" className="w-full" role="img"
      aria-label="Four routing models resolve to two plain-language promises">
      <text x="30" y="30" fontFamily={sans} fontSize="10.5" fontWeight="700"
        letterSpacing="1.6" fill={INK4}>SYSTEM DECIDES — INVISIBLE</text>

      {models.map((m, i) => (
        <g key={m}>
          <rect x="30" y={48 + i * 52} width="210" height="40" rx="10"
            fill={INK} opacity={0.86 - i * 0.11} />
          <text x="48" y={73 + i * 52} fontFamily={mono} fontSize="12" fill={SAND}>{m}</text>
        </g>
      ))}

      <text x="30" y="292" fontFamily={sans} fontSize="11.5" fill={INK4}>
        Selected on prep-time variance,
      </text>
      <text x="30" y="310" fontFamily={sans} fontSize="11.5" fill={INK4}>
        merchant proximity, distance, rider supply
      </text>

      {/* funnel */}
      <path d="M240 68 C330 68 330 150 420 150" fill="none" stroke={SAND2} strokeWidth="2" />
      <path d="M240 120 C330 120 330 150 420 150" fill="none" stroke={SAND2} strokeWidth="2" />
      <path d="M240 172 C330 172 330 236 420 236" fill="none" stroke={SAND2} strokeWidth="2" />
      <path d="M240 224 C330 224 330 236 420 236" fill="none" stroke={SAND2} strokeWidth="2" />

      <text x="330" y="42" textAnchor="middle" fontFamily={sans} fontSize="10.5"
        fontWeight="700" letterSpacing="1.6" fill={CLAY}>COLLAPSE TO</text>

      {/* promises */}
      <rect x="420" y="118" width="310" height="64" rx="14" fill="#fff"
        stroke={CLAY} strokeWidth="2" />
      <circle cx="446" cy="150" r="9" fill={CLAY} />
      <circle cx="446" cy="150" r="3.5" fill="#fff" />
      <text x="468" y="145" fontFamily={sans} fontSize="15" fontWeight="600" fill={INK}>
        Bring everything together
      </text>
      <text x="468" y="165" fontFamily={sans} fontSize="12.5" fill={INK6}>
        Arrives about 7:45 pm · GH¢12.00
      </text>

      <rect x="420" y="204" width="310" height="64" rx="14" fill="#fff"
        stroke={SAND2} strokeWidth="2" />
      <circle cx="446" cy="236" r="9" fill="none" stroke={SAND2} strokeWidth="2" />
      <text x="468" y="231" fontFamily={sans} fontSize="15" fontWeight="600" fill={INK}>
        Bring things as they&rsquo;re ready
      </text>
      <text x="468" y="251" fontFamily={sans} fontSize="12.5" fill={INK6}>
        First 7:28 pm · Last 7:50 pm · GH¢18.00
      </text>

      <text x="575" y="98" textAnchor="middle" fontFamily={sans} fontSize="10.5"
        fontWeight="700" letterSpacing="1.6" fill={CLAY}>CUSTOMER CHOOSES</text>

      <text x="575" y="306" textAnchor="middle" fontFamily={sans} fontSize="13.5"
        fontWeight="700" fill={INK}>Expose the preference. Hide the logic.</text>
      <text x="575" y="330" textAnchor="middle" fontFamily={sans} fontSize="12" fill={INK6}>
        She chooses an outcome; the system chooses the method.
      </text>
      <text x="575" y="348" textAnchor="middle" fontFamily={sans} fontSize="12" fill={INK6}>
        The engine can be rewritten and this screen never changes,
      </text>
      <text x="575" y="366" textAnchor="middle" fontFamily={sans} fontSize="12" fill={INK6}>
        because it was never describing the mechanism.
      </text>
    </svg>
  );
}

/* ══════════════════════════════════════ 5 · CROSS-APP CHOREOGRAPHY ══════ */
export function ChoreographyDiagram() {
  const lanes = [
    { name: "Customer", who: "Ama", x: 92, tone: CLAY },
    { name: "Platform", who: "Ntɛm", x: 300, tone: INK },
    { name: "Merchant", who: "Yaa", x: 508, tone: GREEN },
    { name: "Rider", who: "Ibrahim", x: 690, tone: GOLD_D },
  ];

  const steps: [number, number, number, string, boolean][] = [
    // [fromX, toX, y, label, isException]
    [92, 300, 108, "Places multi-merchant order", false],
    [300, 92, 146, "Confirms one promise: 7:45 pm", false],
    [300, 508, 184, "Dispatches partition", false],
    [508, 300, 222, "Accepts · sets prep time", false],
    [508, 300, 268, "Item unavailable + substitute", true],
    [300, 92, 306, "Substitution choice · 4:00 window", true],
    [92, 300, 344, "Accepts substitute", true],
    [300, 690, 382, "Updates pickup list silently", true],
    [690, 508, 420, "Collects in sequence", false],
    [690, 92, 458, "Delivers · single arrival", false],
  ];

  return (
    <svg viewBox="0 0 760 540" className="w-full" role="img"
      aria-label="Sequence diagram of one order moving across customer, platform, merchant and rider">
      {lanes.map((l) => (
        <g key={l.name}>
          <rect x={l.x - 62} y="18" width="124" height="46" rx="12" fill={l.tone} />
          <text x={l.x} y="40" textAnchor="middle" fontFamily={sans} fontSize="13"
            fontWeight="700" fill="#fff">{l.name}</text>
          <text x={l.x} y="55" textAnchor="middle" fontFamily={sans} fontSize="10.5"
            fill="#fff" opacity=".75">{l.who}</text>
          <line x1={l.x} y1="64" x2={l.x} y2="490" stroke={SAND2}
            strokeWidth="2" strokeDasharray="4 5" />
        </g>
      ))}

      {/* exception band */}
      <rect x="16" y="248" width="728" height="152" rx="12" fill={CLAY_L} opacity=".45" />
      <text x="30" y="266" fontFamily={sans} fontSize="10" fontWeight="700"
        letterSpacing="1.4" fill={CLAY_D}>EXCEPTION — RESOLVED BEFORE IT REACHES THE RIDER</text>

      <defs>
        <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6"
          markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill={INK6} />
        </marker>
        <marker id="arx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6"
          markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill={CLAY_D} />
        </marker>
      </defs>

      {steps.map(([from, to, y, label, exc], i) => {
        const dir = to > from ? 1 : -1;
        const mid = (from + to) / 2;
        return (
          <g key={i}>
            <line x1={from + 6 * dir} y1={y} x2={to - 10 * dir} y2={y}
              stroke={exc ? CLAY_D : INK6} strokeWidth="1.6"
              markerEnd={exc ? "url(#arx)" : "url(#ar)"} />
            <text x={mid} y={y - 8} textAnchor="middle" fontFamily={sans}
              fontSize="11.5" fontWeight={exc ? 600 : 400}
              fill={exc ? CLAY_D : INK6}>{label}</text>
          </g>
        );
      })}

      <text x="380" y="516" textAnchor="middle" fontFamily={sans} fontSize="13"
        fontWeight="700" fill={INK}>
        Ama made one decision. Yaa tapped one button. Ibrahim followed one list.
      </text>
      <text x="380" y="534" textAnchor="middle" fontFamily={sans} fontSize="12" fill={INK6}>
        Every piece of coordination happened in the middle.
      </text>
    </svg>
  );
}

/* ══════════════════════════════════════════ 6 · IA SITEMAP ══════════════ */
export function SitemapDiagram() {
  const apps = [
    {
      name: "Customer", who: "Ama", tone: CLAY, count: 15,
      nodes: ["Home", "Search", "Category", "Storefront", "Basket", "Checkout ×3",
        "MoMo", "Tracking", "Substitution", "Delivered", "Account"],
    },
    {
      name: "Merchant", who: "Yaa · Kofi · Adom", tone: GREEN, count: 9,
      nodes: ["Orders queue", "Incoming", "Order detail", "Out of stock",
        "Inventory", "Edit product", "Insights", "Store"],
    },
    {
      name: "Rider", who: "Ibrahim · Selorm", tone: GOLD_D, count: 6,
      nodes: ["Go online", "Job offer", "Active run", "Handover", "Earnings"],
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {apps.map((a) => (
        <div key={a.name} className="rounded-[1.5rem] border p-6"
          style={{ borderColor: SAND2, background: SAND }}>
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-lg font-semibold" style={{ color: INK }}>{a.name}</div>
              <div className="text-[12px]" style={{ color: INK4 }}>{a.who}</div>
            </div>
            <div className="text-3xl font-semibold" style={{ color: a.tone,
              fontVariantNumeric: "tabular-nums" }}>{a.count}</div>
          </div>

          <div className="mt-5 space-y-2">
            {a.nodes.map((n, i) => (
              <div key={n} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full"
                  style={{ background: i === 0 ? a.tone : SAND2 }} />
                <span className="text-[13px]"
                  style={{ color: i === 0 ? INK : INK6, fontWeight: i === 0 ? 600 : 400 }}>
                  {n}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═════════════════════════════════════ 7 · CONTRAST AUDIT ═══════════════ */
export function ContrastAudit() {
  const rows = [
    { pair: "ink-900 on sand-050", bg: "#FDF9F5", fg: "#231A14", ratio: "16.31", grade: "AAA" },
    { pair: "green-600 on sand-050", bg: "#FDF9F5", fg: GREEN, ratio: "7.35", grade: "AAA" },
    { pair: "white on clay-600", bg: CLAY, fg: "#FFFFFF", ratio: "5.54", grade: "AA" },
    { pair: "clay-700 on clay-050", bg: CLAY_L, fg: CLAY_D, ratio: "6.47", grade: "AA" },
    { pair: "red-600 on red-050", bg: "#FBE5E0", fg: RED, ratio: "4.64", grade: "AA" },
    { pair: "gold-500 on white", bg: "#FFFFFF", fg: GOLD, ratio: "2.34", grade: "FAIL" },
  ];

  return (
    <div className="overflow-hidden rounded-[1.5rem] border" style={{ borderColor: SAND2 }}>
      <table className="w-full text-left">
        <thead>
          <tr style={{ background: "#F4EBE1" }}>
            {["Pairing", "Sample", "Ratio", "WCAG 2.1"].map((h) => (
              <th key={h} className="px-5 py-3 text-[11px] font-semibold uppercase
                tracking-[0.12em]" style={{ color: INK6 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.pair} className="border-t" style={{ borderColor: SAND2, background: SAND }}>
              <td className="px-5 py-3.5 text-[13px]" style={{ color: INK6, fontFamily: mono }}>
                {r.pair}
              </td>
              <td className="px-5 py-3.5">
                <span className="inline-block rounded-md px-3 py-1.5 text-[13px] font-semibold"
                  style={{ background: r.bg, color: r.fg,
                    border: r.bg === "#FFFFFF" ? `1px solid ${SAND2}` : "none" }}>
                  GH¢137.00
                </span>
              </td>
              <td className="px-5 py-3.5 text-[13px] font-semibold"
                style={{ color: INK, fontVariantNumeric: "tabular-nums" }}>{r.ratio}:1</td>
              <td className="px-5 py-3.5">
                <span className="rounded-full px-2.5 py-1 text-[11px] font-bold"
                  style={{
                    background: r.grade === "FAIL" ? "#FBE5E0" : r.grade === "AAA" ? GREEN_L : CLAY_L,
                    color: r.grade === "FAIL" ? RED : r.grade === "AAA" ? "#12452F" : CLAY_D,
                  }}>{r.grade}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═════════════════════════════════════ 8 · PROCESS TIMELINE ═════════════ */
export function ProcessTimeline() {
  const phases = [
    { n: "01", t: "Framing", d: "Market conditions, competitive position, the three-sided premise" },
    { n: "02", t: "Users", d: "Seven personas defined by interaction mode, not demographics" },
    { n: "03", t: "Journey", d: "The hero evening, adaptive fulfilment, the failure path" },
    { n: "04", t: "Architecture", d: "IA across three apps, the order partition model" },
    { n: "05", t: "Interaction", d: "Annotated wireframes for the three unsolved screens" },
    { n: "06", t: "System", d: "97 tokens, verified contrast, three app characters" },
    { n: "07", t: "Motion", d: "10 animations, 39 SVG assets, reduced-motion audit" },
    { n: "08", t: "Prototype", d: "React + Vite, 30 screens, one shared order object" },
  ];

  return (
    <div className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-px" style={{ background: SAND2 }} />
      <div className="space-y-6">
        {phases.map((p) => (
          <div key={p.n} className="relative flex gap-5">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center
              rounded-full text-[11px] font-bold"
              style={{ background: SAND, border: `1.5px solid ${SAND2}`, color: CLAY }}>
              {p.n}
            </div>
            <div className="pt-1.5">
              <div className="text-base font-semibold" style={{ color: INK }}>{p.t}</div>
              <div className="mt-1 text-[13.5px] leading-relaxed" style={{ color: INK6 }}>
                {p.d}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════ 9 · SCREEN MOCK: MULTI-MERCHANT BASKET ══ */
export function BasketMock() {
  const stores = [
    { icon: "🏪", name: "Yaa's Provisions", meta: "Madina · 2.4 km · Ready in 5 min",
      items: [["Tomatoes", "1 olonka · GH¢25/olonka", "GH¢25.00"],
              ["Onions", "2 kg · GH¢7.50/kg", "GH¢15.00"],
              ["Garden eggs", "1 bowl · GH¢12/bowl", "GH¢12.00"]], sub: "GH¢52.00" },
    { icon: "🍲", name: "Kofi's Chop Bar", meta: "Osu · 6.1 km · Cooks in ~20 min",
      items: [["Waakye + grilled tilapia", "1 plate", "GH¢55.00"]], sub: "GH¢55.00" },
    { icon: "💊", name: "Adom Pharmacy", meta: "East Legon · 1.1 km · Ready in 3 min",
      items: [["Paracetamol suspension", "1 bottle", "GH¢18.00"]], sub: "GH¢18.00" },
  ];

  return (
    <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-[1.75rem] border-[8px]"
      style={{ borderColor: INK, background: SAND }}>
      <div className="flex items-center justify-between px-4 pb-2 pt-3 text-[10px] font-semibold"
        style={{ color: INK6 }}>
        <span>7:14</span><span>MTN 78%</span>
      </div>

      <div className="px-4 pb-2 text-[17px] font-bold" style={{ color: INK }}>Your basket</div>

      <div className="space-y-2.5 px-3">
        {stores.map((s) => (
          <div key={s.name} className="overflow-hidden rounded-2xl border bg-white"
            style={{ borderColor: SAND2 }}>
            <div className="flex items-center gap-2.5 p-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm"
                style={{ background: "#F4EBE1" }}>{s.icon}</span>
              <div>
                <div className="text-[13px] font-semibold" style={{ color: INK }}>{s.name}</div>
                <div className="text-[10px]" style={{ color: INK6 }}>{s.meta}</div>
              </div>
            </div>
            <div className="border-t px-3 py-2" style={{ borderColor: SAND2 }}>
              {s.items.map(([n, u, p]) => (
                <div key={n} className="flex items-center justify-between py-1">
                  <div>
                    <div className="text-[12px]" style={{ color: INK }}>{n}</div>
                    <div className="text-[10px]" style={{ color: INK6 }}>{u}</div>
                  </div>
                  <div className="text-[11.5px] font-semibold"
                    style={{ color: INK, fontVariantNumeric: "tabular-nums" }}>{p}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between border-t px-3 py-2 text-[11.5px] font-semibold"
              style={{ borderColor: SAND2, background: SAND, color: INK }}>
              <span>Store subtotal</span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>{s.sub}</span>
            </div>
          </div>
        ))}

        <div className="rounded-2xl border bg-white p-3" style={{ borderColor: SAND2 }}>
          {[["Items (3 stores)", "GH¢125.00", false],
            ["Delivery", "GH¢12.00", false],
            ["Total", "GH¢137.00", true]].map(([l, v, big]) => (
            <div key={l as string}
              className={`flex justify-between ${big ? "mt-1.5 border-t pt-2" : "py-0.5"}`}
              style={{ borderColor: SAND2 }}>
              <span className={big ? "text-[14px] font-bold" : "text-[11.5px]"}
                style={{ color: big ? INK : INK6 }}>{l}</span>
              <span className={big ? "text-[14px] font-bold" : "text-[11.5px] font-semibold"}
                style={{ color: big ? INK : INK6, fontVariantNumeric: "tabular-nums" }}>{v}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl px-3 py-2.5 text-[11px] leading-relaxed"
          style={{ background: GREEN_L, color: "#12452F" }}>
          <b>One delivery fee for three stores.</b> Shown here, not at checkout.
        </div>
      </div>

      <div className="p-3">
        <div className="rounded-xl py-3 text-center text-[13px] font-semibold text-white"
          style={{ background: CLAY }}>Continue to checkout ›</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════ 10 · SCREEN MOCK: SUBSTITUTION EXCEPTION ═══ */
export function ExceptionMock() {
  return (
    <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-[1.75rem] border-[8px]"
      style={{ borderColor: INK, background: "#3A2C22" }}>
      <div className="px-4 pb-16 pt-8 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "rgba(253,249,245,.4)" }}>Tracking · order in progress</div>
      </div>

      <div className="rounded-t-[1.5rem] px-4 pb-4 pt-4" style={{ background: SAND }}>
        <div className="mx-auto mb-4 h-1 w-9 rounded-full" style={{ background: SAND2 }} />

        <div className="flex items-start gap-3">
          <div className="flex-1">
            <div className="text-[17px] font-bold leading-tight" style={{ color: INK }}>
              One item is not available
            </div>
            <div className="mt-1 text-[12px]" style={{ color: INK6 }}>Yaa&rsquo;s Provisions</div>
          </div>
          <svg width="54" height="54" viewBox="0 0 104 104">
            <circle cx="52" cy="52" r="42" fill="none" stroke="#F4EBE1" strokeWidth="7" />
            <circle cx="52" cy="52" r="42" fill="none" stroke={INK6} strokeWidth="7"
              strokeLinecap="round" strokeDasharray="264" strokeDashoffset="66"
              transform="rotate(-90 52 52)" />
            <text x="52" y="59" textAnchor="middle" fontSize="20" fontWeight="700"
              fill={INK} fontFamily={sans}>3:12</text>
          </svg>
        </div>

        <div className="mt-3.5 overflow-hidden rounded-2xl border-[1.5px] bg-white"
          style={{ borderColor: RED }}>
          <div className="px-3 py-2.5">
            <div className="flex justify-between opacity-40">
              <div>
                <div className="text-[12.5px] line-through" style={{ color: INK }}>Garden eggs</div>
                <div className="text-[10px]" style={{ color: INK6 }}>1 bowl</div>
              </div>
              <div className="text-[12px] font-semibold" style={{ color: INK }}>GH¢12.00</div>
            </div>

            <div className="mt-2.5 text-[11.5px] font-semibold" style={{ color: INK }}>
              Yaa suggests instead:
            </div>

            <div className="mt-1 flex justify-between">
              <div>
                <div className="text-[12.5px] font-semibold" style={{ color: "#12452F" }}>Aubergine</div>
                <div className="text-[10px]" style={{ color: INK6 }}>1 bowl</div>
              </div>
              <div className="text-[12px] font-semibold" style={{ color: "#12452F" }}>GH¢8.00</div>
            </div>
          </div>
          <div className="border-t px-3 py-2 text-[11.5px] font-semibold"
            style={{ borderColor: SAND2, background: SAND, color: INK }}>
            GH¢4.00 comes back to your MoMo
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <div className="rounded-xl py-2.5 text-center text-[12.5px] font-semibold text-white"
            style={{ background: CLAY }}>Yes, send the aubergine</div>
          <div className="rounded-xl border py-2.5 text-center text-[12.5px] font-semibold"
            style={{ background: "#F4EBE1", borderColor: SAND2, color: INK }}>
            No — remove it, refund GH¢12.00
          </div>
          <div className="rounded-xl border-[1.5px] bg-white py-2.5 text-center
            text-[12.5px] font-semibold" style={{ borderColor: RED, color: RED }}>
            Cancel Yaa&rsquo;s Provisions (refund GH¢52.00)
          </div>
        </div>

        <div className="mt-3 rounded-xl px-3 py-2.5 text-[11px] leading-relaxed"
          style={{ background: GREEN_L, color: "#12452F" }}>
          Your food and medicine are not affected — they&rsquo;re on the way.
        </div>
        <div className="mt-2 rounded-xl px-3 py-2.5 text-[11px] leading-relaxed"
          style={{ background: GOLD_L, color: GOLD_D }}>
          If you don&rsquo;t reply in 3:12, we&rsquo;ll remove the item and refund you
          GH¢12.00 in full.
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════ 11 · APP CHARACTER STRIP ════════ */
export function CharacterStrip() {
  const apps = [
    { role: "Customer", feel: "A market you can browse", bg: SAND, fg: INK,
      accent: CLAY, body: "17px", tap: "48dp", density: "Comfortable", img: "Product-led" },
    { role: "Merchant", feel: "A tool behind a counter", bg: "#FFFFFF", fg: INK,
      accent: GREEN, body: "15px", tap: "48dp", density: "Compact", img: "Minimal" },
    { role: "Rider", feel: "A dashboard at speed", bg: INK, fg: SAND,
      accent: GOLD, body: "19px", tap: "64dp", density: "Sparse", img: "None" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {apps.map((a) => (
        <div key={a.role} className="rounded-[1.5rem] border p-6"
          style={{ background: a.bg, color: a.fg,
            borderColor: a.bg === INK ? INK : SAND2 }}>
          <div className="text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ color: a.accent }}>{a.role}</div>
          <div className="mt-1.5 text-xl font-semibold">{a.feel}</div>
          <dl className="mt-5 space-y-2 text-[13px]">
            {[["Density", a.density], ["Body", a.body], ["Targets", a.tap], ["Imagery", a.img]]
              .map(([k, v]) => (
              <div key={k} className="flex justify-between border-b pb-2"
                style={{ borderColor: a.bg === INK ? "#3D2E22" : SAND2 }}>
                <dt style={{ opacity: 0.6 }}>{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
