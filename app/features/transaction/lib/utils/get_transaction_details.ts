export const getTransactionDetail = <T>(body: FormData) => {
  const rawDetails = body.get("details");

  const parsed: T[] = JSON.parse(rawDetails as string);

  return parsed;
};
