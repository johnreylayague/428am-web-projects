import { Application } from "express";
import emailRoutes from "./email";

export const registerRoutes = (app: Application) => {
  // Register email routes under /api/email
  app.use("/api/email", emailRoutes);

  // If you have other routes in the future, register them here
  // e.g., app.use('/api/users', userRoutes);
};
