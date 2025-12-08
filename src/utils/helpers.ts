// Converts a comma-separated string or array of strings into a trimmed string array.
// - Accepts a string (e.g., "one, two") or a string array (e.g., ["one", "two"]).
// - Trims whitespace around each entry.
// - Filters out empty entries.
// Returns a string array, never undefined.
export function normalizeCommaSeparatedList(
  input: string[] | string | undefined
): string[] {
  let arr: string[] = [];
  if (typeof input === "string") {
    arr = input.split(",");
  } else if (Array.isArray(input)) {
    arr = input;
  }
  return arr.map((item) => item.trim()).filter((item) => item.length > 0);
}

// Joins a string or array of strings into a single comma-separated string.
// - Accepts a string (e.g. "one, two") or string array (e.g. ["one", "two"]) or undefined.
// - Trims values and removes empty strings.
// Example: ["one", "two"] or "one, two" => "one, two"
export function joinWithComma(input: string[] | string | undefined): string {
  let arr: string[] = [];
  if (typeof input === "string") {
    arr = input.split(",");
  } else if (Array.isArray(input)) {
    arr = input;
  }
  const trimmed = arr
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  return trimmed.join(", ");
}
