import { AddTransactionDetails } from "../add_transaction/add_transaction_details";
import { AddOutcomeDetailCard } from "./add_outcome_detail_card";

type AddOutcomeDetailsProps = {};

export const AddOutcomeDetails = (props: AddOutcomeDetailsProps) => {
  return (
    <AddTransactionDetails title="Pengeluaran" subtitle="Pupuk">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full ">
        <AddOutcomeDetailCard />
        <AddOutcomeDetailCard />
        <AddOutcomeDetailCard />
        <AddOutcomeDetailCard />
        <AddOutcomeDetailCard />
        <AddOutcomeDetailCard />
        <AddOutcomeDetailCard />
        <AddOutcomeDetailCard />
        <AddOutcomeDetailCard />
      </section>
    </AddTransactionDetails>
  );
};
