import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/core/components/ui/dialog";
import { SubmitBtn } from "~/core/components/form/submit_btn";
import { useDeleteDialog } from "~/core/lib/context/dialog_context/delete_dialog_context";
import { SelectField } from "~/core/components/form/select_field";
import { useState } from "react";

type TransactionFormDialogProps<T> = {
  title: "Pengeluaran" | "Pemasukan";
  fruit: StuffType[];
  handleSubmit: (fruit: StuffType) => void;
  children: React.ReactNode;
};

export const TransactionFormDialog = <T,>(
  props: TransactionFormDialogProps<T>
) => {
  const [selectedFruit, setSelectedFruit] = useState("");

  const { open, setOpen } = useDeleteDialog();

  const handleSubmit = () => {
    const fruit = props.fruit.find(
      (fruit) => fruit.id === Number(selectedFruit)
    );

    props.handleSubmit(fruit!);

    setSelectedFruit("");

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Detail {props.title}</DialogTitle>
          <DialogDescription>
            Masukkan data {props.title}. Tekan Tambah jika selesai.
          </DialogDescription>
        </DialogHeader>
        <section>
          <div className="grid gap-4 py-4">
            <SelectField
              id="fruit"
              title="Buah"
              data={props.fruit}
              onChange={setSelectedFruit}
            />
            {props.children}
          </div>
          <DialogFooter>
            <SubmitBtn title="Tambah" type="button" onClick={handleSubmit} />
          </DialogFooter>
        </section>
      </DialogContent>
    </Dialog>
  );
};
