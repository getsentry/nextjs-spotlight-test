export const dynamic = "force-dynamic";

export function GET() {
  throw new Error("Error on API route (GET)");
}

export function POST() {
  throw new Error("Error on API route (POST)");
}
