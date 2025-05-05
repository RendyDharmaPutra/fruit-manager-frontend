import { AddDialogProvider } from "~/core/lib/context/dialog_context/add_dialog_context";
import { EditDialogProvider } from "~/core/lib/context/dialog_context/edit_dialog_context";
import { DeleteDialogProvider } from "~/core/lib/context/dialog_context/delete_dialog_context";
import { updateValidationError } from "~/core/lib/hooks/update_validation_error";

type PageContainerProps<T, R> = {
  actionRes?: T;
  setValidationError: React.Dispatch<React.SetStateAction<R | null>>;
  children: React.ReactNode;
};

export const PageContainer = <
  T extends RawResponseType,
  R extends Record<string, string[]>
>(
  props: PageContainerProps<T, R>
) => {
  updateValidationError(props.setValidationError, props.actionRes);

  return (
    <AddDialogProvider>
      <EditDialogProvider>
        <DeleteDialogProvider>
          <div className="p-4 flex flex-col w-full h-screen ">
            {props.children}
          </div>
        </DeleteDialogProvider>
      </EditDialogProvider>
    </AddDialogProvider>
  );
};
