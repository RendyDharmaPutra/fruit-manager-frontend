import { Form } from "@remix-run/react";
import { PageContainer } from "~/core/components/layout/page_layout/page_container";

type AddTransactionPageContainerProps<T> = {
  title: "Pengeluaran" | "Pemasukan";
  loaderData: SuccessResponseType<T> | FailedResponseType<string>;
  children: (data: SuccessResponseType<T>) => React.ReactNode;
};

export const AddTransactionPageContainer = <T,>(
  props: AddTransactionPageContainerProps<T>
) => {
  return (
    <PageContainer
      title={`Tambah ${props.title}`}
      loaderData={props.loaderData}
    >
      {(successData) => (
        <Form method="POST" className="p-content flex flex-col gap-4 md:gap-8">
          {props.children(successData)}
        </Form>
      )}
    </PageContainer>
  );
};
