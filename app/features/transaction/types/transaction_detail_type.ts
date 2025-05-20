// Abstract Type untuk Income and Outcome Detail Type
// Generic T -> Inherit Type yang digunakan
// Generic R -> Type untuk Details
type TransactionDetailType<
  T extends TransactionType,
  R extends DetailOfTransactionType
> = T & {
  details: R[];
};

// Abstract Type untuk Detail dari Income dan Outcome Type
type DetailOfTransactionType = {
  price: number;
  fruit: StuffType;
};
