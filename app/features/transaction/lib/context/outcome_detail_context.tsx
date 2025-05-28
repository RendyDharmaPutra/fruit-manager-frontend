import { createTransactionDetailContext } from "./transaction_detail_context";

export const {
  SelectedDetailProvider: OutcomeDetailProvider,
  useSelectedDetail: useOutcomeDetail,
} = createTransactionDetailContext<DetailOfOutcomeType>();
