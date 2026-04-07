import { Badge } from "@workspace-wellbeing/ui";

import type { TechSupportTicket } from "../schemas";

export function TicketStatusBadge({
  status,
}: Pick<TechSupportTicket, "status">) {
  const tone =
    status === "Resolved"
      ? "success"
      : status === "In Progress"
        ? "accent"
        : "warning";
  return <Badge tone={tone}>{status}</Badge>;
}
