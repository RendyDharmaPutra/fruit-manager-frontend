type OutcomeDetailType = TransactionDetailType<
  OutcomeType,
  DetailOfOutcomeType
> & {};

type DetailOfOutcomeType = DetailOfTransactionType & {
  count: number;
  fertilizer: StuffType;
};
