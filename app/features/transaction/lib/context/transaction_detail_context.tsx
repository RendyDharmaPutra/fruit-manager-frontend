import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export function createTransactionDetailContext<T>() {
  type ContextType = {
    totalPrice: number;
    setTotalPrice: Dispatch<SetStateAction<number>>;
    selectedDetail: T[];
    setSelectedDetail: Dispatch<SetStateAction<T[]>>;
  };

  const Context = createContext<ContextType | null>(null);

  function SelectedDetailProvider({ children }: { children: React.ReactNode }) {
    const [selectedDetail, setSelectedDetail] = useState<T[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

    return (
      <Context.Provider
        value={{ totalPrice, setTotalPrice, selectedDetail, setSelectedDetail }}
      >
        {children}
      </Context.Provider>
    );
  }

  const useSelectedDetail = () => {
    const ctx = useContext(Context);
    if (!ctx) throw new Error("useSelectedDetail must be inside its Provider");
    return ctx;
  };

  return { SelectedDetailProvider, useSelectedDetail };
}
