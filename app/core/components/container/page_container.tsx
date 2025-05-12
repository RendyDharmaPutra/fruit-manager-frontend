import { DeleteDialogProvider } from "~/core/lib/context/dialog_context/delete_dialog_context";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer = (props: PageContainerProps) => {
  return (
    <DeleteDialogProvider>
      <div className="p-4 flex flex-col w-full h-screen ">{props.children}</div>
    </DeleteDialogProvider>
  );
};
