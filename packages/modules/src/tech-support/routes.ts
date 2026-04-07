export const techSupportRoutes = {
  overview: "/tech-support",
  resolved: "/tech-support/resolved",
  create: "/tech-support/create",
  detail: (ticketId: string) => `/tech-support/${ticketId}`,
};
