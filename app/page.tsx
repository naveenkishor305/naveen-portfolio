export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f3ee] px-6 text-[#111111]">
      <section className="w-full max-w-5xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Product Designer
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          I simplify complex software.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
          Engineering-trained product designer creating scalable enterprise
          SaaS, mobile products and data-rich workflows.
        </p>
      </section>
    </main>
  );
}
