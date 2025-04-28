import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/core/components/ui/dropdown-menu";
import { Button } from "../../ui/button";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useEditDialog } from "~/core/lib/context/dialog_context/edit_dialog_context";
import { useDeleteDialog } from "~/core/lib/context/dialog_context/delete_dialog_context";

type TableActionProps<T> = {
  data: T;
  setSelectedItem: (item: T | null) => void;
};

export const TableAction = <T,>(props: TableActionProps<T>) => {
  const { setOpen: setOpenEdit } = useEditDialog();
  const { setOpen: setOpenDelete } = useDeleteDialog();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Buka menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Aksi</DropdownMenuLabel>

        <DropdownMenuItem
          onClick={() => {
            props.setSelectedItem(props.data);
            setOpenEdit(true);
          }}
        >
          <Pencil />
          Ubah
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            props.setSelectedItem(props.data);
            setOpenDelete(true);
          }}
          className="text-danger"
        >
          <Trash />
          Hapus
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
