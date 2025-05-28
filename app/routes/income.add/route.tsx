import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { fetchApi } from "~/core/utils/fetch_api";
import { AddTransactionPageContainer } from "~/features/transaction/components/add_transaction/add_transaction_page_container";
import { AddIncomePageContent } from "~/features/transaction/components/income/add_income_page_content";
import { IncomeDetailProvider } from "~/features/transaction/lib/context/income_detail_context";
import { getTransactionDetail } from "~/features/transaction/lib/utils/get_transaction_details";

export async function loader({ request }: LoaderFunctionArgs) {
  const fruitRes = await fetchApi<StuffType[], "GET">(
    request,
    `/fruit`,
    "GET",
    "mendapatkan data Buah"
  );

  return fruitRes;
}

export default function AddIncomePage() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <IncomeDetailProvider>
      <AddTransactionPageContainer
        title="Pemasukan"
        loaderData={loaderData}
        actionRes={actionData}
      >
        {(successData) => (
          <AddIncomePageContent
            actionRes={actionData}
            data={successData.data.data}
          />
        )}
      </AddTransactionPageContainer>
    </IncomeDetailProvider>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();

  const data = {
    transactionTime: body.get("transactionTime"),
    details: getTransactionDetail<AddOutcomeDetailType>(body),
  };

  return await fetchApi(
    request,
    `/outcome`,
    "POST",
    "menambah data Pengeluaran",
    data
  );
}
