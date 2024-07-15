import { uuid4 } from "@temporalio/workflow";

export const greetTaskQueueName = "greet-tq";
export const greetWorkflowId = () => `greet-tq-${uuid4()}`;
