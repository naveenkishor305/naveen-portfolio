import type { Project } from "@/types/project";

export const projects = [
  {
    number: "01",
    href: "/work/healthcare-platform",
    type: "Healthcare product intelligence",
    title: "Mapping complex healthcare products.",
    description:
      "An interactive information architecture explorer for understanding how healthcare platforms organise products, modules, workflows and screens.",
    tags: [
      "Competitive analysis",
      "Information architecture",
      "Systems design",
      "Interactive prototyping",
    ],
    background: "#dce6df",
    accent: "#2f6b55",
    year: "2026",
    status: "Ongoing",
    role: "Product design · Research · Front-end prototype",
    highlight:
      "Company → product → module → workflow → screen hierarchy",
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
