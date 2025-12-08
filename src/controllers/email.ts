import { Request, Response, NextFunction } from "express";
import { sendMail, SendMailParams } from "../services/email";
import { sendResponse } from "../utils/response";

export async function sendEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { subject, replyTo, from, html, to, bcc, cc } =
    req.body as SendMailParams;

  try {
    await sendMail({
      subject,
      replyTo,
      from,
      html,
      to,
      bcc,
      cc,
    });

    return sendResponse({
      res,
      statusCode: 200,
      status: "success",
      message: "Email sent successfully",
    });
  } catch (err: unknown) {
    let message = "An error occurred";

    if (err instanceof Error) {
      message = err.message;
    }

    return sendResponse({
      res,
      statusCode: 500,
      status: "error",
      message,
    });
  }
}
