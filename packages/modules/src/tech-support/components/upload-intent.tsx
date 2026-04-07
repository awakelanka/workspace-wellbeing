import { Card } from "@workspace-wellbeing/ui";

export function UploadIntent({ ticketId }: { ticketId: string }) {
  return (
    <Card className="space-y-3">
      <h2 className="text-lg font-semibold">Upload flow</h2>
      <p className="text-sm text-[var(--color-muted)]">
        Route handler scaffold is live at{" "}
        <code>/api/tech-support/upload/{ticketId}</code>. Contract binding
        remains pending.
      </p>
    </Card>
  );
}
