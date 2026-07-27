const levels = [
  {
    number: "01",
    label: "Company",
    example: "Epic Systems",
    description: "The organisation that owns and develops the ecosystem.",
  },
  {
    number: "02",
    label: "Product",
    example: "Hyperspace",
    description: "A major product or platform within the company ecosystem.",
  },
  {
    number: "03",
    label: "Module",
    example: "Clinical",
    description: "A functional area serving a related group of responsibilities.",
  },
  {
    number: "04",
    label: "Workflow",
    example: "Patient chart review",
    description: "A sequence of actions performed to complete a user goal.",
  },
  {
    number: "05",
    label: "Screen",
    example: "Patient summary",
    description: "The interface where an individual task or decision happens.",
  },
] as const;

export default function HealthcareSystemMap() {
  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-5">
        {levels.map((level, index) => (
          <article
            key={level.label}
            className="relative rounded-[1.5rem] border border-black/10 bg-white/65 p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] text-black/40">
                {level.number}
              </span>

              {index < levels.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-sm text-black/30 lg:absolute lg:-right-3.5 lg:top-8 lg:z-10 lg:flex lg:h-7 lg:w-7 lg:items-center lg:justify-center lg:rounded-full lg:bg-[#dce6df]"
                >
                  →
                </span>
              )}
            </div>

            <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em]">
              {level.label}
            </h3>

            <p className="mt-2 text-sm font-medium text-[#2f6b55]">
              {level.example}
            </p>

            <p className="mt-5 text-sm leading-6 text-black/55">
              {level.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-dashed border-black/15 p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-black/40">
              Normalised relationship
            </p>

            <p className="mt-2 text-sm font-medium sm:text-base">
              Company → Product → Module → Workflow → Screen
            </p>
          </div>

          <p className="max-w-md text-sm leading-6 text-black/50">
            A shared model makes products from different companies easier to
            explore and compare consistently.
          </p>
        </div>
      </div>
    </div>
  );
}
