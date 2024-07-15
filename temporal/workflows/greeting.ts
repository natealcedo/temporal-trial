type ExampleArgs = {
  name: string;
};

export async function greetWorkflow(args: ExampleArgs): Promise<{ greeting: string }> {
  return { greeting: args.name };
}
