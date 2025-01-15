import * as Sentry from "@sentry/nextjs";

export function action() {
  "use action";

  Sentry.captureMessage("server action firing");

  throw new Error("Error in server action");
}

export async function asyncAction() {
  "use action";

  Sentry.captureMessage("server async action firing");

  throw new Error("Error in async server action");
}

export function nonAction() {
  Sentry.captureMessage("client handler firing");

  throw new Error("Error in client handler");
}

export async function asyncNonAction() {
  Sentry.captureMessage("async client handler firing");

  throw new Error("Error in async client handler");
}
