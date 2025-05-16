/**
 * Custom error interface for handling API errors
 * Extends the built-in Error class to include HTTP status codes and additional error details
 * Maintains proper stack traces for debugging purposes
 */

import { StatusCodes } from "http-status-codes";

export interface AppError extends Error {
  statusCode: StatusCodes;
  error?: unknown;
}

export function isAppError(obj: Error): obj is AppError {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "statusCode" in obj &&
    typeof (obj as any).statusCode === "number" &&
    Object.values(StatusCodes).includes((obj as any).statusCode)
  );
}
