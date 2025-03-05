import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

// List of protected routes
const protectedRoutes = ["/profile", "/casino/game", "/sports/game"];

export default function middleware(request: NextRequest) {
  // Run the next-intl middleware first
  const response = intlMiddleware(request);

  // Check if the user is authenticated (for now authToken)
  const isAuthenticated = Boolean(request.cookies.get("authToken"));

  // Extract pathname without locale prefix
  const { pathname } = request.nextUrl;
  const pathWithoutLocale = pathname.replace(/^\/(en|zh|th)/, "");

  // Check if the path (without locale) is in the protected routes
  if (
    protectedRoutes.some((route) => pathWithoutLocale.startsWith(route)) &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|zh|th)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
