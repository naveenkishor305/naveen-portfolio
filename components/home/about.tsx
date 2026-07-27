const capabilities = [
  {
    number: "01",
    title: "Product discovery",
    description:
      "Understanding users, business goals, technical constraints and the actual problem before designing screens.",
  },
  {
    number: "02",
    title: "Information architecture",
    description:
      "Structuring dense products, workflows and content so people can understand where they are and what to do next.",
  },
  {
    number: "03",
    title: "Interaction design",
    description:
      "Turning complex tasks into clear flows, states and interaction patterns that remain usable at scale.",
  },
  {
    number: "04",
    title: "Functional prototyping",
    description:
      "Using high-fidelity prototypes and front-end implementation to test how product decisions behave in practice.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 overflow-hidden px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              About
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl">
              I work where systems, users and implementation meet.
            </h2>

            <div className="mt-10 hidden items-center gap-4 lg:flex">
              <span className="h-px w-20 bg-black/20" />
              <span className="font-mono text-xs text-neutral-400">
                DESIGN + ENGINEERING
              </span>
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-xl leading-9 text-neutral-700 sm:text-2xl sm:leading-10">
              I&apos;m Naveen Kishore, an engineering-trained product designer
              focused on making complicated digital products easier to
              understand and use.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">
              I enjoy working on information-heavy products, enterprise
              software and unfamiliar problem spaces. My process moves from
              research and system mapping to interaction design, visual
              refinement and functional prototypes.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">
              Because I understand both design and implementation, I can
              collaborate closely with engineers, evaluate technical
              constraints and communicate product decisions beyond static
              screens.
            </p>

            <div className="mt-12 grid border-t border-black/15 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <article
                  key={capability.number}
                  className={[
                    "border-b border-black/15 py-7",
                    index % 2 === 0
                      ? "sm:border-r sm:pr-7"
                      : "sm:pl-7",
                  ].join(" ")}
                >
                  <span className="font-mono text-xs text-neutral-400">
                    {capability.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid overflow-hidden rounded-[2rem] bg-[#deddd6] sm:grid-cols-3">
          <div className="p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.16em] text-black/45">
              Strongest at
            </p>
            <p className="mt-4 max-w-xs text-lg font-semibold leading-7">
              Systems thinking and information architecture
            </p>
          </div>

          <div className="border-y border-black/10 p-7 sm:border-x sm:border-y-0 sm:p-9">
            <p className="text-xs uppercase tracking-[0.16em] text-black/45">
              Comfortable with
            </p>
            <p className="mt-4 max-w-xs text-lg font-semibold leading-7">
              Figma, prototyping, React and design systems
            </p>
          </div>

          <div className="p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.16em] text-black/45">
              Looking for
            </p>
            <p className="mt-4 max-w-xs text-lg font-semibold leading-7">
              Product design opportunities with complex, meaningful problems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
