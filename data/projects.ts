import type { Project } from "@/types/project";

export const projects = [
  {
    number: "01",
    href: "/work/healthcare-platform",
    type: "Enterprise SaaS · Healthcare",
    title: "Designing a unified operating system for hospitals.",
    description:
      "A modular, cloud-native hospital operating platform unifying clinical, operational, financial and administrative workflows for the Indian healthcare market.",
    tags: [
      "Discovery research",
      "Systems design",
      "Competitive analysis",
      "Product strategy",
    ],
    background: "#dce6df",
    accent: "#2f6b55",
    year: "2026",
    status: "Phase 1 of 18",
    role: "Product design · Research · Product strategy",
    highlight:
      "Mapping a domain before drawing a screen — 11 operational domains and 42 departments modelled from vendor research, not assumption.",
    metrics: [
      { value: "11", label: "Operational domains" },
      { value: "42", label: "Departments mapped" },
      { value: "19", label: "Vendors researched" },
    ],
  },
  {
    number: "02",
    href: "/work/spine-design-system",
    type: "Design system · Clinical operations",
    title: "Building Spine for complex hospital software.",
    description:
      "A production-ready design system that turns safety, patient context, accessibility, permissions and operational workflow into reusable interface standards.",
    tags: [
      "Design systems",
      "Clinical UX",
      "Accessibility",
      "Front-end documentation",
    ],
    background: "#dcebea",
    accent: "#176e6a",
    year: "2026",
    status: "Live",
    role: "Product design · Systems design · Front-end",
    highlight:
      "Governance as a design deliverable — documented decisions and contribution rules, so the system survives people leaving the team.",
    metrics: [
      { value: "14", label: "Documentation chapters" },
      { value: "5", label: "Role workspaces" },
      { value: "WCAG", label: "Verified contrast" },
    ],
    liveUrl: "https://spine-design-system.vercel.app/",
    liveLabel: "Browse the system",
  },
  {
    number: "03",
    href: "/work/quick-commerce",
    type: "0–1 mobile ecosystem · Ghana",
    title: "Quick commerce designed around a Ghanaian evening.",
    description:
      "Ntɛm is a three-sided marketplace connecting customers, independent merchants and riders. One basket spanning three businesses, one honest delivery promise, and a failure path designed so hesitating never costs the customer money.",
    tags: [
      "Market research",
      "Systems architecture",
      "Interaction design",
      "Design system",
      "React prototype",
    ],
    background: "#eadfce",
    accent: "#a4532f",
    year: "2026",
    status: "Live prototype",
    role: "End-to-end product design · Research · Front-end",
    highlight:
      "Three working apps sharing one order object — act as the merchant and the customer's screen changes. The order model was tested before any UI existed.",
    metrics: [
      { value: "3", label: "Interactive apps" },
      { value: "30", label: "Screens built" },
      { value: "97", label: "Design tokens" },
    ],
    liveUrl: "https://ntem-prototype.vercel.app/",
    liveLabel: "Open the prototype",
  },
  {
    number: "04",
    href: "/work/cloud-navigation",
    type: "Navigation concept · Developer tools",
    title: "Finding the right Google Cloud service.",
    description:
      "A navigation concept for moving through a dense ecosystem of cloud services with less searching and less uncertainty about whether you found the right one.",
    tags: [
      "Taxonomy",
      "Navigation design",
      "Systems thinking",
      "Interaction design",
    ],
    background: "#dce3ec",
    accent: "#3d5f8d",
    year: "2026",
    status: "Independent concept",
    role: "Product design · Information architecture",
    highlight:
      "Reorganising by intent rather than by internal product family — grouping around what someone is trying to do, not how the catalogue is filed.",
    metrics: [
      { value: "Intent", label: "Grouping model" },
      { value: "IA", label: "Full service inventory" },
      { value: "0–1", label: "Concept exploration" },
    ],
  },
] satisfies readonly Project[];
