import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

import { getCorrelationId } from "../helpers";

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    winston.format.json(),
    winston.format.printf(({ timestamp, level, message, ...data }) =>
      JSON.stringify({
        timestamp,
        level,
        correlationId: getCorrelationId(),
        message,
        data,
      })
    )
  ),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
    new DailyRotateFile({
      filename: "logs/%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: 6,
    }),
  ],
});

//
// If we're  in local then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV === "development") {
  logger.add(new winston.transports.Console());
}
