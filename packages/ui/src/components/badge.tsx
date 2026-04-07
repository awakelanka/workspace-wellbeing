import type { HTMLAttributes } from "react";

import { cn } from "../lib/cn";

type BadgeTone =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "accent";

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-surface-muted text-foreground",
  primary:
    "bg-[color:color-mix(in_srgb,var(--color-primary)_16%,white)] text-primary",
  success:
    "bg-[color:color-mix(in_srgb,var(--color-success)_18%,white)] text-success",
  warning:
    "bg-[color:color-mix(in_srgb,var(--color-warning)_18%,white)] text-warning",
  danger:
    "bg-[color:color-mix(in_srgb,var(--color-danger)_18%,white)] text-danger",
  accent:
    "bg-[color:color-mix(in_srgb,var(--color-primary)_12%,white)] text-primary",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-[var(--radius-pill)] px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em]",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
