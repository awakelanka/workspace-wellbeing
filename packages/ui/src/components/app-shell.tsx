import type { ReactNode } from "react";

export function AppShell({
  children,
  navbar,
  sidebar,
}: {
  children: ReactNode;
  navbar: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[var(--container-max)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="app-shell-grid">
        <div className="hidden lg:block">{sidebar}</div>
        <div className="min-w-0">
          {navbar}
          <div>{children}</div>
        </div>
      </div>
      <div className="mt-4 lg:hidden">{sidebar}</div>
    </div>
  );
}
