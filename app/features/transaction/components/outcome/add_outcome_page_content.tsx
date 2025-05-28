import { AddTransactionInfo } from "../add_transaction/add_transaction_info";
import { AddOutcomeDetails } from "./add_outcome_details";
import { OutcomeFormDialog } from "../dialog/outcome_form_dialog";
import { useOutcomeDetail } from "../../lib/context/outcome_detail_context";
import { useCallback, useMemo } from "react";
import { useTransactionValidation } from "../../lib/context/transaction_validation_context";
import { updateValidationError } from "~/core/lib/hooks/update_validation_error";

type AddOutcomePageContentProps<T> = {
  actionRes?: T;
  data: {
    fruit: StuffType[];
    fertilizer: StuffType[];
  };
};

export const AddOutcomePageContent = <T extends RawResponseType>(
  props: AddOutcomePageContentProps<T>
) => {
  const { selectedDetail, totalPrice } = useOutcomeDetail();

  const outcomeDetailCallback = useCallback(
    <TDetail extends (typeof selectedDetail)[number]>(detail: TDetail) => {
      return {
        fertilizerId: detail.fertilizer.id!,
        fruitId: detail.fruit.id!,
        count: detail.count,
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
        title="Pengeluaran"
        totalPrice={totalPrice}
        data={selectedDetail}
        transactionDetailCallback={outcomeDetailCallback}
      />
      <AddOutcomeDetails />
      <OutcomeFormDialog data={props.data} />
    </>
  );
};
