import { createSelectedItemContext } from "~/core/lib/context/selected_item_context";

export const {
  SelectedItemProvider: SelectedTransactionProvider,
  useSelectedItem: useSelectedTransaction,
} = createSelectedItemContext<string>();
