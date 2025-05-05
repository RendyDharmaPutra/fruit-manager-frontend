import { createContext, useContext, useState } from "react";

export function createFormDialogContext() {
  const Context = createContext<{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  } | null>(null);

  const DialogProvider = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);

    return (
      <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>
    );
  };

  const useFormDialog = () => {
    const context = useContext(Context);
    if (!context) throw new Error("useDialog must be used within its Provider");
    return context;
  };

  return { DialogProvider, useFormDialog };
}
