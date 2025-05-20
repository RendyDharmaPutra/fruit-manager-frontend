type IncomeDistributionProps = {
  income: IncomeDetailType;
};

export const IncomeDistribution = (props: IncomeDistributionProps) => {
  return (
    <div className="absolute top-0 right-4 md:static px-3 py-1 w-fit rounded-full text-xs text-gray-600 border border-gray-400 ">
      {props.income.distribution ? "Distribusi" : "Non-Distribusi"}
    </div>
  );
};
