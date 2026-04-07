import { SESSION_COOKIE } from "@workspace-wellbeing/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedPrefixes = ["/dashboard", "/tech-support"];
const publicPrefixes = ["/login", "/api/auth/callback"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get(SESSION_COOKIE)?.value);

  if (
    protectedPrefixes.some((prefix) => pathname.startsWith(prefix)) &&
    !hasSession
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    publicPrefixes.some((prefix) => pathname.startsWith(prefix)) &&
    hasSession
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/tech-support/:path*",
    "/login",
    "/api/auth/callback",
  ],
};
