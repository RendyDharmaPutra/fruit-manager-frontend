import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { ContentTable } from "~/core/components/container/content_table/content_table";
import { PageContainer } from "~/core/components/container/page_container";
import { StuffDialogWrapper } from "~/core/components/dialog/stuff_dialog_wrapper";
import { dataAction } from "~/core/utils/data_action";
import { fetchApi } from "~/core/utils/fetch_api";
import { fertilizerColumns } from "~/features/fertilizer/lib/column";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetchApi<Fertilizer, "GET">(
    request,
    "/fertilizer/",
    "GET",
    "mendapatkan data Pupuk"
  );

  return res;
}

export default function FertilizerPage() {
  const loaderData = useLoaderData<typeof loader>();
  const actionRes = useActionData<typeof action>();

  return (
    <PageContainer>
      <ContentTable
        title="Pupuk"
        actionRes={actionRes}
        columns={fertilizerColumns}
        loaderData={loaderData}
      >
        <StuffDialogWrapper title="Pupuk" />
      </ContentTable>
    </PageContainer>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  return await dataAction(request, formData, "fertilizer", "Pupuk", () => ({
    name: String(formData.get("name")),
    price: Number(formData.get("price")),
  }));
}
