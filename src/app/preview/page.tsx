"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const thumbnail = searchParams!.get("thumbnail");
  const downloadUrl = searchParams!.get("downloadUrl");

  if (!thumbnail || !downloadUrl) {
    return (
      <div className="text-center mt-20 text-red-500">
        Missing data... Please go back and try again.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Video is Ready</h1>
      <img
        src={thumbnail}
        alt="Video Thumbnail"
        className="rounded shadow-md max-w-full max-h-[400px] mb-8"
      />
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
