import type { ReactNode } from "react";

import { Card } from "./card";

export function Navbar({
  actions,
  subtitle,
  title,
}: {
  actions?: ReactNode;
  subtitle: string;
  title: string;
}) {
  return (
    <Card className="noise-border mb-6 flex flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {subtitle}
        </p>
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      </div>
      {actions ? (
        <div className="flex items-center gap-3">{actions}</div>
      ) : null}
    </Card>
  );
}
