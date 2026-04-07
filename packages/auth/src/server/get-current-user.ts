import { cache } from "react";

import { verifySession } from "./verify-session";

export const getCurrentUser = cache(async () => {
  const session = await verifySession();
  return session.user;
});
