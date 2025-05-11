/**
 * Custom error class for handling API errors
 * Extends the built-in Error class to include HTTP status codes and additional error details
 * Maintains proper stack traces for debugging purposes
 */
export class ErrorResponse extends Error {
  /**
   * Creates a new ErrorResponse instance
   *
   * @param {string} message - Error message to display
   * @param {number} status - HTTP status code (e.g., 400, 404, 500)
   * @param {*} [error] - Optional additional error details
   */
  constructor(
    public message: string,
    public status: number,
    public error?: unknown
  ) {
    super(message);
    this.name = this.constructor.name; // Set the name of the error
    this.status = status; // Add the status field
    if (error) {
      this.error = error; // Add the status field
    }
    Error.captureStackTrace(this, this.constructor); // Maintain proper stack trace
  }
}
