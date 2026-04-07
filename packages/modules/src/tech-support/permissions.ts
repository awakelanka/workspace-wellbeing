import {
  type CurrentUser,
  hasPermission,
  hasRole,
} from "@workspace-wellbeing/auth";

import type { TechSupportTicket } from "./schemas";

export const techSupportPermissionMap = {
  module: "techsupport/ticket",
  resolved: "techsupport/ticket/resolved",
  create: "techsupport/ticket/create",
  detail: "techsupport/ticket/view/*",
  status: "techsupport/ticket/status/*",
  stats: "techsupport/ticket/api/ticket-stats",
  upload: "techsupport/ticket/upload/*",
} as const;

export function canViewTechSupportModule(user: CurrentUser) {
  return hasPermission(user, techSupportPermissionMap.module);
}

export function canViewResolvedTickets(user: CurrentUser) {
  return hasPermission(user, techSupportPermissionMap.resolved);
}

export function canCreateTicket(user: CurrentUser) {
  return hasPermission(user, techSupportPermissionMap.create);
}

export function canViewTicket(user: CurrentUser, ticket: TechSupportTicket) {
  return (
    hasPermission(user, techSupportPermissionMap.detail) &&
    (ticket.ownerId === user.id ||
      hasRole(user, "techsupport_admin") ||
      hasRole(user, "super_admin"))
  );
}

export function canChangeTicketStatus(user: CurrentUser) {
  return hasPermission(user, techSupportPermissionMap.status);
}

export function canUploadTicketFiles(
  user: CurrentUser,
  ticket: TechSupportTicket,
) {
  return (
    hasPermission(user, techSupportPermissionMap.upload) &&
    (ticket.ownerId === user.id ||
      hasRole(user, "techsupport_admin") ||
      hasRole(user, "super_admin"))
  );
}
