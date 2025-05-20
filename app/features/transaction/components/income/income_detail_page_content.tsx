import { ContentTableBody } from "~/core/components/container/content_table/content_table_body";
import { IncomeInfoSection } from "./income_info/income_info_section";
import { ColumnDef } from "@tanstack/react-table";

type IncomeDetailPageContentProps<R, U> = {
  columns: ColumnDef<R>[];
  data: U;
  children?: React.ReactNode;
};

export const IncomeDetailPageContent = <
  T extends TransactionType,
  R extends DetailOfTransactionType,
  U extends TransactionDetailType<T, R>
>(
  props: IncomeDetailPageContentProps<R, U>
) => {
  return (
    <>
      <IncomeInfoSection data={props.data}>{props.children}</IncomeInfoSection>

      <ContentTableBody columns={props.columns} data={props.data.details} />
    </>
  );
};
