import { NextFunction, Request, Response } from "express";

import { setCorrelationId } from "../helpers";

export const attachCorrelationId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  setCorrelationId(() => {
    next();
  });
};
