export function percentageOf(
  a: number | undefined,
  total: number | undefined
): string {
  if (a && total) {
    return `(${((a / total) * 100).toFixed(2)}%)`;
  }
  return "";
}
