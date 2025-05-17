import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { dataAction } from "~/core/utils/data_action";
import { fetchApi } from "~/core/utils/fetch_api";
import { stuffColumns } from "~/features/stuff/lib/column";
import { StuffPage } from "~/features/stuff/components/stuff_page";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetchApi<StuffType[], "GET">(
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
    <StuffPage
      title="Pupuk"
      loaderData={loaderData}
      actionRes={actionRes}
      stuffColumns={stuffColumns}
    />
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  return await dataAction(request, formData, "fertilizer", "Pupuk", () => ({
    name: String(formData.get("name")),
    price: Number(formData.get("price")),
  }));
}
