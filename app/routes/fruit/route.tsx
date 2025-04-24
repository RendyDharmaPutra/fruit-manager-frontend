import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { ContentTable } from "~/core/components/container/content_table/content_table";
import { PageContainer } from "~/core/components/container/page_container";
import { StuffDialogWrapper } from "~/core/components/dialog/stuff_dialog_wrapper";
import { fruitColumns } from "~/features/fruit/lib/column";
import { addFruit } from "~/features/fruit/lib/utils/add_fruit";
import { deleteFruit } from "~/features/fruit/lib/utils/delete_fruit";
import { getFruits } from "~/features/fruit/lib/utils/get_fruits";
import { updateFruitAction } from "~/features/fruit/lib/utils/update_fruit";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await getFruits();

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
  const intent = formData.get("intent");

  switch (intent) {
    case "create":
      const createFruit = {
        name: String(formData.get("name")),
        price: Number(formData.get("price")),
      };

      return await addFruit(createFruit);

    case "update":
      const updateId = Number(formData.get("id"));

      const updateFruit = {
        name: String(formData.get("name")),
        price: Number(formData.get("price")),
      };

      return await updateFruitAction(updateId, updateFruit);

    case "delete":
      const deleteId = Number(formData.get("id"));

      return await deleteFruit(deleteId);

    default:
      return {
        success: false,
        message: "Terjadi Kesalahan saat aksi",
        error: "Terjadi Kesalahan tidak diketahui",
      };
  }
}
