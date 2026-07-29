import Link from "next/link";

type CaseStudyHeaderProps = {
  sections?: readonly { label: string; href: string }[];
};

export default function CaseStudyHeader({ sections = [] }: CaseStudyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f3ee]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="Naveen Kishore — Home"
          className="flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-xs font-semibold text-white">
            NK
          </span>

          <span className="hidden text-sm font-semibold sm:block">
            Naveen Kishore
          </span>
        </Link>

        <nav aria-label="Case study navigation">
          <ul className="flex items-center gap-4 text-xs font-medium text-black/55 sm:gap-6 sm:text-sm">
            {sections.map((section) => (
              <li key={section.href} className="hidden sm:block">
                <a className="transition-colors hover:text-black" href={section.href}>
                  {section.label}
                </a>
              </li>
            ))}

            <li>
              <Link href="/#work" className="rounded-full bg-black px-4 py-2.5 text-white">
                All work
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
