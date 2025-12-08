// Validates email field values for bulk or single email addresses in request data.
// - Throws an error if the value is empty or not provided.
// - Accepts either a single string or an array of strings as input.
// - Throws an error if any entry is not a valid email format.
// - Used to validate 'to', 'cc', or 'bcc' fields in email APIs.
export function validateEmails(value: any, fieldName: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    value == null ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "string" && value.length === 0)
  ) {
    throw new Error(`${fieldName} is required`);
  }

  const emails = Array.isArray(value) ? value : [value];

  for (const email of emails) {
    if (typeof email !== "string" || !emailRegex.test(email)) {
      throw new Error(
        Array.isArray(value)
          ? `Each recipient in '${fieldName}' must be a valid email`
          : `${fieldName} must be a valid email`
      );
    }
  }

  return true;
}
