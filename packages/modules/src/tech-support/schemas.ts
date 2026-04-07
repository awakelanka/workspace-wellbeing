export type TechSupportStats = {
  open: number;
  inProgress: number;
  resolved: number;
};

export type TechSupportTicket = {
  id: string;
  name: string;
  typeName: string;
  priority: "Low" | "Normal" | "High";
  status: "Open" | "In Progress" | "Resolved";
  ownerId: string;
  ownerName: string;
  createdAt: string;
  elapsedHours: number;
};

export type TechSupportTicketDetail = TechSupportTicket & {
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
