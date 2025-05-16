import { AppError } from "../app-error.interface";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export class BadRequest implements AppError {
  name: string = ReasonPhrases.BAD_REQUEST;
  statusCode = StatusCodes.BAD_REQUEST;

  constructor(public message: string, public error?: unknown) {}
}
