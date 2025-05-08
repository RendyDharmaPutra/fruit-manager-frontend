import { createValidationErrorContext } from "~/core/lib/context/validation_error_context";

export const {
  ValidationErrorProvider: LoginValidateProvider,
  useValidationError: useLoginValidate,
} = createValidationErrorContext<LoginValidationType>();
