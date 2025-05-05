export const isFailedResponse = <TError>(
  res: RawResponseType
): res is FailedResponseType<TError> => res.success === false;

export const isFailedValidationResponse = (
  res: FailedResponseType<unknown>
): res is FailedResponseType<FailedValidationType> => {
  return (
    typeof res.error === "object" &&
    res.error !== null &&
    "validationError" in res.error &&
    Array.isArray((res.error as FailedValidationType).validationError)
  );
};

export const isSuccessResponse = <TData>(
  res: RawResponseType
): res is SuccessResponseType<TData> => res.success === true;
