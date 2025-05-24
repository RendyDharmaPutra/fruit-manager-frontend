import { AddTransactionInfo } from "../add_transaction/add_transaction_info";
import { AddOutcomeDetails } from "./add_outcome_details";

type AddOutcomePageContentProps = {};

export const AddOutcomePageContent = (props: AddOutcomePageContentProps) => {
  return (
    <>
      <AddTransactionInfo title="Pengeluaran" />
      <AddOutcomeDetails />
    </>
  );
};
