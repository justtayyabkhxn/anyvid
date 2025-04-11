"use client";
import Head from "next/head";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AnyVid - All-in-One Video Downloader</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Yatra+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br  from-gray-800 via-black to-gray-600 text-white flex flex-col items-center justify-center px-4">
        <h1 className=" text-6xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-orange-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text underline ">
          | AnyVid |
        </h1>
        <h1 className="text-3xl md:text-3xl font-bold mb-4 text-center ">📹</h1>

        <p className="text-lg md:text-2xl text-center mb-8 mt-20 ">
          Download videos from YouTube, Instagram, TikTok, and more.
        </p>
        <div className="w-full max-w-xl flex flex-col sm:flex-row gap-4">
          <input
            type="url"
            placeholder="Paste video URL here..."
            className="flex-1 p-3 rounded-lg text-white border-2"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer">
            Download
          </button>
        </div>

        <div className="mt-4">
          <Link href="/how-to">
            <button className="text-m text-red-400 hover:text-blue-300 underline transition">
              How to use?
            </button>
          </Link>
        </div>

        <Footer />
      </main>
    </>
  );
}
