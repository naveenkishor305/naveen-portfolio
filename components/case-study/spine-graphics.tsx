/**
 * Spine case study diagrams.
 *
 * Spine is a design system, so the graphics have to do what a design system
 * does: show the same object behaving differently under different conditions.
 * All inline SVG and Tailwind on the Spine palette — no image assets.
 */

const TEAL = "#176e6a";
const TEAL_D = "#0f4f4c";
const TEAL_L = "#dcebea";
const INK = "#12201f";
const INK6 = "#4a5b5a";
const INK4 = "#7d8f8e";
const LINE = "#c9dcda";
const PAPER = "#f5faf9";
const AMBER = "#a8721f";
const AMBER_L = "#fbf0d9";
const RED = "#a83232";
const RED_L = "#fae6e4";

const sans = "Inter, system-ui, sans-serif";
const mono = "IBM Plex Mono, ui-monospace, monospace";

/* ═══════════════════════════════ 1 · THE HANDOFF PROBLEM ══════════════ */
export function HandoffDiagram() {
  const stops = [
    { name: "Reception", task: "Identity, consent", x: 46 },
    { name: "Consultation", task: "History, notes", x: 194 },
    { name: "Diagnostics", task: "Orders, results", x: 342 },
    { name: "Pharmacy", task: "Medication", x: 490 },
    { name: "Billing", task: "Revenue close", x: 638 },
  ];

  return (
    <svg viewBox="0 0 760 300" className="w-full" role="img"
      aria-label="One patient journey crossing five teams, with context lost at each handoff">
      <text x="20" y="26" fontFamily={sans} fontSize="10.5" fontWeight="700"
        letterSpacing="1.6" fill={INK4}>ONE OUTPATIENT JOURNEY · FIVE TEAMS</text>

      {/* spine */}
      <line x1="46" y1="96" x2="700" y2="96" stroke={LINE} strokeWidth="2" />

      {stops.map((s, i) => (
        <g key={s.name}>
          <circle cx={s.x} cy="96" r="11" fill={TEAL} />
          <circle cx={s.x} cy="96" r="4" fill={PAPER} />
          <text x={s.x} y="74" textAnchor="middle" fontFamily={sans} fontSize="13"
            fontWeight="600" fill={INK}>{s.name}</text>
          <text x={s.x} y="128" textAnchor="middle" fontFamily={sans} fontSize="11"
            fill={INK6}>{s.task}</text>

          {/* the gaps between them are where the risk lives */}
          {i < stops.length - 1 && (
            <g>
              <rect x={s.x + 26} y="150" width="96" height="46" rx="9"
                fill={RED_L} stroke={RED} strokeWidth="1" strokeDasharray="3 3" />
              <text x={s.x + 74} y="169" textAnchor="middle" fontFamily={sans}
                fontSize="10" fontWeight="700" fill={RED}>HANDOFF</text>
              <text x={s.x + 74} y="184" textAnchor="middle" fontFamily={sans}
                fontSize="9.5" fill={RED}>context can drop</text>
            </g>
          )}
        </g>
      ))}

      <path d="M46 140 V150" stroke={LINE} strokeWidth="1.5" />
      <text x="380" y="238" textAnchor="middle" fontFamily={sans} fontSize="13.5"
        fontWeight="700" fill={INK}>
        Four handoffs. Four chances to lose identity, ownership or system state.
      </text>
      <text x="380" y="262" textAnchor="middle" fontFamily={sans} fontSize="12" fill={INK6}>
        Spine exists to make the journey legible across every one of them —
      </text>
      <text x="380" y="280" textAnchor="middle" fontFamily={sans} fontSize="12" fill={INK6}>
        one visual and interaction language, adapted per role.
      </text>
    </svg>
  );
}

/* ══════════════════════════════ 2 · ROLE-AWARE DENSITY ═══════════════ */
export function RoleWorkspaces() {
  const roles = [
    {
      role: "Reception", density: "Wide, shallow", primary: "Identify and verify",
      shows: ["Identity", "Consent", "Appointment", "Payer"],
      hides: "Clinical notes, results, prescriptions",
    },
    {
      role: "Clinician", density: "Deep, contextual", primary: "Decide and document",
      shows: ["History", "Allergies", "Results", "Orders"],
      hides: "Billing codes, revenue status",
    },
    {
      role: "Diagnostics", density: "Queue-driven", primary: "Receive and report",
      shows: ["Order", "Specimen", "Status", "Report"],
      hides: "Full chart, financials",
    },
    {
      role: "Pharmacy", density: "Verification-first", primary: "Check and dispense",
      shows: ["Prescription", "Allergy", "Interaction", "Stock"],
      hides: "Consultation notes",
    },
    {
      role: "Operations", density: "Aggregate", primary: "Monitor and unblock",
      shows: ["Throughput", "Bottlenecks", "SLA", "Audit"],
      hides: "Individual clinical detail",
    },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {roles.map((r) => (
        <div key={r.role} className="rounded-[1.25rem] border p-5"
          style={{ borderColor: LINE, background: PAPER }}>
          <div className="flex items-baseline justify-between gap-3">
            <div className="text-base font-semibold" style={{ color: INK }}>{r.role}</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: TEAL }}>{r.density}</div>
          </div>

          <div className="mt-3 text-[13px]" style={{ color: INK6 }}>{r.primary}</div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {r.shows.map((s) => (
              <span key={s} className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                style={{ background: TEAL_L, color: TEAL_D }}>{s}</span>
            ))}
          </div>

          <div className="mt-3 border-t pt-3 text-[11.5px] leading-relaxed"
            style={{ borderColor: LINE, color: INK4 }}>
            <span className="font-semibold">Deliberately absent — </span>
            {r.hides}
          </div>
        </div>
      ))}

      <div className="rounded-[1.25rem] border p-5"
        style={{ borderColor: TEAL, background: TEAL_L }}>
        <div className="text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: TEAL_D }}>The rule</div>
        <p className="mt-3 text-[14px] leading-relaxed" style={{ color: TEAL_D }}>
          Every workspace renders the same patient object. What changes is
          density, available actions and permission — never the underlying
          model.
        </p>
        <p className="mt-3 text-[12.5px] leading-relaxed" style={{ color: TEAL_D, opacity: 0.8 }}>
          Hiding information is a design decision with a clinical consequence,
          so each omission is recorded rather than assumed.
        </p>
      </div>
    </div>
  );
}

/* ═════════════════════════════════ 3 · SYSTEM STATES ═════════════════ */
export function SystemStates() {
  const states = [
    { name: "Loading", tone: INK4, bg: "#eef4f3", note: "Skeleton shaped like the content" },
    { name: "Empty", tone: INK4, bg: "#eef4f3", note: "Explains why, offers the next action" },
    { name: "Partial", tone: AMBER, bg: AMBER_L, note: "States what is missing, not just that data is incomplete" },
    { name: "Warning", tone: AMBER, bg: AMBER_L, note: "Clinical risk surfaced before the action, not after" },
    { name: "Error", tone: RED, bg: RED_L, note: "Names the cause and the recovery path" },
    { name: "Offline", tone: AMBER, bg: AMBER_L, note: "Says what is safe to do while disconnected" },
    { name: "Restricted", tone: RED, bg: RED_L, note: "Shows that data exists, and who can unlock it" },
  ];

  return (
    <div className="space-y-2.5">
      {states.map((s) => (
        <div key={s.name}
          className="flex flex-col gap-2 rounded-2xl border px-5 py-4 sm:flex-row sm:items-center sm:gap-6"
          style={{ borderColor: LINE, background: s.bg }}>
          <div className="flex w-40 shrink-0 items-center gap-2.5">
            <span className="h-2 w-2 rounded-full" style={{ background: s.tone }} />
            <span className="text-[15px] font-semibold" style={{ color: INK }}>{s.name}</span>
          </div>
          <p className="text-[13.5px] leading-relaxed" style={{ color: INK6 }}>{s.note}</p>
        </div>
      ))}

      <div className="rounded-2xl border-l-4 px-5 py-4"
        style={{ borderColor: TEAL, background: TEAL_L }}>
        <p className="text-[14px] leading-relaxed" style={{ color: TEAL_D }}>
          <b>Restricted is not the same as empty.</b> A clinician who sees
          nothing assumes nothing exists. A clinician who sees a locked record
          knows to ask. In a hospital that difference is a safety property, not
          a nicety.
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════ 4 · PRIVACY & AUDIT ══════════════════ */
export function AuditTrail() {
  const events = [
    { t: "09:14", who: "Reception · Priya S.", act: "Verified identity", detail: "MRN HOS-024718 · consent captured", tone: TEAL },
    { t: "09:41", who: "Dr. A. Menon", act: "Opened chart", detail: "Within care relationship", tone: TEAL },
    { t: "09:52", who: "Dr. A. Menon", act: "Ordered CBC, CRP", detail: "Reason recorded", tone: TEAL },
    { t: "10:06", who: "Dr. R. Iyer", act: "Break-glass access", detail: "Outside care team · reason required · flagged for review", tone: RED },
    { t: "11:20", who: "Pharmacy · K. Rao", act: "Dispensed", detail: "Penicillin allergy check passed", tone: AMBER },
  ];

  return (
    <div className="overflow-hidden rounded-[1.5rem] border" style={{ borderColor: LINE, background: PAPER }}>
      <div className="flex items-center justify-between border-b px-6 py-4"
        style={{ borderColor: LINE }}>
        <span className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: INK4 }}>
          Access history · Meera Nair
        </span>
        <span className="text-[11px]" style={{ color: INK4, fontFamily: mono }}>
          HOS-024718
        </span>
      </div>

      <div className="divide-y" style={{ borderColor: LINE }}>
        {events.map((e, i) => (
          <div key={i} className="flex gap-4 px-6 py-4"
            style={{ background: e.tone === RED ? RED_L : "transparent" }}>
            <span className="w-12 shrink-0 pt-0.5 text-[12px]"
              style={{ color: INK4, fontFamily: mono }}>{e.t}</span>
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: e.tone }} />
            <div className="min-w-0">
              <div className="text-[14px] font-semibold" style={{ color: INK }}>
                {e.act}
                {e.tone === RED && (
                  <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]"
                    style={{ background: RED, color: "#fff" }}>Review</span>
                )}
              </div>
              <div className="mt-0.5 text-[12.5px]" style={{ color: INK6 }}>{e.who}</div>
              <div className="mt-1 text-[12.5px]" style={{ color: INK4 }}>{e.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t px-6 py-4 text-[13px] leading-relaxed"
        style={{ borderColor: LINE, color: INK6, background: TEAL_L }}>
        Access is never silently denied or silently granted. Reading a record
        outside your care relationship is possible, requires a reason, and is
        visible afterwards — the design assumes emergencies happen and makes
        them accountable rather than impossible.
      </div>
    </div>
  );
}

/* ═══════════════════════════ 5 · PATIENT IDENTITY BAR ════════════════ */
export function IdentityBar() {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[1.25rem] border-2" style={{ borderColor: TEAL, background: "#fff" }}>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-semibold tracking-tight" style={{ color: INK }}>
                Meera Nair
              </span>
              <span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]"
                style={{ background: RED, color: "#fff" }}>Allergy</span>
            </div>
            <div className="mt-1 text-[12.5px]" style={{ color: INK6, fontFamily: mono }}>
              42 y · MRN HOS-024718 · OPD-26-08154
            </div>
          </div>

          <div className="h-9 w-px" style={{ background: LINE }} />

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: INK4 }}>
              Location
            </div>
            <div className="mt-1 text-[13px] font-medium" style={{ color: INK }}>
              Internal Medicine · OPD 4
            </div>
          </div>

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: INK4 }}>
              Allergy
            </div>
            <div className="mt-1 text-[13px] font-semibold" style={{ color: RED }}>
              Penicillin
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: TEAL }} />
            <span className="text-[12px] font-medium" style={{ color: TEAL_D }}>
              Consent active
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Persistent", "The bar never scrolls away. Wrong-patient error is the failure mode this system exists to prevent."],
          ["Allergy is loud", "Not a field in a panel three clicks deep. It sits beside the name, in red, at every workspace."],
          ["Consent is visible", "Whether you may act is part of who you are looking at, not a separate check."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-5" style={{ borderColor: LINE, background: PAPER }}>
            <div className="text-[14px] font-semibold" style={{ color: INK }}>{t}</div>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: INK6 }}>{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════ 6 · DOC MAP ═════════════════════════ */
export function DocumentationMap() {
  const groups = [
    {
      group: "Foundations",
      items: ["Overview", "Principles", "Foundations", "Components"],
      note: "The shared vocabulary everything else is built from",
    },
    {
      group: "Clinical",
      items: ["Clinical patterns", "Role workspaces", "External referral", "System states"],
      note: "Where the system stops being generic and becomes a hospital",
    },
    {
      group: "Obligations",
      items: ["Accessibility", "Content and language", "Privacy, access and audit"],
      note: "The requirements that are not negotiable per screen",
    },
    {
      group: "Longevity",
      items: ["Information architecture", "Governance", "Release and migration"],
      note: "How the system survives the people who wrote it",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((g) => (
        <div key={g.group} className="rounded-[1.5rem] border p-6"
          style={{ borderColor: LINE, background: PAPER }}>
          <div className="flex items-baseline justify-between">
            <div className="text-lg font-semibold" style={{ color: INK }}>{g.group}</div>
            <div className="text-2xl font-semibold" style={{ color: TEAL, fontVariantNumeric: "tabular-nums" }}>
              {g.items.length}
            </div>
          </div>

          <p className="mt-2 text-[13px] leading-relaxed" style={{ color: INK4 }}>{g.note}</p>

          <div className="mt-4 space-y-2">
            {g.items.map((i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: TEAL }} />
                <span className="text-[13.5px]" style={{ color: INK6 }}>{i}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════ 7 · GOVERNANCE FLOW ═════════════════════ */
export function GovernanceFlow() {
  const steps = [
    { n: "01", t: "Propose", d: "A team hits a gap and writes the case, with the workflow it blocks" },
    { n: "02", t: "Review", d: "Checked against principles, accessibility and clinical safety" },
    { n: "03", t: "Decide", d: "Adopt, adapt an existing pattern, or decline with the reason recorded" },
    { n: "04", t: "Document", d: "States, permissions and content rules written before code" },
    { n: "05", t: "Release", d: "Versioned, with a migration path for what it replaces" },
  ];

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <div key={s.n} className="rounded-[1.25rem] border p-5"
            style={{ borderColor: LINE, background: PAPER }}>
            <div className="text-[11px] font-bold" style={{ color: TEAL, fontFamily: mono }}>
              {s.n}
            </div>
            <div className="mt-3 text-[15px] font-semibold" style={{ color: INK }}>{s.t}</div>
            <p className="mt-2 text-[12.5px] leading-relaxed" style={{ color: INK6 }}>{s.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border-l-4 px-6 py-5"
        style={{ borderColor: TEAL, background: TEAL_L }}>
        <p className="text-[15px] leading-relaxed" style={{ color: TEAL_D }}>
          <b>Declining a request is a documented outcome, not a silence.</b> A
          design system that only ever says yes becomes a component dump; one
          that says no without a reason gets routed around. Both fail the same
          way — teams stop trusting it and fork.
        </p>
      </div>
    </div>
  );
}
