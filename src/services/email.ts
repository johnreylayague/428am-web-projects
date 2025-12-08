import nodemailer from "nodemailer";
import { logger } from "../utils/logger";
import { joinWithComma } from "../utils/helpers";
import { SMTP_USER, SMTP_PASS, SMTP_HOST, SMTP_PORT } from "../config/smtp";

export interface SendMailParams {
  from: string;
  to: string[] | string;
  cc: string[] | string;
  bcc: string[] | string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendMail({
  from,
  to,
  cc,
  bcc,
  subject,
  html,
  replyTo,
}: SendMailParams) {
  const formattedFrom = `${from} <${SMTP_USER}>`;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: formattedFrom,
      to,
      cc,
      bcc,
      subject,
      html,
      replyTo,
    });

    logger.info(
      `Email successfully sent from ${formattedFrom} to ${joinWithComma(to)}${
        cc ? `, cc: ${joinWithComma(cc)}` : ""
      }${bcc ? `, bcc: ${joinWithComma(bcc)}` : ""}`
    );
  } catch (err) {
    logger.error("Email sending failed", err);
    throw err;
  }
}
