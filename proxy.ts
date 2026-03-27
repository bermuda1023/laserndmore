import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n/config";

function hasLocale(pathname: string) {
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

function extractLocale(pathname: string) {
  const segment = pathname.split("/")[1];
  return locales.find((locale) => locale === segment);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (hasLocale(pathname)) {
    const locale = extractLocale(pathname);
    const response = NextResponse.next();
    if (locale) {
      response.cookies.set("NEXT_LOCALE", locale, {
        path: "/",
        sameSite: "lax"
      });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set("NEXT_LOCALE", defaultLocale, {
    path: "/",
    sameSite: "lax"
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"]
};
