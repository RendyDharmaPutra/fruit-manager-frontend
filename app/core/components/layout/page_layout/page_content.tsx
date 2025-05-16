import { ErrorAlert } from "../../dialog/error_alert";
import { PageContentHeader } from "./page_content_header";
import { isSuccessResponse } from "~/core/lib/response_type_narrowing";

type PageContentProps<T> = {
  title: string;
  loaderData: SuccessResponseType<T> | FailedResponseType<string>;
  children: React.ReactNode;
};

export const PageContent = <T,>(props: PageContentProps<T>) => {
  const loaderData = props.loaderData;

  return (
    <section className="flex flex-col gap-3 lg:gap-4 w-full flex-1 rounded-md border">
      <PageContentHeader title={props.title} />
      {isSuccessResponse(loaderData) ? (
        props.children
      ) : (
        <div className="px-8 py-4">
          <ErrorAlert
            title={loaderData.message}
            description={loaderData.error}
          />
        </div>
      )}
    </section>
  );
};
