import { Router } from "express";
import { sendEmailValidation } from "../validators/email";
import { validate } from "../middleware/validate";
import { sendEmail } from "../controllers/email";

const router = Router();

router.post("/send", sendEmailValidation, validate, sendEmail);

export default router;
