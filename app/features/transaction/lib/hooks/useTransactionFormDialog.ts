type UseTransactionOptions<T, D> = {
  getKey: (detail: D) => string;
  createDetail: (fruit: StuffType, state: T) => D;
  updateDetail: (existing: D, incoming: D) => D;
  getPrice: (detail: D) => number;
  resetState: () => void;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  selectedDetail: D[];
  setSelectedDetail: React.Dispatch<React.SetStateAction<D[]>>;
};

export function useTransactionFormDialog<T, D>(
  state: T,
  options: UseTransactionOptions<T, D>
) {
  const handleSubmit = (fruit: StuffType) => {
    const incomingDetail = options.createDetail(fruit, state);

    const key = options.getKey(incomingDetail);
    const existing = options.selectedDetail.find(
      (detail) => options.getKey(detail) === key
    );

    if (existing) {
      options.setTotalPrice((prev) => prev - options.getPrice(existing));

      const merged = options.updateDetail(existing, incomingDetail);

      options.setTotalPrice((prev) => prev + options.getPrice(merged));
      options.setSelectedDetail((prev) => [
        ...prev.filter((d) => options.getKey(d) !== key),
        merged,
      ]);
    } else {
      options.setSelectedDetail((prev) => [...prev, incomingDetail]);
      options.setTotalPrice((prev) => prev + options.getPrice(incomingDetail));
    }

    options.resetState();
  };

  return { handleSubmit };
}
