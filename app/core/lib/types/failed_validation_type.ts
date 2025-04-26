type FailedValidationType = {
  message: string;
  validationError: FieldError[];
};

type FieldError = {
  field: string;
  messages: string[];
};
