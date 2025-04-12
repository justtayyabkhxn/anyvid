// src/app/api/download/route.ts
import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  try {
    // Run yt-dlp to get direct URL
    const command = `yt-dlp -J "${url}"`;
    const { stdout } = await execAsync(command);
    const metadata = JSON.parse(stdout);

    const downloadUrl = metadata.url || metadata.formats?.[0]?.url || "";
    const thumbnail = metadata.thumbnail || "";
    const title = metadata.title || "";

    return NextResponse.json({
      thumbnail,
      downloadUrl,
      title,
    });
  } catch (err: unknown) {
    console.error("yt-dlp error:", err);
    return NextResponse.json({ error: "Failed to extract video" }, { status: 500 });
  }
}
