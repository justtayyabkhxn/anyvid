// pages/api/download.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "Missing URL" });
  }

  try {
    const apiRes = await fetch(`https://yt-dlp-api-hmbr.onrender.com/api/download?url=${encodeURIComponent(url)}`);
    const data = await apiRes.json();

    if (!data.download || !data.thumbnail || !data.title) {
      console.error("Invalid response from yt-dlp-api:", data);
      return res.status(500).json({ error: "Invalid response from yt-dlp API" });
    }

    res.status(200).json({
      title: data.title,
      thumbnail: data.thumbnail,
      downloadUrl: data.download,
    });
  } catch (error) {
    console.error("API call failed:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
