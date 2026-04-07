import { Card } from "@workspace-wellbeing/ui";
import Link from "next/link";

export function TicketFiles({
  files,
}: {
  files: Array<{ id: string; name: string; sizeLabel: string }>;
}) {
  return (
    <Card className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Files</h2>
        <p className="text-sm text-[var(--color-muted)]">
          Browser flows stay in Next route handlers.
        </p>
      </div>
      <ul className="space-y-3">
        {files.map((file) => (
          <li className="flex items-center justify-between gap-3" key={file.id}>
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-[var(--color-muted)]">
                {file.sizeLabel}
              </p>
            </div>
            <Link
              className="text-sm font-semibold text-[var(--color-primary)]"
              href={`/api/tech-support/download/${file.id}`}
            >
              Download
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
