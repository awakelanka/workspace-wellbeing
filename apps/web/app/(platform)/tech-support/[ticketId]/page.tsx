import { techSupport } from "@workspace-wellbeing/modules";
import { Card, PageHeader } from "@workspace-wellbeing/ui";
import { notFound } from "next/navigation";

export default async function TicketDetailPage({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) {
  const { ticketId } = await params;
  const { ticket } = await techSupport.getTechSupportTicketDetail(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Ticket detail"
        title={ticket.name}
        description="Detail route proves package-local DTOs, role-aware file actions, and comment/file sections rendered from the shared shell."
      />
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <techSupport.TicketPriorityBadge priority={ticket.priority} />
            <techSupport.TicketStatusBadge status={ticket.status} />
            <span className="text-sm text-[var(--color-muted)]">
              Assigned to {ticket.assignee}
            </span>
          </div>
          <p className="text-sm leading-8 text-[var(--color-text)]">
            {ticket.description}
          </p>
          <div className="rounded-3xl border border-[color:var(--color-border)] bg-white/60 p-4 text-sm text-[var(--color-muted)]">
            Mutation endpoints for comments and status changes remain
            intentionally deferred to the Laravel contract checkpoint.
          </div>
        </Card>
        <div className="space-y-6">
          <techSupport.TicketFiles files={ticket.files} />
          <techSupport.UploadIntent ticketId={ticket.id} />
        </div>
      </div>
      <techSupport.TicketComments comments={ticket.comments} />
    </div>
  );
}
