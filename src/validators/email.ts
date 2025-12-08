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
    .exists({ checkNull: true })
    .withMessage("cc field is required")
    .custom((value) => {
      if (value === "" || value === undefined || value === null) return true;
      return validateEmails(value, "cc");
    }),
  body("bcc")
    .exists({ checkNull: true })
    .withMessage("bcc field is required")
    .custom((value) => {
      if (value === "" || value === undefined || value === null) return true;
      return validateEmails(value, "bcc");
    }),
  body("replyTo")
    .exists({ checkNull: true })
    .withMessage("replyTo field is required")
    .custom((value) => {
      if (value === "" || value === undefined || value === null) return true;
      // Reuse validateEmails, fieldName 'replyTo'
      return validateEmails(value, "replyTo");
    }),
];
