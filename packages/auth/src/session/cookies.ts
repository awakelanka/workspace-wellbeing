import { cookies } from "next/headers";

import type { SessionPayload } from "../permissions/types";

export const SESSION_COOKIE = "ww_session";

function encodeSession(payload: SessionPayload) {
  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
}

function decodeSession(value: string) {
  return JSON.parse(
    Buffer.from(value, "base64url").toString("utf8"),
  ) as SessionPayload;
}

export async function readSessionCookie() {
  const store = await cookies();
  const value = store.get(SESSION_COOKIE)?.value;

  if (!value) {
    return null;
  }

  try {
    return decodeSession(value);
  } catch {
    return null;
  }
}

export async function writeSessionCookie(payload: SessionPayload) {
  const store = await cookies();
  store.set(SESSION_COOKIE, encodeSession(payload), {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    expires: new Date(payload.expiresAt),
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
