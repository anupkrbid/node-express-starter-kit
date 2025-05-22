import { RequestHandler } from "../types";

export const pingHandler: RequestHandler = (req, res) => {
  res.status(200).json({
    message: "pong",
  });
};
