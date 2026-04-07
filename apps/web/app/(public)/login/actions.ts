"use server";

import { writeSessionCookie } from "@workspace-wellbeing/auth";
import type { LoginActionState } from "@workspace-wellbeing/ui";
import { redirect } from "next/navigation";

import {
  demoCredentialProfiles,
  demoProfiles,
} from "../../api/auth/demo-profiles";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function loginWithDemoCredentials(
  _previousState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  const fieldErrors: LoginActionState["fieldErrors"] = {};

  if (!email) {
    fieldErrors.email = "Email is required.";
  } else if (!isValidEmail(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (!password) {
    fieldErrors.password = "Password is required.";
  }

  if (fieldErrors.email || fieldErrors.password) {
    return {
      email,
      fieldErrors,
    };
  }

  const credentialProfile = demoCredentialProfiles.find(
    (profile) =>
      demoProfiles[profile.profileKey].email.toLowerCase() === email &&
      profile.password === password,
  );

  if (!credentialProfile) {
    return {
      email,
      error:
        "Invalid credentials. Use one of the seeded demo accounts to continue.",
    };
  }

  await writeSessionCookie({
    issuedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(),
    user: demoProfiles[credentialProfile.profileKey],
  });

  redirect("/dashboard");
}
