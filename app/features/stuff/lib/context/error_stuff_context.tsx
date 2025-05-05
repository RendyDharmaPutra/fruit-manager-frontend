import { createValidationErrorContext } from "~/core/lib/context/validation_error_context";

export const {
  ValidationErrorProvider: ErrorStuffProvider,
  useValidationError: useErrorStuff,
} = createValidationErrorContext<StuffValidationType>();
