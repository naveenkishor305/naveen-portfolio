"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const PAGE_COUNT = 14;
const PAGE_WIDTH = 1191;
const PAGE_HEIGHT = 1684;
const MIN_ZOOM = 0.8;
const MAX_ZOOM = 1.8;
const ZOOM_STEP = 0.2;
const DESKTOP_SPREADS: number[][] = [
  [1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [10, 11],
  [12, 13],
  [14],
];

function pageSource(page: number) {
  return `/visual-journal/pages/page-${String(page).padStart(2, "0")}.webp`;
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function spreadIndexForPage(page: number) {
  const index = DESKTOP_SPREADS.findIndex((spread) => spread.includes(page));
  return index === -1 ? 0 : index;
}

type Size = {
  width: number;
  height: number;
};

export default function MagazineReader() {
  const readerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const swipeStartX = useRef<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSinglePage, setIsSinglePage] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [stageSize, setStageSize] = useState<Size>({ width: 0, height: 0 });

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

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const measure = () => {
      const bounds = stage.getBoundingClientRect();
      setStageSize({ width: bounds.width, height: bounds.height });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [isFullscreen, isSinglePage]);

  const currentSpreadIndex = useMemo(
    () => spreadIndexForPage(currentPage),
    [currentPage],
  );

  const visiblePages = useMemo(
    () => (isSinglePage ? [currentPage] : DESKTOP_SPREADS[currentSpreadIndex]),
    [currentPage, currentSpreadIndex, isSinglePage],
  );

  const next = useCallback(() => {
    setCurrentPage((page) => {
      if (isSinglePage) return clamp(page + 1, 1, PAGE_COUNT);
      const nextSpread = DESKTOP_SPREADS[clamp(spreadIndexForPage(page) + 1, 0, DESKTOP_SPREADS.length - 1)];
      return nextSpread[0];
    });
  }, [isSinglePage]);

  const previous = useCallback(() => {
    setCurrentPage((page) => {
      if (isSinglePage) return clamp(page - 1, 1, PAGE_COUNT);
      const previousSpread = DESKTOP_SPREADS[clamp(spreadIndexForPage(page) - 1, 0, DESKTOP_SPREADS.length - 1)];
      return previousSpread[0];
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
    const nextPages = isSinglePage
      ? [currentPage + 1]
      : DESKTOP_SPREADS[Math.min(currentSpreadIndex + 1, DESKTOP_SPREADS.length - 1)];

    for (const page of nextPages.filter((candidate) => candidate <= PAGE_COUNT)) {
      const image = new window.Image();
      image.src = pageSource(page);
    }
  }, [currentPage, currentSpreadIndex, isSinglePage]);

  const stagePadding = stageSize.width < 640 ? 16 : stageSize.width < 1024 ? 24 : 32;
  const availableWidth = Math.max(stageSize.width - stagePadding, 1);
  const availableHeight = Math.max(stageSize.height - stagePadding, 1);
  const spreadRatio = (PAGE_WIDTH * visiblePages.length) / PAGE_HEIGHT;
  const fittedWidth = Math.min(availableWidth, availableHeight * spreadRatio);
  const fittedHeight = fittedWidth / spreadRatio;
  const renderedWidth = fittedWidth * zoom;
  const renderedHeight = fittedHeight * zoom;
  const scrollWidth = Math.max(stageSize.width, renderedWidth + stagePadding);
  const scrollHeight = Math.max(stageSize.height, renderedHeight + stagePadding);

  const pageLabel =
    visiblePages.length === 1
      ? `Page ${visiblePages[0]} of ${PAGE_COUNT}`
      : `Pages ${visiblePages[0]}-${visiblePages[1]} of ${PAGE_COUNT}`;

  return (
    <div
      ref={readerRef}
      className={`overflow-hidden border border-black/10 bg-[#1f1c1d] shadow-[0_30px_90px_rgba(22,20,18,0.22)] ${
        isFullscreen ? "flex h-screen flex-col rounded-none border-0" : "rounded-[1.75rem]"
      }`}
      aria-label="Detours and Discoveries magazine reader"
    >
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-white sm:px-5">
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
        className={`relative bg-[radial-gradient(circle_at_top,#3a3435_0,#211e1f_58%,#171516_100%)] ${
          isFullscreen ? "min-h-0 flex-1" : "aspect-[2382/1684] max-h-[80rem] min-h-[31rem] max-md:aspect-[1191/1684] max-md:min-h-0"
        }`}
      >
        <div
          ref={stageRef}
          className="h-full w-full touch-pan-y overflow-auto overscroll-contain"
          onPointerDown={(event) => {
            swipeStartX.current = event.clientX;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerUp={(event) => {
            if (swipeStartX.current === null) return;
            const distance = event.clientX - swipeStartX.current;
            swipeStartX.current = null;
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
            if (Math.abs(distance) < 50) return;
            if (distance < 0) next();
            else previous();
          }}
          onPointerCancel={() => {
            swipeStartX.current = null;
          }}
        >
          <div
            className="grid place-items-center"
            style={{ width: scrollWidth, height: scrollHeight }}
          >
            <div
              className="flex origin-center items-stretch justify-center transition-[width,height] duration-300 ease-out"
              style={{
                width: renderedWidth,
                height: renderedHeight,
                opacity: stageSize.width > 0 ? 1 : 0,
              }}
            >
              {visiblePages.map((page, index) => (
                <div
                  key={page}
                  className={`relative h-full flex-1 overflow-hidden bg-[#f7f4ef] shadow-[0_24px_65px_rgba(0,0,0,0.38)] ${
                    visiblePages.length === 2 && index === 0 ? "rounded-l-sm" : ""
                  } ${visiblePages.length === 2 && index === 1 ? "rounded-r-sm" : ""}`}
                >
                  <Image
                    src={pageSource(page)}
                    alt={`Detours and Discoveries, page ${page}`}
                    fill
                    sizes={visiblePages.length === 2 ? "50vw" : "100vw"}
                    priority={page <= 2}
                    draggable={false}
                    className="select-none object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={previous}
          disabled={currentPage === 1}
          className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/55 text-lg text-white backdrop-blur transition hover:bg-black/80 disabled:pointer-events-none disabled:opacity-0 sm:left-4"
          aria-label="Previous page"
        >
          &larr;
        </button>
        <button
          type="button"
          onClick={next}
          disabled={currentPage === PAGE_COUNT}
          className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/55 text-lg text-white backdrop-blur transition hover:bg-black/80 disabled:pointer-events-none disabled:opacity-0 sm:right-4"
          aria-label="Next page"
        >
          &rarr;
        </button>
      </div>

      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-white/65 sm:px-5">
        <p className="min-w-28 text-xs tabular-nums" aria-live="polite">
          {pageLabel}
        </p>
        <label className="flex min-w-44 flex-1 items-center justify-center gap-3 sm:max-w-sm">
          <span className="sr-only">Go to magazine page</span>
          <input
            type="range"
            min="1"
            max={PAGE_COUNT}
            value={currentPage}
            onChange={(event) => setCurrentPage(Number(event.target.value))}
            className="h-1 w-full cursor-pointer accent-white"
            aria-label="Go to magazine page"
          />
        </label>
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
