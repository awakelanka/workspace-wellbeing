import { techSupport } from "@workspace-wellbeing/modules";
import { PageHeader } from "@workspace-wellbeing/ui";

export default async function CreateTicketPage() {
  const { ticketTypes, priorities } =
    await techSupport.getTechSupportCreateContext();

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Tech Support"
        title="Create ticket"
        description="Create flow UI is scaffolded now so the final backend binding can slot into shared auth and module package boundaries."
      />
      <techSupport.TicketCreateForm
        priorities={priorities}
        ticketTypes={ticketTypes}
      />
    </div>
  );
}
