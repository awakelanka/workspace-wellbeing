import { Button, Card } from "@workspace-wellbeing/ui";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-16">
      <Card className="space-y-4">
        <h1 className="text-3xl font-semibold">Unauthorized</h1>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          Your session is missing or expired. Re-enter through the public login
          surface.
        </p>
        <Link href="/login">
          <Button>Return to login</Button>
        </Link>
      </Card>
    </main>
  );
}
