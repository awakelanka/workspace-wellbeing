import type { CurrentUser, Permission, Role } from "./types";

export function hasPermission(user: CurrentUser, permission: Permission) {
  return (
    user.permissions.includes(permission) || user.roles.includes("super_admin")
  );
}

export function hasAnyPermission(user: CurrentUser, permissions: Permission[]) {
  return permissions.some((permission) => hasPermission(user, permission));
}

export function hasRole(user: CurrentUser, role: Role) {
  return user.roles.includes(role);
}

export function canAccessModule(user: CurrentUser, moduleKey: "tech-support") {
  if (moduleKey === "tech-support") {
    return hasAnyPermission(user, [
      "techsupport/ticket",
      "techsupport/ticket/create",
      "techsupport/ticket/resolved",
      "techsupport/ticket/view/*",
    ]);
  }

  return false;
}
