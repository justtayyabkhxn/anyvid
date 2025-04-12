"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleDownload = async () => {
    if (!url) return alert("Please paste a valid URL");

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (data.thumbnail && data.downloadUrl) {
        router.push(
          `/preview?thumbnail=${encodeURIComponent(
            data.thumbnail
          )}&downloadUrl=${encodeURIComponent(data.downloadUrl)}`
        );
      } else {
        alert("Could not process this video. Try another.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>AnyVid - All-in-One Video Downloader</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-800 via-black to-gray-600 text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-orange-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text p-2">
          | AnyVid |
        </h1>
        <h1 className="text-5xl md:text-5xl font-bold mb-4 text-center">📹</h1>

        <p className="text-lg md:text-2xl text-center mb-8 mt-20">
          Download videos from YouTube, Instagram, TikTok, and more.
        </p>

        <div className="w-full max-w-xl flex flex-col sm:flex-row gap-4">
          <input
            type="url"
            placeholder="Paste video URL here..."
            className="flex-1 p-3 rounded-lg text-white border-2 bg-transparent"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-m px-3 py-3 rounded-lg cursor-pointer"
          >
            Download
          </button>
        </div>

        <div className="mt-4">
          <Link href="/how-to">
            <button className="text-m text-red-400 hover:text-blue-300 underline transition cursor-pointer">
              How to use?
            </button>
          </Link>
        </div>

        <Footer />
      </main>
    </>
  );
}
