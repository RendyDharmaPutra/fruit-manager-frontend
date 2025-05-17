type IncomeDetailPageContentProps = {
  IncomeDetail: IncomeDetailType;
};

export const IncomeDetailPageContent = (
  props: IncomeDetailPageContentProps
) => {
  return (
    <section className="p-content">
      <h1>{JSON.stringify(props.IncomeDetail)}</h1>
    </section>
  );
};
