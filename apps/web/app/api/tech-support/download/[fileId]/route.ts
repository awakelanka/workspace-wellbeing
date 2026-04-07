import {
  getActiveTickets,
  getResolvedTickets,
} from "@workspace-wellbeing/api-client";

import { getCurrentUser, getSession } from "@workspace-wellbeing/auth";
import { techSupport } from "@workspace-wellbeing/modules";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ fileId: string }> },
) {
  const session = await getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { fileId } = await params;
  const user = await getCurrentUser();
  const tickets = [
    ...(await getActiveTickets(user)),
    ...(await getResolvedTickets(user)),
  ];
  const ticket = tickets.find((item) =>
    item.files?.some?.((file) => file.id === fileId),
  );

  if (!ticket || !techSupport.canUploadTicketFiles(user, ticket)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const file = ticket.files.find((item) => item.id === fileId);

  return new NextResponse(`Scaffold download for ${file?.name ?? fileId}`, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
