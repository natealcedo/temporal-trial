import { Worker } from "@temporalio/worker";

async function runWorker() {
  try {
    const worker = await Worker.create({
      workflowsPath: require.resolve("./workflows"), // Adjust the path as necessary
      taskQueue: "tutorial", // The task queue this worker will listen to
    });

    // Start the worker. It will now start polling for and executing workflows.
    await worker.run();
  } catch (err) {
    console.error("Failed to start worker", err);
    process.exit(1);
  }
}

runWorker().catch((err) => {
  console.error(err);
  process.exit(1);
});
