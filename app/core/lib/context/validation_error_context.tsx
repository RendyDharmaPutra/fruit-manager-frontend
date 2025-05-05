// factory_selected_item_context.ts
import { createContext, useContext, useState } from "react";

export function createValidationErrorContext<T>() {
  const Context = createContext<{
    validationError: T | null;
    setValidationError: React.Dispatch<React.SetStateAction<T | null>>;
  } | null>(null);

  function ValidationErrorProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [validationError, setValidationError] = useState<T | null>(null);

    return (
      <Context.Provider value={{ validationError, setValidationError }}>
        {children}
      </Context.Provider>
    );
  }

  const useValidationError = () => {
    const ctx = useContext(Context);
    if (!ctx) throw new Error("useValidationError must be inside its Provider");
    return ctx;
  };

  return { ValidationErrorProvider, useValidationError };
}
