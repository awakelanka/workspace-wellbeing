import type { CurrentUser } from "@workspace-wellbeing/auth";

import { getPlatformModules } from "../modules/registry";

export type PlatformNavigationItem = {
  description?: string;
  href: string;
  key: string;
  label: string;
  match?: "exact" | "prefix";
};

export type PlatformNavigationGroup = {
  items: PlatformNavigationItem[];
  key: string;
  label: string;
};

export function getVisibleNavigation(user: CurrentUser) {
  return getPlatformModules(user).map((moduleDefinition) => ({
    key: moduleDefinition.key,
    href: moduleDefinition.href,
    label: moduleDefinition.label,
    description: moduleDefinition.description,
    match: "prefix" as const,
  }));
}

export function getPlatformNavigation(
  user: CurrentUser,
): PlatformNavigationGroup[] {
  const moduleItems = getVisibleNavigation(user);
  const groups: PlatformNavigationGroup[] = [
    {
      key: "workspace",
      label: "Workspace",
      items: [
        {
          key: "dashboard",
          href: "/dashboard",
          label: "Dashboard",
          description: "Overview, summary cards, and module availability.",
          match: "exact",
        },
      ],
    },
    {
      key: "modules",
      label: "Modules",
      items: moduleItems,
    },
  ];

  return groups.filter((group) => group.items.length > 0);
}
