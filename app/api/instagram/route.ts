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

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { connected: false, items: [] },
      { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" } },
    );
  }

  const endpoint = new URL("https://graph.instagram.com/me/media");
  endpoint.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,permalink,timestamp",
  );
  endpoint.searchParams.set("limit", "24");
  endpoint.searchParams.set("access_token", accessToken);

  try {
    const response = await fetch(endpoint, { next: { revalidate: 900 } });
    if (!response.ok) {
      return NextResponse.json({ connected: false, items: [] }, { status: 502 });
    }

    const payload = (await response.json()) as { data?: InstagramApiItem[] };
    const items = (payload.data ?? [])
      .filter(
        (item) =>
          (item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM") &&
          item.id &&
          item.media_url &&
          item.permalink,
      )
      .slice(0, 12)
      .map((item) => ({
        id: item.id as string,
        caption: item.caption ?? "",
        mediaType: item.media_type as "IMAGE" | "CAROUSEL_ALBUM",
        mediaUrl: item.media_url as string,
        permalink: item.permalink as string,
        timestamp: item.timestamp ?? "",
      }));

    return NextResponse.json(
      { connected: true, items },
      { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" } },
    );
  } catch {
    return NextResponse.json({ connected: false, items: [] }, { status: 502 });
  }
}
