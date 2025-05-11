import express, { Router } from "express";
import { signUpHandler } from "../controllers";
import { validateRequest } from "../middlewares";
import { signUpValidationSchema } from "../validators/schemas";

const authRouter: Router = express.Router();

authRouter.post(
  "/sign-up",
  validateRequest(signUpValidationSchema, "body"),
  signUpHandler
);

export default authRouter;
