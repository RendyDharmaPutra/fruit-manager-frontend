import { ContentTableBody } from "~/core/components/container/content_table/content_table_body";
import { incomeDetailColumns } from "../../lib/columns/income_detail_columns";
import { IncomeInfoSection } from "./income_info/income_info_section";

type IncomeDetailPageContentProps = {
  IncomeDetail: IncomeDetailType;
};

export const IncomeDetailPageContent = (
  props: IncomeDetailPageContentProps
) => {
  return (
    <section>
      <IncomeInfoSection IncomeDetail={props.IncomeDetail} />

      <ContentTableBody
        columns={incomeDetailColumns}
        data={props.IncomeDetail.details}
      />
    </section>
  );
};
