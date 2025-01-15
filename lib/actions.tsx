export function action() {
  "use action";

  throw new Error("Error in server action");
}

export async function asyncAction() {
  "use action";

  throw new Error("Error in async server action");
}

export function nonAction() {
  throw new Error("Error in client handler");
}

export async function asyncNonAction() {
  throw new Error("Error in async client handler");
}
