import { createValidationErrorContext } from "~/core/lib/context/validation_error_context";

export const {
  ValidationErrorProvider: TransactionValidationProvider,
  useValidationError: useTransactionValidation,
} = createValidationErrorContext<TransactionValidationType>();
