export const dateFormat = (rawDate: string) => {
  return new Date(rawDate).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
