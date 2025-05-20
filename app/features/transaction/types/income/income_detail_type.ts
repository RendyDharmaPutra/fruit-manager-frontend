type IncomeDetailType = TransactionDetailType<
  IncomeType,
  DetailOfIncomeType
> & {};

type DetailOfIncomeType = DetailOfTransactionType & {
  weight: number;
};
