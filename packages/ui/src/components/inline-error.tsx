import { cn } from "../lib/cn";

export function InlineError({
  className,
  message,
}: {
  className?: string;
  message?: string | null;
}) {
  if (!message) {
    return null;
  }

  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border border-[color:color-mix(in_srgb,var(--color-danger)_32%,white)] bg-[color:color-mix(in_srgb,var(--color-danger)_9%,white)] px-4 py-3 text-sm text-danger",
        className,
      )}
      role="alert"
    >
      {message}
    </div>
  );
}
