"use server";

import "server-only";

import { revalidatePath } from "next/cache";

import { TemporalClient } from "@/app/temporal/client";
import { greetTaskQueueName, greetWorkflowId } from "@/app/temporal/shared";

export async function greetWorkflows(name: string) {
  await TemporalClient.workflow.start("greet", {
    args: [{ name }],
    taskQueue: greetTaskQueueName,
    workflowId: greetWorkflowId(),
  });
  revalidatePath("/");
}

export async function startBobWorkflow(name: string) {
  await TemporalClient.workflow.start("bob", {
    args: [{ name }],
    taskQueue: greetTaskQueueName,
    workflowId: greetWorkflowId(),
  });
  revalidatePath("/");
}
