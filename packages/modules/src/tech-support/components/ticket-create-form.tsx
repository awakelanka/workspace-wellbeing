import {
  Button,
  Card,
  FieldLabel,
  SelectInput,
  TextArea,
  TextInput,
} from "@workspace-wellbeing/ui";

export function TicketCreateForm({
  ticketTypes,
  priorities,
}: {
  ticketTypes: string[];
  priorities: readonly string[];
}) {
  return (
    <Card className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Create ticket scaffold</h2>
        <p className="text-sm text-[var(--color-muted)]">
          This form intentionally stops at UI scaffolding until Laravel contract
          validation is complete.
        </p>
      </div>
      <form className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2 md:col-span-2">
          <FieldLabel>Name</FieldLabel>
          <TextInput placeholder="Describe the issue briefly" />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel>Ticket type</FieldLabel>
          <SelectInput defaultValue={ticketTypes[0]}>
            {ticketTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </SelectInput>
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel>Priority</FieldLabel>
          <SelectInput defaultValue={priorities[1]}>
            {priorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </SelectInput>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <FieldLabel>Details</FieldLabel>
          <TextArea placeholder="Summarize user impact, attempted steps, and any supporting context." />
        </div>
        <div className="md:col-span-2">
          <Button type="button">Backend contract checkpoint required</Button>
        </div>
      </form>
    </Card>
  );
}
