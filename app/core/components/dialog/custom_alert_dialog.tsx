import { Form } from "@remix-run/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/core/components/ui/alert-dialog";

type CustomAlertDialogProps = {
  method: "DELETE" | "POST";
  action?: string;
  actionName: string;
  description?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
};

export const CustomAlertDialog = (props: CustomAlertDialogProps) => {
  return (
    <AlertDialog open={props.open} onOpenChange={props.setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak dapat dibatalkan. {props.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <Form action={props.action} method={props.method}>
            {props.children}
            <AlertDialogAction
              type="submit"
              className="bg-red-600 hover:bg-red-700 w-full"
              onClick={() => {
                props.setOpen(false);
              }}
            >
              {props.actionName}
            </AlertDialogAction>
          </Form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
