import { createTransactionDetailContext } from "./transaction_detail_context";

export const {
  SelectedDetailProvider: IncomeDetailProvider,
  useSelectedDetail: useIncomeDetail,
} = createTransactionDetailContext<DetailOfIncomeType>();
