import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

import "../globals.css";

import { Footer, Header } from "@/components/layout";
import { ThemeProvider } from "@/components/common";

import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SITE_URL } from "@/lib/site";
import { SKILL_CATEGORIES } from "@/data";

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

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
};

// Static, pre-generated share cards (public/social-card-{lang}.jpg). Rendering
// these on-demand via next/og produced PNGs over 300KB, large enough that
// WhatsApp silently drops the link preview, so they're committed as static
// JPEGs instead of a dynamic opengraph-image/twitter-image route.
const SOCIAL_CARD_PATH: Record<Locale, string> = {
  en: "/social-card-en.jpg",
  es: "/social-card-es.jpg",
};

const keywords = SKILL_CATEGORIES.flatMap((category) =>
  category.skills.map((skill) => skill.name)
);

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const dict = getDictionary(params.lang);
  const otherLocale: Locale = params.lang === "en" ? "es" : "en";

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords,
    authors: [{ name: "Sebastián Meneses", url: SITE_URL }],
    creator: "Sebastián Meneses",
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      url: `/${params.lang}`,
      siteName: "Sebastián Meneses",
      title: dict.metadata.title,
      description: dict.metadata.description,
      locale: OG_LOCALE[params.lang],
      alternateLocale: OG_LOCALE[otherLocale],
      images: [
        {
          url: SOCIAL_CARD_PATH[params.lang],
          width: 1200,
          height: 630,
          alt: dict.metadata.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [
        {
          url: SOCIAL_CARD_PATH[params.lang],
          alt: dict.metadata.ogImageAlt,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

function isSupportedLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export default function RootLayout({
  children,
  params,
}: Readonly<LangLayoutProps>) {
  // Requests for a literal top-level path with no matching static/convention
  // file (e.g. /favicon.ico, which no longer exists now that the icon is
  // served via icon.svg + apple-icon.png) fall through to this dynamic
  // segment with an invalid `lang` value. Without this guard that renders a
  // 500 instead of a clean 404, which is bad for crawlability.
  if (!isSupportedLocale(params.lang)) {
    notFound();
  }

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
