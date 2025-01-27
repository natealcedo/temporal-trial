"use client";

import { useTransition } from "react";

import { greetWorkflows } from "@/app/actions/greet-workflows";
import { Button } from "@/components/ui/button";

export function WorkoutForm() {
  const [isPending, startTransition] = useTransition();
  return (
    <form
      action={() => {
        startTransition(async () => {
          await greetWorkflows("hello");
        });
      }}
    >
      <Button type="submit" disabled={isPending}>
        Start Greet
      </Button>
    </form>
  );
}
