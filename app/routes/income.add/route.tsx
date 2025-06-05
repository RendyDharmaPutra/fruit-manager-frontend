import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { fetchAi } from "~/core/utils/fetch_ai";
import { fetchApi } from "~/core/utils/fetch_api";
import { rearrangeDate } from "~/core/utils/formatter/date_format";
import { AddTransactionPageContainer } from "~/features/transaction/components/add_transaction/add_transaction_page_container";
import { AddIncomePageContent } from "~/features/transaction/components/income/add_income_page_content";
import { IncomeDetailProvider } from "~/features/transaction/lib/context/income_detail_context";
import { getTransactionDetail } from "~/features/transaction/lib/utils/get_transaction_details";

export async function loader({ request }: LoaderFunctionArgs) {
  const fruitRes = await fetchApi<StuffType[], "GET">(
    request,
    `/fruit`,
    "GET",
    "mendapatkan data Buah"
  );

  const fuelRes = await fetchApi<StuffType[], "GET">(
    request,
    `/fuel`,
    "GET",
    "mendapatkan data Bensin"
  );

  const success = fruitRes.success && fuelRes.success;

  if (!success) {
    const errorMessage = !fruitRes.success ? fruitRes.message : fuelRes.message;

    return json<FailedResponseType<string>>(
      {
        success: false,
        message: errorMessage,
        error: "Gagal memuat salah satu data",
      },
      { status: 500 }
    );
  }

  return json<SuccessResponseType<{ fruit: StuffType[]; fuel: StuffType[] }>>({
    success: true,
    message: `${fruitRes.message} dan ${fuelRes.message}`,
    data: {
      fruit: fruitRes.data.data!,
      fuel: fuelRes.data.data!,
    },
  });
}

export default function AddIncomePage() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <IncomeDetailProvider>
      <AddTransactionPageContainer
        title="Pemasukan"
        loaderData={loaderData}
        actionRes={actionData}
      >
        {(successData) => (
          <AddIncomePageContent
            actionRes={actionData}
            data={successData.data}
          />
        )}
      </AddTransactionPageContainer>
    </IncomeDetailProvider>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();

  const incomeData = {
    transactionTime: String(body.get("transactionTime")),
    distribution: body.get("distribution") === "true",
    totalPrice: Number(body.get("totalPrice")),
    details: getTransactionDetail<AddIncomeDetailType>(body),
  };

  if (incomeData.distribution) {
    const distributionData = {
      distance: Number(body.get("distance")),
      weather: Number(body.get("weather")),
      fuelPrice: Number(body.get("fuel")),
      totalWeight: incomeData.details.reduce(
        (acc, detail) => acc + detail.weight,
        0
      ),
      transactionTime: rearrangeDate(incomeData.transactionTime),
      totalPrice: incomeData.totalPrice,
    };

    const finalPrice = await fetchAi(distributionData);

    incomeData.totalPrice = finalPrice.total_harga;
  }

  const result = await fetchApi(
    request,
    `/income`,
    "POST",
    "menambah data Pemasukan",
    incomeData
  );

  if (result.success) return redirect("/income");

  return result;
}
