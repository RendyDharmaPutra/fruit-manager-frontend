import { TransactionFormDialog } from "./transaction_form_dialog";
import { TextBox } from "~/core/components/form/text_box";
import { useState } from "react";
import { useIncomeDetail } from "../../lib/context/income_detail_context";
import { useTransactionFormDialog } from "../../lib/hooks/useTransactionFormDialog";

type IncomeFormDialogProps = {
  data: StuffType[];
};

export const IncomeFormDialog = (props: IncomeFormDialogProps) => {
  const { weight, setWeight, handleSubmit } = useIncomeFormDialog();

  return (
    <TransactionFormDialog
      title="Pengeluaran"
      fruit={props.data}
      handleSubmit={handleSubmit}
    >
      <TextBox
        id="weight"
        label={`Berat`}
        type="number"
        defaultValue={weight}
        onChange={setWeight}
      />
    </TransactionFormDialog>
  );
};

const useIncomeFormDialog = () => {
  const [weight, setWeight] = useState(1);
  const { selectedDetail, setSelectedDetail, setTotalPrice } =
    useIncomeDetail();

  const resetState = () => setWeight(1);

  const { handleSubmit } = useTransactionFormDialog(weight, {
    getKey: (d) => d.fruit.id!.toString(),
    createDetail: (fruit, weight) => ({
      fruit,
      weight,
      price: fruit.price * weight,
    }),
    updateDetail: (existing, incoming) => ({
      ...incoming,
      weight: existing.weight + incoming.weight,
      price: existing.price + incoming.price,
    }),
    getPrice: (detail) => detail.price,
    resetState,
    setTotalPrice,
    selectedDetail,
    setSelectedDetail,
  });

  return { weight, setWeight, handleSubmit };
};
