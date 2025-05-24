import { AddTransactionDetails } from "../add_transaction/add_transaction_details";
import { AddOutcomeDetailCard } from "./add_outcome_detail_card";

type AddOutcomeDetailsProps = {};

export const AddOutcomeDetails = (props: AddOutcomeDetailsProps) => {
  return (
    <AddTransactionDetails
      title="Pengeluaran"
      subtitle="Pupuk"
      openFormDetail={() => {}}
    >
      <section className="flex flex-row flex-wrap gap-4 w-full ">
        <AddOutcomeDetailCard />
      </section>
    </AddTransactionDetails>
  );
};
