import { ColumnDef } from "@tanstack/react-table";
import { ContentTableBody } from "./content_table_body";
import { ContentTableHeader } from "./content_table_header";
import { ErrorAlert } from "../../dialog/error_alert";

type ItemType<T> = T extends (infer U)[] ? U : T;

type ContentTableProps<T> = {
  title: string;
  loaderData: SuccessResponseType<T> | FailedResponseType<string>;
  columns: ColumnDef<ItemType<T>>[];
  children: React.ReactNode;
};

export const ContentTable = <T,>(props: ContentTableProps<T>) => {
  const loaderData = props.loaderData;

  return (
    <section className="flex flex-col gap-3 lg:gap-4 w-full flex-1 rounded-md border">
      <ContentTableHeader title={props.title} />
      {loaderData.success ? (
        <ContentTableBody
          title={props.title}
          columns={props.columns}
          data={(loaderData.data as ResponseData<T>).data}
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
