import { NextFunction, Request, Response } from "express";

export type ServerConfig = {
  // App Config
  NODE_ENV: string;
  APP_PORT: number;
};

export type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
