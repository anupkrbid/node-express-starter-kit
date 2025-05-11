import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../utils";

/**
 * Middleware for handling 404 Bad Request errors
 * Automatically forwards a 404 error to the error handling chain
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const badRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new ErrorResponse("Bad Request", 404));
};

/**
 * Global error handling middleware
 * Processes all errors and sends a standardized error response
 * If error has no status code, logs it and defaults to 500
 * Includes stack trace only for 500 errors and when error.error exists
 *
 * @param {Error} err - Error object from previous middleware/route
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Object} JSON response with error details
 */
export const anyErrorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err.status) {
    console.log("Any Error Middleware:\n", err);
  }
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message,
    error: err.error ? err.error : status === 500 ? err.stack : null,
  });
};
