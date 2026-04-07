import type { CurrentUser } from "@workspace-wellbeing/auth";

export type LaravelClientContext = {
  user: CurrentUser;
};

export function createLaravelClient(context: LaravelClientContext) {
  return {
    context,
    app: "laravel-scaffold",
  };
}
