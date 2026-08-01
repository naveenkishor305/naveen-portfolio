import { NextResponse } from "next/server";

export const revalidate = 900;

type InstagramApiItem = {
  id?: string;
  caption?: string;
  media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  permalink?: string;
  timestamp?: string;
};

type InstagramApiResponse = {
  data?: InstagramApiItem[];
  paging?: {
    next?: string;
  };
};

const MEDIA_PER_REQUEST = 100;
const MAX_API_PAGES = 10;

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { connected: false, items: [] },
      { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" } },
    );
  }

  const firstEndpoint = new URL("https://graph.instagram.com/me/media");
  firstEndpoint.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,permalink,timestamp",
  );
  firstEndpoint.searchParams.set("limit", String(MEDIA_PER_REQUEST));
  firstEndpoint.searchParams.set("access_token", accessToken);

  try {
    const media: InstagramApiItem[] = [];
    let nextEndpoint: string | undefined = firstEndpoint.toString();
    let requestCount = 0;

    while (nextEndpoint && requestCount < MAX_API_PAGES) {
      const response = await fetch(nextEndpoint, { next: { revalidate: 900 } });
      if (!response.ok) {
        return NextResponse.json({ connected: false, items: [] }, { status: 502 });
      }

      const payload = (await response.json()) as InstagramApiResponse;
      media.push(...(payload.data ?? []));
      nextEndpoint = payload.paging?.next;
      requestCount += 1;
    }

    const items = media
      .filter(
        (item) =>
          (item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM") &&
          item.id &&
          item.media_url &&
          item.permalink,
      )
      .map((item) => ({
        id: item.id as string,
        caption: item.caption ?? "",
        mediaType: item.media_type as "IMAGE" | "CAROUSEL_ALBUM",
        mediaUrl: item.media_url as string,
        permalink: item.permalink as string,
        timestamp: item.timestamp ?? "",
      }));

    return NextResponse.json(
      { connected: true, items, total: items.length },
      { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" } },
    );
  } catch {
    return NextResponse.json({ connected: false, items: [] }, { status: 502 });
  }
}
