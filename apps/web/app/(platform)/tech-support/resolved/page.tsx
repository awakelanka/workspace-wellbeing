import { techSupport } from "@workspace-wellbeing/modules";
import { EmptyState, PageHeader } from "@workspace-wellbeing/ui";

export default async function ResolvedTicketsPage() {
  const { tickets, user } = await techSupport.getTechSupportResolvedTickets();

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Tech Support"
        title="Resolved tickets"
        description="Separate route and permission boundary for closed work. This keeps parity with the legacy resolved-list surface."
      />
      {tickets.length === 0 ? (
        <EmptyState
          title="No resolved tickets"
          description="Resolved work will appear here once the backend contract is connected."
        />
      ) : (
        <techSupport.TicketListTable tickets={tickets} user={user} />
      )}
    </div>
  );
}
