import { Card, LoginForm, LoginShell } from "@workspace-wellbeing/ui";

import { loginWithDemoCredentials } from "./actions";

export default function LoginPage() {
  return (
    <LoginShell
      aside={
        <>
          <Card className="noise-border space-y-3" tone="muted">
            <h2 className="text-lg font-semibold text-foreground">
              Seeded demo accounts
            </h2>
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Admin</strong>:{" "}
                <span className="font-mono text-xs text-foreground">
                  dana.support@example.com / workspace-admin
                </span>
              </li>
              <li>
                <strong className="text-foreground">User</strong>:{" "}
                <span className="font-mono text-xs text-foreground">
                  alex.booker@example.com / workspace-user
                </span>
              </li>
            </ul>
          </Card>
          <Card className="noise-border space-y-3" tone="muted">
            <h2 className="text-lg font-semibold text-foreground">
              MVP UI goals
            </h2>
            <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
              <li>Shared auth components and theme tokens.</li>
              <li>Validation, loading, and error affordances.</li>
              <li>
                Server-side session writing with Laravel-ready flow boundaries.
              </li>
            </ul>
          </Card>
        </>
      }
      brand="Workspace Wellbeing"
      description="Sign in to the shared platform shell. This MVP uses seeded credentials while preserving the same server-side boundaries the Laravel-backed flow will use later."
      eyebrow="Public entry"
      title="A single UI system across every app surface."
    >
      <LoginForm
        action={loginWithDemoCredentials}
        defaultEmail="dana.support@example.com"
        forgotPasswordHref="mailto:support@workspace-wellbeing.local"
        subtitle="Use one of the seeded accounts to validate the shared login experience, role-based shell, and module-aware navigation."
      />
    </LoginShell>
  );
}
