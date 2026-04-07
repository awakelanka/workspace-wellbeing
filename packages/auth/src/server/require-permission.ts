import { redirect } from "next/navigation";
import { hasPermission } from "../permissions/evaluate";
import type { Permission } from "../permissions/types";
import { getCurrentUser } from "./get-current-user";

export async function requirePermission(permission: Permission) {
  const user = await getCurrentUser();

  if (!hasPermission(user, permission)) {
    redirect("/forbidden");
  }

  return user;
}

export async function requireAnyPermission(permissions: Permission[]) {
  const user = await getCurrentUser();

  if (!permissions.some((permission) => hasPermission(user, permission))) {
    redirect("/forbidden");
  }

  return user;
}
