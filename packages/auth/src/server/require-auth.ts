import { getCurrentUser } from "./get-current-user";

export async function requireAuth() {
  return getCurrentUser();
}
