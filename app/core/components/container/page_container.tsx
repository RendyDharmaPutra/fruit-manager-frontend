import { AddDialogProvider } from "~/core/lib/context/add_dialog_context";
import { EditDialogProvider } from "~/core/lib/context/edit_dialog_context";
import { DeleteDialogProvider } from "~/core/lib/context/delete_dialog_context";
import { SelectedStuffProvider } from "~/core/lib/context/selected_stuff_context";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer: React.FC<PageContainerProps> = (props) => {
  return (
    <SelectedStuffProvider>
      <AddDialogProvider>
        <EditDialogProvider>
          <DeleteDialogProvider>
            <div className="p-4 flex flex-col w-full h-screen ">
              {props.children}
            </div>
          </DeleteDialogProvider>
        </EditDialogProvider>
      </AddDialogProvider>
    </SelectedStuffProvider>
  );
};
