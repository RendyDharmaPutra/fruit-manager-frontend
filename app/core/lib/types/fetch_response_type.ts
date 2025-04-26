type FetchResponseType<
  T,
  Method extends RequestInit["method"]
> = Method extends "GET"
  ? SuccessResponseType<T[]> | FailedResponseType<string>
  : Method extends "POST" | "PUT"
  ?
      | SuccessResponseType<null>
      | FailedResponseType<string | FailedValidationType>
  : Method extends "DELETE"
  ? SuccessResponseType<null> | FailedResponseType<string>
  : FailedResponseType<string>;
