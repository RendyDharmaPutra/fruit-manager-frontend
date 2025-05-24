import { SelectField } from "~/core/components/form/select_field";
import { TransactionFormDialog } from "./transaction_form_dialog";
import { TextBox } from "~/core/components/form/text_box";

type OutcomeFormDialogProps = {
  data: {
    fruit: StuffType[];
    fertilizer: StuffType[];
  };
};

export const OutcomeFormDialog = (props: OutcomeFormDialogProps) => {
  return (
    <TransactionFormDialog title="Pengeluaran" fruit={props.data.fruit}>
      <SelectField title="Pupuk" data={props.data.fertilizer} />
      <TextBox id="quantity" label={`Kuantitas`} type="number" />
    </TransactionFormDialog>
  );
};
