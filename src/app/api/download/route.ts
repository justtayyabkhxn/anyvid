import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: "Missing URL" }, { status: 400 });
    }

    const apiRes = await fetch(
      `https://yt-dlp-api-hmbr.onrender.com/download?url=${encodeURIComponent(url)}`
    );

    const data = await apiRes.json();

    if (data.error) {
      console.error("yt-dlp API Error:", data.error);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    if (!data.downloadUrl || !data.thumbnail || !data.title) {
      console.error("Incomplete response from yt-dlp API:", data);
      return NextResponse.json(
        { error: "Invalid response from yt-dlp API" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      title: data.title,
      thumbnail: data.thumbnail,
      downloadUrl: data.downloadUrl,
    });
  } catch (error) {
    console.error("Failed to fetch from yt-dlp API:", error);
    return NextResponse.json(
      { error: "Server error while processing request" },
      { status: 500 }
    );
  }
}
