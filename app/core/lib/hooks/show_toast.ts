import { useEffect, useState } from "react";
import { useAddDialog } from "~/core/lib/context/dialog_context/add_dialog_context";
import { useEditDialog } from "~/core/lib/context/dialog_context/edit_dialog_context";
import { toast } from "~/core/lib/hooks/use-toast";
import {
  isFailedResponse,
  isSuccessResponse,
} from "~/core/lib/response_type_narrowing";

export const showToast = <T extends RawResponseType>(actionRes: T) => {
  const [shouldToast, setShouldToast] = useState<"success" | "error" | null>(
    null
  );
  const { setOpen: setOpenAdd } = useAddDialog();
  const { setOpen: setOpenEdit } = useEditDialog();

  useEffect(() => {
    if (!actionRes) return;

    if (isSuccessResponse(actionRes)) {
      setShouldToast("success");
      setOpenAdd(false);
      setOpenEdit(false);
    } else if (isFailedResponse(actionRes)) {
      setShouldToast("error");
    }
  }, [actionRes]);

  // toast setelah render
  useEffect(() => {
    shouldToast === "success" &&
      isSuccessResponse(actionRes) &&
      toast({
        title: "Berhasil",
        description: actionRes.message,
      });

    shouldToast === "error" &&
      isFailedResponse(actionRes) &&
      toast({
        variant: "destructive",
        title: actionRes.message,
        description: String(actionRes.error),
      });

    // reset agar tidak retrigger
    if (shouldToast) {
      setShouldToast(null);
    }
  }, [shouldToast]);
};
