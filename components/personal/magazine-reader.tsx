"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const PAGE_COUNT = 14;
const MIN_ZOOM = 0.8;
const MAX_ZOOM = 1.8;
const ZOOM_STEP = 0.2;

function pageSource(page: number) {
  return `/visual-journal/pages/page-${String(page).padStart(2, "0")}.webp`;
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

export default function MagazineReader() {
  const readerRef = useRef<HTMLDivElement>(null);
  const swipeStartX = useRef<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSinglePage, setIsSinglePage] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsSinglePage(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => setIsFullscreen(document.fullscreenElement === readerRef.current);
    document.addEventListener("fullscreenchange", update);
    return () => document.removeEventListener("fullscreenchange", update);
  }, []);

  const visiblePages = useMemo(() => {
    if (isSinglePage || currentPage === 1 || currentPage === PAGE_COUNT) {
      return [currentPage];
    }

    const leftPage = currentPage % 2 === 0 ? currentPage : currentPage - 1;
    return [leftPage, Math.min(leftPage + 1, PAGE_COUNT)];
  }, [currentPage, isSinglePage]);

  const next = useCallback(() => {
    setCurrentPage((page) => {
      if (isSinglePage) return clamp(page + 1, 1, PAGE_COUNT);
      if (page === 1) return 2;
      if (page >= 12) return PAGE_COUNT;
      const leftPage = page % 2 === 0 ? page : page - 1;
      return clamp(leftPage + 2, 1, PAGE_COUNT);
    });
  }, [isSinglePage]);

  const previous = useCallback(() => {
    setCurrentPage((page) => {
      if (isSinglePage) return clamp(page - 1, 1, PAGE_COUNT);
      if (page === PAGE_COUNT) return 12;
      const leftPage = page % 2 === 0 ? page : page - 1;
      if (leftPage <= 2) return 1;
      return leftPage - 2;
    });
  }, [isSinglePage]);

  const changeZoom = useCallback((amount: number) => {
    setZoom((value) => clamp(Number((value + amount).toFixed(1)), MIN_ZOOM, MAX_ZOOM));
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!readerRef.current) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await readerRef.current.requestFullscreen();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, textarea, select, [contenteditable='true']")) return;

      if (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key)) {
        event.preventDefault();
        next();
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previous();
      }
      if (event.key === "Home") setCurrentPage(1);
      if (event.key === "End") setCurrentPage(PAGE_COUNT);
      if (event.key === "+" || event.key === "=") changeZoom(ZOOM_STEP);
      if (event.key === "-") changeZoom(-ZOOM_STEP);
      if (event.key === "0") setZoom(1);
      if (event.key.toLowerCase() === "f") void toggleFullscreen();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [changeZoom, next, previous, toggleFullscreen]);

  useEffect(() => {
    const candidates = [currentPage + 1, currentPage + 2].filter((page) => page <= PAGE_COUNT);
    for (const page of candidates) {
      const image = new window.Image();
      image.src = pageSource(page);
    }
  }, [currentPage]);

  const pageLabel =
    visiblePages.length === 1
      ? `Page ${visiblePages[0]} of ${PAGE_COUNT}`
      : `Pages ${visiblePages[0]}-${visiblePages[1]} of ${PAGE_COUNT}`;

  return (
    <div
      ref={readerRef}
      className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#1f1c1d] shadow-[0_30px_90px_rgba(22,20,18,0.22)]"
      aria-label="Detours and Discoveries magazine reader"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-white sm:px-5">
        <div>
          <p className="text-sm font-medium">Detours &amp; Discoveries</p>
          <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
            Volume 01
          </p>
        </div>

        <div className="flex items-center gap-1.5" aria-label="Reader controls">
          <button
            type="button"
            onClick={() => changeZoom(-ZOOM_STEP)}
            disabled={zoom <= MIN_ZOOM}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-base transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Zoom out"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => setZoom(1)}
            className="min-w-14 rounded-full px-2 py-2 text-xs tabular-nums text-white/70 transition hover:bg-white/10"
            aria-label="Reset zoom"
          >
            {Math.round(zoom * 100)}%
          </button>
          <button
            type="button"
            onClick={() => changeZoom(ZOOM_STEP)}
            disabled={zoom >= MAX_ZOOM}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-base transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => void toggleFullscreen()}
            className="ml-1 rounded-full border border-white/15 px-3 py-2 text-xs transition hover:bg-white/10"
          >
            {isFullscreen ? "Exit full screen" : "Full screen"}
          </button>
        </div>
      </div>

      <div
        className="relative grid min-h-[64vh] place-items-center overflow-auto bg-[radial-gradient(circle_at_top,#3a3435_0,#211e1f_58%,#171516_100%)] p-4 sm:p-7 lg:p-10"
        onPointerDown={(event) => {
          swipeStartX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (swipeStartX.current === null) return;
          const distance = event.clientX - swipeStartX.current;
          swipeStartX.current = null;
          if (Math.abs(distance) < 50) return;
          if (distance < 0) next();
          else previous();
        }}
      >
        <div
          className={`flex origin-center items-center justify-center transition-transform duration-300 ease-out ${
            visiblePages.length === 2 ? "gap-0" : "gap-4"
          }`}
          style={{ transform: `scale(${zoom})` }}
        >
          {visiblePages.map((page, index) => (
            <div
              key={page}
              className={`relative overflow-hidden bg-[#f7f4ef] shadow-[0_24px_65px_rgba(0,0,0,0.38)] ${
                visiblePages.length === 2 && index === 0 ? "rounded-l-sm" : ""
              } ${visiblePages.length === 2 && index === 1 ? "rounded-r-sm" : ""}`}
            >
              <Image
                src={pageSource(page)}
                alt={`Detours and Discoveries, page ${page}`}
                width={1191}
                height={1684}
                priority={page <= 2}
                draggable={false}
                className="h-auto max-h-[68vh] w-auto select-none object-contain sm:max-h-[72vh]"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={previous}
          disabled={currentPage === 1}
          className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/45 text-lg text-white backdrop-blur transition hover:bg-black/70 disabled:pointer-events-none disabled:opacity-0 sm:left-4"
          aria-label="Previous page"
        >
          &larr;
        </button>
        <button
          type="button"
          onClick={next}
          disabled={currentPage === PAGE_COUNT}
          className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/45 text-lg text-white backdrop-blur transition hover:bg-black/70 disabled:pointer-events-none disabled:opacity-0 sm:right-4"
          aria-label="Next page"
        >
          &rarr;
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-white/65 sm:px-5">
        <p className="text-xs tabular-nums" aria-live="polite">
          {pageLabel}
        </p>
        <p className="hidden text-[0.68rem] sm:block">
          Arrow keys to turn pages - F for full screen - +/- to zoom
        </p>
        <a
          href="/visual-journal/detours-and-discoveries.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-white"
        >
          Open PDF
        </a>
      </div>
    </div>
  );
}
