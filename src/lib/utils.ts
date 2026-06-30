export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  const [year, month, day] = parts;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIdx = parseInt(month, 10) - 1;
  const monthName = months[monthIdx] || "";
  const dayNum = parseInt(day, 10).toString();
  return `${dayNum} ${monthName} ${year}`;
}
