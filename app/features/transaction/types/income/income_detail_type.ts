type IncomeDetailType = IncomeType & {
  details: DetailOfIncomeType[];
};

type DetailOfIncomeType = {
  weight: number;
  price: number;
  fruit: StuffType;
};
