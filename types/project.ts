export type Project = {
  number: string;
  href: `/work/${string}`;
  type: string;
  title: string;
  description: string;
  tags: readonly string[];
  background: `#${string}`;
  accent: `#${string}`;
  year: string;
  status: string;
  role: string;
  highlight: string;
};
