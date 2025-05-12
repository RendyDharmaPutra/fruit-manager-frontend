import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { TransactionPageContainer } from "~/core/components/transaction/transaction_page_container";
import { fetchApi } from "~/core/utils/fetch_api";
import { incomeColumns } from "~/features/income/lib/columns";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetchApi<IncomeType, "GET">(
    request,
    "/income/",
    "GET",
    "mendapatkan data Pemasukan"
  );

  return res;
}

export default function IncomePage() {
  const loaderData = useLoaderData<typeof loader>();
  const actionRes = useActionData<typeof action>();

  return (
    <TransactionPageContainer
      title="Pemasukan"
      loaderData={loaderData}
      actionRes={actionRes}
      transactionColumns={incomeColumns}
    />
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const code = formData.get("code");

  console.log(code);

  return {
    success: false,
    message: "Terjadi Kesalahan saat aksi",
    error: "Terjadi Kesalahan tidak diketahui",
  } as FailedResponseType<string>;
}
