import dotenv from "dotenv";
import { ServerConfig } from "../types";

dotenv.config();

export const serverConfig: ServerConfig = {
  // App Config
  NODE_ENV: process.env.NODE_ENV ?? "development",
  APP_PORT: Number(process.env.APP_PORT) || 3000,
};
