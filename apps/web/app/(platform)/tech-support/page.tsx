import { techSupport } from "@workspace-wellbeing/modules";
import { Button, PageHeader, Section } from "@workspace-wellbeing/ui";
import Link from "next/link";

export default async function TechSupportPage() {
  const { stats, tickets, user } = await techSupport.getTechSupportOverview();

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Module"
        title="Tech Support"
        description="Server-first module composition with DTO-backed list rendering, RBAC-aware navigation, and upload/download entry point scaffolding."
        actions={
          <div className="flex gap-3">
            <Link href={techSupport.techSupportRoutes.resolved}>
              <Button variant="secondary">Resolved tickets</Button>
            </Link>
            <Link href={techSupport.techSupportRoutes.create}>
              <Button>Create ticket</Button>
            </Link>
          </div>
        }
      />
      <Section>
        <techSupport.TicketStatsCards stats={stats} />
      </Section>
      <Section>
        <techSupport.TicketListTable tickets={tickets} user={user} />
      </Section>
    </div>
  );
}
