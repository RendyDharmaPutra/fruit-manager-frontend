import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/core/components/ui/dropdown-menu";
import { Button } from "../../ui/button";
import { MoreHorizontal, Trash } from "lucide-react";
import { useDeleteDialog } from "~/core/lib/context/dialog_context/delete_dialog_context";

type TableActionProps = {
  setSelectedItem: () => void;
  children: React.ReactNode;
};

export const TableAction = (props: TableActionProps) => {
  const { setOpen } = useDeleteDialog();

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
        {props.children}

        <DropdownMenuItem
          onClick={() => {
            props.setSelectedItem();
            setOpen(true);
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
