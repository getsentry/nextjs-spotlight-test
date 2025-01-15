"use server";

import * as Sentry from "@sentry/nextjs";

export async function action() {
  Sentry.captureMessage("server action firing");

  throw new Error("Error in server action");
}
