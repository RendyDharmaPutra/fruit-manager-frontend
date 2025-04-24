import { ColumnDef } from "@tanstack/react-table";
import { ContentTableBody } from "./content_table_body";
import { ContentTableHeader } from "./content_table_header";
import { ErrorAlert } from "../../dialog/error_alert";
import { showToast } from "~/core/lib/hooks/show_toast";

type ContentTableProps<T, R> = {
  title: string;
  loaderData: SuccessResponseType<T> | FailedResponseType<string>;
  actionRes: R | undefined;
  columns: ColumnDef<any>[];
  children: React.ReactNode;
};

export const ContentTable = <T, R extends RawResponseType>(
  props: ContentTableProps<T, R>
) => {
  const loaderData = props.loaderData;

  props.actionRes != undefined && showToast(props.actionRes);

  return (
    <section className="flex flex-col gap-3 lg:gap-4 w-full flex-1 rounded-md border shadow-2xl">
      <ContentTableHeader title={props.title} />
      {loaderData.success ? (
        <ContentTableBody
          title={props.title}
          columns={props.columns}
          data={(loaderData.data as ResponseData<any>).data}
        >
          {props.children}
        </ContentTableBody>
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
