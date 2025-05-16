import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodEffects, ZodError } from "zod";
import { fromError } from "zod-validation-error";
import { UnprocessableEntity } from "../utils/errors";

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
        console.log(err);
        next(new UnprocessableEntity(fromError(err).toString()));
      } else {
        next(err);
      }
    }
  };
};
