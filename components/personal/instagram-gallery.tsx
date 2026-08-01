"use client";

import { useEffect, useState } from "react";

type InstagramItem = {
  id: string;
  caption: string;
  mediaType: "IMAGE" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  permalink: string;
  timestamp: string;
};

type FeedResponse = {
  connected: boolean;
  items: InstagramItem[];
};

const PROFILE_URL = "https://www.instagram.com/naveen._.kishor/";
const REFRESH_INTERVAL = 15 * 60 * 1000;

export default function InstagramGallery() {
  const [feed, setFeed] = useState<FeedResponse | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const response = await fetch("/api/instagram", { cache: "no-store" });
        if (!response.ok) throw new Error("Instagram feed unavailable");
        const result = (await response.json()) as FeedResponse;
        if (active) setFeed(result);
      } catch {
        if (active) setFeed({ connected: false, items: [] });
      }
    };

    void load();
    const timer = window.setInterval(() => void load(), REFRESH_INTERVAL);

    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  if (!feed?.connected || feed.items.length === 0) {
    return (
      <div className="grid min-h-72 place-items-center rounded-[1.75rem] border border-black/10 bg-[#ebe8df] px-6 py-12 text-center">
        <div className="max-w-md">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Live gallery
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#171717]">
            Ready for the Instagram connection
          </h3>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Once the account is connected, new image posts and carousel covers will appear here automatically.
          </p>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            Open @naveen._.kishor
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
      {feed.items.map((item) => (
        <a
          key={item.id}
          href={item.permalink}
          target="_blank"
          rel="noreferrer"
          className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-200"
          aria-label={item.caption ? `View Instagram post: ${item.caption.slice(0, 80)}` : "View Instagram post"}
        >
          {/* Instagram CDN URLs are returned at runtime, so this remains a native image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.mediaUrl}
            alt={item.caption ? item.caption.slice(0, 120) : "Recent visual journal post"}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-10 text-[0.65rem] uppercase tracking-[0.15em] text-white opacity-0 transition group-hover:opacity-100">
            {item.mediaType === "CAROUSEL_ALBUM" ? "View carousel" : "View post"}
          </span>
        </a>
      ))}
    </div>
  );
}
