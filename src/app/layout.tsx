// app/layout.tsx
import './globals.css';
import { Yatra_One } from 'next/font/google';

const yatra = Yatra_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: 'AnyVid',
  description: 'All-in-one video downloader',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={yatra.className}>
        {children}
      </body>
    </html>
  );
}
