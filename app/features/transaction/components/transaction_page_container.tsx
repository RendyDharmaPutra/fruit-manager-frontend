import { PageContainer } from "../../../core/components/layout/page_layout/page_container";
import { ColumnDef } from "@tanstack/react-table";
import { TransactionPageContent } from "./transaction_page_content";
import { SelectedTransactionProvider } from "~/features/transaction/lib/context/selected_transaction_context";

type TransactionPageContainerProps<T, R> = {
  title: "Pemasukan" | "Pengeluaran";
  loaderData: SuccessResponseType<T[]> | FailedResponseType<string>;
  actionRes?: R;
  transactionColumns: ColumnDef<T>[];
};

export const TransactionPageContainer = <T, R extends RawResponseType>(
  props: TransactionPageContainerProps<T, R>
) => {
  return (
    <SelectedTransactionProvider>
      <PageContainer
        title={`Daftar ${props.title}`}
        loaderData={props.loaderData}
      >
        {(successData) => (
          <TransactionPageContent
            title={props.title}
            loaderData={successData}
            actionRes={props.actionRes}
            transactionColumns={props.transactionColumns}
          />
        )}
      </PageContainer>
    </SelectedTransactionProvider>
  );
};
