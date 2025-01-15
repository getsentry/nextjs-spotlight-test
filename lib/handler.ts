import * as Sentry from "@sentry/nextjs";

export function nonAction() {
  Sentry.captureMessage("client handler firing");

  throw new Error("Error in client handler");
}

export async function asyncNonAction() {
  Sentry.captureMessage("async client handler firing");

  throw new Error("Error in async client handler");
}
