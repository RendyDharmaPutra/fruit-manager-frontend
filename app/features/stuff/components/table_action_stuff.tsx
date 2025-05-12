import { TableAction } from "~/core/components/container/content_table/table_action";
import { useSelectedStuff } from "../lib/context/selected_stuff_context";
import { Pencil } from "lucide-react";
import { useEditDialog } from "~/core/lib/context/dialog_context/edit_dialog_context";
import { DropdownMenuItem } from "~/core/components/ui/dropdown-menu";

type TableActionStuffProps = {
  data: StuffType;
};

export const TableActionStuff: React.FC<TableActionStuffProps> = (props) => {
  const { setSelectedItem } = useSelectedStuff();
  const { setOpen: setOpenEdit } = useEditDialog();

  return (
    <TableAction setSelectedItem={() => setSelectedItem(props.data)}>
      <DropdownMenuItem
        onClick={() => {
          setSelectedItem(props.data);
          setOpenEdit(true);
        }}
      >
        <Pencil />
        Ubah
      </DropdownMenuItem>
    </TableAction>
  );
};
