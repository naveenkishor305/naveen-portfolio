export type ProjectMetric = {
  value: string;
  label: string;
};

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
  /** Three figures a recruiter can scan without opening the case study. */
  metrics?: readonly ProjectMetric[];
  /** Set when there is something running to click, not just to read. */
  liveUrl?: string;
  liveLabel?: string;
};
