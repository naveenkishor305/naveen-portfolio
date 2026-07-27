import type { Project } from "@/types/project";

export const projects = [
  {
    number: "01",
    href: "/work/healthcare-platform",
    type: "Enterprise SaaS",
    title: "Healthcare operations, made clearer.",
    description:
      "Designing a multi-role CRM and ERP experience for complex care and business workflows.",
    tags: [
      "Product discovery",
      "Information architecture",
      "UX/UI design",
    ],
    background: "#dce6df",
    accent: "#2f6b55",
  },
  {
    number: "02",
    href: "/work/quick-commerce",
    type: "0–1 Mobile Product",
    title: "Quick commerce for everyday needs.",
    description:
      "Creating a mobile commerce experience shaped around local shopping needs in Ghana.",
    tags: ["User flows", "Mobile design", "Prototyping"],
    background: "#eadfce",
    accent: "#a4532f",
  },
  {
    number: "03",
    href: "/work/cloud-navigation",
    type: "Concept Project",
    title: "Finding the right service in Google Cloud.",
    description:
      "A conceptual navigation redesign for moving through a dense cloud ecosystem with less friction.",
    tags: [
      "Cloud navigation",
      "Systems thinking",
      "Interaction design",
    ],
    background: "#dce3ec",
    accent: "#3d5f8d",
  },
] satisfies readonly Project[];
