import { useIncomeDetail } from "../../lib/context/income_detail_context";
import { AddTransactionDetails } from "../add_transaction/add_transaction_details";
import { AddIncomeDetailCard } from "./add_income_detail_card";

type AddIncomeDetailsProps = {};

export const AddIncomeDetails = (props: AddIncomeDetailsProps) => {
  const { selectedDetail } = useIncomeDetail();

  return (
    <AddTransactionDetails
      title="Pemasukan"
      subtitle="Buah"
      dataLength={selectedDetail.length}
    >
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {selectedDetail.map((detail, idx) => (
          <AddIncomeDetailCard key={idx} detail={detail} />
        ))}
      </section>
    </AddTransactionDetails>
  );
};
