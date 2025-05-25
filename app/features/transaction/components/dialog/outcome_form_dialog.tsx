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
  const { setCount, setSelectedFertilizer, handleSubmit } =
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
        onChange={setCount}
      />
    </TransactionFormDialog>
  );
};

const useOutcomeFormDialog = (fertilizerData: StuffType[]) => {
  const [selectedFertilizer, setSelectedFertilizer] = useState("");
  const [count, setCount] = useState(0);

  const { selectedDetail, setSelectedDetail } = useOutcomeDetail();

  const handleSubmit = (fruit: StuffType) => {
    const fertilizer = fertilizerData.find(
      (fertilizer) => fertilizer.id == Number(selectedFertilizer)
    );

    if (!fertilizer) return;

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
      detail = {
        ...detail,
        count: detail.count + existedDetail.count,
        price: detail.price + existedDetail.price,
      };

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
    }
  };

  return { setCount, setSelectedFertilizer, handleSubmit };
};
