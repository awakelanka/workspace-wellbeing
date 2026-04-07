import { type CurrentUser, canAccessModule } from "@workspace-wellbeing/auth";

export type PlatformModuleDefinition = {
  key: "tech-support";
  accent?: "primary" | "success" | "warning";
  label: string;
  href: string;
  description: string;
  summary: string;
  isVisible(user: CurrentUser): boolean;
};

const modules: PlatformModuleDefinition[] = [
  {
    accent: "primary",
    key: "tech-support",
    label: "Tech Support",
    href: "/tech-support",
    description:
      "Ticket operations, agent workflow, and file-based troubleshooting.",
    summary:
      "Shared table, badge, and dashboard patterns validate the first feature module end-to-end.",
    isVisible: (user) => canAccessModule(user, "tech-support"),
  },
];

export function getPlatformModules(user: CurrentUser) {
  return modules.filter((moduleDefinition) => moduleDefinition.isVisible(user));
}
