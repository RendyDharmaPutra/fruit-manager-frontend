import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { TransactionPageContainer } from "~/features/transaction/components/transaction_page_container";
import { fetchApi } from "~/core/utils/fetch_api";
import { outcomeColumns } from "~/features/transaction/lib/columns/outcome_columns";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetchApi<OutcomeType[], "GET">(
    request,
    "/outcome/",
    "GET",
    "mendapatkan data Pemasukan"
  );

  return res;
}

export default function OutcomePage() {
  const loaderData = useLoaderData<typeof loader>();
  const actionRes = useActionData<typeof action>();

  return (
    <TransactionPageContainer
      title="Pengeluaran"
      loaderData={loaderData}
      actionRes={actionRes}
      transactionColumns={outcomeColumns}
    />
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const code = formData.get("code");

  return await fetchApi(
    request,
    `/outcome/${code}`,
    "DELETE",
    "menghapus data Pengeluaran"
  );
}
