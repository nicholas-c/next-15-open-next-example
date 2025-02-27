import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(
    "middleware",
    request.nextUrl,
    request.nextUrl.locale,
    request.nextUrl.defaultLocale
  );

  // Only adding as headers to render response on the page
  return NextResponse.next({
    headers: {
      middlewareLocale: request.nextUrl.locale,
      middlewareDefaultLocale: request.nextUrl.defaultLocale!,
    },
  });
}

export const config = {
  matcher: ["/", "/es"],
};
