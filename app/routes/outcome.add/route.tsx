import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchApi } from "~/core/utils/fetch_api";
import { AddTransactionPageContainer } from "~/features/transaction/components/add_transaction/add_transaction_page_container";
import { AddOutcomePageContent } from "~/features/transaction/components/outcome/add_outcome_page_content";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetchApi<StuffType, "GET">(
    request,
    `/fruit`,
    "GET",
    "mendapatkan data Pemasukan"
  );

  return res;
}

export default function AddOutcome() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <AddTransactionPageContainer title="Pengeluaran" loaderData={loaderData}>
      {(successData) => <AddOutcomePageContent />}
    </AddTransactionPageContainer>
  );
}
