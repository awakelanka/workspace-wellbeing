"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "./button";
import { Card } from "./card";
import { FieldLabel, FieldMessage } from "./field";
import { InlineError } from "./inline-error";
import { Input } from "./input";

export type LoginActionState = {
  email?: string;
  error?: string;
  fieldErrors?: {
    email?: string;
    password?: string;
  };
};

const initialState: LoginActionState = {};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" disabled={pending} type="submit">
      {pending ? "Signing in..." : label}
    </Button>
  );
}

export function LoginForm({
  action,
  defaultEmail,
  forgotPasswordHref,
  submitLabel = "Sign in",
  subtitle,
  title = "Welcome back",
}: {
  action: (
    state: LoginActionState,
    formData: FormData,
  ) => Promise<LoginActionState>;
  defaultEmail?: string;
  forgotPasswordHref?: string;
  submitLabel?: string;
  subtitle: string;
  title?: string;
}) {
  const [state, formAction] = useActionState(action, initialState);

  return (
    <Card className="noise-border w-full max-w-xl space-y-6 p-8 lg:p-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Sign in
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="text-sm leading-7 text-muted-foreground">{subtitle}</p>
      </div>
      <InlineError message={state.error} />
      <form action={formAction} className="space-y-5">
        <div className="space-y-2">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            autoComplete="email"
            defaultValue={state.email ?? defaultEmail}
            id="email"
            invalid={Boolean(state.fieldErrors?.email)}
            name="email"
            placeholder="you@company.com"
            type="email"
          />
          {state.fieldErrors?.email ? (
            <FieldMessage tone="danger">{state.fieldErrors.email}</FieldMessage>
          ) : null}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            {forgotPasswordHref ? (
              <a
                className="text-sm font-medium text-primary"
                href={forgotPasswordHref}
              >
                Forgot password?
              </a>
            ) : null}
          </div>
          <Input
            autoComplete="current-password"
            id="password"
            invalid={Boolean(state.fieldErrors?.password)}
            name="password"
            placeholder="Enter your password"
            type="password"
          />
          {state.fieldErrors?.password ? (
            <FieldMessage tone="danger">
              {state.fieldErrors.password}
            </FieldMessage>
          ) : null}
        </div>
        <SubmitButton label={submitLabel} />
        <p className="text-center text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Shared auth pattern powered by the monorepo UI package
        </p>
      </form>
    </Card>
  );
}
