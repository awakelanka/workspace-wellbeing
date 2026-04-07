import { writeSessionCookie } from "@workspace-wellbeing/auth";
import { NextResponse } from "next/server";

import { demoProfiles } from "../demo-profiles";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const profileKey = url.searchParams.get("profile") as
    | keyof typeof demoProfiles
    | null;
  const profile = profileKey ? demoProfiles[profileKey] : null;

  if (!profile) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  await writeSessionCookie({
    issuedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(),
    user: profile,
  });

  return NextResponse.redirect(new URL("/dashboard", request.url));
}
