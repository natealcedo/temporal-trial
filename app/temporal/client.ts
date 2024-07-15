import { Client, Connection } from "@temporalio/client";

const connection = await Connection.connect({
  address: process.env.TEMPORAL_GRPC_ENDPOINT,
});

export const TemporalClient = new Client({
  connection,
});
