"use server";

import "server-only";

import { WorkflowHandleWithFirstExecutionRunId } from "@temporalio/client";

import { TemporalClient } from "@/temporal/client";

export async function startGreetWorkflow(
  name: string
): Promise<WorkflowHandleWithFirstExecutionRunId> {
  // Start the greet workflow
  return await TemporalClient.workflow.start("greet", {
    args: [{ name }],
    taskQueue: "tutorial",
    workflowId: "greet-workflow",
  });
}