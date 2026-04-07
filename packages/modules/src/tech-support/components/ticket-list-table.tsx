import type { CurrentUser } from "@workspace-wellbeing/auth";

import { DataTable } from "@workspace-wellbeing/ui";
import Link from "next/link";
import { canChangeTicketStatus, canUploadTicketFiles } from "../permissions";
import { techSupportRoutes } from "../routes";
import type { TechSupportTicket } from "../schemas";
import { TicketPriorityBadge } from "./ticket-priority-badge";
import { TicketStatusBadge } from "./ticket-status-badge";

export function TicketListTable({
  tickets,
  user,
}: {
  tickets: TechSupportTicket[];
  user: CurrentUser;
}) {
  return (
    <DataTable
      columns={["Ticket", "Type", "Priority", "Status", "Owner", "Actions"]}
      rowKeys={tickets.map((ticket) => ticket.id)}
      rows={tickets.map((ticket) => [
        <div className="space-y-1" key={`${ticket.id}-identity`}>
          <p className="font-semibold">{ticket.name}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {ticket.id}
          </p>
        </div>,
        ticket.typeName,
        <TicketPriorityBadge
          key={`${ticket.id}-priority`}
          priority={ticket.priority}
        />,
        <TicketStatusBadge
          key={`${ticket.id}-status`}
          status={ticket.status}
        />,
        <div className="space-y-1" key={`${ticket.id}-owner`}>
          <p>{ticket.ownerName}</p>
          <p className="text-xs text-[var(--color-muted)]">
            {ticket.elapsedHours}h elapsed
          </p>
        </div>,
        <div
          className="flex flex-col gap-2 text-sm"
          key={`${ticket.id}-actions`}
        >
          <Link
            className="font-semibold text-[var(--color-primary)]"
            href={techSupportRoutes.detail(ticket.id)}
          >
            View ticket
          </Link>
          {canChangeTicketStatus(user) ? (
            <span className="text-[var(--color-muted)]">
              Status workflow ready
            </span>
          ) : null}
          {canUploadTicketFiles(user, ticket) ? (
            <span className="text-[var(--color-muted)]">
              Upload endpoint enabled
            </span>
          ) : null}
        </div>,
      ])}
    />
  );
}
