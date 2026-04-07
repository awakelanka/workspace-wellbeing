import { Card } from "@workspace-wellbeing/ui";

import type { TechSupportStats } from "../schemas";

export function TicketStatsCards({ stats }: { stats: TechSupportStats }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="space-y-2">
        <p className="text-sm text-[var(--color-muted)]">Open</p>
        <p className="text-4xl font-semibold">{stats.open}</p>
      </Card>
      <Card className="space-y-2">
        <p className="text-sm text-[var(--color-muted)]">In Progress</p>
        <p className="text-4xl font-semibold">{stats.inProgress}</p>
      </Card>
      <Card className="space-y-2">
        <p className="text-sm text-[var(--color-muted)]">Resolved</p>
        <p className="text-4xl font-semibold">{stats.resolved}</p>
      </Card>
    </div>
  );
}
