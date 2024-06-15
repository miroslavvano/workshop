export const throwError = (error: unknown, prefixMessage?: string): never => {
  if (error instanceof Error) {
    throw new Error(
      `${prefixMessage ?? "An error occurred"}: ${error.message}`
    );
  } else {
    throw new Error("An unknown error occurred");
  }
};
