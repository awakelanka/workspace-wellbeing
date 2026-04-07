import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import { cn } from "../lib/cn";
import { Input } from "./input";

export function FieldLabel({
  children,
  htmlFor,
}: {
  children: string;
  htmlFor?: string;
}) {
  return (
    <label
      className="text-sm font-medium text-muted-foreground"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export function FieldMessage({
  children,
  tone = "default",
}: {
  children: string;
  tone?: "default" | "danger";
}) {
  return (
    <p
      className={cn(
        "text-sm",
        tone === "danger" ? "text-danger" : "text-muted-foreground",
      )}
    >
      {children}
    </p>
  );
}

export function TextInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <Input className={className} {...props} />;
}

export function SelectInput({
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "min-h-11 rounded-[var(--radius-md)] border border-border bg-surface px-4 py-3 text-sm text-foreground shadow-[var(--shadow-xs)] outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    />
  );
}

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 rounded-[var(--radius-lg)] border border-border bg-surface px-4 py-3 text-sm text-foreground shadow-[var(--shadow-xs)] outline-none transition placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    />
  );
}
