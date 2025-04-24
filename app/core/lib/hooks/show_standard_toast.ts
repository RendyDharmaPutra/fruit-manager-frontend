import { useEffect } from "react";
import { toast } from "~/core/lib/hooks/use-toast";
import {
  isFailedResponse,
  isSuccessResponse,
} from "~/core/lib/response_type_narrowing";

export const showStandardToast = <T extends RawResponseType>(actionRes: T) => {
  useEffect(() => {
    if (!actionRes) return;

    if (isSuccessResponse(actionRes)) {
      toast({
        title: "Berhasil",
        description: actionRes.message,
      });
    } else if (isFailedResponse(actionRes)) {
      toast({
        variant: "destructive",
        title: actionRes.message,
        description: (
          actionRes.error as { message: string; validationError: any[] }
        ).message,
      });
    }
  }, [actionRes]);
};
