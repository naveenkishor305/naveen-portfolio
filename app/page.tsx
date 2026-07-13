import Link from "next/link";
const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    href: "/work/healthcare-platform",
    type: "Enterprise SaaS",
    title: "Healthcare operations, made clearer.",
    description:
      "Designing a multi-role CRM and ERP experience for complex care and business workflows.",
    tags: ["Product discovery", "Information architecture", "UX/UI design"],
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
    tags: ["Cloud navigation", "Systems thinking", "Interaction design"],
    background: "#dce3ec",
    accent: "#3d5f8d",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f3ee] text-[#111111]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight"
          aria-label="Naveen Kishore home"
        >
          NK.
        </a>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 sm:gap-8">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-neutral-600 transition-colors hover:text-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-84px)] w-full max-w-6xl items-center px-6 pb-16 sm:px-8 lg:px-10">
        <div className="w-full">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Product Designer
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-tight sm:text-7xl lg:text-8xl">
            I simplify complex software.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
            Engineering-trained product designer turning complex enterprise
            systems into clear, scalable experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View selected work <span aria-hidden="true">↘</span>
            </a>

            <a
              href="#about"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition-colors hover:border-neutral-900"
            >
              About me
            </a>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="scroll-mt-0 bg-[#111111] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex items-end justify-between border-b border-white/20 pb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                Projects that show how I think.
              </h2>
            </div>

            <p className="hidden text-sm text-white/50 sm:block">01—03</p>
          </div>

          <div className="mt-10 space-y-6">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group grid overflow-hidden rounded-4xl text-[#111111] lg:grid-cols-[0.9fr_1.1fr]"
                style={{ backgroundColor: project.background }}
              >
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{project.number}</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-black/50">
                        {project.type}
                      </p>
                    </div>

                    <h3 className="mt-16 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-md leading-7 text-black/60">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/15 px-3 py-1.5 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.href && (
                      <Link
                        href={project.href}
                        className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
                      >
                        View case study <span aria-hidden="true">↗</span>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="relative flex min-h-85 items-center justify-center overflow-hidden p-7 sm:min-h-107.5 sm:p-12">
                  <span className="absolute -right-4 -top-12 text-[12rem] font-semibold leading-none text-black/5 sm:text-[18rem]">
                    {project.number}
                  </span>

                  <div className="relative w-full max-w-xl rounded-3xl border border-black/10 bg-[#f8f8f5]/90 p-4 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-black/20" />
                        <span className="h-2 w-2 rounded-full bg-black/20" />
                        <span className="h-2 w-2 rounded-full bg-black/20" />
                      </div>

                      <span className="text-[10px] uppercase tracking-[0.16em] text-black/40">
                        Product interface
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-[0.35fr_1fr] gap-3">
                      <div className="rounded-2xl bg-black/5 p-3">
                        <div
                          className="h-7 w-7 rounded-lg"
                          style={{ backgroundColor: project.accent }}
                        />
                        <div className="mt-6 space-y-2">
                          <div className="h-2 rounded-full bg-black/10" />
                          <div className="h-2 w-4/5 rounded-full bg-black/10" />
                          <div className="h-2 w-3/5 rounded-full bg-black/10" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div
                          className="h-16 rounded-2xl"
                          style={{ backgroundColor: project.accent }}
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-24 rounded-2xl bg-black/5" />
                          <div className="h-24 rounded-2xl bg-black/5" />
                        </div>
                        <div className="h-12 rounded-2xl bg-black/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="about"
        className="scroll-mt-8 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            About me
          </p>

          <div className="mt-6 grid gap-12 border-t border-black/15 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Engineering-trained.
              <br />
              Human-centered.
            </h2>

            <div>
              <p className="text-xl leading-8 text-neutral-700">
                I&apos;m Naveen Kishore, a product designer who enjoys turning
                complicated systems into experiences people can understand and
                use confidently.
              </p>

              <p className="mt-6 leading-7 text-neutral-600">
                My engineering background helps me understand technical
                constraints, while design helps me connect those systems to real
                human needs. I work across discovery, information architecture,
                interaction design and high-fidelity prototyping.
              </p>

              <dl className="mt-10 grid gap-6 border-t border-black/15 pt-8 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                    Focus
                  </dt>
                  <dd className="mt-2 font-medium">
                    Enterprise SaaS and mobile products
                  </dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                    Strength
                  </dt>
                  <dd className="mt-2 font-medium">
                    Systems thinking and information architecture
                  </dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                    Process
                  </dt>
                  <dd className="mt-2 font-medium">
                    Discovery through prototyping
                  </dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                    Experience
                  </dt>
                  <dd className="mt-2 font-medium">
                    1.5+ years designing digital products
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="scroll-mt-0 bg-[#c96b48] px-6 py-24 text-[#111111] sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/55">
            Contact
          </p>

          <div className="mt-6 grid gap-12 border-t border-black/20 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Have a complex problem?
              <br />
              Let&apos;s make it clearer.
            </h2>

            <div>
              <p className="max-w-md text-lg leading-8 text-black/70">
                Interested in product design opportunities, ambitious products
                and thoughtful collaborations.
              </p>

              <div className="mt-10 divide-y divide-black/20 border-y border-black/20">
                <a
                  href="mailto:nkishor305@gmail.com"
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span className="text-sm uppercase tracking-[0.14em] text-black/55">
                    Email
                  </span>
                  <span className="text-right font-medium">
                    nkishor305@gmail.com{" "}
                    <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/naveen-kishor-316928397/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span className="text-sm uppercase tracking-[0.14em] text-black/55">
                    LinkedIn
                  </span>
                  <span className="font-medium">
                    Connect{" "}
                    <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>

                <a
                  href="/naveen-kishore-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span className="text-sm uppercase tracking-[0.14em] text-black/55">
                    Résumé
                  </span>
                  <span className="font-medium">
                    View PDF{" "}
                    <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>

                <a
                  href="https://github.com/naveenkishor305"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span className="text-sm uppercase tracking-[0.14em] text-black/55">
                    GitHub
                  </span>
                  <span className="font-medium">
                    View profile{" "}
                    <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-24 flex flex-col gap-4 border-t border-black/20 pt-6 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Naveen Kishore. Designed and built with care.</p>

            <a href="#" className="transition-colors hover:text-black">
              Back to top ↑
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}
