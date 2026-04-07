import {
  type AppVariant,
  type AppVariantDefinition,
  appVariantDefinitions,
} from "@workspace-wellbeing/tailwind-config";

export function isAppVariant(value: string): value is AppVariant {
  return value in appVariantDefinitions;
}

export function normalizeAppVariant(value: string | undefined): AppVariant {
  if (value && isAppVariant(value)) {
    return value;
  }

  return "workspace-wellbeing";
}

export function getAppVariant() {
  return normalizeAppVariant(process.env.NEXT_PUBLIC_APP_VARIANT);
}

export function getAppVariantDefinition(
  appVariant?: string,
): AppVariantDefinition {
  return appVariantDefinitions[normalizeAppVariant(appVariant)];
}
