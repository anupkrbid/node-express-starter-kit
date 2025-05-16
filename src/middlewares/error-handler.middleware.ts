import { NextFunction, Request, Response } from "express";
import { BadRequest, isAppError } from "../utils/errors";
import { StatusCodes } from "http-status-codes";

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
  next(new BadRequest("Bad Request"));
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
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorRes: { success: false; message: string; error?: unknown } = {
    success: false,
    message: err.message,
  };

  if (isAppError(err)) {
    if (!err.statusCode) {
      console.log("Any Error Middleware:\n", err);
    }

    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

    if (err.error) {
      errorRes["error"] = err.error;
    } else if (statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
      errorRes["error"] = err.stack;
    }

    res.status(statusCode).json(errorRes);
  } else {
    errorRes["error"] = err.stack;
    console.log("Any Error Middleware:\n");
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorRes);
  }
};
