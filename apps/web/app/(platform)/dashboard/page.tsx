import { getCurrentUser } from "@workspace-wellbeing/auth";
import {
  getAppVariantDefinition,
  getPlatformModules,
} from "@workspace-wellbeing/platform";
import {
  Card,
  DataTable,
  EmptyState,
  ModuleCard,
  PageHeader,
  StatCard,
} from "@workspace-wellbeing/ui";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const modules = getPlatformModules(user);
  const appVariant = getAppVariantDefinition(user.appVariant);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Platform"
        title="Monorepo boilerplate"
        description="This dashboard proves authenticated routing, shared package composition, and permission-aware module discovery through the shared UI system."
      />
      <section className="grid gap-4 xl:grid-cols-3">
        <StatCard
          detail="Visible features resolved from platform and auth packages."
          label="Visible modules"
          value={String(modules.length)}
        />
        <StatCard
          detail="Current signed-in capability set for shell rendering and module affordances."
          label="Assigned roles"
          value={String(user.roles.length)}
        />
        <StatCard
          detail={`Current theme pack: ${appVariant.label}.`}
          label="Brand variant"
          value={appVariant.marketingLabel}
        />
      </section>
      {modules.length === 0 ? (
        <EmptyState
          title="No modules visible"
          description="Grant a module permission to see a platform entry point here."
        />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {modules.map((moduleDefinition) => (
            <ModuleCard
              accent={moduleDefinition.accent}
              description={moduleDefinition.description}
              href={moduleDefinition.href}
              key={moduleDefinition.key}
              label={moduleDefinition.label}
              summary={moduleDefinition.summary}
            />
          ))}
        </div>
      )}
      <section className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-foreground">
              Recent platform widgets
            </h2>
            <p className="text-sm text-muted-foreground">
              Placeholder modules and shell surfaces share one table and card
              language across apps.
            </p>
          </div>
          <DataTable
            caption="Workspace placeholder widgets"
            columns={["Widget", "State", "Owner"]}
            rowKeys={["rbac-navigation", "shared-auth-form", "tenant-theming"]}
            rows={[
              ["RBAC navigation", "Active", "packages/platform"],
              ["Shared auth form", "Active", "packages/ui + apps/web"],
              ["Tenant theming", "Ready", "packages/tailwind-config"],
            ]}
          />
        </Card>
        <Card className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Placeholder modules
          </h2>
          <p className="text-sm text-muted-foreground">
            Future apps can reuse this shell while swapping only theme metadata,
            module registry entries, and auth bindings.
          </p>
        </Card>
      </section>
    </div>
  );
}
