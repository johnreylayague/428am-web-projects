import { createLogger, format, transports } from "winston";
import { NODE_ENV } from "../config/server";

const { timestamp, printf, combine, errors, json } = format;

// Custom printf for console, but not for files.
const consoleFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

export const logger = createLogger({
  level: "info",
  format: combine(
    timestamp(),
    errors({ stack: true }),
    // Use a custom printf for files to ensure message is output, handle objects properly
    printf(({ level, message, timestamp, stack }) => {
      // Handle objects for message
      const output =
        stack ||
        (typeof message === "object" ? JSON.stringify(message) : message);
      return `${timestamp} [${level}]: ${output}`;
    })
  ),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

if (NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: combine(timestamp(), errors({ stack: true }), consoleFormat),
    })
  );
}
