import dotenv from "dotenv";
import { ServerConfig } from "../types";

dotenv.config();

export const serverConfig: ServerConfig = {
  // App Config
  NODE_ENV: process.env.NODE_ENV ?? "development",
  APP_PORT: Number(process.env.APP_PORT) || 3000,

  // Database Config
  DB_USER: process.env.DB_USER ?? "root",
  DB_PASSWORD: process.env.DB_PASSWORD ?? "",
  DB_NAME: process.env.DB_NAME ?? "node_express_starter_kit",
  DB_HOST: process.env.DB_HOST ?? "",
  DB_PORT: Number(process.env.DB_PORT) || 3306,
  DB_DIALECT: process.env.DB_DIALECT ?? "mysql",
  DB_LOGGING: process.env.DB_LOGGING === "true",
};
