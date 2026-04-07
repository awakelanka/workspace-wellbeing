import type { CurrentUser } from "@workspace-wellbeing/auth";

export type TicketStatus = "Open" | "In Progress" | "Resolved";
export type TicketPriority = "Low" | "Normal" | "High";

export type TicketSummary = {
  id: string;
  name: string;
  typeName: string;
  priority: TicketPriority;
  status: TicketStatus;
  ownerId: string;
  ownerName: string;
  createdAt: string;
  elapsedHours: number;
};

export type TicketDetail = TicketSummary & {
  assignee: string;
  description: string;
  files: Array<{ id: string; name: string; sizeLabel: string }>;
  comments: Array<{
    id: string;
    author: string;
    body: string;
    createdAt: string;
  }>;
};

const tickets: TicketDetail[] = [
  {
    id: "TS-1042",
    name: "VPN profile stops syncing after password reset",
    typeName: "Access",
    priority: "High",
    status: "Open",
    ownerId: "user-1",
    ownerName: "Alex Booker",
    createdAt: "2026-04-04T09:00:00.000Z",
    elapsedHours: 26,
    assignee: "TechSupport queue",
    description:
      "Re-authentication succeeds on web but desktop clients keep stale credentials.",
    files: [{ id: "file-1", name: "vpn-log.txt", sizeLabel: "14 KB" }],
    comments: [
      {
        id: "comment-1",
        author: "Dana Support",
        body: "Investigating the profile cache path.",
        createdAt: "2026-04-04T13:30:00.000Z",
      },
    ],
  },
  {
    id: "TS-1034",
    name: "Laptop camera permission missing in browser",
    typeName: "Hardware",
    priority: "Normal",
    status: "In Progress",
    ownerId: "user-2",
    ownerName: "Morgan Perez",
    createdAt: "2026-04-01T14:10:00.000Z",
    elapsedHours: 72,
    assignee: "Jamie Support",
    description:
      "The browser never prompts for access after OS privacy changes.",
    files: [
      { id: "file-2", name: "device-checklist.pdf", sizeLabel: "110 KB" },
    ],
    comments: [
      {
        id: "comment-2",
        author: "Jamie Support",
        body: "Asked the user to reset browser device permissions.",
        createdAt: "2026-04-02T09:05:00.000Z",
      },
    ],
  },
  {
    id: "TS-0991",
    name: "Password manager browser extension onboarding",
    typeName: "Software",
    priority: "Low",
    status: "Resolved",
    ownerId: "user-1",
    ownerName: "Alex Booker",
    createdAt: "2026-03-20T08:00:00.000Z",
    elapsedHours: 5,
    assignee: "Dana Support",
    description: "Needed deployment notes for the managed extension profile.",
    files: [{ id: "file-3", name: "policy.png", sizeLabel: "82 KB" }],
    comments: [
      {
        id: "comment-3",
        author: "Dana Support",
        body: "Extension policy is now pushed via MDM.",
        createdAt: "2026-03-20T11:45:00.000Z",
      },
    ],
  },
];

function canSeeAllTickets(user: CurrentUser) {
  return (
    user.roles.includes("super_admin") ||
    user.roles.includes("techsupport_admin")
  );
}

function scopeTickets(user: CurrentUser) {
  if (canSeeAllTickets(user)) {
    return tickets;
  }

  return tickets.filter((ticket) => ticket.ownerId === user.id);
}

export async function getTicketStats(user: CurrentUser) {
  const visibleTickets = scopeTickets(user);

  return {
    open: visibleTickets.filter((ticket) => ticket.status === "Open").length,
    inProgress: visibleTickets.filter(
      (ticket) => ticket.status === "In Progress",
    ).length,
    resolved: visibleTickets.filter((ticket) => ticket.status === "Resolved")
      .length,
  };
}

export async function getActiveTickets(user: CurrentUser) {
  return scopeTickets(user).filter((ticket) => ticket.status !== "Resolved");
}

export async function getResolvedTickets(user: CurrentUser) {
  return scopeTickets(user).filter((ticket) => ticket.status === "Resolved");
}

export async function getTicketDetail(user: CurrentUser, ticketId: string) {
  const ticket = scopeTickets(user).find((item) => item.id === ticketId);
  return ticket ?? null;
}
