import { getTicketDetail } from "@workspace-wellbeing/api-client";

import { getCurrentUser, getSession } from "@workspace-wellbeing/auth";
import { techSupport } from "@workspace-wellbeing/modules";
import { NextResponse } from "next/server";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ ticketId: string }> },
) {
  const session = await getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { ticketId } = await params;
  const user = await getCurrentUser();
  const ticket = await getTicketDetail(user, ticketId);

  if (!ticket || !techSupport.canUploadTicketFiles(user, ticket)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json({
    status: "scaffolded",
    ticketId,
    message:
      "Upload contract will bind to Laravel after auth/file checkpoints are confirmed.",
  });
}
