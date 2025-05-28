import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { fetchApi } from "~/core/utils/fetch_api";
import { AddTransactionPageContainer } from "~/features/transaction/components/add_transaction/add_transaction_page_container";
import { AddOutcomePageContent } from "~/features/transaction/components/outcome/add_outcome_page_content";
import { OutcomeDetailProvider } from "~/features/transaction/lib/context/outcome_detail_context";
import { getTransactionDetail } from "~/features/transaction/lib/utils/get_transaction_details";

export async function loader({ request }: LoaderFunctionArgs) {
  const fruitRes = await fetchApi<StuffType[], "GET">(
    request,
    `/fruit`,
    "GET",
    "mendapatkan data Buah"
  );

  const fertilizerRes = await fetchApi<StuffType[], "GET">(
    request,
    `/fertilizer`,
    "GET",
    "mendapatkan data Pupuk"
  );

  const success = fruitRes.success && fertilizerRes.success;

  if (!success) {
    const errorMessage = !fruitRes.success
      ? fruitRes.message
      : fertilizerRes.message;

    return json<FailedResponseType<string>>(
      {
        success: false,
        message: errorMessage,
        error: "Gagal memuat salah satu data",
      },
      { status: 500 }
    );
  }

  return json<
    SuccessResponseType<{ fruit: StuffType[]; fertilizer: StuffType[] }>
  >({
    success: true,
    message: `${fruitRes.message} dan ${fertilizerRes.message}`,
    data: {
      fruit: fruitRes.data.data!,
      fertilizer: fertilizerRes.data.data!,
    },
  });
}

export default function AddOutcome() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <OutcomeDetailProvider>
      <AddTransactionPageContainer
        title="Pengeluaran"
        loaderData={loaderData}
        actionRes={actionData}
      >
        {(successData) => (
          <AddOutcomePageContent
            actionRes={actionData}
            data={successData.data}
          />
        )}
      </AddTransactionPageContainer>
    </OutcomeDetailProvider>
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
