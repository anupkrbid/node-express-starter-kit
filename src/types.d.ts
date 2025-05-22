import { NextFunction, Request, Response } from "express";

export type ServerConfig = {
  // App Config
  NODE_ENV: string;
  APP_PORT: number;

  // Database Config
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_DIALECT: string;
  DB_LOGGING: boolean;
};

export type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
