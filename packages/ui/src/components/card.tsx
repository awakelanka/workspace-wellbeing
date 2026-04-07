import type { HTMLAttributes } from "react";

import { cn } from "../lib/cn";

type CardTone = "default" | "muted" | "interactive";

const toneClasses: Record<CardTone, string> = {
  default: "panel-surface",
  muted: "panel-subtle",
  interactive:
    "panel-surface transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]",
};

export function Card({
  className,
  tone = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & { tone?: CardTone }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden p-6",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
