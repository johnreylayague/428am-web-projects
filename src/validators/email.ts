import { body } from "express-validator";
import { validateEmails } from "../utils/validators";

export const sendEmailValidation = [
  body("subject").notEmpty().withMessage("Subject is required"),
  body("html").notEmpty().withMessage("HTML body is required"),
  body("from")
    .notEmpty()
    .withMessage("from is required")
    .isString()
    .withMessage("from must be a string"),
  body("to").custom((value) => validateEmails(value, "to")),
  body("cc")
    .optional()
    .custom((value) => {
      if (!value) return true;
      return validateEmails(value, "cc");
    }),
  body("bcc")
    .optional()
    .custom((value) => {
      if (!value) return true;
      return validateEmails(value, "bcc");
    }),
  body("replyTo")
    .optional()
    .isEmail()
    .withMessage("replyTo must be a valid email"),
];
