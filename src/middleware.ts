import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales, type Locale } from "@/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";

function isSupportedLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Parses an `Accept-Language` header value, respecting `q` weights, and
 * returns the best supported locale (or null if none match).
 * Dependency-free: no `negotiator`/`@formatjs` packages involved.
 */
function pickLocaleFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;

  const candidates = header
    .split(",")
    .map((part) => {
      const [rawTag, ...params] = part.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const q = qParam ? parseFloat(qParam.trim().slice(2)) : 1;

      return { tag: rawTag.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .filter(({ tag }) => tag.length > 0 && tag !== "*")
    .sort((a, b) => b.q - a.q);

  for (const { tag } of candidates) {
    const baseTag = tag.split("-")[0];

    if (isSupportedLocale(tag)) return tag;
    if (isSupportedLocale(baseTag)) return baseTag;
  }

  return null;
}

function resolveLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (cookieLocale && isSupportedLocale(cookieLocale)) {
    return cookieLocale;
  }

  const negotiatedLocale = pickLocaleFromAcceptLanguage(
    request.headers.get("accept-language")
  );

  if (negotiatedLocale) {
    return negotiatedLocale;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = resolveLocale(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  // 307 (temporary) on purpose: the destination is negotiated per request from
  // the cookie and Accept-Language, so it changes between visits. A permanent
  // redirect would be cached by the browser and would pin the first visitor's
  // locale forever, bypassing this middleware entirely on later visits.
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
