export const isFailedResponse = <TError>(
  res: RawResponseType
): res is FailedResponseType<TError> => res.success === false;

export const isSuccessResponse = <TData>(
  res: RawResponseType
): res is SuccessResponseType<TData> => res.success === true;
