import { redirect } from "next/navigation";
import { cache } from "react";

import { getSession } from "./get-session";

export const verifySession = cache(async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return session;
});
