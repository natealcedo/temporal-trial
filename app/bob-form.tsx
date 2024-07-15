"use client";

import { useTransition } from "react";

import { startBobWorkflow } from "@/app/actions/greet-workflows";
import { Button } from "@/components/ui/button";

export function BobForm() {
  const [isPending, startTransition] = useTransition();
  return (
    <form
      action={() => {
        startTransition(async () => {
          await startBobWorkflow("hello");
        });
      }}
    >
      <Button type="submit" disabled={isPending}>
        Start Bob
      </Button>
    </form>
  );
}
