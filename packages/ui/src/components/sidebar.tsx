"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { cn } from "../lib/cn";

export type SidebarItem = {
  description?: string;
  href: string;
  key: string;
  label: string;
  match?: "exact" | "prefix";
};

export type SidebarGroup = {
  items: SidebarItem[];
  key: string;
  label: string;
};

export function Sidebar({
  brand,
  footer,
  groups,
}: {
  brand: {
    label: string;
    subtitle: string;
  };
  footer?: ReactNode;
  groups: SidebarGroup[];
}) {
  const pathname = usePathname();

  return (
    <aside className="panel-surface noise-border sticky top-6 flex h-[calc(100vh-3rem)] flex-col gap-6 p-5">
      <div className="space-y-3 border-b border-border pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          Platform shell
        </p>
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-primary text-sm font-semibold text-primary-foreground shadow-[var(--shadow-xs)]">
            {brand.label
              .split(" ")
              .slice(0, 2)
              .map((part) => part[0])
              .join("")}
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">
              {brand.label}
            </h1>
          </div>
        </div>
        <div>
          <p className="mt-1 text-sm text-muted-foreground">{brand.subtitle}</p>
        </div>
      </div>
      <div className="flex-1 space-y-6 overflow-y-auto">
        {groups.map((group) => (
          <div className="space-y-2" key={group.key}>
            <p className="px-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {group.label}
            </p>
            <nav className="flex flex-col gap-1">
              {group.items.map((item) => {
                const isActive =
                  item.match === "exact"
                    ? pathname === item.href
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    className={cn(
                      "rounded-[var(--radius-md)] border px-3 py-3 transition",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-xs)]"
                        : "border-transparent bg-transparent hover:border-border hover:bg-surface-muted",
                    )}
                    href={item.href}
                    key={item.key}
                  >
                    <div className="text-sm font-semibold">{item.label}</div>
                    {item.description ? (
                      <div
                        className={cn(
                          "mt-1 text-xs",
                          isActive
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.description}
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
      {footer ? (
        <div className="border-t border-border pt-4">{footer}</div>
      ) : null}
    </aside>
  );
}
