import { CustomAlertDialog } from "./custom_alert_dialog";

type DeleteDialogProps = {
  id: number | string;
  name?: string;
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
  return (
    <CustomAlertDialog
      actionName="Hapus"
      description={` ${props.title} ini akan dihapus secara permanen.`}
      method="DELETE"
      open={props.open}
      setOpen={props.setOpen}
    >
      <input type="hidden" name="intent" value="delete" />
      <input type="hidden" name={props.name ?? "id"} value={props.id} />
    </CustomAlertDialog>
  );
};
