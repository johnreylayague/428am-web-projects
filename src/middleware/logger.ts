import express, { Application, Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export const useRequestLogger = (app: Application) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(
      `${req.method} ${req.originalUrl} - body: ${JSON.stringify(req.body)}`
    );
    next();
  });
};
