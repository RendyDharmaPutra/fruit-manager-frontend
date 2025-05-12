import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../ui/data-table";

type ContentTableBodyProps<T> = {
  title: string;
  data: any;
  columns: ColumnDef<T>[];
  children: React.ReactNode;
};

export const ContentTableBody = <T,>(props: ContentTableBodyProps<T>) => {
  return (
    <>
      <section className="px-8 py-4 flex flex-col gap-4 w-full h-full ">
        {props.children}
        <DataTable columns={props.columns} data={props.data} />
      </section>
    </>
  );
};
