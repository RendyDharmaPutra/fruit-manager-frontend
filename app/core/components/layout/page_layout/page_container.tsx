import { DeleteDialogProvider } from "~/core/lib/context/dialog_context/delete_dialog_context";
import { PageContent } from "./page_content";

type PageContainerProps<T> = {
  title: string;
  loaderData: SuccessResponseType<T> | FailedResponseType<string>;
  children: React.ReactNode;
};

export const PageContainer = <T,>(props: PageContainerProps<T>) => {
  return (
    <DeleteDialogProvider>
      <div className="p-4 flex flex-col w-full h-screen ">
        <PageContent title={props.title} loaderData={props.loaderData}>
          {props.children}
        </PageContent>
      </div>
    </DeleteDialogProvider>
  );
};
