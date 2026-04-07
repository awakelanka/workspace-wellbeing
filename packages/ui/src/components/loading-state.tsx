import { cn } from "../lib/cn";

export function LoadingState({
  className,
  label = "Loading",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm text-muted-foreground",
        className,
      )}
    >
      <span className="size-4 animate-spin rounded-full border-2 border-border border-t-primary" />
      <span>{label}</span>
    </div>
  );
}
