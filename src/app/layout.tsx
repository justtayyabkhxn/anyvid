import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnyVid - Video Downloader",
  description: "Download videos from anywhere easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
