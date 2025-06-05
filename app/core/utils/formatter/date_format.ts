export const dateFormat = (rawDate: string) => {
  return new Date(rawDate).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const rearrangeDate = (dateStr: string) => {
  const date = new Date(dateStr);

  const day = date.getDate(); // 1-31
  const month = date.getMonth() + 1; // 0-11 + 1
  const year = date.getFullYear(); // e.g., 2025

  return `${day}-${month}-${year}`;
};
