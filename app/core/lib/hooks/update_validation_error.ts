import { useEffect } from "react";
import {
  isFailedResponse,
  isFailedValidationResponse,
} from "../response_type_narrowing";

export const updateValidationError = <
  R extends Record<string, string[]>,
  T extends RawResponseType
>(
  setValidationError: React.Dispatch<React.SetStateAction<R | null>>,
  actionRes?: T
) => {
  useEffect(() => {
    if (
      actionRes && // Jika tidak undefined
      isFailedResponse(actionRes) && // Jika Merupakan Error
      isFailedValidationResponse(actionRes) // Jika Error adalah Validasi Error
    ) {
      // Parsing Bentuk data validasi error
      const newErrors = actionRes.error.validationError.reduce((acc, err) => {
        acc[err.field] = err.messages;
        return acc;
      }, {} as Record<string, string[]>);

      // Update State Validasi Error
      setValidationError({
        ...newErrors,
      } as R);
    }
  }, [actionRes]);
};
