import Reveal from "@/components/motion/reveal";

const links = [
  {
    label: "Email",
    value: "nkishor305@gmail.com",
    href: "mailto:nkishor305@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/naveen-kishor-316928397/",
  },
  {
    label: "Résumé",
    value: "View PDF",
    href: "/naveen-kishore-resume.pdf",
  },
  {
    label: "GitHub",
    value: "View profile",
    href: "https://github.com/naveenkishor305",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#c96b48] px-6 py-24 text-[#111111] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/55">
          03 / Let&apos;s work together
        </p>

        <div className="mt-7 grid gap-14 border-t border-black/20 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Looking for a designer who can make complexity feel clear?
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
              I&apos;m currently exploring product design roles, internships
              and thoughtful collaborations where I can contribute across
              research, UX, systems thinking and prototyping.
            </p>

            <a
              href="mailto:nkishor305@gmail.com?subject=Product%20Design%20Opportunity"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#111111] px-6 py-4 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
            >
              Start a conversation
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.16em] text-black/50">
              Contact and profiles
            </p>

            <div className="mt-5 divide-y divide-black/20 border-y border-black/20">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noreferrer"
                  }
                  className="group flex items-center justify-between gap-5 py-5"
                >
                  <span className="text-xs uppercase tracking-[0.14em] text-black/50">
                    {link.label}
                  </span>

                  <span className="text-right text-sm font-semibold sm:text-base">
                    {link.value}
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-black/20 p-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-emerald-700"
                />
                <p className="text-sm font-semibold">
                  Available for product design opportunities
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-black/60">
                Open to remote opportunities and teams working on substantial
                product problems.
              </p>
            </div>
          </Reveal>
        </div>

        <footer className="mt-24 flex flex-col gap-4 border-t border-black/20 pt-6 text-sm text-black/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Naveen Kishore. Designed and built with care.</p>

          <a href="#" className="font-medium transition-colors hover:text-black">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
