import type { ReactNode } from "react";

export function LoginShell({
  aside,
  brand,
  children,
  description,
  eyebrow,
  title,
}: {
  aside?: ReactNode;
  brand: string;
  children: ReactNode;
  description: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-10 lg:px-8">
      <div className="grid w-full gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="panel-surface hero-glow noise-border flex min-h-[40rem] flex-col justify-between gap-10 p-8 lg:p-12">
          <div className="relative z-10 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              {eyebrow ?? "Secure workspace"}
            </p>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {brand}
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-foreground lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:text-lg">
                {description}
              </p>
            </div>
          </div>
          {aside ? (
            <div className="relative z-10 grid gap-4 lg:grid-cols-2">
              {aside}
            </div>
          ) : null}
        </section>
        <section className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-xl">{children}</div>
        </section>
      </div>
    </main>
  );
}
