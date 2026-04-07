import { Badge } from "@workspace-wellbeing/ui";

import type { TechSupportTicket } from "../schemas";

export function TicketPriorityBadge({
  priority,
}: Pick<TechSupportTicket, "priority">) {
  const tone =
    priority === "High"
      ? "danger"
      : priority === "Normal"
        ? "accent"
        : "neutral";
  return <Badge tone={tone}>{priority}</Badge>;
}
