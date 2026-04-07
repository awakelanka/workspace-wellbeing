export const appVariants = [
  "workspace-wellbeing",
  "atlas",
  "tempo",
  "harbor",
  "summit",
] as const;

export type AppVariant = (typeof appVariants)[number];

export type AppVariantDefinition = {
  description: string;
  label: string;
  marketingLabel: string;
};

export const appVariantDefinitions: Record<AppVariant, AppVariantDefinition> = {
  "workspace-wellbeing": {
    label: "Workspace Wellbeing",
    marketingLabel: "Wellbeing",
    description:
      "Default product theme for the shared workplace operations experience.",
  },
  atlas: {
    label: "Atlas",
    marketingLabel: "Atlas",
    description: "Blue-forward navigation and enterprise operations branding.",
  },
  tempo: {
    label: "Tempo",
    marketingLabel: "Tempo",
    description:
      "Expressive collaboration theme for customer-facing product surfaces.",
  },
  harbor: {
    label: "Harbor",
    marketingLabel: "Harbor",
    description: "Calm logistics and support-oriented brand palette.",
  },
  summit: {
    label: "Summit",
    marketingLabel: "Summit",
    description:
      "Warm administrative theme for management and reporting surfaces.",
  },
};
