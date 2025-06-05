import { useCallback, useState } from "react";
import { useIncomeDetail } from "../../lib/context/income_detail_context";
import { AddTransactionInfo } from "../add_transaction/add_transaction_info";
import { CustomSwitch } from "~/core/components/form/switch";
import { IncomeDistributionInfo } from "./income_distribution_info";

type IncomeInfoProps = {
  fuel: StuffType[];
};

export const AddIncomeInfo = (props: IncomeInfoProps) => {
  const [distribution, setDistribution] = useState(false);

  const { selectedDetail, totalPrice } = useIncomeDetail();

  const incomeDetailCallback = useCallback(
    <TDetail extends (typeof selectedDetail)[number]>(detail: TDetail) => {
      return {
        fruitId: detail.fruit.id!,
        weight: detail.weight,
        price: detail.price,
      };
    },
    []
  );

  return (
    <AddTransactionInfo
      title="Pemasukan"
      totalPrice={totalPrice}
      data={selectedDetail}
      transactionDetailCallback={incomeDetailCallback}
    >
      <section className="-mt-4 flex flex-col gap-4 w-full ">
        <CustomSwitch
          name="distribution"
          label="Distribusi"
          value={distribution}
          setValue={setDistribution}
        />
        <input
          type="hidden"
          name="distribution"
          value={distribution.toString()}
        />

        {distribution && <IncomeDistributionInfo fuel={props.fuel} />}
      </section>
    </AddTransactionInfo>
  );
};
