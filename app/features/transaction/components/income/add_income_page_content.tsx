import { AddTransactionInfo } from "../add_transaction/add_transaction_info";
import { useCallback } from "react";
import { useTransactionValidation } from "../../lib/context/transaction_validation_context";
import { updateValidationError } from "~/core/lib/hooks/update_validation_error";
import { useIncomeDetail } from "../../lib/context/income_detail_context";
import { IncomeFormDialog } from "../dialog/income_form_dialog";
import { AddIncomeDetails } from "./add_income_details";

type AddIncomePageContentProps<T> = {
  actionRes?: T;
  data: StuffType[];
};

export const AddIncomePageContent = <T extends RawResponseType>(
  props: AddIncomePageContentProps<T>
) => {
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

  const { setValidationError } = useTransactionValidation();

  updateValidationError(setValidationError, props.actionRes);

  return (
    <>
      <AddTransactionInfo
        title="Pemasukan"
        totalPrice={totalPrice}
        data={selectedDetail}
        transactionDetailCallback={incomeDetailCallback}
      />
      <AddIncomeDetails />
      <IncomeFormDialog data={props.data} />
    </>
  );
};
