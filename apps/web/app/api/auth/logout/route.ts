import { clearSessionCookie } from "@workspace-wellbeing/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await clearSessionCookie();
  return NextResponse.redirect(new URL("/login", request.url));
}
