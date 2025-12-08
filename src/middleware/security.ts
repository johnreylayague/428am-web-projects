import helmet from "helmet";
import { Application } from "express";

export const applySecurity = (app: Application) => {
  app.use(helmet());
};
