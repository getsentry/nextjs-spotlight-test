"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button
        onClick={() => {
          "use action";

          throw new Error("Error in server action");
        }}
      >
        Server Action Error
      </Button>

      <Button
        onClick={() => {
          throw new Error("Error in client handler");
        }}
      >
        Client Error
      </Button>
    </div>
  );
}
