import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PageContainer } from "~/core/components/layout/page_layout/page_container";
import { fetchApi } from "~/core/utils/fetch_api";
import { IncomeDetailPageContent } from "~/features/income/components/income_detail_page_content";

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

  console.log(loaderData);

  return (
    <PageContainer loaderData={loaderData} title="Rincian Pemasukan">
      <IncomeDetailPageContent
        IncomeDetail={
          (loaderData as SuccessResponseType<IncomeDetailType>).data
        }
      />
    </PageContainer>
  );
}
