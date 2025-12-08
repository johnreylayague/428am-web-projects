import express, { Application } from "express";
import { applySecurity } from "./middleware/security";
import { applyCors } from "./middleware/cors";
import { applyBodyParsers } from "./middleware/body-parser";
import { useRequestLogger } from "./middleware/logger";
import { useErrorHandlers } from "./middleware/error";
import { registerRoutes } from "./routes";

// Create express app
const app: Application = express();

// Apply security middleware (e.g., helmet)
applySecurity(app);

// Set up CORS options and middleware
applyCors(app);

// Set up body parsers for JSON and urlencoded forms
applyBodyParsers(app);

// Log each incoming request
useRequestLogger(app);

// Register all routes
registerRoutes(app);

// Set up error handlers (404 and general error handler)
useErrorHandlers(app);

export default app;
