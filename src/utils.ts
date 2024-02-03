export function niceDate(date: Date) {
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function toISODate(date: Date) {
  return date.toISOString().split("T")[0];
}
