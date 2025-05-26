import { SelectField } from "~/core/components/form/select_field";
import { TransactionFormDialog } from "./transaction_form_dialog";
import { TextBox } from "~/core/components/form/text_box";
import { useState } from "react";
import { useOutcomeDetail } from "../../lib/context/detail_transaction_context";

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
  const [selectedFertilizer, setSelectedFertilizer] = useState("");
  const [count, setCount] = useState(1);

  const { selectedDetail, setSelectedDetail, setTotalPrice } =
    useOutcomeDetail();

  const handleSubmit = (fruit: StuffType) => {
    const fertilizer = fertilizerData.find(
      (fertilizer) => fertilizer.id == Number(selectedFertilizer)
    );

    if (!fertilizer || count < 1) return;

    let detail = {
      fertilizer,
      fruit,
      count,
      price: fertilizer.price * count,
    };

    const existedDetail = selectedDetail.find(
      (detail) =>
        detail.fertilizer.id === fertilizer.id && detail.fruit.id === fruit.id
    );

    if (existedDetail) {
      setTotalPrice((prev) => prev - existedDetail.price);

      detail = {
        ...detail,
        count: detail.count + existedDetail.count,
        price: detail.price + existedDetail.price,
      };

      setTotalPrice((prev) => prev + detail.price);

      setSelectedDetail((prev) => [
        ...prev.filter(
          (prevDetails) =>
            !(
              prevDetails.fertilizer.id === fertilizer!.id &&
              prevDetails.fruit.id === fruit.id
            )
        ),
        detail,
      ]);
    } else {
      setSelectedDetail((prev) => [...prev, detail]);
      setTotalPrice((prev) => prev + detail.price);
    }

    setSelectedFertilizer("");
    setCount(1);
  };

  return { count, setCount, setSelectedFertilizer, handleSubmit };
};
