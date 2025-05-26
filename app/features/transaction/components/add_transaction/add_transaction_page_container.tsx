import { Form } from "@remix-run/react";
import { PageContainer } from "~/core/components/layout/page_layout/page_container";
import { TransactionValidationProvider } from "../../lib/context/transaction_validation_context";
import { showStandardToast } from "~/core/lib/hooks/show_standard_toast";

type AddTransactionPageContainerProps<T, R> = {
  title: "Pengeluaran" | "Pemasukan";
  loaderData: SuccessResponseType<T> | FailedResponseType<string>;
  actionRes?: R;
  children: (data: SuccessResponseType<T>) => React.ReactNode;
};

export const AddTransactionPageContainer = <T, R extends RawResponseType>(
  props: AddTransactionPageContainerProps<T, R>
) => {
  props.actionRes != undefined && showStandardToast(props.actionRes);

  return (
    <TransactionValidationProvider>
      <PageContainer
        title={`Tambah ${props.title}`}
        loaderData={props.loaderData}
      >
        {(successData) => (
          <Form
            method="POST"
            className="p-content flex flex-col gap-4 md:gap-8"
          >
            {props.children(successData)}
          </Form>
        )}
      </PageContainer>
    </TransactionValidationProvider>
  );
};
