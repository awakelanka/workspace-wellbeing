export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="panel-surface flex flex-col items-start gap-2 border border-dashed p-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
        {description}
      </p>
    </div>
  );
}
