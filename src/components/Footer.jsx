"use client";

import { Youtube, Twitter, Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-white mt-16 pt-10 pb-6">
      {/* Glowing top line */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-pulse rounded-full w-3/4 mx-auto mb-8" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold tracking-wide">AnyVid 📹</h2>
          <p className="text-sm text-gray-400">All-in-one video downloader</p>
        </div>

        <div className="flex space-x-5">
          <a
            href="https://www.linkedin.com/in/justtayyabkhan/"
            aria-label="Linkedin"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/justtayyabkhxn"
            aria-label="Twitter"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://github.com/justtayyabkhxn/"
            aria-label="GitHub"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:tayyabkhangk4734@gmail.com"
            aria-label="Email"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Built with ❤️ by{" "}
        <span className="text-white font-medium"><a
            href="https://justtayyabkhan.vercel.app/"
            aria-label="Portfolio"
            target="_blank"
            className="hover:text-red-600 transition"
          >Tayyab Khan</a></span>{" "}
        &nbsp;|&nbsp; &copy; {new Date().getFullYear()} AnyVid. All rights
        reserved.
      </div>
    </footer>
  );
}
