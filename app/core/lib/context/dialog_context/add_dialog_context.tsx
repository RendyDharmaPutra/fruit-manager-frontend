import { createFormDialogContext } from "./factory_dialog_context";

export const {
  DialogProvider: AddDialogProvider,
  useFormDialog: useAddDialog,
} = createFormDialogContext();
