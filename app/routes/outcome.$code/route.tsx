import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PageContainer } from "~/core/components/layout/page_layout/page_container";
import { fetchApi } from "~/core/utils/fetch_api";
import { TransactionDetailPageContent } from "~/features/transaction/components/transaction_detail_page_content";
import { outcomeDetailColumns } from "~/features/transaction/lib/columns/outcome_detail_columns";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const res = await fetchApi<OutcomeDetailType, "GET">(
    request,
    `/outcome/${params.code}`,
    "GET",
    "mendapatkan data Pengeluaran"
  );

  return res;
}

export default function OutcomeDetail() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <PageContainer loaderData={loaderData} title="Detail Pengeluaran">
      {(successData) => (
        <TransactionDetailPageContent
          columns={outcomeDetailColumns}
          data={successData.data}
        />
      )}
    </PageContainer>
  );
}
