import { Button, Card } from "@workspace-wellbeing/ui";
import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-16">
      <Card className="space-y-4">
        <h1 className="text-3xl font-semibold">Forbidden</h1>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          Your session is valid, but this route or action is outside your
          assigned permissions.
        </p>
        <Link href="/dashboard">
          <Button>Return to dashboard</Button>
        </Link>
      </Card>
    </main>
  );
}
