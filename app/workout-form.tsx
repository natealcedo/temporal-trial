"use client";

import { startGreetWorkflow } from "@/app/actions/start-greet-workflow";
import { Button } from "@/components/ui/button";

export function WorkoutForm() {
  return (
    <form action={async () => startGreetWorkflow("hello")}>
      <Button type="submit">Start workflow</Button>
    </form>
  );
}
