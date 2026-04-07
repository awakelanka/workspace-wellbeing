export type Permission =
  | "techsupport/ticket"
  | "techsupport/ticket/resolved"
  | "techsupport/ticket/create"
  | "techsupport/ticket/view/*"
  | "techsupport/ticket/status/*"
  | "techsupport/ticket/api/ticket-stats"
  | "techsupport/ticket/upload/*";

export type Role = "super_admin" | "techsupport_admin" | "techsupport_user";

export type CurrentUser = {
  id: string;
  email: string;
  name: string;
  appVariant: string;
  permissions: readonly Permission[];
  roles: readonly Role[];
};

export type SessionPayload = {
  expiresAt: string;
  issuedAt: string;
  user: CurrentUser;
};
