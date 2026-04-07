import { getCurrentUser } from "@workspace-wellbeing/auth";
import {
  getAppVariantDefinition,
  getPlatformNavigation,
} from "@workspace-wellbeing/platform";
import { AppShell, Navbar, Sidebar, UserMenu } from "@workspace-wellbeing/ui";

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  const navigation = getPlatformNavigation(user);
  const appVariant = getAppVariantDefinition(user.appVariant);

  return (
    <AppShell
      navbar={
        <Navbar
          actions={
            <UserMenu
              email={user.email}
              name={user.name}
              signOutHref="/api/auth/logout"
            />
          }
          subtitle={`${appVariant.label} theme`}
          title="Shared platform shell"
        />
      }
      sidebar={
        <Sidebar
          brand={{
            label: user.name,
            subtitle: `${user.email} | ${user.roles.join(", ")}`,
          }}
          footer={
            <p className="text-sm text-muted-foreground">
              {appVariant.description}
            </p>
          }
          groups={navigation}
        />
      }
    >
      <div className="py-2">{children}</div>
    </AppShell>
  );
}
