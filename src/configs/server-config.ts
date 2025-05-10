import dotenv from "dotenv";
import { ServerConfig } from "../types";

dotenv.config();

export const serverConfig: ServerConfig = {
  APP_PORT: Number(process.env.APP_PORT) || 3000,
};
