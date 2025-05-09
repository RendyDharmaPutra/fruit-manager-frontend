import { CustomAlertDialog } from "./custom_alert_dialog";

type LogoutDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LogoutDialog = (props: LogoutDialogProps) => {
  return (
    <CustomAlertDialog
      action="/logout"
      description="Anda akan diarahkan ke Halaman Login"
      actionName="logout"
      method="POST"
      open={props.open}
      setOpen={props.setOpen}
    />
  );
};
