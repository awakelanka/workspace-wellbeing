import { Card } from "./card";

export function StatCard({
  detail,
  label,
  value,
}: {
  detail: string;
  label: string;
  value: string;
}) {
  return (
    <Card className="noise-border space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="text-4xl font-semibold tracking-tight text-gradient-brand">
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{detail}</p>
    </Card>
  );
}
