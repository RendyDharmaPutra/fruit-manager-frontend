import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { ContentTable } from "~/core/components/container/content_table/content_table";
import { PageContainer } from "~/core/components/container/page_container";
import { StuffDialogWrapper } from "~/core/components/dialog/stuff_dialog_wrapper";
import { dataAction } from "~/core/utils/data_action";
import { fetchApi } from "~/core/utils/fetch_api";
import { fruitColumns } from "~/features/fruit/lib/column";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetchApi<Fruit, "GET">(
    request,
    "/fruit/",
    "GET",
    "mendapatkan data Buah"
  );

  return res;
}

export default function FruitPage() {
  const loaderData = useLoaderData<typeof loader>();
  const actionRes = useActionData<typeof action>();

  return (
    <PageContainer>
      <ContentTable
        title="Buah"
        actionRes={actionRes}
        columns={fruitColumns}
        loaderData={loaderData}
      >
        <StuffDialogWrapper title="Buah" />
      </ContentTable>
    </PageContainer>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  return await dataAction(request, formData, "fruit", "Buah", () => ({
    name: String(formData.get("name")),
    price: Number(formData.get("price")),
  }));
}
