import { Response } from "express";

// All standard HTTP status codes (informational, success, redirection, client error, server error)
const VALID_CODES = [
  // 1xx Informational
  100, 101, 102, 103,
  // 2xx Success
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
  // 3xx Redirection
  300, 301, 302, 303, 304, 305, 306, 307, 308,
  // 4xx Client Errors
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
  415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451,
  // 5xx Server Errors
  500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
] as const;

export type AcceptedCode = (typeof VALID_CODES)[number];

export const getAcceptedStatusCode = (
  code: number | undefined
): AcceptedCode => {
  if (VALID_CODES.includes(code as AcceptedCode)) {
    return code as AcceptedCode;
  }
  return 500;
};

export type SendResponseParams = {
  res: Response;
  statusCode: AcceptedCode;
  status: "success" | "fail" | "error";
  message: string;
  data?: object;
};

export const sendResponse = ({
  res,
  statusCode,
  status,
  message,
  data,
}: SendResponseParams) => {
  res.status(statusCode).json({
    status,
    message,
    code: statusCode,
    ...(data && { data }),
  });
};
