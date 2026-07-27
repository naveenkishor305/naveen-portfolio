const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f3ee]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a
          href="#"
          aria-label="Naveen Kishore — Home"
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-xs font-semibold text-white transition-transform duration-300 group-hover:rotate-[-6deg]">
            NK
          </span>

          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            Naveen Kishore
          </span>
        </a>

        <div className="flex items-center gap-4 sm:gap-7">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-4 sm:gap-7">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs font-medium text-neutral-600 transition-colors hover:text-black sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/naveen-kishore-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#111111] px-4 py-2.5 text-xs font-medium text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Résumé ↗
          </a>
        </div>
      </div>
    </header>
  );
}
