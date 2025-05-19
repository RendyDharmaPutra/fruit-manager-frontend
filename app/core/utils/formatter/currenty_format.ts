export const currencyFormat = (rawCurrency: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(rawCurrency);
};
