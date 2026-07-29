import type { Project } from "@/types/project";

export const projects = [
  {
    number: "01",
    href: "/work/healthcare-platform",
    type: "Enterprise SaaS · Healthcare",
    title: "Designing a unified operating system for hospitals.",
    description:
      "A modular, cloud-native Hospital Operating Platform unifying clinical, operational, financial and administrative workflows for the Indian healthcare market.",
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
      "11 operational domains, 42 departments, 19 vendors researched",
  },
  {
    number: "02",
    href: "/work/quick-commerce",
    type: "0–1 mobile product",
    title: "Quick commerce shaped for Ghana.",
    description:
      "A mobile shopping concept focused on product availability, delivery clarity and confidence throughout the ordering experience.",
    tags: [
      "Product discovery",
      "Mobile UX",
      "User flows",
      "Prototyping",
    ],
    background: "#eadfce",
    accent: "#a4532f",
    year: "2026",
    status: "Concept",
    role: "Product design · UX research",
    highlight:
      "Local-market shopping flows, fulfilment visibility and checkout trust",
  },
  {
    number: "03",
    href: "/work/cloud-navigation",
    type: "Navigation concept",
    title: "Finding the right Google Cloud service.",
    description:
      "A navigation concept for helping people move through a dense ecosystem of cloud services with less searching and uncertainty.",
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
      "Service inventory, intent-based grouping and clearer orientation",
  },
] satisfies readonly Project[];
