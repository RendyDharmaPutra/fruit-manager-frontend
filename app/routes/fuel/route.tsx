import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { ContentTable } from "~/core/components/container/content_table/content_table";
import { PageContainer } from "~/core/components/container/page_container";
import { StuffDialogWrapper } from "~/core/components/dialog/stuff_dialog_wrapper";
import { dataAction } from "~/core/utils/data_action";
import { fetchApi } from "~/core/utils/fetch_api";
import { fuelColumns } from "~/features/fuel/lib/column";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetchApi<Fuel, "GET">(
    request,
    "/fuel/",
    "GET",
    "mendapatkan data Bensin"
  );

  return res;
}

export default function FuelPage() {
  const loaderData = useLoaderData<typeof loader>();
  const actionRes = useActionData<typeof action>();

  return (
    <PageContainer>
      <ContentTable
        title="Bensin"
        actionRes={actionRes}
        columns={fuelColumns}
        loaderData={loaderData}
      >
        <StuffDialogWrapper title="Bensin" />
      </ContentTable>
    </PageContainer>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  return await dataAction(request, formData, "fuel", "Bensin", () => ({
    name: String(formData.get("name")),
    price: Number(formData.get("price")),
  }));
}
