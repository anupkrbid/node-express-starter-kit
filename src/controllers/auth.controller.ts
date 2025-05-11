import { RequestHandler } from "../types";

export const signUpHandler: RequestHandler = (req, res, next) => {
  setTimeout(() => {
    res.status(201).json({
      message: "user created",
    });
  }, 300);
};
