import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { sendResponse } from "../utils/response";

export function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return sendResponse({
      res,
      statusCode: 400,
      status: "fail",
      message: "Validation failed",
      data: {
        errors: errors.array(),
      },
    });
  }
  next();
}
