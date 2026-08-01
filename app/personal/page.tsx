import type { Metadata } from "next";
import Link from "next/link";
import InstagramGallery from "@/components/personal/instagram-gallery";
import MagazineReader from "@/components/personal/magazine-reader";
import SiteHeader from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Visual Journal | Naveen Kishore",
  description:
    "A personal visual journal by Naveen Kishore, featuring Detours & Discoveries and recent image studies.",
};

export default function VisualJournalPage() {
  return (
    <div className="min-h-screen bg-[#f4f3ee] text-[#171717]">
      <SiteHeader />

      <main>
        <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10">
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 transition hover:text-black"
          >
            Back to portfolio
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#376448]">
                Personal archive
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[6.4rem]">
                Visual Journal
              </h1>
            </div>

            <div className="max-w-md lg:justify-self-end">
              <p className="text-base leading-7 text-neutral-600">
                A quieter space for observation, image-making, and the unexpected paths that sit outside my product work.
              </p>
              <a
                href="https://www.instagram.com/naveen._.kishor/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4 transition hover:decoration-black"
              >
                @naveen._.kishor
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#ebe8df] py-16 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Publication
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                  Detours &amp; Discoveries
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-neutral-600">
                Fourteen pages of landscapes, portraits, wildlife, and the small discoveries made along an unconventional route.
              </p>
            </div>

            <MagazineReader />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                From Instagram
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Recent frames
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-neutral-600">
              Image posts and carousel covers only. The gallery checks for new work every fifteen minutes.
            </p>
          </div>

          <InstagramGallery />
        </section>
      </main>
    </div>
  );
}
