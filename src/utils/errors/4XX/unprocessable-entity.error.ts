import { ReasonPhrases, StatusCodes } from "http-status-codes";

export class UnprocessableEntity implements Error {
  name: string = ReasonPhrases.UNPROCESSABLE_ENTITY;
  statusCode: number = StatusCodes.UNPROCESSABLE_ENTITY;

  constructor(public message: string, public error?: unknown) {}
}
