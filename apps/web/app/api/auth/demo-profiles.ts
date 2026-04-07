import type { CurrentUser } from "@workspace-wellbeing/auth";

type DemoProfileKey = "admin" | "user";

type DemoCredentialProfile = {
  password: string;
  profileKey: DemoProfileKey;
};

export const demoProfiles: Record<DemoProfileKey, CurrentUser> = {
  admin: {
    id: "agent-1",
    name: "Dana Support",
    email: "dana.support@example.com",
    appVariant: "workspace-wellbeing",
    roles: ["techsupport_admin"],
    permissions: [
      "techsupport/ticket",
      "techsupport/ticket/resolved",
      "techsupport/ticket/create",
      "techsupport/ticket/view/*",
      "techsupport/ticket/status/*",
      "techsupport/ticket/api/ticket-stats",
      "techsupport/ticket/upload/*",
    ],
  },
  user: {
    id: "user-1",
    name: "Alex Booker",
    email: "alex.booker@example.com",
    appVariant: "workspace-wellbeing",
    roles: ["techsupport_user"],
    permissions: [
      "techsupport/ticket",
      "techsupport/ticket/create",
      "techsupport/ticket/view/*",
      "techsupport/ticket/resolved",
      "techsupport/ticket/api/ticket-stats",
      "techsupport/ticket/upload/*",
    ],
  },
};

export const demoCredentialProfiles: DemoCredentialProfile[] = [
  {
    profileKey: "admin",
    password: "workspace-admin",
  },
  {
    profileKey: "user",
    password: "workspace-user",
  },
];
