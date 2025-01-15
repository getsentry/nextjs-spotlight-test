"use server";

import * as Sentry from "@sentry/nextjs";

export async function action() {
  Sentry.captureMessage("server action firing");

  return "success";
}

export async function instrumentedAction() {
  return await Sentry.withServerActionInstrumentation(
    "instrumentedAction",
    {},
    async () => {
      Sentry.captureMessage("server action firing");

      return "success";
    }
  );
}

export async function actionWithError() {
  Sentry.captureMessage("server action firing");

  throw new Error("Error in server action");
}

export async function instrumentedActionWithError() {
  return await Sentry.withServerActionInstrumentation(
    "instrumentedAction",
    {
      // formData, // Optionally pass in the form data
      // headers: headers(), // Optionally pass in headers
      recordResponse: true, // Optionally record the server action response
    },
    async () => {
      Sentry.captureMessage("server action firing");

      throw new Error("Error in server action");
    }
  );
}
