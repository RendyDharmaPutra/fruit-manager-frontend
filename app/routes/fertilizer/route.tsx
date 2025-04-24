import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { ContentTable } from "~/core/components/container/content_table/content_table";
import { PageContainer } from "~/core/components/container/page_container";
import { StuffDialogWrapper } from "~/core/components/dialog/stuff_dialog_wrapper";
import { fertilizerColumns } from "~/features/fertilizer/lib/column";
import { addFertilizer } from "~/features/fertilizer/lib/utils/add_fertilizer";
import { deleteFertilizer } from "~/features/fertilizer/lib/utils/delete_fertilizer";
import { getFertilizers } from "~/features/fertilizer/lib/utils/get_fertilizzer";
import { updateFertilizerAction } from "~/features/fertilizer/lib/utils/update_fertilizer";


export async function loader() {
  const res = await getFertilizers();

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
  const intent = formData.get("intent");

  switch (intent) {
    case "create":
      const createFuel = {
        name: String(formData.get("name")),
        price: Number(formData.get("price")),
      };

      return await addFertilizer(createFuel);

    case "update":
      const updateId = Number(formData.get("id"));

      const updateFruit = {
        name: String(formData.get("name")),
        price: Number(formData.get("price")),
      };

      return await updateFertilizerAction(updateId, updateFruit);

    case "delete":
      const deleteId = Number(formData.get("id"));

      return await deleteFertilizer(deleteId);

    default:
      return {
        success: false,
        message: "Terjadi Kesalahan saat aksi",
        error: "Terjadi Kesalahan tidak diketahui",
      };
  }
}
