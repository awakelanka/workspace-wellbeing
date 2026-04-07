import type { InputHTMLAttributes } from "react";

import { cn } from "../lib/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function Input({ className, invalid = false, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "min-h-11 w-full rounded-[var(--radius-md)] border bg-surface px-4 py-3 text-sm text-foreground shadow-[var(--shadow-xs)] outline-none transition placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring",
        invalid
          ? "border-danger focus-visible:border-danger"
          : "border-border focus-visible:border-primary",
        className,
      )}
      {...props}
    />
  );
}
