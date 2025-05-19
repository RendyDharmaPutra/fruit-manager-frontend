import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../ui/data-table";

type ContentTableBodyProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  children?: React.ReactNode;
};

export const ContentTableBody = <T,>(props: ContentTableBodyProps<T>) => {
  return (
    <>
      <section className="p-content flex flex-col gap-4 w-full h-full ">
        {props.children}
        <DataTable columns={props.columns} data={props.data} />
      </section>
    </>
  );
};
