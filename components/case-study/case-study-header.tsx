import Image from "next/image";
import Link from "next/link";

type CaseStudyHeaderProps = {
  sections?: readonly { label: string; href: string }[];
};

export default function CaseStudyHeader({ sections = [] }: CaseStudyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f3ee]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        {/* Same Grove mark as the site header — a case study is not a different
            site, and swapping the brand at the door says otherwise. */}
        <Link
          href="/"
          aria-label="Naveen Kishore — Home"
          className="group flex items-center gap-2.5"
        >
          <Image
            src="/brand/grove-mark.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:-rotate-6"
          />

          <span className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold leading-none tracking-tight">
              Naveen Kishore
            </span>
            <span className="mt-1 text-[0.5625rem] font-medium uppercase leading-none tracking-[0.14em] text-neutral-500">
              Product Designer
            </span>
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
