import { createSelectedItemContext } from "~/core/lib/context/selected_item_context";

export const {
  SelectedItemProvider: SelectedStuffProvider,
  useSelectedItem: useSelectedStuff,
} = createSelectedItemContext<StuffType>();
