import { useTransactionValidation } from "../../lib/context/transaction_validation_context";
import { updateValidationError } from "~/core/lib/hooks/update_validation_error";
import { IncomeFormDialog } from "../dialog/income_form_dialog";
import { AddIncomeDetails } from "./add_income_details";
import { AddIncomeInfo } from "./add_income_info";

type AddIncomePageContentProps<T> = {
  actionRes?: T;
  data: { fuel: StuffType[]; fruit: StuffType[] };
};

export const AddIncomePageContent = <T extends RawResponseType>(
  props: AddIncomePageContentProps<T>
) => {
  const { setValidationError } = useTransactionValidation();

  updateValidationError(setValidationError, props.actionRes);

  return (
    <>
      <AddIncomeInfo fuel={props.data.fuel} />
      <AddIncomeDetails />
      <IncomeFormDialog data={props.data.fruit} />
    </>
  );
};
