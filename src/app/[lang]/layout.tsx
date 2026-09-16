import type { Metadata } from "next";
import localFont from "next/font/local";

import "../globals.css";

import { Footer, Header } from "@/components/layout";
import { ThemeProvider } from "@/components/common";

import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface LangLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const dict = getDictionary(params.lang);

  return {
    metadataBase: new URL("https://sebastianmeneses.vercel.app"),
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<LangLayoutProps>) {
  return (
    // suppressHydrationWarning is required by next-themes: its blocking script
    // sets the theme class on <html> before hydration, so server and client
    // markup intentionally differ on this element.
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header lang={params.lang} />

          <main className="max-w-7xl mx-auto p-6 ">
            {children}
          </main>

          <Footer lang={params.lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
