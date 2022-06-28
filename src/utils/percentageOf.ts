export function percentageOf(a: number, total: number): number {
  return parseFloat(((a / total) * 100).toFixed(2));
}
