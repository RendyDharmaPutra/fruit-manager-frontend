import { PageContainer } from "~/core/components/layout/page_layout/page_container";
import { SelectedStuffProvider } from "../lib/context/selected_stuff_context";
import { useErrorStuff } from "../lib/context/error_stuff_context";
import { updateValidationError } from "~/core/lib/hooks/update_validation_error";
import { AddDialogProvider } from "~/core/lib/context/dialog_context/add_dialog_context";
import { EditDialogProvider } from "~/core/lib/context/dialog_context/edit_dialog_context";

type StuffPageContainerProps<R> = {
  title: "Buah" | "Pupuk" | "Bensin";
  loaderData: SuccessResponseType<StuffType[]> | FailedResponseType<string>;
  actionRes?: R;
  children: (data: SuccessResponseType<StuffType[]>) => React.ReactNode;
};

export const StuffPageContainer = <R extends RawResponseType>(
  props: StuffPageContainerProps<R>
) => {
  const { setValidationError } = useErrorStuff();

  updateValidationError(setValidationError, props.actionRes);

  return (
    <SelectedStuffProvider>
      <AddDialogProvider>
        <EditDialogProvider>
          <PageContainer
            title={`Daftar ${props.title}`}
            loaderData={props.loaderData}
          >
            {(successData) => props.children(successData)}
          </PageContainer>
        </EditDialogProvider>
      </AddDialogProvider>
    </SelectedStuffProvider>
  );
};
