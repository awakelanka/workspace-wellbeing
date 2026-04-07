import { Card } from "@workspace-wellbeing/ui";

export function TicketComments({
  comments,
}: {
  comments: Array<{
    id: string;
    author: string;
    body: string;
    createdAt: string;
  }>;
}) {
  return (
    <Card className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Comment stream</h2>
        <p className="text-sm text-[var(--color-muted)]">
          Mutation wiring is intentionally deferred to the auth contract
          checkpoint.
        </p>
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <article
            className="rounded-3xl border border-[color:var(--color-border)] bg-white/70 p-4"
            key={comment.id}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">{comment.author}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
              {comment.body}
            </p>
          </article>
        ))}
      </div>
    </Card>
  );
}
