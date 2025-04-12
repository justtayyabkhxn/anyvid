"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function PreviewClient() {
  const searchParams = useSearchParams();
  const thumbnail = searchParams?.get("thumbnail");
  const downloadUrl = searchParams?.get("downloadUrl");
  const title = searchParams?.get("title");

  if (!thumbnail || !downloadUrl) {
    return (
      <div className="text-center mt-20 text-red-500">
        Missing data... Please go back and try again.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Your Video is Ready</h1>
      <h2 className="text-2xl font-semibold mb-6">{title || "No title found"}</h2>

      <div className="relative w-[300px] h-[400px] mb-8">
        <Image
          src={thumbnail}
          alt="Video Thumbnail"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-700 transition"
      >
        Download HD
      </a>
    </div>
  );
}
