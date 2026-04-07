import type { HTMLAttributes } from "react";

import { cn } from "../lib/cn";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("flex flex-col gap-4", className)} {...props} />
  );
}
