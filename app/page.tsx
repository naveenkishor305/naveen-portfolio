import Link from "next/link";
import { projects } from "@/data/projects";
import Hero from "@/components/home/hero";
import SelectedWork from "@/components/home/selected-work";
const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
      <Hero />
      <SelectedWork projects={projects} />
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
                      â†—
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
                      â†—
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
                    RÃ©sumÃ©
                  </span>
                  <span className="font-medium">
                    View PDF{" "}
                    <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      â†—
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
                      â†—
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-24 flex flex-col gap-4 border-t border-black/20 pt-6 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between">
            <p>Â© 2026 Naveen Kishore. Designed and built with care.</p>

            <a href="#" className="transition-colors hover:text-black">
              Back to top â†‘
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}



