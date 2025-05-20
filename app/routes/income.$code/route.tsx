import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PageContainer } from "~/core/components/layout/page_layout/page_container";
import { fetchApi } from "~/core/utils/fetch_api";
import { TransactionDetailPageContent } from "~/features/transaction/components/transaction_detail_page_content";
import { IncomeDistribution } from "~/features/transaction/components/income/income_distribution";
import { incomeDetailColumns } from "~/features/transaction/lib/columns/income_detail_columns";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const res = await fetchApi<IncomeDetailType, "GET">(
    request,
    `/income/${params.code}`,
    "GET",
    "mendapatkan data Pemasukan"
  );

  return res;
}

export default function IncomeDetail() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <PageContainer loaderData={loaderData} title="Detail Pemasukan">
      {(successData) => (
        <TransactionDetailPageContent
          columns={incomeDetailColumns}
          data={successData.data}
        >
          <IncomeDistribution income={successData.data} />
        </TransactionDetailPageContent>
      )}
    </PageContainer>
  );
}
