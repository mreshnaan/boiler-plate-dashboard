/*
 * This function retrieves a nested value from an object based on a given path.
 *
 * Params:
 * - obj: The object to traverse.
 * - path: The path to the nested value. Can be a string with dot notation or an array of keys.
 *
 * Returns:
 * - The nested value if found, or an empty string if not found.
 */
export const getNestedValue = (obj, path) => {
  if (!path || (typeof path !== "string" && !Array.isArray(path))) {
    return "";
  }

  const keys = Array.isArray(path) ? path : path.split(".");
  let value = obj;

  for (let key of keys) {
    value = value?.[key];
    if (value === undefined) {
      return "";
    }
  }

  return value;
};

export const getValue = (obj, column) => {
  const { dataIndex } = column;
  if (typeof dataIndex === "string") {
    return obj[dataIndex];
  } else if (Array.isArray(dataIndex)) {
    return getNestedValue(obj, dataIndex);
  }
  return "";
};

export function formatString(inputString) {
  return inputString
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .split(".")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
