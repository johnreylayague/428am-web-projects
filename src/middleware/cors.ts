import cors, { CorsOptions } from "cors";
import { Application } from "express";
import { normalizeCommaSeparatedList } from "../utils/helpers";
import { CORS_ORIGIN } from "../config/cors";

export const applyCors = (app: Application) => {
  const corsOptions: CorsOptions = {
    origin: normalizeCommaSeparatedList(CORS_ORIGIN),
  };

  app.use(cors(corsOptions));
};
