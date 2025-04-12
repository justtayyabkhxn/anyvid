// app/api/fetch-video/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
    }

    // For now, mock response (Later you’ll fetch real data)
    const mockData = {
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', // Replace with dynamic logic later
      downloadUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    };

    return NextResponse.json(mockData, { status: 200 });

  } catch (error) {
    console.error('Error in fetch-video:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
