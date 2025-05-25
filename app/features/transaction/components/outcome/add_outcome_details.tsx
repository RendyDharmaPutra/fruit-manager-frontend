import { useOutcomeDetail } from "../../lib/context/detail_transaction_context";
import { AddTransactionDetails } from "../add_transaction/add_transaction_details";
import { AddOutcomeDetailCard } from "./add_outcome_detail_card";

type AddOutcomeDetailsProps = {};

export const AddOutcomeDetails = (props: AddOutcomeDetailsProps) => {
  const { selectedDetail } = useOutcomeDetail();

  return (
    <AddTransactionDetails title="Pengeluaran" subtitle="Pupuk">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full ">
        {selectedDetail.map((detail, idx) => (
          <AddOutcomeDetailCard key={idx} detail={detail} />
        ))}
      </section>
    </AddTransactionDetails>
  );
};
