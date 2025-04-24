import { FormDialog } from "~/core/components/dialog/form_dialog";
import { TextBox } from "~/core/components/form/text_box";

type FruitFormProps = {
  title: string;
  type: "create" | "update";
  fruit?: Fruit | null;
  open: boolean;
  setOpen: (val: boolean) => void;
};

export const FruitForm: React.FC<FruitFormProps> = (props) => {
  return (
    <FormDialog
      description="Masukkan Data Buah disini"
      open={props.open}
      setOpen={props.setOpen}
      title={`${props.title} Buah`}
    >
      <input type="hidden" name="intent" value={props.type} />
      <input type="hidden" name="id" value={props.fruit?.id ?? ""} />
      <TextBox
        id="name"
        label="Nama Buah"
        placeholder=""
        type="text"
        defaultValue={props.fruit?.name ?? ""}
      />
      <TextBox
        id="price"
        label="Harga Buah"
        placeholder=""
        type="number"
        defaultValue={props.fruit?.price ?? ""}
      />
    </FormDialog>
  );
};
