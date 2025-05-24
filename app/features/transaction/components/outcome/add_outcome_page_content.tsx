import { AddTransactionInfo } from "../add_transaction/add_transaction_info";
import { AddOutcomeDetails } from "./add_outcome_details";
import { OutcomeFormDialog } from "../dialog/outcome_form_dialog";

type AddOutcomePageContentProps = {
  data: {
    fruit: StuffType[];
    fertilizer: StuffType[];
  };
};

export const AddOutcomePageContent = (props: AddOutcomePageContentProps) => {
  return (
    <>
      <AddTransactionInfo title="Pengeluaran" />
      <AddOutcomeDetails />
      <OutcomeFormDialog data={props.data} />
    </>
  );
};
