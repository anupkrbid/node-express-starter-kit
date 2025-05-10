import { RequestHandler } from "../types";

export const pingHandler: RequestHandler = (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      message: "pong",
    });
  }, 300);
};
