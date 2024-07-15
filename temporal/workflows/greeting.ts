type ExampleArgs = {
  name: string;
};

export async function greet(args: ExampleArgs): Promise<{ greeting: string }> {
  return { greeting: args.name };
}
