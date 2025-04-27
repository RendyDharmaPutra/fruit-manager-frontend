import { createFormDialogContext } from "./factory_dialog_context";

export const {
  DialogProvider: EditDialogProvider,
  useFormDialog: useEditDialog,
} = createFormDialogContext();
