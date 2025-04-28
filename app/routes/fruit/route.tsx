import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { ContentTable } from "~/core/components/container/content_table/content_table";
import { StuffDialogWrapper } from "~/features/stuff/components/stuff_dialog_wrapper";
import { dataAction } from "~/core/utils/data_action";
import { fetchApi } from "~/core/utils/fetch_api";
import { stuffColumns } from "~/features/stuff/lib/column";
import { StuffPageContainer } from "~/features/stuff/components/stuff_page_container";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetchApi<StuffType, "GET">(
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
    <StuffPageContainer>
      <ContentTable
        title="Buah"
        actionRes={actionRes}
        columns={stuffColumns}
        loaderData={loaderData}
      >
        <StuffDialogWrapper title="Buah" />
      </ContentTable>
    </StuffPageContainer>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  return await dataAction(request, formData, "fruit", "Buah", () => ({
    name: String(formData.get("name")),
    price: Number(formData.get("price")),
  }));
}
