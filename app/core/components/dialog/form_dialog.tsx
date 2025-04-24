import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/core/components/ui/dialog";
import { SubmitBtn } from "../form/submit_btn";
import { Form } from "@remix-run/react";

type FormDialogProps = {
  title: string;
  description: string;
  open: boolean;
  setOpen: (val: boolean) => void;
  children: React.ReactNode;
};

export const FormDialog: React.FC<FormDialogProps> = (props) => {
  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>
            {props.description}. Tekan Simpan jika selesai.
          </DialogDescription>
        </DialogHeader>
        <Form method="POST">
          <div className="grid gap-4 py-4">{props.children}</div>
          <DialogFooter>
            <SubmitBtn title="Simpan" />
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
