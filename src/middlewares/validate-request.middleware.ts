import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodEffects, ZodError } from "zod";
import { fromError } from "zod-validation-error";
import { ErrorResponse } from "../utils";

type RequestProperty = "body" | "params" | "query";

export const validateRequest = (
  schema: AnyZodObject | ZodEffects<AnyZodObject>,
  property: RequestProperty
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req[property]);
      next();
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        next(new ErrorResponse(fromError(err).toString(), 422));
      } else {
        next(err);
      }
    }
  };
};
