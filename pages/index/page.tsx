// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AnyVid - All-in-One Video Downloader</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          AnyVid
        </h1>
        <p className="text-lg md:text-2xl text-center mb-8">
          Download videos from YouTube, Instagram, TikTok, and more.
        </p>
        <div className="w-full max-w-xl flex flex-col sm:flex-row gap-4">
          <input
            type="url"
            placeholder="Paste video URL here..."
            className="flex-1 p-3 rounded-lg text-black"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Download
          </button>
        </div>
      </main>
    </>
  );
}
