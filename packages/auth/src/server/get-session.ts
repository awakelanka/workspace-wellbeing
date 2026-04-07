import type { SessionPayload } from "../permissions/types";
import { readSessionCookie } from "../session/cookies";

export async function getSession(): Promise<SessionPayload | null> {
  const session = await readSessionCookie();

  if (!session) {
    return null;
  }

  if (Date.parse(session.expiresAt) <= Date.now()) {
    return null;
  }

  return session;
}
