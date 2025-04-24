import { createSelectedItemContext } from "~/core/lib/context/selected_item_context";

export const {
  SelectedItemProvider: FruitSelectedItemProvider,
  useSelectedItem: useFruitSelectedItem,
} = createSelectedItemContext<Fruit>();
