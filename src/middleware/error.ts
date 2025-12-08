import { Application, Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import { getAcceptedStatusCode, sendResponse } from "../utils/response";

interface CustomError extends Error {
  code?: number;
  status?: number;
}

export const useErrorHandlers = (app: Application) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    sendResponse({
      res,
      statusCode: 404,
      status: "fail",
      message: "Could not find this route.",
    });
  });

  app.use(
    (err: CustomError, req: Request, res: Response, next: NextFunction) => {
      logger.error(err);

      if (res.headersSent) {
        return next(err);
      }

      const code = err.code || err.status;
      const statusCode = getAcceptedStatusCode(code);

      sendResponse({
        res,
        statusCode,
        status: "error",
        message: err.message || "An unknown error occurred!",
      });
    }
  );
};
