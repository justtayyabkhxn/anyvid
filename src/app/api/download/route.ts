// src/app/api/download/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;
    
    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Dummy response for testing – replace with actual logic later
    const response = {
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      downloadUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to process the request" },
      { status: 500 }
    );
  }
}
