import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../ui/data-table";
import { ContentTableAdd } from "./content_table_add";

type ContentTableBodyProps = {
  title: string;
  data: any;
  columns: ColumnDef<any>[];
  children: React.ReactNode;
};

export const ContentTableBody: React.FC<ContentTableBodyProps> = (props) => {
  return (
    <>
      <section className="px-8 py-4 flex flex-col gap-4 w-full h-full ">
        <ContentTableAdd title="Buah" />
        <DataTable columns={props.columns} data={props.data} />
      </section>
      {props.children}
    </>
  );
};
