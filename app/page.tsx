"use client";

import { Button } from "@/components/ui/button";
import { action, asyncAction, asyncNonAction, nonAction } from "@/lib/actions";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto flex flex-wrap items-center justify-center px-8 pt-20 font-[family-name:var(--font-geist-sans)] gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Inline Actions</h2>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => {
              "use action";

              throw new Error("Error in server action");
            }}
          >
            Server Action Error
          </Button>

          <Button
            onClick={async () => {
              "use action";

              throw new Error("Error in async server action");
            }}
          >
            Server Async Action Error
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Imported Actions</h2>
        <div className="flex flex-col gap-2">
          <Button onClick={action}>Server Action Error</Button>

          <Button onClick={asyncAction}>Server Async Action Error</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Inline Functions</h2>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => {
              throw new Error("Error in client handler");
            }}
          >
            Client Error
          </Button>

          <Button
            onClick={async () => {
              throw new Error("Error in async client handler");
            }}
          >
            Client Async Error
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Imported Functions</h2>
        <div className="flex flex-col gap-2">
          <Button onClick={nonAction}>Client Error</Button>

          <Button onClick={asyncNonAction}>Client Async Error</Button>
        </div>
      </div>
    </div>
  );
}
