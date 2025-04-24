// factory_selected_item_context.ts
import { createContext, useContext, useState } from "react";

export function createSelectedItemContext<T = any>() {
  const Context = createContext<{
    selectedItem: T | null;
    setSelectedItem: (item: T | null) => void;
  } | null>(null);

  function SelectedItemProvider({ children }: { children: React.ReactNode }) {
    const [selectedItem, setSelectedItem] = useState<T | null>(null);

    return (
      <Context.Provider value={{ selectedItem, setSelectedItem }}>
        {children}
      </Context.Provider>
    );
  }

  const useSelectedItem = () => {
    const ctx = useContext(Context);
    if (!ctx) throw new Error("useSelectedItem must be inside its Provider");
    return ctx;
  };

  return { SelectedItemProvider, useSelectedItem };
}
