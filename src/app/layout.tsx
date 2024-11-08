import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { Footer, Header } from "@/components/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sebastián Meneses | Desarrollador Front-end",
  description: "Portafolio personal de desarrollador front-end con React.js y Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        
        <main className="max-w-7xl mx-auto p-6 ">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
