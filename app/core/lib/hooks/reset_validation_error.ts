import { useEffect } from "react";

export const resetValidationError = <T>(
  open: boolean,
  validationError: T | null,
  setValidationError: React.Dispatch<React.SetStateAction<T | null>>
) => {
  useEffect(() => {
    open && validationError && setValidationError(null);
  }, [open]);
};
