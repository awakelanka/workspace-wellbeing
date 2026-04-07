import { Button, Card } from "@workspace-wellbeing/ui";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-16">
      <Card className="space-y-4">
        <h1 className="text-3xl font-semibold">Not found</h1>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          The requested resource does not exist in this scaffold.
        </p>
        <Link href="/dashboard">
          <Button>Return to dashboard</Button>
        </Link>
      </Card>
    </main>
  );
}
