export function dateFormatter(date: string): string {
  let formattedDate = "unknown";
  if (!/\d\d\d\d-\d\d-\d\d/.test(date)) {
    return formattedDate;
  }
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  formattedDate = `${day} / ${month} / ${year}`;
  return formattedDate;
}
