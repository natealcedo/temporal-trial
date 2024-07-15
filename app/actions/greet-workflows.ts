"use server";

import "server-only";

import { revalidatePath } from "next/cache";
import { Client, Connection } from "@temporalio/client";

import { greetTaskQueueName, greetWorkflowId } from "@/app/temporal/shared";

const connection = await Connection.connect({
  address: process.env.TEMPORAL_GRPC_ENDPOINT,
});
const TemporalClient = new Client({
  connection,
});

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
