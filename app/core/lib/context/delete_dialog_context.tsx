import { createFormDialogContext } from "./factory_dialog_context";

export const {
  DialogProvider: DeleteDialogProvider,
  useFormDialog: useDeleteDialog,
} = createFormDialogContext();
