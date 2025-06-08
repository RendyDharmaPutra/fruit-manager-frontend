import { toast } from "~/core/lib/hooks/use-toast";
import {
  isFailedResponse,
  isFailedValidationResponse,
  isSuccessResponse,
} from "~/core/lib/response_type_narrowing";

export const showStandardToast = (actionRes: RawResponseType) => {
  if (!actionRes) return;

  if (isSuccessResponse(actionRes)) {
    toast({
      title: "Berhasil",
      description: actionRes.message,
    });
  } else if (isFailedResponse(actionRes)) {
    const error = (
      isFailedValidationResponse(actionRes)
        ? actionRes.error.message
        : actionRes.error
    ) as string;

    toast({
      variant: "destructive",
      title: actionRes.message,
      description: error,
    });
  }
};
