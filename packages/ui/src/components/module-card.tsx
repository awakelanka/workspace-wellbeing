import Link from "next/link";

import { Badge } from "./badge";
import { Card } from "./card";

export function ModuleCard({
  accent = "primary",
  description,
  href,
  label,
  summary,
}: {
  accent?: "primary" | "success" | "warning";
  description: string;
  href: string;
  label: string;
  summary: string;
}) {
  return (
    <Card className="noise-border space-y-5" tone="interactive">
      <div className="space-y-3">
        <Badge tone={accent}>Module</Badge>
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-foreground">{label}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <p className="text-sm leading-7 text-muted-foreground">{summary}</p>
      <Link className="text-sm font-semibold text-primary" href={href}>
        Open module
      </Link>
    </Card>
  );
}
