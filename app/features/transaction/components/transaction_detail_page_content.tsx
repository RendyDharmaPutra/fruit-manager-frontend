import { ContentTableBody } from "~/core/components/container/content_table/content_table_body";
import { TransactionInfoSection } from "./transaction_info/transaction_info_section";
import { ColumnDef } from "@tanstack/react-table";

type TransactionDetailPageContentProps<R, U> = {
  columns: ColumnDef<R>[];
  data: U;
  children?: React.ReactNode;
};

export const TransactionDetailPageContent = <
  T extends TransactionType,
  R extends DetailOfTransactionType,
  U extends TransactionDetailType<T, R>
>(
  props: TransactionDetailPageContentProps<R, U>
) => {
  return (
    <>
      <TransactionInfoSection data={props.data}>
        {props.children}
      </TransactionInfoSection>

      <ContentTableBody columns={props.columns} data={props.data.details} />
    </>
  );
};
