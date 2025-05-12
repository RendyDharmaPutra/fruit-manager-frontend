import { PageContainer } from "~/core/components/container/page_container";
import { SelectedStuffProvider } from "../lib/context/selected_stuff_context";
import { useErrorStuff } from "../lib/context/error_stuff_context";
import { updateValidationError } from "~/core/lib/hooks/update_validation_error";
import { AddDialogProvider } from "~/core/lib/context/dialog_context/add_dialog_context";
import { EditDialogProvider } from "~/core/lib/context/dialog_context/edit_dialog_context";

type StuffPageContainerProps<T> = {
  actionRes?: T;
  children: React.ReactNode;
};

export const StuffPageContainer = <T extends RawResponseType>(
  props: StuffPageContainerProps<T>
) => {
  const { setValidationError } = useErrorStuff();

  updateValidationError(setValidationError, props.actionRes);

  return (
    <SelectedStuffProvider>
      <AddDialogProvider>
        <EditDialogProvider>
          <PageContainer>{props.children}</PageContainer>
        </EditDialogProvider>
      </AddDialogProvider>
    </SelectedStuffProvider>
  );
};
