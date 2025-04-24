import { StuffForm } from "~/core/components/form/stuff_form";
import { useAddDialog } from "~/core/lib/context/add_dialog_context";
import { useEditDialog } from "~/core/lib/context/edit_dialog_context";
import { useDeleteDialog } from "~/core/lib/context/delete_dialog_context";
import { DeleteDialog } from "./delete_dialog";
import { useSelectedStuff } from "~/core/lib/context/selected_stuff_context";

type StuffDialogWrapperProps = {
  title: string;
};

export const StuffDialogWrapper: React.FC<StuffDialogWrapperProps> = (
  props
) => {
  const { open: openAdd, setOpen: setOpenAdd } = useAddDialog();
  const { open: openEdit, setOpen: setOpenEdit } = useEditDialog();
  const { open: openDelete, setOpen: setOpenDelete } = useDeleteDialog();

  const { selectedItem } = useSelectedStuff();

  return (
    <>
      <StuffForm
        title="Tambah"
        item={props.title}
        type="create"
        open={openAdd}
        setOpen={setOpenAdd}
      />
      <StuffForm
        title="Ubah"
        item={props.title}
        type="update"
        open={openEdit}
        setOpen={setOpenEdit}
        data={selectedItem}
      />
      <DeleteDialog
        title={props.title}
        open={openDelete}
        setOpen={setOpenDelete}
        id={selectedItem?.id!}
      />
    </>
  );
};
