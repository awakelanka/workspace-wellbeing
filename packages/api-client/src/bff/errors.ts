export class AppError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function mapLaravelError(error: unknown) {
  if (error instanceof AppError) {
    return error;
  }

  return new AppError("Unexpected upstream error", 500);
}
