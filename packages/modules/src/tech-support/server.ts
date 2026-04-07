import {
  getActiveTickets,
  getResolvedTickets as getResolvedTicketsFromApi,
  getTicketDetail as getTicketDetailFromApi,
  getTicketStats,
} from "@workspace-wellbeing/api-client";
import {
  requireAnyPermission,
  requirePermission,
} from "@workspace-wellbeing/auth";

import { techSupportPermissionMap } from "./permissions";

export async function getTechSupportOverview() {
  const user = await requireAnyPermission([
    techSupportPermissionMap.module,
    techSupportPermissionMap.stats,
  ]);

  const [stats, tickets] = await Promise.all([
    getTicketStats(user),
    getActiveTickets(user),
  ]);

  return { stats, tickets, user };
}

export async function getTechSupportResolvedTickets() {
  const user = await requirePermission(techSupportPermissionMap.resolved);
  const tickets = await getResolvedTicketsFromApi(user);

  return { tickets, user };
}

export async function getTechSupportTicketDetail(ticketId: string) {
  const user = await requirePermission(techSupportPermissionMap.detail);
  const ticket = await getTicketDetailFromApi(user, ticketId);

  return { ticket, user };
}

export async function getTechSupportCreateContext() {
  const user = await requirePermission(techSupportPermissionMap.create);

  return {
    user,
    ticketTypes: ["Access", "Hardware", "Software"],
    priorities: ["Low", "Normal", "High"] as const,
  };
}
