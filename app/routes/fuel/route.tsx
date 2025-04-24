import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { ContentTable } from "~/core/components/container/content_table/content_table";
import { PageContainer } from "~/core/components/container/page_container";
import { StuffDialogWrapper } from "~/core/components/dialog/stuff_dialog_wrapper";

import { fuelColumns } from "~/features/fuel/lib/column";
import { addFuel } from "~/features/fuel/lib/utils/add_fuel";
import { deleteFuel } from "~/features/fuel/lib/utils/delete_fuel";
import { getFuels } from "~/features/fuel/lib/utils/get_fuels";
import { updateFuelAction } from "~/features/fuel/lib/utils/update_fuel";

export async function loader() {
  const res = await getFuels();

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
  const intent = formData.get("intent");

  switch (intent) {
    case "create":
      const createFuel = {
        name: String(formData.get("name")),
        price: Number(formData.get("price")),
      };

      return await addFuel(createFuel);

    case "update":
      const updateId = Number(formData.get("id"));

      const updateFruit = {
        name: String(formData.get("name")),
        price: Number(formData.get("price")),
      };

      return await updateFuelAction(updateId, updateFruit);

    case "delete":
      const deleteId = Number(formData.get("id"));

      return await deleteFuel(deleteId);

    default:
      return {
        success: false,
        message: "Terjadi Kesalahan saat aksi",
        error: "Terjadi Kesalahan tidak diketahui",
      };
  }
}
