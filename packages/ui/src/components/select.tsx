"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "../lib/cn";

type SelectOption = {
  label: string;
  value: string;
};

export function Select({
  className,
  options,
  placeholder = "Select an option",
  ...props
}: Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, "children"> & {
  className?: string;
  options: SelectOption[];
  placeholder?: string;
}) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className={cn(
          "inline-flex min-h-11 w-full items-center justify-between rounded-[var(--radius-md)] border border-border bg-surface px-4 py-3 text-sm text-foreground shadow-[var(--shadow-xs)] outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring data-[placeholder]:text-muted-foreground",
          className,
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className="text-muted-foreground">
          ▾
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="z-50 overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface shadow-[var(--shadow-md)]"
          position="popper"
        >
          <SelectPrimitive.Viewport className="p-1">
            {options.map((option) => (
              <SelectPrimitive.Item
                className="relative flex cursor-default select-none items-center rounded-[var(--radius-sm)] px-3 py-2 text-sm text-foreground outline-none transition focus:bg-surface-muted"
                key={option.value}
                value={option.value}
              >
                <SelectPrimitive.ItemText>
                  {option.label}
                </SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
