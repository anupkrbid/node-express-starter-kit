import winston from "winston";
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
  ],
});

//
// If we're  in local then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV === "development") {
  logger.add(new winston.transports.Console());
}
