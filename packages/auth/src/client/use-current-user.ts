import type { CurrentUser } from "../permissions/types";

export function useCurrentUser(initialUser: CurrentUser | null) {
  return initialUser;
}
