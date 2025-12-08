import { Response } from "express";

const VALID_CODES = [200, 201, 204, 400, 401, 403, 404, 422, 500] as const;
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
