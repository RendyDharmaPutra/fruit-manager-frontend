import { SelectField } from "~/core/components/form/select_field";
import { TransactionFormDialog } from "./transaction_form_dialog";
import { TextBox } from "~/core/components/form/text_box";
import { useState } from "react";
import { useOutcomeDetail } from "../../lib/context/outcome_detail_context";
import { useTransactionFormDialog } from "../../lib/hooks/useTransactionFormDialog";

type OutcomeFormDialogProps = {
  data: {
    fruit: StuffType[];
    fertilizer: StuffType[];
  };
};

export const OutcomeFormDialog = (props: OutcomeFormDialogProps) => {
  const { count, setCount, setSelectedFertilizer, handleSubmit } =
    useOutcomeFormDialog(props.data.fertilizer);

  return (
    <TransactionFormDialog
      title="Pengeluaran"
      fruit={props.data.fruit}
      handleSubmit={handleSubmit}
    >
      <SelectField
        id="fertilizer"
        title="Pupuk"
        data={props.data.fertilizer}
        onChange={setSelectedFertilizer}
      />
      <TextBox
        id="quantity"
        label={`Kuantitas`}
        type="number"
        defaultValue={count}
        onChange={setCount}
      />
    </TransactionFormDialog>
  );
};

const useOutcomeFormDialog = (fertilizerData: StuffType[]) => {
  const [count, setCount] = useState(1);
  const [selectedFertilizer, setSelectedFertilizer] = useState("");
  const { selectedDetail, setSelectedDetail, setTotalPrice } =
    useOutcomeDetail();

  const resetState = () => {
    setCount(1);
    setSelectedFertilizer("");
  };

  const { handleSubmit } = useTransactionFormDialog(
    { count, selectedFertilizer },
    {
      getKey: (d) => `${d.fertilizer.id}-${d.fruit.id}`,
      createDetail: (fruit, state) => {
        const fertilizer = fertilizerData.find(
          (f) => f.id === Number(state.selectedFertilizer)
        );
        if (!fertilizer || state.count < 1) throw new Error("Invalid input");

        return {
          fruit,
          fertilizer,
          count: state.count,
          price: fertilizer.price * state.count,
        };
      },
      updateDetail: (existing, incoming) => ({
        ...incoming,
        count: existing.count + incoming.count,
        price: existing.price + incoming.price,
      }),
      getPrice: (detail) => detail.price,
      resetState,
      setTotalPrice,
      selectedDetail,
      setSelectedDetail,
    }
  );

  return { count, setCount, setSelectedFertilizer, handleSubmit };
};
